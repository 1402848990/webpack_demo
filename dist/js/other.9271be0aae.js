(self["webpackChunkwebpack_demo2"] = self["webpackChunkwebpack_demo2"] || []).push([["other"],{

/***/ "./src/js/other.js":
/*!*************************!*\
  !*** ./src/js/other.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-console */


var obj = {
  herName: 'qian'
};
var objDeep = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(obj);
console.log('objDeep', objDeep);
var nowTime = Date().now();
var nowDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(nowTime).format();
console.log('nowDate', nowDate);

function otherFun() {
  var nameWang = 'wang';
  console.log('nameWang', nameWang);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (otherFun);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90","lodash"], () => (__webpack_exec__("./src/js/other.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);