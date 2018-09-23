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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Footer.jsx";


var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer has-background-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Built with BULMA, REACT.JS and NEXT.JS")));
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
    className: "jsx-2264016803" + " " + "hero is-bold is-fullheight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2264016803" + " " + "hero-head",
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
    className: "jsx-2264016803" + " " + "bird-container bird-container--one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2264016803" + " " + "bird  bird--one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2264016803" + " " + "bird-container bird-container--two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2264016803" + " " + "bird  bird--two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2264016803" + " " + "hero-content has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
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
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
    style: {
      margin: '0 auto'
    },
    className: "jsx-2264016803" + " " + "image is-128x128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/me.jpg",
    alt: "myself",
    className: "jsx-2264016803",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2264016803" + " " + "title box-effect is-size-1 has-text-weight-bold has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Ivan Shyrai")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2264016803" + " " + "subtitle has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Java Software Developer"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2264016803",
    css: ".hero.jsx-2264016803{background:url(\"../static/barcelona-1.jpg\") center bottom;background-size:cover;display:block;}.hero-content.jsx-2264016803{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.image.jsx-2264016803{box-shadow:0 3rem 3rem -1rem rgba(10,10,10,.2);}.image.jsx-2264016803 img.jsx-2264016803{border-radius:50%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.image.jsx-2264016803 img.jsx-2264016803:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}.box-effect.jsx-2264016803:after,.box-effect.jsx-2264016803:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}.box-effect.jsx-2264016803:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}.box-effect.jsx-2264016803:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.box-effect.jsx-2264016803:hover.jsx-2264016803:after,.box-effect.jsx-2264016803:hover.jsx-2264016803:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.bird.jsx-2264016803{background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');background-size:auto 100%;width:88px;height:125px;will-change:background-position;-webkit-animation-name:fly-cycle-jsx-2264016803;animation-name:fly-cycle-jsx-2264016803;-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird--one.jsx-2264016803{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird--two.jsx-2264016803{-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}.bird-container.jsx-2264016803{position:absolute;top:20%;left:-10%;-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);will-change:transform;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird-container--one.jsx-2264016803{-webkit-animation-name:fly-right-one-jsx-2264016803;animation-name:fly-right-one-jsx-2264016803;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;animation-delay:0;}.bird-container--two.jsx-2264016803{-webkit-animation-name:fly-right-two-jsx-2264016803;animation-name:fly-right-two-jsx-2264016803;-webkit-animation-duration:17s;animation-duration:17s;-webkit-animation-delay:.5s;animation-delay:.5s;}@-webkit-keyframes fly-cycle-jsx-2264016803{100%{background-position:-900px 0;}}@keyframes fly-cycle-jsx-2264016803{100%{background-position:-900px 0;}}@-webkit-keyframes fly-right-one-jsx-2264016803{0%{-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@keyframes fly-right-one-jsx-2264016803{0%{-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-two-jsx-2264016803{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@keyframes fly-right-two-jsx-2264016803{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RPLEFBcUJxRSxBQUt6QyxBQU02QixBQUc1QixBQUtHLEFBVWxCLEFBYVcsQUFPRSxBQVFkLEFBTXlGLEFBVXJFLEFBSUUsQUFJTixBQVVXLEFBS0EsQUFNRSxBQUtVLEFBSWUsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlDLEFBSUEsQUFLQyxBQUlGLEFBSUMsQUFJQSxBQUlFLEFBSUYsQUFJQyxBQUlBLFVBOUd2QyxDQTVCVCxPQXhCRCxBQVNzQixBQW1FdkIsSUF2Q08sRUFPRixFQWlDSCxDQTVFRixFQXdCVCxBQXdFQyxNQS9GZ0MsQ0F3Qm5CLEFBb0R3QixDQXpCMUIsUUFmVSxBQU9BLEVBdkN2QixLQThEd0IsSUFJQyxDQTdDcEIsQ0FoQ21CLFVBaUNuQixNQVdVLEFBT0EsQ0FoQ2EsSUFlbEIsQ0FqQ0ssUUFjZixHQWdENEIsR0E3RDVCLENBaUNJLENBd0R1QixBQUtGLFFBdEJ6QixDQXRDb0QsQ0F1QjVELElBbUJRLE9BZGEsV0FDRSxDQTBDYixXQW5HRixDQTBEa0MsUUFyQjFDLEFBT0EsQ0F3QzhCLEFBS0EsU0FiRSxHQS9DWSxHQWpCakIsUUErQ1EsQ0E0Q3pCLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFpQkEsR0FiQSxBQUlBLEFBYUEsQUFJQSxBQVFBLEdBcEJBLEFBd0JBLEFBSUEsQ0FuRmlDLENBL0RsQixDQXNJZixXQS9EQSxHQXRFRixDQTJFRSx5REFabUMsTUFsQkMsZ0RBOUI5Qyx3QkFpRFEsUUFsQnFDLDhFQUNyQyIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0hlcm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuXG5jb25zdCBIZXJvID0gKCkgPT4gKFxuICA8UGFyYWxsYXhcbiAgICBjbGFzc05hbWU9XCJoZXJvLXBhcmFsbGF4XCJcbiAgICBvZmZzZXRZTWF4PXszMH1cbiAgICBvZmZzZXRZTWluPXstMzB9XG4gICAgc2xvd2VyU2Nyb2xsUmF0ZVxuICAgIHRhZz1cImZpZ3VyZVwiXG4gID5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvIGlzLWJvbGQgaXMtZnVsbGhlaWdodFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWhlYWRcIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLW9uZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQgIGJpcmQtLW9uZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLXR3b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQgIGJpcmQtLXR3b1wiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICBvZmZzZXRZTWF4PXszMH1cbiAgICAgICAgICBvZmZzZXRZTWluPXstMzB9XG4gICAgICAgICAgc2xvd2VyU2Nyb2xsUmF0ZT17ZmFsc2V9XG4gICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGYWRlIGRlbGF5PXs4MDB9PlxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0xMjh4MTI4XCIgc3R5bGU9e3sgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvbWUuanBnXCIgYWx0PVwibXlzZWxmXCIgLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICBvZmZzZXRZTWF4PXsyMH1cbiAgICAgICAgICBvZmZzZXRZTWluPXstMjB9XG4gICAgICAgICAgc2xvd2VyU2Nyb2xsUmF0ZT17ZmFsc2V9XG4gICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGYWRlIGRlbGF5PXsxMjAwfT5cblxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGJveC1lZmZlY3QgaXMtc2l6ZS0xIGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIEl2YW4gU2h5cmFpXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8RmFkZSBkZWxheT17MTYwMH0+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBoYXMtdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBKYXZhIFNvZnR3YXJlIERldmVsb3BlclxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9iYXJjZWxvbmEtMS5qcGdcIikgY2VudGVyIGJvdHRvbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8tY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgYm94LXNoYWRvdzowIDNyZW0gM3JlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2UgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgLmltYWdlIGltZzpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbi8qZWZmZWN0LWJveCovXG4uYm94LWVmZmVjdDphZnRlcixcbi5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbi5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLDApO1xufVxuXG4uYm94LWVmZmVjdDphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLDEpO1xufVxuXG4uYm94LWVmZmVjdDpob3ZlcjphZnRlcixcbi5ib3gtZWZmZWN0OmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuICAgICAgICAuYmlyZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNzQ0NzkvYmlyZC1jZWxscy5zdmcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICAgICAgICB3aWR0aDogODhweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLXBvc2l0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5iaXJkLS1vbmUge1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC0tdHdvIHtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43NXM7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgbGVmdDogLTEwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgICAuYmlyZC1jb250YWluZXItLW9uZSB7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC1vbmU7XG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJpcmQtY29udGFpbmVyLS10d28ge1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtdHdvO1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xuICAgICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBmbHktY3ljbGUge1xuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZseS1yaWdodC1vbmUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBmbHktcmlnaHQtdHdvIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUGFyYWxsYXg+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Hero.jsx */",
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
      className: "jsx-1410801488" + " " + "level-item has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1410801488",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginBottom: 0
      },
      className: "jsx-1410801488" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      style: {
        margin: 'auto auto 8px auto'
      },
      className: "jsx-1410801488" + " " + "image is-32x32 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: logos[i],
      alt: "".concat(headings[i], "-logo"),
      className: "jsx-1410801488",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1410801488" + " " + "heading has-text-weight-bold has-text-white-ter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, headings[i])), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "1410801488",
      css: ".heading.jsx-1410801488{font-size:.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JXLEFBMkY2QixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9JbmZvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNvbnN0IFNraWxsSXRlbXMgPSAoeyBsb2dvcywgaGVhZGluZ3MgfSkgPT4ge1xuICBjb25zdCBpdGVtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZ29zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaXRlbXMucHVzaChcbiAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMzJ4MzIgXCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0byBhdXRvIDhweCBhdXRvJyB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29zW2ldfSBhbHQ9e2Ake2hlYWRpbmdzW2ldfS1sb2dvYH0gLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRpbmcgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtd2hpdGUtdGVyXCI+e2hlYWRpbmdzW2ldfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAuaGVhZGluZyB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+LFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxLjJyZW0gMCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSknLCBib3JkZXJUb3A6ICcxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpJyB9fT5cbiAgICAgIHtpdGVtc31cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cblxuY29uc3QgSW5mbyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBoYXMtYmFja2dyb3VuZC1ibGFja1wiPlxuICAgIDxQYXJhbGxheFxuICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgIG9mZnNldFlNYXg9ezMwfVxuICAgICAgb2Zmc2V0WU1pbj17LTMwfVxuICAgICAgc2xvd2VyU2Nyb2xsUmF0ZT17ZmFsc2V9XG4gICAgICB0YWc9XCJmaWd1cmVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1haW4tY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZCBoYXMtc2hhZG93XCI+XG4gICAgICAgIDxGYWRlIGRlbGF5PXs1MDB9IGNhc2NhZGU+XG4gICAgICAgICAgey8qIHJvdyBtYWluIGRlc2NyaXB0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtcm93XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS0zIGhhcy10ZXh0LXdoaXRlLXRlciBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPkFib3V0PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnQgXCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgICBPcmFjbGUgQ2VydGlmaWVkIEphdmEgRGV2ZWxvcGVyIHNwZWNpYWxpc2VkIGluXG4gICAgICAgICAgICAgICAgIGZyb250LWVuZCBhbmQgYmFjay1lbmQgZGV2ZWxvcG1lbnQuXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZS10ZXJcIj5BdmFpbGFibGUgZm9yIGhpcmUgYW5kIG9wZW4gdG8gYW55IGlkZWFzIG9mIGNvb3BlcmF0aW9uLjwvaDY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiByb3cgZmlyc3QgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICBIVE1MIC8gQ1NTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1nYXBsZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcblxuICAgICAgICAgICAgICAgICAgJ2pzeCcsXG4gICAgICAgICAgICAgICAgICAndWkgZGVzaWduJyxcbiAgICAgICAgICAgICAgICAgICdtYXRlcmlhbGl6ZScsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBsb2dvcz17W1xuXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3JlYWN0LnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3VpLnBuZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL21hdGVyaWFsaXplLnBuZycsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICAgICdidWxtYScsXG4gICAgICAgICAgICAgICAgICAnc2FzcycsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9ib290c3RyYXAuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYnVsbWEucG5nJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3Mvc2Fzcy5zdmcnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgey8qIHJvdyBzZWNvbmQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2tpbGxzLWNvbC10aXRsZSBoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgICBCQUNLLUVORFxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAnamF2YScsXG4gICAgICAgICAgICAgICAgICAnc3ByaW5nJyxcbiAgICAgICAgICAgICAgICAgICdteXNxbCcsXG4gICAgICAgICAgICAgICAgICAnaGliZXJuYXRlJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2phdmEuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3Mvc3ByaW5nLnBuZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL215c3FsLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2hpYmVybmF0ZS5wbmcnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxscy1jb2wtdGl0bGUgaGFzLXRleHQtd2hpdGUtdGVyXCI+XG4gICAgICAgICAgICAgICAgSkFWQVNDUklQVFxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG5cbiAgICAgICAgICAgICAgICAgICdyZWFjdCcsXG4gICAgICAgICAgICAgICAgICAnbmV4dCcsXG4gICAgICAgICAgICAgICAgICAndnVlJyxcbiAgICAgICAgICAgICAgICAgICdqcXVlcnknLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcblxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9yZWFjdC5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9uZXh0LnBuZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3Z1ZWpzLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2pxdWVyeS5zdmcnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiByb3cgdGhpcmQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICBPVEhFUlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1nYXBsZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAgICdnaXQnLFxuICAgICAgICAgICAgICAgICAgJ2F3cycsXG4gICAgICAgICAgICAgICAgICAnaGVyb2t1JyxcblxuXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9naXRodWIucG5nJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYW1hem9ud2Vic2VydmljZXMuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvaGVyb2t1LnN2ZycsXG5cblxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuXG4gICAgICAgICAgICAgICAgICAnaW50ZWxsaWonLFxuICAgICAgICAgICAgICAgICAgJ3Bob3Rvc2hvcCcsXG4gICAgICAgICAgICAgICAgICAnaWxsdXN0cmF0b3InLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcblxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9pbnRlbGxpai5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9waG90b3Nob3Auc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvaWxsdXN0cmF0b3Iuc3ZnJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9QYXJhbGxheD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDNyZW0gM3JlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLXJvdyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgLjhyZW0gLjhyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNraWxscy1jb2wtdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC40cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW5zIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VjdGlvbiAuY29sdW1uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyLjVyZW0gMCAwLjFyZW0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLXJvdyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xuICAgICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuZXhwb3J0IGRlZmF1bHQgSW5mbztcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Info.jsx */",
      __self: this
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "level is-mobile",
    style: {
      padding: '1.2rem 0',
      borderBottom: '1px solid hsl(0, 0%, 86%)',
      borderTop: '1px solid hsl(0, 0%, 86%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, items);
};

