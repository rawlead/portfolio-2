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

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: getProjectsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectsAPI", function() { return getProjectsAPI; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ "prismic-javascript");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getProjectsAPI =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context.sent;
            _context.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at('document.type', 'project'), _objectSpread({
              // Order by last publication date from most recent to oldest
              orderings: '[project.date]'
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




/***/ }),

/***/ "./components/Education.jsx":
/*!**********************************!*\
  !*** ./components/Education.jsx ***!
  \**********************************/
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




var Education = function Education() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-926098049" + " " + "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 200,
    cascade: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-926098049" + " " + "is-size-3 section-title section-title__dark"
  }, "Education"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-926098049" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-926098049" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-926098049" + " " + "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-926098049" + " " + "is-uppercase"
  }, "University of Social Sciences"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-926098049" + " " + "is-uppercase"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-926098049" + " " + "fas fa-map-marker-alt"
  }), "\xA0Warsaw, Poland"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926098049" + " " + "is-uppercase"
  }, "Bachelor of Computer Science"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926098049"
  }, "Graduated: June 2018"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-926098049" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-926098049" + " " + "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-926098049" + " " + "is-uppercase"
  }, "Machine Building College"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-926098049" + " " + "is-uppercase"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-926098049" + " " + "fas fa-map-marker-alt"
  }), "\xA0Sumy, Ukraine"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926098049" + " " + "is-uppercase"
  }, "Associate of Chemical Engineering"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926098049"
  }, "Graduated: June 2014"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "926098049",
    css: ".section-title.jsx-926098049{margin-bottom:4rem;}.columns.jsx-926098049{max-width:936px;margin-left:auto;margin-right:auto;}.wrapper.jsx-926098049{background-color:#fff;position:relative;padding-top:2rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border-bottom:1px solid hsl(0,0%,86%);padding-bottom:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRWR1Y2F0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ08sQUFHOEIsQUFLSCxBQUtNLGdCQUpMLEdBTG5CLEdBVW9CLFdBSkEsT0FLRCxXQUpuQixNQUtnRCwrQ0FDTixzQ0FDcEIsb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRWR1Y2F0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNvbnN0IEVkdWNhdGlvbiA9ICgpID0+IChcblxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgPEZhZGUgZGVsYXk9ezIwMH0gY2FzY2FkZT5cblxuICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtMyBzZWN0aW9uLXRpdGxlIHNlY3Rpb24tdGl0bGVfX2RhcmtcIj5FZHVjYXRpb248L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaXMtdXBwZXJjYXNlXCI+VW5pdmVyc2l0eSBvZiBTb2NpYWwgU2NpZW5jZXM8L2gzPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImlzLXVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtXYXJzYXcsIFBvbGFuZFxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlzLXVwcGVyY2FzZVwiPkJhY2hlbG9yIG9mIENvbXB1dGVyIFNjaWVuY2U8L3A+XG4gICAgICAgICAgICA8cD5HcmFkdWF0ZWQ6IEp1bmUgMjAxODwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaXMtdXBwZXJjYXNlXCI+TWFjaGluZSBCdWlsZGluZyBDb2xsZWdlPC9oMz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJpcy11cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7U3VteSwgVWtyYWluZVxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlzLXVwcGVyY2FzZVwiPkFzc29jaWF0ZSBvZiBDaGVtaWNhbCBFbmdpbmVlcmluZzwvcD5cbiAgICAgICAgICAgIDxwPkdyYWR1YXRlZDogSnVuZSAyMDE0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRmFkZT5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbnMge1xuICAgICAgICAgIG1heC13aWR0aDogOTM2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb247XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Education.jsx */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

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
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Social */ "./components/Social.jsx");




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-1945949292" + " " + "footer has-background-white-ter"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Social__WEBPACK_IMPORTED_MODULE_2__["default"], {
    linkStyle: {
      color: '#4a4a4a'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1945949292" + " " + "has-text-centered"
  }, "This site is made with React, Next and Bulma by", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1945949292" + " " + "has-text-weight-bold"
  }, " IVAN SHYRAI")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1945949292"
  }, "The source code is available on", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/rawlead/portfolio-2",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, "\xA0GitHub")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1945949292"
  }, "2018"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
    className: "jsx-1945949292" + " " + "image is-96x96"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.youracclaim.com/badges/61136f12-504c-475c-941f-7657fdd8c37e/public_url",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/oracle.png",
    alt: "oracle-budge",
    className: "jsx-1945949292"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1945949292" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://bulma.io",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1945949292"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://bulma.io/images/made-with-bulma--black.png",
    alt: "Made with Bulma",
    width: "128",
    height: "24",
    className: "jsx-1945949292"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1945949292",
    css: ".image.jsx-1945949292{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;margin:0 auto;}.image.jsx-1945949292:hover{-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);}.footer.jsx-1945949292{padding-top:8rem;}.bulma.jsx-1945949292{height:30px;}.columns.jsx-1945949292{margin-top:2rem;}.content.jsx-1945949292{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ08sQUFHMEMsQUFJQSxBQUlkLEFBR0wsQUFHSSxBQUdILFlBTGYsSUFHQSxDQU5BLGNBSnlCLHVDQUpULElBaUJLLFVBaEJyQixDQUlBLGtGQWFBIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU29jaWFsIGZyb20gJy4vU29jaWFsJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlciBoYXMtYmFja2dyb3VuZC13aGl0ZS10ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICA8U29jaWFsIGxpbmtTdHlsZT17eyBjb2xvcjogJyM0YTRhNGEnIH19IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICBUaGlzIHNpdGUgaXMgbWFkZSB3aXRoIFJlYWN0LCBOZXh0IGFuZCBCdWxtYSBieVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj4gSVZBTiBTSFlSQUk8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIHNvdXJjZSBjb2RlIGlzIGF2YWlsYWJsZSBvblxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYXdsZWFkL3BvcnRmb2xpby0yXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAmbmJzcDtHaXRIdWJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+MjAxODwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy05Nng5NlwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXJhY2NsYWltLmNvbS9iYWRnZXMvNjExMzZmMTItNTA0Yy00NzVjLTk0MWYtNzY1N2ZkZDhjMzdlL3B1YmxpY191cmxcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvb3JhY2xlLnBuZ1wiIGFsdD1cIm9yYWNsZS1idWRnZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9idWxtYS5pb1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9idWxtYS5pby9pbWFnZXMvbWFkZS13aXRoLWJ1bG1hLS1ibGFjay5wbmdcIiBhbHQ9XCJNYWRlIHdpdGggQnVsbWFcIiB3aWR0aD1cIjEyOFwiIGhlaWdodD1cIjI0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDsgICAgICAgIFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZTpob3ZlciB7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5idWxtYSB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW5zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Zvb3Rlcj5cbik7XG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Footer.jsx */"
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





