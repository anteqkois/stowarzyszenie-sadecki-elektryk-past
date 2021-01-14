/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://stowarzyszenie-sadecki-elektryk/./src/components/button/button.js?");

/***/ }),

/***/ "./src/components/darkMode/darkMode.js":
/*!*********************************************!*\
  !*** ./src/components/darkMode/darkMode.js ***!
  \*********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://stowarzyszenie-sadecki-elektryk/./src/components/darkMode/darkMode.js?");

/***/ }),

/***/ "./src/components/hamburgerMenu/hamburgerMenu.js":
/*!*******************************************************!*\
  !*** ./src/components/hamburgerMenu/hamburgerMenu.js ***!
  \*******************************************************/
/***/ (() => {

eval("var hamburger = document.querySelector(\".hamburger\");\nvar menu = document.querySelector(\".menu\");\nvar navBackground = document.querySelector(\".nav__background\");\n\nvar activeClass = function activeClass() {\n  console.log(this);\n  var nameOfElement = this.classList[0];\n  var activeClass = nameOfElement + '--active';\n  this.classList.toggle(activeClass);\n};\n\nhamburger.addEventListener(\"click\", activeClass, activeClass.bind(menu));\nhamburger.addEventListener(\"click\", activeClass.bind(menu));\nhamburger.addEventListener(\"click\", activeClass.bind(navBackground));\n\n//# sourceURL=webpack://stowarzyszenie-sadecki-elektryk/./src/components/hamburgerMenu/hamburgerMenu.js?");

/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://stowarzyszenie-sadecki-elektryk/./src/components/menu/menu.js?");

/***/ }),

/***/ "./src/components/project/project.js":
/*!*******************************************!*\
  !*** ./src/components/project/project.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPositionProject\": () => /* binding */ addPositionProject\n/* harmony export */ });\nvar addPositionProject = function addPositionProject() {\n  var project = document.querySelectorAll('.project__wrapper');\n\n  for (var element = 0; element < project.length; element++) {\n    var child = project[element];\n    element % 2 === 0 ? child.classList.add('project__wrapper-right') : child.classList.add('project__wrapper-left');\n  }\n};\naddPositionProject();\nvar projects = [{\n  id: 1,\n  title: 'hello from JavaScipt',\n  date: '13.03.2003',\n  description: ' 1 laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'\n}, {\n  id: 2,\n  title: 'hello from JavaScipt',\n  date: '13.03.2003',\n  description: ' 2 laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'\n}, {\n  id: 3,\n  title: 'hello from JavaScipt',\n  date: '13.03.2003',\n  description: ' 3 laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'\n}, {\n  id: 4,\n  title: 'hello from JavaScipt',\n  date: '13.03.2003',\n  description: ' 4 laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'\n}, {\n  id: 5,\n  title: 'hello from JavaScipt',\n  date: '13.03.2003',\n  description: ' 5 laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'\n}];\n\nvar searchId = function searchId(id) {\n  return projects.find(function (item) {\n    return item.id === id;\n  });\n};\n\nfunction moreOfProject() {\n  this.parentElement.parentElement.classList.add('project--active');\n}\n\ndocument.querySelectorAll('.project__button').forEach(function (button) {\n  return button.addEventListener('click', moreOfProject);\n});\n\n//# sourceURL=webpack://stowarzyszenie-sadecki-elektryk/./src/components/project/project.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu/menu.js */ \"./src/components/menu/menu.js\");\n/* harmony import */ var _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_menu_menu_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_hamburgerMenu_hamburgerMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hamburgerMenu/hamburgerMenu.js */ \"./src/components/hamburgerMenu/hamburgerMenu.js\");\n/* harmony import */ var _components_hamburgerMenu_hamburgerMenu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_hamburgerMenu_hamburgerMenu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button/button.js */ \"./src/components/button/button.js\");\n/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_button_button_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_darkMode_darkMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/darkMode/darkMode.js */ \"./src/components/darkMode/darkMode.js\");\n/* harmony import */ var _components_darkMode_darkMode_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_darkMode_darkMode_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_project_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project/project.js */ \"./src/components/project/project.js\");\n/* harmony import */ var _php_allProjects_php__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./php/allProjects.php */ \"./src/php/allProjects.php\");\n\n\n\n\n\n\n\nvar xhr = new XMLHttpRequest();\nvar projects = document.querySelector('.projects-wrapper');\n\nxhr.onload = function () {\n  if (this.status === 200) {\n    projects.innerHTML += xhr.responseText;\n    (0,_components_project_project_js__WEBPACK_IMPORTED_MODULE_4__.addPositionProject)();\n  } else {\n    console.warn('Did not recive 200 OK from response');\n  }\n};\n\nxhr.open('get', './php/allProjects.php');\nxhr.send();\nconsole.log('hello');\nconsole.log('hello');\nconsole.log('hello');\nconsole.log('hello');\nconsole.log('hello');\nconsole.log('hello');\n\n//# sourceURL=webpack://stowarzyszenie-sadecki-elektryk/./src/projects.js?");

/***/ }),

/***/ "./src/php/allProjects.php":
/*!*********************************!*\
  !*** ./src/php/allProjects.php ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"php/allProjects.php\");\n\n//# sourceURL=webpack://stowarzyszenie-sadecki-elektryk/./src/php/allProjects.php?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/projects.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;