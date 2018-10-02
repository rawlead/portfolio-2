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
/*! exports provided: getProjectsAPI, getMainContentAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectsAPI", function() { return getProjectsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainContentAPI", function() { return getMainContentAPI; });
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
              orderings: '[my.project.date]'
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

var getMainContentAPI =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context2.sent;
            _context2.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at('document.type', 'main_content')).then(function (content) {
              return content.results[0];
            });

          case 6:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function getMainContentAPI() {
    return _ref2.apply(this, arguments);
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


 // import { Parallax } from 'react-scroll-parallax';

var Education = function Education() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1129138181" + " " + "wrapper has-background-white-ter"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 200,
    cascade: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1129138181" + " " + "is-size-4 section-title section-title__dark"
  }, "Education"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1129138181" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1129138181" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1129138181" + " " + "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1129138181" + " " + "is-uppercase"
  }, "University of Social Sciences"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-1129138181" + " " + "is-uppercase"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1129138181" + " " + "fas fa-map-marker-alt"
  }), "\xA0Warsaw, Poland"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1129138181" + " " + "is-uppercase"
  }, "Bachelor of Computer Science"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1129138181"
  }, "Graduated: June 2018"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1129138181" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1129138181" + " " + "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1129138181" + " " + "is-uppercase"
  }, "Machine Building College"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-1129138181" + " " + "is-uppercase"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-1129138181" + " " + "fas fa-map-marker-alt"
  }), "\xA0Sumy, Ukraine"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1129138181" + " " + "is-uppercase"
  }, "Associate of Chemical Engineering"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1129138181"
  }, "Graduated: June 2014"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1129138181",
    css: ".section-title.jsx-1129138181{margin-bottom:2rem;}.column.jsx-1129138181{padding-bottom:3.5rem;}.columns.jsx-1129138181{max-width:936px;margin-left:auto;margin-right:auto;}.wrapper.jsx-1129138181{position:relative;padding-top:1.5rem;border-bottom:1px solid hsl(0,0%,86%);}@media screen and (max-width:736px){.wrapper.jsx-1129138181{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRWR1Y2F0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q08sQUFHOEIsQUFHRyxBQUdOLEFBS0UsQUFNUCxTQUNYLE9BWGlCLEVBS0UsQ0FYckIsR0FHQSxXQUlvQixJQUtzQixjQUoxQyx3QkFLQSIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0VkdWNhdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuLy8gaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuXG5jb25zdCBFZHVjYXRpb24gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlciBoYXMtYmFja2dyb3VuZC13aGl0ZS10ZXJcIj5cbiAgICB7LyogPFBhcmFsbGF4XG4gICAgICBvZmZzZXRZTWF4PXswfVxuICAgICAgb2Zmc2V0WU1pbj17MH1cbiAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgPiAqL31cbiAgICA8RmFkZSBkZWxheT17MjAwfSBjYXNjYWRlPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtNCBzZWN0aW9uLXRpdGxlIHNlY3Rpb24tdGl0bGVfX2RhcmtcIj5FZHVjYXRpb248L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaXMtdXBwZXJjYXNlXCI+VW5pdmVyc2l0eSBvZiBTb2NpYWwgU2NpZW5jZXM8L2g0PlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImlzLXVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtXYXJzYXcsIFBvbGFuZFxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlzLXVwcGVyY2FzZVwiPkJhY2hlbG9yIG9mIENvbXB1dGVyIFNjaWVuY2U8L3A+XG4gICAgICAgICAgICA8cD5HcmFkdWF0ZWQ6IEp1bmUgMjAxODwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaXMtdXBwZXJjYXNlXCI+TWFjaGluZSBCdWlsZGluZyBDb2xsZWdlPC9oND5cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJpcy11cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7U3VteSwgVWtyYWluZVxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlzLXVwcGVyY2FzZVwiPkFzc29jaWF0ZSBvZiBDaGVtaWNhbCBFbmdpbmVlcmluZzwvcD5cbiAgICAgICAgICAgIDxwPkdyYWR1YXRlZDogSnVuZSAyMDE0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRmFkZT5cbiAgICB7LyogPC9QYXJhbGxheD4gKi99XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1ucyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5MzZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb247XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Education.jsx */"
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Social */ "./components/Social.jsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./api/index.js");



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