var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "hero-parallax",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: true,
    tag: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2371450790" + " " + "hero is-bold is-fullheight"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2371450790" + " " + "hero-cover"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "hero-parallax",
    offsetYMax: 10,
    offsetYMin: -10,
    tag: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2371450790" + " " + "hero-inner"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2371450790" + " " + "bird-container bird-container--one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2371450790" + " " + "bird  bird--one"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2371450790" + " " + "bird-container bird-container--two"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2371450790" + " " + "bird  bird--two"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2371450790" + " " + "hero-content has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "custom-class",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: false,
    tag: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 800
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      margin: '0 auto'
    },
    href: "!",
    className: "jsx-2371450790" + " " + "image is-128x128"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2371450790" + " " + "myself"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "custom-class",
    offsetYMax: 20,
    offsetYMin: -20,
    slowerScrollRate: false,
    tag: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1000
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2371450790" + " " + "title box-effect is-size-1 has-text-weight-bold has-text-grey-lighter"
  }, "Ivan Shyrai")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1400
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2371450790" + " " + "subtitle has-text-grey-lighter"
  }, "Java Software Developer"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2371450790",
    css: ".hero-parallax.jsx-2371450790{display:inline-block !important;}.hero.jsx-2371450790{background:url(\"../static/barcelona-1.jpg\") center bottom;background-size:cover;overflow:hidden;background-repeat:no-repeat;}.hero-cover.jsx-2371450790{position:absolute;top:0;left:0;right:0;bottom:0;background:#0a0a0a;opacity:.75;}.hero-inner.jsx-2371450790{background:url(\"../static/barcelona-2.jpg\") center bottom;background-repeat:no-repeat;margin-left:auto;margin-right:auto;margin-top:52px;background-size:cover;height:100vh;width:92vw;border-left:2px solid #0A0A0A;border-top:2px solid #0A0A0A;border-right:2px solid #0A0A0A;overflow:hidden;border-radius:5px;}.hero-content.jsx-2371450790{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.myself.jsx-2371450790{background:url('../static/me.jpg');background-size:cover;-webkit-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;will-change:transform;width:128px;height:128px;border-radius:5px;}.myself.jsx-2371450790:hover{background:url('../static/me2.jpg');background-size:cover;-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);cursor:pointer;border-radius:50%;}.bird.jsx-2371450790{background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');background-size:auto 100%;width:88px;height:125px;z-index:-1;will-change:background-position;-webkit-animation-name:fly-cycle;-webkit-animation-name:fly-cycle-jsx-2371450790;animation-name:fly-cycle-jsx-2371450790;-webkit-animation-timing-function:steps(10);-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird--one.jsx-2371450790{-webkit-animation-duration:1s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird--two.jsx-2371450790{-webkit-animation-duration:0.9s;-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}.bird-container.jsx-2371450790{position:absolute;top:20%;left:-10%;will-change:transform;-webkit-transform:scale(0) translateX(-10vw);-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);-webkit-animation-timing-function:linear;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird-container--one.jsx-2371450790{-webkit-animation-name:fly-right-one;-webkit-animation-name:fly-right-one-jsx-2371450790;animation-name:fly-right-one-jsx-2371450790;-webkit-animation-duration:15s;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;-webkit-animation-delay:0;animation-delay:0;}.bird-container--two.jsx-2371450790{-webkit-animation-name:fly-right-two;-webkit-animation-name:fly-right-two-jsx-2371450790;animation-name:fly-right-two-jsx-2371450790;-webkit-animation-duration:17s;-webkit-animation-duration:17s;animation-duration:17s;-webkit-animation-delay:.5s;-webkit-animation-delay:.5s;animation-delay:.5s;}@-webkit-keyframes fly-cycle{100%.jsx-2371450790{-webkit-background-position:-900px 0;background-position:-900px 0;}}@-webkit-keyframes fly-cycle-jsx-2371450790{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}@keyframes fly-cycle-jsx-2371450790{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}@-webkit-keyframes fly-right-one{0%.jsx-2371450790{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%.jsx-2371450790{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%.jsx-2371450790{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%.jsx-2371450790{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%.jsx-2371450790{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%.jsx-2371450790{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%.jsx-2371450790{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%.jsx-2371450790{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-one-jsx-2371450790{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@keyframes fly-right-one-jsx-2371450790{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-two{0%.jsx-2371450790{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%.jsx-2371450790{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%.jsx-2371450790{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%.jsx-2371450790{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%.jsx-2371450790{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%.jsx-2371450790{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%.jsx-2371450790{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%.jsx-2371450790{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@-webkit-keyframes fly-right-two-jsx-2371450790{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@keyframes fly-right-two-jsx-2371450790{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVPLEFBRzJDLEFBRzBCLEFBTXhDLEFBU3dDLEFBZXpDLEFBT2tCLEFBVUMsQUFVdUQsQUFjN0QsQUFNRSxBQU1kLEFBWW1CLEFBUUEsQUFTRSxBQU1BLEFBTVUsQUFLZSxBQU1BLEFBS0EsQUFLQSxBQUtBLEFBS0MsQUFLQSxBQU1oQixBQUtlLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQyxBQUtBLEFBTUMsQUFJRixBQUlDLEFBSUEsQUFJRSxBQUlGLEFBS0MsQUFLQSxBQU1BLEFBSUYsQUFJQyxBQUlBLEFBSUUsQUFJRixBQUtDLEFBS0Esa0JBMVE3RCxBQXdCSSxBQXFERCxNQTVFRCxFQTZFRyxDQXJERixHQXdDYyxDQS9EZCxDQVhWLEFBZ0YwQixHQTdDZ0IsQUFLbEIsQ0FVQSxBQXNDQSxDQVVPLEFBUUEsQUFTRSxBQU1BLEVBN0d2QixRQW1IaUMsQUEwQ0EsQ0E1SnRCLFNBNEJvQixDQXRDakIsQUFlTSxBQWlDQyxBQXNDZ0IsSUE0Q1csQUFLQSxBQUtBLEFBS0EsQUFLQSxBQXFCQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBb0JBLEFBb0NBLENBNUZDLEFBS0EsQUFvQ0EsQUFLQSxBQWNBLEFBSUEsQUFRQSxBQXdCQSxBQUlBLEFBUUEsQ0F4REMsQUF5QkEsQUFLQSxBQU1BLEFBeUJBLEFBS0EsQ0FsREMsQUFvQ0EsQ0FsSjNELEFBTUEsQ0E1R1ksT0FzQm9CLEtBckJsQyxDQVhrQixFQXVFYyxJQXhEYixDQWlDSSxDQTZCVSxHQXJCTCxLQXZERSxBQXFDRyxPQXRCYixBQXNFbUIsU0FkZixLQWZYLEVBcUJZLEVBN0RQLEdBZmxCLElBd0RlLEtBcUNrQixBQVFBLElBckZULElBeUNYLFdBQ3FCLE9BekNuQixHQThCcUIsRUF3QnBDLEFBdUJ5QixBQVFBLEVBakVELE1BbkJYLENBMkRiLEdBNkNFLEFBMENBLEdBcklGLElBWmdDLENBd0NHLElBckJyQixRQVVjLElBVGIsYUFuQmdCLEFBb0JYLElBb0JPLENBbUNDLEFBUUUsUUFsQmEsS0E1QzNDLEtBdUZFLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFxQkEsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQW9CQSxBQW9DQSxJQTVGQSxBQUtBLEFBb0NBLEFBS0EsQUFjQSxBQUlBLEFBUUEsQUF3QkEsQUFJQSxBQVFBLEVBaFArQixFQTJFYixBQTZHbEIsQUF5QkEsQUFLQSxBQU1BLEFBeUJBLEFBS0EsRUF2S29CLEVBcUhwQixBQW9DQSxtQkEzS2lDLE1BaEVqQixhQTJCRCxFQWdEakIsQ0ExRW9CLEtBa0ZwQixPQXZEb0IsSUFXMEIsRUFyQzlDLFlBMkJBLHNCQW9DNkMsUUF6QlAsbUNBMEJELDZDQXpCUSxpQ0EwQjdDLFVBekJxQyw4RUFDckMiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9IZXJvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG4gIDxQYXJhbGxheFxuICAgIGNsYXNzTmFtZT1cImhlcm8tcGFyYWxsYXhcIlxuICAgIG9mZnNldFlNYXg9ezMwfVxuICAgIG9mZnNldFlNaW49ey0zMH1cbiAgICBzbG93ZXJTY3JvbGxSYXRlXG4gICAgdGFnPVwiZmlndXJlXCJcbiAgPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtYm9sZCBpcy1mdWxsaGVpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY292ZXJcIiAvPlxuICAgICAgPFBhcmFsbGF4XG4gICAgICAgIGNsYXNzTmFtZT1cImhlcm8tcGFyYWxsYXhcIlxuICAgICAgICBvZmZzZXRZTWF4PXsxMH1cbiAgICAgICAgb2Zmc2V0WU1pbj17LTEwfVxuICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW5uZXJcIj5cbiAgICAgICAgICB7LyogQklSRFMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkLWNvbnRhaW5lciBiaXJkLWNvbnRhaW5lci0tb25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQgIGJpcmQtLW9uZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkLWNvbnRhaW5lciBiaXJkLWNvbnRhaW5lci0tdHdvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQgIGJpcmQtLXR3b1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICBvZmZzZXRZTWF4PXszMH1cbiAgICAgICAgICAgICAgb2Zmc2V0WU1pbj17LTMwfVxuICAgICAgICAgICAgICBzbG93ZXJTY3JvbGxSYXRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezgwMH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMTI4eDEyOFwiIHN0eWxlPXt7IG1hcmdpbjogJzAgYXV0bycgfX0gaHJlZj1cIiFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlzZWxmXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgICAgb2Zmc2V0WU1heD17MjB9XG4gICAgICAgICAgICAgIG9mZnNldFlNaW49ey0yMH1cbiAgICAgICAgICAgICAgc2xvd2VyU2Nyb2xsUmF0ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXsxMDAwfT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgYm94LWVmZmVjdCBpcy1zaXplLTEgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgICAgICBJdmFuIFNoeXJhaVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezE0MDB9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBoYXMtdGV4dC1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgICAgIEphdmEgU29mdHdhcmUgRGV2ZWxvcGVyXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhcmFsbGF4PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmhlcm8tcGFyYWxsYXgge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zdGF0aWMvYmFyY2Vsb25hLTEuanBnXCIpIGNlbnRlciBib3R0b207XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8tY292ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XG4gICAgICAgICAgb3BhY2l0eTogLjc1O1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvLWlubmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zdGF0aWMvYmFyY2Vsb25hLTIuanBnXCIpIGNlbnRlciBib3R0b207XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDkydnc7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMEEwQTBBO1xuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMEEwQTBBO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwQTBBMEE7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8tY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLm15c2VsZiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvbWUuanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAubXlzZWxmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9tZTIuanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5iaXJkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE3NDQ3OS9iaXJkLWNlbGxzLnN2ZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICAgICAgICAgIHdpZHRoOiA4OHB4O1xuICAgICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtcG9zaXRpb247XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmx5LWN5Y2xlO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygxMCk7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtLW9uZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtLXR3byB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuOXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC43NXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43NXM7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgbGVmdDogLTEwJTtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5iaXJkLWNvbnRhaW5lci0tb25lIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtb25lO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtb25lO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDA7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5iaXJkLWNvbnRhaW5lci0tdHdvIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtdHdvO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtdHdvO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC41cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC41cztcbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmx5LWN5Y2xlIHtcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAyMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmbHktcmlnaHQtdHdvIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0xMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ydmgpIHRyYW5zbGF0ZVgoLTEwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00dmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxdmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0xMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAzMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjV2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjV2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA2MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUGFyYWxsYXg+XG4pO1xuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Hero.jsx */"
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





var SkillItems = function SkillItems(_ref) {
  var logos = _ref.logos,
      headings = _ref.headings;
  var items = [];

  for (var i = 0; i < logos.length; i += 1) {
    items.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: i,
      className: "level-item has-text-centered"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "title",
      style: {
        marginBottom: 0
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "image is-32x32 ",
      style: {
        margin: 'auto auto 8px auto'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: logos[i],
      alt: "".concat(headings[i], "-logo")
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "heading has-text-weight-bold has-text-grey-light",
      style: {
        fontSize: '1.25rem',
        textTransform: 'none'
      }
    }, headings[i]))));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "level is-mobile",
    style: {
      padding: '.6rem 0 0 0',
      borderTop: '1px solid hsl(0, 0%, 30%)',
      borderBottom: '1px solid hsl(0, 0%, 30%)',
      borderRadius: '5px'
    }
  }, items);
};

