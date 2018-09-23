webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SlideshowGallery.jsx":
/*!*****************************************!*\
  !*** ./components/SlideshowGallery.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var SlideshowGallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SlideshowGallery, _React$Component);

  function SlideshowGallery(props) {
    var _this;

    _classCallCheck(this, SlideshowGallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlideshowGallery).call(this, props));
    _this.state = {
      slideIndex: 0
    };
    _this.plusSlides = _this.plusSlides.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.currentSlide = _this.currentSlide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createSlides = _this.createSlides.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createPreviews = _this.createPreviews.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SlideshowGallery, [{
    key: "plusSlides",
    value: function plusSlides(n) {
      var slideIndex = this.state.slideIndex;

      if (slideIndex + n > 5) {
        this.setState({
          slideIndex: 0
        });
        return;
      }

      if (slideIndex + n < 0) {
        this.setState({
          slideIndex: 5
        });
        return;
      }

      this.setState(function (prevState) {
        return {
          slideIndex: prevState.slideIndex + n
        };
      });
    }
  }, {
    key: "currentSlide",
    value: function currentSlide(n) {
      this.setState({
        slideIndex: n
      });
    }
  }, {
    key: "createSlides",
    value: function createSlides() {
      var slideIndex = this.state.slideIndex;
      var images = this.props.images;
      var slides = [];

      for (var i = 0; i < images.length; i += 1) {
        slides.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          key: i,
          className: "jsx-2859309967" + " " + "fade ".concat(slideIndex === i ? 'swing-out-top-bck' : 'nonactive'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "jsx-2859309967" + " " + "numbertext has-background-white has-text-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, i + 1, "\xA0/ 6"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-2859309967" + " " + "image is-3by2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          alt: "slide-".concat(i + 1),
          className: "jsx-2859309967",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "2859309967",
          css: ".active.jsx-2859309967{display:block;}.nonactive.jsx-2859309967{display:none;}.numbertext.jsx-2859309967{color:#000;font-size:1rem;font-weight:bolder;padding:8px 12px;position:absolute;z-index:20;bottom:-20px;left:20px;background-color:hsl(0,0,86%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.swing-out-top-bck.jsx-2859309967{-webkit-animation:swing-out-top-bck 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;-webkit-animation:swing-out-top-bck-jsx-2859309967 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;animation:swing-out-top-bck-jsx-2859309967 0.45s cubic-bezier(0.600,-0.280,0.735,0.045) reverse both;}@-webkit-keyframes swing-out-top-bck{0%.jsx-2859309967{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%.jsx-2859309967{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@-webkit-keyframes swing-out-top-bck-jsx-2859309967{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}@keyframes swing-out-top-bck-jsx-2859309967{0%{-webkit-transform:rotateX(0deg);-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:1;}100%{-webkit-transform:rotateX(-100deg);-webkit-transform:rotateX(-100deg);-ms-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENhLEFBR2dDLEFBR0EsQUFHRixBQVlzRixBQUsvRCxBQU9HLEFBU0gsQUFPRyxXQXZDdEIsRUFIbkIsQ0FIQSxZQU9zQixNQWdCZ0IsQUFnQkEsR0FURyxBQWdCQSxVQXRDcEIsaUJBQ0Msa0JBQ1AsV0FDRSxHQU9vRixVQU54RixVQUNxQixFQVdDLEFBZ0JBLFlBVEEsQUFnQkEsZ0JBakNDLENBV0QsQUFnQkEsWUFUQSxBQWdCQSwrREF0Qm5CLEFBZ0JBLFVBZlosQUFnQkEsRUFWWSxBQWdCQSxVQWZaLEFBZ0JBLE9BbkNKLHVEQUlFIiwiZmlsZSI6Ii9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNsYXNzIFNsaWRlc2hvd0dhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzbGlkZUluZGV4OiAwIH07XG4gICAgdGhpcy5wbHVzU2xpZGVzID0gdGhpcy5wbHVzU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcGx1c1NsaWRlcyhuKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzbGlkZUluZGV4ICsgbiA+IDUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiAwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gaWYgKHNsaWRlSW5kZXggKyBuIDwgMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzbGlkZUluZGV4OiBwcmV2U3RhdGUuc2xpZGVJbmRleCArIG4sXG4gICAgfSkpO1xuICB9XG4gIFxuICBjdXJyZW50U2xpZGUobikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiBuIH0pO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVzKCkge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmYWRlICR7c2xpZGVJbmRleCA9PT0gaSA/ICdzd2luZy1vdXQtdG9wLWJjaycgOiAnbm9uYWN0aXZlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnRleHQgaGFzLWJhY2tncm91bmQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICZuYnNwOy8gNlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpXX0gYWx0PXtgc2xpZGUtJHtpICsgMX1gfSAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgICAgICAgICAgICAgICBsZWZ0OjIwcHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwLDg2JSk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgY3JlYXRlUHJldmlld3MoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHByZXZpZXdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByZXZpZXdzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzbGlkZUluZGV4ID09PSBpID8gJ3ByZXZpZXctYWN0aXZlJyA6ICdwcmV2aWV3LWluYWN0aXZlJ31cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbaV19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3VycmVudFNsaWRlKGkpfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgYWx0PXtgcHJldmlldy0ke2l9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAucHJldmlldy1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmV2aWV3LWluYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXZpZXdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2xpZGVzID0gdGhpcy5jcmVhdGVTbGlkZXMoKTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBTTElERVMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tb2JpbGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU0xJREUgUFJFVklFVyBJVEVNUyAqL31cbiAgICAgICAgPEZhZGUgZGVsYXk9ezE1MDB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12YXJpYWJsZSBpcy0xIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgPEZhZGUgZGVsYXk9ezE3MDB9PlxuICAgICAgICAgIHsvKiBQUkVWSU9VUyBCVVRUT04gKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2IGJ1dHRvblwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygtMSl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHsvKiBORVhUIEJVVFRPTiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQgYnV0dG9uXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKDEpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgLmZhZGUge1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXG4gICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJldixcbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTMuNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6MTU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByZXYge1xuICAgICAgICAgICAgICBsZWZ0OiAzNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAucHJldjpob3ZlcixcbiAgICAgICAgICAgIC5uZXh0OmhvdmVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICAgIC5udW1iZXJ0ZXh0LCAucHJldiwgLm5leHQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3dHYWxsZXJ5O1xuIl19 */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
          __self: this
        })));
      }

      return slides;
    }
  }, {
    key: "createPreviews",
    value: function createPreviews() {
      var _this2 = this;

      var images = this.props.images;
      var slideIndex = this.state.slideIndex;
      var previews = [];

      var _loop = function _loop(i) {
        previews.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          key: i,
          className: "jsx-380949187" + " " + "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("figure", {
          className: "jsx-380949187" + " " + "image is-3by2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: images[i],
          onClick: function onClick() {
            return _this2.currentSlide(i);
          },
          role: "presentation",
          alt: "preview-".concat(i),
          className: "jsx-380949187" + " " + ((slideIndex === i ? 'preview-active' : 'preview-inactive') || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "380949187",
          css: ".preview-active.jsx-380949187{cursor:pointer;}.preview-inactive.jsx-380949187{opacity:.5;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);cursor:pointer;}.preview-inactive.jsx-380949187:hover{-webkit-filter:grayscale(0);-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1;}.column.jsx-380949187{padding:0.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEhhLEFBR2tDLEFBR0osQUFNaUIsQUFLWixXQVZZLElBSGhDLENBY0EsWUFMd0IsV0FMQSxxQ0FNUixVQUNoQixDQU5tQixlQUNuQiIsImZpbGUiOiIvVXNlcnMvaXZhbi9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL1NsaWRlc2hvd0dhbGxlcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jbGFzcyBTbGlkZXNob3dHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2xpZGVJbmRleDogMCB9O1xuICAgIHRoaXMucGx1c1NsaWRlcyA9IHRoaXMucGx1c1NsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQcmV2aWV3cyA9IHRoaXMuY3JlYXRlUHJldmlld3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsdXNTbGlkZXMobikge1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2xpZGVJbmRleCArIG4gPiA1KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGlmIChzbGlkZUluZGV4ICsgbiA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUluZGV4OiA1IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2xpZGVJbmRleDogcHJldlN0YXRlLnNsaWRlSW5kZXggKyBuLFxuICAgIH0pKTtcbiAgfVxuICBcbiAgY3VycmVudFNsaWRlKG4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogbiB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNsaWRlcygpIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2xpZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNsaWRlcy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgZmFkZSAke3NsaWRlSW5kZXggPT09IGkgPyAnc3dpbmctb3V0LXRvcC1iY2snIDogJ25vbmFjdGl2ZSd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJ0ZXh0IGhhcy1iYWNrZ3JvdW5kLXdoaXRlIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAmbmJzcDsvIDZcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTNieTJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXNbaV19IGFsdD17YHNsaWRlLSR7aSArIDF9YH0gLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ub25hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubnVtYmVydGV4dCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgICAgICAgICBib3R0b206IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgbGVmdDoyMHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCw4NiUpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2luZy1vdXQtdG9wLWJjayAwLjQ1cyBjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSByZXZlcnNlIGJvdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNsaWRlcztcbiAgfVxuXG4gIGNyZWF0ZVByZXZpZXdzKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2xpZGVJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwcmV2aWV3cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBwcmV2aWV3cy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c2xpZGVJbmRleCA9PT0gaSA/ICdwcmV2aWV3LWFjdGl2ZScgOiAncHJldmlldy1pbmFjdGl2ZSd9XG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ldfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmN1cnJlbnRTbGlkZShpKX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIGFsdD17YHByZXZpZXctJHtpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgLnByZXZpZXctYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJldmlldy1pbmFjdGl2ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBwcmV2aWV3cztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbG9yIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IHRoaXMuY3JlYXRlU2xpZGVzKCk7XG4gICAgY29uc3QgcHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNvbnRhaW5lclwiPlxuICAgICAgICB7LyogU0xJREVTICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbW9iaWxlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMS41cmVtJyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICB7c2xpZGVzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFNMSURFIFBSRVZJRVcgSVRFTVMgKi99XG4gICAgICAgIDxGYWRlIGRlbGF5PXsxNTAwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmFyaWFibGUgaXMtMSBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuXG4gICAgICAgIDxGYWRlIGRlbGF5PXsxNzAwfT5cbiAgICAgICAgICB7LyogUFJFVklPVVMgQlVUVE9OICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldiBidXR0b25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoLTEpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7LyogTkVYVCBCVVRUT04gKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvblwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGx1c1NsaWRlcygxKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbiAgICAgICAgICAgIC5mYWRlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXYsXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC0zLjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICB6LWluZGV4OjE1O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmV2IHtcbiAgICAgICAgICAgICAgbGVmdDogMzUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICByaWdodDogMzUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgLnByZXY6aG92ZXIsXG4gICAgICAgICAgICAubmV4dDpob3ZlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgICAubnVtYmVydGV4dCwgLnByZXYsIC5uZXh0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93R2FsbGVyeTtcbiJdfQ== */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
          __self: this
        })));
      };

      for (var i = 0; i < images.length; i += 1) {
        _loop(i);
      }

      return previews;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var color = this.props.color;
      var slides = this.createSlides();
      var previews = this.createPreviews();
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2257276291" + " " + "gallery-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          marginBottom: '1.5rem'
        },
        className: "jsx-2257276291" + " " + "columns is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          padding: 0
        },
        className: "jsx-2257276291" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, slides)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2257276291" + " " + "columns is-variable is-1 is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, previews)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        delay: 1700,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        style: {
          backgroundColor: color
        },
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(-1);
        },
        className: "jsx-2257276291" + " " + "prev button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2257276291" + " " + "fas fa-angle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        style: {
          backgroundColor: color
        },
        type: "button",
        onClick: function onClick() {
          return _this3.plusSlides(1);
        },
        className: "jsx-2257276291" + " " + "next button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
        className: "jsx-2257276291" + " " + "fas fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2257276291",
        css: ".gallery-container.jsx-2257276291{position:relative;margin-top:10px;}.fade.jsx-2257276291{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;-webkit-animation-name:fade-jsx-2257276291;animation-name:fade-jsx-2257276291;-webkit-animation-duration:1.5s;animation-duration:1.5s;}@-webkit-keyframes fade{from.jsx-2257276291{opacity:.4;}to.jsx-2257276291{opacity:1;}}@-webkit-keyframes fade-jsx-2257276291{from{opacity:.4;}to{opacity:1;}}@keyframes fade-jsx-2257276291{from{opacity:.4;}to{opacity:1;}}.prev.jsx-2257276291,.next.jsx-2257276291{cursor:pointer;position:absolute;bottom:-3.5rem;padding:5px 15px;color:white;font-weight:bold;font-size:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:15;opacity:.7;}.prev.jsx-2257276291{left:35%;}.next.jsx-2257276291{right:35%;}.prev.jsx-2257276291:hover,.next.jsx-2257276291:hover{opacity:.8;cursor:pointer;}@media screen and (max-width:769px){.numbertext.jsx-2257276291,.prev.jsx-2257276291,.next.jsx-2257276291{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2xpZGVzaG93R2FsbGVyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUxXLEFBR21DLEFBTVEsQUFPYixBQUNILEFBSUcsQUFDSCxBQUtHLEFBYU4sQUFHQyxBQUtDLEFBTUcsU0FiaEIsQ0F4QmUsQUFLQSxBQXNCZixDQTVCa0IsQUFLQSxBQTRCRCxFQU1mLEVBM0JrQixHQXhCQSxRQThDcEIsRUF4Q2tDLEtBbUJqQixDQXhCakIsY0F5Qm1CLFlBbkJHLEtBb0JSLFlBQ0ssaUJBQ0YsZUFDRSw2QkF0Qk8sd0RBQzFCLEFBc0IyQix5QkFDZixXQUNDLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2l2YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9TbGlkZXNob3dHYWxsZXJ5LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuY2xhc3MgU2xpZGVzaG93R2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNsaWRlSW5kZXg6IDAgfTtcbiAgICB0aGlzLnBsdXNTbGlkZXMgPSB0aGlzLnBsdXNTbGlkZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUHJldmlld3MgPSB0aGlzLmNyZWF0ZVByZXZpZXdzLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbHVzU2xpZGVzKG4pIHtcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNsaWRlSW5kZXggKyBuID4gNSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IDAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBpZiAoc2xpZGVJbmRleCArIG4gPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVJbmRleDogNSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNsaWRlSW5kZXg6IHByZXZTdGF0ZS5zbGlkZUluZGV4ICsgbixcbiAgICB9KSk7XG4gIH1cbiAgXG4gIGN1cnJlbnRTbGlkZShuKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlSW5kZXg6IG4gfSk7XG4gIH1cblxuICBjcmVhdGVTbGlkZXMoKSB7XG4gICAgY29uc3QgeyBzbGlkZUluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNsaWRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzbGlkZXMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YGZhZGUgJHtzbGlkZUluZGV4ID09PSBpID8gJ3N3aW5nLW91dC10b3AtYmNrJyA6ICdub25hY3RpdmUnfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVydGV4dCBoYXMtYmFja2dyb3VuZC13aGl0ZSBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgJm5ic3A7LyA2XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy0zYnkyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VzW2ldfSBhbHQ9e2BzbGlkZS0ke2kgKyAxfWB9IC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubm9uYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm51bWJlcnRleHQge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6MjBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAsODYlKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zd2luZy1vdXQtdG9wLWJjayB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctb3V0LXRvcC1iY2sgMC40NXMgY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSkgcmV2ZXJzZSBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHN3aW5nLW91dC10b3AtYmNrIDAuNDVzIGN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpIHJldmVyc2UgYm90aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nLW91dC10b3AtYmNrIHtcbiAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3dpbmctb3V0LXRvcC1iY2sge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzbGlkZXM7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3cygpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcHJldmlld3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcHJldmlld3MucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtM2J5MlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlSW5kZXggPT09IGkgPyAncHJldmlldy1hY3RpdmUnIDogJ3ByZXZpZXctaW5hY3RpdmUnfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jdXJyZW50U2xpZGUoaSl9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBhbHQ9e2BwcmV2aWV3LSR7aX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIC5wcmV2aWV3LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByZXZpZXctaW5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlld3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbGlkZXMgPSB0aGlzLmNyZWF0ZVNsaWRlcygpO1xuICAgIGNvbnN0IHByZXZpZXdzID0gdGhpcy5jcmVhdGVQcmV2aWV3cygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS1jb250YWluZXJcIj5cbiAgICAgICAgey8qIFNMSURFUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW1vYmlsZVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEuNXJlbScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBTTElERSBQUkVWSUVXIElURU1TICovfVxuICAgICAgICA8RmFkZSBkZWxheT17MTUwMH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZhcmlhYmxlIGlzLTEgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cblxuICAgICAgICA8RmFkZSBkZWxheT17MTcwMH0+XG4gICAgICAgICAgey8qIFBSRVZJT1VTIEJVVFRPTiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYgYnV0dG9uXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5wbHVzU2xpZGVzKC0xKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgey8qIE5FWFQgQlVUVE9OICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dCBidXR0b25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsdXNTbGlkZXMoMSl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKiBGYWRpbmcgYW5pbWF0aW9uICovXG4gICAgICAgICAgICAuZmFkZSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IC40fSBcbiAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmV2LFxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAtMy41cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgei1pbmRleDoxNTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJldiB7XG4gICAgICAgICAgICAgIGxlZnQ6IDM1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgcmlnaHQ6IDM1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2OmhvdmVyLFxuICAgICAgICAgICAgLm5leHQ6aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgICAgLm51bWJlcnRleHQsIC5wcmV2LCAubmV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0dhbGxlcnk7XG4iXX0= */\n/*@ sourceURL=/Users/ivan/Desktop/portfolio/components/SlideshowGallery.jsx */",
        __self: this
      }));
    }
  }]);

  return SlideshowGallery;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SlideshowGallery);

/***/ })

})
//# sourceMappingURL=index.js.40f7f35a7c9efc81a83e.hot-update.js.map