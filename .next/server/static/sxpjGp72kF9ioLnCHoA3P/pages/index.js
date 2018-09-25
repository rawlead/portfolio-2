module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.jsx



var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "jsx-2169505741" + " " + "footer has-background-white-ter"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "container"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "social-item"
  }, external_react_default.a.createElement("a", {
    href: "!",
    className: "jsx-2169505741" + " " + "social-item__anchor"
  }, external_react_default.a.createElement("i", {
    className: "jsx-2169505741" + " " + "fab fa-facebook fa-lg"
  }))), external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "social-item"
  }, external_react_default.a.createElement("a", {
    href: "!",
    className: "jsx-2169505741" + " " + "social-item__anchor"
  }, external_react_default.a.createElement("i", {
    className: "jsx-2169505741" + " " + "fas fa-envelope fa-lg"
  }))), external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "social-item"
  }, external_react_default.a.createElement("a", {
    href: "!",
    className: "jsx-2169505741" + " " + "social-item__anchor"
  }, external_react_default.a.createElement("i", {
    className: "jsx-2169505741" + " " + "fab fa-linkedin fa-lg"
  }))), external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "social-item"
  }, external_react_default.a.createElement("a", {
    href: "!",
    className: "jsx-2169505741" + " " + "social-item__anchor"
  }, external_react_default.a.createElement("i", {
    className: "jsx-2169505741" + " " + "fab fa-github fa-lg"
  }))))), external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("p", {
    className: "jsx-2169505741" + " " + "has-text-centered"
  }, "This site is made with React, Next and Bulma by", external_react_default.a.createElement("span", {
    className: "jsx-2169505741" + " " + "has-text-black has-text-weight-bold"
  }, " IVAN SHYRAI")), external_react_default.a.createElement("p", {
    className: "jsx-2169505741"
  }, "The source code is available on", external_react_default.a.createElement("a", {
    href: "https://github.com/rawlead/portfolio-2",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2169505741"
  }, "\xA0GitHub")), external_react_default.a.createElement("p", {
    className: "jsx-2169505741"
  }, "2018"))), external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "column"
  }, external_react_default.a.createElement("figure", {
    className: "jsx-2169505741" + " " + "image is-96x96"
  }, external_react_default.a.createElement("a", {
    href: "https://www.youracclaim.com/badges/61136f12-504c-475c-941f-7657fdd8c37e/public_url",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2169505741"
  }, external_react_default.a.createElement("img", {
    src: "../static/oracle.png",
    alt: "oracle-budge",
    className: "jsx-2169505741"
  }))))), external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2169505741" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("a", {
    href: "https://bulma.io",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2169505741"
  }, external_react_default.a.createElement("img", {
    src: "https://bulma.io/images/made-with-bulma--black.png",
    alt: "Made with Bulma",
    width: "128",
    height: "24",
    className: "jsx-2169505741"
  }))))), external_react_default.a.createElement(style_default.a, {
    styleId: "2169505741",
    css: [".image.jsx-2169505741{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;margin:0 auto;}", ".image.jsx-2169505741:hover{-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);}", ".footer.jsx-2169505741{padding-top:8rem;}", ".bulma.jsx-2169505741{height:30px;}", ".columns.jsx-2169505741{margin-top:2rem;}", ".content.jsx-2169505741{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".social-item.jsx-2169505741{display:inline-block;margin:0 1rem;}", ".social-item__anchor.jsx-2169505741{color:#0a0a0a;font-size:2rem;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;}", ".social-item__anchor.jsx-2169505741:hover{color:#aaa;}"]
  }));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Layout.jsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import Head from 'next/head';

 // import { initGA, logPageView } from '../utils/analytics';

var Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return external_react_default.a.createElement(external_react_scroll_parallax_["ParallaxProvider"], null, children, external_react_default.a.createElement(components_Footer, null), external_react_default.a.createElement(style_default.a, {
        styleId: "3054374884",
        css: ["body{background-color:#f2f2f2;}", "*{font-family:'Oswald',sans-serif !important;}", ".button{border-radius:0 !important;}", ".section-title{text-align:center;max-width:185px;margin-left:auto;margin-right:auto;text-transform:uppercase;padding-bottom:1rem;font-weight:bold;}", ".section-title__dark{border-bottom:3px solid #4a4a4a;}", ".section-title__light{border-bottom:3px solid #f5f5f5;color:#f5f5f5;}", ".box-effect:after,.box-effect:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}", ".box-effect:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}", ".box-effect:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}", ".box-effect:hover:after,.box-effect:hover:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}"]
      }));
    }
  }]);

  return Layout;
}(external_react_default.a.Component);

/* harmony default export */ var components_Layout = (Layout_Layout);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(2);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Navbar.jsx




var Navbar_Navbar = function Navbar() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("nav", {
    className: "jsx-513702402" + " " + "navbar bounce-top"
  }, external_react_default.a.createElement("div", {
    className: "jsx-513702402" + " " + "navbar-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    href: "!",
    className: "jsx-513702402" + " " + "has-text-white text-focus-in"
  }, external_react_default.a.createElement("i", {
    className: "jsx-513702402" + " " + "fab fa-facebook fa-lg"
  })))), external_react_default.a.createElement("div", {
    className: "jsx-513702402" + " " + "navbar-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", {
    href: "!",
    className: "jsx-513702402" + " " + "has-text-white text-focus-in "
  }, external_react_default.a.createElement("i", {
    className: "jsx-513702402" + " " + "fas fa-envelope fa-lg"
  })))), external_react_default.a.createElement("div", {
    className: "jsx-513702402" + " " + "navbar-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", {
    href: "!",
    className: "jsx-513702402" + " " + "has-text-white text-focus-in "
  }, external_react_default.a.createElement("i", {
    className: "jsx-513702402" + " " + "fab fa-linkedin fa-lg"
  })))), external_react_default.a.createElement("div", {
    className: "jsx-513702402" + " " + "navbar-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", {
    href: "!",
    className: "jsx-513702402" + " " + "has-text-white text-focus-in "
  }, external_react_default.a.createElement("i", {
    className: "jsx-513702402" + " " + "fab fa-github fa-lg"
  }))))), external_react_default.a.createElement(style_default.a, {
    styleId: "513702402",
    css: [".navbar.jsx-513702402{display:block;left:auto;right:auto;text-align:center;background-color:#0a0a0a;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;min-height:auto;}", ".navbar.jsx-513702402:hover{background:none;}", ".navbar.jsx-513702402:hover a.jsx-513702402{font-size:125%;}", ".navbar-item.jsx-513702402{display:inline-block;}", ".navbar-item.jsx-513702402 a.jsx-513702402{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;}", ".navbar-item.jsx-513702402 a.jsx-513702402:hover{color:#aaa !important;}", ".bounce-top.jsx-513702402{-webkit-animation:bounce-top 1s 1.2s both;-webkit-animation:bounce-top-jsx-513702402 1s 1.2s both;animation:bounce-top-jsx-513702402 1s 1.2s both;}", "@-webkit-keyframes bounce-top{0%.jsx-513702402{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%.jsx-513702402{opacity:1;}40%.jsx-513702402{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%.jsx-513702402{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%.jsx-513702402{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%.jsx-513702402{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%.jsx-513702402,55%.jsx-513702402,75%.jsx-513702402,87%.jsx-513702402{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%.jsx-513702402{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}", "@-webkit-keyframes bounce-top-jsx-513702402{0%{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}", "@keyframes bounce-top-jsx-513702402{0%{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}", ".text-focus-in.jsx-513702402{-webkit-animation:text-focus-in 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;-webkit-animation:text-focus-in-jsx-513702402 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;animation:text-focus-in-jsx-513702402 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;}", "@-webkit-keyframes text-focus-in{0%.jsx-513702402{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%.jsx-513702402{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}", "@-webkit-keyframes text-focus-in-jsx-513702402{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}", "@keyframes text-focus-in-jsx-513702402{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}"]
  }));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./components/Hero.jsx






