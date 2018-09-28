/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/jquery_lite.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(html_array) {\n    this.html_array = html_array;\n  }\n\n  html(str){\n    if (str){\n      this.html_array.forEach(el => el.innerHTML = str);\n    }\n    else {\n      return this.html_array[0].innerHTML; // check when def root\n    }\n  }\n\n  empty() {\n    this.html('');\n  }\n\n  append(arg){\n    this.html_array.forEach(el => {\n      let text = el.innerHTML;\n      el.innerHTML = text + arg;\n    });\n  }\n\n  addClass(value){\n    // this.html_array.forEach(el => el.className += ` ${value}`);\n    this.attr('className', value);/// how could you pass the classname making sense\n  }\n\n  atrr(atrr, value) {\n    this.html_array.forEach(el => el[attr] = value);\n  }\n\n  removeClass(value) {\n    //gotta find this first (missing code)\n  this.html_array.forEach(el => el.className = null );\n  }\n\n  children(){\n    let result = [];\n    this.html_array.forEach(el => result.push(el.children) );\n    return new DOMNodeCollection(result);\n  }\n\n  parent(){\n    let result = [];\n    this.html_array.forEach(el => result.push(el.parentElement) );\n    return new DOMNodeCollection(result);\n  }\n\n  find(arg) {\n    this.children().html_array.filter((el) => el.prototype === arg.prototype);\n  }\n\n  remove() {\n    // this.empty();\n    // this.html_array\n  }\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/jquery_lite.js":
/*!****************************!*\
  !*** ./lib/jquery_lite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nfunction $l(selector) {\n\n  if (selector instanceof HTMLElement) {\n     return new DOMNodeCollection([selector]);\n   } else if (selector.constructor.name === 'String') {\n     let element = document.querySelectorAll(selector);\n     return new DOMNodeCollection(Array.from(element));\n   }\n   return null;\n}\n\nwindow.$l = $l\n\n\n//# sourceURL=webpack:///./lib/jquery_lite.js?");

/***/ })

/******/ });