var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));
    _this.state = {
      mainContent: ''
    };
    _this.fetchMainContent = _this.fetchMainContent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchMainContent();
    }
  }, {
    key: "fetchMainContent",
    value: function () {
      var _fetchMainContent = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api__WEBPACK_IMPORTED_MODULE_8__["getMainContentAPI"])();

              case 2:
                response = _context.sent;
                this.setState({
                  mainContent: response.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchMainContent() {
        return _fetchMainContent.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var mainContent = this.state.mainContent;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
        className: "jsx-3383815336" + " " + "footer"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        delay: 200
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3383815336" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginBottom: '2rem'
        },
        className: "jsx-3383815336" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3383815336" + " " + "column has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-3383815336" + " " + "is-size-4 section-title section-title__light"
      }, "Get in Touch"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Social__WEBPACK_IMPORTED_MODULE_6__["default"], {
        linkStyle: {
          color: '#f2f2f2'
        }
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3383815336" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3383815336" + " " + "column has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        className: "jsx-3383815336" + " " + "is-size-5 has-text-grey-lighter"
      }, mainContent ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__["Link"].url(mainContent.resume, _helpers__WEBPACK_IMPORTED_MODULE_7___default.a),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "jsx-3383815336" + " " + "linear-text"
      }, "\xA0DOWNLOAD RESUME") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_5__["ScaleLoader"], {
        className: "preloader-spinner",
        sizeUnit: "px",
        size: 120,
        color: "#f2f2f2"
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3383815336" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3383815336" + " " + "column"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
        className: "jsx-3383815336" + " " + "image is-96x96"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://www.youracclaim.com/badges/61136f12-504c-475c-941f-7657fdd8c37e/public_url",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "jsx-3383815336"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "../static/oracle.png",
        alt: "oracle-budge",
        className: "jsx-3383815336"
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3383815336" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3383815336" + " " + "column has-text-centered has-text-grey-light"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-3383815336" + " " + "has-text-centered"
      }, "Designed and Built by", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-3383815336" + " " + "has-text-weight-bold"
      }, " IVAN SHYRAI"), "\xA0in 2018"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-3383815336"
      }, "Made with", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "jsx-3383815336"
      }, "\xA0React"), ",\xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://nextjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "jsx-3383815336"
      }, "Next.js"), ",\xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://bulma.io",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "jsx-3383815336"
      }, "Bulma"), "\xA0and", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://prismic.io",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "jsx-3383815336"
      }, "\xA0Prismic.io")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-3383815336"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "https://github.com/rawlead/portfolio-2",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "jsx-3383815336"
      }, "View Source Code")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3383815336",
        css: ".image.jsx-3383815336{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;margin:0 auto;}.image.jsx-3383815336:hover{-webkit-filter:grayscale(100%);-webkit-filter:grayscale(100%);filter:grayscale(100%);}.footer.jsx-3383815336{background:#0a0a0a;padding-top:5rem;}.bulma.jsx-3383815336{height:30px;}.columns.jsx-3383815336{margin-top:1.5rem;}.content.jsx-3383815336{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3383815336{color:#f2f2f2;}a.jsx-3383815336:hover{color:#888888;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSVcsQUFHMEMsQUFJQSxBQUlaLEFBSVAsQUFHTSxBQUdMLEFBSUMsQUFHQSxZQVpoQixFQVVBLEFBR0EsSUFWQSxDQVBtQixZQUpNLEtBS3pCLGtDQVRnQixJQWtCSyxVQWpCckIsQ0FJQSxrRkFjQSIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3ByaXNtaWMtcmVhY3Rqcyc7XG5pbXBvcnQgeyBTY2FsZUxvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnO1xuaW1wb3J0IGxpbmtSZXNvbHZlciBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldE1haW5Db250ZW50QVBJIH0gZnJvbSAnLi4vYXBpJztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbWFpbkNvbnRlbnQ6ICcnIH07XG4gICAgdGhpcy5mZXRjaE1haW5Db250ZW50ID0gdGhpcy5mZXRjaE1haW5Db250ZW50LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoTWFpbkNvbnRlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoTWFpbkNvbnRlbnQoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRNYWluQ29udGVudEFQSSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFpbkNvbnRlbnQ6IHJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtYWluQ29udGVudCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8RmFkZSBkZWxheT17MjAwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMnJlbScgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtNCBzZWN0aW9uLXRpdGxlIHNlY3Rpb24tdGl0bGVfX2xpZ2h0XCI+R2V0IGluIFRvdWNoPC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPFNvY2lhbCBsaW5rU3R5bGU9e3sgY29sb3I6ICcjZjJmMmYyJyB9fSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaXMtc2l6ZS01IGhhcy10ZXh0LWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICAgICAge21haW5Db250ZW50XG4gICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e0xpbmsudXJsKG1haW5Db250ZW50LnJlc3VtZSwgbGlua1Jlc29sdmVyKX0gY2xhc3NOYW1lPVwibGluZWFyLXRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtET1dOTE9BRCBSRVNVTUVcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFNjYWxlTG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmVsb2FkZXItc3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplVW5pdD1cInB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2YyZjJmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtOTZ4OTZcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy55b3VyYWNjbGFpbS5jb20vYmFkZ2VzLzYxMTM2ZjEyLTUwNGMtNDc1Yy05NDFmLTc2NTdmZGQ4YzM3ZS9wdWJsaWNfdXJsXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL29yYWNsZS5wbmdcIiBhbHQ9XCJvcmFjbGUtYnVkZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWQgaGFzLXRleHQtZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgQnVpbHQgYnlcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1ib2xkXCI+IElWQU4gU0hZUkFJPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7aW4gMjAxOFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIE1hZGUgd2l0aFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmdcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7UmVhY3RcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICwmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTmV4dC5qc1xuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgLCZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYnVsbWEuaW9cIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQnVsbWFcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICZuYnNwO2FuZFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcHJpc21pYy5pb1wiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtQcmlzbWljLmlvXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYXdsZWFkL3BvcnRmb2xpby0yXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IFNvdXJjZSBDb2RlXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0OyAgICAgICAgXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlOmhvdmVyIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYnVsbWEge1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Footer.jsx */"
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1174514116" + " " + "hero is-bold is-fullheight"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    className: "hero-parallax",
    offsetYMax: 20,
    offsetYMin: -20,
    tag: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1174514116" + " " + "hero-inner"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1174514116" + " " + "bird-container bird-container--one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1174514116" + " " + "bird  bird--one"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1174514116" + " " + "bird-container bird-container--two"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1174514116" + " " + "bird  bird--two"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1174514116" + " " + "hero-content has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      margin: '0 auto'
    },
    href: "#info",
    className: "jsx-1174514116" + " " + "image is-128x128 c-preview"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1174514116" + " " + "myself c-preview__img"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 800
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1174514116" + " " + "title linear-text box-effect is-size-1 has-text-weight-bold has-text-grey-lighter"
  }, "Ivan Shyrai")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 1000
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1174514116" + " " + "subtitle linear-text has-text-grey-lighter"
  }, "Java Full Stack Developer"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1174514116",
    css: ".hero-parallax.jsx-1174514116{display:inline-block !important;}.hero.jsx-1174514116{z-index:-1;background:url(\"../static/barcelona-1.jpg\") center bottom;background-size:cover;overflow:hidden;background-repeat:no-repeat;}.hero-cover.jsx-1174514116{position:absolute;top:0;left:0;height:52px;right:0;background:#0a0a0a;opacity:.75;}.hero-inner.jsx-1174514116{background:url(\"../static/barcelona-2.jpg\") center bottom;background-repeat:no-repeat;margin-left:4vw;margin-right:4vw;margin-top:55px;background-size:cover;box-sizing:border-box;height:100vh;overflow:hidden;}.hero-content.jsx-1174514116{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.image.jsx-1174514116 .myself.jsx-1174514116{position:absolute;left:0;top:0;width:100%;height:100%;background:url('../static/me.jpg');background-size:cover;width:128px;height:128px;border-radius:50%;mix-blend-mode:screen;opacity:.9;}.image.jsx-1174514116{cursor:pointer;background:#0a0a0a;background:-webkit-linear-gradient(-45deg,#000000 0%,#000000 25%,#8561A1 50%,#DF758C 75%,#0a0a0a 100%);background:linear-gradient(135deg,#000000 0%,#000000 25%,#8561A1 50%,#DF758C 75%,#0a0a0a 100%);background-size:400% 400%;border-radius:50%;background-repeat:no-repeat;position:relative;-webkit-transition:.2s all;transition:.2s all;background-position:100% 100%;}.image.jsx-1174514116:hover{background-position:0;}.bird.jsx-1174514116{background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');background-size:auto 100%;width:88px;height:125px;z-index:-1;will-change:background-position;-webkit-animation-name:fly-cycle;-webkit-animation-name:fly-cycle-jsx-1174514116;animation-name:fly-cycle-jsx-1174514116;-webkit-animation-timing-function:steps(10);-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform:scale(0.5);-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);}.bird--one.jsx-1174514116{-webkit-animation-duration:1s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird--two.jsx-1174514116{-webkit-animation-duration:0.9s;-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}.bird-container.jsx-1174514116{position:absolute;top:20%;left:-10%;will-change:transform;-webkit-transform:scale(0) translateX(-10vw);-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);-webkit-animation-timing-function:linear;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird-container--one.jsx-1174514116{-webkit-animation-name:fly-right-one;-webkit-animation-name:fly-right-one-jsx-1174514116;animation-name:fly-right-one-jsx-1174514116;-webkit-animation-duration:15s;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;-webkit-animation-delay:0;animation-delay:0;}.bird-container--two.jsx-1174514116{-webkit-animation-name:fly-right-two;-webkit-animation-name:fly-right-two-jsx-1174514116;animation-name:fly-right-two-jsx-1174514116;-webkit-animation-duration:17s;-webkit-animation-duration:17s;animation-duration:17s;-webkit-animation-delay:.5s;-webkit-animation-delay:.5s;animation-delay:.5s;}@media screen and (max-width:768px){.hero-inner.jsx-1174514116{margin-top:0;}}@-webkit-keyframes fly-cycle{100%.jsx-1174514116{-webkit-background-position:-900px 0;background-position:-900px 0;}}@-webkit-keyframes fly-cycle-jsx-1174514116{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}@keyframes fly-cycle-jsx-1174514116{100%{-webkit-background-position:-900px 0;background-position:-900px 0;}}@-webkit-keyframes fly-right-one{0%.jsx-1174514116{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%.jsx-1174514116{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%.jsx-1174514116{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%.jsx-1174514116{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%.jsx-1174514116{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%.jsx-1174514116{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%.jsx-1174514116{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%.jsx-1174514116{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-one-jsx-1174514116{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@keyframes fly-right-one-jsx-1174514116{0%{-webkit-transform:scale(0.3) translateX(-10vw);-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-two{0%.jsx-1174514116{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%.jsx-1174514116{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%.jsx-1174514116{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%.jsx-1174514116{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%.jsx-1174514116{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%.jsx-1174514116{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%.jsx-1174514116{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%.jsx-1174514116{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@-webkit-keyframes fly-right-two-jsx-1174514116{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@keyframes fly-right-two-jsx-1174514116{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NPLEFBRzJDLEFBR3JCLEFBT08sQUFTd0MsQUFXekMsQUFPQyxBQWNILEFBWU8sQUFHcUUsQUFnQjdELEFBTUUsQUFNZCxBQVltQixBQVFBLEFBU3RCLEFBS3dCLEFBTUEsQUFNVSxBQUtlLEFBTUEsQUFLQSxBQUtBLEFBS0EsQUFLQyxBQUtBLEFBTWhCLEFBS2UsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQUtDLEFBS0EsQUFNQyxBQUlGLEFBSUMsQUFJQSxBQUlFLEFBSUYsQUFLQyxBQUtBLEFBTUEsQUFJRixBQUlDLEFBSUEsQUFJRSxBQUlGLEFBS0MsQUFLQSxXQTdSUixFQXdIMUQsRUF4RW1CLEdBekNkLEFBb0JJLEFBT0YsQUF5REMsSUEvQlYsRUFwRFMsQ0EyQkQsQ0F5REksQ0FoRUYsR0FtRGMsQ0F0RVYsQUEyQkQsQ0F2Q2IsQUF3RjBCLEVBcENnRixDQXBCaEUsQ0FnRWxCLENBVU8sQUFRQSxBQWNFLEFBTUEsS0E5Rm5CLENBM0JKLElBK0hpQyxBQTBDQSxJQXhLdEIsR0EyQmdCLElBdEJQLEFBOEVpQixJQWlEVyxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBcUJBLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFvQkEsQUFvQ0EsQ0E1RkMsQUFLQSxBQW9DQSxBQUtBLEFBY0EsQUFJQSxBQVFBLEFBd0JBLEFBSUEsQUFRQSxDQXhEQyxBQXlCQSxBQUtBLEFBTUEsQUF5QkEsQUFLQSxDQWxEQyxBQW9DQSxDQWxKM0QsQUFNQSxHQW5Jc0IsQ0FXVixJQWtCb0IsUUFqQmxDLEFBbUVnQyxJQS9EZCxFQXFFZSxDQS9DVCxFQXJDTixBQTZEVSxXQTdDVCxDQTZFb0IsSUE1RlQsSUFxQ2hCLENBeUNVLEtBakJYLEVBN0NLLEFBb0VPLElBOUNWLEtBd0JBLEtBdUNrQixBQVFBLEVBNUdqQyxBQWdCd0IsQ0FzQkosQ0FROEUsSUFnQnJGLFdBQ3FCLEVBeEJWLEdBdEJBLE9BNkR4QixBQXVCeUIsQUFRQSxTQXpCekIsR0E1Q2EsQUE4RlgsQUEwQ0EsR0E5SmEsQUFTZixLQXFDbUMsR0F2Qm5DLEtBdEJrQixnQkFDbEIsU0E2QzJCLENBcUNDLEFBUUUsUUFsQmEsTUE3Q2YsSUE2RjFCLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFxQkEsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQW9CQSxBQW9DQSxJQTVGQSxBQUtBLEFBb0NBLEFBS0EsQUFjQSxBQUlBLEFBUUEsQUF3QkEsQUFJQSxBQVFBLElBMUtrQixBQWtIbEIsQUF5QkEsQUFLQSxBQU1BLEFBeUJBLEFBS0EsRUE1S29CLEVBMEhwQixBQW9DQSxVQTdOa0IsU0E2Q2UsU0E1Q0wsWUF1RDlCLE1BUUEsVUE5RG9CLENBZ0IwQixpQkFmekIsbUJBMkN3QixRQTNCUCxtQkFmTixnQkEyQ0ssY0ExQ3JDLCtCQWU2QyxpQ0E0QjdDLFVBM0JxQyw4RUFDTiw2QkFDUiwyRUFDdkIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9IZXJvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtYm9sZCBpcy1mdWxsaGVpZ2h0XCI+XG4gICAgPFBhcmFsbGF4XG4gICAgICBjbGFzc05hbWU9XCJoZXJvLXBhcmFsbGF4XCJcbiAgICAgIG9mZnNldFlNYXg9ezIwfVxuICAgICAgb2Zmc2V0WU1pbj17LTIwfVxuICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICA+XG4gICAgICB7LyogSU5ORVIgSEVSTyBJTUFHRSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbm5lclwiPlxuICAgICAgICB7LyogQklSRFMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLW9uZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZCAgYmlyZC0tb25lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLXR3b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZCAgYmlyZC0tdHdvXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBDRU5URVJFRCBDT05URU5UICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlIGlzLTEyOHgxMjggYy1wcmV2aWV3XCIgc3R5bGU9e3sgbWFyZ2luOiAnMCBhdXRvJyB9fSBocmVmPVwiI2luZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlzZWxmIGMtcHJldmlld19faW1nXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezgwMH0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgbGluZWFyLXRleHQgYm94LWVmZmVjdCBpcy1zaXplLTEgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIEl2YW4gU2h5cmFpXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8RmFkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGUgbGluZWFyLXRleHQgaGFzLXRleHQtZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIEphdmEgRnVsbCBTdGFjayBEZXZlbG9wZXJcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFyYWxsYXg+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5oZXJvLXBhcmFsbGF4IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vc3RhdGljL2JhcmNlbG9uYS0xLmpwZ1wiKSBjZW50ZXIgYm90dG9tO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvLWNvdmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8taW5uZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9iYXJjZWxvbmEtMi5qcGdcIikgY2VudGVyIGJvdHRvbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvLWNvbnRlbnQge1xuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZSAubXlzZWxmIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL21lLmpwZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgd2lkdGg6IDEyOHB4O1xuICAgICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgICAgICAgb3BhY2l0eTogLjk7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwMDAwMDAgMCUsIzAwMDAwMCAyNSUsIzg1NjFBMSA1MCUsI0RGNzU4QyA3NSUsIzBhMGEwYSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDAwMDAwIDAlLCMwMDAwMDAgMjUlLCM4NTYxQTEgNTAlLCNERjc1OEMgNzUlLCMwYTBhMGEgMTAwJSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRyYW5zaXRpb246IC4ycyBhbGw7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuYmlyZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNzQ0NzkvYmlyZC1jZWxscy5zdmcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICAgICAgICB3aWR0aDogODhweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLXBvc2l0aW9uO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZseS1jeWNsZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmx5LWN5Y2xlO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC0tb25lIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC0tdHdvIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC45cztcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgICAgICAgfVxuICAgICAgICAuYmlyZC1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICBsZWZ0OiAtMTAlO1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtY29udGFpbmVyLS1vbmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC1vbmU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC1vbmU7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMDtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJpcmQtY29udGFpbmVyLS10d28ge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC10d287XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC10d287XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE3cztcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE3cztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLjVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmhlcm8taW5uZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZseS1jeWNsZSB7XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZseS1jeWNsZSB7XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmx5LXJpZ2h0LW9uZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcblxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAyMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDYwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LXJpZ2h0LW9uZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAzMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA2MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKSB0cmFuc2xhdGVYKC0xMHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAzMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjV2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjV2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA2MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZseS1yaWdodC10d28ge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ydmgpIHRyYW5zbGF0ZVgoLTEwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAyMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00dmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxdmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi41dmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi41dmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG5cbik7XG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Hero.jsx */"
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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);




