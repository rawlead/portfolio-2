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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Footer.jsx";



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-2313898720" + " " + "footer has-background-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2313898720" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2313898720" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2313898720" + " " + "column is-one-fifth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
    className: "jsx-2313898720" + " " + "image is-96x96",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.youracclaim.com/badges/61136f12-504c-475c-941f-7657fdd8c37e/public_url",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2313898720",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/oracle.png",
    alt: "oracle-budge",
    className: "jsx-2313898720",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2313898720" + " " + "column content has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2313898720",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Built with BULMA, REACT.JS and NEXT.JS")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2313898720",
    css: ".footer.jsx-2313898720{padding-top:8rem;}.content.jsx-2313898720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qk8sQUFHNEIsQUFHSixpQkFGZix5REFHcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1maWZ0aFwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtOTZ4OTZcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy55b3VyYWNjbGFpbS5jb20vYmFkZ2VzLzYxMTM2ZjEyLTUwNGMtNDc1Yy05NDFmLTc2NTdmZGQ4YzM3ZS9wdWJsaWNfdXJsXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL29yYWNsZS5wbmdcIiBhbHQ9XCJvcmFjbGUtYnVkZ2VcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgIDxwPkJ1aWx0IHdpdGggQlVMTUEsIFJFQUNULkpTIGFuZCBORVhULkpTPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZm9vdGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Footer.jsx */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.jsx");
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Hero.jsx";






var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "hero-parallax",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: true,
    tag: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3966828517" + " " + "hero is-bold is-fullheight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3966828517" + " " + "hero-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3966828517" + " " + "bird-container bird-container--one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3966828517" + " " + "bird  bird--one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3966828517" + " " + "bird-container bird-container--two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3966828517" + " " + "bird  bird--two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3966828517" + " " + "hero-content has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "custom-class",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: false,
    tag: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      margin: '0 auto'
    },
    href: "!",
    className: "jsx-3966828517" + " " + "image is-128x128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3966828517" + " " + "myself",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "custom-class",
    offsetYMax: 20,
    offsetYMin: -20,
    slowerScrollRate: false,
    tag: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3966828517" + " " + "title box-effect is-size-1 has-text-weight-bold has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Ivan Shyrai")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3966828517" + " " + "subtitle has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Java Software Developer"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3966828517",
    css: ".hero.jsx-3966828517{background:url(\"../static/barcelona-1.jpg\") center bottom;background-size:cover;display:block;overflow:hidden;}.hero-content.jsx-3966828517{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.myself.jsx-3966828517{background:url('../static/me.jpg');background-size:cover;-webkit-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;will-change:transform;width:128px;height:128px;border-radius:50%;}.myself.jsx-3966828517:hover{background:url('../static/me2.jpg');background-size:cover;-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);cursor:pointer;}.bird.jsx-3966828517{background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');background-size:auto 100%;width:88px;height:125px;will-change:background-position;-webkit-animation-name:fly-cycle;-webkit-animation-name:fly-cycle-jsx-3966828517;animation-name:fly-cycle-jsx-3966828517;-webkit-animation-timing-function:steps(10);-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird--one.jsx-3966828517{-webkit-animation-duration:1s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird--two.jsx-3966828517{-webkit-animation-duration:0.9s;-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}.bird-container.jsx-3966828517{position:absolute;top:20%;left:-10%;will-change:transform;-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);-webkit-transform:scale(0) translateX(-10vw);-webkit-animation-timing-function:linear;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird-container--one.jsx-3966828517{-webkit-animation-name:fly-right-one;-webkit-animation-duration:15s;-webkit-animation-delay:0;-webkit-animation-name:fly-right-one-jsx-3966828517;animation-name:fly-right-one-jsx-3966828517;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;animation-delay:0;}.bird-container--two.jsx-3966828517{-webkit-animation-name:fly-right-two;-webkit-animation-duration:17s;-webkit-animation-delay:.5s;-webkit-animation-name:fly-right-two-jsx-3966828517;animation-name:fly-right-two-jsx-3966828517;-webkit-animation-duration:17s;animation-duration:17s;-webkit-animation-delay:.5s;animation-delay:.5s;}@-webkit-keyframes fly-cycle{100%.jsx-3966828517{-webkit-background-position:-900px 0;background-position:-900px 0;}}@-webkit-keyframes fly-cycle-jsx-3966828517{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}@keyframes fly-cycle-jsx-3966828517{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}@-webkit-keyframes fly-right-one{0%.jsx-3966828517{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%.jsx-3966828517{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%.jsx-3966828517{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%.jsx-3966828517{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%.jsx-3966828517{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%.jsx-3966828517{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%.jsx-3966828517{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%.jsx-3966828517{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-one-jsx-3966828517{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@keyframes fly-right-one-jsx-3966828517{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-two{0%.jsx-3966828517{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%.jsx-3966828517{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%.jsx-3966828517{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%.jsx-3966828517{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%.jsx-3966828517{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%.jsx-3966828517{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%.jsx-3966828517{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%.jsx-3966828517{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@-webkit-keyframes fly-right-two-jsx-3966828517{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@keyframes fly-right-two-jsx-3966828517{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERPLEFBR3FFLEFBTXpDLEFBT2tCLEFBVUMsQUFVdUQsQUFhN0QsQUFNRSxBQU1kLEFBYW1CLEFBUUEsQUFTRSxBQU1BLEFBTVUsQUFLZSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0MsQUFLQSxBQU1oQixBQUtlLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQyxBQUtBLEFBTUMsQUFJRixBQUlDLEFBSUEsQUFJRSxBQUlGLEFBS0MsQUFLQSxBQU1BLEFBSUYsQUFJQyxBQUlBLEFBSUUsQUFJRixBQUtDLEFBS0Esa0JBalB6RCxBQW9ERCxRQUNFLENBcERGLEdBdUNjLEVBTUUsR0E1Q2dCLEFBS2xCLENBVUEsQUFxQ0EsQ0FXUyxBQVFBLEFBU0EsQUFNQSxVQU1VLEFBeUNBLFVBL0hGLENBZGpCLEFBd0JPLEFBcUNRLElBNENtQixBQUtBLEFBS0EsQUFLQSxBQUtBLEFBcUJBLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFvQkEsQUFvQ0EsQ0E1RkMsQUFLQSxBQW9DQSxBQUtBLEFBY0EsQUFJQSxBQVFBLEFBd0JBLEFBSUEsQUFRQSxDQXhEQyxBQXlCQSxBQUtBLEFBTUEsQUF5QkEsQUFLQSxDQWxEQyxBQW9DQSxDQWpKM0QsQUFNQSxFQXZCMEIsQUFRRSxNQXZFSSxNQVJuQixFQThDaUIsS0F0QlQsQ0E0QlUsR0FwQkwsR0EvQlYsQUF1RWEsRUExREUsQUFrRUYsY0E5RS9CLEVBNkN3QixLQWRYLEVBb0JZLFNBbkJWLGFBQ21CLHFCQVZFLEVBdUJwQyxFQWpDd0IsT0FxQlcsQUFrQm5DLEdBOENFLEFBeUNBLEdBcElGLEVBb0QrQyxPQTdDakMsRUF5RFcsRUFRQSxJQXZERyxJQVRiLE1Bb0JZLE9BbkJQLGFBNEN1QixLQTNDM0MsS0FzRkUsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQXFCQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBb0JBLEFBb0NBLElBNUZBLEFBS0EsQUFvQ0EsQUFLQSxBQWNBLEFBSUEsQUFRQSxBQXdCQSxBQUlBLEFBUUEsSUFwS2tCLEFBNEdsQixBQXlCQSxBQUtBLEFBTUEsQUF5QkEsQUFLQSxFQXRLb0IsRUFvSHBCLEFBb0NBLG1CQTNLaUMsbUJBcENsQixFQWdEakIsTUFyQzhDLEFBNkM5QyxPQXZEQSxxQ0FXc0MsR0F5Qk8sMkNBQ1Isa0NBekJRLDJDQUNSLENBeUJyQyw2RUF4QkEiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9IZXJvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcblxuY29uc3QgSGVybyA9ICgpID0+IChcbiAgPFBhcmFsbGF4XG4gICAgY2xhc3NOYW1lPVwiaGVyby1wYXJhbGxheFwiXG4gICAgb2Zmc2V0WU1heD17MzB9XG4gICAgb2Zmc2V0WU1pbj17LTMwfVxuICAgIHNsb3dlclNjcm9sbFJhdGVcbiAgICB0YWc9XCJmaWd1cmVcIlxuICA+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVybyBpcy1ib2xkIGlzLWZ1bGxoZWlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWFkXCI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkLWNvbnRhaW5lciBiaXJkLWNvbnRhaW5lci0tb25lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZCAgYmlyZC0tb25lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkLWNvbnRhaW5lciBiaXJkLWNvbnRhaW5lci0tdHdvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZCAgYmlyZC0tdHdvXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICBvZmZzZXRZTWF4PXszMH1cbiAgICAgICAgICBvZmZzZXRZTWluPXstMzB9XG4gICAgICAgICAgc2xvd2VyU2Nyb2xsUmF0ZT17ZmFsc2V9XG4gICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGYWRlIGRlbGF5PXs4MDB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMTI4eDEyOFwiIHN0eWxlPXt7IG1hcmdpbjogJzAgYXV0bycgfX0gaHJlZj1cIiFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteXNlbGZcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICBvZmZzZXRZTWF4PXsyMH1cbiAgICAgICAgICBvZmZzZXRZTWluPXstMjB9XG4gICAgICAgICAgc2xvd2VyU2Nyb2xsUmF0ZT17ZmFsc2V9XG4gICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGYWRlIGRlbGF5PXsxMjAwfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBib3gtZWZmZWN0IGlzLXNpemUtMSBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBJdmFuIFNoeXJhaVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezE2MDB9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGhhcy10ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIEphdmEgU29mdHdhcmUgRGV2ZWxvcGVyXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9iYXJjZWxvbmEtMS5qcGdcIikgY2VudGVyIGJvdHRvbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuaGVyby1jb250ZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAubXlzZWxmIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9tZS5qcGcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICAgICAgd2lkdGg6IDEyOHB4O1xuICAgICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5teXNlbGY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL21lMi5qcGcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJpcmQge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMuc3ZnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZseS1jeWNsZTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygxMCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC0tb25lIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC0tdHdvIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC45cztcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICBsZWZ0OiAtMTAlO1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYmlyZC1jb250YWluZXItLW9uZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtb25lO1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMDtcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC1jb250YWluZXItLXR3byB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LXR3bztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAuNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC10d287XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuNXM7XG4gICAgICAgIH1cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZseS1jeWNsZSB7XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZseS1jeWNsZSB7XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmx5LXJpZ2h0LW9uZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAzMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA2MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZseS1yaWdodC1vbmUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAxMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZseS1yaWdodC10d28ge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ydmgpIHRyYW5zbGF0ZVgoLTEwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAyMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00dmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxdmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi41dmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi41dmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBmbHktcmlnaHQtdHdvIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0xMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ydmgpIHRyYW5zbGF0ZVgoLTEwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00dmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxdmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9QYXJhbGxheD5cbik7XG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Hero.jsx */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Info.jsx":
