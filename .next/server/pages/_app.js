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
/*! exports provided: SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL, LOG_IN, LOG_OUT, SET_EMAIL, SET_PASSWORD, SET_USERNAME, ADD_CARD, TURN_VISIBLE, SAVE_TEMP_DEPT, SHOW_MODAL_SIGNUP, SHOW_MODAL_SIGNIN, HANDLE_CANCLE_BTN, HANDLE_OK_BTN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP\", function() { return SIGN_UP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAIL\", function() { return SIGN_UP_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN\", function() { return LOG_IN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT\", function() { return LOG_OUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_EMAIL\", function() { return SET_EMAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PASSWORD\", function() { return SET_PASSWORD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_USERNAME\", function() { return SET_USERNAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_CARD\", function() { return ADD_CARD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TURN_VISIBLE\", function() { return TURN_VISIBLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SAVE_TEMP_DEPT\", function() { return SAVE_TEMP_DEPT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_MODAL_SIGNUP\", function() { return SHOW_MODAL_SIGNUP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_MODAL_SIGNIN\", function() { return SHOW_MODAL_SIGNIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HANDLE_CANCLE_BTN\", function() { return HANDLE_CANCLE_BTN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HANDLE_OK_BTN\", function() { return HANDLE_OK_BTN; });\n//userAction\nconst SIGN_UP = \"SIGN_UP\";\nconst SIGN_UP_SUCCESS = \"SIGN_UP_SUCCESS\";\nconst SIGN_UP_FAIL = \" SIGN_UP_FAIL\";\nconst LOG_IN = \"LOG_IN\";\nconst LOG_OUT = \"LOG_OUT\";\nconst SET_EMAIL = \"SET_EMAIL\";\nconst SET_PASSWORD = \"SET_PASSWORD\";\nconst SET_USERNAME = \"SET_USERNAME\"; //walletAction\n\nconst ADD_CARD = 'ADD_CARD';\nconst TURN_VISIBLE = \"TURN_VISIBLE\";\nconst SAVE_TEMP_DEPT = \"SAVE_TEMP_DEPT\"; // sign type\n\nconst SHOW_MODAL_SIGNUP = \"SHOW_MODAL_SIGNUP\";\nconst SHOW_MODAL_SIGNIN = \"SHOW_MODAL_SIGNIN\";\nconst HANDLE_CANCLE_BTN = \"HANDLE_CANCLE_BTN\";\nconst HANDLE_OK_BTN = \"HANDLE_OK_BTN\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3R5cGVzLmpzPzY1ZmMiXSwibmFtZXMiOlsiU0lHTl9VUCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTCIsIkxPR19JTiIsIkxPR19PVVQiLCJTRVRfRU1BSUwiLCJTRVRfUEFTU1dPUkQiLCJTRVRfVVNFUk5BTUUiLCJBRERfQ0FSRCIsIlRVUk5fVklTSUJMRSIsIlNBVkVfVEVNUF9ERVBUIiwiU0hPV19NT0RBTF9TSUdOVVAiLCJTSE9XX01PREFMX1NJR05JTiIsIkhBTkRMRV9DQU5DTEVfQlROIiwiSEFORExFX09LX0JUTiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1BLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFPQyxZQUFZLEdBQUcsZUFBdEI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUVBLE1BQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxjQUFyQixDLENBRVA7O0FBQ08sTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRUEsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QixDLENBR1A7O0FBRU8sTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsYUFBYSxHQUFHLGVBQXRCIiwiZmlsZSI6Ii4vYWN0aW9ucy90eXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdXNlckFjdGlvblxuZXhwb3J0IGNvbnN0IFNJR05fVVAgPSBcIlNJR05fVVBcIlxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCJcbmV4cG9ydCBjb25zdCAgU0lHTl9VUF9GQUlMID0gXCIgU0lHTl9VUF9GQUlMXCJcblxuZXhwb3J0IGNvbnN0IExPR19JTiA9IFwiTE9HX0lOXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gXCJMT0dfT1VUXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRfRU1BSUwgPSBcIlNFVF9FTUFJTFwiO1xuXG5leHBvcnQgY29uc3QgU0VUX1BBU1NXT1JEID0gXCJTRVRfUEFTU1dPUkRcIjtcblxuZXhwb3J0IGNvbnN0IFNFVF9VU0VSTkFNRSA9IFwiU0VUX1VTRVJOQU1FXCI7XG5cbi8vd2FsbGV0QWN0aW9uXG5leHBvcnQgY29uc3QgQUREX0NBUkQgPSAnQUREX0NBUkQnO1xuXG5leHBvcnQgY29uc3QgVFVSTl9WSVNJQkxFID0gXCJUVVJOX1ZJU0lCTEVcIjtcblxuZXhwb3J0IGNvbnN0IFNBVkVfVEVNUF9ERVBUID0gXCJTQVZFX1RFTVBfREVQVFwiO1xuXG5cbi8vIHNpZ24gdHlwZVxuXG5leHBvcnQgY29uc3QgU0hPV19NT0RBTF9TSUdOVVAgPSBcIlNIT1dfTU9EQUxfU0lHTlVQXCI7XG5cbmV4cG9ydCBjb25zdCBTSE9XX01PREFMX1NJR05JTiA9IFwiU0hPV19NT0RBTF9TSUdOSU5cIjtcblxuZXhwb3J0IGNvbnN0IEhBTkRMRV9DQU5DTEVfQlROID0gXCJIQU5ETEVfQ0FOQ0xFX0JUTlwiO1xuXG5leHBvcnQgY29uc3QgSEFORExFX09LX0JUTiA9IFwiSEFORExFX09LX0JUTlwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./actions/types.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\nvar _jsxFileName = \"/Users/junhyeong/Desktop/first project/All-of-CS-client/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst AllofCS = ({\n  Component\n}) => {\n  return (//<Provider store={store}></Provider>\n    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(\"meta\", {\n      charSet: \"utf-8\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }\n    }), __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }\n    }, \"\\uBAA8\\uB450\\uC758 \\uACE0\\uAC1D\\uC13C\\uD130\")), __jsx(Component, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }))\n  );\n};\n\nAllofCS.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"].withRedux(AllofCS));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQWxsb2ZDUyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUMvQixTQUNJO0FBQ0EsdUVBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTSxhQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUZKLENBREosRUFLSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxKO0FBRko7QUFVSCxDQVhEOztBQWFBRCxPQUFPLENBQUNFLFNBQVIsR0FBb0I7QUFDaEJELFdBQVMsRUFBRUUsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkM7QUFEakIsQ0FBcEI7QUFJZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsT0FBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cblxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuXG5jb25zdCBBbGxvZkNTID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAvLzxQcm92aWRlciBzdG9yZT17c3RvcmV9PjwvUHJvdmlkZXI+XG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPuuqqOuRkOydmCDqs6DqsJ3shLzthLA8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuQWxsb2ZDUy5wcm9wVHlwZXMgPSB7XG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQWxsb2ZDUyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet */ \"./reducers/wallet.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"./reducers/search.js\");\n/* harmony import */ var _signform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signform */ \"./reducers/signform.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log(\"HYDRATE\", action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  wallet: _wallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  search: _search__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  signform: _signform__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwid2FsbGV0Iiwic2VhcmNoIiwic2lnbmZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNsQ0MsT0FBSyxFQUFFLENBQUNDLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7QUFDN0IsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsV0FBS0MsMERBQUw7QUFDRUMsZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkosTUFBdkI7QUFDQSwrQ0FBWUQsS0FBWixHQUFzQkMsTUFBTSxDQUFDSyxPQUE3Qjs7QUFDRjtBQUNFLGVBQU9OLEtBQVA7QUFMSjtBQU9ELEdBVGlDO0FBVWxDTyxxREFWa0M7QUFXbENDLHlEQVhrQztBQVlsQ0MseURBWmtDO0FBYWxDQyw2REFBUUE7QUFiMEIsQ0FBRCxDQUFuQztBQWdCZWIsMEVBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHdhbGxldCBmcm9tICcuL3dhbGxldCc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoJztcbmltcG9ydCBzaWduZm9ybSBmcm9tICcuL3NpZ25mb3JtJ1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBIWURSQVRFOlxuICAgICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LFxuICB1c2VyLFxuICB3YWxsZXQsXG4gIHNlYXJjaCxcbiAgc2lnbmZvcm0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/search.js":
/*!****************************!*\
  !*** ./reducers/search.js ***!
  \****************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\nconst initialState = {\n  tags: [{\n    id: 1,\n    company: \"KT\"\n  }, {\n    id: 2,\n    company: \"Samsung\"\n  }, {\n    id: 3,\n    company: \"SKT\"\n  }, {\n    id: 4,\n    company: \"다이슨\"\n  }, {\n    id: 5,\n    company: \"Apple\"\n  }, {\n    id: 6,\n    company: \"LG\"\n  }, {\n    id: 7,\n    company: \"대한통운\"\n  }]\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zZWFyY2guanM/OTFiMyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0YWdzIiwiaWQiLCJjb21wYW55IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsTUFBSSxFQUFFLENBQ047QUFDSUMsTUFBRSxFQUFFLENBRFI7QUFFSUMsV0FBTyxFQUFFO0FBRmIsR0FETSxFQUtOO0FBQ0lELE1BQUUsRUFBRSxDQURSO0FBRUlDLFdBQU8sRUFBRTtBQUZiLEdBTE0sRUFTTjtBQUNJRCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxXQUFPLEVBQUU7QUFGYixHQVRNLEVBYU47QUFDSUQsTUFBRSxFQUFFLENBRFI7QUFFSUMsV0FBTyxFQUFFO0FBRmIsR0FiTSxFQWlCTjtBQUNJRCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxXQUFPLEVBQUU7QUFGYixHQWpCTSxFQXFCTjtBQUNJRCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxXQUFPLEVBQUU7QUFGYixHQXJCTSxFQXlCTjtBQUNJRCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxXQUFPLEVBQUU7QUFGYixHQXpCTTtBQURrQixDQUFyQjs7QUFpQ1AsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR0wsWUFBVCxFQUF1Qk0sTUFBdkIsS0FBa0M7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0k7QUFDSSxhQUFPRixLQUFQO0FBRlI7QUFJSCxDQUxEOztBQU9lRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdGFnczogW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGNvbXBhbnk6IFwiS1RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGNvbXBhbnk6IFwiU2Ftc3VuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgY29tcGFueTogXCJTS1RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGNvbXBhbnk6IFwi64uk7J207IqoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBjb21wYW55OiBcIkFwcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBjb21wYW55OiBcIkxHXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBjb21wYW55OiBcIuuMgO2VnO2GteyatFwiLFxuICAgIH1cbiAgICBdXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/search.js\n");

/***/ }),