var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-43923825" + " " + "section has-background-black"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "main-content has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    delay: 200,
    cascade: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    offsetYMax: 50,
    offsetYMin: -50,
    tag: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      minHeight: '50vh'
    },
    className: "jsx-43923825"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "is-size-3 section-title section-title__light"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column content "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-43923825" + " " + "has-text-grey-light is-size-5"
  }, "Oracle Certified Java Developer specialised in front-end and back-end development."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-43923825" + " " + "has-text-grey-light is-size-5"
  }, "Available for hire and open to any ideas of cooperation."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "title-row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "is-size-3 has-text-weight-bold section-title section-title__light"
  }, "Technical Skills")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "column is-size-4 has-text-weight-bold has-text-grey-light"
  }, "HTML / CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns is-gapless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['JSX', 'UI Design', 'Materialize'],
    logos: ['../static/logos/react.svg', '../static/logos/ui.png', '../static/logos/materialize.png']
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['Bootstrap', 'Bulma', 'Sass'],
    logos: ['../static/logos/bootstrap.svg', '../static/logos/bulma.png', '../static/logos/sass.svg']
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "skills-col-title is-size-5 has-text-grey-light"
  }, "BACK-END"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['Java', 'Spring', 'MySQL', 'Hibernate'],
    logos: ['../static/logos/java.svg', '../static/logos/spring.png', '../static/logos/mysql.svg', '../static/logos/hibernate.png']
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "skills-col-title is-size-5 has-text-grey-light"
  }, "JAVASCRIPT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['React', 'Next', 'Vue', 'jQuery'],
    logos: ['../static/logos/react.svg', '../static/logos/next.png', '../static/logos/vuejs.svg', '../static/logos/jquery.svg']
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-43923825" + " " + "column is-size-5 has-text-weight-bold has-text-grey-light"
  }, "OTHER")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "columns is-gapless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['GIT', 'AWS', 'Heroku'],
    logos: ['../static/logos/github.png', '../static/logos/amazonwebservices.svg', '../static/logos/heroku.svg']
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-43923825" + " " + "column is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['IntelliJ', 'Photoshop', 'Illustrator'],
    logos: ['../static/logos/intellij.svg', '../static/logos/photoshop.svg', '../static/logos/illustrator.svg']
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "43923825",
    css: ".section.jsx-43923825{overflow:hidden;}.main-content.jsx-43923825{padding:4rem;position:relative;max-width:1152px;margin:0 auto;}.skills-col-title.jsx-43923825{margin-bottom:.4rem;font-weight:bold;font-size:1rem;}.column.jsx-43923825{margin-top:2rem;}.columns.jsx-43923825{margin-bottom:0;}.title-row.jsx-43923825{margin-top:5rem;}.oracle.jsx-43923825{position:relative;z-index:50;}@media screen and (max-width:769px){.section.jsx-43923825{padding:1rem .25rem;}.section.jsx-43923825 .column.jsx-43923825{padding:0;margin:2.5rem 0 0.1rem 0;}}@media screen and (max-width:1024px){.main-content.jsx-43923825{padding:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xPLEFBRzJCLEFBR0gsQUFNTyxBQUtKLEFBR0QsQUFHQSxBQUdHLEFBS00sQUFHVixBQU9mLFVBTjhCLEdBNUJYLEFBa0NsQixHQXJDRixBQWNBLEFBR0EsQUFHQSxFQUdhLEVBZE0sQUFtQmpCLFNBSkYsRUFwQm1CLElBNEJqQixFQXRCZSxXQUxELElBTWhCLFVBTEEiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9JbmZvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNvbnN0IFNraWxsSXRlbXMgPSAoeyBsb2dvcywgaGVhZGluZ3MgfSkgPT4ge1xuICBjb25zdCBpdGVtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZ29zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaXRlbXMucHVzaChcbiAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMzJ4MzIgXCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0byBhdXRvIDhweCBhdXRvJyB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29zW2ldfSBhbHQ9e2Ake2hlYWRpbmdzW2ldfS1sb2dvYH0gLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRpbmcgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtZ3JleS1saWdodFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4yNXJlbScsIHRleHRUcmFuc2Zvcm06ICdub25lJyB9fT57aGVhZGluZ3NbaV19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PixcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBhZGRpbmc6ICcuNnJlbSAwIDAgMCcsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCBoc2woMCwgMCUsIDMwJSknLFxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgaHNsKDAsIDAlLCAzMCUpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2l0ZW1zfVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgSW5mbyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBoYXMtYmFja2dyb3VuZC1ibGFja1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICA8RmFkZSBkZWxheT17MjAwfSBjYXNjYWRlPlxuICAgICAgICB7Lyogcm93IG1haW4gZGVzY3JpcHRpb24gKi99XG4gICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgIG9mZnNldFlNYXg9ezUwfVxuICAgICAgICAgIG9mZnNldFlNaW49ey01MH1cbiAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtaW5IZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTMgc2VjdGlvbi10aXRsZSBzZWN0aW9uLXRpdGxlX19saWdodFwiPkFib3V0PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50IFwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJoYXMtdGV4dC1ncmV5LWxpZ2h0IGlzLXNpemUtNVwiPlxuICAgICAgICAgICAgICAgICAgT3JhY2xlIENlcnRpZmllZCBKYXZhIERldmVsb3BlciBzcGVjaWFsaXNlZCBpblxuICAgICAgICAgICAgICAgICAgIGZyb250LWVuZCBhbmQgYmFjay1lbmQgZGV2ZWxvcG1lbnQuXG4gICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGFzLXRleHQtZ3JleS1saWdodCBpcy1zaXplLTVcIj5BdmFpbGFibGUgZm9yIGhpcmUgYW5kIG9wZW4gdG8gYW55IGlkZWFzIG9mIGNvb3BlcmF0aW9uLjwvaDY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtcm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtMyBoYXMtdGV4dC13ZWlnaHQtYm9sZCBzZWN0aW9uLXRpdGxlIHNlY3Rpb24tdGl0bGVfX2xpZ2h0XCI+VGVjaG5pY2FsIFNraWxsczwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiByb3cgZmlyc3QgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbHVtbiBpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgSFRNTCAvIENTU1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtZ2FwbGVzc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgJ0pTWCcsXG4gICAgICAgICAgICAgICAgJ1VJIERlc2lnbicsXG4gICAgICAgICAgICAgICAgJ01hdGVyaWFsaXplJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3JlYWN0LnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy91aS5wbmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvbWF0ZXJpYWxpemUucG5nJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnQm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICAnQnVsbWEnLFxuICAgICAgICAgICAgICAgICdTYXNzJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2Jvb3RzdHJhcC5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYnVsbWEucG5nJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3Nhc3Muc3ZnJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiByb3cgc2Vjb25kICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxscy1jb2wtdGl0bGUgaXMtc2l6ZS01IGhhcy10ZXh0LWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgQkFDSy1FTkRcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICdKYXZhJyxcbiAgICAgICAgICAgICAgICAnU3ByaW5nJyxcbiAgICAgICAgICAgICAgICAnTXlTUUwnLFxuICAgICAgICAgICAgICAgICdIaWJlcm5hdGUnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvamF2YS5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3Mvc3ByaW5nLnBuZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9teXNxbC5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvaGliZXJuYXRlLnBuZycsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJza2lsbHMtY29sLXRpdGxlIGlzLXNpemUtNSBoYXMtdGV4dC1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgIEpBVkFTQ1JJUFRcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICdSZWFjdCcsXG4gICAgICAgICAgICAgICAgJ05leHQnLFxuICAgICAgICAgICAgICAgICdWdWUnLFxuICAgICAgICAgICAgICAgICdqUXVlcnknLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcmVhY3Quc3ZnJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL25leHQucG5nJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3Z1ZWpzLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9qcXVlcnkuc3ZnJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiByb3cgdGhpcmQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbHVtbiBpcy1zaXplLTUgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgT1RIRVJcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtZ2FwbGVzc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgJ0dJVCcsXG4gICAgICAgICAgICAgICAgJ0FXUycsXG4gICAgICAgICAgICAgICAgJ0hlcm9rdScsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9naXRodWIucG5nJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2FtYXpvbndlYnNlcnZpY2VzLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9oZXJva3Uuc3ZnJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnSW50ZWxsaUonLFxuICAgICAgICAgICAgICAgICdQaG90b3Nob3AnLFxuICAgICAgICAgICAgICAgICdJbGx1c3RyYXRvcicsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9pbnRlbGxpai5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcGhvdG9zaG9wLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9pbGx1c3RyYXRvci5zdmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZhZGU+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGxzLWNvbC10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjRyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbnMge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm9yYWNsZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlY3Rpb24gLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDAgMC4xcmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Info.jsx */"
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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.jsx");


 // import Head from 'next/head';


 // import { initGA, logPageView } from '../utils/analytics';

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2107966404",
    css: "body{background-color:#f2f2f2;}*{font-family:'Oswald',sans-serif !important;}.button{border-radius:5px !important;}.section-title{text-align:center;max-width:185px;margin-left:auto;margin-right:auto;text-transform:uppercase;padding-bottom:1rem;font-weight:bold;}.section-title__dark{border-bottom:3px solid #4a4a4a;border-radius:5px;}.section-title__light{border-bottom:3px solid hsl(0,0%,86%);border-radius:5px;color:hsl(0,0%,86%);}.box-effect:after,.box-effect:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}.box-effect:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}.box-effect:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.box-effect:hover:after,.box-effect:hover:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQk8sQUFHb0MsQUFPbUIsQUFHZixBQUdYLEFBU2MsQUFJUSxBQU83QixBQVlXLEFBTUUsQUFPZCxVQUNpQixDQXpCVCxPQXBCRixJQWdDTyxFQU1GLENBbkR2QixJQVVBLEFBd0JTLEdBWlcsRUFSRCxFQXFCSSxDQXdCRixDQWpDRCxLQW5CcEIsRUF1QytCLEFBTUEsS0E3Qi9CLENBUm9CLEtBWUksQ0FTWCxXQUNBLENBckJjLEtBK0JKLEFBTUEsRUF6QnZCLEdBVWtCLGVBckJJLENBc0JWLFVBQ2dELENBb0I1RCxRQTFDbUIsaUJBQ25CLGtCQTZCQSxBQU1BLGFBYjRDLG1KQUM1QyIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbi8vIGltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuLi91dGlscy9hbmFseXRpY3MnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxQYXJhbGxheFByb3ZpZGVyPlxuICAgIDxOYXZiYXIgLz5cblxuICAgIHtjaGlsZHJlbn1cblxuICAgIDxGb290ZXIgLz5cblxuICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAge2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgfVxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcblxuICAgICAgICB9IFxuICAgICAgICAqIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1heC13aWR0aDogMTg1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24tdGl0bGVfX2Rhcmsge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNGE0YTRhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi10aXRsZV9fbGlnaHQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGNvbG9yOiBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgIH1cbiAgICAgICAgLyplZmZlY3QtYm94Ki9cbiAgICAgICAgLmJveC1lZmZlY3Q6YWZ0ZXIsXG4gICAgICAgIC5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgICAgICAgfVxuICAgICAgICAuYm94LWVmZmVjdDpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLDApO1xuICAgICAgICB9XG4gICAgICAgIC5ib3gtZWZmZWN0OmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwxKTtcbiAgICAgICAgfVxuICAgICAgICAuYm94LWVmZmVjdDpob3ZlcjphZnRlcixcbiAgICAgICAgLmJveC1lZmZlY3Q6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUGFyYWxsYXhQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Layout.jsx */"
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
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Social */ "./components/Social.jsx");




