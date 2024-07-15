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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar disableFormFields = function disableFormFields(form) {\n  var _iterator = _createForOfIteratorHelper(form.elements),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var element = _step.value;\n      element.disabled = true;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\nvar enableFormFields = function enableFormFields(form) {\n  var _iterator2 = _createForOfIteratorHelper(form.elements),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var element = _step2.value;\n      element.disabled = false;\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n};\nvar nCaptchaProcessor = function nCaptchaProcessor(submit) {\n  var _window;\n  submit.disabled = true;\n  submit.value = (_window = window) !== null && _window !== void 0 && _window.userAccount ? 'Submit' : 'Validate with nCaptcha before Submit';\n};\nfunction checkForChanges(callback) {\n  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;\n  var previousValue = null;\n  setInterval(function () {\n    var _window2, _window2$nCaptchaWall, _window2$nCaptchaWall2;\n    var currentValue = (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$nCaptchaWall = _window2.nCaptchaWallet) === null || _window2$nCaptchaWall === void 0 ? void 0 : (_window2$nCaptchaWall2 = _window2$nCaptchaWall.nCaptcha) === null || _window2$nCaptchaWall2 === void 0 ? void 0 : _window2$nCaptchaWall2.isValid;\n    if (currentValue !== previousValue) {\n      previousValue = currentValue;\n      callback(currentValue);\n    }\n  }, interval);\n}\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  var nCaptcha = document.getElementById('nCaptcha-verification');\n  var nCaptchaFieldInput = document.querySelector('.nCaptcha-transaction-field');\n  var form = nCaptcha.closest('form');\n  if (nCaptchaFieldInput) {\n    disableFormFields(form);\n    var submit = nCaptchaFieldInput.closest('form').querySelector('input[type=\"submit\"]');\n    nCaptchaProcessor(submit);\n  }\n  if (nCaptcha) {\n    var _nCaptcha$closest;\n    window.initNCaptcha();\n    var _submit = nCaptcha.closest('form').querySelector('input[type=\"submit\"]');\n    var transactionField = nCaptcha === null || nCaptcha === void 0 ? void 0 : (_nCaptcha$closest = nCaptcha.closest('form')) === null || _nCaptcha$closest === void 0 ? void 0 : _nCaptcha$closest.querySelector('.nCaptcha-transaction-field');\n    var checkNcaptchaAvailability = setInterval(function () {\n      if (window.nCaptchaWallet && window.nCaptchaWallet.nCaptcha) {\n        clearInterval(checkNcaptchaAvailability);\n        checkForChanges(function (newValue) {\n          if (newValue === true) {\n            enableFormFields(form);\n            _submit.value = 'Submit';\n            _submit.disabled = '';\n            if (transactionField) {\n              var _window3, _window3$nCaptchaWall, _window3$nCaptchaWall2;\n              transactionField.value = (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$nCaptchaWall = _window3.nCaptchaWallet) === null || _window3$nCaptchaWall === void 0 ? void 0 : (_window3$nCaptchaWall2 = _window3$nCaptchaWall.nCaptcha) === null || _window3$nCaptchaWall2 === void 0 ? void 0 : _window3$nCaptchaWall2.transaction;\n            }\n          }\n        });\n      }\n    }, 100);\n  }\n  document.addEventListener('wpcf7mailsent', function () {\n    disableFormFields(form);\n    window.initNCaptcha();\n  }, false);\n});\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app.js */\"./app.js\");\n\n\n//# sourceURL=webpack:///multi_./app.js?");

/***/ })

/******/ });