/***/ "./reducers/signform.js":
/*!******************************!*\
  !*** ./reducers/signform.js ***!
  \******************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  signup: {\n    visible: false\n  },\n  signin: {\n    visible: false\n  }\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SHOW_MODAL_SIGNUP\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signup: {\n          visible: action.data\n        }\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SHOW_MODAL_SIGNIN\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signin: {\n          visible: action.data\n        }\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"HANDLE_CANCLE_BTN\"]:\n      return {\n        signup: {\n          visible: action.data\n        },\n        signin: {\n          visible: action.data\n        }\n      };\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"HANDLE_OK_BTN\"]:\n      return {\n        signup: {\n          visible: action.data\n        },\n        signin: {\n          visible: action.data\n        }\n      };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zaWduZm9ybS5qcz83MWY1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInNpZ251cCIsInZpc2libGUiLCJzaWduaW4iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0hPV19NT0RBTF9TSUdOVVAiLCJkYXRhIiwiU0hPV19NT0RBTF9TSUdOSU4iLCJIQU5ETEVfQ0FOQ0xFX0JUTiIsIkhBTkRMRV9PS19CVE4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBT08sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxRQUFNLEVBQUU7QUFDSkMsV0FBTyxFQUFFO0FBREwsR0FEZ0I7QUFJeEJDLFFBQU0sRUFBRTtBQUNKRCxXQUFPLEVBQUU7QUFETDtBQUpnQixDQUFyQjs7QUFTUCxNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTCxZQUFULEVBQXVCTSxNQUF2QixLQUFrQztBQUM5QyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLQyxnRUFBTDtBQUNBLDZDQUNPSCxLQURQO0FBRUlKLGNBQU0sRUFBQztBQUNIQyxpQkFBTyxFQUFHSSxNQUFNLENBQUNHO0FBRGQ7QUFGWDs7QUFNQSxTQUFLQyxnRUFBTDtBQUNBLDZDQUNPTCxLQURQO0FBRUlGLGNBQU0sRUFBQztBQUNIRCxpQkFBTyxFQUFHSSxNQUFNLENBQUNHO0FBRGQ7QUFGWDs7QUFNQSxTQUFLRSxnRUFBTDtBQUNBLGFBQU07QUFDRlYsY0FBTSxFQUFDO0FBQ0hDLGlCQUFPLEVBQUVJLE1BQU0sQ0FBQ0c7QUFEYixTQURMO0FBSUZOLGNBQU0sRUFBQztBQUNIRCxpQkFBTyxFQUFFSSxNQUFNLENBQUNHO0FBRGI7QUFKTCxPQUFOOztBQVFBLFNBQUtHLDREQUFMO0FBQ0EsYUFBTTtBQUNGWCxjQUFNLEVBQUM7QUFDSEMsaUJBQU8sRUFBRUksTUFBTSxDQUFDRztBQURiLFNBREw7QUFJRk4sY0FBTSxFQUFDO0FBQ0hELGlCQUFPLEVBQUVJLE1BQU0sQ0FBQ0c7QUFEYjtBQUpMLE9BQU47O0FBUUE7QUFDSSxhQUFPSixLQUFQO0FBbENSO0FBb0NILENBckNEOztBQXVDZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9zaWduZm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICAgIFNIT1dfTU9EQUxfU0lHTlVQLCBcbiAgICBTSE9XX01PREFMX1NJR05JTixcbiAgICBIQU5ETEVfT0tfQlROLFxuICAgIEhBTkRMRV9DQU5DTEVfQlROLFxuICAgIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzaWdudXA6IHtcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzaWduaW46IHtcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgfVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFNIT1dfTU9EQUxfU0lHTlVQOlxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNpZ251cDp7XG4gICAgICAgICAgICAgICAgdmlzaWJsZSA6IGFjdGlvbi5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTSE9XX01PREFMX1NJR05JTjpcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzaWduaW46e1xuICAgICAgICAgICAgICAgIHZpc2libGUgOiBhY3Rpb24uZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgSEFORExFX0NBTkNMRV9CVE46XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHNpZ251cDp7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2lnbmluOntcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgICAgIGNhc2UgSEFORExFX09LX0JUTjpcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgc2lnbnVwOntcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaWduaW46e1xuICAgICAgICAgICAgICAgIHZpc2libGU6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdCA6IFxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/signform.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  isLoggedIn: false,\n  user: null,\n  siginUpData: {\n    email: \"\",\n    username: \"\",\n    password: \"\"\n  },\n  siginInData: {\n    sessionId: null\n  }\n}; // reducer\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SIGN_UP\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        siginUpData: _objectSpread(_objectSpread({}, state.siginUpData), {}, {\n          username: action.data,\n          password: action.data\n        })\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"LOG_IN\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        user: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"LOG_OUT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedOut: false,\n        user: null\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_USERNAME\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        siginUpData: _objectSpread(_objectSpread({}, state.siginUpData), {}, {\n          username: action.data\n        })\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_EMAIL\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        siginUpData: _objectSpread(_objectSpread({}, state.siginUpData), {}, {\n          email: action.data\n        })\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_PASSWORD\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        siginUpData: _objectSpread(_objectSpread({}, state.siginUpData), {}, {\n          password: action.data\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJzaWdpblVwRGF0YSIsImVtYWlsIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInNpZ2luSW5EYXRhIiwic2Vzc2lvbklkIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNJR05fVVAiLCJkYXRhIiwiTE9HX0lOIiwiTE9HX09VVCIsImlzTG9nZ2VkT3V0IiwiU0VUX1VTRVJOQU1FIiwiU0VUX0VNQUlMIiwiU0VUX1BBU1NXT1JEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQVFPLE1BQU1BLFlBQVksR0FBRztBQUMxQkMsWUFBVSxFQUFFLEtBRGM7QUFFMUJDLE1BQUksRUFBRSxJQUZvQjtBQUcxQkMsYUFBVyxFQUFFO0FBQ1hDLFNBQUssRUFBRSxFQURJO0FBRVhDLFlBQVEsRUFBRSxFQUZDO0FBR1hDLFlBQVEsRUFBRTtBQUhDLEdBSGE7QUFRMUJDLGFBQVcsRUFBRTtBQUNYQyxhQUFTLEVBQUU7QUFEQTtBQVJhLENBQXJCLEMsQ0FhUDs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHVixZQUFULEVBQXVCVyxNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxzREFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVQLG1CQUFXLGtDQUNOTyxLQUFLLENBQUNQLFdBREE7QUFFVEUsa0JBQVEsRUFBRU0sTUFBTSxDQUFDRyxJQUZSO0FBR1RSLGtCQUFRLEVBQUVLLE1BQU0sQ0FBQ0c7QUFIUjtBQUZiOztBQVFGLFNBQUtDLHFEQUFMO0FBQ0UsNkNBQ0tMLEtBREw7QUFFRVQsa0JBQVUsRUFBRSxJQUZkO0FBR0VDLFlBQUksRUFBRVMsTUFBTSxDQUFDRztBQUhmOztBQUtGLFNBQUtFLHNEQUFMO0FBQ0UsNkNBQ0tOLEtBREw7QUFFRU8sbUJBQVcsRUFBRSxLQUZmO0FBR0VmLFlBQUksRUFBRTtBQUhSOztBQUtGLFNBQUtnQiwyREFBTDtBQUNFLDZDQUNLUixLQURMO0FBRUVQLG1CQUFXLGtDQUNOTyxLQUFLLENBQUNQLFdBREE7QUFFVEUsa0JBQVEsRUFBRU0sTUFBTSxDQUFDRztBQUZSO0FBRmI7O0FBT0YsU0FBS0ssd0RBQUw7QUFDRSw2Q0FDS1QsS0FETDtBQUVFUCxtQkFBVyxrQ0FDTk8sS0FBSyxDQUFDUCxXQURBO0FBRVRDLGVBQUssRUFBRU8sTUFBTSxDQUFDRztBQUZMO0FBRmI7O0FBT0YsU0FBS00sMkRBQUw7QUFDRSw2Q0FDS1YsS0FETDtBQUVFUCxtQkFBVyxrQ0FDTk8sS0FBSyxDQUFDUCxXQURBO0FBRVRHLGtCQUFRLEVBQUVLLE1BQU0sQ0FBQ0c7QUFGUjtBQUZiOztBQU9GO0FBQ0UsYUFBT0osS0FBUDtBQS9DSjtBQWlERCxDQWxERDs7QUFvRGVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBTRVRfVVNFUk5BTUUsIFxuICBTRVRfUEFTU1dPUkQsIFxuICBTRVRfRU1BSUwsIFxuICBMT0dfSU4sIFxuICBMT0dfT1VULFxuICBTSUdOX1VQIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHVzZXI6IG51bGwsXG4gIHNpZ2luVXBEYXRhOiB7XG4gICAgZW1haWw6IFwiXCIsXG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH0sXG4gIHNpZ2luSW5EYXRhOiB7XG4gICAgc2Vzc2lvbklkOiBudWxsLFxuICB9LFxufTtcblxuLy8gcmVkdWNlclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNJR05fVVA6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2lnaW5VcERhdGEgOiB7XG4gICAgICAgICAgLi4uc3RhdGUuc2lnaW5VcERhdGEsXG4gICAgICAgICAgdXNlcm5hbWU6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgIHBhc3N3b3JkOiBhY3Rpb24uZGF0YVxuICAgICAgICB9XG4gICAgICB9XG4gICAgY2FzZSBMT0dfSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgTE9HX09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dlZE91dDogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgU0VUX1VTRVJOQU1FOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNpZ2luVXBEYXRhOiB7XG4gICAgICAgICAgLi4uc3RhdGUuc2lnaW5VcERhdGEsXG4gICAgICAgICAgdXNlcm5hbWU6IGFjdGlvbi5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9FTUFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaWdpblVwRGF0YToge1xuICAgICAgICAgIC4uLnN0YXRlLnNpZ2luVXBEYXRhLFxuICAgICAgICAgIGVtYWlsOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBTRVRfUEFTU1dPUkQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2lnaW5VcERhdGE6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5zaWdpblVwRGF0YSxcbiAgICAgICAgICBwYXNzd29yZDogYWN0aW9uLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./reducers/wallet.js":
/*!****************************!*\
  !*** ./reducers/wallet.js ***!
  \****************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //server에서 넘어오는 데이터 대문자인지 소문자인지 확인하기 \n\nconst initialState = {\n  tempDept: '',\n  visible: false,\n  cards: [{\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: 'KT',\n    department: ['A/S', '리퍼', '환불부서']\n  }, {\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: 'Apple',\n    department: ['A/S', '리퍼', '환불부서']\n  }, {\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: 'LG',\n    department: ['A/S', '리퍼', '환불부서']\n  }, {\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: 'SKT',\n    department: ['A/S', '리퍼', '환불부서']\n  }, {\n    id: 1,\n    user: {\n      id: 1,\n      email: 'kwh4921@gmail.com',\n      username: 'DevWhkang'\n    },\n    company: '다이슨',\n    department: ['A/S', '리퍼', '환불부서']\n  }]\n};\nconst dummyCard = {\n  id: 2,\n  user: {\n    id: 1,\n    email: 'devwhkang@gmail.com',\n    username: 'kwh'\n  },\n  company: 'Apple',\n  department: 'Service Center'\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"ADD_CARD\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cards: [dummyCard, ...state.cards]\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"TURN_VISIBLE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        visible: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SAVE_TEMP_DEPT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tempDept: action.date\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy93YWxsZXQuanM/YTJkYyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0ZW1wRGVwdCIsInZpc2libGUiLCJjYXJkcyIsImlkIiwidXNlciIsImVtYWlsIiwidXNlcm5hbWUiLCJjb21wYW55IiwiZGVwYXJ0bWVudCIsImR1bW15Q2FyZCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfQ0FSRCIsIlRVUk5fVklTSUJMRSIsImRhdGEiLCJTQVZFX1RFTVBfREVQVCIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztDQUVBOztBQUNPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsVUFBUSxFQUFFLEVBRGM7QUFFeEJDLFNBQU8sRUFBRSxLQUZlO0FBR3hCQyxPQUFLLEVBQUUsQ0FBQztBQUNKQyxNQUFFLEVBQUUsQ0FEQTtBQUVKQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsV0FBSyxFQUFFLG1CQUZMO0FBR0ZDLGNBQVEsRUFBRTtBQUhSLEtBRkY7QUFPSkMsV0FBTyxFQUFFLElBUEw7QUFRSkMsY0FBVSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxNQUFkO0FBUlIsR0FBRCxFQVNKO0FBQ0NMLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxXQUFLLEVBQUUsbUJBRkw7QUFHRkMsY0FBUSxFQUFFO0FBSFIsS0FGUDtBQU9DQyxXQUFPLEVBQUUsT0FQVjtBQVFDQyxjQUFVLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLE1BQWQ7QUFSYixHQVRJLEVBa0JKO0FBQ0NMLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxXQUFLLEVBQUUsbUJBRkw7QUFHRkMsY0FBUSxFQUFFO0FBSFIsS0FGUDtBQU9DQyxXQUFPLEVBQUUsSUFQVjtBQVFDQyxjQUFVLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLE1BQWQ7QUFSYixHQWxCSSxFQTJCSjtBQUNDTCxNQUFFLEVBQUUsQ0FETDtBQUVDQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsV0FBSyxFQUFFLG1CQUZMO0FBR0ZDLGNBQVEsRUFBRTtBQUhSLEtBRlA7QUFPQ0MsV0FBTyxFQUFFLEtBUFY7QUFRQ0MsY0FBVSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxNQUFkO0FBUmIsR0EzQkksRUFvQ0o7QUFDQ0wsTUFBRSxFQUFFLENBREw7QUFFQ0MsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBRSxDQURGO0FBRUZFLFdBQUssRUFBRSxtQkFGTDtBQUdGQyxjQUFRLEVBQUU7QUFIUixLQUZQO0FBT0NDLFdBQU8sRUFBRSxLQVBWO0FBUUNDLGNBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsTUFBZDtBQVJiLEdBcENJO0FBSGlCLENBQXJCO0FBb0RQLE1BQU1DLFNBQVMsR0FBRztBQUNkTixJQUFFLEVBQUUsQ0FEVTtBQUVkQyxNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFFLENBREY7QUFFRkUsU0FBSyxFQUFFLHFCQUZMO0FBR0ZDLFlBQVEsRUFBRTtBQUhSLEdBRlE7QUFPZEMsU0FBTyxFQUFFLE9BUEs7QUFRZEMsWUFBVSxFQUFFO0FBUkUsQ0FBbEI7O0FBV0EsTUFBTUUsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR1osWUFBVCxFQUF1QmEsTUFBdkIsS0FBa0M7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsdURBQUw7QUFDSSw2Q0FDT0gsS0FEUDtBQUVJVCxhQUFLLEVBQUUsQ0FBQ08sU0FBRCxFQUFZLEdBQUdFLEtBQUssQ0FBQ1QsS0FBckI7QUFGWDs7QUFJSixTQUFLYSwyREFBTDtBQUNJLDZDQUNPSixLQURQO0FBRUlWLGVBQU8sRUFBRVcsTUFBTSxDQUFDSTtBQUZwQjs7QUFJSixTQUFLQyw2REFBTDtBQUNJLDZDQUNPTixLQURQO0FBRUlYLGdCQUFRLEVBQUVZLE1BQU0sQ0FBQ007QUFGckI7O0FBSUo7QUFDSSxhQUFPUCxLQUFQO0FBakJSO0FBbUJILENBcEJEOztBQXNCZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy93YWxsZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBRERfQ0FSRCwgVFVSTl9WSVNJQkxFLCBTQVZFX1RFTVBfREVQVH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuLy9zZXJ2ZXLsl5DshJwg64SY7Ja07Jik64qUIOuNsOydtO2EsCDrjIDrrLjsnpDsnbjsp4Ag7IaM66y47J6Q7J247KeAIO2ZleyduO2VmOq4sCBcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdGVtcERlcHQ6ICcnLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGNhcmRzOiBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBlbWFpbDogJ2t3aDQ5MjFAZ21haWwuY29tJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnRGV2V2hrYW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueTogJ0tUJyxcbiAgICAgICAgZGVwYXJ0bWVudDogWydBL1MnLCAn66as7Y28JywgJ+2ZmOu2iOu2gOyEnCcsXSxcbiAgICB9LCB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGVtYWlsOiAna3doNDkyMUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgdXNlcm5hbWU6ICdEZXZXaGthbmcnLFxuICAgICAgICB9LFxuICAgICAgICBjb21wYW55OiAnQXBwbGUnLFxuICAgICAgICBkZXBhcnRtZW50OiBbJ0EvUycsICfrpqztjbwnLCAn7ZmY67aI67aA7IScJyxdLFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgZW1haWw6ICdrd2g0OTIxQGdtYWlsLmNvbScsXG4gICAgICAgICAgICB1c2VybmFtZTogJ0Rldldoa2FuZycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhbnk6ICdMRycsXG4gICAgICAgIGRlcGFydG1lbnQ6IFsnQS9TJywgJ+umrO2NvCcsICftmZjrtojrtoDshJwnLF0sXG4gICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBlbWFpbDogJ2t3aDQ5MjFAZ21haWwuY29tJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnRGV2V2hrYW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueTogJ1NLVCcsXG4gICAgICAgIGRlcGFydG1lbnQ6IFsnQS9TJywgJ+umrO2NvCcsICftmZjrtojrtoDshJwnLF0sXG4gICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBlbWFpbDogJ2t3aDQ5MjFAZ21haWwuY29tJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnRGV2V2hrYW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGFueTogJ+uLpOydtOyKqCcsXG4gICAgICAgIGRlcGFydG1lbnQ6IFsnQS9TJywgJ+umrO2NvCcsICftmZjrtojrtoDshJwnLF0sXG4gICAgfSwgXSxcbiAgICBcbn1cblxuY29uc3QgZHVtbXlDYXJkID0ge1xuICAgIGlkOiAyLFxuICAgIHVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGVtYWlsOiAnZGV2d2hrYW5nQGdtYWlsLmNvbScsXG4gICAgICAgIHVzZXJuYW1lOiAna3doJyxcbiAgICB9LFxuICAgIGNvbXBhbnk6ICdBcHBsZScsXG4gICAgZGVwYXJ0bWVudDogJ1NlcnZpY2UgQ2VudGVyJyxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHsgICAgICAgIFxuICAgICAgICBjYXNlIEFERF9DQVJEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJkczogW2R1bW15Q2FyZCwgLi4uc3RhdGUuY2FyZHNdLFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFRVUk5fVklTSUJMRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogYWN0aW9uLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBTQVZFX1RFTVBfREVQVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdGVtcERlcHQ6IGFjdGlvbi5kYXRlXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/wallet.js\n");

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