webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.jsx":
/*!*********************************!*\
  !*** ./components/Projects.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/lib/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
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
        className: "jsx-377744364" + " " + "container sticky-title hasba",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-377744364" + " " + "is-size-3 has-text-centered  has-text-black has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Projects"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "container-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "!",
        className: "jsx-377744364" + " " + "octocat-container image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "octocat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "columns is-variable is-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "sticky-item",
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
        className: "jsx-377744364" + " " + "is-size-4 has-text-weight-bold",
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
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        source: "../static/p/portal-1.jpg",
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        source: "../static/p/portal-2.jpg",
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("item", {
        source: "../static/p/portal-3.jpg",
        className: "jsx-377744364",
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
        className: "jsx-377744364" + " " + "column content",
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
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "About this project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Photo IS is a web application for sharing photos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Application built with Java and Spring Framework as back-end technologies, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Interface was built using Vue.js and Bootstrap libraries."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Communication with server is done through JSON format and REST API. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Application lives on Amazon Web Services and is using EB for deploying, S3 for storing image files and RDS as a database provider."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "content-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Functional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Users are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Login into existing account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Upload profile image"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Modify personal data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Upload photo with a short title, description and selecting a category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Explore photos uploaded by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Sort photos by category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Add or remove photos to or from collection of favorites"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Comment photos and explore comments made by other users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Search for categories or other users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Technical Sheet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Technologies I got involved with while working on this project."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Java 8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Spring Framework - Security, MVC, Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Amazon Web Services - EB, S3, RDS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "oAuth 2.0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "HTML5 / CSS3 / Javascript ES6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "UI/UX Architecture"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "UI/UX Animations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Vue.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Bootstrap"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-377744364" + " " + "button has-text-weight-bold is-black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "container-wrapper wrapper-project2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "columns is-variable is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "sticky-item",
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
        className: "jsx-377744364" + " " + "is-size-4 has-text-weight-bold",
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
        className: "jsx-377744364" + " " + "column content",
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
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Ebrofy is a small web application for image pixelation and color depth processing."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Application build with Java and Spring Framework as back-end, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Front-end technologies are Vue.js and Bootstrap. Communication with server is done via JSON with REST API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Built on", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "k-means clustering algorithm")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Users of the applications are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Upload image to the website for further processing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Upload image to the website")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Technologies used:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Spring Framework"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "HTML5 / CSS3 /"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Heroku"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "container-wrapper wrapper-project3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + " container sticky-container has-background-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "columns is-variable is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-377744364" + " " + "sticky-item",
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
        className: "jsx-377744364" + " " + "is-size-4 has-text-weight-bold has-text-grey-light",
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
        className: "jsx-377744364" + " " + "column content",
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
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "FilterApp is a small web application for image processing."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Application build with Java and Spring Framework as back-end, with MySQL database for keeping user accounts, photos, comments and other stuff."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Front-end technologies are Vue.js and Bootstrap. Communication with server is done via JSON with REST API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Built on", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, " k-means clustering algorithm")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Users of the applications are able to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Upload image to the website for further processing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "Upload image to the website")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Technologies used:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Spring Framework"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "HTML5 / CSS3 /"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "MySQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-377744364",
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
        className: "jsx-377744364" + " " + "button is-rounded has-text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Visit website"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-377744364" + " " + "help has-text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "* Might take up to 30 seconds to run the server")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "377744364",
        css: ".wrapper-project2.jsx-377744364{background:-webkit-gradient(linear,left top,right top,from(#e67e22),to(#e74c3c));background:-webkit-linear-gradient(left,#e67e22,#e74c3c);background:-o-linear-gradient(left,#e67e22,#e74c3c);background:linear-gradient(to right,#e67e22,#e74c3c);}.wrapper-project3.jsx-377744364{background:#232526;background:-webkit-linear-gradient(to right,#414345,#232526);background:linear-gradient(to right,#414345,#232526);}.sticky-container.jsx-377744364{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;border:1px solid hsl(0,0%,86%);padding:2rem 4rem 5rem 4rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0,90%);}.content-collapse.jsx-377744364{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 1s ease-out;transition:max-height 1s ease-out;}.content.jsx-377744364{padding:2.5rem 0 0 0;}.sticky-title.jsx-377744364{padding:13px;top:-2rem;margin-bottom:-5rem;}.container-wrapper.jsx-377744364{padding-top:11rem;margin-bottom:-3rem;}.sticky-item.jsx-377744364{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-377744364{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-377744364{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-377744364:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-377744364{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThSVyxBQUdrRyxBQU1sRSxBQUtOLEFBU0ssQUFNRyxBQUdSLEFBS0ssQUFLTSxBQU9SLEFBTXFCLEFBVUMsQUFVTixhQTFDdEIsS0FLVSxBQVlYLENBeENzRCxBQWNsRCxFQU1qQixFQUl3QixDQVNKLElBaUNoQixDQXpCUyxHQTFCTyxNQWVwQixDQWdCMEIsQ0FVQSxDQWRiLEVBakJiLEtBVHNDLElBMkJ0QyxXQUltQixDQWJOLEFBdUJVLFNBdEJELENBOUJLLE1BSmdDLENBUEksQUFzRGxELFVBWmMsQ0FhZixXQUNDLFdBYmIsQ0FjaUMsU0FsQ2pDLFNBZkEsS0FQMEQsQ0ErRDlCLGtDQXBERCxZQThDM0IsS0F4RDJELHVDQStEeEMsY0E5RG5CLEdBK0RpQixlQUNqQixxQkF0RHFDLCtCQUNMLDRCQUNrQiwrQ0FDaEIsOEJBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCBTbGlkZXNob3dHYWxsZXJ5IGZyb20gJy4vU2xpZGVzaG93R2FsbGVyeSc7XG5cbmNsYXNzIFByb2plY3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgey8qIDxQYXJhbGxheCBib3R0b20gZGVsYXk9ezgwMH0+ICovfVxuICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXBhcmFsbGF4XCJcbiAgICAgICAgICBvZmZzZXRZTWF4PXsxMDB9XG4gICAgICAgICAgb2Zmc2V0WU1pbj17LTQwfVxuICAgICAgICAgIHNsb3dlclNjcm9sbFJhdGVcbiAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LXRpdGxlIGhhc2JhXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS0zIGhhcy10ZXh0LWNlbnRlcmVkICBoYXMtdGV4dC1ibGFjayBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlByb2plY3RzPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYXJhbGxheD5cblxuICAgICAgICB7LyogUHJvamVjdCAxICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIiBocmVmPVwiIVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXs4MDB9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxGYWRlIGRlbGF5PXsxNTAwfT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtNCBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG8gSVNcbiAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0ZhZGU+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgPGF3ZXNvbWUtc2xpZGVyIGhlaWdodD1cIng2MCVcIiBidWxsZXRzPVwidHJ1ZVwiIGNvbG9yPVwiZ3JleVwiIGFycm93cz1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0gc291cmNlPVwiLi4vc3RhdGljL3AvcG9ydGFsLTEuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0gc291cmNlPVwiLi4vc3RhdGljL3AvcG9ydGFsLTIuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0gc291cmNlPVwiLi4vc3RhdGljL3AvcG9ydGFsLTMuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYXdlc29tZS1zbGlkZXI+XG4gICAgICAgICAgICAgICAgICB7LyogPEZhZGUgZGVsYXk9ezgwMH0+ICovfVxuICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL3BvcnRhbC0xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL3BvcnRhbC0yLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL3BvcnRhbC0zLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL3BvcnRhbC00LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL3BvcnRhbC01LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL3BvcnRhbC02LmpwZycsXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzBhMGEwYVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgey8qIDwvRmFkZT4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IHRoaXMgcHJvamVjdDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDU+UGhvdG8gSVMgaXMgYSB3ZWIgYXBwbGljYXRpb24gZm9yIHNoYXJpbmcgcGhvdG9zLjwvaDU+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gYnVpbHQgd2l0aCBKYXZhIGFuZCBTcHJpbmcgRnJhbWV3b3JrIGFzIGJhY2stZW5kIHRlY2hub2xvZ2llcyxcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLCBwaG90b3MsIGNvbW1lbnRzIGFuZCBvdGhlciBzdHVmZi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkludGVyZmFjZSB3YXMgYnVpbHQgdXNpbmcgVnVlLmpzIGFuZCBCb290c3RyYXAgbGlicmFyaWVzLjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkNvbW11bmljYXRpb24gd2l0aCBzZXJ2ZXIgaXMgZG9uZSB0aHJvdWdoIEpTT04gZm9ybWF0IGFuZCBSRVNUIEFQSS4gPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGxpdmVzIG9uIEFtYXpvbiBXZWIgU2VydmljZXMgYW5kXG4gICAgICAgICAgICAgICAgICAgICBpcyB1c2luZyBFQiBmb3IgZGVwbG95aW5nLCBTMyBmb3Igc3RvcmluZyBpbWFnZSBmaWxlcyBhbmQgUkRTIGFzIGFcbiAgICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlIHByb3ZpZGVyLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkZ1bmN0aW9uYWw8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDU+VXNlcnMgYXJlIGFibGUgdG86PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGUgYSBuZXcgYWNjb3VudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkxvZ2luIGludG8gZXhpc3RpbmcgYWNjb3VudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcm9maWxlIGltYWdlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9kaWZ5IHBlcnNvbmFsIGRhdGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcGhvdG8gd2l0aCBhIHNob3J0IHRpdGxlLCBkZXNjcmlwdGlvbiBhbmQgc2VsZWN0aW5nIGEgY2F0ZWdvcnk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5FeHBsb3JlIHBob3RvcyB1cGxvYWRlZCBieSBvdGhlciB1c2VyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlNvcnQgcGhvdG9zIGJ5IGNhdGVnb3J5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRkIG9yIHJlbW92ZSBwaG90b3MgdG8gb3IgZnJvbSBjb2xsZWN0aW9uIG9mIGZhdm9yaXRlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbW1lbnQgcGhvdG9zIGFuZCBleHBsb3JlIGNvbW1lbnRzIG1hZGUgYnkgb3RoZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWFyY2ggZm9yIGNhdGVnb3JpZXMgb3Igb3RoZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMz5UZWNobmljYWwgU2hlZXQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDU+VGVjaG5vbG9naWVzIEkgZ290IGludm9sdmVkIHdpdGggd2hpbGUgd29ya2luZyBvbiB0aGlzIHByb2plY3QuPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5KYXZhIDg8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5TcHJpbmcgRnJhbWV3b3JrIC0gU2VjdXJpdHksIE1WQywgRGF0YTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPk15U1FMPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+QW1hem9uIFdlYiBTZXJ2aWNlcyAtIEVCLCBTMywgUkRTPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+b0F1dGggMi4wPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+SFRNTDUgLyBDU1MzIC8gSmF2YXNjcmlwdCBFUzY8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VSS9VWCBBcmNoaXRlY3R1cmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VSS9VWCBBbmltYXRpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VnVlLmpzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+Qm9vdHN0cmFwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBoYXMtdGV4dC13ZWlnaHQtYm9sZCBpcy1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Db2xsYXBzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIk1vcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsgLyogUFJPSkVDVCAyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13cmFwcGVyIHdyYXBwZXItcHJvamVjdDJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzdGlja3ktY29udGFpbmVyIGhhcy1iYWNrZ3JvdW5kLXdoaXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIHsvKiA8RmFkZSBkZWxheT17MTUwMH0+ICovfVxuICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezgwfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRWJyb2Z5XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgey8qIDxGYWRlIGRlbGF5PXs4MDB9PiAqL31cbiAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby0yLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tMy5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTQucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby01LnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tNi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyYzNlNTBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiA8L0ZhZGU+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgRWJyb2Z5IGlzIGEgc21hbGwgd2ViIGFwcGxpY2F0aW9uIGZvclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSBwaXhlbGF0aW9uIGFuZCBjb2xvciBkZXB0aCBwcm9jZXNzaW5nLlxuICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBidWlsZCB3aXRoIEphdmEgYW5kIFNwcmluZyBGcmFtZXdvcmsgYXMgYmFjay1lbmQsXG4gICAgICAgICAgICAgICAgICAgIHdpdGggTXlTUUwgZGF0YWJhc2UgZm9yIGtlZXBpbmcgdXNlciBhY2NvdW50cywgcGhvdG9zLCBjb21tZW50cyBhbmQgb3RoZXIgc3R1ZmYuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgRnJvbnQtZW5kIHRlY2hub2xvZ2llcyBhcmUgVnVlLmpzIGFuZCBCb290c3RyYXAuXG4gICAgICAgICAgICAgICAgICAgICBDb21tdW5pY2F0aW9uIHdpdGggc2VydmVyIGlzIGRvbmUgdmlhIEpTT04gd2l0aCBSRVNUIEFQSS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBCdWlsdCBvblxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSy1tZWFuc19jbHVzdGVyaW5nXCI+ay1tZWFucyBjbHVzdGVyaW5nIGFsZ29yaXRobTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxoNj5Vc2VycyBvZiB0aGUgYXBwbGljYXRpb25zIGFyZSBhYmxlIHRvOjwvaDY+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgaW1hZ2UgdG8gdGhlIHdlYnNpdGUgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgaW1hZ2UgdG8gdGhlIHdlYnNpdGU8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxoND5UZWNobm9sb2dpZXMgdXNlZDo8L2g0PlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SmF2YTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TcHJpbmcgRnJhbWV3b3JrPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkhUTUw1IC8gQ1NTMyAvPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlJlYWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk15U1FMPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkhlcm9rdTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyAvKiBQUk9KRUNUIDMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXIgd3JhcHBlci1wcm9qZWN0M1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbnRhaW5lciBzdGlja3ktY29udGFpbmVyIGhhcy1iYWNrZ3JvdW5kLXdoaXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWF4PXs3OX1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtNCBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgRmlsdGVyIEFwcFxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIHsvKiA8RmFkZSBkZWxheT17ODAwfT4gKi99XG4gICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZmlsdGVyYXBwLTEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZmlsdGVyYXBwLTIuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZmlsdGVyYXBwLTMuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZmlsdGVyYXBwLTQuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZmlsdGVyYXBwLTUuanBlZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC02LmpwZycsXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaHNsKDAsIDAlLCA0MCUpXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7LyogPC9GYWRlPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICA8aDQ+RmlsdGVyQXBwIGlzIGEgc21hbGwgd2ViIGFwcGxpY2F0aW9uIGZvciBpbWFnZSBwcm9jZXNzaW5nLjwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gYnVpbGQgd2l0aCBKYXZhIGFuZCBTcHJpbmcgRnJhbWV3b3JrIGFzIGJhY2stZW5kLFxuICAgICAgICAgICAgICAgICAgICB3aXRoIE15U1FMIGRhdGFiYXNlIGZvciBrZWVwaW5nIHVzZXIgYWNjb3VudHMsIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEZyb250LWVuZCB0ZWNobm9sb2dpZXMgYXJlIFZ1ZS5qcyBhbmQgQm9vdHN0cmFwLiBDb21tdW5pY2F0aW9uIHdpdGggc2VydmVyIGlzXG4gICAgICAgICAgICAgICAgICAgICBkb25lIHZpYSBKU09OIHdpdGggUkVTVCBBUEkuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQnVpbHQgb25cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0stbWVhbnNfY2x1c3RlcmluZ1wiPiBrLW1lYW5zIGNsdXN0ZXJpbmcgYWxnb3JpdGhtPC9hPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICAgICAgICAgIDxoNj5Vc2VycyBvZiB0aGUgYXBwbGljYXRpb25zIGFyZSBhYmxlIHRvOjwvaDY+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgaW1hZ2UgdG8gdGhlIHdlYnNpdGUgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgaW1hZ2UgdG8gdGhlIHdlYnNpdGU8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxoMz5UZWNobm9sb2dpZXMgdXNlZDo8L2gzPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SmF2YTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TcHJpbmcgRnJhbWV3b3JrPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkhUTUw1IC8gQ1NTMyAvPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlJlYWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk15U1FMPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkhlcm9rdTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXJvdW5kZWQgaGFzLXRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmlsdGVyYXBwLXNoeXJhaS5oZXJva3VhcHAuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnaHNsKDAsIDAlLCA0MCUpJyB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBWaXNpdCB3ZWJzaXRlXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWxwIGhhcy10ZXh0LWRhbmdlclwiPiogTWlnaHQgdGFrZSB1cCB0byAzMCBzZWNvbmRzIHRvIHJ1biB0aGUgc2VydmVyPC9wPlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAud3JhcHBlci1wcm9qZWN0MiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjZTY3ZTIyKSwgdG8oI2U3NGMzYykpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2U2N2UyMiwgI2U3NGMzYyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2U2N2UyMiwgI2U3NGMzYyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlNjdlMjIsICNlNzRjM2MpO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyLXByb2plY3QzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMzI1MjY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQxNDM0NSwgIzIzMjUyNik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDE0MzQ1LCAjMjMyNTI2KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgICAgICB9XG4gICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSA0cmVtIDVyZW0gNHJlbTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwwLDkwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQtY29sbGFwc2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuNXJlbSAwIDAgMDtcbiAgICAgICAgfVxuICAgICAgICAuc3RpY2t5LXRpdGxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgICAgICAgICB0b3A6IC0ycmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zcmVtO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnN0aWNreS1pdGVtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAub2N0b2NhdC1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBib3R0b206MXJlbTtcbiAgICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAub2N0b2NhdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvZ2l0aHViLnBuZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB3aWR0aDo0NXB4O1xuICAgICAgICAgIGhlaWdodDo0NXB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5vY3RvY2F0OmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9vY3RvY2F0LnBuZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtIDNyZW0gMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Projects.jsx */",
        __self: this
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.b541233d6be279720bdb.hot-update.js.map