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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+ACJ":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTkgMzk5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlNlY3VyZSBzdG9yYWdlPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5LjcyLDM0MSwxMzIuNTgsMjI4LjE2bC4xLjEsMjguNzEtNzkuNDdhNTAsNTAsMCwwLDEsMTEuNjYtMTguMzdsMTQuMzUtMTQuMzRhMTYuNjYsMTYuNjYsMCwwLDEsMjMuNTcsMEwzMTUuODEsMjIwLjkybDkuMzctOS4zMmExNi42NywxNi42NywwLDAsMCwuMDYtMjMuNTdsMCwwTDIxMSw3My43NWExNi42NywxNi42NywwLDAsMC0yMy41NiwwaDBMMTczLjA1LDg4LjFhNDkuODksNDkuODksMCwwLDAtMTEuNjYsMTguMzdMMTMyLjY4LDE4NmwtLjEtLjExTDE5LjcyLDI5OC43YTMzLjM0LDMzLjM0LDAsMCwwLTIuMTksNDQuNzNjLjY5LS44MywxLjQxLTEuNjMsMi4xOS0yLjQxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc2LjczLDM5OUE0My4yMyw0My4yMywwLDAsMSw0Ni4xLDM4Ni4zNEwxMi42NiwzNTIuODlhNDMuMzcsNDMuMzcsMCwwLDEsMC02MS4yNUwxMjUuNTIsMTc4Ljc4YTEwLDEwLDAsMCwxLDE0LjEyLDE0LjExTDI2Ljc3LDMwNS43NWEyMy4zOCwyMy4zOCwwLDAsMCwwLDMzbDMzLjQ1LDMzLjQ1YTIzLjM4LDIzLjM4LDAsMCwwLDMzLDBMMjA2LjEsMjU5LjM2YTEwLDEwLDAsMCwxLDE0LjEyLDE0LjExTDEwNy4zNSwzODYuMzRBNDMuMTcsNDMuMTcsMCwwLDEsNzYuNzMsMzk5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTIxOCw2Ni43YTI2LjY2LDI2LjY2LDAsMCwwLTM3LjY3LDBMMTY2LDgxLjA1YTYwLjQ3LDYwLjQ3LDAsMCwwLTE0LDIybC0yOC44LDc5Ljc1YTEwLDEwLDAsMCwwLDIuMzUsMTAuNDdsODAuNTgsODAuMTJhOS45NCw5Ljk0LDAsMCwwLDEwLjQ0LDIuM2w3OS41MS0yOC45M0E2MC40MSw2MC40MSwwLDAsMCwzMTcuODYsMjMzbDE0LjM2LTE0LjI4YTI2LjYzLDI2LjYzLDAsMCwwLC4xLTM3LjY3bC0uMDUtLjA1Wk0zMTguMTUsMjA0LjUyLDMwMy43OSwyMTguOEE0MC4xOCw0MC4xOCwwLDAsMSwyODkuMjUsMjI4TDIxNS43LDI1NC44MWwtNzEuNTgtNzEuMTgsMjYuNjYtNzMuNzdhMzkuOTMsMzkuOTMsMCwwLDEsOS4zNC0xNC43bDE0LjM0LTE0LjM1YTYuNjksNi42OSwwLDAsMSw5LjQ1LDBoMEwzMTguMTYsMTk1LjA1YTYuNjksNi42OSwwLDAsMSwwLDkuNDZsMCwwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEzNi42NSwyNDguMjQsMTEyLjQsMjcyLjQ5YTEwLDEwLDAsMCwwLDE0LjExLDE0LjExbDI0LjI1LTI0LjI2YTEwLDEwLDAsMCwwLTE0LTE0LjE2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTMwMy44MywxMDUuMTRhOS45NCw5Ljk0LDAsMCwwLDcuMDYtMi45MmwzNC4yOC0zNC4yOGExMCwxMCwwLDAsMC0xNC4xMS0xNC4xMUwyOTYuNzgsODguMTFhMTAsMTAsMCwwLDAsNy4wNSwxN1oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zODYuMDUsMTI3LjkybC0zNC4yOSwxMC43MmExMCwxMCwwLDAsMCw2LDE5TDM5MiwxNDdhMTAsMTAsMCwwLDAtNS45NS0xOVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNDcuODcsNTMuNzhhMTAsMTAsMCwwLDAsMTIuNDktNi41M3YwTDI3MS4wOCwxM0ExMCwxMCwwLDAsMCwyNTIsN0wyNDEuMzIsNDEuMjlhMTAsMTAsMCwwLDAsNi41NSwxMi40OVoiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "+ThS":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialDribbbleOutline");

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/Bub":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/data/Crypto/index.js
var Crypto = __webpack_require__("o5DF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/TrustedProof/trustedProof.style.js

var TrustedWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "trustedProofstyle__TrustedWrapper",
  componentId: "sc-1uljofx-0"
})(["padding:180px 0 150px;@media (max-width:1440px){padding:150px 0 50px;}@media (max-width:480px){padding:110px 0 30px;}.colleft{width:40%;@media (max-width:1199px){width:100%;}.TrustedImageBtn{display:flex;img{width:150px;height:47px;}.app_image_area{margin-right:20px;}}}.colright{width:calc(60% - 100px);margin-left:100px;@media (max-width:1199px){width:100%;margin-left:0;margin-top:100px;}}"]);
var FeatureSection = external_styled_components_default.a.section.withConfig({
  displayName: "trustedProofstyle__FeatureSection",
  componentId: "sc-1uljofx-1"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;.featureWrapper{max-width:280px;margin-bottom:45px;display:flex;@media (max-width:599px){max-width:100%;}img{width:50px;height:50px;object-fit:contain;margin-bottom:20px;border-width:2px;border-color:rgb(233,227,254);border-radius:10px;background-color:rgb(243,242,250);padding:8px 10px;}.contextPortion{margin-left:15px;}}"]);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/app.svg
var app = __webpack_require__("Wl9Q");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/playstore.svg
var playstore = __webpack_require__("E4Z+");
var playstore_default = /*#__PURE__*/__webpack_require__.n(playstore);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/TrustedProof/index.js
















var TrustedProof_TrustedHistory = function TrustedHistory(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      btnStyle = _ref.btnStyle,
      sectionSubTitle = _ref.sectionSubTitle,
      cardArea = _ref.cardArea,
      featureTitleStyle = _ref.featureTitleStyle,
      featureDescriptionStyle = _ref.featureDescriptionStyle;
  return external_react_default.a.createElement(TrustedWrapper, {
    id: "trusted"
  }, external_react_default.a.createElement(Container["a" /* default */], {
    noGutter: true,
    mobileGutter: true
  }, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "colleft"
  }, col, {
    style: {
      flexDirection: 'column'
    }
  }), external_react_default.a.createElement(Text["a" /* default */], sectionSubTitle), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], title),
    description: external_react_default.a.createElement(Text["a" /* default */], description)
  }), external_react_default.a.createElement(Fade_default.a, {
    up: true
  }, external_react_default.a.createElement("div", {
    className: "TrustedImageBtn"
  }, external_react_default.a.createElement(link_default.a, {
    href: "#1"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(Image["a" /* default */], {
    src: app_default.a,
    className: "app_image_area",
    alt: "App Image"
  }))), external_react_default.a.createElement(link_default.a, {
    href: "#1"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(Image["a" /* default */], {
    src: playstore_default.a,
    className: "play_image_area",
    alt: "GooglePlay Image"
  })))))), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "colright"
  }, col, cardArea), external_react_default.a.createElement(FeatureSection, null, Crypto["e" /* PROOFS_FEATURE */].map(function (item, index) {
    return external_react_default.a.createElement("div", {
      key: "feature-".concat(index),
      className: "featureWrapper"
    }, external_react_default.a.createElement(Image["a" /* default */], {
      src: item.image,
      alt: item.title
    }), external_react_default.a.createElement(Box["a" /* default */], {
      className: "contextPortion"
    }, external_react_default.a.createElement(Heading["a" /* default */], Object(esm_extends["a" /* default */])({
      as: "h3",
      content: item.title
    }, featureTitleStyle)), external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
      content: item.des
    }, featureDescriptionStyle))));
  }))))));
}; // Transactions style props


// Trusted default style
TrustedProof_TrustedHistory.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Trusted section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center'
  },
  // Trusted section title default style
  title: {
    content: 'A Trusted Proof of Investment Vehicle',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left']
  },
  // Trusted section description default style
  description: {
    content: 'Easily buy, sell or exchange over 30 different cryptocurrencies. Now euro deposits and withdrawn available.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  sectionSubTitle: Object(defineProperty["a" /* default */])({
    content: 'Fast, Cheap, Zero Fraud',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f'
  }, "textAlign", ['left', 'left']),
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left']
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left']
  }
};
/* harmony default export */ var TrustedProof = (TrustedProof_TrustedHistory);

/***/ }),

/***/ "/MbW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rNCn");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(function () {
  return {
    boxSizing: 'border-box'
  };
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "/XES":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("45mK");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Gozm");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "0lL5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/scalable-f7703bdd13c3833dd2840aafb2191841.jpg";

/***/ }),

/***/ "1UEL":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/facebook2");

/***/ }),

/***/ "1v/0":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("U9rZ");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "2ewA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("emby");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("v0mK");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "2lDv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-7217a7a04343614af8b2e46c48acbef3.png";

/***/ }),

/***/ "2qRj":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NzggMzk5Ljk3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzZhNTJmZDt9LmNscy0ze2ZpbGw6IzFhZTViZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPk5ldHdvcmsgRWZmZWN0PC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNS44OCwzNzBBMjAuODgsMjAuODgsMCwwLDEsODUsMzQ5LjA5VjMyNS4zMXMtMzQuNTEtMTcuOTEtMzQuNTEtNDBWMjI1LjU0YTM5LjkxLDM5LjkxLDAsMCwxLDUuMzYtMjBINTAuNWE0MCw0MCwwLDAsMC00MCw0MHY1OS43N2MwLDIyLjA5LDM0LjUxLDQwLDM0LjUxLDQwdjIzLjc4QTIwLjg4LDIwLjg4LDAsMCwwLDY1Ljg4LDM5MEg0MTIuMTJBMjAuODYsMjAuODYsMCwwLDAsNDMzLDM3MFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00MjcuNSwxOTZIMjQ5VjkzLjg5YTEwLDEwLDAsMSwwLTIwLDBWMTk2SDUwLjVDMjIuOTMsMTk2LDAsMjE4LDAsMjQ1LjU0djU5Ljc3YzAsMjIuMTcsMTUsNDEsMzUsNDcuNTN2MTYuMjVBMzAuOTIsMzAuOTIsMCwwLDAsNjUuODgsNDAwSDQxMi4xMkEzMC45MiwzMC45MiwwLDAsMCw0NDMsMzY5LjA5VjM1Mi44NGMyMC02LjU0LDM1LTI1LjM2LDM1LTQ3LjUzVjI0NS41NEM0NzgsMjE4LDQ1NS4wNywxOTYsNDI3LjUsMTk2Wk00MTIuMTIsMzgwSDY1Ljg4QTEwLjg5LDEwLjg5LDAsMCwxLDU1LDM2OS4wOVYzNTVINDIzdjE0LjEyQTEwLjksMTAuOSwwLDAsMSw0MTIuMTIsMzgwWk00NTcsMzA2YTMwLDMwLDAsMCwxLTMwLDMwSDUwYTMwLDMwLDAsMCwxLTMwLTMwVjI0NmEzMCwzMCwwLDAsMSwzMC0zMEg0MjdhMzAsMzAsMCwwLDEsMzAsMzBaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjQwLDEwMy44OUgyMzhhMzMuNjUsMzMuNjUsMCwwLDEtMzMuNjEtMzMuNjFWNjguMjFBMzMuNjUsMzMuNjUsMCwwLDEsMjM4LDM0LjZIMjQwYTMzLjY1LDMzLjY1LDAsMCwxLDMzLjYxLDMzLjYxdjIuMDdBMzMuNjUsMzMuNjUsMCwwLDEsMjQwLDEwMy44OVpNMjM4LDU0LjU5YTEzLjYzLDEzLjYzLDAsMCwwLTEzLjYxLDEzLjYydjIuMDdBMTMuNjMsMTMuNjMsMCwwLDAsMjM4LDgzLjg5SDI0MGExMy42MywxMy42MywwLDAsMCwxMy42MS0xMy42MVY2OC4yMUExMy42MywxMy42MywwLDAsMCwyNDAsNTQuNTlaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzEyLjUsMTEwLjY0YTEwLDEwLDAsMCwxLTctMTcuMTEsMzguMDYsMzguMDYsMCwwLDAsMC01My44MiwxMCwxMCwwLDAsMSwxNC4xMy0xNC4xNSw1OC4wNyw1OC4wNywwLDAsMSwuMDUsODIuMTJsLS4xOS4xN2E5LjksOS45LDAsMCwxLTYuOTMsMi43OVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zNTcuNTEsMTMzLjIzYTEwLDEwLDAsMCwxLTcuMDctMTcuMDcsNzAuMTgsNzAuMTgsMCwwLDAsMC05OS4xMkExMCwxMCwwLDAsMSwzNjQuNTgsMi45YTkwLjIxLDkwLjIxLDAsMCwxLDAsMTI3LjQsMTAsMTAsMCwwLDEtNy4wNywyLjkzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE2NS41LDExMC41N2ExMCwxMCwwLDAsMS03LjA3LTIuOTMsNTguMDcsNTguMDcsMCwwLDEsMC04Mi4xMWw3LjExLDcsNy4wNyw3LjA3YTM4LjA1LDM4LjA1LDAsMCwwLDAsNTMuODJsMCwwYTEwLDEwLDAsMCwxLTcuMDcsMTcuMDdaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTIwLjQ5LDEzMy4yM2E5LjkzLDkuOTMsMCwwLDEtNy4wNy0yLjkzLDkwLjIxLDkwLjIxLDAsMCwxLDAtMTI3LjRBMTAsMTAsMCwwLDEsMTI3LjU2LDE3YTcwLjE5LDcwLjE5LDAsMCwwLDAsOTkuMTMsMTAsMTAsMCwwLDEtNy4wNywxNy4wN1oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik05My4yMywzMDUuNzZhMzEuMTQsMzEuMTQsMCwxLDEsMzEuMTMtMzEuMTMsMzEuMTQsMzEuMTQsMCwwLDEtMzEuMTMsMzEuMTNabTAtNDIuMjdhMTEuMTQsMTEuMTQsMCwxLDAsMTEuMTMsMTEuMTQsMTEuMTQsMTEuMTQsMCwwLDAtMTEuMTMtMTEuMTRaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTczLjkxLDMwNS43NmEzMS4xNCwzMS4xNCwwLDEsMSwzMS4xNC0zMS4xMywzMS4xMywzMS4xMywwLDAsMS0zMS4xNCwzMS4xM1ptMC00Mi4yN2ExMS4xNCwxMS4xNCwwLDEsMCwxMS4xNCwxMS4xNCwxMS4xNCwxMS4xNCwwLDAsMC0xMS4xNC0xMS4xNFoiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "45mK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4cGJ":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjAuMDEgMjk2LjI3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPk5vIGhpZGRlbiBmZWVzPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM3Ny42NiwyMDcuNTEsMzcxLjU1LDE5MWE3OS41MSw3OS41MSwwLDAsMC05OC44Ni0zOC43QTc5LjQ1LDc5LjQ1LDAsMCwxLDQwMS41NSwxNzFsNi4xLDE2LjQ4YTc5LjUxLDc5LjUxLDAsMCwxLTQ5LjIzLDkzLjY0LDc5LjQ5LDc5LjQ5LDAsMCwwLDE5LjI0LTczLjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQyLjM4LDIwNy41MSw0OC40OSwxOTFhNzkuNSw3OS41LDAsMCwxLDk4Ljg1LTM4LjdBNzkuNDMsNzkuNDMsMCwwLDAsMTguNSwxNzFsLTYuMTIsMTYuNDhhNzkuNTIsNzkuNTIsMCwwLDAsNDkuMjQsOTMuNjQsNzkuNDksNzkuNDksMCwwLDEtMTkuMjQtNzMuNjRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDIuMzgsMjA3LjUxLDQ4LjQ5LDE5MWE3OS41LDc5LjUsMCwwLDEsOTguODUtMzguN0E3OS40Myw3OS40MywwLDAsMCwxOC41LDE3MWwtNi4xMiwxNi40OGE3OS41Miw3OS41MiwwLDAsMCw0OS4yNCw5My42NCw3OS40OSw3OS40OSwwLDAsMS0xOS4yNC03My42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTEuMjUsMTc0LjQ2bC0uMTQsMjkuMTZoLjA3YTc4LjkzLDc4LjkzLDAsMCwxLDEwLjI0LTM2LDc5LDc5LDAsMCwwLTEwLjE3LDYuODRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzU1LjM2LDQ2LjVBNTMuMDgsNTMuMDgsMCwwLDAsMzA0LjkyLDEwaDBhNTMuMSw1My4xLDAsMCwwLTQ5LjQyLDMzLjY4QTUzLDUzLDAsMCwxLDI3NC44OSw0MGgwYTUzLjA5LDUzLjA5LDAsMCwxLDUwLjQzLDM2LjQ5bDE5LjMxLDUyLjA2QTc5LjU0LDc5LjU0LDAsMCwxLDQwMS41NSwxNzFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTQuNjgsNzYuNDlBNTMuMDksNTMuMDksMCwwLDEsMTQ1LjExLDQwaDBhNTIuODgsNTIuODgsMCwwLDEsMTkuNDIsMy42OUE1My4wOSw1My4wOSwwLDAsMCwxMTUuMTYsMTBoMEE1My4wOCw1My4wOCwwLDAsMCw2NC42OCw0Ni41TDE4LjUsMTcxYTc5LjUxLDc5LjUxLDAsMCwxLDU2Ljg3LTQyLjQ4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1OC42MSwxNjcuNjFhNzksNzksMCwwLDEsMTAuMzEsMzguODJsLS4xNS0zMmE4MCw4MCwwLDAsMC0xMC4xNi02Ljg1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIxMC4wNywyNjUuNjdhMzYuNywzNi43LDAsMCwxLTE4LjYxLTUuMDdsLTMxLjctMTguNjlhMTAsMTAsMCwwLDEsMTAuMTYtMTcuMjNsMzEuNywxOC42OWExNi42OCwxNi42OCwwLDAsMCwxNi44NiwwbDMyLTE4Ljc0YTEwLDEwLDAsMCwxLDEwLjExLDE3LjI2bC0zMiwxOC43NGEzNi43MywzNi43MywwLDAsMS0xOC41MSw1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTg5LjQ4LDI1OC40M2E1MS42OSw1MS42OSwwLDEsMSw1MS42OC01MS42OSw1MS42OSw1MS42OSwwLDAsMS01MS42OCw1MS42OVptMC04My4zOGEzMS42OSwzMS42OSwwLDEsMCwzMS42OSwzMS42OSwzMS42OSwzMS42OSwwLDAsMC0zMS42OS0zMS42OVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMjkuMzgsMjU4LjQzYTUxLjY5LDUxLjY5LDAsMSwxLDUxLjY5LTUxLjY5LDUxLjY5LDUxLjY5LDAsMCwxLTUxLjY5LDUxLjY5Wm0wLTgzLjM4YTMxLjY5LDMxLjY5LDAsMSwwLDMxLjY5LDMxLjY5LDMxLjY5LDMxLjY5LDAsMCwwLTMxLjY5LTMxLjY5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQxNy4zNCwxODUuMDVsMC0uMDdhODguNzQsODguNzQsMCwwLDAtNi41Ny0xNy44OEwzNjQuOCw0My4xOGE2My4xMyw2My4xMywwLDAsMC0xMjMsMTkuOEwyNDEuNyw4MS4xSDE3OC4zNEwxNzguMjUsNjNhNjMuMTMsNjMuMTMsMCwwLDAtMTIzLTE5Ljc1TDkuMjksMTY3LjEyQTg4LjA4LDg4LjA4LDAsMCwwLDIuNzEsMTg1YS4xNC4xNCwwLDAsMSwwLC4wNnYwQTg5LjQ1LDg5LjQ1LDAsMSwwLDE3OC45LDIwNy44YzAtLjEzLDAtLjI2LDAtLjR2LTFjMC0uMTMsMC0uMjgsMC0uNDFsLS4xMS0yNC44OWg2Mi40MmwtLjEsMjIuNDZjMCwuMjgsMCwuNTYsMCwuODMsMCwuNzYsMCwxLjUzLDAsMi4zNkE4OS40NCw4OS40NCwwLDEsMCw0MTcuMzYsMTg1LjFzMCwwLDAsMFpNMzA0LjkyLDIwYTQzLDQzLDAsMCwxLDQwLjk0LDI5LjYyTDM0Niw1MGwyOS40MSw3OS4yOWE4OS4zMyw4OS4zMywwLDAsMC0xMTQsMjAuODRsLjQxLTg3LjE5QTQzLjIsNDMuMiwwLDAsMSwzMDQuOTIsMjBaTTc0LjA1LDUwYzAtLjEyLjA5LS4yMy4xMy0uMzVhNDMuMTIsNDMuMTIsMCwwLDEsODQuMDcsMTMuMjlsLjQxLDg3LjI1YTg5LjUyLDg5LjUyLDAsMCwwLTExNC0yMC45Wk04OS40OCwyNzYuMTlBNjkuNDYsNjkuNDYsMCwwLDEsMjIsMTkwLjQxbDUuNjctMTUuMzJBNjkuMjMsNjkuMjMsMCwwLDEsODkuNTMsMTM3LjNjMzguMTQsMCw2OS40OSwzMSw2OS40OSw2OS4xN3YuNDFhNjguNjgsNjguNjgsMCwwLDEtNCwyMi45NCw2OS42Miw2OS42MiwwLDAsMS02NS41Niw0Ni4zN1pNMTc4LjcxLDE2MS4xbC0uMjgtNjBoNjMuMThsLS4yOSw2MFpNMzMwLjU2LDI3Ni4xOWE2OS40LDY5LjQsMCwwLDEtNjkuNDUtNjkuMzR2LS4xMWMwLTEsMC0xLjgzLjA2LTIuNjRWMjA0YTY5LjQ1LDY5LjQ1LDAsMCwxLDEzMS4yMi0yOC45MWw1LjY4LDE1LjMyYTY5LjQ5LDY5LjQ5LDAsMCwxLTY3LjUxLDg1Ljc4WiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "5sXw":
/***/ (function(module, exports) {



/***/ }),

/***/ "8k7s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8qGZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dlp7");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rNCn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var DrawerProvider = function DrawerProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DrawerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};

/***/ }),

/***/ "9iZZ":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialLinkedin");

/***/ }),

