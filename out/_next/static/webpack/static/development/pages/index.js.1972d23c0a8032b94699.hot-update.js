webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SingleProject.jsx":
/*!**************************************!*\
  !*** ./components/SingleProject.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/lib/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
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
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
        style: {
          color: "'".concat(project.title_color, "'")
        },
        className: "jsx-1488172932" + " " + " is-size-4"
      }, project.title[0].text)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        css: ".spinner-container.jsx-1488172932{margin:8rem 0;}.spinner.jsx-1488172932{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-1488172932{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;}.content-collapse.jsx-1488172932{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-1488172932{padding-top:9rem;margin-bottom:-3rem;}.sticky-item.jsx-1488172932{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-1488172932{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-1488172932{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-1488172932:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-1488172932{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEdXLEFBRzJCLEFBR0EsQUFNQyxBQVNLLEFBT0QsQUFJTyxBQU9OLEFBTXFCLEFBU0MsQUFTTixjQTNEdEMsQUFHZ0IsR0FzQlEsQ0FXVCxDQWxCRSxLQVdHLElBekJELEFBd0RiLENBdkJTLEdBbEJLLEtBT2xCLEVBZ0IwQixDQVNBLENBYmIsSUFqQ0ssR0FleUIsSUFtQjNDLFdBakNGLEFBcUNxQixDQWJSLEFBc0JZLFNBckJILENBdEJLLE9BbUNaLFFBdkJzQixFQVdWLENBYWIsV0FDQyxXQWJiLENBY2lDLHdCQU1MLHdCQS9CNUIsVUFaeUIsWUFzQ3pCLDRDQU1tQixpQkFDRixlQUNqQixxQkE3Q2dELCtDQUNiLCtCQUNMLDRCQUNYLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NpbmdsZVByb2plY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2NhbGVMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBMaW5rLCBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtcmVhY3Rqcyc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgU2xpZGVzaG93R2FsbGVyeSBmcm9tICcuL1NsaWRlc2hvd0dhbGxlcnknO1xuXG5jbGFzcyBTaW5nbGVQcm9qZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByb2plY3QgPSBjb250ZW50LmRhdGE7XG4gICAgbGV0IGdyYWRpZW50QmFja2dyb3VuZCA9IHt9O1xuXG4gICAgLy8gQkFDS0dST1VORCBDT0xPUiBPRiBQUk9KRUNUIFdSQVBQRVJcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgZ3JhZGllbnRCYWNrZ3JvdW5kID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzJ9YCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8xfSwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfSlgLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7IXByb2plY3RcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIC8qIFNQSU5ORVIgSUYgUFJPSkVDVCBJUyBMT0FESU5HICovXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgIDxTY2FsZUxvYWRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIHNpemVVbml0PVwicHhcIlxuICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM0YTRhNGFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXJcIiBzdHlsZT17Z3JhZGllbnRCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHsvKiBHSVRIVUIgTElOSyAqL31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17TGluay51cmwocHJvamVjdC5wcm9qZWN0X3VybCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvY3RvY2F0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBHQUxMRVJZIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXRocmVlLWZpZnRoc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUFJPSkVDVCBUSVRMRSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCIgaXMtc2l6ZS00XCIgc3R5bGU9e3sgY29sb3I6IGAnJHtwcm9qZWN0LnRpdGxlX2NvbG9yfSdgIH19Pntwcm9qZWN0LnRpdGxlWzBdLnRleHR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBHQUxMTEVSWSBDT01QT05FTlQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzEudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzIudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzQudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzUudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RfaW1nXzYudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIERFU0NSSVBUSU9OIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXR3by1maWZ0aHMgY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBSSVNNSUMgQ01TICovfVxuICAgICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocHJvamVjdC5kZXNjcmlwdGlvbl9vdmVyYWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICB7LyogREVTQ1JJUFRJT04gQ09MTEFQU0UgQ09OVEFJTkVSICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBSSVNNSUMgQ01TICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LmRlc2NyaXB0aW9uX2NvbGxhcHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1vdXRsaW5lZCBoYXMtdGV4dC13ZWlnaHQtYm9sZCBpcy1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIk1vcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogOHJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDg2JSk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTE1MnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQtY29sbGFwc2Uge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDMwMG1zIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RpY2t5LWl0ZW0ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vY3RvY2F0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIGJvdHRvbToxcmVtO1xuICAgICAgICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vY3RvY2F0IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvZ2l0aHViLnBuZycpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgd2lkdGg6NDVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2N0b2NhdDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL29jdG9jYXQucG5nJyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gM3JlbSAxcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

})
//# sourceMappingURL=index.js.1972d23c0a8032b94699.hot-update.js.map