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
        e.target.value = 'More...';
      } else {
        content.style.maxHeight = "".concat(content.scrollHeight, "px");
        e.target.value = 'Less...';
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
        className: "jsx-1768023981" + " " + "spinner-container has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-1768023981" + " " + "container-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1768023981" + " " + "container sticky-container has-background-white"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1768023981" + " " + "technologies-tags"
      }, technologies), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1768023981" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1768023981" + " " + "column ".concat(isGalleryLarge && 'is-three-fifths')
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1768023981" + " " + "sticky-item"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 700
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
        style: titleColor,
        className: "jsx-1768023981" + " " + " is-size-3 has-text-weight-bold has-text-right"
      }, project.title[0].text)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
        galleryImages: project.gallery_images
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 600
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        onClick: function onClick() {
          return _this2.switchGallerySize();
        },
        className: "jsx-1768023981" + " " + "size-switch-btn is-medium is-hidden-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-1768023981" + " " + "fas fa-expand-arrows-alt fa-lg"
      }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1768023981" + " " + "column content"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 500
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_overall)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1768023981" + " " + "content-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 150
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_collapse))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "More...",
        className: "jsx-1768023981" + " " + "button is-outlined has-text-weight-bold is-black"
      }))), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url),
        className: "jsx-1768023981" + " " + "external-link-container external-link-github image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1768023981" + " " + "octocat"
      })), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url),
        className: "jsx-1768023981" + " " + "external-link-container external-link-host image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-1768023981" + " " + "fas fa-external-link-alt fa-2x"
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: this.addJSONLD(project, content),
        className: "jsx-1768023981"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1768023981",
        css: ".content.jsx-1768023981{position:relative;}.technologies-tags.jsx-1768023981{margin:1rem 0px;position:absolute;z-index:-1;bottom:0;right:1rem;}.size-switch-btn.jsx-1768023981{position:absolute;top:2.8rem;right:-.6rem;cursor:pointer;padding:.3rem;color:#f2f2f2;}.spinner-container.jsx-1768023981{margin:8rem 0;}.spinner.jsx-1768023981{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-1768023981{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;border-radius:5px;}.content-collapse.jsx-1768023981{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-1768023981{padding-top:9rem;margin-bottom:-3rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.sticky-item.jsx-1768023981{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.external-link-container.jsx-1768023981{position:absolute;z-index:10;top:1.3rem;}.external-link-host.jsx-1768023981{right:3.6rem;color:hsl(0,0%,48%);}.external-link-host.jsx-1768023981:hover{color:#0a0a0a;}.external-link-github.jsx-1768023981{right:1rem;}.octocat.jsx-1768023981{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:33px;height:33px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-1768023981:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (min-width:770px){.content.jsx-1768023981{padding-left:2rem;}}@media screen and (max-width:769px){.sticky-container.jsx-1768023981{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUxXLEFBRytCLEFBR0YsQUFPQyxBQVFILEFBR0EsQUFNRCxBQVVLLEFBT0QsQUFLTyxBQU9OLEFBS0wsQUFJQyxBQUdILEFBRzRCLEFBU0MsQUFTcEIsQUFLWSxXQXpCbEMsRUFQd0IsQ0EzQ3hCLEFBR2dCLEFBNENoQixFQTlEb0IsQ0F5Q0UsQ0E1Q3RCLEFBVWEsQUE4Q0EsQUFpQ1gsQ0FwRGEsS0FZRyxJQTNCQyxBQXdFakIsQ0FuRmEsQUE4Q0YsR0FuQkssQ0F3QmxCLENBMURhLEdBeUNtQyxFQTBCdEIsQ0FiMUIsQUFzQjBCLEVBcEVULEdBUE4sQUFrQlMsR0FnQnVCLE1BakM5QixHQU9HLE1BV2hCLEFBZ0RtQixDQXRCUixBQStCWSxDQTFFdkIsTUFPZ0IsRUFxQ0ksQ0F4QkssT0E4Q1osR0EzQmIsQ0EvQkEsSUF5Qm1DLEVBWVYsQ0FzQmIsV0FDQyxXQXRCYixDQXVCaUMsd0JBTUwsd0JBekM1QixVQWJ5QixZQWlEekIsNENBTW1CLGlCQUNGLGVBQ2pCLHFCQXhEZ0QsK0NBQ2IsK0JBQ0wsNEJBQ1gsaUJBQ0Msa0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTY2FsZUxvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCB7IExpbmssIFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1yZWFjdGpzJztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCBTbGlkZXNob3dHYWxsZXJ5IGZyb20gJy4vU2xpZGVzaG93R2FsbGVyeSc7XG5cbmNsYXNzIFNpbmdsZVByb2plY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc0dhbGxlcnlMYXJnZTogZmFsc2UgfTtcbiAgICB0aGlzLnN3aXRjaEdhbGxlcnlTaXplID0gdGhpcy5zd2l0Y2hHYWxsZXJ5U2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3dpdGNoR2FsbGVyeVNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzR2FsbGVyeUxhcmdlOiAhcHJldlN0YXRlLmlzR2FsbGVyeUxhcmdlLFxuICAgIH0pKTtcbiAgfVxuXG4gIG9wZW5Db2xsYXBzZShlKSB7XG4gICAgdGhpcy5mdW5jTmFtZSA9ICdvcGVuQ29sbGFwc2UnO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgZS50YXJnZXQudmFsdWUgPSAnTW9yZS4uLic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgZS50YXJnZXQudmFsdWUgPSAnTGVzcy4uLic7XG4gICAgfVxuICB9XG5cbiAgLy8gU0VPXG4gIGFkZEpTT05MRChwcm9qZWN0LCBpbmZvKSB7XG4gICAgdGhpcy5mdW5jTmFtZSA9ICdhZGRKU09OTEQnO1xuICAgIHJldHVybiB7XG4gICAgICBfX2h0bWw6IGB7XG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJBcnRpY2xlXCIsXG4gICAgICBcIm1haW5FbnRpdHlPZlBhZ2VcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgICAgfSxcbiAgICAgIFwiaGVhZGxpbmVcIjogXCIke3Byb2plY3Qub2dfdGl0bGVbMF0udGV4dH1cIixcbiAgICAgIFwiaW1hZ2VcIjogW1xuICAgICAgICBcIiR7cHJvamVjdC5vZ19pbWFnZS51cmx9XCJcbiAgICAgIF0sXG4gICAgICBcImRhdGVQdWJsaXNoZWRcIjogXCIke2luZm8uZmlyc3RfcHVibGljYXRpb25fZGF0ZX1cIixcbiAgICAgIFwiZGF0ZU1vZGlmaWVkXCI6IFwiJHtpbmZvLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGV9XCIsXG4gICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiSXZhbiBTaHlyYWlcIlxuICAgICAgfSxcbiAgICAgIFwicHVibGlzaGVyXCI6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJJdmFuIFNoeXJhaVwiLFxuICAgICAgICBcImxvZ29cIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vaXMtcG9ydGZvbGlvJTJGMjZlMjYxNTktMmNiMy00OWViLThiZGYtYzQ2OGRmODYyMmM5X2l2YW5fcG9ydGZvbGlvLmpwZ1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJHtwcm9qZWN0Lm9nX2Rlc2NyaXB0aW9uWzBdLnRleHR9XCJcbiAgICB9YCxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzR2FsbGVyeUxhcmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByb2plY3QgPSBjb250ZW50LmRhdGE7XG4gICAgbGV0IGdyYWRpZW50QmFja2dyb3VuZCA9IHt9O1xuICAgIGxldCB0ZWNobm9sb2dpZXMgPSBbXTtcbiAgICBsZXQgdGl0bGVDb2xvciA9IHt9O1xuXG4gICAgLy8gQ09MT1JTICYgVEVDSE5PTE9HWSBUQUdTXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIGdyYWRpZW50QmFja2dyb3VuZCA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfWAsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7cHJvamVjdC5iYWNrX2dyYWRfY29sb3JfMX0sICR7cHJvamVjdC5iYWNrX2dyYWRfY29sb3JfMn0pYCxcbiAgICAgIH07XG4gICAgICB0aXRsZUNvbG9yID0ge1xuICAgICAgICBjb2xvcjogYCR7cHJvamVjdC50aXRsZV9jb2xvcn1gLFxuICAgICAgfTtcbiAgICAgIHRlY2hub2xvZ2llcyA9IHByb2plY3QudGVjaG5vbG9naWVzLm1hcChpdGVtID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpdGVtLnRlY2hub2xvZ3l9IHN0eWxlPXt7IG1hcmdpbjogJzNweCcgfX0gY2xhc3NOYW1lPVwidGFnIGlzLWRhcmtcIj57aXRlbS50ZWNobm9sb2d5fTwvc3Bhbj5cbiAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHshcHJvamVjdFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgLyogU1BJTk5FUiBJRiBQUk9KRUNUIElTIExPQURJTkcgKi9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1jb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgPFNjYWxlTG9hZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgc2l6ZVVuaXQ9XCJweFwiXG4gICAgICAgICAgICAgICAgc2l6ZT17MTIwfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzRhNGE0YVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlclwiIHN0eWxlPXtncmFkaWVudEJhY2tncm91bmR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzdGlja3ktY29udGFpbmVyIGhhcy1iYWNrZ3JvdW5kLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgIHsvKiBURUNITk9MT0dJRVMgKi99XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5vbG9naWVzLXRhZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWNobm9sb2dpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgICB7LyogR0FMTEVSWSBDT0xVTU4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbHVtbiAke2lzR2FsbGVyeUxhcmdlICYmICdpcy10aHJlZS1maWZ0aHMnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBST0pFQ1QgVElUTEUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezcwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiIGlzLXNpemUtMyBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC1yaWdodFwiIHN0eWxlPXt0aXRsZUNvbG9yfT57cHJvamVjdC50aXRsZVswXS50ZXh0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBHQUxMTEVSWSBDT01QT05FTlQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e3Byb2plY3QuZ2FsbGVyeV9pbWFnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17NjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFWFBBTkQgQlROICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l6ZS1zd2l0Y2gtYnRuIGlzLW1lZGl1bSBpcy1oaWRkZW4tbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hHYWxsZXJ5U2l6ZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0IGZhLWxnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogREVTQ1JJUFRJT04gQ09MVU1OICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogUFJJU01JQyBDTVMgKi99XG4gICAgICAgICAgICAgICAgICAgICAge1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LmRlc2NyaXB0aW9uX292ZXJhbGwpfVxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xMQVBTRSBDT05UQUlORVIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17MTUwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocHJvamVjdC5kZXNjcmlwdGlvbl9jb2xsYXBzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Db2xsYXBzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTW9yZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBHSVRIVUIgTElOSyAqL31cbiAgICAgICAgICAgICAgICB7TGluay51cmwocHJvamVjdC5naXRodWJfdXJsKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rLWNvbnRhaW5lciBleHRlcm5hbC1saW5rLWdpdGh1YiBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtMaW5rLnVybChwcm9qZWN0LmdpdGh1Yl91cmwpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIEhPU1QgTElOSyAqL31cbiAgICAgICAgICAgICAgICB7TGluay51cmwocHJvamVjdC5ob3N0X3VybCkgJiYgKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGluay1jb250YWluZXIgZXh0ZXJuYWwtbGluay1ob3N0IGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e0xpbmsudXJsKHByb2plY3QuaG9zdF91cmwpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXh0ZXJuYWwtbGluay1hbHQgZmEtMnhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogU0VPIFNDUklQVCAqL31cbiAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5hZGRKU09OTEQocHJvamVjdCwgY29udGVudCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2hub2xvZ2llcy10YWdzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2l6ZS1zd2l0Y2gtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyLjhyZW07XG4gICAgICAgICAgICByaWdodDogLS42cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogLjNyZW07XG4gICAgICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogOHJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDlyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3ktaXRlbSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leHRlcm5hbC1saW5rLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIHRvcDogMS4zcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXh0ZXJuYWwtbGluay1ob3N0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAzLjZyZW07XG4gICAgICAgICAgICBjb2xvcjogaHNsKDAsIDAlLCA0OCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXh0ZXJuYWwtbGluay1ob3N0OmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMGEwYTBhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXh0ZXJuYWwtbGluay1naXRodWIge1xuICAgICAgICAgICAgcmlnaHQ6IDFyZW07ICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9jdG9jYXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvZ2l0aHViLnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIHdpZHRoOjMzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6MzNweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vY3RvY2F0OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL29jdG9jYXQucG5nJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NzBweCkge1xuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtIDNyZW0gMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvamVjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

})
//# sourceMappingURL=index.js.b9fd562a791ca0fe8f2b.hot-update.js.map