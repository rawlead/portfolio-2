webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
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
    value: function componentDidMount() {}
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
        className: "jsx-3899803072",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
        className: "jsx-3899803072",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        className: "jsx-3899803072",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Concert+One",
        rel: "stylesheet",
        className: "jsx-3899803072",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        defer: true,
        src: "https://use.fontawesome.com/releases/v5.1.0/js/all.js",
        className: "jsx-3899803072",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-3899803072",
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
        styleId: "3899803072",
        css: "body{background-color:hsl(0,0,90%);}.box-effect:after,.box-effect:before{content:'';position:absolute;left:0;display:inline-block;height:1em;width:100%;margin-top:10px;opacity:0;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,-webkit-transform 0.35s;-webkit-transition:opacity 0.35s,transform 0.35s;transition:opacity 0.35s,transform 0.35s;}.box-effect:before{border-left:1px solid;border-right:1px solid;-webkit-transform:scale(1,0);-webkit-transform:scale(1,0);-ms-transform:scale(1,0);transform:scale(1,0);}.box-effect:after{border-bottom:1px solid;border-top:1px solid;-webkit-transform:scale(0,1);-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);}.box-effect:hover:after,.box-effect:hover:before{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QlcsQUFHNkMsQUFLL0IsQUFhVyxBQU9FLEFBUWQsVUFDaUIsQ0E1QlQsV0FhSyxFQU9GLEtBbkJkLENBTkcsTUFPVyxDQTJCRixRQWZVLEFBT0EsWUFsQmxCLFdBQ0EsTUFXVSxBQU9BLEtBakJMLGdCQUNOLFVBQ2dELENBdUI1RCwyQ0FkQSxBQU9BLGFBZjRDLG1KQUM1QyIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2J1bG1hLzAuNy4xL2Nzcy9idWxtYS5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLnJhd2dpdC5jb20va29ucGEvZGV2aWNvbi9kZjY0MzFlMzIzNTQ3YWRkMWI0Y2Y0NTk5MjkxM2YxNTI4NjQ1NmQzL2Rldmljb24ubWluLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db25jZXJ0K09uZVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgZGVmZXIgc3JjPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjEuMC9qcy9hbGwuanNcIiAvPlxuICAgICAgICAgIDx0aXRsZT5JdmFuIFNoeXJhaTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAsOTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qZWZmZWN0LWJveCovXG4uYm94LWVmZmVjdDphZnRlcixcbi5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbi5ib3gtZWZmZWN0OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLDApO1xufVxuXG4uYm94LWVmZmVjdDphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLDEpO1xufVxuXG4uYm94LWVmZmVjdDpob3ZlcjphZnRlcixcbi5ib3gtZWZmZWN0OmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/Layout.jsx */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.08b1a8fd832181c08277.hot-update.js.map