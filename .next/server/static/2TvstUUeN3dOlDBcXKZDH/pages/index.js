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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PRISMIC_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_SEO; });
/* eslint-disable */
var PRISMIC_API_URL = 'https://is-portfolio.prismic.io/api/v2';
var DEFAULT_SEO = {
  title: 'Ivan Shyrai - Java Full Stack Developer',
  description: 'Ivan Shyrai is Java developer specialised in front-end and back-end development.',
  author: 'Ivan Shyrai',
  keywords: 'ivan,shyrai,ivan shyrai,portfolio,java,ui,react,html,css,javascript,software,developer,full stack,front end,back end,spring framework,database,rest,api,sql',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ivanshyrai.us',
    title: 'Ivan Shyrai - Java Full Stack Developer',
    description: 'Ivan Shyrai is Java developer specialised in front-end and back-end development.',
    image: 'https://prismic-io.s3.amazonaws.com/is-portfolio%2F9793f06b-bafd-42d4-a82e-15885e3740e8_default.jpg',
    site_name: 'IvanShyrai.us',
    imageWidth: 1200,
    imageHeight: 1200
  },
  twitter: {
    handle: '@ivanshyrai',
    cardType: 'summary_large_image'
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prismic-reactjs");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
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
var external_react_scroll_parallax_ = __webpack_require__(5);

// EXTERNAL MODULE: external "react-spinners"
var external_react_spinners_ = __webpack_require__(8);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(2);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: ./components/Social.jsx



var Social_Social = function Social(_ref) {
  var linkStyle = _ref.linkStyle;
  return external_react_["createElement"]("div", {
    className: "container"
  }, external_react_["createElement"]("div", {
    className: "jsx-326453351" + " " + "columns"
  }, external_react_["createElement"]("div", {
    className: "jsx-326453351" + " " + "column has-text-centered"
  }, external_react_["createElement"]("div", {
    className: "jsx-326453351" + " " + "social-item"
  }, external_react_["createElement"]("a", {
    href: "https://www.facebook.com/ivanshyrai",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-326453351" + " " + "social-item__anchor"
  }, external_react_["createElement"]("i", {
    className: "jsx-326453351" + " " + "fab fa-facebook fa-lg"
  }))), external_react_["createElement"]("div", {
    className: "jsx-326453351" + " " + "social-item"
  }, external_react_["createElement"]("a", {
    href: "mailto:ivan.shyrai@yahoo.com",
    target: "_top",
    style: linkStyle,
    className: "jsx-326453351" + " " + "social-item__anchor"
  }, external_react_["createElement"]("i", {
    className: "jsx-326453351" + " " + "fas fa-envelope fa-lg"
  }))), external_react_["createElement"]("div", {
    className: "jsx-326453351" + " " + "social-item"
  }, external_react_["createElement"]("a", {
    href: "https://www.linkedin.com/in/ivan-shyrai/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-326453351" + " " + "social-item__anchor"
  }, external_react_["createElement"]("i", {
    className: "jsx-326453351" + " " + "fab fa-linkedin fa-lg"
  }))), external_react_["createElement"]("div", {
    className: "jsx-326453351" + " " + "social-item"
  }, external_react_["createElement"]("a", {
    href: "https://github.com/rawlead",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-326453351" + " " + "social-item__anchor"
  }, external_react_["createElement"]("i", {
    className: "jsx-326453351" + " " + "fab fa-github fa-lg"
  })))), external_react_["createElement"](style_default.a, {
    styleId: "326453351",
    css: [".social-item.jsx-326453351{display:inline-block;margin:0 1rem;}", ".social-item__anchor.jsx-326453351{color:#4a4a4a;font-size:2rem;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;}", ".social-item__anchor.jsx-326453351:hover{-webkit-filter:brightness(200%);filter:brightness(200%);}"]
  })));
};

/* harmony default export */ var components_Social = (Social_Social);
// CONCATENATED MODULE: ./components/Footer.jsx





var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "jsx-1945949292" + " " + "footer has-background-white-ter"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 200
  }, external_react_default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "container"
  }, external_react_default.a.createElement("div", {
    style: {
      marginBottom: '3rem'
    },
    className: "jsx-1945949292" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-1945949292" + " " + "is-size-3 section-title section-title__dark"
  }, "Get in Touch"))), external_react_default.a.createElement(components_Social, {
    linkStyle: {
      color: '#4a4a4a'
    }
  }), external_react_default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "column"
  }, external_react_default.a.createElement("figure", {
    className: "jsx-1945949292" + " " + "image is-96x96"
  }, external_react_default.a.createElement("a", {
    href: "https://www.youracclaim.com/badges/61136f12-504c-475c-941f-7657fdd8c37e/public_url",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, external_react_default.a.createElement("img", {
    src: "../static/oracle.png",
    alt: "oracle-budge",
    className: "jsx-1945949292"
  }))))), external_react_default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("p", {
    className: "jsx-1945949292" + " " + "has-text-centered"
  }, "Designed and Built by", external_react_default.a.createElement("span", {
    className: "jsx-1945949292" + " " + "has-text-weight-bold"
  }, " IVAN SHYRAI")), external_react_default.a.createElement("p", {
    className: "jsx-1945949292"
  }, "Made with", external_react_default.a.createElement("a", {
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, "\xA0React"), ",\xA0", external_react_default.a.createElement("a", {
    href: "https://nextjs.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, "Next.js"), ",\xA0", external_react_default.a.createElement("a", {
    href: "https://bulma.io",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, "Bulma"), "\xA0and", external_react_default.a.createElement("a", {
    href: "https://prismic.io",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, "\xA0Prismic.io")), external_react_default.a.createElement("p", {
    className: "jsx-1945949292"
  }, external_react_default.a.createElement("a", {
    href: "https://github.com/rawlead/portfolio-2",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, "View Source Code")), external_react_default.a.createElement("p", {
    className: "jsx-1945949292"
  }, "2018"))))), external_react_default.a.createElement(style_default.a, {
    styleId: "1945949292",
    css: [".image.jsx-1945949292{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;margin:0 auto;}", ".image.jsx-1945949292:hover{-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);}", ".footer.jsx-1945949292{padding-top:8rem;}", ".bulma.jsx-1945949292{height:30px;}", ".columns.jsx-1945949292{margin-top:2rem;}", ".content.jsx-1945949292{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]
  }));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Navbar.jsx




var Navbar_Navbar = function Navbar() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("section", {
    className: "jsx-2096615491" + " " + "navbar-social bounce-top has-text-centered"
  }, external_react_default.a.createElement(components_Social, {
    linkStyle: {
      color: '#f5f5f5',
      fontSize: '1.4rem'
    }
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "2096615491",
    css: [".navbar-social.jsx-2096615491{position:absolute;z-index:10;top:0;left:0;right:0;display:block;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:.4rem 0;overflow:hidden;}", ".bounce-top.jsx-2096615491{-webkit-animation:bounce-top 1s 1.2s both;-webkit-animation:bounce-top-jsx-2096615491 1s 1.2s both;animation:bounce-top-jsx-2096615491 1s 1.2s both;}", "@-webkit-keyframes bounce-top{0%.jsx-2096615491{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%.jsx-2096615491{opacity:1;}40%.jsx-2096615491{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%.jsx-2096615491{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%.jsx-2096615491{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%.jsx-2096615491{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%.jsx-2096615491,55%.jsx-2096615491,75%.jsx-2096615491,87%.jsx-2096615491{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%.jsx-2096615491{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}", "@-webkit-keyframes bounce-top-jsx-2096615491{0%{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}", "@keyframes bounce-top-jsx-2096615491{0%{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}", ".text-focus-in.jsx-2096615491{-webkit-animation:text-focus-in 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;-webkit-animation:text-focus-in-jsx-2096615491 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;animation:text-focus-in-jsx-2096615491 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;}", "@-webkit-keyframes text-focus-in{0%.jsx-2096615491{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%.jsx-2096615491{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}", "@-webkit-keyframes text-focus-in-jsx-2096615491{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}", "@keyframes text-focus-in-jsx-2096615491{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}"]
  }));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
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







var Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          isLoading: false
        });
      }, 1200);
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var children = this.props.children;
      return external_react_default.a.createElement(external_react_scroll_parallax_["ParallaxProvider"], null, isLoading ? external_react_default.a.createElement("div", {
        className: "jsx-250590412" + " " + "preloader"
      }, external_react_default.a.createElement(external_react_spinners_["ScaleLoader"], {
        className: "preloader-spinner",
        sizeUnit: "px",
        size: 120,
        color: "#f2f2f2"
      })) : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_Navbar, null), children, external_react_default.a.createElement(components_Footer, null)), external_react_default.a.createElement(style_default.a, {
        styleId: "250590412",
        css: ["body{background-color:#f2f2f2;}", ".preloader{position:fixed;background-color:#0a0a0a;z-index:999;top:0;bottom:0;left:0;right:0;}", ".preloader-spinner{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", "*{font-family:'Oswald',sans-serif !important;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", ".button{border-radius:5px !important;}", ".section-title{text-align:center;max-width:185px;margin-left:auto;margin-right:auto;text-transform:uppercase;padding-bottom:1rem;font-weight:bold;}", ".section-title__dark{border-bottom:3px solid #4a4a4a;border-radius:5px;}", ".section-title__light{border-bottom:3px solid hsl(0,0%,86%);border-radius:5px;color:hsl(0,0%,86%);}", ".box-effect:after,.box-effect:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}", ".box-effect:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}", ".box-effect:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}", ".box-effect:hover:after,.box-effect:hover:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}"]
      }));
    }
  }]);

  return Layout;
}(external_react_default.a.Component);

/* harmony default export */ var components_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./components/Hero.jsx