var SkillItems = function SkillItems(_ref) {
  var logos = _ref.logos,
      headings = _ref.headings;
  var items = [];

  for (var i = 0; i < logos.length; i += 1) {
    items.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: i,
      className: "level-item has-text-centered",
      style: {
        maxWidth: '25%'
      }
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
        fontSize: '1rem',
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
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px'
    }
  }, items);
};

var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "info",
    className: "jsx-1390723943" + " " + "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "main-content has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      minHeight: '50vh'
    },
    className: "jsx-1390723943" + " " + "about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 200
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1390723943" + " " + "is-size-4 section-title section-title__light linear-text"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "column content "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-1390723943" + " " + "has-text-grey-light is-size-5 linear-text"
  }, "Oracle Certified Java Developer specialised in front-end and back-end development."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-1390723943" + " " + "has-text-grey-light is-size-5 linear-text"
  }, "Available for hire and open to any ideas of cooperation.")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 200,
    cascade: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "title-row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1390723943" + " " + "is-size-4 has-text-weight-bold section-title section-title__light"
  }, "Technical Skills")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "columns is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1390723943" + " " + "column is-size-5 has-text-weight-bold has-text-grey-light "
  }, "HTML / CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "columns is-gapless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "column is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['JSX', 'UI Design', 'Materialize'],
    logos: ['../static/logos/react.svg', '../static/logos/ui.png', '../static/logos/materialize.png']
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "column is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['Bootstrap', 'Bulma', 'Sass'],
    logos: ['../static/logos/bootstrap.svg', '../static/logos/bulma.png', '../static/logos/sass.svg']
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1390723943" + " " + "skills-col-title is-size-5 has-text-grey-light"
  }, "BACK-END"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['Java', 'Spring', 'MySQL', 'Hibernate'],
    logos: ['../static/logos/java.svg', '../static/logos/spring.png', '../static/logos/mysql.svg', '../static/logos/hibernate.png']
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "column"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1390723943" + " " + "skills-col-title is-size-5 has-text-grey-light"
  }, "JAVASCRIPT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['React', 'Next', 'Vue', 'jQuery'],
    logos: ['../static/logos/react.svg', '../static/logos/next.png', '../static/logos/vuejs.svg', '../static/logos/jquery.svg']
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "columns is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1390723943" + " " + "column is-size-5 has-text-weight-bold has-text-grey-light"
  }, "OTHER")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "columns is-gapless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "column is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['GIT', 'AWS', 'Heroku', 'Postman'],
    logos: ['../static/logos/github.png', '../static/logos/amazonwebservices.svg', '../static/logos/heroku.svg', '../static/logos/postman.png']
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1390723943" + " " + "column is-marginless"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItems, {
    headings: ['IntelliJ', 'Excel', 'Photoshop', 'Illustrator'],
    logos: ['../static/logos/intellij.svg', '../static/logos/excel.png', '../static/logos/photoshop.svg', '../static/logos/illustrator.svg']
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1390723943",
    css: ".about.jsx-1390723943{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.main-content.jsx-1390723943{padding:2rem;position:relative;max-width:1152px;margin:0 auto;}.skills-col-title.jsx-1390723943{margin-bottom:.4rem;font-weight:bold;font-size:1rem;}.column.jsx-1390723943{margin-top:1.3rem;}.columns.jsx-1390723943{margin-bottom:0;}.title-row.jsx-1390723943{margin-top:5rem;}.oracle.jsx-1390723943{position:relative;z-index:50;}@media screen and (max-width:769px){.section.jsx-1390723943{padding:1rem .25rem;}.section.jsx-1390723943 .column.jsx-1390723943{padding:0;margin:2.5rem 0 0.1rem 0;}}@media screen and (max-width:1024px){.main-content.jsx-1390723943{padding:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvSW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUxPLEFBR3dCLEFBTUEsQUFNTyxBQUtGLEFBR0gsQUFHQSxBQUdHLEFBS00sQUFHVixBQU9mLFVBTjhCLEdBNUJYLEFBa0NsQixHQXBCRixBQUdBLEVBTkEsQUFTYSxFQWRNLEFBbUJqQixTQUpGLEVBcEJtQixJQTRCakIsRUF0QmUsV0FMRCxJQU1oQixVQUxBLFlBVHFCLDZGQUNJLG1HQUNMLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0luZm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY29uc3QgU2tpbGxJdGVtcyA9ICh7IGxvZ29zLCBoZWFkaW5ncyB9KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9nb3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpdGVtcy5wdXNoKFxuICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gaGFzLXRleHQtY2VudGVyZWRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzI1JScgfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMzJ4MzIgXCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0byBhdXRvIDhweCBhdXRvJyB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29zW2ldfSBhbHQ9e2Ake2hlYWRpbmdzW2ldfS1sb2dvYH0gLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRpbmcgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtZ3JleS1saWdodFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScsIHRleHRUcmFuc2Zvcm06ICdub25lJyB9fT57aGVhZGluZ3NbaV19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PixcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBhZGRpbmc6ICcuNnJlbSAwIDAgMCcsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCBoc2woMCwgMCUsIDMwJSknLFxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgaHNsKDAsIDAlLCAzMCUpJyxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzVweCcsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnNXB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2l0ZW1zfVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgSW5mbyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiIGlkPVwiaW5mb1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICB7Lyogcm93IG1haW4gZGVzY3JpcHRpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAnNTB2aCcgfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezIwMH0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IHNlY3Rpb24tdGl0bGUgc2VjdGlvbi10aXRsZV9fbGlnaHQgbGluZWFyLXRleHRcIj5BYm91dDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudCBcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGFzLXRleHQtZ3JleS1saWdodCBpcy1zaXplLTUgbGluZWFyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIE9yYWNsZSBDZXJ0aWZpZWQgSmF2YSBEZXZlbG9wZXIgc3BlY2lhbGlzZWQgaW5cbiAgICAgICAgICAgICAgICAgICBmcm9udC1lbmQgYW5kIGJhY2stZW5kIGRldmVsb3BtZW50LlxuICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImhhcy10ZXh0LWdyZXktbGlnaHQgaXMtc2l6ZS01IGxpbmVhci10ZXh0XCI+QXZhaWxhYmxlIGZvciBoaXJlIGFuZCBvcGVuIHRvIGFueSBpZGVhcyBvZiBjb29wZXJhdGlvbi48L2g2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGYWRlIGRlbGF5PXsyMDB9IGNhc2NhZGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtcm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtNCBoYXMtdGV4dC13ZWlnaHQtYm9sZCBzZWN0aW9uLXRpdGxlIHNlY3Rpb24tdGl0bGVfX2xpZ2h0XCI+VGVjaG5pY2FsIFNraWxsczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Lyogcm93IGZpcnN0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2x1bW4gaXMtc2l6ZS01IGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LWdyZXktbGlnaHQgXCI+XG4gICAgICAgICAgICBIVE1MIC8gQ1NTXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1nYXBsZXNzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnSlNYJyxcbiAgICAgICAgICAgICAgICAnVUkgRGVzaWduJyxcbiAgICAgICAgICAgICAgICAnTWF0ZXJpYWxpemUnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcmVhY3Quc3ZnJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3VpLnBuZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9tYXRlcmlhbGl6ZS5wbmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1tYXJnaW5sZXNzXCI+XG4gICAgICAgICAgICA8U2tpbGxJdGVtc1xuICAgICAgICAgICAgICBoZWFkaW5ncz17W1xuICAgICAgICAgICAgICAgICdCb290c3RyYXAnLFxuICAgICAgICAgICAgICAgICdCdWxtYScsXG4gICAgICAgICAgICAgICAgJ1Nhc3MnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBsb2dvcz17W1xuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvYm9vdHN0cmFwLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9idWxtYS5wbmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3Mvc2Fzcy5zdmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHJvdyBzZWNvbmQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2tpbGxzLWNvbC10aXRsZSBpcy1zaXplLTUgaGFzLXRleHQtZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICBCQUNLLUVORFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgJ0phdmEnLFxuICAgICAgICAgICAgICAgICdTcHJpbmcnLFxuICAgICAgICAgICAgICAgICdNeVNRTCcsXG4gICAgICAgICAgICAgICAgJ0hpYmVybmF0ZScsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9qYXZhLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9zcHJpbmcucG5nJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL215c3FsLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9oaWJlcm5hdGUucG5nJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxscy1jb2wtdGl0bGUgaXMtc2l6ZS01IGhhcy10ZXh0LWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgSkFWQVNDUklQVFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxTa2lsbEl0ZW1zXG4gICAgICAgICAgICAgIGhlYWRpbmdzPXtbXG4gICAgICAgICAgICAgICAgJ1JlYWN0JyxcbiAgICAgICAgICAgICAgICAnTmV4dCcsXG4gICAgICAgICAgICAgICAgJ1Z1ZScsXG4gICAgICAgICAgICAgICAgJ2pRdWVyeScsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9yZWFjdC5zdmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvbmV4dC5wbmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvdnVlanMuc3ZnJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2pxdWVyeS5zdmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHJvdyB0aGlyZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1hcmdpbmxlc3NcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXNpemUtNSBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICBPVEhFUlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1nYXBsZXNzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnR0lUJyxcbiAgICAgICAgICAgICAgICAnQVdTJyxcbiAgICAgICAgICAgICAgICAnSGVyb2t1JyxcbiAgICAgICAgICAgICAgICAnUG9zdG1hbicsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGxvZ29zPXtbXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9naXRodWIucG5nJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2FtYXpvbndlYnNlcnZpY2VzLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9oZXJva3Uuc3ZnJyxcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL3Bvc3RtYW4ucG5nJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbWFyZ2lubGVzc1wiPlxuICAgICAgICAgICAgPFNraWxsSXRlbXNcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcbiAgICAgICAgICAgICAgICAnSW50ZWxsaUonLFxuICAgICAgICAgICAgICAgICdFeGNlbCcsXG4gICAgICAgICAgICAgICAgJ1Bob3Rvc2hvcCcsXG4gICAgICAgICAgICAgICAgJ0lsbHVzdHJhdG9yJyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgbG9nb3M9e1tcbiAgICAgICAgICAgICAgICAnLi4vc3RhdGljL2xvZ29zL2ludGVsbGlqLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9leGNlbC5wbmcnLFxuICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvbG9nb3MvcGhvdG9zaG9wLnN2ZycsXG4gICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9sb2dvcy9pbGx1c3RyYXRvci5zdmcnLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZhZGU+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMTUycHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnNraWxscy1jb2wtdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC40cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbnMge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm9yYWNsZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlY3Rpb24gLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDAgMC4xcmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Info.jsx */"
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
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.jsx");


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
      }, 1500);
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], null, isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2291264165" + " " + "preloader"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_3__["ScaleLoader"], {
        className: "preloader-spinner",
        sizeUnit: "px",
        size: 120,
        color: "#f2f2f2"
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2291264165" + " " + "fullscreen-panel fullscreen-panel-left is-hidden-touch"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2291264165" + " " + "fullscreen-panel fullscreen-panel-right is-hidden-touch"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2291264165",
        css: "body{background-color:#0a0a0a;}.fullscreen-panel{position:fixed;top:0;bottom:0;width:4vw;background-color:#0a0a0a;opacity:.75;}.fullscreen-panel-left{left:0;}.fullscreen-panel-right{right:0;}.preloader{position:fixed;background-color:#0a0a0a;z-index:999;top:0;bottom:0;left:0;right:0;}.preloader-spinner{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}*{font-family:'Oswald',sans-serif !important;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}.button{border-radius:5px !important;}.section-title{text-align:center;max-width:185px;margin-left:auto;margin-right:auto;text-transform:uppercase;padding-bottom:1rem;font-weight:bold;display:block;}.section-title__dark{border-bottom:3px solid #4a4a4a;border-radius:5px;}.section-title__light{border-bottom:3px solid hsl(0,0%,86%);border-radius:5px;color:hsl(0,0%,86%);}.box-effect:after,.box-effect:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}.box-effect:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}.box-effect:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.box-effect:hover:after,.box-effect:hover:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.linear-text{background:-webkit-linear-gradient(135deg,#e2a2b0 0%,#dbdbdb 25%,#9e7fb5 50%,#DF758C 75%,#dbdbdb 100%);background:linear-gradient(135deg,#e2a2b0 0%,#dbdbdb 25%,#9e7fb5 50%,#DF758C 75%,#dbdbdb 100%);background-size:200% auto;background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ1csQUFHb0MsQUFHVixBQVFULEFBR0UsQUFHTyxBQVNHLEFBTzBCLEFBSWYsQUFHWCxBQVVjLEFBSVEsQUFPN0IsQUFZVyxBQU1FLEFBT2QsQUFLNkYsT0EvRXpHLENBR0EsRUF3RTZCLENBekJULElBMURaLEFBY21CLEdBU2pCLEFBY1EsR0FwQ1IsQ0FxRWUsRUFNRixDQS9FdkIsQ0EyQlcsR0FVWCxBQXlCUyxDQXpERyxFQTZDUSxFQVRELENBYnVCLENBbUNuQixDQXdCRixDQWpDRCxFQWhETyxBQVliLEdBZVcsRUF5Q00sQUFNQSxLQTdCL0IsQ0FUb0IsQ0F2QlosSUFvQ2dCLENBU1gsQ0E1Q0YsT0FiRyxFQWNMLENBNENJLENBdEJjLEtBckJqQixBQU93QixBQThDWCxBQU1BLEVBekJ2QixDQWhEQSxFQTBEa0IsR0EzQ2xCLFlBcUJzQixDQXVCVixRQXdCcUYsRUF2QnJDLENBb0I1RCxRQTNDbUIsaUJBQ0gsY0FDaEIsSUE2QkEsQUFNQSxHQWhEQSxVQW1DNEMsaUJBdkM1QyxtQkE4RDRCLDBCQUNMLHFCQUNPLDRCQUNDLDZCQUNPLE9BMUJ0Qyw2QkEyQkEiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhcmFsbGF4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IHsgU2NhbGVMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc0xvYWRpbmc6IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9LCAxNTAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICAgICAge2lzTG9hZGluZ1xuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkZXJcIj5cbiAgICAgICAgICAgICAgPFNjYWxlTG9hZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJlbG9hZGVyLXNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIHNpemVVbml0PVwicHhcIlxuICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiNmMmYyZjJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbHNjcmVlbi1wYW5lbCBmdWxsc2NyZWVuLXBhbmVsLWxlZnQgaXMtaGlkZGVuLXRvdWNoXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXBhbmVsIGZ1bGxzY3JlZW4tcGFuZWwtcmlnaHQgaXMtaGlkZGVuLXRvdWNoXCIgLz5cblxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsc2NyZWVuLXBhbmVsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgIHdpZHRoOiA0dnc7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTtcbiAgICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bGxzY3JlZW4tcGFuZWwtbGVmdCB7XG4gICAgICAgICAgbGVmdDowO1xuICAgICAgICB9XG4gICAgICAgIC5mdWxsc2NyZWVuLXBhbmVsLXJpZ2h0IHtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAucHJlbG9hZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcmVsb2FkZXItc3Bpbm5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxODVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi10aXRsZV9fZGFyayB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0YTRhNGE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLXRpdGxlX19saWdodCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGhzbCgwLCAwJSwgODYlKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY29sb3I6IGhzbCgwLCAwJSwgODYlKTtcbiAgICAgICAgfVxuICAgICAgICAvKmVmZmVjdC1ib3gqL1xuICAgICAgICAuYm94LWVmZmVjdDphZnRlcixcbiAgICAgICAgLmJveC1lZmZlY3Q6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgICAgICB9XG4gICAgICAgIC5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmJveC1lZmZlY3Q6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLDEpO1xuICAgICAgICB9XG4gICAgICAgIC5ib3gtZWZmZWN0OmhvdmVyOmFmdGVyLFxuICAgICAgICAuYm94LWVmZmVjdDpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmVhci10ZXh0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsI2UyYTJiMCAwJSwjZGJkYmRiIDI1JSwjOWU3ZmI1IDUwJSwjREY3NThDIDc1JSwjZGJkYmRiIDEwMCUpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsI2UyYTJiMCAwJSwjZGJkYmRiIDI1JSwjOWU3ZmI1IDUwJSwjREY3NThDIDc1JSwjZGJkYmRiIDEwMCUpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUGFyYWxsYXhQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Layout.jsx */"
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
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Social */ "./components/Social.jsx");