/*!*****************************!*\
  !*** ./components/Info.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Info.jsx";





var SkillItems = function SkillItems(_ref) {
  var logos = _ref.logos,
      headings = _ref.headings;
  var items = [];

  for (var i = 0; i < logos.length; i += 1) {
    items.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: i,
      className: "level-item has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "title",
      style: {
        marginBottom: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "image is-24x24 ",
      style: {
        margin: 'auto auto 8px auto'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: logos[i],
      alt: "".concat(headings[i], "-logo"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "heading has-text-weight-bold has-text-white-ter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, headings[i]))));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "level is-mobile",
    style: {
      padding: '.6rem 0 0 0',
      borderTop: '1px solid hsl(0, 0%, 30%)',
      borderBottom: '1px solid hsl(0, 0%, 30%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, items);
};

var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3514437353" + " " + "section has-background-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "main-content has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    delay: 500,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    offsetYMax: 50,
    offsetYMin: -50,
    tag: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3514437353" + " " + "is-size-3 has-text-white-ter has-text-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "column content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3514437353" + " " + "has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Oracle Certified Java Developer specialised in front-end and back-end development."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3514437353" + " " + "has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Available for hire and open to any ideas of cooperation."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "title-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3514437353" + " " + "is-size-3 has-text-white-ter has-text-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Skills")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "columns is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3514437353" + " " + "column has-text-weight-bold has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "HTML / CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "columns is-gapless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['jsx', 'ui design', 'materialize'],
    logos: ['../static/logos/react.svg', '../static/logos/ui.png', '../static/logos/materialize.png'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['bootstrap', 'bulma', 'sass'],
    logos: ['../static/logos/bootstrap.svg', '../static/logos/bulma.png', '../static/logos/sass.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3514437353" + " " + "skills-col-title has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Back-End"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['java', 'spring', 'mysql', 'hibernate'],
    logos: ['../static/logos/java.svg', '../static/logos/spring.png', '../static/logos/mysql.svg', '../static/logos/hibernate.png'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3514437353" + " " + "skills-col-title has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['react', 'next', 'vue', 'jquery'],
    logos: ['../static/logos/react.svg', '../static/logos/next.png', '../static/logos/vuejs.svg', '../static/logos/jquery.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "columns is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3514437353" + " " + "column has-text-weight-bold has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Other")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "columns is-gapless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['git', 'aws', 'heroku'],
    logos: ['../static/logos/github.png', '../static/logos/amazonwebservices.svg', '../static/logos/heroku.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3514437353" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['intellij', 'photoshop', 'illustrator'],
    logos: ['../static/logos/intellij.svg', '../static/logos/photoshop.svg', '../static/logos/illustrator.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3514437353",
    css: ".section.jsx-3514437353{display:block;}.main-content.jsx-3514437353{padding:4rem;position:relative;max-width:1152px;margin:0 auto;}.skills-col-title.jsx-3514437353{margin-bottom:.4rem;font-weight:bold;font-size:1rem;}.column.jsx-3514437353{margin-top:2rem;}.columns.jsx-3514437353{margin-bottom:0;}.title-row.jsx-3514437353{margin-top:5rem;}.oracle.jsx-3514437353{position:relative;z-index:50;}@media screen and (max-width:769px){.section.jsx-3514437353{padding:1rem .25rem;}.section.jsx-3514437353 .column.jsx-3514437353{padding:0;margin:2.5rem 0 0.1rem 0;}}@media screen and (max-width:1024px){.main-content.jsx-3514437353{padding:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0tPLEFBR3lCLEFBR0QsQUFNTyxBQUtKLEFBR0QsQUFHQSxBQUdHLEFBS00sQUFHVixBQU9mLFVBTjhCLEdBNUJYLEFBa0NsQixDQXJDRixFQWNBLEFBR0EsQUFHQSxFQUdhLEVBZE0sQUFtQmpCLFNBSkYsRUFwQm1CLElBNEJqQixFQXRCZSxXQUxELElBTWhCLFVBTEEiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9JbmZvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNvbnN0IFNraWxsSXRlbXMgPSAoeyBsb2dvcywgaGVhZGluZ3MgfSkgPT4ge1xuICBjb25zdCBpdGVtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZ29zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaXRlbXMucHVzaChcbiAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMjR4MjQgXCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0byBhdXRvIDhweCBhdXRvJyB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29zW2ldfSBhbHQ9e2Ake2hlYWRpbmdzW2ldfS1sb2dvYH0gLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRpbmcgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtd2hpdGUtdGVyXCI+e2hlYWRpbmdzW2ldfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4sXG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCIgc3R5bGU9e3sgcGFkZGluZzogJy42cmVtIDAgMCAwJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzAlKScsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBoc2woMCwgMCUsIDMwJSknIH19PlxuICAgICAge2l0ZW1zfVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgSW5mbyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBoYXMtYmFja2dyb3VuZC1ibGFja1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICA8RmFkZSBkZWxheT17NTAwfSBjYXNjYWRlPlxuICAgICAgICB7Lyogcm93IG1haW4gZGVzY3JpcHRpb24gKi99XG4gICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgIG9mZnNldFlNYXg9ezUwfVxuICAgICAgICAgIG9mZnNldFlNaW49ey01MH1cbiAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTMgaGFzLXRleHQtd2hpdGUtdGVyIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+QWJvdXQ8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnQgXCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICAgICAgT3JhY2xlIENlcnRpZmllZCBKYXZhIERldmVsb3BlciBzcGVjaWFsaXNlZCBpblxuICAgICAgICAgICAgICAgICAgIGZyb250LWVuZCBhbmQgYmFjay1lbmQgZGV2ZWxvcG1lbnQuXG4gICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUtdGVyXCI+QXZhaWxhYmxlIGZvciBoaXJlIGFuZCBvcGVuIHRvIGFueSBpZGVhcyBvZiBjb29wZXJhdGlvbi48L2g2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhcmFsbGF4PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtcm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtMyBoYXMtdGV4dC13aGl0ZS10ZXIgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5Ta2lsbHM8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyogcm93IGZpcnN0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtd2hpdGUtdGVyXCI+XG4gICAgICAgICAgICBIVE1MIC8gQ1NTXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1nYXBsZXNzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnanN4JyxcbiAgICAgICAgICAgICAgICAndWkgZGVzaWduJyxcbiAgICAgICAgICAgICAgICAnbWF0ZXJpYWxpemUnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcmVhY3Quc3ZnJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3VpLnBuZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9tYXRlcmlhbGl6ZS5wbmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICdib290c3RyYXAnLFxuICAgICAgICAgICAgICAgICdidWxtYScsXG4gICAgICAgICAgICAgICAgJ3Nhc3MnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYm9vdHN0cmFwLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9idWxtYS5wbmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3Mvc2Fzcy5zdmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHJvdyBzZWNvbmQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2tpbGxzLWNvbC10aXRsZSBoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgQmFjay1FbmRcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICdqYXZhJyxcbiAgICAgICAgICAgICAgICAnc3ByaW5nJyxcbiAgICAgICAgICAgICAgICAnbXlzcWwnLFxuICAgICAgICAgICAgICAgICdoaWJlcm5hdGUnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvamF2YS5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3Mvc3ByaW5nLnBuZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9teXNxbC5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvaGliZXJuYXRlLnBuZycsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJza2lsbHMtY29sLXRpdGxlIGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICBKYXZhU2NyaXB0XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAncmVhY3QnLFxuICAgICAgICAgICAgICAgICduZXh0JyxcbiAgICAgICAgICAgICAgICAndnVlJyxcbiAgICAgICAgICAgICAgICAnanF1ZXJ5JyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3JlYWN0LnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9uZXh0LnBuZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy92dWVqcy5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvanF1ZXJ5LnN2ZycsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyogcm93IHRoaXJkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtd2hpdGUtdGVyXCI+XG4gICAgICAgICAgICBPdGhlclxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1nYXBsZXNzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnZ2l0JyxcbiAgICAgICAgICAgICAgICAnYXdzJyxcbiAgICAgICAgICAgICAgICAnaGVyb2t1JyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2dpdGh1Yi5wbmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYW1hem9ud2Vic2VydmljZXMuc3ZnJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2hlcm9rdS5zdmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICdpbnRlbGxpaicsXG4gICAgICAgICAgICAgICAgJ3Bob3Rvc2hvcCcsXG4gICAgICAgICAgICAgICAgJ2lsbHVzdHJhdG9yJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2ludGVsbGlqLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9waG90b3Nob3Auc3ZnJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2lsbHVzdHJhdG9yLnN2ZycsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmFkZT5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGxzLWNvbC10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjRyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbnMge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm9yYWNsZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlY3Rpb24gLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDAgMC4xcmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Info.jsx */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Layout.jsx";