var Hero_Hero = function Hero() {
  return external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    className: "hero-parallax",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: true,
    tag: "figure"
  }, external_react_default.a.createElement("section", {
    className: "jsx-370691658" + " " + "hero is-bold is-fullheight"
  }, external_react_default.a.createElement("div", {
    className: "jsx-370691658" + " " + "hero-cover"
  }), external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    className: "hero-parallax",
    offsetYMax: 10,
    offsetYMin: -10,
    tag: "figure"
  }, external_react_default.a.createElement("div", {
    className: "jsx-370691658" + " " + "hero-inner"
  }, external_react_default.a.createElement("div", {
    className: "jsx-370691658" + " " + "bird-container bird-container--one"
  }, external_react_default.a.createElement("div", {
    className: "jsx-370691658" + " " + "bird  bird--one"
  })), external_react_default.a.createElement("div", {
    className: "jsx-370691658" + " " + "bird-container bird-container--two"
  }, external_react_default.a.createElement("div", {
    className: "jsx-370691658" + " " + "bird  bird--two"
  })), external_react_default.a.createElement("div", {
    className: "jsx-370691658" + " " + "hero-content has-text-centered"
  }, external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    className: "custom-class",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: false,
    tag: "figure"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 600
  }, external_react_default.a.createElement("a", {
    style: {
      margin: '0 auto'
    },
    href: "#info",
    className: "jsx-370691658" + " " + "image is-128x128"
  }, external_react_default.a.createElement("div", {
    className: "jsx-370691658" + " " + "myself"
  })))), external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    className: "custom-class",
    offsetYMax: 20,
    offsetYMin: -20,
    slowerScrollRate: false,
    tag: "figure"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 800
  }, external_react_default.a.createElement("h1", {
    className: "jsx-370691658" + " " + "title box-effect is-size-1 has-text-weight-bold has-text-grey-lighter"
  }, "Ivan Shyrai")), external_react_default.a.createElement(Fade_default.a, {
    delay: 1000
  }, external_react_default.a.createElement("h2", {
    className: "jsx-370691658" + " " + "subtitle has-text-grey-lighter"
  }, "Java Full Stack Developer"))))))), external_react_default.a.createElement(style_default.a, {
    styleId: "370691658",
    css: [".hero-parallax.jsx-370691658{display:inline-block !important;}", ".hero.jsx-370691658{background:url(\"../static/barcelona-1.jpg\") center bottom;background-size:cover;overflow:hidden;background-repeat:no-repeat;}", ".hero-cover.jsx-370691658{position:absolute;top:0;left:0;right:0;bottom:0;background:#0a0a0a;opacity:.75;}", ".hero-inner.jsx-370691658{background:url(\"../static/barcelona-2.jpg\") center bottom;background-repeat:no-repeat;margin-left:auto;margin-right:auto;margin-top:52px;background-size:cover;height:100vh;width:92vw;border-left:2px solid #0A0A0A;border-top:2px solid #0A0A0A;border-right:2px solid #0A0A0A;overflow:hidden;border-radius:5px;}", ".hero-content.jsx-370691658{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".myself.jsx-370691658{background:url('../static/me.jpg');background-size:cover;-webkit-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;will-change:transform;width:128px;height:128px;border-radius:5px;}", ".myself.jsx-370691658:hover{background:url('../static/me2.jpg');background-size:cover;-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);cursor:pointer;}", ".bird.jsx-370691658{background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');background-size:auto 100%;width:88px;height:125px;z-index:-1;will-change:background-position;-webkit-animation-name:fly-cycle;-webkit-animation-name:fly-cycle-jsx-370691658;animation-name:fly-cycle-jsx-370691658;-webkit-animation-timing-function:steps(10);-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}", ".bird--one.jsx-370691658{-webkit-animation-duration:1s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}", ".bird--two.jsx-370691658{-webkit-animation-duration:0.9s;-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}", ".bird-container.jsx-370691658{position:absolute;top:20%;left:-10%;will-change:transform;-webkit-transform:scale(0) translateX(-10vw);-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);-webkit-animation-timing-function:linear;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}", ".bird-container--one.jsx-370691658{-webkit-animation-name:fly-right-one;-webkit-animation-name:fly-right-one-jsx-370691658;animation-name:fly-right-one-jsx-370691658;-webkit-animation-duration:15s;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;-webkit-animation-delay:0;animation-delay:0;}", ".bird-container--two.jsx-370691658{-webkit-animation-name:fly-right-two;-webkit-animation-name:fly-right-two-jsx-370691658;animation-name:fly-right-two-jsx-370691658;-webkit-animation-duration:17s;-webkit-animation-duration:17s;animation-duration:17s;-webkit-animation-delay:.5s;-webkit-animation-delay:.5s;animation-delay:.5s;}", "@media screen and (max-width:768px){.hero-inner.jsx-370691658{margin-top:0;}}", "@-webkit-keyframes fly-cycle{100%.jsx-370691658{-webkit-background-position:-900px 0;background-position:-900px 0;}}", "@-webkit-keyframes fly-cycle-jsx-370691658{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}", "@keyframes fly-cycle-jsx-370691658{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}", "@-webkit-keyframes fly-right-one{0%.jsx-370691658{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%.jsx-370691658{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%.jsx-370691658{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%.jsx-370691658{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%.jsx-370691658{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%.jsx-370691658{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%.jsx-370691658{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%.jsx-370691658{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}", "@-webkit-keyframes fly-right-one-jsx-370691658{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}", "@keyframes fly-right-one-jsx-370691658{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}", "@-webkit-keyframes fly-right-two{0%.jsx-370691658{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%.jsx-370691658{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%.jsx-370691658{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%.jsx-370691658{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%.jsx-370691658{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%.jsx-370691658{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%.jsx-370691658{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%.jsx-370691658{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}", "@-webkit-keyframes fly-right-two-jsx-370691658{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}", "@keyframes fly-right-two-jsx-370691658{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}"]
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
      className: "level-item has-text-centered",
      style: {
        maxWidth: '25%'
      }
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
      className: "heading has-text-weight-bold has-text-grey-light",
      style: {
        fontSize: '1rem',
        textTransform: 'none'
      }
    }, headings[i]))));
  }

  return external_react_default.a.createElement("nav", {
    className: "level is-mobile",
    style: {
      padding: '.6rem 0 0 0',
      borderTop: '1px solid hsl(0, 0%, 30%)',
      borderBottom: '1px solid hsl(0, 0%, 30%)',
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px'
    }
  }, items);
};

