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
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Education.jsx";




var Education = function Education() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-4196396471" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 200,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4196396471" + " " + "is-size-3 section-title section-title__dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Education"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "column has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-4196396471" + " " + "is-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "University of Social Sciences"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-4196396471" + " " + "is-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4196396471" + " " + "fas fa-map-marker-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), "\xA0Warsaw, Poland"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4196396471" + " " + "is-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Bachelor of Computer Science"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4196396471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Graduated: June 2018"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "column has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4196396471" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-4196396471" + " " + "is-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Machine Building College"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-4196396471" + " " + "is-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-4196396471" + " " + "fas fa-map-marker-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "\xA0Sumy, Ukraine"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4196396471" + " " + "is-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Associate of Chemical Engineering"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4196396471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Graduated: June 2014"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4196396471",
    css: ".section-title.jsx-4196396471{margin-bottom:4rem;}.column.jsx-4196396471{margin-bottom:5rem;}.columns.jsx-4196396471{max-width:936px;margin-left:auto;margin-right:auto;}.wrapper.jsx-4196396471{background-color:#fff;padding-top:2rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border-bottom:1px solid hsl(0,0%,86%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRWR1Y2F0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ08sQUFHOEIsQUFHQSxBQUdILEFBS00sZ0JBSkwsR0FObkIsQUFHQSxHQVFtQixXQUpDLE1BSzRCLFlBSmhELG1DQUswQyxzQ0FDMUMiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9FZHVjYXRpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY29uc3QgRWR1Y2F0aW9uID0gKCkgPT4gKFxuXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICA8RmFkZSBkZWxheT17MjAwfSBjYXNjYWRlPlxuXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS0zIHNlY3Rpb24tdGl0bGUgc2VjdGlvbi10aXRsZV9fZGFya1wiPkVkdWNhdGlvbjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpcy11cHBlcmNhc2VcIj5Vbml2ZXJzaXR5IG9mIFNvY2lhbCBTY2llbmNlczwvaDM+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaXMtdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiIC8+XG4gICAgICAgICAgICAgICZuYnNwO1dhcnNhdywgUG9sYW5kXG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXMtdXBwZXJjYXNlXCI+QmFjaGVsb3Igb2YgQ29tcHV0ZXIgU2NpZW5jZTwvcD5cbiAgICAgICAgICAgIDxwPkdyYWR1YXRlZDogSnVuZSAyMDE4PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpcy11cHBlcmNhc2VcIj5NYWNoaW5lIEJ1aWxkaW5nIENvbGxlZ2U8L2gzPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImlzLXVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtTdW15LCBVa3JhaW5lXG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXMtdXBwZXJjYXNlXCI+QXNzb2NpYXRlIG9mIENoZW1pY2FsIEVuZ2luZWVyaW5nPC9wPlxuICAgICAgICAgICAgPHA+R3JhZHVhdGVkOiBKdW5lIDIwMTQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9GYWRlPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW5zIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDkzNnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb247XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Education.jsx */",
    __self: this
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



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-2686268992" + " " + "footer has-background-white-ter"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-2686268992" + " " + "social-item__anchor"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2686268992" + " " + "fab fa-facebook fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-2686268992" + " " + "social-item__anchor"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2686268992" + " " + "fas fa-envelope fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-2686268992" + " " + "social-item__anchor"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2686268992" + " " + "fab fa-linkedin fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-2686268992" + " " + "social-item__anchor"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2686268992" + " " + "fab fa-github fa-lg"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2686268992" + " " + "has-text-centered"
  }, "This site is made with React, Next and Bulma by", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2686268992" + " " + "has-text-weight-bold"
  }, " IVAN SHYRAI")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2686268992"
  }, "The source code is available on", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/rawlead/portfolio-2",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2686268992"
  }, "\xA0GitHub")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2686268992"
  }, "2018"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
    className: "jsx-2686268992" + " " + "image is-96x96"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.youracclaim.com/badges/61136f12-504c-475c-941f-7657fdd8c37e/public_url",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2686268992"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/oracle.png",
    alt: "oracle-budge",
    className: "jsx-2686268992"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2686268992" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://bulma.io",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2686268992"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://bulma.io/images/made-with-bulma--black.png",
    alt: "Made with Bulma",
    width: "128",
    height: "24",
    className: "jsx-2686268992"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2686268992",
    css: ".image.jsx-2686268992{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;margin:0 auto;}.image.jsx-2686268992:hover{-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);}.footer.jsx-2686268992{padding-top:8rem;}.bulma.jsx-2686268992{height:30px;}.columns.jsx-2686268992{margin-top:2rem;}.content.jsx-2686268992{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.social-item.jsx-2686268992{display:inline-block;margin:0 1rem;}.social-item__anchor.jsx-2686268992{color:#4a4a4a;font-size:2rem;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;}.social-item__anchor.jsx-2686268992:hover{color:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RE8sQUFHMEMsQUFJQSxBQUlkLEFBR0wsQUFHSSxBQUdILEFBSVEsQUFJUCxBQUtILFdBQ2IsQ0FuQkEsRUFjaUIsRUFYakIsQ0FOQSxJQWFnQixRQUttQixFQXRCVixJQWtCekIsbUNBdEJnQixJQWlCSyxVQWhCckIsQ0FJQSxrQkFzQkEsZ0VBVEEiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9Gb290ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlciBoYXMtYmFja2dyb3VuZC13aGl0ZS10ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiFcIiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbV9fYW5jaG9yXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rIGZhLWxnXCIgLz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiFcIiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbV9fYW5jaG9yXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlIGZhLWxnXCIgLz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiFcIiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbV9fYW5jaG9yXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluIGZhLWxnXCIgLz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiFcIiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbV9fYW5jaG9yXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YiBmYS1sZ1wiIC8+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgVGhpcyBzaXRlIGlzIG1hZGUgd2l0aCBSZWFjdCwgTmV4dCBhbmQgQnVsbWEgYnlcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1ib2xkXCI+IElWQU4gU0hZUkFJPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSBzb3VyY2UgY29kZSBpcyBhdmFpbGFibGUgb25cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmF3bGVhZC9wb3J0Zm9saW8tMlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICZuYnNwO0dpdEh1YlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD4yMDE4PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTk2eDk2XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91cmFjY2xhaW0uY29tL2JhZGdlcy82MTEzNmYxMi01MDRjLTQ3NWMtOTQxZi03NjU3ZmRkOGMzN2UvcHVibGljX3VybFwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9vcmFjbGUucG5nXCIgYWx0PVwib3JhY2xlLWJ1ZGdlXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2J1bG1hLmlvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2J1bG1hLmlvL2ltYWdlcy9tYWRlLXdpdGgtYnVsbWEtLWJsYWNrLnBuZ1wiIGFsdD1cIk1hZGUgd2l0aCBCdWxtYVwiIHdpZHRoPVwiMTI4XCIgaGVpZ2h0PVwiMjRcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0OyAgICAgICAgXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlOmhvdmVyIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJ1bG1hIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbnMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLWl0ZW1fX2FuY2hvciB7XG4gICAgICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlLWluLW91dDsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zb2NpYWwtaXRlbV9fYW5jaG9yOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Zvb3Rlcj5cbik7XG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Footer.jsx */"
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