/***/ "A8vB":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTUwIC01MCkiIHN0eWxlPSJmaWxsOiNmZmFiNDAiPjxzdmcgZmlsbD0iI2ZmYWI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgOTA5LjgzIDEwMTkuMzQiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+MUFzc2V0IDU8L3RpdGxlPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgZGF0YS1uYW1lPSJMYXllciI+PHBhdGggZD0iTTg4Ni45LDU1Ny40NWE3OC4yOCw3OC4yOCwwLDAsMC02My40LTIyLjUyLDgwLjE3LDgwLjE3LDAsMCwwLTg4LTk3LjQ3QTgyLjYzLDgyLjYzLDAsMCwwLDczNy4zNCw0MjBhODIsODIsMCwwLDAtNzMuODYtODEuNTVsMTM5LTEzOUE4MS45NCw4MS45NCwwLDEsMCw2ODYuNjMsODMuNUw0MTIuMDUsMzU4LjA4Yy0xOC42NCwxOC42NC00MS4xMSwzMS41NS02NSwzNy4zNS0xNy45MSw0LjM1LTM2LDQuNC01MC41NS4yOC0xNC4zOC0yMi4zNy0yNy44OC00MC42OC0zMC44LTQ0LjZDMjM2LjA5LDMxMC43LDIwOC44MSwyNjkuNTcsMTc3LDIyMC4yM2MtMzIuNzEtNTAuNjYtNzQuMDYtNzIuNDQtMTEzLjQ2LTU5LjczQzUzLDE2My44OSw0MywxNzAuMDcsMzIuOTIsMTc5LjM4LDE1LjA2LDE5NS45MS0xLjI4LDIxNC40Ni4wOCwyMzguMTVjMSwxOC4xNSwxMS40OCwzNC40MywyNy4yOSw1OS4wNyw5LDEzLjk1LDIwLjA5LDMxLjMyLDMxLjk0LDUzLDcuMTEsMTMuMDUsMTIuNDYsMjYuNTgsMTguMTMsNDAuOTEsMi4yNCw1LjY4LDQuNTcsMTEuNTUsNywxNy40Myw3LjM2LDE3LjYxLDE2LjcxLDQwLjk0LDIzLjgxLDY1LjIxLDExLjcyLDQwLDUuMzYsNzguNDktMS4zNiwxMTkuMi00Ljg1LDI5LjMzLTkuODYsNTkuNjYtOCw5MS40MiwyLjM3LDQwLjE4LDEzLjY2LDgwLjkyLDMzLjU1LDEyMS4wOCwxOC43NSwzNy44Nyw0NC4xNSw3Myw3NS40OSwxMDQuMyw1Ny44NCw1Ny44NCwxMjksOTUuNjQsMjAwLjUsMTA2LjQyYTI2OS44MywyNjkuODMsMCwwLDAsNDAuMjgsMy4xLDIyNS43NCwyMjUuNzQsMCwwLDAsNTkuMjktNy42NmMzMi4zNC04Ljc3LDYwLjItMjQuNjgsODIuOC00Ny4yOEw4MjAuMjIsNzM1aDBsNjYuNjctNjYuNjdBNzguNSw3OC41LDAsMCwwLDg4Ni45LDU1Ny40NVpNNzgwLjgyLDQ4MS41M2E1MC4zMiw1MC4zMiwwLDAsMSwwLDcxLjFsLTQuNzksNC44LDAsMC02Ni42Nyw2Ni42N2gwbC00LjgxLDQuODFhNTAuMjgsNTAuMjgsMCwxLDEtNzEuMTEtNzEuMWwzOC4xNi0zOC4xNiwzOC4xNS0zOC4xNUE1MC4zMyw1MC4zMywwLDAsMSw3ODAuODIsNDgxLjUzWk02NTUuMzksMzY4YTUxLjk0LDUxLjk0LDAsMCwxLDM2LjczLDg4LjY3bC00MS43Nyw0MS43N0w2MTIuMiw1MzYuNjJoMGwtMy42LDMuNjFhNTEuOTQsNTEuOTQsMCwwLDEtNzMuNDYtNzMuNDZsMzUuMzUtMzUuMzZoMGw0OC4xOC00OC4xOEE1MS42MSw1MS42MSwwLDAsMSw2NTUuMzksMzY4Wk01NjkuNjMsOTQzLjE5Yy0zNy41NiwzNy41NS05My4yLDUzLTE1Ni42OCw0My4zOS02NS4xNy05Ljg0LTEzMC40My00NC42My0xODMuNzctOThxLTgtOC0xNS4zNy0xNi4yN2ExNzAuNzYsMTcwLjc2LDAsMCwwLDQ2LjQ3LDYuNiwxNTEuNjQsMTUxLjY0LDAsMCwwLDI1LjQyLTIuMTFjMzguNjEtNi41NSw2OS4yMS0yOC4yMiw4OC40OS02Mi42NkExMi40OCwxMi40OCwwLDEsMCwzNTIuNCw4MDJjLTE1LjY4LDI4LTM5LjUzLDQ0LjkyLTcwLjg4LDUwLjI0LTM2Ljg5LDYuMjYtNzUuNjQtNS4yNi05OS44NS0yMS40MmEzNTAuNDUsMzUwLjQ1LDAsMCwxLTIyLjMxLTM4LjU5Yy0xOC4wOS0zNi41NC0yOC4zNS03My40LTMwLjQ5LTEwOS41NC0xLjY4LTI4LjQxLDIuODUtNTUuNzgsNy42My04NC43Niw3LTQyLjI0LDE0LjItODUuOTEuNTctMTMyLjUxLTcuNTItMjUuNjktMTcuMjctNTAtMjQuOTMtNjguMzYtMi4zNC01LjYtNC42MS0xMS4zNC02LjgtMTYuODktNS43NS0xNC41NC0xMS43LTI5LjU3LTE5LjY5LTQ0LjI0LTEyLjM2LTIyLjY2LTIzLjgyLTQwLjUzLTMzLTU0Ljg5LTEyLjc3LTE5LjkxLTIyLTM0LjMtMjIuNTktNDQuNTgtLjM2LTYuMzUsMi4xMi0xNS40NywyMy4yNi0zNSw2Ljc5LTYuMjksMTMuMTUtMTAuMzMsMTkuNDMtMTIuMzUsMzYuMTYtMTEuNjcsNjcuMzIsMjkuMyw3OSw0Ny40NSwzMi4xNSw0OS44MSw1OS43Myw5MS4zOSw4OS44MSwxMzIuNDFoMGwuMDcuMDljMTUuNDEsMjAuNyw1Ni44Niw4MC42LDYzLjQyLDEwOC43N2ExNSwxNSwwLDEsMCwyOS4yMi02LjhjLTIuNzgtMTEuOTQtOS42My0yNi45My0xOC00Mi4yNGExNDQuMDYsMTQ0LjA2LDAsMCwwLDM3Ljg3LTQuMTVjMjkuMjItNy4wOSw1Ni41OC0yMi43NSw3OS4xMi00NS4yOUw3MDcuODQsMTA0LjcyYTUxLjk0LDUxLjk0LDAsMCwxLDczLjQ2LDczLjQ2TDU5Ny40NSwzNjJsLTgzLjU0LDgzLjUzYTgxLjkxLDgxLjkxLDAsMCwwLDc1LjQ0LDEzOCw4MC4yMyw4MC4yMywwLDAsMCw5Ny40Nyw4OC4xQTc4LjI4LDc4LjI4LDAsMCwwLDcwOS4zNCw3MzVoMGE3OCw3OCwwLDAsMCw0Ni4xMSwyMi4zNlpNODY1LjY5LDY0Ny4xM2wtMzEuMzIsMzEuMzFoMEw3OTksNzEzLjgxYTQ4LjQ3LDQ4LjQ3LDAsMCwxLTY4LjQ2LDBoMGE0OC40Nyw0OC40NywwLDAsMSwwLTY4LjQ2bDY2LjcxLTY2LjcxYTQ4LjQyLDQ4LjQyLDAsMCwxLDY4LjQ0LDY4LjVaIj48L3BhdGg+PHBhdGggZD0iTTI3MywxNjguMUExNSwxNSwwLDEsMCwyOTQuMjcsMTQ3bC03NS03NS43OGExNSwxNSwwLDAsMC0yMS4zMiwyMS4xMVoiPjwvcGF0aD48cGF0aCBkPSJNMzMwLjg2LDEyMi4zM0ExNSwxNSwwLDAsMCwzNDUuNDgsMTM0YTE1LjMxLDE1LjMxLDAsMCwwLDMuMzMtLjM3LDE1LDE1LDAsMCwwLDExLjMxLTE3Ljk1bC0yMy41OC0xMDRhMTUsMTUsMCwxLDAtMjkuMjUsNi42M1oiPjwvcGF0aD48cGF0aCBkPSJNNDEzLjQ2LDEzMy4yMkExNSwxNSwwLDAsMCw0MzIuNTUsMTI0bDM1LTEwMC43M2ExNSwxNSwwLDAsMC0yOC4zNC05Ljg2bC0zNSwxMDAuNzNBMTUsMTUsMCwwLDAsNDEzLjQ2LDEzMy4yMloiPjwvcGF0aD48cGF0aCBkPSJNNDY4LjU0LDE2Ny4wN2ExNSwxNSwwLDAsMCwyMS4wOSwyLjI2bDgzLTY2Ljk0QTE1LDE1LDAsMSwwLDU1My44Miw3OUw0NzAuOCwxNDZBMTUsMTUsMCwwLDAsNDY4LjU0LDE2Ny4wN1oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "ALdH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/theme/crypto/index.js + 1 modules
var theme_crypto = __webpack_require__("Ntdy");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/css/style.js
var style = __webpack_require__("H4oa");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/crypto.style.js
var crypto_style = __webpack_require__("lhSI");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("8qGZ");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Navbar/index.js + 6 modules
var Navbar = __webpack_require__("jjNQ");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/BannerSection/index.js + 1 modules
var BannerSection = __webpack_require__("iAQE");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/BannerSlider/index.js + 4 modules
var BannerSlider = __webpack_require__("QBiV");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Transaction/index.js + 1 modules
var Transaction = __webpack_require__("cYPL");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-countdown-now"
var external_react_countdown_now_ = __webpack_require__("upKs");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Card/index.js
var Card = __webpack_require__("Cgap");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Button/index.js + 4 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/ControlSection3/controlSection.style.js

var ControlWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "controlSectionstyle__ControlWrapper",
  componentId: "wnwvyp-0"
})(["padding:60px 0;display:flex;justify-content:center;align-items:center;margin-top:50px;@media (max-width:1440px){padding:0;}@media (max-width:480px){margin-top:0;}.controlImage{border-radius:50%;}.colleft{width:50%;@media (max-width:1440px){width:50%;}@media (max-width:768px){width:100%;}}.colright{width:calc(50% - 70px);margin-left:70px;display:flex;flex-direction:column;@media (max-width:1440px){width:calc(50% - 70px);}@media (max-width:768px){width:100%;margin-left:0;margin-top:100px;}@media (max-width:480px){margin-top:50px;}.readMoreSection{.readMore{font-size:20px;font-weight:500;font-family:'Poppins';@media (max-width:480px){font-size:16px;}}}.countDownSection{margin-top:30px;.readMore{font-size:20px;font-weight:500;font-family:'Poppins';color:#32325d;@media (max-width:480px){font-size:16px;}}.countPortion{display:flex;.countSingle{display:flex;flex-direction:column;margin-right:0px;font-size:30px;font-weight:700;font-family:'Poppins';color:#32325d;justify-content:center;align-items:center;.countText{font-size:16px;font-weight:400;font-family:'Poppins';color:#525f7f;}}}@media (max-width:480px){display:none;}}.countDownButton{position:relative;margin-top:40px;.countDownMainButton{border-radius:6px;background-image:-moz-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );background-image:-webkit-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );background-image:-ms-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );&:hover{box-shadow:-6.691px 7.431px 20px 0px rgba(255,131,157,0.2);}> span{font-weight:700;letter-spacing:1px;}}.countDownDiscountButton{position:absolute;top:32px;height:34px;min-height:34px;min-width:120px;padding-top:5px;left:73px;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.5);}}}}"]);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/hardesh.png
var hardesh = __webpack_require__("dyaU");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/shubhankar.png
var shubhankar = __webpack_require__("gnd3");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/feature-3.svg
var feature_3 = __webpack_require__("DLzc");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/feature-4.svg
var feature_4 = __webpack_require__("jQLT");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Calendly/index.js
var Calendly = __webpack_require__("bjcY");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/ControlSection3/index.js





















var ControlSection3_Completionist = function Completionist() {
  return external_react_default.a.createElement("span", {
    className: "readMore"
  }, "You are good to go!");
};

var ControlSection3_renderer = function renderer(_ref) {
  var days = _ref.days,
      hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds,
      completed = _ref.completed;

  if (completed) {
    // Render a complete state
    return external_react_default.a.createElement(ControlSection3_Completionist, null);
  } else {
    // Render a countdown
    return external_react_default.a.createElement("div", {
      className: "countPortion"
    }, external_react_default.a.createElement("div", {
      className: "countSingle"
    }, days, " ", external_react_default.a.createElement("span", {
      className: "countText"
    }, "Days")), external_react_default.a.createElement("div", {
      className: "countSingle"
    }, hours, " ", external_react_default.a.createElement("span", {
      className: "countText"
    }, "Hours")), external_react_default.a.createElement("div", {
      className: "countSingle"
    }, minutes, " ", external_react_default.a.createElement("span", {
      className: "countText"
    }, "Minutes")), external_react_default.a.createElement("div", {
      className: "countSingle"
    }, seconds, " ", external_react_default.a.createElement("span", {
      className: "countText"
    }, "Seconds")));
  }
};

var ControlSection3_ControlSection = function ControlSection(_ref2) {
  var row = _ref2.row,
      col = _ref2.col,
      title = _ref2.title,
      title_main = _ref2.title_main,
      title2 = _ref2.title2,
      title3 = _ref2.title3,
      title4 = _ref2.title4,
      description = _ref2.description,
      description2 = _ref2.description2,
      btnStyle = _ref2.btnStyle,
      sectionSubTitle = _ref2.sectionSubTitle,
      cardArea = _ref2.cardArea,
      readMoreTitle = _ref2.readMoreTitle;
  return external_react_default.a.createElement(ControlWrapper, {
    id: "control"
  }, external_react_default.a.createElement(Container["a" /* default */], null, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row, {
    style: {
      paddingLeft: '5vw'
    }
  }), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "colright"
  }, col, cardArea, {
    style: {
      padding: '2vh 5vw 2vh 5vw',
      border: '0.25px solid grey',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      zIndex: '5px',
      width: '40%',
      minWidth: '300px'
    }
  }), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], title2),
    description: external_react_default.a.createElement(Text["a" /* default */], description),
    style: {
      marginLeft: '0px'
    }
  }), external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
    className: "navbar_button",
    style: {
      height: '40px',
      display: 'flex',
      justifyContent: 'center'
    },
    href: "mailto:shubhankar@radicali.io"
  }, external_react_default.a.createElement(Button["a" /* default */], {
    title: "Contact Us",
    style: {
      type: 'button',
      fontSize: '13px',
      fontWeight: '700',
      borderRadius: '4px',
      pr: '15px',
      colors: 'secondaryWithBg',
      minHeight: 'auto',
      height: '40px',
      textAlign: 'center'
    }
  }), "    "))), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "colright"
  }, col, cardArea, {
    style: {
      padding: '2vh 5vw 2vh 5vw',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      zIndex: '5px',
      width: '40%',
      minWidth: '300px'
    }
  }), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], title4),
    description: external_react_default.a.createElement(Text["a" /* default */], description2),
    style: {
      marginLeft: '10px'
    }
  }), external_react_default.a.createElement(Calendly["a" /* default */], {
    style: {
      position: 'relative',
      alignSelf: 'center',
      marginLeft: '10px'
    }
  })))));
}; // Transactions style props


// Transactions default style
ControlSection3_ControlSection.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    mt: '10px',
    mb: '10px',
    textAlign: 'center',
    alignSelf: 'center'
  },
  // Transactions section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: '40%',
    flexBox: true,
    alignSelf: 'center',
    mr: '0px'
  },
  // Transactions section title default style
  title_main: {
    content: 'How MICA Works',
    fontSize: ['24px', '26px', '30px', '30px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '100%'],
    textAlign: ['center', 'center']
  },
  title: {
    content: 'Mail us',
    fontSize: ['24px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '600px'],
    textAlign: ['center', 'center']
  },
  title2: {
    content: 'Mail us',
    fontSize: ['24px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '515px'],
    textAlign: ['center', 'center']
  },
  title3: {
    content: 'Shubhankar Srivastava',
    fontSize: ['24px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '515px'],
    textAlign: ['center', 'center']
  },
  title4: {
    content: 'Schedule a Demo!',
    fontSize: ['24px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '515px'],
    textAlign: ['center', 'center']
  },
  // Transactions section description default style
  description2: {
    content: 'Get a live demo of how we work',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['center', 'center'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  description: {
    content: 'Speak directly with the experts',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['center', 'center'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  description3: {
    content: 'With MICA, leverage the power of AI to automate your impact assessments. Understand how new regulations impact your Policies and Processes via conceptual mapping or by performing gap analyses. Go further and let MICA help you compare regulations against regulations or policies against policies!      ',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  description4: {
    content: 'With MICA, you can amend existing policies or build new ones together, assign tasks & commence new change management projects. You can collaborate on regulatory interpretation & analysis with your team, and also create internal reports for compliance testing.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  sectionSubTitle: Object(defineProperty["a" /* default */])({
    content: 'Effortless crypto for everyone.',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f'
  }, "textAlign", ['left', 'left']),
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  readMoreTitle: {
    content: 'Sale currently on hold. ',
    as: 'span',
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['25px', '27px', '27px', '27px', '27px'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left']
  }
};
/* harmony default export */ var ControlSection3 = (ControlSection3_ControlSection);
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/TrustedProof/index.js + 1 modules
var TrustedProof = __webpack_require__("/Bub");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/ScalableSection/index.js + 1 modules
var ScalableSection = __webpack_require__("QbNj");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/CryptoSlides/index.js + 1 modules
var CryptoSlides = __webpack_require__("fB5O");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/BetaSection3/betaSection.style.js

var BetaSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "betaSectionstyle__BetaSectionWrapper",
  componentId: "sc-1fv6qnz-0"
})(["padding:30px 0 10px;margin-top:100px;width:90%;margin-left:10vw;"]);
var FeatureSection = external_styled_components_default.a.section.withConfig({
  displayName: "betaSectionstyle__FeatureSection",
  componentId: "sc-1fv6qnz-1"
})(["display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;@media (max-width:768px){justify-content:space-between;align-items:flex-start;}.featureWrapper{margin-top:50px;display:flex;@media (max-width:599px){max-width:100%;}img{width:120px;height:100px;object-fit:contain;margin-bottom:20px;border-width:2px;border-color:rgb(233,227,254);border-radius:10px;background-color:rgb(243,242,250);padding:8px 10px;}.contextPortion{margin-left:15px;}}"]);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/BetaSection3/index.js



var _row;









var BetaSection3_BetaSection = function BetaSection(_ref) {
  var row = _ref.row,
      title = _ref.title,
      title2 = _ref.title2,
      button = _ref.button,
      description = _ref.description,
      description2 = _ref.description2,
      description3 = _ref.description3,
      sectionSubTitle = _ref.sectionSubTitle,
      featureTitleStyle = _ref.featureTitleStyle,
      featureDescriptionStyle = _ref.featureDescriptionStyle;
  return external_react_default.a.createElement(BetaSectionWrapper, {
    id: "betasection"
  }, external_react_default.a.createElement(Container["a" /* default */], {
    noGutter: true,
    mobileGutter: true
  }, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    description: external_react_default.a.createElement(Text["a" /* default */], description)
  }), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], title) // description={<Text {...description} />}

  })), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row",
    id: "purpose"
  }, row), external_react_default.a.createElement(FeatureBlock["a" /* default */] // title={<Heading {...title2} />}
  , {
    description: external_react_default.a.createElement(Text["a" /* default */], description2)
  }), external_react_default.a.createElement(FeatureBlock["a" /* default */] // description={<Text {...description3} />}
  , null))));
}; // Transactions style props


// Trusted default style
BetaSection3_BetaSection.defaultProps = {
  // Trusted section row default style
  row: (_row = {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  }, Object(defineProperty["a" /* default */])(_row, "flexBox", true), Object(defineProperty["a" /* default */])(_row, "flexDirection", 'column'), Object(defineProperty["a" /* default */])(_row, "alignSelf", 'center'), Object(defineProperty["a" /* default */])(_row, "justifyContent", 'center'), _row),
  title: {
    content: 'Contact us',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['left', 'left']
  },
  title2: {
    content: 'Our Story',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center']
  },
  description: {
    content: '',
    fontSize: '16px',
    fontWeight: '700',
    color: '#32325d',
    lineHeight: '28px',
    mb: ['5px', '5px', '10px', '10px', '10px'],
    textAlign: ['left', 'left']
  },
  description2: {
    content: ' Have a question? Simply reach out through one of the options below and we will be in touch soon ',
    fontSize: '16px',
    fontWeight: '400',
    whiteSpace: 'pre',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['left', 'left']
  },
  description3: {
    content: 'This is why I left my role as a compliance officer and set out, together with my co-founder Shubhankar, to build something that would tip the scales back in favour of compliance professionals. We spent many months speaking with compliance professionals to understand their biggest pain points and we learnt that what they needed most was a scalable solution that helped improve productivity, reduced their overall compliance spend and helped them focus on more strategic and higher-value tasks. In short, they needed the means to do what they do best - only faster, cheaper and easier. This is why we’ve made it our purpose to help compliance teams become ridiculously efficient at what they do; and today we are fulfilling that purpose through MICA which stands for My Intelligence Compliance Assistant. Today, MICA already helps our clients track, understand and act on regulatory changes more effectively than they ever did before. Tomorrow, MICA will be an indispensable member of every compliance team as she will continue to do more, offer more and generate a higher ROI for our clients.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['left', 'left']
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left']
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left']
  }
};
/* harmony default export */ var BetaSection3 = (BetaSection3_BetaSection);
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Footer/index.js + 3 modules
var Footer = __webpack_require__("ZU6y");

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");
var external_next_seo_default = /*#__PURE__*/__webpack_require__.n(external_next_seo_);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/ControlSection4/controlSection.style.js

var controlSection_style_ControlWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "controlSectionstyle__ControlWrapper",
  componentId: "sc-13iqoa2-0"
})(["padding:60px 0;display:flex;justify-content:center;align-items:center;@media (max-width:1440px){padding:0;}.colleft{width:50%;@media (max-width:1440px){width:50%;}@media (max-width:768px){width:100%;}}.row{@media (max-width:480px){width:100%;margin-top:10px;margin-bottom:10px;}}.colright{width:calc(50% - 70px);margin-left:70px;display:flex;flex-direction:column;@media (max-width:1440px){width:calc(50% - 70px);}@media (max-width:768px){width:100%;margin-left:0;margin-top:100px;}@media (max-width:480px){margin-top:50px;}.readMoreSection{.readMore{font-size:20px;font-weight:500;font-family:'Poppins';@media (max-width:480px){font-size:16px;}}}.countDownSection{margin-top:30px;.readMore{font-size:20px;font-weight:500;font-family:'Poppins';color:#32325d;@media (max-width:480px){font-size:16px;}}.countPortion{display:flex;.countSingle{display:flex;flex-direction:column;margin-right:50px;font-size:30px;font-weight:700;font-family:'Poppins';color:#32325d;justify-content:center;align-items:center;.countText{font-size:16px;font-weight:400;font-family:'Poppins';color:#525f7f;}}}@media (max-width:480px){display:none;}}.countDownButton{position:relative;margin-top:40px;.countDownMainButton{border-radius:6px;background-image:-moz-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );background-image:-webkit-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );background-image:-ms-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );&:hover{box-shadow:-6.691px 7.431px 20px 0px rgba(255,131,157,0.2);}> span{font-weight:700;letter-spacing:1px;}}.countDownDiscountButton{position:absolute;top:32px;height:34px;min-height:34px;min-width:120px;padding-top:5px;left:73px;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.5);}}}}"]);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/feature-1.svg
var feature_1 = __webpack_require__("p3JE");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/feature-2.svg
var feature_2 = __webpack_require__("Ry15");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("h7sq");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("tS02");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("/XES");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("ztBH");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Fayl");

// EXTERNAL MODULE: external "google-maps-react"
var external_google_maps_react_ = __webpack_require__("yOsI");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Maps/index.js







var mapStyles = {
  width: '1200px',
  height: '500px',
  display: 'flex',
  justifyContent: 'center'
};
var Maps_MapContainer =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MapContainer, _Component);

  function MapContainer() {
    Object(classCallCheck["a" /* default */])(this, MapContainer);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MapContainer).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MapContainer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_google_maps_react_["Map"], {
        google: this.props.google,
        zoom: 14,
        style: mapStyles,
        initialCenter: {
          lat: -1.2884,
          lng: 36.8233
        }
      });
    }
  }]);

  return MapContainer;
}(external_react_["Component"]);
;
/* harmony default export */ var Maps = (Object(external_google_maps_react_["GoogleApiWrapper"])({
  apiKey: 'AIzaSyAebp4g7KxzLCAtyjTtW67z1IJxC8Bbt6U'
})(Maps_MapContainer));
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/ControlSection4/index.js





















var ControlSection4_Completionist = function Completionist() {
  return external_react_default.a.createElement("span", {
    className: "readMore"
  }, "You are good to go!");
};

var ControlSection4_renderer = function renderer(_ref) {
  var days = _ref.days,
      hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds,
      completed = _ref.completed;

  if (completed) {
    // Render a complete state
    return external_react_default.a.createElement(ControlSection4_Completionist, null);
  } else {
    // Render a countdown
    return external_react_default.a.createElement("div", {
      className: "countPortion"
    }, external_react_default.a.createElement("div", {
      className: "countSingle"
    }, days, " ", external_react_default.a.createElement("span", {
      className: "countText"
    }, "Days")), external_react_default.a.createElement("div", {
      className: "countSingle"
    }, hours, " ", external_react_default.a.createElement("span", {
      className: "countText"
    }, "Hours")), external_react_default.a.createElement("div", {
      className: "countSingle"
    }, minutes, " ", external_react_default.a.createElement("span", {
      className: "countText"
    }, "Minutes")), external_react_default.a.createElement("div", {
      className: "countSingle"
    }, seconds, " ", external_react_default.a.createElement("span", {
      className: "countText"
    }, "Seconds")));
  }
};

var ControlSection4_ControlSection = function ControlSection(_ref2) {
  var row = _ref2.row,
      col = _ref2.col,
      title = _ref2.title,
      title_main = _ref2.title_main,
      title2 = _ref2.title2,
      title3 = _ref2.title3,
      title4 = _ref2.title4,
      description = _ref2.description,
      description2 = _ref2.description2,
      description3 = _ref2.description3,
      description4 = _ref2.description4,
      btnStyle = _ref2.btnStyle,
      sectionSubTitle = _ref2.sectionSubTitle,
      cardArea = _ref2.cardArea,
      readMoreTitle = _ref2.readMoreTitle;
  return external_react_default.a.createElement(controlSection_style_ControlWrapper, {
    id: "control"
  }, external_react_default.a.createElement(Container["a" /* default */], null, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), external_react_default.a.createElement(Maps, {
    style: {
      width: '50vw',
      height: '500px !important',
      display: 'flex',
      justifyContent: 'center'
    }
  }))));
}; // Transactions style props


// Transactions default style
ControlSection4_ControlSection.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    // flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    mt: '100px',
    mb: '100px'
  },
  // Transactions section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center'
  },
  // Transactions section title default style
  title_main: {
    content: 'How MICA Works',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '100%'],
    textAlign: ['center', 'center']
  },
  title: {
    content: 'Radicali HQ',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left']
  },
  title2: {
    content: 'Digitize your compliance framework',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left']
  },
  title3: {
    content: 'Leverage AI-powered impact assessments',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left']
  },
  title4: {
    content: 'Collaborate like never before',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left']
  },
  // Transactions section description default style
  description: {
    content: 'Radicali Pte Ltd,\
\
      32 Carpenter Street,',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
    whiteSpace: 'pre'
  },
  description2: {
    content: 'MICA is now the centralized repository for your management of all policies. Build policies on the dashboard, all while maintaining an audit trail across all collaborators.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  description3: {
    content: 'With MICA, leverage the power of AI to automate your impact assessments. Understand how new regulations impact your Policies and Processes via conceptual mapping or by performing gap analyses. Go further and let MICA help you compare regulations against regulations or policies against policies!      ',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  description4: {
    content: 'With MICA, you can amend existing policies or build new ones together, assign tasks & commence new change management projects. You can collaborate on regulatory interpretation & analysis with your team, and also create internal reports for compliance testing.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  sectionSubTitle: Object(defineProperty["a" /* default */])({
    content: 'Effortless crypto for everyone.',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f'
  }, "textAlign", ['left', 'left']),
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  readMoreTitle: {
    content: 'Sale currently on hold. ',
    as: 'span',
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['25px', '27px', '27px', '27px', '27px'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left']
  }
};
/* harmony default export */ var ControlSection4 = (ControlSection4_ControlSection);
// CONCATENATED MODULE: ./pages/contact.js





















/* harmony default export */ var contact = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme_crypto["a" /* cryptoTheme */]
  }, external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement(external_next_seo_default.a, {
    config: {
      title: 'More about MICA!'
    }
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    href: "https://assets.calendly.com/assets/external/widget.css",
    rel: "stylesheet"
  }), external_react_default.a.createElement("script", {
    src: "https://assets.calendly.com/assets/external/widget.js",
    type: "text/javascript"
  })), external_react_default.a.createElement(style["a" /* ResetCSS */], null), external_react_default.a.createElement(crypto_style["b" /* GlobalStyle */], null), external_react_default.a.createElement(crypto_style["a" /* ContentWrapper */], null, external_react_default.a.createElement(external_react_stickynode_default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active"
  }, external_react_default.a.createElement(DrawerContext["b" /* DrawerProvider */], null, external_react_default.a.createElement(Navbar["a" /* default */], null))), external_react_default.a.createElement(BetaSection3, null), external_react_default.a.createElement(ControlSection3, null), external_react_default.a.createElement(ControlSection4, null), external_react_default.a.createElement(Footer["a" /* default */], null))));
});

/***/ }),

/***/ "Ax/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");





var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p')(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Text'));

var Text = function Text(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Text);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "CeX/":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAwcICf/EACMQAAEEAQUAAwEBAAAAAAAAAAEAAgMEBQYHERITCCEiFBX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYhERWJxERAREQEREBU3O7+6Y03l8vSu2slE/BObHemGIuPqwyOjjkZF7tiMTpXNmi6xtcXuMjWgFx4VyWit0/hPW3K3MdqaPK43DXYshFlYbNPD9b888Pk6GO1P7AWKzJYY5PLow8sZ+xwSQ2tp7dHA6n09ZylfINgpUpzVtOuxPpPqSgtHnKyZrHxu/TSA4AkPaRyHAmTltdYjC6SyWdmvwPxOIisTW7EBM4hEHYTDhnJLmFjwWgF3ZpHHP0qpS2StM0PrPH2sxWnymu7UlnI3GY4CBnetDU6xwPkfwBXgY0d3vHblxBB6qVQ2ZZS2KfoZ9uvbqNoyY2GWxTD2GD7bE2aPsPUhnVrzy30Ic78duAGO58lNIYzzFy3lqDns9ntt4O9XdVi79BNOHwgwRF3IEkvVh6u4ceruL2uesD8ETpyhq2nR1HQx+P17S/y8zQp4Uw0q9PmQCKhH7n+X6msEkmUF87nBo4AXQqAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="

/***/ }),

/***/ "Cgap":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vE1u");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/MbW");






var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div')(_base__WEBPACK_IMPORTED_MODULE_5__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_3__["opacity"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__[/* cards */ "b"], Object(_base__WEBPACK_IMPORTED_MODULE_5__[/* themed */ "b"])('Card'));

var Card = function Card(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardWrapper, props, children);
};

Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* unused harmony default export */ var _unused_webpack_default_export = (Card);

/***/ }),

/***/ "DLzc":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-3-0754d6234a4f85c55d2fa30a63698f6b.svg";

/***/ }),

/***/ "Dlp7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("ysci");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("IVrg");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E1+a":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "E4Z+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/playstore-6262c0f4a0279b5d24d799f490425196.svg";

/***/ }),

/***/ "F6u6":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialTwitter");

/***/ }),

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Fayl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("Tqks");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("U9rZ");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "Gozm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "H3JQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/style.js

var ContainerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1gre7ok-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:768px){", ";}"], function (props) {
  return props.fullWidth && Object(external_styled_components_["css"])(["width:100%;max-width:none !important;"]);
}, function (props) {
  return props.noGutter && Object(external_styled_components_["css"])(["padding-left:0;padding-right:0;"]) || Object(external_styled_components_["css"])(["padding-left:30px;padding-right:30px;"]);
}, function (props) {
  return props.width || '1170px';
}, function (props) {
  return props.mobileGutter && Object(external_styled_components_["css"])(["padding-left:30px;padding-right:30px;"]);
});
/* harmony default export */ var style = (ContainerWrapper);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js



var Container_Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      noGutter = _ref.noGutter,
      mobileGutter = _ref.mobileGutter,
      width = _ref.width;
  // Add all classs to an array
  var addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return external_react_default.a.createElement(style, {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter
  }, children);
};

/* harmony default export */ var UI_Container = __webpack_exports__["a"] = (Container_Container);

/***/ }),

/***/ "H4oa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetCSS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ewA");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mXe9");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  // modal default style\n  .reuseModalOverlay {\n    z-index: 99999 !important;\n  }\n\n  .reuseModalHolder {\n    padding: 0 !important;\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.9) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed !important;\n    z-index: 999991 !important;\n    background-color: transparent !important;\n    top: 10px !important;\n    right: 10px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n    padding: 0 !important;\n    span.btn-icon {\n      font-size: 22px !important;\n      transform: rotate(45deg) !important;\n    }\n\n    &.alt {\n      border-radius: 50% !important;\n      z-index: 999999 !important;\n      padding: 0 !important;\n      transition: all 0.3s ease !important;\n      top: 25px !important;\n      right: 30px !important;\n      min-width: 40px !important;\n      min-height: 40px !important;\n\n      span.btn-icon {\n        font-size: 20px !important;\n      }\n\n      &:hover {\n        opacity: 0.88 !important;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "IVrg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Ifa3":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAwcICf/EACMQAAEEAQUAAwEBAAAAAAAAAAEAAgMEBQYHERITCCEiFBX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYhERWJxERAREQEREBU3O7+6Y03l8vSu2slE/BObHemGIuPqwyOjjkZF7tiMTpXNmi6xtcXuMjWgFx4VyWit0/hPW3K3MdqaPK43DXYshFlYbNPD9b888Pk6GO1P7AWKzJYY5PLow8sZ+xwSQ2tp7dHA6n09ZylfINgpUpzVtOuxPpPqSgtHnKyZrHxu/TSA4AkPaRyHAmTltdYjC6SyWdmvwPxOIisTW7EBM4hEHYTDhnJLmFjwWgF3ZpHHP0qpS2StM0PrPH2sxWnymu7UlnI3GY4CBnetDU6xwPkfwBXgY0d3vHblxBB6qVQ2ZZS2KfoZ9uvbqNoyY2GWxTD2GD7bE2aPsPUhnVrzy30Ic78duAGO58lNIYzzFy3lqDns9ntt4O9XdVi79BNOHwgwRF3IEkvVh6u4ceruL2uesD8ETpyhq2nR1HQx+P17S/y8zQp4Uw0q9PmQCKhH7n+X6msEkmUF87nBo4AXQqAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="

/***/ }),

/***/ "Ihd7":
/***/ (function(module, exports) {



/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "KHw6":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slider-2-82eae521c3cb2103695c71808f1961a9.png";

/***/ }),

/***/ "KKIB":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("45mK");

var _Symbol = __webpack_require__("Gozm");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("lpv4");

var _stringify = _interopRequireDefault(__webpack_require__("dZZJ"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("E1+a"));

var _createClass2 = _interopRequireDefault(__webpack_require__("Z05o"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("OY2S"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("zBsc"));

var _inherits2 = _interopRequireDefault(__webpack_require__("wt0f"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "LcAa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "MYuC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/seedplus-d35a545310eec7cea1ad81af7c2f282b.png";

/***/ }),

/***/ "MiXP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionMainWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ContactFromWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "contactstyle__ContactFromWrapper",
  componentId: "sc-1laf5hu-0"
})(["display:flex;align-items:stretch;width:auto;max-width:100%;margin-left:auto;margin-right:auto;margin-bottom:25px;position:relative;@media (max-width:990px){padding:0 20px;}@media (max-width:575px){flex-direction:column;align-items:center;margin-bottom:25px;button{width:100%;}}.email_input{flex-grow:1;@media (max-width:575px){width:100%;margin-right:0;margin-bottom:20px;}&.is-material{&.is-focus{label{color:#aeb1b6;font-size:12px;}}}input{height:100%;background:#fff;font-size:16px;font-weight:500;color:#343d48;padding:5px 15px;border-color:#dadada;border-style:solid;border-width:2px;border-color:rgb(233,227,254);border-radius:10px;background-color:rgb(243,242,250);height:84px;@media (max-width:575px){height:60px;}}label{font-size:14px;color:#343d48;font-weight:500;padding-left:10px;top:5px;}}.field-wrapper{height:100%;}button{position:absolute;right:20px;border-radius:6px;background-color:rgb(106,82,253);height:60px;top:12px;&:hover{background-color:rgb(106,82,253);border-color:gb(106,82,253);opacity:0.85;}@media (max-width:990px){right:40px;}@media (max-width:575px){position:relative;right:0;top:0;height:48px;}}"]);
var SectionMainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "contactstyle__SectionMainWrapper",
  componentId: "sc-1laf5hu-1"
})(["margin-top:0px;z-index:1;position:relative;@media (max-width:768px){padding-left:30px;padding-right:30px;}@media (max-width:480px){padding-left:15px;padding-right:15px;}.containerClass{border-radius:20px;background-color:rgb(255,255,255);box-shadow:0px 0px 94px 6px rgba(107,83,254,0.1);padding:80px 0;.contactdes{text-align:center;@media (max-width:990px){padding:0 20px;}}}"]);

/* harmony default export */ __webpack_exports__["b"] = (ContactFromWrapper);

/***/ }),

/***/ "Ntdy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/theme/crypto/colors.js
var colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  headingColor: '#0f2137',
  textColor: '#5d646d',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#14e3ba',
  // 8
  primaryHover: '#14e3ba',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  primaryBoxShadow: ' -6.691px 7.431px 20px 0px rgba(74, 47, 177, 0.2) '
};
/* harmony default export */ var crypto_colors = (colors);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/theme/crypto/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cryptoTheme; });

var cryptoTheme = {
  breakpoints: [575, 768, 990, 1440],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: crypto_colors,
  colorStyles: {
    primary: {
      color: crypto_colors.primary,
      border: '1px solid',
      borderColor: crypto_colors.primary,
      backgroundColor: crypto_colors.transparent,
      '&:hover': {
        color: crypto_colors.white,
        backgroundColor: crypto_colors.primaryHover,
        borderColor: crypto_colors.transparent,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
        backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)'
      }
    },
    secondary: {
      color: crypto_colors.secondary,
      borderColor: crypto_colors.secondary,
      '&:hover': {
        color: crypto_colors.secondaryHover,
        borderColor: crypto_colors.secondaryHover
      }
    },
    warning: {
      color: crypto_colors.yellow,
      borderColor: crypto_colors.yellow,
      '&:hover': {
        color: crypto_colors.yellowHover,
        borderColor: crypto_colors.yellowHover
      }
    },
    error: {
      color: crypto_colors.secondaryHover,
      borderColor: crypto_colors.secondaryHover,
      '&:hover': {
        color: crypto_colors.secondary,
        borderColor: crypto_colors.secondary
      }
    },
    primaryWithBg: {
      color: crypto_colors.white,
      backgroundColor: crypto_colors.primary,
      borderColor: crypto_colors.primary,
      '&:hover': {
        backgroundColor: crypto_colors.primaryHover,
        borderColor: crypto_colors.primaryHover
      }
    },
    secondaryWithBg: {
      color: crypto_colors.white,
      backgroundColor: crypto_colors.secondary,
      borderColor: crypto_colors.secondary,
      '&:hover': {
        backgroundColor: crypto_colors.secondaryHover,
        borderColor: crypto_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: crypto_colors.white,
      backgroundColor: crypto_colors.yellow,
      borderColor: crypto_colors.yellow,
      '&:hover': {
        backgroundColor: crypto_colors.yellowHover,
        borderColor: crypto_colors.yellowHover
      }
    },
    errorWithBg: {
      color: crypto_colors.white,
      backgroundColor: crypto_colors.secondaryHover,
      borderColor: crypto_colors.secondaryHover,
      '&:hover': {
        backgroundColor: crypto_colors.secondary,
        borderColor: crypto_colors.secondary
      }
    },
    transparentBg: {
      backgroundColor: crypto_colors.white,
      '&:hover': {
        backgroundColor: crypto_colors.white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: crypto_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: crypto_colors.transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: crypto_colors.transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};

/***/ }),

/***/ "OCF2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "OY2S":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("KKIB");

var assertThisInitialized = __webpack_require__("TG6z");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "QBiV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Button/index.js + 4 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: external "@glidejs/glide"
var glide_ = __webpack_require__("UbIB");
var glide_default = /*#__PURE__*/__webpack_require__.n(glide_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@glidejs/glide/dist/css/glide.core.min.css
var glide_core_min = __webpack_require__("Ihd7");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/GlideCarousel/glide.style.js

 // Glide wrapper style

var GlideWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "glidestyle__GlideWrapper",
  componentId: "sc-1df9bf1-0"
})(["", " ", " ", ""], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["space"]); // Glide slide wrapper style

var GlideSlideWrapper = external_styled_components_default.a.li.withConfig({
  displayName: "glidestyle__GlideSlideWrapper",
  componentId: "sc-1df9bf1-1"
})(["", " ", " ", " ", " ", ""], external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"]); // Button wrapper style

var ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "glidestyle__ButtonWrapper",
  componentId: "sc-1df9bf1-2"
})(["display:inline-block;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], external_styled_system_["position"], external_styled_system_["top"], external_styled_system_["left"], external_styled_system_["right"], external_styled_system_["bottom"]); // ButtonControlWrapper style

var ButtonControlWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "glidestyle__ButtonControlWrapper",
  componentId: "sc-1df9bf1-3"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["position"], external_styled_system_["top"], external_styled_system_["left"], external_styled_system_["right"], external_styled_system_["bottom"]); // BulletControlWrapper style

var BulletControlWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "glidestyle__BulletControlWrapper",
  componentId: "sc-1df9bf1-4"
})(["", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["flexWrap"]); // BulletButton style

var BulletButton = external_styled_components_default.a.button.withConfig({
  displayName: "glidestyle__BulletButton",
  componentId: "sc-1df9bf1-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#D6D6D6;&:hover,&.glide__bullet--active{background-color:#869791;}", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], external_styled_system_["width"], external_styled_system_["height"]); // default button style

var DefaultBtn = external_styled_components_default.a.button.withConfig({
  displayName: "glidestyle__DefaultBtn",
  componentId: "sc-1df9bf1-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ var glide_style = (GlideWrapper);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/GlideCarousel/index.js







var GlideCarousel_GlideCarousel = function GlideCarousel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      options = _ref.options,
      controls = _ref.controls,
      prevButton = _ref.prevButton,
      nextButton = _ref.nextButton,
      prevWrapper = _ref.prevWrapper,
      nextWrapper = _ref.nextWrapper,
      bullets = _ref.bullets,
      numberOfBullets = _ref.numberOfBullets,
      buttonWrapperStyle = _ref.buttonWrapperStyle,
      bulletWrapperStyle = _ref.bulletWrapperStyle,
      bulletButtonStyle = _ref.bulletButtonStyle,
      carouselSelector = _ref.carouselSelector;
  // Add all classs to an array
  var addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  var totalBullets = [];

  for (var i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(external_react_["useEffect"])(function () {
    var glide = new glide_default.a(carouselSelector ? "#".concat(carouselSelector) : '#glide', Object(objectSpread["a" /* default */])({}, options));
    glide.mount();
  });
  return external_react_default.a.createElement(glide_style, {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide'
  }, external_react_default.a.createElement("div", {
    className: "glide__track",
    "data-glide-el": "track"
  }, external_react_default.a.createElement("ul", {
    className: "glide__slides"
  }, children)), controls && external_react_default.a.createElement(ButtonControlWrapper, Object(esm_extends["a" /* default */])({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle), external_react_default.a.createElement(ButtonWrapper, Object(esm_extends["a" /* default */])({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<"
  }), prevButton ? prevButton : external_react_default.a.createElement(DefaultBtn, null, "Prev")), external_react_default.a.createElement(ButtonWrapper, Object(esm_extends["a" /* default */])({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">"
  }), nextButton ? nextButton : external_react_default.a.createElement(DefaultBtn, null, "Next"))), bullets && external_react_default.a.createElement(BulletControlWrapper, Object(esm_extends["a" /* default */])({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle), external_react_default.a.createElement(external_react_["Fragment"], null, totalBullets.map(function (index) {
    return external_react_default.a.createElement(BulletButton, Object(esm_extends["a" /* default */])({
      key: index,
      className: "glide__bullet",
      "data-glide-dir": "=".concat(index)
    }, bulletButtonStyle));
  }))));
};

// GlideCarousel default props
GlideCarousel_GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ var components_GlideCarousel = (GlideCarousel_GlideCarousel);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/GlideCarousel/glideSlide.js

 // Glide Slide wrapper component

var glideSlide_GlideSlide = function GlideSlide(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement(GlideSlideWrapper, {
    className: "glide__slide"
  }, children);
};

/* harmony default export */ var glideSlide = (glideSlide_GlideSlide);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/BannerSlider/bannerSlider.style.js

var TestimonialSecWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "bannerSliderstyle__TestimonialSecWrapper",
  componentId: "sc-14q4f21-0"
})(["padding:0;background-size:cover;background-position:top center;background-repeat:no-repeat;z-index:1;margin-top:-130px;@media (min-width:1600px){margin-top:-180px;}@media (max-width:1200px){margin-top:-80px;}@media (max-width:990px){margin-top:-40px;}@media (max-width:575px){padding:60px 0;}@media (max-width:575px){padding-left:15px;padding-right:15px;padding:60px 0 0;}.glide--carousel{display:flex;flex-direction:column;.glide__track{order:2;}.glide__bullets{.glide__bullet{border-radius:50%;background-color:rgb(20,227,186);opacity:0.231;transition:all 0.2s ease;&.glide__bullet--active{background-color:rgb(20,227,186);width:24px;height:8px;border-radius:15px;opacity:1;}}}.glide__slide{p{@media (max-width:480px){margin-right:30px;margin-left:5px;max-width:320px;}}}}.testimonial_item{max-width:440px;@media (max-width:480px){max-width:100%;}}"]);
var TestimonialItem = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSliderstyle__TestimonialItem",
  componentId: "sc-14q4f21-1"
})(["padding:30px 0;background-color:#fff;transition:0.425s ease;@media (max-width:1300px){padding:20px 0;}"]);
var ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSliderstyle__ImageWrapper",
  componentId: "sc-14q4f21-2"
})(["width:50px;height:50px;flex-basis:50px;display:block;border-radius:10px;overflow:hidden;margin-right:15px;img{width:100%;height:auto;display:block;}"]);
/* harmony default export */ var bannerSlider_style = (TestimonialSecWrapper);
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/data/Crypto/index.js
var Crypto = __webpack_require__("o5DF");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/BannerSlider/index.js













var BannerSlider_TestimonialSection = function TestimonialSection(_ref) {
  var secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading,
      reviewStyle = _ref.reviewStyle,
      TestimonialMeta = _ref.TestimonialMeta,
      nameStyle = _ref.nameStyle,
      designationStyle = _ref.designationStyle,
      arrowStyle = _ref.arrowStyle;
  //Carousel Options
  var carouselOptions = {
    type: 'carousel',
    autoplay: 3000,
    perView: 1,
    animationDuration: 600
  };
  return external_react_default.a.createElement(bannerSlider_style, {
    id: "testimonial_section"
  }, external_react_default.a.createElement(Container["a" /* default */], null, external_react_default.a.createElement("div", {
    style: {
      width: '440px'
    }
  }, external_react_default.a.createElement(components_GlideCarousel, {
    options: carouselOptions,
    bullets: true,
    numberOfBullets: 4,
    controls: false
  }, external_react_default.a.createElement(external_react_default.a.Fragment, null, Crypto["h" /* TESTIMONIALS */].map(function (slideItem, index) {
    return external_react_default.a.createElement(glideSlide, {
      key: "testimonial-slide-".concat(index)
    }, external_react_default.a.createElement(TestimonialItem, {
      className: "testimonial_item"
    }, external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
      content: slideItem.review
    }, reviewStyle)), external_react_default.a.createElement(Box["a" /* default */], TestimonialMeta, external_react_default.a.createElement(ImageWrapper, null, external_react_default.a.createElement(Image["a" /* default */], {
      src: slideItem.avatar,
      alt: "reviewer-image-".concat(index)
    })), external_react_default.a.createElement(Box["a" /* default */], null, external_react_default.a.createElement(Heading["a" /* default */], Object(esm_extends["a" /* default */])({
      content: slideItem.name
    }, nameStyle)), external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
      content: slideItem.designation
    }, designationStyle))))));
  }))))));
};

BannerSlider_TestimonialSection.defaultProps = {
  secTitleWrapper: {
    mb: ['40px', '40px', '50px', '75px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  reviewStyle: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    fontWeight: '400',
    color: 'rgb(82, 95, 127)',
    lineHeight: '1.74',
    mb: ['30px', '30px', '30px', '30px', '40px']
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: 'center'
  },
  nameStyle: {
    as: 'h3',
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: 'rgb(50, 50, 93)',
    mb: '5px',
    fontFamily: 'Poppins'
  },
  designationStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: 'rgb(82, 95, 127)',
    mb: '0',
    fontFamily: 'Poppins'
  }
};
/* harmony default export */ var BannerSlider = (BannerSlider_TestimonialSection);

/***/ }),

/***/ "QJuY":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDQgNDIwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkJpZ2dlciBSZXdhcmRzPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExNy44OCwzMjguMjNhMjYuNCwyNi40LDAsMCwxLTI2LjQxLTI2LjQxVjEwSDg3Ljg4QTI2LjQxLDI2LjQxLDAsMCwwLDYxLjQ3LDM2LjQxVjMzMS44MmEyNi40LDI2LjQsMCwwLDAsMjYuNDEsMjYuNDFoMjIwYTI2LjQsMjYuNCwwLDAsMCwyNi40MS0yNi40MXYtMy41OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02Ni4xMSwzODBBMjYuNDEsMjYuNDEsMCwwLDEsMzkuNywzNTMuNTlWNTcuMDZIMzYuMTFBMjYuNDIsMjYuNDIsMCwwLDAsOS43LDgzLjQ3VjM4My41OUEyNi40MSwyNi40MSwwLDAsMCwzNi4xMSw0MTBIMjYwLjgzYTI2LjQsMjYuNCwwLDAsMCwyNi40MS0yNi40MVYzODBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTA3Ljg4LDIzNC4xMmExMCwxMCwwLDAsMS0xMC0xMGMwLTQ4LDQwLTk5LjQsOTkuNDEtOTkuNCwyNi40MywwLDQ4LjUyLDEwLjYsNjQuNjYsMjQuMjVsLS4zOC0xNS4xOGExMCwxMCwwLDAsMSwyMC0uNWwxLDQwYTEwLDEwLDAsMCwxLTEyLjMyLDEyLjMzbC00MC0xYTEwLDEwLDAsMSwxLC4yNC0yMGguMjZsMTkuMTguNDhjLTEzLTExLjIxLTMxLjE2LTIwLjM4LTUyLjYzLTIwLjM4YTc3LjEsNzcuMSwwLDAsMC01Ny45MSwyNS45MmMtMTMuNDYsMTUtMjEuNSwzNS0yMS41LDUzLjQ5YTEwLDEwLDAsMCwxLTEwLDEwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEyNC4yLDMyNC43YTEwLDEwLDAsMCwxLTEwLTkuNzVsLTEtNDBhMTAsMTAsMCwwLDEsMTIuMzEtMTIuMzNsNDAsMWExMCwxMCwwLDEsMS0uNSwyMGwtMTkuMTgtLjQ4YzEzLDExLjIxLDMxLjE2LDIwLjM4LDUyLjY0LDIwLjM4YTc3LDc3LDAsMCwwLDU3LjktMjUuOTJjMTMuNDYtMTUsMjEuNS0zNSwyMS41LTUzLjQ4YTEwLDEwLDAsMCwxLDIwLDBjMCw0OC0zOS45NCw5OS40LTk5LjQsOTkuNC0yNi40MywwLTQ4LjUzLTEwLjYxLTY0LjY2LTI0LjI1bC4zOCwxNS4xN2ExMCwxMCwwLDAsMS05Ljc1LDEwLjI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI3NS4wOSwzLjA5QTEuMzYsMS4zNiwwLDAsMSwyNzUsM2wtLjItLjE4YTYsNiwwLDAsMC0uNTMtLjQ4Yy0uMDYtLjA2LS4xMy0uMS0uMi0uMTZsLS41Ny0uNDJhMiwyLDAsMCwwLS4yNy0uMTcsNi4yNiw2LjI2LDAsMCwwLS41NS0uMzRMMjcyLjIsMWEzLjQyLDMuNDIsMCwwLDAtLjQzLS4yMUwyNzEsLjUyYy0uMDYsMC0uMTItLjA3LS4xNy0uMDlhNi42Miw2LjYyLDAsMCwwLTItLjQzLDIuMTcsMi4xNywwLDAsMS0uMjYsMEg4Ny44OEM2Ny44LDAsNTEsMTYuMzQsNTEsMzYuNDFWNDdIMzYuMTFBMzYuMjUsMzYuMjUsMCwwLDAsMCw4My4zOXYzMDAuMkEzNi4yLDM2LjIsMCwwLDAsMzYsNDIwSDI2MC44M0EzNi4yNCwzNi4yNCwwLDAsMCwyOTcsMzgzLjY4VjM2OGgxMC44OUEzNiwzNiwwLDAsMCwzNDQsMzMyLjExVjc5LjQ3YTkuOCw5LjgsMCwwLDAtMi42Mi02LjkxWk0yNzgsMzQuOTIsMzEwLjkyLDY5SDI3OFptLTEsMzQ4LjY3QTE2LjIxLDE2LjIxLDAsMCwxLDI2MSw0MDBIMzYuMTFBMTYuMTcsMTYuMTcsMCwwLDEsMjAsMzgzLjc2VjgzLjQ3QTE2LjIzLDE2LjIzLDAsMCwxLDM2LDY3SDUxVjMzMS44MkM1MSwzNTEuOSw2Ny44LDM2OCw4Ny44OCwzNjhIMjc3Wk0zMDcuODksMzQ4aC0yMjBjLTksMC0xNi44OC03LjEzLTE2Ljg4LTE2LjE4VjM2LjQxQzcxLDI3LjM2LDc4LjgzLDIwLDg3Ljg4LDIwSDI1OFY3OS40OUMyNTgsODUsMjYyLjM0LDg5LDI2Ny44Niw4OUgzMjRWMzMxLjgyQTE2LDE2LDAsMCwxLDMwOC4yMywzNDhaIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "QbNj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/data/Crypto/index.js
var Crypto = __webpack_require__("o5DF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/ScalableSection/scalable.style.js

var ScalableWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "scalablestyle__ScalableWrapper",
  componentId: "sc-1jlhvd4-0"
})(["padding:50px 0 0px;.colleft{width:calc(50% - 70px);margin-right:70px;@media (max-width:1199px){width:100%;}.TrustedImageBtn{display:flex;img{width:150px;height:47px;}.app_image_area{margin-right:20px;}}}.colright{width:50%;@media (max-width:1199px){width:100%;margin-left:0;margin-top:100px;}@media (max-width:480px){width:100%;margin-left:0;margin-top:40px;}img{height:100%;width:100%;}}"]);
var FeatureSection = external_styled_components_default.a.section.withConfig({
  displayName: "scalablestyle__FeatureSection",
  componentId: "sc-1jlhvd4-1"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;.featureWrapper{max-width:280px;margin-bottom:45px;display:flex;@media (max-width:599px){max-width:100%;}img{width:50px;height:50px;object-fit:contain;margin-bottom:20px;border-width:2px;border-color:rgb(233,227,254);border-radius:10px;background-color:rgb(243,242,250);padding:8px 10px;}.contextPortion{margin-left:15px;}}"]);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/scalable.jpg
var scalable = __webpack_require__("0lL5");
var scalable_default = /*#__PURE__*/__webpack_require__.n(scalable);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/ScalableSection/index.js














var ScalableSection_ScalableHistory = function ScalableHistory(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      btnStyle = _ref.btnStyle,
      sectionSubTitle = _ref.sectionSubTitle,
      cardArea = _ref.cardArea,
      featureTitleStyle = _ref.featureTitleStyle,
      featureDescriptionStyle = _ref.featureDescriptionStyle;
  return external_react_default.a.createElement(ScalableWrapper, {
    id: "scalable"
  }, external_react_default.a.createElement(Container["a" /* default */], {
    noGutter: true,
    mobileGutter: true
  }, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "colleft"
  }, col, {
    style: {
      flexDirection: 'column'
    }
  }), external_react_default.a.createElement(Text["a" /* default */], sectionSubTitle), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], title),
    description: external_react_default.a.createElement(Text["a" /* default */], description)
  }), external_react_default.a.createElement(FeatureSection, null, Crypto["f" /* SCALABLE_FEATURE */].map(function (item, index) {
    return external_react_default.a.createElement("div", {
      key: "feature-".concat(index),
      className: "featureWrapper"
    }, external_react_default.a.createElement(Fade_default.a, {
      up: true
    }, external_react_default.a.createElement(Image["a" /* default */], {
      src: item.image,
      alt: item.title
    }), external_react_default.a.createElement(Box["a" /* default */], {
      className: "contextPortion"
    }, external_react_default.a.createElement(Heading["a" /* default */], Object(esm_extends["a" /* default */])({
      as: "h3",
      content: item.title
    }, featureTitleStyle)), external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
      content: item.des
    }, featureDescriptionStyle)))));
  }))), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "colright"
  }, col, cardArea), external_react_default.a.createElement(Image["a" /* default */], {
    src: scalable_default.a,
    className: "ScalableImage",
    alt: "Scalable Section Image"
  })))));
}; // Transactions style props


// Scalable default style
ScalableSection_ScalableHistory.defaultProps = {
  // Scalable section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Scalable section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center'
  },
  // Scalable section title default style
  title: {
    content: 'A Scalable Proof of Investment Vehicle',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left']
  },
  // Scalable section description default style
  description: {
    content: 'Easily buy, sell or exchange over 30 different cryptocurrencies. Now euro deposits and withdrawn available.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  sectionSubTitle: Object(defineProperty["a" /* default */])({
    content: 'Fast, Cheap, Zero Fraud',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f'
  }, "textAlign", ['left', 'left']),
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left']
  },
  // Scalable section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left']
  }
};
/* harmony default export */ var ScalableSection = (ScalableSection_ScalableHistory);

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RGm1":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTUwIC01MCkiIHN0eWxlPSJmaWxsOiMzQkIzMDAiPjxzdmcgZmlsbD0iIzNCQjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCAxMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTI3LjMsMTAxLjZjLTAuNy0xLjEtMS45LTItMy4xLTIuNWMtMS44LTAuNy0zLjgtMC44LTUuNy0wLjhjLTkuNCwwLTI0LjUsNC4xLTI5LjksNS43Yy0xLjItMi44LTQuNS01LjQtMTIuNS01LjQgIGMtNC44LDAtOS4zLDEtOS41LDFjLTEuNSwwLjMtMi44LDAuMi00LjYtMC4zYy0zLjYtMS02LjYtMy4yLTkuOC01LjRjLTMuMy0yLjMtNi42LTQuNi0xMC43LTUuOWMtNi43LTItMTMtMi41LTE4LjYtMS40ICBjLTIuNywwLjUtNS4zLDEuNS03LjksMi40Yy0yLjMsMC45LTQuNSwxLjctNi44LDIuMmMtMC41LDAuMS0xLDAuMy0xLjYsMC40Yy0xLjIsMC4zLTIuNSwwLjctMy40LDAuN2MtMC4zLDAtMC40LDAtMC41LTAuMUwwLDkxLjQgIGMwLDAsMCwyMC4xLDAsMjYuOGMwLDEuNiwxLjQsMi43LDMuMSwyLjdjMC44LDAsMS43LTAuMywyLjUtMC41YzAuNC0wLjEsMC45LTAuMywxLjEtMC4zbDAuNC0wLjFjMy40LTAuNSw2LjgtMSwxMC4xLTEgIGM0LjcsMCwyOC4xLDYsMzYuNyw4LjNINTRjMS45LDAuNCwzLjcsMC42LDUuNSwwLjZjMy44LDAsNS45LTAuOSw2LjEtMWMyLjktMS4zLDguMy0yLjgsOC4zLTIuOGM5LjMtMi42LDQ1LjYtMTQsNDUuOS0xNC4xICBjNS0xLjQsNy42LTMuMiw4LjEtNS40QzEyOC4xLDEwMy41LDEyNy44LDEwMi41LDEyNy4zLDEwMS42eiBNMTE4LjYsMTA2LjFjLTAuNCwwLjEtMzYuNiwxMS41LTQ1LjksMTQuMWMtMC4yLDAuMS01LjcsMS42LTguOSwzLjEgIGMwLDAtMS41LDAuNy00LjQsMC43Yy0xLjQsMC0zLTAuMi00LjYtMC41Yy0zLjUtMC45LTMxLjYtOC40LTM3LjYtOC40Yy0zLjYsMC03LjIsMC41LTEwLjcsMS4xbC0wLjQsMC4xYy0wLjYsMC4xLTEuMSwwLjMtMS43LDAuNCAgSDQuM2MwLTguNSwwLTE2LjUtMC4xLTIwLjNjMS4yLTAuMSwyLjQtMC41LDMuNS0wLjhjMC41LTAuMSwxLTAuMywxLjQtMC40YzIuNi0wLjYsNS0xLjUsNy40LTIuM2MyLjUtMC45LDQuOC0xLjgsNy4yLTIuMiAgYzQuOS0xLDEwLjYtMC41LDE2LjYsMS4zYzMuNSwxLDYuNCwzLjEsOS41LDUuM2MzLjMsMi4zLDYuOCw0LjcsMTEsNmMyLjQsMC43LDQuNCwwLjgsNi41LDAuM2MwLjIsMCw0LjMtMC45LDguNi0wLjkgIGMzLjksMCw4LjcsMC43LDkuMSw0LjFsMC4xLDEuMmMtMC4zLDAuMS0wLjcsMC4zLTEsMC40Yy0xLjksMC43LTMuOCwxLjEtNS44LDEuNmMtMiwwLjQtNCwwLjktNiwxLjRjLTEuOSwwLjYtMy44LDEtNS42LDAuNyAgYy0xLjgtMC4zLTMuOS0wLjktNS45LTEuMmMtMi0wLjMtNC4xLTAuNi02LjEtMC43cy00LjEtMC4xLTYuMiwwYy0yLDAuMi00LDAuMy02LjEsMC4xYzEuOSwwLjcsNCwwLjgsNi4xLDAuOWMyLDAuMSw0LDAuMyw2LDAuNSAgYzIsMC4zLDQsMC42LDUuOSwxLjFjMSwwLjIsMiwwLjQsMi45LDAuN2MxLDAuMiwyLDAuNSwzLjEsMC43YzIuMiwwLjMsNC41LTAuMiw2LjQtMC45YzEuOS0wLjYsMy44LTEuMSw1LjgtMS43czMuOS0xLjMsNS44LTIuMiAgYzAuMi0wLjEsMC41LDAuMSwwLjctMC4xbDAsMGwyLjMtMC43YzAuMi0wLjEsMTkuOS02LjEsMzAuNy02LjFjMy44LDAsNSwwLjgsNS4yLDEuMmwwLjEsMC4zQzEyMy40LDEwNC40LDEyMi4xLDEwNS4xLDExOC42LDEwNi4xeiAgIj48L3BhdGg+PHBhdGggZD0iTTY0LDQyYy0xMi4yLDAtMjIsOS44LTIyLDIyczkuOCwyMiwyMiwyMnMyMi05LjgsMjItMjJTNzYuMiw0Miw2NCw0MnogTTY0LDgyYy05LjksMC0xOC04LjEtMTgtMThzOC4xLTE4LDE4LTE4ICBzMTgsOC4xLDE4LDE4UzczLjksODIsNjQsODJ6Ij48L3BhdGg+PHBhdGggZD0iTTY2LDYyLjNjLTIuMy0wLjktMy4yLTEuNS0zLjEtMi40YzAuMS0wLjgsMC43LTEuNSwyLjQtMS40YzIsMC4yLDMuMiwwLjgsMy44LDEuMmwxLTIuOWMtMC45LTAuNS0yLjEtMC45LTMuOC0xLjFsMC4xLTIuMyAgbC0yLjYtMC4ybC0wLjEsMi41Yy0yLjksMC4zLTQuNywyLTQuOCw0LjRjLTAuMSwyLjUsMS43LDQsNC41LDUuMWMyLDAuOCwyLjgsMS41LDIuNywyLjVjLTAuMSwxLTEuMiwxLjYtMi43LDEuNSAgYy0xLjctMC4xLTMuMi0wLjctNC4zLTEuNGwtMSwzYzAuOSwwLjYsMi42LDEuMiw0LjQsMS40bC0wLjIsMi41bDIuNiwwLjFsMC4yLTIuN2MzLjEtMC4zLDQuOS0yLjIsNS00LjYgIEM3MC4yLDY1LjEsNjkuMSw2My42LDY2LDYyLjN6Ij48L3BhdGg+PHBhdGggZD0iTTAuNywyNi4zYzAuNywxLjEsMS45LDIsMy4xLDIuNWMxLjgsMC43LDMuOCwwLjgsNS43LDAuOGM5LjQsMCwyNC41LTQuMSwyOS45LTUuN2MxLjIsMi44LDQuNSw1LjQsMTIuNSw1LjQgIGM0LjgsMCw5LjMtMSw5LjUtMWMxLjUtMC4zLDIuOC0wLjIsNC42LDAuM2MzLjYsMSw2LjYsMy4yLDkuOCw1LjRjMy4zLDIuMyw2LjYsNC42LDEwLjcsNS45YzYuNywyLDEzLDIuNSwxOC42LDEuNCAgYzIuNy0wLjUsNS4zLTEuNSw3LjktMi40YzIuMy0wLjksNC41LTEuNyw2LjgtMi4yYzAuNS0wLjEsMS0wLjMsMS42LTAuNGMxLjItMC4zLDIuNS0wLjcsMy40LTAuN2MwLjMsMCwwLjQsMCwwLjUsMC4xbDIuNiwwLjggIGMwLDAsMC0yMC4xLDAtMjYuOGMwLTEuNi0xLjQtMi43LTMuMS0yLjdjLTAuOCwwLTEuNywwLjMtMi41LDAuNWMtMC40LDAuMS0wLjksMC4zLTEuMSwwLjNsLTAuNCwwLjFjLTMuNCwwLjUtNi44LDEtMTAuMSwxICBjLTQuNywwLTI4LjEtNi0zNi43LTguM0g3NEM3Mi4xLDAuMiw3MC4zLDAsNjguNSwwYy0zLjgsMC01LjksMC45LTYuMSwxYy0yLjksMS4zLTguMywyLjgtOC4zLDIuOGMtOS4zLDIuNi00NS42LDE0LTQ1LjksMTQuMSAgYy01LDEuNC03LjYsMy4yLTguMSw1LjRDLTAuMSwyNC40LDAuMiwyNS40LDAuNywyNi4zeiBNOS40LDIxLjhDOS44LDIxLjcsNDYsMTAuMyw1NS4zLDcuN2MwLjItMC4xLDUuNy0xLjYsOC45LTMuMSAgYzAsMCwxLjUtMC43LDQuNC0wLjdjMS40LDAsMywwLjIsNC42LDAuNWMzLjUsMC45LDMxLjYsOC40LDM3LjYsOC40YzMuNiwwLDcuMi0wLjUsMTAuNy0xLjFsMC40LTAuMWMwLjYtMC4xLDEuMS0wLjMsMS43LTAuNGgwLjEgIGMwLDguNSwwLDE2LjUsMC4xLDIwLjNjLTEuMiwwLjEtMi40LDAuNS0zLjUsMC44Yy0wLjUsMC4xLTEsMC4zLTEuNCwwLjRjLTIuNiwwLjYtNSwxLjUtNy40LDIuM2MtMi41LDAuOS00LjgsMS44LTcuMiwyLjIgIGMtNC45LDEtMTAuNiwwLjUtMTYuNi0xLjNjLTMuNS0xLTYuNC0zLjEtOS41LTUuM2MtMy4zLTIuMy02LjgtNC43LTExLTZjLTIuNC0wLjctNC40LTAuOC02LjUtMC4zYy0wLjIsMC00LjMsMC45LTguNiwwLjkgIGMtMy45LDAtOC43LTAuNy05LjEtNC4xbC0wLjEtMS4yYzAuMy0wLjEsMC43LTAuMywxLTAuNGMxLjktMC43LDMuOC0xLjEsNS44LTEuNmMyLTAuNCw0LTAuOSw2LTEuNGMxLjktMC42LDMuOC0xLDUuNi0wLjcgIGMxLjgsMC4zLDMuOSwwLjksNS45LDEuMmMyLDAuMyw0LjEsMC42LDYuMSwwLjdzNC4xLDAuMSw2LjIsMGMyLTAuMiw0LTAuMyw2LjEtMC4xYy0xLjktMC43LTQtMC44LTYuMS0wLjljLTItMC4xLTQtMC4zLTYtMC41ICBjLTItMC4zLTQtMC42LTUuOS0xLjFjLTEtMC4yLTItMC40LTIuOS0wLjdjLTEtMC4yLTItMC41LTMuMS0wLjdjLTIuMi0wLjMtNC41LDAuMi02LjQsMC45Yy0xLjksMC42LTMuOCwxLjEtNS44LDEuNyAgYy0yLDAuNi0zLjksMS4zLTUuOCwyLjJjLTAuMiwwLjEtMC41LTAuMS0wLjcsMC4xbDAsMGwtMi4zLDAuN2MtMC4yLDAuMS0xOS45LDYuMS0zMC43LDYuMWMtMy44LDAtNS0wLjgtNS4yLTEuMmwtMC4xLTAuMyAgQzQuNiwyMy41LDUuOSwyMi44LDkuNCwyMS44eiI+PC9wYXRoPjwvc3ZnPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "Ry15":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-2-a5cb5e5c2c7de5c5feabe80ee375ada7.svg";

/***/ }),

/***/ "Symf":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA0Ni44OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0MGY0ZDI7fS5jbHMtMntmaWxsOiM2YTUyZmQ7fS5jbHMtM3tmaWxsOiMxNGUzYmE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5HZXQgUGF5bWVudCBOb3RpZmljYXRpb248L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTYuOTQsMzQuNTRxLTIsMy00LDZhMS43NCwxLjc0LDAsMCwxLTEuNTYuODNjLTEsMC0yLDAtMywwLDAsMCwwLC4wNiwwLC4wOWEzLjc3LDMuNzcsMCwwLDEsLjE0LDIuNDZjMCwuMTItLjA2LjI1LS4wOC4zOGEyNi4xNywyNi4xNywwLDAsMCw0LjE1LS4xMkE0LDQsMCwwLDAsMTUsNDIuNjhhMjIuMzksMjIuMzksMCwwLDAsMS43Ny0yLjYzbDIuODItNC4xN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MS40LDQzLjQ3YTQsNCwwLDAsMSwwLTEuNTcsMy41LDMuNSwwLDAsMC0uNDkuMzcsMy41LDMuNSwwLDAsMSwuNDktLjM3bC4xNS0uNThoLTNhMS41OCwxLjU4LDAsMCwxLTEuNC0uNzNsLS41OS0uODRhNy44Myw3LjgzLDAsMCwwLS43OS0xLjE4Yy0uODQtMS4zNC0xLjcyLTIuNjUtMi42Mi0zLjk0TDMzLDM0LjUzbC0uNzkuNDloMGExNS4wNiwxNS4wNiwwLDAsMC0xLjc2Ljg2bC40OC42NWMuODcsMS40LDEuNzksMi43NiwyLjczLDQuMTFhOCw4LDAsMCwwLC44LDEuMTlBNC41MSw0LjUxLDAsMCwwLDM5LDQ0LjI0aDIuNDlDNDEuNTIsNDQsNDEuMzYsNDMuNzUsNDEuNCw0My40N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MS41MiwzYy0uODYsMC0xLjczLDAtMi41OSwwYTMuNjYsMy42NiwwLDAsMC0xLjM2LjExQTMuOCwzLjgsMCwwLDAsMzUsNC42M2EzMywzMywwLDAsMC0yLjE0LDMuMkwzMC40LDExLjRsMi42NiwxLjM0YzEuMzEtMiwyLjYzLTMuOTMsMy45My01LjkxQTEuNzYsMS43NiwwLDAsMSwzOC42Myw2YzEsMCwxLjkzLDAsMi44OSwwQTUuMzYsNS4zNiwwLDAsMSw0MS41MiwzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5LjIxLDEwLjg4cS0xLjMyLTIuMS0yLjc1LTQuMTJhNy43Nyw3Ljc3LDAsMCwwLS43OC0xLjE4LDQuNSw0LjUsMCwwLDAtNC41Mi0yLjUzSDguNDdjLjA2LjIyLjExLjQ1LjE2LjY3bDAsLjJjLjIzLjU2LDAsMS4xMSwwLDEuNjdhLjA3LjA3LDAsMCwwLDAsLjA2bC0uMDcuMTNhMS42MiwxLjYyLDAsMCwwLDAsLjE5YzEsMCwyLDAsMywwQTEuNjUsMS42NSwwLDAsMSwxMyw2Ljc4Yy4yLjMuNDEuNTguNjEuODdhOC4zNSw4LjM1LDAsMCwwLC44LDEuMmMuODEsMS4zLDEuNjcsMi41NywyLjU1LDMuODIuMTQuMTIuMjcsMCwuNDEsMGwuNzktLjQ5YTUuMjQsNS4yNCwwLDAsMCwxLjQ3LS43NVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zOC4yNCwyOS4yNFYyMC40aDBWMTguNTRjMC0uNzcsMC0xLjUzLDAtMi4yOUExLjM1LDEuMzUsMCwwLDAsMzcuNTEsMTVjLS42Ni0uMzUtMS4zNC0uNjYtMi0xYTUuNjYsNS42NiwwLDAsMC0xLjE4LS41OWwtMS4yNi0uN0wzMC40LDExLjRsLS43OS0uMzJhNi4yLDYuMiwwLDAsMC0xLjE4LS41OWMtLjk0LS40OC0xLjg3LTEtMi44Mi0xLjQzYTEuMzIsMS4zMiwwLDAsMC0xLjIyLDBsLTMuMjIsMS42My0xLjU3LjcxYTUuMjQsNS4yNCwwLDAsMS0xLjQ3Ljc1bC0uNzkuNDloMGMtLjE0LDAtLjI3LjE1LS40MSwwLDAsLjItLjIzLjIyLS4zNy4yOUwxMi42OCwxNC45YTEuNTQsMS41NCwwLDAsMC0uOTMsMS41M2MwLC42LDAsMS4yMSwwLDEuODF2MTAuN2MwLC42NywwLDEuMzUsMCwyYTEuNDUsMS40NSwwLDAsMCwuODEsMS4zNWMuNjcuMzUsMS4zNS42NywyLDFsMS4yOS42NCwxLjA3LjU5LDIuNjYsMS4zNC44Ny4zN2gwbDEuMjkuNjRjLjg5LjQ1LDEuNzcuOTIsMi42NiwxLjM1YTEuMjcsMS4yNywwLDAsMCwxLjE0LDBsMy42Ni0xLjg1LDEuMTgtLjUyQTE1LjA2LDE1LjA2LDAsMCwxLDMyLjE2LDM1bC43OS0uNDkuMTMuMDljMC0uMjEuMjItLjIyLjM1LS4yOSwxLjI4LS42NSwyLjU2LTEuMjksMy44NS0xLjkyYTEuNjIsMS42MiwwLDAsMCwxLTEuNjFDMzguMjQsMzAuMjgsMzguMjQsMjkuNzYsMzguMjQsMjkuMjRabS0xMy41Ny0xN2EuNjQuNjQsMCwwLDEsLjY4LDBjLjMzLjE4LjY3LjMzLDEsLjQ5bDEuMjkuNjNjMS41MS44MSwzLjA1LDEuNTcsNC42LDIuMzFsMSwuNWMuMS4wNS4yMy4wOC4xNS4yNGEuODkuODksMCwwLDAtLjQuMmwtMy44NCwxLjljLTEuMjcuNjMtMi41MywxLjI1LTMuNzksMS44OWEuNjIuNjIsMCwwLDEtLjYzLDBjLTEtLjUtMi0xLTIuOTMtMS40NWE2Ljg0LDYuODQsMCwwLDAtMS4xOC0uNTlsLTMuOTUtMmMwLS4xOC4xNy0uMTguMjgtLjIzQzE5LjQ5LDE0Ljc5LDIyLjA5LDEzLjUsMjQuNjcsMTIuMTlaTTE3LjgzLDMxLjdhNS44NCw1Ljg0LDAsMCwwLTEuMTctLjU5LDEzLjA4LDEzLjA4LDAsMCwwLTEuMzQtLjY5Ljg3Ljg3LDAsMCwxLS42NC0xYy4wNS0xLDAtMi4wOCwwLTMuMTJWMTguNjdsMy44MywxLjg4LDEuMjkuNjRjLjkxLjQ2LDEuOCwxLDIuNzQsMS4zNy43NC4zMiwxLjE3LjczLDEsMS41N1YzNC40NGMtLjQsMC0uNjUtLjMyLTEtLjM5QzIxLDMzLjIzLDE5LjQzLDMyLjQzLDE3LjgzLDMxLjdabTguNjMsMi44MVYyMy4zNWMwLS40Ni40Ni0uNC42OC0uNjFsOC4xOC00LjA3VjMwYy0uMDYuMTQtLjIzLjE1LS4zMi4yNVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00LjQ2LDBBNC40Niw0LjQ2LDAsMSwwLDguOTIsNC40Niw0LjQ2LDQuNDYsMCwwLDAsNC40NiwwWm0wLDZBMS41NCwxLjU0LDAsMSwxLDYsNC40NiwxLjUzLDEuNTMsMCwwLDEsNC40Niw2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQuNDYsMzhhNC40Niw0LjQ2LDAsMSwwLDQuNDYsNC40NkE0LjQ2LDQuNDYsMCwwLDAsNC40NiwzOFptMCw2QTEuNTQsMS41NCwwLDEsMSw2LDQyLjQyLDEuNTMsMS41MywwLDAsMSw0LjQ2LDQ0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQ1LjU0LDBBNC40Niw0LjQ2LDAsMSwwLDUwLDQuNDYsNC40Niw0LjQ2LDAsMCwwLDQ1LjU0LDBabTAsNmExLjU0LDEuNTQsMCwxLDEsMC0zLjA3LDEuNTQsMS41NCwwLDAsMSwwLDMuMDdaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNDUuNTQsMzhBNC40Niw0LjQ2LDAsMSwwLDUwLDQyLjQyLDQuNDYsNC40NiwwLDAsMCw0NS41NCwzOFptMCw2YTEuNTQsMS41NCwwLDEsMSwwLTMuMDcsMS41NCwxLjU0LDAsMCwxLDAsMy4wN1oiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "TG6z":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "TPw6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tqks":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "U9rZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "UMQD":
/***/ (function(module, exports) {

module.exports = require("react-image-gallery");

/***/ }),

/***/ "UbIB":
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "WfNC":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA3IiBoZWlnaHQ9IjEwNyIgdmlld0JveD0iMCAwIDMwNyAxMDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpkYXJrZW4iIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTgxLjU2IDYuOEM4My4wOCA2LjggODQuMjQgNy4yOCA4NS4wNCA4LjI0Qzg1LjkyIDkuMTIgODYuMzYgMTAuMzIgODYuMzYgMTEuODRWODcuOEM4Ni4zNiA4OS4yNCA4NS45NiA5MC40IDg1LjE2IDkxLjI4Qzg0LjM2IDkyLjE2IDgzLjI0IDkyLjYgODEuOCA5Mi42QzgwLjM2IDkyLjYgNzkuMjggOTIuMTYgNzguNTYgOTEuMjhDNzcuODQgOTAuNCA3Ny40OCA4OS4yNCA3Ny40OCA4Ny44VjI2LjQ4TDUxLjQ0IDc2LjRDNTAuMzIgNzguNzIgNDguNjggNzkuODggNDYuNTIgNzkuODhDNDQuNDQgNzkuODggNDIuOCA3OC43MiA0MS42IDc2LjRMMTUuNDQgMjcuMDhWODcuOEMxNS40NCA4OS4yNCAxNS4wNCA5MC40IDE0LjI0IDkxLjI4QzEzLjUyIDkyLjE2IDEyLjQ0IDkyLjYgMTEgOTIuNkM5LjU2IDkyLjYgOC40NCA5Mi4xNiA3LjY0IDkxLjI4QzYuODQgOTAuNCA2LjQ0IDg5LjI0IDYuNDQgODcuOFYxMS44NEM2LjQ0IDEwLjMyIDYuODggOS4xMiA3Ljc2IDguMjRDOC42NCA3LjI4IDkuODQgNi44IDExLjM2IDYuOEMxMy4zNiA2LjggMTQuOTYgNy45NTk5OSAxNi4xNiAxMC4yOEw0Ni42NCA2OC43Mkw3Ni43NiAxMC4yOEM3Ny40IDkgNzguMDggOC4xMiA3OC44IDcuNjRDNzkuNiA3LjA4IDgwLjUyIDYuOCA4MS41NiA2LjhaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTIuMjU4IDkyLjZDMTEwLjczOCA5Mi42IDEwOS41MzggOTIuMTYgMTA4LjY1OCA5MS4yOEMxMDcuNzc4IDkwLjMyIDEwNy4zMzggODkuMDggMTA3LjMzOCA4Ny41NlYxMS44NEMxMDcuMzM4IDEwLjMyIDEwNy43NzggOS4xMiAxMDguNjU4IDguMjRDMTA5LjUzOCA3LjI4IDExMC43MzggNi44IDExMi4yNTggNi44QzExMy43NzggNi44IDExNC45NzggNy4yOCAxMTUuODU4IDguMjRDMTE2LjczOCA5LjEyIDExNy4xNzggMTAuMzIgMTE3LjE3OCAxMS44NFY4Ny41NkMxMTcuMTc4IDg5LjA4IDExNi43MzggOTAuMzIgMTE1Ljg1OCA5MS4yOEMxMTQuOTc4IDkyLjE2IDExMy43NzggOTIuNiAxMTIuMjU4IDkyLjZaIiBmaWxsPSIjMERCQjZFIi8+CjxwYXRoIGQ9Ik0xNzMuOTIyIDkyLjk2QzE2NS45MjIgOTIuOTYgMTU5LjAwMiA5MS4yNCAxNTMuMTYyIDg3LjhDMTQ3LjMyMiA4NC4yOCAxNDIuODAyIDc5LjI4IDEzOS42MDIgNzIuOEMxMzYuNDgyIDY2LjI0IDEzNC45MjIgNTguNTIgMTM0LjkyMiA0OS42NEMxMzQuOTIyIDQwLjg0IDEzNi40ODIgMzMuMiAxMzkuNjAyIDI2LjcyQzE0Mi44MDIgMjAuMTYgMTQ3LjMyMiAxNS4xNiAxNTMuMTYyIDExLjcyQzE1OS4wMDIgOC4xOTk5OSAxNjUuOTIyIDYuNDM5OTkgMTczLjkyMiA2LjQzOTk5QzE3OS4yODIgNi40Mzk5OSAxODQuMzIyIDcuMzE5OTkgMTg5LjA0MiA5LjA3OTk5QzE5My44NDIgMTAuNzYgMTk4LjAwMiAxMy4yIDIwMS41MjIgMTYuNEMyMDIuODAyIDE3LjYgMjAzLjQ0MiAxOSAyMDMuNDQyIDIwLjZDMjAzLjQ0MiAyMS43MiAyMDMuMTIyIDIyLjcyIDIwMi40ODIgMjMuNkMyMDEuODQyIDI0LjQgMjAxLjA4MiAyNC44IDIwMC4yMDIgMjQuOEMxOTkuMjQyIDI0LjggMTk4LjA4MiAyNC4zNiAxOTYuNzIyIDIzLjQ4QzE5Mi42NDIgMjAuMjggMTg4LjkyMiAxOC4wNCAxODUuNTYyIDE2Ljc2QzE4Mi4yODIgMTUuNDggMTc4LjQ4MiAxNC44NCAxNzQuMTYyIDE0Ljg0QzE2NC44ODIgMTQuODQgMTU3LjcyMiAxNy44OCAxNTIuNjgyIDIzLjk2QzE0Ny43MjIgMjkuOTYgMTQ1LjI0MiAzOC41MiAxNDUuMjQyIDQ5LjY0QzE0NS4yNDIgNjAuODQgMTQ3LjcyMiA2OS40OCAxNTIuNjgyIDc1LjU2QzE1Ny43MjIgODEuNTYgMTY0Ljg4MiA4NC41NiAxNzQuMTYyIDg0LjU2QzE3OC40MDIgODQuNTYgMTgyLjIwMiA4My45MiAxODUuNTYyIDgyLjY0QzE4OC45MjIgODEuMzYgMTkyLjY0MiA3OS4xMiAxOTYuNzIyIDc1LjkyQzE5OC4wODIgNzUuMDQgMTk5LjI0MiA3NC42IDIwMC4yMDIgNzQuNkMyMDEuMDgyIDc0LjYgMjAxLjg0MiA3NSAyMDIuNDgyIDc1LjhDMjAzLjEyMiA3Ni42IDIwMy40NDIgNzcuNiAyMDMuNDQyIDc4LjhDMjAzLjQ0MiA4MC40IDIwMi44MDIgODEuOCAyMDEuNTIyIDgzQzE5OC4wMDIgODYuMiAxOTMuODQyIDg4LjY4IDE4OS4wNDIgOTAuNDRDMTg0LjMyMiA5Mi4xMiAxNzkuMjgyIDkyLjk2IDE3My45MjIgOTIuOTZaIiBmaWxsPSIjRjFDMjMyIi8+CjxwYXRoIGQ9Ik0yOTIuMDkzIDg2LjM2QzI5Mi40MTMgODcgMjkyLjU3MyA4Ny42OCAyOTIuNTczIDg4LjRDMjkyLjU3MyA4OS42IDI5Mi4wOTMgOTAuNiAyOTEuMTMzIDkxLjRDMjkwLjI1MyA5Mi4yIDI4OS4xNzMgOTIuNiAyODcuODkzIDkyLjZDMjg1Ljg5MyA5Mi42IDI4NC40OTMgOTEuNjQgMjgzLjY5MyA4OS43MkwyNzUuMTczIDcwLjI4SDIyOS45MzNMMjIxLjI5MyA4OS43MkMyMjAuNDkzIDkxLjY0IDIxOS4wOTMgOTIuNiAyMTcuMDkzIDkyLjZDMjE1LjgxMyA5Mi42IDIxNC42OTMgOTIuMiAyMTMuNzMzIDkxLjRDMjEyLjc3MyA5MC41MiAyMTIuMjkzIDg5LjQ4IDIxMi4yOTMgODguMjhDMjEyLjI5MyA4Ny42NCAyMTIuNDUzIDg3IDIxMi43NzIgODYuMzZMMjQ3LjA5MyAxMC4wNEMyNDcuNTczIDguOTIgMjQ4LjI5MyA4LjA4IDI0OS4yNTMgNy41MTk5OUMyNTAuMjEzIDYuOTYgMjUxLjI1MyA2LjY4IDI1Mi4zNzMgNi42OEMyNTMuNTczIDYuNjggMjU0LjY1MyA3IDI1NS42MTMgNy42NEMyNTYuNTczIDguMiAyNTcuMjkzIDkgMjU3Ljc3MyAxMC4wNEwyOTIuMDkzIDg2LjM2Wk0yNzEuNTczIDYyLjEyTDI1Mi40OTMgMTkuMDRMMjMzLjUzMyA2Mi4xMkgyNzEuNTczWiIgZmlsbD0iI0Q3MjA4OSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAuNDQwMDAyIiB5PSIwLjQzOTk5NSIgd2lkdGg9IjMwNi4xMzMiIGhlaWdodD0iMTA2LjUyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeD0iNCIgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "Wl9Q":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-61de63f93163e2934b92ba62cc904daa.svg";

/***/ }),

/***/ "YcFM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slider-3-82eae521c3cb2103695c71808f1961a9.png";

/***/ }),

/***/ "YhXy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/theme/customVariant.js
var customVariant = __webpack_require__("vE1u");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/base.js
var base = __webpack_require__("/MbW");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Button/button.style.js





var ButtonStyle = external_styled_components_default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'), Object(external_styled_system_["themeGet"])('heights.3', '48'), Object(external_styled_system_["themeGet"])('widths.3', '48'), Object(external_styled_system_["themeGet"])('radius.0', '3'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), external_styled_system_["alignItems"], external_styled_system_["boxShadow"], customVariant["a" /* buttonStyle */], customVariant["c" /* colorStyle */], customVariant["d" /* sizeStyle */], base["a" /* base */]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(objectSpread["a" /* default */])({}, external_styled_system_["alignItems"].propTypes, external_styled_system_["boxShadow"].propTypes, external_styled_system_["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ var button_style = (ButtonStyle);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Animation/index.js

var spinner = Object(external_styled_components_["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
var AnimSpinner = Object(external_styled_components_["css"])(["animation:", " 1s linear infinite;"], spinner);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Loader/loader.style.js






var LoaderStyle = external_styled_components_default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], function (props) {
  return props.loaderColor ? props.loaderColor : '#000000';
}, AnimSpinner, customVariant["c" /* colorStyle */], base["a" /* base */]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(objectSpread["a" /* default */])({}, external_styled_system_["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ var loader_style = (LoaderStyle);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Loader/index.js





var Loader_Loader = function Loader(_ref) {
  var loaderColor = _ref.loaderColor,
      className = _ref.className,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return external_react_default.a.createElement(loader_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props));
};

Loader_Loader.defaultProps = {};
/* harmony default export */ var elements_Loader = (Loader_Loader);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Button/index.js






var Button_Button = function Button(_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      disabled = _ref.disabled,
      iconPosition = _ref.iconPosition,
      onClick = _ref.onClick,
      loader = _ref.loader,
      loaderColor = _ref.loaderColor,
      isMaterial = _ref.isMaterial,
      isLoading = _ref.isLoading,
      className = _ref.className,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  var buttonIcon = isLoading !== false ? external_react_default.a.createElement(external_react_["Fragment"], null, loader ? loader : external_react_default.a.createElement(elements_Loader, {
    loaderColor: loaderColor || '#30C56D'
  })) : icon && external_react_default.a.createElement("span", {
    className: "btn-icon"
  }, icon); // set icon position

  var position = iconPosition || 'right';
  return external_react_default.a.createElement(button_style, Object(esm_extends["a" /* default */])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props), position === 'left' && buttonIcon, title && external_react_default.a.createElement("span", {
    className: "btn-text"
  }, title), position === 'right' && buttonIcon);
};

Button_Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ var elements_Button = __webpack_exports__["a"] = (Button_Button);

/***/ }),

/***/ "Z05o":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("LcAa");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZQvE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/SG-b88c22ca4b417fc2508c879e8d70a85f.png";

/***/ }),

/***/ "ZU6y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Button/index.js + 4 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/UI/Logo/index.js + 1 modules
var Logo = __webpack_require__("rcog");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/footer-bg.png
var footer_bg = __webpack_require__("wr6Q");
var footer_bg_default = /*#__PURE__*/__webpack_require__.n(footer_bg);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Footer/footer.style.js


var FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "sc-1r5b4xm-0"
})(["position:relative;background-color:#f9fbfd;overflow:hidden;background:linear-gradient(to bottom,#f7f8fd 0%,#fafbff 100%);@media (min-width:576px){padding-top:130px;&:before{content:'';position:absolute;width:104%;padding-bottom:104%;border-top-right-radius:11%;top:14%;left:0;pointer-events:none;background-color:#fff;transform:rotate(-6deg);@media (max-width:767px){padding-bottom:150%;}}}.footer_container{background-repeat:no-repeat;background-position:center 50px;padding-top:80px;padding-bottom:80px;position:relative;@media (min-width:576px){background-image:url(", ");}@media (max-width:990px){padding-bottom:20px;}}"], footer_bg_default.a);
var List = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "sc-1r5b4xm-1"
})([""]);
var ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "sc-1r5b4xm-2"
})(["a{color:rgba(52,61,72,0.8);font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:#343d48;}}"]);

/* harmony default export */ var footer_style = (FooterWrapper);
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: external "react-icons-kit/ionicons/socialDribbbleOutline"
var socialDribbbleOutline_ = __webpack_require__("+ThS");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/SocialProfile/socialProfile.style.js

var SocialProfileWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "socialProfilestyle__SocialProfileWrapper",
  componentId: "sc-1v425mc-0"
})(["position:relative;display:flex;align-items:center;flex-wrap:wrap;"]);
var SocialProfileItem = external_styled_components_default.a.div.withConfig({
  displayName: "socialProfilestyle__SocialProfileItem",
  componentId: "sc-1v425mc-1"
})(["margin-right:18px;a{color:#000;transition:0.15s ease-in-out;&:hover{color:#000;}}"]);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/SocialProfile/index.js






var SocialProfile_SocialProfile = function SocialProfile(_ref) {
  var items = _ref.items,
      className = _ref.className,
      iconSize = _ref.iconSize;
  var addAllClasses = ['social_profiles'];

  if (className) {
    addAllClasses.push(className);
  }

  return external_react_default.a.createElement(SocialProfileWrapper, {
    className: addAllClasses.join(' ')
  }, items.map(function (item, index) {
    return external_react_default.a.createElement(SocialProfileItem, {
      key: "social-item-".concat(index),
      className: "social_profile_item"
    }, external_react_default.a.createElement(link_default.a, {
      href: item.url || '#'
    }, external_react_default.a.createElement("a", {
      style: {
        color: "#333333 !important"
      }
    }, external_react_default.a.createElement(external_react_icons_kit_default.a, {
      icon: item.icon || socialDribbbleOutline_["socialDribbbleOutline"],
      size: iconSize || 22
    }))));
  }));
};

/* harmony default export */ var Crypto_SocialProfile = (SocialProfile_SocialProfile);
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/data/Crypto/index.js
var Crypto = __webpack_require__("o5DF");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/logo.png
var logo = __webpack_require__("2lDv");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Footer/index.js















var Footer_Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      colOne = _ref.colOne,
      colTwo = _ref.colTwo,
      button = _ref.button,
      titleStyle = _ref.titleStyle,
      logoStyle = _ref.logoStyle,
      textStyle = _ref.textStyle;
  return external_react_default.a.createElement(footer_style, null, external_react_default.a.createElement(Container["a" /* default */], {
    className: "footer_container"
  }, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), external_react_default.a.createElement(Box["a" /* default */], colOne, external_react_default.a.createElement(Logo["a" /* default */], {
    href: "#",
    logoSrc: logo_default.a,
    title: "Hosting",
    logoStyle: logoStyle
  }), external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
    content: "Be Radically Intelligent"
  }, textStyle)), external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
    content: "Radicali Pte Ltd "
  }, textStyle)), external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
    content: "32 Carpenter Street,"
  }, textStyle)), external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
    content: "\xA9 Radicali 2019. All rights reserved."
  }, textStyle, {
    style: {
      fontSize: 12 + 'px'
    }
  }))), external_react_default.a.createElement(Box["a" /* default */], colTwo, Crypto["d" /* Footer_Data */].map(function (widget, index) {
    return external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
      className: "col"
    }, col, {
      key: "footer-widget-".concat(index),
      style: {
        float: 'left'
      }
    }), external_react_default.a.createElement(Heading["a" /* default */], Object(esm_extends["a" /* default */])({
      content: widget.title
    }, titleStyle)), external_react_default.a.createElement(List, null, widget.menuItems.map(function (item, index) {
      return external_react_default.a.createElement(ListItem, {
        key: "footer-list-item-".concat(index)
      }, external_react_default.a.createElement(link_default.a, {
        href: item.url
      }, external_react_default.a.createElement("a", {
        className: "ListItem"
      }, item.text)));
    })));
  }), external_react_default.a.createElement(List, null, external_react_default.a.createElement(Crypto_SocialProfile, {
    className: "footer_social",
    items: Crypto["g" /* SOCIAL_PROFILES */],
    iconSize: 25,
    style: {
      right: 0
    }
  }), external_react_default.a.createElement("a", {
    href: "https://angel.co/radicali"
  }, external_react_default.a.createElement(Button["a" /* default */], Object(esm_extends["a" /* default */])({}, button, {
    title: "We Are Hiring",
    style: {
      width: 'auto',
      textAlgin: 'center',
      flexDirection: 'column',
      alignSelf: 'center',
      fontSize: "18px",
      marginTop: 50 + 'px'
    }
  }))))))));
}; // Footer style props


// Footer default style
Footer_Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '80%', '50%', '33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};
/* harmony default export */ var Crypto_Footer = __webpack_exports__["a"] = (Footer_Footer);

/***/ }),

/***/ "ZjOe":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAwcICf/EACMQAAEEAQUAAwEBAAAAAAAAAAEAAgMEBQYHERITCCEiFBX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYhERWJxERAREQEREBU3O7+6Y03l8vSu2slE/BObHemGIuPqwyOjjkZF7tiMTpXNmi6xtcXuMjWgFx4VyWit0/hPW3K3MdqaPK43DXYshFlYbNPD9b888Pk6GO1P7AWKzJYY5PLow8sZ+xwSQ2tp7dHA6n09ZylfINgpUpzVtOuxPpPqSgtHnKyZrHxu/TSA4AkPaRyHAmTltdYjC6SyWdmvwPxOIisTW7EBM4hEHYTDhnJLmFjwWgF3ZpHHP0qpS2StM0PrPH2sxWnymu7UlnI3GY4CBnetDU6xwPkfwBXgY0d3vHblxBB6qVQ2ZZS2KfoZ9uvbqNoyY2GWxTD2GD7bE2aPsPUhnVrzy30Ic78duAGO58lNIYzzFy3lqDns9ntt4O9XdVi79BNOHwgwRF3IEkvVh6u4ceruL2uesD8ETpyhq2nR1HQx+P17S/y8zQp4Uw0q9PmQCKhH7n+X6msEkmUF87nBo4AXQqAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="

/***/ }),

/***/ "a8RH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("Dlp7");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Form/input.style.js


var InputField = external_styled_components_default.a.div.withConfig({
  displayName: "inputstyle__InputField",
  componentId: "sc-1363bcb-0"
})(["position:relative;.field-wrapper{position:relative;}&.icon-left,&.icon-right{.field-wrapper{display:flex;align-items:center;> .input-icon{position:absolute;top:0;bottom:auto;display:flex;align-items:center;justify-content:center;width:34px;height:40px;}}}&.icon-left{.field-wrapper{> .input-icon{left:0;right:auto;}> input{padding-left:34px;}}}&.icon-right{.field-wrapper{> .input-icon{left:auto;right:0;}> input{padding-right:34px;}}}label{display:block;color:", ";font-size:", "px;font-weight:", ";margin-bottom:", "px;transition:0.2s ease all;}textarea,input{font-size:16px;padding:11px;display:block;width:100%;color:", ";box-shadow:none;border-radius:4px;box-sizing:border-box;border:1px solid ", ";transition:border-color 0.2s ease;&:focus{outline:none;border-color:", ";}}textarea{min-height:150px;}&.is-material{label{position:absolute;left:0;top:10px;}input,textarea{border-radius:0;border-top:0;border-left:0;border-right:0;padding-left:0;padding-right:0;}textarea{min-height:40px;padding-bottom:0;}.highlight{position:absolute;height:1px;top:auto;left:50%;bottom:0;width:0;pointer-events:none;transition:all 0.2s ease;}&.icon-left,&.icon-right{.field-wrapper{flex-direction:row-reverse;> .input-icon{width:auto;}> input{flex:1;}}}&.icon-left{.field-wrapper{> input{padding-left:20px;}}label{top:-15px;font-size:12px;}}&.icon-right{.field-wrapper{> input{padding-right:20px;}}}&.is-focus{input{border-color:", ";}label{top:-16px;font-size:12px;color:", ";}.highlight{width:100%;height:2px;background-color:", ";left:0;}}}"], Object(external_styled_system_["themeGet"])('colors.labelColor', '#767676'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'), Object(external_styled_system_["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'));
var EyeButton = external_styled_components_default.a.button.withConfig({
  displayName: "inputstyle__EyeButton",
  componentId: "sc-1363bcb-1"
})(["width:43px;height:40px;border:0;padding:0;margin:0;top:0;right:0;position:absolute;outline:none;cursor:pointer;box-shadow:none;display:flex;align-items:center;justify-content:center;background-color:transparent;> span{width:12px;height:12px;display:block;border:solid 1px ", ";border-radius:75% 15%;transform:rotate(45deg);position:relative;&:before{content:'';display:block;width:4px;height:4px;border-radius:50%;left:3px;top:3px;position:absolute;border:solid 1px ", ";}}&.eye-closed{> span{&:after{content:'';display:block;width:1px;height:20px;left:calc(50% - 1px / 2);top:-4px;position:absolute;background-color:", ";transform:rotate(-12deg);}}}"], Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ var input_style = (InputField);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Form/index.js







var Form_Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      inputType = _ref.inputType,
      isMaterial = _ref.isMaterial,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      passwordShowHide = _ref.passwordShowHide,
      className = _ref.className,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  var _useState = Object(external_react_["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // toggle function


  var handleToggle = function handleToggle() {
    setState(Object(objectSpread["a" /* default */])({}, state, {
      toggle: !state.toggle
    }));
  }; // add focus class


  var handleOnFocus = function handleOnFocus(event) {
    setState(Object(objectSpread["a" /* default */])({}, state, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  var handleOnBlur = function handleOnBlur(event) {
    setState(Object(objectSpread["a" /* default */])({}, state, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  var handleOnChange = function handleOnChange(event) {
    setState(Object(objectSpread["a" /* default */])({}, state, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  var getInputFocusClass = function getInputFocusClass() {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  var inputElement, htmlFor; // Add all classs to an array

  var addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push("icon-".concat(iconPosition));
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  var LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  var LabelField = label && external_react_default.a.createElement("label", {
    htmlFor: htmlFor
  }, label); // Input type check

  switch (inputType) {
    case 'textarea':
      inputElement = external_react_default.a.createElement("textarea", Object(esm_extends["a" /* default */])({}, props, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus
      }));
      break;

    case 'password':
      inputElement = external_react_default.a.createElement("div", {
        className: "field-wrapper"
      }, external_react_default.a.createElement("input", Object(esm_extends["a" /* default */])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: state.toggle ? 'password' : 'text',
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus
      })), passwordShowHide && external_react_default.a.createElement(EyeButton, {
        onClick: handleToggle,
        className: state.toggle ? 'eye' : 'eye-closed'
      }, external_react_default.a.createElement("span", null)));
      break;

    default:
      inputElement = external_react_default.a.createElement("div", {
        className: "field-wrapper"
      }, external_react_default.a.createElement("input", Object(esm_extends["a" /* default */])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: inputType,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus
      })), icon && external_react_default.a.createElement("span", {
        className: "input-icon"
      }, icon));
  }

  return external_react_default.a.createElement(input_style, {
    className: "".concat(addAllClasses.join(' '), " ").concat(getInputFocusClass())
  }, LabelPosition === 'top' && LabelField, inputElement, isMaterial && external_react_default.a.createElement("span", {
    className: "highlight"
  }), LabelPosition === 'bottom' && LabelField);
};
/** Inout prop type checking. */


/** Inout default type. */
Form_Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onChange: function onChange() {}
};
/* harmony default export */ var Form = __webpack_exports__["a"] = (Form_Input);

/***/ }),

/***/ "aX+3":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slider-1-82eae521c3cb2103695c71808f1961a9.png";

/***/ }),

/***/ "b4OD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/FeatureBlock/featureBlock.style.js

 // FeatureBlock wrapper style

var FeatureBlockWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureBlockstyle__FeatureBlockWrapper",
  componentId: "sc-1pllarm-0"
})(["&.icon_left{display:flex;.icon__wrapper{flex-shrink:0;}}&.icon_right{display:flex;flex-direction:row-reverse;.content__wrapper{text-align:right;}.icon__wrapper{flex-shrink:0;}}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["flexWrap"], external_styled_system_["flexDirection"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["position"], external_styled_system_["color"], external_styled_system_["space"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], external_styled_system_["overflow"]); // Icon wrapper style

var IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureBlockstyle__IconWrapper",
  componentId: "sc-1pllarm-1"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["position"], external_styled_system_["color"], external_styled_system_["space"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], external_styled_system_["overflow"], external_styled_system_["fontSize"]); // Content wrapper style

var ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureBlockstyle__ContentWrapper",
  componentId: "sc-1pllarm-2"
})(["", " ", " ", ""], external_styled_system_["width"], external_styled_system_["space"], external_styled_system_["textAlign"]); // Button wrapper style

var ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureBlockstyle__ButtonWrapper",
  componentId: "sc-1pllarm-3"
})(["", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["alignItems"], external_styled_system_["flexDirection"], external_styled_system_["justifyContent"]);

/* harmony default export */ var featureBlock_style = (FeatureBlockWrapper);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/FeatureBlock/index.js





var FeatureBlock_FeatureBlock = function FeatureBlock(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      title = _ref.title,
      button = _ref.button,
      description = _ref.description,
      iconPosition = _ref.iconPosition,
      additionalContent = _ref.additionalContent,
      wrapperStyle = _ref.wrapperStyle,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "icon", "title", "button", "description", "iconPosition", "additionalContent", "wrapperStyle", "iconStyle", "contentStyle", "btnWrapperStyle"]);

  // Add all classs to an array
  var addAllClasses = ['feature__block']; // Add icon position class

  if (iconPosition) {
    addAllClasses.push("icon_".concat(iconPosition));
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // check icon value and add


  var Icon = icon && external_react_default.a.createElement(IconWrapper, Object(esm_extends["a" /* default */])({
    className: "icon__wrapper"
  }, iconStyle), icon);
  return external_react_default.a.createElement(featureBlock_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, props), Icon, title || description || button ? external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(ContentWrapper, Object(esm_extends["a" /* default */])({
    className: "content__wrapper"
  }, contentStyle), title, description, button && external_react_default.a.createElement(ButtonWrapper, Object(esm_extends["a" /* default */])({
    className: "button__wrapper"
  }, btnWrapperStyle), button)), additionalContent) : '');
};

FeatureBlock_FeatureBlock.defaultProps = {
  iconPosition: 'top'
};
/* harmony default export */ var components_FeatureBlock = __webpack_exports__["a"] = (FeatureBlock_FeatureBlock);

/***/ }),

/***/ "bCB9":
/***/ (function(module, exports) {



/***/ }),

/***/ "bKIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");





var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div')(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Box'), function (props) {
  return props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])({
    display: 'flex'
  }, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('FlexBox'));
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BoxWrapper, props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Box);
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "bjcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jvFD");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YhXy");





