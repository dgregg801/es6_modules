/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car {\r\n  constructor(id, make, model, year) {\r\n    this.id = id;\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n  }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\nconsole.log(\"Hello World\");\r\n\r\n// TODO\r\n\r\n\r\nconst form = document.getElementById(\"submitForm\");\r\nconst carMakeInput = document.getElementById(\"makeInput\");\r\nconst carModelInput = document.getElementById(\"modelInput\");\r\nconst carYearInput = document.getElementById(\"yearInput\");\r\nconst removeBtn = document.querySelector(\".removeBtn\");\r\nconst ulElement = document.querySelector(\"#wishListContainer > ul\");\r\nconst carMakeDisplay = document.getElementById(\"car-make\");\r\nconst carModelDisplay = document.getElementById(\"car-model\");\r\nconst carYearDisplay = document.getElementById(\"car-year\");\r\n//const firstElement = removeBtn[0];\r\n//console.log (firstElement);\r\n\r\nconsole.log(removeBtn);\r\n\r\nconst newWishList = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\n\r\nform.addEventListener(\"submit\", addCar);\r\n\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\n\r\nfunction showCarDetails(car) {\r\n  carMakeDisplay.textContent = car.make;\r\n  carModelDisplay.textContent = car.model;\r\n  carYearDisplay.textContent = car.year;\r\n\r\n  removeBtn.disabled = false;\r\n  removeBtn.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\nfunction updateDomList() {\r\n  ulElement.innerHTML = \"\";\r\n\r\n  newWishList.list.forEach((element, index, array) => {\r\n    const li = document.createElement(\"li\");\r\n    li.textContent = `${element.make} ${element.model}`;\r\n    li.addEventListener(\"click\", () => {\r\n      showCarDetails(element);\r\n    });\r\n\r\n    ulElement.append(li);\r\n  });\r\n}\r\n\r\n/*function updateDomList() {\r\n    ulElement.innerHTML = \"\";\r\n    for (let i = 0; i < newWishList.list.length; i++) {\r\n        const li = document.createElement(\"li\");\r\n        li.textContent = `${car.make} ${car.model}`;\r\n        li.addEventListener(\"click\", () => {\r\n            showCarDetails(newWishList));\r\n        ulElement.appendChild(li);\r\n    };\r\n}\r\n*/\r\n\r\n//Handling some event that will add a car to the list and update the DOM\r\nfunction addCar(event) {\r\n  event.preventDefault();\r\n  newWishList.add(carMakeInput.value, carModelInput.value, carYearInput.value);\r\n  updateDomList();\r\n}\r\n\r\nfunction removeCar() {\r\n  let carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n  newWishList.remove(carId);\r\n  updateDomList();\r\n\r\n  carMakeDisplay.textContent = \"\";\r\n  carModelDisplay.textContent = \"\";\r\n  carYearDisplay.textContent = \"\";\r\n  removeBtn.disabled = true;\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\r\n\r\nclass WishList {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextId = 0;\r\n  }\r\n\r\n  add(make, model, year) {\r\n    const freshCar = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n\r\n    this.list.push(freshCar);\r\n  }\r\n\r\n  remove(carId) {\r\n    //Find and remove a specific element in an array\r\n    this.list = this.list.filter((car) => {\r\n      return car.id != carId;\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishList);\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;