var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "hero-parallax",
    offsetYMax: 30,
    offsetYMin: -30,
    slowerScrollRate: true,
    tag: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2145262087" + " " + "hero is-bold is-fullheight"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2145262087" + " " + "hero-head"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2145262087" + " " + "bird-container bird-container--one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2145262087" + " " + "bird  bird--one"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2145262087" + " " + "bird-container bird-container--two"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2145262087" + " " + "bird  bird--two"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2145262087" + " " + "hero-content has-text-centered"
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
    className: "jsx-2145262087" + " " + "image is-128x128"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2145262087" + " " + "myself"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "custom-class",
    offsetYMax: 20,
    offsetYMin: -20,
    slowerScrollRate: false,
    tag: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1000
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2145262087" + " " + "title box-effect is-size-1 has-text-weight-bold has-text-white"
  }, "Ivan Shyrai")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1400
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2145262087" + " " + "subtitle has-text-white"
  }, "Java Software Developer"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2145262087",
    css: ".hero-parallax.jsx-2145262087{display:block !important;}.hero.jsx-2145262087{background:url(\"../static/barcelona-1.jpg\") center bottom;background-size:cover;display:block !important;overflow:hidden;}.hero-content.jsx-2145262087{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.myself.jsx-2145262087{background:url('../static/me.jpg');background-size:cover;-webkit-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;will-change:transform;width:128px;height:128px;border-radius:50%;}.myself.jsx-2145262087:hover{background:url('../static/me2.jpg');background-size:cover;-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);cursor:pointer;}.bird.jsx-2145262087{background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');background-size:auto 100%;width:88px;height:125px;will-change:background-position;-webkit-animation-name:fly-cycle;-webkit-animation-name:fly-cycle-jsx-2145262087;animation-name:fly-cycle-jsx-2145262087;-webkit-animation-timing-function:steps(10);-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird--one.jsx-2145262087{-webkit-animation-duration:1s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird--two.jsx-2145262087{-webkit-animation-duration:0.9s;-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}.bird-container.jsx-2145262087{position:absolute;top:20%;left:-10%;will-change:transform;-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);-webkit-transform:scale(0) translateX(-10vw);-webkit-animation-timing-function:linear;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird-container--one.jsx-2145262087{-webkit-animation-name:fly-right-one;-webkit-animation-duration:15s;-webkit-animation-delay:0;-webkit-animation-name:fly-right-one-jsx-2145262087;animation-name:fly-right-one-jsx-2145262087;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;animation-delay:0;}.bird-container--two.jsx-2145262087{-webkit-animation-name:fly-right-two;-webkit-animation-duration:17s;-webkit-animation-delay:.5s;-webkit-animation-name:fly-right-two-jsx-2145262087;animation-name:fly-right-two-jsx-2145262087;-webkit-animation-duration:17s;animation-duration:17s;-webkit-animation-delay:.5s;animation-delay:.5s;}@-webkit-keyframes fly-cycle{100%.jsx-2145262087{-webkit-background-position:-900px 0;background-position:-900px 0;}}@-webkit-keyframes fly-cycle-jsx-2145262087{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}@keyframes fly-cycle-jsx-2145262087{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}@-webkit-keyframes fly-right-one{0%.jsx-2145262087{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%.jsx-2145262087{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%.jsx-2145262087{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%.jsx-2145262087{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%.jsx-2145262087{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%.jsx-2145262087{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%.jsx-2145262087{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%.jsx-2145262087{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-one-jsx-2145262087{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@keyframes fly-right-one-jsx-2145262087{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-two{0%.jsx-2145262087{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%.jsx-2145262087{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%.jsx-2145262087{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%.jsx-2145262087{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%.jsx-2145262087{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%.jsx-2145262087{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%.jsx-2145262087{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%.jsx-2145262087{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@-webkit-keyframes fly-right-two-jsx-2145262087{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@keyframes fly-right-two-jsx-2145262087{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERPLEFBR29DLEFBR2lDLEFBTXpDLEFBT2tCLEFBVUMsQUFTdUQsQUFhN0QsQUFNRSxBQU1kLEFBWW1CLEFBUUEsQUFTRSxBQU1BLEFBTVUsQUFLZSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0MsQUFLQSxBQU1oQixBQUtlLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQyxBQUtBLEFBTUMsQUFJRixBQUlDLEFBSUEsQUFJRSxBQUlGLEFBS0MsQUFLQSxBQU1BLEFBSUYsQUFJQyxBQUlBLEFBSUUsQUFJRixBQUtDLEFBS0Esa0JBL096RCxBQW1ERCxPQTVEVixDQTZEWSxDQW5ERixHQXNDYyxFQU1FLEdBM0NnQixBQUtsQixDQVVBLEFBb0NBLENBVVMsQUFRQSxBQVNBLEFBTUEsVUFNVSxBQXlDQSxVQTdIRixDQWRqQixBQXdCTyxBQW9DUSxJQTJDbUIsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQXFCQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBb0JBLEFBb0NBLENBNUZDLEFBS0EsQUFvQ0EsQUFLQSxBQWNBLEFBSUEsQUFRQSxBQXdCQSxBQUlBLEFBUUEsQ0F4REMsQUF5QkEsQUFLQSxBQU1BLEFBeUJBLEFBS0EsQ0FsREMsQUFvQ0EsQ0FqSjNELEFBTUEsRUF2QjBCLEFBUUUsTUFyRUksTUFSUCxFQTZDSyxLQXJCVCxDQTJCVSxHQXBCTCxHQXVDRyxFQXhERSxBQWdFRixTQTdFYixPQTZDTSxLQWRYLEVBb0JZLEVBbER6QixPQStCZSxhQUNtQixxQkFURSxFQXNCcEMsRUFoQ3dCLE9Bb0JXLEFBa0JuQyxHQTZDRSxBQXlDQSxHQWxJRixFQW1EK0MsT0E1Q2pDLEVBdURXLEVBUUEsSUFyREcsSUFUYixNQW1CWSxPQWxCUCxhQTJDdUIsS0ExQzNDLEtBb0ZFLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFxQkEsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQW9CQSxBQW9DQSxJQTVGQSxBQUtBLEFBb0NBLEFBS0EsQUFjQSxBQUlBLEFBUUEsQUF3QkEsQUFJQSxBQVFBLElBcEtrQixBQTRHbEIsQUF5QkEsQUFLQSxBQU1BLEFBeUJBLEFBS0EsRUF0S29CLEVBb0hwQixBQW9DQSxtQkExS2lDLG1CQW5DbEIsRUE4Q2pCLE1BcEM4QyxBQTRDOUMsT0FyREEscUNBVXNDLEdBeUJPLDJDQUNSLGtDQXpCUSwyQ0FDUixDQXlCckMsNkVBeEJBIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSGVyby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG4gIDxQYXJhbGxheFxuICAgIGNsYXNzTmFtZT1cImhlcm8tcGFyYWxsYXhcIlxuICAgIG9mZnNldFlNYXg9ezMwfVxuICAgIG9mZnNldFlNaW49ey0zMH1cbiAgICBzbG93ZXJTY3JvbGxSYXRlXG4gICAgdGFnPVwiZmlndXJlXCJcbiAgPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtYm9sZCBpcy1mdWxsaGVpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taGVhZFwiPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLW9uZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQgIGJpcmQtLW9uZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLXR3b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQgIGJpcmQtLXR3b1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgb2Zmc2V0WU1heD17MzB9XG4gICAgICAgICAgb2Zmc2V0WU1pbj17LTMwfVxuICAgICAgICAgIHNsb3dlclNjcm9sbFJhdGU9e2ZhbHNlfVxuICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmFkZSBkZWxheT17ODAwfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlIGlzLTEyOHgxMjhcIiBzdHlsZT17eyBtYXJnaW46ICcwIGF1dG8nIH19IGhyZWY9XCIhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlzZWxmXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgb2Zmc2V0WU1heD17MjB9XG4gICAgICAgICAgb2Zmc2V0WU1pbj17LTIwfVxuICAgICAgICAgIHNsb3dlclNjcm9sbFJhdGU9e2ZhbHNlfVxuICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmFkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgYm94LWVmZmVjdCBpcy1zaXplLTEgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgSXZhbiBTaHlyYWlcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGRlbGF5PXsxNDAwfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBoYXMtdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBKYXZhIFNvZnR3YXJlIERldmVsb3BlclxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5oZXJvLXBhcmFsbGF4IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zdGF0aWMvYmFyY2Vsb25hLTEuanBnXCIpIGNlbnRlciBib3R0b207XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8tY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLm15c2VsZiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvbWUuanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAubXlzZWxmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9tZTIuanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMuc3ZnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZseS1jeWNsZTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygxMCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC0tb25lIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC0tdHdvIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC45cztcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICBsZWZ0OiAtMTAlO1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtY29udGFpbmVyLS1vbmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC1vbmU7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMDtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtY29udGFpbmVyLS10d28ge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC10d287XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE3cztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLjVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtdHdvO1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmbHktY3ljbGUge1xuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBmbHktY3ljbGUge1xuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZseS1yaWdodC1vbmUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAxMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAyMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmbHktcmlnaHQtdHdvIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0xMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ydmgpIHRyYW5zbGF0ZVgoLTEwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00dmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxdmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0xMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAzMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjV2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjV2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA2MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUGFyYWxsYXg+XG4pO1xuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Hero.jsx */"
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
      className: "image is-32x32 ",
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
      style: {
        fontSize: '.8rem'
      },
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
    className: "jsx-3807071855" + " " + "section has-background-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "main-content has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    delay: 200,
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
    style: {
      minHeight: '50vh'
    },
    className: "jsx-3807071855",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "is-size-3 section-title section-title__light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3807071855" + " " + "has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Oracle Certified Java Developer specialised in front-end and back-end development."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3807071855" + " " + "has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Available for hire and open to any ideas of cooperation."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "title-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "is-size-3 has-text-weight-bold section-title section-title__light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Technical Skills")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "column is-size-4 has-text-weight-bold has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "HTML / CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns is-gapless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['jsx', 'ui design', 'materialize'],
    logos: ['../static/logos/react.svg', '../static/logos/ui.png', '../static/logos/materialize.png'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['bootstrap', 'bulma', 'sass'],
    logos: ['../static/logos/bootstrap.svg', '../static/logos/bulma.png', '../static/logos/sass.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "skills-col-title is-size-5 has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "BACK-END"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['java', 'spring', 'mysql', 'hibernate'],
    logos: ['../static/logos/java.svg', '../static/logos/spring.png', '../static/logos/mysql.svg', '../static/logos/hibernate.png'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "skills-col-title is-size-5 has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "JAVASCRIPT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['react', 'next', 'vue', 'jquery'],
    logos: ['../static/logos/react.svg', '../static/logos/next.png', '../static/logos/vuejs.svg', '../static/logos/jquery.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3807071855" + " " + "column is-size-5 has-text-weight-bold has-text-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "OTHER")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "columns is-gapless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['git', 'aws', 'heroku'],
    logos: ['../static/logos/github.png', '../static/logos/amazonwebservices.svg', '../static/logos/heroku.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3807071855" + " " + "column is-marginless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['intellij', 'photoshop', 'illustrator'],
    logos: ['../static/logos/intellij.svg', '../static/logos/photoshop.svg', '../static/logos/illustrator.svg'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3807071855",
    css: ".section.jsx-3807071855{display:block !important;}.main-content.jsx-3807071855{padding:4rem;position:relative;max-width:1152px;margin:0 auto;}.skills-col-title.jsx-3807071855{margin-bottom:.4rem;font-weight:bold;font-size:1rem;}.column.jsx-3807071855{margin-top:2rem;}.columns.jsx-3807071855{margin-bottom:0;}.title-row.jsx-3807071855{margin-top:5rem;}.oracle.jsx-3807071855{position:relative;z-index:50;}@media screen and (max-width:769px){.section.jsx-3807071855{padding:1rem .25rem;}.section.jsx-3807071855 .column.jsx-3807071855{padding:0;margin:2.5rem 0 0.1rem 0;}}@media screen and (max-width:1024px){.main-content.jsx-3807071855{padding:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEtPLEFBR29DLEFBR1osQUFNTyxBQUtKLEFBR0QsQUFHQSxBQUdHLEFBS00sQUFHVixBQU9mLFVBTjhCLEdBNUJYLEFBa0NsQixHQXZCRixBQUdBLEFBR0EsRUFHYSxFQWRNLEFBbUJqQixLQTVCRixJQXdCQSxFQXBCbUIsSUE0QmpCLEVBdEJlLFdBTEQsSUFNaEIsVUFMQSIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0luZm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY29uc3QgU2tpbGxJdGVtcyA9ICh7IGxvZ29zLCBoZWFkaW5ncyB9KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9nb3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpdGVtcy5wdXNoKFxuICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zMngzMiBcIiBzdHlsZT17eyBtYXJnaW46ICdhdXRvIGF1dG8gOHB4IGF1dG8nIH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb3NbaV19IGFsdD17YCR7aGVhZGluZ3NbaV19LWxvZ29gfSAvPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGluZyBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC13aGl0ZS10ZXJcIiBzdHlsZT17eyBmb250U2l6ZTogJy44cmVtJyB9fT57aGVhZGluZ3NbaV19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PixcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIiBzdHlsZT17eyBwYWRkaW5nOiAnLjZyZW0gMCAwIDAnLCBib3JkZXJUb3A6ICcxcHggc29saWQgaHNsKDAsIDAlLCAzMCUpJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzAlKScgfX0+XG4gICAgICB7aXRlbXN9XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBJbmZvID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIGhhcy1iYWNrZ3JvdW5kLWJsYWNrXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgIDxGYWRlIGRlbGF5PXsyMDB9IGNhc2NhZGU+XG4gICAgICAgIHsvKiByb3cgbWFpbiBkZXNjcmlwdGlvbiAqL31cbiAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgb2Zmc2V0WU1heD17NTB9XG4gICAgICAgICAgb2Zmc2V0WU1pbj17LTUwfVxuICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtMyBzZWN0aW9uLXRpdGxlIHNlY3Rpb24tdGl0bGVfX2xpZ2h0XCI+QWJvdXQ8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnQgXCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICAgICAgT3JhY2xlIENlcnRpZmllZCBKYXZhIERldmVsb3BlciBzcGVjaWFsaXNlZCBpblxuICAgICAgICAgICAgICAgICAgIGZyb250LWVuZCBhbmQgYmFjay1lbmQgZGV2ZWxvcG1lbnQuXG4gICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUtdGVyXCI+QXZhaWxhYmxlIGZvciBoaXJlIGFuZCBvcGVuIHRvIGFueSBpZGVhcyBvZiBjb29wZXJhdGlvbi48L2g2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXJvd1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTMgaGFzLXRleHQtd2VpZ2h0LWJvbGQgc2VjdGlvbi10aXRsZSBzZWN0aW9uLXRpdGxlX19saWdodFwiPlRlY2huaWNhbCBTa2lsbHM8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyogcm93IGZpcnN0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2x1bW4gaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgSFRNTCAvIENTU1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtZ2FwbGVzc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgJ2pzeCcsXG4gICAgICAgICAgICAgICAgJ3VpIGRlc2lnbicsXG4gICAgICAgICAgICAgICAgJ21hdGVyaWFsaXplJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3JlYWN0LnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy91aS5wbmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvbWF0ZXJpYWxpemUucG5nJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICAnYnVsbWEnLFxuICAgICAgICAgICAgICAgICdzYXNzJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2Jvb3RzdHJhcC5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYnVsbWEucG5nJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3Nhc3Muc3ZnJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiByb3cgc2Vjb25kICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxscy1jb2wtdGl0bGUgaXMtc2l6ZS01IGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICBCQUNLLUVORFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgJ2phdmEnLFxuICAgICAgICAgICAgICAgICdzcHJpbmcnLFxuICAgICAgICAgICAgICAgICdteXNxbCcsXG4gICAgICAgICAgICAgICAgJ2hpYmVybmF0ZScsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9qYXZhLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9zcHJpbmcucG5nJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL215c3FsLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9oaWJlcm5hdGUucG5nJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxscy1jb2wtdGl0bGUgaXMtc2l6ZS01IGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICBKQVZBU0NSSVBUXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAncmVhY3QnLFxuICAgICAgICAgICAgICAgICduZXh0JyxcbiAgICAgICAgICAgICAgICAndnVlJyxcbiAgICAgICAgICAgICAgICAnanF1ZXJ5JyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3JlYWN0LnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9uZXh0LnBuZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy92dWVqcy5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvanF1ZXJ5LnN2ZycsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyogcm93IHRoaXJkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2x1bW4gaXMtc2l6ZS01IGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgT1RIRVJcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtZ2FwbGVzc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgJ2dpdCcsXG4gICAgICAgICAgICAgICAgJ2F3cycsXG4gICAgICAgICAgICAgICAgJ2hlcm9rdScsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9naXRodWIucG5nJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2FtYXpvbndlYnNlcnZpY2VzLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9oZXJva3Uuc3ZnJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnaW50ZWxsaWonLFxuICAgICAgICAgICAgICAgICdwaG90b3Nob3AnLFxuICAgICAgICAgICAgICAgICdpbGx1c3RyYXRvcicsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9pbnRlbGxpai5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcGhvdG9zaG9wLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9pbGx1c3RyYXRvci5zdmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZhZGU+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGxzLWNvbC10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjRyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbnMge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm9yYWNsZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlY3Rpb24gLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDAgMC4xcmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Info.jsx */",
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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/Layout.jsx";


 // import Head from 'next/head';

 // import { initGA, logPageView } from '../utils/analytics';

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3054374884",
    css: "body{background-color:#f2f2f2;}*{font-family:'Oswald',sans-serif !important;}.button{border-radius:0 !important;}.section-title{text-align:center;max-width:185px;margin-left:auto;margin-right:auto;text-transform:uppercase;padding-bottom:1rem;font-weight:bold;}.section-title__dark{border-bottom:3px solid #4a4a4a;}.section-title__light{border-bottom:3px solid #f5f5f5;color:#f5f5f5;}.box-effect:after,.box-effect:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}.box-effect:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}.box-effect:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.box-effect:hover:after,.box-effect:hover:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjTyxBQUdvQyxBQUdtQixBQUdqQixBQUdULEFBU2MsQUFHQSxBQU1yQixBQVlXLEFBTUUsQUFPZCxVQUNpQixDQXpCVCxPQWxCRixJQThCTyxFQU1GLENBN0N2QixFQU1BLEVBc0JTLEdBVlQsQUFHZ0IsRUFYRyxFQW1CSSxDQXdCRixNQWxEckIsRUFxQytCLEFBTUEsQ0F4Qi9CLEtBWG9CLE1BbUJQLFdBQ0EsQ0FuQmMsS0E2QkosQUFNQSxLQWZMLGVBbkJJLENBb0JWLFVBQ2dELENBb0I1RCxRQXhDbUIsaUJBQ25CLGtCQTJCQSxBQU1BLGFBYjRDLG1KQUM1QyIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG4vLyBpbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi4vdXRpbHMvYW5hbHl0aWNzJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8UGFyYWxsYXhQcm92aWRlcj5cblxuICAgIHtjaGlsZHJlbn1cblxuICAgIDxGb290ZXIgLz5cblxuICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAge2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDE4NXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLXRpdGxlX19kYXJrIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzRhNGE0YTtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi10aXRsZV9fbGlnaHQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmNWY1O1xuICAgICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICB9XG4gICAgICAgIC8qZWZmZWN0LWJveCovXG4gICAgICAgIC5ib3gtZWZmZWN0OmFmdGVyLFxuICAgICAgICAuYm94LWVmZmVjdDpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgICAgIH1cbiAgICAgICAgLmJveC1lZmZlY3Q6YmVmb3JlIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwwKTtcbiAgICAgICAgfVxuICAgICAgICAuYm94LWVmZmVjdDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsMSk7XG4gICAgICAgIH1cbiAgICAgICAgLmJveC1lZmZlY3Q6aG92ZXI6YWZ0ZXIsXG4gICAgICAgIC5ib3gtZWZmZWN0OmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L1BhcmFsbGF4UHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Layout.jsx */",
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




var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3987660421" + " " + "navbar bounce-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3987660421" + " " + "navbar-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-3987660421" + " " + "has-text-white text-focus-in"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3987660421" + " " + "fab fa-facebook fa-lg"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3987660421" + " " + "navbar-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-3987660421" + " " + "has-text-white text-focus-in "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3987660421" + " " + "fas fa-envelope fa-lg"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3987660421" + " " + "navbar-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-3987660421" + " " + "has-text-white text-focus-in "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3987660421" + " " + "fab fa-linkedin fa-lg"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3987660421" + " " + "navbar-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "!",
    className: "jsx-3987660421" + " " + "has-text-white text-focus-in "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3987660421" + " " + "fab fa-github fa-lg"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3987660421",
    css: ".navbar.jsx-3987660421{display:block;text-align:center;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;background-color:#0a0a0a;min-height:auto;}.navbar.jsx-3987660421:hover{background:none;}.navbar.jsx-3987660421:hover a.jsx-3987660421{font-size:125%;}.navbar-item.jsx-3987660421{display:inline-block;}.navbar-item.jsx-3987660421 a.jsx-3987660421{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;}.navbar-item.jsx-3987660421 a.jsx-3987660421:hover{color:#aaa !important;}.bounce-top.jsx-3987660421{-webkit-animation:bounce-top 1s 1.2s both;-webkit-animation:bounce-top-jsx-3987660421 1s 1.2s both;animation:bounce-top-jsx-3987660421 1s 1.2s both;}@-webkit-keyframes bounce-top{0%.jsx-3987660421{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%.jsx-3987660421{opacity:1;}40%.jsx-3987660421{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%.jsx-3987660421{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%.jsx-3987660421{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%.jsx-3987660421{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%.jsx-3987660421,55%.jsx-3987660421,75%.jsx-3987660421,87%.jsx-3987660421{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%.jsx-3987660421{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}@-webkit-keyframes bounce-top-jsx-3987660421{0%{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}@keyframes bounce-top-jsx-3987660421{0%{-webkit-transform:translateY(-45px);-webkit-transform:translateY(-45px);-ms-transform:translateY(-45px);transform:translateY(-45px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:1;}24%{opacity:1;}40%{-webkit-transform:translateY(-24px);-webkit-transform:translateY(-24px);-ms-transform:translateY(-24px);transform:translateY(-24px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-4px);-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;}}.text-focus-in.jsx-3987660421{-webkit-animation:text-focus-in 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;-webkit-animation:text-focus-in-jsx-3987660421 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;animation:text-focus-in-jsx-3987660421 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;}@-webkit-keyframes text-focus-in{0%.jsx-3987660421{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%.jsx-3987660421{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}@-webkit-keyframes text-focus-in-jsx-3987660421{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}@keyframes text-focus-in-jsx-3987660421{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qk8sQUFHdUIsQUFPRSxBQUdELEFBR00sQUFHVSxBQUdULEFBR29CLEFBS0osQUFPMUIsQUFHMEIsQUFNQSxBQU1ELEFBTUEsQUFTRCxBQU1BLEFBU0UsQUFPMUIsQUFHMEIsQUFNQSxBQU1ELEFBTUEsQUFTRCxBQU1BLEFBU2tELEFBTTFELEFBS0QsQUFPQyxBQUtELFVBdkgzQixBQW9EQSxJQXRGaUIsQ0FVbkIsQ0FIQSxLQU1BLENBTUEsR0EySDZCLEFBWUEsQ0FqQkMsQUFZQSxNQXBKRyxFQStESyxBQU1BLEFBOENBLEFBTUEsQ0F6RUMsQUFNQSxBQThDQSxBQU1BLENBaEZDLEFBVUEsQUFNQSxBQW9DQSxBQVVBLEFBTUEsTUF6RUkseUJBeUg5QixBQVlBLEdBM0lkLEFBMEhjLEFBWUEsT0FOWixBQVlBLEdBakJBLEFBWUEsR0FwQnNGLG1CQWpJN0Qsc0JBK0RvQixBQU1BLEFBOENBLEFBTUEsR0F4SDdCLENBK0M0QixBQU1BLEFBOENBLEFBTUEsSUFoRkEsQUFVQSxBQU1BLEFBb0NBLEFBVUEsQUFNQSxXQTVGOUMsS0FtQkEsbUJBMkMrQyxBQU1BLEFBOENBLEFBTUEsR0F6RUQsQUFNQSxBQThDQSxBQU1BLElBaEZBLEFBVUEsQUFNQSxBQW9DQSxBQVVBLEFBTUEsdUVBOUI1QyxBQU1ZLEFBOENaLEFBTVksQ0F6RVosQUFNQSxBQThDQSxBQU1BLElBaEZZLEFBVVosQUFNQSxBQW9DWSxBQVVaLEFBTUEsS0F4QkEsQUFvREEsS0EvRkEsQUFvREEsV0FpREYiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9OYXZiYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGJvdW5jZS10b3BcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBocmVmPVwiIVwiIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIHRleHQtZm9jdXMtaW5cIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2sgZmEtbGdcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiIVwiIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIHRleHQtZm9jdXMtaW4gXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlIGZhLWxnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiFcIiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZSB0ZXh0LWZvY3VzLWluIFwiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBmYS1sZ1wiIC8+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIhXCIgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgdGV4dC1mb2N1cy1pbiBcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViIGZhLWxnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgLm5hdmJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgLm5hdmJhcjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICAubmF2YmFyOmhvdmVyIGEge1xuICAgICAgICBmb250LXNpemU6IDEyNSU7XG4gICAgICB9XG4gICAgICAubmF2YmFyLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAubmF2YmFyLWl0ZW0gYSB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIC5uYXZiYXItaXRlbSBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNhYWEgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5ib3VuY2UtdG9wIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZS10b3AgMXMgMS4ycyBib3RoO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYm91bmNlLXRvcCAxcyAxLjJzIGJvdGg7XG4gICAgICB9XG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlLXRvcCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDVweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICAyNCUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgNDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgNjUlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgODIlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDkzJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICAyNSUsXG4gICAgICAgIDU1JSxcbiAgICAgICAgNzUlLFxuICAgICAgICA4NyUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIGJvdW5jZS10b3Age1xuICAgICAgICAwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgMjQlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDQwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDY1JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDgyJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICA5MyUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgMjUlLFxuICAgICAgICA1NSUsXG4gICAgICAgIDc1JSxcbiAgICAgICAgODclIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGV4dC1mb2N1cy1pbiB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0ZXh0LWZvY3VzLWluIDFzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCkgMS40cyBib3RoO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdGV4dC1mb2N1cy1pbiAxcyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIDEuNHMgYm90aDtcbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHRleHQtZm9jdXMtaW4ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyB0ZXh0LWZvY3VzLWluIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Navbar.jsx */"
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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-4244276530" + " " + "is-size-3 sticky-title section-title section-title__dark"
      }, "Projects"), projectsView, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "4244276530",
        css: ".sticky-title.jsx-4244276530{margin-top:3rem;margin-bottom:-3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DVyxBQUcrQixnQkFDSSxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9Qcm9qZWN0cy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHNBUEkgfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IFNpbmdsZVByb2plY3QgZnJvbSAnLi9TaW5nbGVQcm9qZWN0JztcblxuY2xhc3MgUHJvamVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBwcm9qZWN0czogWycnXSB9O1xuICAgIHRoaXMuZmV0Y2hQcm9qZWN0cyA9IHRoaXMuZmV0Y2hQcm9qZWN0cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFByb2plY3RzKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaFByb2plY3RzKCkge1xuICAgIC8vIENhbGwgdGhlIEFQSSBhbmQgcmVxdWVzdCA1IGRvY3VtbmV0c1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvamVjdHNBUEkoeyBwYWdlU2l6ZTogNSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByb2plY3RzOiByZXNwb25zZS5yZXN1bHRzLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvamVjdHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJvamVjdHNWaWV3ID0gcHJvamVjdHMubWFwKHByb2plY3QgPT4gKFxuICAgICAgPFNpbmdsZVByb2plY3Qga2V5PXtwcm9qZWN0LnVpZH0gY29udGVudD17cHJvamVjdH0gLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS0zIHN0aWNreS10aXRsZSBzZWN0aW9uLXRpdGxlIHNlY3Rpb24tdGl0bGVfX2RhcmtcIj5Qcm9qZWN0czwvaDE+XG5cbiAgICAgICAge3Byb2plY3RzVmlld31cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuc3RpY2t5LXRpdGxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG5cbi8vIG9wZW5Db2xsYXBzZShlKSB7XG4vLyAgIHRoaXMuZnVuY05hbWUgPSAnb3BlbkNvbGxhcHNlJztcbi8vICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4vLyAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCkge1xuLy8gICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbi8vICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke2NvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbi8vICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbi8vICAgfVxuLy8gfVxuXG4vLyAgey8qIFByb2plY3QgMSAqL31cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlclwiPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbi8vICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9jdG9jYXQtY29udGFpbmVyIGltYWdlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmF3bGVhZC9QaG90by1JU1wiPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuLy8gICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdGhyZWUtZmlmdGhzXCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuLy8gICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezgwfVxuLy8gICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuLy8gICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuLy8gICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgUGhvdG8gSVNcbi8vICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbi8vICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4vLyAgICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTEuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTIuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTMuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTQuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTUuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvcG9ydGFsLTYuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgXX1cbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMGEwYTBhXCJcbi8vICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4vLyAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuLy8gICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IHRoaXMgcHJvamVjdDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICA8aDU+UGhvdG8gSVMgaXMgYSB3ZWIgYXBwbGljYXRpb24gZm9yIHNoYXJpbmcgcGhvdG9zLjwvaDU+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gYnVpbHQgd2l0aCBKYXZhIGFuZCBTcHJpbmcgRnJhbWV3b3JrIGFzIGJhY2stZW5kIHRlY2hub2xvZ2llcyxcbi8vICAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLCBwaG90b3MsXG4vLyBjb21tZW50cyBhbmQgb3RoZXIgc3R1ZmYuXG4vLyAgICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5JbnRlcmZhY2Ugd2FzIGJ1aWx0IHVzaW5nIFZ1ZS5qcyBhbmQgQm9vdHN0cmFwIGxpYnJhcmllcy48L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5Db21tdW5pY2F0aW9uIHdpdGggc2VydmVyIGlzIGRvbmUgdGhyb3VnaCBKU09OIGZvcm1hdCBhbmQgUkVTVCBBUEkuIDwvcD5cbi8vICAgICAgICAgICAgICAgICAgIDxwPlxuLy8gICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBsaXZlcyBvbiBBbWF6b24gV2ViIFNlcnZpY2VzIGFuZFxuLy8gICAgICAgICAgICAgICAgICAgICAgaXMgdXNpbmcgRUIgZm9yIGRlcGxveWluZywgUzMgZm9yIHN0b3JpbmcgaW1hZ2UgZmlsZXMgYW5kIFJEUyBhcyBhXG4vLyAgICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZSBwcm92aWRlci5cbi8vICAgICAgICAgICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDM+RnVuY3Rpb25hbDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoNT5Vc2VycyBhcmUgYWJsZSB0bzo8L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNyZWF0ZSBhIG5ldyBhY2NvdW50PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TG9naW4gaW50byBleGlzdGluZyBhY2NvdW50PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIHByb2ZpbGUgaW1hZ2U8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb2RpZnkgcGVyc29uYWwgZGF0YTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwaG90byB3aXRoIGEgc2hvcnQgdGl0bGUsXG4vLyAgZGVzY3JpcHRpb24gYW5kIHNlbGVjdGluZyBhIGNhdGVnb3J5PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhwbG9yZSBwaG90b3MgdXBsb2FkZWQgYnkgb3RoZXIgdXNlcnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb3J0IHBob3RvcyBieSBjYXRlZ29yeTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkZCBvciByZW1vdmUgcGhvdG9zIHRvIG9yIGZyb20gY29sbGVjdGlvbiBvZiBmYXZvcml0ZXM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21tZW50IHBob3RvcyBhbmQgZXhwbG9yZSBjb21tZW50cyBtYWRlIGJ5IG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoIGZvciBjYXRlZ29yaWVzIG9yIG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPlRlY2huaWNhbCBTaGVldDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoNT5UZWNobm9sb2dpZXMgSSBnb3QgaW52b2x2ZWQgd2l0aCB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC48L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmEgODwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcmsgLSBTZWN1cml0eSwgTVZDLCBEYXRhPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbWF6b24gV2ViIFNlcnZpY2VzIC0gRUIsIFMzLCBSRFM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5vQXV0aCAyLjA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLyBKYXZhc2NyaXB0IEVTNjwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFyY2hpdGVjdHVyZTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFuaW1hdGlvbnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5WdWUuanM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbi8vICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvRmFkZT5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG5cblxuLy8gICAgICAgICB7IC8qIFBST0pFQ1QgMiAqL31cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlciB3cmFwcGVyLXByb2plY3QyXCI+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuLy8gICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYXdsZWFkL1Bob3RvLUlTXCI+XG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2N0b2NhdFwiIC8+XG4vLyAgICAgICAgICAgICA8L2E+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtOFwiPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy10aHJlZS1maWZ0aHNcIj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4vLyAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbi8vICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4vLyAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4vLyAgICAgICAgICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4vLyAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICBFYnJvZnlcbi8vICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbi8vICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4vLyAgICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby0xLmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tMi5qcGcnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTMucG5nJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby00LnBuZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tNS5wbmcnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTYuanBnJyxcbi8vICAgICAgICAgICAgICAgICAgICAgXX1cbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMmMzZTUwXCJcbi8vICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4vLyAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuLy8gICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IHRoaXMgcHJvamVjdDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICA8aDU+UGhvdG8gSVMgaXMgYSB3ZWIgYXBwbGljYXRpb24gZm9yIHNoYXJpbmcgcGhvdG9zLjwvaDU+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gYnVpbHQgd2l0aCBKYXZhIGFuZCBTcHJpbmcgRnJhbWV3b3JrIGFzIGJhY2stZW5kIHRlY2hub2xvZ2llcyxcbi8vICAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLFxuLy8gIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuLy8gICAgICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPHA+SW50ZXJmYWNlIHdhcyBidWlsdCB1c2luZyBWdWUuanMgYW5kIEJvb3RzdHJhcCBsaWJyYXJpZXMuPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPHA+Q29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpcyBkb25lIHRocm91Z2ggSlNPTiBmb3JtYXQgYW5kIFJFU1QgQVBJLiA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gbGl2ZXMgb24gQW1hem9uIFdlYiBTZXJ2aWNlcyBhbmRcbi8vICAgICAgICAgICAgICAgICAgICAgIGlzIHVzaW5nIEVCIGZvciBkZXBsb3lpbmcsIFMzIGZvciBzdG9yaW5nIGltYWdlIGZpbGVzIGFuZCBSRFMgYXMgYVxuLy8gICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UgcHJvdmlkZXIuXG4vLyAgICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPkZ1bmN0aW9uYWw8L2gzPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDU+VXNlcnMgYXJlIGFibGUgdG86PC9oNT5cbi8vICAgICAgICAgICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGUgYSBuZXcgYWNjb3VudDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxvZ2luIGludG8gZXhpc3RpbmcgYWNjb3VudDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcm9maWxlIGltYWdlPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9kaWZ5IHBlcnNvbmFsIGRhdGE8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcGhvdG8gd2l0aCBhIHNob3J0IHRpdGxlLFxuLy8gZGVzY3JpcHRpb24gYW5kIHNlbGVjdGluZyBhIGNhdGVnb3J5PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhwbG9yZSBwaG90b3MgdXBsb2FkZWQgYnkgb3RoZXIgdXNlcnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb3J0IHBob3RvcyBieSBjYXRlZ29yeTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkZCBvciByZW1vdmUgcGhvdG9zIHRvIG9yIGZyb20gY29sbGVjdGlvbiBvZiBmYXZvcml0ZXM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21tZW50IHBob3RvcyBhbmQgZXhwbG9yZSBjb21tZW50cyBtYWRlIGJ5IG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoIGZvciBjYXRlZ29yaWVzIG9yIG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPlRlY2huaWNhbCBTaGVldDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoNT5UZWNobm9sb2dpZXMgSSBnb3QgaW52b2x2ZWQgd2l0aCB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC48L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmEgODwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcmsgLSBTZWN1cml0eSwgTVZDLCBEYXRhPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbWF6b24gV2ViIFNlcnZpY2VzIC0gRUIsIFMzLCBSRFM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5vQXV0aCAyLjA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLyBKYXZhc2NyaXB0IEVTNjwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFyY2hpdGVjdHVyZTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFuaW1hdGlvbnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5WdWUuanM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbi8vICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvRmFkZT5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgeyAvKiBQUk9KRUNUIDMgKi99XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXIgd3JhcHBlci1wcm9qZWN0M1wiPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbi8vICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9jdG9jYXQtY29udGFpbmVyIGltYWdlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmF3bGVhZC9QaG90by1JU1wiPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuLy8gICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdGhyZWUtZmlmdGhzXCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuLy8gICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezgwfVxuLy8gICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuLy8gICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuLy8gICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LWdyZXktbGlnaHRcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgQXBwXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4vLyAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuLy8gICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbi8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtbXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0xLmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0yLmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0zLmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC00LmpwZycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC01LmpwZWcnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtNi5qcGcnLFxuLy8gICAgICAgICAgICAgICAgICAgICBdfVxuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImhzbCgwLCAwJSwgNDAlKVwiXG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuLy8gICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkZWxheT17NTAwfT5cbi8vICAgICAgICAgICAgICAgICAgIDxoMz5BYm91dCB0aGlzIHByb2plY3Q8L2gzPlxuLy8gICAgICAgICAgICAgICAgICAgPGg1PlBob3RvIElTIGlzIGEgd2ViIGFwcGxpY2F0aW9uIGZvciBzaGFyaW5nIHBob3Rvcy48L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgPHA+XG4vLyAgICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGJ1aWx0IHdpdGggSmF2YSBhbmQgU3ByaW5nIEZyYW1ld29yayBhcyBiYWNrLWVuZCB0ZWNobm9sb2dpZXMsXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpdGggTXlTUUwgZGF0YWJhc2UgZm9yIGtlZXBpbmcgdXNlciBhY2NvdW50cyxcbi8vIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuLy8gICAgICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPHA+SW50ZXJmYWNlIHdhcyBidWlsdCB1c2luZyBWdWUuanMgYW5kIEJvb3RzdHJhcCBsaWJyYXJpZXMuPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPHA+Q29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpcyBkb25lIHRocm91Z2ggSlNPTiBmb3JtYXQgYW5kIFJFU1QgQVBJLiA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gbGl2ZXMgb24gQW1hem9uIFdlYiBTZXJ2aWNlcyBhbmRcbi8vICAgICAgICAgICAgICAgICAgICAgIGlzIHVzaW5nIEVCIGZvciBkZXBsb3lpbmcsIFMzIGZvciBzdG9yaW5nIGltYWdlIGZpbGVzIGFuZCBSRFMgYXMgYVxuLy8gICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UgcHJvdmlkZXIuXG4vLyAgICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPkZ1bmN0aW9uYWw8L2gzPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDU+VXNlcnMgYXJlIGFibGUgdG86PC9oNT5cbi8vICAgICAgICAgICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGUgYSBuZXcgYWNjb3VudDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxvZ2luIGludG8gZXhpc3RpbmcgYWNjb3VudDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcm9maWxlIGltYWdlPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9kaWZ5IHBlcnNvbmFsIGRhdGE8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcGhvdG8gd2l0aCBhIHNob3J0IHRpdGxlLFxuLy8gZGVzY3JpcHRpb24gYW5kIHNlbGVjdGluZyBhIGNhdGVnb3J5PC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhwbG9yZSBwaG90b3MgdXBsb2FkZWQgYnkgb3RoZXIgdXNlcnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb3J0IHBob3RvcyBieSBjYXRlZ29yeTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkZCBvciByZW1vdmUgcGhvdG9zIHRvIG9yIGZyb20gY29sbGVjdGlvbiBvZiBmYXZvcml0ZXM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21tZW50IHBob3RvcyBhbmQgZXhwbG9yZSBjb21tZW50cyBtYWRlIGJ5IG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoIGZvciBjYXRlZ29yaWVzIG9yIG90aGVyIHVzZXJzPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgzPlRlY2huaWNhbCBTaGVldDwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoNT5UZWNobm9sb2dpZXMgSSBnb3QgaW52b2x2ZWQgd2l0aCB3aGlsZSB3b3JraW5nIG9uIHRoaXMgcHJvamVjdC48L2g1PlxuLy8gICAgICAgICAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmEgODwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNwcmluZyBGcmFtZXdvcmsgLSBTZWN1cml0eSwgTVZDLCBEYXRhPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8bGk+TXlTUUw8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbWF6b24gV2ViIFNlcnZpY2VzIC0gRUIsIFMzLCBSRFM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5vQXV0aCAyLjA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLyBKYXZhc2NyaXB0IEVTNjwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFyY2hpdGVjdHVyZTwvbGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYIEFuaW1hdGlvbnM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5WdWUuanM8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbi8vICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvRmFkZT5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Projects.jsx */"
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
      var gradientBackground = {}; // BACKGROUND COLOR OF PROJECT WRAPPER

      if (project) {
        gradientBackground = {
          backgroundColor: "".concat(project.back_grad_color_2),
          background: "linear-gradient(to right, ".concat(project.back_grad_color_1, ", ").concat(project.back_grad_color_2, ")")
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !project ?
      /* SPINNER IF PROJECT IS LOADING */
      react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1488172932" + " " + "spinner-container has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-1488172932" + " " + "container-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1488172932" + " " + "container sticky-container has-background-white"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.project_url),
        className: "jsx-1488172932" + " " + "octocat-container image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1488172932" + " " + "octocat"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1488172932" + " " + "columns is-variable is-8"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1488172932" + " " + "column is-three-fifths"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1488172932" + " " + "sticky-item"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__["Parallax"], {
        className: "custom-class",
        offsetXMax: 80,
        offsetXMin: 0,
        tag: "figure"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        style: {
          color: "'".concat(project.title_color, "'")
        },
        className: "jsx-1488172932" + " " + "content"
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.title))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
        images: [project.project_img_1.url, project.project_img_2.url, project.project_img_3.url, project.project_img_4.url, project.project_img_5.url, project.project_img_6.url]
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1488172932" + " " + "column is-two-fifths content"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
        bottom: true,
        delay: 500
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_overall), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1488172932" + " " + "content-collapse"
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_collapse)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-1488172932" + " " + "button is-outlined has-text-weight-bold is-black"
      })))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1488172932",
        css: ".spinner-container.jsx-1488172932{margin:8rem 0;}.spinner.jsx-1488172932{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-1488172932{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;}.content-collapse.jsx-1488172932{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-1488172932{padding-top:9rem;margin-bottom:-3rem;}.sticky-item.jsx-1488172932{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-1488172932{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-1488172932{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-1488172932:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-1488172932{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEdXLEFBRzJCLEFBR0EsQUFNQyxBQVNLLEFBT0QsQUFJTyxBQU9OLEFBTXFCLEFBU0MsQUFTTixjQTNEdEMsQUFHZ0IsR0FzQlEsQ0FXVCxDQWxCRSxLQVdHLElBekJELEFBd0RiLENBdkJTLEdBbEJLLEtBT2xCLEVBZ0IwQixDQVNBLENBYmIsSUFqQ0ssR0FleUIsSUFtQjNDLFdBakNGLEFBcUNxQixDQWJSLEFBc0JZLFNBckJILENBdEJLLE9BbUNaLFFBdkJzQixFQVdWLENBYWIsV0FDQyxXQWJiLENBY2lDLHdCQU1MLHdCQS9CNUIsVUFaeUIsWUFzQ3pCLDRDQU1tQixpQkFDRixlQUNqQixxQkE3Q2dELCtDQUNiLCtCQUNMLDRCQUNYLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NpbmdsZVByb2plY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2NhbGVMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBMaW5rLCBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtcmVhY3Rqcyc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgU2xpZGVzaG93R2FsbGVyeSBmcm9tICcuL1NsaWRlc2hvd0dhbGxlcnknO1xuXG5jbGFzcyBTaW5nbGVQcm9qZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByb2plY3QgPSBjb250ZW50LmRhdGE7XG4gICAgbGV0IGdyYWRpZW50QmFja2dyb3VuZCA9IHt9O1xuXG4gICAgLy8gQkFDS0dST1VORCBDT0xPUiBPRiBQUk9KRUNUIFdSQVBQRVJcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgZ3JhZGllbnRCYWNrZ3JvdW5kID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzJ9YCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8xfSwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfSlgLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7IXByb2plY3RcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIC8qIFNQSU5ORVIgSUYgUFJPSkVDVCBJUyBMT0FESU5HICovXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgIDxTY2FsZUxvYWRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIHNpemVVbml0PVwicHhcIlxuICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM0YTRhNGFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXJcIiBzdHlsZT17Z3JhZGllbnRCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHsvKiBHSVRIVUIgTElOSyAqL31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17TGluay51cmwocHJvamVjdC5wcm9qZWN0X3VybCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvY3RvY2F0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBHQUxMRVJZIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXRocmVlLWZpZnRoc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUFJPSkVDVCBUSVRMRSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRcIiBzdHlsZT17eyBjb2xvcjogYCcke3Byb2plY3QudGl0bGVfY29sb3J9J2AgfX0+e1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LnRpdGxlKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogR0FMTExFUlkgQ09NUE9ORU5UICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ18xLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ18yLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ18zLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ180LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ181LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ182LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xVTU4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy10d28tZmlmdGhzIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHByb2plY3QuZGVzY3JpcHRpb25fb3ZlcmFsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgey8qIERFU0NSSVBUSU9OIENPTExBUFNFIENPTlRBSU5FUiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocHJvamVjdC5kZXNjcmlwdGlvbl9jb2xsYXBzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtb3V0bGluZWQgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaXMtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Db2xsYXBzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJNb3JlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIC5zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDhyZW0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50LWNvbGxhcHNlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDlyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0aWNreS1pdGVtIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2N0b2NhdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICBib3R0b206MXJlbTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2N0b2NhdCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL2dpdGh1Yi5wbmcnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIHdpZHRoOjQ1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDo0NXB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9jdG9jYXQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9vY3RvY2F0LnBuZycpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtIDNyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvamVjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
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
          css: ".active.jsx-1002946049{display:block;}.nonactive.jsx-1002946049{display:none;}.numbertext.jsx-1002946049{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;z-index:30;bottom:-30px;right:-30px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.swing-out-top-bck.jsx-1002946049{-webkit-animation:swing-out-top-bck 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;-webkit-animation:swing-out-top-bck-jsx-1002946049 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;animation:swing-out-top-bck-jsx-1002946049 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;}@-webkit-keyframes swing-out-top-bck{0%.jsx-1002946049{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%.jsx-1002946049{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@-webkit-keyframes swing-out-top-bck-jsx-1002946049{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@keyframes swing-out-top-bck-jsx-1002946049{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENhLEFBR2dDLEFBR0EsQUFHRixBQVdzRixBQUsvRCxBQU9HLEFBU0gsQUFPRyxXQXRDdEIsRUFIbkIsQ0FIQSxZQU9zQixNQWVnQixBQWdCQSxHQVRHLEFBZ0JBLFVBckNwQixpQkFDQyxrQkFDUCxXQUNFLEdBTW9GLFVBTHJGLFlBQ29CLEFBVUQsQUFnQkEsWUFUQSxBQWdCQSxpQkF0QkEsQUFnQkEsWUFUQSxBQWdCQSwrREF0Qm5CLEFBZ0JBLENBM0JoQixTQVlJLEFBZ0JBLEVBVlksQUFnQkEsVUFmWixBQWdCQSw4REEvQkYiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gNSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogNSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNsaWRlSW5kZXg6IHByZXZTdGF0ZS5zbGlkZUluZGV4ICsgbixcbiAgICB9KSk7XG4gIH1cblxuICBjdXJyZW50U2xpZGUobikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBuIH0pO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVzKCkge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaSA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLWJhY2tncm91bmQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByZXZpZXdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByZXZpZXdzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpID8gJ3ByZXZpZXctYWN0aXZlJyA6ICdwcmV2aWV3LWluYWN0aXZlJ31cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaV19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3VycmVudFNsaWRlKGkpfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgYWx0PXtgcHJldmlldy0ke2l9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5wcmV2aWV3LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezgwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezEyMDB9PlxuICAgICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldiBidXR0b24gaXMtYmxhY2sgaXMtb3V0bGluZWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvbiBpcy1ibGFjayBpcy1vdXRsaW5lZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC00cmVtO1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
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
          css: ".preview-active.jsx-1658636724{cursor:pointer;}.preview-inactive.jsx-1658636724{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}.preview-inactive.jsx-1658636724:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}.column.jsx-1658636724{padding:0.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkhhLEFBR2tDLEFBR0osQUFNaUIsQUFLWixXQVZZLElBSGhDLENBY0EsWUFMd0IsV0FMQSxxQ0FNUixVQUNoQixDQU5tQixlQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NsaWRlc2hvd0dhbGxlcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jbGFzcyBTbGlkZXNob3dHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2xpZGVJbmRleDogMCB9O1xuICAgIHRoaXMucGx1c1NsaWRlcyA9IHRoaXMucGx1c1NsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsdXNTbGlkZXMobikge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2xpZGVJbmRleCArIG4gPiA1KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGlmIChzbGlkZUluZGV4ICsgbiA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiA1IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2xpZGVJbmRleDogcHJldlN0YXRlLnNsaWRlSW5kZXggKyBuLFxuICAgIH0pKTtcbiAgfVxuXG4gIGN1cnJlbnRTbGlkZShuKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IG4gfSk7XG4gIH1cblxuICBjcmVhdGVTbGlkZXMoKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzbGlkZXMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YGZhZGUgJHtzbGlkZUluZGV4ID09PSBpID8gJ3N3aW5nLW91dC10b3AtYmNrJyA6ICdub25hY3RpdmUnfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVydGV4dCBoYXMtYmFja2dyb3VuZC13aGl0ZSBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgJm5ic3A7LyA2XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VzW2ldfSBhbHQ9e2BzbGlkZS0ke2kgKyAxfWB9IC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubm9uYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm51bWJlcnRleHQge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDMwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzbGlkZXM7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3cygpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJldmlld3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcHJldmlld3MucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlSW5kZXggPT09IGkgPyAncHJldmlldy1hY3RpdmUnIDogJ3ByZXZpZXctaW5hY3RpdmUnfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jdXJyZW50U2xpZGUoaSl9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBhbHQ9e2BwcmV2aWV3LSR7aX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLnByZXZpZXctYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBwcmV2aWV3cztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcygpO1xuICAgIGNvbnN0IHByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIFNMSURFUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEuNXJlbScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBTTElERSBQUkVWSUVXIElURU1TICovfVxuICAgICAgICA8RmFkZSBkZWxheT17ODAwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtMSBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICA8RmFkZSBkZWxheT17MTIwMH0+XG4gICAgICAgICAgICB7LyogUFJFVklPVVMgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2IGJ1dHRvbiBpcy1ibGFjayBpcy1vdXRsaW5lZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoLTEpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7LyogTkVYVCBCVVRUT04gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQgYnV0dG9uIGlzLWJsYWNrIGlzLW91dGxpbmVkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygxKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgLmZhZGUge1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTRyZW07XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICB6LWluZGV4OjE1O1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYsXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLnByZXY6aG92ZXIsXG4gICAgICAgICAgICAubmV4dDpob3ZlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgICAubnVtYmVydGV4dCwgLnByZXYsIC5uZXh0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93R2FsbGVyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
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
        delay: 800,
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
        delay: 1200,
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
        css: ".gallery-container.jsx-2052273057{position:relative;margin-top:10px;}.fade.jsx-2052273057{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-2052273057;animation-name:fade-jsx-2052273057;-webkit-animation-duration:1.5s;animation-duration:1.5s;}@-webkit-keyframes fade{from.jsx-2052273057{opacity:.4;}to.jsx-2052273057{opacity:1;}}@-webkit-keyframes fade-jsx-2052273057{from{opacity:.4;}to{opacity:1;}}@keyframes fade-jsx-2052273057{from{opacity:.4;}to{opacity:1;}}.buttons-container.jsx-2052273057{position:absolute;bottom:-4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.prev.jsx-2052273057,.next.jsx-2052273057{cursor:pointer;color:white;font-weight:bold;opacity:.7;}.prev.jsx-2052273057{margin-right:.7rem;}.prev.jsx-2052273057:hover,.next.jsx-2052273057:hover{opacity:.8;cursor:pointer;}@media screen and (max-width:769px){.numbertext.jsx-2052273057,.prev.jsx-2052273057,.next.jsx-2052273057{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUxXLEFBR21DLEFBS1EsQUFNYixBQUNILEFBR0csQUFDSCxBQUdNLEFBV0gsQUFNSSxBQUtSLEFBS0csVUFsQ0QsQUFJQSxDQUxHLEFBSUEsQUEyQkQsRUFLZixFQWhCWSxHQTlCTSxBQW1CTCxDQWlCZixPQU1BLENBWG1CLENBMUJlLEdBZWYsR0FuQm5CLFVBK0JhLFdBQ2IsS0EzQnNCLHdEQWVLLHNCQWRELEdBZWQsV0FDRCxTQUMrQixpQ0FoQjFDLE1BaUJrQyx5R0FDbEMiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gNSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogNSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNsaWRlSW5kZXg6IHByZXZTdGF0ZS5zbGlkZUluZGV4ICsgbixcbiAgICB9KSk7XG4gIH1cblxuICBjdXJyZW50U2xpZGUobikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBuIH0pO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVzKCkge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaSA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLWJhY2tncm91bmQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByZXZpZXdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByZXZpZXdzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpID8gJ3ByZXZpZXctYWN0aXZlJyA6ICdwcmV2aWV3LWluYWN0aXZlJ31cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaV19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3VycmVudFNsaWRlKGkpfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgYWx0PXtgcHJldmlldy0ke2l9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5wcmV2aWV3LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezgwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezEyMDB9PlxuICAgICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldiBidXR0b24gaXMtYmxhY2sgaXMtb3V0bGluZWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvbiBpcy1ibGFjayBpcy1vdXRsaW5lZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC00cmVtO1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
        __self: this
      }));
    }
  }]);

  return SlideshowGallery;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SlideshowGallery);

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

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

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