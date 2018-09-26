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
        style: titleColor,
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
        css: ".spinner-container.jsx-1488172932{margin:8rem 0;}.spinner.jsx-1488172932{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-1488172932{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;}.content-collapse.jsx-1488172932{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-1488172932{padding-top:9rem;margin-bottom:-3rem;}.sticky-item.jsx-1488172932{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.octocat-container.jsx-1488172932{position:absolute;z-index:10;bottom:1rem;right:1rem;}.octocat.jsx-1488172932{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:45px;height:45px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-1488172932:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (max-width:769px){.sticky-container.jsx-1488172932{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0hXLEFBRzJCLEFBR0EsQUFNQyxBQVNLLEFBT0QsQUFJTyxBQU9OLEFBTXFCLEFBU0MsQUFTTixjQTNEdEMsQUFHZ0IsR0FzQlEsQ0FXVCxDQWxCRSxLQVdHLElBekJELEFBd0RiLENBdkJTLEdBbEJLLEtBT2xCLEVBZ0IwQixDQVNBLENBYmIsSUFqQ0ssR0FleUIsSUFtQjNDLFdBakNGLEFBcUNxQixDQWJSLEFBc0JZLFNBckJILENBdEJLLE9BbUNaLFFBdkJzQixFQVdWLENBYWIsV0FDQyxXQWJiLENBY2lDLHdCQU1MLHdCQS9CNUIsVUFaeUIsWUFzQ3pCLDRDQU1tQixpQkFDRixlQUNqQixxQkE3Q2dELCtDQUNiLCtCQUNMLDRCQUNYLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NpbmdsZVByb2plY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2NhbGVMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBMaW5rLCBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtcmVhY3Rqcyc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgU2xpZGVzaG93R2FsbGVyeSBmcm9tICcuL1NsaWRlc2hvd0dhbGxlcnknO1xuXG5jbGFzcyBTaW5nbGVQcm9qZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdNb3JlLi4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdMZXNzLi4uJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByb2plY3QgPSBjb250ZW50LmRhdGE7XG4gICAgbGV0IGdyYWRpZW50QmFja2dyb3VuZCA9IHt9O1xuICAgIGxldCB0aXRsZUNvbG9yID0ge307XG5cbiAgICAvLyBDT0xPUlNcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgZ3JhZGllbnRCYWNrZ3JvdW5kID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzJ9YCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8xfSwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfSlgLFxuICAgICAgfTtcbiAgICAgIHRpdGxlQ29sb3IgPSB7XG4gICAgICAgIGNvbG9yOiBgJHtwcm9qZWN0LnRpdGxlX2NvbG9yfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHshcHJvamVjdFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgLyogU1BJTk5FUiBJRiBQUk9KRUNUIElTIExPQURJTkcgKi9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1jb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgPFNjYWxlTG9hZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgc2l6ZVVuaXQ9XCJweFwiXG4gICAgICAgICAgICAgICAgc2l6ZT17MTIwfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzRhNGE0YVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlclwiIHN0eWxlPXtncmFkaWVudEJhY2tncm91bmR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzdGlja3ktY29udGFpbmVyIGhhcy1iYWNrZ3JvdW5kLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgey8qIEdJVEhVQiBMSU5LICovfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvY3RvY2F0LWNvbnRhaW5lciBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBocmVmPXtMaW5rLnVybChwcm9qZWN0LnByb2plY3RfdXJsKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtOFwiPlxuICAgICAgICAgICAgICAgICAgey8qIEdBTExFUlkgQ09MVU1OICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdGhyZWUtZmlmdGhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYTWF4PXs4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFhNaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJmaWd1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUk9KRUNUIFRJVExFICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIiBpcy1zaXplLTRcIiBzdHlsZT17dGl0bGVDb2xvcn0+e3Byb2plY3QudGl0bGVbMF0udGV4dH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEdBTExMRVJZIENPTVBPTkVOVCAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdF9pbWdfMS51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdF9pbWdfMi51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdF9pbWdfMy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdF9pbWdfNC51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdF9pbWdfNS51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvamVjdF9pbWdfNi51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogREVTQ1JJUFRJT04gQ09MVU1OICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdHdvLWZpZnRocyBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogUFJJU01JQyBDTVMgKi99XG4gICAgICAgICAgICAgICAgICAgICAge1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LmRlc2NyaXB0aW9uX292ZXJhbGwpfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xMQVBTRSBDT05UQUlORVIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUFJJU01JQyBDTVMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHByb2plY3QuZGVzY3JpcHRpb25fY29sbGFwc2UpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVuQ29sbGFwc2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAuc3Bpbm5lci1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiA4cmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTUycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudC1jb2xsYXBzZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MXJlbTtcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDMwMG1zIGVhc2U7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGlja3ktaXRlbSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9jdG9jYXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgYm90dG9tOjFyZW07XG4gICAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9jdG9jYXQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9naXRodWIucG5nJyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB3aWR0aDo0NXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6NDVweDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vY3RvY2F0OmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvb2N0b2NhdC5wbmcnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAzcmVtIDFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2plY3Q7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

})
//# sourceMappingURL=index.js.7371e146ed5923d9a151.hot-update.js.map