var Info_Info = function Info() {
  return external_react_default.a.createElement("section", {
    id: "info",
    className: "jsx-43923825" + " " + "section has-background-black"
  }, external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "main-content has-text-centered"
  }, external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    offsetYMax: 50,
    offsetYMin: -50,
    tag: "figure"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 200
  }, external_react_default.a.createElement("div", {
    style: {
      minHeight: '50vh'
    },
    className: "jsx-43923825"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "is-size-3 section-title section-title__light"
  }, "About"), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column content "
  }, external_react_default.a.createElement("h6", {
    className: "jsx-43923825" + " " + "has-text-grey-light is-size-5"
  }, "Oracle Certified Java Developer specialised in front-end and back-end development."), external_react_default.a.createElement("h6", {
    className: "jsx-43923825" + " " + "has-text-grey-light is-size-5"
  }, "Available for hire and open to any ideas of cooperation.")))))), external_react_default.a.createElement(Fade_default.a, {
    delay: 200,
    cascade: true
  }, external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "title-row"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "is-size-3 has-text-weight-bold section-title section-title__light"
  }, "Technical Skills")), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns is-marginless"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "column is-size-4 has-text-weight-bold has-text-grey-light"
  }, "HTML / CSS")), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns is-gapless"
  }, external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column is-marginless"
  }, external_react_default.a.createElement(Info_SkillItems, {
    headings: ['JSX', 'UI Design', 'Materialize'],
    logos: ['../static/logos/react.svg', '../static/logos/ui.png', '../static/logos/materialize.png']
  })), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column is-marginless"
  }, external_react_default.a.createElement(Info_SkillItems, {
    headings: ['Bootstrap', 'Bulma', 'Sass'],
    logos: ['../static/logos/bootstrap.svg', '../static/logos/bulma.png', '../static/logos/sass.svg']
  }))), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "skills-col-title is-size-5 has-text-grey-light"
  }, "BACK-END"), external_react_default.a.createElement(Info_SkillItems, {
    headings: ['Java', 'Spring', 'MySQL', 'Hibernate'],
    logos: ['../static/logos/java.svg', '../static/logos/spring.png', '../static/logos/mysql.svg', '../static/logos/hibernate.png']
  })), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "skills-col-title is-size-5 has-text-grey-light"
  }, "JAVASCRIPT"), external_react_default.a.createElement(Info_SkillItems, {
    headings: ['React', 'Next', 'Vue', 'jQuery'],
    logos: ['../static/logos/react.svg', '../static/logos/next.png', '../static/logos/vuejs.svg', '../static/logos/jquery.svg']
  }))), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns is-marginless"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "column is-size-5 has-text-weight-bold has-text-grey-light"
  }, "OTHER")), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns is-gapless"
  }, external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column is-marginless"
  }, external_react_default.a.createElement(Info_SkillItems, {
    headings: ['GIT', 'AWS', 'Heroku'],
    logos: ['../static/logos/github.png', '../static/logos/amazonwebservices.svg', '../static/logos/heroku.svg']
  })), external_react_default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column is-marginless"
  }, external_react_default.a.createElement(Info_SkillItems, {
    headings: ['IntelliJ', 'Photoshop', 'Illustrator'],
    logos: ['../static/logos/intellij.svg', '../static/logos/photoshop.svg', '../static/logos/illustrator.svg']
  }))))), external_react_default.a.createElement(style_default.a, {
    styleId: "43923825",
    css: [".section.jsx-43923825{overflow:hidden;}", ".main-content.jsx-43923825{padding:4rem;position:relative;max-width:1152px;margin:0 auto;}", ".skills-col-title.jsx-43923825{margin-bottom:.4rem;font-weight:bold;font-size:1rem;}", ".column.jsx-43923825{margin-top:2rem;}", ".columns.jsx-43923825{margin-bottom:0;}", ".title-row.jsx-43923825{margin-top:5rem;}", ".oracle.jsx-43923825{position:relative;z-index:50;}", "@media screen and (max-width:769px){.section.jsx-43923825{padding:1rem .25rem;}.section.jsx-43923825 .column.jsx-43923825{padding:0;margin:2.5rem 0 0.1rem 0;}}", "@media screen and (max-width:1024px){.main-content.jsx-43923825{padding:1rem;}}"]
  }));
};

/* harmony default export */ var components_Info = (Info_Info);
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "prismic-javascript"
var external_prismic_javascript_ = __webpack_require__(10);
var external_prismic_javascript_default = /*#__PURE__*/__webpack_require__.n(external_prismic_javascript_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(3);

// CONCATENATED MODULE: ./api/index.js


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getProjectsAPI =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(params) {
    var API, response;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return external_prismic_javascript_default.a.api(config["b" /* PRISMIC_API_URL */]);

          case 3:
            API = _context.sent;
            _context.next = 6;
            return API.query(external_prismic_javascript_default.a.Predicates.at('document.type', 'project'), _objectSpread({
              // Order by last publication date from most recent to oldest
              orderings: '[my.project.date desc]'
            }, params));

          case 6:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function getProjectsAPI(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* eslint-disable */



// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(6);

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
      var galleryImages = this.props.galleryImages;
      var slideIndex = this.state.slideIndex;

      if (slideIndex + n > galleryImages.length - 1) {
        this.setState({
          slideIndex: 0
        });
        return;
      }

      if (slideIndex + n < 0) {
        this.setState({
          slideIndex: galleryImages.length - 1
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
      var galleryImages = this.props.galleryImages;
      var slides = galleryImages.map(function (item, index) {
        return external_react_["createElement"]("div", {
          key: item.gallery_image.url,
          className: "jsx-4237982925" + " " + "fade ".concat(slideIndex === index ? 'swing-out-top-bck' : 'nonactive')
        }, external_react_["createElement"]("div", {
          className: "jsx-4237982925" + " " + "numbertext has-background-white has-text-weight-bold"
        }, index + 1, "\xA0/\xA0", galleryImages.length), external_react_["createElement"]("figure", {
          className: "jsx-4237982925" + " " + "image is-3by2"
        }, external_react_["createElement"]("img", {
          src: item.gallery_image.url,
          alt: "slide-".concat(item + 1),
          className: "jsx-4237982925"
        })), external_react_["createElement"](style_default.a, {
          styleId: "4237982925",
          css: [".active.jsx-4237982925{display:block;}", ".nonactive.jsx-4237982925{display:none;}", ".image.jsx-4237982925{box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}", ".image.jsx-4237982925 img.jsx-4237982925{border-radius:5px;}", ".numbertext.jsx-4237982925{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;z-index:30;bottom:-30px;left:20px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);cursor:default;}", ".swing-out-top-bck.jsx-4237982925{-webkit-animation:swing-out-top-bck 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;-webkit-animation:swing-out-top-bck-jsx-4237982925 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;animation:swing-out-top-bck-jsx-4237982925 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;}", "@-webkit-keyframes swing-out-top-bck{0%.jsx-4237982925{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%.jsx-4237982925{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}", "@-webkit-keyframes swing-out-top-bck-jsx-4237982925{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}", "@keyframes swing-out-top-bck-jsx-4237982925{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}"]
        }));
      });
      return slides;
    }
  }, {
    key: "createPreviews",
    value: function createPreviews() {
      var _this2 = this;

      var galleryImages = this.props.galleryImages;
      var slideIndex = this.state.slideIndex;
      var previews = galleryImages.map(function (item, index) {
        return external_react_["createElement"]("div", {
          key: item.gallery_image.url,
          className: "jsx-3690607436" + " " + "column"
        }, external_react_["createElement"]("figure", {
          className: "jsx-3690607436" + " " + "image is-3by2"
        }, external_react_["createElement"]("img", {
          src: item.gallery_image.url,
          onClick: function onClick() {
            return _this2.currentSlide(index);
          },
          role: "presentation",
          alt: "preview-".concat(index),
          className: "jsx-3690607436" + " " + ((slideIndex === index ? 'preview-active' : 'preview-inactive') || "")
        })), external_react_["createElement"](style_default.a, {
          styleId: "3690607436",
          css: [".preview-active.jsx-3690607436{cursor:pointer;}", ".preview-inactive.jsx-3690607436{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}", ".preview-inactive.jsx-3690607436:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}", ".image.jsx-3690607436 img.jsx-3690607436{border-radius:5px;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}", ".column.jsx-3690607436{padding:0.25rem;}"]
        }));
      });
      return previews;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var slides = this.createSlides();
      var previews = this.createPreviews();
      return external_react_["createElement"]("div", {
        className: "jsx-2860589478" + " " + "gallery-container"
      }, external_react_["createElement"](Fade_default.a, {
        delay: 200
      }, external_react_["createElement"]("div", {
        style: {
          marginBottom: '1.5rem'
        },
        className: "jsx-2860589478" + " " + "columns is-mobile"
      }, external_react_["createElement"]("div", {
        style: {
          padding: 0
        },
        className: "jsx-2860589478" + " " + "column"
      }, slides))), external_react_["createElement"](Fade_default.a, {
        delay: 200
      }, external_react_["createElement"]("div", {
        className: "jsx-2860589478" + " " + "columns is-variable is-1 is-mobile"
      }, previews)), external_react_["createElement"]("div", {
        className: "jsx-2860589478" + " " + "buttons-container"
      }, external_react_["createElement"](Fade_default.a, {
        delay: 200
      }, external_react_["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(-1);
        },
        className: "jsx-2860589478" + " " + "prev button is-dark is-outlined"
      }, external_react_["createElement"]("i", {
        className: "jsx-2860589478" + " " + "fas fa-angle-left"
      })), external_react_["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(1);
        },
        className: "jsx-2860589478" + " " + "next button is-dark is-outlined"
      }, external_react_["createElement"]("i", {
        className: "jsx-2860589478" + " " + "fas fa-angle-right"
      })))), external_react_["createElement"](style_default.a, {
        styleId: "2860589478",
        css: [".gallery-container.jsx-2860589478{position:relative;margin-top:10px;}", ".fade.jsx-2860589478{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-2860589478;animation-name:fade-jsx-2860589478;-webkit-animation-duration:1.5s;animation-duration:1.5s;}", "@-webkit-keyframes fade{from.jsx-2860589478{opacity:.4;}to.jsx-2860589478{opacity:1;}}", "@-webkit-keyframes fade-jsx-2860589478{from{opacity:.4;}to{opacity:1;}}", "@keyframes fade-jsx-2860589478{from{opacity:.4;}to{opacity:1;}}", ".buttons-container.jsx-2860589478{position:absolute;bottom:-4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".prev.jsx-2860589478,.next.jsx-2860589478{cursor:pointer;color:white;font-weight:bold;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}", ".prev.jsx-2860589478{margin-right:.7rem;}", ".prev.jsx-2860589478:hover,.next.jsx-2860589478:hover{opacity:.8;cursor:pointer;}", "@media screen and (max-width:769px){.numbertext.jsx-2860589478,.prev.jsx-2860589478,.next.jsx-2860589478{display:none;}}"]
      }));
    }
  }]);

  return SlideshowGallery;
}(external_react_["Component"]);

