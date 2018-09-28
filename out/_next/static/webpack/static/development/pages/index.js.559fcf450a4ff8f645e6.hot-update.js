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
        className: "jsx-99584642" + " " + "spinner-container has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-99584642" + " " + "container-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "container sticky-container has-background-white"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "technologies-tags"
      }, technologies), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "column ".concat(isGalleryLarge && 'is-three-fifths')
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "sticky-item"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 700
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
        style: titleColor,
        className: "jsx-99584642" + " " + " is-size-3 has-text-weight-bold has-text-right"
      }, project.title[0].text)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
        galleryImages: project.gallery_images
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 600
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        onClick: function onClick() {
          return _this2.switchGallerySize();
        },
        className: "jsx-99584642" + " " + "size-switch-btn is-medium is-hidden-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-99584642" + " " + "fas fa-expand-arrows-alt fa-lg"
      }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "column content"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 500
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_overall)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "content-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 150
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_collapse))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "Show more",
        className: "jsx-99584642" + " " + "button is-outlined has-text-weight-bold is-black"
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "project-links-container"
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url),
        className: "jsx-99584642" + " " + "project-link-item project-link__github image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-99584642" + " " + "octocat"
      })), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url),
        className: "jsx-99584642" + " " + "project-link-item project-link__host image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-99584642" + " " + "fas fa-external-link-alt fa-2x"
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: this.addJSONLD(project, content),
        className: "jsx-99584642"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "99584642",
        css: ".content.jsx-99584642{position:relative;}.technologies-tags.jsx-99584642{position:absolute;cursor:default;bottom:1rem;right:1rem;}.size-switch-btn.jsx-99584642{position:absolute;top:2.8rem;right:-.6rem;cursor:pointer;padding:.3rem;color:#f2f2f2;}.spinner-container.jsx-99584642{margin:8rem 0;}.spinner.jsx-99584642{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-99584642{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;border-radius:5px;}.content-collapse.jsx-99584642{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-99584642{padding-top:9rem;margin-bottom:-3rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.sticky-item.jsx-99584642{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.project-links-container.jsx-99584642{position:absolute;z-index:10;bottom:4.6rem;right:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-link-item.jsx-99584642{margin-right:15px;}.project-link__host.jsx-99584642{color:#;}.project-link__host.jsx-99584642:hover{color:#0a0a0a;}.octocat.jsx-99584642{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:33px;height:33px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-99584642:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (min-width:770px){.content.jsx-99584642{padding-left:2rem;}}@media screen and (max-width:769px){.sticky-container.jsx-99584642{padding:2rem 1rem 3rem 1rem;}.technologies-tags.jsx-99584642{bottom:.3rem;right:.3rem;}.project-links-container.jsx-99584642{right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUxXLEFBNkkrQixBQUdBLEFBTUQsQUFRSCxBQUdBLEFBTUQsQUFVSyxBQU9ELEFBS08sQUFPTixBQU9BLEFBR1YsQUFHTSxBQUd5QixBQVNDLEFBU3BCLEFBS1ksQUFHbEIsQUFJTCxRQW5DWCxBQW9DRSxLQUphLENBaEZmLEFBR2dCLEFBZ0RoQixHQXpCc0IsQ0EzQ3RCLEFBR2lCLEFBTUosQUE4Q0EsQUFPYixBQTJCRSxDQXJEYSxLQVlHLENBa0RoQixHQTdFaUIsQUF5RWpCLENBcEZhLEFBOENDLEdBbkJFLENBakNKLElBd0NrQyxFQTJCdEIsQ0FTQSxFQXJFVCxDQThDSCxFQXBERCxBQWlCTyxHQWdCdUIsT0FvQjVCLENBcERmLENBTWdCLE1BV2hCLEFBaURtQixDQXZCUixBQWdDWSxPQXBFUCxFQXFDSSxDQXhCSyxPQStDWixHQTVCYixDQS9CQSxJQXlCbUMsRUFZVixDQXVCYixXQUNDLFdBdkJiLENBd0JpQyxjQWpCakMsVUF1QjRCLHdCQTFDNUIsVUFieUIsWUFrRHpCLDRDQU1tQixpQkFDRixlQUNqQixxQkF6RGdELCtDQUNiLCtCQUNMLDRCQUNYLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NpbmdsZVByb2plY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2NhbGVMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBMaW5rLCBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtcmVhY3Rqcyc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgU2xpZGVzaG93R2FsbGVyeSBmcm9tICcuL1NsaWRlc2hvd0dhbGxlcnknO1xuXG5jbGFzcyBTaW5nbGVQcm9qZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNHYWxsZXJ5TGFyZ2U6IGZhbHNlIH07XG4gICAgdGhpcy5zd2l0Y2hHYWxsZXJ5U2l6ZSA9IHRoaXMuc3dpdGNoR2FsbGVyeVNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN3aXRjaEdhbGxlcnlTaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc0dhbGxlcnlMYXJnZTogIXByZXZTdGF0ZS5pc0dhbGxlcnlMYXJnZSxcbiAgICB9KSk7XG4gIH1cblxuICBvcGVuQ29sbGFwc2UoZSkge1xuICAgIHRoaXMuZnVuY05hbWUgPSAnb3BlbkNvbGxhcHNlJztcbiAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ1Nob3cgbW9yZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgZS50YXJnZXQudmFsdWUgPSAnU2hvdyBsZXNzJztcbiAgICB9XG4gIH1cblxuICAvLyBTRU9cbiAgYWRkSlNPTkxEKHByb2plY3QsIGluZm8pIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ2FkZEpTT05MRCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9faHRtbDogYHtcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgXCJAdHlwZVwiOiBcIkFydGljbGVcIixcbiAgICAgIFwibWFpbkVudGl0eU9mUGFnZVwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgICB9LFxuICAgICAgXCJoZWFkbGluZVwiOiBcIiR7cHJvamVjdC5vZ190aXRsZVswXS50ZXh0fVwiLFxuICAgICAgXCJpbWFnZVwiOiBbXG4gICAgICAgIFwiJHtwcm9qZWN0Lm9nX2ltYWdlLnVybH1cIlxuICAgICAgXSxcbiAgICAgIFwiZGF0ZVB1Ymxpc2hlZFwiOiBcIiR7aW5mby5maXJzdF9wdWJsaWNhdGlvbl9kYXRlfVwiLFxuICAgICAgXCJkYXRlTW9kaWZpZWRcIjogXCIke2luZm8uZmlyc3RfcHVibGljYXRpb25fZGF0ZX1cIixcbiAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJJdmFuIFNoeXJhaVwiXG4gICAgICB9LFxuICAgICAgXCJwdWJsaXNoZXJcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkl2YW4gU2h5cmFpXCIsXG4gICAgICAgIFwibG9nb1wiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9pcy1wb3J0Zm9saW8lMkYyNmUyNjE1OS0yY2IzLTQ5ZWItOGJkZi1jNDY4ZGY4NjIyYzlfaXZhbl9wb3J0Zm9saW8uanBnXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCIke3Byb2plY3Qub2dfZGVzY3JpcHRpb25bMF0udGV4dH1cIlxuICAgIH1gLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNHYWxsZXJ5TGFyZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJvamVjdCA9IGNvbnRlbnQuZGF0YTtcbiAgICBsZXQgZ3JhZGllbnRCYWNrZ3JvdW5kID0ge307XG4gICAgbGV0IHRlY2hub2xvZ2llcyA9IFtdO1xuICAgIGxldCB0aXRsZUNvbG9yID0ge307XG5cbiAgICAvLyBDT0xPUlMgJiBURUNITk9MT0dZIFRBR1NcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgZ3JhZGllbnRCYWNrZ3JvdW5kID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzJ9YCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8xfSwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfSlgLFxuICAgICAgfTtcbiAgICAgIHRpdGxlQ29sb3IgPSB7XG4gICAgICAgIGNvbG9yOiBgJHtwcm9qZWN0LnRpdGxlX2NvbG9yfWAsXG4gICAgICB9O1xuICAgICAgdGVjaG5vbG9naWVzID0gcHJvamVjdC50ZWNobm9sb2dpZXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8c3BhbiBrZXk9e2l0ZW0udGVjaG5vbG9neX0gc3R5bGU9e3sgbWFyZ2luOiAnM3B4JyB9fSBjbGFzc05hbWU9XCJ0YWcgaXMtZGFya1wiPntpdGVtLnRlY2hub2xvZ3l9PC9zcGFuPlxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgeyFwcm9qZWN0XG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAvKiBTUElOTkVSIElGIFBST0pFQ1QgSVMgTE9BRElORyAqL1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICA8U2NhbGVMb2FkZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGlubmVyXCJcbiAgICAgICAgICAgICAgICBzaXplVW5pdD1cInB4XCJcbiAgICAgICAgICAgICAgICBzaXplPXsxMjB9XG4gICAgICAgICAgICAgICAgY29sb3I9XCIjNGE0YTRhXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13cmFwcGVyXCIgc3R5bGU9e2dyYWRpZW50QmFja2dyb3VuZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7LyogVEVDSE5PTE9HSUVTICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5vbG9naWVzLXRhZ3NcIj5cbiAgICAgICAgICAgICAgICAgIHt0ZWNobm9sb2dpZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgICB7LyogR0FMTEVSWSBDT0xVTU4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbHVtbiAke2lzR2FsbGVyeUxhcmdlICYmICdpcy10aHJlZS1maWZ0aHMnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBST0pFQ1QgVElUTEUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezcwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiIGlzLXNpemUtMyBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC1yaWdodFwiIHN0eWxlPXt0aXRsZUNvbG9yfT57cHJvamVjdC50aXRsZVswXS50ZXh0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBHQUxMTEVSWSBDT01QT05FTlQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e3Byb2plY3QuZ2FsbGVyeV9pbWFnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17NjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFWFBBTkQgQlROICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l6ZS1zd2l0Y2gtYnRuIGlzLW1lZGl1bSBpcy1oaWRkZW4tbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hHYWxsZXJ5U2l6ZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0IGZhLWxnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogREVTQ1JJUFRJT04gQ09MVU1OICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogUFJJU01JQyBDTVMgKi99XG4gICAgICAgICAgICAgICAgICAgICAge1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LmRlc2NyaXB0aW9uX292ZXJhbGwpfVxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xMQVBTRSBDT05UQUlORVIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17MTUwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocHJvamVjdC5kZXNjcmlwdGlvbl9jb2xsYXBzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Db2xsYXBzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU2hvdyBtb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWxpbmtzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgey8qIEdJVEhVQiBMSU5LICovfVxuICAgICAgICAgICAgICAgICAge0xpbmsudXJsKHByb2plY3QuZ2l0aHViX3VybCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtbGluay1pdGVtIHByb2plY3QtbGlua19fZ2l0aHViIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e0xpbmsudXJsKHByb2plY3QuZ2l0aHViX3VybCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jdG9jYXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgey8qIEhPU1QgTElOSyAqL31cbiAgICAgICAgICAgICAgICAgIHtMaW5rLnVybChwcm9qZWN0Lmhvc3RfdXJsKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1saW5rLWl0ZW0gcHJvamVjdC1saW5rX19ob3N0IGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e0xpbmsudXJsKHByb2plY3QuaG9zdF91cmwpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4dGVybmFsLWxpbmstYWx0IGZhLTJ4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBTRU8gU0NSSVBUICovfVxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLmFkZEpTT05MRChwcm9qZWN0LCBjb250ZW50KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaG5vbG9naWVzLXRhZ3Mge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zaXplLXN3aXRjaC1idG4ge1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIuOHJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAtLjZyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAuM3JlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Bpbm5lci1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiA4cmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTE1MnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDlyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6MCAxcmVtIDFyZW0gLTFyZW0gcmdiYSgxMCwxMCwxMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3ktaXRlbSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0LWxpbmtzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGJvdHRvbTogNC42cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IC41cmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtbGluay1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtbGlua19faG9zdCB7XG4gICAgICAgICAgICBjb2xvcjogIztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtbGlua19faG9zdDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzBhMGEwYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9jdG9jYXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvZ2l0aHViLnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIHdpZHRoOjMzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6MzNweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vY3RvY2F0OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL29jdG9jYXQucG5nJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NzBweCkge1xuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAuc3RpY2t5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtIDNyZW0gMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZWNobm9sb2dpZXMtdGFncyB7XG4gICAgICAgICAgICAgIGJvdHRvbTouM3JlbTtcbiAgICAgICAgICAgICAgcmlnaHQ6LjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvamVjdC1saW5rcy1jb250YWluZXIge1xuICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

})
//# sourceMappingURL=index.js.559fcf450a4ff8f645e6.hot-update.js.map