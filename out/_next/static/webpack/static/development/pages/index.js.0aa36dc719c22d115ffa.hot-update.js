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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SlideshowGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SlideshowGallery */ "./components/SlideshowGallery.jsx");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var SingleProject =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SingleProject, _React$Component);

  function SingleProject(props) {
    var _this;

    _classCallCheck(this, SingleProject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleProject).call(this, props));
    _this.state = {
      isGalleryLarge: false
    };
    _this.switchGallerySize = _this.switchGallerySize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SingleProject, [{
    key: "switchGallerySize",
    value: function switchGallerySize() {
      this.setState(function (prevState) {
        return {
          isGalleryLarge: !prevState.isGalleryLarge
        };
      });
    }
  }, {
    key: "openCollapse",
    value: function openCollapse(e) {
      this.funcName = 'openCollapse';
      var content = e.target.previousElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        e.target.value = '...Show more';
      } else {
        content.style.maxHeight = "".concat(content.scrollHeight, "px");
        e.target.value = '...Show less';
      }
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
      var isGalleryLarge = this.state.isGalleryLarge;
      var project = content.data;
      var gradientBackground = {};
      var technologies = [];
      var titleColor = {}; // COLORS & TECHNOLOGY TAGS

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
        className: "jsx-2536493551" + " " + "spinner-container has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-2536493551" + " " + "container-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2536493551" + " " + "container sticky-container has-background-white"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2536493551" + " " + "technologies-tags"
      }, technologies), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2536493551" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2536493551" + " " + "column ".concat(isGalleryLarge && 'is-three-fifths')
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2536493551" + " " + "sticky-item"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 700
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
        style: titleColor,
        className: "jsx-2536493551" + " " + " is-size-3 has-text-weight-bold has-text-right"
      }, project.title[0].text)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
        galleryImages: project.gallery_images
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 600
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        onClick: function onClick() {
          return _this2.switchGallerySize();
        },
        className: "jsx-2536493551" + " " + "size-switch-btn is-medium is-hidden-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2536493551" + " " + "fas fa-expand-arrows-alt fa-lg"
      }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2536493551" + " " + "column content"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 500
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_overall)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2536493551" + " " + "content-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 150
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_collapse))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-2536493551" + " " + "button is-outlined has-text-weight-bold is-black"
      }))), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url),
        className: "jsx-2536493551" + " " + "external-link-container external-link-github image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2536493551" + " " + "octocat"
      })), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url),
        className: "jsx-2536493551" + " " + "external-link-container external-link-host image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2536493551" + " " + "fas fa-external-link-alt fa-2x"
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: this.addJSONLD(project, content),
        className: "jsx-2536493551"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2536493551",
        css: ".content.jsx-2536493551{position:relative;}.technologies-tags.jsx-2536493551{margin:1rem 0px;position:absolute;cursor:default;bottom:0;right:1rem;}.size-switch-btn.jsx-2536493551{position:absolute;top:2.8rem;right:-.6rem;cursor:pointer;padding:.3rem;color:#f2f2f2;}.spinner-container.jsx-2536493551{margin:8rem 0;}.spinner.jsx-2536493551{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-2536493551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;border-radius:5px;}.content-collapse.jsx-2536493551{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-2536493551{padding-top:9rem;margin-bottom:-3rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.sticky-item.jsx-2536493551{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.external-link-container.jsx-2536493551{position:absolute;z-index:10;top:1.3rem;}.external-link-host.jsx-2536493551{right:3.6rem;color:hsl(0,0%,48%);}.external-link-host.jsx-2536493551:hover{color:#0a0a0a;}.external-link-github.jsx-2536493551{right:1rem;}.octocat.jsx-2536493551{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:33px;height:33px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-2536493551:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (min-width:770px){.content.jsx-2536493551{padding-left:2rem;}}@media screen and (max-width:769px){.sticky-container.jsx-2536493551{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUxXLEFBRytCLEFBR0YsQUFPQyxBQVFILEFBR0EsQUFNRCxBQVVLLEFBT0QsQUFLTyxBQU9OLEFBS0wsQUFJQyxBQUdILEFBRzRCLEFBU0MsQUFTcEIsQUFLWSxXQXpCbEMsRUFQd0IsQ0EzQ3hCLEFBR2dCLEFBNENoQixFQTlEb0IsQ0F5Q0UsQ0E1Q3RCLEFBVWEsQUE4Q0EsQUFpQ1gsQ0FwRGEsS0FZRyxJQTNCQyxBQXdFakIsQ0FuRmEsQUE4Q0YsR0FuQkssQ0F3QmxCLENBMURpQixHQXlDK0IsRUEwQnRCLENBYjFCLEFBc0IwQixFQXBFVCxHQVdHLEdBZ0J1QixDQWxDaEMsUUFRSyxDQVBILEtBa0JiLEFBZ0RtQixDQXRCUixBQStCWSxLQTFFdkIsRUFPZ0IsRUFxQ0ksQ0F4QkssT0E4Q1osR0EzQmIsQ0EvQkEsSUF5Qm1DLEVBWVYsQ0FzQmIsV0FDQyxXQXRCYixDQXVCaUMsd0JBTUwsd0JBekM1QixVQWJ5QixZQWlEekIsNENBTW1CLGlCQUNGLGVBQ2pCLHFCQXhEZ0QsK0NBQ2IsK0JBQ0wsNEJBQ1gsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTY2FsZUxvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCB7IExpbmssIFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1yZWFjdGpzJztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCBTbGlkZXNob3dHYWxsZXJ5IGZyb20gJy4vU2xpZGVzaG93R2FsbGVyeSc7XG5cbmNsYXNzIFNpbmdsZVByb2plY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc0dhbGxlcnlMYXJnZTogZmFsc2UgfTtcbiAgICB0aGlzLnN3aXRjaEdhbGxlcnlTaXplID0gdGhpcy5zd2l0Y2hHYWxsZXJ5U2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3dpdGNoR2FsbGVyeVNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzR2FsbGVyeUxhcmdlOiAhcHJldlN0YXRlLmlzR2FsbGVyeUxhcmdlLFxuICAgIH0pKTtcbiAgfVxuXG4gIG9wZW5Db2xsYXBzZShlKSB7XG4gICAgdGhpcy5mdW5jTmFtZSA9ICdvcGVuQ29sbGFwc2UnO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgZS50YXJnZXQudmFsdWUgPSAnLi4uU2hvdyBtb3JlJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICcuLi5TaG93IGxlc3MnO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNFT1xuICBhZGRKU09OTEQocHJvamVjdCwgaW5mbykge1xuICAgIHRoaXMuZnVuY05hbWUgPSAnYWRkSlNPTkxEJztcbiAgICByZXR1cm4ge1xuICAgICAgX19odG1sOiBge1xuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICBcIkB0eXBlXCI6IFwiQXJ0aWNsZVwiLFxuICAgICAgXCJtYWluRW50aXR5T2ZQYWdlXCI6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIldlYlBhZ2VcIixcbiAgICAgIH0sXG4gICAgICBcImhlYWRsaW5lXCI6IFwiJHtwcm9qZWN0Lm9nX3RpdGxlWzBdLnRleHR9XCIsXG4gICAgICBcImltYWdlXCI6IFtcbiAgICAgICAgXCIke3Byb2plY3Qub2dfaW1hZ2UudXJsfVwiXG4gICAgICBdLFxuICAgICAgXCJkYXRlUHVibGlzaGVkXCI6IFwiJHtpbmZvLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGV9XCIsXG4gICAgICBcImRhdGVNb2RpZmllZFwiOiBcIiR7aW5mby5maXJzdF9wdWJsaWNhdGlvbl9kYXRlfVwiLFxuICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkl2YW4gU2h5cmFpXCJcbiAgICAgIH0sXG4gICAgICBcInB1Ymxpc2hlclwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiSXZhbiBTaHlyYWlcIixcbiAgICAgICAgXCJsb2dvXCI6IHtcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL2lzLXBvcnRmb2xpbyUyRjI2ZTI2MTU5LTJjYjMtNDllYi04YmRmLWM0NjhkZjg2MjJjOV9pdmFuX3BvcnRmb2xpby5qcGdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIiR7cHJvamVjdC5vZ19kZXNjcmlwdGlvblswXS50ZXh0fVwiXG4gICAgfWAsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0dhbGxlcnlMYXJnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gY29udGVudC5kYXRhO1xuICAgIGxldCBncmFkaWVudEJhY2tncm91bmQgPSB7fTtcbiAgICBsZXQgdGVjaG5vbG9naWVzID0gW107XG4gICAgbGV0IHRpdGxlQ29sb3IgPSB7fTtcblxuICAgIC8vIENPTE9SUyAmIFRFQ0hOT0xPR1kgVEFHU1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBncmFkaWVudEJhY2tncm91bmQgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7cHJvamVjdC5iYWNrX2dyYWRfY29sb3JfMn1gLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzF9LCAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzJ9KWAsXG4gICAgICB9O1xuICAgICAgdGl0bGVDb2xvciA9IHtcbiAgICAgICAgY29sb3I6IGAke3Byb2plY3QudGl0bGVfY29sb3J9YCxcbiAgICAgIH07XG4gICAgICB0ZWNobm9sb2dpZXMgPSBwcm9qZWN0LnRlY2hub2xvZ2llcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxzcGFuIGtleT17aXRlbS50ZWNobm9sb2d5fSBzdHlsZT17eyBtYXJnaW46ICczcHgnIH19IGNsYXNzTmFtZT1cInRhZyBpcy1kYXJrXCI+e2l0ZW0udGVjaG5vbG9neX08L3NwYW4+XG4gICAgICApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7IXByb2plY3RcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIC8qIFNQSU5ORVIgSUYgUFJPSkVDVCBJUyBMT0FESU5HICovXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgIDxTY2FsZUxvYWRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIHNpemVVbml0PVwicHhcIlxuICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM0YTRhNGFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdyYXBwZXJcIiBzdHlsZT17Z3JhZGllbnRCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5LWNvbnRhaW5lciBoYXMtYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHsvKiBURUNITk9MT0dJRVMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNobm9sb2dpZXMtdGFnc1wiPlxuICAgICAgICAgICAgICAgICAge3RlY2hub2xvZ2llc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBHQUxMRVJZIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sdW1uICR7aXNHYWxsZXJ5TGFyZ2UgJiYgJ2lzLXRocmVlLWZpZnRocyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogUFJPSkVDVCBUSVRMRSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17NzAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCIgaXMtc2l6ZS0zIGhhcy10ZXh0LXdlaWdodC1ib2xkIGhhcy10ZXh0LXJpZ2h0XCIgc3R5bGU9e3RpdGxlQ29sb3J9Pntwcm9qZWN0LnRpdGxlWzBdLnRleHR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEdBTExMRVJZIENPTVBPTkVOVCAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVzaG93R2FsbGVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlcz17cHJvamVjdC5nYWxsZXJ5X2ltYWdlc31cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXs2MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVYUEFORCBCVE4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXplLXN3aXRjaC1idG4gaXMtbWVkaXVtIGlzLWhpZGRlbi1tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN3aXRjaEdhbGxlcnlTaXplKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhwYW5kLWFycm93cy1hbHQgZmEtbGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xVTU4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHByb2plY3QuZGVzY3JpcHRpb25fb3ZlcmFsbCl9XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgey8qIERFU0NSSVBUSU9OIENPTExBUFNFIENPTlRBSU5FUiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBSSVNNSUMgQ01TICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXsxNTB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LmRlc2NyaXB0aW9uX2NvbGxhcHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtb3V0bGluZWQgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaXMtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNvbGxhcHNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJNb3JlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEdJVEhVQiBMSU5LICovfVxuICAgICAgICAgICAgICAgIHtMaW5rLnVybChwcm9qZWN0LmdpdGh1Yl91cmwpICYmIChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmstY29udGFpbmVyIGV4dGVybmFsLWxpbmstZ2l0aHViIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e0xpbmsudXJsKHByb2plY3QuZ2l0aHViX3VybCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2N0b2NhdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7LyogSE9TVCBMSU5LICovfVxuICAgICAgICAgICAgICAgIHtMaW5rLnVybChwcm9qZWN0Lmhvc3RfdXJsKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rLWNvbnRhaW5lciBleHRlcm5hbC1saW5rLWhvc3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17TGluay51cmwocHJvamVjdC5ob3N0X3VybCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leHRlcm5hbC1saW5rLWFsdCBmYS0yeFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBTRU8gU0NSSVBUICovfVxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLmFkZEpTT05MRChwcm9qZWN0LCBjb250ZW50KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaG5vbG9naWVzLXRhZ3Mge1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2l6ZS1zd2l0Y2gtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyLjhyZW07XG4gICAgICAgICAgICByaWdodDogLS42cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogLjNyZW07XG4gICAgICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogOHJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtY29sbGFwc2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5LWl0ZW0ge1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXh0ZXJuYWwtbGluay1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB0b3A6IDEuM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4dGVybmFsLWxpbmstaG9zdCB7XG4gICAgICAgICAgICByaWdodDogMy42cmVtO1xuICAgICAgICAgICAgY29sb3I6IGhzbCgwLCAwJSwgNDglKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4dGVybmFsLWxpbmstaG9zdDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzBhMGEwYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4dGVybmFsLWxpbmstZ2l0aHViIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtOyAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5vY3RvY2F0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL2dpdGh1Yi5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB3aWR0aDozM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OjMzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub2N0b2NhdDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9vY3RvY2F0LnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAzcmVtIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

})
//# sourceMappingURL=index.js.0aa36dc719c22d115ffa.hot-update.js.map