var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-428621691" + " " + "navbar-social has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-428621691" + " " + "social-wrapper bounce-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Social__WEBPACK_IMPORTED_MODULE_2__["default"], {
    linkStyle: {
      color: '#f5f5f5',
      fontSize: '1.4rem'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "428621691",
    css: ".navbar-social.jsx-428621691{position:absolute;z-index:10;top:0;left:0;right:0;display:block;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:.9rem 0;overflow:hidden;background-color:#0a0a0a;opacity:.75;}.bounce-top.jsx-428621691{-webkit-animation:bounce-top 1s 1.2s both;-webkit-animation:bounce-top-jsx-428621691 1s 1.2s both;animation:bounce-top-jsx-428621691 1s 1.2s both;}@-webkit-keyframes bounce-top{0%.jsx-428621691{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:.75;}24%.jsx-428621691{opacity:.75;}40%.jsx-428621691{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%.jsx-428621691{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%.jsx-428621691{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%.jsx-428621691{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%.jsx-428621691,55%.jsx-428621691,75%.jsx-428621691,87%.jsx-428621691{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%.jsx-428621691{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:.75;}}@-webkit-keyframes bounce-top-jsx-428621691{0%{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:.75;}24%{opacity:.75;}40%{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:.75;}}@keyframes bounce-top-jsx-428621691{0%{-webkit-transform:translateY(-100px);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:.75;}24%{opacity:.75;}40%{-webkit-transform:translateY(-50px);-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}65%{-webkit-transform:translateY(-25px);-webkit-transform:translateY(-25px);-ms-transform:translateY(-25px);transform:translateY(-25px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}82%{-webkit-transform:translateY(-12px);-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}93%{-webkit-transform:translateY(-6px);-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}25%,55%,75%,87%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}100%{-webkit-transform:translateY(0px);-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:.75;}}.text-focus-in.jsx-428621691{-webkit-animation:text-focus-in 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;-webkit-animation:text-focus-in-jsx-428621691 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;animation:text-focus-in-jsx-428621691 1s cubic-bezier(0.550,0.085,0.680,0.530) 1.4s both;}@-webkit-keyframes text-focus-in{0%.jsx-428621691{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%.jsx-428621691{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:.75;}}@-webkit-keyframes text-focus-in-jsx-428621691{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:.75;}}@keyframes text-focus-in-jsx-428621691{0%{-webkit-filter:blur(12px);-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);-webkit-filter:blur(0px);filter:blur(0px);opacity:.75;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXTyxBQUcyQixBQWN3QixBQUtILEFBT3pCLEFBR3dCLEFBTUEsQUFNQSxBQU1ELEFBU0QsQUFNQSxBQVNHLEFBT3pCLEFBR3dCLEFBTUEsQUFNQSxBQU1ELEFBU0QsQUFNQSxBQVFrRCxBQUsxRCxBQUtELEFBT0MsQUFLRCxZQXJIM0IsQUFvREEsTUE5RVcsT0FvSWdCLEFBWUEsQ0FqQkMsQUFZQSxHQTFJdEIsS0F1RDhCLEFBTUEsQUE4Q0EsQUFNQSxDQWhIN0IsQUE2QzhCLEFBb0RBLENBdEVDLEFBTUEsQUFNQSxBQXdDQSxBQU1BLEFBTUEsQ0ExRUMsQUFvREEsS0FwRS9CLEFBV2tDLFFBVjVCLGNBQ2lCLEdBZ0lqQixBQVlBLEdBakJGLEFBWUEsU0FOWixBQVlBLENBakJBLEFBWUEsR0FuQnNGLHlDQWpFekMsQUFNQSxBQThDQSxBQU1BLElBbkVELEFBb0RBLElBdEVBLEFBTUEsQUFNQSxBQXdDQSxBQU1BLEFBTUEsRUF4RjVCLEVBYzRCLEFBb0RBLFVBekQ5QyxJQVJrQixnQkFDUyxDQWtEb0IsQUFNQSxBQThDQSxBQU1BLEdBbkVELEFBb0RBLElBdEVBLEFBTUEsQUFNQSxBQXdDQSxBQU1BLEFBTUEsSUExRUEsQUFvREEsYUFoRWpDLFlBQ2IsMENBaURFLEFBTWMsQUE4Q2QsQUFNYyxDQW5FZCxBQW9EQSxJQXRFQSxBQU1BLEFBTUEsQUF3Q0EsQUFNQSxBQU1BLElBMUVjLEFBb0RBLEdBUmQsQUFvREEsU0EvRkEsQUFvREEsR0FnREYiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9OYXZiYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuYXZiYXItc29jaWFsIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC13cmFwcGVyIGJvdW5jZS10b3BcIj5cbiAgICAgICAgPFNvY2lhbCBsaW5rU3R5bGU9e3sgY29sb3I6ICcjZjVmNWY1JywgZm9udFNpemU6ICcxLjRyZW0nIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAubmF2YmFyLXNvY2lhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyAgICBcbiAgICAgICAgcGFkZGluZzogLjlyZW0gMDsgIFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xuICAgICAgICBvcGFjaXR5Oi43NTtcbiAgICAgIH1cbiAgXG4gICAgICAuYm91bmNlLXRvcCB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UtdG9wIDFzIDEuMnMgYm90aDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGJvdW5jZS10b3AgMXMgMS4ycyBib3RoO1xuICAgICAgfVxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZS10b3Age1xuICAgICAgICAwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgb3BhY2l0eTogLjc1O1xuICAgICAgICB9XG4gICAgICAgIDI0JSB7XG4gICAgICAgICAgb3BhY2l0eTogLjc1O1xuICAgICAgICB9XG4gICAgICAgIDQwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDY1JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDgyJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDkzJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICAyNSUsXG4gICAgICAgIDU1JSxcbiAgICAgICAgNzUlLFxuICAgICAgICA4NyUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgYm91bmNlLXRvcCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgMjQlIHtcbiAgICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgNDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgNjUlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgODIlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgOTMlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIDI1JSxcbiAgICAgICAgNTUlLFxuICAgICAgICA3NSUsXG4gICAgICAgIDg3JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgIG9wYWNpdHk6IC43NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRleHQtZm9jdXMtaW4ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dC1mb2N1cy1pbiAxcyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApIDEuNHMgYm90aDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHRleHQtZm9jdXMtaW4gMXMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSAxLjRzIGJvdGg7XG4gICAgICB9XG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mb2N1cy1pbiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgdGV4dC1mb2N1cy1pbiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Navbar.jsx */"
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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _SingleProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleProject */ "./components/SingleProject.jsx");



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





/* eslint-disable */

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
                return Object(_api__WEBPACK_IMPORTED_MODULE_4__["getProjectsAPI"])({
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
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SingleProject__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: index,
          content: project
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3216886558" + " " + "projects-section"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
        delay: 500
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-3216886558" + " " + "is-size-4 has-background-black sticky-title section-title section-title__light"
      }, "Projects")), projectsView, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3216886558",
        css: ".sticky-title.jsx-3216886558{padding-top:2rem;margin-bottom:-2rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDVyxBQUdnQyxpQkFDRyxvQkFDMEIsK0NBQ2hEIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCB7IGdldFByb2plY3RzQVBJIH0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCBTaW5nbGVQcm9qZWN0IGZyb20gJy4vU2luZ2xlUHJvamVjdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmNsYXNzIFByb2plY3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgcHJvamVjdHM6IFsnJ10gfTtcbiAgICB0aGlzLmZldGNoUHJvamVjdHMgPSB0aGlzLmZldGNoUHJvamVjdHMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hQcm9qZWN0cygpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hQcm9qZWN0cygpIHtcbiAgICAvLyBDYWxsIHRoZSBBUEkgYW5kIHJlcXVlc3QgNSBkb2N1bW5ldHNcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFByb2plY3RzQVBJKHsgcGFnZVNpemU6IDUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcm9qZWN0czogcmVzcG9uc2UucmVzdWx0cyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2plY3RzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByb2plY3RzVmlldyA9IHByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgIDxTaW5nbGVQcm9qZWN0IGtleT17aW5kZXh9IGNvbnRlbnQ9e3Byb2plY3R9IC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtc2VjdGlvblwiID5cbiAgICAgICAgPEZhZGUgZGVsYXk9ezUwMH0+XG5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy1iYWNrZ3JvdW5kLWJsYWNrIHN0aWNreS10aXRsZSBzZWN0aW9uLXRpdGxlIHNlY3Rpb24tdGl0bGVfX2xpZ2h0XCI+UHJvamVjdHM8L2gxPlxuXG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAge3Byb2plY3RzVmlld31cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuc3RpY2t5LXRpdGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycmVtO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Projects.jsx */"
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SlideshowGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SlideshowGallery */ "./components/SlideshowGallery.jsx");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var sizeClasses = ['is-half', 'is-three-fifths', 'is-two-thirds'];