var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2096615491" + " " + "navbar-social bounce-top has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Social__WEBPACK_IMPORTED_MODULE_2__["default"], {
    linkStyle: {
      color: '#f5f5f5',
      fontSize: '1.4rem'
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2096615491",
    css: ".navbar-social.jsx-2096615491{position:absolute;z-index:10;top:0;left:0;right:0;display:block;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:.4rem 0;overflow:hidden;}.bounce-top.jsx-2096615491{-webkit-animation:bounce-top 1s 1.2s both;-webkit-animation:bounce-top-jsx-2096615491 1s 1.2s both;animation:bounce-top-jsx-2096615491 1s 1.2s both;}@-webkit-keyframes bounce-top{0%.jsx-2096615491{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%.jsx-2096615491{opacity:1;}40%.jsx-2096615491{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%.jsx-2096615491{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%.jsx-2096615491{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%.jsx-2096615491{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%.jsx-2096615491,55%.jsx-2096615491,75%.jsx-2096615491,87%.jsx-2096615491{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%.jsx-2096615491{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}@-webkit-keyframes bounce-top-jsx-2096615491{0%{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}@keyframes bounce-top-jsx-2096615491{0%{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}.text-focus-in.jsx-2096615491{-webkit-animation:text-focus-in 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;-webkit-animation:text-focus-in-jsx-2096615491 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;animation:text-focus-in-jsx-2096615491 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;}@-webkit-keyframes text-focus-in{0%.jsx-2096615491{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%.jsx-2096615491{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}@-webkit-keyframes text-focus-in-jsx-2096615491{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}@keyframes text-focus-in-jsx-2096615491{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTTyxBQUcyQixBQVl3QixBQUtILEFBTzNCLEFBRzBCLEFBTUEsQUFNQSxBQU1ELEFBU0QsQUFNQSxBQVNHLEFBTzNCLEFBRzBCLEFBTUEsQUFNQSxBQU1ELEFBU0QsQUFNQSxBQVFrRCxBQUsxRCxBQUtELEFBT0MsQUFLRCxVQXJIM0IsQUFvREEsUUE1RVcsT0FrSWdCLEFBWUEsQ0FqQkMsQUFZQSxHQXhJdEIsS0FxRDhCLEFBTUEsQUE4Q0EsQUFNQSxDQTlHN0IsQUEyQzhCLEFBb0RBLENBdEVDLEFBTUEsQUFNQSxBQXdDQSxBQU1BLEFBTUEsQ0ExRUMsQUFvREEsS0FsRS9CLEFBU2tDLFFBUjVCLGNBQ2lCLEdBOEhuQixBQVlBLEdBakJBLEFBWUEsT0FOWixBQVlBLEdBakJBLEFBWUEsR0FuQnNGLHlDQWpFekMsQUFNQSxBQThDQSxBQU1BLElBbkVELEFBb0RBLElBdEVBLEFBTUEsQUFNQSxBQXdDQSxBQU1BLEFBTUEsRUF0RjVCLEVBWTRCLEFBb0RBLFlBekQ5QyxFQU5rQixnQkFDbEIsQ0FnRCtDLEFBTUEsQUE4Q0EsQUFNQSxHQW5FRCxBQW9EQSxJQXRFQSxBQU1BLEFBTUEsQUF3Q0EsQUFNQSxBQU1BLElBMUVBLEFBb0RBLG1FQWQ1QyxBQU1ZLEFBOENaLEFBTVksQ0FuRVosQUFvREEsSUF0RUEsQUFNQSxBQU1BLEFBd0NBLEFBTUEsQUFNQSxJQTFFWSxBQW9EQSxDQVJaLEFBb0RBLFNBL0ZBLEFBb0RBLE9BZ0RGIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU29jaWFsIGZyb20gJy4vU29jaWFsJztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibmF2YmFyLXNvY2lhbCBib3VuY2UtdG9wIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICA8U29jaWFsIGxpbmtTdHlsZT17eyBjb2xvcjogJyNmNWY1ZjUnLCBmb250U2l6ZTogJzEuNHJlbScgfX0gLz5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAubmF2YmFyLXNvY2lhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyAgICBcbiAgICAgICAgcGFkZGluZzogLjRyZW0gMDsgIFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuYm91bmNlLXRvcCB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UtdG9wIDFzIDEuMnMgYm90aDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGJvdW5jZS10b3AgMXMgMS4ycyBib3RoO1xuICAgICAgfVxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZS10b3Age1xuICAgICAgICAwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICAyNCUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgNDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgNjUlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgODIlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgOTMlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDI1JSxcbiAgICAgICAgNTUlLFxuICAgICAgICA3NSUsXG4gICAgICAgIDg3JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgYm91bmNlLXRvcCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDI0JSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICA0MCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA2NSUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA4MiUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA5MyUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgMjUlLFxuICAgICAgICA1NSUsXG4gICAgICAgIDc1JSxcbiAgICAgICAgODclIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRleHQtZm9jdXMtaW4ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dC1mb2N1cy1pbiAxcyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIDEuNHMgYm90aDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHRleHQtZm9jdXMtaW4gMXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSAxLjRzIGJvdGg7XG4gICAgICB9XG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mb2N1cy1pbiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHRleHQtZm9jdXMtaW4ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Navbar.jsx */"
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _SingleProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleProject */ "./components/SingleProject.jsx");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Projects =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects(props) {
    var _this;

    _classCallCheck(this, Projects);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Projects).call(this, props));
    _this.state = {
      projects: ['']
    };
    _this.fetchProjects = _this.fetchProjects.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchProjects();
    }
  }, {
    key: "fetchProjects",
    value: function () {
      var _fetchProjects = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api__WEBPACK_IMPORTED_MODULE_3__["getProjectsAPI"])({
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
      var projectsView = projects.map(function (project) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SingleProject__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: project.uid,
          content: project
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4244276530" + " " + "projects-section"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-4244276530" + " " + "is-size-3 sticky-title section-title section-title__dark"
      }, "Projects"), projectsView, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "4244276530",
        css: ".sticky-title.jsx-4244276530{margin-top:3rem;margin-bottom:-3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DVyxBQUcrQixnQkFDSSxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9Qcm9qZWN0cy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHNBUEkgfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IFNpbmdsZVByb2plY3QgZnJvbSAnLi9TaW5nbGVQcm9qZWN0JztcblxuY2xhc3MgUHJvamVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBwcm9qZWN0czogWycnXSB9O1xuICAgIHRoaXMuZmV0Y2hQcm9qZWN0cyA9IHRoaXMuZmV0Y2hQcm9qZWN0cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFByb2plY3RzKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaFByb2plY3RzKCkge1xuICAgIC8vIENhbGwgdGhlIEFQSSBhbmQgcmVxdWVzdCA1IGRvY3VtbmV0c1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvamVjdHNBUEkoeyBwYWdlU2l6ZTogNSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByb2plY3RzOiByZXNwb25zZS5yZXN1bHRzLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvamVjdHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJvamVjdHNWaWV3ID0gcHJvamVjdHMubWFwKHByb2plY3QgPT4gKFxuICAgICAgPFNpbmdsZVByb2plY3Qga2V5PXtwcm9qZWN0LnVpZH0gY29udGVudD17cHJvamVjdH0gLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1zZWN0aW9uXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTMgc3RpY2t5LXRpdGxlIHNlY3Rpb24tdGl0bGUgc2VjdGlvbi10aXRsZV9fZGFya1wiPlByb2plY3RzPC9oMT5cblxuICAgICAgICB7cHJvamVjdHNWaWV3fVxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5zdGlja3ktdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG5cbi8vIG9wZW5Db2xsYXBzZShlKSB7XG4vLyAgIHRoaXMuZnVuY05hbWUgPSAnb3BlbkNvbGxhcHNlJztcbi8vICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4vLyAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCkge1xuLy8gICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbi8vICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke2NvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbi8vICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbi8vICAgfVxuLy8gfVxuXG4vLyAgey8qIFByb2plY3QgMSAqL31cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlclwiPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbi8vICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9jdG9jYXQtY29udGFpbmVyIGltYWdlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmF3bGVhZC9QaG90by1JU1wiPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuLy8gICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdGhyZWUtZmlmdGhzXCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuLy8gICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezgwfVxuLy8gICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuLy8gICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuLy8gICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgUGhvdG8gSVNcbi8vICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbi8vICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4vLyAgICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTEuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTIuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTMuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTQuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTUuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTYuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgXX1cbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMGEwYTBhXCJcbi8vICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4vLyAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuLy8gICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IHRoaXMgcHJvamVjdDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICA8aDU+UGhvdG8gSVMgaXMgYSB3ZWIgYXBwbGljYXRpb24gZm9yIHNoYXJpbmcgcGhvdG9zLjwvaDU+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gYnVpbHQgd2l0aCBKYXZhIGFuZCBTcHJpbmcgRnJhbWV3b3JrIGFzIGJhY2stZW5kIHRlY2hub2xvZ2llcyxcbi8vICAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLCBwaG90b3MsXG4vLyBjb21tZW50cyBhbmQgb3RoZXIgc3R1ZmYuXG4vLyAgICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5JbnRlcmZhY2Ugd2FzIGJ1aWx0IHVzaW5nIFZ1ZS5qcyBhbmQgQm9vdHN0cmFwIGxpYnJhcmllcy48L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5Db21tdW5pY2F0aW9uIHdpdGggc2VydmVyIGlzIGRvbmUgdGhyb3VnaCBKU09OIGZvcm1hdCBhbmQgUkVTVCBBUEkuIDwvcD5cbi8vICAgICAgICAgICAgICAgICAgIDxwPlxuLy8gICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBsaXZlcyBvbiBBbWF6b24gV2ViIFNlcnZpY2VzIGFuZFxuLy8gICAgICAgICAgICAgICAgICAgICAgaXMgdXNpbmcgRUIgZm9yIGRlcGxveWluZywgUzMgZm9yIHN0b3JpbmcgaW1hZ2UgZmlsZXMgYW5kIFJEUyBhcyBhXG4vLyAgICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZSBwcm92aWRlci5cbi8vICAgICAgICAgICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDM+RnVuY3Rpb25hbDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoNT5Vc2VycyBhcmUgYWJsZSB0bzo8L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNyZWF0ZSBhIG5ldyBhY2NvdW50PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TG9naW4gaW50byBleGlzdGluZyBhY2NvdW50PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIHByb2ZpbGUgaW1hZ2U8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb2RpZnkgcGVyc29uYWwgZGF0YTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwaG90byB3aXRoIGEgc2hvcnQgdGl0bGUsXG4vLyAgZGVzY3JpcHRpb24gYW5kIHNlbGVjdGluZyBhIGNhdGVnb3J5PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhwbG9yZSBwaG90b3MgdXBsb2FkZWQgYnkgb3RoZXIgdXNlcnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb3J0IHBob3RvcyBieSBjYXRlZ29yeTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkZCBvciByZW1vdmUgcGhvdG9zIHRvIG9yIGZyb20gY29sbGVjdGlvbiBvZiBmYXZvcml0ZXM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21tZW50IHBob3RvcyBhbmQgZXhwbG9yZSBjb21tZW50cyBtYWRlIGJ5IG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoIGZvciBjYXRlZ29yaWVzIG9yIG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPlRlY2huaWNhbCBTaGVldDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoNT5UZWNobm9sb2dpZXMgSSBnb3QgaW52b2x2ZWQgd2l0aCB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC48L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmEgODwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcmsgLSBTZWN1cml0eSwgTVZDLCBEYXRhPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbWF6b24gV2ViIFNlcnZpY2VzIC0gRUIsIFMzLCBSRFM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5vQXV0aCAyLjA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLyBKYXZhc2NyaXB0IEVTNjwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFyY2hpdGVjdHVyZTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFuaW1hdGlvbnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5WdWUuanM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbi8vICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvRmFkZT5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG5cblxuLy8gICAgICAgICB7IC8qIFBST0pFQ1QgMiAqL31cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlciB3cmFwcGVyLXByb2plY3QyXCI+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuLy8gICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYXdsZWFkL1Bob3RvLUlTXCI+XG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2N0b2NhdFwiIC8+XG4vLyAgICAgICAgICAgICA8L2E+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtOFwiPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy10aHJlZS1maWZ0aHNcIj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4vLyAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbi8vICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4vLyAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4vLyAgICAgICAgICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4vLyAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICBFYnJvZnlcbi8vICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbi8vICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4vLyAgICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby0xLmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tMi5qcGcnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTMucG5nJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby00LnBuZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tNS5wbmcnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTYuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgXX1cbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMmMzZTUwXCJcbi8vICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4vLyAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuLy8gICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IHRoaXMgcHJvamVjdDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICA8aDU+UGhvdG8gSVMgaXMgYSB3ZWIgYXBwbGljYXRpb24gZm9yIHNoYXJpbmcgcGhvdG9zLjwvaDU+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gYnVpbHQgd2l0aCBKYXZhIGFuZCBTcHJpbmcgRnJhbWV3b3JrIGFzIGJhY2stZW5kIHRlY2hub2xvZ2llcyxcbi8vICAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLFxuLy8gIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuLy8gICAgICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPHA+SW50ZXJmYWNlIHdhcyBidWlsdCB1c2luZyBWdWUuanMgYW5kIEJvb3RzdHJhcCBsaWJyYXJpZXMuPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPHA+Q29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpcyBkb25lIHRocm91Z2ggSlNPTiBmb3JtYXQgYW5kIFJFU1QgQVBJLiA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gbGl2ZXMgb24gQW1hem9uIFdlYiBTZXJ2aWNlcyBhbmRcbi8vICAgICAgICAgICAgICAgICAgICAgIGlzIHVzaW5nIEVCIGZvciBkZXBsb3lpbmcsIFMzIGZvciBzdG9yaW5nIGltYWdlIGZpbGVzIGFuZCBSRFMgYXMgYVxuLy8gICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UgcHJvdmlkZXIuXG4vLyAgICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPkZ1bmN0aW9uYWw8L2gzPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDU+VXNlcnMgYXJlIGFibGUgdG86PC9oNT5cbi8vICAgICAgICAgICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGUgYSBuZXcgYWNjb3VudDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxvZ2luIGludG8gZXhpc3RpbmcgYWNjb3VudDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcm9maWxlIGltYWdlPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9kaWZ5IHBlcnNvbmFsIGRhdGE8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcGhvdG8gd2l0aCBhIHNob3J0IHRpdGxlLFxuLy8gZGVzY3JpcHRpb24gYW5kIHNlbGVjdGluZyBhIGNhdGVnb3J5PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhwbG9yZSBwaG90b3MgdXBsb2FkZWQgYnkgb3RoZXIgdXNlcnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb3J0IHBob3RvcyBieSBjYXRlZ29yeTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkZCBvciByZW1vdmUgcGhvdG9zIHRvIG9yIGZyb20gY29sbGVjdGlvbiBvZiBmYXZvcml0ZXM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21tZW50IHBob3RvcyBhbmQgZXhwbG9yZSBjb21tZW50cyBtYWRlIGJ5IG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoIGZvciBjYXRlZ29yaWVzIG9yIG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPlRlY2huaWNhbCBTaGVldDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoNT5UZWNobm9sb2dpZXMgSSBnb3QgaW52b2x2ZWQgd2l0aCB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC48L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmEgODwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcmsgLSBTZWN1cml0eSwgTVZDLCBEYXRhPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbWF6b24gV2ViIFNlcnZpY2VzIC0gRUIsIFMzLCBSRFM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5vQXV0aCAyLjA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLyBKYXZhc2NyaXB0IEVTNjwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFyY2hpdGVjdHVyZTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFuaW1hdGlvbnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5WdWUuanM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbi8vICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvRmFkZT5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgeyAvKiBQUk9KRUNUIDMgKi99XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXIgd3JhcHBlci1wcm9qZWN0M1wiPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbi8vICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9jdG9jYXQtY29udGFpbmVyIGltYWdlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmF3bGVhZC9QaG90by1JU1wiPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuLy8gICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdGhyZWUtZmlmdGhzXCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuLy8gICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezgwfVxuLy8gICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuLy8gICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuLy8gICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LWdyZXktbGlnaHRcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgQXBwXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4vLyAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuLy8gICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbi8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtbXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0xLmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0yLmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0zLmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC00LmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC01LmpwZWcnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtNi5qcGcnLFxuLy8gICAgICAgICAgICAgICAgICAgICBdfVxuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImhzbCgwLCAwJSwgNDAlKVwiXG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuLy8gICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkZWxheT17NTAwfT5cbi8vICAgICAgICAgICAgICAgICAgIDxoMz5BYm91dCB0aGlzIHByb2plY3Q8L2gzPlxuLy8gICAgICAgICAgICAgICAgICAgPGg1PlBob3RvIElTIGlzIGEgd2ViIGFwcGxpY2F0aW9uIGZvciBzaGFyaW5nIHBob3Rvcy48L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgPHA+XG4vLyAgICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGJ1aWx0IHdpdGggSmF2YSBhbmQgU3ByaW5nIEZyYW1ld29yayBhcyBiYWNrLWVuZCB0ZWNobm9sb2dpZXMsXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpdGggTXlTUUwgZGF0YWJhc2UgZm9yIGtlZXBpbmcgdXNlciBhY2NvdW50cyxcbi8vIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuLy8gICAgICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPHA+SW50ZXJmYWNlIHdhcyBidWlsdCB1c2luZyBWdWUuanMgYW5kIEJvb3RzdHJhcCBsaWJyYXJpZXMuPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPHA+Q29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpcyBkb25lIHRocm91Z2ggSlNPTiBmb3JtYXQgYW5kIFJFU1QgQVBJLiA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gbGl2ZXMgb24gQW1hem9uIFdlYiBTZXJ2aWNlcyBhbmRcbi8vICAgICAgICAgICAgICAgICAgICAgIGlzIHVzaW5nIEVCIGZvciBkZXBsb3lpbmcsIFMzIGZvciBzdG9yaW5nIGltYWdlIGZpbGVzIGFuZCBSRFMgYXMgYVxuLy8gICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UgcHJvdmlkZXIuXG4vLyAgICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPkZ1bmN0aW9uYWw8L2gzPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDU+VXNlcnMgYXJlIGFibGUgdG86PC9oNT5cbi8vICAgICAgICAgICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGUgYSBuZXcgYWNjb3VudDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxvZ2luIGludG8gZXhpc3RpbmcgYWNjb3VudDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcm9maWxlIGltYWdlPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9kaWZ5IHBlcnNvbmFsIGRhdGE8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcGhvdG8gd2l0aCBhIHNob3J0IHRpdGxlLFxuLy8gZGVzY3JpcHRpb24gYW5kIHNlbGVjdGluZyBhIGNhdGVnb3J5PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhwbG9yZSBwaG90b3MgdXBsb2FkZWQgYnkgb3RoZXIgdXNlcnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb3J0IHBob3RvcyBieSBjYXRlZ29yeTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkZCBvciByZW1vdmUgcGhvdG9zIHRvIG9yIGZyb20gY29sbGVjdGlvbiBvZiBmYXZvcml0ZXM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21tZW50IHBob3RvcyBhbmQgZXhwbG9yZSBjb21tZW50cyBtYWRlIGJ5IG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoIGZvciBjYXRlZ29yaWVzIG9yIG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPlRlY2huaWNhbCBTaGVldDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoNT5UZWNobm9sb2dpZXMgSSBnb3QgaW52b2x2ZWQgd2l0aCB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC48L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmEgODwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcmsgLSBTZWN1cml0eSwgTVZDLCBEYXRhPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbWF6b24gV2ViIFNlcnZpY2VzIC0gRUIsIFMzLCBSRFM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5vQXV0aCAyLjA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLyBKYXZhc2NyaXB0IEVTNjwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFyY2hpdGVjdHVyZTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFuaW1hdGlvbnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5WdWUuanM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbi8vICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvRmFkZT5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Projects.jsx */"
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects); // openCollapse(e) {
//   this.funcName = 'openCollapse';
//   const content = e.target.previousElementSibling;
//   if (content.style.maxHeight) {
//     content.style.maxHeight = null;
//     e.target.value = 'More...';
//   } else {
//     content.style.maxHeight = `${content.scrollHeight}px`;
//     e.target.value = 'Less...';
//   }
// }
//  {/* Project 1 */}
//         <div className="container-wrapper">
//           <div className="container sticky-container has-background-white">
//             <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
//               <div className="octocat" />
//             </a>
//             <div className="columns is-variable is-8">
//               <div className="column is-three-fifths">
//                 <div className="sticky-item">
//                   <Parallax
//                     className="custom-class"
//                     offsetXMax={80}
//                     offsetXMin={0}
//                     tag="figure"
//                   >
//                     <h1 className="is-size-4 has-text-weight-bold">
//                       Photo IS
//                     </h1>
//                   </Parallax>
//                   <SlideshowGallery
//                     images={[
//                       '../static/p/portal-1.jpg',
//                       '../static/p/portal-2.jpg',
//                       '../static/p/portal-3.jpg',
//                       '../static/p/portal-4.jpg',
//                       '../static/p/portal-5.jpg',
//                       '../static/p/portal-6.jpg',
//                     ]}
//                     color="#0a0a0a"
//                   />
//                 </div>
//               </div>
//               <div className="column content">
//                 <Fade bottom delay={500}>
//                   <h3>About this project</h3>
//                   <h5>Photo IS is a web application for sharing photos.</h5>
//                   <p>
//                     Application built with Java and Spring Framework as back-end technologies,
//                     with MySQL database for keeping user accounts, photos,
// comments and other stuff.
//                   </p>
//                   <p>Interface was built using Vue.js and Bootstrap libraries.</p>
//                   <p>Communication with server is done through JSON format and REST API. </p>
//                   <p>
//                     Application lives on Amazon Web Services and
//                      is using EB for deploying, S3 for storing image files and RDS as a
//                      database provider.
//                   </p>
//                   <div className="content-collapse">
//                     <h3>Functional</h3>
//                     <h5>Users are able to:</h5>
//                     <ul>
//                       <li>Create a new account</li>
//                       <li>Login into existing account</li>
//                       <li>Upload profile image</li>
//                       <li>Modify personal data</li>
//                       <li>Upload photo with a short title,
//  description and selecting a category</li>
//                       <li>Explore photos uploaded by other users</li>
//                       <li>Sort photos by category</li>
//                       <li>Add or remove photos to or from collection of favorites</li>
//                       <li>Comment photos and explore comments made by other users</li>
//                       <li>Search for categories or other users</li>
//                     </ul>
//                     <h3>Technical Sheet</h3>
//                     <h5>Technologies I got involved with while working on this project.</h5>
//                     <ul>
//                       <li>Java 8</li>
//                       <li>Spring Framework - Security, MVC, Data</li>
//                       <li>MySQL</li>
//                       <li>Amazon Web Services - EB, S3, RDS</li>
//                       <li>oAuth 2.0</li>
//                       <li>HTML5 / CSS3 / Javascript ES6</li>
//                       <li>UI/UX Architecture</li>
//                       <li>UI/UX Animations</li>
//                       <li>Vue.js</li>
//                       <li>Bootstrap</li>
//                     </ul>
//                   </div>
//                   <input
//                     className="button is-outlined has-text-weight-bold is-black"
//                     type="button"
//                     onClick={this.openCollapse.bind(this)}
//                     value="More..."
//                   />
//                 </Fade>
//               </div>
//             </div>
//           </div>
//         </div>
//         { /* PROJECT 2 */}
//         <div className="container-wrapper wrapper-project2">
//           <div className="container sticky-container has-background-white">
//             <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
//               <div className="octocat" />
//             </a>
//             <div className="columns is-variable is-8">
//               <div className="column is-three-fifths">
//                 <div className="sticky-item">
//                   <Parallax
//                     className="custom-class"
//                     offsetXMax={80}
//                     offsetXMin={0}
//                     tag="figure"
//                   >
//                     <h1 className="is-size-4 has-text-weight-bold">
//                       Ebrofy
//                     </h1>
//                   </Parallax>
//                   <SlideshowGallery
//                     images={[
//                       '../static/p/ebro-1.jpg',
//                       '../static/p/ebro-2.jpg',
//                       '../static/p/ebro-3.png',
//                       '../static/p/ebro-4.png',
//                       '../static/p/ebro-5.png',
//                       '../static/p/ebro-6.jpg',
//                     ]}
//                     color="#2c3e50"
//                   />
//                 </div>
//               </div>
//               <div className="column content">
//                 <Fade bottom delay={500}>
//                   <h3>About this project</h3>
//                   <h5>Photo IS is a web application for sharing photos.</h5>
//                   <p>
//                     Application built with Java and Spring Framework as back-end technologies,
//                     with MySQL database for keeping user accounts,
//  photos, comments and other stuff.
//                   </p>
//                   <p>Interface was built using Vue.js and Bootstrap libraries.</p>
//                   <p>Communication with server is done through JSON format and REST API. </p>
//                   <p>
//                     Application lives on Amazon Web Services and
//                      is using EB for deploying, S3 for storing image files and RDS as a
//                      database provider.
//                   </p>
//                   <div className="content-collapse">
//                     <h3>Functional</h3>
//                     <h5>Users are able to:</h5>
//                     <ul>
//                       <li>Create a new account</li>
//                       <li>Login into existing account</li>
//                       <li>Upload profile image</li>
//                       <li>Modify personal data</li>
//                       <li>Upload photo with a short title,
// description and selecting a category</li>
//                       <li>Explore photos uploaded by other users</li>
//                       <li>Sort photos by category</li>
//                       <li>Add or remove photos to or from collection of favorites</li>
//                       <li>Comment photos and explore comments made by other users</li>
//                       <li>Search for categories or other users</li>
//                     </ul>
//                     <h3>Technical Sheet</h3>
//                     <h5>Technologies I got involved with while working on this project.</h5>
//                     <ul>
//                       <li>Java 8</li>
//                       <li>Spring Framework - Security, MVC, Data</li>
//                       <li>MySQL</li>
//                       <li>Amazon Web Services - EB, S3, RDS</li>
//                       <li>oAuth 2.0</li>
//                       <li>HTML5 / CSS3 / Javascript ES6</li>
//                       <li>UI/UX Architecture</li>
//                       <li>UI/UX Animations</li>
//                       <li>Vue.js</li>
//                       <li>Bootstrap</li>
//                     </ul>
//                   </div>
//                   <input
//                     className="button is-outlined has-text-weight-bold is-black"
//                     type="button"
//                     onClick={this.openCollapse.bind(this)}
//                     value="More..."
//                   />
//                 </Fade>
//               </div>
//             </div>
//           </div>
//         </div>
//         { /* PROJECT 3 */}
//         <div className="container-wrapper wrapper-project3">
//           <div className="container sticky-container has-background-white">
//             <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
//               <div className="octocat" />
//             </a>
//             <div className="columns is-variable is-8">
//               <div className="column is-three-fifths">
//                 <div className="sticky-item">
//                   <Parallax
//                     className="custom-class"
//                     offsetXMax={80}
//                     offsetXMin={0}
//                     tag="figure"
//                   >
//                     <h1 className="is-size-4 has-text-weight-bold has-text-grey-light">
//                       Filter App
//                     </h1>
//                   </Parallax>
//                   <SlideshowGallery
//                     images={[
//                       '../static/p/filterapp-1.jpg',
//                       '../static/p/filterapp-2.jpg',
//                       '../static/p/filterapp-3.jpg',
//                       '../static/p/filterapp-4.jpg',
//                       '../static/p/filterapp-5.jpeg',
//                       '../static/p/filterapp-6.jpg',
//                     ]}
//                     color="hsl(0, 0%, 40%)"
//                   />
//                 </div>
//               </div>
//               <div className="column content">
//                 <Fade bottom delay={500}>
//                   <h3>About this project</h3>
//                   <h5>Photo IS is a web application for sharing photos.</h5>
//                   <p>
//                     Application built with Java and Spring Framework as back-end technologies,
//                     with MySQL database for keeping user accounts,
// photos, comments and other stuff.
//                   </p>
//                   <p>Interface was built using Vue.js and Bootstrap libraries.</p>
//                   <p>Communication with server is done through JSON format and REST API. </p>
//                   <p>
//                     Application lives on Amazon Web Services and
//                      is using EB for deploying, S3 for storing image files and RDS as a
//                      database provider.
//                   </p>
//                   <div className="content-collapse">
//                     <h3>Functional</h3>
//                     <h5>Users are able to:</h5>
//                     <ul>
//                       <li>Create a new account</li>
//                       <li>Login into existing account</li>
//                       <li>Upload profile image</li>
//                       <li>Modify personal data</li>
//                       <li>Upload photo with a short title,
// description and selecting a category</li>
//                       <li>Explore photos uploaded by other users</li>
//                       <li>Sort photos by category</li>
//                       <li>Add or remove photos to or from collection of favorites</li>
//                       <li>Comment photos and explore comments made by other users</li>
//                       <li>Search for categories or other users</li>
//                     </ul>
//                     <h3>Technical Sheet</h3>
//                     <h5>Technologies I got involved with while working on this project.</h5>
//                     <ul>
//                       <li>Java 8</li>
//                       <li>Spring Framework - Security, MVC, Data</li>
//                       <li>MySQL</li>
//                       <li>Amazon Web Services - EB, S3, RDS</li>
//                       <li>oAuth 2.0</li>
//                       <li>HTML5 / CSS3 / Javascript ES6</li>
//                       <li>UI/UX Architecture</li>
//                       <li>UI/UX Animations</li>
//                       <li>Vue.js</li>
//                       <li>Bootstrap</li>
//                     </ul>
//                   </div>
//                   <input
//                     className="button is-outlined has-text-weight-bold is-black"
//                     type="button"
//                     onClick={this.openCollapse.bind(this)}
//                     value="More..."
//                   />
//                 </Fade>
//               </div>
//             </div>
//           </div>
//         </div>

/***/ }),