var Hero_Hero = function Hero() {
  return external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    className: "hero-parallax",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: true,
    tag: "figure"
  }, external_react_default.a.createElement("section", {
    className: "jsx-2954360066" + " " + "hero is-bold is-fullheight"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2954360066" + " " + "hero-head"
  }, external_react_default.a.createElement(components_Navbar, null)), external_react_default.a.createElement("div", {
    className: "jsx-2954360066" + " " + "bird-container bird-container--one"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2954360066" + " " + "bird  bird--one"
  })), external_react_default.a.createElement("div", {
    className: "jsx-2954360066" + " " + "bird-container bird-container--two"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2954360066" + " " + "bird  bird--two"
  })), external_react_default.a.createElement("div", {
    className: "jsx-2954360066" + " " + "hero-content has-text-centered"
  }, external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    className: "custom-class",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: false,
    tag: "figure"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 800
  }, external_react_default.a.createElement("a", {
    style: {
      margin: '0 auto'
    },
    href: "!",
    className: "jsx-2954360066" + " " + "image is-128x128"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2954360066" + " " + "myself"
  })))), external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    className: "custom-class",
    offsetYMax: 20,
    offsetYMin: -20,
    slowerScrollRate: false,
    tag: "figure"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 1000
  }, external_react_default.a.createElement("h1", {
    className: "jsx-2954360066" + " " + "title box-effect is-size-1 has-text-weight-bold has-text-white"
  }, "Ivan Shyrai")), external_react_default.a.createElement(Fade_default.a, {
    delay: 1400
  }, external_react_default.a.createElement("h2", {
    className: "jsx-2954360066" + " " + "subtitle has-text-white"
  }, "Java Software Developer"))))), external_react_default.a.createElement(style_default.a, {
    styleId: "2954360066",
    css: [".hero-parallax.jsx-2954360066{display:block !important;}", ".hero.jsx-2954360066{background:url(\"../static/barcelona-1.jpg\") center bottom;background-size:cover;display:block !important;overflow:hidden;}", ".hero-content.jsx-2954360066{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".myself.jsx-2954360066{background:url('../static/me.jpg');background-size:cover;-webkit-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;will-change:transform;width:128px;height:128px;border-radius:50%;}", ".myself.jsx-2954360066:hover{background:url('../static/me2.jpg');background-size:cover;-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);cursor:pointer;}", ".bird.jsx-2954360066{background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');background-size:auto 100%;width:88px;height:125px;will-change:background-position;-webkit-animation-name:fly-cycle;-webkit-animation-name:fly-cycle-jsx-2954360066;animation-name:fly-cycle-jsx-2954360066;-webkit-animation-timing-function:steps(10);-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}", ".bird--one.jsx-2954360066{-webkit-animation-duration:1s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}", ".bird--two.jsx-2954360066{-webkit-animation-duration:0.9s;-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}", ".bird-container.jsx-2954360066{position:absolute;top:20%;left:-10%;will-change:transform;-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);-webkit-transform:scale(0) translateX(-10vw);-webkit-animation-timing-function:linear;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}", ".bird-container--one.jsx-2954360066{-webkit-animation-name:fly-right-one;-webkit-animation-duration:15s;-webkit-animation-delay:0;-webkit-animation-name:fly-right-one-jsx-2954360066;animation-name:fly-right-one-jsx-2954360066;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;animation-delay:0;}", ".bird-container--two.jsx-2954360066{-webkit-animation-name:fly-right-two;-webkit-animation-duration:17s;-webkit-animation-delay:.5s;-webkit-animation-name:fly-right-two-jsx-2954360066;animation-name:fly-right-two-jsx-2954360066;-webkit-animation-duration:17s;animation-duration:17s;-webkit-animation-delay:.5s;animation-delay:.5s;}", "@-webkit-keyframes fly-cycle{100%.jsx-2954360066{-webkit-background-position:-900px 0;background-position:-900px 0;}}", "@-webkit-keyframes fly-cycle-jsx-2954360066{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}", "@keyframes fly-cycle-jsx-2954360066{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}", "@-webkit-keyframes fly-right-one{0%.jsx-2954360066{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%.jsx-2954360066{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%.jsx-2954360066{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%.jsx-2954360066{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%.jsx-2954360066{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%.jsx-2954360066{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%.jsx-2954360066{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%.jsx-2954360066{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}", "@-webkit-keyframes fly-right-one-jsx-2954360066{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}", "@keyframes fly-right-one-jsx-2954360066{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}", "@-webkit-keyframes fly-right-two{0%.jsx-2954360066{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%.jsx-2954360066{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%.jsx-2954360066{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%.jsx-2954360066{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%.jsx-2954360066{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%.jsx-2954360066{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%.jsx-2954360066{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%.jsx-2954360066{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}", "@-webkit-keyframes fly-right-two-jsx-2954360066{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}", "@keyframes fly-right-two-jsx-2954360066{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}"]
  }));
};

/* harmony default export */ var components_Hero = (Hero_Hero);
// CONCATENATED MODULE: ./components/Info.jsx





var Info_SkillItems = function SkillItems(_ref) {
  var logos = _ref.logos,
      headings = _ref.headings;
  var items = [];

  for (var i = 0; i < logos.length; i += 1) {
    items.push(external_react_default.a.createElement("div", {
      key: i,
      className: "level-item has-text-centered"
    }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
      className: "title",
      style: {
        marginBottom: 0
      }
    }, external_react_default.a.createElement("figure", {
      className: "image is-32x32 ",
      style: {
        margin: 'auto auto 8px auto'
      }
    }, external_react_default.a.createElement("img", {
      src: logos[i],
      alt: "".concat(headings[i], "-logo")
    }))), external_react_default.a.createElement("p", {
      className: "heading has-text-weight-bold has-text-white-ter",
      style: {
        fontSize: '.85rem'
      }
    }, headings[i]))));
  }

  return external_react_default.a.createElement("nav", {
    className: "level is-mobile",
    style: {
      padding: '.6rem 0 0 0',
      borderTop: '1px solid hsl(0, 0%, 30%)',
      borderBottom: '1px solid hsl(0, 0%, 30%)'
    }
  }, items);
};

var Info_Info = function Info() {
  return external_react_default.a.createElement("section", {
    className: "jsx-3807071855" + " " + "section has-background-black"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "main-content has-text-centered"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 200,
    cascade: true
  }, external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    offsetYMax: 50,
    offsetYMin: -50,
    tag: "figure"
  }, external_react_default.a.createElement("div", {
    style: {
      minHeight: '50vh'
    },
    className: "jsx-3807071855"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "is-size-3 section-title section-title__light"
  }, "About"), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column content "
  }, external_react_default.a.createElement("h6", {
    className: "jsx-3807071855" + " " + "has-text-white-ter"
  }, "Oracle Certified Java Developer specialised in front-end and back-end development."), external_react_default.a.createElement("h6", {
    className: "jsx-3807071855" + " " + "has-text-white-ter"
  }, "Available for hire and open to any ideas of cooperation."))))), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "title-row"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "is-size-3 has-text-weight-bold section-title section-title__light"
  }, "Technical Skills")), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns is-marginless"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "column is-size-5 has-text-weight-bold has-text-white-ter"
  }, "HTML / CSS")), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns is-gapless"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column is-marginless"
  }, external_react_default.a.createElement(Info_SkillItems, {
    headings: ['jsx', 'ui design', 'materialize'],
    logos: ['../static/logos/react.svg', '../static/logos/ui.png', '../static/logos/materialize.png']
  })), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column is-marginless"
  }, external_react_default.a.createElement(Info_SkillItems, {
    headings: ['bootstrap', 'bulma', 'sass'],
    logos: ['../static/logos/bootstrap.svg', '../static/logos/bulma.png', '../static/logos/sass.svg']
  }))), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "skills-col-title is-size-5 has-text-white-ter"
  }, "BACK-END"), external_react_default.a.createElement(Info_SkillItems, {
    headings: ['java', 'spring', 'mysql', 'hibernate'],
    logos: ['../static/logos/java.svg', '../static/logos/spring.png', '../static/logos/mysql.svg', '../static/logos/hibernate.png']
  })), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "skills-col-title is-size-5 has-text-white-ter"
  }, "JAVASCRIPT"), external_react_default.a.createElement(Info_SkillItems, {
    headings: ['react', 'next', 'vue', 'jquery'],
    logos: ['../static/logos/react.svg', '../static/logos/next.png', '../static/logos/vuejs.svg', '../static/logos/jquery.svg']
  }))), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns is-marginless"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "column is-size-5 has-text-weight-bold has-text-white-ter"
  }, "OTHER")), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns is-gapless"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column is-marginless"
  }, external_react_default.a.createElement(Info_SkillItems, {
    headings: ['git', 'aws', 'heroku'],
    logos: ['../static/logos/github.png', '../static/logos/amazonwebservices.svg', '../static/logos/heroku.svg']
  })), external_react_default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column is-marginless"
  }, external_react_default.a.createElement(Info_SkillItems, {
    headings: ['intellij', 'photoshop', 'illustrator'],
    logos: ['../static/logos/intellij.svg', '../static/logos/photoshop.svg', '../static/logos/illustrator.svg']
  }))))), external_react_default.a.createElement(style_default.a, {
    styleId: "3807071855",
    css: [".section.jsx-3807071855{display:block !important;}", ".main-content.jsx-3807071855{padding:4rem;position:relative;max-width:1152px;margin:0 auto;}", ".skills-col-title.jsx-3807071855{margin-bottom:.4rem;font-weight:bold;font-size:1rem;}", ".column.jsx-3807071855{margin-top:2rem;}", ".columns.jsx-3807071855{margin-bottom:0;}", ".title-row.jsx-3807071855{margin-top:5rem;}", ".oracle.jsx-3807071855{position:relative;z-index:50;}", "@media screen and (max-width:769px){.section.jsx-3807071855{padding:1rem .25rem;}.section.jsx-3807071855 .column.jsx-3807071855{padding:0;margin:2.5rem 0 0.1rem 0;}}", "@media screen and (max-width:1024px){.main-content.jsx-3807071855{padding:1rem;}}"]
  }));
};

/* harmony default export */ var components_Info = (Info_Info);
// CONCATENATED MODULE: ./components/SlideshowGallery.jsx


function SlideshowGallery_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SlideshowGallery_typeof = function _typeof(obj) { return typeof obj; }; } else { SlideshowGallery_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SlideshowGallery_typeof(obj); }

function SlideshowGallery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SlideshowGallery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SlideshowGallery_createClass(Constructor, protoProps, staticProps) { if (protoProps) SlideshowGallery_defineProperties(Constructor.prototype, protoProps); if (staticProps) SlideshowGallery_defineProperties(Constructor, staticProps); return Constructor; }

function SlideshowGallery_possibleConstructorReturn(self, call) { if (call && (SlideshowGallery_typeof(call) === "object" || typeof call === "function")) { return call; } return SlideshowGallery_assertThisInitialized(self); }

function SlideshowGallery_getPrototypeOf(o) { SlideshowGallery_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SlideshowGallery_getPrototypeOf(o); }

function SlideshowGallery_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SlideshowGallery_setPrototypeOf(subClass, superClass); }

function SlideshowGallery_setPrototypeOf(o, p) { SlideshowGallery_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SlideshowGallery_setPrototypeOf(o, p); }

function SlideshowGallery_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var SlideshowGallery_SlideshowGallery =
/*#__PURE__*/
function (_React$Component) {
  SlideshowGallery_inherits(SlideshowGallery, _React$Component);

  function SlideshowGallery(props) {
    var _this;

    SlideshowGallery_classCallCheck(this, SlideshowGallery);

    _this = SlideshowGallery_possibleConstructorReturn(this, SlideshowGallery_getPrototypeOf(SlideshowGallery).call(this, props));
    _this.state = {
      slideIndex: 0
    };
    _this.plusSlides = _this.plusSlides.bind(SlideshowGallery_assertThisInitialized(SlideshowGallery_assertThisInitialized(_this)));
    _this.currentSlide = _this.currentSlide.bind(SlideshowGallery_assertThisInitialized(SlideshowGallery_assertThisInitialized(_this)));
    _this.createSlides = _this.createSlides.bind(SlideshowGallery_assertThisInitialized(SlideshowGallery_assertThisInitialized(_this)));
    _this.createPreviews = _this.createPreviews.bind(SlideshowGallery_assertThisInitialized(SlideshowGallery_assertThisInitialized(_this)));
    return _this;
  }

  SlideshowGallery_createClass(SlideshowGallery, [{
    key: "plusSlides",
    value: function plusSlides(n) {
      var slideIndex = this.state.slideIndex;

      if (slideIndex + n > 5) {
        this.setState({
          slideIndex: 0
        });
        return;
      }

      if (slideIndex + n < 0) {
        this.setState({
          slideIndex: 5
        });
        return;
      }

      this.setState(function (prevState) {
        return {
          slideIndex: prevState.slideIndex + n
        };
      });
    }
  }, {
    key: "currentSlide",
    value: function currentSlide(n) {
      this.setState({
        slideIndex: n
      });
    }
  }, {
    key: "createSlides",
    value: function createSlides() {
      var slideIndex = this.state.slideIndex;
      var images = this.props.images;
      var slides = [];

      for (var i = 0; i < images.length; i += 1) {
        slides.push(external_react_["createElement"]("div", {
          key: i,
          className: "jsx-1002946049" + " " + "fade ".concat(slideIndex === i ? 'swing-out-top-bck' : 'nonactive')
        }, external_react_["createElement"]("div", {
          className: "jsx-1002946049" + " " + "numbertext has-background-white has-text-weight-bold"
        }, i + 1, "\xA0/ 6"), external_react_["createElement"]("figure", {
          className: "jsx-1002946049" + " " + "image is-3by2"
        }, external_react_["createElement"]("img", {
          src: images[i],
          alt: "slide-".concat(i + 1),
          className: "jsx-1002946049"
        })), external_react_["createElement"](style_default.a, {
          styleId: "1002946049",
          css: [".active.jsx-1002946049{display:block;}", ".nonactive.jsx-1002946049{display:none;}", ".numbertext.jsx-1002946049{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;z-index:30;bottom:-30px;right:-30px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".swing-out-top-bck.jsx-1002946049{-webkit-animation:swing-out-top-bck 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;-webkit-animation:swing-out-top-bck-jsx-1002946049 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;animation:swing-out-top-bck-jsx-1002946049 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;}", "@-webkit-keyframes swing-out-top-bck{0%.jsx-1002946049{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%.jsx-1002946049{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}", "@-webkit-keyframes swing-out-top-bck-jsx-1002946049{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}", "@keyframes swing-out-top-bck-jsx-1002946049{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}"]
        })));
      }

      return slides;
    }
  }, {
    key: "createPreviews",
    value: function createPreviews() {
      var _this2 = this;

      var images = this.props.images;
      var slideIndex = this.state.slideIndex;
      var previews = [];

      var _loop = function _loop(i) {
        previews.push(external_react_["createElement"]("div", {
          key: i,
          className: "jsx-1658636724" + " " + "column"
        }, external_react_["createElement"]("figure", {
          className: "jsx-1658636724" + " " + "image is-3by2"
        }, external_react_["createElement"]("img", {
          src: images[i],
          onClick: function onClick() {
            return _this2.currentSlide(i);
          },
          role: "presentation",
          alt: "preview-".concat(i),
          className: "jsx-1658636724" + " " + ((slideIndex === i ? 'preview-active' : 'preview-inactive') || "")
        })), external_react_["createElement"](style_default.a, {
          styleId: "1658636724",
          css: [".preview-active.jsx-1658636724{cursor:pointer;}", ".preview-inactive.jsx-1658636724{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}", ".preview-inactive.jsx-1658636724:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}", ".column.jsx-1658636724{padding:0.25rem;}"]
        })));
      };

      for (var i = 0; i < images.length; i += 1) {
        _loop(i);
      }

      return previews;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var slides = this.createSlides();
      var previews = this.createPreviews();
      return external_react_["createElement"]("div", {
        className: "jsx-2052273057" + " " + "gallery-container"
      }, external_react_["createElement"]("div", {
        style: {
          marginBottom: '1.5rem'
        },
        className: "jsx-2052273057" + " " + "columns is-mobile"
      }, external_react_["createElement"]("div", {
        style: {
          padding: 0
        },
        className: "jsx-2052273057" + " " + "column"
      }, slides)), external_react_["createElement"](Fade_default.a, {
        delay: 800
      }, external_react_["createElement"]("div", {
        className: "jsx-2052273057" + " " + "columns is-variable is-1 is-mobile"
      }, previews)), external_react_["createElement"]("div", {
        className: "jsx-2052273057" + " " + "buttons-container"
      }, external_react_["createElement"](Fade_default.a, {
        delay: 1200
      }, external_react_["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(-1);
        },
        className: "jsx-2052273057" + " " + "prev button is-black is-outlined"
      }, external_react_["createElement"]("i", {
        className: "jsx-2052273057" + " " + "fas fa-angle-left"
      })), external_react_["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(1);
        },
        className: "jsx-2052273057" + " " + "next button is-black is-outlined"
      }, external_react_["createElement"]("i", {
        className: "jsx-2052273057" + " " + "fas fa-angle-right"
      })))), external_react_["createElement"](style_default.a, {
        styleId: "2052273057",
        css: [".gallery-container.jsx-2052273057{position:relative;margin-top:10px;}", ".fade.jsx-2052273057{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-2052273057;animation-name:fade-jsx-2052273057;-webkit-animation-duration:1.5s;animation-duration:1.5s;}", "@-webkit-keyframes fade{from.jsx-2052273057{opacity:.4;}to.jsx-2052273057{opacity:1;}}", "@-webkit-keyframes fade-jsx-2052273057{from{opacity:.4;}to{opacity:1;}}", "@keyframes fade-jsx-2052273057{from{opacity:.4;}to{opacity:1;}}", ".buttons-container.jsx-2052273057{position:absolute;bottom:-4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".prev.jsx-2052273057,.next.jsx-2052273057{cursor:pointer;color:white;font-weight:bold;opacity:.7;}", ".prev.jsx-2052273057{margin-right:.7rem;}", ".prev.jsx-2052273057:hover,.next.jsx-2052273057:hover{opacity:.8;cursor:pointer;}", "@media screen and (max-width:769px){.numbertext.jsx-2052273057,.prev.jsx-2052273057,.next.jsx-2052273057{display:none;}}"]
      }));
    }
  }]);

  return SlideshowGallery;
}(external_react_["Component"]);

/* harmony default export */ var components_SlideshowGallery = (SlideshowGallery_SlideshowGallery);
// CONCATENATED MODULE: ./components/Projects.jsx


function Projects_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Projects_typeof = function _typeof(obj) { return typeof obj; }; } else { Projects_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Projects_typeof(obj); }

function Projects_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Projects_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Projects_createClass(Constructor, protoProps, staticProps) { if (protoProps) Projects_defineProperties(Constructor.prototype, protoProps); if (staticProps) Projects_defineProperties(Constructor, staticProps); return Constructor; }

function Projects_possibleConstructorReturn(self, call) { if (call && (Projects_typeof(call) === "object" || typeof call === "function")) { return call; } return Projects_assertThisInitialized(self); }

function Projects_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Projects_getPrototypeOf(o) { Projects_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Projects_getPrototypeOf(o); }

function Projects_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Projects_setPrototypeOf(subClass, superClass); }

function Projects_setPrototypeOf(o, p) { Projects_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Projects_setPrototypeOf(o, p); }






var Projects_Projects =
/*#__PURE__*/
function (_React$Component) {
  Projects_inherits(Projects, _React$Component);

  function Projects() {
    Projects_classCallCheck(this, Projects);

    return Projects_possibleConstructorReturn(this, Projects_getPrototypeOf(Projects).apply(this, arguments));
  }

  Projects_createClass(Projects, [{
    key: "openCollapse",
    value: function openCollapse(e) {
      this.funcName = 'openCollapse';
      var content = e.target.previousElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        e.target.value = 'More...';
      } else {
        content.style.maxHeight = "".concat(content.scrollHeight, "px");
        e.target.value = 'Less...';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h1", {
        className: "jsx-233489927" + " " + "is-size-3 sticky-title section-title section-title__dark"
      }, "Projects"), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "container-wrapper"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "container sticky-container has-background-white"
      }, external_react_default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/rawlead/Photo-IS",
        className: "jsx-233489927" + " " + "octocat-container image"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "octocat"
      })), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "columns is-variable is-8"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "column is-three-fifths"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "sticky-item"
      }, external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-233489927" + " " + "is-size-4 has-text-weight-bold"
      }, "Photo IS")), external_react_default.a.createElement(components_SlideshowGallery, {
        images: ['../static/p/portal-1.jpg', '../static/p/portal-2.jpg', '../static/p/portal-3.jpg', '../static/p/portal-4.jpg', '../static/p/portal-5.jpg', '../static/p/portal-6.jpg'],
        color: "#0a0a0a"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "column content"
      }, external_react_default.a.createElement(Fade_default.a, {
        bottom: true,
        delay: 500
      }, external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "About this project"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Photo IS is a web application for sharing photos."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Interface was built using Vue.js and Bootstrap libraries."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Communication with server is done through JSON format and REST API. "), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "content-collapse"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "Functional"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Users are able to:"), external_react_default.a.createElement("ul", {
        className: "jsx-233489927"
      }, external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Create a new account"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Login into existing account"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Upload profile image"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Modify personal data"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Upload photo with a short title, description and selecting a category"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Explore photos uploaded by other users"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Sort photos by category"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Add or remove photos to or from collection of favorites"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Comment photos and explore comments made by other users"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Search for categories or other users")), external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "Technical Sheet"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Technologies I got involved with while working on this project."), external_react_default.a.createElement("ul", {
        className: "jsx-233489927"
      }, external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Java 8"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Spring Framework - Security, MVC, Data"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "MySQL"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Amazon Web Services - EB, S3, RDS"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "oAuth 2.0"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "HTML5 / CSS3 / Javascript ES6"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "UI/UX Architecture"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "UI/UX Animations"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Vue.js"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Bootstrap"))), external_react_default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-233489927" + " " + "button is-outlined has-text-weight-bold is-black"
      })))))), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "container-wrapper wrapper-project2"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "container sticky-container has-background-white"
      }, external_react_default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/rawlead/Photo-IS",
        className: "jsx-233489927" + " " + "octocat-container image"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "octocat"
      })), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "columns is-variable is-8"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "column is-three-fifths"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "sticky-item"
      }, external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-233489927" + " " + "is-size-4 has-text-weight-bold"
      }, "Ebrofy")), external_react_default.a.createElement(components_SlideshowGallery, {
        images: ['../static/p/ebro-1.jpg', '../static/p/ebro-2.jpg', '../static/p/ebro-3.png', '../static/p/ebro-4.png', '../static/p/ebro-5.png', '../static/p/ebro-6.jpg'],
        color: "#2c3e50"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "column content"
      }, external_react_default.a.createElement(Fade_default.a, {
        bottom: true,
        delay: 500
      }, external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "About this project"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Photo IS is a web application for sharing photos."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Interface was built using Vue.js and Bootstrap libraries."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Communication with server is done through JSON format and REST API. "), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "content-collapse"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "Functional"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Users are able to:"), external_react_default.a.createElement("ul", {
        className: "jsx-233489927"
      }, external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Create a new account"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Login into existing account"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Upload profile image"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Modify personal data"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Upload photo with a short title, description and selecting a category"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Explore photos uploaded by other users"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Sort photos by category"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Add or remove photos to or from collection of favorites"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Comment photos and explore comments made by other users"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Search for categories or other users")), external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "Technical Sheet"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Technologies I got involved with while working on this project."), external_react_default.a.createElement("ul", {
        className: "jsx-233489927"
      }, external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Java 8"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Spring Framework - Security, MVC, Data"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "MySQL"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Amazon Web Services - EB, S3, RDS"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "oAuth 2.0"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "HTML5 / CSS3 / Javascript ES6"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "UI/UX Architecture"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "UI/UX Animations"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Vue.js"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Bootstrap"))), external_react_default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-233489927" + " " + "button is-outlined has-text-weight-bold is-black"
      })))))), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "container-wrapper wrapper-project3"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "container sticky-container has-background-white"
      }, external_react_default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/rawlead/Photo-IS",
        className: "jsx-233489927" + " " + "octocat-container image"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "octocat"
      })), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "columns is-variable is-8"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "column is-three-fifths"
      }, external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "sticky-item"
      }, external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-233489927" + " " + "is-size-4 has-text-weight-bold has-text-grey-light"
      }, "Filter App")), external_react_default.a.createElement(components_SlideshowGallery, {
        images: ['../static/p/filterapp-1.jpg', '../static/p/filterapp-2.jpg', '../static/p/filterapp-3.jpg', '../static/p/filterapp-4.jpg', '../static/p/filterapp-5.jpeg', '../static/p/filterapp-6.jpg'],
        color: "hsl(0, 0%, 40%)"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "column content"
      }, external_react_default.a.createElement(Fade_default.a, {
        bottom: true,
        delay: 500
      }, external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "About this project"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Photo IS is a web application for sharing photos."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Interface was built using Vue.js and Bootstrap libraries."), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Communication with server is done through JSON format and REST API. "), external_react_default.a.createElement("p", {
        className: "jsx-233489927"
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), external_react_default.a.createElement("div", {
        className: "jsx-233489927" + " " + "content-collapse"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "Functional"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Users are able to:"), external_react_default.a.createElement("ul", {
        className: "jsx-233489927"
      }, external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Create a new account"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Login into existing account"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Upload profile image"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Modify personal data"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Upload photo with a short title, description and selecting a category"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Explore photos uploaded by other users"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Sort photos by category"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Add or remove photos to or from collection of favorites"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Comment photos and explore comments made by other users"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Search for categories or other users")), external_react_default.a.createElement("h3", {
        className: "jsx-233489927"
      }, "Technical Sheet"), external_react_default.a.createElement("h5", {
        className: "jsx-233489927"
      }, "Technologies I got involved with while working on this project."), external_react_default.a.createElement("ul", {
        className: "jsx-233489927"
      }, external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Java 8"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Spring Framework - Security, MVC, Data"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "MySQL"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Amazon Web Services - EB, S3, RDS"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "oAuth 2.0"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "HTML5 / CSS3 / Javascript ES6"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "UI/UX Architecture"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "UI/UX Animations"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Vue.js"), external_react_default.a.createElement("li", {
        className: "jsx-233489927"
      }, "Bootstrap"))), external_react_default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-233489927" + " " + "button is-outlined has-text-weight-bold is-black"
      })))))), external_react_default.a.createElement(style_default.a, {
        styleId: "233489927",
        css: [".wrapper-project2.jsx-233489927{background:-webkit-gradient(linear,left top,right top,from(#e67e22),to(#e74c3c));background:-webkit-linear-gradient(left,#e67e22,#e74c3c);background:-o-linear-gradient(left,#e67e22,#e74c3c);background:linear-gradient(to right,#e67e22,#e74c3c);}", ".wrapper-project3.jsx-233489927{background:#232526;background:-webkit-linear-gradient(to right,#414345,#232526);background:linear-gradient(to right,#414345,#232526);}", ".sticky-container.jsx-233489927{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;}", ".content-collapse.jsx-233489927{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}", ".sticky-title.jsx-233489927{margin-top:3rem;margin-bottom:-3rem;}", ".container-wrapper.jsx-233489927{padding-top:9rem;margin-bottom:-3rem;}", ".sticky-item.jsx-233489927{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}", ".octocat-container.jsx-233489927{position:absolute;z-index:10;bottom:1rem;right:1rem;}", ".octocat.jsx-233489927{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}", ".octocat.jsx-233489927:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}", "@media screen and (max-width:769px){.sticky-container.jsx-233489927{padding:2rem 1rem 3rem 1rem;}}"]
      }));
    }
  }]);

  return Projects;
}(external_react_default.a.Component);

