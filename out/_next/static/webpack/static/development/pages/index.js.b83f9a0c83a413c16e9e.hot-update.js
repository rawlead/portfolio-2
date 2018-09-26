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
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        style: {
          color: "'".concat(project.title_color, "'")
        },
        className: "jsx-1488172932" + " " + "content"
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
        css: ".spinner-container.jsx-1488172932{margin:8rem 0;}.spinner.jsx-1488172932{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-1488172932{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;}.content-collapse.jsx-1488172932{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-1488172932{padding-top:9rem;margin-bottom:-3rem;}.sticky-item.jsx-1488172932{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-1488172932{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-1488172932{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-1488172932:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-1488172932{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEdXLEFBRzJCLEFBR0EsQUFNQyxBQVNLLEFBT0QsQUFJTyxBQU9OLEFBTXFCLEFBU0MsQUFTTixjQTNEdEMsQUFHZ0IsR0FzQlEsQ0FXVCxDQWxCRSxLQVdHLElBekJELEFBd0RiLENBdkJTLEdBbEJLLEtBT2xCLEVBZ0IwQixDQVNBLENBYmIsSUFqQ0ssR0FleUIsSUFtQjNDLFdBakNGLEFBcUNxQixDQWJSLEFBc0JZLFNBckJILENBdEJLLE9BbUNaLFFBdkJzQixFQVdWLENBYWIsV0FDQyxXQWJiLENBY2lDLHdCQU1MLHdCQS9CNUIsVUFaeUIsWUFzQ3pCLDRDQU1tQixpQkFDRixlQUNqQixxQkE3Q2dELCtDQUNiLCtCQUNMLDRCQUNYLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NpbmdsZVByb2plY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2NhbGVMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBMaW5rLCBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtcmVhY3Rqcyc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgU2xpZGVzaG93R2FsbGVyeSBmcm9tICcuL1NsaWRlc2hvd0dhbGxlcnknO1xuXG5jbGFzcyBTaW5nbGVQcm9qZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByb2plY3QgPSBjb250ZW50LmRhdGE7XG4gICAgbGV0IGdyYWRpZW50QmFja2dyb3VuZCA9IHt9O1xuXG4gICAgLy8gQkFDS0dST1VORCBDT0xPUiBPRiBQUk9KRUNUIFdSQVBQRVJcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgZ3JhZGllbnRCYWNrZ3JvdW5kID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzJ9YCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8xfSwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfSlgLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7IXByb2plY3RcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIC8qIFNQSU5ORVIgSUYgUFJPSkVDVCBJUyBMT0FESU5HICovXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgIDxTY2FsZUxvYWRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIHNpemVVbml0PVwicHhcIlxuICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM0YTRhNGFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXJcIiBzdHlsZT17Z3JhZGllbnRCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHsvKiBHSVRIVUIgTElOSyAqL31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2N0b2NhdC1jb250YWluZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17TGluay51cmwocHJvamVjdC5wcm9qZWN0X3VybCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvY3RvY2F0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLThcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBHQUxMRVJZIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLXRocmVlLWZpZnRoc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WE1heD17ODB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwiZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUFJPSkVDVCBUSVRMRSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRcIiBzdHlsZT17eyBjb2xvcjogYCcke3Byb2plY3QudGl0bGVfY29sb3J9J2AgfX0+e3Byb2plY3QudGl0bGVbMF0udGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogR0FMTExFUlkgQ09NUE9ORU5UICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ18xLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ18yLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ18zLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ180LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ181LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0X2ltZ182LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xVTU4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy10d28tZmlmdGhzIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHByb2plY3QuZGVzY3JpcHRpb25fb3ZlcmFsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgey8qIERFU0NSSVBUSU9OIENPTExBUFNFIENPTlRBSU5FUiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocHJvamVjdC5kZXNjcmlwdGlvbl9jb2xsYXBzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtb3V0bGluZWQgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaXMtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Db2xsYXBzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJNb3JlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIC5zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDhyZW0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50LWNvbGxhcHNlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDlyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0aWNreS1pdGVtIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2N0b2NhdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICBib3R0b206MXJlbTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2N0b2NhdCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL2dpdGh1Yi5wbmcnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIHdpZHRoOjQ1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDo0NXB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9jdG9jYXQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9vY3RvY2F0LnBuZycpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtIDNyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvamVjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

})
//# sourceMappingURL=index.js.b83f9a0c83a413c16e9e.hot-update.js.map