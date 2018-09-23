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
    className: "jsx-2643655587" + " " + "hero is-bold is-fullheight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2643655587" + " " + "hero-head",
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
    className: "jsx-2643655587" + " " + "bird-container bird-container--one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2643655587" + " " + "bird  bird--one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2643655587" + " " + "bird-container bird-container--two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2643655587" + " " + "bird  bird--two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2643655587" + " " + "hero-content has-text-centered",
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      margin: '0 auto'
    },
    href: "!",
    className: "jsx-2643655587" + " " + "image is-128x128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2643655587" + " " + "myself",
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
    className: "jsx-2643655587" + " " + "title box-effect is-size-1 has-text-weight-bold has-text-white",
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
    className: "jsx-2643655587" + " " + "subtitle has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Java Software Developer"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2643655587",
    css: ".hero.jsx-2643655587{background:url(\"../static/barcelona-1.jpg\") center bottom;background-size:cover;display:block;overflow:hidden;}.hero-content.jsx-2643655587{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.image.jsx-2643655587{box-shadow:0 3rem 3rem -1rem rgba(10,10,10,.2);}.myself.jsx-2643655587{background:url('../static/me.jpg');background-size:cover;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:128px;height:128px;border-radius:50%;}.myself.jsx-2643655587:hover{background:url('../static/me2.jpg');background-size:cover;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}.box-effect.jsx-2643655587:after,.box-effect.jsx-2643655587:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}.box-effect.jsx-2643655587:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}.box-effect.jsx-2643655587:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.box-effect.jsx-2643655587:hover.jsx-2643655587:after,.box-effect.jsx-2643655587:hover.jsx-2643655587:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.bird.jsx-2643655587{background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');background-size:auto 100%;width:88px;height:125px;will-change:background-position;-webkit-animation-name:fly-cycle-jsx-2643655587;animation-name:fly-cycle-jsx-2643655587;-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird--one.jsx-2643655587{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird--two.jsx-2643655587{-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}.bird-container.jsx-2643655587{position:absolute;top:20%;left:-10%;-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);will-change:transform;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird-container--one.jsx-2643655587{-webkit-animation-name:fly-right-one-jsx-2643655587;animation-name:fly-right-one-jsx-2643655587;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;animation-delay:0;}.bird-container--two.jsx-2643655587{-webkit-animation-name:fly-right-two-jsx-2643655587;animation-name:fly-right-two-jsx-2643655587;-webkit-animation-duration:17s;animation-duration:17s;-webkit-animation-delay:.5s;animation-delay:.5s;}@-webkit-keyframes fly-cycle-jsx-2643655587{100%{background-position:-900px 0;}}@keyframes fly-cycle-jsx-2643655587{100%{background-position:-900px 0;}}@-webkit-keyframes fly-right-one-jsx-2643655587{0%{-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@keyframes fly-right-one-jsx-2643655587{0%{-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-two-jsx-2643655587{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@keyframes fly-right-two-jsx-2643655587{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RPLEFBSXFFLEFBTXpDLEFBTTZCLEFBSVgsQUFRQyxBQVd6QixBQWFXLEFBT0UsQUFRZCxBQU1pRixBQVVyRSxBQUlFLEFBSU4sQUFVVyxBQUtBLEFBTUUsQUFLVSxBQUllLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQyxBQUlBLEFBS0MsQUFJRixBQUlDLEFBSUEsQUFJRSxBQUlGLEFBSUMsQUFJQSxVQTlHL0IsQ0E1QlQsT0E3QlQsQUFpRkQsSUF2Q2UsRUFPRixFQWlDWCxDQWpGRixFQTZCRCxBQXdFUCxNQXBHZ0MsQUFRVixDQVFBLEFBYUQsQUFvRGdCLENBekJsQixRQWZVLEFBT0EsRUE1Qy9CLEtBbUV3QixJQUlDLENBbEVRLEFBcUJwQixDQXRDVyxBQXlCRCxVQWNWLE1BV1UsQUFPQSxLQWpCTCxDQXZDSCxXQW9FYSxHQW5FVixDQXVDTixDQXdEYSxBQUtBLFFBdEJ6QixDQXRDNEQsQ0F1QjVELElBOURBLEFBaUZBLE9BZGEsVUFwREMsQ0FxREMsQ0EwQ2IsSUF2RjBCLE1BUGIsQ0FWZixDQStEa0MsUUFyQmxDLEFBT0EsQ0F3Q29CLEFBS0UsRUFuRkYsT0FzRUksR0EvQ29CLFFBdEI1QyxHQW9EMkIsQ0E0Q3pCLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFpQkEsR0FiQSxBQUlBLEFBYUEsQUFJQSxBQVFBLEdBcEJBLEFBd0JBLEFBSUEsQ0FuRmlDLEVBdUVqQyxXQS9ERixJQUtBLHlCQTdFbUIsaUJBQ0YsZUFDakIsQUErRHFDLE1BbEJDLGdEQTlCdEMsd0JBaURBLFFBbEJxQyw4RUFDckMiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9IZXJvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcblxuY29uc3QgSGVybyA9ICgpID0+IChcbiAgPFBhcmFsbGF4XG4gICAgY2xhc3NOYW1lPVwiaGVyby1wYXJhbGxheFwiXG4gICAgb2Zmc2V0WU1heD17MzB9XG4gICAgb2Zmc2V0WU1pbj17LTMwfVxuICAgIHNsb3dlclNjcm9sbFJhdGVcbiAgICB0YWc9XCJmaWd1cmVcIlxuICA+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVybyBpcy1ib2xkIGlzLWZ1bGxoZWlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWFkXCI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQtY29udGFpbmVyIGJpcmQtY29udGFpbmVyLS1vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkICBiaXJkLS1vbmVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQtY29udGFpbmVyIGJpcmQtY29udGFpbmVyLS10d29cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkICBiaXJkLS10d29cIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgb2Zmc2V0WU1heD17MzB9XG4gICAgICAgICAgb2Zmc2V0WU1pbj17LTMwfVxuICAgICAgICAgIHNsb3dlclNjcm9sbFJhdGU9e2ZhbHNlfVxuICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmFkZSBkZWxheT17ODAwfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlIGlzLTEyOHgxMjhcIiBzdHlsZT17eyBtYXJnaW46ICcwIGF1dG8nIH19IGhyZWY9XCIhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlzZWxmXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgb2Zmc2V0WU1heD17MjB9XG4gICAgICAgICAgb2Zmc2V0WU1pbj17LTIwfVxuICAgICAgICAgIHNsb3dlclNjcm9sbFJhdGU9e2ZhbHNlfVxuICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmFkZSBkZWxheT17MTIwMH0+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBib3gtZWZmZWN0IGlzLXNpemUtMSBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBJdmFuIFNoeXJhaVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezE2MDB9PlxuXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGUgaGFzLXRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgSmF2YSBTb2Z0d2FyZSBEZXZlbG9wZXJcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgXG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zdGF0aWMvYmFyY2Vsb25hLTEuanBnXCIpIGNlbnRlciBib3R0b207XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8tY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgYm94LXNoYWRvdzowIDNyZW0gM3JlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLm15c2VsZiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvbWUuanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAubXlzZWxmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9tZTIuanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyplZmZlY3QtYm94Ki9cbiAgICAgICAgLmJveC1lZmZlY3Q6YWZ0ZXIsXG4gICAgICAgIC5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYm94LWVmZmVjdDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYm94LWVmZmVjdDpob3ZlcjphZnRlcixcbiAgICAgICAgLmJveC1lZmZlY3Q6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpcmQge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMuc3ZnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmx5LWN5Y2xlO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC0tb25lIHtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtLXR3byB7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xuICAgICAgICB9XG4gICAgICAgIC5iaXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMjAlO1xuICAgICAgICAgIGxlZnQ6IC0xMCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLWNvbnRhaW5lci0tb25lIHtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtY29udGFpbmVyLS10d28ge1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtdHdvO1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ydmgpIHRyYW5zbGF0ZVgoLTEwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAyMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00dmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAzMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjV2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUGFyYWxsYXg+XG4pO1xuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Hero.jsx */",
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
      className: "jsx-3109817344" + " " + "level-item has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3109817344",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginBottom: 0
      },
      className: "jsx-3109817344" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      style: {
        margin: 'auto auto 8px auto'
      },
      className: "jsx-3109817344" + " " + "image is-32x32 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: logos[i],
      alt: "".concat(headings[i], "-logo"),
      className: "jsx-3109817344",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3109817344" + " " + "heading has-text-weight-bold has-text-white-ter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, headings[i])), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3109817344",
      css: ".heading.jsx-3109817344{font-size:.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JXLEFBRzZCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0luZm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY29uc3QgU2tpbGxJdGVtcyA9ICh7IGxvZ29zLCBoZWFkaW5ncyB9KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9nb3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpdGVtcy5wdXNoKFxuICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zMngzMiBcIiBzdHlsZT17eyBtYXJnaW46ICdhdXRvIGF1dG8gOHB4IGF1dG8nIH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb3NbaV19IGFsdD17YCR7aGVhZGluZ3NbaV19LWxvZ29gfSAvPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGluZyBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC13aGl0ZS10ZXJcIj57aGVhZGluZ3NbaV19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+LFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiIHN0eWxlPXt7IHBhZGRpbmc6ICcuNnJlbSAwIDAgMCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSknLCBib3JkZXJUb3A6ICcxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpJyB9fT5cbiAgICAgIHtpdGVtc31cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IEluZm8gPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gaGFzLWJhY2tncm91bmQtYmxhY2tcIj5cbiAgICA8UGFyYWxsYXhcbiAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICBvZmZzZXRZTWF4PXszMH1cbiAgICAgIG9mZnNldFlNaW49ey0zMH1cbiAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWFpbi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkIGhhcy1zaGFkb3dcIj5cbiAgICAgICAgPEZhZGUgZGVsYXk9ezUwMH0gY2FzY2FkZT5cbiAgICAgICAgICB7Lyogcm93IG1haW4gZGVzY3JpcHRpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1yb3dcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTMgaGFzLXRleHQtd2hpdGUtdGVyIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+QWJvdXQ8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudCBcIj5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICAgIE9yYWNsZSBDZXJ0aWZpZWQgSmF2YSBEZXZlbG9wZXIgc3BlY2lhbGlzZWQgaW5cbiAgICAgICAgICAgICAgICAgZnJvbnQtZW5kIGFuZCBiYWNrLWVuZCBkZXZlbG9wbWVudC5cbiAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlLXRlclwiPkF2YWlsYWJsZSBmb3IgaGlyZSBhbmQgb3BlbiB0byBhbnkgaWRlYXMgb2YgY29vcGVyYXRpb24uPC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIHJvdyBmaXJzdCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtd2hpdGUtdGVyXCI+XG4gICAgICAgICAgICAgIEhUTUwgLyBDU1NcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLWdhcGxlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICAgJ2pzeCcsXG4gICAgICAgICAgICAgICAgICAndWkgZGVzaWduJyxcbiAgICAgICAgICAgICAgICAgICdtYXRlcmlhbGl6ZScsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9yZWFjdC5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy91aS5wbmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9tYXRlcmlhbGl6ZS5wbmcnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAgICAgICAgICAgICAnYnVsbWEnLFxuICAgICAgICAgICAgICAgICAgJ3Nhc3MnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYm9vdHN0cmFwLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2J1bG1hLnBuZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3Nhc3Muc3ZnJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyogcm93IHNlY29uZCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJza2lsbHMtY29sLXRpdGxlIGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICAgIEJBQ0stRU5EXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAgICdqYXZhJyxcbiAgICAgICAgICAgICAgICAgICdzcHJpbmcnLFxuICAgICAgICAgICAgICAgICAgJ215c3FsJyxcbiAgICAgICAgICAgICAgICAgICdoaWJlcm5hdGUnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvamF2YS5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9zcHJpbmcucG5nJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvbXlzcWwuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvaGliZXJuYXRlLnBuZycsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2tpbGxzLWNvbC10aXRsZSBoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgICBKQVZBU0NSSVBUXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAgICdyZWFjdCcsXG4gICAgICAgICAgICAgICAgICAnbmV4dCcsXG4gICAgICAgICAgICAgICAgICAndnVlJyxcbiAgICAgICAgICAgICAgICAgICdqcXVlcnknLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcmVhY3Quc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvbmV4dC5wbmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy92dWVqcy5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9qcXVlcnkuc3ZnJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyogcm93IHRoaXJkICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbHVtbiBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgT1RIRVJcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtZ2FwbGVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAnZ2l0JyxcbiAgICAgICAgICAgICAgICAgICdhd3MnLFxuICAgICAgICAgICAgICAgICAgJ2hlcm9rdScsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9naXRodWIucG5nJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYW1hem9ud2Vic2VydmljZXMuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvaGVyb2t1LnN2ZycsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAnaW50ZWxsaWonLFxuICAgICAgICAgICAgICAgICAgJ3Bob3Rvc2hvcCcsXG4gICAgICAgICAgICAgICAgICAnaWxsdXN0cmF0b3InLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvaW50ZWxsaWouc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcGhvdG9zaG9wLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2lsbHVzdHJhdG9yLnN2ZycsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhcmFsbGF4PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICB9XG4gICAgICAgIC5za2lsbHMtY29sLXRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNHJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1ucyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlY3Rpb24gLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDAgMC4xcmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZS1yb3cge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcbiAgICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcbmV4cG9ydCBkZWZhdWx0IEluZm87XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Info.jsx */",
      __self: this
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "level is-mobile",
    style: {
      padding: '.6rem 0 0 0',
      borderBottom: '1px solid hsl(0, 0%, 86%)',
      borderTop: '1px solid hsl(0, 0%, 86%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, items);
};

