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
/******/ 	__webpack_require__.p = "/public/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/theme.scss":
/*!*******************************!*\
  !*** ./assets/css/theme.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var mdbootstrap_pro_js_mdb_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbootstrap-pro/js/mdb.min.js */ "./node_modules/mdbootstrap-pro/js/mdb.min.js");
/* harmony import */ var mdbootstrap_pro_js_mdb_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbootstrap_pro_js_mdb_min_js__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__(/*! ../css/theme.scss */ "./assets/css/theme.scss");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $;

global.popper = global.Popper = popper_js__WEBPACK_IMPORTED_MODULE_0__["default"];

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); //import 'mdbootstrap-pro/css/mdb.min.css';


global.bsCustomFileInput = __webpack_require__(/*! mdbootstrap-pro/js/modules/vendor/bs-custom-file-input */ "./node_modules/mdbootstrap-pro/js/modules/vendor/bs-custom-file-input.js");

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :
  undefined;
}(this, function (exports, $, Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.3.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName$1.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.3.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread({}, Default, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread({}, $(target).data(), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.3.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread({}, Default$1, $this.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.3.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.show = function show() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display

      };

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return popperConfig;
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.3.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE)) {
        this._dialog.querySelector(Selector$5.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread({}, Default$3, $(this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

  };
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i, len);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.3.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector$6.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this._handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getOffset = function _getOffset() {
      var _this3 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this4 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
            return _this4.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
          $(_this4.element).on(eventIn, _this4.config.selector, function (event) {
            return _this4._enter(event);
          }).on(eventOut, _this4.config.selector, function (event) {
            return _this4._leave(event);
          });
        }
      });
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        if (_this4.element) {
          _this4.hide();
        }
      });

      if (this.config.selector) {
        this.config = _objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.3.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.3.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.3.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.3.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      $(this._element).trigger(Event$a.SHOW);

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this.hide();
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide(withoutTimeout) {
      var _this2 = this;

      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      $(this._element).trigger(Event$a.HIDE);

      if (withoutTimeout) {
        this._close();
      } else {
        this._timeout = setTimeout(function () {
          _this2._close();
        }, this._config.delay);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$7, $(this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this3.hide(true);
      });
    };

    _proto._close = function _close() {
      var _this4 = this;

      var complete = function complete() {
        _this4._element.classList.add(ClassName$a.HIDE);

        $(_this4._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function () {
    if (typeof $ === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })();

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bootstrap.js.map


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/mdbootstrap-pro/js/mdb.min.js":
/*!****************************************************!*\
  !*** ./node_modules/mdbootstrap-pro/js/mdb.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, __webpack_provided_window_dot_jQuery, $) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var WOW;jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,o){return jQuery.easing[jQuery.easing.def](t,e,i,n,o)},easeInQuad:function(t,e,i,n,o){return n*(e/=o)*e+i},easeOutQuad:function(t,e,i,n,o){return-n*(e/=o)*(e-2)+i},easeInOutQuad:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,o){return n*(e/=o)*e*e+i},easeOutCubic:function(t,e,i,n,o){return n*((e=e/o-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,o){return n*(e/=o)*e*e*e+i},easeOutQuart:function(t,e,i,n,o){return-n*((e=e/o-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,o){return n*(e/=o)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,o){return n*((e=e/o-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,o){return-n*Math.cos(e/o*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,o){return n*Math.sin(e/o*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,o){return-n/2*(Math.cos(Math.PI*e/o)-1)+i},easeInExpo:function(t,e,i,n,o){return 0==e?i:n*Math.pow(2,10*(e/o-1))+i},easeOutExpo:function(t,e,i,n,o){return e==o?i+n:n*(1-Math.pow(2,-10*e/o))+i},easeInOutExpo:function(t,e,i,n,o){return 0==e?i:e==o?i+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,o){return-n*(Math.sqrt(1-(e/=o)*e)-1)+i},easeOutCirc:function(t,e,i,n,o){return n*Math.sqrt(1-(e=e/o-1)*e)+i},easeInOutCirc:function(t,e,i,n,o){return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,o){var a=1.70158,r=0,s=n;if(0==e)return i;if(1==(e/=o))return i+n;if(r||(r=.3*o),s<Math.abs(n)){s=n;a=r/4}else a=r/(2*Math.PI)*Math.asin(n/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*o-a)*(2*Math.PI)/r)+i},easeOutElastic:function(t,e,i,n,o){var a=1.70158,r=0,s=n;if(0==e)return i;if(1==(e/=o))return i+n;if(r||(r=.3*o),s<Math.abs(n)){s=n;a=r/4}else a=r/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*e)*Math.sin((e*o-a)*(2*Math.PI)/r)+n+i},easeInOutElastic:function(t,e,i,n,o){var a=1.70158,r=0,s=n;if(0==e)return i;if(2==(e/=o/2))return i+n;if(r||(r=o*(.3*1.5)),s<Math.abs(n)){s=n;a=r/4}else a=r/(2*Math.PI)*Math.asin(n/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*o-a)*(2*Math.PI)/r)*-.5+i:s*Math.pow(2,-10*(e-=1))*Math.sin((e*o-a)*(2*Math.PI)/r)*.5+n+i},easeInBack:function(t,e,i,n,o,a){return null==a&&(a=1.70158),n*(e/=o)*e*((a+1)*e-a)+i},easeOutBack:function(t,e,i,n,o,a){return null==a&&(a=1.70158),n*((e=e/o-1)*e*((a+1)*e+a)+1)+i},easeInOutBack:function(t,e,i,n,o,a){return null==a&&(a=1.70158),(e/=o/2)<1?n/2*(e*e*((1+(a*=1.525))*e-a))+i:n/2*((e-=2)*e*((1+(a*=1.525))*e+a)+2)+i},easeInBounce:function(t,e,i,n,o){return n-jQuery.easing.easeOutBounce(t,o-e,0,n,o)+i},easeOutBounce:function(t,e,i,n,o){return(e/=o)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,o){return e<o/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,o)+i:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,n,o)+.5*n+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,n=i.type(t);return"function"!==n&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!__webpack_provided_window_dot_jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?o[r.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||a.call(t,e)},i.each=function(t,i,n){var o=0,a=t.length,r=e(t);if(n){if(r)for(;a>o&&!1!==i.apply(t[o],n);o++);else for(o in t)if(!1===i.apply(t[o],n))break}else if(r)for(;a>o&&!1!==i.call(t[o],o,t[o]);o++);else for(o in t)if(!1===i.call(t[o],o,t[o]))break;return t},i.data=function(t,e,o){if(void 0===o){var a=(r=t[i.expando])&&n[r];if(void 0===e)return a;if(a&&e in a)return a[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return n[r]=n[r]||{},n[r][e]=o,o}},i.removeData=function(t,e){var o=t[i.expando],a=o&&n[o];a&&i.each(e,function(t,e){delete a[e]})},i.extend=function(){var t,e,n,o,a,r,s=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===c&&(s=this,l--);c>l;l++)if(null!=(a=arguments[l]))for(o in a)t=s[o],s!==(n=a[o])&&(u&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,r=t&&i.isArray(t)?t:[]):r=t&&i.isPlainObject(t)?t:{},s[o]=i.extend(u,r,n)):void 0!==n&&(s[o]=n));return s},i.queue=function(t,n,o){if(t){n=(n||"fx")+"queue";var a=i.data(t,n);return o?(!a||i.isArray(o)?a=i.data(t,n,function(t,i){var n=i||[];return null!=t&&(e(Object(t))?function(t,e){for(var i=+e.length,n=0,o=t.length;i>n;)t[o++]=e[n++];if(i!=i)for(;void 0!==e[n];)t[o++]=e[n++];t.length=o}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}(o)):a.push(o),a):a||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var o=i.queue(n,e),a=o.shift();"inprogress"===a&&(a=o.shift()),a&&("fx"===e&&o.unshift("inprogress"),a.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),o=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(o.top+=parseFloat(t.style.borderTopWidth)||0,o.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-o.top,left:n.left-o.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var o={},a=o.hasOwnProperty,r=o.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)o["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){ true&&"object"==typeof module.exports?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(){return function(t,e,i,n){function o(t){return p.isWrapped(t)?t=[].slice.call(t):p.isNode(t)&&(t=[t]),t}function a(t){var e=u.data(t,"velocity");return null===e?n:e}function r(t,i,n,o){function a(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((a(e,i)*t+r(e,i))*t+s(e))*t}function c(t,e,i){return 3*a(e,i)*t*t+2*r(e,i)*t+s(e)}function u(e,i){for(var o=0;p>o;++o){var a=c(i,t,n);if(0===a)return i;i-=(l(i,t,n)-e)/a}return i}function d(e,i,o){var a,r,s=0;do{(a=l(r=i+(o-i)/2,t,n)-e)>0?o=r:i=r}while(Math.abs(a)>m&&++s<g);return r}function h(){k=!0,(t!=i||n!=o)&&function(){for(var e=0;v>e;++e)w[e]=l(e*y,t,n)}()}var p=4,f=.001,m=1e-7,g=10,v=11,y=1/(v-1),b="Float32Array"in e;if(4!==arguments.length)return!1;for(var x=0;4>x;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var w=b?new Float32Array(v):new Array(v),k=!1,C=function(e){return k||h(),t===i&&n===o?e:0===e?0:1===e?1:l(function(e){for(var i=0,o=1,a=v-1;o!=a&&w[o]<=e;++o)i+=y;var r=i+(e-w[--o])/(w[o+1]-w[o])*y,s=c(r,t,n);return s>=f?u(e,r):0==s?r:d(e,i,i+y)}(e),i,o)};C.getControlPoints=function(){return[{x:t,y:i},{x:n,y:o}]};var S="generateBezier("+[t,i,n,o]+")";return C.toString=function(){return S},C}function s(t,e){var i=t;return p.isString(t)?v.Easings[t]||(i=!1):i=p.isArray(t)&&1===t.length?function(t){return function(e){return Math.round(e*t)*(1/t)}}.apply(null,t):p.isArray(t)&&2===t.length?y.apply(null,t.concat([e])):!(!p.isArray(t)||4!==t.length)&&r.apply(null,t),!1===i&&(i=v.Easings[v.defaults.easing]?v.defaults.easing:g),i}function l(t){if(t){var e=(new Date).getTime(),i=v.State.calls.length;i>1e4&&(v.State.calls=function(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var o=t[e];o&&n.push(o)}return n}(v.State.calls));for(var o=0;i>o;o++)if(v.State.calls[o]){var r=v.State.calls[o],s=r[0],d=r[2],h=r[3],f=!!h,m=null;h||(h=v.State.calls[o][3]=e-16);for(var g=Math.min((e-h)/d.duration,1),y=0,x=s.length;x>y;y++){var k=s[y],C=k.element;if(a(C)){var S=!1;if(d.display!==n&&null!==d.display&&"none"!==d.display){if("flex"===d.display){u.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],function(t,e){b.setPropertyValue(C,"display",e)})}b.setPropertyValue(C,"display",d.display)}for(var M in d.visibility!==n&&"hidden"!==d.visibility&&b.setPropertyValue(C,"visibility",d.visibility),k)if("element"!==M){var T,A=k[M],I=p.isString(A.easing)?v.Easings[A.easing]:A.easing;if(1===g)T=A.endValue;else{var P=A.endValue-A.startValue;if(T=A.startValue+P*I(g,d,P),!f&&T===A.currentValue)continue}if(A.currentValue=T,"tween"===M)m=T;else{if(b.Hooks.registered[M]){var O=b.Hooks.getRoot(M),_=a(C).rootPropertyValueCache[O];_&&(A.rootPropertyValue=_)}var D=b.setPropertyValue(C,M,A.currentValue+(0===parseFloat(T)?"":A.unitType),A.rootPropertyValue,A.scrollData);b.Hooks.registered[M]&&(a(C).rootPropertyValueCache[O]=b.Normalizations.registered[O]?b.Normalizations.registered[O]("extract",null,D[1]):D[1]),"transform"===D[0]&&(S=!0)}}d.mobileHA&&a(C).transformCache.translate3d===n&&(a(C).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&b.flushTransformCache(C)}}d.display!==n&&"none"!==d.display&&(v.State.calls[o][2].display=!1),d.visibility!==n&&"hidden"!==d.visibility&&(v.State.calls[o][2].visibility=!1),d.progress&&d.progress.call(r[1],r[1],g,Math.max(0,h+d.duration-e),h,m),1===g&&c(o)}}v.State.isTicking&&w(l)}function c(t,e){if(!v.State.calls[t])return!1;for(var i=v.State.calls[t][0],o=v.State.calls[t][1],r=v.State.calls[t][2],s=v.State.calls[t][4],l=!1,c=0,d=i.length;d>c;c++){var h=i[c].element;if(e||r.loop||("none"===r.display&&b.setPropertyValue(h,"display",r.display),"hidden"===r.visibility&&b.setPropertyValue(h,"visibility",r.visibility)),!0!==r.loop&&(u.queue(h)[1]===n||!/\.velocityQueueEntryFlag/i.test(u.queue(h)[1]))&&a(h)){a(h).isAnimating=!1,a(h).rootPropertyValueCache={};var p=!1;u.each(b.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,o=a(h).transformCache[e];a(h).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(o)&&(p=!0,delete a(h).transformCache[e])}),r.mobileHA&&(p=!0,delete a(h).transformCache.translate3d),p&&b.flushTransformCache(h),b.Values.removeClass(h,"velocity-animating")}if(!e&&r.complete&&!r.loop&&c===d-1)try{r.complete.call(o,o)}catch(t){setTimeout(function(){throw t},1)}s&&!0!==r.loop&&s(o),a(h)&&!0===r.loop&&!e&&(u.each(a(h).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),v(h,"reverse",{loop:!0,delay:r.delay})),!1!==r.queue&&u.dequeue(h,r.queue)}v.State.calls[t]=!1;for(var f=0,m=v.State.calls.length;m>f;f++)if(!1!==v.State.calls[f]){l=!0;break}!1===l&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var u,d=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),h=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,n=(new Date).getTime();return i=Math.max(0,16-(n-t)),t=n+i,setTimeout(function(){e(n+i)},i)}}(),p={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},f=!1;if(t.fn&&t.fn.jquery?(u=t,f=!0):u=e.Velocity.Utilities,8>=d&&!f)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(7>=d)){var m=400,g="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:u,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:g,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){u.data(t,"velocity",{isSVG:p.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(v.State.scrollAnchor=e,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var y=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var o={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:o.v,dv:t(o)}}function i(i,n){var o={dx:i.v,dv:t(i)},a=e(i,.5*n,o),r=e(i,.5*n,a),s=e(i,n,r),l=1/6*(o.dx+2*(a.dx+r.dx)+s.dx),c=1/6*(o.dv+2*(a.dv+r.dv)+s.dv);return i.x=i.x+l*n,i.v=i.v+c*n,i}return function t(e,n,o){var a,r,s,l={x:-1,v:0,tension:null,friction:null},c=[0],u=0;for(e=parseFloat(e)||500,n=parseFloat(n)||20,o=o||null,l.tension=e,l.friction=n,(a=null!==o)?r=(u=t(e,n))/o*.016:r=.016;s=i(s||l,r),c.push(1+s.x),u+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return a?function(t){return c[t*(c.length-1)|0]}:u}}();v.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},u.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){v.Easings[e[0]]=r.apply(null,e[1])});var b=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<b.Lists.colors.length;t++){var e="color"===b.Lists.colors[t]?"0 0 0 1":"255 255 255 1";b.Hooks.templates[b.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,n,o;if(d)for(i in b.Hooks.templates){o=(n=b.Hooks.templates[i])[0].split(" ");var a=n[1].match(b.RegEx.valueSplit);"Color"===o[0]&&(o.push(o.shift()),a.push(a.shift()),b.Hooks.templates[i]=[o.join(" "),a.join(" ")])}for(i in b.Hooks.templates)for(var t in o=(n=b.Hooks.templates[i])[0].split(" ")){var r=i+o[t],s=t;b.Hooks.registered[r]=[i,s]}},getRoot:function(t){var e=b.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return b.RegEx.valueUnwrap.test(e)&&(e=e.match(b.RegEx.valueUnwrap)[1]),b.Values.isCSSNullValue(e)&&(e=b.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=b.Hooks.registered[t];if(i){var n=i[0],o=i[1];return(e=b.Hooks.cleanRootPropertyValue(n,e)).toString().match(b.RegEx.valueSplit)[o]}return e},injectValue:function(t,e,i){var n=b.Hooks.registered[t];if(n){var o,a=n[0],r=n[1];return(o=(i=b.Hooks.cleanRootPropertyValue(a,i)).toString().match(b.RegEx.valueSplit))[r]=e,o.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return b.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:n=(n=i.toString().match(b.RegEx.valueUnwrap))?n[1].replace(/,(\s+)?/g," "):i,n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var o=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=o?o[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=d)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=d||v.State.isGingerbread||(b.Lists.transformsBase=b.Lists.transformsBase.concat(b.Lists.transforms3D));for(var t=0;t<b.Lists.transformsBase.length;t++)!function(){var e=b.Lists.transformsBase[t];b.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return"transform";case"extract":return a(i)===n||a(i).transformCache[e]===n?/^scale/i.test(e)?1:0:a(i).transformCache[e].replace(/[()]/g,"");case"inject":var r=!1;switch(e.substr(0,e.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":v.State.isAndroid&&a(i).transformCache[e]===n&&1>o&&(o=1),r=!/(\d)$/i.test(o);break;case"skew":r=!/(deg|\d)$/i.test(o);break;case"rotate":r=!/(deg|\d)$/i.test(o)}return r||(a(i).transformCache[e]="("+o+")"),a(i).transformCache[e]}}}();for(t=0;t<b.Lists.colors.length;t++)!function(){var e=b.Lists.colors[t];b.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return e;case"extract":var a;if(b.RegEx.wrappedValueAlreadyExtracted.test(o))a=o;else{var r,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?r=s[o]!==n?s[o]:s.black:b.RegEx.isHex.test(o)?r="rgb("+b.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(r=s.black),a=(r||o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==a.split(" ").length||(a+=" 1"),a;case"inject":return 8>=d?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=d?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||v.State.isAndroid&&!v.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(v.State.prefixMatches[t])return[v.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var o;if(o=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),p.isString(v.State.prefixElement.style[o]))return v.State.prefixMatches[t]=o,[o,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e;return t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n}),(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,o,r){function s(t,i){function o(){h&&b.setPropertyValue(t,"display","none")}var l=0;if(8>=d)l=u.css(t,i);else{var c,h=!1;if(/^(width|height)$/.test(i)&&0===b.getPropertyValue(t,"display")&&(h=!0,b.setPropertyValue(t,"display",b.Values.getDisplayType(t))),!r){if("height"===i&&"border-box"!==b.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var p=t.offsetHeight-(parseFloat(b.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(b.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(b.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(b.getPropertyValue(t,"paddingBottom"))||0);return o(),p}if("width"===i&&"border-box"!==b.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var f=t.offsetWidth-(parseFloat(b.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(b.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(b.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(b.getPropertyValue(t,"paddingRight"))||0);return o(),f}}c=a(t)===n?e.getComputedStyle(t,null):a(t).computedStyle?a(t).computedStyle:a(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(l=9===d&&"filter"===i?c.getPropertyValue(i):c[i])||null===l)&&(l=t.style[i]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var m=s(t,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(i))&&(l=u(t).position()[i]+"px")}return l}var l;if(b.Hooks.registered[i]){var c=i,h=b.Hooks.getRoot(c);o===n&&(o=b.getPropertyValue(t,b.Names.prefixCheck(h)[0])),b.Normalizations.registered[h]&&(o=b.Normalizations.registered[h]("extract",t,o)),l=b.Hooks.extractValue(c,o)}else if(b.Normalizations.registered[i]){var p,f;"transform"!==(p=b.Normalizations.registered[i]("name",t))&&(f=s(t,b.Names.prefixCheck(p)[0]),b.Values.isCSSNullValue(f)&&b.Hooks.templates[i]&&(f=b.Hooks.templates[i][1])),l=b.Normalizations.registered[i]("extract",t,f)}if(!/^[\d-]/.test(l))if(a(t)&&a(t).isSVG&&b.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(t){l=0}else l=t.getAttribute(i);else l=s(t,b.Names.prefixCheck(i)[0]);return b.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,o,r){var s=i;if("scroll"===i)r.container?r.container["scroll"+r.direction]=n:"Left"===r.direction?e.scrollTo(n,r.alternateValue):e.scrollTo(r.alternateValue,n);else if(b.Normalizations.registered[i]&&"transform"===b.Normalizations.registered[i]("name",t))b.Normalizations.registered[i]("inject",t,n),s="transform",n=a(t).transformCache[i];else{if(b.Hooks.registered[i]){var l=i,c=b.Hooks.getRoot(i);o=o||b.getPropertyValue(t,c),n=b.Hooks.injectValue(l,n,o),i=c}if(b.Normalizations.registered[i]&&(n=b.Normalizations.registered[i]("inject",t,n),i=b.Normalizations.registered[i]("name",t)),s=b.Names.prefixCheck(i)[0],8>=d)try{t.style[s]=n}catch(t){v.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else a(t)&&a(t).isSVG&&b.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;v.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(b.getPropertyValue(t,e))}var i="";if((d||v.State.isAndroid&&!v.State.isChrome)&&a(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};u.each(a(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var o,r;u.each(a(t).transformCache,function(e){return o=a(t).transformCache[e],"transformPerspective"===e?(r=o,!0):(9===d&&"rotateZ"===e&&(e="rotate"),void(i+=e+o+" "))}),r&&(i="perspective"+r+" "+i)}b.setPropertyValue(t,"transform",i)}};b.Hooks.register(),b.Normalizations.register(),v.hook=function(t,e,i){var r=n;return t=o(t),u.each(t,function(t,o){if(a(o)===n&&v.init(o),i===n)r===n&&(r=v.CSS.getPropertyValue(o,e));else{var s=v.CSS.setPropertyValue(o,e,i);"transform"===s[0]&&v.CSS.flushTransformCache(o),r=s}}),r};var x=function(){function t(){return d?A.promise||null:h}function r(){function t(t){function h(t,e){var i=n,o=n,a=n;return p.isArray(t)?(i=t[0],!p.isArray(t[1])&&/^[\d-]/.test(t[1])||p.isFunction(t[1])||b.RegEx.isHex.test(t[1])?a=t[1]:(p.isString(t[1])&&!b.RegEx.isHex.test(t[1])||p.isArray(t[1]))&&(o=e?t[1]:s(t[1],c.duration),t[2]!==n&&(a=t[2]))):i=t,e||(o=o||c.easing),p.isFunction(i)&&(i=i.call(r,S,C)),p.isFunction(a)&&(a=a.call(r,S,C)),[i||0,o,a]}function f(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=b.Values.getUnitType(t)),[n,i]}function m(){var t={myParent:r.parentNode||i.body,position:b.getPropertyValue(r,"position"),fontSize:b.getPropertyValue(r,"fontSize")},n=t.position===L.lastPosition&&t.myParent===L.lastParent,o=t.fontSize===L.lastFontSize;L.lastParent=t.myParent,L.lastPosition=t.position,L.lastFontSize=t.fontSize;var s=100,l={};if(o&&n)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var c=a(r).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");v.init(c),t.myParent.appendChild(c),u.each(["overflow","overflowX","overflowY"],function(t,e){v.CSS.setPropertyValue(c,e,"hidden")}),v.CSS.setPropertyValue(c,"position",t.position),v.CSS.setPropertyValue(c,"fontSize",t.fontSize),v.CSS.setPropertyValue(c,"boxSizing","content-box"),u.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){v.CSS.setPropertyValue(c,e,s+"%")}),v.CSS.setPropertyValue(c,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(b.getPropertyValue(c,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(b.getPropertyValue(c,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(b.getPropertyValue(c,"paddingLeft"))||1)/s,t.myParent.removeChild(c)}return null===L.remToPx&&(L.remToPx=parseFloat(b.getPropertyValue(i.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(e.innerWidth)/100,L.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),r),l}if(c.begin&&0===S)try{c.begin.call(g,g)}catch(t){setTimeout(function(){throw t},1)}if("scroll"===T){var x,k,M,I=/^x$/i.test(c.axis)?"Left":"Top",P=parseFloat(c.offset)||0;c.container?p.isWrapped(c.container)||p.isNode(c.container)?(c.container=c.container[0]||c.container,M=(x=c.container["scroll"+I])+u(r).position()[I.toLowerCase()]+P):c.container=null:(x=v.State.scrollAnchor[v.State["scrollProperty"+I]],k=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===I?"Top":"Left")]],M=u(r).offset()[I.toLowerCase()]+P),d={scroll:{rootPropertyValue:!1,startValue:x,currentValue:x,endValue:M,unitType:"",easing:c.easing,scrollData:{container:c.container,direction:I,alternateValue:k}},element:r},v.debug&&console.log("tweensContainer (scroll): ",d.scroll,r)}else if("reverse"===T){if(!a(r).tweensContainer)return void u.dequeue(r,c.queue);"none"===a(r).opts.display&&(a(r).opts.display="auto"),"hidden"===a(r).opts.visibility&&(a(r).opts.visibility="visible"),a(r).opts.loop=!1,a(r).opts.begin=null,a(r).opts.complete=null,w.easing||delete c.easing,w.duration||delete c.duration,c=u.extend({},a(r).opts,c);var O=u.extend(!0,{},a(r).tweensContainer);for(var _ in O)if("element"!==_){var D=O[_].startValue;O[_].startValue=O[_].currentValue=O[_].endValue,O[_].endValue=D,p.isEmptyObject(w)||(O[_].easing=c.easing),v.debug&&console.log("reverse tweensContainer ("+_+"): "+JSON.stringify(O[_]),r)}d=O}else if("start"===T){for(var E in a(r).tweensContainer&&!0===a(r).isAnimating&&(O=a(r).tweensContainer),u.each(y,function(t,e){if(RegExp("^"+b.Lists.colors.join("$|^")+"$").test(t)){var i=h(e,!0),o=i[0],a=i[1],r=i[2];if(b.RegEx.isHex.test(o)){for(var s=["Red","Green","Blue"],l=b.Values.hexToRgb(o),c=r?b.Values.hexToRgb(r):n,u=0;u<s.length;u++){var d=[l[u]];a&&d.push(a),c!==n&&d.push(c[u]),y[t+s[u]]=d}delete y[t]}}}),y){var F=h(y[E]),R=F[0],W=F[1],V=F[2];E=b.Names.camelCase(E);var N=b.Hooks.getRoot(E),H=!1;if(a(r).isSVG||"tween"===N||!1!==b.Names.prefixCheck(N)[1]||b.Normalizations.registered[N]!==n){(c.display!==n&&null!==c.display&&"none"!==c.display||c.visibility!==n&&"hidden"!==c.visibility)&&/opacity|filter/.test(E)&&!V&&0!==R&&(V=0),c._cacheValues&&O&&O[E]?(V===n&&(V=O[E].endValue+O[E].unitType),H=a(r).rootPropertyValueCache[N]):b.Hooks.registered[E]?V===n?(H=b.getPropertyValue(r,N),V=b.getPropertyValue(r,E,H)):H=b.Hooks.templates[N][1]:V===n&&(V=b.getPropertyValue(r,E));var z,B,j,Y=!1;if(V=(z=f(E,V))[0],j=z[1],R=(z=f(E,R))[0].replace(/^([+-\/*])=/,function(t,e){return Y=e,""}),B=z[1],V=parseFloat(V)||0,R=parseFloat(R)||0,"%"===B&&(/^(fontSize|lineHeight)$/.test(E)?(R/=100,B="em"):/^scale/.test(E)?(R/=100,B=""):/(Red|Green|Blue)$/i.test(E)&&(R=R/100*255,B="")),/[\/*]/.test(Y))B=j;else if(j!==B&&0!==V)if(0===R)B=j;else{o=o||m();var q=/margin|padding|left|right|width|text|word|letter/i.test(E)||/X$/.test(E)||"x"===E?"x":"y";switch(j){case"%":V*="x"===q?o.percentToPxWidth:o.percentToPxHeight;break;case"px":break;default:V*=o[j+"ToPx"]}switch(B){case"%":V*=1/("x"===q?o.percentToPxWidth:o.percentToPxHeight);break;case"px":break;default:V*=1/o[B+"ToPx"]}}switch(Y){case"+":R=V+R;break;case"-":R=V-R;break;case"*":R*=V;break;case"/":R=V/R}d[E]={rootPropertyValue:H,startValue:V,currentValue:V,endValue:R,unitType:B,easing:W},v.debug&&console.log("tweensContainer ("+E+"): "+JSON.stringify(d[E]),r)}else v.debug&&console.log("Skipping ["+N+"] due to a lack of browser support.")}d.element=r}d.element&&(b.Values.addClass(r,"velocity-animating"),$.push(d),""===c.queue&&(a(r).tweensContainer=d,a(r).opts=c),a(r).isAnimating=!0,S===C-1?(v.State.calls.push([$,g,c,null,A.resolver]),!1===v.State.isTicking&&(v.State.isTicking=!0,l())):S++)}var o,r=this,c=u.extend({},v.defaults,w),d={};switch(a(r)===n&&v.init(r),parseFloat(c.delay)&&!1!==c.queue&&u.queue(r,c.queue,function(t){v.velocityQueueEntryFlag=!0,a(r).delayTimer={setTimeout:setTimeout(t,parseFloat(c.delay)),next:t}}),c.duration.toString().toLowerCase()){case"fast":c.duration=200;break;case"normal":c.duration=m;break;case"slow":c.duration=600;break;default:c.duration=parseFloat(c.duration)||1}!1!==v.mock&&(!0===v.mock?c.duration=c.delay=1:(c.duration*=parseFloat(v.mock)||1,c.delay*=parseFloat(v.mock)||1)),c.easing=s(c.easing,c.duration),c.begin&&!p.isFunction(c.begin)&&(c.begin=null),c.progress&&!p.isFunction(c.progress)&&(c.progress=null),c.complete&&!p.isFunction(c.complete)&&(c.complete=null),c.display!==n&&null!==c.display&&(c.display=c.display.toString().toLowerCase(),"auto"===c.display&&(c.display=v.CSS.Values.getDisplayType(r))),c.visibility!==n&&null!==c.visibility&&(c.visibility=c.visibility.toString().toLowerCase()),c.mobileHA=c.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,!1===c.queue?c.delay?setTimeout(t,c.delay):t():u.queue(r,c.queue,function(e,i){return!0===i?(A.promise&&A.resolver(g),!0):(v.velocityQueueEntryFlag=!0,void t())}),""!==c.queue&&"fx"!==c.queue||"inprogress"===u.queue(r)[0]||u.dequeue(r)}var d,h,f,g,y,w,k=arguments[0]&&(arguments[0].p||u.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(d=!1,f=0,g=this,h=this):(d=!0,f=1,g=k?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){k?(y=arguments[0].properties||arguments[0].p,w=arguments[0].options||arguments[0].o):(y=arguments[f],w=arguments[f+1]);var C=g.length,S=0;if(!/^(stop|finish)$/i.test(y)&&!u.isPlainObject(w)){w={};for(var M=f+1;M<arguments.length;M++)p.isArray(arguments[M])||!/^(fast|normal|slow)$/i.test(arguments[M])&&!/^\d/.test(arguments[M])?p.isString(arguments[M])||p.isArray(arguments[M])?w.easing=arguments[M]:p.isFunction(arguments[M])&&(w.complete=arguments[M]):w.duration=arguments[M]}var T,A={promise:null,resolver:null,rejecter:null};switch(d&&v.Promise&&(A.promise=new v.Promise(function(t,e){A.resolver=t,A.rejecter=e})),y){case"scroll":T="scroll";break;case"reverse":T="reverse";break;case"finish":case"stop":u.each(g,function(t,e){a(e)&&a(e).delayTimer&&(clearTimeout(a(e).delayTimer.setTimeout),a(e).delayTimer.next&&a(e).delayTimer.next(),delete a(e).delayTimer)});var I=[];return u.each(v.State.calls,function(t,e){e&&u.each(e[1],function(i,o){var r=w===n?"":w;return!0!==r&&e[2].queue!==r&&(w!==n||!1!==e[2].queue)||void u.each(g,function(i,n){n===o&&((!0===w||p.isString(w))&&(u.each(u.queue(n,p.isString(w)?w:""),function(t,e){p.isFunction(e)&&e(null,!0)}),u.queue(n,p.isString(w)?w:"",[])),"stop"===y?(a(n)&&a(n).tweensContainer&&!1!==r&&u.each(a(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),I.push(t)):"finish"===y&&(e[2].duration=1))})})}),"stop"===y&&(u.each(I,function(t,e){c(e,!0)}),A.promise&&A.resolver(g)),t();default:if(!u.isPlainObject(y)||p.isEmptyObject(y)){if(p.isString(y)&&v.Redirects[y]){var P=(E=u.extend({},w)).duration,O=E.delay||0;return!0===E.backwards&&(g=u.extend(!0,[],g).reverse()),u.each(g,function(t,e){parseFloat(E.stagger)?E.delay=O+parseFloat(E.stagger)*t:p.isFunction(E.stagger)&&(E.delay=O+E.stagger.call(e,t,C)),E.drag&&(E.duration=parseFloat(P)||(/^(callout|transition)/.test(y)?1e3:m),E.duration=Math.max(E.duration*(E.backwards?1-t/C:(t+1)/C),.75*E.duration,200)),v.Redirects[y].call(e,e,E||{},t,C,g,A.promise?A:n)}),t()}var _="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return A.promise?A.rejecter(new Error(_)):console.log(_),t()}T="start"}var D,E,L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},$=[];if(u.each(g,function(t,e){p.isNode(e)&&r.call(e)}),(E=u.extend({},v.defaults,w)).loop=parseInt(E.loop),D=2*E.loop-1,E.loop)for(var F=0;D>F;F++){var R={delay:E.delay,progress:E.progress};F===D-1&&(R.display=E.display,R.visibility=E.visibility,R.complete=E.complete),x(g,"reverse",R)}return t()}};(v=u.extend(x,v)).animate=x;var w=e.requestAnimationFrame||h;return v.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(w=function(t){return setTimeout(function(){t(!0)},16)},l()):w=e.requestAnimationFrame||h}),t.Velocity=v,t!==e&&(t.fn.velocity=x,t.fn.velocity.defaults=v.defaults),u.each(["Down","Up"],function(t,e){v.Redirects["slide"+e]=function(t,i,o,a,r,s){var l=u.extend({},i),c=l.begin,d=l.complete,h={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},p={};l.display===n&&(l.display="Down"===e?"inline"===v.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){for(var i in c&&c.call(r,r),h){p[i]=t.style[i];var n=v.CSS.getPropertyValue(t,i);h[i]="Down"===e?[n,0]:[0,n]}p.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in p)t.style[e]=p[e];d&&d.call(r,r),s&&s.resolver(r)},v(t,h,l)}}),u.each(["In","Out"],function(t,e){v.Redirects["fade"+e]=function(t,i,o,a,r,s){var l=u.extend({},i),c={opacity:"In"===e?1:0},d=l.complete;l.complete=o!==a-1?l.begin=null:function(){d&&d.call(r,r),s&&s.resolver(r)},l.display===n&&(l.display="In"===e?"auto":"none"),v(this,c,l)}}),v}jQuery.fn.velocity=jQuery.fn.animate}(__webpack_provided_window_dot_jQuery||window.Zepto||window,window,document)})),function(t){if(true)module.exports=t();else {}}(function(){return function(){return function t(e,i,n){function o(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return require(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){return o(e[r][1][t]||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}}()({1:[function(t,e,i){},{}],2:[function(t,e,i){var n=t(6);function o(t){if(t){var e=[0,0,0],i=1,o=t.match(/^#([a-fA-F0-9]{3})$/i);if(o){o=o[1];for(var a=0;a<e.length;a++)e[a]=parseInt(o[a]+o[a],16)}else if(o=t.match(/^#([a-fA-F0-9]{6})$/i)){o=o[1];for(a=0;a<e.length;a++)e[a]=parseInt(o.slice(2*a,2*a+2),16)}else if(o=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(a=0;a<e.length;a++)e[a]=parseInt(o[a+1]);i=parseFloat(o[4])}else if(o=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(a=0;a<e.length;a++)e[a]=Math.round(2.55*parseFloat(o[a+1]));i=parseFloat(o[4])}else if(o=t.match(/(\w+)/)){if("transparent"==o[1])return[0,0,0,0];if(!(e=n[o[1]]))return}for(a=0;a<e.length;a++)e[a]=u(e[a],0,255);return i=i||0==i?u(i,0,1):1,e[3]=i,e}}function a(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[u(parseInt(e[1]),0,360),u(parseFloat(e[2]),0,100),u(parseFloat(e[3]),0,100),u(isNaN(i)?1:i,0,1)]}}}function r(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[u(parseInt(e[1]),0,360),u(parseFloat(e[2]),0,100),u(parseFloat(e[3]),0,100),u(isNaN(i)?1:i,0,1)]}}}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function u(t,e,i){return Math.min(Math.max(e,t),i)}function d(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:o,getHsla:a,getRgb:function(t){var e=o(t);return e&&e.slice(0,3)},getHsl:function(t){var e=a(t);return e&&e.slice(0,3)},getHwb:r,getAlpha:function(t){var e=o(t);if(e)return e[3];if(e=a(t))return e[3];if(e=r(t))return e[3]},hexString:function(t){return"#"+d(t[0])+d(t[1])+d(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return s(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:s,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return l(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),o=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+o+"%)"},percentaString:l,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return c(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:c,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return h[t.slice(0,3)]}};var h={};for(var p in n)h[n[p]]=p},{6:6}],3:[function(t,e,i){var n=t(5),o=t(2),a=function(t){return t instanceof a?t:this instanceof a?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=o.getRgba(t))?this.setValues("rgb",e):(e=o.getHsla(t))?this.setValues("hsl",e):(e=o.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new a(t);var e};a.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return o.hexString(this.values.rgb)},rgbString:function(){return o.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return o.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return o.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return o.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return o.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return o.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return o.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=t,n=void 0===e?.5:e,o=2*n-1,a=this.alpha()-i.alpha(),r=((o*a==-1?o:(o+a)/(1+o*a))+1)/2,s=1-r;return this.rgb(r*this.red()+s*i.red(),r*this.green()+s*i.green(),r*this.blue()+s*i.blue()).alpha(this.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new a,n=this.values,o=i.values;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],"[object Array]"===(e={}.toString.call(t))?o[r]=t.slice(0):"[object Number]"===e?o[r]=t:console.error("unexpected color value:",t));return i}},a.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},a.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},a.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},a.prototype.setValues=function(t,e){var i,o,a=this.values,r=this.spaces,s=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)a[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)a[t][i]=e[t.charAt(i)];l=e.a}else if(void 0!==e[r[t][0]]){var c=r[t];for(i=0;i<t.length;i++)a[t][i]=e[c[i]];l=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===l?a.alpha:l)),"alpha"===t)return!1;for(i=0;i<t.length;i++)o=Math.max(0,Math.min(s[t][i],a[t][i])),a[t][i]=Math.round(o);for(var u in r)u!==t&&(a[u]=n[t][u](a[t]));return!0},a.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},a.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=a),e.exports=a},{2:2,5:5}],4:[function(t,e,i){function n(t){var e,i,n=t[0]/255,o=t[1]/255,a=t[2]/255,r=Math.min(n,o,a),s=Math.max(n,o,a),l=s-r;return s==r?e=0:n==s?e=(o-a)/l:o==s?e=2+(a-n)/l:a==s&&(e=4+(n-o)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(r+s)/2,[e,100*(s==r?0:i<=.5?l/(s+r):l/(2-s-r)),100*i]}function o(t){var e,i,n=t[0],o=t[1],a=t[2],r=Math.min(n,o,a),s=Math.max(n,o,a),l=s-r;return i=0==s?0:l/s*1e3/10,s==r?e=0:n==s?e=(o-a)/l:o==s?e=2+(a-n)/l:a==s&&(e=4+(n-o)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function a(t){var e=t[0],i=t[1],o=t[2];return[n(t)[0],100*(1/255*Math.min(e,Math.min(i,o))),100*(o=1-1/255*Math.max(e,Math.max(i,o)))]}function s(t){var e,i=t[0]/255,n=t[1]/255,o=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-o)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-o-e)/(1-e)||0),100*e]}function l(t){return M[JSON.stringify(t)]}function c(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function u(t){var e=c(t),i=e[0],n=e[1],o=e[2];return n/=100,o/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]}function d(t){var e,i,n,o,a,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[a=255*l,a,a];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),o=[0,0,0];for(var c=0;c<3;c++)(n=r+1/3*-(c-1))<0&&n++,n>1&&n--,a=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,o[c]=255*a;return o}function h(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,o=Math.floor(e)%6,a=e-Math.floor(e),r=255*n*(1-i),s=255*n*(1-i*a),l=255*n*(1-i*(1-a));n*=255;switch(o){case 0:return[n,l,r];case 1:return[s,n,r];case 2:return[r,n,l];case 3:return[r,s,n];case 4:return[l,r,n];case 5:return[n,r,s]}}function p(t){var e,i,n,o,a=t[0]/360,s=t[1]/100,l=t[2]/100,c=s+l;switch(c>1&&(s/=c,l/=c),n=6*a-(e=Math.floor(6*a)),0!=(1&e)&&(n=1-n),o=s+n*((i=1-l)-s),e){default:case 6:case 0:r=i,g=o,b=s;break;case 1:r=o,g=i,b=s;break;case 2:r=s,g=i,b=o;break;case 3:r=s,g=o,b=i;break;case 4:r=o,g=s,b=i;break;case 5:r=i,g=s,b=o}return[255*r,255*g,255*b]}function f(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,o=t[3]/100;return[255*(1-Math.min(1,e*(1-o)+o)),255*(1-Math.min(1,i*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]}function m(t){var e,i,n,o=t[0]/100,a=t[1]/100,r=t[2]/100;return i=-.9689*o+1.8758*a+.0415*r,n=.0557*o+-.204*a+1.057*r,e=(e=3.2406*o+-1.5372*a+-.4986*r)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function v(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function y(t){var e,i,n,o,a=t[0],r=t[1],s=t[2];return a<=8?o=(i=100*a/903.3)/100*7.787+16/116:(i=100*Math.pow((a+16)/116,3),o=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(r/500+o-16/116)/7.787:95.047*Math.pow(r/500+o,3),i,n=n/108.883<=.008859?n=108.883*(o-s/200-16/116)/7.787:108.883*Math.pow(o-s/200,3)]}function x(t){var e,i=t[0],n=t[1],o=t[2];return(e=360*Math.atan2(o,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+o*o),e]}function w(t){return m(y(t))}function k(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function C(t){return S[t]}e.exports={rgb2hsl:n,rgb2hsv:o,rgb2hwb:a,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:c,rgb2lab:u,rgb2lch:function(t){return x(u(t))},hsl2rgb:d,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]},hsl2hwb:function(t){return a(d(t))},hsl2cmyk:function(t){return s(d(t))},hsl2keyword:function(t){return l(d(t))},hsv2rgb:h,hsv2hsl:function(t){var e,i,n=t[0],o=t[1]/100,a=t[2]/100;return e=o*a,[n,100*(e=(e/=(i=(2-o)*a)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return a(h(t))},hsv2cmyk:function(t){return s(h(t))},hsv2keyword:function(t){return l(h(t))},hwb2rgb:p,hwb2hsl:function(t){return n(p(t))},hwb2hsv:function(t){return o(p(t))},hwb2cmyk:function(t){return s(p(t))},hwb2keyword:function(t){return l(p(t))},cmyk2rgb:f,cmyk2hsl:function(t){return n(f(t))},cmyk2hsv:function(t){return o(f(t))},cmyk2hwb:function(t){return a(f(t))},cmyk2keyword:function(t){return l(f(t))},keyword2rgb:C,keyword2hsl:function(t){return n(C(t))},keyword2hsv:function(t){return o(C(t))},keyword2hwb:function(t){return a(C(t))},keyword2cmyk:function(t){return s(C(t))},keyword2lab:function(t){return u(C(t))},keyword2xyz:function(t){return c(C(t))},xyz2rgb:m,xyz2lab:v,xyz2lch:function(t){return x(v(t))},lab2xyz:y,lab2rgb:w,lab2lch:x,lch2lab:k,lch2xyz:function(t){return y(k(t))},lch2rgb:function(t){return w(k(t))}};var S={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},M={};for(var T in S)M[JSON.stringify(S[T])]=T},{}],5:[function(t,e,i){var n=t(4),o=function(){return new c};for(var a in n){o[a+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),n[t](e)}}(a);var r=/(\w+)2(\w+)/.exec(a),s=r[1],l=r[2];(o[s]=o[s]||{})[l]=o[a]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=n[t](e);if("string"==typeof i||void 0===i)return i;for(var o=0;o<i.length;o++)i[o]=Math.round(i[o]);return i}}(a)}var c=function(){this.convs={}};c.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},c.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},c.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=o[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){c.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=o},{4:4}],6:[function(t,e,i){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var n=t(30)();n.helpers=t(46),t(28)(n),n.Animation=t(22),n.animationService=t(23),n.defaults=t(26),n.Element=t(27),n.elements=t(41),n.Interaction=t(29),n.layouts=t(31),n.platform=t(49),n.plugins=t(32),n.Scale=t(33),n.scaleService=t(34),n.Ticks=t(35),n.Tooltip=t(36),t(24)(n),t(25)(n),t(56)(n),t(54)(n),t(55)(n),t(57)(n),t(58)(n),t(59)(n),t(15)(n),t(16)(n),t(17)(n),t(18)(n),t(19)(n),t(20)(n),t(21)(n),t(8)(n),t(9)(n),t(10)(n),t(11)(n),t(12)(n),t(13)(n),t(14)(n);var o=t(50);for(var a in o)o.hasOwnProperty(a)&&n.plugins.register(o[a]);n.platform.initialize(),e.exports=n,"undefined"!=typeof window&&(window.Chart=n),n.Legend=o.legend._element,n.Title=o.title._element,n.pluginService=n.plugins,n.PluginBase=n.Element.extend({}),n.canvasHelpers=n.helpers.canvas,n.layoutService=n.layouts},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,41:41,46:46,49:49,50:50,54:54,55:55,56:56,57:57,58:58,59:59,8:8,9:9}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){t.Radar=function(e,i){return i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";var n=t(26),o=t(41),a=t(46);n._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),n._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),e.exports=function(t){t.controllers.bar=t.DatasetController.extend({dataElementType:o.Rectangle,initialize:function(){var e;t.DatasetController.prototype.initialize.apply(this,arguments),(e=this.getMeta()).stack=this.getDataset().stack,e.bar=!0},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,e,i){var n=this,o=n.chart,r=n.getMeta(),s=n.getDataset(),l=t.custom||{},c=o.options.elements.rectangle;t._xScale=n.getScaleForId(r.xAxisID),t._yScale=n.getScaleForId(r.yAxisID),t._datasetIndex=n.index,t._index=e,t._model={datasetLabel:s.label,label:o.data.labels[e],borderSkipped:l.borderSkipped?l.borderSkipped:c.borderSkipped,backgroundColor:l.backgroundColor?l.backgroundColor:a.valueAtIndexOrDefault(s.backgroundColor,e,c.backgroundColor),borderColor:l.borderColor?l.borderColor:a.valueAtIndexOrDefault(s.borderColor,e,c.borderColor),borderWidth:l.borderWidth?l.borderWidth:a.valueAtIndexOrDefault(s.borderWidth,e,c.borderWidth)},n.updateElementGeometry(t,e,i),t.pivot()},updateElementGeometry:function(t,e,i){var n=this,o=t._model,a=n.getValueScale(),r=a.getBasePixel(),s=a.isHorizontal(),l=n._ruler||n.getRuler(),c=n.calculateBarValuePixels(n.index,e),u=n.calculateBarIndexPixels(n.index,e,l);o.horizontal=s,o.base=i?r:c.base,o.x=s?i?r:c.head:u.center,o.y=s?u.center:i?r:c.head,o.height=s?u.size:void 0,o.width=s?void 0:u.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},_getStacks:function(t){var e,i,n=this.chart,o=this.getIndexScale().options.stacked,a=void 0===t?n.data.datasets.length:t+1,r=[];for(e=0;e<a;++e)(i=n.getDatasetMeta(e)).bar&&n.isDatasetVisible(e)&&(!1===o||!0===o&&-1===r.indexOf(i.stack)||void 0===o&&(void 0===i.stack||-1===r.indexOf(i.stack)))&&r.push(i.stack);return r},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n},getRuler:function(){var t,e,i=this.getIndexScale(),n=this.getStackCount(),o=this.index,r=i.isHorizontal(),s=r?i.left:i.top,l=s+(r?i.width:i.height),c=[];for(t=0,e=this.getMeta().data.length;t<e;++t)c.push(i.getPixelForValue(null,t,o));return{min:a.isNullOrUndef(i.options.barThickness)?function(t,e){var i,n,o,a,r=t.isHorizontal()?t.width:t.height,s=t.getTicks();for(o=1,a=e.length;o<a;++o)r=Math.min(r,e[o]-e[o-1]);for(o=0,a=s.length;o<a;++o)n=t.getPixelForTick(o),r=o>0?Math.min(r,n-i):r,i=n;return r}(i,c):-1,pixels:c,start:s,end:l,stackCount:n,scale:i}},calculateBarValuePixels:function(t,e){var i,n,o,a,r,s,l=this.chart,c=this.getMeta(),u=this.getValueScale(),d=l.data.datasets,h=u.getRightValue(d[t].data[e]),p=u.options.stacked,f=c.stack,m=0;if(p||void 0===p&&void 0!==f)for(i=0;i<t;++i)(n=l.getDatasetMeta(i)).bar&&n.stack===f&&n.controller.getValueScaleId()===u.id&&l.isDatasetVisible(i)&&(o=u.getRightValue(d[i].data[e]),(h<0&&o<0||h>=0&&o>0)&&(m+=o));return a=u.getPixelForValue(m),{size:s=((r=u.getPixelForValue(m+h))-a)/2,base:a,head:r,center:r+s/2}},calculateBarIndexPixels:function(t,e,i){var n=i.scale.options,o="flex"===n.barThickness?function(t,e,i){var n,o=e.pixels,a=o[t],r=t>0?o[t-1]:null,s=t<o.length-1?o[t+1]:null,l=i.categoryPercentage;return null===r&&(r=a-(null===s?e.end-a:s-a)),null===s&&(s=a+a-r),n=a-(a-r)/2*l,{chunk:(s-r)/2*l/e.stackCount,ratio:i.barPercentage,start:n}}(e,i,n):function(t,e,i){var n,o,r=i.barThickness,s=e.stackCount,l=e.pixels[t];return a.isNullOrUndef(r)?(n=e.min*i.categoryPercentage,o=i.barPercentage):(n=r*s,o=1),{chunk:n/s,ratio:o,start:l-n/2}}(e,i,n),r=this.getStackIndex(t,this.getMeta().stack),s=o.start+o.chunk*r+o.chunk/2,l=Math.min(a.valueOrDefault(n.maxBarThickness,1/0),o.chunk*o.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}},draw:function(){var t=this.chart,e=this.getValueScale(),i=this.getMeta().data,n=this.getDataset(),o=i.length,r=0;for(a.canvas.clipArea(t.ctx,t.chartArea);r<o;++r)isNaN(e.getRightValue(n.data[r]))||i[r].draw();a.canvas.unclipArea(t.ctx)}}),t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{26:26,41:41,46:46}],16:[function(t,e,i){"use strict";var n=t(26),o=t(41),a=t(46);n._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}}),e.exports=function(t){t.controllers.bubble=t.DatasetController.extend({dataElementType:o.Point,update:function(t){var e=this,i=e.getMeta().data;a.each(i,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,o=n.getMeta(),a=t.custom||{},r=n.getScaleForId(o.xAxisID),s=n.getScaleForId(o.yAxisID),l=n._resolveElementOptions(t,e),c=n.getDataset().data[e],u=n.index,d=i?r.getPixelForDecimal(.5):r.getPixelForValue("object"==typeof c?c:NaN,e,u),h=i?s.getBasePixel():s.getPixelForValue(c,e,u);t._xScale=r,t._yScale=s,t._options=l,t._datasetIndex=u,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:i?0:l.radius,skip:a.skip||isNaN(d)||isNaN(h),x:d,y:h},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=a.valueOrDefault(i.hoverBackgroundColor,a.getHoverColor(i.backgroundColor)),e.borderColor=a.valueOrDefault(i.hoverBorderColor,a.getHoverColor(i.borderColor)),e.borderWidth=a.valueOrDefault(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},_resolveElementOptions:function(t,e){var i,n,o,r=this.chart,s=r.data.datasets[this.index],l=t.custom||{},c=r.options.elements.point,u=a.options.resolve,d=s.data[e],h={},p={chart:r,dataIndex:e,dataset:s,datasetIndex:this.index},f=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"];for(i=0,n=f.length;i<n;++i)h[o=f[i]]=u([l[o],s[o],c[o]],p,e);return h.radius=u([l.radius,d?d.r:void 0,s.radius,c.radius],p,e),h}})}},{26:26,41:41,46:46}],17:[function(t,e,i){"use strict";var n=t(26),o=t(41),a=t(46);n._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,o=i.labels;if(n.length)for(var a=0;a<n[0].data.length;++a)e.push('<li><span style="background-color:'+n[0].backgroundColor[a]+'"></span>'),o[a]&&e.push(o[a]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var o=t.getDatasetMeta(0),r=e.datasets[0],s=o.data[n],l=s&&s.custom||{},c=a.valueAtIndexOrDefault,u=t.options.elements.arc;return{text:i,fillStyle:l.backgroundColor?l.backgroundColor:c(r.backgroundColor,n,u.backgroundColor),strokeStyle:l.borderColor?l.borderColor:c(r.borderColor,n,u.borderColor),lineWidth:l.borderWidth?l.borderWidth:c(r.borderWidth,n,u.borderWidth),hidden:isNaN(r.data[n])||o.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,o,a=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;i<n;++i)(o=r.getDatasetMeta(i)).data[a]&&(o.data[a].hidden=!o.data[a].hidden);r.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return a.isArray(i)?(i=i.slice())[0]+=n:i+=n,i}}}}),n._set("pie",a.clone(n.doughnut)),n._set("pie",{cutoutPercentage:0}),e.exports=function(t){t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:o.Arc,linkScales:a.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var e=this,i=e.chart,n=i.chartArea,o=i.options,r=o.elements.arc,s=n.right-n.left-r.borderWidth,l=n.bottom-n.top-r.borderWidth,c=Math.min(s,l),u={x:0,y:0},d=e.getMeta(),h=o.cutoutPercentage,p=o.circumference;if(p<2*Math.PI){var f=o.rotation%(2*Math.PI),m=(f+=2*Math.PI*(f>=Math.PI?-1:f<-Math.PI?1:0))+p,g={x:Math.cos(f),y:Math.sin(f)},v={x:Math.cos(m),y:Math.sin(m)},y=f<=0&&m>=0||f<=2*Math.PI&&2*Math.PI<=m,b=f<=.5*Math.PI&&.5*Math.PI<=m||f<=2.5*Math.PI&&2.5*Math.PI<=m,x=f<=-Math.PI&&-Math.PI<=m||f<=Math.PI&&Math.PI<=m,w=f<=.5*-Math.PI&&.5*-Math.PI<=m||f<=1.5*Math.PI&&1.5*Math.PI<=m,k=h/100,C={x:x?-1:Math.min(g.x*(g.x<0?1:k),v.x*(v.x<0?1:k)),y:w?-1:Math.min(g.y*(g.y<0?1:k),v.y*(v.y<0?1:k))},S={x:y?1:Math.max(g.x*(g.x>0?1:k),v.x*(v.x>0?1:k)),y:b?1:Math.max(g.y*(g.y>0?1:k),v.y*(v.y>0?1:k))},M={width:.5*(S.x-C.x),height:.5*(S.y-C.y)};c=Math.min(s/M.width,l/M.height),u={x:-.5*(S.x+C.x),y:-.5*(S.y+C.y)}}i.borderWidth=e.getMaxBorderWidth(d.data),i.outerRadius=Math.max((c-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:0,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=u.x*i.outerRadius,i.offsetY=u.y*i.outerRadius,d.total=e.calculateTotal(),e.outerRadius=i.outerRadius-i.radiusLength*e.getRingIndex(e.index),e.innerRadius=Math.max(e.outerRadius-i.radiusLength,0),a.each(d.data,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,o=n.chart,r=o.chartArea,s=o.options,l=s.animation,c=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=s.rotation,h=s.rotation,p=n.getDataset(),f=i&&l.animateRotate?0:t.hidden?0:n.calculateCircumference(p.data[e])*(s.circumference/(2*Math.PI)),m=i&&l.animateScale?0:n.innerRadius,g=i&&l.animateScale?0:n.outerRadius,v=a.valueAtIndexOrDefault;a.extend(t,{_datasetIndex:n.index,_index:e,_model:{x:c+o.offsetX,y:u+o.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:g,innerRadius:m,label:v(p.label,e,o.data.labels[e])}});var y=t._model,b=t.custom||{},x=a.valueAtIndexOrDefault,w=this.chart.options.elements.arc;y.backgroundColor=b.backgroundColor?b.backgroundColor:x(p.backgroundColor,e,w.backgroundColor),y.borderColor=b.borderColor?b.borderColor:x(p.borderColor,e,w.borderColor),y.borderWidth=b.borderWidth?b.borderWidth:x(p.borderWidth,e,w.borderWidth),i&&l.animateRotate||(y.startAngle=0===e?s.rotation:n.getMeta().data[e-1]._model.endAngle,y.endAngle=y.startAngle+y.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),i=this.getMeta(),n=0;return a.each(i.data,function(i,o){t=e.data[o],isNaN(t)||i.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){for(var e,i,n=0,o=this.index,a=t.length,r=0;r<a;r++)e=t[r]._model?t[r]._model.borderWidth:0,n=(i=t[r]._chart?t[r]._chart.config.data.datasets[o].hoverBorderWidth:0)>(n=e>n?e:n)?i:n;return n}})}},{26:26,41:41,46:46}],18:[function(t,e,i){"use strict";var n=t(26),o=t(41),a=t(46);n._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(t){function e(t,e){return a.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:o.Line,dataElementType:o.Point,update:function(t){var i,n,o,r=this,s=r.getMeta(),l=s.dataset,c=s.data||[],u=r.chart.options,d=u.elements.line,h=r.getScaleForId(s.yAxisID),p=r.getDataset(),f=e(p,u);for(f&&(o=l.custom||{},void 0!==p.tension&&void 0===p.lineTension&&(p.lineTension=p.tension),l._scale=h,l._datasetIndex=r.index,l._children=c,l._model={spanGaps:p.spanGaps?p.spanGaps:u.spanGaps,tension:o.tension?o.tension:a.valueOrDefault(p.lineTension,d.tension),backgroundColor:o.backgroundColor?o.backgroundColor:p.backgroundColor||d.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:p.borderWidth||d.borderWidth,borderColor:o.borderColor?o.borderColor:p.borderColor||d.borderColor,borderCapStyle:o.borderCapStyle?o.borderCapStyle:p.borderCapStyle||d.borderCapStyle,borderDash:o.borderDash?o.borderDash:p.borderDash||d.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:p.borderDashOffset||d.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:p.borderJoinStyle||d.borderJoinStyle,fill:o.fill?o.fill:void 0!==p.fill?p.fill:d.fill,steppedLine:o.steppedLine?o.steppedLine:a.valueOrDefault(p.steppedLine,d.stepped),cubicInterpolationMode:o.cubicInterpolationMode?o.cubicInterpolationMode:a.valueOrDefault(p.cubicInterpolationMode,d.cubicInterpolationMode)},l.pivot()),i=0,n=c.length;i<n;++i)r.updateElement(c[i],i,t);for(f&&0!==l._model.tension&&r.updateBezierControlPoints(),i=0,n=c.length;i<n;++i)c[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,n=this.getDataset(),o=t.custom||{};return o.backgroundColor?i=o.backgroundColor:n.pointBackgroundColor?i=a.valueAtIndexOrDefault(n.pointBackgroundColor,e,i):n.backgroundColor&&(i=n.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,n=this.getDataset(),o=t.custom||{};return o.borderColor?i=o.borderColor:n.pointBorderColor?i=a.valueAtIndexOrDefault(n.pointBorderColor,e,i):n.borderColor&&(i=n.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,n=this.getDataset(),o=t.custom||{};return isNaN(o.borderWidth)?!isNaN(n.pointBorderWidth)||a.isArray(n.pointBorderWidth)?i=a.valueAtIndexOrDefault(n.pointBorderWidth,e,i):isNaN(n.borderWidth)||(i=n.borderWidth):i=o.borderWidth,i},getPointRotation:function(t,e){var i=this.chart.options.elements.point.rotation,n=this.getDataset(),o=t.custom||{};return isNaN(o.rotation)?isNaN(n.pointRotation)&&!a.isArray(n.pointRotation)||(i=a.valueAtIndexOrDefault(n.pointRotation,e,i)):i=o.rotation,i},updateElement:function(t,e,i){var n,o,r=this,s=r.getMeta(),l=t.custom||{},c=r.getDataset(),u=r.index,d=c.data[e],h=r.getScaleForId(s.yAxisID),p=r.getScaleForId(s.xAxisID),f=r.chart.options.elements.point;void 0!==c.radius&&void 0===c.pointRadius&&(c.pointRadius=c.radius),void 0!==c.hitRadius&&void 0===c.pointHitRadius&&(c.pointHitRadius=c.hitRadius),n=p.getPixelForValue("object"==typeof d?d:NaN,e,u),o=i?h.getBasePixel():r.calculatePointY(d,e,u),t._xScale=p,t._yScale=h,t._datasetIndex=u,t._index=e,t._model={x:n,y:o,skip:l.skip||isNaN(n)||isNaN(o),radius:l.radius||a.valueAtIndexOrDefault(c.pointRadius,e,f.radius),pointStyle:l.pointStyle||a.valueAtIndexOrDefault(c.pointStyle,e,f.pointStyle),rotation:r.getPointRotation(t,e),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,hitRadius:l.hitRadius||a.valueAtIndexOrDefault(c.pointHitRadius,e,f.hitRadius)}},calculatePointY:function(t,e,i){var n,o,a,r=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),c=0,u=0;if(l.options.stacked){for(n=0;n<i;n++)if(o=r.data.datasets[n],"line"===(a=r.getDatasetMeta(n)).type&&a.yAxisID===l.id&&r.isDatasetVisible(n)){var d=Number(l.getRightValue(o.data[e]));d<0?u+=d||0:c+=d||0}var h=Number(l.getRightValue(t));return h<0?l.getPixelForValue(u+h):l.getPixelForValue(c+h)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,o=this.getMeta(),r=this.chart.chartArea,s=o.data||[];function l(t,e,i){return Math.max(Math.min(t,i),e)}if(o.dataset._model.spanGaps&&(s=s.filter(function(t){return!t._model.skip})),"monotone"===o.dataset._model.cubicInterpolationMode)a.splineCurveMonotone(s);else for(t=0,e=s.length;t<e;++t)i=s[t]._model,n=a.splineCurve(a.previousItem(s,t)._model,i,a.nextItem(s,t)._model,o.dataset._model.tension),i.controlPointPreviousX=n.previous.x,i.controlPointPreviousY=n.previous.y,i.controlPointNextX=n.next.x,i.controlPointNextY=n.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,e=s.length;t<e;++t)(i=s[t]._model).controlPointPreviousX=l(i.controlPointPreviousX,r.left,r.right),i.controlPointPreviousY=l(i.controlPointPreviousY,r.top,r.bottom),i.controlPointNextX=l(i.controlPointNextX,r.left,r.right),i.controlPointNextY=l(i.controlPointNextY,r.top,r.bottom)},draw:function(){var t,i=this.chart,n=this.getMeta(),o=n.data||[],r=i.chartArea,s=o.length,l=0;for(e(this.getDataset(),i.options)&&(t=(n.dataset._model.borderWidth||0)/2,a.canvas.clipArea(i.ctx,{left:r.left,right:r.right,top:r.top-t,bottom:r.bottom+t}),n.dataset.draw(),a.canvas.unclipArea(i.ctx));l<s;++l)o[l].draw(r)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model;t.$previousStyle={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderWidth:o.borderWidth,radius:o.radius},o.backgroundColor=n.hoverBackgroundColor||a.valueAtIndexOrDefault(e.pointHoverBackgroundColor,i,a.getHoverColor(o.backgroundColor)),o.borderColor=n.hoverBorderColor||a.valueAtIndexOrDefault(e.pointHoverBorderColor,i,a.getHoverColor(o.borderColor)),o.borderWidth=n.hoverBorderWidth||a.valueAtIndexOrDefault(e.pointHoverBorderWidth,i,o.borderWidth),o.radius=n.hoverRadius||a.valueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius)}})}},{26:26,41:41,46:46}],19:[function(t,e,i){"use strict";var n=t(26),o=t(41),a=t(46);n._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,o=i.labels;if(n.length)for(var a=0;a<n[0].data.length;++a)e.push('<li><span style="background-color:'+n[0].backgroundColor[a]+'"></span>'),o[a]&&e.push(o[a]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var o=t.getDatasetMeta(0),r=e.datasets[0],s=o.data[n].custom||{},l=a.valueAtIndexOrDefault,c=t.options.elements.arc;return{text:i,fillStyle:s.backgroundColor?s.backgroundColor:l(r.backgroundColor,n,c.backgroundColor),strokeStyle:s.borderColor?s.borderColor:l(r.borderColor,n,c.borderColor),lineWidth:s.borderWidth?s.borderWidth:l(r.borderWidth,n,c.borderWidth),hidden:isNaN(r.data[n])||o.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,o,a=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;i<n;++i)(o=r.getDatasetMeta(i)).data[a].hidden=!o.data[a].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),e.exports=function(t){t.controllers.polarArea=t.DatasetController.extend({dataElementType:o.Arc,linkScales:a.noop,update:function(t){var e,i,n,o=this,r=o.getDataset(),s=o.getMeta(),l=o.chart.options.startAngle||0,c=o._starts=[],u=o._angles=[];for(o._updateRadius(),s.count=o.countVisibleElements(),e=0,i=r.data.length;e<i;e++)c[e]=l,n=o._computeAngle(e),u[e]=n,l+=n;a.each(s.data,function(e,i){o.updateElement(e,i,t)})},_updateRadius:function(){var t=this,e=t.chart,i=e.chartArea,n=e.options,o=n.elements.arc,a=Math.min(i.right-i.left,i.bottom-i.top);e.outerRadius=Math.max((a-o.borderWidth/2)/2,0),e.innerRadius=Math.max(n.cutoutPercentage?e.outerRadius/100*n.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,i){var n=this,o=n.chart,r=n.getDataset(),s=o.options,l=s.animation,c=o.scale,u=o.data.labels,d=c.xCenter,h=c.yCenter,p=s.startAngle,f=t.hidden?0:c.getDistanceFromCenterForValue(r.data[e]),m=n._starts[e],g=m+(t.hidden?0:n._angles[e]),v=l.animateScale?0:c.getDistanceFromCenterForValue(r.data[e]);a.extend(t,{_datasetIndex:n.index,_index:e,_scale:c,_model:{x:d,y:h,innerRadius:0,outerRadius:i?v:f,startAngle:i&&l.animateRotate?p:m,endAngle:i&&l.animateRotate?p:g,label:a.valueAtIndexOrDefault(u,e,u[e])}});var y=this.chart.options.elements.arc,b=t.custom||{},x=a.valueAtIndexOrDefault,w=t._model;w.backgroundColor=b.backgroundColor?b.backgroundColor:x(r.backgroundColor,e,y.backgroundColor),w.borderColor=b.borderColor?b.borderColor:x(r.borderColor,e,y.borderColor),w.borderWidth=b.borderWidth?b.borderWidth:x(r.borderWidth,e,y.borderWidth),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),i=0;return a.each(e.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},_computeAngle:function(t){var e=this,i=this.getMeta().count,n=e.getDataset(),o=e.getMeta();if(isNaN(n.data[t])||o.data[t].hidden)return 0;var r={chart:e.chart,dataIndex:t,dataset:n,datasetIndex:e.index};return a.options.resolve([e.chart.options.elements.arc.angle,2*Math.PI/i],r,t)}})}},{26:26,41:41,46:46}],20:[function(t,e,i){"use strict";var n=t(26),o=t(41),a=t(46);n._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:o.Line,dataElementType:o.Point,linkScales:a.noop,update:function(t){var e=this,i=e.getMeta(),n=i.dataset,o=i.data,r=n.custom||{},s=e.getDataset(),l=e.chart.options.elements.line,c=e.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),a.extend(i.dataset,{_datasetIndex:e.index,_scale:c,_children:o,_loop:!0,_model:{tension:r.tension?r.tension:a.valueOrDefault(s.lineTension,l.tension),backgroundColor:r.backgroundColor?r.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:s.borderWidth||l.borderWidth,borderColor:r.borderColor?r.borderColor:s.borderColor||l.borderColor,fill:r.fill?r.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:r.borderDash?r.borderDash:s.borderDash||l.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle}}),i.dataset.pivot(),a.each(o,function(i,n){e.updateElement(i,n,t)},e),e.updateBezierControlPoints()},updateElement:function(t,e,i){var n=this,o=t.custom||{},r=n.getDataset(),s=n.chart.scale,l=n.chart.options.elements.point,c=s.getPointPositionForValue(e,r.data[e]);void 0!==r.radius&&void 0===r.pointRadius&&(r.pointRadius=r.radius),void 0!==r.hitRadius&&void 0===r.pointHitRadius&&(r.pointHitRadius=r.hitRadius),a.extend(t,{_datasetIndex:n.index,_index:e,_scale:s,_model:{x:i?s.xCenter:c.x,y:i?s.yCenter:c.y,tension:o.tension?o.tension:a.valueOrDefault(r.lineTension,n.chart.options.elements.line.tension),radius:o.radius?o.radius:a.valueAtIndexOrDefault(r.pointRadius,e,l.radius),backgroundColor:o.backgroundColor?o.backgroundColor:a.valueAtIndexOrDefault(r.pointBackgroundColor,e,l.backgroundColor),borderColor:o.borderColor?o.borderColor:a.valueAtIndexOrDefault(r.pointBorderColor,e,l.borderColor),borderWidth:o.borderWidth?o.borderWidth:a.valueAtIndexOrDefault(r.pointBorderWidth,e,l.borderWidth),pointStyle:o.pointStyle?o.pointStyle:a.valueAtIndexOrDefault(r.pointStyle,e,l.pointStyle),rotation:o.rotation?o.rotation:a.valueAtIndexOrDefault(r.pointRotation,e,l.rotation),hitRadius:o.hitRadius?o.hitRadius:a.valueAtIndexOrDefault(r.pointHitRadius,e,l.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,e=this.getMeta();a.each(e.data,function(i,n){var o=i._model,r=a.splineCurve(a.previousItem(e.data,n,!0)._model,o,a.nextItem(e.data,n,!0)._model,o.tension);o.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),o.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),o.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),o.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),i.pivot()})},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,o=t._model;t.$previousStyle={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderWidth:o.borderWidth,radius:o.radius},o.radius=i.hoverRadius?i.hoverRadius:a.valueAtIndexOrDefault(e.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),o.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:a.valueAtIndexOrDefault(e.pointHoverBackgroundColor,n,a.getHoverColor(o.backgroundColor)),o.borderColor=i.hoverBorderColor?i.hoverBorderColor:a.valueAtIndexOrDefault(e.pointHoverBorderColor,n,a.getHoverColor(o.borderColor)),o.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:a.valueAtIndexOrDefault(e.pointHoverBorderWidth,n,o.borderWidth)}})}},{26:26,41:41,46:46}],21:[function(t,e,i){"use strict";t(26)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),e.exports=function(t){t.controllers.scatter=t.controllers.line}},{26:26}],22:[function(t,e,i){"use strict";var n=t(27);i=e.exports=n.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null});Object.defineProperty(i.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(i.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})},{27:27}],23:[function(t,e,i){"use strict";var n=t(26),o=t(46);n._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:o.noop,onComplete:o.noop}}),e.exports={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,n){var o,a,r=this.animations;for(e.chart=t,n||(t.animating=!0),o=0,a=r.length;o<a;++o)if(r[o].chart===t)return void(r[o]=e);r.push(e),1===r.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=o.findIndex(this.animations,function(e){return e.chart===t});-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=o.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),i=0;t.dropFrames>1&&(i=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+i);var n=Date.now();t.dropFrames+=(n-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var e,i,n=this.animations,a=0;a<n.length;)i=(e=n[a]).chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),o.callback(e.render,[i,e],i),o.callback(e.onAnimationProgress,[e],i),e.currentStep>=e.numSteps?(o.callback(e.onAnimationComplete,[e],i),i.animating=!1,n.splice(a,1)):++a}}},{26:26,46:46}],24:[function(t,e,i){"use strict";var n=t(22),o=t(23),a=t(26),r=t(46),s=t(29),l=t(31),c=t(49),u=t(32),d=t(34),h=t(36);e.exports=function(t){function e(t){return"top"===t||"bottom"===t}t.types={},t.instances={},t.controllers={},r.extend(t.prototype,{construct:function(e,i){var n=this;i=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=r.configMerge(a.global,a[t.type],t.options||{}),t}(i);var o=c.acquireContext(e,i),s=o&&o.canvas,l=s&&s.height,u=s&&s.width;n.id=r.uid(),n.ctx=o,n.canvas=s,n.config=i,n.width=u,n.height=l,n.aspectRatio=l?u/l:null,n.options=i.options,n._bufferedRender=!1,n.chart=n,n.controller=n,t.instances[n.id]=n,Object.defineProperty(n,"data",{get:function(){return n.config.data},set:function(t){n.config.data=t}}),o&&s?(n.initialize(),n.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return u.notify(t,"beforeInit"),r.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),u.notify(t,"afterInit"),t},clear:function(){return r.canvas.clear(this),this},stop:function(){return o.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,n=e.canvas,o=i.maintainAspectRatio&&e.aspectRatio||null,a=Math.max(0,Math.floor(r.getMaximumWidth(n))),s=Math.max(0,Math.floor(o?a/o:r.getMaximumHeight(n)));if((e.width!==a||e.height!==s)&&(n.width=e.width=a,n.height=e.height=s,n.style.width=a+"px",n.style.height=s+"px",r.retinaScale(e,i.devicePixelRatio),!t)){var l={width:a,height:s};u.notify(e,"resize",[l]),e.options.onResize&&e.options.onResize(e,l),e.stop(),e.update({duration:e.options.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;r.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),r.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var t=this,i=t.options,n=t.scales||{},o=[],a=Object.keys(n).reduce(function(t,e){return t[e]=!1,t},{});i.scales&&(o=o.concat((i.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(i.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),i.scale&&o.push({options:i.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),r.each(o,function(i){var o=i.options,s=o.id,l=r.valueOrDefault(o.type,i.dtype);e(o.position)!==e(i.dposition)&&(o.position=i.dposition),a[s]=!0;var c=null;if(s in n&&n[s].type===l)(c=n[s]).options=o,c.ctx=t.ctx,c.chart=t;else{var u=d.getScaleConstructor(l);if(!u)return;c=new u({id:s,type:l,options:o,ctx:t.ctx,chart:t}),n[c.id]=c}c.mergeTicksOptions(),i.isDefault&&(t.scale=c)}),r.each(a,function(t,e){t||delete n[e]}),t.scales=n,d.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,i=[],n=[];return r.each(e.data.datasets,function(o,a){var r=e.getDatasetMeta(a),s=o.type||e.config.type;if(r.type&&r.type!==s&&(e.destroyDatasetMeta(a),r=e.getDatasetMeta(a)),r.type=s,i.push(r.type),r.controller)r.controller.updateIndex(a),r.controller.linkScales();else{var l=t.controllers[r.type];if(void 0===l)throw new Error('"'+r.type+'" is not a chart type.');r.controller=new l(e,a),n.push(r.controller)}},e),n},resetElements:function(){var t=this;r.each(t.data.datasets,function(e,i){t.getDatasetMeta(i).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(e){var i,n,o=this;if(e&&"object"==typeof e||(e={duration:e,lazy:arguments[1]}),n=(i=o).options,r.each(i.scales,function(t){l.removeBox(i,t)}),n=r.configMerge(t.defaults.global,t.defaults[i.config.type],n),i.options=i.config.options=n,i.ensureScalesHaveIDs(),i.buildOrUpdateScales(),i.tooltip._options=n.tooltips,i.tooltip.initialize(),u._invalidate(o),!1!==u.notify(o,"beforeUpdate")){o.tooltip._data=o.data;var a=o.buildOrUpdateControllers();r.each(o.data.datasets,function(t,e){o.getDatasetMeta(e).controller.buildOrUpdateElements()},o),o.updateLayout(),o.options.animation&&o.options.animation.duration&&r.each(a,function(t){t.reset()}),o.updateDatasets(),o.tooltip.initialize(),o.lastActive=[],u.notify(o,"afterUpdate"),o._bufferedRender?o._bufferedRequest={duration:e.duration,easing:e.easing,lazy:e.lazy}:o.render(e)}},updateLayout:function(){!1!==u.notify(this,"beforeLayout")&&(l.update(this,this.width,this.height),u.notify(this,"afterScaleUpdate"),u.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==u.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);u.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==u.notify(this,"beforeDatasetUpdate",[i])&&(e.controller.update(),u.notify(this,"afterDatasetUpdate",[i]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var i=t.duration,a=t.lazy;if(!1!==u.notify(e,"beforeRender")){var s=e.options.animation,l=function(t){u.notify(e,"afterRender"),r.callback(s&&s.onComplete,[t],e)};if(s&&(void 0!==i&&0!==i||void 0===i&&0!==s.duration)){var c=new n({numSteps:(i||s.duration)/16.66,easing:t.easing||s.easing,render:function(t,e){var i=r.easing.effects[e.easing],n=e.currentStep,o=n/e.numSteps;t.draw(i(o),o,n)},onAnimationProgress:s.onProgress,onAnimationComplete:l});o.addAnimation(e,c,i,a)}else e.draw(),l(new n({numSteps:0,chart:e}));return e}},draw:function(t){var e=this;e.clear(),r.isNullOrUndef(t)&&(t=1),e.transition(t),e.width<=0||e.height<=0||!1!==u.notify(e,"beforeDraw",[t])&&(r.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),u.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==u.notify(e,"beforeDatasetsDraw",[t])){for(var i=(e.data.datasets||[]).length-1;i>=0;--i)e.isDatasetVisible(i)&&e.drawDataset(i,t);u.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i=this.getDatasetMeta(t),n={meta:i,index:t,easingValue:e};!1!==u.notify(this,"beforeDatasetDraw",[n])&&(i.controller.draw(e),u.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==u.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),u.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return s.modes.single(this,t)},getElementsAtEvent:function(t){return s.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return s.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var n=s.modes[e];return"function"==typeof n?n(this,t,i):[]},getDatasetAtEvent:function(t){return s.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],n=i._meta&&i._meta[e];n&&(n.controller.destroy(),delete i._meta[e])},destroy:function(){var e,i,n=this,o=n.canvas;for(n.stop(),e=0,i=n.data.datasets.length;e<i;++e)n.destroyDatasetMeta(e);o&&(n.unbindEvents(),r.canvas.clear(n),c.releaseContext(n.ctx),n.canvas=null,n.ctx=null),u.notify(n,"destroy"),delete t.instances[n.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new h({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},i=function(){t.eventHandler.apply(t,arguments)};r.each(t.options.events,function(n){c.addEventListener(t,n,i),e[n]=i}),t.options.responsive&&(i=function(){t.resize()},c.addEventListener(t,"resize",i),e.resize=i)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,r.each(e,function(e,i){c.removeEventListener(t,i,e)}))},updateHoverStyle:function(t,e,i){var n,o,a,r=i?"setHoverStyle":"removeHoverStyle";for(o=0,a=t.length;o<a;++o)(n=t[o])&&this.getDatasetMeta(n._datasetIndex).controller[r](n)},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==u.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var n=e.handleEvent(t);i&&(n=i._start?i.handleEvent(t):n|i.handleEvent(t)),u.notify(e,"afterEvent",[t]);var o=e._bufferedRequest;return o?e.render(o):n&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,n=i.options||{},o=n.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,o.mode,o),r.callback(n.onHover||n.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,o.mode,!1),i.active.length&&o.mode&&i.updateHoverStyle(i.active,o.mode,!0),e=!r.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),t.Controller=t}},{22:22,23:23,26:26,29:29,31:31,32:32,34:34,36:36,46:46,49:49}],25:[function(t,e,i){"use strict";var n=t(46);e.exports=function(t){var e=["push","pop","shift","splice","unshift"];function i(t,i){var n=t._chartjs;if(n){var o=n.listeners,a=o.indexOf(i);-1!==a&&o.splice(a,1),o.length>0||(e.forEach(function(e){delete t[e]}),delete t._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},n.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),i=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=i.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=i.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&i(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],o=i.data;for(t=0,e=n.length;t<e;++t)o[t]=o[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,o,a=this,r=a.getDataset(),s=r.data||(r.data=[]);a._data!==s&&(a._data&&i(a._data,a),o=a,(t=s)._chartjs?t._chartjs.listeners.push(o):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[o]}}),e.forEach(function(e){var i="onData"+e.charAt(0).toUpperCase()+e.slice(1),o=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=o.apply(this,e);return n.each(t._chartjs.listeners,function(t){"function"==typeof t[i]&&t[i].apply(t,e)}),a}})})),a._data=s),a.resyncElements()},update:n.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,o=0;o<n;++o)i[o].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},removeHoverStyle:function(t){n.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,o=t.custom||{},a=n.valueAtIndexOrDefault,r=n.getHoverColor,s=t._model;t.$previousStyle={backgroundColor:s.backgroundColor,borderColor:s.borderColor,borderWidth:s.borderWidth},s.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:a(e.hoverBackgroundColor,i,r(s.backgroundColor)),s.borderColor=o.hoverBorderColor?o.hoverBorderColor:a(e.hoverBorderColor,i,r(s.borderColor)),s.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:a(e.hoverBorderWidth,i,s.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):n>i&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=n.inherits}},{46:46}],26:[function(t,e,i){"use strict";var n=t(46);e.exports={_set:function(t,e){return n.merge(this[t]||(this[t]={}),e)}}},{46:46}],27:[function(t,e,i){"use strict";var n=t(3),o=t(46);var a=function(t){o.extend(this,t),this.initialize.apply(this,arguments)};o.extend(a.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=o.clone(t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,o=e._start,a=e._view;return i&&1!==t?(a||(a=e._view={}),o||(o=e._start={}),function(t,e,i,o){var a,r,s,l,c,u,d,h,p,f=Object.keys(i);for(a=0,r=f.length;a<r;++a)if(u=i[s=f[a]],e.hasOwnProperty(s)||(e[s]=u),(l=e[s])!==u&&"_"!==s[0]){if(t.hasOwnProperty(s)||(t[s]=l),(d=typeof u)==typeof(c=t[s]))if("string"===d){if((h=n(c)).valid&&(p=n(u)).valid){e[s]=p.mix(h,o).rgbString();continue}}else if("number"===d&&isFinite(c)&&isFinite(u)){e[s]=c+(u-c)*o;continue}e[s]=u}}(o,a,i,t),e):(e._view=i,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return o.isNumber(this._model.x)&&o.isNumber(this._model.y)}}),a.extend=o.inherits,e.exports=a},{3:3,46:46}],28:[function(t,e,i){"use strict";var n=t(3),o=t(26),a=t(46),r=t(34);e.exports=function(){function t(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function e(t){return null!=t&&"none"!==t}function i(i,n,o){var r=document.defaultView,s=a._getParentNode(i),l=r.getComputedStyle(i)[n],c=r.getComputedStyle(s)[n],u=e(l),d=e(c),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?t(l,i,o):h,d?t(c,s,o):h):"none"}a.configMerge=function(){return a.merge(a.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,i,n){var o=e[t]||{},s=i[t];"scales"===t?e[t]=a.scaleMerge(o,s):"scale"===t?e[t]=a.merge(o,[r.getScaleDefaults(s.type),s]):a._merger(t,e,i,n)}})},a.scaleMerge=function(){return a.merge(a.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,i,n){if("xAxes"===t||"yAxes"===t){var o,s,l,c=i[t].length;for(e[t]||(e[t]=[]),o=0;o<c;++o)l=i[t][o],s=a.valueOrDefault(l.type,"xAxes"===t?"category":"linear"),o>=e[t].length&&e[t].push({}),!e[t][o].type||l.type&&l.type!==e[t][o].type?a.merge(e[t][o],[r.getScaleDefaults(s),l]):a.merge(e[t][o],l)}else a._merger(t,e,i,n)}})},a.where=function(t,e){if(a.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return a.each(t,function(t){e(t)&&i.push(t)}),i},a.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,o=t.length;n<o;++n)if(e.call(i,t[n],n,t))return n;return-1},a.findNextWhere=function(t,e,i){a.isNullOrUndef(i)&&(i=-1);for(var n=i+1;n<t.length;n++){var o=t[n];if(e(o))return o}},a.findPreviousWhere=function(t,e,i){a.isNullOrUndef(i)&&(i=t.length);for(var n=i-1;n>=0;n--){var o=t[n];if(e(o))return o}},a.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},a.almostEquals=function(t,e,i){return Math.abs(t-e)<i},a.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&i+e>t},a.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},a.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},a.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},a.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e},a.toRadians=function(t){return t*(Math.PI/180)},a.toDegrees=function(t){return t*(180/Math.PI)},a.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,o=Math.sqrt(i*i+n*n),a=Math.atan2(n,i);return a<-.5*Math.PI&&(a+=2*Math.PI),{angle:a,distance:o}},a.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},a.aliasPixel=function(t){return t%2==0?0:.5},a.splineCurve=function(t,e,i,n){var o=t.skip?e:t,a=e,r=i.skip?e:i,s=Math.sqrt(Math.pow(a.x-o.x,2)+Math.pow(a.y-o.y,2)),l=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),c=s/(s+l),u=l/(s+l),d=n*(c=isNaN(c)?0:c),h=n*(u=isNaN(u)?0:u);return{previous:{x:a.x-d*(r.x-o.x),y:a.y-d*(r.y-o.y)},next:{x:a.x+h*(r.x-o.x),y:a.y+h*(r.y-o.y)}}},a.EPSILON=Number.EPSILON||1e-14,a.splineCurveMonotone=function(t){var e,i,n,o,r,s,l,c,u,d=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),h=d.length;for(e=0;e<h;++e)if(!(n=d[e]).model.skip){if(i=e>0?d[e-1]:null,(o=e<h-1?d[e+1]:null)&&!o.model.skip){var p=o.model.x-n.model.x;n.deltaK=0!==p?(o.model.y-n.model.y)/p:0}!i||i.model.skip?n.mK=n.deltaK:!o||o.model.skip?n.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<h-1;++e)n=d[e],o=d[e+1],n.model.skip||o.model.skip||(a.almostEquals(n.deltaK,0,this.EPSILON)?n.mK=o.mK=0:(r=n.mK/n.deltaK,s=o.mK/n.deltaK,(c=Math.pow(r,2)+Math.pow(s,2))<=9||(l=3/Math.sqrt(c),n.mK=r*l*n.deltaK,o.mK=s*l*n.deltaK)));for(e=0;e<h;++e)(n=d[e]).model.skip||(i=e>0?d[e-1]:null,o=e<h-1?d[e+1]:null,i&&!i.model.skip&&(u=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-u,n.model.controlPointPreviousY=n.model.y-u*n.mK),o&&!o.model.skip&&(u=(o.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+u,n.model.controlPointNextY=n.model.y+u*n.mK))},a.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},a.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},a.niceNum=function(t,e){var i=Math.floor(a.log10(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)},a.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},a.getRelativePosition=function(t,e){var i,n,o=t.originalEvent||t,r=t.target||t.srcElement,s=r.getBoundingClientRect(),l=o.touches;l&&l.length>0?(i=l[0].clientX,n=l[0].clientY):(i=o.clientX,n=o.clientY);var c=parseFloat(a.getStyle(r,"padding-left")),u=parseFloat(a.getStyle(r,"padding-top")),d=parseFloat(a.getStyle(r,"padding-right")),h=parseFloat(a.getStyle(r,"padding-bottom")),p=s.right-s.left-c-d,f=s.bottom-s.top-u-h;return{x:i=Math.round((i-s.left-c)/p*r.width/e.currentDevicePixelRatio),y:n=Math.round((n-s.top-u)/f*r.height/e.currentDevicePixelRatio)}},a.getConstraintWidth=function(t){return i(t,"max-width","clientWidth")},a.getConstraintHeight=function(t){return i(t,"max-height","clientHeight")},a._calculatePadding=function(t,e,i){return(e=a.getStyle(t,e)).indexOf("%")>-1?i/parseInt(e,10):parseInt(e,10)},a._getParentNode=function(t){var e=t.parentNode;return e&&e.host&&(e=e.host),e},a.getMaximumWidth=function(t){var e=a._getParentNode(t);if(!e)return t.clientWidth;var i=e.clientWidth,n=i-a._calculatePadding(e,"padding-left",i)-a._calculatePadding(e,"padding-right",i),o=a.getConstraintWidth(t);return isNaN(o)?n:Math.min(n,o)},a.getMaximumHeight=function(t){var e=a._getParentNode(t);if(!e)return t.clientHeight;var i=e.clientHeight,n=i-a._calculatePadding(e,"padding-top",i)-a._calculatePadding(e,"padding-bottom",i),o=a.getConstraintHeight(t);return isNaN(o)?n:Math.min(n,o)},a.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},a.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==i){var n=t.canvas,o=t.height,a=t.width;n.height=o*i,n.width=a*i,t.ctx.scale(i,i),n.style.height||n.style.width||(n.style.height=o+"px",n.style.width=a+"px")}},a.fontString=function(t,e,i){return e+" "+t+"px "+i},a.longestText=function(t,e,i,n){var o=(n=n||{}).data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(o=n.data={},r=n.garbageCollect=[],n.font=e),t.font=e;var s=0;a.each(i,function(e){null!=e&&!0!==a.isArray(e)?s=a.measureText(t,o,r,s,e):a.isArray(e)&&a.each(e,function(e){null==e||a.isArray(e)||(s=a.measureText(t,o,r,s,e))})});var l=r.length/2;if(l>i.length){for(var c=0;c<l;c++)delete o[r[c]];r.splice(0,l)}return s},a.measureText=function(t,e,i,n,o){var a=e[o];return a||(a=e[o]=t.measureText(o).width,i.push(o)),a>n&&(n=a),n},a.numberOfLabelLines=function(t){var e=1;return a.each(t,function(t){a.isArray(t)&&t.length>e&&(e=t.length)}),e},a.color=n?function(t){return t instanceof CanvasGradient&&(t=o.global.defaultColor),n(t)}:function(t){return console.error("Color.js not found!"),t},a.getHoverColor=function(t){return t instanceof CanvasPattern?t:a.color(t).saturate(.5).darken(.1).rgbString()}}},{26:26,3:3,34:34,46:46}],29:[function(t,e,i){"use strict";var n=t(46);function o(t,e){return t.native?{x:t.x,y:t.y}:n.getRelativePosition(t,e)}function a(t,e){var i,n,o,a,r;for(n=0,a=t.data.datasets.length;n<a;++n)if(t.isDatasetVisible(n))for(o=0,r=(i=t.getDatasetMeta(n)).data.length;o<r;++o){var s=i.data[o];s._view.skip||e(s)}}function r(t,e){var i=[];return a(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function s(t,e,i,n){var o=Number.POSITIVE_INFINITY,r=[];return a(t,function(t){if(!i||t.inRange(e.x,e.y)){var a=t.getCenterPoint(),s=n(e,a);s<o?(r=[t],o=s):s===o&&r.push(t)}}),r}function l(t){var e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){var o=e?Math.abs(t.x-n.x):0,a=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(a,2))}}function c(t,e,i){var n=o(e,t);i.axis=i.axis||"x";var a=l(i.axis),c=i.intersect?r(t,n):s(t,n,!1,a),u=[];return c.length?(t.data.datasets.forEach(function(e,i){if(t.isDatasetVisible(i)){var n=t.getDatasetMeta(i).data[c[0]._index];n&&!n._view.skip&&u.push(n)}}),u):[]}e.exports={modes:{single:function(t,e){var i=o(e,t),n=[];return a(t,function(t){if(t.inRange(i.x,i.y))return n.push(t),n}),n.slice(0,1)},label:c,index:c,dataset:function(t,e,i){var n=o(e,t);i.axis=i.axis||"xy";var a=l(i.axis),c=i.intersect?r(t,n):s(t,n,!1,a);return c.length>0&&(c=t.getDatasetMeta(c[0]._datasetIndex).data),c},"x-axis":function(t,e){return c(t,e,{intersect:!1})},point:function(t,e){return r(t,o(e,t))},nearest:function(t,e,i){var n=o(e,t);i.axis=i.axis||"xy";var a=l(i.axis),r=s(t,n,i.intersect,a);return r.length>1&&r.sort(function(t,e){var i=t.getArea()-e.getArea();return 0===i&&(i=t._datasetIndex-e._datasetIndex),i}),r.slice(0,1)},x:function(t,e,i){var n=o(e,t),r=[],s=!1;return a(t,function(t){t.inXRange(n.x)&&r.push(t),t.inRange(n.x,n.y)&&(s=!0)}),i.intersect&&!s&&(r=[]),r},y:function(t,e,i){var n=o(e,t),r=[],s=!1;return a(t,function(t){t.inYRange(n.y)&&r.push(t),t.inRange(n.x,n.y)&&(s=!0)}),i.intersect&&!s&&(r=[]),r}}}},{46:46}],30:[function(t,e,i){"use strict";t(26)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.Chart=t,t}},{26:26}],31:[function(t,e,i){"use strict";var n=t(46);function o(t,e){return n.where(t,function(t){return t.position===e})}function a(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,i){var n=e?i:t,o=e?t:i;return n.weight===o.weight?n._tmpIndex_-o._tmpIndex_:n.weight-o.weight}),t.forEach(function(t){delete t._tmpIndex_})}e.exports={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,o=["fullWidth","position","weight"],a=o.length,r=0;r<a;++r)n=o[r],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(t,e,i){if(t){var r=t.options.layout||{},s=n.options.toPadding(r.padding),l=s.left,c=s.right,u=s.top,d=s.bottom,h=o(t.boxes,"left"),p=o(t.boxes,"right"),f=o(t.boxes,"top"),m=o(t.boxes,"bottom"),g=o(t.boxes,"chartArea");a(h,!0),a(p,!1),a(f,!0),a(m,!1);var v=e-l-c,y=i-u-d,b=y/2,x=(e-v/2)/(h.length+p.length),w=(i-b)/(f.length+m.length),k=v,C=y,S=[];n.each(h.concat(p,f,m),function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?v:k,w),C-=e.height):(e=t.update(x,C),k-=e.width),S.push({horizontal:i,minSize:e,box:t})});var M=0,T=0,A=0,I=0;n.each(f.concat(m),function(t){if(t.getPadding){var e=t.getPadding();M=Math.max(M,e.left),T=Math.max(T,e.right)}}),n.each(h.concat(p),function(t){if(t.getPadding){var e=t.getPadding();A=Math.max(A,e.top),I=Math.max(I,e.bottom)}});var P=l,O=c,_=u,D=d;n.each(h.concat(p),V),n.each(h,function(t){P+=t.width}),n.each(p,function(t){O+=t.width}),n.each(f.concat(m),V),n.each(f,function(t){_+=t.height}),n.each(m,function(t){D+=t.height}),n.each(h.concat(p),function(t){var e=n.findNextWhere(S,function(e){return e.box===t}),i={left:0,right:0,top:_,bottom:D};e&&t.update(e.minSize.width,C,i)}),P=l,O=c,_=u,D=d,n.each(h,function(t){P+=t.width}),n.each(p,function(t){O+=t.width}),n.each(f,function(t){_+=t.height}),n.each(m,function(t){D+=t.height});var E=Math.max(M-P,0);P+=E,O+=Math.max(T-O,0);var L=Math.max(A-_,0);_+=L,D+=Math.max(I-D,0);var $=i-_-D,F=e-P-O;F===k&&$===C||(n.each(h,function(t){t.height=$}),n.each(p,function(t){t.height=$}),n.each(f,function(t){t.fullWidth||(t.width=F)}),n.each(m,function(t){t.fullWidth||(t.width=F)}),C=$,k=F);var R=l+E,W=u+L;n.each(h.concat(f),N),R+=k,W+=C,n.each(p,N),n.each(m,N),t.chartArea={left:P,top:_,right:P+k,bottom:_+C},n.each(g,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,C)})}function V(t){var e=n.findNextWhere(S,function(e){return e.box===t});if(e)if(t.isHorizontal()){var i={left:Math.max(P,M),right:Math.max(O,T),top:0,bottom:0};t.update(t.fullWidth?v:k,y/2,i)}else t.update(e.minSize.width,C)}function N(t){t.isHorizontal()?(t.left=t.fullWidth?l:P,t.right=t.fullWidth?e-c:P+k,t.top=W,t.bottom=W+t.height,W=t.bottom):(t.left=R,t.right=R+t.width,t.top=_,t.bottom=_+C,R=t.right)}}}},{46:46}],32:[function(t,e,i){"use strict";var n=t(26),o=t(46);n._set("global",{plugins:{}}),e.exports={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,o,a,r,s,l=this.descriptors(t),c=l.length;for(n=0;n<c;++n)if("function"==typeof(s=(a=(o=l[n]).plugin)[e])&&((r=[t].concat(i||[])).push(o.options),!1===s.apply(a,r)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var i=[],a=[],r=t&&t.config||{},s=r.options&&r.options.plugins||{};return this._plugins.concat(r.plugins||[]).forEach(function(t){if(-1===i.indexOf(t)){var e=t.id,r=s[e];!1!==r&&(!0===r&&(r=o.clone(n.global.plugins[e])),i.push(t),a.push({plugin:t,options:r||{}}))}}),e.descriptors=a,e.id=this._cacheId,a},_invalidate:function(t){delete t.$plugins}}},{26:26,46:46}],33:[function(t,e,i){"use strict";var n=t(26),o=t(27),a=t(46),r=t(35);function s(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(t[e].label);return n}function l(t,e,i){var n=t.getPixelForTick(e);return i&&(n-=0===e?(t.getPixelForTick(1)-n)/2:(n-t.getPixelForTick(e-1))/2),n}function c(t,e,i){return a.isArray(e)?a.longestText(t,i,e):t.measureText(e).width}function u(t){var e=a.valueOrDefault,i=n.global,o=e(t.fontSize,i.defaultFontSize),r=e(t.fontStyle,i.defaultFontStyle),s=e(t.fontFamily,i.defaultFontFamily);return{size:o,style:r,family:s,font:a.fontString(o,r,s)}}function d(t){return a.options.toLineHeight(a.valueOrDefault(t.lineHeight,1.2),a.valueOrDefault(t.fontSize,n.global.defaultFontSize))}n._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:r.formatters.values,minor:{},major:{}}}),e.exports=o.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){a.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var n,o,r,s,l,c,u=this;for(u.beforeUpdate(),u.maxWidth=t,u.maxHeight=e,u.margins=a.extend({left:0,right:0,top:0,bottom:0},i),u.longestTextCache=u.longestTextCache||{},u.beforeSetDimensions(),u.setDimensions(),u.afterSetDimensions(),u.beforeDataLimits(),u.determineDataLimits(),u.afterDataLimits(),u.beforeBuildTicks(),l=u.buildTicks()||[],u.afterBuildTicks(),u.beforeTickToLabelConversion(),r=u.convertTicksToLabels(l)||u.ticks,u.afterTickToLabelConversion(),u.ticks=r,n=0,o=r.length;n<o;++n)s=r[n],(c=l[n])?c.label=s:l.push(c={label:s,major:!1});return u._ticks=l,u.beforeCalculateTickRotation(),u.calculateTickRotation(),u.afterCalculateTickRotation(),u.beforeFit(),u.fit(),u.afterFit(),u.afterUpdate(),u.minSize},afterUpdate:function(){a.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){a.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){a.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){a.callback(this.options.beforeDataLimits,[this])},determineDataLimits:a.noop,afterDataLimits:function(){a.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){a.callback(this.options.beforeBuildTicks,[this])},buildTicks:a.noop,afterBuildTicks:function(){a.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){a.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){a.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){a.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,i=t.options.ticks,n=s(t._ticks),o=u(i);e.font=o.font;var r=i.minRotation||0;if(n.length&&t.options.display&&t.isHorizontal())for(var l,c=a.longestText(e,o.font,n,t.longestTextCache),d=c,h=t.getPixelForTick(1)-t.getPixelForTick(0)-6;d>h&&r<i.maxRotation;){var p=a.toRadians(r);if(l=Math.cos(p),Math.sin(p)*c>t.maxHeight){r--;break}r++,d=l*c}t.labelRotation=r},afterCalculateTickRotation:function(){a.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){a.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},i=s(t._ticks),n=t.options,o=n.ticks,r=n.scaleLabel,l=n.gridLines,h=n.display,p=t.isHorizontal(),f=u(o),m=n.gridLines.tickMarkLength;if(e.width=p?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:h&&l.drawTicks?m:0,e.height=p?h&&l.drawTicks?m:0:t.maxHeight,r.display&&h){var g=d(r)+a.options.toPadding(r.padding).height;p?e.height+=g:e.width+=g}if(o.display&&h){var v=a.longestText(t.ctx,f.font,i,t.longestTextCache),y=a.numberOfLabelLines(i),b=.5*f.size,x=t.options.ticks.padding;if(p){t.longestLabelWidth=v;var w=a.toRadians(t.labelRotation),k=Math.cos(w),C=Math.sin(w)*v+f.size*y+b*(y-1)+b;e.height=Math.min(t.maxHeight,e.height+C+x),t.ctx.font=f.font;var S=c(t.ctx,i[0],f.font),M=c(t.ctx,i[i.length-1],f.font);0!==t.labelRotation?(t.paddingLeft="bottom"===n.position?k*S+3:k*b+3,t.paddingRight="bottom"===n.position?k*b+3:k*M+3):(t.paddingLeft=S/2+3,t.paddingRight=M/2+3)}else o.mirror?v=0:v+=x+b,e.width=Math.min(t.maxWidth,e.width+v),t.paddingTop=f.size/2,t.paddingBottom=f.size/2}t.handleMargins(),t.width=e.width,t.height=e.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){a.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(a.isNullOrUndef(t))return NaN;if("number"==typeof t&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:a.noop,getPixelForValue:a.noop,getValueForPixel:a.noop,getPixelForTick:function(t){var e=this,i=e.options.offset;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(i?0:1),1),o=n*t+e.paddingLeft;i&&(o+=n/2);var a=e.left+Math.round(o);return a+=e.isFullWidth()?e.margins.left:0}var r=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(r/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var i=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,n=e.left+Math.round(i);return n+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,i,n,o,r=this,s=r.isHorizontal(),l=r.options.ticks.minor,c=t.length,u=a.toRadians(r.labelRotation),d=Math.cos(u),h=r.longestLabelWidth*d,p=[];for(l.maxTicksLimit&&(o=l.maxTicksLimit),s&&(e=!1,(h+l.autoSkipPadding)*c>r.width-(r.paddingLeft+r.paddingRight)&&(e=1+Math.floor((h+l.autoSkipPadding)*c/(r.width-(r.paddingLeft+r.paddingRight)))),o&&c>o&&(e=Math.max(e,Math.floor(c/o)))),i=0;i<c;i++)n=t[i],(e>1&&i%e>0||i%e==0&&i+e>=c)&&i!==c-1&&delete n.label,p.push(n);return p},draw:function(t){var e=this,i=e.options;if(i.display){var o=e.ctx,r=n.global,s=i.ticks.minor,c=i.ticks.major||s,h=i.gridLines,p=i.scaleLabel,f=0!==e.labelRotation,m=e.isHorizontal(),g=s.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),v=a.valueOrDefault(s.fontColor,r.defaultFontColor),y=u(s),b=a.valueOrDefault(c.fontColor,r.defaultFontColor),x=u(c),w=h.drawTicks?h.tickMarkLength:0,k=a.valueOrDefault(p.fontColor,r.defaultFontColor),C=u(p),S=a.options.toPadding(p.padding),M=a.toRadians(e.labelRotation),T=[],A=e.options.gridLines.lineWidth,I="right"===i.position?e.left:e.right-A-w,P="right"===i.position?e.left+w:e.right,O="bottom"===i.position?e.top+A:e.bottom-w-A,_="bottom"===i.position?e.top+A+w:e.bottom+A;if(a.each(g,function(n,o){if(!a.isNullOrUndef(n.label)){var c,u,d,p,v,y,b,x,k,C,S,D,E,L,$=n.label;o===e.zeroLineIndex&&i.offset===h.offsetGridLines?(c=h.zeroLineWidth,u=h.zeroLineColor,d=h.zeroLineBorderDash,p=h.zeroLineBorderDashOffset):(c=a.valueAtIndexOrDefault(h.lineWidth,o),u=a.valueAtIndexOrDefault(h.color,o),d=a.valueOrDefault(h.borderDash,r.borderDash),p=a.valueOrDefault(h.borderDashOffset,r.borderDashOffset));var F="middle",R="middle",W=s.padding;if(m){var V=w+W;"bottom"===i.position?(R=f?"middle":"top",F=f?"right":"center",L=e.top+V):(R=f?"middle":"bottom",F=f?"left":"center",L=e.bottom-V);var N=l(e,o,h.offsetGridLines&&g.length>1);N<e.left&&(u="rgba(0,0,0,0)"),N+=a.aliasPixel(c),E=e.getPixelForTick(o)+s.labelOffset,v=b=k=S=N,y=O,x=_,C=t.top,D=t.bottom+A}else{var H,z="left"===i.position;s.mirror?(F=z?"left":"right",H=W):(F=z?"right":"left",H=w+W),E=z?e.right-H:e.left+H;var B=l(e,o,h.offsetGridLines&&g.length>1);B<e.top&&(u="rgba(0,0,0,0)"),B+=a.aliasPixel(c),L=e.getPixelForTick(o)+s.labelOffset,v=I,b=P,k=t.left,S=t.right+A,y=x=C=D=B}T.push({tx1:v,ty1:y,tx2:b,ty2:x,x1:k,y1:C,x2:S,y2:D,labelX:E,labelY:L,glWidth:c,glColor:u,glBorderDash:d,glBorderDashOffset:p,rotation:-1*M,label:$,major:n.major,textBaseline:R,textAlign:F})}}),a.each(T,function(t){if(h.display&&(o.save(),o.lineWidth=t.glWidth,o.strokeStyle=t.glColor,o.setLineDash&&(o.setLineDash(t.glBorderDash),o.lineDashOffset=t.glBorderDashOffset),o.beginPath(),h.drawTicks&&(o.moveTo(t.tx1,t.ty1),o.lineTo(t.tx2,t.ty2)),h.drawOnChartArea&&(o.moveTo(t.x1,t.y1),o.lineTo(t.x2,t.y2)),o.stroke(),o.restore()),s.display){o.save(),o.translate(t.labelX,t.labelY),o.rotate(t.rotation),o.font=t.major?x.font:y.font,o.fillStyle=t.major?b:v,o.textBaseline=t.textBaseline,o.textAlign=t.textAlign;var i=t.label;if(a.isArray(i))for(var n=i.length,r=1.5*y.size,l=e.isHorizontal()?0:-r*(n-1)/2,c=0;c<n;++c)o.fillText(""+i[c],0,l),l+=r;else o.fillText(i,0,0);o.restore()}}),p.display){var D,E,L=0,$=d(p)/2;if(m)D=e.left+(e.right-e.left)/2,E="bottom"===i.position?e.bottom-$-S.bottom:e.top+$+S.top;else{var F="left"===i.position;D=F?e.left+$+S.top:e.right-$-S.top,E=e.top+(e.bottom-e.top)/2,L=F?-.5*Math.PI:.5*Math.PI}o.save(),o.translate(D,E),o.rotate(L),o.textAlign="center",o.textBaseline="middle",o.fillStyle=k,o.font=C.font,o.fillText(p.labelString,0,0),o.restore()}if(h.drawBorder){o.lineWidth=a.valueAtIndexOrDefault(h.lineWidth,0),o.strokeStyle=a.valueAtIndexOrDefault(h.color,0);var R=e.left,W=e.right+A,V=e.top,N=e.bottom+A,H=a.aliasPixel(o.lineWidth);m?(V=N="top"===i.position?e.bottom:e.top,V+=H,N+=H):(R=W="left"===i.position?e.right:e.left,R+=H,W+=H),o.beginPath(),o.moveTo(R,V),o.lineTo(W,N),o.stroke()}}}})},{26:26,27:27,35:35,46:46}],34:[function(t,e,i){"use strict";var n=t(26),o=t(46),a=t(31);e.exports={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=o.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?o.merge({},[n.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=o.extend(this.defaults[t],e))},addScalesToLayout:function(t){o.each(t.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,a.addBox(t,e)})}}},{26:26,31:31,46:46}],35:[function(t,e,i){"use strict";var n=t(46);e.exports={formatters:{values:function(t){return n.isArray(t)?t:""+t},linear:function(t,e,i){var o=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(o)>1&&t!==Math.floor(t)&&(o=t-Math.floor(t));var a=n.log10(Math.abs(o)),r="";if(0!==t)if(Math.max(Math.abs(i[0]),Math.abs(i[i.length-1]))<1e-4){var s=n.log10(Math.abs(t));r=t.toExponential(Math.floor(s)-Math.floor(a))}else{var l=-1*Math.floor(a);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,e,i){var o=t/Math.pow(10,Math.floor(n.log10(t)));return 0===t?"0":1===o||2===o||5===o||0===e||e===i.length-1?t.toExponential():""}}}},{46:46}],36:[function(t,e,i){"use strict";var n=t(26),o=t(27),a=t(46);n._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:a.noop,title:function(t,e){var i="",n=e.labels,o=n?n.length:0;if(t.length>0){var a=t[0];a.xLabel?i=a.xLabel:o>0&&a.index<o&&(i=n[a.index])}return i},afterTitle:a.noop,beforeBody:a.noop,beforeLabel:a.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),i+=t.yLabel},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:a.noop,afterBody:a.noop,beforeFooter:a.noop,footer:a.noop,afterFooter:a.noop}}});var r={average:function(t){if(!t.length)return!1;var e,i,n=0,o=0,a=0;for(e=0,i=t.length;e<i;++e){var r=t[e];if(r&&r.hasValue()){var s=r.tooltipPosition();n+=s.x,o+=s.y,++a}}return{x:Math.round(n/a),y:Math.round(o/a)}},nearest:function(t,e){var i,n,o,r=e.x,s=e.y,l=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var c=t[i];if(c&&c.hasValue()){var u=c.getCenterPoint(),d=a.distanceBetweenPoints(e,u);d<l&&(l=d,o=c)}}if(o){var h=o.tooltipPosition();r=h.x,s=h.y}return{x:r,y:s}}};function s(t,e){var i=a.color(t);return i.alpha(e*i.alpha()).rgbaString()}function l(t,e){return e&&(a.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function c(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function u(t){var e=n.global,i=a.valueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:i(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:i(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:i(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:i(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:i(t.titleFontStyle,e.defaultFontStyle),titleFontSize:i(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:i(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:i(t.footerFontStyle,e.defaultFontStyle),footerFontSize:i(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function d(t){return l([],c(t))}(e.exports=o.extend({initialize:function(){this._model=u(this._options),this._lastActive=[]},getTitle:function(){var t=this._options.callbacks,e=t.beforeTitle.apply(this,arguments),i=t.title.apply(this,arguments),n=t.afterTitle.apply(this,arguments),o=[];return o=l(o,c(e)),o=l(o,c(i)),o=l(o,c(n))},getBeforeBody:function(){return d(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var i=this,n=i._options.callbacks,o=[];return a.each(t,function(t){var a={before:[],lines:[],after:[]};l(a.before,c(n.beforeLabel.call(i,t,e))),l(a.lines,n.label.call(i,t,e)),l(a.after,c(n.afterLabel.call(i,t,e))),o.push(a)}),o},getAfterBody:function(){return d(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this._options.callbacks,e=t.beforeFooter.apply(this,arguments),i=t.footer.apply(this,arguments),n=t.afterFooter.apply(this,arguments),o=[];return o=l(o,c(e)),o=l(o,c(i)),o=l(o,c(n))},update:function(t){var e,i,n,o,s,l,c,d=this,h=d._options,p=d._model,f=d._model=u(h),m=d._active,g=d._data,v={xAlign:p.xAlign,yAlign:p.yAlign},y={x:p.x,y:p.y},b={width:p.width,height:p.height},x={x:p.caretX,y:p.caretY};if(m.length){f.opacity=1;var w=[],k=[];x=r[h.position].call(d,m,d._eventPosition);var C=[];for(e=0,i=m.length;e<i;++e)C.push((n=m[e],o=void 0,s=void 0,l=void 0,c=void 0,o=n._xScale,s=n._yScale||n._scale,l=n._index,c=n._datasetIndex,{xLabel:o?o.getLabelForIndex(l,c):"",yLabel:s?s.getLabelForIndex(l,c):"",index:l,datasetIndex:c,x:n._model.x,y:n._model.y}));h.filter&&(C=C.filter(function(t){return h.filter(t,g)})),h.itemSort&&(C=C.sort(function(t,e){return h.itemSort(t,e,g)})),a.each(C,function(t){w.push(h.callbacks.labelColor.call(d,t,d._chart)),k.push(h.callbacks.labelTextColor.call(d,t,d._chart))}),f.title=d.getTitle(C,g),f.beforeBody=d.getBeforeBody(C,g),f.body=d.getBody(C,g),f.afterBody=d.getAfterBody(C,g),f.footer=d.getFooter(C,g),f.x=Math.round(x.x),f.y=Math.round(x.y),f.caretPadding=h.caretPadding,f.labelColors=w,f.labelTextColors=k,f.dataPoints=C,b=function(t,e){var i=t._chart.ctx,n=2*e.yPadding,o=0,r=e.body,s=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);s+=e.beforeBody.length+e.afterBody.length;var l=e.title.length,c=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;n+=l*u,n+=l?(l-1)*e.titleSpacing:0,n+=l?e.titleMarginBottom:0,n+=s*d,n+=s?(s-1)*e.bodySpacing:0,n+=c?e.footerMarginTop:0,n+=c*h,n+=c?(c-1)*e.footerSpacing:0;var p=0,f=function(t){o=Math.max(o,i.measureText(t).width+p)};return i.font=a.fontString(u,e._titleFontStyle,e._titleFontFamily),a.each(e.title,f),i.font=a.fontString(d,e._bodyFontStyle,e._bodyFontFamily),a.each(e.beforeBody.concat(e.afterBody),f),p=e.displayColors?d+2:0,a.each(r,function(t){a.each(t.before,f),a.each(t.lines,f),a.each(t.after,f)}),p=0,i.font=a.fontString(h,e._footerFontStyle,e._footerFontFamily),a.each(e.footer,f),{width:o+=2*e.xPadding,height:n}}(this,f),y=function(t,e,i,n){var o=t.x,a=t.y,r=t.caretSize,s=t.caretPadding,l=t.cornerRadius,c=i.xAlign,u=i.yAlign,d=r+s,h=l+s;return"right"===c?o-=e.width:"center"===c&&((o-=e.width/2)+e.width>n.width&&(o=n.width-e.width),o<0&&(o=0)),"top"===u?a+=d:a-="bottom"===u?e.height+d:e.height/2,"center"===u?"left"===c?o+=d:"right"===c&&(o-=d):"left"===c?o-=h:"right"===c&&(o+=h),{x:o,y:a}}(f,b,v=function(t,e){var i,n,o,a,r,s=t._model,l=t._chart,c=t._chart.chartArea,u="center",d="center";s.y<e.height?d="top":s.y>l.height-e.height&&(d="bottom");var h=(c.left+c.right)/2,p=(c.top+c.bottom)/2;"center"===d?(i=function(t){return t<=h},n=function(t){return t>h}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),o=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},a=function(t){return t-e.width-s.caretSize-s.caretPadding<0},r=function(t){return t<=p?"top":"bottom"},i(s.x)?(u="left",o(s.x)&&(u="center",d=r(s.y))):n(s.x)&&(u="right",a(s.x)&&(u="center",d=r(s.y)));var f=t._options;return{xAlign:f.xAlign?f.xAlign:u,yAlign:f.yAlign?f.yAlign:d}}(this,b),d._chart)}else f.opacity=0;return f.xAlign=v.xAlign,f.yAlign=v.yAlign,f.x=y.x,f.y=y.y,f.width=b.width,f.height=b.height,f.caretX=x.x,f.caretY=x.y,d._model=f,t&&h.custom&&h.custom.call(d,f),d},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,o=this.getCaretPosition(t,e,n);i.lineTo(o.x1,o.y1),i.lineTo(o.x2,o.y2),i.lineTo(o.x3,o.y3)},getCaretPosition:function(t,e,i){var n,o,a,r,s,l,c=i.caretSize,u=i.cornerRadius,d=i.xAlign,h=i.yAlign,p=t.x,f=t.y,m=e.width,g=e.height;if("center"===h)s=f+g/2,"left"===d?(o=(n=p)-c,a=n,r=s+c,l=s-c):(o=(n=p+m)+c,a=n,r=s-c,l=s+c);else if("left"===d?(n=(o=p+u+c)-c,a=o+c):"right"===d?(n=(o=p+m-u-c)-c,a=o+c):(n=(o=i.caretX)-c,a=o+c),"top"===h)s=(r=f)-c,l=r;else{s=(r=f+g)+c,l=r;var v=a;a=n,n=v}return{x1:n,x2:o,x3:a,y1:r,y2:s,y3:l}},drawTitle:function(t,e,i,n){var o=e.title;if(o.length){i.textAlign=e._titleAlign,i.textBaseline="top";var r,l,c=e.titleFontSize,u=e.titleSpacing;for(i.fillStyle=s(e.titleFontColor,n),i.font=a.fontString(c,e._titleFontStyle,e._titleFontFamily),r=0,l=o.length;r<l;++r)i.fillText(o[r],t.x,t.y),t.y+=c+u,r+1===o.length&&(t.y+=e.titleMarginBottom-u)}},drawBody:function(t,e,i,n){var o=e.bodyFontSize,r=e.bodySpacing,l=e.body;i.textAlign=e._bodyAlign,i.textBaseline="top",i.font=a.fontString(o,e._bodyFontStyle,e._bodyFontFamily);var c=0,u=function(e){i.fillText(e,t.x+c,t.y),t.y+=o+r};i.fillStyle=s(e.bodyFontColor,n),a.each(e.beforeBody,u);var d=e.displayColors;c=d?o+2:0,a.each(l,function(r,l){var c=s(e.labelTextColors[l],n);i.fillStyle=c,a.each(r.before,u),a.each(r.lines,function(a){d&&(i.fillStyle=s(e.legendColorBackground,n),i.fillRect(t.x,t.y,o,o),i.lineWidth=1,i.strokeStyle=s(e.labelColors[l].borderColor,n),i.strokeRect(t.x,t.y,o,o),i.fillStyle=s(e.labelColors[l].backgroundColor,n),i.fillRect(t.x+1,t.y+1,o-2,o-2),i.fillStyle=c),u(a)}),a.each(r.after,u)}),c=0,a.each(e.afterBody,u),t.y-=r},drawFooter:function(t,e,i,n){var o=e.footer;o.length&&(t.y+=e.footerMarginTop,i.textAlign=e._footerAlign,i.textBaseline="top",i.fillStyle=s(e.footerFontColor,n),i.font=a.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),a.each(o,function(n){i.fillText(n,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing}))},drawBackground:function(t,e,i,n,o){i.fillStyle=s(e.backgroundColor,o),i.strokeStyle=s(e.borderColor,o),i.lineWidth=e.borderWidth;var a=e.xAlign,r=e.yAlign,l=t.x,c=t.y,u=n.width,d=n.height,h=e.cornerRadius;i.beginPath(),i.moveTo(l+h,c),"top"===r&&this.drawCaret(t,n),i.lineTo(l+u-h,c),i.quadraticCurveTo(l+u,c,l+u,c+h),"center"===r&&"right"===a&&this.drawCaret(t,n),i.lineTo(l+u,c+d-h),i.quadraticCurveTo(l+u,c+d,l+u-h,c+d),"bottom"===r&&this.drawCaret(t,n),i.lineTo(l+h,c+d),i.quadraticCurveTo(l,c+d,l,c+d-h),"center"===r&&"left"===a&&this.drawCaret(t,n),i.lineTo(l,c+h),i.quadraticCurveTo(l,c,l+h,c),i.closePath(),i.fill(),e.borderWidth>0&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},o=Math.abs(e.opacity<.001)?0:e.opacity,a=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&a&&(this.drawBackground(n,e,t,i,o),n.x+=e.xPadding,n.y+=e.yPadding,this.drawTitle(n,e,t,o),this.drawBody(n,e,t,o),this.drawFooter(n,e,t,o))}},handleEvent:function(t){var e,i=this,n=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:i._active=i._chart.getElementsAtEventForMode(t,n.mode,n),(e=!a.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(n.enabled||n.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}})).positioners=r},{26:26,27:27,46:46}],37:[function(t,e,i){"use strict";var n=t(26),o=t(27),a=t(46);n._set("global",{elements:{arc:{backgroundColor:n.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=o.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var n=a.getAngleFromPoint(i,{x:t,y:e}),o=n.angle,r=n.distance,s=i.startAngle,l=i.endAngle;l<s;)l+=2*Math.PI;for(;o>l;)o-=2*Math.PI;for(;o<s;)o+=2*Math.PI;var c=o>=s&&o<=l,u=r>=i.innerRadius&&r<=i.outerRadius;return c&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,n=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,n),t.arc(e.x,e.y,e.innerRadius,n,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},{26:26,27:27,46:46}],38:[function(t,e,i){"use strict";var n=t(26),o=t(27),a=t(46),r=n.global;n._set("global",{elements:{line:{tension:.4,backgroundColor:r.defaultColor,borderWidth:3,borderColor:r.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=o.extend({draw:function(){var t,e,i,n,o=this._view,s=this._chart.ctx,l=o.spanGaps,c=this._children.slice(),u=r.elements.line,d=-1;for(this._loop&&c.length&&c.push(c[0]),s.save(),s.lineCap=o.borderCapStyle||u.borderCapStyle,s.setLineDash&&s.setLineDash(o.borderDash||u.borderDash),s.lineDashOffset=o.borderDashOffset||u.borderDashOffset,s.lineJoin=o.borderJoinStyle||u.borderJoinStyle,s.lineWidth=o.borderWidth||u.borderWidth,s.strokeStyle=o.borderColor||r.defaultColor,s.beginPath(),d=-1,t=0;t<c.length;++t)e=c[t],i=a.previousItem(c,t),n=e._view,0===t?n.skip||(s.moveTo(n.x,n.y),d=t):(i=-1===d?i:c[d],n.skip||(d!==t-1&&!l||-1===d?s.moveTo(n.x,n.y):a.canvas.lineTo(s,i._view,e._view),d=t));s.stroke(),s.restore()}})},{26:26,27:27,46:46}],39:[function(t,e,i){"use strict";var n=t(26),o=t(27),a=t(46),r=n.global.defaultColor;function s(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}n._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:r,borderColor:r,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=o.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:s,inXRange:s,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._model,o=this._chart.ctx,s=e.pointStyle,l=e.rotation,c=e.radius,u=e.x,d=e.y;e.skip||(void 0===t||i.x>=t.left&&1.01*t.right>=i.x&&i.y>=t.top&&1.01*t.bottom>=i.y)&&(o.strokeStyle=e.borderColor||r,o.lineWidth=a.valueOrDefault(e.borderWidth,n.global.elements.point.borderWidth),o.fillStyle=e.backgroundColor||r,a.canvas.drawPoint(o,s,c,u,d,l))}})},{26:26,27:27,46:46}],40:[function(t,e,i){"use strict";var n=t(26),o=t(27);function a(t){return void 0!==t._view.width}function r(t){var e,i,n,o,r=t._view;if(a(t)){var s=r.width/2;e=r.x-s,i=r.x+s,n=Math.min(r.y,r.base),o=Math.max(r.y,r.base)}else{var l=r.height/2;e=Math.min(r.x,r.base),i=Math.max(r.x,r.base),n=r.y-l,o=r.y+l}return{left:e,top:n,right:i,bottom:o}}n._set("global",{elements:{rectangle:{backgroundColor:n.global.defaultColor,borderColor:n.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=o.extend({draw:function(){var t,e,i,n,o,a,r,s=this._chart.ctx,l=this._view,c=l.borderWidth;if(l.horizontal?(t=l.base,e=l.x,i=l.y-l.height/2,n=l.y+l.height/2,o=e>t?1:-1,a=1,r=l.borderSkipped||"left"):(t=l.x-l.width/2,e=l.x+l.width/2,i=l.y,o=1,a=(n=l.base)>i?1:-1,r=l.borderSkipped||"bottom"),c){var u=Math.min(Math.abs(t-e),Math.abs(i-n)),d=(c=c>u?u:c)/2,h=t+("left"!==r?d*o:0),p=e+("right"!==r?-d*o:0),f=i+("top"!==r?d*a:0),m=n+("bottom"!==r?-d*a:0);h!==p&&(i=f,n=m),f!==m&&(t=h,e=p)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=c;var g=[[t,n],[t,i],[e,i],[e,n]],v=["bottom","left","top","right"].indexOf(r,0);function y(t){return g[(v+t)%4]}-1===v&&(v=0);var b=y(0);s.moveTo(b[0],b[1]);for(var x=1;x<4;x++)b=y(x),s.lineTo(b[0],b[1]);s.fill(),c&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var n=r(this);i=t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}return i},inLabelRange:function(t,e){if(!this._view)return!1;var i=r(this);return a(this)?t>=i.left&&t<=i.right:e>=i.top&&e<=i.bottom},inXRange:function(t){var e=r(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=r(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,i=this._view;return a(this)?(t=i.x,e=(i.y+i.base)/2):(t=(i.x+i.base)/2,e=i.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},{26:26,27:27}],41:[function(t,e,i){"use strict";e.exports={},e.exports.Arc=t(37),e.exports.Line=t(38),e.exports.Point=t(39),e.exports.Rectangle=t(40)},{37:37,38:38,39:39,40:40}],42:[function(t,e,i){"use strict";var n=t(43);i=e.exports={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,n,o,a){if(a){var r=Math.min(a,o/2-1e-7,n/2-1e-7);t.moveTo(e+r,i),t.lineTo(e+n-r,i),t.arcTo(e+n,i,e+n,i+r,r),t.lineTo(e+n,i+o-r),t.arcTo(e+n,i+o,e+n-r,i+o,r),t.lineTo(e+r,i+o),t.arcTo(e,i+o,e,i+o-r,r),t.lineTo(e,i+r),t.arcTo(e,i,e+r,i,r),t.closePath(),t.moveTo(e,i)}else t.rect(e,i,n,o)},drawPoint:function(t,e,i,n,o,a){var r,s,l,c,u,d;if(a=a||0,!e||"object"!=typeof e||"[object HTMLImageElement]"!==(r=e.toString())&&"[object HTMLCanvasElement]"!==r){if(!(isNaN(i)||i<=0)){switch(t.save(),t.translate(n,o),t.rotate(a*Math.PI/180),t.beginPath(),e){default:t.arc(0,0,i,0,2*Math.PI),t.closePath();break;case"triangle":u=(s=3*i/Math.sqrt(3))*Math.sqrt(3)/2,t.moveTo(-s/2,u/3),t.lineTo(s/2,u/3),t.lineTo(0,-2*u/3),t.closePath();break;case"rect":d=1/Math.SQRT2*i,t.rect(-d,-d,2*d,2*d);break;case"rectRounded":var h=i/Math.SQRT2,p=-h,f=-h,m=Math.SQRT2*i;this.roundedRect(t,p,f,m,m,.425*i);break;case"rectRot":d=1/Math.SQRT2*i,t.moveTo(-d,0),t.lineTo(0,d),t.lineTo(d,0),t.lineTo(0,-d),t.closePath();break;case"cross":t.moveTo(0,i),t.lineTo(0,-i),t.moveTo(-i,0),t.lineTo(i,0);break;case"crossRot":l=Math.cos(Math.PI/4)*i,c=Math.sin(Math.PI/4)*i,t.moveTo(-l,-c),t.lineTo(l,c),t.moveTo(-l,c),t.lineTo(l,-c);break;case"star":t.moveTo(0,i),t.lineTo(0,-i),t.moveTo(-i,0),t.lineTo(i,0),l=Math.cos(Math.PI/4)*i,c=Math.sin(Math.PI/4)*i,t.moveTo(-l,-c),t.lineTo(l,c),t.moveTo(-l,c),t.lineTo(l,-c);break;case"line":t.moveTo(-i,0),t.lineTo(i,0);break;case"dash":t.moveTo(0,0),t.lineTo(i,0)}t.fill(),t.stroke(),t.restore()}}else t.drawImage(e,n-e.width/2,o-e.height/2,e.width,e.height)},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,n){if(i.steppedLine)return"after"===i.steppedLine&&!n||"after"!==i.steppedLine&&n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y),void t.lineTo(i.x,i.y);i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}};n.clear=i.clear,n.drawRoundedRectangle=function(t){t.beginPath(),i.roundedRect.apply(i,arguments)}},{43:43}],43:[function(t,e,i){"use strict";var n,o={noop:function(){},uid:(n=0,function(){return n++}),isNullOrUndef:function(t){return null==t},isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return o.valueOrDefault(o.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,n){var a,r,s;if(o.isArray(t))if(r=t.length,n)for(a=r-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;a<r;a++)e.call(i,t[a],a);else if(o.isObject(t))for(r=(s=Object.keys(t)).length,a=0;a<r;a++)e.call(i,t[s[a]],s[a])},arrayEquals:function(t,e){var i,n,a,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(a=t[i],r=e[i],a instanceof Array&&r instanceof Array){if(!o.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},clone:function(t){if(o.isArray(t))return t.map(o.clone);if(o.isObject(t)){for(var e={},i=Object.keys(t),n=i.length,a=0;a<n;++a)e[i[a]]=o.clone(t[i[a]]);return e}return t},_merger:function(t,e,i,n){var a=e[t],r=i[t];o.isObject(a)&&o.isObject(r)?o.merge(a,r,n):e[t]=o.clone(r)},_mergerIf:function(t,e,i){var n=e[t],a=i[t];o.isObject(n)&&o.isObject(a)?o.mergeIf(n,a):e.hasOwnProperty(t)||(e[t]=o.clone(a))},merge:function(t,e,i){var n,a,r,s,l,c=o.isArray(e)?e:[e],u=c.length;if(!o.isObject(t))return t;for(n=(i=i||{}).merger||o._merger,a=0;a<u;++a)if(e=c[a],o.isObject(e))for(l=0,s=(r=Object.keys(e)).length;l<s;++l)n(r[l],t,e,i);return t},mergeIf:function(t,e){return o.merge(t,e,{merger:o._mergerIf})},extend:function(t){for(var e=function(e,i){t[i]=e},i=1,n=arguments.length;i<n;++i)o.each(arguments[i],e);return t},inherits:function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=o.inherits,t&&o.extend(i.prototype,t),i.__super__=e.prototype,i}};e.exports=o,o.callCallback=o.callback,o.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},o.getValueOrDefault=o.valueOrDefault,o.getValueAtIndexOrDefault=o.valueAtIndexOrDefault},{}],44:[function(t,e,i){"use strict";var n=t(43),o={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-o.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*o.easeInBounce(2*t):.5*o.easeOutBounce(2*t-1)+.5}};e.exports={effects:o},n.easingEffects=o},{43:43}],45:[function(t,e,i){"use strict";var n=t(43);e.exports={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,o,a;return n.isObject(t)?(e=+t.top||0,i=+t.right||0,o=+t.bottom||0,a=+t.left||0):e=i=o=a=+t||0,{top:e,right:i,bottom:o,left:a,height:e+o,width:a+i}},resolve:function(t,e,i){var o,a,r;for(o=0,a=t.length;o<a;++o)if(void 0!==(r=t[o])&&(void 0!==e&&"function"==typeof r&&(r=r(e)),void 0!==i&&n.isArray(r)&&(r=r[i]),void 0!==r))return r}}},{43:43}],46:[function(t,e,i){"use strict";e.exports=t(43),e.exports.easing=t(44),e.exports.canvas=t(42),e.exports.options=t(45)},{42:42,43:43,44:44,45:45}],47:[function(t,e,i){e.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],48:[function(t,e,i){"use strict";var n=t(46),o="$chartjs",a="chartjs-",r=a+"render-monitor",s=a+"render-animation",l=["animationstart","webkitAnimationStart"],c={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function u(t,e){var i=n.getStyle(t,e),o=i&&i.match(/^(\d+)(\.\d+)?px$/);return o?Number(o[1]):void 0}var d=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function h(t,e,i){t.addEventListener(e,i,d)}function p(t,e,i){t.removeEventListener(e,i,d)}function f(t,e,i,n,o){return{type:t,chart:e,native:o||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function m(t,e,i){var c,u,d,p,m=t[o]||(t[o]={}),g=m.resizer=function(t){var e=document.createElement("div"),i=a+"size-monitor",n="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=n,e.className=i,e.innerHTML='<div class="'+i+'-expand" style="'+n+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+i+'-shrink" style="'+n+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var o=e.childNodes[0],r=e.childNodes[1];e._reset=function(){o.scrollLeft=1e6,o.scrollTop=1e6,r.scrollLeft=1e6,r.scrollTop=1e6};var s=function(){e._reset(),t()};return h(o,"scroll",s.bind(o,"expand")),h(r,"scroll",s.bind(r,"shrink")),e}((c=function(){if(m.resizer)return e(f("resize",i))},d=!1,p=[],function(){p=Array.prototype.slice.call(arguments),u=u||this,d||(d=!0,n.requestAnimFrame.call(window,function(){d=!1,c.apply(u,p)}))}));!function(t,e){var i=t[o]||(t[o]={}),a=i.renderProxy=function(t){t.animationName===s&&e()};n.each(l,function(e){h(t,e,a)}),i.reflow=!!t.offsetParent,t.classList.add(r)}(t,function(){if(m.resizer){var e=t.parentNode;e&&e!==g.parentNode&&e.insertBefore(g,e.firstChild),g._reset()}})}function g(t){var e=t[o]||{},i=e.resizer;delete e.resizer,function(t){var e=t[o]||{},i=e.renderProxy;i&&(n.each(l,function(e){p(t,e,i)}),delete e.renderProxy),t.classList.remove(r)}(t),i&&i.parentNode&&i.parentNode.removeChild(i)}e.exports={_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t,e,i,n="from{opacity:0.99}to{opacity:1}";e="@-webkit-keyframes "+s+"{"+n+"}@keyframes "+s+"{"+n+"}."+r+"{-webkit-animation:"+s+" 0.001s;animation:"+s+" 0.001s;}",i=(t=this)._style||document.createElement("style"),t._style||(t._style=i,e="/* Chart.js */\n"+e,i.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(i)),i.appendChild(document.createTextNode(e))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){var i=t.style,n=t.getAttribute("height"),a=t.getAttribute("width");if(t[o]={initial:{height:n,width:a,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===a||""===a){var r=u(t,"width");void 0!==r&&(t.width=r)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var s=u(t,"height");void 0!==r&&(t.height=s)}}(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e[o]){var i=e[o].initial;["height","width"].forEach(function(t){var o=i[t];n.isNullOrUndef(o)?e.removeAttribute(t):e.setAttribute(t,o)}),n.each(i.style||{},function(t,i){e.style[i]=t}),e.width=e.width,delete e[o]}},addEventListener:function(t,e,i){var a=t.canvas;if("resize"!==e){var r=i[o]||(i[o]={});h(a,e,(r.proxies||(r.proxies={}))[t.id+"_"+e]=function(e){i(function(t,e){var i=c[t.type]||t.type,o=n.getRelativePosition(t,e);return f(i,e,o.x,o.y,t)}(e,t))})}else m(a,i,t)},removeEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var a=((i[o]||{}).proxies||{})[t.id+"_"+e];a&&p(n,e,a)}else g(n)}},n.addEvent=h,n.removeEvent=p},{46:46}],49:[function(t,e,i){"use strict";var n=t(46),o=t(47),a=t(48),r=a._enabled?a:o;e.exports=n.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},r)},{46:46,47:47,48:48}],50:[function(t,e,i){"use strict";e.exports={},e.exports.filler=t(51),e.exports.legend=t(52),e.exports.title=t(53)},{51:51,52:52,53:53}],51:[function(t,e,i){"use strict";var n=t(26),o=t(41),a=t(46);n._set("global",{plugins:{filler:{propagate:!0}}});var r={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),o=n&&i.isDatasetVisible(e)&&n.dataset._children||[],a=o.length||0;return a?function(t,e){return e<a&&o[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function s(t,e,i){var n,o=t._model||{},a=o.fill;if(void 0===a&&(a=!!o.backgroundColor),!1===a||null===a)return!1;if(!0===a)return"origin";if(n=parseFloat(a,10),isFinite(n)&&Math.floor(n)===n)return"-"!==a[0]&&"+"!==a[0]||(n=e+n),!(n===e||n<0||n>=i)&&n;switch(a){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return a;default:return!1}}function l(t){var e,i=t.el._model||{},n=t.el._scale||{},o=t.fill,a=null;if(isFinite(o))return null;if("start"===o?a=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===o?a=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?a=i.scaleZero:n.getBasePosition?a=n.getBasePosition():n.getBasePixel&&(a=n.getBasePixel()),null!=a){if(void 0!==a.x&&void 0!==a.y)return a;if("number"==typeof a&&isFinite(a))return{x:(e=n.isHorizontal())?a:null,y:e?null:a}}return null}function c(t,e,i){var n,o=t[e].fill,a=[e];if(!i)return o;for(;!1!==o&&-1===a.indexOf(o);){if(!isFinite(o))return o;if(!(n=t[o]))return!1;if(n.visible)return o;a.push(o),o=n.fill}return!1}function u(t){var e=t.fill,i="dataset";return!1===e?null:(isFinite(e)||(i="boundary"),r[i](t))}function d(t){return t&&!t.skip}function h(t,e,i,n,o){var r;if(n&&o){for(t.moveTo(e[0].x,e[0].y),r=1;r<n;++r)a.canvas.lineTo(t,e[r-1],e[r]);for(t.lineTo(i[o-1].x,i[o-1].y),r=o-1;r>0;--r)a.canvas.lineTo(t,i[r],i[r-1],!0)}}e.exports={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,a,r,d=(t.data.datasets||[]).length,h=e.propagate,p=[];for(n=0;n<d;++n)r=null,(a=(i=t.getDatasetMeta(n)).dataset)&&a._model&&a instanceof o.Line&&(r={visible:t.isDatasetVisible(n),fill:s(a,n,d),chart:t,el:a}),i.$filler=r,p.push(r);for(n=0;n<d;++n)(r=p[n])&&(r.fill=c(p,n,h),r.boundary=l(r),r.mapper=u(r))},beforeDatasetDraw:function(t,e){var i=e.meta.$filler;if(i){var o=t.ctx,r=i.el,s=r._view,l=r._children||[],c=i.mapper,u=s.backgroundColor||n.global.defaultColor;c&&u&&l.length&&(a.canvas.clipArea(o,t.chartArea),function(t,e,i,n,o,a){var r,s,l,c,u,p,f,m=e.length,g=n.spanGaps,v=[],y=[],b=0,x=0;for(t.beginPath(),r=0,s=m+!!a;r<s;++r)u=i(c=e[l=r%m]._view,l,n),p=d(c),f=d(u),p&&f?(b=v.push(c),x=y.push(u)):b&&x&&(g?(p&&v.push(c),f&&y.push(u)):(h(t,v,y,b,x),b=x=0,v=[],y=[]));h(t,v,y,b,x),t.closePath(),t.fillStyle=o,t.fill()}(o,l,c,s,u,r._loop),a.canvas.unclipArea(o))}}}},{26:26,41:41,46:46}],52:[function(t,e,i){"use strict";var n=t(26),o=t(27),a=t(46),r=t(31),s=a.noop;function l(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}n._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,o=n.getDatasetMeta(i);o.hidden=null===o.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return a.isArray(e.datasets)?e.datasets.map(function(e,i){return{text:e.label,fillStyle:a.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:i}},this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var c=o.extend({initialize:function(t){a.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:s,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:function(){var t=this,e=t.options.labels||{},i=a.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter(function(i){return e.filter(i,t.chart.data)})),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=t.options,i=e.labels,o=e.display,r=t.ctx,s=n.global,c=a.valueOrDefault,u=c(i.fontSize,s.defaultFontSize),d=c(i.fontStyle,s.defaultFontStyle),h=c(i.fontFamily,s.defaultFontFamily),p=a.fontString(u,d,h),f=t.legendHitBoxes=[],m=t.minSize,g=t.isHorizontal();if(g?(m.width=t.maxWidth,m.height=o?10:0):(m.width=o?10:0,m.height=t.maxHeight),o)if(r.font=p,g){var v=t.lineWidths=[0],y=t.legendItems.length?u+i.padding:0;r.textAlign="left",r.textBaseline="top",a.each(t.legendItems,function(e,n){var o=l(i,u)+u/2+r.measureText(e.text).width;v[v.length-1]+o+i.padding>=t.width&&(y+=u+i.padding,v[v.length]=t.left),f[n]={left:0,top:0,width:o,height:u},v[v.length-1]+=o+i.padding}),m.height+=y}else{var b=i.padding,x=t.columnWidths=[],w=i.padding,k=0,C=0,S=u+b;a.each(t.legendItems,function(t,e){var n=l(i,u)+u/2+r.measureText(t.text).width;C+S>m.height&&(w+=k+i.padding,x.push(k),k=0,C=0),k=Math.max(k,n),C+=S,f[e]={left:0,top:0,width:n,height:u}}),w+=k,x.push(k),m.width+=w}t.width=m.width,t.height=m.height},afterFit:s,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,i=e.labels,o=n.global,r=o.elements.line,s=t.width,c=t.lineWidths;if(e.display){var u,d=t.ctx,h=a.valueOrDefault,p=h(i.fontColor,o.defaultFontColor),f=h(i.fontSize,o.defaultFontSize),m=h(i.fontStyle,o.defaultFontStyle),g=h(i.fontFamily,o.defaultFontFamily),v=a.fontString(f,m,g);d.textAlign="left",d.textBaseline="middle",d.lineWidth=.5,d.strokeStyle=p,d.fillStyle=p,d.font=v;var y=l(i,f),b=t.legendHitBoxes,x=t.isHorizontal();u=x?{x:t.left+(s-c[0])/2,y:t.top+i.padding,line:0}:{x:t.left+i.padding,y:t.top+i.padding,line:0};var w=f+i.padding;a.each(t.legendItems,function(n,l){var p=d.measureText(n.text).width,m=y+f/2+p,g=u.x,v=u.y;x?g+m>=s&&(v=u.y+=w,u.line++,g=u.x=t.left+(s-c[u.line])/2):v+w>t.bottom&&(g=u.x=g+t.columnWidths[u.line]+i.padding,v=u.y=t.top+i.padding,u.line++),function(t,i,n){if(!(isNaN(y)||y<=0)){d.save(),d.fillStyle=h(n.fillStyle,o.defaultColor),d.lineCap=h(n.lineCap,r.borderCapStyle),d.lineDashOffset=h(n.lineDashOffset,r.borderDashOffset),d.lineJoin=h(n.lineJoin,r.borderJoinStyle),d.lineWidth=h(n.lineWidth,r.borderWidth),d.strokeStyle=h(n.strokeStyle,o.defaultColor);var s=0===h(n.lineWidth,r.borderWidth);if(d.setLineDash&&d.setLineDash(h(n.lineDash,r.borderDash)),e.labels&&e.labels.usePointStyle){var l=f*Math.SQRT2/2,c=l/Math.SQRT2,u=t+c,p=i+c;a.canvas.drawPoint(d,n.pointStyle,l,u,p)}else s||d.strokeRect(t,i,y,f),d.fillRect(t,i,y,f);d.restore()}}(g,v,n),b[l].left=g,b[l].top=v,function(t,e,i,n){var o=f/2,a=y+o+t,r=e+o;d.fillText(i.text,a,r),i.hidden&&(d.beginPath(),d.lineWidth=2,d.moveTo(a,r),d.lineTo(a+n,r),d.stroke())}(g,v,n,p),x?u.x+=m+i.padding:u.y+=w})}},handleEvent:function(t){var e=this,i=e.options,n="mouseup"===t.type?"click":t.type,o=!1;if("mousemove"===n){if(!i.onHover)return}else{if("click"!==n)return;if(!i.onClick)return}var a=t.x,r=t.y;if(a>=e.left&&a<=e.right&&r>=e.top&&r<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var c=s[l];if(a>=c.left&&a<=c.left+c.width&&r>=c.top&&r<=c.top+c.height){if("click"===n){i.onClick.call(e,t.native,e.legendItems[l]),o=!0;break}if("mousemove"===n){i.onHover.call(e,t.native,e.legendItems[l]),o=!0;break}}}return o}});function u(t,e){var i=new c({ctx:t.ctx,options:e,chart:t});r.configure(t,i,e),r.addBox(t,i),t.legend=i}e.exports={id:"legend",_element:c,beforeInit:function(t){var e=t.options.legend;e&&u(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(a.mergeIf(e,n.global.legend),i?(r.configure(t,i,e),i.options=e):u(t,e)):i&&(r.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}}},{26:26,27:27,31:31,46:46}],53:[function(t,e,i){"use strict";var n=t(26),o=t(27),a=t(46),r=t(31),s=a.noop;n._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});var l=o.extend({initialize:function(t){a.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:s,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:s,afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=a.valueOrDefault,i=t.options,o=i.display,r=e(i.fontSize,n.global.defaultFontSize),s=t.minSize,l=a.isArray(i.text)?i.text.length:1,c=a.options.toLineHeight(i.lineHeight,r),u=o?l*c+2*i.padding:0;t.isHorizontal()?(s.width=t.maxWidth,s.height=u):(s.width=u,s.height=t.maxHeight),t.width=s.width,t.height=s.height},afterFit:s,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,i=a.valueOrDefault,o=t.options,r=n.global;if(o.display){var s,l,c,u=i(o.fontSize,r.defaultFontSize),d=i(o.fontStyle,r.defaultFontStyle),h=i(o.fontFamily,r.defaultFontFamily),p=a.fontString(u,d,h),f=a.options.toLineHeight(o.lineHeight,u),m=f/2+o.padding,g=0,v=t.top,y=t.left,b=t.bottom,x=t.right;e.fillStyle=i(o.fontColor,r.defaultFontColor),e.font=p,t.isHorizontal()?(l=y+(x-y)/2,c=v+m,s=x-y):(l="left"===o.position?y+m:x-m,c=v+(b-v)/2,s=b-v,g=Math.PI*("left"===o.position?-.5:.5)),e.save(),e.translate(l,c),e.rotate(g),e.textAlign="center",e.textBaseline="middle";var w=o.text;if(a.isArray(w))for(var k=0,C=0;C<w.length;++C)e.fillText(w[C],0,k,s),k+=f;else e.fillText(w,0,0,s);e.restore()}}});function c(t,e){var i=new l({ctx:t.ctx,options:e,chart:t});r.configure(t,i,e),r.addBox(t,i),t.titleBlock=i}e.exports={id:"title",_element:l,beforeInit:function(t){var e=t.options.title;e&&c(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(a.mergeIf(e,n.global.title),i?(r.configure(t,i,e),i.options=e):c(t,e)):i&&(r.removeBox(t,i),delete t.titleBlock)}}},{26:26,27:27,31:31,46:46}],54:[function(t,e,i){"use strict";var n=t(33),o=t(34);e.exports=function(){var t=n.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,i=e.getLabels();e.minIndex=0,e.maxIndex=i.length-1,void 0!==e.options.ticks.min&&(t=i.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=i.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=i[e.minIndex],e.max=i[e.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var i=this,n=i.chart.data,o=i.isHorizontal();return n.yLabels&&!o?i.getRightValue(n.datasets[e].data[t]):i.ticks[t-i.minIndex]},getPixelForValue:function(t,e){var i,n=this,o=n.options.offset,a=Math.max(n.maxIndex+1-n.minIndex-(o?0:1),1);if(null!=t&&(i=n.isHorizontal()?t.x:t.y),void 0!==i||void 0!==t&&isNaN(e)){t=i||t;var r=n.getLabels().indexOf(t);e=-1!==r?r:e}if(n.isHorizontal()){var s=n.width/a,l=s*(e-n.minIndex);return o&&(l+=s/2),n.left+Math.round(l)}var c=n.height/a,u=c*(e-n.minIndex);return o&&(u+=c/2),n.top+Math.round(u)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,i=e.options.offset,n=Math.max(e._ticks.length-(i?0:1),1),o=e.isHorizontal(),a=(o?e.width:e.height)/n;return t-=o?e.left:e.top,i&&(t-=a/2),(t<=0?0:Math.round(t/a))+e.minIndex},getBasePixel:function(){return this.bottom}});o.registerScaleType("category",t,{position:"bottom"})}},{33:33,34:34}],55:[function(t,e,i){"use strict";var n=t(26),o=t(46),a=t(34),r=t(35);e.exports=function(t){var e={position:"left",ticks:{callback:r.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,n=i.data.datasets,a=t.isHorizontal();function r(e){return a?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var s=e.stacked;if(void 0===s&&o.each(n,function(t,e){if(!s){var n=i.getDatasetMeta(e);i.isDatasetVisible(e)&&r(n)&&void 0!==n.stack&&(s=!0)}}),e.stacked||s){var l={};o.each(n,function(n,a){var s=i.getDatasetMeta(a),c=[s.type,void 0===e.stacked&&void 0===s.stack?a:"",s.stack].join(".");void 0===l[c]&&(l[c]={positiveValues:[],negativeValues:[]});var u=l[c].positiveValues,d=l[c].negativeValues;i.isDatasetVisible(a)&&r(s)&&o.each(n.data,function(i,n){var o=+t.getRightValue(i);isNaN(o)||s.data[n].hidden||(u[n]=u[n]||0,d[n]=d[n]||0,e.relativePoints?u[n]=100:o<0?d[n]+=o:u[n]+=o)})}),o.each(l,function(e){var i=e.positiveValues.concat(e.negativeValues),n=o.min(i),a=o.max(i);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?a:Math.max(t.max,a)})}else o.each(n,function(e,n){var a=i.getDatasetMeta(n);i.isDatasetVisible(n)&&r(a)&&o.each(e.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||a.data[i].hidden||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n))})});t.min=isFinite(t.min)&&!isNaN(t.min)?t.min:0,t.max=isFinite(t.max)&&!isNaN(t.max)?t.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this.options.ticks;if(this.isHorizontal())t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.width/50));else{var i=o.valueOrDefault(e.fontSize,n.global.defaultFontSize);t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.height/(2*i)))}return t},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this,i=e.start,n=+e.getRightValue(t),o=e.end-i;return e.isHorizontal()?e.left+e.width/o*(n-i):e.bottom-e.height/o*(n-i)},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),n=i?e.width:e.height,o=(i?t-e.left:e.bottom-t)/n;return e.start+(e.end-e.start)*o},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});a.registerScaleType("linear",i,e)}},{26:26,34:34,35:35,46:46}],56:[function(t,e,i){"use strict";var n=t(46),o=t(33);e.exports=function(t){var e=n.noop;t.LinearScaleBase=o.extend({getRightValue:function(t){return"string"==typeof t?+t:o.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=n.sign(t.min),o=n.sign(t.max);i<0&&o<0?t.max=0:i>0&&o>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:e,handleDirectionalChanges:e,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),o={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,precision:e.precision,stepSize:n.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var i,o,a,r=[];if(t.stepSize&&t.stepSize>0)a=t.stepSize;else{var s=n.niceNum(e.max-e.min,!1);a=n.niceNum(s/(t.maxTicks-1),!0),void 0!==(o=t.precision)&&(i=Math.pow(10,o),a=Math.ceil(a*i)/i)}var l=Math.floor(e.min/a)*a,c=Math.ceil(e.max/a)*a;n.isNullOrUndef(t.min)||n.isNullOrUndef(t.max)||!t.stepSize||n.almostWhole((t.max-t.min)/t.stepSize,a/1e3)&&(l=t.min,c=t.max);var u=(c-l)/a;u=n.almostEquals(u,Math.round(u),a/1e3)?Math.round(u):Math.ceil(u),o=1,a<1&&(o=Math.pow(10,1-Math.floor(n.log10(a))),l=Math.round(l*o)/o,c=Math.round(c*o)/o),r.push(void 0!==t.min?t.min:l);for(var d=1;d<u;++d)r.push(Math.round((l+d*a)*o)/o);return r.push(void 0!==t.max?t.max:c),r}(o,t);t.handleDirectionalChanges(),t.max=n.max(a),t.min=n.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),o.prototype.convertTicksToLabels.call(t)}})}},{33:33,46:46}],57:[function(t,e,i){"use strict";var n=t(46),o=t(33),a=t(34),r=t(35);e.exports=function(t){var e={position:"left",ticks:{callback:r.formatters.logarithmic}},i=o.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,o=i.data.datasets,a=t.isHorizontal();function r(e){return a?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var s=e.stacked;if(void 0===s&&n.each(o,function(t,e){if(!s){var n=i.getDatasetMeta(e);i.isDatasetVisible(e)&&r(n)&&void 0!==n.stack&&(s=!0)}}),e.stacked||s){var l={};n.each(o,function(o,a){var s=i.getDatasetMeta(a),c=[s.type,void 0===e.stacked&&void 0===s.stack?a:"",s.stack].join(".");i.isDatasetVisible(a)&&r(s)&&(void 0===l[c]&&(l[c]=[]),n.each(o.data,function(e,i){var n=l[c],o=+t.getRightValue(e);isNaN(o)||s.data[i].hidden||o<0||(n[i]=n[i]||0,n[i]+=o)}))}),n.each(l,function(e){if(e.length>0){var i=n.min(e),o=n.max(e);t.min=null===t.min?i:Math.min(t.min,i),t.max=null===t.max?o:Math.max(t.max,o)}})}else n.each(o,function(e,o){var a=i.getDatasetMeta(o);i.isDatasetVisible(o)&&r(a)&&n.each(e.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||a.data[i].hidden||n<0||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n),0!==n&&(null===t.minNotZero||n<t.minNotZero)&&(t.minNotZero=n))})});this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks,i=n.valueOrDefault;t.min=i(e.min,t.min),t.max=i(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(n.log10(t.min))-1),t.max=Math.pow(10,Math.floor(n.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(n.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(n.log10(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(n.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),o={min:e.min,max:e.max},a=t.ticks=function(t,e){var i,o,a=[],r=n.valueOrDefault,s=r(t.min,Math.pow(10,Math.floor(n.log10(e.min)))),l=Math.floor(n.log10(e.max)),c=Math.ceil(e.max/Math.pow(10,l));0===s?(i=Math.floor(n.log10(e.minNotZero)),o=Math.floor(e.minNotZero/Math.pow(10,i)),a.push(s),s=o*Math.pow(10,i)):(i=Math.floor(n.log10(s)),o=Math.floor(s/Math.pow(10,i)));var u=i<0?Math.pow(10,Math.abs(i)):1;do{a.push(s),10==++o&&(o=1,u=++i>=0?1:u),s=Math.round(o*Math.pow(10,i)*u)/u}while(i<l||i===l&&o<c);var d=r(t.max,s);return a.push(d),a}(o,t);t.max=n.max(a),t.min=n.min(a),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),o.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(n.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(e){var i,o,a,r,s,l=this,c=l.options.ticks.reverse,u=n.log10,d=l._getFirstTickValue(l.minNotZero),h=0;return e=+l.getRightValue(e),c?(a=l.end,r=l.start,s=-1):(a=l.start,r=l.end,s=1),l.isHorizontal()?(i=l.width,o=c?l.right:l.left):(i=l.height,s*=-1,o=c?l.top:l.bottom),e!==a&&(0===a&&(i-=h=n.getValueOrDefault(l.options.ticks.fontSize,t.defaults.global.defaultFontSize),a=d),0!==e&&(h+=i/(u(r)-u(a))*(u(e)-u(a))),o+=s*h),o},getValueForPixel:function(e){var i,o,a,r,s=this,l=s.options.ticks.reverse,c=n.log10,u=s._getFirstTickValue(s.minNotZero);if(l?(o=s.end,a=s.start):(o=s.start,a=s.end),s.isHorizontal()?(i=s.width,r=l?s.right-e:e-s.left):(i=s.height,r=l?e-s.top:s.bottom-e),r!==o){if(0===o){var d=n.getValueOrDefault(s.options.ticks.fontSize,t.defaults.global.defaultFontSize);r-=d,i-=d,o=u}r*=c(a)-c(o),r/=i,r=Math.pow(10,c(o)+r)}return r}});a.registerScaleType("logarithmic",i,e)}},{33:33,34:34,35:35,46:46}],58:[function(t,e,i){"use strict";var n=t(26),o=t(46),a=t(34),r=t(35);e.exports=function(t){var e=n.global,i={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:r.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function s(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function l(t){var i=t.options.pointLabels,n=o.valueOrDefault(i.fontSize,e.defaultFontSize),a=o.valueOrDefault(i.fontStyle,e.defaultFontStyle),r=o.valueOrDefault(i.fontFamily,e.defaultFontFamily);return{size:n,style:a,family:r,font:o.fontString(n,a,r)}}function c(t,e,i,n,o){return t===n||t===o?{start:e-i/2,end:e+i/2}:t<n||t>o?{start:e-i-5,end:e}:{start:e,end:e+i+5}}function u(t){return 0===t||180===t?"center":t<180?"left":"right"}function d(t,e,i,n){if(o.isArray(e))for(var a=i.y,r=1.5*n,s=0;s<e.length;++s)t.fillText(e[s],i.x,a),a+=r;else t.fillText(e,i.x,i.y)}function h(t,e,i){90===t||270===t?i.y-=e.h/2:(t>270||t<90)&&(i.y-=e.h)}function p(t){return o.isNumber(t)?t:0}var f=t.LinearScaleBase.extend({setDimensions:function(){var t=this,i=t.options,n=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var a=o.min([t.height,t.width]),r=o.valueOrDefault(n.fontSize,e.defaultFontSize);t.drawingArea=i.display?a/2-(r/2+n.backdropPaddingY):a/2},determineDataLimits:function(){var t=this,e=t.chart,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;o.each(e.data.datasets,function(a,r){if(e.isDatasetVisible(r)){var s=e.getDatasetMeta(r);o.each(a.data,function(e,o){var a=+t.getRightValue(e);isNaN(a)||s.data[o].hidden||(i=Math.min(a,i),n=Math.max(a,n))})}}),t.min=i===Number.POSITIVE_INFINITY?0:i,t.max=n===Number.NEGATIVE_INFINITY?0:n,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=o.valueOrDefault(t.fontSize,e.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,e;this.options.pointLabels.display?function(t){var e,i,n,a=l(t),r=Math.min(t.height/2,t.width/2),u={r:t.width,l:0,t:t.height,b:0},d={};t.ctx.font=a.font,t._pointLabelSizes=[];var h,p,f,m=s(t);for(e=0;e<m;e++){n=t.getPointPosition(e,r),h=t.ctx,p=a.size,f=t.pointLabels[e]||"",i=o.isArray(f)?{w:o.longestText(h,h.font,f),h:f.length*p+1.5*(f.length-1)*p}:{w:h.measureText(f).width,h:p},t._pointLabelSizes[e]=i;var g=t.getIndexAngle(e),v=o.toDegrees(g)%360,y=c(v,n.x,i.w,0,180),b=c(v,n.y,i.h,90,270);y.start<u.l&&(u.l=y.start,d.l=g),y.end>u.r&&(u.r=y.end,d.r=g),b.start<u.t&&(u.t=b.start,d.t=g),b.end>u.b&&(u.b=b.end,d.b=g)}t.setReductions(r,u,d)}(this):(t=this,e=Math.min(t.height/2,t.width/2),t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0))},setReductions:function(t,e,i){var n=e.l/Math.sin(i.l),o=Math.max(e.r-this.width,0)/Math.sin(i.r),a=-e.t/Math.cos(i.t),r=-Math.max(e.b-this.height,0)/Math.cos(i.b);n=p(n),o=p(o),a=p(a),r=p(r),this.drawingArea=Math.min(Math.round(t-(n+o)/2),Math.round(t-(a+r)/2)),this.setCenterPoint(n,o,a,r)},setCenterPoint:function(t,e,i,n){var o=this,a=o.width-e-o.drawingArea,r=t+o.drawingArea,s=i+o.drawingArea,l=o.height-n-o.drawingArea;o.xCenter=Math.round((r+a)/2+o.left),o.yCenter=Math.round((s+l)/2+o.top)},getIndexAngle:function(t){return t*(2*Math.PI/s(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var i=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*i:(t-e.min)*i},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,i=t.options,n=i.gridLines,a=i.ticks,r=o.valueOrDefault;if(i.display){var c=t.ctx,p=this.getIndexAngle(0),f=r(a.fontSize,e.defaultFontSize),m=r(a.fontStyle,e.defaultFontStyle),g=r(a.fontFamily,e.defaultFontFamily),v=o.fontString(f,m,g);o.each(t.ticks,function(i,l){if(l>0||a.reverse){var u=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);if(n.display&&0!==l&&function(t,e,i,n){var a=t.ctx;if(a.strokeStyle=o.valueAtIndexOrDefault(e.color,n-1),a.lineWidth=o.valueAtIndexOrDefault(e.lineWidth,n-1),t.options.gridLines.circular)a.beginPath(),a.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),a.closePath(),a.stroke();else{var r=s(t);if(0===r)return;a.beginPath();var l=t.getPointPosition(0,i);a.moveTo(l.x,l.y);for(var c=1;c<r;c++)l=t.getPointPosition(c,i),a.lineTo(l.x,l.y);a.closePath(),a.stroke()}}(t,n,u,l),a.display){var d=r(a.fontColor,e.defaultFontColor);if(c.font=v,c.save(),c.translate(t.xCenter,t.yCenter),c.rotate(p),a.showLabelBackdrop){var h=c.measureText(i).width;c.fillStyle=a.backdropColor,c.fillRect(-h/2-a.backdropPaddingX,-u-f/2-a.backdropPaddingY,h+2*a.backdropPaddingX,f+2*a.backdropPaddingY)}c.textAlign="center",c.textBaseline="middle",c.fillStyle=d,c.fillText(i,0,-u),c.restore()}}}),(i.angleLines.display||i.pointLabels.display)&&function(t){var i=t.ctx,n=t.options,a=n.angleLines,r=n.pointLabels;i.lineWidth=a.lineWidth,i.strokeStyle=a.color;var c=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),p=l(t);i.textBaseline="top";for(var f=s(t)-1;f>=0;f--){if(a.display){var m=t.getPointPosition(f,c);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(m.x,m.y),i.stroke(),i.closePath()}if(r.display){var g=t.getPointPosition(f,c+5),v=o.valueAtIndexOrDefault(r.fontColor,f,e.defaultFontColor);i.font=p.font,i.fillStyle=v;var y=t.getIndexAngle(f),b=o.toDegrees(y);i.textAlign=u(b),h(b,t._pointLabelSizes[f],g),d(i,t.pointLabels[f]||"",g,p.size)}}}(t)}}});a.registerScaleType("radialLinear",f,i)}},{26:26,34:34,35:35,46:46}],59:[function(t,e,i){"use strict";var n=t(1);n="function"==typeof n?n:window.moment;var o=t(26),a=t(46),r=t(33),s=t(34),l=Number.MIN_SAFE_INTEGER||-9007199254740991,c=Number.MAX_SAFE_INTEGER||9007199254740991,u={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,15,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,15,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},d=Object.keys(u);function h(t,e){return t-e}function p(t){var e,i,n,o={},a=[];for(e=0,i=t.length;e<i;++e)o[n=t[e]]||(o[n]=!0,a.push(n));return a}function f(t,e,i,n){var o=function(t,e,i){for(var n,o,a,r=0,s=t.length-1;r>=0&&r<=s;){if(o=t[(n=r+s>>1)-1]||null,a=t[n],!o)return{lo:null,hi:a};if(a[e]<i)r=n+1;else{if(!(o[e]>i))return{lo:o,hi:a};s=n-1}}return{lo:a,hi:null}}(t,e,i),a=o.lo?o.hi?o.lo:t[t.length-2]:t[0],r=o.lo?o.hi?o.hi:t[t.length-1]:t[1],s=r[e]-a[e],l=s?(i-a[e])/s:0,c=(r[n]-a[n])*l;return a[n]+c}function m(t,e){var i=e.parser,o=e.parser||e.format;return"function"==typeof i?i(t):"string"==typeof t&&"string"==typeof o?n(t,o):(t instanceof n||(t=n(t)),t.isValid()?t:"function"==typeof o?o(t):t)}function g(t,e){if(a.isNullOrUndef(t))return null;var i=e.options.time,n=m(e.getRightValue(t),i);return n.isValid()?(i.round&&n.startOf(i.round),n.valueOf()):null}function v(t){for(var e=d.indexOf(t)+1,i=d.length;e<i;++e)if(u[d[e]].common)return d[e]}function y(t,e,i,o){var r,s=o.time,l=s.unit||function(t,e,i,n){var o,a,r,s=d.length;for(o=d.indexOf(t);o<s-1;++o)if(r=(a=u[d[o]]).steps?a.steps[a.steps.length-1]:c,a.common&&Math.ceil((i-e)/(r*a.size))<=n)return d[o];return d[s-1]}(s.minUnit,t,e,i),h=v(l),p=a.valueOrDefault(s.stepSize,s.unitStepSize),f="week"===l&&s.isoWeekday,m=o.ticks.major.enabled,g=u[l],y=n(t),b=n(e),x=[];for(p||(p=function(t,e,i,n){var o,a,r,s=e-t,l=u[i],c=l.size,d=l.steps;if(!d)return Math.ceil(s/(n*c));for(o=0,a=d.length;o<a&&(r=d[o],!(Math.ceil(s/(c*r))<=n));++o);return r}(t,e,l,i)),f&&(y=y.isoWeekday(f),b=b.isoWeekday(f)),y=y.startOf(f?"day":l),(b=b.startOf(f?"day":l))<e&&b.add(1,l),r=n(y),m&&h&&!f&&!s.round&&(r.startOf(h),r.add(~~((y-r)/(g.size*p))*p,l));r<b;r.add(p,l))x.push(+r);return x.push(+r),x}e.exports=function(){var t=r.extend({initialize:function(){if(!n)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),r.prototype.initialize.call(this)},update:function(){var t=this.options;return t.time&&t.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),r.prototype.update.apply(this,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),r.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,i,o,r,s,u=this,d=u.chart,f=u.options.time,m=f.unit||"day",v=c,y=l,b=[],x=[],w=[];for(t=0,i=d.data.labels.length;t<i;++t)w.push(g(d.data.labels[t],u));for(t=0,i=(d.data.datasets||[]).length;t<i;++t)if(d.isDatasetVisible(t))if(r=d.data.datasets[t].data,a.isObject(r[0]))for(x[t]=[],e=0,o=r.length;e<o;++e)s=g(r[e],u),b.push(s),x[t][e]=s;else b.push.apply(b,w),x[t]=w.slice(0);else x[t]=[];w.length&&(w=p(w).sort(h),v=Math.min(v,w[0]),y=Math.max(y,w[w.length-1])),b.length&&(b=p(b).sort(h),v=Math.min(v,b[0]),y=Math.max(y,b[b.length-1])),v=g(f.min,u)||v,y=g(f.max,u)||y,v=v===c?+n().startOf(m):v,y=y===l?+n().endOf(m)+1:y,u.min=Math.min(v,y),u.max=Math.max(v+1,y),u._horizontal=u.isHorizontal(),u._table=[],u._timestamps={data:b,datasets:x,labels:w}},buildTicks:function(){var t,e,i,o=this,a=o.min,r=o.max,s=o.options,l=s.time,c=[],h=[];switch(s.ticks.source){case"data":c=o._timestamps.data;break;case"labels":c=o._timestamps.labels;break;case"auto":default:c=y(a,r,o.getLabelCapacity(a),s)}for("ticks"===s.bounds&&c.length&&(a=c[0],r=c[c.length-1]),a=g(l.min,o)||a,r=g(l.max,o)||r,t=0,e=c.length;t<e;++t)(i=c[t])>=a&&i<=r&&h.push(i);return o.min=a,o.max=r,o._unit=l.unit||function(t,e,i,o){var a,r,s=n.duration(n(o).diff(n(i)));for(a=d.length-1;a>=d.indexOf(e);a--)if(r=d[a],u[r].common&&s.as(r)>=t.length)return r;return d[e?d.indexOf(e):0]}(h,l.minUnit,o.min,o.max),o._majorUnit=v(o._unit),o._table=function(t,e,i,n){if("linear"===n||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var o,a,r,s,l,c=[],u=[e];for(o=0,a=t.length;o<a;++o)(s=t[o])>e&&s<i&&u.push(s);for(u.push(i),o=0,a=u.length;o<a;++o)l=u[o+1],r=u[o-1],s=u[o],void 0!==r&&void 0!==l&&Math.round((l+r)/2)===s||c.push({time:s,pos:o/(a-1)});return c}(o._timestamps.data,a,r,s.distribution),o._offsets=function(t,e,i,n,o){var a,r,s=0,l=0;return o.offset&&e.length&&(o.time.min||(a=e.length>1?e[1]:n,r=e[0],s=(f(t,"time",a,"pos")-f(t,"time",r,"pos"))/2),o.time.max||(a=e[e.length-1],r=e.length>1?e[e.length-2]:i,l=(f(t,"time",a,"pos")-f(t,"time",r,"pos"))/2)),{left:s,right:l}}(o._table,h,a,r,s),o._labelFormat=function(t,e){var i,n,o,a=t.length;for(i=0;i<a;i++){if(0!==(n=m(t[i],e)).millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===n.second()&&0===n.minute()&&0===n.hour()||(o=!0)}return o?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}(o._timestamps.data,l),function(t,e){var i,o,a,r,s=[];for(i=0,o=t.length;i<o;++i)a=t[i],r=!!e&&a===+n(a).startOf(e),s.push({value:a,major:r});return s}(h,o._majorUnit)},getLabelForIndex:function(t,e){var i=this.chart.data,n=this.options.time,o=i.labels&&t<i.labels.length?i.labels[t]:"",r=i.datasets[e].data[t];return a.isObject(r)&&(o=this.getRightValue(r)),n.tooltipFormat?m(o,n).format(n.tooltipFormat):"string"==typeof o?o:m(o,n).format(this._labelFormat)},tickFormatFunction:function(t,e,i,n){var o=this.options,r=t.valueOf(),s=o.time.displayFormats,l=s[this._unit],c=this._majorUnit,u=s[c],d=t.clone().startOf(c).valueOf(),h=o.ticks.major,p=h.enabled&&c&&u&&r===d,f=t.format(n||(p?u:l)),m=p?h:o.ticks.minor,g=a.valueOrDefault(m.callback,m.userCallback);return g?g(f,e,i):f},convertTicksToLabels:function(t){var e,i,o=[];for(e=0,i=t.length;e<i;++e)o.push(this.tickFormatFunction(n(t[e].value),e,t));return o},getPixelForOffset:function(t){var e=this,i=e._horizontal?e.width:e.height,n=e._horizontal?e.left:e.top,o=f(e._table,"time",t,"pos");return n+i*(e._offsets.left+o)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._timestamps.datasets[i][e]),null===n&&(n=g(t,this)),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,i=e._horizontal?e.width:e.height,o=e._horizontal?e.left:e.top,a=(i?(t-o)/i:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,r=f(e._table,"pos",a,"time");return n(r)},getLabelWidth:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=a.toRadians(e.maxRotation),r=Math.cos(n),s=Math.sin(n);return i*r+a.valueOrDefault(e.fontSize,o.global.defaultFontSize)*s},getLabelCapacity:function(t){var e=this,i=e.options.time.displayFormats.millisecond,o=e.tickFormatFunction(n(t),0,[],i),a=e.getLabelWidth(o),r=e.isHorizontal()?e.width:e.height,s=Math.floor(r/a);return s>0?s:1}});s.registerScaleType("time",t,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{1:1,26:26,33:33,34:34,46:46}]},{},[7])(7)}),function(t){WOW=function(){return{init:function(){var e=[],i=1;function n(){var i=window.innerHeight,n=window.scrollY;t(".wow").each(function(){if("visible"!=t(this).css("visibility")&&(i+n-100>o(this)&&n<o(this)||i+n-100>o(this)+t(this).height()&&n<o(this)+t(this).height()||i+n==t(document).height()&&o(this)+100>t(document).height())){var a=t(this).index(".wow"),r=t(this).attr("data-wow-delay");if(r){r=t(this).attr("data-wow-delay").slice(0,-1);var s=this;parseFloat(r);t(s).addClass("animated"),t(s).css({visibility:"visible"}),t(s).css({"animation-delay":r}),t(s).css({"animation-name":e[a]});var l=1e3*t(this).css("animation-duration").slice(0,-1);t(this).attr("data-wow-delay")&&(l+=1e3*t(this).attr("data-wow-delay").slice(0,-1));s=this;setTimeout(function(){t(s).removeClass("animated")},l)}else{t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-name":e[a]});l=1e3*t(this).css("animation-duration").slice(0,-1),s=this;setTimeout(function(){t(s).removeClass("animated")},l)}}})}function o(t){var e=t.getBoundingClientRect(),i=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||i.scrollTop,a=n.clientTop||i.clientTop||0,r=e.top+o-a;return Math.round(r)}t(".wow").each(function(){t(this).css({visibility:"hidden"}),e[t(this).index(".wow")]=t(this).css("animation-name"),t(this).css({"animation-name":"none"})}),t(window).scroll(function(){var e,a;i?(e=window.innerHeight,a=window.scrollY,t(".wow.animated").each(function(){if(e+a-100>o(this)&&a>o(this)+100||e+a-100<o(this)&&a<o(this)+100||o(this)+t(this).height>t(document).height()-100)t(this).removeClass("animated"),t(this).css({"animation-name":"none"}),t(this).css({visibility:"hidden"});else{var i=1e3*t(this).css("animation-duration").slice(0,-1);t(this).attr("data-wow-delay")&&(i+=1e3*t(this).attr("data-wow-delay").slice(0,-1));var n=this;setTimeout(function(){t(n).removeClass("animated")},i)}}),n(),i--):n()}),t(".wow").each(function(){var i=t(this).index(".wow"),n=t(this).attr("data-wow-delay");n?(n=t(this).attr("data-wow-delay").slice(0,-1),parseFloat(n),t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-delay":n+"s"}),t(this).css({"animation-name":e[i]})):(t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-name":e[i]}))})}}}}(jQuery),function(t){t(window).on("scroll",function(){var e=t(".navbar");e.length&&(e.offset().top>50?t(".scrolling-navbar").addClass("top-nav-collapse"):t(".scrolling-navbar").removeClass("top-nav-collapse"))})}(jQuery),function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t.Waves=e.call(t),t.Waves}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}("object"==typeof window?window:this,function(){"use strict";var t=t||{},e=document.querySelectorAll.bind(document),i=Object.prototype.toString,n="ontouchstart"in window;function o(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function a(t){var n,a=i.call(t);return"[object String]"===a?e(t):o(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(a)&&t.hasOwnProperty("length")?t:o(n=t)&&n.nodeType>0?[t]:[]}function r(t){var e,i,n={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,void 0!==t.getBoundingClientRect&&(n=t.getBoundingClientRect()),i=function(t){return null!==(e=t)&&e===e.window?t:9===t.nodeType&&t.defaultView;var e}(o),{top:n.top+i.pageYOffset-e.clientTop,left:n.left+i.pageXOffset-e.clientLeft}}function s(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}var l={duration:750,delay:200,show:function(t,e,i){if(2===t.button)return!1;e=e||this;var n=document.createElement("div");n.className="waves-ripple waves-rippling",e.appendChild(n);var o=r(e),a=0,c=0;"touches"in t&&t.touches.length?(a=t.touches[0].pageY-o.top,c=t.touches[0].pageX-o.left):(a=t.pageY-o.top,c=t.pageX-o.left),c=c>=0?c:0,a=a>=0?a:0;var u="scale("+e.clientWidth/100*3+")",d="translate(0,0)";i&&(d="translate("+i.x+"px, "+i.y+"px)"),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-x",c),n.setAttribute("data-y",a),n.setAttribute("data-scale",u),n.setAttribute("data-translate",d);var h={top:a+"px",left:c+"px"};n.classList.add("waves-notransition"),n.setAttribute("style",s(h)),n.classList.remove("waves-notransition"),h["-webkit-transform"]=u+" "+d,h["-moz-transform"]=u+" "+d,h["-ms-transform"]=u+" "+d,h["-o-transform"]=u+" "+d,h.transform=u+" "+d,h.opacity="1";var p="mousemove"===t.type?2500:l.duration;h["-webkit-transition-duration"]=p+"ms",h["-moz-transition-duration"]=p+"ms",h["-o-transition-duration"]=p+"ms",h["transition-duration"]=p+"ms",n.setAttribute("style",s(h))},hide:function(t,e){for(var i=(e=e||this).getElementsByClassName("waves-rippling"),o=0,a=i.length;o<a;o++)u(t,e,i[o]);n&&(e.removeEventListener("touchend",l.hide),e.removeEventListener("touchcancel",l.hide)),e.removeEventListener("mouseup",l.hide),e.removeEventListener("mouseleave",l.hide)}},c={input:function(t){var e=t.parentNode;if("span"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("span");i.className="waves-input-wrapper",e.replaceChild(i,t),i.appendChild(t)}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("i");e.replaceChild(i,t),i.appendChild(t)}}};function u(t,e,i){if(i){i.classList.remove("waves-rippling");var n=i.getAttribute("data-x"),o=i.getAttribute("data-y"),a=i.getAttribute("data-scale"),r=i.getAttribute("data-translate"),c=350-(Date.now()-Number(i.getAttribute("data-hold")));c<0&&(c=0),"mousemove"===t.type&&(c=150);var u="mousemove"===t.type?2500:l.duration;setTimeout(function(){var t={top:o+"px",left:n+"px",opacity:"0","-webkit-transition-duration":u+"ms","-moz-transition-duration":u+"ms","-o-transition-duration":u+"ms","transition-duration":u+"ms","-webkit-transform":a+" "+r,"-moz-transform":a+" "+r,"-ms-transform":a+" "+r,"-o-transform":a+" "+r,transform:a+" "+r};i.setAttribute("style",s(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},u)},c)}}var d={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&d.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?d.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout(function(){d.touches&&(d.touches-=1)},500)}};function h(t){var e=function(t){if(!1===d.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;i.parentElement;){if(!(i instanceof SVGElement)&&i.classList.contains("waves-effect")){e=i;break}i=i.parentElement}return e}(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(d.registerEvent(t),"touchstart"===t.type&&l.delay){var i=!1,o=setTimeout(function(){o=null,l.show(t,e)},l.delay),a=function(n){o&&(clearTimeout(o),o=null,l.show(t,e)),i||(i=!0,l.hide(n,e)),s()},r=function(t){o&&(clearTimeout(o),o=null),a(t),s()};e.addEventListener("touchmove",r,!1),e.addEventListener("touchend",a,!1),e.addEventListener("touchcancel",a,!1);var s=function(){e.removeEventListener("touchmove",r),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",a)}}else l.show(t,e),n&&(e.addEventListener("touchend",l.hide,!1),e.addEventListener("touchcancel",l.hide,!1)),e.addEventListener("mouseup",l.hide,!1),e.addEventListener("mouseleave",l.hide,!1)}}return t.init=function(t){var e=document.body;"duration"in(t=t||{})&&(l.duration=t.duration),"delay"in t&&(l.delay=t.delay),n&&(e.addEventListener("touchstart",h,!1),e.addEventListener("touchcancel",d.registerEvent,!1),e.addEventListener("touchend",d.registerEvent,!1)),e.addEventListener("mousedown",h,!1)},t.attach=function(t,e){var n,o;t=a(t),"[object Array]"===i.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var r=0,s=t.length;r<s;r++)o=(n=t[r]).tagName.toLowerCase(),-1!==["input","img"].indexOf(o)&&(c[o](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},t.ripple=function(t,e){var i=(t=a(t)).length;if((e=e||{}).wait=e.wait||0,e.position=e.position||null,i)for(var n,o,s,c={},u=0,d={type:"mousedown",button:1},h=function(t,e){return function(){l.hide(t,e)}};u<i;u++)if(n=t[u],o=e.position||{x:n.clientWidth/2,y:n.clientHeight/2},s=r(n),c.x=s.left+o.x,c.y=s.top+o.y,d.pageX=c.x,d.pageY=c.y,l.show(d,n),e.wait>=0&&null!==e.wait){setTimeout(h({type:"mouseup",button:1},n),e.wait)}},t.calm=function(t){for(var e={type:"mouseup",button:1},i=0,n=(t=a(t)).length;i<n;i++)l.hide(e,t[i])},t.displayEffect=function(e){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),t.init(e)},t}),Waves.attach(".btn:not(.btn-flat), .btn-floating",["waves-light"]),Waves.attach(".btn-flat",["waves-effect"]),Waves.attach(".chip",["waves-effect"]),Waves.attach(".view a .mask",["waves-light"]),Waves.attach(".waves-light",["waves-light"]),Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)",["waves-light"]),Waves.attach(".pager li a",["waves-light"]),Waves.attach(".pagination .page-item .page-link",["waves-effect"]),Waves.init();var _this=void 0;!function(t){var e,i,n="".concat(["text","password","email","url","tel","number","search","search-md"].map(function(t){return"input[type=".concat(t,"]")}).join(", "),", textarea"),o=function(t){var e=t.siblings("label, i"),i=t.val().length,n=t.attr("placeholder");e["".concat(i||n?"add":"remove","Class")]("active")},a=function(t){if(t.hasClass("validate")){var e=t.val(),i=!e.length,n=!t[0].validity.badInput;if(i&&n)t.removeClass("valid").removeClass("invalid");else{var o=t.is(":valid"),a=Number(t.attr("length"))||0;o&&(!a||a>e.length)?t.removeClass("invalid").addClass("valid"):t.removeClass("valid").addClass("invalid")}}},r=function(){var e=t(_this);if(e.val().length){var i=t(".hiddendiv"),n=e.css("font-family"),o=e.css("font-size");o&&i.css("font-size",o),n&&i.css("font-family",n),"off"===e.attr("wrap")&&i.css("overflow-wrap","normal").css("white-space","pre"),i.text("".concat(e.val(),"\n"));var a=i.html().replace(/\n/g,"<br>");i.html(a),i.css("width",e.is(":visible")?e.width():t(window).width()/2),e.css("height",i.height())}};t(n).each(function(e,i){var n=t(i),a=n.siblings("label, i");o(n),i.validity.badInput&&a.addClass("active")}),t(document).on("focus",n,function(e){t(e.target).siblings("label, i").addClass("active")}),t(document).on("blur",n,function(e){var i=t(e.target),n=!i.val(),o=!e.target.validity.badInput,r=void 0===i.attr("placeholder");n&&o&&r&&i.siblings("label, i").removeClass("active"),a(i)}),t(document).on("change",n,function(e){var i=t(e.target);o(i),a(i)}),t("input[autofocus]").siblings("label, i").addClass("active"),t(document).on("reset",function(e){var i=t(e.target);i.is("form")&&(i.find(n).removeClass("valid").removeClass("invalid").each(function(e,i){var n=t(i),o=!n.val(),a=!n.attr("placeholder");o&&a&&n.siblings("label, i").removeClass("active")}),i.find("select.initialized").each(function(e,i){var n=t(i),o=n.siblings("input.select-dropdown"),a=n.children("[selected]").val();n.val(a),o.val(a)}))}),(i=t(".md-textarea-auto")).length&&(e=window.attachEvent?function(t,e,i){t.attachEvent("on".concat(e),i)}:function(t,e,i){t.addEventListener(e,i,!1)},i.each(function(){var t=this;function i(){t.style.height="auto",t.style.height="".concat(t.scrollHeight,"px")}function n(){window.setTimeout(i,0)}e(t,"change",i),e(t,"cut",n),e(t,"paste",n),e(t,"drop",n),e(t,"keydown",n),i()}));var s=t("body");if(!t(".hiddendiv").first().length){var l=t('<div class="hiddendiv common"></div>');s.append(l)}t(".materialize-textarea").each(r),s.on("keyup keydown",".materialize-textarea",r)}(jQuery);var loader_path="../dev/dist/mdb-addons/preloader.html",windowLoaded=!1;$(window).on("load",function(){windowLoaded=!0}),$(document).ready(function(){$("body").attr("aria-busy",!0),$("#preloader-markup").load(loader_path,function(){windowLoaded?($("#mdb-preloader").fadeOut("slow"),$("body").removeAttr("aria-busy")):$(window).on("load",function(){$("#mdb-preloader").fadeOut("slow"),$("body").removeAttr("aria-busy")})})}),function(t){t(document).on("click.card",".card",function(e){if(t(this).find(".card-reveal").length){var i=t(e.target),n=i.is(".card-reveal .card-title"),o=i.is(".card-reveal .card-title i"),a=i.is(".card .activator"),r=i.is(".card .activator i");n||o?t(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"})}}):(a||r)&&t(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})}}),t(".rotate-btn").on("click",function(){var e=t(this).attr("data-card");t("#".concat(e)).toggleClass("flipped")}),t(window).on("load",function(){var e=t(".front").outerHeight(),i=t(".back").outerHeight();e>i?t(".card-wrapper, .back").height(e):e>i?t(".card-wrapper, .front").height(i):t(".card-wrapper").height(i)}),t(".card-share > a").on("click",function(e){e.preventDefault(),t(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")})}(jQuery),$(".map-card").click(function(){$(".card-body").toggleClass("closed")}),function(t){function e(){var e=Number(t(this).attr("length")),i=Number(t(this).val().length),n=i<=e;t(this).parent().find('span[class="character-counter"]').html("".concat(i,"/").concat(e)),function(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}(n,t(this))}function i(){t(this).parent().find('span[class="character-counter"]').html("")}t.fn.characterCounter=function(){return this.each(function(){var n,o;void 0!==t(this).attr("length")&&(t(this).on("input",e),t(this).on("focus",e),t(this).on("blur",i),n=t(this),o=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),n.parent().append(o))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery),function(t){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){return function(){var e,i,n,o=0,a={error:"error",info:"info",success:"success",warning:"warning"},r={clear:function(i,n){var o=d();e||s(o);l(i,o,n)||function(i){for(var n=e.children(),o=n.length-1;o>=0;o--)l(t(n[o]),i)}(o)},remove:function(i){var n=d();e||s(n);if(i&&0===t(":focus",i).length)return void h(i);e.children().length&&e.remove()},error:function(t,e,i){return u({type:a.error,iconClass:d().iconClasses.error,message:t,optionsOverride:i,title:e})},getContainer:s,info:function(t,e,i){return u({type:a.info,iconClass:d().iconClasses.info,message:t,optionsOverride:i,title:e})},options:{},subscribe:function(t){i=t},success:function(t,e,i){return u({type:a.success,iconClass:d().iconClasses.success,message:t,optionsOverride:i,title:e})},version:"2.1.1",warning:function(t,e,i){return u({type:a.warning,iconClass:d().iconClasses.warning,message:t,optionsOverride:i,title:e})}};return r;function s(i,n){return i||(i=d()),(e=t("#"+i.containerId)).length?e:(n&&(e=function(i){return(e=t("<div/>").attr("id",i.containerId).addClass(i.positionClass).attr("aria-live","polite").attr("role","alert")).appendTo(t(i.target)),e}(i)),e)}function l(e,i,n){var o=!(!n||!n.force)&&n.force;return!(!e||!o&&0!==t(":focus",e).length)&&(e[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){h(e)}}),!0)}function c(t){i&&i(t)}function u(i){var a=d(),r=i.iconClass||a.iconClass;if(void 0!==i.optionsOverride&&(a=t.extend(a,i.optionsOverride),r=i.optionsOverride.iconClass||r),!function(t,e){if(t.preventDuplicates){if(e.message===n)return!0;n=e.message}return!1}(a,i)){o++,e=s(a,!0);var l=null,u=t("<div/>"),p=t("<div/>"),f=t("<div/>"),m=t("<div/>"),g=t(a.closeHtml),v={intervalId:null,hideEta:null,maxHideTime:null},y={toastId:o,state:"visible",startTime:new Date,options:a,map:i};return i.iconClass&&u.addClass(a.toastClass).addClass(r),i.title&&(p.append(i.title).addClass(a.titleClass),u.append(p)),i.message&&(f.append(i.message).addClass(a.messageClass),u.append(f)),a.closeButton&&(g.addClass("md-toast-close-button").attr("role","button"),u.prepend(g)),a.progressBar&&(m.addClass("md-toast-progress"),u.prepend(m)),a.newestOnTop?e.prepend(u):e.append(u),u.hide(),u[a.showMethod]({duration:a.showDuration,easing:a.showEasing,complete:a.onShown}),a.timeOut>0&&(l=setTimeout(b,a.timeOut),v.maxHideTime=parseFloat(a.timeOut),v.hideEta=(new Date).getTime()+v.maxHideTime,a.progressBar&&(v.intervalId=setInterval(k,10))),function(){u.hover(w,x),!a.onclick&&a.tapToDismiss&&u.click(b);a.closeButton&&g&&g.click(function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&!0!==t.cancelBubble&&(t.cancelBubble=!0),b(!0)});a.onclick&&u.click(function(){a.onclick(),b()})}(),c(y),a.debug&&console&&console.log(y),u}function b(e){if(!t(":focus",u).length||e)return clearTimeout(v.intervalId),u[a.hideMethod]({duration:a.hideDuration,easing:a.hideEasing,complete:function(){h(u),a.onHidden&&"hidden"!==y.state&&a.onHidden(),y.state="hidden",y.endTime=new Date,c(y)}})}function x(){(a.timeOut>0||a.extendedTimeOut>0)&&(l=setTimeout(b,a.extendedTimeOut),v.maxHideTime=parseFloat(a.extendedTimeOut),v.hideEta=(new Date).getTime()+v.maxHideTime)}function w(){clearTimeout(l),v.hideEta=0,u.stop(!0,!0)[a.showMethod]({duration:a.showDuration,easing:a.showEasing})}function k(){var t=(v.hideEta-(new Date).getTime())/v.maxHideTime*100;m.width(t+"%")}}function d(){return t.extend({},{tapToDismiss:!0,toastClass:"md-toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"md-toast-error",info:"md-toast-info",success:"md-toast-success",warning:"md-toast-warning"},iconClass:"md-toast-info",positionClass:"md-toast-top-right",timeOut:5e3,titleClass:"md-toast-title",messageClass:"md-toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1},r.options)}function h(t){e||(e=s()),t.is(":visible")||(t.remove(),t=null,0===e.children().length&&(e.remove(),n=void 0))}}()}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}(__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js"));var SMOOTH_SCROLL_DURATION=700;$(".smooth-scroll").on("click","a",function(){var t=$(this).attr("href");if(void 0!==t&&0===t.indexOf("#")){var e=$(this).attr("data-offset")?$(this).attr("data-offset"):0,i=$(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");return $("body,html").animate({scrollTop:$(t).offset().top-e},SMOOTH_SCROLL_DURATION),void 0!==i&&!1!==i&&history.replaceState(null,null,t),!1}}),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){this.each(function(){var i=t(this),n=t.extend({},t.fn.dropdown.defaults,e),o=!1,a=t("#".concat(i.attr("data-activates")));function r(){void 0!==i.data("induration")&&(n.inDuration=i.data("inDuration")),void 0!==i.data("outduration")&&(n.outDuration=i.data("outDuration")),void 0!==i.data("constrainwidth")&&(n.constrain_width=i.data("constrainwidth")),void 0!==i.data("hover")&&(n.hover=i.data("hover")),void 0!==i.data("gutter")&&(n.gutter=i.data("gutter")),void 0!==i.data("beloworigin")&&(n.belowOrigin=i.data("beloworigin")),void 0!==i.data("alignment")&&(n.alignment=i.data("alignment"))}function s(e){"focus"===e&&(o=!0),r(),a.addClass("active"),i.addClass("active"),!0===n.constrain_width?a.css("width",i.outerWidth()):a.css("white-space","nowrap");var s=window.innerHeight,l=i.innerHeight(),c=i.offset().left,u=i.offset().top-t(window).scrollTop(),d=n.alignment,h=0,p=0,f=0;!0===n.belowOrigin&&(f=l);var m=0,g=i.parent();if(!g.is("body")&&g[0].scrollHeight>g[0].clientHeight&&(m=g[0].scrollTop),c+a.innerWidth()>t(window).width()?d="right":c-a.innerWidth()+i.innerWidth()<0&&(d="left"),u+a.innerHeight()>s)if(u+l-a.innerHeight()<0){var v=s-u-f;a.css("max-height",v)}else f||(f+=l),f-=a.innerHeight();if("left"===d)h=n.gutter,p=i.position().left+h;else if("right"===d){p=i.position().left+i.outerWidth()-a.outerWidth()+(h=-n.gutter)}a.css({position:"absolute",top:i.position().top+f+m,left:p}),a.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:n.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1,scrollTop:0},{queue:!1,duration:n.inDuration,easing:"easeOutSine"})}function l(){o=!1,a.fadeOut(n.outDuration),a.removeClass("active"),i.removeClass("active"),setTimeout(function(){a.css("max-height","")},n.outDuration)}if(r(),i.after(a),n.hover){var c=!1;i.unbind("click.".concat(i.attr("id"))),i.on("mouseenter",function(){!1===c&&(s(),c=!0)}),i.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(a)||(a.stop(!0,!0),l(),c=!1)}),a.on("mouseleave",function(e){var n=e.toElement||e.relatedTarget;t(n).closest(".dropdown-button").is(i)||(a.stop(!0,!0),l(),c=!1)})}else i.unbind("click.".concat(i.attr("id"))),i.bind("click.".concat(i.attr("id")),function(e){o||(i[0]!==e.currentTarget||i.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?i.hasClass("active")&&(l(),t(document).unbind("click.".concat(a.attr("id")," touchstart.").concat(a.attr("id")))):(e.preventDefault(),s("click")),a.hasClass("active")&&t(document).bind("click.".concat(a.attr("id")," touchstart.").concat(a.attr("id")),function(e){a.is(e.target)||i.is(e.target)||i.find(e.target).length||(l(),t(document).unbind("click.".concat(a.attr("id")," touchstart.").concat(a.attr("id"))))}))});i.on("open",function(t,e){s(e)}),i.on("close",l)})},t.fn.dropdown.defaults={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"},t(".dropdown-button").dropdown(),t.fn.mdbDropSearch=function(e){var i=t(this).find("input");this.filter(function(e,n){t(n).on("keyup",function(){for(var t=i.closest("div[id]").find("a, li"),e=0;e<t.length;e++)t.eq(e).html().toUpperCase().indexOf(i.val().toUpperCase())>-1?t.eq(e).css({display:""}):t.eq(e).css({display:"none"})})});var n=t.extend({color:"#000",backgroundColor:"",fontSize:".9rem",fontWeight:"400",borderRadius:"",borderColor:""},e);return this.css({color:n.color,backgroundColor:n.backgroundColor,fontSize:n.fontSize,fontWeight:n.fontWeight,borderRadius:n.borderRadius,border:n.border,margin:n.margin})}}(jQuery);var dropdownSelectors=$(".dropdown, .dropup");function dropdownEffectData(t){var e="fadeIn",i="fadeOut",n=$(t),o=$(".dropdown-menu",t),a=n.parents("ul.nav");return a.height>0&&(e=a.data("dropdown-in")||null,i=a.data("dropdown-out")||null),{target:t,dropdown:n,dropdownMenu:o,effectIn:o.data("dropdown-in")||e,effectOut:o.data("dropdown-out")||i}}function dropdownEffectStart(t,e){e&&(t.dropdown.addClass("dropdown-animating"),t.dropdownMenu.addClass(["animated",e].join(" ")))}function dropdownEffectEnd(t,e){t.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){t.dropdown.removeClass("dropdown-animating"),t.dropdownMenu.removeClass(["animated",t.effectIn,t.effectOut].join(" ")),"function"==typeof e&&e()})}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}dropdownSelectors.on({"show.bs.dropdown":function(){var t=dropdownEffectData(this);dropdownEffectStart(t,t.effectIn)},"shown.bs.dropdown":function(){var t=dropdownEffectData(this);t.effectIn&&t.effectOut&&dropdownEffectEnd(t)},"hide.bs.dropdown":function(t){var e=dropdownEffectData(this);e.effectOut&&(t.preventDefault(),dropdownEffectStart(e,e.effectOut),dropdownEffectEnd(e,function(){e.dropdown.removeClass("show"),e.dropdownMenu.removeClass("show")}))}}),function(t){var e=this;t(document).ready(function(){t(document).on("mouseenter",".fixed-action-btn",function(){var e=t(this);i(e)}),t(document).on("mouseleave",".fixed-action-btn",function(){var e=t(this);n(e)}),t(document).on("click",".fixed-action-btn > a",function(){var e=t(this).parent();e.hasClass("active")?i(e):n(e),e.hasClass("active")?n(e):i(e)})}),t.fn.extend({openFAB:function(){i(t(this))},closeFAB:function(){n(t(this))}});var i=function(t){var e=t;e.hasClass("active")||(e.addClass("active"),document.querySelectorAll("ul .btn-floating").forEach(function(t){t.classList.add("shown")}))},n=function(t){t.removeClass("active"),document.querySelectorAll("ul .btn-floating").forEach(function(t){t.classList.remove("shown")})};t(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click",function(o){if(!t(e).hasClass("smooth-scroll"))return o.preventDefault(),a=t(".fixed-action-btn"),(r=a).hasClass("active")?n(r):i(r),!1;var a,r})}(jQuery),function(t){var e=240,i=1440,n=300,o=200,a=50,r=200,s="easeOutQuad",l="easeOutCubic",c=!0,u=!1,d=function(){function d(h,p){_classCallCheck(this,d),this.defaults={MENU_WIDTH:e,edge:"left",closeOnClick:!1,breakpoint:i,timeDurationOpen:n,timeDurationClose:o,timeDurationOverlayOpen:a,timeDurationOverlayClose:r,easingOpen:s,easingClose:l,showOverlay:c,showCloseButton:u},this.$element=h,this.$elementCloned=h.clone().css({display:"inline-block",lineHeight:"24px"}),this.options=this.assignOptions(p),this.menuOut=!1,this.lastTouchVelocity={x:{startPosition:0,startTime:0,endPosition:0,endTime:0}},this.$body=t("body"),this.$menu=t("#".concat(this.$element.attr("data-activates"))),this.$sidenavOverlay=t("#sidenav-overlay"),this.$dragTarget=t('<div class="drag-target"></div>'),this.$body.append(this.$dragTarget),this.init()}return _createClass(d,[{key:"init",value:function(){this.setMenuWidth(),this.setMenuTranslation(),this.closeOnClick(),this.openOnClick(),this.bindTouchEvents(),this.showCloseButton(),this.inputOnClick()}},{key:"bindTouchEvents",value:function(){var t=this;this.$dragTarget.on("click",function(){return t.removeMenu()}),this.$elementCloned.on("click",function(){return t.removeMenu()}),this.$dragTarget.on("touchstart",function(e){t.lastTouchVelocity.x.startPosition=e.touches[0].clientX,t.lastTouchVelocity.x.startTime=Date.now()}),this.$dragTarget.on("touchmove",this.touchmoveEventHandler.bind(this)),this.$dragTarget.on("touchend",this.touchendEventHandler.bind(this))}},{key:"touchmoveEventHandler",value:function(t){if("touchmove"===t.type){var e=t.touches[0],i=e.clientX;Date.now()-this.lastTouchVelocity.x.startTime>20&&(this.lastTouchVelocity.x.startPosition=e.clientX,this.lastTouchVelocity.x.startTime=Date.now()),this.disableScrolling(),0!==this.$sidenavOverlay.length||this.buildSidenavOverlay(),"left"===this.options.edge&&(i>this.options.MENU_WIDTH?i=this.options.MENU_WIDTH:i<0&&(i=0)),this.translateSidenavX(i),this.updateOverlayOpacity(i)}}},{key:"panEventHandler",value:function(t){if("touch"===t.gesture.pointerType){var e=t.gesture.center.x;this.disableScrolling(),0!==this.$sidenavOverlay.length||this.buildSidenavOverlay(),"left"===this.options.edge&&(e>this.options.MENU_WIDTH?e=this.options.MENU_WIDTH:e<0&&(e=0)),this.translateSidenavX(e),this.updateOverlayOpacity(e)}}},{key:"translateSidenavX",value:function(t){if("left"===this.options.edge){var e=t>=this.options.MENU_WIDTH/2;this.menuOut=e,this.$menu.css("transform","translateX(".concat(t-this.options.MENU_WIDTH,"px)"))}else{var i=t<window.innerWidth-this.options.MENU_WIDTH/2;this.menuOut=i;var n=t-this.options.MENU_WIDTH/2;n<0&&(n=0),this.$menu.css("transform","translateX(".concat(n,"px)"))}}},{key:"updateOverlayOpacity",value:function(t){var e;e="left"===this.options.edge?t/this.options.MENU_WIDTH:Math.abs((t-window.innerWidth)/this.options.MENU_WIDTH),this.$sidenavOverlay.velocity({opacity:e},{duration:10,queue:!1,easing:this.options.easingOpen})}},{key:"buildSidenavOverlay",value:function(){var e=this;!0===this.options.showOverlay&&(this.$sidenavOverlay=t('<div id="sidenav-overlay"></div>'),this.$sidenavOverlay.css("opacity",0).on("click",function(){return e.removeMenu()}),this.$body.append(this.$sidenavOverlay))}},{key:"disableScrolling",value:function(){var t=this.$body.innerWidth();this.$body.css("overflow","hidden"),this.$body.width(t)}},{key:"touchendEventHandler",value:function(t){if("touchend"===t.type){var e=t.changedTouches[0];this.lastTouchVelocity.x.endTime=Date.now(),this.lastTouchVelocity.x.endPosition=e.clientX;var i=this.calculateTouchVelocityX(),n=e.clientX,o=n-this.options.MENU_WIDTH,a=n-this.options.MENU_WIDTH/2;o>0&&(o=0),a<0&&(a=0),"left"===this.options.edge?(this.menuOut&&i<=.3||i<-.5?(0!==o&&this.translateMenuX([0,o],"300"),this.showSidenavOverlay()):(!this.menuOut||i>.3)&&(this.enableScrolling(),this.translateMenuX([-1*this.options.MENU_WIDTH-10,o],"200"),this.hideSidenavOverlay()),this.$dragTarget.css({width:"10px",right:"",left:0})):this.menuOut&&i>=-.3||i>.5?(this.translateMenuX([0,a],"300"),this.showSidenavOverlay(),this.$dragTarget.css({width:"50%",right:"",left:0})):(!this.menuOut||i<-.3)&&(this.enableScrolling(),this.translateMenuX([this.options.MENU_WIDTH+10,a],"200"),this.hideSidenavOverlay(),this.$dragTarget.css({width:"10px",right:0,left:""}))}}},{key:"calculateTouchVelocityX",value:function(){return Math.abs(this.lastTouchVelocity.x.endPosition-this.lastTouchVelocity.x.startPosition)/Math.abs(this.lastTouchVelocity.x.endTime-this.lastTouchVelocity.x.startTime)}},{key:"panendEventHandler",value:function(t){if("touch"===t.gesture.pointerType){var e=t.gesture.velocityX,i=t.gesture.center.x,n=i-this.options.MENU_WIDTH,o=i-this.options.MENU_WIDTH/2;n>0&&(n=0),o<0&&(o=0),"left"===this.options.edge?(this.menuOut&&e<=.3||e<-.5?(0!==n&&this.translateMenuX([0,n],"300"),this.showSidenavOverlay()):(!this.menuOut||e>.3)&&(this.enableScrolling(),this.translateMenuX([-1*this.options.MENU_WIDTH-10,n],"200"),this.hideSidenavOverlay()),this.$dragTarget.css({width:"10px",right:"",left:0})):this.menuOut&&e>=-.3||e>.5?(this.translateMenuX([0,o],"300"),this.showSidenavOverlay(),this.$dragTarget.css({width:"50%",right:"",left:0})):(!this.menuOut||e<-.3)&&(this.enableScrolling(),this.translateMenuX([this.options.MENU_WIDTH+10,o],"200"),this.hideSidenavOverlay(),this.$dragTarget.css({width:"10px",right:0,left:""}))}}},{key:"translateMenuX",value:function(t,e){this.$menu.velocity({translateX:t},{duration:"string"==typeof e?Number(e):e,queue:!1,easing:this.options.easingOpen})}},{key:"hideSidenavOverlay",value:function(){this.$sidenavOverlay.velocity({opacity:0},{duration:this.options.timeDurationOverlayClose,queue:!1,easing:this.options.easingOpen,complete:function(){t(this).remove()}})}},{key:"showSidenavOverlay",value:function(){this.$sidenavOverlay.velocity({opacity:1},{duration:this.options.timeDurationOverlayOpen,queue:!1,easing:this.options.easingOpen})}},{key:"enableScrolling",value:function(){this.$body.css({overflow:"",width:""})}},{key:"openOnClick",value:function(){var e=this;this.$element.on("click",function(i){if(i.preventDefault(),!0===e.menuOut)e.menuOut=!1,e.removeMenu();else{!0===e.options.showOverlay?(e.$sidenavOverlay=t('<div id="sidenav-overlay"></div>'),e.$body.append(e.$sidenavOverlay)):e.showCloseButton();var n=[];n="left"===e.options.edge?[0,-1*e.options.MENU_WIDTH]:[0,e.options.MENU_WIDTH],e.$menu.velocity({translateX:n},{duration:e.options.timeDurationOpen,queue:!1,easing:e.options.easingOpen}),e.$sidenavOverlay.on("click",function(){return e.removeMenu()}),e.$sidenavOverlay.on("touchmove",e.touchmoveEventHandler.bind(e)),e.$menu.on("touchmove",function(t){t.preventDefault(),e.$menu.find(".custom-scrollbar").css("padding-bottom","30px")})}})}},{key:"closeOnClick",value:function(){var t=this;!0===this.options.closeOnClick&&this.$menu.on("click","a:not(.collapsible-header)",function(){return t.removeMenu()})}},{key:"showCloseButton",value:function(){!0===this.options.showCloseButton&&(this.$menu.prepend(this.$elementCloned),this.$menu.find(".logo-wrapper").css({borderTop:"1px solid rgba(153,153,153,.3)"}))}},{key:"setMenuTranslation",value:function(){var e=this;"left"===this.options.edge?(this.$menu.css("transform","translateX(-100%)"),this.$dragTarget.css({left:0})):(this.$menu.addClass("right-aligned").css("transform","translateX(100%)"),this.$dragTarget.css({right:0})),this.$menu.hasClass("fixed")&&(window.innerWidth>this.options.breakpoint&&this.$menu.css("transform","translateX(0)"),this.$menu.find("input[type=text]").on("touchstart",function(){e.$menu.addClass("transform-fix-input")}),t(window).resize(function(){if(window.innerWidth>e.options.breakpoint)e.$sidenavOverlay.length?e.removeMenu(!0):e.$menu.css("transform","translateX(0%)");else if(!1===e.menuOut){var t="left"===e.options.edge?"-100":"100";e.$menu.css("transform","translateX(".concat(t,"%)"))}}))}},{key:"setMenuWidth",value:function(){var i=t("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");this.options.MENU_WIDTH!==e&&(this.$menu.css("width",this.options.MENU_WIDTH),i.css("width",this.options.MENU_WIDTH))}},{key:"inputOnClick",value:function(){var t=this;this.$menu.find("input[type=text]").on("touchstart",function(){return t.$menu.css("transform","translateX(0)")})}},{key:"assignOptions",value:function(e){return t.extend({},this.defaults,e)}},{key:"removeMenu",value:function(t){var e=this;this.$body.css({overflow:"",width:""}),this.$menu.velocity({translateX:"left"===this.options.edge?"-100%":"100%"},{duration:this.options.timeDurationClose,queue:!1,easing:this.options.easingClose,complete:function(){!0===t&&(e.$menu.removeAttr("style"),e.$menu.css("width",e.options.MENU_WIDTH))}}),this.$menu.hasClass("transform-fix-input")&&this.$menu.removeClass("transform-fix-input"),this.hideSidenavOverlay()}}]),d}();t.fn.sideNav=function(e){return this.each(function(){new d(t(this),e)})}}(jQuery),$(function(){$("#toggle").click(function(){$("#slide-out").hasClass("slim")?($("#slide-out").removeClass("slim"),$(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left")):($("#slide-out").addClass("slim"),$(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"))})}),function(t){t.fn.collapsible=function(e){var i={accordion:void 0};function n(e,i){$panelHeaders=e.find("> li > .collapsible-header"),i.hasClass("active")?i.parent().addClass("active"):i.parent().removeClass("active"),i.parent().hasClass("active")?i.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):i.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),$panelHeaders.not(i).removeClass("active").parent().removeClass("active"),$panelHeaders.not(i).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function o(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function a(t){return r(t).length>0}function r(t){return t.closest("li > .collapsible-header")}return e=t.extend(i,e),this.each(function(){var i=t(this),s=t(this).find("> li > .collapsible-header"),l=i.data("collapsible");i.off("click.collapse",".collapsible-header"),s.off("click.collapse"),e.accordion||"accordion"===l||void 0===l?((s=i.find("> li > .collapsible-header")).on("click.collapse",function(e){var o=t(e.target);a(o)&&(o=r(o)),o.toggleClass("active"),n(i,o)}),n(i,s.filter(".active").first())):s.each(function(){t(this).on("click.collapse",function(e){var i=t(e.target);a(i)&&(i=r(i)),i.toggleClass("active"),o(i)}),t(this).hasClass("active")&&o(t(this))})})},t(".collapsible").collapsible()}(jQuery),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){return e(t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(0,function(t){var e=function(t,e){var i,n=document.createElement("canvas");t.appendChild(n),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(n);var o=n.getContext("2d");n.width=n.height=e.size;var a=1;window.devicePixelRatio>1&&(a=window.devicePixelRatio,n.style.width=n.style.height=[e.size,"px"].join(""),n.width=n.height=e.size*a,o.scale(a,a)),o.translate(e.size/2,e.size/2),o.rotate((e.rotate/180-.5)*Math.PI);var r=(e.size-e.lineWidth)/2;e.scaleColor&&e.scaleLength&&(r-=e.scaleLength+2),Date.now=Date.now||function(){return+new Date};var s=function(t,e,i){var n=(i=Math.min(Math.max(-1,i||0),1))<=0;o.beginPath(),o.arc(0,0,r,0,2*Math.PI*i,n),o.strokeStyle=t,o.lineWidth=e,o.stroke()},l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},c=function(){e.scaleColor&&function(){var t,i;o.lineWidth=1,o.fillStyle=e.scaleColor,o.save();for(var n=24;n>0;--n)n%6==0?(i=e.scaleLength,t=0):(i=.6*e.scaleLength,t=e.scaleLength-i),o.fillRect(-e.size/2+t,0,i,1),o.rotate(Math.PI/12);o.restore()}(),e.trackColor&&s(e.trackColor,e.trackWidth||e.lineWidth,1)};this.getCanvas=function(){return n},this.getCtx=function(){return o},this.clear=function(){o.clearRect(e.size/-2,e.size/-2,e.size,e.size)},this.draw=function(t){var n;e.scaleColor||e.trackColor?o.getImageData&&o.putImageData?i?o.putImageData(i,0,0):(c(),i=o.getImageData(0,0,e.size*a,e.size*a)):(this.clear(),c()):this.clear(),o.lineCap=e.lineCap,n="function"==typeof e.barColor?e.barColor(t):e.barColor,s(n,e.lineWidth,t/100)}.bind(this),this.animate=function(t,i){var n=Date.now();e.onStart(t,i);var o=function(){var a=Math.min(Date.now()-n,e.animate.duration),r=e.easing(this,a,t,i-t,e.animate.duration);this.draw(r),e.onStep(t,i,r),a>=e.animate.duration?e.onStop(t,i):l(o)}.bind(this);l(o)}.bind(this)},i=function(t,i){var n={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},onStart:function(t,e){},onStep:function(t,e,i){},onStop:function(t,e){}};n.renderer=e;var o={},a=0,r=function(){for(var e in this.el=t,this.options=o,n)n.hasOwnProperty(e)&&(o[e]=i&&void 0!==i[e]?i[e]:n[e],"function"==typeof o[e]&&(o[e]=o[e].bind(this)));"string"==typeof o.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[o.easing])?o.easing=jQuery.easing[o.easing]:o.easing=n.easing,"number"==typeof o.animate&&(o.animate={duration:o.animate,enabled:!0}),"boolean"!=typeof o.animate||o.animate||(o.animate={duration:1e3,enabled:o.animate}),this.renderer=new o.renderer(t,o),this.renderer.draw(a),t.dataset&&t.dataset.percent?this.update(parseFloat(t.dataset.percent)):t.getAttribute&&t.getAttribute("data-percent")&&this.update(parseFloat(t.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),o.animate.enabled?this.renderer.animate(a,t):this.renderer.draw(t),a=t,this}.bind(this),this.disableAnimation=function(){return o.animate.enabled=!1,this},this.enableAnimation=function(){return o.animate.enabled=!0,this},r()};t.fn.easyPieChart=function(e){return this.each(function(){var n;t.data(this,"easyPieChart")||(n=t.extend({},e,t(this).data()),t.data(this,"easyPieChart",new i(this,n)))})}}),function(t){var e,i="input[type=range]:not(.custom-range):not(.multi-range)",n='<span class="thumb"><span class="value"></span></span>',o=!1;t(document).on("change",i,function(){var e=t(this);e.siblings(".thumb").find(".value").html(e.val())}),t(document).on("input mousedown touchstart",i,function(a){var r=t(this),s=r.siblings(".thumb"),l=r.outerWidth();if(!s.length&&function(){var e=t(n);t(i).after(e)}(),s.find(".value").html(r.val()),o=!0,r.addClass("active"),s.hasClass("active")||s.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==a.type){var c=void 0===a.pageX||null===a.pageX;(e=c?a.originalEvent.touches[0].pageX-t(this).offset().left:a.pageX-t(this).offset().left)<0?e=0:e>l&&(e=l),s.addClass("active").css("left",e)}s.find(".value").html(r.val())}),t(document).on("mouseup touchend",".range-field",function(){o=!1,t(this).removeClass("active")}),t(document).on("mousemove touchmove",".range-field",function(e){var n,a=t(this).children(".thumb");if(o){a.hasClass("active")||a.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),n=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left;var r=t(this).outerWidth();n<0?n=0:n>r&&(n=r),a.addClass("active").css("left",n),a.find(".value").html(a.siblings(i).val())}}),t(document).on("mouseout touchleave",".range-field",function(){if(!o){var e=t(this).children(".thumb");e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),e.removeClass("active")}})}(jQuery),function(t){t(document).on("change",'.file-field input[type="file"]',function(e){var i=t(e.target),n=i.closest(".file-field").find("input.file-path"),o=i[0].files,a=[];Array.isArray(o)?o.forEach(function(t){return a.push(t.name)}):Object.keys(o).forEach(function(t){a.push(o[t].name)}),n.val(a.join(", ")),n.trigger("change")})}(jQuery),function(t){var e,i=function(){function e(i,n){_classCallCheck(this,e),this.$nativeSelect=i,this.defaults={destroy:!1,nativeID:null,BSsearchIn:!1,BSinputText:!1,fasClasses:"",farClasses:"",fabClasses:"",copyClassesOption:!1,language:{active:!1,pl:{selectAll:"Wybierz wszystko",optionsSelected:"wybranych opcji"},in:{selectAll:"Pilih semuanya",optionsSelected:"opsi yang dipilih"},fr:{selectAll:"Tout choisir",optionsSelected:"options sélectionnées"},ge:{selectAll:"Wähle alles aus",optionsSelected:"ausgewählte Optionen"},ar:{selectAll:"اختر كل شيء",optionsSelected:"الخيارات المحددة"}}},this.options=this.assignOptions(n),this.isMultiple=Boolean(this.$nativeSelect.attr("multiple")),this.isSearchable=Boolean(this.$nativeSelect.attr("searchable")),this.isRequired=Boolean(this.$nativeSelect.attr("required")),this.isEditable=Boolean(this.$nativeSelect.attr("editable")),this.selectAllLabel=Boolean(this.$nativeSelect.attr("selectAllLabel"))?this.$nativeSelect.attr("selectAllLabel"):"Select all",this.optionsSelectedLabel=Boolean(this.$nativeSelect.attr("optionsSelectedLabel"))?this.$nativeSelect.attr("optionsSelectedLabel"):"options selected",this.keyboardActiveClass=Boolean(this.$nativeSelect.attr("keyboardActiveClass"))?this.$nativeSelect.attr("keyboardActiveClass"):"heavy-rain-gradient",this.uuid=null!==this.options.nativeID&&""!==this.options.nativeID&&void 0!==this.options.nativeID&&"string"==typeof this.options.nativeID?this.options.nativeID:this._randomUUID(),this.$selectWrapper=t('<div class="select-wrapper"></div>'),this.$materialOptionsList=t('<ul id="select-options-'.concat(this.uuid,'" class="dropdown-content select-dropdown w-100 ').concat(this.isMultiple?"multiple-select-dropdown":"",'"></ul>')),this.$materialSelectInitialOption=i.find("option:selected").text()||i.find("option:first").text()||"",this.$nativeSelectChildren=this.$nativeSelect.children("option, optgroup"),this.$materialSelect=t('<input type="text" class="'.concat(this.options.BSinputText?"browser-default custom-select multi-bs-select select-dropdown form-control":"select-dropdown form-control",'" ').concat(!this.options.validate&&'readonly="true"',' required="').concat(this.options.validate?"true":"false",'" ').concat(this.$nativeSelect.is(" :disabled")?"disabled":"",' data-activates="select-options-').concat(this.uuid,'" value=""/>')),this.$dropdownIcon=this.options.BSinputText?"":t('<span class="caret">&#9660;</span>'),this.$searchInput=null,this.$toggleAll=t('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>'.concat(this.selectAllLabel,"</label></span></li>")),this.$addOptionBtn=t('<i class="select-add-option fas fa-plus"></i>'),this.mainLabel=this.$nativeSelect.next(".mdb-main-label"),this.$validFeedback=t('<div class="valid-feedback">'.concat(this.options.validFeedback||"Good choice","</div>")),this.$invalidFeedback=t('<div class="invalid-feedback">'.concat(this.options.invalidFeedback||"Bad choice","</div>")),this.valuesSelected=[],this.keyCodes={tab:9,esc:27,enter:13,arrowUp:38,arrowDown:40},e.mutationObservers=[]}return _createClass(e,[{key:"assignOptions",value:function(e){return t.extend({},this.defaults,e)}},{key:"init",value:function(){if(Boolean(this.$nativeSelect.data("select-id"))&&this._removeMaterialWrapper(),this.options.destroy)this.$nativeSelect.data("select-id",null).removeClass("initialized");else{this.options.BSsearchIn||this.options.BSinputText?this.$selectWrapper.addClass(this.$nativeSelect.attr("class").split(" ").filter(function(t){return"md-form"!==t}).join(" ")).css({marginTop:"1.5rem",marginBottom:"1.5rem"}):this.$selectWrapper.addClass(this.$nativeSelect.attr("class")),this.$nativeSelect.data("select-id",this.uuid);var t=this.$materialSelectInitialOption.replace(/"/g,"&quot;").replace(/  +/g," ").trim();0===this.mainLabel.length?this.$materialSelect.val(t):this.mainLabel.text(),this.renderMaterialSelect(),this.bindEvents(),this.isRequired&&this.enableValidation(),this.options.language.active&&this.$toggleAll&&(this.options.language.pl&&this.$toggleAll.find("label").text(this.options.language.pl.selectAll?this.options.language.pl.selectAll:this.defaults.language.pl.selectAll),this.options.language.fr&&this.$toggleAll.find("label").text(this.options.language.fr.selectAll?this.options.language.fr.selectAll:this.defaults.language.fr.selectAll),this.options.language.ge&&this.$toggleAll.find("label").text(this.options.language.ge.selectAll?this.options.language.ge.selectAll:this.defaults.language.ge.selectAll),this.options.language.ar&&this.$toggleAll.find("label").text(this.options.language.ar.selectAll?this.options.language.ar.selectAll:this.defaults.language.ar.selectAll),this.options.language.in&&this.$toggleAll.find("label").text(this.options.language.in.selectAll?this.options.language.in.selectAll:this.defaults.language.in.selectAll)),this.$materialSelect.hasClass("custom-select")&&this.$materialSelect.hasClass("select-dropdown")&&this.$materialSelect.css({display:"inline-block",width:"100%",height:"calc(1.5em + .75rem + 2px)",padding:".375rem 1.75rem .375rem .75rem",fontSize:"1rem",lineHeight:"1.5",backgroundColor:"#fff",border:"1px solid #ced4da"})}}},{key:"_removeMaterialWrapper",value:function(){var e=this.$nativeSelect.data("select-id");this.$nativeSelect.parent().find("span.caret").remove(),this.$nativeSelect.parent().find("input").remove(),this.$nativeSelect.unwrap(),t("ul#select-options-".concat(e)).remove()}},{key:"renderMaterialSelect",value:function(){var t=this;if(this.$nativeSelect.before(this.$selectWrapper),this.appendDropdownIcon(),this.appendValidation(),this.appendMaterialSelect(),this.appendMaterialOptionsList(),this.appendNativeSelect(),this.appendSaveSelectButton(),this.$nativeSelect.is(":disabled")||this.$materialSelect.dropdown({hover:!1,closeOnClick:!1}),!1!==this.$nativeSelect.data("inherit-tabindex")&&this.$materialSelect.attr("tabindex",this.$nativeSelect.attr("tabindex")),this.isMultiple)this.$nativeSelect.find("option:selected:not(:disabled)").each(function(e,i){var n=i.index;t._toggleSelectedValue(n),t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(n).find(":checkbox").prop("checked",!0)});else{var e=this.$nativeSelect.find("option[selected]"),i=e.index();"disabled"!==e.attr("disabled")&&i>=0&&(this._toggleSelectedValue(i),this.$materialOptionsList.find("li").eq(i).addClass("active"))}this.$nativeSelect.addClass("initialized"),this.options.BSinputText&&this.mainLabel.css("top","-7px")}},{key:"appendDropdownIcon",value:function(){this.$nativeSelect.is(":disabled")&&this.$dropdownIcon.addClass("disabled"),this.$selectWrapper.append(this.$dropdownIcon)}},{key:"appendValidation",value:function(){this.options.validate&&(this.$validFeedback.insertAfter(this.$selectWrapper),this.$invalidFeedback.insertAfter(this.$selectWrapper))}},{key:"appendMaterialSelect",value:function(){this.$selectWrapper.append(this.$materialSelect)}},{key:"appendMaterialOptionsList",value:function(){this.isSearchable&&this.appendSearchInputOption(),this.isEditable&&this.isSearchable&&this.appendAddOptionBtn(),this.buildMaterialOptions(),this.isMultiple&&this.appendToggleAllCheckbox(),this.$selectWrapper.append(this.$materialOptionsList)}},{key:"appendNativeSelect",value:function(){this.$nativeSelect.appendTo(this.$selectWrapper)}},{key:"appendSearchInputOption",value:function(){var e=this.$nativeSelect.attr("searchable");this.options.BSsearchIn?this.$searchInput=t('<span class="search-wrap ml-2"><div class="mt-0"><input type="text" class="search mb-2 w-100 d-block select-default" tabindex="-1" placeholder="'.concat(e,'"></div></span>')):this.$searchInput=t('<span class="search-wrap ml-2"><div class="md-form mt-0"><input type="text" class="search w-100 d-block" tabindex="-1" placeholder="'.concat(e,'"></div></span>')),this.$materialOptionsList.append(this.$searchInput),this.$searchInput.on("click",function(t){t.stopPropagation()})}},{key:"appendAddOptionBtn",value:function(){this.$searchInput.append(this.$addOptionBtn),this.$addOptionBtn.on("click",this.addNewOption.bind(this))}},{key:"addNewOption",value:function(){var e=this.$searchInput.find("input").val(),i=t('<option value="'.concat(e.toLowerCase(),'" selected>').concat(e,"</option>")).prop("selected",!0);this.isMultple||this.$nativeSelectChildren.each(function(e,i){t(i).attr("selected",!1)}),this.$nativeSelect.append(i)}},{key:"appendToggleAllCheckbox",value:function(){var t=this.$materialOptionsList.find("li").first();t.hasClass("disabled")&&t.find("input").prop("disabled")?t.after(this.$toggleAll):this.$materialOptionsList.find("li").first().before(this.$toggleAll)}},{key:"appendSaveSelectButton",value:function(){this.$selectWrapper.parent().find("button.btn-save").appendTo(this.$materialOptionsList)}},{key:"buildMaterialOptions",value:function(){var e=this;this.$nativeSelectChildren.each(function(i,n){var o=t(n);if(o.is("option"))e.buildSingleOption(o,e.isMultiple?"multiple":"");else if(o.is("optgroup")){var a=t('<li class="optgroup"><span>'.concat(o.attr("label"),"</span></li>"));e.$materialOptionsList.append(a),o.children("option").each(function(i,n){e.buildSingleOption(t(n),"optgroup-option")})}})}},{key:"buildSingleOption",value:function(e,i){var n=e.is(":disabled")?"disabled":"",o="optgroup-option"===i?"optgroup-option":"",a=e.data("icon"),r=e.data("fas")?'<i class="fa-pull-right m-2 fas fa-'.concat(e.data("fas")," ").concat([...this.options.fasClasses].join(""),'"></i> '):"",s=e.data("far")?'<i class="fa-pull-right m-2 far fa-'.concat(e.data("far")," ").concat([...this.options.farClasses].join(""),'"></i> '):"",l=e.data("fab")?'<i class="fa-pull-right m-2 fab fa-'.concat(e.data("fab")," ").concat([...this.options.fabClasses].join(""),'"></i> '):"",c=e.attr("class"),u=a?'<img alt="" src="'.concat(a,'" class="').concat(c,'">'):"",d=this.isMultiple?'<input type="checkbox" class="form-check-input" '.concat(n,"/><label></label>"):"";this.$materialOptionsList.append(t('<li class="'.concat(n," ").concat(o," ").concat(this.options.copyClassesOption?c:"",' ">').concat(u,'<span class="filtrable">').concat(d," ").concat(e.html()," ").concat(r," ").concat(s," ").concat(l,"</span></li>")))}},{key:"enableValidation",value:function(){this.$nativeSelect.css({position:"absolute",top:"1rem",left:"0",height:"0",width:"0",opacity:"0",padding:"0","pointer-events":"none"}),-1===this.$nativeSelect.attr("style").indexOf("inline!important")&&this.$nativeSelect.attr("style","".concat(this.$nativeSelect.attr("style")," display: inline!important;")),this.$nativeSelect.attr("tabindex",-1),this.$nativeSelect.data("inherit-tabindex",!1)}},{key:"bindEvents",value:function(){var i=this,n=new MutationObserver(this._onMutationObserverChange.bind(this));n.observe(this.$nativeSelect.get(0),{attributes:!0,childList:!0,characterData:!0,subtree:!0}),n.customId=this.uuid,n.customStatus="observing",e.clearMutationObservers(),e.mutationObservers.push(n),this.$nativeSelect.parent().find("button.btn-save").on("click",this._onSaveSelectBtnClick.bind(this)),this.$materialSelect.on("focus",this._onMaterialSelectFocus.bind(this)),this.$materialSelect.on("click",this._onMaterialSelectClick.bind(this)),this.$materialSelect.on("blur",this._onMaterialSelectBlur.bind(this)),this.$materialSelect.on("keydown",this._onMaterialSelectKeydown.bind(this)),this.$toggleAll.on("click",this._onToggleAllClick.bind(this)),this.$materialOptionsList.on("mousedown",this._onEachMaterialOptionMousedown.bind(this)),this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function(e,n){t(n).on("click",i._onEachMaterialOptionClick.bind(i,e,n))}),!this.isMultiple&&this.isSearchable&&this.$materialOptionsList.find("li").on("click",this._onSingleMaterialOptionClick.bind(this)),this.isSearchable&&this.$searchInput.find(".search").on("keyup",this._onSearchInputKeyup.bind(this)),t("html").on("click",this._onHTMLClick.bind(this))}},{key:"_onMutationObserverChange",value:function(i){i.forEach(function(i){var n=t(i.target).closest("select");!0!==n.data("stop-refresh")&&("childList"===i.type||"attributes"===i.type&&t(i.target).is("option"))&&(e.clearMutationObservers(),n.materialSelect({destroy:!0}),n.materialSelect())})}},{key:"_onSaveSelectBtnClick",value:function(){t("input.multi-bs-select").trigger("close"),this.$materialOptionsList.hide(),this.$materialSelect.removeClass("active")}},{key:"_onEachMaterialOptionClick",value:function(e,i,n){n.stopPropagation();var o=t(i);if(!o.hasClass("disabled")&&!o.hasClass("optgroup")){var a=!0;if(this.isMultiple){o.find('input[type="checkbox"]').prop("checked",function(t,e){return!e});var r=Boolean(this.$nativeSelect.find("optgroup").length),s=this._isToggleAllPresent()?o.index()-1:o.index();a=this.isSearchable&&r?this._toggleSelectedValue(s-o.prevAll(".optgroup").length-1):this.isSearchable?this._toggleSelectedValue(s-1):r?this._toggleSelectedValue(s-o.prevAll(".optgroup").length):this._toggleSelectedValue(s),this._isToggleAllPresent()&&this._updateToggleAllOption(),this.$materialSelect.trigger("focus")}else this.$materialOptionsList.find("li").removeClass("active"),o.toggleClass("active"),this.$materialSelect.val(o.text().replace(/  +/g," ").trim()),this.$materialSelect.trigger("close");this._selectSingleOption(o),this.$nativeSelect.data("stop-refresh",!0),this.$nativeSelect.find("option").eq(e).prop("selected",a),this.$nativeSelect.removeData("stop-refresh"),this._triggerChangeOnNativeSelect(),this.mainLabel.prev().find("input").hasClass("select-dropdown")&&this.mainLabel.prev().find("input.select-dropdown").val().length>0&&this.mainLabel.addClass("active"),"function"==typeof this.options&&this.options(),o.hasClass("li-added")&&this.$materialOptionsList.append(this.buildSingleOption(o,""))}}},{key:"_escapeKeyboardActiveOptions",value:function(){var e=this;this.$materialOptionsList.find("li").each(function(i,n){t(n).removeClass(e.keyboardActiveClass)})}},{key:"_triggerChangeOnNativeSelect",value:function(){var t=new KeyboardEvent("change",{bubbles:!0,cancelable:!0});this.$nativeSelect.get(0).dispatchEvent(t)}},{key:"_onMaterialSelectFocus",value:function(e){var i=t(e.target);if(t("ul.select-dropdown").not(this.$materialOptionsList.get(0)).is(":visible")&&t("input.select-dropdown").trigger("close"),this.mainLabel.addClass("active"),!this.$materialOptionsList.is(":visible")){i.trigger("open",["focus"]);var n=i.val(),o=this.$materialOptionsList.find("li").filter(function(){return t(this).text().toLowerCase()===n.toLowerCase()})[0];this._selectSingleOption(o)}this.isMultiple||this.mainLabel.addClass("active"),t(document).find("input.select-dropdown").each(function(e,i){return t(i).val().length<=0}).parent().next(".mdb-main-label").filter(function(e,i){return t(i).prev().find("input.select-dropdown").val().length<=0&&!t(i).prev().find("input.select-dropdown").hasClass("active")}).removeClass("active")}},{key:"_onMaterialSelectClick",value:function(t){this.mainLabel.addClass("active"),t.stopPropagation()}},{key:"_onMaterialSelectBlur",value:function(e){var i=t(e);this.isMultiple||this.isSearchable||i.trigger("close"),this.$materialOptionsList.find("li.selected").removeClass("selected")}},{key:"_onSingleMaterialOptionClick",value:function(){this.$materialSelect.trigger("close")}},{key:"_onEachMaterialOptionMousedown",value:function(e){var i=e.target;t(".modal-content").find(this.$materialOptionsList).length&&i.scrollHeight>i.offsetHeight&&e.preventDefault()}},{key:"_onHTMLClick",value:function(e){t(e.target).closest("#select-options-".concat(this.uuid)).length||t(e.target).hasClass("mdb-select")||!t("#select-options-".concat(this.uuid)).hasClass("active")||(this.$materialSelect.trigger("close"),!this.$materialSelect.val().length>0&&this.mainLabel.removeClass("active")),this.isSearchable&&null!==this.$searchInput&&this.$materialOptionsList.hasClass("active")&&this.$materialOptionsList.find(".search-wrap input.search").focus()}},{key:"_onToggleAllClick",value:function(e){var i=this,n=t(this.$toggleAll).find('input[type="checkbox"]').first(),o=!t(n).prop("checked");t(n).prop("checked",o),this.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").each(function(e,n){var a=t(n).find('input[type="checkbox"]');o&&a.is(":checked")||!o&&!a.is(":checked")||t(n).is(":hidden")||t(n).is(".disabled")||(a.prop("checked",o),i.$nativeSelect.find("option").eq(e).prop("selected",o),o?t(n).removeClass("active"):t(n).addClass("active"),i._toggleSelectedValue(e),i._selectOption(n),i._setValueToMaterialSelect())}),this.$nativeSelect.data("stop-refresh",!0),this._triggerChangeOnNativeSelect(),this.$nativeSelect.removeData("stop-refresh"),e.stopPropagation()}},{key:"_onMaterialSelectKeydown",value:function(e){var i=t(e.target),n=e.which===this.keyCodes.tab,o=e.which===this.keyCodes.esc,a=e.which===this.keyCodes.enter,r=a&&e.shiftKey,s=e.which===this.keyCodes.arrowUp,l=e.which===this.keyCodes.arrowDown,c=this.$materialOptionsList.is(":visible");n?this._handleTabKey(i):!l||c?a&&!c||(e.preventDefault(),r?this._handleEnterWithShiftKey(i):a?this._handleEnterKey(i):l?this._handleArrowDownKey():s?this._handleArrowUpKey():o?this._handleEscKey(i):this._handleLetterKey(e)):i.trigger("open")}},{key:"_handleTabKey",value:function(t){this._handleEscKey(t)}},{key:"_handleEnterWithShiftKey",value:function(t){this.isMultiple?this.$toggleAll.trigger("click"):this._handleEnterKey(t)}},{key:"_handleEnterKey",value:function(e){this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"),this.isMultiple||t(e).trigger("close")}},{key:"_handleArrowDownKey",value:function(){var e=this,i=this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all"),n=this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all").first(),o=this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all").last(),a=this.$materialOptionsList.find("li.selected").length>0,r=a?this.$materialOptionsList.find("li.selected").first():n,s=r.next("li:visible:not(.disabled, .select-toggle-all)"),l=s;i.each(function(n,o){t(o).hasClass(e.keyboardActiveClass)&&(s=i.eq(n+1),l=i.eq(n))});var c=r.is(o)||!a?r:s;this._selectSingleOption(c),this._escapeKeyboardActiveOptions(),c.find("input").is(":checked")||c.removeClass(this.keyboardActiveClass),l.hasClass("selected")||l.find("input").is(":checked")||!this.isMultiple||l.removeClass("active",this.keyboardActiveClass),c.addClass(this.keyboardActiveClass),c.position()&&this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop()+c.position().top)}},{key:"_handleArrowUpKey",value:function(){var e=this,i=this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all"),n=this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all").first(),o=this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all").last(),a=this.$materialOptionsList.find("li.selected").length>0,r=a?this.$materialOptionsList.find("li.selected").first():o,s=r.prev("li:visible:not(.disabled, .select-toggle-all)"),l=s;i.each(function(n,o){t(o).hasClass(e.keyboardActiveClass)&&(s=i.eq(n-1),l=i.eq(n))});var c=r.is(n)||!a?r:s;this._selectSingleOption(c),this._escapeKeyboardActiveOptions(),c.find("input").is(":checked")||c.removeClass(this.keyboardActiveClass),l.hasClass("selected")||l.find("input").is(":checked")||!this.isMultiple||l.removeClass("active",this.keyboardActiveClass),c.addClass(this.keyboardActiveClass),c.position()&&this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop()+c.position().top)}},{key:"_handleEscKey",value:function(e){this._escapeKeyboardActiveOptions(),t(e).trigger("close")}},{key:"_handleLetterKey",value:function(e){var i=this;if(this._escapeKeyboardActiveOptions(),this.isSearchable){var n=e.which>46&&e.which<91,o=e.which>93&&e.which<106,a=8===e.which;(n||o)&&this.$searchInput.find("input").val(e.key).focus(),a&&this.$searchInput.find("input").val("").focus()}else{var r="",s=String.fromCharCode(e.which).toLowerCase(),l=Object.keys(this.keyCodes).map(function(t){return i.keyCodes[t]});if(s&&-1===l.indexOf(e.which)){r+=s;var c=this.$materialOptionsList.find("li").filter(function(e,i){return t(i).text().toLowerCase().includes(r)}).first();this.isMultiple||this.$materialOptionsList.find("li").removeClass("active"),c.addClass("active"),this._selectSingleOption(c)}}}},{key:"_onSearchInputKeyup",value:function(e){var i=t(e.target),n=e.which===this.keyCodes.tab,o=e.which===this.keyCodes.esc,a=e.which===this.keyCodes.enter,r=a&&e.shiftKey,s=e.which===this.keyCodes.arrowUp;if(e.which===this.keyCodes.arrowDown||n||o||s)return this.$materialSelect.focus(),void this._handleArrowDownKey();var l=i.closest("ul"),c=i.val(),u=l.find("li span.filtrable"),d=!1;if(u.each(function(){var e=t(this);if("string"==typeof this.outerHTML){var i=this.textContent.toLowerCase();i.includes(c.toLowerCase())?e.show().parent().show():e.hide().parent().hide(),i.trim()===c.toLowerCase()&&(d=!0)}}),a)return this.isEditable&&!d?void this.addNewOption():(r&&this._handleEnterWithShiftKey(i),void this.$materialSelect.trigger("open"));c&&this.isEditable&&!d?this.$addOptionBtn.show():this.$addOptionBtn.hide(),this._updateToggleAllOption()}},{key:"_isToggleAllPresent",value:function(){return this.$materialOptionsList.find(this.$toggleAll).length}},{key:"_updateToggleAllOption",value:function(){var t=this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled, :hidden").find("[type=checkbox]"),e=t.filter(":checked"),i=this.$toggleAll.find("[type=checkbox]").is(":checked");e.length!==t.length||i?e.length<t.length&&i&&this.$toggleAll.find("[type=checkbox]").prop("checked",!1):this.$toggleAll.find("[type=checkbox]").prop("checked",!0)}},{key:"_toggleSelectedValue",value:function(t){var e=this.valuesSelected.indexOf(t),i=-1!==e;return i?this.valuesSelected.splice(e,1):this.valuesSelected.push(t),this.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(t).toggleClass("active"),this.$nativeSelect.find("option").eq(t).prop("selected",!i),this._setValueToMaterialSelect(),!i}},{key:"_selectSingleOption",value:function(t){this.$materialOptionsList.find("li.selected").removeClass("selected"),this._selectOption(t)}},{key:"_selectOption",value:function(e){t(e).addClass("selected")}},{key:"_setValueToMaterialSelect",value:function(){var t=this,e="",i=this.optionsSelectedLabel,n=this.valuesSelected.length;this.options.language.active&&this.$toggleAll&&(this.options.language.pl?i=this.options.language.pl.optionsSelected?this.options.language.pl.optionsSelected:this.defaults.language.pl.optionsSelected:this.options.language.fr?i=this.options.language.fr.optionsSelected?this.options.language.fr.optionsSelected:this.defaults.language.fr.optionsSelected:this.options.language.ge?i=this.options.language.ge.optionsSelected?this.options.language.ge.optionsSelected:this.defaults.language.ge.optionsSelected:this.options.language.ar?i=this.options.language.ar.optionsSelected?this.options.language.ar.optionsSelected:this.defaults.language.ar.optionsSelected:this.options.language.in&&(i=this.options.language.in.optionsSelected?this.options.language.in.optionsSelected:this.defaults.language.in.optionsSelected)),this.valuesSelected.map(function(i){return e+=", ".concat(t.$nativeSelect.find("option").eq(i).text().replace(/  +/g," ").trim())}),0===(e=n>=5?"".concat(n," ").concat(i):e.substring(2)).length&&0===this.mainLabel.length&&(e=this.$nativeSelect.find("option:disabled").eq(0).text()),e.length>0&&!this.options.BSinputText?this.mainLabel.addClass("active "):this.mainLabel.removeClass("active"),this.options.BSinputText&&this.mainLabel.css("top","-7px"),this.$nativeSelect.siblings("".concat(this.options.BSinputText?"input.multi-bs-select":"input.select-dropdown")).val(e)}},{key:"_randomUUID",value:function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?i:3&i|8).toString(16)})}}],[{key:"clearMutationObservers",value:function(){e.mutationObservers.forEach(function(t){t.disconnect(),t.customStatus="stopped"})}}]),e}();t.fn.materialSelect=function(e){t(this).not(".browser-default").not(".custom-select").each(function(){new i(t(this),e).init()})},t.fn.material_select=t.fn.materialSelect,e=t.fn.val,t.fn.val=function(t){if(!arguments.length)return e.call(this);if(!0!==this.data("stop-refresh")&&this.hasClass("mdb-select")&&this.hasClass("initialized")){i.clearMutationObservers(),this.materialSelect({destroy:!0});var n=e.call(this,t);return this.materialSelect(),n}return e.call(this,t)}}(jQuery),$("select").siblings("input.select-dropdown","input.multi-bs-select").on("mousedown",function(t){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t.clientX>=t.target.clientWidth||t.clientY>=t.target.clientHeight)&&t.preventDefault()}),function(t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined}(function(t){var e=t(window),i=t(document),n=t(document.documentElement),o=null!=document.documentElement.style.transition;function a(e,n,c,d){if(!e)return a;var h=!1,p={id:e.id||"P"+Math.abs(~~(Math.random()*new Date)),handlingOpen:!1},f=c?t.extend(!0,{},c.defaults,d):d||{},m=t.extend({},a.klasses(),f.klass),g=t(e),v=2,y=function(){return this.start()},b=y.prototype={constructor:y,$node:g,start:function(){return p&&p.start?b:(p.methods={},p.start=!0,p.open=!1,p.type=e.type,e.autofocus=e==u(),e.readOnly=!f.editable,e.id=e.id||p.id,"text"!=e.type&&(e.type="text"),b.component=new c(b,f),b.$root=t('<div class="'+m.picker+'" id="'+e.id+'_root" />'),l(b.$root[0],"hidden",!0),b.$holder=t(x()).appendTo(b.$root),w(),f.formatSubmit&&function(){var i;!0===f.hiddenName?(i=e.name,e.name=""):i=(i=["string"==typeof f.hiddenPrefix?f.hiddenPrefix:"","string"==typeof f.hiddenSuffix?f.hiddenSuffix:"_submit"])[0]+e.name+i[1];b._hidden=t('<input type=hidden name="'+i+'"'+(g.data("value")||e.value?' value="'+b.get("select",f.formatSubmit)+'"':"")+">")[0],g.on("change."+p.id,function(){b._hidden.value=e.value?b.get("select",f.formatSubmit):""})}(),function(){g.data(n,b).addClass(m.input).val(g.data("value")?b.get("select",f.format):e.value).on("focus."+p.id+" click."+p.id,(i=function(t){t.preventDefault(),b.open()},o=100,function(){var t=this,e=arguments,n=a&&!r;clearTimeout(r),r=setTimeout(function(){r=null,a||i.apply(t,e)},o),n&&i.apply(t,e)})).on("mousedown",function(){p.handlingOpen=!0;var e=function(){setTimeout(function(){t(document).off("mouseup",e),p.handlingOpen=!1},0)};t(document).on("mouseup",e)}),f.editable||g.on("keydown."+p.id,C);var i,o,a,r;l(e,{haspopup:!0,expanded:!1,readonly:!1,owns:e.id+"_root"})}(),f.containerHidden?t(f.containerHidden).append(b._hidden):g.after(b._hidden),f.container?t(f.container).append(b.$root):g.after(b.$root),b.on({start:b.component.onStart,render:b.component.onRender,stop:b.component.onStop,open:b.component.onOpen,close:b.component.onClose,set:b.component.onSet}).on({start:f.onStart,render:f.onRender,stop:f.onStop,open:f.onOpen,close:f.onClose,set:f.onSet}),h=function(t){var e;t.currentStyle?e=t.currentStyle.position:window.getComputedStyle&&(e=getComputedStyle(t).position);return"fixed"==e}(b.$holder[0]),e.autofocus&&b.open(),b.trigger("start").trigger("render"))},render:function(e){return e?(b.$holder=t(x()),w(),b.$root.html(b.$holder)):b.$root.find("."+m.box).html(b.component.nodes(p.open)),b.trigger("render")},stop:function(){return p.start?(b.close(),b._hidden&&b._hidden.parentNode.removeChild(b._hidden),b.$root.remove(),g.removeClass(m.input).removeData(n),setTimeout(function(){g.off("."+p.id)},0),e.type=p.type,e.readOnly=!1,b.trigger("stop"),p.methods={},p.start=!1,b):b},open:function(n){return v++,p.open?b:v<4&&f.editable?b:(setTimeout(function(){b.$root.addClass(m.opened),l(b.$root[0],"hidden",!1)},0),!1!==n&&(p.open=!0,h&&t("body").css("overflow","hidden").css("padding-right","+="+r()),h&&o?b.$holder.find("."+m.frame).one("transitionend",function(){b.$holder.eq(0).focus()}):setTimeout(function(){b.$holder.eq(0).focus()},0),i.on("click."+p.id+" focusin."+p.id,function(t){if(!p.handlingOpen){var i=s(t,e);t.isSimulated||i==e||i==document||3==t.which||b.close(i===b.$holder[0])}}).on("keydown."+p.id,function(i){var n=i.keyCode,o=b.component.key[n],r=s(i,e);27==n?b.close(!0):r!=b.$holder[0]||!o&&13!=n?t.contains(b.$root[0],r)&&13==n&&(i.preventDefault(),r.click()):(i.preventDefault(),o?a._.trigger(b.component.key.go,b,[a._.trigger(o)]):b.$root.find("."+m.highlighted).hasClass(m.disabled)||(b.set("select",b.component.item.highlight),f.closeOnSelect&&b.close(!0)))})),b.trigger("open"))},close:function(n){return v=0,n&&(f.editable?(e.click(),p.open=!1):(b.$holder.off("focus.toOpen").focus(),setTimeout(function(){b.$holder.on("focus.toOpen",k)},0))),g.removeClass(m.active),l(e,"expanded",!1),setTimeout(function(){b.$root.removeClass(m.opened+" "+m.focused),l(b.$root[0],"hidden",!0)},0),p.open?(p.open=!1,h&&t("body").css("overflow","").css("padding-right","-="+r()),document.activeElement.blur(),i.off("."+p.id),b.trigger("close")):b},clear:function(t){return document.activeElement.blur(),b.set("clear",null,t)},set:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(n=r&&t.isPlainObject(i)?i:n||{},e){for(o in r||(s[e]=i),s)a=s[o],o in b.component.item&&(void 0===a&&(a=null),b.component.set(o,a,n)),"select"!=o&&"clear"!=o||!f.updateInput||g.val("clear"==o?"":b.get(o,f.format)).trigger("change");b.render()}return n.muted?b:b.trigger("set",s)},get:function(t,i){if(null!=p[t=t||"value"])return p[t];if("valueSubmit"==t){if(b._hidden)return b._hidden.value;t="value"}if("value"==t)return e.value;if(t in b.component.item){if("string"==typeof i){var n=b.component.get(t);return n?a._.trigger(b.component.formats.toString,b.component,[i,n]):""}return b.component.get(t)}},on:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(e)for(o in r||(s[e]=i),s)a=s[o],n&&(o="_"+o),p.methods[o]=p.methods[o]||[],p.methods[o].push(a);return b},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)(e=i[t])in p.methods&&delete p.methods[e];return b},trigger:function(t,e){var i=function(t){var i=p.methods[t];i&&i.map(function(t){a._.trigger(t,b,[e])})};return i("_"+t),i(t),b}};function x(){return a._.node("div",a._.node("div",a._.node("div",a._.node("div",b.component.nodes(p.open),m.box),m.wrap),m.frame),m.holder,'tabindex="-1"')}function w(){b.$holder.on({keydown:C,"focus.toOpen":k,blur:function(){g.removeClass(m.target)},focusin:function(t){b.$root.removeClass(m.focused),t.stopPropagation()},"mousedown click":function(i){var n=s(i,e);n!=b.$holder[0]&&(i.stopPropagation(),"mousedown"!=i.type||t(n).is("input, select, textarea, button, option")||(i.preventDefault(),b.$holder.eq(0).focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(m.navDisabled)||e.hasClass(m.disabled),o=u();o=o&&(o.type||o.href?o:null),(n||o&&!t.contains(b.$root[0],o))&&b.$holder.eq(0).focus(),!n&&i.nav?b.set("highlight",b.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?(b.set("select",i.pick),f.closeOnSelect&&b.close(!0)):i.clear?(b.clear(),f.closeOnClear&&b.close(!0)):i.close&&b.close(!0)})}function k(t){t.stopPropagation(),g.addClass(m.target),b.$root.addClass(m.focused),b.open()}function C(t){var e=t.keyCode,i=/^(8|46)$/.test(e);if(27==e)return b.close(!0),!1;(32==e||i||!p.open&&b.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?b.clear().close():b.open())}return new y}function r(){if(n.height()<=e.height())return 0;var i=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),o=i[0].offsetWidth;i.css("overflow","scroll");var a=t('<div style="width:100%" />').appendTo(i)[0].offsetWidth;return i.remove(),o-a}function s(t,e){var i=[];return t.path&&(i=t.path),t.originalEvent&&t.originalEvent.path&&(i=t.originalEvent.path),i&&i.length>0?e&&i.indexOf(e)>=0?e:i[0]:t.target}function l(e,i,n){if(t.isPlainObject(i))for(var o in i)c(e,o,i[o]);else c(e,i,n)}function c(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function u(){try{return document.activeElement}catch(t){}}return a.klasses=function(t){return{picker:t=t||"picker",opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},a._={group:function(t){for(var e,i="",n=a._.trigger(t.min,t);n<=a._.trigger(t.max,t,[n]);n+=t.i)e=a._.trigger(t.item,t,[n]),i+=a._.node(t.node,e[0],e[1],e[2]);return i},node:function(e,i,n,o){return i?"<"+e+(n=n?' class="'+n+'"':"")+(o=o?" "+o:"")+">"+(i=t.isArray(i)?i.join(""):i)+"</"+e+">":""},lead:function(t){return(t<10?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1==0},ariaAttr:function(e,i){t.isPlainObject(e)||(e={attribute:i});for(var n in i="",e){var o=("role"==n?"":"aria-")+n,a=e[n];i+=null==a?"":o+'="'+e[n]+'"'}return i}},a.extend=function(e,i){t.fn[e]=function(n,o){var r=this.data(e);return"picker"==n?r:r&&"string"==typeof n?a._.trigger(r[n],r,[o]):this.each(function(){t(this).data(e)||new a(this,e,i,n)})},t.fn[e].defaults=i.defaults},a}),function(t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__,__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(t,e){var i,n=t._;function o(t,e){var i,n=this,o=t.$node[0],a=o.value,r=t.$node.data("value"),s=r||a,l=r?e.formatSubmit:e.format,c=function(){return o.currentStyle?"rtl"==o.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};n.settings=e,n.$node=t.$node,n.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},n.item={},n.item.clear=null,n.item.disable=(e.disable||[]).slice(0),n.item.enable=-(!0===(i=n.item.disable)[0]?i.shift():-1),n.set("min",e.min).set("max",e.max).set("now"),s?n.set("select",s,{format:l,defaultValue:!0}):n.set("select",null).set("highlight",n.item.now),n.key={40:7,38:-7,39:function(){return c()?-1:1},37:function(){return c()?1:-1},go:function(t){var e=n.item.highlight,i=new Date(e.year,e.month,e.date+t);n.set("highlight",i,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var i="";n.disabled(n.get("now"))&&(i=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+i+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}o.prototype.set=function(t,e,i){var n=this,o=n.item;return null===e?("clear"==t&&(t="select"),o[t]=e,n):(o["enable"==t?"disable":"flip"==t?"enable":t]=n.queue[t].split(" ").map(function(o){return e=n[o](t,e,i)}).pop(),"select"==t?n.set("highlight",o.select,i):"highlight"==t?n.set("view",o.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(o.select&&n.disabled(o.select)&&n.set("select",o.select,i),o.highlight&&n.disabled(o.highlight)&&n.set("highlight",o.highlight,i)),n)},o.prototype.get=function(t){return this.item[t]},o.prototype.create=function(t,i,o){var a;return(i=void 0===i?t:i)==-1/0||i==1/0?a=i:e.isPlainObject(i)&&n.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=n.isDate(i)?i:this.create().obj):i=n.isInteger(i)||n.isDate(i)?this.normalize(new Date(i),o):this.now(t,i,o),{year:a||i.getFullYear(),month:a||i.getMonth(),date:a||i.getDate(),day:a||i.getDay(),obj:a||i,pick:a||i.getTime()}},o.prototype.createRange=function(t,i){var o=this,a=function(t){return!0===t||e.isArray(t)||n.isDate(t)?o.create(t):t};return n.isInteger(t)||(t=a(t)),n.isInteger(i)||(i=a(i)),n.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:n.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:a(t),to:a(i)}},o.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},o.prototype.overlapRanges=function(t,e){return t=this.createRange(t.from,t.to),e=this.createRange(e.from,e.to),this.withinRange(t,e.from)||this.withinRange(t,e.to)||this.withinRange(e,t.from)||this.withinRange(e,t.to)},o.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},o.prototype.navigate=function(t,i,n){var o,a,r,s,l=e.isArray(i),c=e.isPlainObject(i),u=this.item.view;if(l||c){for(c?(a=i.year,r=i.month,s=i.date):(a=+i[0],r=+i[1],s=+i[2]),n&&n.nav&&u&&u.month!==r&&(a=u.year,r=u.month),a=(o=new Date(a,r+(n&&n.nav?n.nav:0),1)).getFullYear(),r=o.getMonth();new Date(a,r,s).getMonth()!==r;)s-=1;i=[a,r,s]}return i},o.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},o.prototype.measure=function(t,e){return n.isInteger(e)?e=this.now(t,e,{rel:e}):e?"string"==typeof e&&(e=this.parse(t,e)):e="min"==t?-1/0:1/0,e},o.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},o.prototype.validate=function(t,i,o){var a,r,s,l,c=this,u=i,d=o&&o.interval?o.interval:1,h=-1===c.item.enable,p=c.item.min,f=c.item.max,m=h&&c.item.disable.filter(function(t){if(e.isArray(t)){var o=c.create(t).pick;o<i.pick?a=!0:o>i.pick&&(r=!0)}return n.isInteger(t)}).length;if((!o||!o.nav&&!o.defaultValue)&&(!h&&c.disabled(i)||h&&c.disabled(i)&&(m||a||r)||!h&&(i.pick<=p.pick||i.pick>=f.pick)))for(h&&!m&&(!r&&d>0||!a&&d<0)&&(d*=-1);c.disabled(i)&&(Math.abs(d)>1&&(i.month<u.month||i.month>u.month)&&(i=u,d=d>0?1:-1),i.pick<=p.pick?(s=!0,d=1,i=c.create([p.year,p.month,p.date+(i.pick===p.pick?0:-1)])):i.pick>=f.pick&&(l=!0,d=-1,i=c.create([f.year,f.month,f.date+(i.pick===f.pick?0:1)])),!s||!l);)i=c.create([i.year,i.month,i.date+d]);return i},o.prototype.disabled=function(t){var i=this,o=i.item.disable.filter(function(o){return n.isInteger(o)?t.day===(i.settings.firstDay?o:o-1)%7:e.isArray(o)||n.isDate(o)?t.pick===i.create(o).pick:e.isPlainObject(o)?i.withinRange(o,t):void 0});return o=o.length&&!o.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!o:o||t.pick<i.item.min.pick||t.pick>i.item.max.pick},o.prototype.parse=function(t,e,i){var o=this,a={};return e&&"string"==typeof e?(i&&i.format||((i=i||{}).format=o.settings.format),o.formats.toArray(i.format).map(function(t){var i=o.formats[t],r=i?n.trigger(i,o,[e,a]):t.replace(/^!/,"").length;i&&(a[t]=e.substr(0,r)),e=e.substr(r)}),[a.yyyy||a.yy,+(a.mm||a.m)-1,a.dd||a.d]):e},o.prototype.formats=function(){function t(t,e,i){var n=t.match(/[^\x00-\x7F]+|\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?n.digits(t):e.date},dd:function(t,e){return t?2:n.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?n.digits(t):e.month+1},mm:function(t,e){return t?2:n.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return n.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),o.prototype.isDateExact=function(t,i){return n.isInteger(t)&&n.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(n.isDate(t)||e.isArray(t))&&(n.isDate(i)||e.isArray(i))?this.create(t).pick===this.create(i).pick:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&(this.isDateExact(t.from,i.from)&&this.isDateExact(t.to,i.to))},o.prototype.isDateOverlap=function(t,i){var o=this.settings.firstDay?1:0;return n.isInteger(t)&&(n.isDate(i)||e.isArray(i))?(t=t%7+o)===this.create(i).day+1:n.isInteger(i)&&(n.isDate(t)||e.isArray(t))?(i=i%7+o)===this.create(t).day+1:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&this.overlapRanges(t,i)},o.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},o.prototype.deactivate=function(t,i){var o=this,a=o.item.disable.slice(0);return"flip"==i?o.flipEnable():!1===i?(o.flipEnable(1),a=[]):!0===i?(o.flipEnable(-1),a=[]):i.map(function(t){for(var i,r=0;r<a.length;r+=1)if(o.isDateExact(t,a[r])){i=!0;break}i||(n.isInteger(t)||n.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&a.push(t)}),a},o.prototype.activate=function(t,i){var o=this,a=o.item.disable,r=a.length;return"flip"==i?o.flipEnable():!0===i?(o.flipEnable(1),a=[]):!1===i?(o.flipEnable(-1),a=[]):i.map(function(t){var i,s,l,c;for(l=0;l<r;l+=1){if(s=a[l],o.isDateExact(s,t)){i=a[l]=null,c=!0;break}if(o.isDateOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t)[3]||i.push("inverted"):n.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;l<r;l+=1)if(o.isDateExact(a[l],t)){a[l]=null;break}if(c)for(l=0;l<r;l+=1)if(o.isDateOverlap(a[l],t)){a[l]=null;break}i&&a.push(i)}),a.filter(function(t){return null!=t})},o.prototype.nodes=function(t){var e,i,o=this,a=o.settings,r=o.item,s=r.now,l=r.select,c=r.highlight,u=r.view,d=r.disable,h=r.min,p=r.max,f=(e=(a.showWeekdaysFull?a.weekdaysFull:a.weekdaysShort).slice(0),i=a.weekdaysFull.slice(0),a.firstDay&&(e.push(e.shift()),i.push(i.shift())),n.node("thead",n.node("tr",n.group({min:0,max:6,i:1,node:"th",item:function(t){return[e[t],a.klass.weekdays,'scope=col title="'+i[t]+'"']}})))),m=function(t){return n.node("button"," ",a.klass["nav"+(t?"Next":"Prev")]+(t&&u.year>=p.year&&u.month>=p.month||!t&&u.year<=h.year&&u.month<=h.month?" "+a.klass.navDisabled:""),"data-nav="+(t||-1)+" "+n.ariaAttr({role:"button",controls:o.$node[0].id+"_table"})+' title="'+(t?a.labelMonthNext:a.labelMonthPrev)+'"')},g=function(){var e=a.showMonthsShort?a.monthsShort:a.monthsFull;return a.selectMonths?n.node("select",n.group({min:0,max:11,i:1,node:"option",item:function(t){return[e[t],0,"value="+t+(u.month==t?" selected":"")+(u.year==h.year&&t<h.month||u.year==p.year&&t>p.month?" disabled":"")]}}),a.klass.selectMonth,(t?"":"disabled")+" "+n.ariaAttr({controls:o.$node[0].id+"_table"})+' title="'+a.labelMonthSelect+'"'):n.node("div",e[u.month],a.klass.month)},v=function(){var e=u.year,i=!0===a.selectYears?5:~~(a.selectYears/2);if(i){var r=h.year,s=p.year,l=e-i,c=e+i;if(r>l&&(c+=r-l,l=r),s<c){var d=l-r,f=c-s;l-=d>f?f:d,c=s}return n.node("select",n.group({min:l,max:c,i:1,node:"option",item:function(t){return[t,0,"value="+t+(e==t?" selected":"")]}}),a.klass.selectYear,(t?"":"disabled")+" "+n.ariaAttr({controls:o.$node[0].id+"_table"})+' title="'+a.labelYearSelect+'"')}return n.node("div",e,a.klass.year)};return n.node("div",(a.selectYears?v()+g():g()+v())+m()+m(1),a.klass.header)+n.node("table",f+n.node("tbody",n.group({min:0,max:5,i:1,node:"tr",item:function(t){var e=a.firstDay&&0===o.create([u.year,u.month,1]).day?-7:0;return[n.group({min:7*t-u.day+e+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(t){t=o.create([u.year,u.month,t+(a.firstDay?1:0)]);var e,i=l&&l.pick==t.pick,r=c&&c.pick==t.pick,f=d&&o.disabled(t)||t.pick<h.pick||t.pick>p.pick,m=n.trigger(o.formats.toString,o,[a.format,t]);return[n.node("div",t.date,(e=[a.klass.day],e.push(u.month==t.month?a.klass.infocus:a.klass.outfocus),s.pick==t.pick&&e.push(a.klass.now),i&&e.push(a.klass.selected),r&&e.push(a.klass.highlighted),f&&e.push(a.klass.disabled),e.join(" ")),"data-pick="+t.pick+" "+n.ariaAttr({role:"gridcell",label:m,selected:!(!i||o.$node.val()!==m)||null,activedescendant:!!r||null,disabled:!!f||null})),"",n.ariaAttr({role:"presentation"})]}})]}})),a.klass.table,'id="'+o.$node[0].id+'_table" '+n.ariaAttr({role:"grid",controls:o.$node[0].id,readonly:!0}))+n.node("div",n.node("button",a.today,a.klass.buttonToday,"type=button data-pick="+s.pick+(t&&!o.disabled(s)?"":" disabled")+" "+n.ariaAttr({controls:o.$node[0].id}))+n.node("button",a.clear,a.klass.buttonClear,"type=button data-clear=1"+(t?"":" disabled")+" "+n.ariaAttr({controls:o.$node[0].id}))+n.node("button",a.close,a.klass.buttonClose,"type=button data-close=true "+(t?"":" disabled")+" "+n.ariaAttr({controls:o.$node[0].id})),a.klass.footer)},o.defaults={labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,updateInput:!0,format:"d mmmm, yyyy",klass:{table:(i=t.klasses().picker+"__")+"table",header:i+"header",navPrev:i+"nav--prev btn btn-flat",navNext:i+"nav--next btn btn-flat",navDisabled:i+"nav--disabled",month:i+"month",year:i+"year",selectMonth:i+"select--month",selectYear:i+"select--year",weekdays:i+"weekday",day:i+"day",disabled:i+"day--disabled",selected:i+"day--selected",highlighted:i+"day--highlighted",now:i+"day--today",infocus:i+"day--infocus",outfocus:i+"day--outfocus",footer:i+"footer",buttonClear:i+"button--clear",buttonToday:i+"button--today",buttonClose:i+"button--close"}},t.extend("pickadate",o)}),$.extend($.fn.pickadate.defaults,{selectMonths:!0,selectYears:15,onRender:function(){var t=this.$root,e=this.get("highlight","yyyy"),i=this.get("highlight","dd"),n=this.get("highlight","mmm"),o=this.get("highlight","dddd").slice(0,3),a=n.charAt(0).toUpperCase()+n.slice(1);t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">'+o+', </div><div class="picker__month-display"><div>'+a+'</div></div><div class="picker__day-display"><div>'+i+'</div></div><div    class="picker__year-display"><div>'+e+"</div></div></div>")}}),function(){var t,e,i,n=__webpack_provided_window_dot_jQuery,o=n(window),a=n(document),r="http://www.w3.org/2000/svg",s="SVGAngle"in window&&((e=document.createElement("div")).innerHTML="<svg/>",t=(e.firstChild&&e.firstChild.namespaceURI)==r,e.innerHTML="",t),l="transition"in(i=document.createElement("div").style)||"WebkitTransition"in i||"MozTransition"in i||"msTransition"in i||"OTransition"in i,c="ontouchstart"in window,u="mousedown"+(c?" touchstart":""),d="mousemove.clockpicker"+(c?" touchmove.clockpicker":""),h="mouseup.clockpicker"+(c?" touchend.clockpicker":""),p=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null;function f(t){return document.createElementNS(r,t)}function m(t,e,i){var n;return function(){var o=this,a=arguments,r=i&&!n;clearTimeout(n),n=setTimeout(function(){n=null,i||t.apply(o,a)},e),r&&t.apply(o,a)}}function g(t){return(t<10?"0":"")+t}var v=0;var y=135,b=110,x=80,w=20,k=2*y,C=l?350:1,S=['<div class="clockpicker picker">','<div class="picker__holder">','<div class="picker__frame">','<div class="picker__wrap">','<div class="picker__box">','<div class="picker__date-display">','<div class="clockpicker-display">','<div class="clockpicker-display-column">','<span class="clockpicker-span-hours text-primary"></span>',":",'<span class="clockpicker-span-minutes"></span>',"</div>",'<div class="clockpicker-display-column clockpicker-display-am-pm">','<div class="clockpicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="picker__calendar-container">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<div class="clockpicker-am-pm-block">',"</div>","</div>",'<div class="picker__footer">',"</div>","</div>","</div>","</div>","</div>","</div>"].join("");function M(t,e){var i,o,r=n(S),l=r.find(".clockpicker-plate"),c=r.find(".picker__holder"),p=r.find(".clockpicker-hours"),M=r.find(".clockpicker-minutes"),A=r.find(".clockpicker-am-pm-block"),I="INPUT"===t.prop("tagName"),P=I?t:t.find("input"),O=(P.prop("type"),n("label[for="+P.attr("id")+"]")),_=this;if(this.id=(o=++v+"",(i="cp")?i+o:o),this.element=t,this.holder=c,this.options=e,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=I,this.input=P,this.label=O,this.popover=r,this.plate=l,this.hoursView=p,this.minutesView=M,this.amPmBlock=A,this.spanHours=r.find(".clockpicker-span-hours"),this.spanMinutes=r.find(".clockpicker-span-minutes"),this.spanAmPm=r.find(".clockpicker-span-am-pm"),this.footer=r.find(".picker__footer"),this.amOrPm="",e.twelvehour){var D=['<div class="clockpicker-am-pm-block">','<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">',"AM","</button>",'<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">',"PM","</button>","</div>"].join("");n(D);e.ampmclickable?(this.spanAmPm.empty(),n('<div id="click-am">AM</div>').on("click",function(){_.spanAmPm.children("#click-am").addClass("text-primary"),_.spanAmPm.children("#click-pm").removeClass("text-primary"),_.amOrPm="AM"}).appendTo(this.spanAmPm),n('<div id="click-pm">PM</div>').on("click",function(){_.spanAmPm.children("#click-pm").addClass("text-primary"),_.spanAmPm.children("#click-am").removeClass("text-primary"),_.amOrPm="PM"}).appendTo(this.spanAmPm)):(n('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click",function(){_.amOrPm="AM",_.amPmBlock.children(".pm-button").removeClass("active"),_.amPmBlock.children(".am-button").addClass("active"),_.spanAmPm.empty().append("AM")}).appendTo(this.amPmBlock),n('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click",function(){_.amOrPm="PM",_.amPmBlock.children(".am-button").removeClass("active"),_.amPmBlock.children(".pm-button").addClass("active"),_.spanAmPm.empty().append("PM")}).appendTo(this.amPmBlock))}e.darktheme&&r.addClass("darktheme"),n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="'+(e.twelvehour?"3":"1")+'">'+e.donetext+"</button>").click(n.proxy(this.done,this)).appendTo(this.footer),n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="'+(e.twelvehour?"4":"2")+'">'+e.cleartext+"</button>").click(n.proxy(this.clearInput,this)).appendTo(this.footer),this.spanHours.click(n.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(n.proxy(this.toggleView,this,"minutes")),P.on("click.clockpicker",m(n.proxy(this.show,this),100));var E,L,$,F,R=n('<div class="clockpicker-tick"></div>');if(e.twelvehour)for(E=0;E<12;E+=e.hourstep)L=R.clone(),$=E/6*Math.PI,F=b,L.css("font-size","140%"),L.css({left:y+Math.sin($)*F-w,top:y-Math.cos($)*F-w}),L.html(0===E?12:E),p.append(L),L.on(u,N);else for(E=0;E<24;E+=e.hourstep){L=R.clone(),$=E/6*Math.PI;var W=E>0&&E<13;F=W?x:b,L.css({left:y+Math.sin($)*F-w,top:y-Math.cos($)*F-w}),W&&L.css("font-size","120%"),L.html(0===E?"00":E),p.append(L),L.on(u,N)}var V=Math.max(e.minutestep,5);for(E=0;E<60;E+=V)for(E=0;E<60;E+=5)L=R.clone(),$=E/30*Math.PI,L.css({left:y+Math.sin($)*b-w,top:y-Math.cos($)*b-w}),L.css("font-size","140%"),L.html(g(E)),M.append(L),L.on(u,N);function N(t,i){var n=l.offset(),o=/^touch/.test(t.type),r=n.left+y,c=n.top+y,u=(o?t.originalEvent.touches[0]:t).pageX-r,p=(o?t.originalEvent.touches[0]:t).pageY-c,f=Math.sqrt(u*u+p*p),m=!1;if(!i||!(f<b-w||f>b+w)){t.preventDefault();var g=setTimeout(function(){_.popover.addClass("clockpicker-moving")},200);s&&l.append(_.canvas),_.setHand(u,p,!i,!0),a.off(d).on(d,function(t){t.preventDefault();var e=/^touch/.test(t.type),i=(e?t.originalEvent.touches[0]:t).pageX-r,n=(e?t.originalEvent.touches[0]:t).pageY-c;(m||i!==u||n!==p)&&(m=!0,_.setHand(i,n,!1,!0))}),a.off(h).on(h,function(t){a.off(h),t.preventDefault();var n=/^touch/.test(t.type),o=(n?t.originalEvent.changedTouches[0]:t).pageX-r,s=(n?t.originalEvent.changedTouches[0]:t).pageY-c;(i||m)&&o===u&&s===p&&_.setHand(o,s),"hours"===_.currentView?_.toggleView("minutes",C/2):e.autoclose&&(_.minutesView.addClass("clockpicker-dial-out"),setTimeout(function(){_.done()},C/2)),l.prepend(H),clearTimeout(g),_.popover.removeClass("clockpicker-moving"),a.off(d)})}}if(l.on(u,function(t){0===n(t.target).closest(".clockpicker-tick").length&&N(t,!0)}),s){var H=r.find(".clockpicker-canvas"),z=f("svg");z.setAttribute("class","clockpicker-svg"),z.setAttribute("width",k),z.setAttribute("height",k);var B=f("g");B.setAttribute("transform","translate("+y+","+y+")");var j=f("circle");j.setAttribute("class","clockpicker-canvas-bearing"),j.setAttribute("cx",0),j.setAttribute("cy",0),j.setAttribute("r",2);var Y=f("line");Y.setAttribute("x1",0),Y.setAttribute("y1",0);var q=f("circle");q.setAttribute("class","clockpicker-canvas-bg"),q.setAttribute("r",w);var X=f("circle");X.setAttribute("class","clockpicker-canvas-fg"),X.setAttribute("r",5),B.appendChild(Y),B.appendChild(q),B.appendChild(X),B.appendChild(j),z.appendChild(B),H.append(z),this.hand=Y,this.bg=q,this.fg=X,this.bearing=j,this.g=B,this.canvas=H}T(this.options.init)}function T(t){t&&"function"==typeof t&&t()}M.DEFAULTS={default:"",fromnow:0,donetext:"Done",cleartext:"Clear",autoclose:!1,ampmclickable:!1,darktheme:!1,twelvehour:!1,vibrate:!0,hourstep:1,minutestep:1,ampmSubmit:!1},M.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},M.prototype.locate=function(){var t=this.element,e=this.popover;t.offset(),t.outerWidth(),t.outerHeight(),this.options.align;e.show()},M.prototype.parseInputValue=function(){var t=this.input.prop("value")||this.options.default||"";if("now"===t&&(t=new Date(+new Date+this.options.fromnow)),t instanceof Date&&(t=t.getHours()+":"+t.getMinutes()),t=t.split(":"),this.hours=+t[0]||0,this.minutes=+(t[1]+"").replace(/\D/g,"")||0,this.hours=Math.round(this.hours/this.options.hourstep)*this.options.hourstep,this.minutes=Math.round(this.minutes/this.options.minutestep)*this.options.minutestep,this.options.twelvehour){var e=(t[1]+"").replace(/\d+/g,"").toLowerCase();this.amOrPm=this.hours>12||"pm"===e?"PM":"AM"}},M.prototype.show=function(t){if(!this.isShown){T(this.options.beforeShow),n(":input").each(function(){n(this).attr("tabindex",-1)});var e=this;this.input.blur(),this.popover.addClass("picker--opened"),this.input.addClass("picker__input picker__input--active"),n(document.body).css("overflow","hidden"),this.isAppended||(this.popover.insertAfter(this.input),this.options.twelvehour&&(this.amOrPm="PM",this.options.ampmclickable?(this.spanAmPm.children("#click-pm").addClass("text-primary"),this.spanAmPm.children("#click-am").removeClass("text-primary")):(this.amPmBlock.children(".am-button").removeClass("active"),this.amPmBlock.children(".pm-button").addClass("active"),this.spanAmPm.empty().append("PM"))),o.on("resize.clockpicker"+this.id,function(){e.isShown&&e.locate()}),this.isAppended=!0),this.parseInputValue(),this.spanHours.html(g(this.hours)),this.spanMinutes.html(g(this.minutes)),this.options.twelvehour&&this.spanAmPm.empty().append(this.amOrPm),this.toggleView("hours"),this.locate(),this.isShown=!0,a.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,m(function(t){var i=n(t.target);0===i.closest(e.popover.find(".picker__wrap")).length&&0===i.closest(e.input).length&&e.hide()},100)),a.on("keyup.clockpicker."+this.id,m(function(t){27===t.keyCode&&e.hide()},100)),T(this.options.afterShow)}},M.prototype.hide=function(){T(this.options.beforeHide),this.input.removeClass("picker__input picker__input--active"),this.popover.removeClass("picker--opened"),n(document.body).css("overflow","visible"),this.isShown=!1,n(":input").each(function(t){n(this).attr("tabindex",t+1)}),a.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),a.off("keyup.clockpicker."+this.id),this.popover.hide(),T(this.options.afterHide)},M.prototype.toggleView=function(t,e){var i=!1;"minutes"===t&&"visible"===n(this.hoursView).css("visibility")&&(T(this.options.beforeHourSelect),i=!0);var o="hours"===t,a=o?this.hoursView:this.minutesView,r=o?this.minutesView:this.hoursView;this.currentView=t,this.spanHours.toggleClass("text-primary",o),this.spanMinutes.toggleClass("text-primary",!o),r.addClass("clockpicker-dial-out"),a.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(e),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){r.css("visibility","hidden")},C),i&&T(this.options.afterHourSelect)},M.prototype.resetClock=function(t){var e=this.currentView,i=this[e],n="hours"===e,o=i*(Math.PI/(n?6:30)),a=n&&i>0&&i<13?x:b,r=Math.sin(o)*a,l=-Math.cos(o)*a,c=this;s&&t?(c.canvas.addClass("clockpicker-canvas-out"),setTimeout(function(){c.canvas.removeClass("clockpicker-canvas-out"),c.setHand(r,l)},t)):this.setHand(r,l)},M.prototype.setHand=function(t,e,i,o){var a,r,l=Math.atan2(t,-e),c="hours"===this.currentView,u=Math.sqrt(t*t+e*e),d=this.options,h=c&&u<(b+x)/2,f=h?x:b;if(a=c?d.hourstep/6*Math.PI:d.minutestep/30*Math.PI,d.twelvehour&&(f=b),l<0&&(l=2*Math.PI+l),l=(r=Math.round(l/a))*a,c?(r*=d.hourstep,d.twelvehour||!h!=r>0||(r+=12),d.twelvehour&&0===r&&(r=12),24===r&&(r=0)):60===(r*=d.minutestep)&&(r=0),c?this.fg.setAttribute("class","clockpicker-canvas-fg"):r%5==0?this.fg.setAttribute("class","clockpicker-canvas-fg"):this.fg.setAttribute("class","clockpicker-canvas-fg active"),this[this.currentView]!==r&&p&&this.options.vibrate&&(this.vibrateTimer||(navigator[p](10),this.vibrateTimer=setTimeout(n.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=r,this[c?"spanHours":"spanMinutes"].html(g(r)),s){o||!c&&r%5?(this.g.insertBefore(this.hand,this.bearing),this.g.insertBefore(this.bg,this.fg),this.bg.setAttribute("class","clockpicker-canvas-bg clockpicker-canvas-bg-trans")):(this.g.insertBefore(this.hand,this.bg),this.g.insertBefore(this.fg,this.bg),this.bg.setAttribute("class","clockpicker-canvas-bg"));var m=Math.sin(l)*f,v=-Math.cos(l)*f;this.hand.setAttribute("x2",m),this.hand.setAttribute("y2",v),this.bg.setAttribute("cx",m),this.bg.setAttribute("cy",v),this.fg.setAttribute("cx",m),this.fg.setAttribute("cy",v)}else this[c?"hoursView":"minutesView"].find(".clockpicker-tick").each(function(){var t=n(this);t.toggleClass("active",r===+t.html())})},M.prototype.clearInput=function(){this.input.val(""),this.hide(),this.options.afterDone&&"function"==typeof this.options.afterDone&&this.options.afterDone(this.input,null)},M.prototype.getTime=function(t){this.parseInputValue();var e=this.hours;this.options.twelvehour&&e<12&&"PM"===this.amOrPm&&(e+=12);var i=new Date;return i.setMinutes(this.minutes),i.setHours(e),i.setSeconds(0),t&&t.apply(this.element,i)||i},M.prototype.done=function(){T(this.options.beforeDone),this.hide(),this.label.addClass("active");var t=this.input.prop("value"),e=this.hours,i=":"+g(this.minutes);this.isHTML5&&this.options.twelvehour&&(this.hours<12&&"PM"===this.amOrPm&&(e+=12),12===this.hours&&"AM"===this.amOrPm&&(e=0)),i=g(e)+i,!this.isHTML5&&this.options.twelvehour&&(i+=this.amOrPm),this.input.prop("value",i),i!==t&&(this.input.trigger("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),T(this.options.afterDone)},M.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(o.off("resize.clockpicker"+this.id),this.popover.remove())},n.fn.pickatime=function(t){var e=Array.prototype.slice.call(arguments,1);function i(){var i=n(this),o=i.data("clockpicker");if(o)"function"==typeof o[t]&&o[t].apply(o,e);else{var a=n.extend({},M.DEFAULTS,i.data(),"object"==typeof t&&t);i.data("clockpicker",new M(i,a))}}if(1==this.length){var o=i.apply(this[0]);return void 0!==o?o:this}return this.each(i)}}(),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";return function(t,e,i,n){var o={features:null,bind:function(t,e,i,n){var o=(n?"remove":"add")+"EventListener";e=e.split(" ");for(var a=0;a<e.length;a++)e[a]&&t[o](e[a],i,!1)},isArray:function(t){return t instanceof Array},createEl:function(t,e){var i=document.createElement(e||"div");return t&&(i.className=t),i},getScrollY:function(){var t=window.pageYOffset;return void 0!==t?t:document.documentElement.scrollTop},unbind:function(t,e,i){o.bind(t,e,i,!0)},removeClass:function(t,e){var i=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(i," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(t,e){o.hasClass(t,e)||(t.className+=(t.className?" ":"")+e)},hasClass:function(t,e){return t.className&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},getChildByClass:function(t,e){for(var i=t.firstChild;i;){if(o.hasClass(i,e))return i;i=i.nextSibling}},arraySearch:function(t,e,i){for(var n=t.length;n--;)if(t[n][i]===e)return n;return-1},extend:function(t,e,i){for(var n in e)if(e.hasOwnProperty(n)){if(i&&t.hasOwnProperty(n))continue;t[n]=e[n]}},easing:{sine:{out:function(t){return Math.sin(t*(Math.PI/2))},inOut:function(t){return-(Math.cos(Math.PI*t)-1)/2}},cubic:{out:function(t){return--t*t*t+1}}},detectFeatures:function(){if(o.features)return o.features;var t=o.createEl().style,e="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!i.pointerEvent){var n=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);a&&a.length>0&&(a=parseInt(a[1],10))>=1&&8>a&&(i.isOldIOSPhone=!0)}var r=n.match(/Android\s([0-9\.]*)/),s=r?r[1]:0;(s=parseFloat(s))>=1&&(4.4>s&&(i.isOldAndroid=!0),i.androidVersion=s),i.isMobileOpera=/opera mini|opera mobi/i.test(n)}for(var l,c,u=["transform","perspective","animationName"],d=["","webkit","Moz","ms","O"],h=0;4>h;h++){e=d[h];for(var p=0;3>p;p++)l=u[p],c=e+(e?l.charAt(0).toUpperCase()+l.slice(1):l),!i[l]&&c in t&&(i[l]=c);e&&!i.raf&&(e=e.toLowerCase(),i.raf=window[e+"RequestAnimationFrame"],i.raf&&(i.caf=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]))}if(!i.raf){var f=0;i.raf=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-f)),n=window.setTimeout(function(){t(e+i)},i);return f=e+i,n},i.caf=function(t){clearTimeout(t)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,o.features=i,i}};o.detectFeatures(),o.features.oldIE&&(o.bind=function(t,e,i,n){e=e.split(" ");for(var o,a=(n?"detach":"attach")+"Event",r=function(){i.handleEvent.call(i)},s=0;s<e.length;s++)if(o=e[s])if("object"==typeof i&&i.handleEvent){if(n){if(!i["oldIE"+o])return!1}else i["oldIE"+o]=r;t[a]("on"+o,i["oldIE"+o])}else t[a]("on"+o,i)});var a=this,r={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(t){return"A"===t.tagName},getDoubleTapZoom:function(t,e){return t?1:e.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};o.extend(r,n);var s,l,c,u,d,h,p,f,m,g,v,y,b,x,w,k,C,S,M,T,A,I,P,O,_,D,E,L,$,F,R,W,V,N,H,z,B,j,Y,q,X,U,K,Q,Z,G,J,tt,et,it,nt,ot,at,rt,st,lt={x:0,y:0},ct={x:0,y:0},ut={x:0,y:0},dt={},ht=0,pt={},ft={x:0,y:0},mt=0,gt=!0,vt=[],yt={},bt=!1,xt=function(t,e){o.extend(a,e.publicMethods),vt.push(t)},wt=function(t){var e=Ne();return t>e-1?t-e:0>t?e+t:t},kt={},Ct=function(t,e){return kt[t]||(kt[t]=[]),kt[t].push(e)},St=function(t){var e=kt[t];if(e){var i=Array.prototype.slice.call(arguments);i.shift();for(var n=0;n<e.length;n++)e[n].apply(a,i)}},Mt=function(){return(new Date).getTime()},Tt=function(t){at=t,a.bg.style.opacity=t*r.bgOpacity},At=function(t,e,i,n,o){(!bt||o&&o!==a.currItem)&&(n/=o?o.fitRatio:a.currItem.fitRatio),t[I]=y+e+"px, "+i+"px"+b+" scale("+n+")"},It=function(t){tt&&(t&&(g>a.currItem.fitRatio?bt||(Ke(a.currItem,!1,!0),bt=!0):bt&&(Ke(a.currItem),bt=!1)),At(tt,ut.x,ut.y,g))},Pt=function(t){t.container&&At(t.container.style,t.initialPosition.x,t.initialPosition.y,t.initialZoomLevel,t)},Ot=function(t,e){e[I]=y+t+"px, 0px"+b},_t=function(t,e){if(!r.loop&&e){var i=u+(ft.x*ht-t)/ft.x,n=Math.round(t-ce.x);(0>i&&n>0||i>=Ne()-1&&0>n)&&(t=ce.x+n*r.mainScrollEndFriction)}ce.x=t,Ot(t,d)},Dt=function(t,e){var i=ue[t]-pt[t];return ct[t]+lt[t]+i-i*(e/v)},Et=function(t,e){t.x=e.x,t.y=e.y,e.id&&(t.id=e.id)},Lt=function(t){t.x=Math.round(t.x),t.y=Math.round(t.y)},$t=null,Ft=function(){$t&&(o.unbind(document,"mousemove",Ft),o.addClass(t,"pswp--has_mouse"),r.mouseUsed=!0,St("mouseUsed")),$t=setTimeout(function(){$t=null},100)},Rt=function(t,e){var i=Ye(a.currItem,dt,t);return e&&(J=i),i},Wt=function(t){return t||(t=a.currItem),t.initialZoomLevel},Vt=function(t){return t||(t=a.currItem),t.w>0?r.maxSpreadZoom:1},Nt=function(t,e,i,n){return n===a.currItem.initialZoomLevel?(i[t]=a.currItem.initialPosition[t],!0):(i[t]=Dt(t,n),i[t]>e.min[t]?(i[t]=e.min[t],!0):i[t]<e.max[t]&&(i[t]=e.max[t],!0))},Ht=function(t){var e="";r.escKey&&27===t.keyCode?e="close":r.arrowKeys&&(37===t.keyCode?e="prev":39===t.keyCode&&(e="next")),e&&(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey||(t.preventDefault?t.preventDefault():t.returnValue=!1,a[e]()))},zt=function(t){t&&(X||q||et||z)&&(t.preventDefault(),t.stopPropagation())},Bt=function(){a.setScrollOffset(0,o.getScrollY())},jt={},Yt=0,qt=function(t){jt[t]&&(jt[t].raf&&D(jt[t].raf),Yt--,delete jt[t])},Xt=function(t){jt[t]&&qt(t),jt[t]||(Yt++,jt[t]={})},Ut=function(){for(var t in jt)jt.hasOwnProperty(t)&&qt(t)},Kt=function(t,e,i,n,o,a,r){var s,l=Mt();Xt(t);var c=function(){if(jt[t]){if((s=Mt()-l)>=n)return qt(t),a(i),void(r&&r());a((i-e)*o(s/n)+e),jt[t].raf=_(c)}};c()},Qt={shout:St,listen:Ct,viewportSize:dt,options:r,isMainScrollAnimating:function(){return et},getZoomLevel:function(){return g},getCurrentIndex:function(){return u},isDragging:function(){return j},isZooming:function(){return Z},setScrollOffset:function(t,e){pt.x=t,F=pt.y=e,St("updateScrollOffset",pt)},applyZoomPan:function(t,e,i,n){ut.x=e,ut.y=i,g=t,It(n)},init:function(){if(!s&&!l){var i;a.framework=o,a.template=t,a.bg=o.getChildByClass(t,"pswp__bg"),E=t.className,s=!0,R=o.detectFeatures(),_=R.raf,D=R.caf,I=R.transform,$=R.oldIE,a.scrollWrap=o.getChildByClass(t,"pswp__scroll-wrap"),a.container=o.getChildByClass(a.scrollWrap,"pswp__container"),d=a.container.style,a.itemHolders=k=[{el:a.container.children[0],wrap:0,index:-1},{el:a.container.children[1],wrap:0,index:-1},{el:a.container.children[2],wrap:0,index:-1}],k[0].el.style.display=k[2].el.style.display="none",function(){if(I){var e=R.perspective&&!O;return y="translate"+(e?"3d(":"("),void(b=R.perspective?", 0px)":")")}I="left",o.addClass(t,"pswp--ie"),Ot=function(t,e){e.left=t+"px"},Pt=function(t){var e=t.fitRatio>1?1:t.fitRatio,i=t.container.style,n=e*t.w,o=e*t.h;i.width=n+"px",i.height=o+"px",i.left=t.initialPosition.x+"px",i.top=t.initialPosition.y+"px"},It=function(){if(tt){var t=tt,e=a.currItem,i=e.fitRatio>1?1:e.fitRatio,n=i*e.w,o=i*e.h;t.width=n+"px",t.height=o+"px",t.left=ut.x+"px",t.top=ut.y+"px"}}}(),m={resize:a.updateSize,scroll:Bt,keydown:Ht,click:zt};var n=R.isOldIOSPhone||R.isOldAndroid||R.isMobileOpera;for(R.animationName&&R.transform&&!n||(r.showAnimationDuration=r.hideAnimationDuration=0),i=0;i<vt.length;i++)a["init"+vt[i]]();e&&(a.ui=new e(a,o)).init(),St("firstUpdate"),u=u||r.index||0,(isNaN(u)||0>u||u>=Ne())&&(u=0),a.currItem=Ve(u),(R.isOldIOSPhone||R.isOldAndroid)&&(gt=!1),t.setAttribute("aria-hidden","false"),r.modal&&(gt?t.style.position="fixed":(t.style.position="absolute",t.style.top=o.getScrollY()+"px")),void 0===F&&(St("initialLayout"),F=L=o.getScrollY());var c="pswp--open ";for(r.mainClass&&(c+=r.mainClass+" "),r.showHideOpacity&&(c+="pswp--animate_opacity "),c+=O?"pswp--touch":"pswp--notouch",c+=R.animationName?" pswp--css_animation":"",c+=R.svg?" pswp--svg":"",o.addClass(t,c),a.updateSize(),h=-1,mt=null,i=0;3>i;i++)Ot((i+h)*ft.x,k[i].el.style);$||o.bind(a.scrollWrap,f,a),Ct("initialZoomInEnd",function(){a.setContent(k[0],u-1),a.setContent(k[2],u+1),k[0].el.style.display=k[2].el.style.display="block",r.focus&&t.focus(),o.bind(document,"keydown",a),R.transform&&o.bind(a.scrollWrap,"click",a),r.mouseUsed||o.bind(document,"mousemove",Ft),o.bind(window,"resize scroll",a),St("bindEvents")}),a.setContent(k[1],u),a.updateCurrItem(),St("afterInit"),gt||(x=setInterval(function(){Yt||j||Z||g!==a.currItem.initialZoomLevel||a.updateSize()},1e3)),o.addClass(t,"pswp--visible")}},close:function(){s&&(s=!1,l=!0,St("close"),o.unbind(window,"resize",a),o.unbind(window,"scroll",m.scroll),o.unbind(document,"keydown",a),o.unbind(document,"mousemove",Ft),R.transform&&o.unbind(a.scrollWrap,"click",a),j&&o.unbind(window,p,a),St("unbindEvents"),He(a.currItem,null,!0,a.destroy))},destroy:function(){St("destroy"),$e&&clearTimeout($e),t.setAttribute("aria-hidden","true"),t.className=E,x&&clearInterval(x),o.unbind(a.scrollWrap,f,a),o.unbind(window,"scroll",a),pe(),Ut(),kt=null},panTo:function(t,e,i){i||(t>J.min.x?t=J.min.x:t<J.max.x&&(t=J.max.x),e>J.min.y?e=J.min.y:e<J.max.y&&(e=J.max.y)),ut.x=t,ut.y=e,It()},handleEvent:function(t){t=t||window.event,m[t.type]&&m[t.type](t)},goTo:function(t){var e=(t=wt(t))-u;mt=e,u=t,a.currItem=Ve(u),ht-=e,_t(ft.x*ht),Ut(),et=!1,a.updateCurrItem()},next:function(){a.goTo(u+1)},prev:function(){a.goTo(u-1)},updateCurrZoomItem:function(t){if(t&&St("beforeChange",0),k[1].el.children.length){var e=k[1].el.children[0];tt=o.hasClass(e,"pswp__zoom-wrap")?e.style:null}else tt=null;J=a.currItem.bounds,v=g=a.currItem.initialZoomLevel,ut.x=J.center.x,ut.y=J.center.y,t&&St("afterChange")},invalidateCurrItems:function(){w=!0;for(var t=0;3>t;t++)k[t].item&&(k[t].item.needsUpdate=!0)},updateCurrItem:function(t){if(0!==mt){var e,i=Math.abs(mt);if(!(t&&2>i)){a.currItem=Ve(u),bt=!1,St("beforeChange",mt),i>=3&&(h+=mt+(mt>0?-3:3),i=3);for(var n=0;i>n;n++)mt>0?(e=k.shift(),k[2]=e,Ot((++h+2)*ft.x,e.el.style),a.setContent(e,u-i+n+1+1)):(e=k.pop(),k.unshift(e),Ot(--h*ft.x,e.el.style),a.setContent(e,u+i-n-1-1));if(tt&&1===Math.abs(mt)){var o=Ve(C);o.initialZoomLevel!==g&&(Ye(o,dt),Ke(o),Pt(o))}mt=0,a.updateCurrZoomItem(),C=u,St("afterChange")}}},updateSize:function(e){if(!gt&&r.modal){var i=o.getScrollY();if(F!==i&&(t.style.top=i+"px",F=i),!e&&yt.x===window.innerWidth&&yt.y===window.innerHeight)return;yt.x=window.innerWidth,yt.y=window.innerHeight,t.style.height=yt.y+"px"}if(dt.x=a.scrollWrap.clientWidth,dt.y=a.scrollWrap.clientHeight,Bt(),ft.x=dt.x+Math.round(dt.x*r.spacing),ft.y=dt.y,_t(ft.x*ht),St("beforeResize"),void 0!==h){for(var n,s,l,c=0;3>c;c++)n=k[c],Ot((c+h)*ft.x,n.el.style),l=u+c-1,r.loop&&Ne()>2&&(l=wt(l)),(s=Ve(l))&&(w||s.needsUpdate||!s.bounds)?(a.cleanSlide(s),a.setContent(n,l),1===c&&(a.currItem=s,a.updateCurrZoomItem(!0)),s.needsUpdate=!1):-1===n.index&&l>=0&&a.setContent(n,l),s&&s.container&&(Ye(s,dt),Ke(s),Pt(s));w=!1}v=g=a.currItem.initialZoomLevel,(J=a.currItem.bounds)&&(ut.x=J.center.x,ut.y=J.center.y,It(!0)),St("resize")},zoomTo:function(t,e,i,n,a){e&&(v=g,ue.x=Math.abs(e.x)-ut.x,ue.y=Math.abs(e.y)-ut.y,Et(ct,ut));var r=Rt(t,!1),s={};Nt("x",r,s,t),Nt("y",r,s,t);var l=g,c=ut.x,u=ut.y;Lt(s);var d=function(e){1===e?(g=t,ut.x=s.x,ut.y=s.y):(g=(t-l)*e+l,ut.x=(s.x-c)*e+c,ut.y=(s.y-u)*e+u),a&&a(e),It(1===e)};i?Kt("customZoomTo",0,1,i,n||o.easing.sine.inOut,d):d(1)}},Zt={},Gt={},Jt={},te={},ee={},ie=[],ne={},oe=[],ae={},re=0,se={x:0,y:0},le=0,ce={x:0,y:0},ue={x:0,y:0},de={x:0,y:0},he=function(t,e){return ae.x=Math.abs(t.x-e.x),ae.y=Math.abs(t.y-e.y),Math.sqrt(ae.x*ae.x+ae.y*ae.y)},pe=function(){U&&(D(U),U=null)},fe=function(){j&&(U=_(fe),Ie())},me=function(t,e){return!(!t||t===document)&&!(t.getAttribute("class")&&t.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(e(t)?t:me(t.parentNode,e))},ge={},ve=function(t,e){return ge.prevent=!me(t.target,r.isClickableElement),St("preventDragEvent",t,e,ge),ge.prevent},ye=function(t,e){return e.x=t.pageX,e.y=t.pageY,e.id=t.identifier,e},be=function(t,e,i){i.x=.5*(t.x+e.x),i.y=.5*(t.y+e.y)},xe=function(){var t=ut.y-a.currItem.initialPosition.y;return 1-Math.abs(t/(dt.y/2))},we={},ke={},Ce=[],Se=function(t){for(;Ce.length>0;)Ce.pop();return P?(st=0,ie.forEach(function(t){0===st?Ce[0]=t:1===st&&(Ce[1]=t),st++})):t.type.indexOf("touch")>-1?t.touches&&t.touches.length>0&&(Ce[0]=ye(t.touches[0],we),t.touches.length>1&&(Ce[1]=ye(t.touches[1],ke))):(we.x=t.pageX,we.y=t.pageY,we.id="",Ce[0]=we),Ce},Me=function(t,e){var i,n,o,s,l=ut[t]+e[t],c=e[t]>0,u=ce.x+e.x,d=ce.x-ne.x;return i=l>J.min[t]||l<J.max[t]?r.panEndFriction:1,l=ut[t]+e[t]*i,!r.allowPanToNext&&g!==a.currItem.initialZoomLevel||(tt?"h"!==it||"x"!==t||q||(c?(l>J.min[t]&&(i=r.panEndFriction,J.min[t],n=J.min[t]-ct[t]),(0>=n||0>d)&&Ne()>1?(s=u,0>d&&u>ne.x&&(s=ne.x)):J.min.x!==J.max.x&&(o=l)):(l<J.max[t]&&(i=r.panEndFriction,J.max[t],n=ct[t]-J.max[t]),(0>=n||d>0)&&Ne()>1?(s=u,d>0&&u<ne.x&&(s=ne.x)):J.min.x!==J.max.x&&(o=l))):s=u,"x"!==t)?void(et||K||g>a.currItem.fitRatio&&(ut[t]+=e[t]*i)):(void 0!==s&&(_t(s,!0),K=s!==ne.x),J.min.x!==J.max.x&&(void 0!==o?ut.x=o:K||(ut.x+=e.x*i)),void 0!==s)},Te=function(t){if(!("mousedown"===t.type&&t.button>0)){if(We)return void t.preventDefault();if(!B||"mousedown"!==t.type){if(ve(t,!0)&&t.preventDefault(),St("pointerDown"),P){var e=o.arraySearch(ie,t.pointerId,"id");0>e&&(e=ie.length),ie[e]={x:t.pageX,y:t.pageY,id:t.pointerId}}var i=Se(t),n=i.length;Q=null,Ut(),j&&1!==n||(j=nt=!0,o.bind(window,p,a),H=rt=ot=z=K=X=Y=q=!1,it=null,St("firstTouchStart",i),Et(ct,ut),lt.x=lt.y=0,Et(te,i[0]),Et(ee,te),ne.x=ft.x*ht,oe=[{x:te.x,y:te.y}],V=W=Mt(),Rt(g,!0),pe(),fe()),!Z&&n>1&&!et&&!K&&(v=g,q=!1,Z=Y=!0,lt.y=lt.x=0,Et(ct,ut),Et(Zt,i[0]),Et(Gt,i[1]),be(Zt,Gt,de),ue.x=Math.abs(de.x)-ut.x,ue.y=Math.abs(de.y)-ut.y,G=he(Zt,Gt))}}},Ae=function(t){if(t.preventDefault(),P){var e=o.arraySearch(ie,t.pointerId,"id");if(e>-1){var i=ie[e];i.x=t.pageX,i.y=t.pageY}}if(j){var n=Se(t);if(it||X||Z)Q=n;else if(ce.x!==ft.x*ht)it="h";else{var a=Math.abs(n[0].x-te.x)-Math.abs(n[0].y-te.y);Math.abs(a)>=10&&(it=a>0?"h":"v",Q=n)}}},Ie=function(){if(Q){var t=Q.length;if(0!==t)if(Et(Zt,Q[0]),Jt.x=Zt.x-te.x,Jt.y=Zt.y-te.y,Z&&t>1){if(te.x=Zt.x,te.y=Zt.y,!Jt.x&&!Jt.y&&function(t,e){return t.x===e.x&&t.y===e.y}(Q[1],Gt))return;Et(Gt,Q[1]),q||(q=!0,St("zoomGestureStarted"));var e=he(Zt,Gt),i=Ee(e);i>a.currItem.initialZoomLevel+a.currItem.initialZoomLevel/15&&(rt=!0);var n=1,o=Wt(),s=Vt();if(o>i)if(r.pinchToClose&&!rt&&v<=a.currItem.initialZoomLevel){var l=1-(o-i)/(o/1.2);Tt(l),St("onPinchClose",l),ot=!0}else(n=(o-i)/o)>1&&(n=1),i=o-n*(o/3);else i>s&&((n=(i-s)/(6*o))>1&&(n=1),i=s+n*o);0>n&&(n=0),be(Zt,Gt,se),lt.x+=se.x-de.x,lt.y+=se.y-de.y,Et(de,se),ut.x=Dt("x",i),ut.y=Dt("y",i),H=i>g,g=i,It()}else{if(!it)return;if(nt&&(nt=!1,Math.abs(Jt.x)>=10&&(Jt.x-=Q[0].x-ee.x),Math.abs(Jt.y)>=10&&(Jt.y-=Q[0].y-ee.y)),te.x=Zt.x,te.y=Zt.y,0===Jt.x&&0===Jt.y)return;if("v"===it&&r.closeOnVerticalDrag&&"fit"===r.scaleMode&&g===a.currItem.initialZoomLevel){lt.y+=Jt.y,ut.y+=Jt.y;var c=xe();return z=!0,St("onVerticalDrag",c),Tt(c),void It()}(function(t,e,i){if(t-V>50){var n=oe.length>2?oe.shift():{};n.x=e,n.y=i,oe.push(n),V=t}})(Mt(),Zt.x,Zt.y),X=!0,J=a.currItem.bounds,Me("x",Jt)||(Me("y",Jt),Lt(ut),It())}}},Pe=function(t){if(R.isOldAndroid){if(B&&"mouseup"===t.type)return;t.type.indexOf("touch")>-1&&(clearTimeout(B),B=setTimeout(function(){B=0},600))}var e;if(St("pointerUp"),ve(t,!1)&&t.preventDefault(),P){var i=o.arraySearch(ie,t.pointerId,"id");i>-1&&(e=ie.splice(i,1)[0],navigator.pointerEnabled?e.type=t.pointerType||"mouse":(e.type={4:"mouse",2:"touch",3:"pen"}[t.pointerType],e.type||(e.type=t.pointerType||"mouse")))}var n,s=Se(t),l=s.length;if("mouseup"===t.type&&(l=0),2===l)return Q=null,!0;1===l&&Et(ee,s[0]),0!==l||it||et||(e||("mouseup"===t.type?e={x:t.pageX,y:t.pageY,type:"mouse"}:t.changedTouches&&t.changedTouches[0]&&(e={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY,type:"touch"})),St("touchRelease",t,e));var c=-1;if(0===l&&(j=!1,o.unbind(window,p,a),pe(),Z?c=0:-1!==le&&(c=Mt()-le)),le=1===l?Mt():-1,n=-1!==c&&150>c?"zoom":"swipe",Z&&2>l&&(Z=!1,1===l&&(n="zoomPointerUp"),St("zoomGestureEnded")),Q=null,X||q||et||z)if(Ut(),N||(N=Oe()),N.calculateSwipeSpeed("x"),z)if(xe()<r.verticalDragRange)a.close();else{var u=ut.y,d=at;Kt("verticalDrag",0,1,300,o.easing.cubic.out,function(t){ut.y=(a.currItem.initialPosition.y-u)*t+u,Tt((1-d)*t+d),It()}),St("onVerticalDrag",1)}else{if((K||et)&&0===l){if(De(n,N))return;n="zoomPointerUp"}if(!et)return"swipe"!==n?void Le():void(!K&&g>a.currItem.fitRatio&&_e(N))}},Oe=function(){var t,e,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(n){oe.length>1?(t=Mt()-V+50,e=oe[oe.length-2][n]):(t=Mt()-W,e=ee[n]),i.lastFlickOffset[n]=te[n]-e,i.lastFlickDist[n]=Math.abs(i.lastFlickOffset[n]),i.lastFlickDist[n]>20?i.lastFlickSpeed[n]=i.lastFlickOffset[n]/t:i.lastFlickSpeed[n]=0,Math.abs(i.lastFlickSpeed[n])<.1&&(i.lastFlickSpeed[n]=0),i.slowDownRatio[n]=.95,i.slowDownRatioReverse[n]=1-i.slowDownRatio[n],i.speedDecelerationRatio[n]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(ut[t]>J.min[t]?i.backAnimDestination[t]=J.min[t]:ut[t]<J.max[t]&&(i.backAnimDestination[t]=J.max[t]),void 0!==i.backAnimDestination[t]&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,Kt("bounceZoomPan"+t,ut[t],i.backAnimDestination[t],e||300,o.easing.sine.out,function(e){ut[t]=e,It()}))))},calculateAnimOffset:function(t){i.backAnimStarted[t]||(i.speedDecelerationRatio[t]=i.speedDecelerationRatio[t]*(i.slowDownRatio[t]+i.slowDownRatioReverse[t]-i.slowDownRatioReverse[t]*i.timeDiff/10),i.speedDecelerationRatioAbs[t]=Math.abs(i.lastFlickSpeed[t]*i.speedDecelerationRatio[t]),i.distanceOffset[t]=i.lastFlickSpeed[t]*i.speedDecelerationRatio[t]*i.timeDiff,ut[t]+=i.distanceOffset[t])},panAnimLoop:function(){return jt.zoomPan&&(jt.zoomPan.raf=_(i.panAnimLoop),i.now=Mt(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),It(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05)?(ut.x=Math.round(ut.x),ut.y=Math.round(ut.y),It(),void qt("zoomPan")):void 0}};return i},_e=function(t){return t.calculateSwipeSpeed("y"),J=a.currItem.bounds,t.backAnimDestination={},t.backAnimStarted={},Math.abs(t.lastFlickSpeed.x)<=.05&&Math.abs(t.lastFlickSpeed.y)<=.05?(t.speedDecelerationRatioAbs.x=t.speedDecelerationRatioAbs.y=0,t.calculateOverBoundsAnimOffset("x"),t.calculateOverBoundsAnimOffset("y"),!0):(Xt("zoomPan"),t.lastNow=Mt(),void t.panAnimLoop())},De=function(t,e){var i,n,s;if(et||(re=u),"swipe"===t){var l=te.x-ee.x,c=e.lastFlickDist.x<10;l>30&&(c||e.lastFlickOffset.x>20)?n=-1:-30>l&&(c||e.lastFlickOffset.x<-20)&&(n=1)}n&&(0>(u+=n)?(u=r.loop?Ne()-1:0,s=!0):u>=Ne()&&(u=r.loop?0:Ne()-1,s=!0),(!s||r.loop)&&(mt+=n,ht-=n,i=!0));var d,h=ft.x*ht,p=Math.abs(h-ce.x);return i||h>ce.x==e.lastFlickSpeed.x>0?(d=Math.abs(e.lastFlickSpeed.x)>0?p/Math.abs(e.lastFlickSpeed.x):333,d=Math.min(d,400),d=Math.max(d,250)):d=333,re===u&&(i=!1),et=!0,St("mainScrollAnimStart"),Kt("mainScroll",ce.x,h,d,o.easing.cubic.out,_t,function(){Ut(),et=!1,re=-1,(i||re!==u)&&a.updateCurrItem(),St("mainScrollAnimComplete")}),i&&a.updateCurrItem(!0),i},Ee=function(t){return 1/G*t*v},Le=function(){var t=g,e=Wt(),i=Vt();e>g?t=e:g>i&&(t=i);var n,r=at;return ot&&!H&&!rt&&e>g?(a.close(),!0):(ot&&(n=function(t){Tt((1-r)*t+r)}),a.zoomTo(t,0,200,o.easing.cubic.out,n),!0)};xt("Gestures",{publicMethods:{initGestures:function(){var t=function(t,e,i,n,o){S=t+e,M=t+i,T=t+n,A=o?t+o:""};(P=R.pointerEvent)&&R.touch&&(R.touch=!1),P?navigator.pointerEnabled?t("pointer","down","move","up","cancel"):t("MSPointer","Down","Move","Up","Cancel"):R.touch?(t("touch","start","move","end","cancel"),O=!0):t("mouse","down","move","up"),p=M+" "+T+" "+A,f=S,P&&!O&&(O=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),a.likelyTouchDevice=O,m[S]=Te,m[M]=Ae,m[T]=Pe,A&&(m[A]=m[T]),R.touch&&(f+=" mousedown",p+=" mousemove mouseup",m.mousedown=m[S],m.mousemove=m[M],m.mouseup=m[T]),O||(r.allowPanToNext=!1)}}});var $e,Fe,Re,We,Ve,Ne,He=function(e,i,n,s){var l;$e&&clearTimeout($e),We=!0,Re=!0,e.initialLayout?(l=e.initialLayout,e.initialLayout=null):l=r.getThumbBoundsFn&&r.getThumbBoundsFn(u);var d=n?r.hideAnimationDuration:r.showAnimationDuration,h=function(){qt("initialZoom"),n?(a.template.removeAttribute("style"),a.bg.removeAttribute("style")):(Tt(1),i&&(i.style.display="block"),o.addClass(t,"pswp--animated-in"),St("initialZoom"+(n?"OutEnd":"InEnd"))),s&&s(),We=!1};if(!d||!l||void 0===l.x)return St("initialZoom"+(n?"Out":"In")),g=e.initialZoomLevel,Et(ut,e.initialPosition),It(),t.style.opacity=n?0:1,Tt(1),void(d?setTimeout(function(){h()},d):h());!function(){var i=c,s=!a.currItem.src||a.currItem.loadError||r.showHideOpacity;e.miniImg&&(e.miniImg.style.webkitBackfaceVisibility="hidden"),n||(g=l.w/e.w,ut.x=l.x,ut.y=l.y-L,a[s?"template":"bg"].style.opacity=.001,It()),Xt("initialZoom"),n&&!i&&o.removeClass(t,"pswp--animated-in"),s&&(n?o[(i?"remove":"add")+"Class"](t,"pswp--animate_opacity"):setTimeout(function(){o.addClass(t,"pswp--animate_opacity")},30)),$e=setTimeout(function(){if(St("initialZoom"+(n?"Out":"In")),n){var a=l.w/e.w,r={x:ut.x,y:ut.y},c=g,u=at,p=function(e){1===e?(g=a,ut.x=l.x,ut.y=l.y-F):(g=(a-c)*e+c,ut.x=(l.x-r.x)*e+r.x,ut.y=(l.y-F-r.y)*e+r.y),It(),s?t.style.opacity=1-e:Tt(u-e*u)};i?Kt("initialZoom",0,1,d,o.easing.cubic.out,p,h):(p(1),$e=setTimeout(h,d+20))}else g=e.initialZoomLevel,Et(ut,e.initialPosition),It(),Tt(1),s?t.style.opacity=1:Tt(1),$e=setTimeout(h,d+20)},n?25:90)}()},ze={},Be=[],je={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Fe.length}},Ye=function(t,e,i){if(t.src&&!t.loadError){var n=!i;if(n&&(t.vGap||(t.vGap={top:0,bottom:0}),St("parseVerticalMargin",t)),ze.x=e.x,ze.y=e.y-t.vGap.top-t.vGap.bottom,n){var o=ze.x/t.w,a=ze.y/t.h;t.fitRatio=a>o?o:a;var s=r.scaleMode;"orig"===s?i=1:"fit"===s&&(i=t.fitRatio),i>1&&(i=1),t.initialZoomLevel=i,t.bounds||(t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}if(!i)return;return function(t,e,i){var n=t.bounds;n.center.x=Math.round((ze.x-e)/2),n.center.y=Math.round((ze.y-i)/2)+t.vGap.top,n.max.x=e>ze.x?Math.round(ze.x-e):n.center.x,n.max.y=i>ze.y?Math.round(ze.y-i)+t.vGap.top:n.center.y,n.min.x=e>ze.x?0:n.center.x,n.min.y=i>ze.y?t.vGap.top:n.center.y}(t,t.w*i,t.h*i),n&&i===t.initialZoomLevel&&(t.initialPosition=t.bounds.center),t.bounds}return t.w=t.h=0,t.initialZoomLevel=t.fitRatio=1,t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},t.initialPosition=t.bounds.center,t.bounds},qe=function(t,e,i,n,o,r){e.loadError||n&&(e.imageAppended=!0,Ke(e,n,e===a.currItem&&bt),i.appendChild(n),r&&setTimeout(function(){e&&e.loaded&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null)},500))},Xe=function(t){t.loading=!0,t.loaded=!1;var e=t.img=o.createEl("pswp__img","img"),i=function(){t.loading=!1,t.loaded=!0,t.loadComplete?t.loadComplete(t):t.img=null,e.onload=e.onerror=null,e=null};return e.onload=i,e.onerror=function(){t.loadError=!0,i()},e.src=t.src,e},Ue=function(t,e){return t.src&&t.loadError&&t.container?(e&&(t.container.innerHTML=""),t.container.innerHTML=r.errorMsg.replace("%url%",t.src),!0):void 0},Ke=function(t,e,i){if(t.src){e||(e=t.container.lastChild);var n=i?t.w:Math.round(t.w*t.fitRatio),o=i?t.h:Math.round(t.h*t.fitRatio);t.placeholder&&!t.loaded&&(t.placeholder.style.width=n+"px",t.placeholder.style.height=o+"px"),e.style.width=n+"px",e.style.height=o+"px"}},Qe=function(){if(Be.length){for(var t,e=0;e<Be.length;e++)(t=Be[e]).holder.index===t.index&&qe(t.index,t.item,t.baseDiv,t.img,0,t.clearPlaceholder);Be=[]}};xt("Controller",{publicMethods:{lazyLoadItem:function(t){t=wt(t);var e=Ve(t);e&&(!e.loaded&&!e.loading||w)&&(St("gettingData",t,e),e.src&&Xe(e))},initController:function(){o.extend(r,je,!0),a.items=Fe=i,Ve=a.getItemAt,Ne=r.getNumItemsFn,r.loop,Ne()<3&&(r.loop=!1),Ct("beforeChange",function(t){var e,i=r.preload,n=null===t||t>=0,o=Math.min(i[0],Ne()),s=Math.min(i[1],Ne());for(e=1;(n?s:o)>=e;e++)a.lazyLoadItem(u+e);for(e=1;(n?o:s)>=e;e++)a.lazyLoadItem(u-e)}),Ct("initialLayout",function(){a.currItem.initialLayout=r.getThumbBoundsFn&&r.getThumbBoundsFn(u)}),Ct("mainScrollAnimComplete",Qe),Ct("initialZoomInEnd",Qe),Ct("destroy",function(){for(var t,e=0;e<Fe.length;e++)(t=Fe[e]).container&&(t.container=null),t.placeholder&&(t.placeholder=null),t.img&&(t.img=null),t.preloader&&(t.preloader=null),t.loadError&&(t.loaded=t.loadError=!1);Be=null})},getItemAt:function(t){return t>=0&&void 0!==Fe[t]&&Fe[t]},allowProgressiveImg:function(){return r.forceProgressiveLoading||!O||r.mouseUsed||screen.width>1200},setContent:function(t,e){r.loop&&(e=wt(e));var i=a.getItemAt(t.index);i&&(i.container=null);var n,l=a.getItemAt(e);if(l){St("gettingData",e,l),t.index=e,t.item=l;var c=l.container=o.createEl("pswp__zoom-wrap");if(!l.src&&l.html&&(l.html.tagName?c.appendChild(l.html):c.innerHTML=l.html),Ue(l),Ye(l,dt),!l.src||l.loadError||l.loaded)l.src&&!l.loadError&&((n=o.createEl("pswp__img","img")).style.opacity=1,n.src=l.src,Ke(l,n),qe(0,l,c,n));else{if(l.loadComplete=function(i){if(s){if(t&&t.index===e){if(Ue(i,!0))return i.loadComplete=i.img=null,Ye(i,dt),Pt(i),void(t.index===u&&a.updateCurrZoomItem());i.imageAppended?!We&&i.placeholder&&(i.placeholder.style.display="none",i.placeholder=null):R.transform&&(et||We)?Be.push({item:i,baseDiv:c,img:i.img,index:e,holder:t,clearPlaceholder:!0}):qe(0,i,c,i.img,0,!0)}i.loadComplete=null,i.img=null,St("imageLoadComplete",e,i)}},o.features.transform){var d="pswp__img pswp__img--placeholder";d+=l.msrc?"":" pswp__img--placeholder--blank";var h=o.createEl(d,l.msrc?"img":"");l.msrc&&(h.src=l.msrc),Ke(l,h),c.appendChild(h),l.placeholder=h}l.loading||Xe(l),a.allowProgressiveImg()&&(!Re&&R.transform?Be.push({item:l,baseDiv:c,img:l.img,index:e,holder:t}):qe(0,l,c,l.img,0,!0))}Re||e!==u?Pt(l):(tt=c.style,He(l,n||l.img)),t.el.innerHTML="",t.el.appendChild(c)}else t.el.innerHTML=""},cleanSlide:function(t){t.img&&(t.img.onload=t.img.onerror=null),t.loaded=t.loading=t.img=t.imageAppended=!1}}});var Ze,Ge,Je={},ti=function(t,e,i){var n=document.createEvent("CustomEvent"),o={origEvent:t,target:t.target,releasePoint:e,pointerType:i||"touch"};n.initCustomEvent("pswpTap",!0,!0,o),t.target.dispatchEvent(n)};xt("Tap",{publicMethods:{initTap:function(){Ct("firstTouchStart",a.onTapStart),Ct("touchRelease",a.onTapRelease),Ct("destroy",function(){Je={},Ze=null})},onTapStart:function(t){t.length>1&&(clearTimeout(Ze),Ze=null)},onTapRelease:function(t,e){if(e&&!X&&!Y&&!Yt){var i=e;if(Ze&&(clearTimeout(Ze),Ze=null,function(t,e){return Math.abs(t.x-e.x)<25&&Math.abs(t.y-e.y)<25}(i,Je)))return void St("doubleTap",i);if("mouse"===e.type)return void ti(t,e,"mouse");if("BUTTON"===t.target.tagName.toUpperCase()||o.hasClass(t.target,"pswp__single-tap"))return void ti(t,e);Et(Je,i),Ze=setTimeout(function(){ti(t,e),Ze=null},300)}}}}),xt("DesktopZoom",{publicMethods:{initDesktopZoom:function(){$||(O?Ct("mouseUsed",function(){a.setupDesktopZoom()}):a.setupDesktopZoom(!0))},setupDesktopZoom:function(e){Ge={};var i="wheel mousewheel DOMMouseScroll";Ct("bindEvents",function(){o.bind(t,i,a.handleMouseWheel)}),Ct("unbindEvents",function(){Ge&&o.unbind(t,i,a.handleMouseWheel)}),a.mouseZoomedIn=!1;var n,r=function(){a.mouseZoomedIn&&(o.removeClass(t,"pswp--zoomed-in"),a.mouseZoomedIn=!1),1>g?o.addClass(t,"pswp--zoom-allowed"):o.removeClass(t,"pswp--zoom-allowed"),s()},s=function(){n&&(o.removeClass(t,"pswp--dragging"),n=!1)};Ct("resize",r),Ct("afterChange",r),Ct("pointerDown",function(){a.mouseZoomedIn&&(n=!0,o.addClass(t,"pswp--dragging"))}),Ct("pointerUp",s),e||r()},handleMouseWheel:function(t){if(g<=a.currItem.fitRatio)return r.modal&&(!r.closeOnScroll||Yt||j?t.preventDefault():I&&Math.abs(t.deltaY)>2&&(c=!0,a.close())),!0;if(t.stopPropagation(),Ge.x=0,"deltaX"in t)1===t.deltaMode?(Ge.x=18*t.deltaX,Ge.y=18*t.deltaY):(Ge.x=t.deltaX,Ge.y=t.deltaY);else if("wheelDelta"in t)t.wheelDeltaX&&(Ge.x=-.16*t.wheelDeltaX),t.wheelDeltaY?Ge.y=-.16*t.wheelDeltaY:Ge.y=-.16*t.wheelDelta;else{if(!("detail"in t))return;Ge.y=t.detail}Rt(g,!0);var e=ut.x-Ge.x,i=ut.y-Ge.y;(r.modal||e<=J.min.x&&e>=J.max.x&&i<=J.min.y&&i>=J.max.y)&&t.preventDefault(),a.panTo(e,i)},toggleDesktopZoom:function(e){e=e||{x:dt.x/2+pt.x,y:dt.y/2+pt.y};var i=r.getDoubleTapZoom(!0,a.currItem),n=g===i;a.mouseZoomedIn=!n,a.zoomTo(n?a.currItem.initialZoomLevel:i,e,333),o[(n?"remove":"add")+"Class"](t,"pswp--zoomed-in")}}});var ei,ii,ni,oi,ai,ri,si,li,ci,ui,di,hi,pi={history:!0,galleryUID:1},fi=function(){return di.hash.substring(1)},mi=function(){ei&&clearTimeout(ei),ni&&clearTimeout(ni)},gi=function(){var t=fi(),e={};if(t.length<5)return e;var i,n=t.split("&");for(i=0;i<n.length;i++)if(n[i]){var o=n[i].split("=");o.length<2||(e[o[0]]=o[1])}if(r.galleryPIDs){var a=e.pid;for(e.pid=0,i=0;i<Fe.length;i++)if(Fe[i].pid===a){e.pid=i;break}}else e.pid=parseInt(e.pid,10)-1;return e.pid<0&&(e.pid=0),e},vi=function(){if(ni&&clearTimeout(ni),Yt||j)ni=setTimeout(vi,500);else{oi?clearTimeout(ii):oi=!0;var t=u+1,e=Ve(u);e.hasOwnProperty("pid")&&(t=e.pid);var i=si+"&gid="+r.galleryUID+"&pid="+t;li||-1===di.hash.indexOf(i)&&(ui=!0);var n=di.href.split("#")[0]+"#"+i;hi?"#"+i!==window.location.hash&&history[li?"replaceState":"pushState"]("",document.title,n):li?di.replace(n):di.hash=i,li=!0,ii=setTimeout(function(){oi=!1},60)}};xt("History",{publicMethods:{initHistory:function(){if(o.extend(r,pi,!0),r.history){di=window.location,ui=!1,ci=!1,li=!1,si=fi(),hi="pushState"in history,si.indexOf("gid=")>-1&&(si=(si=si.split("&gid=")[0]).split("?gid=")[0]),Ct("afterChange",a.updateURL),Ct("unbindEvents",function(){o.unbind(window,"hashchange",a.onHashChange)});var t=function(){ri=!0,ci||(ui?history.back():si?di.hash=si:hi?history.pushState("",document.title,di.pathname+di.search):di.hash=""),mi()};Ct("unbindEvents",function(){c&&t()}),Ct("destroy",function(){ri||t()}),Ct("firstUpdate",function(){u=gi().pid});var e=si.indexOf("pid=");e>-1&&"&"===(si=si.substring(0,e)).slice(-1)&&(si=si.slice(0,-1)),setTimeout(function(){s&&o.bind(window,"hashchange",a.onHashChange)},40)}},onHashChange:function(){return fi()===si?(ci=!0,void a.close()):void(oi||(ai=!0,a.goTo(gi().pid),ai=!1))},updateURL:function(){mi(),ai||(li?ei=setTimeout(vi,800):vi())}}}),o.extend(a,Qt)}}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";return function(t,e){var i,n,o,a,r,s,l,c,u,d,h,p,f,m,g,v,y,b,x=this,w=!1,k=!0,C=!0,S={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].innerHTML=t.title,!0):(e.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return t.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return t.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},M=function(t){if(v)return!0;t=t||window.event,g.timeToIdle&&g.mouseUsed&&!u&&$();for(var i,n,o=(t.target||t.srcElement).getAttribute("class")||"",a=0;a<V.length;a++)(i=V[a]).onTap&&o.indexOf("pswp__"+i.name)>-1&&(i.onTap(),n=!0);if(n){t.stopPropagation&&t.stopPropagation(),v=!0;var r=e.features.isOldAndroid?600:30;setTimeout(function(){v=!1},r)}},T=function(){return!t.likelyTouchDevice||g.mouseUsed||screen.width>g.fitControlsWidth},A=function(t,i,n){e[(n?"add":"remove")+"Class"](t,"pswp__"+i)},I=function(){var t=1===g.getNumItemsFn();t!==m&&(A(n,"ui--one-slide",t),m=t)},P=function(){A(l,"share-modal--hidden",C)},O=function(){return(C=!C)?(e.removeClass(l,"pswp__share-modal--fade-in"),setTimeout(function(){C&&P()},300)):(P(),setTimeout(function(){C||e.addClass(l,"pswp__share-modal--fade-in")},30)),C||D(),!1},_=function(e){var i=(e=e||window.event).target||e.srcElement;return t.shout("shareLinkClick",e,i),!(!i.href||!i.hasAttribute("download")&&(window.open(i.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),C||O(),1))},D=function(){for(var t,e,i,n,o="",a=0;a<g.shareButtons.length;a++)t=g.shareButtons[a],e=g.getImageURLForShare(t),i=g.getPageURLForShare(t),n=g.getTextForShare(t),o+='<a href="'+t.url.replace("{{url}}",encodeURIComponent(i)).replace("{{image_url}}",encodeURIComponent(e)).replace("{{raw_image_url}}",e).replace("{{text}}",encodeURIComponent(n))+'" target="_blank" class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>",g.parseShareButtonOut&&(o=g.parseShareButtonOut(t,o));l.children[0].innerHTML=o,l.children[0].onclick=_},E=function(t){for(var i=0;i<g.closeElClasses.length;i++)if(e.hasClass(t,"pswp__"+g.closeElClasses[i]))return!0},L=0,$=function(){clearTimeout(b),L=0,u&&x.setIdle(!1)},F=function(t){var e=(t=t||window.event).relatedTarget||t.toElement;e&&"HTML"!==e.nodeName||(clearTimeout(b),b=setTimeout(function(){x.setIdle(!0)},g.timeToIdleOutside))},R=function(t){p!==t&&(A(h,"preloader--active",!t),p=t)},W=function(t){var i=t.vGap;if(T()){var r=g.barsSize;if(g.captionEl&&"auto"===r.bottom)if(a||((a=e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")),n.insertBefore(a,o),e.addClass(n,"pswp__ui--fit")),g.addCaptionHTMLFn(t,a,!0)){var s=a.clientHeight;i.bottom=parseInt(s,10)||44}else i.bottom=r.top;else i.bottom="auto"===r.bottom?0:r.bottom;i.top=r.top}else i.top=i.bottom=0},V=[{name:"caption",option:"captionEl",onInit:function(t){o=t}},{name:"share-modal",option:"shareEl",onInit:function(t){l=t},onTap:function(){O()}},{name:"button--share",option:"shareEl",onInit:function(t){s=t},onTap:function(){O()}},{name:"button--zoom",option:"zoomEl",onTap:t.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(t){r=t}},{name:"button--close",option:"closeEl",onTap:t.close},{name:"button--arrow--left",option:"arrowEl",onTap:t.prev},{name:"button--arrow--right",option:"arrowEl",onTap:t.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){i.isFullscreen()?i.exit():i.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(t){h=t}}];x.init=function(){e.extend(t.options,S,!0),g=t.options,n=e.getChildByClass(t.scrollWrap,"pswp__ui"),d=t.listen,function(){var t;d("onVerticalDrag",function(t){k&&.95>t?x.hideControls():!k&&t>=.95&&x.showControls()}),d("onPinchClose",function(e){k&&.9>e?(x.hideControls(),t=!0):t&&!k&&e>.9&&x.showControls()}),d("zoomGestureEnded",function(){(t=!1)&&!k&&x.showControls()})}(),d("beforeChange",x.update),d("doubleTap",function(e){var i=t.currItem.initialZoomLevel;t.getZoomLevel()!==i?t.zoomTo(i,e,333):t.zoomTo(g.getDoubleTapZoom(!1,t.currItem),e,333)}),d("preventDragEvent",function(t,e,i){var n=t.target||t.srcElement;n&&n.getAttribute("class")&&t.type.indexOf("mouse")>-1&&(n.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(n.tagName))&&(i.prevent=!1)}),d("bindEvents",function(){e.bind(n,"pswpTap click",M),e.bind(t.scrollWrap,"pswpTap",x.onGlobalTap),t.likelyTouchDevice||e.bind(t.scrollWrap,"mouseover",x.onMouseOver)}),d("unbindEvents",function(){C||O(),y&&clearInterval(y),e.unbind(document,"mouseout",F),e.unbind(document,"mousemove",$),e.unbind(n,"pswpTap click",M),e.unbind(t.scrollWrap,"pswpTap",x.onGlobalTap),e.unbind(t.scrollWrap,"mouseover",x.onMouseOver),i&&(e.unbind(document,i.eventK,x.updateFullscreen),i.isFullscreen()&&(g.hideAnimationDuration=0,i.exit()),i=null)}),d("destroy",function(){g.captionEl&&(a&&n.removeChild(a),e.removeClass(o,"pswp__caption--empty")),l&&(l.children[0].onclick=null),e.removeClass(n,"pswp__ui--over-close"),e.addClass(n,"pswp__ui--hidden"),x.setIdle(!1)}),g.showAnimationDuration||e.removeClass(n,"pswp__ui--hidden"),d("initialZoomIn",function(){g.showAnimationDuration&&e.removeClass(n,"pswp__ui--hidden")}),d("initialZoomOut",function(){e.addClass(n,"pswp__ui--hidden")}),d("parseVerticalMargin",W),function(){var t,i,o,a=function(n){if(n)for(var a=n.length,r=0;a>r;r++){t=n[r],i=t.className;for(var s=0;s<V.length;s++)o=V[s],i.indexOf("pswp__"+o.name)>-1&&(g[o.option]?(e.removeClass(t,"pswp__element--disabled"),o.onInit&&o.onInit(t)):e.addClass(t,"pswp__element--disabled"))}};a(n.children);var r=e.getChildByClass(n,"pswp__top-bar");r&&a(r.children)}(),g.shareEl&&s&&l&&(C=!0),I(),g.timeToIdle&&d("mouseUsed",function(){e.bind(document,"mousemove",$),e.bind(document,"mouseout",F),y=setInterval(function(){2==++L&&x.setIdle(!0)},g.timeToIdle/2)}),g.fullscreenEl&&!e.features.isOldAndroid&&(i||(i=x.getFullscreenAPI()),i?(e.bind(document,i.eventK,x.updateFullscreen),x.updateFullscreen(),e.addClass(t.template,"pswp--supports-fs")):e.removeClass(t.template,"pswp--supports-fs")),g.preloaderEl&&(R(!0),d("beforeChange",function(){clearTimeout(f),f=setTimeout(function(){t.currItem&&t.currItem.loading?(!t.allowProgressiveImg()||t.currItem.img&&!t.currItem.img.naturalWidth)&&R(!1):R(!0)},g.loadingIndicatorDelay)}),d("imageLoadComplete",function(e,i){t.currItem===i&&R(!0)}))},x.setIdle=function(t){u=t,A(n,"ui--idle",t)},x.update=function(){k&&t.currItem?(x.updateIndexIndicator(),g.captionEl&&(g.addCaptionHTMLFn(t.currItem,o),A(o,"caption--empty",!t.currItem.title)),w=!0):w=!1,C||O(),I()},x.updateFullscreen=function(n){n&&setTimeout(function(){t.setScrollOffset(0,e.getScrollY())},50),e[(i.isFullscreen()?"add":"remove")+"Class"](t.template,"pswp--fs")},x.updateIndexIndicator=function(){g.counterEl&&(r.innerHTML=t.getCurrentIndex()+1+g.indexIndicatorSep+g.getNumItemsFn())},x.onGlobalTap=function(i){var n=(i=i||window.event).target||i.srcElement;if(!v)if(i.detail&&"mouse"===i.detail.pointerType){if(E(n))return void t.close();e.hasClass(n,"pswp__img")&&(1===t.getZoomLevel()&&t.getZoomLevel()<=t.currItem.fitRatio?g.clickToCloseNonZoomable&&t.close():t.toggleDesktopZoom(i.detail.releasePoint))}else if(g.tapToToggleControls&&(k?x.hideControls():x.showControls()),g.tapToClose&&(e.hasClass(n,"pswp__img")||E(n)))return void t.close()},x.onMouseOver=function(t){var e=(t=t||window.event).target||t.srcElement;A(n,"ui--over-close",E(e))},x.hideControls=function(){e.addClass(n,"pswp__ui--hidden"),k=!1},x.showControls=function(){k=!0,w||x.update(),e.removeClass(n,"pswp__ui--hidden")},x.supportsFullscreen=function(){var t=document;return!!(t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen)},x.getFullscreenAPI=function(){var e,i=document.documentElement,n="fullscreenchange";return i.requestFullscreen?e={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:n}:i.mozRequestFullScreen?e={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+n}:i.webkitRequestFullscreen?e={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+n}:i.msRequestFullscreen&&(e={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),e&&(e.enter=function(){return c=g.closeOnScroll,g.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?t.template[this.enterK]():void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},e.exit=function(){return g.closeOnScroll=c,document[this.exitK]()},e.isFullscreen=function(){return document[this.elementK]}),e}}});var initPhotoSwipeFromDOM=function(t){for(var e=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1;var e=function t(e,i){return e&&(i(e)?e:t(e.parentNode,i))}(t.target||t.srcElement,function(t){return t.tagName&&"FIGURE"===t.tagName.toUpperCase()});if(e){for(var n,o=e.parentNode,a=e.parentNode.childNodes,r=a.length,s=0,l=0;l<r;l++)if(1===a[l].nodeType){if(a[l]===e){n=s;break}s++}return n>=0&&i(n,o),!1}},i=function(t,e,i,n){var o,a,r=document.querySelectorAll(".pswp")[0];if(a=function(t){for(var e,i,n,o,a=t.childNodes,r=a.length,s=[],l=0;l<r;l++)1===(e=a[l]).nodeType&&(n=(i=e.children[0]).getAttribute("data-size").split("x"),o={src:i.getAttribute("href"),w:parseInt(n[0],10),h:parseInt(n[1],10)},e.children.length>1&&(o.title=e.children[1].innerHTML),i.children.length>0&&(o.msrc=i.children[0].getAttribute("src")),o.el=e,s.push(o));return s}(e),o={galleryUID:e.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(t){var e=a[t].el.getElementsByTagName("img")[0],i=window.pageYOffset||document.documentElement.scrollTop,n=e.getBoundingClientRect();return{x:n.left,y:n.top+i,w:n.width}}},n)if(o.galleryPIDs){for(var s=0;s<a.length;s++)if(a[s].pid==t){o.index=s;break}}else o.index=parseInt(t,10)-1;else o.index=parseInt(t,10);isNaN(o.index)||(i&&(o.showAnimationDuration=0),new PhotoSwipe(r,PhotoSwipeUI_Default,a,o).init())},n=document.querySelectorAll(t),o=0,a=n.length;o<a;o++)n[o].setAttribute("data-pswp-uid",o+1),n[o].onclick=e;var r=function(){var t=window.location.hash.substring(1),e={};if(t.length<5)return e;for(var i=t.split("&"),n=0;n<i.length;n++)if(i[n]){var o=i[n].split("=");o.length<2||(e[o[0]]=o[1])}return e.gid&&(e.gid=parseInt(e.gid,10)),e}();r.pid&&r.gid&&i(r.pid,n[r.gid-1],!0,!0)};function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}initPhotoSwipeFromDOM(".mdb-lightbox"),function(t){var e=0,i=function(){function i(n,o){_classCallCheck(this,i),this.defaults={topSpacing:e,zIndex:!1,stopper:"#footer",stickyClass:!1,startScrolling:"top",minWidth:!1},this.$element=n,this.options=this.assignOptions(o),this.$window=t(window),this.stopper=this.options.stopper,this.elementWidth=this.$element.outerWidth(),this.elementHeight=this.$element.outerHeight(!0),this.$placeholder=t('<div class="sticky-placeholder"></div>'),this.scrollTop=0,this.setPushPoint(),this.setStopperPosition(),this.bindEvents()}return _createClass(i,[{key:"assignOptions",value:function(e){return t.extend({},this.defaults,e)}},{key:"bindEvents",value:function(){this.$window.on("resize",this.handleResize.bind(this)),this.$window.on("scroll",this.init.bind(this))}},{key:"hasZIndex",value:function(){return"number"==typeof this.options.zIndex}},{key:"hasStopper",value:function(){return t(this.options.stopper).length||"number"==typeof this.options.stopper}},{key:"isScreenHeightEnough",value:function(){return this.$element.outerHeight()+this.options.topSpacing<this.$window.height()}},{key:"setStopperPosition",value:function(){"string"==typeof this.options.stopper?this.stopPoint=t(this.stopper).offset().top-this.options.topSpacing:"number"==typeof this.options.stopper&&(this.stopPoint=this.options.stopper)}},{key:"setPushPoint",value:function(){"bottom"!==this.options.startScrolling||this.isScreenHeightEnough()?this.$pushPoint=this.$element.offset().top-this.options.topSpacing:this.$pushPoint=this.$element.offset().top+this.$element.outerHeight(!0)-this.$window.height()}},{key:"handleResize",value:function(){this.elementWidth=this.$element.outerWidth(),this.elementHeight=this.$element.outerHeight(!0),this.setPushPoint(),this.setStopperPosition(),this.init()}},{key:"init",value:function(){if(this.options.minWidth&&this.options.minWidth>this.$window.innerWidth())return!1;"bottom"!==this.options.startScrolling||this.isScreenHeightEnough()?this.scrollTop=this.$window.scrollTop():this.scrollTop=this.$window.scrollTop()+this.$window.height(),this.$pushPoint<this.scrollTop?(this.appendPlaceholder(),this.stickyStart()):this.stickyEnd(),this.$window.scrollTop()>this.$pushPoint?this.stop():this.stickyEnd()}},{key:"appendPlaceholder",value:function(){this.$element.after(this.$placeholder),this.$placeholder.css({width:this.elementWidth,height:this.elementHeight})}},{key:"stickyStart",value:function(){this.options.stickyClass&&this.$element.addClass(this.options.stickyClass),this.$element.get(0).style.overflow="scroll";var t=this.$element.get(0).scrollHeight;this.$element.get(0).style.overflow="",this.$element.css({position:"fixed",width:this.elementWidth,height:t}),"bottom"!==this.options.startScrolling||this.isScreenHeightEnough()?this.$element.css({top:this.options.topSpacing}):this.$element.css({bottom:0,top:""}),this.hasZIndex()&&this.$element.css({zIndex:this.options.zIndex})}},{key:"stickyEnd",value:function(){this.options.stickyClass&&this.$element.removeClass(this.options.stickyClass),this.$placeholder.remove(),this.$element.css({position:"static",top:e})}},{key:"stop",value:function(){this.stopPoint<t(this.$element).offset().top+this.$element.outerHeight(!0)&&this.$element.css({position:"absolute",bottom:0,top:""})}}]),i}();t.fn.sticky=function(e){return this.each(function(){var n=t(this);t(window).on("load",function(){new i(n,e).init()})})}}(jQuery),function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var n=e[i];"number"==typeof n&&(n+="px"),t.style[i]=n}return t}function i(t){var e=document.createElement("div");return e.className=t,e}function n(t,e){if(!m)throw new Error("No element matching method supported");return m.call(t,e)}function o(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function a(t,e){return Array.prototype.filter.call(t.children,function(t){return n(t,e)})}function r(t,e){var i=t.element.classList,n=g.state.scrolling(e);i.contains(n)?clearTimeout(v[e]):i.add(n)}function s(t,e){v[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(g.state.scrolling(e))},t.settings.scrollingThreshold)}function l(t,e){r(t,e),s(t,e)}function c(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function u(t){return parseInt(t,10)||0}function d(t){return n(t,"input,[contenteditable]")||n(t,"select,[contenteditable]")||n(t,"textarea,[contenteditable]")||n(t,"button,[contenteditable]")}function h(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function p(t,i){var n={width:i.railXWidth},o=Math.floor(t.scrollTop);i.isRtl?n.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:n.left=t.scrollLeft,i.isScrollbarXUsingBottom?n.bottom=i.scrollbarXBottom-o:n.top=i.scrollbarXTop+o,e(i.scrollbarXRail,n);var a={top:o,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?a.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth:a.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?a.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:a.left=i.scrollbarYLeft+t.scrollLeft,e(i.scrollbarYRail,a),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}function f(t,e){function i(e){m[h]=v+b*(e[l]-y),r(t,p),C(t),e.stopPropagation(),e.preventDefault()}function n(){s(t,p),t[f].classList.remove(g.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",i)}var o=e[0],a=e[1],l=e[2],c=e[3],u=e[4],d=e[5],h=e[6],p=e[7],f=e[8],m=t.element,v=null,y=null,b=null;t.event.bind(t[u],"mousedown",function(e){v=m[h],y=e[l],b=(t[a]-t[o])/(t[c]-t[d]),t.event.bind(t.ownerDocument,"mousemove",i),t.event.once(t.ownerDocument,"mouseup",n),t[f].classList.add(g.state.clicking),e.stopPropagation(),e.preventDefault()})}var m="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),g={main:"ps",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},v={x:null,y:null},y=function(t){this.element=t,this.handlers={}},b={isEmpty:{configurable:!0}};y.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},y.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(n){return!(!e||n===e)||(i.element.removeEventListener(t,n,!1),!1)})},y.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},b.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(y.prototype,b);var x=function(){this.eventElements=[]};x.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new y(t),this.eventElements.push(e)),e},x.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},x.prototype.unbind=function(t,e,i){var n=this.eventElement(t);n.unbind(e,i),n.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(n),1)},x.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},x.prototype.once=function(t,e,i){var n=this.eventElement(t),o=function(t){n.unbind(e,o),i(t)};n.bind(e,o)};var w=function(t,e,i,n,o){var a;if(void 0===n&&(n=!0),void 0===o&&(o=!1),"top"===e)a=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");a=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,i,n,o){var a=i[0],r=i[1],s=i[2],u=i[3],d=i[4],h=i[5];void 0===n&&(n=!0),void 0===o&&(o=!1);var p=t.element;t.reach[u]=null,p[s]<1&&(t.reach[u]="start"),p[s]>t[a]-t[r]-1&&(t.reach[u]="end"),e&&(p.dispatchEvent(c("ps-scroll-"+u)),e<0?p.dispatchEvent(c("ps-scroll-"+d)):e>0&&p.dispatchEvent(c("ps-scroll-"+h)),n&&l(t,u)),t.reach[u]&&(e||o)&&p.dispatchEvent(c("ps-"+u+"-reach-"+t.reach[u]))}(t,i,a,n,o)},k={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},C=function(t){var e=t.element,i=Math.floor(e.scrollTop);t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(a(e,g.element.rail("x")).forEach(function(t){return o(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(a(e,g.element.rail("y")).forEach(function(t){return o(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=h(t,u(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=u((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=h(t,u(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=u(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),p(e,t),t.scrollbarXActive?e.classList.add(g.state.active("x")):(e.classList.remove(g.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=0),t.scrollbarYActive?e.classList.add(g.state.active("y")):(e.classList.remove(g.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)},S={"click-rail":function(t){t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,C(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,C(t),e.stopPropagation()})},"drag-thumb":function(t){f(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),f(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element,i=function(){return n(e,":hover")},o=function(){return n(t.scrollbarX,":focus")||n(t.scrollbarY,":focus")};t.event.bind(t.ownerDocument,"keydown",function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&(i()||o())){var a=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(a){if("IFRAME"===a.tagName)a=a.contentDocument.activeElement;else for(;a.shadowRoot;)a=a.shadowRoot.activeElement;if(d(a))return}var r=0,s=0;switch(n.which){case 37:r=n.metaKey?-t.contentWidth:n.altKey?-t.containerWidth:-30;break;case 38:s=n.metaKey?t.contentHeight:n.altKey?t.containerHeight:30;break;case 39:r=n.metaKey?t.contentWidth:n.altKey?t.containerWidth:30;break;case 40:s=n.metaKey?-t.contentHeight:n.altKey?-t.containerHeight:-30;break;case 32:s=n.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:s=t.containerHeight;break;case 34:s=-t.containerHeight;break;case 36:s=t.contentHeight;break;case 35:s=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==r||t.settings.suppressScrollY&&0!==s||(e.scrollTop-=s,e.scrollLeft+=r,C(t),function(i,n){var o=Math.floor(e.scrollTop);if(0===i){if(!t.scrollbarYActive)return!1;if(0===o&&n>0||o>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var a=e.scrollLeft;if(0===n){if(!t.scrollbarXActive)return!1;if(0===a&&i<0||a>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}(r,s)&&n.preventDefault())}})},wheel:function(e){function i(e,i,n){if(!k.isWebKit&&o.querySelector("select:focus"))return!0;if(!o.contains(e))return!1;for(var a=e;a&&a!==o;){if(a.classList.contains(g.element.consuming))return!0;var r=t(a);if([r.overflow,r.overflowX,r.overflowY].join("").match(/(scroll|auto)/)){var s=a.scrollHeight-a.clientHeight;if(s>0&&!(0===a.scrollTop&&n>0||a.scrollTop===s&&n<0))return!0;var l=a.scrollWidth-a.clientWidth;if(l>0&&!(0===a.scrollLeft&&i<0||a.scrollLeft===l&&i>0))return!0}a=a.parentNode}return!1}function n(t){var n=function(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!=e&&i!=i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}(t),a=n[0],r=n[1];if(!i(t.target,a,r)){var s=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(r?o.scrollTop-=r*e.settings.wheelSpeed:o.scrollTop+=a*e.settings.wheelSpeed,s=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(a?o.scrollLeft+=a*e.settings.wheelSpeed:o.scrollLeft-=r*e.settings.wheelSpeed,s=!0):(o.scrollTop-=r*e.settings.wheelSpeed,o.scrollLeft+=a*e.settings.wheelSpeed),C(e),(s=s||function(t,i){var n=Math.floor(o.scrollTop),a=0===o.scrollTop,r=n+o.offsetHeight===o.scrollHeight,s=0===o.scrollLeft,l=o.scrollLeft+o.offsetWidth===o.scrollWidth;return!(Math.abs(i)>Math.abs(t)?a||r:s||l)||!e.settings.wheelPropagation}(a,r))&&!t.ctrlKey&&(t.stopPropagation(),t.preventDefault())}}var o=e.element;void 0!==window.onwheel?e.event.bind(o,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(o,"mousewheel",n)},touch:function(e){function i(t,i){var n=Math.floor(u.scrollTop),o=u.scrollLeft,a=Math.abs(t),r=Math.abs(i);if(r>a){if(i<0&&n===e.contentHeight-e.containerHeight||i>0&&0===n)return 0===window.scrollY&&i>0&&k.isChrome}else if(a>r&&(t<0&&o===e.contentWidth-e.containerWidth||t>0&&0===o))return!0;return!0}function n(t,i){u.scrollTop-=i,u.scrollLeft-=t,C(e)}function o(t){return t.targetTouches?t.targetTouches[0]:t}function a(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function r(t){if(a(t)){var e=o(t);d.pageX=e.pageX,d.pageY=e.pageY,h=(new Date).getTime(),null!==f&&clearInterval(f)}}function s(e,i,n){if(!u.contains(e))return!1;for(var o=e;o&&o!==u;){if(o.classList.contains(g.element.consuming))return!0;var a=t(o);if([a.overflow,a.overflowX,a.overflowY].join("").match(/(scroll|auto)/)){var r=o.scrollHeight-o.clientHeight;if(r>0&&!(0===o.scrollTop&&n>0||o.scrollTop===r&&n<0))return!0;var s=o.scrollLeft-o.clientWidth;if(s>0&&!(0===o.scrollLeft&&i<0||o.scrollLeft===s&&i>0))return!0}o=o.parentNode}return!1}function l(t){if(a(t)){var e=o(t),r={pageX:e.pageX,pageY:e.pageY},l=r.pageX-d.pageX,c=r.pageY-d.pageY;if(s(t.target,l,c))return;n(l,c),d=r;var u=(new Date).getTime(),f=u-h;f>0&&(p.x=l/f,p.y=c/f,h=u),i(l,c)&&t.preventDefault()}}function c(){e.settings.swipeEasing&&(clearInterval(f),f=setInterval(function(){e.isInitialized?clearInterval(f):p.x||p.y?Math.abs(p.x)<.01&&Math.abs(p.y)<.01?clearInterval(f):(n(30*p.x,30*p.y),p.x*=.8,p.y*=.8):clearInterval(f)},10))}if(k.supportsTouch||k.supportsIePointer){var u=e.element,d={},h=0,p={},f=null;k.supportsTouch?(e.event.bind(u,"touchstart",r),e.event.bind(u,"touchmove",l),e.event.bind(u,"touchend",c)):k.supportsIePointer&&(window.PointerEvent?(e.event.bind(u,"pointerdown",r),e.event.bind(u,"pointermove",l),e.event.bind(u,"pointerup",c)):window.MSPointerEvent&&(e.event.bind(u,"MSPointerDown",r),e.event.bind(u,"MSPointerMove",l),e.event.bind(u,"MSPointerUp",c)))}}},M=function(n,o){var a=this;if(void 0===o&&(o={}),"string"==typeof n&&(n=document.querySelector(n)),!n||!n.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var r in this.element=n,n.classList.add(g.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},o)a.settings[r]=o[r];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return n.classList.add(g.state.focus)},l=function(){return n.classList.remove(g.state.focus)};this.isRtl="rtl"===t(n).direction,this.isNegativeScroll=function(){var t,e=n.scrollLeft;return n.scrollLeft=-1,t=n.scrollLeft<0,n.scrollLeft=e,t}(),this.negativeScrollAdjustment=this.isNegativeScroll?n.scrollWidth-n.clientWidth:0,this.event=new x,this.ownerDocument=n.ownerDocument||document,this.scrollbarXRail=i(g.element.rail("x")),n.appendChild(this.scrollbarXRail),this.scrollbarX=i(g.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",l),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=u(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=u(c.borderLeftWidth)+u(c.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=u(c.marginLeft)+u(c.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(g.element.rail("y")),n.appendChild(this.scrollbarYRail),this.scrollbarY=i(g.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",l),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var d=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(d.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=u(d.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var i=t(e);return u(i.width)+u(i.paddingLeft)+u(i.paddingRight)+u(i.borderLeftWidth)+u(i.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=u(d.borderTopWidth)+u(d.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=u(d.marginTop)+u(d.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:n.scrollLeft<=0?"start":n.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:n.scrollTop<=0?"start":n.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return S[t](a)}),this.lastScrollTop=Math.floor(n.scrollTop),this.lastScrollLeft=n.scrollLeft,this.event.bind(this.element,"scroll",function(t){return a.onScroll(t)}),C(this)};return M.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=u(t(this.scrollbarXRail).marginLeft)+u(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=u(t(this.scrollbarYRail).marginTop)+u(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),C(this),w(this,"top",0,!1,!0),w(this,"left",0,!1,!0),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},M.prototype.onScroll=function(t){this.isAlive&&(C(this),w(this,"top",this.element.scrollTop-this.lastScrollTop),w(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},M.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),o(this.scrollbarX),o(this.scrollbarY),o(this.scrollbarXRail),o(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},M.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},M}),function(t){t(document).on("click",".chip .close",function(){var e=t(this);e.closest(".chips").data("initialized")||e.closest(".chip").remove()});var e=function(){function e(i,n){_classCallCheck(this,e),this.chips=i,this.$document=t(document),this.options=n,this.eventsHandled=!1,this.ulWrapper=t('<ul class="chip-ul z-depth-1" tabindex="0"></ul>'),this.defaultOptions={data:[],dataChip:[],placeholder:"",secondaryPlaceholder:""},this.selectors={chips:".chips",chip:".chip",input:"input",delete:".fas",selectedChip:".selected"},this.keyCodes={enter:13,backspace:8,delete:46,arrowLeft:37,arrowRight:39,comma:188},this.init()}return _createClass(e,[{key:"init",value:function(){var e=this;return this.optionsDataStatement(),this.assignOptions(),this.chips.each(function(i,n){var o=t(n);if(!o.data("initialized")){var a=o.data("options");a.data&&Array.isArray(a.data)||(a.data=[]),o.data("chips",a.data),o.data("index",i),o.data("initialized",!0),o.attr("tabindex",0),o.hasClass(e.selectors.chips)||o.addClass("chips"),e.renderChips(o)}}),this.eventsHandled||(this.handleEvents(),this.eventsHandled=!0),this}},{key:"optionsDataStatement",value:function(){return"data"===this.options?this.chips.data("chips"):"options"!==this.options||this.chips.data("options")}},{key:"assignOptions",value:function(){this.chips.data("options",t.extend({},this.defaultOptions,this.options))}},{key:"handleEvents",value:function(){this.handleSelecorChips(),this.handleBlurInput(),this.handleSelectorChip(),this.handleDocumentKeyDown(),this.handleDocumentFocusIn(),this.handleDocumentFocusOut(),this.handleDocumentKeyDownChipsInput(),this.handleDocumentClickChipsDelete(),this.inputKeyDown(),this.renderedLiClick(),this.dynamicInputChanges()}},{key:"handleSelecorChips",value:function(){var e=this;this.$document.on("click",this.selectors.chips,function(i){return t(i.target).find(e.selectors.input).focus().addClass("active")})}},{key:"handleBlurInput",value:function(){var e=this;this.$document.on("blur",this.selectors.chips,function(i){setTimeout(function(){return e.ulWrapper.removeClass("active").hide()},100),t(i.target).removeClass("active"),t(".chip.selected").removeClass("selected")})}},{key:"handleSelectorChip",value:function(){this.chips.on("click",".chip",function(){t(".chip.selected").not(this).removeClass("selected"),t(this).toggleClass("selected")})}},{key:"handleDocumentKeyDown",value:function(){var t=this;this.chips.on("keydown",function(e){var i=t.$document.find(t.selectors.chip+t.selectors.selectedChip),n=i.closest(t.selectors.chips),o=i.siblings(t.selectors.chip).length;if(i.length){var a=e.which===t.keyCodes.backspace,r=e.which===t.keyCodes.delete,s=e.which===t.keyCodes.arrowLeft,l=e.which===t.keyCodes.arrowRight;a||r?(e.preventDefault(),t.deleteSelectedChip(n,i,o)):s?t.selectLeftChip(n,i):l&&t.selectRightChip(n,i,o)}})}},{key:"handleDocumentFocusIn",value:function(){var e=this,i=this.chips;(i.hasClass("chips-autocomplete")?i.children().children("input"):i.children("input")).on("click",function(i){var n=t(i.target);n.closest(e.selectors.chips).addClass("focus"),t(e.selectors.chip).removeClass("selected"),n.addClass("active")})}},{key:"handleDocumentFocusOut",value:function(){var e=this;this.chips.on("focusout","input",function(i){return t(i.target).closest(e.selectors.chips).removeClass("focus")})}},{key:"handleDocumentKeyDownChipsInput",value:function(){var e=this;this.chips.on("keydown","input",function(i){var n=t(i.target),o=e.chips,a=n.closest(e.selectors.chips),r=a.data("index"),s=a.children(e.selectors.chip).length,l=i.which===e.keyCodes.enter,c=i.which===e.keyCodes.comma,u=i.which===e.keyCodes.arrowLeft,d=i.which===e.keyCodes.backspace;if((l||c)&&!e.ulWrapper.find("li").hasClass("selected"))return i.preventDefault(),e.addChip(r,{tag:n.val()},a),void n.val("");var h=i.keyCode===e.keyCodes.arrowLeft||i.keyCode===e.keyCodes.delete,p=""===n.val();h&&p&&s&&e.selectChip(r,s-1,a),p&&t(e.selectors.input).hasClass("active")?u&&e.selectChip(r,s-1,a):o.find(".chip").removeClass("selected");var f=o.find(".chip-position-wrapper").children(".chip"),m=o.find(".chip-position-wrapper .chip").last().index();!p||!d||f.hasClass("selected")&&o.find(".chip").hasClass("selected")||!o.hasClass("chips")||o.hasClass("chips-initial")||o.hasClass("chips-placeholder")||e.deleteChip(a.data("index"),m,a),p&&d&&!o.find(".chip").hasClass("selected")&&o.hasClass("chips")&&(o.hasClass("chips-initial")||o.hasClass("chips-placeholder"))&&e.deleteChip(a.data("index"),m,a)})}},{key:"handleDocumentClickChipsDelete",value:function(){var e=this;this.chips.on("click",".chip .fas",function(i){var n,o=t(i.target).parent(t(e.chips));o.parents().eq(1).hasClass("chips-autocomplete")?n=o.parents().eq(1):o.parent().hasClass("chips-autocomplete")||o.parents().eq(1).hasClass("chips-autocomplete")?o.parent().hasClass("chips-initial")&&o.parent().hasClass("chips-autocomplete")&&(n=o.parents().eq(0)):n=o.parents().eq(0),e.deleteChip(n.data("index"),o.index(),n),n.find("input").focus()})}},{key:"inputKeyDown",value:function(){var e=this,i=this.ulWrapper,n=this.options.dataChip,o=this.chips,a=o.children(".chip-position-wrapper").children("input");a.on("keyup",function(r){var s=a.val();if(i.empty(),s.length)for(var l in n)n[l].toLowerCase().includes(s.toLowerCase())&&o.children(".chip-position-wrapper").append(i.append(t("<li>".concat(n[l],"</li>"))));r.which===e.keyCodes.enter&&(i.empty(),i.remove()),0===s.length?i.removeClass("active").hide():i.addClass("active").show()})}},{key:"dynamicInputChanges",value:function(){var e=this.options.dataChip;void 0!==e&&this.chips.children(".chip-position-wrapper").children("input").on("change",function(i){var n=t(i.target).val();e.includes(n)||(e.push(n),e.sort())})}},{key:"renderedLiClick",value:function(){var e=this;this.chips.on("click","li",function(i){i.preventDefault();var n=t(i.target),o=n.closest(t(e.selectors.chips)),a=o.data("index");e.addChip(a,{tag:n.text()},o),e.chips.children(".chip-position-wrapper").children("input").val(""),e.ulWrapper.remove()})}},{key:"deleteSelectedChip",value:function(t,e,i){var n=t.data("index"),o=e.index();this.deleteChip(n,o,t);var a=null;o<i-1?a=o:o!==i&&o!==i-1||(a=i-1),a<0&&(a=null),null!==a&&this.selectChip(n,a,t),i||t.find("input").focus()}},{key:"selectLeftChip",value:function(e,i){var n=i.index()-1;n<0||(t(this.selectors.chip).removeClass("selected"),this.selectChip(e.data("index"),n,e))}},{key:"selectRightChip",value:function(e,i,n){var o=i.index()+1;t(this.selectors.chip).removeClass("selected"),o>n?e.find("input").focus():this.selectChip(e.data("index"),o,e)}},{key:"renderChips",value:function(t){var e=this,i="";t.data("chips").forEach(function(t){i+=e.getSingleChipHtml(t)}),t.hasClass("chips-autocomplete")?i+='<span class="chip-position-wrapper position-relative"><input class="input" placeholder=""></span>':i+='<input class="input" placeholder="">',t.html(i),this.setPlaceholder(t)}},{key:"getSingleChipHtml",value:function(t){if(!t.tag)return"";var e='<div class="chip">'.concat(t.tag);return t.image&&(e+=' <img src="'.concat(t.image,'"> ')),e+='<i class="close fas fa-times"></i>',e+="</div>"}},{key:"setPlaceholder",value:function(t){var e=t.data("options");t.data("chips").length&&e.placeholder?t.find("input").prop("placeholder",e.placeholder):!t.data("chips").length&&e.secondaryPlaceholder&&t.find("input").prop("placeholder",e.secondaryPlaceholder)}},{key:"isValid",value:function(t,e){for(var i=t.data("chips"),n=0;n<i.length;n++)if(i[n].tag===e.tag)return!1;return""!==e.tag}},{key:"addChip",value:function(e,i,n){if(this.isValid(n,i)){var o=t(this.getSingleChipHtml(i));n.data("chips").push(i),n.hasClass("chips-autocomplete")&&n.hasClass("chips-initial")&&n.find(".chip").length>0?o.insertAfter(n.find(".chip").last()):o.insertBefore(n.find("input")),n.trigger("chip.add",i),this.setPlaceholder(n)}}},{key:"deleteChip",value:function(t,e,i){var n=i.data("chips")[e];i.find(".chip").eq(e).remove(),i.data("chips").splice(e,1),i.trigger("chip.delete",n),this.setPlaceholder(i)}},{key:"selectChip",value:function(t,e,i){var n=i.find(".chip").eq(e);n&&!1===n.hasClass("selected")&&(n.addClass("selected"),i.trigger("chip.select",i.data("chips")[e]))}},{key:"getChipsElement",value:function(t,e){return e.eq(t)}}]),e}();t.fn.materialChip=function(i){return this.each(function(){new e(t(this),i)})}}(jQuery);var objectFitImages=function(){"use strict";var t="bfred-it:object-fit-images",e=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,i="undefined"==typeof Image?{style:{"object-position":1}}:new Image,n="object-fit"in i.style,o="object-position"in i.style,a="background-size"in i.style,r="string"==typeof i.currentSrc,s=i.getAttribute,l=i.setAttribute,c=!1;function u(t,e,i){var n="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";s.call(t,"src")!==n&&l.call(t,"src",n)}function d(t,e){t.naturalWidth?e(t):setTimeout(d,100,t,e)}function h(i){var o=function(t){for(var i,n=getComputedStyle(t).fontFamily,o={};null!==(i=e.exec(n));)o[i[1]]=i[2];return o}(i),a=i[t];if(o["object-fit"]=o["object-fit"]||"fill",!a.img){if("fill"===o["object-fit"])return;if(!a.skipTest&&n&&!o["object-position"])return}if(!a.img){a.img=new Image(i.width,i.height),a.img.srcset=s.call(i,"data-ofi-srcset")||i.srcset,a.img.src=s.call(i,"data-ofi-src")||i.src,l.call(i,"data-ofi-src",i.src),i.srcset&&l.call(i,"data-ofi-srcset",i.srcset),u(i,i.naturalWidth||i.width,i.naturalHeight||i.height),i.srcset&&(i.srcset="");try{!function(e){var i={get:function(i){return e[t].img[i||"src"]},set:function(i,n){return e[t].img[n||"src"]=i,l.call(e,"data-ofi-"+n,i),h(e),i}};Object.defineProperty(e,"src",i),Object.defineProperty(e,"currentSrc",{get:function(){return i.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return i.get("srcset")},set:function(t){return i.set(t,"srcset")}})}(i)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!r&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(a.img),i.style.backgroundImage='url("'+(a.img.currentSrc||a.img.src).replace(/"/g,'\\"')+'")',i.style.backgroundPosition=o["object-position"]||"center",i.style.backgroundRepeat="no-repeat",i.style.backgroundOrigin="content-box",/scale-down/.test(o["object-fit"])?d(a.img,function(){a.img.naturalWidth>i.width||a.img.naturalHeight>i.height?i.style.backgroundSize="contain":i.style.backgroundSize="auto"}):i.style.backgroundSize=o["object-fit"].replace("none","auto").replace("fill","100% 100%"),d(a.img,function(t){u(i,t.naturalWidth,t.naturalHeight)})}function p(e,i){var n=!c&&!e;if(i=i||{},e=e||"img",o&&!i.skipTest||!a)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var r=0;r<e.length;r++)e[r][t]=e[r][t]||{skipTest:i.skipTest},h(e[r]);n&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&p(t.target,{skipTest:i.skipTest})},!0),c=!0,e="img"),i.watchMQ&&window.addEventListener("resize",p.bind(null,e,{skipTest:i.skipTest}))}return p.supportsObjectFit=n,p.supportsObjectPosition=o,function(){function e(e,i){return e[t]&&e[t].img&&("src"===i||"srcset"===i)?e[t].img:e}o||(HTMLImageElement.prototype.getAttribute=function(t){return s.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,i){return l.call(e(this,t),t,String(i))})}(),p}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=11)}([,,function(t,e,i){"use strict";t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&t.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},,function(t,e,i){"use strict";(function(e){var i;i="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=i}).call(this,i(5))},function(t,e,i){"use strict";var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}t.exports=n},,,,,,function(t,e,i){t.exports=i(12)},function(t,e,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=s(i(2)),a=i(4),r=s(i(13));function s(t){return t&&t.__esModule?t:{default:t}}var l=a.window.jarallax;if(a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=l,this},void 0!==a.jQuery){var c=function(){var t=arguments||[];Array.prototype.unshift.call(t,this);var e=r.default.apply(a.window,t);return"object"!==(void 0===e?"undefined":n(e))?e:this};c.constructor=r.default.constructor;var u=a.jQuery.fn.jarallax;a.jQuery.fn.jarallax=c,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=u,this}}(0,o.default)(function(){(0,r.default)(document.querySelectorAll("[data-jarallax]"))})},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,o=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done)&&(i.push(r.value),!e||i.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=c(i(2)),s=c(i(14)),l=i(4);function c(t){return t&&t.__esModule?t:{default:t}}var u=navigator.userAgent.indexOf("MSIE ")>-1||navigator.userAgent.indexOf("Trident/")>-1||navigator.userAgent.indexOf("Edge/")>-1,d=function(){for(var t="transform WebkitTransform MozTransform".split(" "),e=document.createElement("div"),i=0;i<t.length;i++)if(e&&void 0!==e.style[t[i]])return t[i];return!1}(),h=void 0,p=void 0,f=void 0,m=!1,g=!1;function v(t){h=l.window.innerWidth||document.documentElement.clientWidth,p=l.window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===t?"undefined":a(t))||"load"!==t.type&&"dom-loaded"!==t.type||(m=!0)}v(),l.window.addEventListener("resize",v),l.window.addEventListener("orientationchange",v),l.window.addEventListener("load",v),(0,r.default)(function(){v({type:"dom-loaded"})});var y=[],b=!1;function x(){if(y.length){f=void 0!==l.window.pageYOffset?l.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var t=m||!b||b.width!==h||b.height!==p,e=g||t||!b||b.y!==f;m=!1,g=!1,(t||e)&&(y.forEach(function(i){t&&i.onResize(),e&&i.onScroll()}),b={width:h,height:p,y:f}),(0,s.default)(x)}}var w=!!t.ResizeObserver&&new t.ResizeObserver(function(t){t&&t.length&&(0,s.default)(function(){t.forEach(function(t){t.target&&t.target.jarallax&&(m||t.target.jarallax.onResize(),g=!0)})})}),k=0,C=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=this;o.instanceID=k++,o.$item=e,o.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoPlayOnlyVisible:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var r=o.$item.getAttribute("data-jarallax"),s=JSON.parse(r||"{}");r&&console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");var l=o.$item.dataset||{},c={};if(Object.keys(l).forEach(function(t){var e=t.substr(0,1).toLowerCase()+t.substr(1);e&&void 0!==o.defaults[e]&&(c[e]=l[t])}),o.options=o.extend({},o.defaults,s,c,i),o.pureOptions=o.extend({},o.options),Object.keys(o.options).forEach(function(t){"true"===o.options[t]?o.options[t]=!0:"false"===o.options[t]&&(o.options[t]=!1)}),o.options.speed=Math.min(2,Math.max(-1,parseFloat(o.options.speed))),(o.options.noAndroid||o.options.noIos)&&(console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"),o.options.disableParallax||(o.options.noIos&&o.options.noAndroid?o.options.disableParallax=/iPad|iPhone|iPod|Android/:o.options.noIos?o.options.disableParallax=/iPad|iPhone|iPod/:o.options.noAndroid&&(o.options.disableParallax=/Android/))),"string"==typeof o.options.disableParallax&&(o.options.disableParallax=new RegExp(o.options.disableParallax)),o.options.disableParallax instanceof RegExp){var u=o.options.disableParallax;o.options.disableParallax=function(){return u.test(navigator.userAgent)}}if("function"!=typeof o.options.disableParallax&&(o.options.disableParallax=function(){return!1}),"string"==typeof o.options.disableVideo&&(o.options.disableVideo=new RegExp(o.options.disableVideo)),o.options.disableVideo instanceof RegExp){var d=o.options.disableVideo;o.options.disableVideo=function(){return d.test(navigator.userAgent)}}"function"!=typeof o.options.disableVideo&&(o.options.disableVideo=function(){return!1});var h=o.options.elementInViewport;h&&"object"===(void 0===h?"undefined":a(h))&&void 0!==h.length&&(h=n(h,1)[0]);h instanceof Element||(h=null),o.options.elementInViewport=h,o.image={src:o.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},o.initImg()&&o.canInitParallax()&&o.init()}return o(t,[{key:"css",value:function(t,e){return"string"==typeof e?l.window.getComputedStyle(t).getPropertyValue(e):(e.transform&&d&&(e[d]=e.transform),Object.keys(e).forEach(function(i){t.style[i]=e[i]}),t)}},{key:"extend",value:function(t){var e=arguments;return t=t||{},Object.keys(arguments).forEach(function(i){e[i]&&Object.keys(e[i]).forEach(function(n){t[n]=e[i][n]})}),t}},{key:"getWindowData",value:function(){return{width:h,height:p,y:f}}},{key:"initImg",value:function(){var t=this.options.imgElement;return t&&"string"==typeof t&&(t=this.$item.querySelector(t)),t instanceof Element||(t=null),t&&(this.options.keepImg?this.image.$item=t.cloneNode(!0):(this.image.$item=t,this.image.$itemParent=t.parentNode),this.image.useImgTag=!0),!!this.image.$item||(null===this.image.src&&(this.image.src=this.css(this.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!this.image.src||"none"===this.image.src))}},{key:"canInitParallax",value:function(){return d&&!this.options.disableParallax()}},{key:"init",value:function(){var t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},e={};if(!this.options.keepImg){var i=this.$item.getAttribute("style");if(i&&this.$item.setAttribute("data-jarallax-original-styles",i),this.image.useImgTag){var n=this.image.$item.getAttribute("style");n&&this.image.$item.setAttribute("data-jarallax-original-styles",n)}}if("static"===this.css(this.$item,"position")&&this.css(this.$item,{position:"relative"}),"auto"===this.css(this.$item,"z-index")&&this.css(this.$item,{zIndex:0}),this.image.$container=document.createElement("div"),this.css(this.image.$container,t),this.css(this.image.$container,{"z-index":this.options.zIndex}),u&&this.css(this.image.$container,{opacity:.9999}),this.image.$container.setAttribute("id","jarallax-container-"+this.instanceID),this.$item.appendChild(this.image.$container),this.image.useImgTag?e=this.extend({"object-fit":this.options.imgSize,"object-position":this.options.imgPosition,"font-family":"object-fit: "+this.options.imgSize+"; object-position: "+this.options.imgPosition+";","max-width":"none"},t,e):(this.image.$item=document.createElement("div"),this.image.src&&(e=this.extend({"background-position":this.options.imgPosition,"background-size":this.options.imgSize,"background-repeat":this.options.imgRepeat,"background-image":'url("'+this.image.src+'")'},t,e))),"opacity"!==this.options.type&&"scale"!==this.options.type&&"scale-opacity"!==this.options.type&&1!==this.options.speed||(this.image.position="absolute"),"fixed"===this.image.position)for(var o=0,a=this.$item;null!==a&&a!==document&&0===o;){var r=this.css(a,"-webkit-transform")||this.css(a,"-moz-transform")||this.css(a,"transform");r&&"none"!==r&&(o=1,this.image.position="absolute"),a=a.parentNode}e.position=this.image.position,this.css(this.image.$item,e),this.image.$container.appendChild(this.image.$item),this.onResize(),this.onScroll(!0),this.options.automaticResize&&w&&w.observe(this.$item),this.options.onInit&&this.options.onInit.call(this),"none"!==this.css(this.$item,"background-image")&&this.css(this.$item,{"background-image":"none"}),this.addToParallaxList()}},{key:"addToParallaxList",value:function(){y.push(this),1===y.length&&x()}},{key:"removeFromParallaxList",value:function(){var t=this;y.forEach(function(e,i){e.instanceID===t.instanceID&&y.splice(i,1)})}},{key:"destroy",value:function(){this.removeFromParallaxList();var t=this.$item.getAttribute("data-jarallax-original-styles");if(this.$item.removeAttribute("data-jarallax-original-styles"),t?this.$item.setAttribute("style",t):this.$item.removeAttribute("style"),this.image.useImgTag){var e=this.image.$item.getAttribute("data-jarallax-original-styles");this.image.$item.removeAttribute("data-jarallax-original-styles"),e?this.image.$item.setAttribute("style",t):this.image.$item.removeAttribute("style"),this.image.$itemParent&&this.image.$itemParent.appendChild(this.image.$item)}this.$clipStyles&&this.$clipStyles.parentNode.removeChild(this.$clipStyles),this.image.$container&&this.image.$container.parentNode.removeChild(this.image.$container),this.options.onDestroy&&this.options.onDestroy.call(this),delete this.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var t=this.image.$container.getBoundingClientRect(),e=t.width,i=t.height;if(!this.$clipStyles)this.$clipStyles=document.createElement("style"),this.$clipStyles.setAttribute("type","text/css"),this.$clipStyles.setAttribute("id","jarallax-clip-"+this.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);var n="#jarallax-container-"+this.instanceID+" {\n           clip: rect(0 "+e+"px "+i+"px 0);\n           clip: rect(0, "+e+"px, "+i+"px, 0);\n        }";this.$clipStyles.styleSheet?this.$clipStyles.styleSheet.cssText=n:this.$clipStyles.innerHTML=n}}},{key:"coverImage",value:function(){var t=this.image.$container.getBoundingClientRect(),e=t.height,i=this.options.speed,n="scroll"===this.options.type||"scroll-opacity"===this.options.type,o=0,a=e,r=0;return n&&(o=i<0?i*Math.max(e,p):i*(e+p),i>1?a=Math.abs(o-p):i<0?a=o/i+Math.abs(o):a+=Math.abs(p-e)*(1-i),o/=2),this.parallaxScrollDistance=o,r=n?(p-a)/2:(e-a)/2,this.css(this.image.$item,{height:a+"px",marginTop:r+"px",left:"fixed"===this.image.position?t.left+"px":"0",width:t.width+"px"}),this.options.onCoverImage&&this.options.onCoverImage.call(this),{image:{height:a,marginTop:r},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(t){var e=this.$item.getBoundingClientRect(),i=e.top,n=e.height,o={},a=e;if(this.options.elementInViewport&&(a=this.options.elementInViewport.getBoundingClientRect()),this.isElementInViewport=a.bottom>=0&&a.right>=0&&a.top<=p&&a.left<=h,t||this.isElementInViewport){var r=Math.max(0,i),s=Math.max(0,n+i),l=Math.max(0,-i),c=Math.max(0,i+n-p),u=Math.max(0,n-(i+n-p)),d=Math.max(0,-i+p-n),f=1-2*(p-i)/(p+n),m=1;if(n<p?m=1-(l||c)/n:s<=p?m=s/p:u<=p&&(m=u/p),"opacity"!==this.options.type&&"scale-opacity"!==this.options.type&&"scroll-opacity"!==this.options.type||(o.transform="translate3d(0,0,0)",o.opacity=m),"scale"===this.options.type||"scale-opacity"===this.options.type){var g=1;this.options.speed<0?g-=this.options.speed*m:g+=this.options.speed*(1-m),o.transform="scale("+g+") translate3d(0,0,0)"}if("scroll"===this.options.type||"scroll-opacity"===this.options.type){var v=this.parallaxScrollDistance*f;"absolute"===this.image.position&&(v-=i),o.transform="translate3d(0,"+v+"px,0)"}this.css(this.image.$item,o),this.options.onScroll&&this.options.onScroll.call(this,{section:e,beforeTop:r,beforeTopEnd:s,afterTop:l,beforeBottom:c,beforeBottomEnd:u,afterBottom:d,visiblePercent:m,fromViewportCenter:f})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),t}(),S=function(t){("object"===("undefined"==typeof HTMLElement?"undefined":a(HTMLElement))?t instanceof HTMLElement:t&&"object"===(void 0===t?"undefined":a(t))&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)&&(t=[t]);for(var e=arguments[1],i=Array.prototype.slice.call(arguments,2),n=t.length,o=0,r=void 0;o<n;o++)if("object"===(void 0===e?"undefined":a(e))||void 0===e?t[o].jarallax||(t[o].jarallax=new C(t[o],e)):t[o].jarallax&&(r=t[o].jarallax[e].apply(t[o].jarallax,i)),void 0!==r)return r;return t};S.constructor=C,e.default=S}).call(this,i(5))},function(t,e,i){"use strict";var n=i(4),o=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(t){var e=+new Date,i=Math.max(0,16-(e-a)),n=setTimeout(t,i);return a=e,n},a=+new Date;var r=n.cancelAnimationFrame||n.webkitCancelAnimationFrame||n.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(o=o.bind(n),r=r.bind(n)),(t.exports=o).cancel=r}]),function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=6)}([,,function(t,e,i){"use strict";t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&t.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},,function(t,e,i){"use strict";(function(e){var i;i="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=i}).call(this,i(5))},function(t,e,i){"use strict";var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}t.exports=n},function(t,e,i){t.exports=i(7)},function(t,e,i){"use strict";var n=s(i(8)),o=s(i(4)),a=s(i(2)),r=s(i(10));function s(t){return t&&t.__esModule?t:{default:t}}o.default.VideoWorker=o.default.VideoWorker||n.default,(0,r.default)(),(0,a.default)(function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-video]"))})},function(t,e,i){"use strict";t.exports=i(9)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function a(){this._done=[],this._fail=[]}a.prototype={execute:function(t,e){var i=t.length;for(e=Array.prototype.slice.call(e);i--;)t[i].apply(null,e)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(t){this._done.push(t)},fail:function(t){this._fail.push(t)}};var r=0,s=0,l=0,c=0,u=0,d=new a,h=new a,p=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.url=e,this.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},this.options=this.extend({},this.options_default,i),this.videoID=this.parseURL(e),this.videoID&&(this.ID=r++,this.loadAPI(),this.init())}return o(t,[{key:"extend",value:function(t){var e=arguments;return t=t||{},Object.keys(arguments).forEach(function(i){e[i]&&Object.keys(e[i]).forEach(function(n){t[n]=e[i][n]})}),t}},{key:"parseURL",value:function(t){var e,i,n,o,a=!(!(e=t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==e[1].length)&&e[1],r=function(t){var e=t.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);return!(!e||!e[3])&&e[3]}(t),s=(i=t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),n={},o=0,i.forEach(function(t){var e=t.match(/^(mp4|webm|ogv|ogg)\:(.*)/);e&&e[1]&&e[2]&&(n["ogv"===e[1]?"ogg":e[1]]=e[2],o=1)}),!!o&&n);return a?(this.type="youtube",a):r?(this.type="vimeo",r):!!s&&(this.type="local",s)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(t,e){this.userEventsList=this.userEventsList||[],(this.userEventsList[t]||(this.userEventsList[t]=[])).push(e)}},{key:"off",value:function(t,e){var i=this;this.userEventsList&&this.userEventsList[t]&&(e?this.userEventsList[t].forEach(function(n,o){n===e&&(i.userEventsList[t][o]=!1)}):delete this.userEventsList[t])}},{key:"fire",value:function(t){var e=this,i=[].slice.call(arguments,1);this.userEventsList&&void 0!==this.userEventsList[t]&&this.userEventsList[t].forEach(function(t){t&&t.apply(e,i)})}},{key:"play",value:function(t){var e=this;e.player&&("youtube"===e.type&&e.player.playVideo&&(void 0!==t&&e.player.seekTo(t||0),YT.PlayerState.PLAYING!==e.player.getPlayerState()&&e.player.playVideo()),"vimeo"===e.type&&(void 0!==t&&e.player.setCurrentTime(t),e.player.getPaused().then(function(t){t&&e.player.play()})),"local"===e.type&&(void 0!==t&&(e.player.currentTime=t),e.player.paused&&e.player.play()))}},{key:"pause",value:function(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then(function(e){e||t.player.pause()}),"local"===t.type&&(t.player.paused||t.player.pause()))}},{key:"mute",value:function(){this.player&&("youtube"===this.type&&this.player.mute&&this.player.mute(),"vimeo"===this.type&&this.player.setVolume&&this.player.setVolume(0),"local"===this.type&&(this.$video.muted=!0))}},{key:"unmute",value:function(){this.player&&("youtube"===this.type&&this.player.mute&&this.player.unMute(),"vimeo"===this.type&&this.player.setVolume&&this.player.setVolume(this.options.volume),"local"===this.type&&(this.$video.muted=!1))}},{key:"setVolume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.player&&t&&("youtube"===this.type&&this.player.setVolume&&this.player.setVolume(t),"vimeo"===this.type&&this.player.setVolume&&this.player.setVolume(t),"local"===this.type&&(this.$video.volume=t/100))}},{key:"getVolume",value:function(t){this.player?("youtube"===this.type&&this.player.getVolume&&t(this.player.getVolume()),"vimeo"===this.type&&this.player.getVolume&&this.player.getVolume().then(function(e){t(e)}),"local"===this.type&&t(100*this.$video.volume)):t(!1)}},{key:"getMuted",value:function(t){this.player?("youtube"===this.type&&this.player.isMuted&&t(this.player.isMuted()),"vimeo"===this.type&&this.player.getVolume&&this.player.getVolume().then(function(e){t(!!e)}),"local"===this.type&&t(this.$video.muted)):t(null)}},{key:"getImageURL",value:function(t){var e=this;if(e.videoImage)t(e.videoImage);else{if("youtube"===e.type){var i=["maxresdefault","sddefault","hqdefault","0"],n=0,o=new Image;o.onload=function(){120!==(this.naturalWidth||this.width)||n===i.length-1?(e.videoImage="https://img.youtube.com/vi/"+e.videoID+"/"+i[n]+".jpg",t(e.videoImage)):(n++,this.src="https://img.youtube.com/vi/"+e.videoID+"/"+i[n]+".jpg")},o.src="https://img.youtube.com/vi/"+e.videoID+"/"+i[n]+".jpg"}if("vimeo"===e.type){var a=new XMLHttpRequest;a.open("GET","https://vimeo.com/api/v2/video/"+e.videoID+".json",!0),a.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){var i=JSON.parse(this.responseText);e.videoImage=i[0].thumbnail_large,t(e.videoImage)}},a.send(),a=null}}}},{key:"getIframe",value:function(t){this.getVideo(t)}},{key:"getVideo",value:function(t){var e=this;e.$video?t(e.$video):e.onAPIready(function(){var i=void 0;if(e.$video||((i=document.createElement("div")).style.display="none"),"youtube"===e.type){e.playerOptions={},e.playerOptions.videoId=e.videoID,e.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},e.options.showContols||(e.playerOptions.playerVars.iv_load_policy=3,e.playerOptions.playerVars.modestbranding=1,e.playerOptions.playerVars.controls=0,e.playerOptions.playerVars.showinfo=0,e.playerOptions.playerVars.disablekb=1);var n=void 0,o=void 0;e.playerOptions.events={onReady:function(t){e.options.mute?t.target.mute():e.options.volume&&t.target.setVolume(e.options.volume),e.options.autoplay&&e.play(e.options.startTime),e.fire("ready",t),setInterval(function(){e.getVolume(function(i){e.options.volume!==i&&(e.options.volume=i,e.fire("volumechange",t))})},150)},onStateChange:function(t){e.options.loop&&t.data===YT.PlayerState.ENDED&&e.play(e.options.startTime),n||t.data!==YT.PlayerState.PLAYING||(n=1,e.fire("started",t)),t.data===YT.PlayerState.PLAYING&&e.fire("play",t),t.data===YT.PlayerState.PAUSED&&e.fire("pause",t),t.data===YT.PlayerState.ENDED&&e.fire("ended",t),t.data===YT.PlayerState.PLAYING?o=setInterval(function(){e.fire("timeupdate",t),e.options.endTime&&e.player.getCurrentTime()>=e.options.endTime&&(e.options.loop?e.play(e.options.startTime):e.pause())},150):clearInterval(o)}};var a=!e.$video;if(a){var r=document.createElement("div");r.setAttribute("id",e.playerID),i.appendChild(r),document.body.appendChild(i)}e.player=e.player||new window.YT.Player(e.playerID,e.playerOptions),a&&(e.$video=document.getElementById(e.playerID),e.videoWidth=parseInt(e.$video.getAttribute("width"),10)||1280,e.videoHeight=parseInt(e.$video.getAttribute("height"),10)||720)}if("vimeo"===e.type){e.playerOptions="",e.playerOptions+="player_id="+e.playerID,e.playerOptions+="&autopause=0",e.playerOptions+="&transparent=0",e.options.showContols||(e.playerOptions+="&badge=0&byline=0&portrait=0&title=0"),e.playerOptions+="&autoplay="+(e.options.autoplay?"1":"0"),e.playerOptions+="&loop="+(e.options.loop?1:0),e.$video||(e.$video=document.createElement("iframe"),e.$video.setAttribute("id",e.playerID),e.$video.setAttribute("src","https://player.vimeo.com/video/"+e.videoID+"?"+e.playerOptions),e.$video.setAttribute("frameborder","0"),i.appendChild(e.$video),document.body.appendChild(i)),e.player=e.player||new Vimeo.Player(e.$video),e.player.getVideoWidth().then(function(t){e.videoWidth=t||1280}),e.player.getVideoHeight().then(function(t){e.videoHeight=t||720}),e.options.startTime&&e.options.autoplay&&e.player.setCurrentTime(e.options.startTime),e.options.mute?e.player.setVolume(0):e.options.volume&&e.player.setVolume(e.options.volume);var s=void 0;e.player.on("timeupdate",function(t){s||(e.fire("started",t),s=1),e.fire("timeupdate",t),e.options.endTime&&e.options.endTime&&t.seconds>=e.options.endTime&&(e.options.loop?e.play(e.options.startTime):e.pause())}),e.player.on("play",function(t){e.fire("play",t),e.options.startTime&&0===t.seconds&&e.play(e.options.startTime)}),e.player.on("pause",function(t){e.fire("pause",t)}),e.player.on("ended",function(t){e.fire("ended",t)}),e.player.on("loaded",function(t){e.fire("ready",t)}),e.player.on("volumechange",function(t){e.fire("volumechange",t)})}if("local"===e.type){e.$video||(e.$video=document.createElement("video"),e.options.showContols&&(e.$video.controls=!0),e.options.mute?e.$video.muted=!0:e.$video.volume&&(e.$video.volume=e.options.volume/100),e.options.loop&&(e.$video.loop=!0),e.$video.setAttribute("playsinline",""),e.$video.setAttribute("webkit-playsinline",""),e.$video.setAttribute("id",e.playerID),i.appendChild(e.$video),document.body.appendChild(i),Object.keys(e.videoID).forEach(function(t){var i,n,o,a;i=e.$video,n=e.videoID[t],o="video/"+t,(a=document.createElement("source")).src=n,a.type=o,i.appendChild(a)})),e.player=e.player||e.$video;var l=void 0;e.player.addEventListener("playing",function(t){l||e.fire("started",t),l=1}),e.player.addEventListener("timeupdate",function(t){e.fire("timeupdate",t),e.options.endTime&&e.options.endTime&&this.currentTime>=e.options.endTime&&(e.options.loop?e.play(e.options.startTime):e.pause())}),e.player.addEventListener("play",function(t){e.fire("play",t)}),e.player.addEventListener("pause",function(t){e.fire("pause",t)}),e.player.addEventListener("ended",function(t){e.fire("ended",t)}),e.player.addEventListener("loadedmetadata",function(){e.videoWidth=this.videoWidth||1280,e.videoHeight=this.videoHeight||720,e.fire("ready"),e.options.autoplay&&e.play(e.options.startTime)}),e.player.addEventListener("volumechange",function(t){e.getVolume(function(t){e.options.volume=t}),e.fire("volumechange",t)})}t(e.$video)})}},{key:"init",value:function(){this.playerID="VideoWorker-"+this.ID}},{key:"loadAPI",value:function(){if(!s||!l){var t="";if("youtube"!==this.type||s||(s=1,t="https://www.youtube.com/iframe_api"),"vimeo"!==this.type||l||(l=1,t="https://player.vimeo.com/api/player.js"),t){var e=document.createElement("script"),i=document.getElementsByTagName("head")[0];e.src=t,i.appendChild(e),i=null,e=null}}}},{key:"onAPIready",value:function(t){if("youtube"===this.type&&("undefined"!=typeof YT&&0!==YT.loaded||c?"object"===("undefined"==typeof YT?"undefined":n(YT))&&1===YT.loaded?t():d.done(function(){t()}):(c=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,d.resolve("done"),t()})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||u)"undefined"!=typeof Vimeo?t():h.done(function(){t()});else{u=1;var e=setInterval(function(){"undefined"!=typeof Vimeo&&(clearInterval(e),h.resolve("done"),t())},20)}"local"===this.type&&t()}}]),t}();e.default=p},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.jarallax;if(void 0===t)return;var e=t.constructor,i=e.prototype.init;e.prototype.init=function(){var t=this;i.apply(t),t.video&&!t.options.disableVideo()&&t.video.getVideo(function(e){var i=e.parentNode;t.css(e,{position:t.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),t.$video=e,t.image.$container.appendChild(e),i.parentNode.removeChild(i)})};var a=e.prototype.coverImage;e.prototype.coverImage=function(){var t=a.apply(this),e=!!this.image.$item&&this.image.$item.nodeName;if(t&&this.video&&e&&("IFRAME"===e||"VIDEO"===e)){var i=t.image.height,n=i*this.image.width/this.image.height,o=(t.container.width-n)/2,r=t.image.marginTop;t.container.width>n&&(n=t.container.width,i=n*this.image.height/this.image.width,o=0,r+=(t.image.height-i)/2),"IFRAME"===e&&(i+=400,r-=200),this.css(this.$video,{width:n+"px",marginLeft:o+"px",height:i+"px",marginTop:r+"px"})}return t};var r=e.prototype.initImg;e.prototype.initImg=function(){var t=r.apply(this);return this.options.videoSrc||(this.options.videoSrc=this.$item.getAttribute("data-jarallax-video")||null),this.options.videoSrc?(this.defaultInitImgResult=t,!0):t};var s=e.prototype.canInitParallax;e.prototype.canInitParallax=function(){var t=this,e=s.apply(t);if(!t.options.videoSrc)return e;var i=new n.default(t.options.videoSrc,{autoplay:!0,loop:!0,showContols:!1,startTime:t.options.videoStartTime||0,endTime:t.options.videoEndTime||0,mute:t.options.videoVolume?0:1,volume:t.options.videoVolume||0});if(i.isValid())if(e){if(i.on("ready",function(){if(t.options.videoPlayOnlyVisible){var e=t.onScroll;t.onScroll=function(){e.apply(t),t.isVisible()?i.play():i.pause()}}else i.play()}),i.on("started",function(){t.image.$default_item=t.image.$item,t.image.$item=t.$video,t.image.width=t.video.videoWidth||1280,t.image.height=t.video.videoHeight||720,t.options.imgWidth=t.image.width,t.options.imgHeight=t.image.height,t.coverImage(),t.clipContainer(),t.onScroll(),t.image.$default_item&&(t.image.$default_item.style.display="none")}),t.video=i,!t.defaultInitImgResult)return"local"!==i.type?(i.getImageURL(function(e){t.image.src=e,t.init()}),!1):(t.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",!0)}else t.defaultInitImgResult||i.getImageURL(function(e){var i=t.$item.getAttribute("style");i&&t.$item.setAttribute("data-jarallax-original-styles",i),t.css(t.$item,{"background-image":'url("'+e+'")',"background-position":"center","background-size":"cover"})});return e};var l=e.prototype.destroy;e.prototype.destroy=function(){this.image.$default_item&&(this.image.$item=this.image.$default_item,delete this.image.$default_item),l.apply(this)}};var n=a(i(8)),o=a(i(4));function a(t){return t&&t.__esModule?t:{default:t}}}]),function(t){var e={},i="",n="",o="#ced4da",a="1px solid #4285f4",r="1px solid #ced4da",s="0 1px 0 0 #4285f4",l="",c=-1,u=-45,d=function(){function d(c,u){_classCallCheck(this,d),this.defaults={data:e,dataColor:i,closeColor:n,closeBlurColor:o,inputFocus:a,inputBlur:r,inputFocusShadow:s,inputBlurShadow:l},this.$input=c,this.options=this.assignOptions(u),this.$clearButton=t(".mdb-autocomplete-clear"),this.$autocompleteWrap=t('<ul class="mdb-autocomplete-wrap"></ul>'),this.init()}return _createClass(d,[{key:"init",value:function(){this.setData(),this.inputFocus(),this.inputBlur(),this.inputKeyupData(),this.inputLiClick(),this.clearAutocomplete()}},{key:"assignOptions",value:function(e){return t.extend({},this.defaults,e)}},{key:"setData",value:function(){Object.keys(this.options.data).length&&this.$autocompleteWrap.insertAfter(this.$input)}},{key:"inputFocus",value:function(){var t=this;this.$input.on("focus",function(){t.$input.css("border-bottom",t.options.inputFocus),t.$input.css("box-shadow",t.options.inputFocusShadow)})}},{key:"inputBlur",value:function(){var t=this;this.$input.on("blur",function(){t.$input.css("border-bottom",t.options.inputBlur),t.$input.css("box-shadow",t.options.inputBlurShadow)})}},{key:"inputKeyupData",value:function(){var e=this;this.$input.on("keyup",function(i){if(13===i.which)return e.options.data.includes(e.$input.val())||e.options.data.push(e.$input.val()),e.$autocompleteWrap.find(".selected").trigger("click"),e.$autocompleteWrap.empty(),e.inputBlur(),u=-45,c=-1;var n=e.$input.val();if(e.$autocompleteWrap.empty(),n.length){for(var o in e.options.data)if(-1!==e.options.data[o].toLowerCase().indexOf(n.toLowerCase())){var a=t("<li>".concat(e.options.data[o],"</li>"));e.$autocompleteWrap.append(a)}var r=e.$autocompleteWrap,s=e.$autocompleteWrap.find("li"),l=s.eq(c).outerHeight(),d=s.eq(c-1).outerHeight();if(40===i.which){if(c>s.length-2)return c=-1,s.scrollTop(0),void(u=-45);c++,u+=l,r.scrollTop(u),s.eq(c).addClass("selected")}else 38===i.which&&(c<1?(c=s.length,r.scrollTop(r.prop("scrollHeight")),u=r.prop("scrollHeight")-l):c--,u-=d,r.scrollTop(u),s.eq(c).addClass("selected"));0===n.length?e.$clearButton.css("visibility","hidden"):e.$clearButton.css("visibility","visible"),e.$autocompleteWrap.children().css("color",e.options.dataColor)}else e.$clearButton.css("visibility","hidden")})}},{key:"inputLiClick",value:function(){var e=this;this.$autocompleteWrap.on("click","li",function(i){i.preventDefault(),e.$input.val(t(i.target).text()),e.$autocompleteWrap.empty()})}},{key:"clearAutocomplete",value:function(){var e=this;this.$clearButton.on("click",function(i){c=-1,u=-45,i.preventDefault();var n=t(i.currentTarget);n.parent().find(".mdb-autocomplete").val(""),n.css("visibility","hidden"),e.$autocompleteWrap.empty(),n.parent().find("label").removeClass("active")})}},{key:"changeSVGcolors",value:function(){var e=this;this.$input.hasClass("mdb-autocomplete")&&(this.$input.on("click keyup",function(i){i.preventDefault(),t(i.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill",e.options.closeColor)}),this.$input.on("blur",function(i){i.preventDefault(),t(i.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill",e.options.closeBlurColor)}))}}]),d}();t.fn.mdbAutocomplete=function(e){return this.each(function(){new d(t(this),e)})}}(jQuery),function(t){t("body").on("shown.bs.modal",".modal",function(){t(".modal-backdrop").length||($modal_dialog=t(this).children(".modal-dialog"),$modal_dialog.hasClass("modal-side")&&(t(this).addClass("modal-scrolling"),t("body").addClass("scrollable")),$modal_dialog.hasClass("modal-frame")&&(t(this).addClass("modal-content-clickable"),t("body").addClass("scrollable")))}),t("body").on("hidden.bs.modal",".modal",function(){t("body").removeClass("scrollable")})}(jQuery),function(t){t.fn.mdbTreeview=function(){var e=t(this);if(e.hasClass("treeview")){var i=e.find(".rotate");t.each(i,function(e){t(i[e]).off("click"),t(i[e]).on("click",function(){var e=t(this);e.siblings(".nested").toggleClass("active"),e.toggleClass("down")})})}if(e.hasClass("treeview-animated")){var n=e.find(".treeview-animated-element"),o=e.find(".closed");e.find(".nested").hide(),o.off("click"),o.on("click",function(){var e=t(this),i=e.siblings(".nested"),n=e.children(".fa-angle-right");return e.toggleClass("open"),n.toggleClass("down"),i.hasClass("active")?i.removeClass("active").slideUp():i.addClass("active").slideDown(),!1}),n.off("click"),n.on("click",function(){var e=t(this);e.hasClass("opened")?e.removeClass("opened"):(n.removeClass("opened"),e.addClass("opened"))})}if(e.hasClass("treeview-colorful")){var a=e.find(".treeview-colorful-element"),r=e.find(".treeview-colorful-items-header");e.find(".nested").hide(),r.off("click"),r.on("click",function(){var e=t(this),i=e.siblings(".nested"),n=e.children(".fa-plus-circle"),o=e.children(".fa-minus-circle");e.toggleClass("open"),n.removeClass("fa-plus-circle"),n.addClass("fa-minus-circle"),o.removeClass("fa-minus-circle"),o.addClass("fa-plus-circle"),i.hasClass("active")?i.removeClass("active").slideUp():i.addClass("active").slideDown()}),a.off("click"),a.on("click",function(){var e=t(this);e.hasClass("opened")?a.removeClass("opened"):(a.removeClass("opened"),e.addClass("opened"))})}}}(jQuery),function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},e=function(e){var i="",n=e.parentNode.querySelector(t.CUSTOMFILELABEL);return n&&(i=n.innerHTML),i},i=function(t){if(t.childNodes.length>0)for(var e=[].slice.call(t.childNodes),i=0;i<e.length;i++){var n=e[i];if(3!==n.nodeType)return n}return t},n=function(e){var n=e.bsCustomFileInput.defaultText,o=e.parentNode.querySelector(t.CUSTOMFILELABEL);o&&(i(o).innerHTML=n)},o=!!window.File,a=function(t){if(t.hasAttribute("multiple")&&o)return[].slice.call(t.files).map(function(t){return t.name}).join(", ");if(-1!==t.value.indexOf("fakepath")){var e=t.value.split("\\");return e[e.length-1]}return t.value};function r(){var e=this.parentNode.querySelector(t.CUSTOMFILELABEL);if(e){var o=i(e),r=a(this);r.length?o.innerHTML=r:n(this)}}function s(){for(var e=[].slice.call(this.querySelectorAll(t.INPUT)).filter(function(t){return!!t.bsCustomFileInput}),i=0,o=e.length;i<o;i++)n(e[i])}var l="reset",c="change";return{init:function(i,n){void 0===i&&(i=t.CUSTOMFILE),void 0===n&&(n=t.FORM);for(var o=[].slice.call(document.querySelectorAll(i)),a=[].slice.call(document.querySelectorAll(n)),u=0,d=o.length;u<d;u++){var h=o[u];Object.defineProperty(h,"bsCustomFileInput",{value:{defaultText:e(h)},writable:!0}),r.call(h),h.addEventListener(c,r)}for(var p=0,f=a.length;p<f;p++)a[p].addEventListener(l,s),Object.defineProperty(a[p],"bsCustomFileInput",{value:!0,writable:!0})},destroy:function(){for(var e=[].slice.call(document.querySelectorAll(t.FORM)).filter(function(t){return!!t.bsCustomFileInput}),i=[].slice.call(document.querySelectorAll(t.INPUT)).filter(function(t){return!!t.bsCustomFileInput}),o=0,a=i.length;o<a;o++){var u=i[o];n(u),u.bsCustomFileInput=void 0,u.removeEventListener(c,r)}for(var d=0,h=e.length;d<h;d++)e[d].removeEventListener(l,s),e[d].bsCustomFileInput=void 0}}}),document.addEventListener("DOMContentLoaded",function(){bsCustomFileInput.init()});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/mdbootstrap-pro/js/modules/vendor/bs-custom-file-input.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mdbootstrap-pro/js/modules/vendor/bs-custom-file-input.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
(function (global, factory) {
   true ? module.exports = factory() :
    undefined;
}(this, function () {
  'use strict';

  var Selector = {
    CUSTOMFILE: '.custom-file input[type="file"]',
    CUSTOMFILELABEL: '.custom-file-label',
    FORM: 'form',
    INPUT: 'input'
  };

  var textNodeType = 3;

  var getDefaultText = function getDefaultText(input) {
    var defaultText = '';
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      defaultText = label.innerHTML;
    }

    return defaultText;
  };

  var findFirstChildNode = function findFirstChildNode(element) {
    if (element.childNodes.length > 0) {
      var childNodes = [].slice.call(element.childNodes);

      for (var i = 0; i < childNodes.length; i++) {
        var node = childNodes[i];

        if (node.nodeType !== textNodeType) {
          return node;
        }
      }
    }

    return element;
  };

  var restoreDefaultText = function restoreDefaultText(input) {
    var defaultText = input.bsCustomFileInput.defaultText;
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      element.innerHTML = defaultText;
    }
  };

  var fileApi = !!window.File;
  var FAKE_PATH = 'fakepath';
  var FAKE_PATH_SEPARATOR = '\\';

  var getSelectedFiles = function getSelectedFiles(input) {
    if (input.hasAttribute('multiple') && fileApi) {
      return [].slice.call(input.files).map(function (file) {
        return file.name;
      }).join(', ');
    }

    if (input.value.indexOf(FAKE_PATH) !== -1) {
      var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
      return splittedValue[splittedValue.length - 1];
    }

    return input.value;
  };

  function handleInputChange() {
    var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      var inputValue = getSelectedFiles(this);

      if (inputValue.length) {
        element.innerHTML = inputValue;
      } else {
        restoreDefaultText(this);
      }
    }
  }

  function handleFormReset() {
    var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
      return !!input.bsCustomFileInput;
    });

    for (var i = 0, len = customFileList.length; i < len; i++) {
      restoreDefaultText(customFileList[i]);
    }
  }

  var customProperty = 'bsCustomFileInput';
  var Event = {
    FORMRESET: 'reset',
    INPUTCHANGE: 'change'
  };
  var bsCustomFileInput = {
    init: function init(inputSelector, formSelector) {
      if (inputSelector === void 0) {
        inputSelector = Selector.CUSTOMFILE;
      }

      if (formSelector === void 0) {
        formSelector = Selector.FORM;
      }

      var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
      var formList = [].slice.call(document.querySelectorAll(formSelector));

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        Object.defineProperty(input, customProperty, {
          value: {
            defaultText: getDefaultText(input)
          },
          writable: true
        });
        handleInputChange.call(input);
        input.addEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i = 0, _len = formList.length; _i < _len; _i++) {
        formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

        Object.defineProperty(formList[_i], customProperty, {
          value: true,
          writable: true
        });
      }
    },
    destroy: function destroy() {
      var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
        return !!form.bsCustomFileInput;
      });
      var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input) {
        return !!input.bsCustomFileInput;
      });

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        restoreDefaultText(input);
        input[customProperty] = undefined;
        input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
        formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

        formList[_i2][customProperty] = undefined;
      }
    }
  };

  return bsCustomFileInput;

}));
//# sourceMappingURL=bs-custom-file-input.js.map

document.addEventListener("DOMContentLoaded", function () {

  bsCustomFileInput.init()
});


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });