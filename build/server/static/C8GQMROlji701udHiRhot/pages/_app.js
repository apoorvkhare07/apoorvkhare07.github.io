module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qbum");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jd+m");
/* harmony import */ var _redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("efsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_src_assets_image_crypto_MICA_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QzYW");
/* harmony import */ var _common_src_assets_image_crypto_MICA_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_crypto_MICA_svg__WEBPACK_IMPORTED_MODULE_4__);





var DEFAULT_SEO = {
  title: 'Meet MICA - My Intelligent Compliance Assistant!',
  description: 'Here to make compliance teams ridiculously efficient! Helping compliance teams do what they do best - only faster, cheaper, smarter and easier.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.meetmica.io',
    title: 'Meet MICA - My Intelligent Compliance Assistant!',
    description: 'Here to make compliance teams ridiculously efficient! Helping compliance teams do what they do best - only faster, cheaper, smarter and easier.',
    image: _common_src_assets_image_crypto_MICA_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    site_name: 'meetmica.io',
    imageWidth: 1200,
    imageHeight: 1200 // ,twitter: {
    //   handle: '@garmeeh',
    //   cardType: 'summary_large_image'
    // }

  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__["Modal"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_3___default.a, {
    config: DEFAULT_SEO
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps));
});

/***/ }),

/***/ "QzYW":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA3IiBoZWlnaHQ9IjEwNyIgdmlld0JveD0iMCAwIDMwNyAxMDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpkYXJrZW4iIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTgxLjU2IDYuOEM4My4wOCA2LjggODQuMjQgNy4yOCA4NS4wNCA4LjI0Qzg1LjkyIDkuMTIgODYuMzYgMTAuMzIgODYuMzYgMTEuODRWODcuOEM4Ni4zNiA4OS4yNCA4NS45NiA5MC40IDg1LjE2IDkxLjI4Qzg0LjM2IDkyLjE2IDgzLjI0IDkyLjYgODEuOCA5Mi42QzgwLjM2IDkyLjYgNzkuMjggOTIuMTYgNzguNTYgOTEuMjhDNzcuODQgOTAuNCA3Ny40OCA4OS4yNCA3Ny40OCA4Ny44VjI2LjQ4TDUxLjQ0IDc2LjRDNTAuMzIgNzguNzIgNDguNjggNzkuODggNDYuNTIgNzkuODhDNDQuNDQgNzkuODggNDIuOCA3OC43MiA0MS42IDc2LjRMMTUuNDQgMjcuMDhWODcuOEMxNS40NCA4OS4yNCAxNS4wNCA5MC40IDE0LjI0IDkxLjI4QzEzLjUyIDkyLjE2IDEyLjQ0IDkyLjYgMTEgOTIuNkM5LjU2IDkyLjYgOC40NCA5Mi4xNiA3LjY0IDkxLjI4QzYuODQgOTAuNCA2LjQ0IDg5LjI0IDYuNDQgODcuOFYxMS44NEM2LjQ0IDEwLjMyIDYuODggOS4xMiA3Ljc2IDguMjRDOC42NCA3LjI4IDkuODQgNi44IDExLjM2IDYuOEMxMy4zNiA2LjggMTQuOTYgNy45NTk5OSAxNi4xNiAxMC4yOEw0Ni42NCA2OC43Mkw3Ni43NiAxMC4yOEM3Ny40IDkgNzguMDggOC4xMiA3OC44IDcuNjRDNzkuNiA3LjA4IDgwLjUyIDYuOCA4MS41NiA2LjhaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTIuMjU4IDkyLjZDMTEwLjczOCA5Mi42IDEwOS41MzggOTIuMTYgMTA4LjY1OCA5MS4yOEMxMDcuNzc4IDkwLjMyIDEwNy4zMzggODkuMDggMTA3LjMzOCA4Ny41NlYxMS44NEMxMDcuMzM4IDEwLjMyIDEwNy43NzggOS4xMiAxMDguNjU4IDguMjRDMTA5LjUzOCA3LjI4IDExMC43MzggNi44IDExMi4yNTggNi44QzExMy43NzggNi44IDExNC45NzggNy4yOCAxMTUuODU4IDguMjRDMTE2LjczOCA5LjEyIDExNy4xNzggMTAuMzIgMTE3LjE3OCAxMS44NFY4Ny41NkMxMTcuMTc4IDg5LjA4IDExNi43MzggOTAuMzIgMTE1Ljg1OCA5MS4yOEMxMTQuOTc4IDkyLjE2IDExMy43NzggOTIuNiAxMTIuMjU4IDkyLjZaIiBmaWxsPSIjMERCQjZFIi8+CjxwYXRoIGQ9Ik0xNzMuOTIyIDkyLjk2QzE2NS45MjIgOTIuOTYgMTU5LjAwMiA5MS4yNCAxNTMuMTYyIDg3LjhDMTQ3LjMyMiA4NC4yOCAxNDIuODAyIDc5LjI4IDEzOS42MDIgNzIuOEMxMzYuNDgyIDY2LjI0IDEzNC45MjIgNTguNTIgMTM0LjkyMiA0OS42NEMxMzQuOTIyIDQwLjg0IDEzNi40ODIgMzMuMiAxMzkuNjAyIDI2LjcyQzE0Mi44MDIgMjAuMTYgMTQ3LjMyMiAxNS4xNiAxNTMuMTYyIDExLjcyQzE1OS4wMDIgOC4xOTk5OSAxNjUuOTIyIDYuNDM5OTkgMTczLjkyMiA2LjQzOTk5QzE3OS4yODIgNi40Mzk5OSAxODQuMzIyIDcuMzE5OTkgMTg5LjA0MiA5LjA3OTk5QzE5My44NDIgMTAuNzYgMTk4LjAwMiAxMy4yIDIwMS41MjIgMTYuNEMyMDIuODAyIDE3LjYgMjAzLjQ0MiAxOSAyMDMuNDQyIDIwLjZDMjAzLjQ0MiAyMS43MiAyMDMuMTIyIDIyLjcyIDIwMi40ODIgMjMuNkMyMDEuODQyIDI0LjQgMjAxLjA4MiAyNC44IDIwMC4yMDIgMjQuOEMxOTkuMjQyIDI0LjggMTk4LjA4MiAyNC4zNiAxOTYuNzIyIDIzLjQ4QzE5Mi42NDIgMjAuMjggMTg4LjkyMiAxOC4wNCAxODUuNTYyIDE2Ljc2QzE4Mi4yODIgMTUuNDggMTc4LjQ4MiAxNC44NCAxNzQuMTYyIDE0Ljg0QzE2NC44ODIgMTQuODQgMTU3LjcyMiAxNy44OCAxNTIuNjgyIDIzLjk2QzE0Ny43MjIgMjkuOTYgMTQ1LjI0MiAzOC41MiAxNDUuMjQyIDQ5LjY0QzE0NS4yNDIgNjAuODQgMTQ3LjcyMiA2OS40OCAxNTIuNjgyIDc1LjU2QzE1Ny43MjIgODEuNTYgMTY0Ljg4MiA4NC41NiAxNzQuMTYyIDg0LjU2QzE3OC40MDIgODQuNTYgMTgyLjIwMiA4My45MiAxODUuNTYyIDgyLjY0QzE4OC45MjIgODEuMzYgMTkyLjY0MiA3OS4xMiAxOTYuNzIyIDc1LjkyQzE5OC4wODIgNzUuMDQgMTk5LjI0MiA3NC42IDIwMC4yMDIgNzQuNkMyMDEuMDgyIDc0LjYgMjAxLjg0MiA3NSAyMDIuNDgyIDc1LjhDMjAzLjEyMiA3Ni42IDIwMy40NDIgNzcuNiAyMDMuNDQyIDc4LjhDMjAzLjQ0MiA4MC40IDIwMi44MDIgODEuOCAyMDEuNTIyIDgzQzE5OC4wMDIgODYuMiAxOTMuODQyIDg4LjY4IDE4OS4wNDIgOTAuNDRDMTg0LjMyMiA5Mi4xMiAxNzkuMjgyIDkyLjk2IDE3My45MjIgOTIuOTZaIiBmaWxsPSIjRjFDMjMyIi8+CjxwYXRoIGQ9Ik0yOTIuMDkzIDg2LjM2QzI5Mi40MTMgODcgMjkyLjU3MyA4Ny42OCAyOTIuNTczIDg4LjRDMjkyLjU3MyA4OS42IDI5Mi4wOTMgOTAuNiAyOTEuMTMzIDkxLjRDMjkwLjI1MyA5Mi4yIDI4OS4xNzMgOTIuNiAyODcuODkzIDkyLjZDMjg1Ljg5MyA5Mi42IDI4NC40OTMgOTEuNjQgMjgzLjY5MyA4OS43MkwyNzUuMTczIDcwLjI4SDIyOS45MzNMMjIxLjI5MyA4OS43MkMyMjAuNDkzIDkxLjY0IDIxOS4wOTMgOTIuNiAyMTcuMDkzIDkyLjZDMjE1LjgxMyA5Mi42IDIxNC42OTMgOTIuMiAyMTMuNzMzIDkxLjRDMjEyLjc3MyA5MC41MiAyMTIuMjkzIDg5LjQ4IDIxMi4yOTMgODguMjhDMjEyLjI5MyA4Ny42NCAyMTIuNDUzIDg3IDIxMi43NzIgODYuMzZMMjQ3LjA5MyAxMC4wNEMyNDcuNTczIDguOTIgMjQ4LjI5MyA4LjA4IDI0OS4yNTMgNy41MTk5OUMyNTAuMjEzIDYuOTYgMjUxLjI1MyA2LjY4IDI1Mi4zNzMgNi42OEMyNTMuNTczIDYuNjggMjU0LjY1MyA3IDI1NS42MTMgNy42NEMyNTYuNTczIDguMiAyNTcuMjkzIDkgMjU3Ljc3MyAxMC4wNEwyOTIuMDkzIDg2LjM2Wk0yNzEuNTczIDYyLjEyTDI1Mi40OTMgMTkuMDRMMjMzLjUzMyA2Mi4xMkgyNzEuNTczWiIgZmlsbD0iI0Q3MjA4OSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAuNDQwMDAyIiB5PSIwLjQzOTk5NSIgd2lkdGg9IjMwNi4xMzMiIGhlaWdodD0iMTA2LjUyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeD0iNCIgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "jd+m":
/***/ (function(module, exports) {



/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ })

/******/ });