var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2256315625" + " " + "section has-background-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    className: "custom-class",
    offsetYMax: 30,
    offsetYMin: -30,
    tag: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "container main-content has-text-centered has-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    delay: 500,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "title-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2256315625" + " " + "is-size-3 has-text-white-ter has-text-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "column content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-2256315625" + " " + "has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Oracle Certified Java Developer specialised in front-end and back-end development."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-2256315625" + " " + "has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Available for hire and open to any ideas of cooperation."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2256315625" + " " + "column has-text-weight-bold has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "HTML / CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "columns is-gapless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['jsx', 'ui design', 'materialize'],
    logos: ['../static/logos/react.svg', '../static/logos/ui.png', '../static/logos/materialize.png'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['bootstrap', 'bulma', 'sass'],
    logos: ['../static/logos/bootstrap.svg', '../static/logos/bulma.png', '../static/logos/sass.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2256315625" + " " + "skills-col-title has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "BACK-END"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['java', 'spring', 'mysql', 'hibernate'],
    logos: ['../static/logos/java.svg', '../static/logos/spring.png', '../static/logos/mysql.svg', '../static/logos/hibernate.png'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2256315625" + " " + "skills-col-title has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "JAVASCRIPT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['react', 'next', 'vue', 'jquery'],
    logos: ['../static/logos/react.svg', '../static/logos/next.png', '../static/logos/vuejs.svg', '../static/logos/jquery.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2256315625" + " " + "column has-text-weight-bold has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "OTHER")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "columns is-gapless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['git', 'aws', 'heroku'],
    logos: ['../static/logos/github.png', '../static/logos/amazonwebservices.svg', '../static/logos/heroku.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2256315625" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['intellij', 'photoshop', 'illustrator'],
    logos: ['../static/logos/intellij.svg', '../static/logos/photoshop.svg', '../static/logos/illustrator.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2256315625",
    css: ".section.jsx-2256315625{display:block;}.main-content.jsx-2256315625{padding:4rem;position:relative;}.skills-col-title.jsx-2256315625{margin-bottom:.4rem;font-weight:bold;font-size:1rem;}.column.jsx-2256315625{margin-top:3rem;}.columns.jsx-2256315625{margin-bottom:0;}@media screen and (max-width:769px){.section.jsx-2256315625{padding:1rem .25rem;}.section.jsx-2256315625 .column.jsx-2256315625{padding:0;margin:2.5rem 0 0.1rem 0;}.title-row.jsx-2256315625{margin-top:-3rem;}}@media screen and (max-width:1024px){.main-content.jsx-2256315625{padding:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUxPLEFBR3lCLEFBR0QsQUFJTyxBQUtKLEFBR0QsQUFJUyxBQUdWLEFBSU8sQUFNcEIsVUFUNEIsR0FuQlgsQUE0QmhCLENBL0JKLEVBWUEsQUFHQSxDQVdFLEdBbkJpQixBQVlqQixXQWZGLElBbUJFLEVBZmUsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9JbmZvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNvbnN0IFNraWxsSXRlbXMgPSAoeyBsb2dvcywgaGVhZGluZ3MgfSkgPT4ge1xuICBjb25zdCBpdGVtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZ29zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaXRlbXMucHVzaChcbiAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMzJ4MzIgXCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0byBhdXRvIDhweCBhdXRvJyB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29zW2ldfSBhbHQ9e2Ake2hlYWRpbmdzW2ldfS1sb2dvYH0gLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRpbmcgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtd2hpdGUtdGVyXCI+e2hlYWRpbmdzW2ldfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAuaGVhZGluZyB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PixcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIiBzdHlsZT17eyBwYWRkaW5nOiAnLjZyZW0gMCAwIDAnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKScgfX0+XG4gICAgICB7aXRlbXN9XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBJbmZvID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIGhhcy1iYWNrZ3JvdW5kLWJsYWNrXCI+XG4gICAgPFBhcmFsbGF4XG4gICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgb2Zmc2V0WU1heD17MzB9XG4gICAgICBvZmZzZXRZTWluPXstMzB9XG4gICAgICB0YWc9XCJmaWd1cmVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1haW4tY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZCBoYXMtc2hhZG93XCI+XG4gICAgICAgIDxGYWRlIGRlbGF5PXs1MDB9IGNhc2NhZGU+XG4gICAgICAgICAgey8qIHJvdyBtYWluIGRlc2NyaXB0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtcm93XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS0zIGhhcy10ZXh0LXdoaXRlLXRlciBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPkFib3V0PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnQgXCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgICBPcmFjbGUgQ2VydGlmaWVkIEphdmEgRGV2ZWxvcGVyIHNwZWNpYWxpc2VkIGluXG4gICAgICAgICAgICAgICAgIGZyb250LWVuZCBhbmQgYmFjay1lbmQgZGV2ZWxvcG1lbnQuXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZS10ZXJcIj5BdmFpbGFibGUgZm9yIGhpcmUgYW5kIG9wZW4gdG8gYW55IGlkZWFzIG9mIGNvb3BlcmF0aW9uLjwvaDY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiByb3cgZmlyc3QgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICBIVE1MIC8gQ1NTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1nYXBsZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAgICdqc3gnLFxuICAgICAgICAgICAgICAgICAgJ3VpIGRlc2lnbicsXG4gICAgICAgICAgICAgICAgICAnbWF0ZXJpYWxpemUnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcmVhY3Quc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvdWkucG5nJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvbWF0ZXJpYWxpemUucG5nJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAgICdib290c3RyYXAnLFxuICAgICAgICAgICAgICAgICAgJ2J1bG1hJyxcbiAgICAgICAgICAgICAgICAgICdzYXNzJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2Jvb3RzdHJhcC5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9idWxtYS5wbmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9zYXNzLnN2ZycsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIHJvdyBzZWNvbmQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2tpbGxzLWNvbC10aXRsZSBoYXMtdGV4dC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgICBCQUNLLUVORFxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAnamF2YScsXG4gICAgICAgICAgICAgICAgICAnc3ByaW5nJyxcbiAgICAgICAgICAgICAgICAgICdteXNxbCcsXG4gICAgICAgICAgICAgICAgICAnaGliZXJuYXRlJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2phdmEuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3Mvc3ByaW5nLnBuZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL215c3FsLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2hpYmVybmF0ZS5wbmcnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxscy1jb2wtdGl0bGUgaGFzLXRleHQtd2hpdGUtdGVyXCI+XG4gICAgICAgICAgICAgICAgSkFWQVNDUklQVFxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAncmVhY3QnLFxuICAgICAgICAgICAgICAgICAgJ25leHQnLFxuICAgICAgICAgICAgICAgICAgJ3Z1ZScsXG4gICAgICAgICAgICAgICAgICAnanF1ZXJ5JyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3JlYWN0LnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL25leHQucG5nJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvdnVlanMuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvanF1ZXJ5LnN2ZycsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIHJvdyB0aGlyZCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtd2hpdGUtdGVyXCI+XG4gICAgICAgICAgICAgIE9USEVSXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLWdhcGxlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICAgJ2dpdCcsXG4gICAgICAgICAgICAgICAgICAnYXdzJyxcbiAgICAgICAgICAgICAgICAgICdoZXJva3UnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvZ2l0aHViLnBuZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2FtYXpvbndlYnNlcnZpY2VzLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2hlcm9rdS5zdmcnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICAgJ2ludGVsbGlqJyxcbiAgICAgICAgICAgICAgICAgICdwaG90b3Nob3AnLFxuICAgICAgICAgICAgICAgICAgJ2lsbHVzdHJhdG9yJyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2ludGVsbGlqLnN2ZycsXG4gICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3Bob3Rvc2hvcC5zdmcnLFxuICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9pbGx1c3RyYXRvci5zdmcnLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9QYXJhbGxheD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGxzLWNvbC10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjRyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbnMge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWN0aW9uIC5jb2x1bW4ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDIuNXJlbSAwIDAuMXJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gICAgICAgICAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Info.jsx */",
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
    className: "jsx-4251016430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
    className: "jsx-4251016430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
    className: "jsx-4251016430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Concert+One",
    rel: "stylesheet",
    className: "jsx-4251016430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    defer: true,
    src: "https://use.fontawesome.com/releases/v5.1.0/js/all.js",
    className: "jsx-4251016430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-4251016430",
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
    styleId: "4251016430",
    css: "body{background-color:hsl(0,0,90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQk8sQUFHeUMsOEJBQ2hDIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJhbGxheFByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2J1bG1hLzAuNy4xL2Nzcy9idWxtYS5taW4uY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9rb25wYS9kZXZpY29uL2RmNjQzMWUzMjM1NDdhZGQxYjRjZjQ1OTkyOTEzZjE1Mjg2NDU2ZDMvZGV2aWNvbi5taW4uY3NzXCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q29uY2VydCtPbmVcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDxzY3JpcHQgZGVmZXIgc3JjPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjEuMC9qcy9hbGwuanNcIiAvPlxuICAgICAgPHRpdGxlPkl2YW4gU2h5cmFpPC90aXRsZT5cbiAgICA8L0hlYWQ+XG5cbiAgICB7Y2hpbGRyZW59XG5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICB7YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwLDkwJSk7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9QYXJhbGxheFByb3ZpZGVyPlxuKTtcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Layout.jsx */",
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
    className: "jsx-1793543656" + " " + "navbar bounce-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1793543656" + " " + "navbar-item ",
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
    className: "jsx-1793543656" + " " + "has-text-white text-focus-in ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1793543656" + " " + "fab fa-facebook fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1793543656" + " " + "navbar-item",
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
    className: "jsx-1793543656" + " " + "has-text-white text-focus-in ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1793543656" + " " + "fas fa-envelope fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1793543656" + " " + "navbar-item",
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
    className: "jsx-1793543656" + " " + "has-text-white text-focus-in ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1793543656" + " " + "fab fa-linkedin fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1793543656" + " " + "navbar-item",
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
    className: "jsx-1793543656" + " " + "has-text-white text-focus-in ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1793543656" + " " + "fab fa-github fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1793543656",
    css: ".navbar.jsx-1793543656{display:block;left:auto;right:auto;text-align:center;background-color:#0a0a0a;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;min-height:auto;}.navbar.jsx-1793543656:hover{background:none;}.navbar.jsx-1793543656:hover a.jsx-1793543656{font-size:150%;color:#0a0a0a !important;}.navbar-item.jsx-1793543656{display:inline-block;}.navbar-item.jsx-1793543656 a.jsx-1793543656{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;}.navbar-item.jsx-1793543656 a.jsx-1793543656:hover{color:#fff !important;}.bounce-top.jsx-1793543656{-webkit-animation:bounce-top 1s 1.2s both;-webkit-animation:bounce-top-jsx-1793543656 1s 1.2s both;animation:bounce-top-jsx-1793543656 1s 1.2s both;}@-webkit-keyframes bounce-top{0%.jsx-1793543656{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%.jsx-1793543656{opacity:1;}40%.jsx-1793543656{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%.jsx-1793543656{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%.jsx-1793543656{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%.jsx-1793543656{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%.jsx-1793543656,55%.jsx-1793543656,75%.jsx-1793543656,87%.jsx-1793543656{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%.jsx-1793543656{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}@-webkit-keyframes bounce-top-jsx-1793543656{0%{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}@keyframes bounce-top-jsx-1793543656{0%{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}.text-focus-in.jsx-1793543656{-webkit-animation:text-focus-in 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;-webkit-animation:text-focus-in-jsx-1793543656 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;animation:text-focus-in-jsx-1793543656 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;}@-webkit-keyframes text-focus-in{0%.jsx-1793543656{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%.jsx-1793543656{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}@-webkit-keyframes text-focus-in-jsx-1793543656{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}@keyframes text-focus-in-jsx-1793543656{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qk8sQUFHdUIsQUFTRSxBQUdELEFBSU0sQUFHVSxBQUdULEFBR29CLEFBS0osQUFPMUIsQUFHMEIsQUFNQSxBQU1ELEFBTUEsQUFTRCxBQU1BLEFBU0UsQUFPMUIsQUFHMEIsQUFNQSxBQU1ELEFBTUEsQUFTRCxBQU1BLEFBU2tELEFBTTFELEFBS0QsQUFPQyxBQUtELFVBdkgzQixBQW9EQSxJQXpGVSxDQVllLENBSDNCLEtBT0EsQ0FNQSxFQXJCYSxDQWdKZ0IsQUFZQSxDQWpCQyxBQVlBLFFBckZRLEFBTUEsQUE4Q0EsQUFNQSxDQTNIbkIsQUFrRG9CLEFBTUEsQUE4Q0EsQUFNQSxDQWhGQyxBQVVBLEFBTUEsQUFvQ0EsQUFVQSxBQU1BLElBckZ4QyxFQVk0QyxXQXRCakIsY0ErSWIsQUFZQSxHQTNJZCxBQTBIYyxBQVlBLE9BTlosQUFZQSxDQTNKK0IsRUEwSS9CLEFBWUEsR0FwQnNGLHlDQWxFekMsQUFNQSxBQThDQSxBQU1BLElBekVELEFBTUEsQUE4Q0EsQUFNQSxJQWhGQSxBQVVBLEFBTUEsQUFvQ0EsQUFVQSxBQU1BLGdCQTlGNUIsQUFxQmxCLGdCQXBCQSxHQStEK0MsQUFNQSxBQThDQSxBQU1BLEdBekVELEFBTUEsQUE4Q0EsQUFNQSxJQWhGQSxBQVVBLEFBTUEsQUFvQ0EsQUFVQSxBQU1BLHVFQTlCNUMsQUFNWSxBQThDWixBQU1ZLENBekVaLEFBTUEsQUE4Q0EsQUFNQSxJQWhGWSxBQVVaLEFBTUEsQUFvQ1ksQUFVWixBQU1BLEtBeEJBLEFBb0RBLEtBL0ZBLEFBb0RBLFdBaURGIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBib3VuY2UtdG9wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIhXCIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgdGV4dC1mb2N1cy1pbiBcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2sgZmEtbGdcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiIVwiIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIHRleHQtZm9jdXMtaW4gXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlIGZhLWxnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiFcIiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZSB0ZXh0LWZvY3VzLWluIFwiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBmYS1sZ1wiIC8+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIhXCIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgdGV4dC1mb2N1cy1pbiBcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViIGZhLWxnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgLm5hdmJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7ICAgICAgICBcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICAgIC5uYXZiYXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgICAgLm5hdmJhcjpob3ZlciBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICBjb2xvcjogIzBhMGEwYSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLm5hdmJhci1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLm5hdmJhci1pdGVtIGEge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0OyAgICAgICAgXG4gICAgICB9XG4gICAgICAubmF2YmFyLWl0ZW0gYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuYm91bmNlLXRvcCB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UtdG9wIDFzIDEuMnMgYm90aDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGJvdW5jZS10b3AgMXMgMS4ycyBib3RoO1xuICAgICAgfVxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZS10b3Age1xuICAgICAgICAwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgMjQlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDQwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDY1JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDgyJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA5MyUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgMjUlLFxuICAgICAgICA1NSUsXG4gICAgICAgIDc1JSxcbiAgICAgICAgODclIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBib3VuY2UtdG9wIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDVweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDI0JSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICA0MCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA2NSUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA4MiUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgOTMlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDI1JSxcbiAgICAgICAgNTUlLFxuICAgICAgICA3NSUsXG4gICAgICAgIDg3JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRleHQtZm9jdXMtaW4ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dC1mb2N1cy1pbiAxcyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIDEuNHMgYm90aDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHRleHQtZm9jdXMtaW4gMXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSAxLjRzIGJvdGg7XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0ZXh0LWZvY3VzLWluIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgdGV4dC1mb2N1cy1pbiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Navbar.jsx */",
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
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "container sticky-title hasba",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3047816738" + " " + "is-size-3 has-text-centered  has-text-black has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Projects"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "container-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/rawlead/Photo-IS",
        className: "jsx-3047816738" + " " + "octocat-container image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "octocat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "columns is-variable is-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        delay: 800,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3047816738" + " " + "is-size-4 has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Photo IS"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/portal-1.jpg', '../static/p/portal-2.jpg', '../static/p/portal-3.jpg', '../static/p/portal-4.jpg', '../static/p/portal-5.jpg', '../static/p/portal-6.jpg'],
        color: "#0a0a0a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "About this project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Photo IS is a web application for sharing photos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Interface was built using Vue.js and Bootstrap libraries."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Communication with server is done through JSON format and REST API. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "content-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Functional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Users are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Login into existing account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Upload profile image"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Modify personal data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Upload photo with a short title, description and selecting a category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Explore photos uploaded by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Sort photos by category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Add or remove photos to or from collection of favorites"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Comment photos and explore comments made by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Search for categories or other users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Technical Sheet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Technologies I got involved with while working on this project."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Java 8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Spring Framework - Security, MVC, Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Amazon Web Services - EB, S3, RDS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "oAuth 2.0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "HTML5 / CSS3 / Javascript ES6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "UI/UX Architecture"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "UI/UX Animations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Vue.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Bootstrap"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-3047816738" + " " + "button has-text-weight-bold is-black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "container-wrapper wrapper-project2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "columns is-variable is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3047816738" + " " + "is-size-4 has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Ebrofy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/ebro-1.jpg', '../static/p/ebro-2.jpg', '../static/p/ebro-3.png', '../static/p/ebro-4.png', '../static/p/ebro-5.png', '../static/p/ebro-6.jpg'],
        color: "#2c3e50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Ebrofy is a small web application for image pixelation and color depth processing."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Application build with Java and Spring Framework as back-end, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Front-end technologies are Vue.js and Bootstrap. Communication with server is done via JSON with REST API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Built on", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "k-means clustering algorithm")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Users of the applications are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Upload image to the website for further processing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Upload image to the website")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Technologies used:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Spring Framework"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "HTML5 / CSS3 /"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Heroku"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "container-wrapper wrapper-project3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + " container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "columns is-variable is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "sticky-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
        className: "custom-class",
        offsetXMax: 79,
        offsetXMin: 0,
        tag: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3047816738" + " " + "is-size-4 has-text-weight-bold has-text-grey-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Filter App")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideshowGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: ['../static/p/filterapp-1.jpg', '../static/p/filterapp-2.jpg', '../static/p/filterapp-3.jpg', '../static/p/filterapp-4.jpg', '../static/p/filterapp-5.jpeg', '../static/p/filterapp-6.jpg'],
        color: "hsl(0, 0%, 40%)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3047816738" + " " + "column content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bottom: true,
        delay: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "FilterApp is a small web application for image processing."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Application build with Java and Spring Framework as back-end, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Front-end technologies are Vue.js and Bootstrap. Communication with server is done via JSON with REST API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "Built on", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, " k-means clustering algorithm")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Users of the applications are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Upload image to the website for further processing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Upload image to the website")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Technologies used:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Spring Framework"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "HTML5 / CSS3 /"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3047816738",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Heroku")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        rel: "noopener noreferrer",
        target: "_blank",
        href: "https://filterapp-shyrai.herokuapp.com",
        style: {
          backgroundColor: 'hsl(0, 0%, 40%)'
        },
        className: "jsx-3047816738" + " " + "button is-rounded has-text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Visit website"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3047816738" + " " + "help has-text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "* Might take up to 30 seconds to run the server")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3047816738",
        css: ".wrapper-project2.jsx-3047816738{background:-webkit-gradient(linear,left top,right top,from(#e67e22),to(#e74c3c));background:-webkit-linear-gradient(left,#e67e22,#e74c3c);background:-o-linear-gradient(left,#e67e22,#e74c3c);background:linear-gradient(to right,#e67e22,#e74c3c);}.wrapper-project3.jsx-3047816738{background:#232526;background:-webkit-linear-gradient(to right,#414345,#232526);background:linear-gradient(to right,#414345,#232526);}.sticky-container.jsx-3047816738{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;border:1px solid hsl(0,0%,86%);padding:2rem 4rem 5rem 4rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0,90%);}.content-collapse.jsx-3047816738{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 1s ease-out;transition:max-height 1s ease-out;}.content.jsx-3047816738{padding:2.5rem 0 0 0;}.sticky-title.jsx-3047816738{padding:13px;top:-2rem;margin-bottom:-5rem;}.container-wrapper.jsx-3047816738{padding-top:11rem;margin-bottom:-3rem;}.sticky-item.jsx-3047816738{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-3047816738{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-3047816738{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-3047816738:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-3047816738{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlRVyxBQUdrRyxBQU1sRSxBQUtOLEFBU0ssQUFNRyxBQUdSLEFBS0ssQUFJTSxBQU9SLEFBTXFCLEFBU0MsQUFTTixhQXZDdEIsS0FLVSxBQVdYLENBdkNzRCxBQWNsRCxFQU1qQixFQUl3QixDQVFKLElBK0JoQixDQXZCUyxHQXpCTyxNQWNwQixDQWdCMEIsQ0FTQSxDQWJiLEVBaEJiLEtBVHNDLElBMEJ0QyxXQUltQixDQWJOLEFBc0JVLFNBckJELENBN0JLLE1BSmdDLENBUEksQUFxRGxELFVBWmMsQ0FhZixXQUNDLFdBYmIsQ0FjaUMsU0FqQ2pDLFNBZkEsS0FQMEQsQ0E2RDlCLGtDQWxERCxZQTZDM0IsS0F2RDJELHVDQTZEeEMsY0E1RG5CLEdBNkRpQixlQUNqQixxQkFwRHFDLCtCQUNMLDRCQUNrQiwrQ0FDaEIsOEJBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCBTbGlkZXNob3dHYWxsZXJ5IGZyb20gJy4vU2xpZGVzaG93R2FsbGVyeSc7XG5cbmNsYXNzIFByb2plY3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1wYXJhbGxheFwiXG4gICAgICAgICAgb2Zmc2V0WU1heD17MTAwfVxuICAgICAgICAgIG9mZnNldFlNaW49ey00MH1cbiAgICAgICAgICBzbG93ZXJTY3JvbGxSYXRlXG4gICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS10aXRsZSBoYXNiYVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtMyBoYXMtdGV4dC1jZW50ZXJlZCAgaGFzLXRleHQtYmxhY2sgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5Qcm9qZWN0czwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFyYWxsYXg+XG5cbiAgICAgICAgey8qIFByb2plY3QgMSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9jdG9jYXQtY29udGFpbmVyIGltYWdlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmF3bGVhZC9QaG90by1JU1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXs4MDB9PlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezgwfVxuICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob3RvIElTXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMy5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMwYTBhMGFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICA8aDM+QWJvdXQgdGhpcyBwcm9qZWN0PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoNT5QaG90byBJUyBpcyBhIHdlYiBhcHBsaWNhdGlvbiBmb3Igc2hhcmluZyBwaG90b3MuPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBidWlsdCB3aXRoIEphdmEgYW5kIFNwcmluZyBGcmFtZXdvcmsgYXMgYmFjay1lbmQgdGVjaG5vbG9naWVzLFxuICAgICAgICAgICAgICAgICAgICB3aXRoIE15U1FMIGRhdGFiYXNlIGZvciBrZWVwaW5nIHVzZXIgYWNjb3VudHMsIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+SW50ZXJmYWNlIHdhcyBidWlsdCB1c2luZyBWdWUuanMgYW5kIEJvb3RzdHJhcCBsaWJyYXJpZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+Q29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpcyBkb25lIHRocm91Z2ggSlNPTiBmb3JtYXQgYW5kIFJFU1QgQVBJLiA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gbGl2ZXMgb24gQW1hem9uIFdlYiBTZXJ2aWNlcyBhbmRcbiAgICAgICAgICAgICAgICAgICAgIGlzIHVzaW5nIEVCIGZvciBkZXBsb3lpbmcsIFMzIGZvciBzdG9yaW5nIGltYWdlIGZpbGVzIGFuZCBSRFMgYXMgYVxuICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UgcHJvdmlkZXIuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkZ1bmN0aW9uYWw8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDU+VXNlcnMgYXJlIGFibGUgdG86PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGUgYSBuZXcgYWNjb3VudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkxvZ2luIGludG8gZXhpc3RpbmcgYWNjb3VudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcm9maWxlIGltYWdlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9kaWZ5IHBlcnNvbmFsIGRhdGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcGhvdG8gd2l0aCBhIHNob3J0IHRpdGxlLCBkZXNjcmlwdGlvbiBhbmQgc2VsZWN0aW5nIGEgY2F0ZWdvcnk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5FeHBsb3JlIHBob3RvcyB1cGxvYWRlZCBieSBvdGhlciB1c2VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlNvcnQgcGhvdG9zIGJ5IGNhdGVnb3J5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRkIG9yIHJlbW92ZSBwaG90b3MgdG8gb3IgZnJvbSBjb2xsZWN0aW9uIG9mIGZhdm9yaXRlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbW1lbnQgcGhvdG9zIGFuZCBleHBsb3JlIGNvbW1lbnRzIG1hZGUgYnkgb3RoZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWFyY2ggZm9yIGNhdGVnb3JpZXMgb3Igb3RoZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8aDM+VGVjaG5pY2FsIFNoZWV0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlRlY2hub2xvZ2llcyBJIGdvdCBpbnZvbHZlZCB3aXRoIHdoaWxlIHdvcmtpbmcgb24gdGhpcyBwcm9qZWN0LjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+SmF2YSA4PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U3ByaW5nIEZyYW1ld29yayAtIFNlY3VyaXR5LCBNVkMsIERhdGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5NeVNRTDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkFtYXpvbiBXZWIgU2VydmljZXMgLSBFQiwgUzMsIFJEUzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPm9BdXRoIDIuMDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkhUTUw1IC8gQ1NTMyAvIEphdmFzY3JpcHQgRVM2PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VUkvVVggQXJjaGl0ZWN0dXJlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VUkvVVggQW5pbWF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlZ1ZS5qczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkJvb3RzdHJhcDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaGFzLXRleHQtd2VpZ2h0LWJvbGQgaXMtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVuQ29sbGFwc2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJNb3JlLi4uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7IC8qIFBST0pFQ1QgMiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlciB3cmFwcGVyLXByb2plY3QyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBFYnJvZnlcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby0xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tMi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTMucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby00LnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tNS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTYuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMmMzZTUwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICBFYnJvZnkgaXMgYSBzbWFsbCB3ZWIgYXBwbGljYXRpb24gZm9yXG4gICAgICAgICAgICAgICAgICAgIGltYWdlIHBpeGVsYXRpb24gYW5kIGNvbG9yIGRlcHRoIHByb2Nlc3NpbmcuXG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGJ1aWxkIHdpdGggSmF2YSBhbmQgU3ByaW5nIEZyYW1ld29yayBhcyBiYWNrLWVuZCxcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLCBwaG90b3MsIGNvbW1lbnRzIGFuZCBvdGhlciBzdHVmZi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBGcm9udC1lbmQgdGVjaG5vbG9naWVzIGFyZSBWdWUuanMgYW5kIEJvb3RzdHJhcC5cbiAgICAgICAgICAgICAgICAgICAgIENvbW11bmljYXRpb24gd2l0aCBzZXJ2ZXIgaXMgZG9uZSB2aWEgSlNPTiB3aXRoIFJFU1QgQVBJLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEJ1aWx0IG9uXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LLW1lYW5zX2NsdXN0ZXJpbmdcIj5rLW1lYW5zIGNsdXN0ZXJpbmcgYWxnb3JpdGhtPC9hPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGg2PlVzZXJzIG9mIHRoZSBhcHBsaWNhdGlvbnMgYXJlIGFibGUgdG86PC9oNj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBpbWFnZSB0byB0aGUgd2Vic2l0ZSBmb3IgZnVydGhlciBwcm9jZXNzaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBpbWFnZSB0byB0aGUgd2Vic2l0ZTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGg0PlRlY2hub2xvZ2llcyB1c2VkOjwvaDQ+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5KYXZhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcms8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SFRNTDUgLyBDU1MzIC88L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UmVhY3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SGVyb2t1PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7IC8qIFBST0pFQ1QgMyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlciB3cmFwcGVyLXByb2plY3QzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezc5fVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgQXBwXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0yLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0zLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC00LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC01LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtNi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImhzbCgwLCAwJSwgNDAlKVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgIDxoND5GaWx0ZXJBcHAgaXMgYSBzbWFsbCB3ZWIgYXBwbGljYXRpb24gZm9yIGltYWdlIHByb2Nlc3NpbmcuPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBidWlsZCB3aXRoIEphdmEgYW5kIFNwcmluZyBGcmFtZXdvcmsgYXMgYmFjay1lbmQsXG4gICAgICAgICAgICAgICAgICAgIHdpdGggTXlTUUwgZGF0YWJhc2UgZm9yIGtlZXBpbmcgdXNlciBhY2NvdW50cywgcGhvdG9zLCBjb21tZW50cyBhbmQgb3RoZXIgc3R1ZmYuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgRnJvbnQtZW5kIHRlY2hub2xvZ2llcyBhcmUgVnVlLmpzIGFuZCBCb290c3RyYXAuIENvbW11bmljYXRpb24gd2l0aCBzZXJ2ZXIgaXNcbiAgICAgICAgICAgICAgICAgICAgIGRvbmUgdmlhIEpTT04gd2l0aCBSRVNUIEFQSS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBCdWlsdCBvblxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSy1tZWFuc19jbHVzdGVyaW5nXCI+IGstbWVhbnMgY2x1c3RlcmluZyBhbGdvcml0aG08L2E+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8aDY+VXNlcnMgb2YgdGhlIGFwcGxpY2F0aW9ucyBhcmUgYWJsZSB0bzo8L2g2PlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIGltYWdlIHRvIHRoZSB3ZWJzaXRlIGZvciBmdXJ0aGVyIHByb2Nlc3Npbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIGltYWdlIHRvIHRoZSB3ZWJzaXRlPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8aDM+VGVjaG5vbG9naWVzIHVzZWQ6PC9oMz5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkphdmE8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+U3ByaW5nIEZyYW1ld29yazwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5SZWFjdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5NeVNRTDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5IZXJva3U8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1yb3VuZGVkIGhhcy10ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZpbHRlcmFwcC1zaHlyYWkuaGVyb2t1YXBwLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2hzbCgwLCAwJSwgNDAlKScgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVmlzaXQgd2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscCBoYXMtdGV4dC1kYW5nZXJcIj4qIE1pZ2h0IHRha2UgdXAgdG8gMzAgc2Vjb25kcyB0byBydW4gdGhlIHNlcnZlcjwvcD5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgIC53cmFwcGVyLXByb2plY3QyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNlNjdlMjIpLCB0bygjZTc0YzNjKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTY3ZTIyLCAjZTc0YzNjKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTY3ZTIyLCAjZTc0YzNjKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U2N2UyMiwgI2U3NGMzYyk7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXItcHJvamVjdDMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIzMjUyNjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDE0MzQ1LCAjMjMyNTI2KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0MTQzNDUsICMyMzI1MjYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgICAgIH1cbiAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW0gNXJlbSA0cmVtO1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLDAsOTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXMgZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMi41cmVtIDAgMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdGlja3ktdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMTNweDtcbiAgICAgICAgICAgIHRvcDogLTJyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN0aWNreS1pdGVtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAub2N0b2NhdC1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBib3R0b206MXJlbTtcbiAgICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAub2N0b2NhdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvZ2l0aHViLnBuZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB3aWR0aDo0NXB4O1xuICAgICAgICAgIGhlaWdodDo0NXB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLm9jdG9jYXQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL29jdG9jYXQucG5nJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gM3JlbSAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Projects.jsx */",
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
          className: "jsx-2859309967" + " " + "fade ".concat(slideIndex === i ? 'swing-out-top-bck' : 'nonactive'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "jsx-2859309967" + " " + "numbertext has-background-white has-text-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, i + 1, "\xA0/ 6"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-2859309967" + " " + "image is-3by2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          alt: "slide-".concat(i + 1),
          className: "jsx-2859309967",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "2859309967",
          css: ".active.jsx-2859309967{display:block;}.nonactive.jsx-2859309967{display:none;}.numbertext.jsx-2859309967{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;z-index:20;bottom:-20px;left:20px;background-color:hsl(0,0,86%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.swing-out-top-bck.jsx-2859309967{-webkit-animation:swing-out-top-bck 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;-webkit-animation:swing-out-top-bck-jsx-2859309967 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;animation:swing-out-top-bck-jsx-2859309967 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;}@-webkit-keyframes swing-out-top-bck{0%.jsx-2859309967{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%.jsx-2859309967{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@-webkit-keyframes swing-out-top-bck-jsx-2859309967{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@keyframes swing-out-top-bck-jsx-2859309967{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENhLEFBR2dDLEFBR0EsQUFHRixBQVlzRixBQUsvRCxBQU9HLEFBU0gsQUFPRyxXQXZDdEIsRUFIbkIsQ0FIQSxZQU9zQixNQWdCZ0IsQUFnQkEsR0FURyxBQWdCQSxVQXRDcEIsaUJBQ0Msa0JBQ1AsV0FDRSxHQU9vRixVQU54RixVQUNxQixFQVdDLEFBZ0JBLFlBVEEsQUFnQkEsZ0JBakNDLENBV0QsQUFnQkEsWUFUQSxBQWdCQSwrREF0Qm5CLEFBZ0JBLFVBZlosQUFnQkEsRUFWWSxBQWdCQSxVQWZaLEFBZ0JBLE9BbkNKLHVEQUlFIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNsYXNzIFNsaWRlc2hvd0dhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzbGlkZUluZGV4OiAwIH07XG4gICAgdGhpcy5wbHVzU2xpZGVzID0gdGhpcy5wbHVzU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcGx1c1NsaWRlcyhuKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzbGlkZUluZGV4ICsgbiA+IDUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiAwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gaWYgKHNsaWRlSW5kZXggKyBuIDwgMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzbGlkZUluZGV4OiBwcmV2U3RhdGUuc2xpZGVJbmRleCArIG4sXG4gICAgfSkpO1xuICB9XG5cbiAgY3VycmVudFNsaWRlKG4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogbiB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNsaWRlcygpIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2xpZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNsaWRlcy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgZmFkZSAke3NsaWRlSW5kZXggPT09IGkgPyAnc3dpbmctb3V0LXRvcC1iY2snIDogJ25vbmFjdGl2ZSd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJ0ZXh0IGhhcy1iYWNrZ3JvdW5kLXdoaXRlIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAmbmJzcDsvIDZcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXNbaV19IGFsdD17YHNsaWRlLSR7aSArIDF9YH0gLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ub25hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubnVtYmVydGV4dCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgICAgICAgICBib3R0b206IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgbGVmdDoyMHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCw4NiUpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsaWRlcztcbiAgfVxuXG4gIGNyZWF0ZVByZXZpZXdzKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBwcmV2aWV3cy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c2xpZGVJbmRleCA9PT0gaSA/ICdwcmV2aWV3LWFjdGl2ZScgOiAncHJldmlldy1pbmFjdGl2ZSd9XG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ldfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmN1cnJlbnRTbGlkZShpKX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIGFsdD17YHByZXZpZXctJHtpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgLnByZXZpZXctYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBwcmV2aWV3cztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbG9yIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzKCk7XG4gICAgY29uc3QgcHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNvbnRhaW5lclwiPlxuICAgICAgICB7LyogU0xJREVTICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMS41cmVtJyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICB7c2xpZGVzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFNMSURFIFBSRVZJRVcgSVRFTVMgKi99XG4gICAgICAgIDxGYWRlIGRlbGF5PXsxNTAwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtMSBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuXG4gICAgICAgIDxGYWRlIGRlbGF5PXsxNzAwfT5cbiAgICAgICAgICB7LyogUFJFVklPVVMgQlVUVE9OICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldiBidXR0b25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoLTEpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7LyogTkVYVCBCVVRUT04gKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvblwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygxKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBGYWRpbmcgYW5pbWF0aW9uICovXG4gICAgICAgICAgICAuZmFkZSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAtMy41cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldiB7XG4gICAgICAgICAgICAgIGxlZnQ6IDM1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgcmlnaHQ6IDM1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
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
          className: "jsx-380949187" + " " + "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-380949187" + " " + "image is-3by2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          onClick: function onClick() {
            return _this2.currentSlide(i);
          },
          role: "presentation",
          alt: "preview-".concat(i),
          className: "jsx-380949187" + " " + ((slideIndex === i ? 'preview-active' : 'preview-inactive') || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "380949187",
          css: ".preview-active.jsx-380949187{cursor:pointer;}.preview-inactive.jsx-380949187{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}.preview-inactive.jsx-380949187:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}.column.jsx-380949187{padding:0.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEhhLEFBR2tDLEFBR0osQUFNaUIsQUFLWixXQVZZLElBSGhDLENBY0EsWUFMd0IsV0FMQSxxQ0FNUixVQUNoQixDQU5tQixlQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NsaWRlc2hvd0dhbGxlcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jbGFzcyBTbGlkZXNob3dHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2xpZGVJbmRleDogMCB9O1xuICAgIHRoaXMucGx1c1NsaWRlcyA9IHRoaXMucGx1c1NsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsdXNTbGlkZXMobikge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2xpZGVJbmRleCArIG4gPiA1KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGlmIChzbGlkZUluZGV4ICsgbiA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiA1IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2xpZGVJbmRleDogcHJldlN0YXRlLnNsaWRlSW5kZXggKyBuLFxuICAgIH0pKTtcbiAgfVxuXG4gIGN1cnJlbnRTbGlkZShuKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IG4gfSk7XG4gIH1cblxuICBjcmVhdGVTbGlkZXMoKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzbGlkZXMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YGZhZGUgJHtzbGlkZUluZGV4ID09PSBpID8gJ3N3aW5nLW91dC10b3AtYmNrJyA6ICdub25hY3RpdmUnfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVydGV4dCBoYXMtYmFja2dyb3VuZC13aGl0ZSBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgJm5ic3A7LyA2XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VzW2ldfSBhbHQ9e2BzbGlkZS0ke2kgKyAxfWB9IC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubm9uYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm51bWJlcnRleHQge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6MjBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAsODYlKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzbGlkZXM7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3cygpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJldmlld3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcHJldmlld3MucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlSW5kZXggPT09IGkgPyAncHJldmlldy1hY3RpdmUnIDogJ3ByZXZpZXctaW5hY3RpdmUnfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jdXJyZW50U2xpZGUoaSl9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBhbHQ9e2BwcmV2aWV3LSR7aX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIC5wcmV2aWV3LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcygpO1xuICAgIGNvbnN0IHByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIFNMSURFUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEuNXJlbScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBTTElERSBQUkVWSUVXIElURU1TICovfVxuICAgICAgICA8RmFkZSBkZWxheT17MTUwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8RmFkZSBkZWxheT17MTcwMH0+XG4gICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYgYnV0dG9uXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dCBidXR0b25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgLmZhZGUge1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldixcbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTMuNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6MTU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBsZWZ0OiAzNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldjpob3ZlcixcbiAgICAgICAgICAgIC5uZXh0OmhvdmVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0LCAucHJldiwgLm5leHQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3dHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
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
        className: "jsx-258551236" + " " + "gallery-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          marginBottom: '1.5rem'
        },
        className: "jsx-258551236" + " " + "columns is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          padding: 0
        },
        className: "jsx-258551236" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, slides)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-258551236" + " " + "columns is-variable is-1 is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, previews)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1700,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
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
        className: "jsx-258551236" + " " + "prev button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-258551236" + " " + "fas fa-angle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
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
        className: "jsx-258551236" + " " + "next button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-258551236" + " " + "fas fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "258551236",
        css: ".gallery-container.jsx-258551236{position:relative;margin-top:10px;}.fade.jsx-258551236{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-258551236;animation-name:fade-jsx-258551236;-webkit-animation-duration:1.5s;animation-duration:1.5s;}@-webkit-keyframes fade{from.jsx-258551236{opacity:.4;}to.jsx-258551236{opacity:1;}}@-webkit-keyframes fade-jsx-258551236{from{opacity:.4;}to{opacity:1;}}@keyframes fade-jsx-258551236{from{opacity:.4;}to{opacity:1;}}.prev.jsx-258551236,.next.jsx-258551236{cursor:pointer;position:absolute;bottom:-3.5rem;padding:5px 15px;color:white;font-weight:bold;font-size:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;opacity:.7;}.prev.jsx-258551236{left:35%;}.next.jsx-258551236{right:35%;}.prev.jsx-258551236:hover,.next.jsx-258551236:hover{opacity:.8;cursor:pointer;}@media screen and (max-width:769px){.numbertext.jsx-258551236,.prev.jsx-258551236,.next.jsx-258551236{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUxXLEFBR21DLEFBS1EsQUFNYixBQUNILEFBR0csQUFDSCxBQUlHLEFBYU4sQUFHQyxBQUlDLEFBS0csU0FYaEIsQ0F0QmUsQUFJQSxBQXFCZixDQTFCa0IsQUFJQSxBQTBCRCxFQUtmLEVBekJrQixHQXBCQSxRQXlDcEIsRUFwQ2tDLEtBZ0JqQixDQXBCakIsY0FxQm1CLFlBaEJHLEtBaUJSLFlBQ0ssaUJBQ0YsZUFDRSwyQkFuQk8sd0RBQzFCLEVBbUIyQix5QkFDZixXQUNDLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gNSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogNSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNsaWRlSW5kZXg6IHByZXZTdGF0ZS5zbGlkZUluZGV4ICsgbixcbiAgICB9KSk7XG4gIH1cblxuICBjdXJyZW50U2xpZGUobikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBuIH0pO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVzKCkge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaSA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLWJhY2tncm91bmQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgICAgICAgICAgICAgICBsZWZ0OjIwcHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwLDg2JSk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByZXZpZXdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByZXZpZXdzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpID8gJ3ByZXZpZXctYWN0aXZlJyA6ICdwcmV2aWV3LWluYWN0aXZlJ31cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaV19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3VycmVudFNsaWRlKGkpfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgYWx0PXtgcHJldmlldy0ke2l9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAucHJldmlldy1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXZpZXdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezE1MDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy0xIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgPEZhZGUgZGVsYXk9ezE3MDB9PlxuICAgICAgICAgIHsvKiBQUkVWSU9VUyBCVVRUT04gKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2IGJ1dHRvblwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygtMSl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHsvKiBORVhUIEJVVFRPTiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQgYnV0dG9uXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKDEpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYsXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC0zLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICB6LWluZGV4OjE1O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2IHtcbiAgICAgICAgICAgICAgbGVmdDogMzUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICByaWdodDogMzUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXY6aG92ZXIsXG4gICAgICAgICAgICAubmV4dDpob3ZlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgICAubnVtYmVydGV4dCwgLnByZXYsIC5uZXh0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93R2FsbGVyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
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