(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/marki.js"],{

/***/ "./components/BackgroundVideo.js":
/*!***************************************!*\
  !*** ./components/BackgroundVideo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tk/Documents/hype/hypemarket/components/BackgroundVideo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var BackgroundVideo = function BackgroundVideo() {
  return __jsx("div", {
    className: "video-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("video", {
    id: "video",
    autoPlay: "autoplay",
    loop: "loop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("source", {
    src: "/cart.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundVideo);

/***/ }),

/***/ "./components/RegisterContent.js":
/*!***************************************!*\
  !*** ./components/RegisterContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tk/Documents/hype/hypemarket/components/RegisterContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var RegisterContent = function RegisterContent(props) {
  return __jsx("div", {
    "class": "register-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterContent);

/***/ }),

/***/ "./components/RegisterHeader.js":
/*!**************************************!*\
  !*** ./components/RegisterHeader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterTitle */ "./components/RegisterTitle.js");
/* harmony import */ var _RegisterLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterLogo */ "./components/RegisterLogo.js");
var _jsxFileName = "/Users/tk/Documents/hype/hypemarket/components/RegisterHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var RegisterHeader = function RegisterHeader(props) {
  return __jsx("div", {
    "class": "register-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_RegisterLogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx(_RegisterTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterHeader);

/***/ }),

/***/ "./components/RegisterLayout.js":
/*!**************************************!*\
  !*** ./components/RegisterLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BackgroundVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackgroundVideo */ "./components/BackgroundVideo.js");
/* harmony import */ var _RegisterHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterHeader */ "./components/RegisterHeader.js");
/* harmony import */ var _RegisterContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterContent */ "./components/RegisterContent.js");
var _jsxFileName = "/Users/tk/Documents/hype/hypemarket/components/RegisterLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var RegisterLayout = function RegisterLayout(props) {
  return __jsx("div", {
    className: "RegisterLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_BackgroundVideo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_RegisterHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_RegisterContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterLayout);

/***/ }),

/***/ "./components/RegisterLogo.js":
/*!************************************!*\
  !*** ./components/RegisterLogo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tk/Documents/hype/hypemarket/components/RegisterLogo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var RegisterLogo = function RegisterLogo() {
  return __jsx("div", {
    className: "main-logo-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("img", {
    id: "main-logo",
    src: "/main_logo.png",
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterLogo);

/***/ }),

/***/ "./components/RegisterTitle.js":
/*!*************************************!*\
  !*** ./components/RegisterTitle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tk/Documents/hype/hypemarket/components/RegisterTitle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var RegisterTitle = function RegisterTitle(props) {
  return __jsx("div", {
    className: "title-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterTitle);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fmarki&absolutePagePath=%2FUsers%2Ftk%2FDocuments%2Fhype%2Fhypemarket%2Fpages%2Fmarki.js!./":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fmarki&absolutePagePath=%2FUsers%2Ftk%2FDocuments%2Fhype%2Fhypemarket%2Fpages%2Fmarki.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/marki", function() {
      var mod = __webpack_require__(/*! ./pages/marki.js */ "./pages/marki.js")
      if(true) {
        module.hot.accept(/*! ./pages/marki.js */ "./pages/marki.js", function() {
          if(!next.router.components["/marki"]) return
          var updatedPage = __webpack_require__(/*! ./pages/marki.js */ "./pages/marki.js")
          next.router.update("/marki", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/marki.js":
/*!************************!*\
  !*** ./pages/marki.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RegisterLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RegisterLayout */ "./components/RegisterLayout.js");
var _jsxFileName = "/Users/tk/Documents/hype/hypemarket/pages/marki.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Marki() {
  return __jsx(_components_RegisterLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Marki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("form", {
    className: "registration-form form-font",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "nazwa:", __jsx("input", {
    type: "text",
    name: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "email:", __jsx("input", {
    type: "text",
    name: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "instagram:", __jsx("input", {
    type: "text",
    name: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "opis:", __jsx("textarea", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("label", {
    id: "download-offer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "pobierz ofert\u0119"), __jsx("input", {
    className: "form-submit form-font",
    type: "submit",
    value: "wy\u015Blij formularz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Marki);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fmarki&absolutePagePath=%2FUsers%2Ftk%2FDocuments%2Fhype%2Fhypemarket%2Fpages%2Fmarki.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fmarki&absolutePagePath=%2FUsers%2Ftk%2FDocuments%2Fhype%2Fhypemarket%2Fpages%2Fmarki.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fmarki&absolutePagePath=%2FUsers%2Ftk%2FDocuments%2Fhype%2Fhypemarket%2Fpages%2Fmarki.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=marki.js.map