var calendly = function calendly(_ref) {
  var button = _ref.button;

  function handleClick(e) {
    e.preventDefault();
    Calendly.initPopupWidget({
      url: 'https://calendly.com/_shubhankar/30min',
      return: false
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClick
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "",
    onClick: handleClick
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, button, {
    title: "Schedule Demo!",
    style: {
      type: 'button',
      fontSize: '13px',
      fontWeight: '700',
      borderRadius: '4px',
      pr: '50px',
      backgroundColor: '#d72089',
      // colors: 'secondaryWithBg',
      minHeight: 'auto',
      height: '40px',
      textAlign: 'center'
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (calendly);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cYPL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Button/index.js + 4 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/data/Crypto/index.js
var Crypto = __webpack_require__("o5DF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Transaction/transaction.style.js

var TransactionsWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "transactionstyle__TransactionsWrapper",
  componentId: "anltc-0"
})(["padding:120px 0 80px;@media (max-width:1440px){padding:80px 0 50px;}@media (max-width:480px){padding:80px 0 0px;}button{border-radius:6px;background-image:-moz-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );background-image:-webkit-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );background-image:-ms-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );&:hover{box-shadow:-6.691px 7.431px 20px 0px rgba(255,131,157,0.2);}> span{font-weight:700;letter-spacing:1px;}}.colleft{width:35%;@media (max-width:1440px){width:40%;}@media (max-width:1199px){width:100%;}}.colright{width:calc(65% - 100px);margin-left:100px;@media (max-width:1440px){width:calc(60% - 100px);}@media (max-width:1199px){width:100%;margin-left:0;margin-top:100px;}}"]);
var FeatureSection = external_styled_components_default.a.section.withConfig({
  displayName: "transactionstyle__FeatureSection",
  componentId: "anltc-1"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;.featureWrapper{max-width:260px;margin-bottom:45px;@media (max-width:599px){max-width:100%;}img{width:50px;height:50px;object-fit:contain;margin-bottom:20px;}}"]);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Transaction/index.js














var Transaction_TransactionsHistory = function TransactionsHistory(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      btnStyle = _ref.btnStyle,
      sectionSubTitle = _ref.sectionSubTitle,
      cardArea = _ref.cardArea,
      featureTitleStyle = _ref.featureTitleStyle,
      featureDescriptionStyle = _ref.featureDescriptionStyle;
  return external_react_default.a.createElement(TransactionsWrapper, {
    id: "transactions"
  }, external_react_default.a.createElement(Container["a" /* default */], null, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "colleft"
  }, col, {
    style: {
      flexDirection: 'column'
    }
  }), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], title),
    description: external_react_default.a.createElement(Text["a" /* default */], description) // button={<Button title="GET DOCS" {...btnStyle} />}

  })), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "colright"
  }, col, cardArea), external_react_default.a.createElement(FeatureSection, null, Crypto["i" /* TRANSACTIONS_FEATURE */].map(function (item, index) {
    return external_react_default.a.createElement(Fade_default.a, {
      up: true
    }, external_react_default.a.createElement("div", {
      key: "feature-".concat(index),
      className: "featureWrapper"
    }, external_react_default.a.createElement(Image["a" /* default */], {
      src: item.image,
      alt: item.title
    }), external_react_default.a.createElement(Heading["a" /* default */], Object(esm_extends["a" /* default */])({
      as: "h3",
      content: item.title
    }, featureTitleStyle)), external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
      content: item.des
    }, featureDescriptionStyle))));
  }))))));
}; // Transactions style props


// Transactions default style
Transaction_TransactionsHistory.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Transactions section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center'
  },
  // Transactions section title default style
  title: {
    content: 'How MICA helps',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '100%'],
    textAlign: ['center', 'center']
  },
  // Transactions section description default style
  description: {
    content: 'MICA helps compliance teams do what they do best - only faster, cheaper and easier! ',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '40px', '40px', '55px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px']
  },
  sectionSubTitle: Object(defineProperty["a" /* default */])({
    content: 'How MICA Helps',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f'
  }, "textAlign", ['left', 'left']),
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['25px', '27px', '27px', '27px', '27px'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left']
  },
  // Transactions section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left']
  }
};
/* harmony default export */ var Transaction = (Transaction_TransactionsHistory);

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZZJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "dyaU":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hardesh-1327843a22dcee85e06b586765c3f24e.png";

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "emby":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "fB5O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-image-gallery"
var external_react_image_gallery_ = __webpack_require__("UMQD");
var external_react_image_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_image_gallery_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/react-image-gallery/styles/css/image-gallery.css
var image_gallery = __webpack_require__("bCB9");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/CryptoSlides/cryptoSlides.style.js

var FeatureSliderWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "cryptoSlidesstyle__FeatureSliderWrapper",
  componentId: "seyf6a-0"
})(["padding:180px 0;@media (max-width:1440px){padding:80px 0 120px;}@media (max-width:480px){padding:80px 0 90px;}.FeatureSlider{position:relative;.image-gallery-slide-wrapper{.image-gallery-swipe{padding:10px 15px 16px 19px;overflow:hidden;height:100%;@media (max-width:990px){padding:9px 6px 8px 6px;}.image-gallery-slides{height:100%;border-radius:20px;@media (max-width:990px){border-radius:40px;}.image-gallery-image{img{height:600px;@media (max-width:768px){height:auto;}}}}}}.image-gallery-bullets{bottom:auto;margin:0;position:absolute;width:100%;z-index:4;top:auto;bottom:-60px;left:auto;display:flex;justify-content:center;align-items:center;.image-gallery-bullets-container{margin:0;padding:0;text-align:center;display:flex;flex-direction:row;.image-gallery-bullet{padding:0;margin:0;margin-right:15px;transition:all 0.3s ease;width:13px;height:13px;border-radius:50%;top:50%;left:0;box-shadow:0 1px 2px rgba(0,0,0,0.16);z-index:1;background:#fff;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);&::after{content:'';position:absolute;width:8px;height:8px;border-radius:50%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#f3f2fb;-webkit-transition:0.25s ease-in-out;transition:0.25s ease-in-out;}&.active{box-shadow:0 1px 2px rgba(0,0,0,0.2);background:#fff;width:13px;height:13px;&::after{background-color:#6150cc;width:8px;height:8px;}}}}}.image-gallery-thumbnails{display:none;}}"]);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/slider-1.png
var slider_1 = __webpack_require__("aX+3");
var slider_1_default = /*#__PURE__*/__webpack_require__.n(slider_1);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/slider-2.png
var slider_2 = __webpack_require__("KHw6");
var slider_2_default = /*#__PURE__*/__webpack_require__.n(slider_2);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/slider-3.png
var slider_3 = __webpack_require__("YcFM");
var slider_3_default = /*#__PURE__*/__webpack_require__.n(slider_3);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/CryptoSlides/index.js



var _row;













var CryptoSlides_images = [{
  original: "".concat(slider_1_default.a)
}, {
  original: "".concat(slider_2_default.a)
}, {
  original: "".concat(slider_3_default.a)
}, {
  original: "".concat(slider_2_default.a)
}, {
  original: "".concat(slider_1_default.a)
}, {
  original: "".concat(slider_3_default.a)
}];

var CryptoSlides_FeatureSlider = function FeatureSlider(_ref) {
  var row = _ref.row,
      title = _ref.title,
      description = _ref.description,
      sectionSubTitle = _ref.sectionSubTitle;
  return external_react_default.a.createElement(FeatureSliderWrapper, {
    id: "featureslider"
  }, external_react_default.a.createElement(Container["a" /* default */], {
    noGutter: true,
    mobileGutter: true
  }, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), external_react_default.a.createElement(Text["a" /* default */], sectionSubTitle), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], title),
    description: external_react_default.a.createElement(Text["a" /* default */], description)
  })), external_react_default.a.createElement(Box["a" /* default */], {
    className: "FeatureSlider"
  }, external_react_default.a.createElement(external_react_image_gallery_default.a, {
    items: CryptoSlides_images,
    className: "Slider-img",
    showPlayButton: false,
    showFullscreenButton: false,
    showNav: false,
    showBullets: true,
    autoPlay: false
  }))));
}; // Transactions style props


// Trusted default style
CryptoSlides_FeatureSlider.defaultProps = {
  // Trusted section row default style
  row: (_row = {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  }, Object(defineProperty["a" /* default */])(_row, "flexBox", true), Object(defineProperty["a" /* default */])(_row, "flexDirection", 'column'), Object(defineProperty["a" /* default */])(_row, "alignSelf", 'center'), Object(defineProperty["a" /* default */])(_row, "justifyContent", 'center'), _row),
  title: {
    content: 'A Trusted Proof of Investment Vehicle',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center']
  },
  description: {
    content: 'Easily buy, sell or exchange over 30 different cryptocurrencies. Now euro deposits and withdrawn available.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center']
  },
  sectionSubTitle: Object(defineProperty["a" /* default */])({
    content: 'Fast, Cheap, Zero Fraud',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f'
  }, "textAlign", ['center', 'center'])
};
/* harmony default export */ var CryptoSlides = (CryptoSlides_FeatureSlider);

/***/ }),

/***/ "fFb/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg_one-d92468f08763d21b2eeaf084e1bafaff.svg";

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gnd3":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shubhankar-b5c1736088bd79fb5b3825835575e1f0.png";

/***/ }),

/***/ "h7sq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "i1HE":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAAAAACl1GkQAAAAAW9yTlQBz6J3mgAADhdJREFUeF7tnVmQVNUdxv/NDLuIRECioqIoSAUVtHAJohIFpcAAisKwBo0RBRQQKi8+pCp5SEIB4h4TYZhhERAQBUQUREARo6KgyBIQcUEJu6zDTOdhps850327eyjG+H3D93vhf+/5emro33Sfu5xzbixup0D9A9kSpyOn9JZWyxYQ/18kBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJASM3GyBChOLZUtUYeKndLkkpPKE3NepOFukypKz6smSbJkKUnlCru2VLVGFyXkqW6KiVF4fUll/IpRU3pdD5QkRlYKEgCEhYEgIGBIChoSAISFgSAgYEgKGhIAhIWBICBgSAoaEgCEhYEgIGBIChoSAISFgSAgYEgKGhIAhIWBICBgSAoaEgCEhYEgIGBIChoSAISFgSAgYEgKGhIAhIWBICBgSAoaEgCEhYEgIGBIChoSAISFgSAgYEgKGhIAhIWBICBgSAoaEgCEhYEgIGBIChoSAISFgSAgYEgKGhIAhIWBICBgSAoaEgCEhYEgIGBIChoSAISFgSAgYEgKGhIAhIWBICBgSAoaEgCEhYEgIGBIChoSAISFgSAgYEgKGhIAhIWBICBgSAoaEgCEhYEgIGBIChoSAISFgSAgYEgKGhIAhIWBICBgSAoaEgJGbLQDFkY0nXF2jZY20uS93xRJlvEnTtDFEuIQU/enNnERd89me6WLf9vvUffLrvCAhPx1nDl6y321MuOnsNLEXVvm6y2/ShEAh60M6B5+KVdPThD76h6/PG10rTQoUMiE1Hj3X1SXPbIvMHBv3rd8Y0iYygwuZEGs72Ncbgk9CwIK5vr7u/sgIMGxC7IHWvs7/MCKwa+xhV9cZfU5EAho6IU2H++OQ7yYWpQZeXO3ru7qmtoNDJ8Tu6ejruW+mNK9/Nu7qpqPSn6qgwifkzFFnuvrghANJrUUTtrs69tCVRgefEOt4j6+XvpzU+MZMX19/n/FBKCR3uD/3PjExOMQ1sz1jD7q67phGxgehEGv9gK/XvliuqeAdX/e6wwhhFGKD2/r6n58FDRufKnH1hSP5enQjFXLuo/693v50sauLJ25xdezh4ISFCEoh1rOTr2esdOWyaX53+98ZJZxC6o5s4Oq9ExJn5gfG7nN7zxjT0CjhFGId+vh60atlxfS3/M57OxsnpEJyhjZz9bEndpmZ2dYn/O3EZiOrp7yGA1IhdvmD7iatrS40M4s/vcHtqTa0VepLOGAVYoPauTL+3BYzW5nvGzsMSsmzQCuk8Qh/K3DT83E7NHa326435hdRL6GAVojd2cXXU9bY7Nf9Zp/bUuMs8AqpPdIf2P7w5Obxx93WJSO4hm6Ug1eI3dDP16/+YZ2rqw1vGZFmgVhI7OFLXX1gmb+IdXP/qDQLxEKs+cNRv339Mf4snhBmIdbvhoidebdG7OSBWsjZI+uk7Lv00RxjhlqIdbkzeU/O8MuigjxwC6k5InncVUfqHt3YhVi7QeW3zxpTPzLHA7kQe7D8VcT+t6TJ0cAu5KJh4XX2y4dz9+jGL8Q6nxds3NY8bY4FeiHzdwQbb25Nm2OBXciGiX7QidnnwcBeUsiFnJhQ/jORHwx954RcyJKkaW27xh+NDtLALWTP3/1Q3lJeey0yyAO3kCnLk/ccGbcrKsgDtZANT/q7IAlWB2MdGGEWktyjm5lZ/NkvUncSwSwkuUcvZetTqR8bIoiF7Pmb79GbBJPXpr0TEaaBWMiU4I0fMt6PxNo77lBEmgVeIWGP3vb+W/J8y+I5EXEWaIWEPXrNUefa0Evc5vEJ5SceUkEr5I2gR+/aw6zFED/6+qN/RbyABFYh4Tl648dqm9mA633rC5+mvoIEViH5QY9+33VmZo1G1HZ7dgRTRcggFbIhONm4Ykjpv127+fZZqWtukMApJOzRa4wsW0eg1ojGbufBcX7lOS44hYTn6LffnaiuHej3LnvJOKEUEp6jNxxdN1HGhlzudp+Y6BehoYJSSNijD/q1r5sN9YNOPnveKGEUEvborR7ypx9mfTr4etIHxgihkBPjfY+e+6ifHm1mDUad4eqd448ZIYRC3pjh69t6l2/rdJevX1lkhPAJCc/RG4yuV76x+iN+3NzhcX5eLg98QsKr7v1vSm5tE6wit6owuZUAOiHhVfcWw1J//d/7W1UlT29OaYaHTUh4jp4zPGIo7/mP+NHXm5/hu5vLJiS86t6xb1Ti7mCOYcG7UQloyISEPXr90ZGTc+qNOsvVu8f5Va5JIBMSnqPndYzO3BwcCi98JTqDC5eQ8Bz9kkfSTM7JGXaRq4+N/z46BAuVkLBHrzasRbpYqwd9/cGkdClQqISEV907ZJhuG6ylZc+Fy8gSwCQkvOpeb7QfiJXCOSNqunr7RK67uUxCClblJIj1DhaKTeW33SyRrDY7ZYQ8NEQrS5VcPc39+cTaZfzFa//Vr1pa0iRDEA8iIdXaZ0t4Lr44WwIVpq+s0wIJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCoIkKKt/Kt+xNNFRHy5WNfZ4uQUEWEzJm3IFuEhKohZOfU+NS92UIcVA0h89fZB29lC3FQJYTsnVJixwvYH7paSpUQsniNmb39XrYYBVVByKHJRWZ2oDB8kDctVUHI8hVmZrZwfZYcBVVAyPHJpStd7gyWIOelCgh5f0lZ8fKXmWIk8Aspzt9XVm2emylHAr+QT1515bT/ZsiRwC+k8AdXrn09Q44EeiEbgwffnihgfixxKfRCZoQP/1q5Im2OBXYhX5U71j1cwLUmbATsQuZ8UW5z8cdpcjSQC/kh6SE6u6dF53ggF7JgbdKOuZuiYkRwC9mfn3xBcfvLkUEeuIW8uTpl14zvInJEUAs5Min12ZHryW+uUwtZEbHOfknhgdSdRDALKZr8Y6Ks28rtfX9ZZJgFZiH/XuzKG//iHvl5dArlM3ATEAspyd+TKHP7dfGPTljK+ZjoMoiFrJ/vyjada/R1D97YVxiPzHNALGSqP8Dt19A6XeG2Xvs8Kk4Cr5Ats13ZsrtZo3vd5jcvRcRZ4BUy0z9C754LzKzHhW571o6IPAm0Qr7xlxHP721mdumdbsdGuud7emiFzPMdRfeWZmbWp0FiR3yqO/6ig1XI7gJ3KHV2v5iZmV3d0bV+uMRYYRWy8ENXdm5b+m+Nvu5xkkUFR1JeQQKpkIP57l5t3YGJJ9rfco1rX873IPUySIUsXeXKDu4c/aw+sUT5YwHryGtOIUcnu8kg1QfWcbu7XebKRZ8aJ5xC3vXTpa4JHop7QU9X/hA8WJoKSiEn8t1jo2P93cGumd1zjivn+PNGKiiFfLzQla386aCZte7syv8EIxqZYBQSn+IHVfc5L2zJyavr6ul+zC8TjEI2zHPlhb3KN7W/wZWfLDJGGIVM86s29PTHVWZmVjcvJ1EWF7obvEwQCtk205WN+iY33v4rV656J7mRAUIhsze7sstVyY1N/HfYkSlFya0E8AnZOdWV9Qa4LyjHXU1ducRf7+KBT8j8da7scE3R8SSKmt3umvdMI7y5nmtk7M33K2Ntykt9x2Nf+fqVh1qmtKNDJ2RxMMhns+9NIvlq1uOZA4CwfWWVLqNRUWZ+my0BB5uQ5Sc1i/BzP2WaBTIhxycdzhYJKZm6L1sEDTIhbhmNCrJmabYEGlxCivP3Z4uU5xjdsmZcQj456T5h2ZpsCTC4hBSe9CX1/QVkC/pSnYdsDGZ0VrdM+GPjBZ+1zpDDg0rIDH8W3ubxWumvi8SO/dldxvpuhoT8VATLaMQG98gQNNvhryvOfsCPwiaAqQ8JltFo2T19zMysW3NXbpqXPgYIkZBwGY3e56fPmZld1N3X03anjQFCJCRYRuMCPzsnDfc2dOXHfm4oATxCwmU0erTIEDQzsytvdWVRwUldbvmZ4RESLKPRqF+GXCnV82q5esXKDEE0aISEy2jccVX6XIIO7Vx5iGlZMxohwTIa9QZU4GC9fm83FN4Wr02fQ4NFSLCMht3sR8NloKvvZ3YRjbxmERIso1FzYO0MQUfT4NRx7pb0OTBIhATLaNi1/gAqI70au3Ibz7JmJEKCZTSqDaifIRjQOpg5MuP79DksSIQEy2hc0TVDLiQ3z8+tWkezrBmHkC2zfJ3nJ+Vkof11riwudFN8wOEQMnObK5vfnSFXnnp9/P/uvbfT56CgEPL1dIuVYb2aZUt7urRyrztaQLKsWQVOsX5+cv9YXHaWF8+5KXO0HL98ZmviDy5ej2SeNIWQJinTQCpG7MYbs0XgoPjKOp2QEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAUNCwJAQMCQEDAkBQ0LAkBAwJAQMCQFDQsCQEDAkBAwJAaPyhFTeTyIkJ1ugwuRmC1SY9+sXZ4tUWXJWxbNFKkrslH5S/QO+jsXS56o88fBtPKW3tPI+IfFT+j1EGaf1Nz8iEgKGhIAhIWBICBgSAoaEgCEhYEgIGBICxv8Aa9Wr9tVef6QAAAAASUVORK5CYII="

/***/ }),

/***/ "iAQE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Button/index.js + 4 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/socialTwitter"
var socialTwitter_ = __webpack_require__("F6u6");

// EXTERNAL MODULE: external "react-icons-kit/icomoon/facebook2"
var facebook2_ = __webpack_require__("1UEL");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/bg_one.svg
var bg_one = __webpack_require__("fFb/");
var bg_one_default = /*#__PURE__*/__webpack_require__.n(bg_one);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/BannerSection/bannerSection.style.js

var BannerWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "bannerSectionstyle__BannerWrapper",
  componentId: "np0qsc-0"
})(["padding-top:100px;padding-bottom:100px;margin-top:100px;background-position:right;background-repeat:no-repeat;align-items:right;margin-right:-30px;@media (max-width:1440px){padding-bottom:105px;margin-right:-50px;}@media (max-width:990px){padding-top:150px;padding-bottom:210px;}@media (max-width:768px){padding-top:50px;padding-bottom:120px;}@media only screen and (max-width:480px){padding-top:0px;padding-bottom:120px;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;@media (max-width:990px){display:none;}@media only screen and (max-width:480px){width:100%;}}.row{position:relative;z-index:1;width:100%;}.contact__form__wrapper{@media (max-width:480px){padding-left:0;padding-top:15px;}}.button__wrapper{margin-top:40px;.reusecore__button{border-radius:6px;&:first-child{transition:all 0.3s ease;margin-right:30px;@media (max-width:990px){margin-right:0;}&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}&:nth-child(2){padding-left:0;@media (max-width:1100px){padding-left:15px;}@media (max-width:480px){padding-left:0;padding-top:15px;}margin-top:15px;.btn-text{font-weight:700;margin-top:7px;}.btn-icon{margin-top:6px;margin-left:6px;}}> a{font-weight:700;color:#fff;}}.btnWithoutColor{margin-right:15px !important;padding:5px 0px !important;.btn-icon{svg{width:30px;height:30px;}}.btn-text{padding-left:15px;font-size:15px;font-weight:500 !important;font-family:'Poppins',sans-serif;}&:hover{box-shadow:none !important;}}}"]);
var BgImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSectionstyle__BgImageWrapper",
  componentId: "np0qsc-1"
})(["position:absolute;right:20px;width:50%;top:0;img{width:100%;height:auto;display:block;margin:-2px -1px;@media (max-width:480px){margin:-2px 0px;height:60vh;top:0;}}@media (max-width:990px){padding-top:150px;padding-bottom:210px;}@media (max-width:768px){padding-top:10px;padding-bottom:10px;}@media only screen and (max-width:480px){padding-top:10px;padding-bottom:10px;width:100%;position:relative;}"]);
/* harmony default export */ var bannerSection_style = (BannerWrapper);
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Contact/contact.style.js
var contact_style = __webpack_require__("MiXP");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Form/index.js + 1 modules
var Form = __webpack_require__("a8RH");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/BannerSection/index.js


















var BannerSection_BannerSection = function BannerSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      title2 = _ref.title2,
      btnStyle = _ref.btnStyle,
      button = _ref.button,
      description = _ref.description,
      description2 = _ref.description2,
      discountText = _ref.discountText,
      discountAmount = _ref.discountAmount,
      outlineBtnStyle = _ref.outlineBtnStyle;

  var ButtonGroup = function ButtonGroup() {
    return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Button["a" /* default */], Object(esm_extends["a" /* default */])({
      title: "Get Started"
    }, btnStyle)), external_react_default.a.createElement(Button["a" /* default */], Object(esm_extends["a" /* default */])({
      title: "Downlaod Whitepaper",
      variant: "textButton",
      icon: external_react_default.a.createElement("i", {
        className: "flaticon-next"
      })
    }, outlineBtnStyle)));
  };

  var ShareButtonGroup = function ShareButtonGroup() {
    return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Button["a" /* default */], Object(esm_extends["a" /* default */])({
      title: "Share on Twitter",
      variant: "textButton",
      iconPosition: "left",
      icon: external_react_default.a.createElement(external_react_icons_kit_["Icon"], {
        icon: socialTwitter_["socialTwitter"]
      })
    }, outlineBtnStyle, {
      className: "btnWithoutColor"
    })), external_react_default.a.createElement(Button["a" /* default */], Object(esm_extends["a" /* default */])({
      title: "Share on Facebook",
      variant: "textButton",
      iconPosition: "left",
      icon: external_react_default.a.createElement(external_react_icons_kit_["Icon"], {
        icon: facebook2_["facebook2"]
      })
    }, outlineBtnStyle, {
      className: "btnWithoutColor"
    })));
  };

  return external_react_default.a.createElement(bannerSection_style, {
    id: "banner_section"
  }, external_react_default.a.createElement(BgImageWrapper, {
    style: {}
  }, external_react_default.a.createElement(Image["a" /* default */], {
    src: bg_one_default.a,
    alt: "banner background"
  })), external_react_default.a.createElement(Container["a" /* default */], null, external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "col"
  }, col), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], Object(esm_extends["a" /* default */])({
      content: "meet ",
      as: "h1"
    }, title))
  }), external_react_default.a.createElement(FeatureBlock["a" /* default */], {
    title: external_react_default.a.createElement(Heading["a" /* default */], Object(esm_extends["a" /* default */])({
      as: "h1",
      content: "MICA! "
    }, title2)),
    description: external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
      content: "Here to make compliance teams  ridiculously efficient! "
    }, description)) // button={<ButtonGroup />}

  }))), external_react_default.a.createElement(contact_style["b" /* default */], {
    style: {
      width: '90%',
      maxWidth: '500px',
      displat: 'flex',
      justifyContent: 'center',
      float: 'left',
      marginTop: '50px'
    }
  }, external_react_default.a.createElement("form", {
    action: "https://radicali.us20.list-manage.com/subscribe/post?u=da33e2fc9676e9f6acdfa36ba&id=26dc6ac9e4",
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    className: "validate",
    target: "",
    style: {
      width: 100 + '%',
      height: '60px'
    },
    noValidate: true
  }, external_react_default.a.createElement(Form["a" /* default */], {
    inputType: "email",
    placeholder: "Enter Your Email address",
    iconPosition: "right",
    isMaterial: false,
    id: "mce-EMAIL",
    className: "email_input",
    style: {}
  }), external_react_default.a.createElement(Button["a" /* default */], Object(esm_extends["a" /* default */])({}, button, {
    title: "Meet MICA!",
    type: "submit",
    style: {
      backgroundColor: '#4185f4'
    }
  }))))));
};

BannerSection_BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '100px !important',
    alignItems: 'center',
    display: 'table',
    mt: '10px'
  },
  col: Object(defineProperty["a" /* default */])({
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '60%', '65%'],
    display: 'table-cell'
  }, "pr", '30px'),
  title: {
    fontSize: ['36px', '48px', '60px', '72px', '120px'],
    fontWeight: '300',
    color: '#000',
    letterSpacing: '-0.025em',
    mb: ['0px', '0px'],
    lineHeight: '1.1',
    whiteSpace: 'pre',
    fontFamily: 'Nunito'
  },
  title2: {
    fontSize: ['60px', '72px', '84px', '108px', '144px'],
    fontWeight: '700',
    color: '#000',
    letterSpacing: '-0.025em',
    mb: ['10px', '10px'],
    lineHeight: '1.1',
    whiteSpace: 'pre',
    fontFamily: 'Nunito'
  },
  description: {
    fontSize: ['18px', '18px', '20px', '24px', '36px'],
    color: '#999999',
    lineHeight: ['24px', '24px', '24px', '22px', '40px'],
    mb: '0',
    mt: '0px',
    maxWidth: '550px',
    fontFamily: 'Nunito',
    minWidth: '150px'
  },
  description2: {
    fontSize: ['10px', '12px', '14px', '14px', '16px'],
    color: '#fff',
    lineHeight: '30px',
    fontWeight: 400,
    mb: '0',
    maxWidth: '550px'
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '6px'
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    p: '5px 10px'
  },
  contactForm: {
    width: [0.6, 0.6, 0.6, 0.4]
  },
  button: {
    type: 'button',
    fontSize: "".concat(2),
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    backgroundColor: '#4185f4 !important',
    height: "40px"
  }
};
/* harmony default export */ var Crypto_BannerSection = __webpack_exports__["a"] = (BannerSection_BannerSection);

/***/ }),

/***/ "iP0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");





var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('img')({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Image'));

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Image);
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "jPfo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "jQLT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-4-f420ac61661ebc78e5af2c25db6a4ccd.svg";

/***/ }),

/***/ "jjNQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Navbar/navbar.style.js


var NavbarStyle = external_styled_components_default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarStyle",
  componentId: "i4x6b2-0"
})(["display:flex;align-items:center;min-height:56px;padding:16px 16px;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["flexDirection"], external_styled_system_["flexWrap"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["color"], external_styled_system_["space"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ var navbar_style = (NavbarStyle);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Navbar/index.js





var Navbar_Navbar = function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      navbarStyle = _ref.navbarStyle,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return external_react_default.a.createElement(navbar_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' ')
  }, props), children);
};

/** Navbar default proptype */
Navbar_Navbar.defaultProps = {};
/* harmony default export */ var elements_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: external "rc-drawer"
var external_rc_drawer_ = __webpack_require__("ik7d");
var external_rc_drawer_default = /*#__PURE__*/__webpack_require__.n(external_rc_drawer_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/rc-drawer/assets/index.css
var assets = __webpack_require__("5sXw");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Drawer/index.js






var Drawer_Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(external_rc_drawer_default.a, Object(esm_extends["a" /* default */])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props), external_react_default.a.createElement("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle
  }, closeButton), children), external_react_default.a.createElement("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler
  }, drawerHandler));
};

Drawer_Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ var elements_Drawer = (Drawer_Drawer);
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Button/index.js + 4 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/UI/Logo/index.js + 1 modules
var Logo = __webpack_require__("rcog");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js


var HamburgMenuWrapper = external_styled_components_default.a.button.withConfig({
  displayName: "hamburgMenustyle__HamburgMenuWrapper",
  componentId: "sc-12m1tps-0"
})(["border:0;background:transparent;width:44px;height:30px;cursor:pointer;", " ", " ", " ", " ", " ", " ", " > span{display:block;width:100%;height:2px;margin:4px 0;float:right;background-color:", ";transition:all 0.3s ease;&:first-child{margin-top:0;}&:last-child{width:calc(100% - 10px);margin-bottom:0;}}&:focus,&:hover{outline:none;> span{&:last-child{width:100%;}}}&:focus{> span{&:first-child{transform:rotate(45deg);transform-origin:8px 50%;}&:nth-child(2){display:none;}&:last-child{width:100%;transform:rotate(-45deg);transform-origin:9px 50%;}}}"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["color"], external_styled_system_["space"], external_styled_system_["border"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], function (props) {
  return props.barColor ? props.barColor : '#10ac84';
});
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ var hamburgMenu_style = (HamburgMenuWrapper);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/HamburgMenu/index.js





var HamburgMenu_HamburgMenu = function HamburgMenu(_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      barColor = _ref.barColor,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  var addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return external_react_default.a.createElement(hamburgMenu_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null));
};

/* harmony default export */ var components_HamburgMenu = (HamburgMenu_HamburgMenu);
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("8qGZ");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/assets/image/crypto/MICA.svg
var MICA = __webpack_require__("WfNC");
var MICA_default = /*#__PURE__*/__webpack_require__.n(MICA);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Calendly/index.js
var Calendly = __webpack_require__("bjcY");

// EXTERNAL MODULE: external "react-driftjs"
var external_react_driftjs_ = __webpack_require__("wj79");
var external_react_driftjs_default = /*#__PURE__*/__webpack_require__.n(external_react_driftjs_);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Drift/index.js



var Drift_drift = function drift() {
  return external_react_default.a.createElement(external_react_driftjs_default.a, {
    appId: "sdmezcthnhmh"
  });
};

/* harmony default export */ var Drift = (Drift_drift);
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/common/src/containers/Crypto/Navbar/index.js















var Crypto_Navbar_Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle,
      button = _ref.button,
      row = _ref.row,
      menuWrapper = _ref.menuWrapper;

  var _useContext = Object(external_react_["useContext"])(DrawerContext["a" /* DrawerContext */]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return external_react_default.a.createElement(elements_Navbar, Object(esm_extends["a" /* default */])({}, navbarStyle, {
    className: "saas_navbar"
  }), external_react_default.a.createElement(Container["a" /* default */], null, external_react_default.a.createElement(Box["a" /* default */], row, external_react_default.a.createElement(Logo["a" /* default */], {
    href: "/",
    logoSrc: MICA_default.a,
    title: "Meet MICA",
    logoStyle: logoStyle,
    className: "main-logo"
  }), external_react_default.a.createElement(Box["a" /* default */], Object(esm_extends["a" /* default */])({}, menuWrapper, {
    style: {
      right: 5
    }
  }), external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", {
    className: "main_menu",
    href: "/about",
    style: {
      color: '#000'
    }
  }, "About us")), external_react_default.a.createElement(link_default.a, {
    href: "/contact"
  }, external_react_default.a.createElement("a", {
    className: "main_menu",
    style: {
      color: '#000'
    }
  }, "Contact")), external_react_default.a.createElement(link_default.a, {
    href: "https://angel.co/radicali"
  }, external_react_default.a.createElement("a", {
    className: "main_menu",
    target: "_blank",
    style: {
      color: '#000'
    }
  }, "Careers")), external_react_default.a.createElement(link_default.a, {
    href: "https://app.meetmica.io"
  }, external_react_default.a.createElement("a", {
    className: "main_menu",
    target: "_blank",
    style: {
      color: '#000'
    }
  }, "Sign In")), external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", null, external_react_default.a.createElement(Calendly["a" /* default */], null))), external_react_default.a.createElement(elements_Drawer, {
    width: "420px",
    height: "auto",
    placement: "right",
    drawerHandler: external_react_default.a.createElement(components_HamburgMenu, {
      barColor: "#000"
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler
  }, external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", {
    className: "main_menu",
    href: "/about",
    style: {
      color: '#000',
      marginBottom: '10px'
    }
  }, "About us")), external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
    className: "main_menu",
    href: "/contact",
    style: {
      color: '#000',
      marginBottom: '10px'
    }
  }, "Contact")), external_react_default.a.createElement(link_default.a, {
    href: "https://angel.co/radicali"
  }, external_react_default.a.createElement("a", {
    className: "main_menu",
    href: "https://angel.co/radicali",
    target: "_blank",
    style: {
      color: '#000',
      marginBottom: '10px'
    }
  }, "Careers")), external_react_default.a.createElement(link_default.a, {
    href: "https://app.meetmica.io"
  }, external_react_default.a.createElement("a", {
    className: "main_menu",
    target: "_blank",
    style: {
      color: '#000',
      marginBottom: '10px'
    }
  }, "Sign In")), external_react_default.a.createElement(link_default.a, null, external_react_default.a.createElement("a", {
    style: {
      marginBottom: '10px'
    }
  }, external_react_default.a.createElement(Calendly["a" /* default */], null))))))), external_react_default.a.createElement(Drift, null));
};

Crypto_Navbar_Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logoStyle: {
    maxWidth: ['60px', '100px'],
    width: '5em',
    height: 'auto'
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    backgroundColor: '#4285f4 !important',
    minHeight: 'auto',
    height: '40px',
    mr: '40px'
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};
/* harmony default export */ var Crypto_Navbar = __webpack_exports__["a"] = (Crypto_Navbar_Navbar);

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "jvIq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABpCAYAAACTbQnDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlmSURBVHgB7d15jFXVHQfw77nLm40ZYIYBhxnWspgygJVNDAiVBkyRRWIlbYMLamlr2qT8YU3Tf7pgY/qHseoftVobtdY0bSltKK1WSCsoNFgQUehYhn2HYVZg5t17Ts85D6smzrv3vv2e+X2SG8K8M29m8r7vvrMfJiQQYggLhBiEAk2MQoEmRqFAE6NQoIlRHBSZuHoZaL8AfqIV4tQxiHMnIeT/RU830HdVFpCFXBesogpsSB0gL9Y4DlbDaLBh14ENll9jDIQorBjddqL3KsSh9+D/ewdE6/upUGfCcWA1jYfVPBvW9LlgVdUgA1tBAy0628Hf/if8vTLI508jl9Qd3Jo2B/bcxWDDR4IMTIUJtPwR3usbwbf/FUJVI/KKwZoyA87Sr6aqKGRAyXug+Xu74b32e103LqhBNbBvXgxnwTKqYw8g+Qu0rCd7WzfCf2MLiskaPRHOVx4Cq6kFMV9+At3TheRLT4AfbUEpYINr4az+Bqyxk0HMlvNAi7ZzSP7yp/LfsygpZRVw77hPNhxvAjFXTgMtLpyVYX5M9yNn9tswsMpBwNB62aCrBSuvkl+zdENSdLUBbRd0Twm4j4y4Cbh3fg3W1NkgZspZoEXHJSSf+4kM9RlExRrGwG6eBTZ5emqwJFH26QVlkEV7m+y7ln3YsrEpDsk+bM9DVO7a78KaMAXEPLkJtHyK5HOPgctBkvA/mcH+3DxY85bAGt4oW282ohLnz4Af3ANv2yYgwuAMGzoM7t3rwUY0gZglJ4H2trwiezP+Ero8qx8Jd/XXwUaORU5c6UbyTy+C79up31xhWHL43JF3alZRCWKOrAPN9/8LyZefClWWyTqsvXC5vG7XdeNcU70qnvxdRFd7qPL2gtvhLLkLxBzZpaqvV/Y1bwpVlMleBnvFPbA/vzwvYVasMZPgPvg9sNr6UOX9f2wGP3McxBxZJct7YzNEmEDIALv3PwL7xvnIN9WoTHxrQ8j5HHJI/nfPhK6mkNKXcaBFTyf49hCjgJYM85fWgTWNQ8GUlcNd8x3Z+BseWFScOqoblsQMGQea730Lorc3sJzzhVWwbpiLQmN1I+Desz5UWV+9MekubYTMAi37fv03Xw0spu7KquFVLKra4cz/YmA5fqQF4kQrSPxlFGje8g7EpfPpC8l+ZnflfXlrAIZlL75T16vTkndnf9frIPGXUdr8PTsCy9gz5ueunzkbtgPnttWBxfjBvRBXekDiLXqg5YsuWg8EFrNnLkSpsCY0B072F5e7gVKbUEUiixxofv504J1ML2BtLGCvRpBEGaypcwKL8ZZ3QeItcqDDrDxhU2bKW3T0uRn5pBbRqi7EdPixQyDxFnkbAxHiRbevvyH9c3S2Q3RcREF5SbDKaojujn6L8BPp/zbR1ZH51NiYsEZ9BnEWPdBB9UwZGtQ1pC3C33lTT2gqOT1dejgf/UxfFYcPIvnK0zBZ2aMvIM6iVzkC7qzW0GFgZWWIK//iOZD4ih5otaNROjHfOsC60gUSX9G77foChrvLKxBnYYbzSemKHmjB0z/OSqt3IzKa0xFr0QPtJtI/nvedkfIskQCJr8iBZuUBS5Y6LyHOeDktyYqz6IEePDTt43rSkh99JXapsGuGgMRX5H5oplZoH+9/qmVq8KENrK7/yfWsaTzsW4o3rbRfal+Q6v7fsKyhqTR/b/J/0QMdtPSf++CH9sOuu7XfIta46/UVN6y+Ec5ttKi2lEWvcoyeGFiG79sFQooheqDlSKDaOT8dfvQDvZMSIYUWPdDVQ2CNmpC+kGwU+ru3gZBCy2jFSpjNDv0dr8phchpGJoWVUaDtaTcFH9Bz9TK8PzwLQgops2PdKgfJu/Qs+Du3pi3GD+zRGzha4z+Louhuh7ftz4HF1PIsO8Tq8GLwd/49/QFLldVwFq1EGGrrCX78v2nLOMvWIM4yPqfQnr0I/q5tgXMfkr95Gom1D+stcwuKc/S9+DOIgBdQcVY9gFLF9+9Ou6urPmojZKD9D94F37M9bZm4BzrjPQbYdaNgN4fYOFwdT/HykxCFHBJP9so30lOhwswG1ehPG2KGrDbNcFbc2+/qjo8TF88h+fMf6+Mq8k30XoG38Vf69K1ATH7SqOPfyuI95ZV8JLtdYCqr5MjZl0MVVXM8ks9skH3UwXfNTKm+b++lJ/TBnmFYE6fLBm7wanASH1lva2TPmCeDMTVUWVXtSD67Ad7mX+vtxHJJbX6TfPxhOewe8hQBeVd2Vtxd9J2dSG5lf3i9m5CNqvuR/MWj4aoUvi/7qP+me0DsW5am7pCZTtmUDT8uGzr+W6+Bt+wL/30JdXjQg3LUM9w+0iQ+sg80rp0DeNc6XaVQIQtDhd/74/Pwt27SjTL7xnmpiU9BZ60ILqsvF1JdgrLFzk8dRVT2gmWw1N4hxDg5CbSiTmx116yXvQtPBq87/BjR2abv2OpS/cFqPzxWO1zv8fzhYgKhnk8dCtTdAXH2pN7sRnhJZMJesBSO/GQgZspZoBVr8jRd/fA2Pg/I3oaoRPtFfeWLPedWOEuCN24k8ZXTQCt6WLxuBLwXHg99eE++MVlnthYuhyMvYra8NPHVkWnuuu/rwZdiY1U1sOVIIIV5YMhbn5WqByce+iFsNSxbpJ2UrEnT4H77R/pTgwwMOa9yfIJtw1m0CvaUWXrmHT9xGIWg7srOynupJ2MAym+gr1FVD/ebP4A42Qpvy2/BjxwM3b0X6efUN+iqBWueCebGd389krmCBPpDrHE83AcekcE+os804e+/ndo5P5vnTMjuvTETdQ+GNWl64PIwYraivPqscazu3sMdayHOHAM//B/w1gMQp4+l9l9OMyVVTSRS36+2QrAmTU2tHqfha3JNcW9nah+MhjGw1XXz4tTXei/rOR+ip+ejbcUcF6yiSg5V18lh8ioQ0p/S+3wuq5R1YXWBkMjos5oYhQJNjEKBJkahQBOjUKCJUSjQxCgUaGIUGicudQx6ACrt45GeL+o3xAsTgo59KmWiuxPw+tKWYUOGIdRzqWVs6srBc5UqCjQxCtWhiVEo0MQoFGhiFAo0MQoFmhiFAk2MQoEmRqFAE6NQoIlRKNDEKBRoYhQKNDEKBZoYhQJNjEKBJkahQBOjUKCJUSjQxCgUaGIUCjQxCgWaGIUCTYxCgSZGoUATo1CgiVEo0MQoFGhiFAo0MQoFmhiFAk2MQoEmRvkfMLgFdAiqaCoAAAAASUVORK5CYII="

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lhSI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentWrapper; });
/* unused harmony export PrevButton */
/* unused harmony export NextButton */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ewA");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  body{\n    font-family: 'Poppins', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Poppins', sans-serif;\n  }\n  p{\n    font-family: 'Poppins', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #000;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: rgb(255,148,147);;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: rgb(255,148,147);\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: rgb(255,148,147);;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #6d4efe;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n"], ["\n  body{\n    font-family: 'Poppins', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Poppins', sans-serif;\n  }\n  p{\n    font-family: 'Poppins', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #000;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: rgb(255,148,147);;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: rgb(255,148,147);\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: rgb(255,148,147);;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #6d4efe;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "cryptostyle__ContentWrapper",
  componentId: "sc-1e98ter-0"
})(["overflow:hidden;.sticky-nav-active{.saas_navbar{background:#fff;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);padding:15px 0;padding-left:60px;@media (max-width:480px){padding-left:0px;}.main_menu{li{a{color:#000 !important;&:hover{color:rgb(255,148,147);}}&.is-current{a{color:rgb(255,148,147);}}}a{color:#000;}}}.hamburgMenu__bar{> span{background:#000;}}}.saas_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:30px 0;padding-left:60px;@media (max-width:480px){padding-left:0px;}.logo-alt{display:none;}.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:rgb(255,148,147);}}a{padding:5px;font-size:16px;font-weight:400;color:#000;transition:0.15s ease-in-out;&:hover{color:rgb(255,148,147);}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}button{border-radius:6px;background-color:#4285f4;&:hover{box-shadow:-6.691px 7.431px 20px 0px rgba(255,131,157,0.2);}> span{font-weight:700;letter-spacing:1px;}}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}"]);
var PrevButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "cryptostyle__PrevButton",
  componentId: "sc-1e98ter-1"
})(["position:relative;padding:18px 10px;cursor:pointer;&:hover{span{background:#3444f1;@media (min-width:991px){width:100px;}}}span{width:18px;height:2px;background:#d1d3de;display:block;position:relative;transition:0.3s cubic-bezier(0.445,0.05,0.55,0.95);&:before,&:after{content:'';display:block;height:2px;border-radius:2px;background:inherit;position:absolute;}&:before{transform:rotate(-45deg);top:-4px;left:0;width:10px;}&:after{transform:rotate(45deg);width:8px;bottom:-6px;left:1px;}}"]);
var NextButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "cryptostyle__NextButton",
  componentId: "sc-1e98ter-2"
})(["position:relative;padding:18px 10px;cursor:pointer;&:hover{span{background:#3444f1;@media (min-width:991px){width:100px;}}}span{width:18px;height:2px;background:#d1d3de;display:block;position:relative;transition:0.3s cubic-bezier(0.445,0.05,0.55,0.95);&:before,&:after{content:'';display:block;height:2px;border-radius:2px;background:inherit;position:absolute;}&:before{transform:rotate(45deg);top:-4px;right:0;width:10px;}&:after{transform:rotate(-45deg);width:8px;bottom:-6px;right:1px;}}"]);

/***/ }),

/***/ "lpv4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "mXe9":
/***/ (function(module, exports) {



/***/ }),

/***/ "o5DF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MENU_ITEMS */
/* unused harmony export MENU_ITEMS2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TESTIMONIALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TRANSACTIONS_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PROOFS_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SCALABLE_FEATURE; });
/* unused harmony export BETA_FEATURE */
/* unused harmony export menuWidget */
/* unused harmony export Language_NAMES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Features2; });
/* unused harmony export Features3 */
/* unused harmony export TESTIMONIAL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Footer_Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SOCIAL_PROFILES; });
/* harmony import */ var _assets_image_crypto_author_4_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZjOe");
/* harmony import */ var _assets_image_crypto_author_4_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_author_4_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_crypto_author_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wUZg");
/* harmony import */ var _assets_image_crypto_author_2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_author_2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_crypto_author_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ifa3");
/* harmony import */ var _assets_image_crypto_author_3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_author_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_crypto_author_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CeX/");
/* harmony import */ var _assets_image_crypto_author_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_author_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_crypto_cash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("RGm1");
/* harmony import */ var _assets_image_crypto_cash_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_cash_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_crypto_easy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("A8vB");
/* harmony import */ var _assets_image_crypto_easy_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_easy_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_crypto_fast_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tJus");
/* harmony import */ var _assets_image_crypto_fast_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_fast_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_crypto_tf4_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Symf");
/* harmony import */ var _assets_image_crypto_tf4_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_tf4_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_crypto_proof1_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("sDhx");
/* harmony import */ var _assets_image_crypto_proof1_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof1_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_crypto_proof2_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4cGJ");
/* harmony import */ var _assets_image_crypto_proof2_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof2_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_crypto_proof3_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+ACJ");
/* harmony import */ var _assets_image_crypto_proof3_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof3_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_crypto_proof4_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("xPyb");
/* harmony import */ var _assets_image_crypto_proof4_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof4_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_crypto_proof5_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("2qRj");
/* harmony import */ var _assets_image_crypto_proof5_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof5_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_crypto_proof6_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("QJuY");
/* harmony import */ var _assets_image_crypto_proof6_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof6_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("u4iz");
/* harmony import */ var _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_crypto_SG_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ZQvE");
/* harmony import */ var _assets_image_crypto_SG_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_SG_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_image_crypto_ef_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("jvIq");
/* harmony import */ var _assets_image_crypto_ef_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_ef_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_image_crypto_beta_3_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("rQre");
/* harmony import */ var _assets_image_crypto_beta_3_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_beta_3_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_image_crypto_seedplus_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("MYuC");
/* harmony import */ var _assets_image_crypto_seedplus_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_seedplus_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_image_crypto_xa_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("i1HE");
/* harmony import */ var _assets_image_crypto_xa_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_xa_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("F6u6");
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_icons_kit_ionicons_socialLinkedin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("9iZZ");
/* harmony import */ var react_icons_kit_ionicons_socialLinkedin__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialLinkedin__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_image_crypto_hardesh_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("dyaU");
/* harmony import */ var _assets_image_crypto_hardesh_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_hardesh_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_image_crypto_shubhankar_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("gnd3");
/* harmony import */ var _assets_image_crypto_shubhankar_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_shubhankar_png__WEBPACK_IMPORTED_MODULE_23__);























 // import { socialMedium } from 'react-icons-kit/ionicons/socialMedium';



var MENU_ITEMS = [// {
//   label: 'Home',
//   path: '#banner_section',
//   offset: '0',
// },
{
  label: 'About Us',
  path: '/about',
  offset: '100'
}];
var MENU_ITEMS2 = [// {
  //   label: 'Home',
  //   path: '#banner_section',
  //   offset: '0',
  // },
  // {
  //   label: 'Who we are',
  //   path: '#betasection',
  //   offset: '100',
  // },
  // {
  //   label: 'Founders',
  //   path: '#control',
  //   offset: '-10',
  // },
  // {
  //   label: 'Purpose',
  //   path: '#purpose',
  //   offset: '150',
  // },
];
var TESTIMONIALS = [{
  review: 'Best working experience  with this amazing team & in future, we want to work together',
  name: 'Denny Hilguston',
  designation: 'CEO of Dell Co.',
  avatar: "".concat(_assets_image_crypto_author_4_jpg__WEBPACK_IMPORTED_MODULE_0___default.a)
}, {
  review: 'Impressed with master class support of the team and really look forward for the future.',
  name: 'Justin Albuz',
  designation: 'Co Founder of IBM',
  avatar: "".concat(_assets_image_crypto_author_2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a)
}, {
  review: 'I have bought more than 10 themes on ThemeForest, and this is the first one I review.',
  name: 'Milly Cristiana',
  designation: 'Manager of Hp co.',
  avatar: "".concat(_assets_image_crypto_author_3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a)
}, {
  review: 'Impressed with master class support of the team and really look forward for the future.',
  name: 'Milly Cristiana',
  designation: 'Manager of Hp co.',
  avatar: "".concat(_assets_image_crypto_author_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a)
}];
var TRANSACTIONS_FEATURE = [{
  image: _assets_image_crypto_cash_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: 'Faster!',
  des: 'MICA automates the grunt, so that compliance teams focus on the higher-value work. We help you get more done faster!'
}, {
  image: _assets_image_crypto_easy_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Cheaper!',
  des: 'Compliance teams can reduce their spend on external advisers & consultants, managing multiple risks for the price of one.'
}, {
  image: _assets_image_crypto_fast_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Smarter!',
  des: 'Digitize your internal compliance policies & processes with MICA, keeping your fingers on the pulse of your organization’s governance.'
}, {
  image: _assets_image_crypto_tf4_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Easier!',
  des: 'Collaborate on regulatory change, compliance testing, and manage your projects & goals, all from MICA’s dashboard.      '
}];
var PROOFS_FEATURE = [{
  image: _assets_image_crypto_proof1_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Instant trading',
  des: 'Never miss a price swing.'
}, {
  image: _assets_image_crypto_proof2_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  title: 'No hidden fees',
  des: 'know our fees upfront.'
}, {
  image: _assets_image_crypto_proof3_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
  title: 'Secure storage',
  des: 'Sleep with peace of mind.'
}, {
  image: _assets_image_crypto_proof4_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
  title: 'Systematic trading',
  des: 'History intraday market.'
}, {
  image: _assets_image_crypto_proof5_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
  title: 'Network Effect',
  des: 'Casinos contribute 1%.'
}, {
  image: _assets_image_crypto_proof6_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
  title: 'Bigger Rewards',
  des: 'Players are incentivized.'
}];
var SCALABLE_FEATURE = [{
  image: _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  title: 'Daily Jackpot',
  des: '35000 CLV'
}, {
  image: _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  title: 'Weekly Jackpot',
  des: '250000 CLV'
}, {
  image: _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  title: 'Monthly Jackpot',
  des: '4999697 CLV'
}, {
  image: _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  title: 'Yearly Jackpot',
  des: '300245785000 CLV'
}];
var BETA_FEATURE = [{
  image: _assets_image_crypto_SG_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  title: 'SGInnovate',
  des: 'Deposit & Withdraw money.'
}, {
  image: _assets_image_crypto_ef_png__WEBPACK_IMPORTED_MODULE_16___default.a,
  title: 'Entrepreneur First',
  des: 'Always here for you.'
}];
var menuWidget = [{
  id: 1,
  title: '',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Features'
  }, {
    id: 2,
    url: '#',
    text: 'About Us'
  }, {
    id: 4,
    url: '#',
    text: 'Careers'
  }]
}, {
  id: 2,
  title: '',
  menuItems: [{
    id: 2,
    url: '#',
    text: 'Privacy Policy'
  }, {
    id: 3,
    url: '#',
    text: 'Terms & Conditions'
  }]
}];
var Language_NAMES = [{
  label: 'English',
  value: 'eng'
}, {
  label: 'Chinese',
  value: 'chinese'
}, {
  label: 'Indian',
  value: 'indian'
}];
var Features = [{
  id: 1,
  image: _assets_image_crypto_fast_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Save time',
  description: 'Leverage off the power of automation and AI and get more done faster '
}, {
  id: 2,
  image: _assets_image_crypto_cash_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: 'Save money',
  description: 'Reduce your spend on external advisers and derive greater value through increased productivity'
}, {
  id: 3,
  image: _assets_image_crypto_easy_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Save efforts',
  description: 'Collaborate on regulatory change management like never before.'
}];
var Features2 = [{
  id: 1,
  image: _assets_image_crypto_hardesh_png__WEBPACK_IMPORTED_MODULE_22___default.a,
  title: 'Hardesh Singh \n CEO & Co-founder',
  description: 'Hardesh is a trained solicitor and has spent close to 10 years as a compliance professional, primarily in financial services and most recently as head of Group Compliance for Sembcorp Industries. He has managed his own compliance consultancy previously servicing clients across Asia and speaks regularly on ethics and compliance related topics. Hardesh believes tech can help tilt the scales back in favour of risk and compliance professionals everywhere.'
}, {
  id: 2,
  image: _assets_image_crypto_shubhankar_png__WEBPACK_IMPORTED_MODULE_23___default.a,
  title: 'Shubhankar Srivastava \n CTO & Co-founder',
  description: 'Shubhankar is a data scientist-turned entrepreneur, having more than 3 years of experience working with Machine Learning & AI models. He has worked in data science teams at billion-dollar e-commerce firms and VC-funded startups, impacting over a million customers with his algorithm designs. Shubhankar believes in channeling the power of data mining to disrupt the risk & compliance industry.'
}];
var Features3 = [{
  id: 1,
  title: 'Mail us',
  description: 'Speak directly with the experts'
}, {
  id: 2,
  title: 'Schedule a Demo!',
  description: 'Get a live demo of how we work'
}];
var TESTIMONIAL = [{
  image: _assets_image_crypto_SG_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Thomas Cruz',
  designation: 'Founder & CEO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}, {
  image: _assets_image_crypto_ef_png__WEBPACK_IMPORTED_MODULE_16___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Marhta Robson',
  designation: 'Co-Founder & CTO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}, {
  image: _assets_image_crypto_beta_3_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Dexter Patterson',
  designation: 'Co-Founder & COO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}];
var Footer_Data = [{
  title: 'Company',
  menuItems: [{
    url: '/about',
    text: 'About Us'
  }, {
    url: 'https://angel.co/radicali',
    text: 'Careers'
  }]
}, {
  title: 'Legal',
  menuItems: [{
    url: '#',
    text: 'Privacy Policy'
  }, {
    url: '#',
    text: 'Terms & Conditions'
  }, {
    url: '#',
    text: 'Support'
  }, {
    url: '#',
    text: 'FAQs'
  }]
}];
var CLIENTS = [{
  image: _assets_image_crypto_seedplus_png__WEBPACK_IMPORTED_MODULE_18___default.a,
  title: 'SeedPlus',
  href: 'https://www.seedplus.com/'
}, {
  image: _assets_image_crypto_SG_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  title: 'SGInnovate',
  href: 'https://www.sginnovate.com/'
}, {
  image: _assets_image_crypto_ef_png__WEBPACK_IMPORTED_MODULE_16___default.a,
  title: 'EF',
  href: 'https://www.joinef.com/'
}, {
  image: _assets_image_crypto_xa_png__WEBPACK_IMPORTED_MODULE_19___default.a,
  title: 'XA',
  href: 'http://xooglerangels.com/'
}];
var SOCIAL_PROFILES = [{
  icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_20__["socialTwitter"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialLinkedin__WEBPACK_IMPORTED_MODULE_21__["socialLinkedin"],
  url: '#'
}];

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p3JE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-1-5d968ac3d3703daf133968eec90c53cc.svg";

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pneb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OCF2");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rNCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FIas");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8k7s");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TPw6");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("znL5");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "rNkn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");





var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p')(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeadingWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Heading);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "rQre":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDUuMDUgNDgzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnNlY3VyZTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjguMiw0NTMuMjRjLTI1LjU1LDAtNDEuMTktMjgtMjcuNzctNDkuNzdsNzAuMzQtMTE0YTUyLjE2LDUyLjE2LDAsMCwwLDcuNzgtMjcuNDJWMjQyLjczYTYuODYsNi44NiwwLDAsMC02Ljg2LTYuODYsNi44Niw2Ljg2LDAsMCwxLTYuODYtNi44NlYyMTcuMzdIMTcxLjQ0YTYuNTEsNi41MSwwLDAsMC02LjUyLDYuNTJWMjQ5YTYuODYsNi44NiwwLDAsMCw2Ljg2LDYuODYsNi44Niw2Ljg2LDAsMCwxLDYuODUsNi44NlYyODJhNTIuMTgsNTIuMTgsMCwwLDEtNy43OCwyNy40MWwtNzAuMzQsMTE0Yy0xMy40MSwyMS43NSwyLjIyLDQ5Ljc3LDI3Ljc3LDQ5Ljc3SDMwMi40MmEzMi4zOCwzMi4zOCwwLDAsMCwzMC4wNi0yMFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNTguNTksMjY1LjgxSDE3Mi4xMWExMCwxMCwwLDAsMSwwLTIwaDg2LjQ4YTEwLDEwLDAsMSwxLDAsMjBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDcuNDQsMjA0LjM5YTMyLjIsMzIuMiwwLDAsMSwwLTQ1LjU2TDE2MS43Niw0NC41MWEyMS43MSwyMS43MSwwLDAsMCw0Ljg4LTcuNWwyLjU1LTYuNjZMMTQ4LjgxLDEwLDEzOC40LDM3YTIxLjI2LDIxLjI2LDAsMCwxLTQuODcsNy41TDE5LjIxLDE1OC44M2EzMi4yMiwzMi4yMiwwLDAsMCwzNi45LDUxLjc0LDMxLjYsMzEuNiwwLDAsMS04LjY3LTYuMThaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTY1LjQ5LDExMy44NWExMCwxMCwwLDAsMS0xLjQ0LS4xTDg0LjcsMTAyLjMxYTEwLDEwLDAsMSwxLDIuODUtMTkuNzZMMTY2LjksOTRhMTAsMTAsMCwwLDEtMS40MSwxOS44NVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMTguMjUsMTk2LjM5YTQxLDQxLDAsMCwxLTI5LTcwbDIxLjk0LTIxLjk0YTEwLDEwLDAsMCwxLDE0LjExLDBsMjEuOTQsMjEuOTRhNDEsNDEsMCwwLDEtMjksNzBabTAtNzAuNzUtMTQuODgsMTQuODhhMjEuMDUsMjEuMDUsMCwxLDAsMjkuNzcsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNjguNDQsMzA0LjE5QTQyLjA5LDQyLjA5LDAsMCwxLDI2Mi4yNSwyODJ2LTE2LjVhMTYuOTEsMTYuOTEsMCwwLDAsMTQtMTYuNTVWMjIzLjg5YzAtOS4xLTcuODUtMTYuMzItMTctMTYuMzJIMTcxLjQ0Yy05LjEsMC0xNyw3LjIyLTE3LDE2LjMyVjI0OWExNi45MywxNi45MywwLDAsMCwxNCwxNi41NVYyODJhNDIuMDksNDIuMDksMCwwLDEtNi4xOSwyMi4xN0w5Miw0MTguMThBNDIuNSw0Mi41LDAsMCwwLDEyOC4yOCw0ODNIMzAyLjQyYTQyLjU0LDQyLjU0LDAsMCwwLDM2LjMxLTY0Ljg2Wk0zMjIuMiw0NTEuNTFBMjIuMywyMi4zLDAsMCwxLDMwMi40Miw0NjNIMTI4LjI4QTIyLjU1LDIyLjU1LDAsMCwxLDEwOSw0MjguNjJsNzAuMjQtMTE0QTYxLjg5LDYxLjg5LDAsMCwwLDE4OC40LDI4MlYyNjIuNjlhMTYuOTIsMTYuOTIsMCwwLDAtMTQtMTYuNTVWMjI3LjUyaDgxLjgydjE4LjYyYTE2LjksMTYuOSwwLDAsMC0xNCwxNi41NVYyODJhNjIsNjIsMCwwLDAsOS4xNiwzMi42NWw3MC4yOSwxMTRhMjIuMywyMi4zLDAsMCwxLC40NSwyMi44OVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xOTAuMTgsOTQuNTFsMjctMTAuNGExMCwxMCwwLDAsMCwzLjQ3LTE2LjM2TDE1NS44NiwyLjkyQTEwLDEwLDAsMCwwLDEzOS41LDYuMzlsLTEwLjQxLDI3YTExLjM3LDExLjM3LDAsMCwxLTIuNjIsNEwxMi4xNSwxNTEuNzdhNDIuMiw0Mi4yLDAsMCwwLDU5LjY4LDU5LjY4TDE4Ni4xNSw5Ny4xM2ExMS41NSwxMS41NSwwLDAsMSw0LTIuNjJaTTE3Miw4Myw1Ny43MiwxOTcuMzRhMjIuMjQsMjIuMjQsMCwxLDEtMzEuNDUtMzEuNDVMMTQwLjU4LDUxLjU3YTMxLjM0LDMxLjM0LDAsMCwwLDcuMTQtMTFsNC44OS0xMi43TDE5NS43Miw3MSwxODMsNzUuODlBMzEuMjMsMzEuMjMsMCwwLDAsMTcyLDgzWiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "rcog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/base.js
var base = __webpack_require__("/MbW");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Link/index.js




var LinkWrapper = external_styled_components_default()('a')({
  textDecoration: 'none'
}, base["a" /* base */], Object(base["b" /* themed */])('Link'));

var Link_Link = function Link(_ref) {
  var children = _ref.children,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["children"]);

  return external_react_default.a.createElement(LinkWrapper, props, children);
};

/* harmony default export */ var elements_Link = (Link_Link);
Link_Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};
// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/reusecore/src/elements/UI/Logo/index.js







var Logo_Logo = function Logo(_ref) {
  var logoWrapperStyle = _ref.logoWrapperStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      withAchor = _ref.withAchor,
      anchorProps = _ref.anchorProps,
      logoSrc = _ref.logoSrc,
      title = _ref.title,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return external_react_default.a.createElement(elements_Link, Object(esm_extends["a" /* default */])({}, props, logoWrapperStyle), withAchor ? external_react_default.a.createElement("a", anchorProps, logoSrc ? external_react_default.a.createElement(Image["a" /* default */], Object(esm_extends["a" /* default */])({
    src: logoSrc,
    alt: title
  }, logoStyle)) : external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
    content: title
  }, titleStyle)), "style = ", {
    display: 'inline',
    width: 500 + "px"
  }) : external_react_default.a.createElement(external_react_default.a.Fragment, null, logoSrc ? external_react_default.a.createElement(Image["a" /* default */], Object(esm_extends["a" /* default */])({
    src: logoSrc,
    alt: title
  }, logoStyle)) : external_react_default.a.createElement(Text["a" /* default */], Object(esm_extends["a" /* default */])({
    content: title
  }, titleStyle))));
};

Logo_Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ var UI_Logo = __webpack_exports__["a"] = (Logo_Logo);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sDhx":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTggNDAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkluc3RhbnQgdHJhZGluZzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC4xOCwzMzQuNFYxMzYuNzNINzYuNzZWNDBoODQuNDhWMTBIMzYuNzZ2OTYuNzNIMTAuMThWMzA0LjRhODUuNjMsODUuNjMsMCwwLDAsNTYuNTEsODAuNTNBODUuMjEsODUuMjEsMCwwLDEsNTAuMTgsMzM0LjRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTYxLjI0LDExNi43M0gzNi43NmExMCwxMCwwLDAsMS0xMC0xMFYxMGExMCwxMCwwLDAsMSwxMC0xMEgxNjEuMjRhMTAsMTAsMCwwLDEsMTAsMTB2OTYuNzNhMTAsMTAsMCwwLDEtMTAsMTBabS0xMTQuNDgtMjBIMTUxLjI0VjIwSDQ2Ljc2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc2LjY4LDgxYTEwLDEwLDAsMCwxLTEwLTEwVjQ1LjE0YTEwLDEwLDAsMCwxLDIwLDBWNzFhMTAsMTAsMCwwLDEtMTAsMTBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTIxLjMyLDgxYTEwLDEwLDAsMCwxLTEwLTEwVjQ1LjE0YTEwLDEwLDAsMSwxLDIwLDBWNzFhMTAsMTAsMCwwLDEtMTAsMTBaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTg3LjgyLDk3SDEwLjE4QTkuOTIsOS45MiwwLDAsMCwwLDEwNi42NlYzMDQuNEMwLDM1Ny4xMSw0My4wNiw0MDAsOTUuNzgsNDAwaDYuNDRjNTIuNzIsMCw5NS43OC00Mi44OSw5NS43OC05NS42VjEwNi43M0E5LjkxLDkuOTEsMCwwLDAsMTg3Ljg5LDk3Wk0xNzgsMzA0LjRjMCw0MS42OS0zNC4wOSw3NS42LTc1Ljc4LDc1LjZIOTUuNzhDNTQuMDksMzgwLDIwLDM0Ni4wOSwyMCwzMDQuNFYxMTdIMTc4WiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "tJus":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTUwIC01MCkiIHN0eWxlPSJmaWxsOiMwMDY2Q0MiPjxzdmcgZmlsbD0iIzAwNjZDQyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTguMSA1Ni41MyIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5mYXN0PC90aXRsZT48ZyBkYXRhLW5hbWU9IkxheWVyIDIiPjxnPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMTUiPjxwYXRoIGQ9Ik00Mi40MSwyMS43OWExLDEsMCwwLDAtMS40MiwwbC01LjU5LDUuNmE1LjMsNS4zLDAsMSwwLTIuODksOS43Myw1LjI5LDUuMjksMCwwLDAsNS4zLTUuMyw1LjI1LDUuMjUsMCwwLDAtMS0zbDUuNTgtNS41N0ExLDEsMCwwLDAsNDIuNDEsMjEuNzlaTTM0Ljg0LDM0LjE2YTMuMywzLjMsMCwxLDEtMi4zMy01LjY0LDMuMywzLjMsMCwwLDEsMi4zMyw1LjY0WiI+PC9wYXRoPjxwYXRoIGQ9Ik00LjIsMzAuOWExLDEsMCwwLDAsMSwxSDIyLjVhMSwxLDAsMCwwLDAtMkg1LjJBMSwxLDAsMCwwLDQuMiwzMC45WiI+PC9wYXRoPjxwYXRoIGQ9Ik0xLDIzLjVIMTguM2ExLDEsMCwwLDAsMC0ySDFhMSwxLDAsMCwwLDAsMloiPjwvcGF0aD48cGF0aCBkPSJNMTkuMywzOS4zYTEsMSwwLDAsMC0xLTFIMWExLDEsMCwwLDAsMCwySDE4LjNBMSwxLDAsMCwwLDE5LjMsMzkuM1oiPjwvcGF0aD48cGF0aCBkPSJNNTAuOTEsMTMuOGwxLjA1LTFhMy4zOCwzLjM4LDAsMCwwLDEuNjQuNDQsMy40LDMuNCwwLDEsMC0zLjQtMy40LDMuMywzLjMsMCwwLDAsLjM3LDEuNTFsLTEuMTIsMS4xMkEyNS4wOSwyNS4wOSwwLDAsMCwzMy45LDYuMjhWMmgzLjZhMSwxLDAsMCwwLDAtMkgyOC40YTEsMSwwLDAsMCwwLDJoMy41VjYuMjhBMjUuMjIsMjUuMjIsMCwwLDAsMTUuNzIsMTNhMSwxLDAsMCwwLC42OCwxLjczaDcuMTZhMSwxLDAsMCwwLC40Ny0uMTIsMTguNjQsMTguNjQsMCwwLDEsOC44Ny0yLjIyLDE5LDE5LDAsMSwxLTgsMzYuMjUsMSwxLDAsMCwwLS40Mi0uMDlIMTcuMDVhMSwxLDAsMCwwLS42NiwxLjc1QTI1LjE1LDI1LjE1LDAsMCwwLDUwLjkxLDEzLjhaTTUzLjYsOC40YTEuNCwxLjQsMCwwLDEsMCwyLjgsMS4zOCwxLjM4LDAsMCwxLS44Ni0uMy45Mi45MiwwLDAsMC0uMTMtLjIxLDEuNjMsMS42MywwLDAsMC0uMTctLjExLDEuMzgsMS4zOCwwLDAsMS0uMjQtLjc4QTEuNCwxLjQsMCwwLDEsNTMuNiw4LjRaIj48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "tS02":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LcAa");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "u4iz":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjMgNDQ5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzQwZjRkMjt9LmNscy0ze2ZpbGw6IzE0ZTNiYTt9LmNscy00e2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkRhaWx5IEphY2twb3Q8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjY0LDIzMUgxMjRWMTQxSDk0VjI2MUgzMDRWMjMxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc5LDQxMFYzNjlINDlWMjk5bDQ1LTUwVjE5QTQwLjEzLDQwLjEzLDAsMCwxLDk1LjI2LDlIOTRBNDAsNDAsMCwwLDAsNTQsNDlWMjc5TDksMzI5djcwSDM5djQxSDM1OVY0MTBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzg5LDIwOS41YTksOSwwLDAsMS05LTl2LTg1YTksOSwwLDAsMSwxOCwwdjg1YTksOSwwLDAsMS05LDlaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNDAzLjUsMTI0LjVoLTI5YTksOSwwLDAsMSwwLTE4aDI5YTksOSwwLDAsMSwwLDE4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE2NCwyNzBIOTRhOSw5LDAsMCwxLTktOVYxNDFhOSw5LDAsMCwxLDktOWg3MGE5LDksMCwwLDEsOSw5VjI2MWE5LDksMCwwLDEtOSw5Wm0tNjEtMThoNTJWMTUwSDEwM1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMDQsMjcwSDIzNGE5LDksMCwwLDEtOS05VjE0MWE5LDksMCwwLDEsOS05aDcwYTksOSwwLDAsMSw5LDlWMjYxYTksOSwwLDAsMS05LDlabS02MS0xOGg1MlYxNTBIMjQzWiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTI4NCw0MkgxMTRBMjksMjksMCwwLDAsODUsNzF2MzBhOSw5LDAsMCwwLDksOUgzMDRhOSw5LDAsMCwwLDktOVY3MWEyOSwyOSwwLDAsMC0yOS0yOVptMTEsNTBIMTAzVjcxYTExLDExLDAsMCwxLDExLTExSDI4NGExMSwxMSwwLDAsMSwxMSwxMVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00MTQsMTk0LjVIMzUzVjQ5QTQ5LjA1LDQ5LjA1LDAsMCwwLDMwNCwwSDk0QTQ5LjA1LDQ5LjA1LDAsMCwwLDQ1LDQ5VjI3NS41NUwyLjMxLDMyM0E5LDksMCwwLDAsMCwzMjl2NzBhOSw5LDAsMCwwLDksOUgzMHYzMmE5LDksMCwwLDAsOSw5SDM1OWE5LDksMCwwLDAsOS05VjQwOGgyMWE5LDksMCwwLDAsOS05VjMyOWE5LDksMCwwLDAtMi4zMS02TDM1MywyNzUuNTVWMjQyLjVoNjFhOSw5LDAsMCwwLDktOXYtMzBhOSw5LDAsMCwwLTktOVpNMzUwLDQzMUg0OFY0MDhIMzUwWm0zMC05OC41NVYzOTBIMThWMzMyLjQ1TDYwLjY5LDI4NUE5LDksMCwwLDAsNjMsMjc5VjQ5QTMxLDMxLDAsMCwxLDk0LDE4SDMwNGEzMSwzMSwwLDAsMSwzMSwzMVYyNzlhOSw5LDAsMCwwLDIuMzEsNlpNNDA1LDIyNC41SDM1M3YtMTJoNTJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjM0LDI3MEgxNjRhOSw5LDAsMCwxLTktOVYxNDFhOSw5LDAsMCwxLDktOWg3MGE5LDksMCwwLDEsOSw5VjI2MWE5LDksMCwwLDEtOSw5Wm0tNjEtMThoNTJWMTUwSDE3M1oiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "upKs":
/***/ (function(module, exports) {

module.exports = require("react-countdown-now");

/***/ }),

/***/ "v0mK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "vE1u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

var buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
var colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
var sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wUZg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAwcICf/EACMQAAEEAQUAAwEBAAAAAAAAAAEAAgMEBQYHERITCCEiFBX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYhERWJxERAREQEREBU3O7+6Y03l8vSu2slE/BObHemGIuPqwyOjjkZF7tiMTpXNmi6xtcXuMjWgFx4VyWit0/hPW3K3MdqaPK43DXYshFlYbNPD9b888Pk6GO1P7AWKzJYY5PLow8sZ+xwSQ2tp7dHA6n09ZylfINgpUpzVtOuxPpPqSgtHnKyZrHxu/TSA4AkPaRyHAmTltdYjC6SyWdmvwPxOIisTW7EBM4hEHYTDhnJLmFjwWgF3ZpHHP0qpS2StM0PrPH2sxWnymu7UlnI3GY4CBnetDU6xwPkfwBXgY0d3vHblxBB6qVQ2ZZS2KfoZ9uvbqNoyY2GWxTD2GD7bE2aPsPUhnVrzy30Ic78duAGO58lNIYzzFy3lqDns9ntt4O9XdVi79BNOHwgwRF3IEkvVh6u4ceruL2uesD8ETpyhq2nR1HQx+P17S/y8zQp4Uw0q9PmQCKhH7n+X6msEkmUF87nBo4AXQqAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="

/***/ }),

/***/ "wj79":
/***/ (function(module, exports) {

module.exports = require("react-driftjs");

/***/ }),

/***/ "wk2l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("8k7s");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: /Users/apoorv/khare/Radicali/meetmica-v2/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "wr6Q":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-61e61976e8a4ea1e4ff698142517ef3a.png";

/***/ }),

/***/ "wt0f":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("Tqks");

var setPrototypeOf = __webpack_require__("1v/0");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "xPyb":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDUuMDUgNDgzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlN5c3RlbWF0aWMgdHJhZGluZzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjguMiw0NTMuMjRjLTI1LjU1LDAtNDEuMTktMjgtMjcuNzctNDkuNzdsNzAuMzQtMTE0YTUyLjE2LDUyLjE2LDAsMCwwLDcuNzgtMjcuNDJWMjQyLjczYTYuODYsNi44NiwwLDAsMC02Ljg2LTYuODYsNi44Niw2Ljg2LDAsMCwxLTYuODYtNi44NlYyMTcuMzdIMTcxLjQ0YTYuNTEsNi41MSwwLDAsMC02LjUyLDYuNTJWMjQ5YTYuODYsNi44NiwwLDAsMCw2Ljg2LDYuODYsNi44Niw2Ljg2LDAsMCwxLDYuODUsNi44NlYyODJhNTIuMTgsNTIuMTgsMCwwLDEtNy43OCwyNy40MWwtNzAuMzQsMTE0Yy0xMy40MSwyMS43NSwyLjIyLDQ5Ljc3LDI3Ljc3LDQ5Ljc3SDMwMi40MmEzMi4zOCwzMi4zOCwwLDAsMCwzMC4wNi0yMFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNTguNTksMjY1LjgxSDE3Mi4xMWExMCwxMCwwLDAsMSwwLTIwaDg2LjQ4YTEwLDEwLDAsMSwxLDAsMjBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDcuNDQsMjA0LjM5YTMyLjIsMzIuMiwwLDAsMSwwLTQ1LjU2TDE2MS43Niw0NC41MWEyMS43MSwyMS43MSwwLDAsMCw0Ljg4LTcuNWwyLjU1LTYuNjZMMTQ4LjgxLDEwLDEzOC40LDM3YTIxLjI2LDIxLjI2LDAsMCwxLTQuODcsNy41TDE5LjIxLDE1OC44M2EzMi4yMiwzMi4yMiwwLDAsMCwzNi45LDUxLjc0LDMxLjYsMzEuNiwwLDAsMS04LjY3LTYuMThaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTY1LjQ5LDExMy44NWExMCwxMCwwLDAsMS0xLjQ0LS4xTDg0LjcsMTAyLjMxYTEwLDEwLDAsMSwxLDIuODUtMTkuNzZMMTY2LjksOTRhMTAsMTAsMCwwLDEtMS40MSwxOS44NVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMTguMjUsMTk2LjM5YTQxLDQxLDAsMCwxLTI5LTcwbDIxLjk0LTIxLjk0YTEwLDEwLDAsMCwxLDE0LjExLDBsMjEuOTQsMjEuOTRhNDEsNDEsMCwwLDEtMjksNzBabTAtNzAuNzUtMTQuODgsMTQuODhhMjEuMDUsMjEuMDUsMCwxLDAsMjkuNzcsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNjguNDQsMzA0LjE5QTQyLjA5LDQyLjA5LDAsMCwxLDI2Mi4yNSwyODJ2LTE2LjVhMTYuOTEsMTYuOTEsMCwwLDAsMTQtMTYuNTVWMjIzLjg5YzAtOS4xLTcuODUtMTYuMzItMTctMTYuMzJIMTcxLjQ0Yy05LjEsMC0xNyw3LjIyLTE3LDE2LjMyVjI0OWExNi45MywxNi45MywwLDAsMCwxNCwxNi41NVYyODJhNDIuMDksNDIuMDksMCwwLDEtNi4xOSwyMi4xN0w5Miw0MTguMThBNDIuNSw0Mi41LDAsMCwwLDEyOC4yOCw0ODNIMzAyLjQyYTQyLjU0LDQyLjU0LDAsMCwwLDM2LjMxLTY0Ljg2Wk0zMjIuMiw0NTEuNTFBMjIuMywyMi4zLDAsMCwxLDMwMi40Miw0NjNIMTI4LjI4QTIyLjU1LDIyLjU1LDAsMCwxLDEwOSw0MjguNjJsNzAuMjQtMTE0QTYxLjg5LDYxLjg5LDAsMCwwLDE4OC40LDI4MlYyNjIuNjlhMTYuOTIsMTYuOTIsMCwwLDAtMTQtMTYuNTVWMjI3LjUyaDgxLjgydjE4LjYyYTE2LjksMTYuOSwwLDAsMC0xNCwxNi41NVYyODJhNjIsNjIsMCwwLDAsOS4xNiwzMi42NWw3MC4yOSwxMTRhMjIuMywyMi4zLDAsMCwxLC40NSwyMi44OVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xOTAuMTgsOTQuNTFsMjctMTAuNGExMCwxMCwwLDAsMCwzLjQ3LTE2LjM2TDE1NS44NiwyLjkyQTEwLDEwLDAsMCwwLDEzOS41LDYuMzlsLTEwLjQxLDI3YTExLjM3LDExLjM3LDAsMCwxLTIuNjIsNEwxMi4xNSwxNTEuNzdhNDIuMiw0Mi4yLDAsMCwwLDU5LjY4LDU5LjY4TDE4Ni4xNSw5Ny4xM2ExMS41NSwxMS41NSwwLDAsMSw0LTIuNjJaTTE3Miw4Myw1Ny43MiwxOTcuMzRhMjIuMjQsMjIuMjQsMCwxLDEtMzEuNDUtMzEuNDVMMTQwLjU4LDUxLjU3YTMxLjM0LDMxLjM0LDAsMCwwLDcuMTQtMTFsNC44OS0xMi43TDE5NS43Miw3MSwxODMsNzUuODlBMzEuMjMsMzEuMjMsMCwwLDAsMTcyLDgzWiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yOsI":
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "ysci":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "zBsc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("jPfo");

var _Object$setPrototypeOf = __webpack_require__("U9rZ");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "znL5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LcAa");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "ztBH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jPfo");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("U9rZ");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ })

/******/ });