/* harmony default export */ var components_SlideshowGallery = (SlideshowGallery_SlideshowGallery);
// CONCATENATED MODULE: ./components/SingleProject.jsx


function SingleProject_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SingleProject_typeof = function _typeof(obj) { return typeof obj; }; } else { SingleProject_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SingleProject_typeof(obj); }

function SingleProject_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SingleProject_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SingleProject_createClass(Constructor, protoProps, staticProps) { if (protoProps) SingleProject_defineProperties(Constructor.prototype, protoProps); if (staticProps) SingleProject_defineProperties(Constructor, staticProps); return Constructor; }

function SingleProject_possibleConstructorReturn(self, call) { if (call && (SingleProject_typeof(call) === "object" || typeof call === "function")) { return call; } return SingleProject_assertThisInitialized(self); }

function SingleProject_getPrototypeOf(o) { SingleProject_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SingleProject_getPrototypeOf(o); }

function SingleProject_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SingleProject_setPrototypeOf(subClass, superClass); }

function SingleProject_setPrototypeOf(o, p) { SingleProject_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SingleProject_setPrototypeOf(o, p); }

function SingleProject_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var SingleProject_SingleProject =
/*#__PURE__*/
function (_React$Component) {
  SingleProject_inherits(SingleProject, _React$Component);

  function SingleProject(props) {
    var _this;

    SingleProject_classCallCheck(this, SingleProject);

    _this = SingleProject_possibleConstructorReturn(this, SingleProject_getPrototypeOf(SingleProject).call(this, props));
    _this.state = {
      isGalleryLarge: false
    };
    _this.switchGallerySize = _this.switchGallerySize.bind(SingleProject_assertThisInitialized(SingleProject_assertThisInitialized(_this)));
    return _this;
  }

  SingleProject_createClass(SingleProject, [{
    key: "switchGallerySize",
    value: function switchGallerySize() {
      this.setState(function (prevState) {
        return {
          isGalleryLarge: !prevState.isGalleryLarge
        };
      });
    }
  }, {
    key: "openCollapse",
    value: function openCollapse(e) {
      this.funcName = 'openCollapse';
      var content = e.target.previousElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        e.target.value = 'Show more';
      } else {
        content.style.maxHeight = "".concat(content.scrollHeight, "px");
        e.target.value = 'Show less';
      }
    } // SEO

  }, {
    key: "addJSONLD",
    value: function addJSONLD(project, info) {
      this.funcName = 'addJSONLD';
      return {
        __html: "{\n      \"@context\": \"http://schema.org\",\n      \"@type\": \"Article\",\n      \"mainEntityOfPage\": {\n        \"@type\": \"WebPage\",\n      },\n      \"headline\": \"".concat(project.og_title[0].text, "\",\n      \"image\": [\n        \"").concat(project.og_image.url, "\"\n      ],\n      \"datePublished\": \"").concat(info.first_publication_date, "\",\n      \"dateModified\": \"").concat(info.first_publication_date, "\",\n      \"author\": {\n        \"@type\": \"Person\",\n        \"name\": \"Ivan Shyrai\"\n      },\n      \"publisher\": {\n        \"@type\": \"Person\",\n        \"name\": \"Ivan Shyrai\",\n        \"logo\": {\n          \"@type\": \"ImageObject\",\n          \"url\": \"https://prismic-io.s3.amazonaws.com/is-portfolio%2F26e26159-2cb3-49eb-8bdf-c468df8622c9_ivan_portfolio.jpg\"\n        }\n      },\n      \"description\": \"").concat(project.og_description[0].text, "\"\n    }")
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var content = this.props.content;
      var isGalleryLarge = this.state.isGalleryLarge;
      var project = content.data;
      var gradientBackground = {};
      var technologies = [];
      var titleColor = {}; // COLORS & TECHNOLOGY TAGS

      if (project) {
        gradientBackground = {
          backgroundColor: "".concat(project.back_grad_color_2),
          background: "linear-gradient(to right, ".concat(project.back_grad_color_1, ", ").concat(project.back_grad_color_2, ")")
        };
        titleColor = {
          color: "".concat(project.title_color)
        };
        technologies = project.technologies.map(function (item) {
          return external_react_["createElement"]("span", {
            key: item.technology,
            style: {
              margin: '3px'
            },
            className: "tag is-dark"
          }, item.technology);
        });
      }

      return external_react_["createElement"](external_react_["Fragment"], null, !project ?
      /* SPINNER IF PROJECT IS LOADING */
      external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "spinner-container has-text-centered"
      }, external_react_["createElement"](external_react_spinners_["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : external_react_["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-112207108" + " " + "container-wrapper"
      }, external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "container sticky-container has-background-white"
      }, external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "technologies-tags"
      }, technologies), external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "columns"
      }, external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "column ".concat(isGalleryLarge && 'is-three-fifths')
      }, external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "sticky-item"
      }, external_react_["createElement"](Fade_default.a, {
        delay: 700
      }, external_react_["createElement"]("h4", {
        style: titleColor,
        className: "jsx-112207108" + " " + " is-size-3 has-text-weight-bold has-text-right"
      }, project.title[0].text)), external_react_["createElement"](components_SlideshowGallery, {
        galleryImages: project.gallery_images
      }), external_react_["createElement"](Fade_default.a, {
        delay: 600
      }, external_react_["createElement"]("span", {
        onClick: function onClick() {
          return _this2.switchGallerySize();
        },
        className: "jsx-112207108" + " " + "size-switch-btn is-medium is-hidden-mobile"
      }, external_react_["createElement"]("i", {
        className: "jsx-112207108" + " " + "fas fa-expand fa-lg"
      }))))), external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "column content"
      }, external_react_["createElement"](Fade_default.a, {
        delay: 500
      }, external_prismic_reactjs_["RichText"].render(project.description_overall)), external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "content-collapse"
      }, external_react_["createElement"](Fade_default.a, {
        delay: 150
      }, external_prismic_reactjs_["RichText"].render(project.description_collapse))), external_react_["createElement"]("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "Show more",
        className: "jsx-112207108" + " " + "button is-outlined has-text-weight-bold is-dark"
      }))), external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "project-links-container"
      }, external_prismic_reactjs_["Link"].url(project.github_url) && external_react_["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: external_prismic_reactjs_["Link"].url(project.github_url),
        className: "jsx-112207108" + " " + "project-link-item project-link__github image"
      }, external_react_["createElement"]("div", {
        className: "jsx-112207108" + " " + "octocat"
      })), external_prismic_reactjs_["Link"].url(project.host_url) && external_react_["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: external_prismic_reactjs_["Link"].url(project.host_url),
        className: "jsx-112207108" + " " + "project-link-item project-link__host image"
      }, external_react_["createElement"]("i", {
        className: "jsx-112207108" + " " + "fas fa-external-link-alt fa-2x"
      })))), external_react_["createElement"]("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: this.addJSONLD(project, content),
        className: "jsx-112207108"
      })), external_react_["createElement"](style_default.a, {
        styleId: "112207108",
        css: [".content.jsx-112207108{position:relative;}", ".technologies-tags.jsx-112207108{position:absolute;cursor:default;bottom:1rem;right:1rem;}", ".size-switch-btn.jsx-112207108{position:absolute;top:2.8rem;right:-.6rem;cursor:pointer;padding:.3rem;color:#f2f2f2;}", ".spinner-container.jsx-112207108{margin:8rem 0;}", ".spinner.jsx-112207108{display:block;margin:0 auto;border-color:red;text-align:center;}", ".sticky-container.jsx-112207108{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;border-radius:5px;}", ".content-collapse.jsx-112207108{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}", ".container-wrapper.jsx-112207108{padding-top:9rem;margin-bottom:-3rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}", ".sticky-item.jsx-112207108{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}", ".project-links-container.jsx-112207108{position:absolute;z-index:10;bottom:4.6rem;right:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".project-link-item.jsx-112207108{margin-right:15px;}", ".project-link__host.jsx-112207108{color:hsl(0,0%,48%);-webkit-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}", ".project-link__host.jsx-112207108:hover{color:#363636;-webkit-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);}", ".octocat.jsx-112207108{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:33px;height:33px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}", ".octocat.jsx-112207108:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}", "@media screen and (min-width:770px){.content.jsx-112207108{padding-left:2rem;}}", "@media screen and (max-width:769px){.sticky-container.jsx-112207108{padding:2rem 1rem 3rem 1rem;}.technologies-tags.jsx-112207108{bottom:.3rem;right:.3rem;}.project-links-container.jsx-112207108{right:0;}}"]
      }));
    }
  }]);

  return SingleProject;
}(external_react_["Component"]);

/* harmony default export */ var components_SingleProject = (SingleProject_SingleProject);
// CONCATENATED MODULE: ./components/Projects.jsx



function Projects_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Projects_typeof = function _typeof(obj) { return typeof obj; }; } else { Projects_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Projects_typeof(obj); }

function Projects_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Projects_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Projects_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Projects_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Projects_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Projects_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Projects_createClass(Constructor, protoProps, staticProps) { if (protoProps) Projects_defineProperties(Constructor.prototype, protoProps); if (staticProps) Projects_defineProperties(Constructor, staticProps); return Constructor; }

function Projects_possibleConstructorReturn(self, call) { if (call && (Projects_typeof(call) === "object" || typeof call === "function")) { return call; } return Projects_assertThisInitialized(self); }

function Projects_getPrototypeOf(o) { Projects_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Projects_getPrototypeOf(o); }

function Projects_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Projects_setPrototypeOf(subClass, superClass); }

function Projects_setPrototypeOf(o, p) { Projects_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Projects_setPrototypeOf(o, p); }

function Projects_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





/* eslint-disable */

var Projects_Projects =
/*#__PURE__*/
function (_React$Component) {
  Projects_inherits(Projects, _React$Component);

  function Projects(props) {
    var _this;

    Projects_classCallCheck(this, Projects);

    _this = Projects_possibleConstructorReturn(this, Projects_getPrototypeOf(Projects).call(this, props));
    _this.state = {
      projects: ['']
    };
    _this.fetchProjects = _this.fetchProjects.bind(Projects_assertThisInitialized(Projects_assertThisInitialized(_this)));
    return _this;
  }

  Projects_createClass(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchProjects();
    }
  }, {
    key: "fetchProjects",
    value: function () {
      var _fetchProjects = Projects_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var response;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getProjectsAPI({
                  pageSize: 5
                });

              case 2:
                response = _context.sent;
                this.setState({
                  projects: response.results
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchProjects() {
        return _fetchProjects.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var projects = this.state.projects;
      var projectsView = projects.map(function (project, index) {
        return external_react_default.a.createElement(components_SingleProject, {
          key: index,
          content: project
        });
      });
      return external_react_default.a.createElement("div", {
        className: "jsx-937880427" + " " + "projects-section"
      }, external_react_default.a.createElement(Fade_default.a, {
        delay: 500
      }, external_react_default.a.createElement("h1", {
        className: "jsx-937880427" + " " + "is-size-3 sticky-title section-title section-title__dark"
      }, "Projects")), projectsView, external_react_default.a.createElement(style_default.a, {
        styleId: "937880427",
        css: [".sticky-title.jsx-937880427{margin-top:5rem;}"]
      }));
    }
  }]);

  return Projects;
}(external_react_default.a.Component);

