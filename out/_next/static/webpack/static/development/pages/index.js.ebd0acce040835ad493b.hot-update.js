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
        e.target.value = 'Show more';
      } else {
        content.style.maxHeight = "".concat(content.scrollHeight, "px");
        e.target.value = 'Show less';
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
        className: "jsx-1949217762" + " " + "spinner-container has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-1949217762" + " " + "container-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1949217762" + " " + "container sticky-container has-background-white"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1949217762" + " " + "technologies-tags"
      }, technologies), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1949217762" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1949217762" + " " + "column ".concat(isGalleryLarge && 'is-three-fifths')
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1949217762" + " " + "sticky-item"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 700
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
        style: titleColor,
        className: "jsx-1949217762" + " " + " is-size-3 has-text-weight-bold has-text-right"
      }, project.title[0].text)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
        galleryImages: project.gallery_images
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 600
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        onClick: function onClick() {
          return _this2.switchGallerySize();
        },
        className: "jsx-1949217762" + " " + "size-switch-btn is-medium is-hidden-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-1949217762" + " " + "fas fa-expand-arrows-alt fa-lg"
      }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1949217762" + " " + "column content"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 500
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_overall)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1949217762" + " " + "content-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 150
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_collapse))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "Show more",
        className: "jsx-1949217762" + " " + "button is-outlined has-text-weight-bold is-black"
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1949217762" + " " + "project-links-container"
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url),
        className: "jsx-1949217762" + " " + "project-link-item project-link__host image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-1949217762" + " " + "fas fa-external-link-alt fa-2x"
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: this.addJSONLD(project, content),
        className: "jsx-1949217762"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1949217762",
        css: ".content.jsx-1949217762{position:relative;}.technologies-tags.jsx-1949217762{position:absolute;cursor:default;bottom:1rem;right:1rem;}.size-switch-btn.jsx-1949217762{position:absolute;top:2.8rem;right:-.6rem;cursor:pointer;padding:.3rem;color:#f2f2f2;}.spinner-container.jsx-1949217762{margin:8rem 0;}.spinner.jsx-1949217762{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-1949217762{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;border-radius:5px;}.content-collapse.jsx-1949217762{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-1949217762{padding-top:9rem;margin-bottom:-3rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.sticky-item.jsx-1949217762{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.project-links-container.jsx-1949217762{position:absolute;z-index:10;bottom:4.5rem;right:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-link-item.jsx-1949217762{margin-right:15px;}.project-link__host.jsx-1949217762{right:3.8rem;color:hsl(0,0%,48%);}.project-link__host.jsx-1949217762:hover{color:#0a0a0a;}.octocat.jsx-1949217762{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:33px;height:33px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-1949217762:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (min-width:770px){.content.jsx-1949217762{padding-left:2rem;}}@media screen and (max-width:769px){.sticky-container.jsx-1949217762{padding:2rem 1rem 3rem 1rem;}.technologies-tags.jsx-1949217762{bottom:.3rem;right:.3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEtXLEFBRytCLEFBR0EsQUFNRCxBQVFILEFBR0EsQUFNRCxBQVVLLEFBT0QsQUFLTyxBQU9OLEFBT0EsQUFHTCxBQUlDLEFBR3lCLEFBU0MsQUFTcEIsQUFLWSxBQUdsQixhQWhDUSxBQWlDVCxDQWpGZixBQUdnQixBQWlEaEIsR0ExQnNCLENBM0N0QixBQUdpQixBQU1KLEFBOENBLEFBT2IsQUE0QkUsQ0F0RGEsS0FZRyxDQW1EMUIsR0E5RTJCLEFBMEVqQixDQXJGYSxBQThDQyxHQW5CRSxDQWpDSixBQThEZCxJQXRCZ0QsRUE0QnRCLENBU0EsRUF0RVQsQ0E4Q0gsRUFwREQsQUFpQk8sR0FnQnVCLE9Bb0I1QixDQXBEZixDQU1nQixNQVdoQixBQWtEbUIsQ0F4QlIsQUFpQ1ksT0FyRVAsRUFxQ0ksQ0F4QkssT0FnRFosR0E3QmIsQ0EvQkEsSUF5Qm1DLEVBWVYsQ0F3QmIsV0FDQyxXQXhCYixDQXlCaUMsY0FsQmpDLFVBd0I0Qix3QkEzQzVCLFVBYnlCLFlBbUR6Qiw0Q0FNbUIsaUJBQ0YsZUFDakIscUJBMURnRCwrQ0FDYiwrQkFDTCw0QkFDWCxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TaW5nbGVQcm9qZWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNjYWxlTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xuaW1wb3J0IHsgTGluaywgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLXJlYWN0anMnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IFNsaWRlc2hvd0dhbGxlcnkgZnJvbSAnLi9TbGlkZXNob3dHYWxsZXJ5JztcblxuY2xhc3MgU2luZ2xlUHJvamVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzR2FsbGVyeUxhcmdlOiBmYWxzZSB9O1xuICAgIHRoaXMuc3dpdGNoR2FsbGVyeVNpemUgPSB0aGlzLnN3aXRjaEdhbGxlcnlTaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBzd2l0Y2hHYWxsZXJ5U2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNHYWxsZXJ5TGFyZ2U6ICFwcmV2U3RhdGUuaXNHYWxsZXJ5TGFyZ2UsXG4gICAgfSkpO1xuICB9XG5cbiAgb3BlbkNvbGxhcHNlKGUpIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ29wZW5Db2xsYXBzZSc7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICdTaG93IG1vcmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke2NvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ1Nob3cgbGVzcyc7XG4gICAgfVxuICB9XG5cbiAgLy8gU0VPXG4gIGFkZEpTT05MRChwcm9qZWN0LCBpbmZvKSB7XG4gICAgdGhpcy5mdW5jTmFtZSA9ICdhZGRKU09OTEQnO1xuICAgIHJldHVybiB7XG4gICAgICBfX2h0bWw6IGB7XG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJBcnRpY2xlXCIsXG4gICAgICBcIm1haW5FbnRpdHlPZlBhZ2VcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgICAgfSxcbiAgICAgIFwiaGVhZGxpbmVcIjogXCIke3Byb2plY3Qub2dfdGl0bGVbMF0udGV4dH1cIixcbiAgICAgIFwiaW1hZ2VcIjogW1xuICAgICAgICBcIiR7cHJvamVjdC5vZ19pbWFnZS51cmx9XCJcbiAgICAgIF0sXG4gICAgICBcImRhdGVQdWJsaXNoZWRcIjogXCIke2luZm8uZmlyc3RfcHVibGljYXRpb25fZGF0ZX1cIixcbiAgICAgIFwiZGF0ZU1vZGlmaWVkXCI6IFwiJHtpbmZvLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGV9XCIsXG4gICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiSXZhbiBTaHlyYWlcIlxuICAgICAgfSxcbiAgICAgIFwicHVibGlzaGVyXCI6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJJdmFuIFNoeXJhaVwiLFxuICAgICAgICBcImxvZ29cIjoge1xuICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vaXMtcG9ydGZvbGlvJTJGMjZlMjYxNTktMmNiMy00OWViLThiZGYtYzQ2OGRmODYyMmM5X2l2YW5fcG9ydGZvbGlvLmpwZ1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiJHtwcm9qZWN0Lm9nX2Rlc2NyaXB0aW9uWzBdLnRleHR9XCJcbiAgICB9YCxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzR2FsbGVyeUxhcmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByb2plY3QgPSBjb250ZW50LmRhdGE7XG4gICAgbGV0IGdyYWRpZW50QmFja2dyb3VuZCA9IHt9O1xuICAgIGxldCB0ZWNobm9sb2dpZXMgPSBbXTtcbiAgICBsZXQgdGl0bGVDb2xvciA9IHt9O1xuXG4gICAgLy8gQ09MT1JTICYgVEVDSE5PTE9HWSBUQUdTXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIGdyYWRpZW50QmFja2dyb3VuZCA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfWAsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7cHJvamVjdC5iYWNrX2dyYWRfY29sb3JfMX0sICR7cHJvamVjdC5iYWNrX2dyYWRfY29sb3JfMn0pYCxcbiAgICAgIH07XG4gICAgICB0aXRsZUNvbG9yID0ge1xuICAgICAgICBjb2xvcjogYCR7cHJvamVjdC50aXRsZV9jb2xvcn1gLFxuICAgICAgfTtcbiAgICAgIHRlY2hub2xvZ2llcyA9IHByb2plY3QudGVjaG5vbG9naWVzLm1hcChpdGVtID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpdGVtLnRlY2hub2xvZ3l9IHN0eWxlPXt7IG1hcmdpbjogJzNweCcgfX0gY2xhc3NOYW1lPVwidGFnIGlzLWRhcmtcIj57aXRlbS50ZWNobm9sb2d5fTwvc3Bhbj5cbiAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHshcHJvamVjdFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgLyogU1BJTk5FUiBJRiBQUk9KRUNUIElTIExPQURJTkcgKi9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1jb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgPFNjYWxlTG9hZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgc2l6ZVVuaXQ9XCJweFwiXG4gICAgICAgICAgICAgICAgc2l6ZT17MTIwfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzRhNGE0YVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlclwiIHN0eWxlPXtncmFkaWVudEJhY2tncm91bmR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzdGlja3ktY29udGFpbmVyIGhhcy1iYWNrZ3JvdW5kLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgey8qIFRFQ0hOT0xPR0lFUyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2hub2xvZ2llcy10YWdzXCI+XG4gICAgICAgICAgICAgICAgICB7dGVjaG5vbG9naWVzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgey8qIEdBTExFUlkgQ09MVU1OICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2x1bW4gJHtpc0dhbGxlcnlMYXJnZSAmJiAnaXMtdGhyZWUtZmlmdGhzJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUk9KRUNUIFRJVExFICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGRlbGF5PXs3MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIiBpcy1zaXplLTMgaGFzLXRleHQtd2VpZ2h0LWJvbGQgaGFzLXRleHQtcmlnaHRcIiBzdHlsZT17dGl0bGVDb2xvcn0+e3Byb2plY3QudGl0bGVbMF0udGV4dH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogR0FMTExFUlkgQ09NUE9ORU5UICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXNob3dHYWxsZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzPXtwcm9qZWN0LmdhbGxlcnlfaW1hZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezYwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRVhQQU5EIEJUTiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpemUtc3dpdGNoLWJ0biBpcy1tZWRpdW0gaXMtaGlkZGVuLW1vYmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3dpdGNoR2FsbGVyeVNpemUoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdCBmYS1sZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIERFU0NSSVBUSU9OIENPTFVNTiAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBSSVNNSUMgQ01TICovfVxuICAgICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocHJvamVjdC5kZXNjcmlwdGlvbl9vdmVyYWxsKX1cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICB7LyogREVTQ1JJUFRJT04gQ09MTEFQU0UgQ09OVEFJTkVSICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogUFJJU01JQyBDTVMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezE1MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7UmljaFRleHQucmVuZGVyKHByb2plY3QuZGVzY3JpcHRpb25fY29sbGFwc2UpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1vdXRsaW5lZCBoYXMtdGV4dC13ZWlnaHQtYm9sZCBpcy1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVuQ29sbGFwc2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlNob3cgbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1saW5rcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBIT1NUIExJTksgKi99XG4gICAgICAgICAgICAgICAgICB7TGluay51cmwocHJvamVjdC5ob3N0X3VybCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtbGluay1pdGVtIHByb2plY3QtbGlua19faG9zdCBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtMaW5rLnVybChwcm9qZWN0Lmhvc3RfdXJsKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leHRlcm5hbC1saW5rLWFsdCBmYS0yeFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogU0VPIFNDUklQVCAqL31cbiAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5hZGRKU09OTEQocHJvamVjdCwgY29udGVudCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2hub2xvZ2llcy10YWdzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIGJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2l6ZS1zd2l0Y2gtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyLjhyZW07XG4gICAgICAgICAgICByaWdodDogLS42cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogLjNyZW07XG4gICAgICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogOHJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtY29sbGFwc2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5LWl0ZW0ge1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvamVjdC1saW5rcy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBib3R0b206IDQuNXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWxpbmstaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWxpbmtfX2hvc3Qge1xuICAgICAgICAgICAgcmlnaHQ6IDMuOHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiBoc2woMCwgMCUsIDQ4JSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWxpbmtfX2hvc3Q6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMwYTBhMGE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vY3RvY2F0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL2dpdGh1Yi5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB3aWR0aDozM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OjMzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub2N0b2NhdDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9vY3RvY2F0LnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAzcmVtIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGVjaG5vbG9naWVzLXRhZ3Mge1xuICAgICAgICAgICAgICBib3R0b206LjNyZW07XG4gICAgICAgICAgICAgIHJpZ2h0Oi4zcmVtO1xuICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

})
//# sourceMappingURL=index.js.ebd0acce040835ad493b.hot-update.js.map