var SingleProject =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SingleProject, _React$Component);

  function SingleProject(props) {
    var _this;

    _classCallCheck(this, SingleProject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleProject).call(this, props));
    _this.state = {
      isCollapseActive: false,
      gallerySize: {
        class: sizeClasses[0],
        value: 0
      }
    };
    _this.galleryZoomIn = _this.galleryZoomIn.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.galleryZoomOut = _this.galleryZoomOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.switchCollapse = _this.switchCollapse.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SingleProject, [{
    key: "galleryZoomIn",
    value: function galleryZoomIn() {
      this.setState(function (prevState) {
        return {
          gallerySize: _objectSpread({}, prevState.gallerySize, {
            value: prevState.gallerySize.value + 1
          })
        };
      });
    }
  }, {
    key: "galleryZoomOut",
    value: function galleryZoomOut() {
      this.setState({
        gallerySize: {
          class: sizeClasses[0],
          value: 0
        }
      });
    }
  }, {
    key: "switchCollapse",
    value: function switchCollapse() {
      this.setState(function (prevState) {
        return {
          isCollapseActive: !prevState.isCollapseActive
        };
      });
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
      var _this$state = this.state,
          isCollapseActive = _this$state.isCollapseActive,
          gallerySize = _this$state.gallerySize;
      var project = content.data;
      var gradientBackground = {};
      var technologies = [];
      var titleColor = {};
      var gallerySizeClass = sizeClasses[gallerySize.value]; // COLORS & TECHNOLOGY TAGS

      if (project) {
        gradientBackground = {
          backgroundColor: "".concat(project.back_grad_color_2),
          background: "linear-gradient(to right, ".concat(project.back_grad_color_1, ", ").concat(project.back_grad_color_2, ")")
        };
        titleColor = {
          color: "".concat(project.title_color)
        };
        technologies = project.technologies.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            key: item.technology,
            style: {
              margin: '3px'
            },
            className: "tag is-dark"
          }, item.technology);
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !project ?
      /* SPINNER IF PROJECT IS LOADING */
      react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "spinner-container has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-2654574336" + " " + "container-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "container sticky-container has-background-white-ter"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "column ".concat(gallerySizeClass)
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "sticky-item"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 700
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
        style: titleColor,
        className: "jsx-2654574336" + " " + " is-size-4 has-text-weight-bold has-text-right"
      }, project.title[0].text)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
        galleryImages: project.gallery_images
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 600
      }, gallerySize.value === 2 ?
      /* ZOOM OUT BTN */
      react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        style: {
          cursor: 'zoom-out'
        },
        onClick: function onClick() {
          return _this2.galleryZoomOut();
        },
        type: "button",
        className: "jsx-2654574336" + " " + "size-switch-btn button is-dark is-hidden-mobile"
      }, "X") :
      /* ZOOM IN BTN */
      react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        style: {
          cursor: 'zoom-in'
        },
        onClick: function onClick() {
          return _this2.galleryZoomIn();
        },
        type: "button",
        className: "jsx-2654574336" + " " + "size-switch-btn button is-dark is-hidden-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-2654574336" + " " + "icon is-small"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2654574336" + " " + "fas fa-search-plus"
      })))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "column content"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 500
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_overall)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "content-collapse ".concat(isCollapseActive ? 'content-collapse-active' : '')
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 150
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_collapse))), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(project.description_collapse) !== '' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.switchCollapse();
        },
        className: "jsx-2654574336" + " " + "button has-text-weight-bold is-dark"
      }, isCollapseActive ? 'Less' : 'More') : '')), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 500
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "project-links-container"
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url),
        className: "jsx-2654574336" + " " + "project-link-item project-link__github image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "octocat"
      })), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url),
        className: "jsx-2654574336" + " " + "project-link-item project-link__host image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2654574336" + " " + "fas fa-external-link-alt fa-2x"
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2654574336" + " " + "technologies-tags"
      }, technologies))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: this.addJSONLD(project, content),
        className: "jsx-2654574336"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2654574336",
        css: ".content.jsx-2654574336{position:relative;}.technologies-tags.jsx-2654574336{position:absolute;cursor:default;bottom:1rem;right:1rem;}.size-switch-btn.jsx-2654574336{position:absolute;top:2.5rem;right:-.3rem;cursor:pointer;}.spinner-container.jsx-2654574336{margin:8rem 0;}.spinner.jsx-2654574336{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-2654574336{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;border-radius:5px;}.content-collapse.jsx-2654574336{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 400ms ease;-webkit-transition:max-height 400ms ease;transition:max-height 400ms ease;}.content-collapse-active.jsx-2654574336{max-height:100%;}.container-wrapper.jsx-2654574336{padding-top:9rem;margin-bottom:-3rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.sticky-item.jsx-2654574336{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.project-links-container.jsx-2654574336{position:absolute;z-index:10;bottom:4.6rem;right:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-link-item.jsx-2654574336{margin-right:15px;}.project-link__host.jsx-2654574336{color:#888888;-webkit-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.project-link__host.jsx-2654574336:hover{color:#363636;-webkit-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);}.octocat.jsx-2654574336{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:33px;height:33px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-2654574336:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (min-width:770px){.content.jsx-2654574336{padding-left:2rem;}}@media screen and (max-width:769px){.sticky-container.jsx-2654574336{padding:2rem 1rem 3rem 1rem;}.technologies-tags.jsx-2654574336{bottom:.3rem;right:.3rem;margin-left:.3rem;}.project-links-container.jsx-2654574336{right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa09XLEFBRytCLEFBR0EsQUFNRCxBQU1ILEFBR0EsQUFNRCxBQVVLLEFBT0YsQUFHQyxBQUtPLEFBT04sQUFPQSxBQUdKLEFBS0EsQUFLeUIsQUFTQyxBQVNwQixBQUtZLEFBR2xCLEFBS0wsUUFDVCxLQUxhLENBdkZmLEFBR2dCLEFBZ0R5QixBQUtMLEVBOUJwQyxDQUdzQixDQTVDdEIsQUFHaUIsQUFNSixBQStDQSxBQU9iLEFBK0JFLENBNURhLEtBZUcsQ0FzREcsR0FwRkYsQUFnRmpCLENBekZhLEFBK0NDLEdBdEJFLENBL0JKLElBeUNrQyxFQStCdEIsQ0FTQSxFQTFFVCxDQStDSCxBQThDWixFQW5HVyxBQWVPLEdBZ0J1QixBQW9DZixLQUxLLEVBUmxCLENBckRmLENBTUEsTUFTQSxBQXdEbUIsQ0EzQlIsQUFvQ1ksU0FuQ0gsQ0EzQkssT0FzRFosR0FoQ2IsS0FUbUMsRUFlVixDQTJCYixXQUNDLFdBM0JiLENBNEJpQyxRQWJqQyxNQVJBLFNBYUEsQ0FjNEIsd0JBakQ1QixVQWJ5QixZQXlEekIsNENBTW1CLGlCQUNGLGVBQ2pCLHFCQWhFZ0QsK0NBQ2IsK0JBQ0wsNEJBQ1gsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTY2FsZUxvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCB7IExpbmssIFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1yZWFjdGpzJztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCBTbGlkZXNob3dHYWxsZXJ5IGZyb20gJy4vU2xpZGVzaG93R2FsbGVyeSc7XG5cbmNvbnN0IHNpemVDbGFzc2VzID0gW1xuICAnaXMtaGFsZicsXG4gICdpcy10aHJlZS1maWZ0aHMnLFxuICAnaXMtdHdvLXRoaXJkcycsXG5dO1xuXG5jbGFzcyBTaW5nbGVQcm9qZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNDb2xsYXBzZUFjdGl2ZTogZmFsc2UsIGdhbGxlcnlTaXplOiB7IGNsYXNzOiBzaXplQ2xhc3Nlc1swXSwgdmFsdWU6IDAgfSB9O1xuICAgIHRoaXMuZ2FsbGVyeVpvb21JbiA9IHRoaXMuZ2FsbGVyeVpvb21Jbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2FsbGVyeVpvb21PdXQgPSB0aGlzLmdhbGxlcnlab29tT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zd2l0Y2hDb2xsYXBzZSA9IHRoaXMuc3dpdGNoQ29sbGFwc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdhbGxlcnlab29tSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGdhbGxlcnlTaXplOiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZS5nYWxsZXJ5U2l6ZSxcbiAgICAgICAgdmFsdWU6IHByZXZTdGF0ZS5nYWxsZXJ5U2l6ZS52YWx1ZSArIDEsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgfVxuXG4gIGdhbGxlcnlab29tT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBnYWxsZXJ5U2l6ZTogeyBjbGFzczogc2l6ZUNsYXNzZXNbMF0sIHZhbHVlOiAwIH0gfSk7XG4gIH1cblxuICBzd2l0Y2hDb2xsYXBzZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNDb2xsYXBzZUFjdGl2ZTogIXByZXZTdGF0ZS5pc0NvbGxhcHNlQWN0aXZlLFxuICAgIH0pKTtcbiAgfVxuXG5cbiAgLy8gU0VPXG4gIGFkZEpTT05MRChwcm9qZWN0LCBpbmZvKSB7XG4gICAgdGhpcy5mdW5jTmFtZSA9ICdhZGRKU09OTEQnO1xuICAgIHJldHVybiB7XG4gICAgICBfX2h0bWw6IGB7XG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJBcnRpY2xlXCIsXG4gICAgICBcIm1haW5FbnRpdHlPZlBhZ2VcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgICAgfSxcbiAgICAgIFwiaGVhZGxpbmVcIjogXCIke3Byb2plY3Qub2dfdGl0bGVbMF0udGV4dH1cIixcbiAgICAgIFwiaW1hZ2VcIjogW1xuICAgICAgICBcIiR7cHJvamVjdC5vZ19pbWFnZS51cmx9XCJcbiAgICAgIF0sXG4gICAgICBcImRhdGVQdWJsaXNoZWRcIjogXCIke2luZm8uZmlyc3RfcHVibGljYXRpb25fZGF0ZX1cIixcbiAgICAgIFwiZGF0ZU1vZGlmaWVkXCI6IFwiJHtpbmZvLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGV9XCIsXG4gICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiSXZhbiBTaHlyYWlcIlxuICAgICAgfSxcbiAgICAgIFwicHVibGlzaGVyXCI6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJJdmFuIFNoeXJhaVwiLFxuICAgICAgICBcImxvZ29cIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vaXMtcG9ydGZvbGlvJTJGMjZlMjYxNTktMmNiMy00OWViLThiZGYtYzQ2OGRmODYyMmM5X2l2YW5fcG9ydGZvbGlvLmpwZ1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJHtwcm9qZWN0Lm9nX2Rlc2NyaXB0aW9uWzBdLnRleHR9XCJcbiAgICB9YCxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzQ29sbGFwc2VBY3RpdmUsIGdhbGxlcnlTaXplIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByb2plY3QgPSBjb250ZW50LmRhdGE7XG4gICAgbGV0IGdyYWRpZW50QmFja2dyb3VuZCA9IHt9O1xuICAgIGxldCB0ZWNobm9sb2dpZXMgPSBbXTtcbiAgICBsZXQgdGl0bGVDb2xvciA9IHt9O1xuICAgIGNvbnN0IGdhbGxlcnlTaXplQ2xhc3MgPSBzaXplQ2xhc3Nlc1tnYWxsZXJ5U2l6ZS52YWx1ZV07XG5cblxuICAgIC8vIENPTE9SUyAmIFRFQ0hOT0xPR1kgVEFHU1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBncmFkaWVudEJhY2tncm91bmQgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7cHJvamVjdC5iYWNrX2dyYWRfY29sb3JfMn1gLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzF9LCAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzJ9KWAsXG4gICAgICB9O1xuICAgICAgdGl0bGVDb2xvciA9IHtcbiAgICAgICAgY29sb3I6IGAke3Byb2plY3QudGl0bGVfY29sb3J9YCxcbiAgICAgIH07XG4gICAgICB0ZWNobm9sb2dpZXMgPSBwcm9qZWN0LnRlY2hub2xvZ2llcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxzcGFuIGtleT17aXRlbS50ZWNobm9sb2d5fSBzdHlsZT17eyBtYXJnaW46ICczcHgnIH19IGNsYXNzTmFtZT1cInRhZyBpcy1kYXJrXCI+e2l0ZW0udGVjaG5vbG9neX08L3NwYW4+XG4gICAgICApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7IXByb2plY3RcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIC8qIFNQSU5ORVIgSUYgUFJPSkVDVCBJUyBMT0FESU5HICovXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgIDxTY2FsZUxvYWRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIHNpemVVbml0PVwicHhcIlxuICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM0YTRhNGFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXJcIiBzdHlsZT17Z3JhZGllbnRCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZS10ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBHQUxMRVJZIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sdW1uICR7Z2FsbGVyeVNpemVDbGFzc31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUk9KRUNUIFRJVExFICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXs3MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIiBpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtcmlnaHRcIiBzdHlsZT17dGl0bGVDb2xvcn0+e3Byb2plY3QudGl0bGVbMF0udGV4dH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogR0FMTExFUlkgQ09NUE9ORU5UICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzPXtwcm9qZWN0LmdhbGxlcnlfaW1hZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezYwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRVhQQU5EIEJUTlMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2FsbGVyeVNpemUudmFsdWUgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogWk9PTSBPVVQgQlROICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS1zd2l0Y2gtYnRuIGJ1dHRvbiBpcy1kYXJrIGlzLWhpZGRlbi1tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAnem9vbS1vdXQnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmdhbGxlcnlab29tT3V0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogWk9PTSBJTiBCVE4gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLXN3aXRjaC1idG4gYnV0dG9uIGlzLWRhcmsgaXMtaGlkZGVuLW1vYmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICd6b29tLWluJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5nYWxsZXJ5Wm9vbUluKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2gtcGx1c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogREVTQ1JJUFRJT04gQ09MVU1OICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogUFJJU01JQyBDTVMgKi99XG4gICAgICAgICAgICAgICAgICAgICAge1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LmRlc2NyaXB0aW9uX292ZXJhbGwpfVxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xMQVBTRSBDT05UQUlORVIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGVudC1jb2xsYXBzZSAke2lzQ29sbGFwc2VBY3RpdmUgPyAnY29udGVudC1jb2xsYXBzZS1hY3RpdmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBSSVNNSUMgQ01TICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXsxNTB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LmRlc2NyaXB0aW9uX2NvbGxhcHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogREVTQ1JJUFRJT04gQ09MTEFQU0UgQlVUVE9OICovfVxuICAgICAgICAgICAgICAgICAgICB7UmljaFRleHQuYXNUZXh0KHByb2plY3QuZGVzY3JpcHRpb25fY29sbGFwc2UpICE9PSAnJ1xuICAgICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaGFzLXRleHQtd2VpZ2h0LWJvbGQgaXMtZGFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaENvbGxhcHNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbGxhcHNlQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnTGVzcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdNb3JlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtbGlua3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBHSVRIVUIgTElOSyAqL31cbiAgICAgICAgICAgICAgICAgICAge0xpbmsudXJsKHByb2plY3QuZ2l0aHViX3VybCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWxpbmstaXRlbSBwcm9qZWN0LWxpbmtfX2dpdGh1YiBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtMaW5rLnVybChwcm9qZWN0LmdpdGh1Yl91cmwpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2N0b2NhdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7LyogSE9TVCBMSU5LICovfVxuICAgICAgICAgICAgICAgICAgICB7TGluay51cmwocHJvamVjdC5ob3N0X3VybCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWxpbmstaXRlbSBwcm9qZWN0LWxpbmtfX2hvc3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17TGluay51cmwocHJvamVjdC5ob3N0X3VybCl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4dGVybmFsLWxpbmstYWx0IGZhLTJ4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBURUNITk9MT0dJRVMgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2hub2xvZ2llcy10YWdzXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWNobm9sb2dpZXN9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogU0VPIFNDUklQVCAqL31cbiAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5hZGRKU09OTEQocHJvamVjdCwgY29udGVudCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2hub2xvZ2llcy10YWdzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIGJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2l6ZS1zd2l0Y2gtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyLjVyZW07XG4gICAgICAgICAgICByaWdodDogLS4zcmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Bpbm5lci1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiA4cmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTE1MnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCA0MDBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA0MDBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1jb2xsYXBzZS1hY3RpdmUge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5LWl0ZW0ge1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1saW5rcy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBib3R0b206IDQuNnJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWxpbmstaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWxpbmtfX2hvc3Qge1xuICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1saW5rX19ob3N0OmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzYzNjM2O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub2N0b2NhdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9naXRodWIucG5nJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgd2lkdGg6MzNweDtcbiAgICAgICAgICAgIGhlaWdodDozM3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9jdG9jYXQ6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvb2N0b2NhdC5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc3MHB4KSB7XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gM3JlbSAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRlY2hub2xvZ2llcy10YWdzIHtcbiAgICAgICAgICAgICAgYm90dG9tOi4zcmVtO1xuICAgICAgICAgICAgICByaWdodDouM3JlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvamVjdC1saW5rcy1jb250YWluZXIge1xuICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
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
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          key: item.gallery_image.url,
          className: "jsx-4237982925" + " " + "fade ".concat(slideIndex === index ? 'swing-out-top-bck' : 'nonactive')
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "jsx-4237982925" + " " + "numbertext has-background-white-ter has-text-weight-bold"
        }, index + 1, "\xA0/\xA0", galleryImages.length), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-4237982925" + " " + "image is-3by2"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: item.gallery_image.url,
          alt: "slide-".concat(item + 1),
          className: "jsx-4237982925"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "4237982925",
          css: ".active.jsx-4237982925{display:block;}.nonactive.jsx-4237982925{display:none;}.image.jsx-4237982925{box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.image.jsx-4237982925 img.jsx-4237982925{border-radius:5px;}.numbertext.jsx-4237982925{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;z-index:30;bottom:-30px;left:20px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);cursor:default;}.swing-out-top-bck.jsx-4237982925{-webkit-animation:swing-out-top-bck 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;-webkit-animation:swing-out-top-bck-jsx-4237982925 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;animation:swing-out-top-bck-jsx-4237982925 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;}@-webkit-keyframes swing-out-top-bck{0%.jsx-4237982925{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%.jsx-4237982925{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@-webkit-keyframes swing-out-top-bck-jsx-4237982925{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@keyframes swing-out-top-bck-jsx-4237982925{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RXLEFBRzhCLEFBR0EsQUFHNkIsQUFHMUIsQUFHTCxBQWNzRixBQUtqRSxBQU9HLEFBU0gsQUFPRyxXQXpDcEIsRUFUbkIsQ0FIQSxJQVNBLFFBSXNCLE1Ba0JjLEFBZ0JBLEdBVEcsQUFnQkEsVUF4Q2xCLEVBUnJCLGVBU3NCLGtCQUNQLFdBQ0UsR0FTb0YsVUFSdkYsVUFDc0IsRUFhSCxBQWdCQSxZQVRBLEFBZ0JBLGlCQXRCQSxBQWdCQSxZQVRBLEFBZ0JBLDhEQXBDWCxDQWNSLEFBZ0JBLFVBZlosQUFnQkEsRUFWWSxBQWdCQSxLQXBDb0MsS0FxQmhELEFBZ0JBLDBDQXBDaUIsZUFDbkIsS0FJRSIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NsaWRlc2hvd0dhbGxlcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jbGFzcyBTbGlkZXNob3dHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2xpZGVJbmRleDogMCB9O1xuICAgIHRoaXMucGx1c1NsaWRlcyA9IHRoaXMucGx1c1NsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsdXNTbGlkZXMobikge1xuICAgIGNvbnN0IHsgZ2FsbGVyeUltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gZ2FsbGVyeUltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGlmIChzbGlkZUluZGV4ICsgbiA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAtIDEgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzbGlkZUluZGV4OiBwcmV2U3RhdGUuc2xpZGVJbmRleCArIG4sXG4gICAgfSkpO1xuICB9XG5cbiAgY3VycmVudFNsaWRlKG4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogbiB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNsaWRlcygpIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBnYWxsZXJ5SW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IGdhbGxlcnlJbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZW0uZ2FsbGVyeV9pbWFnZS51cmx9IGNsYXNzTmFtZT17YGZhZGUgJHtzbGlkZUluZGV4ID09PSBpbmRleCA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJ0ZXh0IGhhcy1iYWNrZ3JvdW5kLXdoaXRlLXRlciBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgIHsvKiBFLkcuIDEvNiAqL31cbiAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICB7Z2FsbGVyeUltYWdlcy5sZW5ndGh9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgSU1BR0UgKi99XG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdhbGxlcnlfaW1hZ2UudXJsfSBhbHQ9e2BzbGlkZS0ke2l0ZW0gKyAxfWB9IC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltYWdlIGltZyB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDtcbiAgICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBnYWxsZXJ5SW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IGdhbGxlcnlJbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZW0uZ2FsbGVyeV9pbWFnZS51cmx9IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICB7LyogUFJFVklFVyBJTUFHRSAqL31cbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpbmRleCA/ICdwcmV2aWV3LWFjdGl2ZScgOiAncHJldmlldy1pbmFjdGl2ZSd9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uZ2FsbGVyeV9pbWFnZS51cmx9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmN1cnJlbnRTbGlkZShpbmRleCl9XG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgIGFsdD17YHByZXZpZXctJHtpbmRleH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucHJldmlldy1hY3RpdmUge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZSBpbWcge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxGYWRlIGRlbGF5PXsyMDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICB7c2xpZGVzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgey8qIFNMSURFIFBSRVZJRVcgSVRFTVMgKi99XG4gICAgICAgIDxGYWRlIGRlbGF5PXsyMDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy0xIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIHsvKiBHQUxMRVJZIEJVVFRPTlMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICA8RmFkZSBkZWxheT17MjAwfT5cbiAgICAgICAgICAgIHsvKiBQUkVWSU9VUyBCVVRUT04gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYgYnV0dG9uIGlzLWRhcmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvbiBpcy1kYXJrXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygxKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgLmZhZGUge1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTRyZW07XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICB6LWluZGV4OjE1O1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYsXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */"
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
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          key: item.gallery_image.url,
          className: "jsx-3690607436" + " " + "column"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-3690607436" + " " + "image is-3by2"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: item.gallery_image.url,
          onClick: function onClick() {
            return _this2.currentSlide(index);
          },
          role: "presentation",
          alt: "preview-".concat(index),
          className: "jsx-3690607436" + " " + ((slideIndex === index ? 'preview-active' : 'preview-inactive') || "")
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "3690607436",
          css: ".preview-active.jsx-3690607436{cursor:pointer;}.preview-inactive.jsx-3690607436{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}.preview-inactive.jsx-3690607436:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}.image.jsx-3690607436 img.jsx-3690607436{border-radius:5px;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.column.jsx-3690607436{padding:0.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0lXLEFBR2dDLEFBR0osQUFNaUIsQUFLWixBQUlBLFdBZFksSUFIaEMsQ0FrQkEsRUFKZ0QsVUFMeEIsV0FMQSwwQkFXeEIsV0FMZ0IsVUFDaEIsQ0FObUIsZUFDbkIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IGdhbGxlcnlJbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzbGlkZUluZGV4ICsgbiA+IGdhbGxlcnlJbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogZ2FsbGVyeUltYWdlcy5sZW5ndGggLSAxIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2xpZGVJbmRleDogcHJldlN0YXRlLnNsaWRlSW5kZXggKyBuLFxuICAgIH0pKTtcbiAgfVxuXG4gIGN1cnJlbnRTbGlkZShuKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IG4gfSk7XG4gIH1cblxuICBjcmVhdGVTbGlkZXMoKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZ2FsbGVyeUltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBnYWxsZXJ5SW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxkaXYga2V5PXtpdGVtLmdhbGxlcnlfaW1hZ2UudXJsfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaW5kZXggPyAnc3dpbmctb3V0LXRvcC1iY2snIDogJ25vbmFjdGl2ZSd9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVydGV4dCBoYXMtYmFja2dyb3VuZC13aGl0ZS10ZXIgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICB7LyogRS5HLiAxLzYgKi99XG4gICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAmbmJzcDsvJm5ic3A7XG4gICAgICAgICAge2dhbGxlcnlJbWFnZXMubGVuZ3RofVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFNMSURFIElNQUdFICovfVxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5nYWxsZXJ5X2ltYWdlLnVybH0gYWx0PXtgc2xpZGUtJHtpdGVtICsgMX1gfSAvPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ub25hY3RpdmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZSBpbWcge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubnVtYmVydGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMzA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKSk7XG4gICAgcmV0dXJuIHNsaWRlcztcbiAgfVxuXG4gIGNyZWF0ZVByZXZpZXdzKCkge1xuICAgIGNvbnN0IHsgZ2FsbGVyeUltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJldmlld3MgPSBnYWxsZXJ5SW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxkaXYga2V5PXtpdGVtLmdhbGxlcnlfaW1hZ2UudXJsfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgey8qIFBSRVZJRVcgSU1BR0UgKi99XG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c2xpZGVJbmRleCA9PT0gaW5kZXggPyAncHJldmlldy1hY3RpdmUnIDogJ3ByZXZpZXctaW5hY3RpdmUnfVxuICAgICAgICAgICAgc3JjPXtpdGVtLmdhbGxlcnlfaW1hZ2UudXJsfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jdXJyZW50U2xpZGUoaW5kZXgpfVxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBhbHQ9e2BwcmV2aWV3LSR7aW5kZXh9YH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnByZXZpZXctYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKSk7XG4gICAgcmV0dXJuIHByZXZpZXdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzKCk7XG4gICAgY29uc3QgcHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNvbnRhaW5lclwiPlxuICAgICAgICB7LyogU0xJREVTICovfVxuICAgICAgICA8RmFkZSBkZWxheT17MjAwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMS41cmVtJyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIHsvKiBTTElERSBQUkVWSUVXIElURU1TICovfVxuICAgICAgICA8RmFkZSBkZWxheT17MjAwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtMSBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICB7LyogR0FMTEVSWSBCVVRUT05TICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZhZGUgZGVsYXk9ezIwMH0+XG4gICAgICAgICAgICB7LyogUFJFVklPVVMgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2IGJ1dHRvbiBpcy1kYXJrXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygtMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHsvKiBORVhUIEJVVFRPTiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dCBidXR0b24gaXMtZGFya1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC00cmVtO1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldjpob3ZlcixcbiAgICAgICAgICAgIC5uZXh0OmhvdmVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0LCAucHJldiwgLm5leHQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3dHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */"
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
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2860589478" + " " + "gallery-container"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 200
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          marginBottom: '1.5rem'
        },
        className: "jsx-2860589478" + " " + "columns is-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          padding: 0
        },
        className: "jsx-2860589478" + " " + "column"
      }, slides))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 200
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2860589478" + " " + "columns is-variable is-1 is-mobile"
      }, previews)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2860589478" + " " + "buttons-container"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 200
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(-1);
        },
        className: "jsx-2860589478" + " " + "prev button is-dark"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2860589478" + " " + "fas fa-angle-left"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(1);
        },
        className: "jsx-2860589478" + " " + "next button is-dark"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2860589478" + " " + "fas fa-angle-right"
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2860589478",
        css: ".gallery-container.jsx-2860589478{position:relative;margin-top:10px;}.fade.jsx-2860589478{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-2860589478;animation-name:fade-jsx-2860589478;-webkit-animation-duration:1.5s;animation-duration:1.5s;}@-webkit-keyframes fade{from.jsx-2860589478{opacity:.4;}to.jsx-2860589478{opacity:1;}}@-webkit-keyframes fade-jsx-2860589478{from{opacity:.4;}to{opacity:1;}}@keyframes fade-jsx-2860589478{from{opacity:.4;}to{opacity:1;}}.buttons-container.jsx-2860589478{position:absolute;bottom:-4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.prev.jsx-2860589478,.next.jsx-2860589478{cursor:pointer;color:white;font-weight:bold;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.prev.jsx-2860589478{margin-right:.7rem;}.prev.jsx-2860589478:hover,.next.jsx-2860589478:hover{opacity:.8;cursor:pointer;}@media screen and (max-width:769px){.numbertext.jsx-2860589478,.prev.jsx-2860589478,.next.jsx-2860589478{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU1XLEFBR21DLEFBS1EsQUFNYixBQUNILEFBR0csQUFDSCxBQUdNLEFBV0gsQUFNSSxBQUlSLEFBS0csVUFqQ0QsQUFJQSxDQUxHLEFBSUEsQUEwQkQsRUFLZixFQWZZLEdBOUJNLEFBbUJMLENBaUJmLE9BS0EsQ0FWbUIsQ0ExQmUsR0FlZixHQW5CbkIsVUErQmdELGdCQTFCMUIsK0JBMkJ0Qix5QkFaMkIsc0JBZEQsR0FlZCxXQUNELFNBQytCLGlDQWhCMUMsTUFpQmtDLHlHQUNsQyIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NsaWRlc2hvd0dhbGxlcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jbGFzcyBTbGlkZXNob3dHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2xpZGVJbmRleDogMCB9O1xuICAgIHRoaXMucGx1c1NsaWRlcyA9IHRoaXMucGx1c1NsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsdXNTbGlkZXMobikge1xuICAgIGNvbnN0IHsgZ2FsbGVyeUltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gZ2FsbGVyeUltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGlmIChzbGlkZUluZGV4ICsgbiA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAtIDEgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzbGlkZUluZGV4OiBwcmV2U3RhdGUuc2xpZGVJbmRleCArIG4sXG4gICAgfSkpO1xuICB9XG5cbiAgY3VycmVudFNsaWRlKG4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogbiB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNsaWRlcygpIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBnYWxsZXJ5SW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IGdhbGxlcnlJbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZW0uZ2FsbGVyeV9pbWFnZS51cmx9IGNsYXNzTmFtZT17YGZhZGUgJHtzbGlkZUluZGV4ID09PSBpbmRleCA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJ0ZXh0IGhhcy1iYWNrZ3JvdW5kLXdoaXRlLXRlciBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgIHsvKiBFLkcuIDEvNiAqL31cbiAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICB7Z2FsbGVyeUltYWdlcy5sZW5ndGh9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgSU1BR0UgKi99XG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdhbGxlcnlfaW1hZ2UudXJsfSBhbHQ9e2BzbGlkZS0ke2l0ZW0gKyAxfWB9IC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltYWdlIGltZyB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDtcbiAgICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBnYWxsZXJ5SW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IGdhbGxlcnlJbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZW0uZ2FsbGVyeV9pbWFnZS51cmx9IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICB7LyogUFJFVklFVyBJTUFHRSAqL31cbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpbmRleCA/ICdwcmV2aWV3LWFjdGl2ZScgOiAncHJldmlldy1pbmFjdGl2ZSd9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uZ2FsbGVyeV9pbWFnZS51cmx9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmN1cnJlbnRTbGlkZShpbmRleCl9XG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgIGFsdD17YHByZXZpZXctJHtpbmRleH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucHJldmlldy1hY3RpdmUge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZSBpbWcge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxGYWRlIGRlbGF5PXsyMDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICB7c2xpZGVzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgey8qIFNMSURFIFBSRVZJRVcgSVRFTVMgKi99XG4gICAgICAgIDxGYWRlIGRlbGF5PXsyMDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy0xIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIHsvKiBHQUxMRVJZIEJVVFRPTlMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICA8RmFkZSBkZWxheT17MjAwfT5cbiAgICAgICAgICAgIHsvKiBQUkVWSU9VUyBCVVRUT04gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYgYnV0dG9uIGlzLWRhcmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvbiBpcy1kYXJrXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygxKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgLmZhZGUge1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTRyZW07XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICB6LWluZGV4OjE1O1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYsXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */"
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
    className: "jsx-1089434566" + " " + "columns"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-1089434566" + " " + "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-1089434566" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "https://www.facebook.com/ivanshyrai",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-1089434566" + " " + "social-item__anchor linear-text"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "jsx-1089434566" + " " + "fab fa-facebook fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-1089434566" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "mailto:ivan.shyrai@yahoo.com",
    target: "_top",
    style: linkStyle,
    className: "jsx-1089434566" + " " + "social-item__anchor linear-text"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "jsx-1089434566" + " " + "fas fa-envelope fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-1089434566" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "https://www.linkedin.com/in/ivan-shyrai/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-1089434566" + " " + "social-item__anchor linear-text"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "jsx-1089434566" + " " + "fab fa-linkedin fa-lg"
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-1089434566" + " " + "social-item"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: "https://github.com/rawlead",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkStyle,
    className: "jsx-1089434566" + " " + "social-item__anchor linear-text"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "jsx-1089434566" + " " + "fab fa-github fa-lg"
  })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1089434566",
    css: ".social-item.jsx-1089434566{display:inline-block;margin:0 1rem;}.social-item__anchor.jsx-1089434566{font-size:2rem;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;}.social-item__anchor.jsx-1089434566:hover{-webkit-filter:brightness(200%);filter:brightness(200%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU29jaWFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRFMsQUFHZ0MsQUFJTixBQUlRLGVBSFUsTUFKbkIsY0FDaEIscUJBT0EsaUNBSEEiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9Tb2NpYWwuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTb2NpYWwgPSAoeyBsaW5rU3R5bGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2l2YW5zaHlyYWlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWl0ZW1fX2FuY2hvciBsaW5lYXItdGV4dFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vayBmYS1sZ1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pdGVtXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aXZhbi5zaHlyYWlAeWFob28uY29tXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pdGVtX19hbmNob3IgbGluZWFyLXRleHRcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX3RvcFwiXG4gICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZSBmYS1sZ1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pdGVtXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaXZhbi1zaHlyYWkvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pdGVtX19hbmNob3IgbGluZWFyLXRleHRcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4gZmEtbGdcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaXRlbVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Jhd2xlYWRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWl0ZW1fX2FuY2hvciBsaW5lYXItdGV4dFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWIgZmEtbGdcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAuc29jaWFsLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLWl0ZW1fX2FuY2hvciB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlLWluLW91dDsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zb2NpYWwtaXRlbV9fYW5jaG9yOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygyMDAlKTs7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Social.jsx */"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: PRISMIC_API_URL, DEFAULT_SEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRISMIC_API_URL", function() { return PRISMIC_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEO", function() { return DEFAULT_SEO; });
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

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function linkResolver(doc) {
  if (doc.type === 'project') {
    return "/project/".concat(doc.uid);
  }

  if (doc.type === 'main_content') {
    return "/main_content/".concat(doc.ui);
  }

  if (doc.type === 'resume') {
    return "/resume/".concat(doc.ui);
  }

  return '/';
}

module.exports = {
  linkResolver: linkResolver
};

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