module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: LOG_IN, LOG_OUT, SET_EMAIL, SET_PASSWORD, SET_USERNAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN\", function() { return LOG_IN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT\", function() { return LOG_OUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_EMAIL\", function() { return SET_EMAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PASSWORD\", function() { return SET_PASSWORD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_USERNAME\", function() { return SET_USERNAME; });\nconst LOG_IN = \"LOG_IN\";\nconst LOG_OUT = \"LOG_OUT\";\nconst SET_EMAIL = \"SET_EMAIL\";\nconst SET_PASSWORD = \"SET_PASSWORD\";\nconst SET_USERNAME = \"SET_USERNAME\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3R5cGVzLmpzPzY1ZmMiXSwibmFtZXMiOlsiTE9HX0lOIiwiTE9HX09VVCIsIlNFVF9FTUFJTCIsIlNFVF9QQVNTV09SRCIsIlNFVF9VU0VSTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsTUFBTSxHQUFHLFFBQWY7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFFQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFFQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFFQSxNQUFNQyxZQUFZLEdBQUcsY0FBckIiLCJmaWxlIjoiLi9hY3Rpb25zL3R5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExPR19JTiA9IFwiTE9HX0lOXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gXCJMT0dfT1VUXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRfRU1BSUwgPSBcIlNFVF9FTUFJTFwiO1xuXG5leHBvcnQgY29uc3QgU0VUX1BBU1NXT1JEID0gXCJTRVRfUEFTU1dPUkRcIjtcblxuZXhwb3J0IGNvbnN0IFNFVF9VU0VSTkFNRSA9IFwiU0VUX1VTRVJOQU1FXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./actions/types.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-multi-carousel/lib/styles.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick-theme.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\nvar _jsxFileName = \"/home/devwhkang/codestates/first-project-devwhkang/All-of-CS-client/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst AllofCS = ({\n  Component\n}) => {\n  return (//<Provider store={store}></Provider>\n    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(\"meta\", {\n      charSet: \"utf-8\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }\n    }), __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, \"AllofCS\")), __jsx(Component, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }))\n  );\n};\n\nAllofCS.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"].withRedux(AllofCS));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQWxsb2ZDUyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQy9CLFNBQ0k7QUFDQSx1RUFDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFNLGFBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosQ0FESixFQUtJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEo7QUFGSjtBQVVILENBWEQ7O0FBYUFELE9BQU8sQ0FBQ0UsU0FBUixHQUFvQjtBQUNoQkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURqQixDQUFwQjtBQUllQyw0SEFBTyxDQUFDQyxTQUFSLENBQWtCUCxPQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgJ3JlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzJztcblxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuXG5jb25zdCBBbGxvZkNTID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAvLzxQcm92aWRlciBzdG9yZT17c3RvcmV9PjwvUHJvdmlkZXI+XG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkFsbG9mQ1M8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuQWxsb2ZDUy5wcm9wVHlwZXMgPSB7XG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQWxsb2ZDUyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet */ \"./reducers/wallet.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"./reducers/search.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log(\"HYDRATE\", action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  wallet: _wallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  search: _search__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwid2FsbGV0Iiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENDLE9BQUssRUFBRSxDQUFDQyxLQUFLLEdBQUcsRUFBVCxFQUFhQyxNQUFiLEtBQXdCO0FBQzdCLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFdBQUtDLDBEQUFMO0FBQ0VDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLE1BQXZCO0FBQ0EsK0NBQVlELEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0ssT0FBN0I7O0FBQ0Y7QUFDRSxlQUFPTixLQUFQO0FBTEo7QUFPRCxHQVRpQztBQVVsQ08scURBVmtDO0FBV2xDQyx5REFYa0M7QUFZbENDLHlEQUFNQTtBQVo0QixDQUFELENBQW5DO0FBZWVaLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCB3YWxsZXQgZnJvbSAnLi93YWxsZXQnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEhZRFJBVEU6XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSFlEUkFURVwiLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0sXG4gIHVzZXIsXG4gIHdhbGxldCxcbiAgc2VhcmNoLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/search.js":
/*!****************************!*\
  !*** ./reducers/search.js ***!
  \****************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\nconst initialState = {};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zZWFyY2guanM/OTFiMyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsWUFBWSxHQUFHLEVBQXJCOztBQUlQLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdGLFlBQVQsRUFBdUJHLE1BQXZCLEtBQWtDO0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJO0FBQ0ksYUFBT0YsS0FBUDtBQUZSO0FBSUgsQ0FMRDs7QUFPZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9zZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/search.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  isLoggedIn: false,\n  user: null,\n  siginUpData: {\n    email: \"\",\n    username: \"\",\n    password: \"\"\n  },\n  siginInData: {\n    sessionId: null\n  }\n}; // reducer\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"LOG_IN\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        user: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"LOG_OUT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedOut: false,\n        user: null\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_USERNAME\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        siginUpData: _objectSpread(_objectSpread({}, state.siginUpData), {}, {\n          username: action.data\n        })\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_EMAIL\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        siginUpData: _objectSpread(_objectSpread({}, state.siginUpData), {}, {\n          email: action.data\n        })\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_PASSWORD\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        siginUpData: _objectSpread(_objectSpread({}, state.siginUpData), {}, {\n          password: action.data\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJzaWdpblVwRGF0YSIsImVtYWlsIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInNpZ2luSW5EYXRhIiwic2Vzc2lvbklkIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkxPR19JTiIsImRhdGEiLCJMT0dfT1VUIiwiaXNMb2dnZWRPdXQiLCJTRVRfVVNFUk5BTUUiLCJTRVRfRU1BSUwiLCJTRVRfUEFTU1dPUkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBT08sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxZQUFVLEVBQUUsS0FEYztBQUUxQkMsTUFBSSxFQUFFLElBRm9CO0FBRzFCQyxhQUFXLEVBQUU7QUFDWEMsU0FBSyxFQUFFLEVBREk7QUFFWEMsWUFBUSxFQUFFLEVBRkM7QUFHWEMsWUFBUSxFQUFFO0FBSEMsR0FIYTtBQVExQkMsYUFBVyxFQUFFO0FBQ1hDLGFBQVMsRUFBRTtBQURBO0FBUmEsQ0FBckIsQyxDQWFQOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdWLFlBQVQsRUFBdUJXLE1BQXZCLEtBQWtDO0FBQ2hELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLHFEQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRVQsa0JBQVUsRUFBRSxJQUZkO0FBR0VDLFlBQUksRUFBRVMsTUFBTSxDQUFDRztBQUhmOztBQUtGLFNBQUtDLHNEQUFMO0FBQ0UsNkNBQ0tMLEtBREw7QUFFRU0sbUJBQVcsRUFBRSxLQUZmO0FBR0VkLFlBQUksRUFBRTtBQUhSOztBQUtGLFNBQUtlLDJEQUFMO0FBQ0UsNkNBQ0tQLEtBREw7QUFFRVAsbUJBQVcsa0NBQ05PLEtBQUssQ0FBQ1AsV0FEQTtBQUVURSxrQkFBUSxFQUFFTSxNQUFNLENBQUNHO0FBRlI7QUFGYjs7QUFPRixTQUFLSSx3REFBTDtBQUNFLDZDQUNLUixLQURMO0FBRUVQLG1CQUFXLGtDQUNOTyxLQUFLLENBQUNQLFdBREE7QUFFVEMsZUFBSyxFQUFFTyxNQUFNLENBQUNHO0FBRkw7QUFGYjs7QUFPRixTQUFLSywyREFBTDtBQUNFLDZDQUNLVCxLQURMO0FBRUVQLG1CQUFXLGtDQUNOTyxLQUFLLENBQUNQLFdBREE7QUFFVEcsa0JBQVEsRUFBRUssTUFBTSxDQUFDRztBQUZSO0FBRmI7O0FBT0Y7QUFDRSxhQUFPSixLQUFQO0FBdENKO0FBd0NELENBekNEOztBQTJDZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXG4gIFNFVF9VU0VSTkFNRSwgXG4gIFNFVF9QQVNTV09SRCwgXG4gIFNFVF9FTUFJTCwgXG4gIExPR19JTiwgXG4gIExPR19PVVQgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgdXNlcjogbnVsbCxcbiAgc2lnaW5VcERhdGE6IHtcbiAgICBlbWFpbDogXCJcIixcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgfSxcbiAgc2lnaW5JbkRhdGE6IHtcbiAgICBzZXNzaW9uSWQ6IG51bGwsXG4gIH0sXG59O1xuXG4vLyByZWR1Y2VyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9HX0lOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIExPR19PVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRPdXQ6IGZhbHNlLFxuICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9VU0VSTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaWdpblVwRGF0YToge1xuICAgICAgICAgIC4uLnN0YXRlLnNpZ2luVXBEYXRhLFxuICAgICAgICAgIHVzZXJuYW1lOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTRVRfRU1BSUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2lnaW5VcERhdGE6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zaWdpblVwRGF0YSxcbiAgICAgICAgICBlbWFpbDogYWN0aW9uLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgU0VUX1BBU1NXT1JEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNpZ2luVXBEYXRhOiB7XG4gICAgICAgICAgLi4uc3RhdGUuc2lnaW5VcERhdGEsXG4gICAgICAgICAgcGFzc3dvcmQ6IGFjdGlvbi5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./reducers/wallet.js":
/*!****************************!*\
  !*** ./reducers/wallet.js ***!
  \****************************/
/*! exports provided: initialState, addCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCard\", function() { return addCard; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//server에서 넘어오는 데이터 대문자인지 소문자인지 확인하기 \nconst initialState = {\n  cards: [{\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: 'KT',\n    department: ['A/S', '리퍼', '환불부서']\n  }, {\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: 'Apple',\n    department: ['A/S', '리퍼', '환불부서']\n  }, {\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: 'LG',\n    department: ['A/S', '리퍼', '환불부서']\n  }, {\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: 'SKT',\n    department: ['A/S', '리퍼', '환불부서']\n  }, {\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: '다이슨',\n    department: ['A/S', '리퍼', '환불부서']\n  }]\n};\nconst ADD_CARD = 'ADD_CARD';\nconst addCard = {\n  type: ADD_CARD\n};\nconst dummyCard = {\n  id: 2,\n  user: {\n    id: 1,\n    email: 'devwhkang@gmail.com',\n    username: 'kwh'\n  },\n  company: 'Apple',\n  department: 'Service Center'\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_CARD:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cards: [dummyCard, ...state.cards]\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy93YWxsZXQuanM/YTJkYyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjYXJkcyIsImlkIiwidXNlciIsImVtYWlsIiwidXNlcm5hbWUiLCJjb21wYW55IiwiZGVwYXJ0bWVudCIsIkFERF9DQVJEIiwiYWRkQ2FyZCIsInR5cGUiLCJkdW1teUNhcmQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ08sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxPQUFLLEVBQUUsQ0FBQztBQUNKQyxNQUFFLEVBQUUsQ0FEQTtBQUVKQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsV0FBSyxFQUFFLG1CQUZMO0FBR0ZDLGNBQVEsRUFBRTtBQUhSLEtBRkY7QUFPSkMsV0FBTyxFQUFFLElBUEw7QUFRSkMsY0FBVSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxNQUFkO0FBUlIsR0FBRCxFQVNKO0FBQ0NMLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxXQUFLLEVBQUUsbUJBRkw7QUFHRkMsY0FBUSxFQUFFO0FBSFIsS0FGUDtBQU9DQyxXQUFPLEVBQUUsT0FQVjtBQVFDQyxjQUFVLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLE1BQWQ7QUFSYixHQVRJLEVBa0JKO0FBQ0NMLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxXQUFLLEVBQUUsbUJBRkw7QUFHRkMsY0FBUSxFQUFFO0FBSFIsS0FGUDtBQU9DQyxXQUFPLEVBQUUsSUFQVjtBQVFDQyxjQUFVLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLE1BQWQ7QUFSYixHQWxCSSxFQTJCSjtBQUNDTCxNQUFFLEVBQUUsQ0FETDtBQUVDQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsV0FBSyxFQUFFLG1CQUZMO0FBR0ZDLGNBQVEsRUFBRTtBQUhSLEtBRlA7QUFPQ0MsV0FBTyxFQUFFLEtBUFY7QUFRQ0MsY0FBVSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxNQUFkO0FBUmIsR0EzQkksRUFvQ0o7QUFDQ0wsTUFBRSxFQUFFLENBREw7QUFFQ0MsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBRSxDQURGO0FBRUZFLFdBQUssRUFBRSxtQkFGTDtBQUdGQyxjQUFRLEVBQUU7QUFIUixLQUZQO0FBT0NDLFdBQU8sRUFBRSxLQVBWO0FBUUNDLGNBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsTUFBZDtBQVJiLEdBcENJO0FBRGlCLENBQXJCO0FBaURQLE1BQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLE1BQU1DLE9BQU8sR0FBRztBQUNuQkMsTUFBSSxFQUFFRjtBQURhLENBQWhCO0FBSVAsTUFBTUcsU0FBUyxHQUFHO0FBQ2RULElBQUUsRUFBRSxDQURVO0FBRWRDLE1BQUksRUFBRTtBQUNGRCxNQUFFLEVBQUUsQ0FERjtBQUVGRSxTQUFLLEVBQUUscUJBRkw7QUFHRkMsWUFBUSxFQUFFO0FBSFIsR0FGUTtBQU9kQyxTQUFPLEVBQUUsT0FQSztBQVFkQyxZQUFVLEVBQUU7QUFSRSxDQUFsQjs7QUFXQSxNQUFNSyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHYixZQUFULEVBQXVCYyxNQUF2QixLQUFrQztBQUM5QyxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDSSxTQUFLRixRQUFMO0FBQ0ksNkNBQ09LLEtBRFA7QUFFSVosYUFBSyxFQUFFLENBQUNVLFNBQUQsRUFBWSxHQUFHRSxLQUFLLENBQUNaLEtBQXJCO0FBRlg7O0FBSUo7QUFDSSxhQUFPWSxLQUFQO0FBUFI7QUFTSCxDQVZEOztBQVllRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3dhbGxldC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vc2VydmVy7JeQ7IScIOuEmOyWtOyYpOuKlCDrjbDsnbTthLAg64yA66y47J6Q7J247KeAIOyGjOusuOyekOyduOyngCDtmZXsnbjtlZjquLAgXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGNhcmRzOiBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBlbWFpbDogJ2t3aDQ5MjFAZ21haWwuY29tJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnRGV2V2hrYW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueTogJ0tUJyxcbiAgICAgICAgZGVwYXJ0bWVudDogWydBL1MnLCAn66as7Y28JywgJ+2ZmOu2iOu2gOyEnCcsXSxcbiAgICB9LCB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGVtYWlsOiAna3doNDkyMUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgdXNlcm5hbWU6ICdEZXZXaGthbmcnLFxuICAgICAgICB9LFxuICAgICAgICBjb21wYW55OiAnQXBwbGUnLFxuICAgICAgICBkZXBhcnRtZW50OiBbJ0EvUycsICfrpqztjbwnLCAn7ZmY67aI67aA7IScJyxdLFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgZW1haWw6ICdrd2g0OTIxQGdtYWlsLmNvbScsXG4gICAgICAgICAgICB1c2VybmFtZTogJ0Rldldoa2FuZycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhbnk6ICdMRycsXG4gICAgICAgIGRlcGFydG1lbnQ6IFsnQS9TJywgJ+umrO2NvCcsICftmZjrtojrtoDshJwnLF0sXG4gICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBlbWFpbDogJ2t3aDQ5MjFAZ21haWwuY29tJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnRGV2V2hrYW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueTogJ1NLVCcsXG4gICAgICAgIGRlcGFydG1lbnQ6IFsnQS9TJywgJ+umrO2NvCcsICftmZjrtojrtoDshJwnLF0sXG4gICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBlbWFpbDogJ2t3aDQ5MjFAZ21haWwuY29tJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnRGV2V2hrYW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueTogJ+uLpOydtOyKqCcsXG4gICAgICAgIGRlcGFydG1lbnQ6IFsnQS9TJywgJ+umrO2NvCcsICftmZjrtojrtoDshJwnLF0sXG4gICAgfSwgXVxufVxuXG5jb25zdCBBRERfQ0FSRCA9ICdBRERfQ0FSRCc7XG5leHBvcnQgY29uc3QgYWRkQ2FyZCA9IHtcbiAgICB0eXBlOiBBRERfQ0FSRCxcbn1cblxuY29uc3QgZHVtbXlDYXJkID0ge1xuICAgIGlkOiAyLFxuICAgIHVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGVtYWlsOiAnZGV2d2hrYW5nQGdtYWlsLmNvbScsXG4gICAgICAgIHVzZXJuYW1lOiAna3doJyxcbiAgICB9LFxuICAgIGNvbXBhbnk6ICdBcHBsZScsXG4gICAgZGVwYXJ0bWVudDogJ1NlcnZpY2UgQ2VudGVyJyxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHsgICAgICAgIFxuICAgICAgICBjYXNlIEFERF9DQVJEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJkczogW2R1bW15Q2FyZCwgLi4uc3RhdGUuY2FyZHNdLFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/wallet.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\n\n\n\nconst configureStore = () => {\n  const middlewares = [];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFFBQ2ZDLFNBRGUsR0FFZkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZyQjtBQUdBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBVU4sUUFBVixDQUF6QjtBQUNBLFNBQU9JLEtBQVA7QUFDSCxDQVBEOztBQVNBLE1BQU1HLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ1YsY0FBRCxFQUFpQjtBQUMxQ1csT0FBSztBQURxQyxDQUFqQixDQUE3QjtBQUllRixzRUFBZiIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbXTtcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });