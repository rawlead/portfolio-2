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
        className: "jsx-747849427" + " " + "spinner-container has-text-centered"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
        className: "spinner",
        sizeUnit: "px",
        size: 120,
        color: "#4a4a4a"
      })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: gradientBackground,
        className: "jsx-747849427" + " " + "container-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-747849427" + " " + "container sticky-container has-background-white"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-747849427" + " " + "technologies-tags"
      }, technologies), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-747849427" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-747849427" + " " + "column ".concat(isGalleryLarge && 'is-three-fifths')
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-747849427" + " " + "sticky-item"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 700
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
        style: titleColor,
        className: "jsx-747849427" + " " + " is-size-3 has-text-weight-bold has-text-right"
      }, project.title[0].text)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SlideshowGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
        galleryImages: project.gallery_images
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 600
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        onClick: function onClick() {
          return _this2.switchGallerySize();
        },
        className: "jsx-747849427" + " " + "size-switch-btn is-medium is-hidden-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-747849427" + " " + "fas fa-expand-arrows-alt fa-lg"
      }))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-747849427" + " " + "column content"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 500
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_overall)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-747849427" + " " + "content-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
        delay: 150
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(project.description_collapse))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        type: "button",
        onClick: this.openCollapse.bind(this),
        value: "Show more",
        className: "jsx-747849427" + " " + "button is-outlined has-text-weight-bold is-black"
      }))), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.github_url),
        className: "jsx-747849427" + " " + "external-link-container external-link-github image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-747849427" + " " + "octocat"
      })), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Link"].url(project.host_url),
        className: "jsx-747849427" + " " + "external-link-container external-link-host image"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-747849427" + " " + "fas fa-external-link-alt fa-2x"
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: this.addJSONLD(project, content),
        className: "jsx-747849427"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "747849427",
        css: ".content.jsx-747849427{position:relative;}.technologies-tags.jsx-747849427{margin:1rem 0px;position:absolute;cursor:default;bottom:0;right:1rem;}.size-switch-btn.jsx-747849427{position:absolute;top:2.8rem;right:-.6rem;cursor:pointer;padding:.3rem;color:#f2f2f2;}.spinner-container.jsx-747849427{margin:8rem 0;}.spinner.jsx-747849427{display:block;margin:0 auto;border-color:red;text-align:center;}.sticky-container.jsx-747849427{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);border:1px solid hsl(0,0%,86%);padding:2rem 2rem 4rem 2rem;max-width:1152px;border-radius:5px;}.content-collapse.jsx-747849427{margin-bottom:1rem;max-height:0;overflow:hidden;-webkit-transition:max-height 300ms ease;-webkit-transition:max-height 300ms ease;transition:max-height 300ms ease;}.container-wrapper.jsx-747849427{padding-top:9rem;margin-bottom:-3rem;box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);}.sticky-item.jsx-747849427{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:15px;margin-top:-100px;z-index:100 !important;}.external-link-container.jsx-747849427{position:absolute;z-index:10;bottom:3.3rem;}.external-link-host.jsx-747849427{right:4rem;color:hsl(0,0%,48%);}.external-link-host.jsx-747849427:hover{color:#0a0a0a;}.external-link-github.jsx-747849427{right:1.2rem;}.octocat.jsx-747849427{background:url('../static/github.png');background-size:contain;position:relative;z-index:10;width:33px;height:33px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;}.octocat.jsx-747849427:hover{background:url('../static/octocat.png');background-size:contain;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform:rotate(-360deg);-ms-transform:rotate(-360deg);transform:rotate(-360deg);border-radius:0%;cursor:pointer;}@media screen and (min-width:770px){.content.jsx-747849427{padding-left:2rem;}}@media screen and (max-width:769px){.sticky-container.jsx-747849427{padding:2rem 1rem 3rem 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUxXLEFBRytCLEFBR0YsQUFPQyxBQVFILEFBR0EsQUFNRCxBQVVLLEFBT0QsQUFLTyxBQU9OLEFBS1AsQUFJRyxBQUdELEFBRzBCLEFBU0MsQUFTcEIsQUFLWSxXQWhDVixFQU94QixDQWxEQSxBQUdnQixBQTRDaEIsRUE5RG9CLENBeUNFLENBNUN0QixBQVVhLEFBOENBLEFBaUNYLENBcERhLEtBWUcsSUEzQkMsQUF3RWpCLENBbkZhLEFBOENDLEVBS2hCLENBeEJrQixFQWxDRCxHQXlDK0IsRUEwQnRCLENBU0EsRUFwRVQsQ0E4Q2pCLEVBbkNvQixHQWdCdUIsQ0FsQ2hDLFFBUUssQ0FQSCxLQWtCYixBQWdEbUIsQ0F0QlIsQUErQlksS0ExRXZCLEVBT2dCLEVBcUNJLENBeEJLLE9BOENaLEdBM0JiLENBL0JBLElBeUJtQyxFQVlWLENBc0JiLFdBQ0MsV0F0QmIsQ0F1QmlDLHdCQU1MLHdCQXpDNUIsVUFieUIsWUFpRHpCLDRDQU1tQixpQkFDRixlQUNqQixxQkF4RGdELCtDQUNiLCtCQUNMLDRCQUNYLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NpbmdsZVByb2plY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2NhbGVMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBMaW5rLCBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtcmVhY3Rqcyc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgU2xpZGVzaG93R2FsbGVyeSBmcm9tICcuL1NsaWRlc2hvd0dhbGxlcnknO1xuXG5jbGFzcyBTaW5nbGVQcm9qZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNHYWxsZXJ5TGFyZ2U6IGZhbHNlIH07XG4gICAgdGhpcy5zd2l0Y2hHYWxsZXJ5U2l6ZSA9IHRoaXMuc3dpdGNoR2FsbGVyeVNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN3aXRjaEdhbGxlcnlTaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc0dhbGxlcnlMYXJnZTogIXByZXZTdGF0ZS5pc0dhbGxlcnlMYXJnZSxcbiAgICB9KSk7XG4gIH1cblxuICBvcGVuQ29sbGFwc2UoZSkge1xuICAgIHRoaXMuZnVuY05hbWUgPSAnb3BlbkNvbGxhcHNlJztcbiAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ1Nob3cgbW9yZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgZS50YXJnZXQudmFsdWUgPSAnU2hvdyBsZXNzJztcbiAgICB9XG4gIH1cblxuICAvLyBTRU9cbiAgYWRkSlNPTkxEKHByb2plY3QsIGluZm8pIHtcbiAgICB0aGlzLmZ1bmNOYW1lID0gJ2FkZEpTT05MRCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9faHRtbDogYHtcbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgXCJAdHlwZVwiOiBcIkFydGljbGVcIixcbiAgICAgIFwibWFpbkVudGl0eU9mUGFnZVwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgICB9LFxuICAgICAgXCJoZWFkbGluZVwiOiBcIiR7cHJvamVjdC5vZ190aXRsZVswXS50ZXh0fVwiLFxuICAgICAgXCJpbWFnZVwiOiBbXG4gICAgICAgIFwiJHtwcm9qZWN0Lm9nX2ltYWdlLnVybH1cIlxuICAgICAgXSxcbiAgICAgIFwiZGF0ZVB1Ymxpc2hlZFwiOiBcIiR7aW5mby5maXJzdF9wdWJsaWNhdGlvbl9kYXRlfVwiLFxuICAgICAgXCJkYXRlTW9kaWZpZWRcIjogXCIke2luZm8uZmlyc3RfcHVibGljYXRpb25fZGF0ZX1cIixcbiAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICBcIm5hbWVcIjogXCJJdmFuIFNoeXJhaVwiXG4gICAgICB9LFxuICAgICAgXCJwdWJsaXNoZXJcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkl2YW4gU2h5cmFpXCIsXG4gICAgICAgIFwibG9nb1wiOiB7XG4gICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS9pcy1wb3J0Zm9saW8lMkYyNmUyNjE1OS0yY2IzLTQ5ZWItOGJkZi1jNDY4ZGY4NjIyYzlfaXZhbl9wb3J0Zm9saW8uanBnXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCIke3Byb2plY3Qub2dfZGVzY3JpcHRpb25bMF0udGV4dH1cIlxuICAgIH1gLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNHYWxsZXJ5TGFyZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJvamVjdCA9IGNvbnRlbnQuZGF0YTtcbiAgICBsZXQgZ3JhZGllbnRCYWNrZ3JvdW5kID0ge307XG4gICAgbGV0IHRlY2hub2xvZ2llcyA9IFtdO1xuICAgIGxldCB0aXRsZUNvbG9yID0ge307XG5cbiAgICAvLyBDT0xPUlMgJiBURUNITk9MT0dZIFRBR1NcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgZ3JhZGllbnRCYWNrZ3JvdW5kID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3Byb2plY3QuYmFja19ncmFkX2NvbG9yXzJ9YCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8xfSwgJHtwcm9qZWN0LmJhY2tfZ3JhZF9jb2xvcl8yfSlgLFxuICAgICAgfTtcbiAgICAgIHRpdGxlQ29sb3IgPSB7XG4gICAgICAgIGNvbG9yOiBgJHtwcm9qZWN0LnRpdGxlX2NvbG9yfWAsXG4gICAgICB9O1xuICAgICAgdGVjaG5vbG9naWVzID0gcHJvamVjdC50ZWNobm9sb2dpZXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8c3BhbiBrZXk9e2l0ZW0udGVjaG5vbG9neX0gc3R5bGU9e3sgbWFyZ2luOiAnM3B4JyB9fSBjbGFzc05hbWU9XCJ0YWcgaXMtZGFya1wiPntpdGVtLnRlY2hub2xvZ3l9PC9zcGFuPlxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgeyFwcm9qZWN0XG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAvKiBTUElOTkVSIElGIFBST0pFQ1QgSVMgTE9BRElORyAqL1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICA8U2NhbGVMb2FkZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGlubmVyXCJcbiAgICAgICAgICAgICAgICBzaXplVW5pdD1cInB4XCJcbiAgICAgICAgICAgICAgICBzaXplPXsxMjB9XG4gICAgICAgICAgICAgICAgY29sb3I9XCIjNGE0YTRhXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13cmFwcGVyXCIgc3R5bGU9e2dyYWRpZW50QmFja2dyb3VuZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreS1jb250YWluZXIgaGFzLWJhY2tncm91bmQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7LyogVEVDSE5PTE9HSUVTICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5vbG9naWVzLXRhZ3NcIj5cbiAgICAgICAgICAgICAgICAgIHt0ZWNobm9sb2dpZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgICB7LyogR0FMTEVSWSBDT0xVTU4gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbHVtbiAke2lzR2FsbGVyeUxhcmdlICYmICdpcy10aHJlZS1maWZ0aHMnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBST0pFQ1QgVElUTEUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGVsYXk9ezcwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiIGlzLXNpemUtMyBoYXMtdGV4dC13ZWlnaHQtYm9sZCBoYXMtdGV4dC1yaWdodFwiIHN0eWxlPXt0aXRsZUNvbG9yfT57cHJvamVjdC50aXRsZVswXS50ZXh0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBHQUxMTEVSWSBDT01QT05FTlQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlc2hvd0dhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e3Byb2plY3QuZ2FsbGVyeV9pbWFnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17NjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFWFBBTkQgQlROICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l6ZS1zd2l0Y2gtYnRuIGlzLW1lZGl1bSBpcy1oaWRkZW4tbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zd2l0Y2hHYWxsZXJ5U2l6ZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0IGZhLWxnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogREVTQ1JJUFRJT04gQ09MVU1OICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogUFJJU01JQyBDTVMgKi99XG4gICAgICAgICAgICAgICAgICAgICAge1JpY2hUZXh0LnJlbmRlcihwcm9qZWN0LmRlc2NyaXB0aW9uX292ZXJhbGwpfVxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBERVNDUklQVElPTiBDT0xMQVBTRSBDT05UQUlORVIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQUklTTUlDIENNUyAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkZWxheT17MTUwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtSaWNoVGV4dC5yZW5kZXIocHJvamVjdC5kZXNjcmlwdGlvbl9jb2xsYXBzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkIGlzLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9wZW5Db2xsYXBzZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU2hvdyBtb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEdJVEhVQiBMSU5LICovfVxuICAgICAgICAgICAgICAgIHtMaW5rLnVybChwcm9qZWN0LmdpdGh1Yl91cmwpICYmIChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmstY29udGFpbmVyIGV4dGVybmFsLWxpbmstZ2l0aHViIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e0xpbmsudXJsKHByb2plY3QuZ2l0aHViX3VybCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2N0b2NhdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7LyogSE9TVCBMSU5LICovfVxuICAgICAgICAgICAgICAgIHtMaW5rLnVybChwcm9qZWN0Lmhvc3RfdXJsKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rLWNvbnRhaW5lciBleHRlcm5hbC1saW5rLWhvc3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17TGluay51cmwocHJvamVjdC5ob3N0X3VybCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leHRlcm5hbC1saW5rLWFsdCBmYS0yeFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBTRU8gU0NSSVBUICovfVxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLmFkZEpTT05MRChwcm9qZWN0LCBjb250ZW50KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaG5vbG9naWVzLXRhZ3Mge1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2l6ZS1zd2l0Y2gtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyLjhyZW07XG4gICAgICAgICAgICByaWdodDogLS42cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogLjNyZW07XG4gICAgICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogOHJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3ktY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDFyZW0gMXJlbSAtMXJlbSByZ2JhKDEwLDEwLDEwLC4yKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtY29sbGFwc2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXJlbSAxcmVtIC0xcmVtIHJnYmEoMTAsMTAsMTAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5LWl0ZW0ge1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXh0ZXJuYWwtbGluay1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBib3R0b206IDMuM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4dGVybmFsLWxpbmstaG9zdCB7XG4gICAgICAgICAgICByaWdodDogNHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiBoc2woMCwgMCUsIDQ4JSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leHRlcm5hbC1saW5rLWhvc3Q6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMwYTBhMGE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leHRlcm5hbC1saW5rLWdpdGh1YiB7XG4gICAgICAgICAgICByaWdodDogMS4ycmVtOyAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5vY3RvY2F0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL2dpdGh1Yi5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB3aWR0aDozM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OjMzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub2N0b2NhdDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9vY3RvY2F0LnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgLnN0aWNreS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAzcmVtIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SingleProject.jsx */"
      }));
    }
  }]);

  return SingleProject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleProject);

/***/ })

})
//# sourceMappingURL=index.js.9ad21f50b7bc404bdff4.hot-update.js.map