/* harmony default export */ var components_Projects = (Projects_Projects);
// CONCATENATED MODULE: ./components/Education.jsx





var Education_Education = function Education() {
  return external_react_default.a.createElement("div", {
    className: "jsx-3211479755" + " " + "wrapper"
  }, external_react_default.a.createElement(external_react_scroll_parallax_["Parallax"], {
    offsetYMax: 15,
    offsetYMin: -15,
    tag: "figure"
  }, external_react_default.a.createElement(Fade_default.a, {
    delay: 200,
    cascade: true
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3211479755" + " " + "is-size-3 section-title section-title__dark"
  }, "Education"), external_react_default.a.createElement("div", {
    className: "jsx-3211479755" + " " + "columns"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3211479755" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3211479755" + " " + "content"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-3211479755" + " " + "is-uppercase"
  }, "University of Social Sciences"), external_react_default.a.createElement("h5", {
    className: "jsx-3211479755" + " " + "is-uppercase"
  }, external_react_default.a.createElement("i", {
    className: "jsx-3211479755" + " " + "fas fa-map-marker-alt"
  }), "\xA0Warsaw, Poland"), external_react_default.a.createElement("p", {
    className: "jsx-3211479755" + " " + "is-uppercase"
  }, "Bachelor of Computer Science"), external_react_default.a.createElement("p", {
    className: "jsx-3211479755"
  }, "Graduated: June 2018"))), external_react_default.a.createElement("div", {
    className: "jsx-3211479755" + " " + "column has-text-centered"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3211479755" + " " + "content"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-3211479755" + " " + "is-uppercase"
  }, "Machine Building College"), external_react_default.a.createElement("h5", {
    className: "jsx-3211479755" + " " + "is-uppercase"
  }, external_react_default.a.createElement("i", {
    className: "jsx-3211479755" + " " + "fas fa-map-marker-alt"
  }), "\xA0Sumy, Ukraine"), external_react_default.a.createElement("p", {
    className: "jsx-3211479755" + " " + "is-uppercase"
  }, "Associate of Chemical Engineering"), external_react_default.a.createElement("p", {
    className: "jsx-3211479755"
  }, "Graduated: June 2014")))))), external_react_default.a.createElement(style_default.a, {
    styleId: "3211479755",
    css: [".section-title.jsx-3211479755{margin-bottom:4rem;}", ".column.jsx-3211479755{padding-bottom:5rem;}", ".columns.jsx-3211479755{max-width:936px;margin-left:auto;margin-right:auto;}", ".wrapper.jsx-3211479755{background-color:#fff;position:relative;padding-top:2rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border-bottom:1px solid hsl(0,0%,86%);}"]
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