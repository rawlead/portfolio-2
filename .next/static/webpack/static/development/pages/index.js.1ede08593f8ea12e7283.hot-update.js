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
        target: "_blank",
        href: "https://github.com/rawlead/Photo-IS",
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
        css: ".wrapper-project2.jsx-377744364{background:-webkit-gradient(linear,left top,right top,from(#e67e22),to(#e74c3c));background:-webkit-linear-gradient(left,#e67e22,#e74c3c);background:-o-linear-gradient(left,#e67e22,#e74c3c);background:linear-gradient(to right,#e67e22,#e74c3c);}.wrapper-project3.jsx-377744364{background:#232526;background:-webkit-linear-gradient(to right,#414345,#232526);background:linear-gradient(to right,#414345,#232526);}.sticky-container.jsx-377744364{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;border:1px solid hsl(0,0%,86%);padding:2rem 4rem 5rem 4rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0,90%);}.content-collapse.jsx-377744364{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 1s ease-out;transition:max-height 1s ease-out;}.content.jsx-377744364{padding:2.5rem 0 0 0;}.sticky-title.jsx-377744364{padding:13px;top:-2rem;margin-bottom:-5rem;}.container-wrapper.jsx-377744364{padding-top:11rem;margin-bottom:-3rem;}.sticky-item.jsx-377744364{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-377744364{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-377744364{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-377744364:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-377744364{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThSVyxBQUdrRyxBQU1sRSxBQUtOLEFBU0ssQUFNRyxBQUdSLEFBS0ssQUFLTSxBQU9SLEFBTXFCLEFBVUMsQUFVTixhQTFDdEIsS0FLVSxBQVlYLENBeENzRCxBQWNsRCxFQU1qQixFQUl3QixDQVNKLElBaUNoQixDQXpCUyxHQTFCTyxNQWVwQixDQWdCMEIsQ0FVQSxDQWRiLEVBakJiLEtBVHNDLElBMkJ0QyxXQUltQixDQWJOLEFBdUJVLFNBdEJELENBOUJLLE1BSmdDLENBUEksQUFzRGxELFVBWmMsQ0FhZixXQUNDLFdBYmIsQ0FjaUMsU0FsQ2pDLFNBZkEsS0FQMEQsQ0ErRDlCLGtDQXBERCxZQThDM0IsS0F4RDJELHVDQStEeEMsY0E5RG5CLEdBK0RpQixlQUNqQixxQkF0RHFDLCtCQUNMLDRCQUNrQiwrQ0FDaEIsOEJBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCBTbGlkZXNob3dHYWxsZXJ5IGZyb20gJy4vU2xpZGVzaG93R2FsbGVyeSc7XG5cbmNsYXNzIFByb2plY3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgey8qIDxQYXJhbGxheCBib3R0b20gZGVsYXk9ezgwMH0+ICovfVxuICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXBhcmFsbGF4XCJcbiAgICAgICAgICBvZmZzZXRZTWF4PXsxMDB9XG4gICAgICAgICAgb2Zmc2V0WU1pbj17LTQwfVxuICAgICAgICAgIHNsb3dlclNjcm9sbFJhdGVcbiAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LXRpdGxlIGhhc2JhXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS0zIGhhcy10ZXh0LWNlbnRlcmVkICBoYXMtdGV4dC1ibGFjayBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlByb2plY3RzPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYXJhbGxheD5cblxuICAgICAgICB7LyogUHJvamVjdCAxICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Jhd2xlYWQvUGhvdG8tSVNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvY3RvY2F0XCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWhhbGZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17ODAwfT5cblxuICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNYXg9ezgwfVxuICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RmFkZSBkZWxheT17MTUwMH0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob3RvIElTXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogPC9GYWRlPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgIDxhd2Vzb21lLXNsaWRlciBoZWlnaHQ9XCJ4NjAlXCIgYnVsbGV0cz1cInRydWVcIiBjb2xvcj1cImdyZXlcIiBhcnJvd3M9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtIHNvdXJjZT1cIi4uL3N0YXRpYy9wL3BvcnRhbC0xLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtIHNvdXJjZT1cIi4uL3N0YXRpYy9wL3BvcnRhbC0yLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtIHNvdXJjZT1cIi4uL3N0YXRpYy9wL3BvcnRhbC0zLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2F3ZXNvbWUtc2xpZGVyPlxuICAgICAgICAgICAgICAgICAgey8qIDxGYWRlIGRlbGF5PXs4MDB9PiAqL31cbiAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtMy5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9wb3J0YWwtNi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMwYTBhMGFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiA8L0ZhZGU+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgIDxoMz5BYm91dCB0aGlzIHByb2plY3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgPGg1PlBob3RvIElTIGlzIGEgd2ViIGFwcGxpY2F0aW9uIGZvciBzaGFyaW5nIHBob3Rvcy48L2g1PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGJ1aWx0IHdpdGggSmF2YSBhbmQgU3ByaW5nIEZyYW1ld29yayBhcyBiYWNrLWVuZCB0ZWNobm9sb2dpZXMsXG4gICAgICAgICAgICAgICAgICAgIHdpdGggTXlTUUwgZGF0YWJhc2UgZm9yIGtlZXBpbmcgdXNlciBhY2NvdW50cywgcGhvdG9zLCBjb21tZW50cyBhbmQgb3RoZXIgc3R1ZmYuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5JbnRlcmZhY2Ugd2FzIGJ1aWx0IHVzaW5nIFZ1ZS5qcyBhbmQgQm9vdHN0cmFwIGxpYnJhcmllcy48L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Db21tdW5pY2F0aW9uIHdpdGggc2VydmVyIGlzIGRvbmUgdGhyb3VnaCBKU09OIGZvcm1hdCBhbmQgUkVTVCBBUEkuIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBsaXZlcyBvbiBBbWF6b24gV2ViIFNlcnZpY2VzIGFuZFxuICAgICAgICAgICAgICAgICAgICAgaXMgdXNpbmcgRUIgZm9yIGRlcGxveWluZywgUzMgZm9yIHN0b3JpbmcgaW1hZ2UgZmlsZXMgYW5kIFJEUyBhcyBhXG4gICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZSBwcm92aWRlci5cbiAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5GdW5jdGlvbmFsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlVzZXJzIGFyZSBhYmxlIHRvOjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+Q3JlYXRlIGEgbmV3IGFjY291bnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Mb2dpbiBpbnRvIGV4aXN0aW5nIGFjY291bnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5VcGxvYWQgcHJvZmlsZSBpbWFnZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPk1vZGlmeSBwZXJzb25hbCBkYXRhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIHBob3RvIHdpdGggYSBzaG9ydCB0aXRsZSwgZGVzY3JpcHRpb24gYW5kIHNlbGVjdGluZyBhIGNhdGVnb3J5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhwbG9yZSBwaG90b3MgdXBsb2FkZWQgYnkgb3RoZXIgdXNlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb3J0IHBob3RvcyBieSBjYXRlZ29yeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkFkZCBvciByZW1vdmUgcGhvdG9zIHRvIG9yIGZyb20gY29sbGVjdGlvbiBvZiBmYXZvcml0ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db21tZW50IHBob3RvcyBhbmQgZXhwbG9yZSBjb21tZW50cyBtYWRlIGJ5IG90aGVyIHVzZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoIGZvciBjYXRlZ29yaWVzIG9yIG90aGVyIHVzZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICA8aDM+VGVjaG5pY2FsIFNoZWV0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlRlY2hub2xvZ2llcyBJIGdvdCBpbnZvbHZlZCB3aXRoIHdoaWxlIHdvcmtpbmcgb24gdGhpcyBwcm9qZWN0LjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+SmF2YSA4PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U3ByaW5nIEZyYW1ld29yayAtIFNlY3VyaXR5LCBNVkMsIERhdGE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5NeVNRTDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkFtYXpvbiBXZWIgU2VydmljZXMgLSBFQiwgUzMsIFJEUzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPm9BdXRoIDIuMDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkhUTUw1IC8gQ1NTMyAvIEphdmFzY3JpcHQgRVM2PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VUkvVVggQXJjaGl0ZWN0dXJlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+VUkvVVggQW5pbWF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlZ1ZS5qczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkJvb3RzdHJhcDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaGFzLXRleHQtd2VpZ2h0LWJvbGQgaXMtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVuQ29sbGFwc2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJNb3JlLi4uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7IC8qIFBST0pFQ1QgMiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlciB3cmFwcGVyLXByb2plY3QyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICB7LyogPEZhZGUgZGVsYXk9ezE1MDB9PiAqL31cbiAgICAgICAgICAgICAgICAgIDxQYXJhbGxheFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWF4PXs4MH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtNCBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEVicm9meVxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIHsvKiA8RmFkZSBkZWxheT17ODAwfT4gKi99XG4gICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby0xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tMi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTMucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAnLi4vc3RhdGljL3AvZWJyby00LnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2Vicm8tNS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9lYnJvLTYuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMmMzZTUwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7LyogPC9GYWRlPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgIEVicm9meSBpcyBhIHNtYWxsIHdlYiBhcHBsaWNhdGlvbiBmb3JcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgcGl4ZWxhdGlvbiBhbmQgY29sb3IgZGVwdGggcHJvY2Vzc2luZy5cbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb24gYnVpbGQgd2l0aCBKYXZhIGFuZCBTcHJpbmcgRnJhbWV3b3JrIGFzIGJhY2stZW5kLFxuICAgICAgICAgICAgICAgICAgICB3aXRoIE15U1FMIGRhdGFiYXNlIGZvciBrZWVwaW5nIHVzZXIgYWNjb3VudHMsIHBob3RvcywgY29tbWVudHMgYW5kIG90aGVyIHN0dWZmLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEZyb250LWVuZCB0ZWNobm9sb2dpZXMgYXJlIFZ1ZS5qcyBhbmQgQm9vdHN0cmFwLlxuICAgICAgICAgICAgICAgICAgICAgQ29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpcyBkb25lIHZpYSBKU09OIHdpdGggUkVTVCBBUEkuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQnVpbHQgb25cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0stbWVhbnNfY2x1c3RlcmluZ1wiPmstbWVhbnMgY2x1c3RlcmluZyBhbGdvcml0aG08L2E+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8aDY+VXNlcnMgb2YgdGhlIGFwcGxpY2F0aW9ucyBhcmUgYWJsZSB0bzo8L2g2PlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIGltYWdlIHRvIHRoZSB3ZWJzaXRlIGZvciBmdXJ0aGVyIHByb2Nlc3Npbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIGltYWdlIHRvIHRoZSB3ZWJzaXRlPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8aDQ+VGVjaG5vbG9naWVzIHVzZWQ6PC9oND5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkphdmE8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+U3ByaW5nIEZyYW1ld29yazwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5SZWFjdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5NeVNRTDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5IZXJva3U8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsgLyogUFJPSkVDVCAzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13cmFwcGVyIHdyYXBwZXItcHJvamVjdDNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17Nzl9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIHRhZz1cImZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTQgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEZpbHRlciBBcHBcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICB7LyogPEZhZGUgZGVsYXk9ezgwMH0+ICovfVxuICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0yLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC0zLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC00LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgJy4uL3N0YXRpYy9wL2ZpbHRlcmFwcC01LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAgICcuLi9zdGF0aWMvcC9maWx0ZXJhcHAtNi5qcGcnLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImhzbCgwLCAwJSwgNDAlKVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgey8qIDwvRmFkZT4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgPGg0PkZpbHRlckFwcCBpcyBhIHNtYWxsIHdlYiBhcHBsaWNhdGlvbiBmb3IgaW1hZ2UgcHJvY2Vzc2luZy48L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIGJ1aWxkIHdpdGggSmF2YSBhbmQgU3ByaW5nIEZyYW1ld29yayBhcyBiYWNrLWVuZCxcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBNeVNRTCBkYXRhYmFzZSBmb3Iga2VlcGluZyB1c2VyIGFjY291bnRzLCBwaG90b3MsIGNvbW1lbnRzIGFuZCBvdGhlciBzdHVmZi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBGcm9udC1lbmQgdGVjaG5vbG9naWVzIGFyZSBWdWUuanMgYW5kIEJvb3RzdHJhcC4gQ29tbXVuaWNhdGlvbiB3aXRoIHNlcnZlciBpc1xuICAgICAgICAgICAgICAgICAgICAgZG9uZSB2aWEgSlNPTiB3aXRoIFJFU1QgQVBJLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEJ1aWx0IG9uXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LLW1lYW5zX2NsdXN0ZXJpbmdcIj4gay1tZWFucyBjbHVzdGVyaW5nIGFsZ29yaXRobTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICA8aDY+VXNlcnMgb2YgdGhlIGFwcGxpY2F0aW9ucyBhcmUgYWJsZSB0bzo8L2g2PlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIGltYWdlIHRvIHRoZSB3ZWJzaXRlIGZvciBmdXJ0aGVyIHByb2Nlc3Npbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VXBsb2FkIGltYWdlIHRvIHRoZSB3ZWJzaXRlPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8aDM+VGVjaG5vbG9naWVzIHVzZWQ6PC9oMz5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkphdmE8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+U3ByaW5nIEZyYW1ld29yazwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNSAvIENTUzMgLzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5SZWFjdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5NeVNRTDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5IZXJva3U8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1yb3VuZGVkIGhhcy10ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZpbHRlcmFwcC1zaHlyYWkuaGVyb2t1YXBwLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2hzbCgwLCAwJSwgNDAlKScgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVmlzaXQgd2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscCBoYXMtdGV4dC1kYW5nZXJcIj4qIE1pZ2h0IHRha2UgdXAgdG8gMzAgc2Vjb25kcyB0byBydW4gdGhlIHNlcnZlcjwvcD5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgLndyYXBwZXItcHJvamVjdDIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI2U2N2UyMiksIHRvKCNlNzRjM2MpKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNlNjdlMjIsICNlNzRjM2MpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNlNjdlMjIsICNlNzRjM2MpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTY3ZTIyLCAjZTc0YzNjKTtcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlci1wcm9qZWN0MyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjMyNTI2OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0MTQzNDUsICMyMzI1MjYpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQxNDM0NSwgIzIzMjUyNik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgICAgICAgfVxuICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gNHJlbSA1cmVtIDRyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsMCw5MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50LWNvbGxhcHNlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MXJlbTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcyBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyLjVyZW0gMCAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN0aWNreS10aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxM3B4O1xuICAgICAgICAgICAgdG9wOiAtMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXItd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTFyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zdGlja3ktaXRlbSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLm9jdG9jYXQtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgYm90dG9tOjFyZW07XG4gICAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm9jdG9jYXQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL2dpdGh1Yi5wbmcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgd2lkdGg6NDVweDtcbiAgICAgICAgICBoZWlnaHQ6NDVweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAub2N0b2NhdDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvb2N0b2NhdC5wbmcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuIFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAzcmVtIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Projects.jsx */",
        __self: this
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.1ede08593f8ea12e7283.hot-update.js.map