/***/ "./components/SingleProject.jsx":
/*!**************************************!*\
  !*** ./components/SingleProject.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SlideshowGallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SlideshowGallery */ "./components/SlideshowGallery.jsx");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var SingleProject =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SingleProject, _React$Component);

  function SingleProject() {
    _classCallCheck(this, SingleProject);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleProject).apply(this, arguments));
  }

  _createClass(SingleProject, [{
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
      var content = this.props.content;
      var project = content.data;
      var gradientBackground = {};
      var titleColor = {}; // COLORS

      if (project) {
        gradientBackground = {
          backgroundColor: "".concat(project.back_grad_color_2),
          background: "linear-gradient(to right, ".concat(project.back_grad_color_1, ", ").concat(project.back_grad_color_2, ")")
        };
        titleColor = {
          color: "".concat(project.title_color)
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !project ?
      /* SPINNER IF PROJECT IS LOADING */
      react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2031919435" + " " + "spinner-container has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-2031919435" + " " + "container-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2031919435" + " " + "container sticky-container has-background-white"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.project_url),
        className: "jsx-2031919435" + " " + "octocat-container image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2031919435" + " " + "octocat"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2031919435" + " " + "columns is-variable is-8"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2031919435" + " " + "column is-three-fifths"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2031919435" + " " + "sticky-item"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
        style: titleColor,
        className: "jsx-2031919435" + " " + " is-size-4"
      }, project.title[0].text)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
        images: [project.project_img_1.url, project.project_img_2.url, project.project_img_3.url, project.project_img_4.url, project.project_img_5.url, project.project_img_6.url]
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2031919435" + " " + "column is-two-fifths content"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
        bottom: true,
        delay: 500
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_overall)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2031919435" + " " + "content-collapse"
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_collapse)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-2031919435" + " " + "button is-outlined has-text-weight-bold is-black"
      }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2031919435",
        css: ".spinner-container.jsx-2031919435{margin:8rem 0;}.spinner.jsx-2031919435{display:block;margin:0 auto;border-color:red;text-align:center;}.content.jsx-2031919435{overflow:hidden;}.sticky-container.jsx-2031919435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;border-radius:5px;}.content-collapse.jsx-2031919435{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-2031919435{padding-top:9rem;margin-bottom:-3rem;}.sticky-item.jsx-2031919435{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-2031919435{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-2031919435{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-2031919435:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-2031919435{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhXLEFBRzJCLEFBR0EsQUFNRSxBQUdELEFBVUssQUFPRCxBQUlPLEFBT04sQUFNcUIsQUFTQyxBQVNOLGNBL0R0QyxBQUdnQixFQU1oQixDQW9Cd0IsQ0FXVCxDQWxCRSxLQVdHLElBN0JELEFBNERiLENBdkJTLEdBbEJLLEtBT2xCLEVBZ0IwQixDQVNBLENBYmIsSUFyQ0ssR0FtQnlCLElBbUIzQyxXQXJDRixBQXlDcUIsQ0FiUixBQXNCWSxTQXJCSCxDQXZCSyxPQW9DWixRQXZCc0IsRUFXVixDQWFiLFdBQ0MsV0FiYixDQWNpQyx3QkFNTCx3QkEvQjVCLFVBYnlCLFlBdUN6Qiw0Q0FNbUIsaUJBQ0YsZUFDakIscUJBOUNnRCwrQ0FDYiwrQkFDTCw0QkFDWCxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TaW5nbGVQcm9qZWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNjYWxlTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xuaW1wb3J0IHsgTGluaywgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLXJlYWN0anMnO1xuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IFNsaWRlc2hvd0dhbGxlcnkgZnJvbSAnLi9TbGlkZXNob3dHYWxsZXJ5JztcblxuY2xhc3MgU2luZ2xlUHJvamVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG9wZW5Db2xsYXBzZShlKSB7XG4gICAgdGhpcy5mdW5jTmFtZSA9ICdvcGVuQ29sbGFwc2UnO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgZS50YXJnZXQudmFsdWUgPSAnTW9yZS4uLic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgZS50YXJnZXQudmFsdWUgPSAnTGVzcy4uLic7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcm9qZWN0ID0gY29udGVudC5kYXRhO1xuICAgIGxldCBncmFkaWVudEJhY2tncm91bmQgPSB7fTtcbiAgICBsZXQgdGl0bGVDb2xvciA9IHt9O1xuXG4gICAgLy8gQ09MT1JTXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIGdyYWRpZW50QmFja2dyb3VuZCA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfWAsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7cHJvamVjdC5iYWNrX2dyYWRfY29sb3JfMX0sICR7cHJvamVjdC5iYWNrX2dyYWRfY29sb3JfMn0pYCxcbiAgICAgIH07XG4gICAgICB0aXRsZUNvbG9yID0ge1xuICAgICAgICBjb2xvcjogYCR7cHJvamVjdC50aXRsZV9jb2xvcn1gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7IXByb2plY3RcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIC8qIFNQSU5ORVIgSUYgUFJPSkVDVCBJUyBMT0FESU5HICovXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgIDxTY2FsZUxvYWRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIHNpemVVbml0PVwicHhcIlxuICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM0YTRhNGFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXJcIiBzdHlsZT17Z3JhZGllbnRCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHsvKiBHSVRIVUIgTElOSyAqL31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17TGluay51cmwocHJvamVjdC5wcm9qZWN0X3VybCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvY3RvY2F0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBHQUxMRVJZIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXRocmVlLWZpZnRoc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUFJPSkVDVCBUSVRMRSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCIgaXMtc2l6ZS00XCIgc3R5bGU9e3RpdGxlQ29sb3J9Pntwcm9qZWN0LnRpdGxlWzBdLnRleHR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBHQUxMTEVSWSBDT01QT05FTlQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzEudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzIudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzQudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzUudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzYudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIERFU0NSSVBUSU9OIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXR3by1maWZ0aHMgY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBSSVNNSUMgQ01TICovfVxuICAgICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocHJvamVjdC5kZXNjcmlwdGlvbl9vdmVyYWxsKX1cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xMQVBTRSBDT05UQUlORVIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHByb2plY3QuZGVzY3JpcHRpb25fY29sbGFwc2UpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Db2xsYXBzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIC5zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDhyZW0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQtY29sbGFwc2Uge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDMwMG1zIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RpY2t5LWl0ZW0ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vY3RvY2F0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIGJvdHRvbToxcmVtO1xuICAgICAgICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vY3RvY2F0IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvZ2l0aHViLnBuZycpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgd2lkdGg6NDVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2N0b2NhdDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL29jdG9jYXQucG5nJyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gM3JlbSAxcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

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
          className: "jsx-4181725027" + " " + "fade ".concat(slideIndex === i ? 'swing-out-top-bck' : 'nonactive')
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "jsx-4181725027" + " " + "numbertext has-background-white has-text-weight-bold"
        }, i + 1, "\xA0/ 6"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-4181725027" + " " + "image is-3by2"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          alt: "slide-".concat(i + 1),
          className: "jsx-4181725027"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "4181725027",
          css: ".active.jsx-4181725027{display:block;}.nonactive.jsx-4181725027{display:none;}.image.jsx-4181725027 img.jsx-4181725027{border-radius:5px;}.numbertext.jsx-4181725027{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;z-index:30;bottom:-30px;right:-30px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;}.swing-out-top-bck.jsx-4181725027{-webkit-animation:swing-out-top-bck 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;-webkit-animation:swing-out-top-bck-jsx-4181725027 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;animation:swing-out-top-bck-jsx-4181725027 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;}@-webkit-keyframes swing-out-top-bck{0%.jsx-4181725027{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%.jsx-4181725027{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@-webkit-keyframes swing-out-top-bck-jsx-4181725027{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@keyframes swing-out-top-bck-jsx-4181725027{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENhLEFBR2dDLEFBR0EsQUFHRyxBQUdMLEFBWXNGLEFBSy9ELEFBT0csQUFTSCxBQU9HLFdBdkN0QixFQU5uQixDQUhBLElBTUEsUUFJc0IsTUFnQmdCLEFBZ0JBLEdBVEcsQUFnQkEsVUF0Q3BCLGlCQUNDLGtCQUNQLFdBQ0UsR0FPb0YsVUFOckYsWUFDb0IsQUFXRCxBQWdCQSxZQVRBLEFBZ0JBLGlCQXRCQSxBQWdCQSxZQVRBLEFBZ0JBLCtEQXRCbkIsQUFnQkEsQ0E1Qk0sU0FhbEIsQUFnQkEsRUFWWSxBQWdCQSxPQWxDaEIsR0FtQkksQUFnQkEsOERBL0JGIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNsYXNzIFNsaWRlc2hvd0dhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzbGlkZUluZGV4OiAwIH07XG4gICAgdGhpcy5wbHVzU2xpZGVzID0gdGhpcy5wbHVzU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcGx1c1NsaWRlcyhuKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzbGlkZUluZGV4ICsgbiA+IDUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiAwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gaWYgKHNsaWRlSW5kZXggKyBuIDwgMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzbGlkZUluZGV4OiBwcmV2U3RhdGUuc2xpZGVJbmRleCArIG4sXG4gICAgfSkpO1xuICB9XG5cbiAgY3VycmVudFNsaWRlKG4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogbiB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNsaWRlcygpIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2xpZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNsaWRlcy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgZmFkZSAke3NsaWRlSW5kZXggPT09IGkgPyAnc3dpbmctb3V0LXRvcC1iY2snIDogJ25vbmFjdGl2ZSd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJ0ZXh0IGhhcy1iYWNrZ3JvdW5kLXdoaXRlIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAmbmJzcDsvIDZcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXNbaV19IGFsdD17YHNsaWRlLSR7aSArIDF9YH0gLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ub25hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm51bWJlcnRleHQge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDMwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzbGlkZXM7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3cygpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJldmlld3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcHJldmlld3MucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlSW5kZXggPT09IGkgPyAncHJldmlldy1hY3RpdmUnIDogJ3ByZXZpZXctaW5hY3RpdmUnfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jdXJyZW50U2xpZGUoaSl9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBhbHQ9e2BwcmV2aWV3LSR7aX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLnByZXZpZXctYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmltYWdlIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezgwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezEyMDB9PlxuICAgICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldiBidXR0b24gaXMtYmxhY2sgaXMtb3V0bGluZWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvbiBpcy1ibGFjayBpcy1vdXRsaW5lZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC00cmVtO1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */"
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
          className: "jsx-4258426564" + " " + "column"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-4258426564" + " " + "image is-3by2"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          onClick: function onClick() {
            return _this2.currentSlide(i);
          },
          role: "presentation",
          alt: "preview-".concat(i),
          className: "jsx-4258426564" + " " + ((slideIndex === i ? 'preview-active' : 'preview-inactive') || "")
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "4258426564",
          css: ".preview-active.jsx-4258426564{cursor:pointer;}.preview-inactive.jsx-4258426564{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}.preview-inactive.jsx-4258426564:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}.image.jsx-4258426564 img.jsx-4258426564{border-radius:5px;}.column.jsx-4258426564{padding:0.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUlhLEFBR2tDLEFBR0osQUFNaUIsQUFLWixBQUdBLFdBYlksSUFIaEMsQ0FpQkEsRUFIQSxVQUx3QixXQUxBLHFDQU1SLFVBQ2hCLENBTm1CLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNsYXNzIFNsaWRlc2hvd0dhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzbGlkZUluZGV4OiAwIH07XG4gICAgdGhpcy5wbHVzU2xpZGVzID0gdGhpcy5wbHVzU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcGx1c1NsaWRlcyhuKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzbGlkZUluZGV4ICsgbiA+IDUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiAwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gaWYgKHNsaWRlSW5kZXggKyBuIDwgMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzbGlkZUluZGV4OiBwcmV2U3RhdGUuc2xpZGVJbmRleCArIG4sXG4gICAgfSkpO1xuICB9XG5cbiAgY3VycmVudFNsaWRlKG4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogbiB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNsaWRlcygpIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2xpZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNsaWRlcy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgZmFkZSAke3NsaWRlSW5kZXggPT09IGkgPyAnc3dpbmctb3V0LXRvcC1iY2snIDogJ25vbmFjdGl2ZSd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJ0ZXh0IGhhcy1iYWNrZ3JvdW5kLXdoaXRlIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAmbmJzcDsvIDZcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXNbaV19IGFsdD17YHNsaWRlLSR7aSArIDF9YH0gLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ub25hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm51bWJlcnRleHQge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDMwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzbGlkZXM7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3cygpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJldmlld3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcHJldmlld3MucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlSW5kZXggPT09IGkgPyAncHJldmlldy1hY3RpdmUnIDogJ3ByZXZpZXctaW5hY3RpdmUnfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jdXJyZW50U2xpZGUoaSl9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBhbHQ9e2BwcmV2aWV3LSR7aX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLnByZXZpZXctYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmltYWdlIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezgwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezEyMDB9PlxuICAgICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldiBidXR0b24gaXMtYmxhY2sgaXMtb3V0bGluZWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvbiBpcy1ibGFjayBpcy1vdXRsaW5lZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC00cmVtO1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */"
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
        className: "jsx-2052273057" + " " + "gallery-container"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          marginBottom: '1.5rem'
        },
        className: "jsx-2052273057" + " " + "columns is-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          padding: 0
        },
        className: "jsx-2052273057" + " " + "column"
      }, slides)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 800
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2052273057" + " " + "columns is-variable is-1 is-mobile"
      }, previews)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2052273057" + " " + "buttons-container"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1200
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(-1);
        },
        className: "jsx-2052273057" + " " + "prev button is-black is-outlined"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2052273057" + " " + "fas fa-angle-left"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(1);
        },
        className: "jsx-2052273057" + " " + "next button is-black is-outlined"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2052273057" + " " + "fas fa-angle-right"
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2052273057",
        css: ".gallery-container.jsx-2052273057{position:relative;margin-top:10px;}.fade.jsx-2052273057{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-2052273057;animation-name:fade-jsx-2052273057;-webkit-animation-duration:1.5s;animation-duration:1.5s;}@-webkit-keyframes fade{from.jsx-2052273057{opacity:.4;}to.jsx-2052273057{opacity:1;}}@-webkit-keyframes fade-jsx-2052273057{from{opacity:.4;}to{opacity:1;}}@keyframes fade-jsx-2052273057{from{opacity:.4;}to{opacity:1;}}.buttons-container.jsx-2052273057{position:absolute;bottom:-4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.prev.jsx-2052273057,.next.jsx-2052273057{cursor:pointer;color:white;font-weight:bold;opacity:.7;}.prev.jsx-2052273057{margin-right:.7rem;}.prev.jsx-2052273057:hover,.next.jsx-2052273057:hover{opacity:.8;cursor:pointer;}@media screen and (max-width:769px){.numbertext.jsx-2052273057,.prev.jsx-2052273057,.next.jsx-2052273057{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOExXLEFBR21DLEFBS1EsQUFNYixBQUNILEFBR0csQUFDSCxBQUdNLEFBV0gsQUFNSSxBQUtSLEFBS0csVUFsQ0QsQUFJQSxDQUxHLEFBSUEsQUEyQkQsRUFLZixFQWhCWSxHQTlCTSxBQW1CTCxDQWlCZixPQU1BLENBWG1CLENBMUJlLEdBZWYsR0FuQm5CLFVBK0JhLFdBQ2IsS0EzQnNCLHdEQWVLLHNCQWRELEdBZWQsV0FDRCxTQUMrQixpQ0FoQjFDLE1BaUJrQyx5R0FDbEMiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gNSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogNSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNsaWRlSW5kZXg6IHByZXZTdGF0ZS5zbGlkZUluZGV4ICsgbixcbiAgICB9KSk7XG4gIH1cblxuICBjdXJyZW50U2xpZGUobikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBuIH0pO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVzKCkge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaSA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLWJhY2tncm91bmQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5pbWFnZSBpbWcge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubnVtYmVydGV4dCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgei1pbmRleDogMzA7XG4gICAgICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsaWRlcztcbiAgfVxuXG4gIGNyZWF0ZVByZXZpZXdzKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBwcmV2aWV3cy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c2xpZGVJbmRleCA9PT0gaSA/ICdwcmV2aWV3LWFjdGl2ZScgOiAncHJldmlldy1pbmFjdGl2ZSd9XG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ldfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmN1cnJlbnRTbGlkZShpKX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIGFsdD17YHByZXZpZXctJHtpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAucHJldmlldy1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBwcmV2aWV3cztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcygpO1xuICAgIGNvbnN0IHByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIFNMSURFUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEuNXJlbScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBTTElERSBQUkVWSUVXIElURU1TICovfVxuICAgICAgICA8RmFkZSBkZWxheT17ODAwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtMSBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICA8RmFkZSBkZWxheT17MTIwMH0+XG4gICAgICAgICAgICB7LyogUFJFVklPVVMgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2IGJ1dHRvbiBpcy1ibGFjayBpcy1vdXRsaW5lZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoLTEpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7LyogTkVYVCBCVVRUT04gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQgYnV0dG9uIGlzLWJsYWNrIGlzLW91dGxpbmVkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygxKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgLmZhZGUge1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTRyZW07XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICB6LWluZGV4OjE1O1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYsXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLnByZXY6aG92ZXIsXG4gICAgICAgICAgICAubmV4dDpob3ZlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgICAubnVtYmVydGV4dCwgLnByZXYsIC5uZXh0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93R2FsbGVyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */"
      }));
    }
  }]);

  return SlideshowGallery;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SlideshowGallery);