var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3188856074" + " " + "section has-background-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    className: "custom-class",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: false,
    tag: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "container main-content has-text-centered has-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    delay: 500,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "title-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3188856074" + " " + "is-size-3 has-text-white-ter has-text-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "column content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3188856074" + " " + "has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Oracle Certified Java Developer specialised in front-end and back-end development."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3188856074" + " " + "has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Available for hire and open to any ideas of cooperation."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3188856074" + " " + "column has-text-weight-bold has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "HTML / CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "columns is-gapless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['jsx', 'ui design', 'materialize'],
    logos: ['../static/logos/react.svg', '../static/logos/ui.png', '../static/logos/materialize.png'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['bootstrap', 'bulma', 'sass'],
    logos: ['../static/logos/bootstrap.svg', '../static/logos/bulma.png', '../static/logos/sass.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3188856074" + " " + "skills-col-title has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "BACK-END"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['java', 'spring', 'mysql', 'hibernate'],
    logos: ['../static/logos/java.svg', '../static/logos/spring.png', '../static/logos/mysql.svg', '../static/logos/hibernate.png'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3188856074" + " " + "skills-col-title has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "JAVASCRIPT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['react', 'next', 'vue', 'jquery'],
    logos: ['../static/logos/react.svg', '../static/logos/next.png', '../static/logos/vuejs.svg', '../static/logos/jquery.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3188856074" + " " + "column has-text-weight-bold has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "OTHER")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "columns is-gapless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['git', 'aws', 'heroku'],
    logos: ['../static/logos/github.png', '../static/logos/amazonwebservices.svg', '../static/logos/heroku.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3188856074" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['intellij', 'photoshop', 'illustrator'],
    logos: ['../static/logos/intellij.svg', '../static/logos/photoshop.svg', '../static/logos/illustrator.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3188856074",
    css: ".section.jsx-3188856074{display:block;}.main-content.jsx-3188856074{box-shadow:0 3rem 3rem -1rem rgba(10,10,10,.2);padding:4rem;position:relative;z-index:10;margin-bottom:5rem;}.title-row.jsx-3188856074{box-shadow:0 .8rem .8rem -1rem rgba(10,10,10,.2);margin-top:-6rem;padding:1rem;}.skills-col-title.jsx-3188856074{margin-bottom:.4rem;font-weight:bold;font-size:1rem;}.column.jsx-3188856074{margin-top:3rem;}.columns.jsx-3188856074{margin-bottom:0;}@media screen and (max-width:769px){.section.jsx-3188856074{padding:1rem .25rem;}.section.jsx-3188856074 .column.jsx-3188856074{padding:0;margin:2.5rem 0 0.1rem 0;}.title-row.jsx-3188856074{margin-top:-3rem;}}@media screen and (max-width:1024px){.main-content.jsx-3188856074{padding:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa01PLEFBR3lCLEFBR2tDLEFBT0UsQUFLOUIsQUFLSixBQUdELEFBTVMsQUFJVixBQUlPLEFBTXBCLFVBVDRCLEdBUzNCLENBMUNKLEVBb0JBLEFBSUEsQ0FhRSxHQXRCaUIsQUFjakIsZUFLQSxFQWxCZSxVQWJBLEVBT0ksR0FPckIsUUFic0IsTUFPTCxZQU5GLENBT2YsVUFOdUIsbUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jb25zdCBTa2lsbEl0ZW1zID0gKHsgbG9nb3MsIGhlYWRpbmdzIH0pID0+IHtcbiAgY29uc3QgaXRlbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2dvcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGl0ZW1zLnB1c2goXG4gICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTMyeDMyIFwiIHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8gYXV0byA4cHggYXV0bycgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvc1tpXX0gYWx0PXtgJHtoZWFkaW5nc1tpXX0tbG9nb2B9IC8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkaW5nIGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LXdoaXRlLXRlclwiPntoZWFkaW5nc1tpXX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PixcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIiBzdHlsZT17eyBwYWRkaW5nOiAnMS4ycmVtIDAnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKScgfX0+XG4gICAgICB7aXRlbXN9XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5cbmNvbnN0IEluZm8gPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gaGFzLWJhY2tncm91bmQtYmxhY2tcIj5cbiAgICA8UGFyYWxsYXhcbiAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICBvZmZzZXRZTWF4PXszMH1cbiAgICAgIG9mZnNldFlNaW49ey0zMH1cbiAgICAgIHNsb3dlclNjcm9sbFJhdGU9e2ZhbHNlfVxuICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYWluLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWQgaGFzLXNoYWRvd1wiPlxuICAgICAgICA8RmFkZSBkZWxheT17NTAwfSBjYXNjYWRlPlxuICAgICAgICAgIHsvKiByb3cgbWFpbiBkZXNjcmlwdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXJvd1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtMyBoYXMtdGV4dC13aGl0ZS10ZXIgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5BYm91dDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50IFwiPlxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUtdGVyXCI+XG4gICAgICAgICAgICAgICAgT3JhY2xlIENlcnRpZmllZCBKYXZhIERldmVsb3BlciBzcGVjaWFsaXNlZCBpblxuICAgICAgICAgICAgICAgICBmcm9udC1lbmQgYW5kIGJhY2stZW5kIGRldmVsb3BtZW50LlxuICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUtdGVyXCI+QXZhaWxhYmxlIGZvciBoaXJlIGFuZCBvcGVuIHRvIGFueSBpZGVhcyBvZiBjb29wZXJhdGlvbi48L2g2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyogcm93IGZpcnN0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbHVtbiBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgSFRNTCAvIENTU1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtZ2FwbGVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG5cbiAgICAgICAgICAgICAgICAgICdqc3gnLFxuICAgICAgICAgICAgICAgICAgJ3VpIGRlc2lnbicsXG4gICAgICAgICAgICAgICAgICAnbWF0ZXJpYWxpemUnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcblxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9yZWFjdC5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy91aS5wbmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9tYXRlcmlhbGl6ZS5wbmcnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAgICAgICAgICAgICAnYnVsbWEnLFxuICAgICAgICAgICAgICAgICAgJ3Nhc3MnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYm9vdHN0cmFwLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2J1bG1hLnBuZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3Nhc3Muc3ZnJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIHsvKiByb3cgc2Vjb25kICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxscy1jb2wtdGl0bGUgaGFzLXRleHQtd2hpdGUtdGVyXCI+XG4gICAgICAgICAgICAgICAgQkFDSy1FTkRcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICAgJ2phdmEnLFxuICAgICAgICAgICAgICAgICAgJ3NwcmluZycsXG4gICAgICAgICAgICAgICAgICAnbXlzcWwnLFxuICAgICAgICAgICAgICAgICAgJ2hpYmVybmF0ZScsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9qYXZhLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3NwcmluZy5wbmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9teXNxbC5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9oaWJlcm5hdGUucG5nJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJza2lsbHMtY29sLXRpdGxlIGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICAgIEpBVkFTQ1JJUFRcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuXG4gICAgICAgICAgICAgICAgICAncmVhY3QnLFxuICAgICAgICAgICAgICAgICAgJ25leHQnLFxuICAgICAgICAgICAgICAgICAgJ3Z1ZScsXG4gICAgICAgICAgICAgICAgICAnanF1ZXJ5JyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGxvZ29zPXtbXG5cbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcmVhY3Quc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvbmV4dC5wbmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy92dWVqcy5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9qcXVlcnkuc3ZnJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyogcm93IHRoaXJkICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbHVtbiBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgT1RIRVJcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtZ2FwbGVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAnZ2l0JyxcbiAgICAgICAgICAgICAgICAgICdhd3MnLFxuICAgICAgICAgICAgICAgICAgJ2hlcm9rdScsXG5cblxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvZ2l0aHViLnBuZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2FtYXpvbndlYnNlcnZpY2VzLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2hlcm9rdS5zdmcnLFxuXG5cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcblxuICAgICAgICAgICAgICAgICAgJ2ludGVsbGlqJyxcbiAgICAgICAgICAgICAgICAgICdwaG90b3Nob3AnLFxuICAgICAgICAgICAgICAgICAgJ2lsbHVzdHJhdG9yJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGxvZ29zPXtbXG5cbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvaW50ZWxsaWouc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcGhvdG9zaG9wLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2lsbHVzdHJhdG9yLnN2ZycsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvUGFyYWxsYXg+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6MCAzcmVtIDNyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZS1yb3cge1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIC44cmVtIC44cmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTZyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbHMtY29sLXRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNHJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1ucyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xuXG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAuMjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlY3Rpb24gLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDAgMC4xcmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZS1yb3cge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcbiAgICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcbmV4cG9ydCBkZWZhdWx0IEluZm87XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Info.jsx */",
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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'; // document.body.style.backgroundColor = '#0a0a0a';
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-1649853579",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
        className: "jsx-1649853579",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        className: "jsx-1649853579",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Concert+One",
        rel: "stylesheet",
        className: "jsx-1649853579",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        defer: true,
        src: "https://use.fontawesome.com/releases/v5.1.0/js/all.js",
        className: "jsx-1649853579",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-1649853579",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Ivan Shyrai")), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1649853579",
        css: "body.jsx-1649853579{background-color:hsl(0,0,90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QlcsQUEyRjZDLDhCQUNoQyIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2hzbCgwLCAwJSwgOTAlKSc7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzBhMGEwYSc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcmFsbGF4UHJvdmlkZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjcuMS9jc3MvYnVsbWEubWluLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5yYXdnaXQuY29tL2tvbnBhL2Rldmljb24vZGY2NDMxZTMyMzU0N2FkZDFiNGNmNDU5OTI5MTNmMTUyODY0NTZkMy9kZXZpY29uLm1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q29uY2VydCtPbmVcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xLjAvanMvYWxsLmpzXCIgLz5cbiAgICAgICAgICA8dGl0bGU+SXZhbiBTaHlyYWk8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAsOTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Layout.jsx */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

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
    className: "jsx-4200177850" + " " + "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4200177850" + " " + "navbar-item ",
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
    className: "jsx-4200177850" + " " + "has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4200177850" + " " + "fab fa-facebook fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4200177850" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-4200177850" + " " + "has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4200177850" + " " + "fas fa-envelope fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4200177850" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-4200177850" + " " + "has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4200177850" + " " + "fab fa-linkedin fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4200177850" + " " + "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-4200177850" + " " + "has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4200177850" + " " + "fab fa-github fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4200177850",
    css: ".navbar.jsx-4200177850{display:block;left:auto;right:auto;text-align:center;background-color:#0a0a0a;min-height:auto;}.navbar-item.jsx-4200177850{display:inline-block;}.left-bar.jsx-4200177850{position:absolute;z-index:100;width:40px;top:0;bottom:0;background:#0a0a0a;}.right-bar.jsx-4200177850{position:absolute;z-index:100;width:40px;top:0;right:0;bottom:0;background:#0a0a0a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qk8sQUF3RHVCLEFBU08sQUFHRCxBQVNBLGNBcEJWLElBWUksQUFTQSxHQVpoQixHQVJhLE1BWUUsQUFTQSxLQXBCSSxNQVlULEFBU0EsTUFSRSxBQVNBLE1BckJlLEVBc0JmLENBVFcsUUFVQSxXQVJyQixHQWJnQixLQXVCaEIsV0F0QkEiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9OYXZiYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIhXCIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2sgZmEtbGdcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiIVwiIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlIGZhLWxnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiFcIiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBmYS1sZ1wiIC8+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIhXCIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViIGZhLWxnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAubmF2YmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTtcblxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAubmF2YmFyLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAgIC5sZWZ0LWJhciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgXG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LWJhciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgICAgXG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Navbar.jsx */",
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "hero-parallax",
        offsetYMax: 100,
        offsetYMin: -40,
        slowerScrollRate: true,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "container sticky-title hasba",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-101983528" + " " + "is-size-3 has-text-centered  has-text-black has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Projects"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "container-wrapper wrapper-project1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "!",
        className: "jsx-101983528" + " " + "octocat-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/github.svg",
        alt: "octocat",
        className: "jsx-101983528" + " " + "octocat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "columns is-variable is-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        delay: 800,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-101983528" + " " + "is-size-4 has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Photo IS"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("awesome-slider", {
        height: "x60%",
        bullets: "true",
        color: "grey",
        arrows: "true",
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        source: "../static/p/portal-1.jpg",
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        source: "../static/p/portal-2.jpg",
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        source: "../static/p/portal-3.jpg",
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/portal-1.jpg', '../static/p/portal-2.jpg', '../static/p/portal-3.jpg', '../static/p/portal-4.jpg', '../static/p/portal-5.jpg', '../static/p/portal-6.jpg'],
        color: "#0a0a0a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "About this project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Photo IS is a web application for sharing photos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Interface was built using Vue.js and Bootstrap libraries."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Communication with server is done through JSON format and REST API. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "content-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Functional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Users are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Login into existing account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Upload profile image"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Modify personal data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Upload photo with a short title, description and selecting a category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Explore photos uploaded by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Sort photos by category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Add or remove photos to or from collection of favorites"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Comment photos and explore comments made by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Search for categories or other users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Technical Sheet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Technologies I got involved with while working on this project."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Java 8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Spring Framework - Security, MVC, Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Amazon Web Services - EB, S3, RDS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "oAuth 2.0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "HTML5 / CSS3 / Javascript ES6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "UI/UX Architecture"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "UI/UX Animations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Vue.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Bootstrap"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-101983528" + " " + "button has-text-weight-bold is-black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "container-wrapper wrapper-project2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "columns is-variable is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-101983528" + " " + "is-size-4 has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Ebrofy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/ebro-1.jpg', '../static/p/ebro-2.jpg', '../static/p/ebro-3.png', '../static/p/ebro-4.png', '../static/p/ebro-5.png', '../static/p/ebro-6.jpg'],
        color: "#2c3e50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Ebrofy is a small web application for image pixelation and color depth processing."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Application build with Java and Spring Framework as back-end, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Front-end technologies are Vue.js and Bootstrap. Communication with server is done via JSON with REST API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Built on", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "k-means clustering algorithm")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Users of the applications are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Upload image to the website for further processing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Upload image to the website")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Technologies used:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Spring Framework"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "HTML5 / CSS3 /"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Heroku"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "container-wrapper wrapper-project3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + " container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "columns is-variable is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 79,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-101983528" + " " + "is-size-4 has-text-weight-bold has-text-grey-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Filter App")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/filterapp-1.jpg', '../static/p/filterapp-2.jpg', '../static/p/filterapp-3.jpg', '../static/p/filterapp-4.jpg', '../static/p/filterapp-5.jpeg', '../static/p/filterapp-6.jpg'],
        color: "hsl(0, 0%, 40%)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-101983528" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "FilterApp is a small web application for image processing."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Application build with Java and Spring Framework as back-end, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Front-end technologies are Vue.js and Bootstrap. Communication with server is done via JSON with REST API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Built on", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, " k-means clustering algorithm")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Users of the applications are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Upload image to the website for further processing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "Upload image to the website")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Technologies used:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Spring Framework"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "HTML5 / CSS3 /"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-101983528",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Heroku")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        rel: "noopener noreferrer",
        target: "_blank",
        href: "https://filterapp-shyrai.herokuapp.com",
        style: {
          backgroundColor: 'hsl(0, 0%, 40%)'
        },
        className: "jsx-101983528" + " " + "button is-rounded has-text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Visit website"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-101983528" + " " + "help has-text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "* Might take up to 30 seconds to run the server")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "101983528",
        css: ".wrapper-project2.jsx-101983528{background:-webkit-gradient(linear,left top,right top,from(#e67e22),to(#e74c3c));background:-webkit-linear-gradient(left,#e67e22,#e74c3c);background:-o-linear-gradient(left,#e67e22,#e74c3c);background:linear-gradient(to right,#e67e22,#e74c3c);}.wrapper-project3.jsx-101983528{background:#232526;background:-webkit-linear-gradient(to right,#414345,#232526);background:linear-gradient(to right,#414345,#232526);}.sticky-container.jsx-101983528{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;border:1px solid hsl(0,0%,86%);padding:2rem 4rem 5rem 4rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.content-collapse.jsx-101983528{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 1s ease-out;transition:max-height 1s ease-out;}.content.jsx-101983528{padding:2.5rem 0 0 0;}.sticky-title.jsx-101983528{padding:13px;top:-2rem;margin-bottom:-5rem;}.container-wrapper.jsx-101983528{padding-top:11rem;margin-bottom:-3rem;}.sticky-item.jsx-101983528{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-101983528{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-101983528{position:relative;z-index:10;width:45px;height:45px;}@media screen and (max-width:769px){.sticky-container.jsx-101983528{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThSVyxBQXNDa0csQUFNbEUsQUFLTixBQVFLLEFBTUcsQUFHUixBQUtLLEFBS00sQUFPUixBQU1ELEFBU2lCLGFBL0J0QixLQUtVLEFBWVgsQUFNQSxDQTdDc0QsQUFhbEQsRUFNakIsRUFJd0IsQ0FTSixJQXNCaEIsQ0FkUyxBQU1ELEdBaENRLE1BZXBCLEVBa0JhLENBTkEsRUFqQmIsS0FUc0MsSUEyQnRDLEFBTUEsWUFmYSxTQUNTLENBN0JLLE1BSmdDLENBUEksVUF5Q3BDLHVCQUMzQixVQXBCQSxTQWRBLEtBUDBELG1DQVcvQixpQkFWZ0MscURBQzNELHVDQVVxQywrQkFDTCw0QkFDa0IsK0NBQ2xEIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCBTbGlkZXNob3dHYWxsZXJ5IGZyb20gJy4vU2xpZGVzaG93R2FsbGVyeSc7XG5cbmNsYXNzIFByb2plY3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgey8qIDxQYXJhbGxheCBib3R0b20gZGVsYXk9ezgwMH0+ICovfVxuICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXBhcmFsbGF4XCJcbiAgICAgICAgICBvZmZzZXRZTWF4PXsxMDB9XG4gICAgICAgICAgb2Zmc2V0WU1pbj17LTQwfVxuICAgICAgICAgIHNsb3dlclNjcm9sbFJhdGVcbiAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LXRpdGxlIGhhc2JhXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS0zIGhhcy10ZXh0LWNlbnRlcmVkICBoYXMtdGV4dC1ibGFjayBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlByb2plY3RzPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYXJhbGxheD5cblxuICAgICAgICB7LyogUHJvamVjdCAxICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13cmFwcGVyIHdyYXBwZXItcHJvamVjdDFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzdGlja3ktY29udGFpbmVyIGhhcy1iYWNrZ3JvdW5kLXdoaXRlXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvY3RvY2F0LWNvbnRhaW5lclwiIGhyZWY9XCIhXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2dpdGh1Yi5zdmdcIiBjbGFzc05hbWU9XCJvY3RvY2F0XCIgYWx0PVwib2N0b2NhdFwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezgwMH0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWF4PXs4MH1cbiAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogPEZhZGUgZGVsYXk9ezE1MDB9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQaG90byBJU1xuICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDwvRmFkZT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICA8YXdlc29tZS1zbGlkZXIgaGVpZ2h0PVwieDYwJVwiIGJ1bGxldHM9XCJ0cnVlXCIgY29sb3I9XCJncmV5XCIgYXJyb3dzPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbSBzb3VyY2U9XCIuLi9zdGF0aWMvcC9wb3J0YWwtMS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbSBzb3VyY2U9XCIuLi9zdGF0aWMvcC9wb3J0YWwtMi5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbSBzb3VyY2U9XCIuLi9zdGF0aWMvcC9wb3J0YWwtMy5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hd2Vzb21lLXNsaWRlcj5cbiAgICAgICAgICAgICAgICAgIHsvKiA8RmFkZSBkZWxheT17ODAwfT4gKi99XG4gICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTIuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTMuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTQuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTUuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTYuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMGEwYTBhXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7LyogPC9GYWRlPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICA8aDM+QWJvdXQgdGhpcyBwcm9qZWN0PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoNT5QaG90byBJUyBpcyBhIHdlYiBhcHBsaWNhdGlvbiBmb3Igc2hhcmluZyBwaG90b3MuPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBidWlsdCB3aXRoIEphdmEgYW5kIFNwcmluZyBGcmFtZXdvcmsgYXMgYmFjay1lbmQgdGVjaG5vbG9naWVzLFxuICAgICAgICAgICAgICAgICAgICB3aXRoIE15U1FMIGRhdGFiYXNlIGZvciBrZWVwaW5nIHVzZXIgYWNjb3VudHMsIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+SW50ZXJmYWNlIHdhcyBidWlsdCB1c2luZyBWdWUuanMgYW5kIEJvb3RzdHJhcCBsaWJyYXJpZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+Q29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpcyBkb25lIHRocm91Z2ggSlNPTiBmb3JtYXQgYW5kIFJFU1QgQVBJLiA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gbGl2ZXMgb24gQW1hem9uIFdlYiBTZXJ2aWNlcyBhbmRcbiAgICAgICAgICAgICAgICAgICAgIGlzIHVzaW5nIEVCIGZvciBkZXBsb3lpbmcsIFMzIGZvciBzdG9yaW5nIGltYWdlIGZpbGVzIGFuZCBSRFMgYXMgYVxuICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UgcHJvdmlkZXIuXG4gICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+RnVuY3Rpb25hbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5Vc2VycyBhcmUgYWJsZSB0bzo8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkNyZWF0ZSBhIG5ldyBhY2NvdW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+TG9naW4gaW50byBleGlzdGluZyBhY2NvdW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIHByb2ZpbGUgaW1hZ2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb2RpZnkgcGVyc29uYWwgZGF0YTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwaG90byB3aXRoIGEgc2hvcnQgdGl0bGUsIGRlc2NyaXB0aW9uIGFuZCBzZWxlY3RpbmcgYSBjYXRlZ29yeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkV4cGxvcmUgcGhvdG9zIHVwbG9hZGVkIGJ5IG90aGVyIHVzZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U29ydCBwaG90b3MgYnkgY2F0ZWdvcnk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZGQgb3IgcmVtb3ZlIHBob3RvcyB0byBvciBmcm9tIGNvbGxlY3Rpb24gb2YgZmF2b3JpdGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tbWVudCBwaG90b3MgYW5kIGV4cGxvcmUgY29tbWVudHMgbWFkZSBieSBvdGhlciB1c2VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlNlYXJjaCBmb3IgY2F0ZWdvcmllcyBvciBvdGhlciB1c2VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlRlY2huaWNhbCBTaGVldDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5UZWNobm9sb2dpZXMgSSBnb3QgaW52b2x2ZWQgd2l0aCB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC48L2g1PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmEgODwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcmsgLSBTZWN1cml0eSwgTVZDLCBEYXRhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbWF6b24gV2ViIFNlcnZpY2VzIC0gRUIsIFMzLCBSRFM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5vQXV0aCAyLjA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLyBKYXZhc2NyaXB0IEVTNjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFyY2hpdGVjdHVyZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFuaW1hdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5WdWUuanM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyAvKiBQUk9KRUNUIDIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXIgd3JhcHBlci1wcm9qZWN0MlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgey8qIDxGYWRlIGRlbGF5PXsxNTAwfT4gKi99XG4gICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBFYnJvZnlcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICB7LyogPEZhZGUgZGVsYXk9ezgwMH0+ICovfVxuICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTIuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby0zLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tNC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTUucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby02LmpwZycsXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzJjM2U1MFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgey8qIDwvRmFkZT4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICBFYnJvZnkgaXMgYSBzbWFsbCB3ZWIgYXBwbGljYXRpb24gZm9yXG4gICAgICAgICAgICAgICAgICAgIGltYWdlIHBpeGVsYXRpb24gYW5kIGNvbG9yIGRlcHRoIHByb2Nlc3NpbmcuXG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGJ1aWxkIHdpdGggSmF2YSBhbmQgU3ByaW5nIEZyYW1ld29yayBhcyBiYWNrLWVuZCxcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLCBwaG90b3MsIGNvbW1lbnRzIGFuZCBvdGhlciBzdHVmZi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBGcm9udC1lbmQgdGVjaG5vbG9naWVzIGFyZSBWdWUuanMgYW5kIEJvb3RzdHJhcC5cbiAgICAgICAgICAgICAgICAgICAgIENvbW11bmljYXRpb24gd2l0aCBzZXJ2ZXIgaXMgZG9uZSB2aWEgSlNPTiB3aXRoIFJFU1QgQVBJLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEJ1aWx0IG9uXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LLW1lYW5zX2NsdXN0ZXJpbmdcIj5rLW1lYW5zIGNsdXN0ZXJpbmcgYWxnb3JpdGhtPC9hPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGg2PlVzZXJzIG9mIHRoZSBhcHBsaWNhdGlvbnMgYXJlIGFibGUgdG86PC9oNj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBpbWFnZSB0byB0aGUgd2Vic2l0ZSBmb3IgZnVydGhlciBwcm9jZXNzaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBpbWFnZSB0byB0aGUgd2Vic2l0ZTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGg0PlRlY2hub2xvZ2llcyB1c2VkOjwvaDQ+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5KYXZhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcms8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SFRNTDUgLyBDU1MzIC88L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UmVhY3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SGVyb2t1PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7IC8qIFBST0pFQ1QgMyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlciB3cmFwcGVyLXByb2plY3QzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezc5fVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgQXBwXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgey8qIDxGYWRlIGRlbGF5PXs4MDB9PiAqL31cbiAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtMi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtMy5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtNC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtNS5qcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZmlsdGVyYXBwLTYuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJoc2woMCwgMCUsIDQwJSlcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiA8L0ZhZGU+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgIDxoND5GaWx0ZXJBcHAgaXMgYSBzbWFsbCB3ZWIgYXBwbGljYXRpb24gZm9yIGltYWdlIHByb2Nlc3NpbmcuPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBidWlsZCB3aXRoIEphdmEgYW5kIFNwcmluZyBGcmFtZXdvcmsgYXMgYmFjay1lbmQsXG4gICAgICAgICAgICAgICAgICAgIHdpdGggTXlTUUwgZGF0YWJhc2UgZm9yIGtlZXBpbmcgdXNlciBhY2NvdW50cywgcGhvdG9zLCBjb21tZW50cyBhbmQgb3RoZXIgc3R1ZmYuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgRnJvbnQtZW5kIHRlY2hub2xvZ2llcyBhcmUgVnVlLmpzIGFuZCBCb290c3RyYXAuIENvbW11bmljYXRpb24gd2l0aCBzZXJ2ZXIgaXNcbiAgICAgICAgICAgICAgICAgICAgIGRvbmUgdmlhIEpTT04gd2l0aCBSRVNUIEFQSS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBCdWlsdCBvblxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSy1tZWFuc19jbHVzdGVyaW5nXCI+IGstbWVhbnMgY2x1c3RlcmluZyBhbGdvcml0aG08L2E+XG4gICAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgICAgPGg2PlVzZXJzIG9mIHRoZSBhcHBsaWNhdGlvbnMgYXJlIGFibGUgdG86PC9oNj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBpbWFnZSB0byB0aGUgd2Vic2l0ZSBmb3IgZnVydGhlciBwcm9jZXNzaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBpbWFnZSB0byB0aGUgd2Vic2l0ZTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGgzPlRlY2hub2xvZ2llcyB1c2VkOjwvaDM+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5KYXZhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcms8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SFRNTDUgLyBDU1MzIC88L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UmVhY3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SGVyb2t1PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtcm91bmRlZCBoYXMtdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9maWx0ZXJhcHAtc2h5cmFpLmhlcm9rdWFwcC5jb21cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdoc2woMCwgMCUsIDQwJSknIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFZpc2l0IHdlYnNpdGVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHAgaGFzLXRleHQtZGFuZ2VyXCI+KiBNaWdodCB0YWtlIHVwIHRvIDMwIHNlY29uZHMgdG8gcnVuIHRoZSBzZXJ2ZXI8L3A+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgIC53cmFwcGVyLXByb2plY3QyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNlNjdlMjIpLCB0bygjZTc0YzNjKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTY3ZTIyLCAjZTc0YzNjKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTY3ZTIyLCAjZTc0YzNjKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U2N2UyMiwgI2U3NGMzYyk7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXItcHJvamVjdDMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIzMjUyNjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDE0MzQ1LCAjMjMyNTI2KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0MTQzNDUsICMyMzI1MjYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgICAgIH1cbiAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW0gNXJlbSA0cmVtO1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXMgZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMi41cmVtIDAgMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdGlja3ktdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMTNweDtcbiAgICAgICAgICAgIHRvcDogLTJyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuc3RpY2t5LWl0ZW0ge1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5vY3RvY2F0LWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIGJvdHRvbToxcmVtO1xuICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5vY3RvY2F0IHtcbiAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB3aWR0aDo0NXB4O1xuICAgICAgICAgIGhlaWdodDo0NXB4O1xuICAgICAgICB9XG4gXG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gM3JlbSAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Projects.jsx */",
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
          className: "jsx-1038471680" + " " + "fade ".concat(slideIndex === i ? 'active' : 'nonactive'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "jsx-1038471680" + " " + "numbertext has-text-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, i + 1, "\xA0/ 6"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-1038471680" + " " + "image is-3by2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          alt: "slide-".concat(i + 1),
          className: "jsx-1038471680",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "1038471680",
          css: ".active.jsx-1038471680{display:block;}.nonactive.jsx-1038471680{display:none;}.numbertext.jsx-1038471680{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;bottom:-4.7rem;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENhLEFBR2dDLEFBR0EsQUFHRixXQUNJLEVBSG5CLENBSEEsWUFPc0IsbUJBQ0QsaUJBQ0Msa0JBQ0gsZUFDTixTQUN1Qix5R0FDcEMiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gNSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogNSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNsaWRlSW5kZXg6IHByZXZTdGF0ZS5zbGlkZUluZGV4ICsgbixcbiAgICB9KSk7XG4gIH1cblxuICBjdXJyZW50U2xpZGUobikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBuIH0pO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVzKCkge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaSA/ICdhY3RpdmUnIDogJ25vbmFjdGl2ZSd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJ0ZXh0IGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAmbmJzcDsvIDZcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXNbaV19IGFsdD17YHNsaWRlLSR7aSArIDF9YH0gLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ub25hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubnVtYmVydGV4dCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAtNC43cmVtO1xuICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsaWRlcztcbiAgfVxuXG4gIGNyZWF0ZVByZXZpZXdzKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBwcmV2aWV3cy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c2xpZGVJbmRleCA9PT0gaSA/ICdwcmV2aWV3LWFjdGl2ZScgOiAncHJldmlldy1pbmFjdGl2ZSd9XG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ldfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmN1cnJlbnRTbGlkZShpKX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIGFsdD17YHByZXZpZXctJHtpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAucHJldmlldy1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXZpZXdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezE1MDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy0xIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgPEZhZGUgZGVsYXk9ezE3MDB9PlxuICAgICAgICAgIHsvKiBQUkVWSU9VUyBCVVRUT04gKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2IGJ1dHRvblwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygtMSl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHsvKiBORVhUIEJVVFRPTiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQgYnV0dG9uXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKDEpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvKiBGYWRpbmcgYW5pbWF0aW9uICovXG4gICAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICBib3R0b206IC0zLjVyZW07XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2IHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgICAgICByaWdodDogMzAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnByZXY6aG92ZXIsXG4gICAgICAgICAgICAgIC5uZXh0OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93R2FsbGVyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
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
          className: "jsx-338442827" + " " + "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-338442827" + " " + "image is-3by2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          onClick: function onClick() {
            return _this2.currentSlide(i);
          },
          role: "presentation",
          alt: "preview-".concat(i),
          className: "jsx-338442827" + " " + ((slideIndex === i ? 'preview-active' : 'preview-inactive') || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "338442827",
          css: ".preview-active.jsx-338442827{cursor:pointer;}.preview-inactive.jsx-338442827{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}.preview-inactive.jsx-338442827:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}.column.jsx-338442827{padding:0.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0ZhLEFBSWtDLEFBR0osQUFNaUIsQUFLWixXQVZZLElBSGhDLENBY0EsWUFMd0IsV0FMQSxxQ0FNUixVQUNoQixDQU5tQixlQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NsaWRlc2hvd0dhbGxlcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jbGFzcyBTbGlkZXNob3dHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2xpZGVJbmRleDogMCB9O1xuICAgIHRoaXMucGx1c1NsaWRlcyA9IHRoaXMucGx1c1NsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsdXNTbGlkZXMobikge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2xpZGVJbmRleCArIG4gPiA1KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGlmIChzbGlkZUluZGV4ICsgbiA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiA1IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2xpZGVJbmRleDogcHJldlN0YXRlLnNsaWRlSW5kZXggKyBuLFxuICAgIH0pKTtcbiAgfVxuXG4gIGN1cnJlbnRTbGlkZShuKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IG4gfSk7XG4gIH1cblxuICBjcmVhdGVTbGlkZXMoKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzbGlkZXMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YGZhZGUgJHtzbGlkZUluZGV4ID09PSBpID8gJ2FjdGl2ZScgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICBib3R0b206IC00LjdyZW07XG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByZXZpZXdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByZXZpZXdzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpID8gJ3ByZXZpZXctYWN0aXZlJyA6ICdwcmV2aWV3LWluYWN0aXZlJ31cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaV19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3VycmVudFNsaWRlKGkpfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgYWx0PXtgcHJldmlldy0ke2l9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2aWV3LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcygpO1xuICAgIGNvbnN0IHByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIFNMSURFUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEuNXJlbScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBTTElERSBQUkVWSUVXIElURU1TICovfVxuICAgICAgICA8RmFkZSBkZWxheT17MTUwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8RmFkZSBkZWxheT17MTcwMH0+XG4gICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYgYnV0dG9uXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dCBidXR0b25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgICAgLmZhZGUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnByZXYsXG4gICAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTMuNXJlbTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OjE1O1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAucHJldjpob3ZlcixcbiAgICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgICAgICAgICAubnVtYmVydGV4dCwgLnByZXYsIC5uZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3dHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
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

      var color = this.props.color;
      var slides = this.createSlides();
      var previews = this.createPreviews();
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3405815270" + " " + "gallery-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          marginBottom: '1.5rem'
        },
        className: "jsx-3405815270" + " " + "columns is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          padding: 0
        },
        className: "jsx-3405815270" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, slides)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3405815270" + " " + "columns is-variable is-1 is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, previews)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1700,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        style: {
          backgroundColor: color
        },
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(-1);
        },
        className: "jsx-3405815270" + " " + "prev button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-3405815270" + " " + "fas fa-angle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        style: {
          backgroundColor: color
        },
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(1);
        },
        className: "jsx-3405815270" + " " + "next button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-3405815270" + " " + "fas fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3405815270",
        css: ".gallery-container.jsx-3405815270{position:relative;margin-top:10px;}.fade.jsx-3405815270{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-3405815270;animation-name:fade-jsx-3405815270;-webkit-animation-duration:1.5s;animation-duration:1.5s;}@-webkit-keyframes fade{from.jsx-3405815270{opacity:.4;}to.jsx-3405815270{opacity:1;}}@-webkit-keyframes fade-jsx-3405815270{from{opacity:.4;}to{opacity:1;}}@keyframes fade-jsx-3405815270{from{opacity:.4;}to{opacity:1;}}.prev.jsx-3405815270,.next.jsx-3405815270{cursor:pointer;position:absolute;bottom:-3.5rem;padding:5px 15px;color:white;font-weight:bold;font-size:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;opacity:.7;}.prev.jsx-3405815270{left:30%;}.next.jsx-3405815270{right:30%;}.prev.jsx-3405815270:hover,.next.jsx-3405815270:hover{opacity:.8;cursor:pointer;}@media screen and (max-width:769px){.numbertext.jsx-3405815270,.prev.jsx-3405815270,.next.jsx-3405815270{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0pXLEFBR3FDLEFBTVEsQUFPYixBQUNILEFBSUcsQUFDSCxBQUtLLEFBYU4sQUFHQyxBQUtDLEFBTVMsU0FieEIsQ0F4QmUsQUFLQSxBQXNCZixDQTVCa0IsQUFLQSxBQTRCQyxFQU1iLEVBM0JnQixHQXhCRixRQThDcEIsRUF4Q2tDLEtBbUJmLENBeEJuQixjQXlCcUIsWUFuQkMsS0FvQk4sWUFDSyxpQkFDRixlQUNFLDZCQXRCSyx3REFDMUIsQUFzQjZCLHlCQUNmLFdBQ0MsV0FDZiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NsaWRlc2hvd0dhbGxlcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jbGFzcyBTbGlkZXNob3dHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2xpZGVJbmRleDogMCB9O1xuICAgIHRoaXMucGx1c1NsaWRlcyA9IHRoaXMucGx1c1NsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsdXNTbGlkZXMobikge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2xpZGVJbmRleCArIG4gPiA1KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGlmIChzbGlkZUluZGV4ICsgbiA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiA1IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2xpZGVJbmRleDogcHJldlN0YXRlLnNsaWRlSW5kZXggKyBuLFxuICAgIH0pKTtcbiAgfVxuXG4gIGN1cnJlbnRTbGlkZShuKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IG4gfSk7XG4gIH1cblxuICBjcmVhdGVTbGlkZXMoKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzbGlkZXMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YGZhZGUgJHtzbGlkZUluZGV4ID09PSBpID8gJ2FjdGl2ZScgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICBib3R0b206IC00LjdyZW07XG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByZXZpZXdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByZXZpZXdzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpID8gJ3ByZXZpZXctYWN0aXZlJyA6ICdwcmV2aWV3LWluYWN0aXZlJ31cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaV19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3VycmVudFNsaWRlKGkpfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgYWx0PXtgcHJldmlldy0ke2l9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2aWV3LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcygpO1xuICAgIGNvbnN0IHByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIFNMSURFUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEuNXJlbScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBTTElERSBQUkVWSUVXIElURU1TICovfVxuICAgICAgICA8RmFkZSBkZWxheT17MTUwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8RmFkZSBkZWxheT17MTcwMH0+XG4gICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYgYnV0dG9uXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dCBidXR0b25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgICAgLmZhZGUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnByZXYsXG4gICAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTMuNXJlbTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OjE1O1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAucHJldjpob3ZlcixcbiAgICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgICAgICAgICAubnVtYmVydGV4dCwgLnByZXYsIC5uZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3dHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
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