var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-487064140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
    className: "jsx-487064140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
    className: "jsx-487064140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Oswald",
    rel: "stylesheet",
    className: "jsx-487064140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    defer: true,
    src: "https://use.fontawesome.com/releases/v5.1.0/js/all.js",
    className: "jsx-487064140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-487064140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Ivan Shyrai")), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "487064140",
    css: "body{background-color:#f2f2f2;}*{font-family:'Oswald',sans-serif !important;}.button{border-radius:0 !important;}.box-effect:after,.box-effect:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}.box-effect:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}.box-effect:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.box-effect:hover:after,.box-effect:hover:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQk8sQUFHb0MsQUFHbUIsQUFHakIsQUFRaEIsQUFZVyxBQU1FLEFBT2QsVUFDaUIsQ0F6QlQsV0FZSyxFQU1GLENBaEN2QixFQU1BLEVBU1MsT0FDYyxDQXdCRixNQXJDckIsRUF3QitCLEFBTUEsWUFoQmxCLFdBQ0EsTUFVVSxBQU1BLEtBZkwsZ0JBQ04sVUFDZ0QsQ0FvQjVELDJDQVpBLEFBTUEsYUFiNEMsbUpBQzVDIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJhbGxheFByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLnJhd2dpdC5jb20va29ucGEvZGV2aWNvbi9kZjY0MzFlMzIzNTQ3YWRkMWI0Y2Y0NTk5MjkxM2YxNTI4NjQ1NmQzL2Rldmljb24ubWluLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2J1bG1hLzAuNy4xL2Nzcy9idWxtYS5taW4uY3NzXCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xLjAvanMvYWxsLmpzXCIgLz5cbiAgICAgIDx0aXRsZT5JdmFuIFNoeXJhaTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuXG4gICAge2NoaWxkcmVufVxuXG4gICAgPEZvb3RlciAvPlxuXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICB7YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvKmVmZmVjdC1ib3gqL1xuICAgICAgICAuYm94LWVmZmVjdDphZnRlcixcbiAgICAgICAgLmJveC1lZmZlY3Q6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgICAgICB9XG4gICAgICAgIC5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmJveC1lZmZlY3Q6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLDEpO1xuICAgICAgICB9XG4gICAgICAgIC5ib3gtZWZmZWN0OmhvdmVyOmFmdGVyLFxuICAgICAgICAuYm94LWVmZmVjdDpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9QYXJhbGxheFByb3ZpZGVyPlxuKTtcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Layout.jsx */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Navbar.jsx";