/* harmony default export */ var components_Projects = (Projects_Projects);
// CONCATENATED MODULE: ./components/Education.jsx




var Education_Education = function Education() {
  return external_react_default.a.createElement("section", {
    className: "jsx-4196396471" + " " + "wrapper"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 200,
    cascade: true
  }, external_react_default.a.createElement("h1", {
    className: "jsx-4196396471" + " " + "is-size-3 section-title section-title__dark"
  }, "Education"), external_react_default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "content"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-4196396471" + " " + "is-uppercase"
  }, "University of Social Sciences"), external_react_default.a.createElement("h5", {
    className: "jsx-4196396471" + " " + "is-uppercase"
  }, external_react_default.a.createElement("i", {
    className: "jsx-4196396471" + " " + "fas fa-map-marker-alt"
  }), "\xA0Warsaw, Poland"), external_react_default.a.createElement("p", {
    className: "jsx-4196396471" + " " + "is-uppercase"
  }, "Bachelor of Computer Science"), external_react_default.a.createElement("p", {
    className: "jsx-4196396471"
  }, "Graduated: June 2018"))), external_react_default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "content"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-4196396471" + " " + "is-uppercase"
  }, "Machine Building College"), external_react_default.a.createElement("h5", {
    className: "jsx-4196396471" + " " + "is-uppercase"
  }, external_react_default.a.createElement("i", {
    className: "jsx-4196396471" + " " + "fas fa-map-marker-alt"
  }), "\xA0Sumy, Ukraine"), external_react_default.a.createElement("p", {
    className: "jsx-4196396471" + " " + "is-uppercase"
  }, "Associate of Chemical Engineering"), external_react_default.a.createElement("p", {
    className: "jsx-4196396471"
  }, "Graduated: June 2014"))))), external_react_default.a.createElement(style_default.a, {
    styleId: "4196396471",
    css: [".section-title.jsx-4196396471{margin-bottom:4rem;}", ".column.jsx-4196396471{margin-bottom:5rem;}", ".columns.jsx-4196396471{max-width:936px;margin-left:auto;margin-right:auto;}", ".wrapper.jsx-4196396471{background-color:#fff;padding-top:2rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border-bottom:1px solid hsl(0,0%,86%);}"]
  }));
};

/* harmony default export */ var components_Education = (Education_Education);
// CONCATENATED MODULE: ./pages/index.jsx







var pages_Index = function Index() {
  return external_react_default.a.createElement(components_Layout, null, external_react_default.a.createElement(components_Hero, null), external_react_default.a.createElement(components_Info, null), external_react_default.a.createElement(components_Education, null), external_react_default.a.createElement(components_Projects, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);