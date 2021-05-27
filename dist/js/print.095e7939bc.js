(self["webpackChunkwebpack_demo2"] = self["webpackChunkwebpack_demo2"] || []).push([["print"],{

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable no-console */


function print() {
  console.log('print3');
  console.log('module', module);
  return 'aa3';
}

var nowTime = Date().now();
var nowDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(nowTime).format();
console.log('nowDate', nowDate);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (print);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90"], () => (__webpack_exec__("./src/js/print.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);