var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2521220359" + " " + "navbar bounce-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2521220359" + " " + "navbar-item ha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-2521220359" + " " + "has-text-white text-focus-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2521220359" + " " + "fab fa-facebook fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2521220359" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-2521220359" + " " + "has-text-white text-focus-in ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2521220359" + " " + "fas fa-envelope fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2521220359" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-2521220359" + " " + "has-text-white text-focus-in ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2521220359" + " " + "fab fa-linkedin fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2521220359" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-2521220359" + " " + "has-text-white text-focus-in ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2521220359" + " " + "fab fa-github fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2521220359",
    css: ".navbar.jsx-2521220359{display:block;left:auto;right:auto;text-align:center;background-color:#0a0a0a;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;min-height:auto;}.navbar.jsx-2521220359:hover{background:none;}.navbar.jsx-2521220359:hover a.jsx-2521220359{font-size:125%;}.navbar-item.jsx-2521220359{display:inline-block;}.navbar-item.jsx-2521220359 a.jsx-2521220359{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;}.navbar-item.jsx-2521220359 a.jsx-2521220359:hover{color:hsl(0,0,20%) !important;}.bounce-top.jsx-2521220359{-webkit-animation:bounce-top 1s 1.2s both;-webkit-animation:bounce-top-jsx-2521220359 1s 1.2s both;animation:bounce-top-jsx-2521220359 1s 1.2s both;}@-webkit-keyframes bounce-top{0%.jsx-2521220359{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%.jsx-2521220359{opacity:1;}40%.jsx-2521220359{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%.jsx-2521220359{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%.jsx-2521220359{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%.jsx-2521220359{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%.jsx-2521220359,55%.jsx-2521220359,75%.jsx-2521220359,87%.jsx-2521220359{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%.jsx-2521220359{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}@-webkit-keyframes bounce-top-jsx-2521220359{0%{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}@keyframes bounce-top-jsx-2521220359{0%{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}.text-focus-in.jsx-2521220359{-webkit-animation:text-focus-in 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;-webkit-animation:text-focus-in-jsx-2521220359 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;animation:text-focus-in-jsx-2521220359 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;}@-webkit-keyframes text-focus-in{0%.jsx-2521220359{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%.jsx-2521220359{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}@-webkit-keyframes text-focus-in-jsx-2521220359{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}@keyframes text-focus-in-jsx-2521220359{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qk8sQUFHdUIsQUFTRSxBQUdELEFBR00sQUFHVSxBQUdELEFBR1ksQUFLSixBQU8xQixBQUcwQixBQU1BLEFBTUQsQUFNQSxBQVNELEFBTUEsQUFTRSxBQU8xQixBQUcwQixBQU1BLEFBTUQsQUFNQSxBQVNELEFBTUEsQUFTa0QsQUFNMUQsQUFLRCxBQU9DLEFBS0QsVUF2SDNCLEFBb0RBLElBeEZVLENBWVosQ0FIQSxLQU1BLEdBZGEsQ0ErSWdCLEFBWUEsQ0FqQkMsQUFZQSxJQWxJOUIsSUE2Q3NDLEFBTUEsQUE4Q0EsQUFNQSxDQTFIbkIsQUFpRG9CLEFBTUEsQUE4Q0EsQUFNQSxDQWhGQyxBQVVBLEFBTUEsQUFvQ0EsQUFVQSxBQU1BLE1BekVJLFdBckJqQixjQThJYixBQVlBLEdBM0lkLEFBMEhjLEFBWUEsT0FOWixBQVlBLENBMUorQixFQXlJL0IsQUFZQSxHQXBCc0YseUNBbEV6QyxBQU1BLEFBOENBLEFBTUEsSUF6RUQsQUFNQSxBQThDQSxBQU1BLElBaEZBLEFBVUEsQUFNQSxBQW9DQSxBQVVBLEFBTUEsZ0JBN0Y1QixBQW9CbEIsZ0JBbkJBLEdBOEQrQyxBQU1BLEFBOENBLEFBTUEsR0F6RUQsQUFNQSxBQThDQSxBQU1BLElBaEZBLEFBVUEsQUFNQSxBQW9DQSxBQVVBLEFBTUEsdUVBOUI1QyxBQU1ZLEFBOENaLEFBTVksQ0F6RVosQUFNQSxBQThDQSxBQU1BLElBaEZZLEFBVVosQUFNQSxBQW9DWSxBQVVaLEFBTUEsS0F4QkEsQUFvREEsS0EvRkEsQUFvREEsV0FpREYiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9OYXZiYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGJvdW5jZS10b3BcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBocmVmPVwiIVwiIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIHRleHQtZm9jdXMtaW5cIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2sgZmEtbGdcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIhXCIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgdGV4dC1mb2N1cy1pbiBcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUgZmEtbGdcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiIVwiIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIHRleHQtZm9jdXMtaW4gXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluIGZhLWxnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiFcIiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZSB0ZXh0LWZvY3VzLWluIFwiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWIgZmEtbGdcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAubmF2YmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgICAgICAgIFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgLm5hdmJhcjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICAubmF2YmFyOmhvdmVyIGEge1xuICAgICAgICBmb250LXNpemU6IDEyNSU7XG4gICAgICB9XG4gICAgICAubmF2YmFyLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAubmF2YmFyLWl0ZW0gYSB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIC5uYXZiYXItaXRlbSBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGhzbCgwLDAsMjAlKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmJvdW5jZS10b3Age1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYm91bmNlLXRvcCAxcyAxLjJzIGJvdGg7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UtdG9wIDFzIDEuMnMgYm90aDtcbiAgICAgIH1cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBib3VuY2UtdG9wIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDVweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDI0JSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICA0MCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA2NSUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA4MiUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgOTMlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDI1JSxcbiAgICAgICAgNTUlLFxuICAgICAgICA3NSUsXG4gICAgICAgIDg3JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgYm91bmNlLXRvcCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDVweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICAyNCUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgNDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgNjUlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgODIlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDkzJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICAyNSUsXG4gICAgICAgIDU1JSxcbiAgICAgICAgNzUlLFxuICAgICAgICA4NyUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LWZvY3VzLWluIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHRleHQtZm9jdXMtaW4gMXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSAxLjRzIGJvdGg7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0ZXh0LWZvY3VzLWluIDFzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgMS40cyBib3RoO1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mb2N1cy1pbiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHRleHQtZm9jdXMtaW4ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Navbar.jsx */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Projects.jsx":