/***/ }),

/***/ "./components/Social.jsx":
/*!*******************************!*\
  !*** ./components/Social.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Social = function Social(_ref) {
  var linkStyle = _ref.linkStyle;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-881028516" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-881028516" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-881028516" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "https://www.facebook.com/ivanshyrai",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-881028516" + " " + "social-item__anchor"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "jsx-881028516" + " " + "fab fa-facebook fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-881028516" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "mailto:ivan.shyrai@yahoo.com",
    target: "_top",
    style: linkStyle,
    className: "jsx-881028516" + " " + "social-item__anchor"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "jsx-881028516" + " " + "fas fa-envelope fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-881028516" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "https://www.linkedin.com/in/ivan-shyrai/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-881028516" + " " + "social-item__anchor"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "jsx-881028516" + " " + "fab fa-linkedin fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-881028516" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "https://github.com/rawlead",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-881028516" + " " + "social-item__anchor"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "jsx-881028516" + " " + "fab fa-github fa-lg"
  })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "881028516",
    css: ".social-item.jsx-881028516{display:inline-block;margin:0 1rem;}.social-item__anchor.jsx-881028516{color:#4a4a4a;font-size:2rem;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;}.social-item__anchor.jsx-881028516:hover{color:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU29jaWFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRFMsQUFJZ0MsQUFJUCxBQUtILFdBQ2IsR0FMaUIsT0FKRCxRQUttQixNQUpuQyxvRUFLQSIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NvY2lhbC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNvY2lhbCA9ICh7IGxpbmtTdHlsZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pdGVtXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaXZhbnNoeXJhaVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbV9fYW5jaG9yXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rIGZhLWxnXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWl0ZW1cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIm1haWx0bzppdmFuLnNoeXJhaUB5YWhvby5jb21cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWl0ZW1fX2FuY2hvclwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfdG9wXCJcbiAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlIGZhLWxnXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWl0ZW1cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9pdmFuLXNoeXJhaS9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWl0ZW1fX2FuY2hvclwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBmYS1sZ1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pdGVtXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmF3bGVhZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbV9fYW5jaG9yXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YiBmYS1sZ1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgIC5jb250YWluZXIge31cbiAgICAgIC5zb2NpYWwtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zb2NpYWwtaXRlbV9fYW5jaG9yIHtcbiAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2UtaW4tb3V0OyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1pdGVtX19hbmNob3I6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Social.jsx */"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: PRISMIC_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRISMIC_API_URL", function() { return PRISMIC_API_URL; });
/* eslint-disable */
var PRISMIC_API_URL = 'https://is-portfolio.prismic.io/api/v2';

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
/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Education */ "./components/Education.jsx");
var _jsxFileName = "/Users/ivan/Desktop/portfolio/pages/index.jsx";







var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Info__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Education__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "prismic-reactjs":
/*!**********************************!*\
  !*** external "prismic-reactjs" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismic-reactjs");

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

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

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