/*!*********************************!*\
  !*** ./components/Projects.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SlideshowGallery */ "./components/SlideshowGallery.jsx");
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Projects.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Projects =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects() {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, _getPrototypeOf(Projects).apply(this, arguments));
  }

  _createClass(Projects, [{
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "sticky-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3460060234" + " " + "is-size-3 has-text-centered  has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Projects")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "container-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/rawlead/Photo-IS",
        className: "jsx-3460060234" + " " + "octocat-container image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "octocat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "columns is-variable is-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "column is-three-fifths",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3460060234" + " " + "is-size-4 has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Photo IS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/portal-1.jpg', '../static/p/portal-2.jpg', '../static/p/portal-3.jpg', '../static/p/portal-4.jpg', '../static/p/portal-5.jpg', '../static/p/portal-6.jpg'],
        color: "#0a0a0a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "About this project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Photo IS is a web application for sharing photos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Interface was built using Vue.js and Bootstrap libraries."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Communication with server is done through JSON format and REST API. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "content-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Functional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Users are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Login into existing account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Upload profile image"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Modify personal data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Upload photo with a short title, description and selecting a category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Explore photos uploaded by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Sort photos by category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Add or remove photos to or from collection of favorites"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Comment photos and explore comments made by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Search for categories or other users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Technical Sheet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Technologies I got involved with while working on this project."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Java 8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Spring Framework - Security, MVC, Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Amazon Web Services - EB, S3, RDS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "oAuth 2.0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "HTML5 / CSS3 / Javascript ES6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "UI/UX Architecture"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "UI/UX Animations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Vue.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Bootstrap"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-3460060234" + " " + "button is-outlined has-text-weight-bold is-black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "container-wrapper wrapper-project2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/rawlead/Photo-IS",
        className: "jsx-3460060234" + " " + "octocat-container image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "octocat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "columns is-variable is-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "column is-three-fifths",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3460060234" + " " + "is-size-4 has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Ebrofy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/ebro-1.jpg', '../static/p/ebro-2.jpg', '../static/p/ebro-3.png', '../static/p/ebro-4.png', '../static/p/ebro-5.png', '../static/p/ebro-6.jpg'],
        color: "#2c3e50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "About this project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Photo IS is a web application for sharing photos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Interface was built using Vue.js and Bootstrap libraries."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Communication with server is done through JSON format and REST API. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "content-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Functional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Users are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Login into existing account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Upload profile image"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Modify personal data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Upload photo with a short title, description and selecting a category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Explore photos uploaded by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Sort photos by category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Add or remove photos to or from collection of favorites"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Comment photos and explore comments made by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Search for categories or other users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Technical Sheet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Technologies I got involved with while working on this project."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Java 8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Spring Framework - Security, MVC, Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Amazon Web Services - EB, S3, RDS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "oAuth 2.0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "HTML5 / CSS3 / Javascript ES6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "UI/UX Architecture"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "UI/UX Animations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Vue.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Bootstrap"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-3460060234" + " " + "button is-outlined has-text-weight-bold is-black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "container-wrapper wrapper-project3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/rawlead/Photo-IS",
        className: "jsx-3460060234" + " " + "octocat-container image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "octocat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "columns is-variable is-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "column is-three-fifths",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3460060234" + " " + "is-size-4 has-text-weight-bold has-text-grey-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Filter App")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/filterapp-1.jpg', '../static/p/filterapp-2.jpg', '../static/p/filterapp-3.jpg', '../static/p/filterapp-4.jpg', '../static/p/filterapp-5.jpeg', '../static/p/filterapp-6.jpg'],
        color: "hsl(0, 0%, 40%)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "About this project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Photo IS is a web application for sharing photos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Interface was built using Vue.js and Bootstrap libraries."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Communication with server is done through JSON format and REST API. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3460060234" + " " + "content-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Functional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Users are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Login into existing account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "Upload profile image"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Modify personal data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "Upload photo with a short title, description and selecting a category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Explore photos uploaded by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Sort photos by category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Add or remove photos to or from collection of favorites"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Comment photos and explore comments made by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Search for categories or other users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Technical Sheet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Technologies I got involved with while working on this project."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Java 8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Spring Framework - Security, MVC, Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Amazon Web Services - EB, S3, RDS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "oAuth 2.0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "HTML5 / CSS3 / Javascript ES6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "UI/UX Architecture"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "UI/UX Animations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Vue.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3460060234",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "Bootstrap"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-3460060234" + " " + "button is-outlined has-text-weight-bold is-black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3460060234",
        css: ".wrapper-project2.jsx-3460060234{background:-webkit-gradient(linear,left top,right top,from(#e67e22),to(#e74c3c));background:-webkit-linear-gradient(left,#e67e22,#e74c3c);background:-o-linear-gradient(left,#e67e22,#e74c3c);background:linear-gradient(to right,#e67e22,#e74c3c);}.wrapper-project3.jsx-3460060234{background:#232526;background:-webkit-linear-gradient(to right,#414345,#232526);background:linear-gradient(to right,#414345,#232526);}.sticky-container.jsx-3460060234{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);max-width:1152px;}.content-collapse.jsx-3460060234{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.sticky-title.jsx-3460060234{padding:3px 0;margin-top:3rem;margin-bottom:-3rem;max-width:185px;margin-left:auto;margin-right:auto;}.container-wrapper.jsx-3460060234{padding-top:9rem;margin-bottom:-3rem;}.sticky-item.jsx-3460060234{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-3460060234{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-3460060234{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-3460060234:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-3460060234{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9TVyxBQUdvRyxBQU1sRSxBQUtOLEFBU0ssQUFRSixBQVFHLEFBSU8sQUFPTixBQU1xQixBQVNDLEFBU04sY0ExQ2xCLEdBUUksQ0FXVCxDQXpDb0QsQUFjbEQsS0FvQkcsSUErQmQsQ0F2QlMsQ0FuQlMsRUFSSixLQWdCbEIsRUFnQjBCLENBU0EsQ0FiYixPQTNCOEIsRUFRekIsRUFvQmxCLFdBSW1CLENBYlIsQUFzQlksRUFoQ0osT0FXQyxDQS9CSyxNQUpnQyxDQVBJLEFBdURoRCxFQXZCTyxNQVRlLEVBb0JWLENBYWIsU0F2QlosRUF3QmEsV0FiYixDQWNpQyxrQkFsRGpDLEtBUHdELENBK0Q1Qix3QkF4QzVCLFVBWnlCLFlBK0N6QixLQXpEeUQsdUNBK0R0QyxjQTlEbkIsR0ErRGlCLGVBQ2pCLHFCQXREbUMsK0JBQ0wsNEJBQ2tCLCtDQUM3QixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9Qcm9qZWN0cy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IFNsaWRlc2hvd0dhbGxlcnkgZnJvbSAnLi9TbGlkZXNob3dHYWxsZXJ5JztcblxuY2xhc3MgUHJvamVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBvcGVuQ29sbGFwc2UoZSkge1xuICAgIHRoaXMuZnVuY05hbWUgPSAnb3BlbkNvbGxhcHNlJztcbiAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ01vcmUuLi4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke2NvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ0xlc3MuLi4nO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS10aXRsZVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTMgaGFzLXRleHQtY2VudGVyZWQgIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+UHJvamVjdHM8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUHJvamVjdCAxICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYXdsZWFkL1Bob3RvLUlTXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2N0b2NhdFwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy10aHJlZS1maWZ0aHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBQaG90byBJU1xuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMy5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMwYTBhMGFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICA8aDM+QWJvdXQgdGhpcyBwcm9qZWN0PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoNT5QaG90byBJUyBpcyBhIHdlYiBhcHBsaWNhdGlvbiBmb3Igc2hhcmluZyBwaG90b3MuPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBidWlsdCB3aXRoIEphdmEgYW5kIFNwcmluZyBGcmFtZXdvcmsgYXMgYmFjay1lbmQgdGVjaG5vbG9naWVzLFxuICAgICAgICAgICAgICAgICAgICB3aXRoIE15U1FMIGRhdGFiYXNlIGZvciBrZWVwaW5nIHVzZXIgYWNjb3VudHMsIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+SW50ZXJmYWNlIHdhcyBidWlsdCB1c2luZyBWdWUuanMgYW5kIEJvb3RzdHJhcCBsaWJyYXJpZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+Q29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpcyBkb25lIHRocm91Z2ggSlNPTiBmb3JtYXQgYW5kIFJFU1QgQVBJLiA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gbGl2ZXMgb24gQW1hem9uIFdlYiBTZXJ2aWNlcyBhbmRcbiAgICAgICAgICAgICAgICAgICAgIGlzIHVzaW5nIEVCIGZvciBkZXBsb3lpbmcsIFMzIGZvciBzdG9yaW5nIGltYWdlIGZpbGVzIGFuZCBSRFMgYXMgYVxuICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UgcHJvdmlkZXIuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkZ1bmN0aW9uYWw8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDU+VXNlcnMgYXJlIGFibGUgdG86PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGUgYSBuZXcgYWNjb3VudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkxvZ2luIGludG8gZXhpc3RpbmcgYWNjb3VudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcm9maWxlIGltYWdlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9kaWZ5IHBlcnNvbmFsIGRhdGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcGhvdG8gd2l0aCBhIHNob3J0IHRpdGxlLCBkZXNjcmlwdGlvbiBhbmQgc2VsZWN0aW5nIGEgY2F0ZWdvcnk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5FeHBsb3JlIHBob3RvcyB1cGxvYWRlZCBieSBvdGhlciB1c2VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlNvcnQgcGhvdG9zIGJ5IGNhdGVnb3J5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRkIG9yIHJlbW92ZSBwaG90b3MgdG8gb3IgZnJvbSBjb2xsZWN0aW9uIG9mIGZhdm9yaXRlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbW1lbnQgcGhvdG9zIGFuZCBleHBsb3JlIGNvbW1lbnRzIG1hZGUgYnkgb3RoZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWFyY2ggZm9yIGNhdGVnb3JpZXMgb3Igb3RoZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8aDM+VGVjaG5pY2FsIFNoZWV0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlRlY2hub2xvZ2llcyBJIGdvdCBpbnZvbHZlZCB3aXRoIHdoaWxlIHdvcmtpbmcgb24gdGhpcyBwcm9qZWN0LjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+SmF2YSA4PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U3ByaW5nIEZyYW1ld29yayAtIFNlY3VyaXR5LCBNVkMsIERhdGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5NeVNRTDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkFtYXpvbiBXZWIgU2VydmljZXMgLSBFQiwgUzMsIFJEUzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPm9BdXRoIDIuMDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkhUTUw1IC8gQ1NTMyAvIEphdmFzY3JpcHQgRVM2PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VUkvVVggQXJjaGl0ZWN0dXJlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VUkvVVggQW5pbWF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlZ1ZS5qczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkJvb3RzdHJhcDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtb3V0bGluZWQgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaXMtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVuQ29sbGFwc2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJNb3JlLi4uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7IC8qIFBST0pFQ1QgMiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlciB3cmFwcGVyLXByb2plY3QyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYXdsZWFkL1Bob3RvLUlTXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2N0b2NhdFwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy10aHJlZS1maWZ0aHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBFYnJvZnlcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby0xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tMi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTMucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby00LnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tNS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTYuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMmMzZTUwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IHRoaXMgcHJvamVjdDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDU+UGhvdG8gSVMgaXMgYSB3ZWIgYXBwbGljYXRpb24gZm9yIHNoYXJpbmcgcGhvdG9zLjwvaDU+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gYnVpbHQgd2l0aCBKYXZhIGFuZCBTcHJpbmcgRnJhbWV3b3JrIGFzIGJhY2stZW5kIHRlY2hub2xvZ2llcyxcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLCBwaG90b3MsIGNvbW1lbnRzIGFuZCBvdGhlciBzdHVmZi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkludGVyZmFjZSB3YXMgYnVpbHQgdXNpbmcgVnVlLmpzIGFuZCBCb290c3RyYXAgbGlicmFyaWVzLjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkNvbW11bmljYXRpb24gd2l0aCBzZXJ2ZXIgaXMgZG9uZSB0aHJvdWdoIEpTT04gZm9ybWF0IGFuZCBSRVNUIEFQSS4gPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGxpdmVzIG9uIEFtYXpvbiBXZWIgU2VydmljZXMgYW5kXG4gICAgICAgICAgICAgICAgICAgICBpcyB1c2luZyBFQiBmb3IgZGVwbG95aW5nLCBTMyBmb3Igc3RvcmluZyBpbWFnZSBmaWxlcyBhbmQgUkRTIGFzIGFcbiAgICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlIHByb3ZpZGVyLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5GdW5jdGlvbmFsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlVzZXJzIGFyZSBhYmxlIHRvOjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+Q3JlYXRlIGEgbmV3IGFjY291bnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Mb2dpbiBpbnRvIGV4aXN0aW5nIGFjY291bnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcHJvZmlsZSBpbWFnZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPk1vZGlmeSBwZXJzb25hbCBkYXRhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIHBob3RvIHdpdGggYSBzaG9ydCB0aXRsZSwgZGVzY3JpcHRpb24gYW5kIHNlbGVjdGluZyBhIGNhdGVnb3J5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhwbG9yZSBwaG90b3MgdXBsb2FkZWQgYnkgb3RoZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb3J0IHBob3RvcyBieSBjYXRlZ29yeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkFkZCBvciByZW1vdmUgcGhvdG9zIHRvIG9yIGZyb20gY29sbGVjdGlvbiBvZiBmYXZvcml0ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21tZW50IHBob3RvcyBhbmQgZXhwbG9yZSBjb21tZW50cyBtYWRlIGJ5IG90aGVyIHVzZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoIGZvciBjYXRlZ29yaWVzIG9yIG90aGVyIHVzZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlRlY2huaWNhbCBTaGVldDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5UZWNobm9sb2dpZXMgSSBnb3QgaW52b2x2ZWQgd2l0aCB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC48L2g1PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmEgODwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcmsgLSBTZWN1cml0eSwgTVZDLCBEYXRhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbWF6b24gV2ViIFNlcnZpY2VzIC0gRUIsIFMzLCBSRFM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5vQXV0aCAyLjA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLyBKYXZhc2NyaXB0IEVTNjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFyY2hpdGVjdHVyZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFuaW1hdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5WdWUuanM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyAvKiBQUk9KRUNUIDMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXIgd3JhcHBlci1wcm9qZWN0M1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9jdG9jYXQtY29udGFpbmVyIGltYWdlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmF3bGVhZC9QaG90by1JU1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdGhyZWUtZmlmdGhzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezgwfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgQXBwXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0yLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0zLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC00LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC01LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtNi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImhzbCgwLCAwJSwgNDAlKVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgIDxoMz5BYm91dCB0aGlzIHByb2plY3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgPGg1PlBob3RvIElTIGlzIGEgd2ViIGFwcGxpY2F0aW9uIGZvciBzaGFyaW5nIHBob3Rvcy48L2g1PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGJ1aWx0IHdpdGggSmF2YSBhbmQgU3ByaW5nIEZyYW1ld29yayBhcyBiYWNrLWVuZCB0ZWNobm9sb2dpZXMsXG4gICAgICAgICAgICAgICAgICAgIHdpdGggTXlTUUwgZGF0YWJhc2UgZm9yIGtlZXBpbmcgdXNlciBhY2NvdW50cywgcGhvdG9zLCBjb21tZW50cyBhbmQgb3RoZXIgc3R1ZmYuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5JbnRlcmZhY2Ugd2FzIGJ1aWx0IHVzaW5nIFZ1ZS5qcyBhbmQgQm9vdHN0cmFwIGxpYnJhcmllcy48L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Db21tdW5pY2F0aW9uIHdpdGggc2VydmVyIGlzIGRvbmUgdGhyb3VnaCBKU09OIGZvcm1hdCBhbmQgUkVTVCBBUEkuIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBsaXZlcyBvbiBBbWF6b24gV2ViIFNlcnZpY2VzIGFuZFxuICAgICAgICAgICAgICAgICAgICAgaXMgdXNpbmcgRUIgZm9yIGRlcGxveWluZywgUzMgZm9yIHN0b3JpbmcgaW1hZ2UgZmlsZXMgYW5kIFJEUyBhcyBhXG4gICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZSBwcm92aWRlci5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+RnVuY3Rpb25hbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5Vc2VycyBhcmUgYWJsZSB0bzo8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkNyZWF0ZSBhIG5ldyBhY2NvdW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+TG9naW4gaW50byBleGlzdGluZyBhY2NvdW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIHByb2ZpbGUgaW1hZ2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb2RpZnkgcGVyc29uYWwgZGF0YTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwaG90byB3aXRoIGEgc2hvcnQgdGl0bGUsIGRlc2NyaXB0aW9uIGFuZCBzZWxlY3RpbmcgYSBjYXRlZ29yeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkV4cGxvcmUgcGhvdG9zIHVwbG9hZGVkIGJ5IG90aGVyIHVzZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U29ydCBwaG90b3MgYnkgY2F0ZWdvcnk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZGQgb3IgcmVtb3ZlIHBob3RvcyB0byBvciBmcm9tIGNvbGxlY3Rpb24gb2YgZmF2b3JpdGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tbWVudCBwaG90b3MgYW5kIGV4cGxvcmUgY29tbWVudHMgbWFkZSBieSBvdGhlciB1c2VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlNlYXJjaCBmb3IgY2F0ZWdvcmllcyBvciBvdGhlciB1c2VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5UZWNobmljYWwgU2hlZXQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDU+VGVjaG5vbG9naWVzIEkgZ290IGludm9sdmVkIHdpdGggd2hpbGUgd29ya2luZyBvbiB0aGlzIHByb2plY3QuPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5KYXZhIDg8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5TcHJpbmcgRnJhbWV3b3JrIC0gU2VjdXJpdHksIE1WQywgRGF0YTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPk15U1FMPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+QW1hem9uIFdlYiBTZXJ2aWNlcyAtIEVCLCBTMywgUkRTPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+b0F1dGggMi4wPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+SFRNTDUgLyBDU1MzIC8gSmF2YXNjcmlwdCBFUzY8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VSS9VWCBBcmNoaXRlY3R1cmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VSS9VWCBBbmltYXRpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VnVlLmpzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+Qm9vdHN0cmFwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1vdXRsaW5lZCBoYXMtdGV4dC13ZWlnaHQtYm9sZCBpcy1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Db2xsYXBzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIk1vcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAud3JhcHBlci1wcm9qZWN0MiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNlNjdlMjIpLCB0bygjZTc0YzNjKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNlNjdlMjIsICNlNzRjM2MpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2U2N2UyMiwgI2U3NGMzYyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U2N2UyMiwgI2U3NGMzYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud3JhcHBlci1wcm9qZWN0MyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMzI1MjY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDE0MzQ1LCAjMjMyNTI2KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQxNDM0NSwgIzIzMjUyNik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTE1MnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQtY29sbGFwc2Uge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDMwMG1zIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgLnN0aWNreS10aXRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxODVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGlja3ktaXRlbSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9jdG9jYXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgYm90dG9tOjFyZW07XG4gICAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9jdG9jYXQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9naXRodWIucG5nJyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB3aWR0aDo0NXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6NDVweDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vY3RvY2F0OmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvb2N0b2NhdC5wbmcnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAzcmVtIDFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Projects.jsx */",
        __self: this
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/SlideshowGallery.jsx":
/*!*****************************************!*\
  !*** ./components/SlideshowGallery.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var SlideshowGallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SlideshowGallery, _React$Component);

  function SlideshowGallery(props) {
    var _this;

    _classCallCheck(this, SlideshowGallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlideshowGallery).call(this, props));
    _this.state = {
      slideIndex: 0
    };
    _this.plusSlides = _this.plusSlides.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.currentSlide = _this.currentSlide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createSlides = _this.createSlides.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createPreviews = _this.createPreviews.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SlideshowGallery, [{
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
        slides.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          key: i,
          className: "jsx-1002946049" + " " + "fade ".concat(slideIndex === i ? 'swing-out-top-bck' : 'nonactive'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "jsx-1002946049" + " " + "numbertext has-background-white has-text-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, i + 1, "\xA0/ 6"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-1002946049" + " " + "image is-3by2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          alt: "slide-".concat(i + 1),
          className: "jsx-1002946049",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "1002946049",
          css: ".active.jsx-1002946049{display:block;}.nonactive.jsx-1002946049{display:none;}.numbertext.jsx-1002946049{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;z-index:30;bottom:-30px;right:-30px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.swing-out-top-bck.jsx-1002946049{-webkit-animation:swing-out-top-bck 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;-webkit-animation:swing-out-top-bck-jsx-1002946049 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;animation:swing-out-top-bck-jsx-1002946049 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;}@-webkit-keyframes swing-out-top-bck{0%.jsx-1002946049{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%.jsx-1002946049{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@-webkit-keyframes swing-out-top-bck-jsx-1002946049{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@keyframes swing-out-top-bck-jsx-1002946049{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENhLEFBR2dDLEFBR0EsQUFHRixBQVdzRixBQUsvRCxBQU9HLEFBU0gsQUFPRyxXQXRDdEIsRUFIbkIsQ0FIQSxZQU9zQixNQWVnQixBQWdCQSxHQVRHLEFBZ0JBLFVBckNwQixpQkFDQyxrQkFDUCxXQUNFLEdBTW9GLFVBTHJGLFlBQ29CLEFBVUQsQUFnQkEsWUFUQSxBQWdCQSxpQkF0QkEsQUFnQkEsWUFUQSxBQWdCQSwrREF0Qm5CLEFBZ0JBLENBM0JoQixTQVlJLEFBZ0JBLEVBVlksQUFnQkEsVUFmWixBQWdCQSw4REEvQkYiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gNSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogNSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNsaWRlSW5kZXg6IHByZXZTdGF0ZS5zbGlkZUluZGV4ICsgbixcbiAgICB9KSk7XG4gIH1cblxuICBjdXJyZW50U2xpZGUobikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBuIH0pO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVzKCkge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaSA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLWJhY2tncm91bmQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByZXZpZXdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByZXZpZXdzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpID8gJ3ByZXZpZXctYWN0aXZlJyA6ICdwcmV2aWV3LWluYWN0aXZlJ31cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaV19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3VycmVudFNsaWRlKGkpfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgYWx0PXtgcHJldmlldy0ke2l9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5wcmV2aWV3LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezE1MDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy0xIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxGYWRlIGRlbGF5PXsxNzAwfT5cbiAgICAgICAgICAgIHsvKiBQUkVWSU9VUyBCVVRUT04gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYgYnV0dG9uIGlzLWJsYWNrIGlzLW91dGxpbmVkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygtMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHsvKiBORVhUIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dCBidXR0b24gaXMtYmxhY2sgaXMtb3V0bGluZWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKDEpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBGYWRpbmcgYW5pbWF0aW9uICovXG4gICAgICAgICAgICAuZmFkZSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAtNHJlbTtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6MTU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldixcbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAucHJldjpob3ZlcixcbiAgICAgICAgICAgIC5uZXh0OmhvdmVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0LCAucHJldiwgLm5leHQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3dHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
          __self: this
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
        previews.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          key: i,
          className: "jsx-1658636724" + " " + "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-1658636724" + " " + "image is-3by2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          onClick: function onClick() {
            return _this2.currentSlide(i);
          },
          role: "presentation",
          alt: "preview-".concat(i),
          className: "jsx-1658636724" + " " + ((slideIndex === i ? 'preview-active' : 'preview-inactive') || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "1658636724",
          css: ".preview-active.jsx-1658636724{cursor:pointer;}.preview-inactive.jsx-1658636724{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}.preview-inactive.jsx-1658636724:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}.column.jsx-1658636724{padding:0.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkhhLEFBR2tDLEFBR0osQUFNaUIsQUFLWixXQVZZLElBSGhDLENBY0EsWUFMd0IsV0FMQSxxQ0FNUixVQUNoQixDQU5tQixlQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NsaWRlc2hvd0dhbGxlcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jbGFzcyBTbGlkZXNob3dHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2xpZGVJbmRleDogMCB9O1xuICAgIHRoaXMucGx1c1NsaWRlcyA9IHRoaXMucGx1c1NsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsdXNTbGlkZXMobikge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2xpZGVJbmRleCArIG4gPiA1KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGlmIChzbGlkZUluZGV4ICsgbiA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiA1IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2xpZGVJbmRleDogcHJldlN0YXRlLnNsaWRlSW5kZXggKyBuLFxuICAgIH0pKTtcbiAgfVxuXG4gIGN1cnJlbnRTbGlkZShuKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IG4gfSk7XG4gIH1cblxuICBjcmVhdGVTbGlkZXMoKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzbGlkZXMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YGZhZGUgJHtzbGlkZUluZGV4ID09PSBpID8gJ3N3aW5nLW91dC10b3AtYmNrJyA6ICdub25hY3RpdmUnfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVydGV4dCBoYXMtYmFja2dyb3VuZC13aGl0ZSBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgJm5ic3A7LyA2XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VzW2ldfSBhbHQ9e2BzbGlkZS0ke2kgKyAxfWB9IC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubm9uYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm51bWJlcnRleHQge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDMwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzbGlkZXM7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3cygpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJldmlld3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcHJldmlld3MucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlSW5kZXggPT09IGkgPyAncHJldmlldy1hY3RpdmUnIDogJ3ByZXZpZXctaW5hY3RpdmUnfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jdXJyZW50U2xpZGUoaSl9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBhbHQ9e2BwcmV2aWV3LSR7aX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLnByZXZpZXctYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBwcmV2aWV3cztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcygpO1xuICAgIGNvbnN0IHByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIFNMSURFUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEuNXJlbScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBTTElERSBQUkVWSUVXIElURU1TICovfVxuICAgICAgICA8RmFkZSBkZWxheT17MTUwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezE3MDB9PlxuICAgICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldiBidXR0b24gaXMtYmxhY2sgaXMtb3V0bGluZWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvbiBpcy1ibGFjayBpcy1vdXRsaW5lZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC00cmVtO1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
          __self: this
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
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2052273057" + " " + "gallery-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          marginBottom: '1.5rem'
        },
        className: "jsx-2052273057" + " " + "columns is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          padding: 0
        },
        className: "jsx-2052273057" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, slides)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2052273057" + " " + "columns is-variable is-1 is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, previews)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2052273057" + " " + "buttons-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1700,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(-1);
        },
        className: "jsx-2052273057" + " " + "prev button is-black is-outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2052273057" + " " + "fas fa-angle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(1);
        },
        className: "jsx-2052273057" + " " + "next button is-black is-outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2052273057" + " " + "fas fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2052273057",
        css: ".gallery-container.jsx-2052273057{position:relative;margin-top:10px;}.fade.jsx-2052273057{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-2052273057;animation-name:fade-jsx-2052273057;-webkit-animation-duration:1.5s;animation-duration:1.5s;}@-webkit-keyframes fade{from.jsx-2052273057{opacity:.4;}to.jsx-2052273057{opacity:1;}}@-webkit-keyframes fade-jsx-2052273057{from{opacity:.4;}to{opacity:1;}}@keyframes fade-jsx-2052273057{from{opacity:.4;}to{opacity:1;}}.buttons-container.jsx-2052273057{position:absolute;bottom:-4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.prev.jsx-2052273057,.next.jsx-2052273057{cursor:pointer;color:white;font-weight:bold;opacity:.7;}.prev.jsx-2052273057{margin-right:.7rem;}.prev.jsx-2052273057:hover,.next.jsx-2052273057:hover{opacity:.8;cursor:pointer;}@media screen and (max-width:769px){.numbertext.jsx-2052273057,.prev.jsx-2052273057,.next.jsx-2052273057{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUxXLEFBR21DLEFBS1EsQUFNYixBQUNILEFBR0csQUFDSCxBQUdNLEFBV0gsQUFNSSxBQUtSLEFBS0csVUFsQ0QsQUFJQSxDQUxHLEFBSUEsQUEyQkQsRUFLZixFQWhCWSxHQTlCTSxBQW1CTCxDQWlCZixPQU1BLENBWG1CLENBMUJlLEdBZWYsR0FuQm5CLFVBK0JhLFdBQ2IsS0EzQnNCLHdEQWVLLHNCQWRELEdBZWQsV0FDRCxTQUMrQixpQ0FoQjFDLE1BaUJrQyx5R0FDbEMiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gNSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogNSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNsaWRlSW5kZXg6IHByZXZTdGF0ZS5zbGlkZUluZGV4ICsgbixcbiAgICB9KSk7XG4gIH1cblxuICBjdXJyZW50U2xpZGUobikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBuIH0pO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVzKCkge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaSA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLWJhY2tncm91bmQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByZXZpZXdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByZXZpZXdzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpID8gJ3ByZXZpZXctYWN0aXZlJyA6ICdwcmV2aWV3LWluYWN0aXZlJ31cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaV19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3VycmVudFNsaWRlKGkpfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgYWx0PXtgcHJldmlldy0ke2l9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5wcmV2aWV3LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezE1MDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy0xIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxGYWRlIGRlbGF5PXsxNzAwfT5cbiAgICAgICAgICAgIHsvKiBQUkVWSU9VUyBCVVRUT04gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYgYnV0dG9uIGlzLWJsYWNrIGlzLW91dGxpbmVkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygtMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHsvKiBORVhUIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dCBidXR0b24gaXMtYmxhY2sgaXMtb3V0bGluZWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKDEpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBGYWRpbmcgYW5pbWF0aW9uICovXG4gICAgICAgICAgICAuZmFkZSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAtNHJlbTtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6MTU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldixcbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAucHJldjpob3ZlcixcbiAgICAgICAgICAgIC5uZXh0OmhvdmVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0LCAucHJldiwgLm5leHQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3dHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
        __self: this
      }));
    }
  }]);

  return SlideshowGallery;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SlideshowGallery);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.jsx");
/* harmony import */ var _components_Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Info */ "./components/Info.jsx");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.jsx");
var _jsxFileName = "/Users/ivan/Desktop/portfolio/pages/index.jsx";






var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Info__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map