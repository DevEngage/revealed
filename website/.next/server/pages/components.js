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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+YD5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryBooks");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/sfI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G1C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eDSW");
/* harmony import */ var assets_jss_nextjs_material_kit_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VGXH");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headerLinksStyle = theme => _objectSpread(_objectSpread({
  list: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__[/* defaultFont */ "h"]), {}, {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  }),
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    color: "#FFF",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  }
}, assets_jss_nextjs_material_kit_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]), {}, {
  marginRight5: {
    marginRight: "5px"
  }
});

/* harmony default export */ __webpack_exports__["a"] = (headerLinksStyle);

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0zb8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "2zww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardHeader; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__("eDSW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/cardHeaderStyle.js

const cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader: nextjs_material_kit["z" /* warningCardHeader */],
  successCardHeader: nextjs_material_kit["u" /* successCardHeader */],
  dangerCardHeader: nextjs_material_kit["f" /* dangerCardHeader */],
  infoCardHeader: nextjs_material_kit["m" /* infoCardHeader */],
  primaryCardHeader: nextjs_material_kit["p" /* primaryCardHeader */]
};
/* harmony default export */ var components_cardHeaderStyle = (cardHeaderStyle);
// CONCATENATED MODULE: ./components/Card/CardHeader.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardHeaderStyle);
function CardHeader(props) {
  const classes = useStyles();

  const {
    className,
    children,
    color,
    plain
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "color", "plain"]);

  const cardHeaderClasses = external_classnames_default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
    className: cardHeaderClasses
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("F3SJ");


/***/ }),

/***/ "31Yn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3h9u":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-090a5aabae505f67ee0981613d02ee05.jpg";

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "5LSk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardFooter; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/cardFooterStyle.js
const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem"
  }
};
/* harmony default export */ var components_cardFooterStyle = (cardFooterStyle);
// CONCATENATED MODULE: ./components/Card/CardFooter.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardFooterStyle);
function CardFooter(props) {
  const classes = useStyles();

  const {
    className,
    children
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children"]);

  const cardFooterClasses = external_classnames_default()({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
    className: cardFooterClasses
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "8//M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "8E12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLinks; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0LMq");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("c25J");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vF8F");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7vM9");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ng1p");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("QOEo");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Kg+a");
/* harmony import */ var assets_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("0G1C");



/*eslint-disable*/

 // @material-ui/core components





 // @material-ui/icons



 // core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);
function HeaderLinks(props) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.list,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.listItem,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        noLiPadding: true,
        navDropdown: true,
        buttonText: "Components",
        buttonProps: {
          className: classes.navLink,
          color: "transparent"
        },
        buttonIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Apps"],
        dropdownList: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/components",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: classes.dropdownLink,
            children: "All components"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar",
          target: "_blank",
          className: classes.dropdownLink,
          children: "Documentation"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.listItem,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar",
        color: "transparent",
        target: "_blank",
        className: classes.navLink,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
          className: classes.icons,
          children: "unarchive"
        }), " Upgrade to PRO"]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.listItem,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        href: "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar",
        color: "transparent",
        target: "_blank",
        className: classes.navLink,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["CloudDownload"], {
          className: classes.icons
        }), " Download"]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.listItem,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "instagram-twitter",
        title: "Follow us on twitter",
        placement: "top",
        classes: {
          tooltip: classes.tooltip
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          href: "https://twitter.com/CreativeTim?ref=creativetim",
          target: "_blank",
          color: "transparent",
          className: classes.navLink,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: classes.socialIcons + " fab fa-twitter"
          })
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.listItem,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "instagram-facebook",
        title: "Follow us on facebook",
        placement: "top",
        classes: {
          tooltip: classes.tooltip
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          color: "transparent",
          href: "https://www.facebook.com/CreativeTim?ref=creativetim",
          target: "_blank",
          className: classes.navLink,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: classes.socialIcons + " fab fa-facebook"
          })
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.listItem,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "instagram-tooltip",
        title: "Follow us on instagram",
        placement: "top",
        classes: {
          tooltip: classes.tooltip
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          color: "transparent",
          href: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
          target: "_blank",
          className: classes.navLink,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: classes.socialIcons + " fab fa-instagram"
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "8x5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__("eDSW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/headerStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: _objectSpread(_objectSpread({}, nextjs_material_kit["d" /* container */]), {}, {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  }),
  flex: {
    flex: 1
  },
  title: _objectSpread(_objectSpread({}, nextjs_material_kit["h" /* defaultFont */]), {}, {
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  }),
  appResponsive: {
    margin: "20px 10px"
  },
  primary: {
    backgroundColor: nextjs_material_kit["q" /* primaryColor */],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.46)}`
  },
  info: {
    backgroundColor: nextjs_material_kit["n" /* infoColor */],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.46)}`
  },
  success: {
    backgroundColor: nextjs_material_kit["v" /* successColor */],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.46)}`
  },
  warning: {
    backgroundColor: nextjs_material_kit["A" /* warningColor */],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.46)}`
  },
  danger: {
    backgroundColor: nextjs_material_kit["g" /* dangerColor */],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.46)}`
  },
  rose: {
    backgroundColor: nextjs_material_kit["s" /* roseColor */],
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["s" /* roseColor */], 0.46)}`
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF"
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  },
  drawerPaper: _objectSpread(_objectSpread({
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: nextjs_material_kit["i" /* drawerWidth */]
  }, nextjs_material_kit["a" /* boxShadow */]), {}, {
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0"
  }, nextjs_material_kit["x" /* transition */])
};
/* harmony default export */ var components_headerStyle = (headerStyle);
// CONCATENATED MODULE: ./components/Header/Header.js



 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components






 // @material-ui/icons

 // core components


const useStyles = Object(styles_["makeStyles"])(components_headerStyle);
function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    rightLinks,
    leftLinks,
    brand,
    fixed,
    absolute
  } = props;
  const appBarClasses = external_classnames_default()({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  const brandComponent = /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
    href: "/components",
    as: "/components",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
      className: classes.title,
      children: brand
    })
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AppBar_default.a, {
    className: appBarClasses,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Toolbar_default.a, {
      className: classes.container,
      children: [leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.flex,
        children: leftLinks !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hidden_default.a, {
          smDown: true,
          implementation: "css",
          children: leftLinks
        }) : brandComponent
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hidden_default.a, {
        smDown: true,
        implementation: "css",
        children: rightLinks
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hidden_default.a, {
        mdUp: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerToggle,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu_default.a, {})
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hidden_default.a, {
      mdUp: true,
      implementation: "js",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Drawer_default.a, {
        variant: "temporary",
        anchor: "right",
        open: mobileOpen,
        classes: {
          paper: classes.drawerPaper
        },
        onClose: handleDrawerToggle,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.appResponsive,
          children: [leftLinks, rightLinks]
        })
      })
    })]
  });
}
Header.defaultProp = {
  color: "white"
};

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "A2So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/cardStyle.js
const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};
/* harmony default export */ var components_cardStyle = (cardStyle);
// CONCATENATED MODULE: ./components/Card/Card.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardStyle);
function Card(props) {
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    carousel
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "carousel"]);

  const cardClasses = external_classnames_default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
    className: cardClasses
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "Ao/0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Build");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "DIuF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nextjs_header-5b5bdd5947add66de4b99db16abe8b22.jpg";

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "F3SJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Components; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__("8x5e");

// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__("8E12");

// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__("Z2Lm");

// EXTERNAL MODULE: external "nouislider"
var external_nouislider_ = __webpack_require__("Js1E");
var external_nouislider_default = /*#__PURE__*/__webpack_require__.n(external_nouislider_);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__("CUfL");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// EXTERNAL MODULE: external "@material-ui/core/Switch"
var Switch_ = __webpack_require__("lOiU");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__("yFMe");
var People_default = /*#__PURE__*/__webpack_require__.n(People_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/icons/FiberManualRecord"
var FiberManualRecord_ = __webpack_require__("IhOE");
var FiberManualRecord_default = /*#__PURE__*/__webpack_require__.n(FiberManualRecord_);

// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__("um8N");

// EXTERNAL MODULE: external "@material-ui/core/LinearProgress"
var LinearProgress_ = __webpack_require__("0zb8");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__("eDSW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/customLinearProgressStyle.js

const customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden"
  },
  bar: {
    height: "4px"
  },
  primary: {
    backgroundColor: nextjs_material_kit["q" /* primaryColor */]
  },
  warning: {
    backgroundColor: nextjs_material_kit["A" /* warningColor */]
  },
  danger: {
    backgroundColor: nextjs_material_kit["g" /* dangerColor */]
  },
  success: {
    backgroundColor: nextjs_material_kit["v" /* successColor */]
  },
  info: {
    backgroundColor: nextjs_material_kit["n" /* infoColor */]
  },
  rose: {
    backgroundColor: nextjs_material_kit["s" /* roseColor */]
  },
  gray: {
    backgroundColor: nextjs_material_kit["j" /* grayColor */]
  },
  primaryBackground: {
    background: "rgba(156, 39, 176, 0.2)"
  },
  warningBackground: {
    background: "rgba(255, 152, 0, 0.2)"
  },
  dangerBackground: {
    background: "rgba(244, 67, 54, 0.2)"
  },
  successBackground: {
    background: "rgba(76, 175, 80, 0.2)"
  },
  infoBackground: {
    background: "rgba(0, 188, 212, 0.2)"
  },
  roseBackground: {
    background: "rgba(233, 30, 99, 0.2)"
  },
  grayBackground: {
    background: "rgba(221, 221, 221, 0.2)"
  }
};
/* harmony default export */ var components_customLinearProgressStyle = (customLinearProgressStyle);
// CONCATENATED MODULE: ./components/CustomLinearProgress/CustomLinearProgress.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components

 // core components


const useStyles = Object(styles_["makeStyles"])(components_customLinearProgressStyle);
function CustomLinearProgress(props) {
  const classes = useStyles();

  const {
    color
  } = props,
        rest = _objectWithoutProperties(props, ["color"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinearProgress_default.a, _objectSpread(_objectSpread({}, rest), {}, {
    classes: {
      root: classes.root + " " + classes[color + "Background"],
      bar: classes.bar + " " + classes[color]
    }
  }));
}
CustomLinearProgress.defaultProps = {
  color: "gray"
};
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/paginationStyle.js

const paginationStyle = {
  pagination: {
    display: "inline-block",
    paddingLeft: "0",
    margin: "0 0 20px 0",
    borderRadius: "4px"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    letterSpacing: "unset",
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    float: "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: nextjs_material_kit["j" /* grayColor */]
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: "#eee",
      borderColor: "#ddd"
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["q" /* primaryColor */],
      borderColor: nextjs_material_kit["q" /* primaryColor */],
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.14)}, 0 1px 10px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.12)}, 0 2px 4px -1px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  info: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["n" /* infoColor */],
      borderColor: nextjs_material_kit["n" /* infoColor */],
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.14)}, 0 1px 10px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.12)}, 0 2px 4px -1px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  success: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["v" /* successColor */],
      borderColor: nextjs_material_kit["v" /* successColor */],
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.14)}, 0 1px 10px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.12)}, 0 2px 4px -1px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  warning: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["A" /* warningColor */],
      borderColor: nextjs_material_kit["A" /* warningColor */],
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.14)}, 0 1px 10px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.12)}, 0 2px 4px -1px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  danger: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["g" /* dangerColor */],
      borderColor: nextjs_material_kit["g" /* dangerColor */],
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.14)}, 0 1px 10px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.12)}, 0 2px 4px -1px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  rose: {
    "&,&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["s" /* roseColor */],
      borderColor: nextjs_material_kit["s" /* roseColor */],
      color: "#FFFFFF",
      boxShadow: `0 4px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["s" /* roseColor */], 0.14)}, 0 1px 10px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["s" /* roseColor */], 0.12)}, 0 2px 4px -1px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["s" /* roseColor */], 0.2)}`
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: "#777",
      cursor: "not-allowed",
      backgroundColor: "#fff",
      borderColor: "#ddd"
    }
  }
};
/* harmony default export */ var components_paginationStyle = (paginationStyle);
// CONCATENATED MODULE: ./components/Pagination/Pagination.js

 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components




const Pagination_useStyles = Object(styles_["makeStyles"])(components_paginationStyle);
function Pagination(props) {
  const classes = Pagination_useStyles();
  const {
    pages,
    color
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: classes.pagination,
    children: pages.map((prop, key) => {
      const paginationLink = external_classnames_default()({
        [classes.paginationLink]: true,
        [classes[color]]: prop.active,
        [classes.disabled]: prop.disabled
      });
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        className: classes.paginationItem,
        children: prop.onClick !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
          onClick: prop.onClick,
          className: paginationLink,
          children: prop.text
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
          onClick: () => alert("you've clicked " + prop.text),
          className: paginationLink,
          children: prop.text
        })
      }, key);
    })
  });
}
Pagination.defaultProps = {
  color: "primary"
};
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/badgeStyle.js

const badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: nextjs_material_kit["q" /* primaryColor */]
  },
  warning: {
    backgroundColor: nextjs_material_kit["A" /* warningColor */]
  },
  danger: {
    backgroundColor: nextjs_material_kit["g" /* dangerColor */]
  },
  success: {
    backgroundColor: nextjs_material_kit["v" /* successColor */]
  },
  info: {
    backgroundColor: nextjs_material_kit["n" /* infoColor */]
  },
  rose: {
    backgroundColor: nextjs_material_kit["s" /* roseColor */]
  },
  gray: {
    backgroundColor: "#6c757d"
  }
};
/* harmony default export */ var components_badgeStyle = (badgeStyle);
// CONCATENATED MODULE: ./components/Badge/Badge.js

 // nodejs library to set properties for components

// @material-ui/core components


const Badge_useStyles = Object(styles_["makeStyles"])(components_badgeStyle);
function Badge(props) {
  const classes = Badge_useStyles();
  const {
    color,
    children
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    className: classes.badge + " " + classes[color],
    children: children
  });
}
Badge.defaultProps = {
  color: "gray"
};
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js

const customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.04) + "!important"
    }
  },
  radioRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.04) + "!important"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: nextjs_material_kit["q" /* primaryColor */] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    opacity: "0.45"
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: nextjs_material_kit["g" /* dangerColor */]
  },
  radio: {
    color: nextjs_material_kit["q" /* primaryColor */] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + nextjs_material_kit["q" /* primaryColor */],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: nextjs_material_kit["j" /* grayColor */],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "#CCCCCC",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: nextjs_material_kit["s" /* roseColor */],
      "& > span:first-child": {
        borderColor: nextjs_material_kit["s" /* roseColor */]
      }
    }
  },
  iconCheckboxChecked: {
    color: nextjs_material_kit["s" /* roseColor */],
    "& > span:first-child": {
      borderColor: nextjs_material_kit["s" /* roseColor */]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: nextjs_material_kit["q" /* primaryColor */] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#FFFFFF !important",
    border: "1px solid rgba(0, 0, 0, .54)"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(80, 80, 80)",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(156, 39, 176, 1) !important"
    },
    "& $switchIcon": {
      borderColor: "#9c27b0"
    }
  },
  switchRoot: {
    height: "48px"
  }
};
/* harmony default export */ var nextjs_material_kit_customCheckboxRadioSwitch = (customCheckboxRadioSwitch);
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js
function basicsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function basicsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { basicsStyle_ownKeys(Object(source), true).forEach(function (key) { basicsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { basicsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function basicsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const basicsStyle = basicsStyle_objectSpread({
  sections: {
    padding: "70px 0"
  },
  container: nextjs_material_kit["d" /* container */],
  title: basicsStyle_objectSpread(basicsStyle_objectSpread({}, nextjs_material_kit["w" /* title */]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  }
}, nextjs_material_kit_customCheckboxRadioSwitch);

/* harmony default export */ var componentsSections_basicsStyle = (basicsStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionBasics.js


 // plugin that creates slider

 // @material-ui/core components






 // @material-ui/icons




 // core components









const SectionBasics_useStyles = Object(styles_["makeStyles"])(componentsSections_basicsStyle);
function SectionBasics() {
  const classes = SectionBasics_useStyles();
  const [checked, setChecked] = external_react_default.a.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = external_react_default.a.useState("b");
  const [checkedA, setCheckedA] = external_react_default.a.useState(true);
  const [checkedB, setCheckedB] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      external_nouislider_default.a.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
      external_nouislider_default.a.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    return function cleanup() {};
  });

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.sections,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.title,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Basic Elements"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "buttons",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
            children: ["Buttons", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "Pick your style"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
          justify: "center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 8,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "primary",
              children: "Default"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "primary",
              round: true,
              children: "round"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
              color: "primary",
              round: true,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Favorite_default.a, {
                className: classes.icons
              }), " with icon"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              justIcon: true,
              round: true,
              color: "primary",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Favorite_default.a, {
                className: classes.icons
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "primary",
              simple: true,
              children: "simple"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "Pick your size"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
          justify: "center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 8,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "primary",
              size: "sm",
              children: "Small"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "primary",
              children: "Regular"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "primary",
              size: "lg",
              children: "Large"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "Pick your color"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
          justify: "center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 8,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              children: "Default"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "primary",
              children: "Primary"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "info",
              children: "Info"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "success",
              children: "Success"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "warning",
              children: "Warning"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "danger",
              children: "Danger"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "rose",
              children: "Rose"
            })]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.space50
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "inputs",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: "Inputs"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
              id: "regular",
              inputProps: {
                placeholder: "Regular"
              },
              formControlProps: {
                fullWidth: true
              }
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
              labelText: "With floating label",
              id: "float",
              formControlProps: {
                fullWidth: true
              }
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
              labelText: "Success input",
              id: "success",
              success: true,
              formControlProps: {
                fullWidth: true
              }
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
              labelText: "Error input",
              id: "error",
              error: true,
              formControlProps: {
                fullWidth: true
              }
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
              labelText: "With material Icons",
              id: "material",
              formControlProps: {
                fullWidth: true
              },
              inputProps: {
                endAdornment: /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputAdornment_default.a, {
                  position: "end",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(People_default.a, {})
                })
              }
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
              labelText: "With Font Awesome Icons",
              id: "font-awesome",
              formControlProps: {
                fullWidth: true
              },
              inputProps: {
                endAdornment: /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputAdornment_default.a, {
                  position: "end",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    className: "fas fa-users"
                  })
                })
              }
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.space70
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "checkRadios",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.title,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Checkboxes"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Checkbox_default.a, {
                  tabIndex: -1,
                  onClick: () => handleToggle(21),
                  checkedIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Check_default.a, {
                    className: classes.checkedIcon
                  }),
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Check_default.a, {
                    className: classes.uncheckedIcon
                  }),
                  classes: {
                    checked: classes.checked,
                    root: classes.checkRoot
                  }
                }),
                classes: {
                  label: classes.label,
                  root: classes.labelRoot
                },
                label: "Unchecked"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Checkbox_default.a, {
                  tabIndex: -1,
                  onClick: () => handleToggle(22),
                  checked: checked.indexOf(22) !== -1 ? true : false,
                  checkedIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Check_default.a, {
                    className: classes.checkedIcon
                  }),
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Check_default.a, {
                    className: classes.uncheckedIcon
                  }),
                  classes: {
                    checked: classes.checked,
                    root: classes.checkRoot
                  }
                }),
                classes: {
                  label: classes.label,
                  root: classes.labelRoot
                },
                label: "Checked"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                disabled: true,
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Checkbox_default.a, {
                  tabIndex: -1,
                  checkedIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Check_default.a, {
                    className: classes.checkedIcon
                  }),
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Check_default.a, {
                    className: classes.uncheckedIcon
                  }),
                  classes: {
                    checked: classes.checked,
                    root: classes.checkRoot
                  }
                }),
                classes: {
                  label: classes.label,
                  disabled: classes.disabledCheckboxAndRadio,
                  root: classes.labelRoot
                },
                label: "Disabled Unchecked"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                disabled: true,
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Checkbox_default.a, {
                  tabIndex: -1,
                  checked: checked.indexOf(24) !== -1 ? true : false,
                  checkedIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Check_default.a, {
                    className: classes.checkedIcon
                  }),
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Check_default.a, {
                    className: classes.uncheckedIcon
                  }),
                  classes: {
                    checked: classes.checked,
                    root: classes.checkRoot
                  }
                }),
                classes: {
                  label: classes.label,
                  disabled: classes.disabledCheckboxAndRadio,
                  root: classes.labelRoot
                },
                label: "Disabled Checked"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.title,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Radio Buttons"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio_default.a, {
                  checked: selectedEnabled === "a",
                  onChange: () => setSelectedEnabled("a"),
                  value: "a",
                  name: "radio button enabled",
                  "aria-label": "A",
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FiberManualRecord_default.a, {
                    className: classes.radioUnchecked
                  }),
                  checkedIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FiberManualRecord_default.a, {
                    className: classes.radioChecked
                  }),
                  classes: {
                    checked: classes.radio,
                    root: classes.radioRoot
                  }
                }),
                classes: {
                  label: classes.label,
                  root: classes.labelRoot
                },
                label: "First Radio"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio_default.a, {
                  checked: selectedEnabled === "b",
                  onChange: () => setSelectedEnabled("b"),
                  value: "b",
                  name: "radio button enabled",
                  "aria-label": "B",
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FiberManualRecord_default.a, {
                    className: classes.radioUnchecked
                  }),
                  checkedIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FiberManualRecord_default.a, {
                    className: classes.radioChecked
                  }),
                  classes: {
                    checked: classes.radio,
                    root: classes.radioRoot
                  }
                }),
                classes: {
                  label: classes.label,
                  root: classes.labelRoot
                },
                label: "Second Radio"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                disabled: true,
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio_default.a, {
                  checked: false,
                  value: "a",
                  name: "radio button disabled",
                  "aria-label": "B",
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FiberManualRecord_default.a, {
                    className: classes.radioUnchecked
                  }),
                  checkedIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FiberManualRecord_default.a, {
                    className: classes.radioChecked
                  }),
                  classes: {
                    checked: classes.radio,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.radioRoot
                  }
                }),
                classes: {
                  label: classes.label,
                  root: classes.labelRoot
                },
                label: "Disabled Unchecked Radio"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                disabled: true,
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio_default.a, {
                  checked: true,
                  value: "b",
                  name: "radio button disabled",
                  "aria-label": "B",
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FiberManualRecord_default.a, {
                    className: classes.radioUnchecked
                  }),
                  checkedIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FiberManualRecord_default.a, {
                    className: classes.radioChecked
                  }),
                  classes: {
                    checked: classes.radio,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.radioRoot
                  }
                }),
                classes: {
                  label: classes.label,
                  root: classes.labelRoot
                },
                label: "Disabled Checked Radio"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.title,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Toggle Buttons"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Switch_default.a, {
                  checked: checkedA,
                  onChange: event => setCheckedA(event.target.checked),
                  value: "checkedA",
                  classes: {
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    thumb: classes.switchIcon,
                    track: classes.switchBar
                  }
                }),
                classes: {
                  label: classes.label
                },
                label: "Toggle is on"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
                control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Switch_default.a, {
                  checked: checkedB,
                  onChange: event => setCheckedB(event.target.checked),
                  value: "checkedB",
                  classes: {
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    thumb: classes.switchIcon,
                    track: classes.switchBar
                  }
                }),
                classes: {
                  label: classes.label
                },
                label: "Toggle is off"
              })
            })]
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.space70
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "progress",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.title,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Progress Bars"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomLinearProgress, {
              variant: "determinate",
              color: "primary",
              value: 30
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomLinearProgress, {
              variant: "determinate",
              color: "info",
              value: 60
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomLinearProgress, {
              variant: "determinate",
              color: "success",
              value: 100,
              style: {
                width: "35%",
                display: "inline-block"
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomLinearProgress, {
              variant: "determinate",
              color: "warning",
              value: 100,
              style: {
                width: "20%",
                display: "inline-block"
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomLinearProgress, {
              variant: "determinate",
              color: "danger",
              value: 25,
              style: {
                width: "45%",
                display: "inline-block"
              }
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.title,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Pagination"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Pagination, {
              pages: [{
                text: 1
              }, {
                text: "..."
              }, {
                text: 5
              }, {
                text: 6
              }, {
                active: true,
                text: 7
              }, {
                text: 8
              }, {
                text: 9
              }, {
                text: "..."
              }, {
                text: 12
              }]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Pagination, {
              pages: [{
                text: "PREV"
              }, {
                text: 1
              }, {
                text: 2
              }, {
                active: true,
                text: 3
              }, {
                text: 4
              }, {
                text: 5
              }, {
                text: "NEXT"
              }],
              color: "info"
            })]
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "sliders",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.title,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Sliders"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              id: "sliderRegular",
              className: "slider-primary"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              id: "sliderDouble",
              className: "slider-info"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.title,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Badges"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Badge, {
              children: "default"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Badge, {
              color: "primary",
              children: "primary"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Badge, {
              color: "info",
              children: "info"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Badge, {
              color: "success",
              children: "success"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Badge, {
              color: "warning",
              children: "warning"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Badge, {
              color: "danger",
              children: "danger"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Badge, {
              color: "rose",
              children: "rose"
            })]
          })]
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__("OL+V");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);

// EXTERNAL MODULE: external "@material-ui/icons/Face"
var Face_ = __webpack_require__("WpHN");
var Face_default = /*#__PURE__*/__webpack_require__.n(Face_);

// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__("DME6");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);

// EXTERNAL MODULE: external "@material-ui/icons/Explore"
var Explore_ = __webpack_require__("cWMY");
var Explore_default = /*#__PURE__*/__webpack_require__.n(Explore_);

// EXTERNAL MODULE: ./components/CustomDropdown/CustomDropdown.js + 1 modules
var CustomDropdown = __webpack_require__("QOEo");

// EXTERNAL MODULE: ./assets/img/bg.jpg
var bg = __webpack_require__("gRsC");
var bg_default = /*#__PURE__*/__webpack_require__.n(bg);

// EXTERNAL MODULE: ./assets/img/faces/avatar.jpg
var avatar = __webpack_require__("ydEf");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit/components/headerLinksStyle.js
var headerLinksStyle = __webpack_require__("0G1C");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js
function navbarsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function navbarsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { navbarsStyle_ownKeys(Object(source), true).forEach(function (key) { navbarsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { navbarsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function navbarsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const navbarsStyle = theme => navbarsStyle_objectSpread(navbarsStyle_objectSpread({
  section: {
    padding: "70px 0",
    paddingTop: "0"
  },
  container: nextjs_material_kit["d" /* container */],
  title: navbarsStyle_objectSpread(navbarsStyle_objectSpread({}, nextjs_material_kit["w" /* title */]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    [theme.breakpoints.down("md")]: {
      margin: "10px 0 0 15px !important",
      color: nextjs_material_kit["j" /* grayColor */]
    },
    margin: "10px 0 0 0 !important",
    paddingTop: "0"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  }
}, Object(headerLinksStyle["a" /* default */])(theme)), {}, {
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px"
  }
});

/* harmony default export */ var componentsSections_navbarsStyle = (navbarsStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionNavbars.js


 // @material-ui/core components




 // @material-ui/icons





 // core components










const SectionNavbars_useStyles = Object(styles_["makeStyles"])(componentsSections_navbarsStyle);
function SectionNavbars() {
  const classes = SectionNavbars_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: classes.section,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: classes.title,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Menu"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
            brand: "Menu",
            color: "primary",
            leftLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
              className: classes.list,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
                className: classes.listItem,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  href: "#pablo",
                  className: classes.navLink,
                  onClick: e => e.preventDefault(),
                  color: "transparent",
                  children: "Link"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
                className: classes.listItem,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  href: "#pablo",
                  className: classes.navLink,
                  onClick: e => e.preventDefault(),
                  color: "transparent",
                  children: "Link"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
                className: classes.listItem,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomDropdown["a" /* default */], {
                  navDropdown: true,
                  buttonText: "Dropdown",
                  dropdownHeader: "Dropdown Header",
                  buttonProps: {
                    className: classes.navLink,
                    color: "transparent"
                  },
                  dropdownList: ["Action", "Another action", "Something else here", {
                    divider: true
                  }, "Separated link", {
                    divider: true
                  }, "One more separated link"]
                })
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: classes.title,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Menu with Icons"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
            brand: "Icons",
            color: "info",
            rightLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
              className: classes.list,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
                className: classes.listItem,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  color: "transparent",
                  className: classes.navLink,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Email_default.a, {
                    className: classes.icons
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
                className: classes.listItem,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  color: "transparent",
                  className: classes.navLink,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Face_default.a, {
                    className: classes.icons
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
                className: classes.listItem,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomDropdown["a" /* default */], {
                  left: true,
                  navDropdown: true,
                  hoverColor: "info",
                  dropdownHeader: "Dropdown Header",
                  buttonIcon: "settings",
                  buttonProps: {
                    className: classes.navLink,
                    color: "transparent"
                  },
                  dropdownList: ["Action", "Another action", "Something else here", {
                    divider: true
                  }, "Separated link", {
                    divider: true
                  }, "One more separated link"]
                })
              })]
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.title,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Navigation"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "navbar",
      className: classes.navbar,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classes.navigation,
        style: {
          backgroundImage: "url(" + bg_default.a + ")"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
          brand: "Brand",
          color: "rose",
          leftLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
            className: classes.list,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Link"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Link"
              })
            })]
          }),
          rightLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
              white: true,
              inputRootCustomClasses: classes.inputRootCustomClasses,
              formControlProps: {
                className: classes.formControl
              },
              inputProps: {
                placeholder: "Search",
                inputProps: {
                  "aria-label": "Search",
                  className: classes.searchInput
                }
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              justIcon: true,
              round: true,
              color: "white",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search_default.a, {
                className: classes.searchIcon
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
          brand: "Info Color",
          color: "info",
          rightLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
            className: classes.list,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink + " " + classes.navLinkActive,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Discover"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Profile"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Settings"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
          brand: "Primary Color",
          color: "primary",
          rightLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
            className: classes.list,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink + " " + classes.navLinkActive,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Explore_default.a, {
                  className: classes.icons
                }), " Discover"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AccountCircle_default.a, {
                  className: classes.icons
                }), " Profile"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon_default.a, {
                  className: classes.icons,
                  children: "settings"
                }), " Settings"]
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
          brand: "Navbar with notifications",
          color: "dark",
          rightLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
            className: classes.list,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Discover"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Wishlist"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                justIcon: true,
                round: true,
                href: "#pablo",
                className: classes.notificationNavLink,
                onClick: e => e.preventDefault(),
                color: "rose",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Email_default.a, {
                  className: classes.icons
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomDropdown["a" /* default */], {
                left: true,
                caret: false,
                hoverColor: "black",
                dropdownHeader: "Dropdown Header",
                buttonText: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: avatar_default.a,
                  className: classes.img,
                  alt: "profile"
                }),
                buttonProps: {
                  className: classes.navLink + " " + classes.imageDropdownButton,
                  color: "transparent"
                },
                dropdownList: ["Me", "Settings and other stuff", "Sign out"]
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
          brand: "Navbar with profile",
          rightLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
            className: classes.list,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Discover"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.navLink,
                onClick: e => e.preventDefault(),
                color: "transparent",
                children: "Wishlist"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                href: "#pablo",
                className: classes.registerNavLink,
                onClick: e => e.preventDefault(),
                color: "rose",
                round: true,
                children: "Register"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
          brand: "Transparent",
          color: "transparent",
          rightLinks: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
            className: classes.list,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                color: "transparent",
                className: classes.navLink + " " + classes.socialIconsButton,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
                }), " ", "Twitter"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                color: "transparent",
                className: classes.navLink + " " + classes.socialIconsButton,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
                }), " ", "Facebook"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem_default.a, {
              className: classes.listItem,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                color: "transparent",
                className: classes.navLink + " " + classes.socialIconsButton,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
                }), " ", "Instagram"]
              })
            })]
          })
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);

// EXTERNAL MODULE: external "@material-ui/icons/Build"
var Build_ = __webpack_require__("Ao/0");
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__("UsYt");

// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__("2zww");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/customTabsStyle.js
const customTabsStyle = {
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },
  tabsRoot: {
    minHeight: "unset !important"
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#fff !important",
    marginLeft: "4px",
    fontWeight: "500",
    fontSize: "12px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  tabSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "0.2s background-color 0.1s"
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important"
    },
    "&,& *": {
      letterSpacing: "normal !important"
    }
  }
};
/* harmony default export */ var components_customTabsStyle = (customTabsStyle);
// CONCATENATED MODULE: ./components/CustomTabs/CustomTabs.js



function CustomTabs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CustomTabs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CustomTabs_ownKeys(Object(source), true).forEach(function (key) { CustomTabs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CustomTabs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CustomTabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// material-ui components



 // core components





const CustomTabs_useStyles = Object(styles_["makeStyles"])(components_customTabsStyle);
function CustomTabs(props) {
  const [value, setValue] = external_react_default.a.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const classes = CustomTabs_useStyles();
  const {
    headerColor,
    plainTabs,
    tabs,
    title,
    rtlActive
  } = props;
  const cardTitle = external_classnames_default()({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
    plain: plainTabs,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardHeader["a" /* default */], {
      color: headerColor,
      plain: plainTabs,
      children: [title !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: cardTitle,
        children: title
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tabs_default.a, {
        value: value,
        onChange: handleChange,
        classes: {
          root: classes.tabsRoot,
          indicator: classes.displayNone
        },
        children: tabs.map((prop, key) => {
          var icon = {};

          if (prop.tabIcon) {
            icon = {
              icon: typeof prop.tabIcon === "string" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon_default.a, {
                children: prop.tabIcon
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(prop.tabIcon, {})
            };
          }

          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tab_default.a, CustomTabs_objectSpread({
            classes: {
              root: classes.tabRootButton,
              label: classes.tabLabel,
              selected: classes.tabSelected,
              wrapper: classes.tabWrapper
            },
            label: prop.tabName
          }, icon), key);
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody["a" /* default */], {
      children: tabs.map((prop, key) => {
        if (key === value) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: prop.tabContent
          }, key);
        }

        return null;
      })
    })]
  });
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js

const tabsStyle = {
  section: {
    background: "#EEEEEE",
    padding: "70px 0"
  },
  container: nextjs_material_kit["d" /* container */],
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ var componentsSections_tabsStyle = (tabsStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionTabs.js


 // @material-ui/core components

 // @material-ui/icons



 // core components





const SectionTabs_useStyles = Object(styles_["makeStyles"])(componentsSections_tabsStyle);
function SectionTabs() {
  const classes = SectionTabs_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "nav-tabs",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Navigation Tabs"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                children: "Tabs with Icons on Card"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomTabs, {
              headerColor: "primary",
              tabs: [{
                tabName: "Profile",
                tabIcon: Face_default.a,
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: classes.textCenter,
                  children: "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                })
              }, {
                tabName: "Messages",
                tabIcon: Chat_default.a,
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: classes.textCenter,
                  children: "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                })
              }, {
                tabName: "Settings",
                tabIcon: Build_default.a,
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: classes.textCenter,
                  children: "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                })
              }]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                children: "Tabs on Plain Card"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomTabs, {
              plainTabs: true,
              headerColor: "danger",
              tabs: [{
                tabName: "Home",
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: classes.textCenter,
                  children: "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                })
              }, {
                tabName: "Updates",
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: classes.textCenter,
                  children: "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                })
              }, {
                tabName: "History",
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: classes.textCenter,
                  children: "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                })
              }]
            })]
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__("vFf/");
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);

// EXTERNAL MODULE: external "@material-ui/icons/Schedule"
var Schedule_ = __webpack_require__("zuQh");
var Schedule_default = /*#__PURE__*/__webpack_require__.n(Schedule_);

// EXTERNAL MODULE: external "@material-ui/icons/List"
var icons_List_ = __webpack_require__("/sfI");
var icons_List_default = /*#__PURE__*/__webpack_require__.n(icons_List_);

// EXTERNAL MODULE: ./components/NavPills/NavPills.js + 1 modules
var NavPills = __webpack_require__("SuH/");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js
function pillsStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pillsStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pillsStyle_ownKeys(Object(source), true).forEach(function (key) { pillsStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pillsStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pillsStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container: nextjs_material_kit["d" /* container */],
  title: pillsStyle_objectSpread(pillsStyle_objectSpread({}, nextjs_material_kit["w" /* title */]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
};
/* harmony default export */ var componentsSections_pillsStyle = (pillsStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionPills.js


 // @material-ui/core components

 // @material-ui/icons



 // core components





const SectionPills_useStyles = Object(styles_["makeStyles"])(componentsSections_pillsStyle);
function SectionPills() {
  const classes = SectionPills_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "navigation-pills",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: "Navigation Pills"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "With Icons"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 8,
            lg: 6,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavPills["a" /* default */], {
              color: "primary",
              tabs: [{
                tabButton: "Dashboard",
                tabIcon: Dashboard_default.a,
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  })]
                })
              }, {
                tabButton: "Schedule",
                tabIcon: Schedule_default.a,
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  })]
                })
              }, {
                tabButton: "Tasks",
                tabIcon: icons_List_default.a,
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  })]
                })
              }]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 6,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavPills["a" /* default */], {
              color: "rose",
              horizontal: {
                tabsGrid: {
                  xs: 12,
                  sm: 4,
                  md: 4
                },
                contentGrid: {
                  xs: 12,
                  sm: 8,
                  md: 8
                }
              },
              tabs: [{
                tabButton: "Dashboard",
                tabIcon: Dashboard_default.a,
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  })]
                })
              }, {
                tabButton: "Schedule",
                tabIcon: Schedule_default.a,
                tabContent: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                  })]
                })
              }]
            })
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: external "@material-ui/icons/Warning"
var Warning_ = __webpack_require__("MpJv");
var Warning_default = /*#__PURE__*/__webpack_require__.n(Warning_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/SnackbarContent"
var SnackbarContent_ = __webpack_require__("n1EF");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/snackbarContentStyle.js
function snackbarContentStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function snackbarContentStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { snackbarContentStyle_ownKeys(Object(source), true).forEach(function (key) { snackbarContentStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { snackbarContentStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function snackbarContentStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const snackbarContentStyle = {
  root: snackbarContentStyle_objectSpread(snackbarContentStyle_objectSpread({}, nextjs_material_kit["h" /* defaultFont */]), {}, {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  }),
  info: snackbarContentStyle_objectSpread({
    backgroundColor: "#00d3ee",
    color: "#ffffff"
  }, nextjs_material_kit["l" /* infoBoxShadow */]),
  success: snackbarContentStyle_objectSpread({
    backgroundColor: "#5cb860",
    color: "#ffffff"
  }, nextjs_material_kit["t" /* successBoxShadow */]),
  warning: snackbarContentStyle_objectSpread({
    backgroundColor: "#ffa21a",
    color: "#ffffff"
  }, nextjs_material_kit["y" /* warningBoxShadow */]),
  danger: snackbarContentStyle_objectSpread({
    backgroundColor: "#f55a4e",
    color: "#ffffff"
  }, nextjs_material_kit["e" /* dangerBoxShadow */]),
  primary: snackbarContentStyle_objectSpread({
    backgroundColor: "#af2cc5",
    color: "#ffffff"
  }, nextjs_material_kit["o" /* primaryBoxShadow */]),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: snackbarContentStyle_objectSpread(snackbarContentStyle_objectSpread({}, nextjs_material_kit["d" /* container */]), {}, {
    position: "relative"
  })
};
/* harmony default export */ var components_snackbarContentStyle = (snackbarContentStyle);
// CONCATENATED MODULE: ./components/Snackbar/SnackbarContent.js


 // nodejs library to set properties for components

 // @material-ui/core components




 // @material-ui/icons

 // core components


const SnackbarContent_useStyles = Object(styles_["makeStyles"])(components_snackbarContentStyle);
function SnackbarContent(props) {
  const {
    message,
    color,
    close,
    icon
  } = props;
  const classes = SnackbarContent_useStyles();
  var action = [];

  const closeAlert = () => {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
      className: classes.iconButton,
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Close_default.a, {
        className: classes.close
      })
    }, "close")];
  }

  let snackIcon = null;

  switch (typeof icon) {
    case "object":
      snackIcon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(props.icon, {
        className: classes.icon
      });
      break;

    case "string":
      snackIcon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon_default.a, {
        className: classes.icon,
        children: props.icon
      });
      break;

    default:
      snackIcon = null;
      break;
  }

  const [alert, setAlert] = external_react_default.a.useState( /*#__PURE__*/Object(jsx_runtime_["jsx"])(SnackbarContent_default.a, {
    message: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [snackIcon, message, close !== undefined ? action : null]
    }),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    }
  }));
  return alert;
}
SnackbarContent.propTypes = {
  message: external_prop_types_default.a.node.isRequired,
  color: external_prop_types_default.a.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: external_prop_types_default.a.bool,
  icon: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.string])
};
// CONCATENATED MODULE: ./components/Clearfix/Clearfix.js

 // mterial-ui components


const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};
const Clearfix_useStyles = Object(styles_["makeStyles"])(styles);
function Clearfix() {
  const classes = Clearfix_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.clearfix
  });
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js
function notificationsStyles_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function notificationsStyles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notificationsStyles_ownKeys(Object(source), true).forEach(function (key) { notificationsStyles_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { notificationsStyles_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function notificationsStyles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: notificationsStyles_objectSpread(notificationsStyles_objectSpread({}, nextjs_material_kit["w" /* title */]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  container: nextjs_material_kit["d" /* container */]
};
/* harmony default export */ var componentsSections_notificationsStyles = (notificationsStyles);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionNotifications.js


 // @material-ui/core components

 // @material-ui/icons


 // core components




const SectionNotifications_useStyles = Object(styles_["makeStyles"])(componentsSections_notificationsStyles);
function SectionNotifications() {
  const classes = SectionNotifications_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: classes.section,
    id: "notifications",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.title,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Notifications"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SnackbarContent, {
      message: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
          children: "INFO ALERT:"
        }), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."]
      }),
      close: true,
      color: "info",
      icon: "info_outline"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SnackbarContent, {
      message: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
          children: "SUCCESS ALERT:"
        }), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."]
      }),
      close: true,
      color: "success",
      icon: Check_default.a
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SnackbarContent, {
      message: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
          children: "WARNING ALERT:"
        }), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."]
      }),
      close: true,
      color: "warning",
      icon: Warning_default.a
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SnackbarContent, {
      message: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
          children: "DANGER ALERT:"
        }), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."]
      }),
      close: true,
      color: "danger",
      icon: "info_outline"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Clearfix, {})]
  });
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/typographyStyle.js
function typographyStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function typographyStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { typographyStyle_ownKeys(Object(source), true).forEach(function (key) { typographyStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { typographyStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function typographyStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const typographyStyle = {
  defaultFontStyle: typographyStyle_objectSpread(typographyStyle_objectSpread({}, nextjs_material_kit["h" /* defaultFont */]), {}, {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: nextjs_material_kit["q" /* primaryColor */]
  },
  infoText: {
    color: nextjs_material_kit["n" /* infoColor */]
  },
  successText: {
    color: nextjs_material_kit["v" /* successColor */]
  },
  warningText: {
    color: nextjs_material_kit["A" /* warningColor */]
  },
  dangerText: {
    color: nextjs_material_kit["g" /* dangerColor */]
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  }
};
/* harmony default export */ var components_typographyStyle = (typographyStyle);
// CONCATENATED MODULE: ./components/Typography/Small.js

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Small_useStyles = Object(styles_["makeStyles"])(components_typographyStyle);
function Small(props) {
  const classes = Small_useStyles();
  const {
    children
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.defaultFontStyle + " " + classes.smallText,
    children: children
  });
}
// CONCATENATED MODULE: ./components/Typography/Danger.js

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Danger_useStyles = Object(styles_["makeStyles"])(components_typographyStyle);
function Danger(props) {
  const classes = Danger_useStyles();
  const {
    children
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.defaultFontStyle + " " + classes.dangerText,
    children: children
  });
}
// CONCATENATED MODULE: ./components/Typography/Warning.js

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Warning_useStyles = Object(styles_["makeStyles"])(components_typographyStyle);
function Warning(props) {
  const classes = Warning_useStyles();
  const {
    children
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.defaultFontStyle + " " + classes.warningText,
    children: children
  });
}
// CONCATENATED MODULE: ./components/Typography/Success.js

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Success_useStyles = Object(styles_["makeStyles"])(components_typographyStyle);
function Success(props) {
  const classes = Success_useStyles();
  const {
    children
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.defaultFontStyle + " " + classes.successText,
    children: children
  });
}
// CONCATENATED MODULE: ./components/Typography/Info.js

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Info_useStyles = Object(styles_["makeStyles"])(components_typographyStyle);
function Info(props) {
  const classes = Info_useStyles();
  const {
    children
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.defaultFontStyle + " " + classes.infoText,
    children: children
  });
}
// CONCATENATED MODULE: ./components/Typography/Primary.js

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Primary_useStyles = Object(styles_["makeStyles"])(components_typographyStyle);
function Primary(props) {
  const classes = Primary_useStyles();
  const {
    children
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.defaultFontStyle + " " + classes.primaryText,
    children: children
  });
}
// CONCATENATED MODULE: ./components/Typography/Muted.js

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Muted_useStyles = Object(styles_["makeStyles"])(components_typographyStyle);
function Muted(props) {
  const classes = Muted_useStyles();
  const {
    children
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.defaultFontStyle + " " + classes.mutedText,
    children: children
  });
}
// CONCATENATED MODULE: ./components/Typography/Quote.js


 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const Quote_useStyles = Object(styles_["makeStyles"])(components_typographyStyle);
function Quote(props) {
  const {
    text,
    author
  } = props;
  const classes = Quote_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("blockquote", {
    className: classes.defaultFontStyle + " " + classes.quote,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: classes.quoteText,
      children: text
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
      className: classes.quoteAuthor,
      children: author
    })]
  });
}
// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit/imagesStyles.js
var imagesStyles = __webpack_require__("Ilpk");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js
function componentsSections_typographyStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function componentsSections_typographyStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { componentsSections_typographyStyle_ownKeys(Object(source), true).forEach(function (key) { componentsSections_typographyStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { componentsSections_typographyStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function componentsSections_typographyStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const typographyStyle_typographyStyle = componentsSections_typographyStyle_objectSpread({
  section: {
    padding: "70px 0"
  },
  container: nextjs_material_kit["d" /* container */],
  space50: {
    height: "50px",
    display: "block"
  },
  title: componentsSections_typographyStyle_objectSpread(componentsSections_typographyStyle_objectSpread({}, nextjs_material_kit["w" /* title */]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  }
}, imagesStyles["a" /* default */]);

/* harmony default export */ var componentsSections_typographyStyle = (typographyStyle_typographyStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionTypography.js


 // @material-ui/core components

 // @material-ui/icons
// core components













const SectionTypography_useStyles = Object(styles_["makeStyles"])(componentsSections_typographyStyle);
function SectionTypography() {
  const classes = SectionTypography_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "typography",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "Typography"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 1"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 2"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 3"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 4"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 6"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 1"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: classes.title,
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 2"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: classes.title,
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 3"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: classes.title,
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Header 4"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: classes.title,
              children: "The Life of Material Kit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Paragraph"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Quote"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Quote, {
              text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
              author: " Kanye West, Musician"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Muted Text"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Muted, {
              children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Primary Text"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Primary, {
              children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Info Text"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Info, {
              children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Success Text"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Success, {
              children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Warning Text"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Warning, {
              children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Danger Text"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Danger, {
              children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.typo,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.note,
              children: "Small Tag"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
              children: ["Header with small subtitle", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Small, {
                children: ["Use ", '"Small"', " tag for the headers"]
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.space50
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "images",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "Images"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 2,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              children: "Rounded Image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: avatar_default.a,
              alt: "...",
              className: classes.imgRounded + " " + classes.imgFluid
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 2,
            className: classes.marginLeft,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              children: "Circle Image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: avatar_default.a,
              alt: "...",
              className: classes.imgRoundedCircle + " " + classes.imgFluid
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 2,
            className: classes.marginLeft,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              children: "Rounded Raised"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: avatar_default.a,
              alt: "...",
              className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 2,
            className: classes.marginLeft,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              children: "Circle Raised"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: avatar_default.a,
              alt: "...",
              className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.space50
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-datetime"
var external_react_datetime_ = __webpack_require__("TxAV");
var external_react_datetime_default = /*#__PURE__*/__webpack_require__.n(external_react_datetime_);

// EXTERNAL MODULE: external "@material-ui/core/Slide"
var Slide_ = __webpack_require__("mz+e");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@material-ui/core/Popover"
var Popover_ = __webpack_require__("fA+V");
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);

// EXTERNAL MODULE: external "@material-ui/icons/LibraryBooks"
var LibraryBooks_ = __webpack_require__("+YD5");
var LibraryBooks_default = /*#__PURE__*/__webpack_require__.n(LibraryBooks_);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/modalStyle.js
const modalStyle = {
  modal: {
    borderRadius: "6px"
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px"
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.42857143"
  },
  modalCloseButton: {
    color: "#999999",
    marginTop: "-12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    float: "right"
  },
  modalClose: {
    width: "16px",
    height: "16px"
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative"
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0"
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto"
  }
};
/* harmony default export */ var nextjs_material_kit_modalStyle = (modalStyle);
// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit/tooltipsStyle.js
var tooltipsStyle = __webpack_require__("VGXH");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/popoverStyles.js
const popoverStyles = {
  popover: {
    padding: "0",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    lineHeight: "1.5em",
    background: "#fff",
    border: "none",
    borderRadius: "3px",
    display: "block",
    maxWidth: "276px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "start",
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: "0.875rem",
    wordWrap: "break-word"
  },
  popoverBottom: {
    marginTop: "5px"
  },
  popoverHeader: {
    backgroundColor: "#fff",
    border: "none",
    padding: "15px 15px 5px",
    fontSize: "1.125rem",
    margin: "0",
    color: "#555",
    borderTopLeftRadius: "calc(0.3rem - 1px)",
    borderTopRightRadius: "calc(0.3rem - 1px)"
  },
  popoverBody: {
    padding: "10px 15px 15px",
    lineHeight: "1.4",
    color: "#555"
  }
};
/* harmony default export */ var nextjs_material_kit_popoverStyles = (popoverStyles);
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js
function javascriptStyles_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function javascriptStyles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { javascriptStyles_ownKeys(Object(source), true).forEach(function (key) { javascriptStyles_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { javascriptStyles_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function javascriptStyles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const javascriptStyles = javascriptStyles_objectSpread(javascriptStyles_objectSpread(javascriptStyles_objectSpread({
  section: {
    padding: "70px 0 0"
  },
  container: nextjs_material_kit["d" /* container */],
  title: javascriptStyles_objectSpread(javascriptStyles_objectSpread({}, nextjs_material_kit["w" /* title */]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  }
}, nextjs_material_kit_modalStyle), {}, {
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal"
  }
}, tooltipsStyle["a" /* default */]), nextjs_material_kit_popoverStyles);

/* harmony default export */ var componentsSections_javascriptStyles = (javascriptStyles);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionJavascript.js



function SectionJavascript_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SectionJavascript_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionJavascript_ownKeys(Object(source), true).forEach(function (key) { SectionJavascript_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionJavascript_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionJavascript_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // react plugin for creating date-time-picker

 // @material-ui/core components











 // @material-ui/icons


 // core components





const SectionJavascript_useStyles = Object(styles_["makeStyles"])(componentsSections_javascriptStyles);
const SectionJavascript_Transition = /*#__PURE__*/external_react_default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Slide_default.a, SectionJavascript_objectSpread({
    direction: "down",
    ref: ref
  }, props));
});
SectionJavascript_Transition.displayName = "Transition";
function SectionJavascript() {
  const classes = SectionJavascript_useStyles();
  const [anchorElLeft, setAnchorElLeft] = external_react_default.a.useState(null);
  const [anchorElTop, setAnchorElTop] = external_react_default.a.useState(null);
  const [anchorElBottom, setAnchorElBottom] = external_react_default.a.useState(null);
  const [anchorElRight, setAnchorElRight] = external_react_default.a.useState(null);
  const [classicModal, setClassicModal] = external_react_default.a.useState(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.title,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Javascript components"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: classes.title,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Modal"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
              xs: 12,
              sm: 12,
              md: 6,
              lg: 4,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                color: "primary",
                block: true,
                onClick: () => setClassicModal(true),
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LibraryBooks_default.a, {
                  className: classes.icon
                }), "Classic"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dialog_default.a, {
                classes: {
                  root: classes.center,
                  paper: classes.modal
                },
                open: classicModal,
                TransitionComponent: SectionJavascript_Transition,
                keepMounted: true,
                onClose: () => setClassicModal(false),
                "aria-labelledby": "classic-modal-slide-title",
                "aria-describedby": "classic-modal-slide-description",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogTitle_default.a, {
                  id: "classic-modal-slide-title",
                  disableTypography: true,
                  className: classes.modalHeader,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
                    className: classes.modalCloseButton,
                    "aria-label": "Close",
                    color: "inherit",
                    onClick: () => setClassicModal(false),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Close_default.a, {
                      className: classes.modalClose
                    })
                  }, "close"), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                    className: classes.modalTitle,
                    children: "Modal title"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogContent_default.a, {
                  id: "classic-modal-slide-description",
                  className: classes.modalBody,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogActions_default.a, {
                  className: classes.modalFooter,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                    color: "transparent",
                    simple: true,
                    children: "Nice Button"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                    onClick: () => setClassicModal(false),
                    color: "danger",
                    simple: true,
                    children: "Close"
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 12,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.title,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                children: "Datetime Picker"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
                xs: 12,
                sm: 12,
                md: 6,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(InputLabel_default.a, {
                  className: classes.label,
                  children: "Datetime Picker"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControl_default.a, {
                  fullWidth: true,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_datetime_default.a, {
                    inputProps: {
                      placeholder: "Datetime Picker Here"
                    }
                  })
                })]
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: classes.title,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Popovers"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            onClick: event => setAnchorElLeft(event.currentTarget),
            children: "On left"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Popover_default.a, {
            classes: {
              paper: classes.popover
            },
            open: Boolean(anchorElLeft),
            anchorEl: anchorElLeft,
            onClose: () => setAnchorElLeft(null),
            anchorOrigin: {
              vertical: "center",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "center",
              horizontal: "right"
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: classes.popoverHeader,
              children: "Popover on left"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.popoverBody,
              children: "Here will be some very useful information about his popover. Here will be some very useful information about his popover."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            onClick: event => setAnchorElTop(event.currentTarget),
            children: "On top"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Popover_default.a, {
            classes: {
              paper: classes.popover
            },
            open: Boolean(anchorElTop),
            anchorEl: anchorElTop,
            onClose: () => setAnchorElTop(null),
            anchorOrigin: {
              vertical: "top",
              horizontal: "center"
            },
            transformOrigin: {
              vertical: "bottom",
              horizontal: "center"
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: classes.popoverHeader,
              children: "Popover on top"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.popoverBody,
              children: "Here will be some very useful information about his popover."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            onClick: event => setAnchorElBottom(event.currentTarget),
            children: "On bottom"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Popover_default.a, {
            classes: {
              paper: classes.popover
            },
            open: Boolean(anchorElBottom),
            anchorEl: anchorElBottom,
            onClose: () => setAnchorElBottom(null),
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "center"
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: classes.popoverHeader,
              children: "Popover on bottom"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.popoverBody,
              children: "Here will be some very useful information about his popover."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            onClick: event => setAnchorElRight(event.currentTarget),
            children: "On right"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Popover_default.a, {
            classes: {
              paper: classes.popover
            },
            open: Boolean(anchorElRight),
            anchorEl: anchorElRight,
            onClose: () => setAnchorElRight(null),
            anchorOrigin: {
              vertical: "center",
              horizontal: "right"
            },
            transformOrigin: {
              vertical: "center",
              horizontal: "left"
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: classes.popoverHeader,
              children: "Popover on right"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: classes.popoverBody,
              children: "Here will be some very useful information about his popover."
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: classes.title,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "Tooltips"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tooltip_default.a, {
            id: "tooltip-left",
            title: "Tooltip on left",
            placement: "left",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              children: "On left"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tooltip_default.a, {
            id: "tooltip-top",
            title: "Tooltip on top",
            placement: "top",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              children: "On top"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tooltip_default.a, {
            id: "tooltip-bottom",
            title: "Tooltip on bottom",
            placement: "bottom",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              children: "On bottom"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tooltip_default.a, {
            id: "tooltip-right",
            title: "Tooltip on right",
            placement: "right",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              children: "On right"
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.title,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Carousel"
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// EXTERNAL MODULE: ./assets/img/bg2.jpg
var bg2 = __webpack_require__("pC0U");
var bg2_default = /*#__PURE__*/__webpack_require__.n(bg2);

// EXTERNAL MODULE: ./assets/img/bg3.jpg
var bg3 = __webpack_require__("XKhj");
var bg3_default = /*#__PURE__*/__webpack_require__.n(bg3);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js

const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container: nextjs_material_kit["d" /* container */],
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
};
/* harmony default export */ var componentsSections_carouselStyle = (carouselStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionCarousel.js



function SectionCarousel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SectionCarousel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionCarousel_ownKeys(Object(source), true).forEach(function (key) { SectionCarousel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionCarousel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionCarousel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // react component for creating beautiful carousel

 // @material-ui/core components

 // @material-ui/icons

 // core components








const SectionCarousel_useStyles = Object(styles_["makeStyles"])(componentsSections_carouselStyle);
function SectionCarousel() {
  const classes = SectionCarousel_useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 8,
          className: classes.marginAuto,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
            carousel: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, SectionCarousel_objectSpread(SectionCarousel_objectSpread({}, settings), {}, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: bg_default.a,
                  alt: "First slide",
                  className: "slick-image"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "slick-caption",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationOn_default.a, {
                      className: "slick-icons"
                    }), "Yellowstone National Park, United States"]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: bg2_default.a,
                  alt: "Second slide",
                  className: "slick-image"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "slick-caption",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationOn_default.a, {
                      className: "slick-icons"
                    }), "Somewhere Beyond, United States"]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: bg3_default.a,
                  alt: "Third slide",
                  className: "slick-image"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "slick-caption",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationOn_default.a, {
                      className: "slick-icons"
                    }), "Yellowstone National Park, United States"]
                  })
                })]
              })]
            }))
          })
        })
      })
    })
  });
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js
function completedStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function completedStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { completedStyle_ownKeys(Object(source), true).forEach(function (key) { completedStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { completedStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function completedStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const completedStyle = {
  section: {
    padding: "70px 0"
  },
  container: completedStyle_objectSpread(completedStyle_objectSpread({}, nextjs_material_kit["d" /* container */]), {}, {
    textAlign: "center !important"
  })
};
/* harmony default export */ var componentsSections_completedStyle = (completedStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionCompletedExamples.js


 // @material-ui/core components

 // @material-ui/icons
// core components




const SectionCompletedExamples_useStyles = Object(styles_["makeStyles"])(componentsSections_completedStyle);
function SectionCompletedExamples() {
  const classes = SectionCompletedExamples_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
        justify: "center",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 8,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "Completed with examples"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
            children: ["The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you", "'", "re good to go. More importantly, looking at them will give you a picture of what you can build with this powerful kit."]
          })]
        })
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__("5LSk");

// EXTERNAL MODULE: ./assets/img/sign.jpg
var sign = __webpack_require__("ycTA");
var sign_default = /*#__PURE__*/__webpack_require__.n(sign);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js


const loginStyle = {
  section: {
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + sign_default.a + ")"
  },
  container: nextjs_material_kit["d" /* container */],
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};
/* harmony default export */ var componentsSections_loginStyle = (loginStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionLogin.js


 // @material-ui/core components



 // @material-ui/icons


 // core components










const SectionLogin_useStyles = Object(styles_["makeStyles"])(componentsSections_loginStyle);
function SectionLogin() {
  const classes = SectionLogin_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
        justify: "center",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 6,
          md: 4,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              className: classes.form,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardHeader["a" /* default */], {
                color: "primary",
                className: classes.cardHeader,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                  children: "Login"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.socialLine,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                    justIcon: true,
                    href: "#pablo",
                    target: "_blank",
                    color: "transparent",
                    onClick: e => e.preventDefault(),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                      className: classes.socialIcons + " fab fa-twitter"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                    justIcon: true,
                    href: "#pablo",
                    target: "_blank",
                    color: "transparent",
                    onClick: e => e.preventDefault(),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                      className: classes.socialIcons + " fab fa-facebook"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                    justIcon: true,
                    href: "#pablo",
                    target: "_blank",
                    color: "transparent",
                    onClick: e => e.preventDefault(),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                      className: classes.socialIcons + " fab fa-google-plus-g"
                    })
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: classes.divider,
                children: "Or Be Classical"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardBody["a" /* default */], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
                  labelText: "First Name...",
                  id: "first",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    type: "text",
                    endAdornment: /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputAdornment_default.a, {
                      position: "end",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(People_default.a, {
                        className: classes.inputIconsColor
                      })
                    })
                  }
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
                  labelText: "Email...",
                  id: "email",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    type: "email",
                    endAdornment: /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputAdornment_default.a, {
                      position: "end",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Email_default.a, {
                        className: classes.inputIconsColor
                      })
                    })
                  }
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomInput["a" /* default */], {
                  labelText: "Password",
                  id: "pass",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    type: "password",
                    endAdornment: /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputAdornment_default.a, {
                      position: "end",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon_default.a, {
                        className: classes.inputIconsColor,
                        children: "lock_outline"
                      })
                    }),
                    autoComplete: "off"
                  }
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardFooter["a" /* default */], {
                className: classes.cardFooter,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  simple: true,
                  color: "primary",
                  size: "lg",
                  children: "Get started"
                })
              })]
            })
          })
        })
      })
    })
  });
}
// EXTERNAL MODULE: ./assets/img/landing.jpg
var landing = __webpack_require__("S/Dw");
var landing_default = /*#__PURE__*/__webpack_require__.n(landing);

// EXTERNAL MODULE: ./assets/img/profile.jpg
var profile = __webpack_require__("3h9u");
var profile_default = /*#__PURE__*/__webpack_require__.n(profile);

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js
function exampleStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function exampleStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { exampleStyle_ownKeys(Object(source), true).forEach(function (key) { exampleStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { exampleStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function exampleStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const exampleStyle = exampleStyle_objectSpread(exampleStyle_objectSpread({
  section: {
    padding: "70px 0"
  },
  container: exampleStyle_objectSpread(exampleStyle_objectSpread({}, nextjs_material_kit["c" /* conatinerFluid */]), {}, {
    textAlign: "center !important"
  })
}, imagesStyles["a" /* default */]), {}, {
  link: {
    textDecoration: "none"
  }
});

/* harmony default export */ var componentsSections_exampleStyle = (exampleStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionExamples.js


 // react components for routing our app without refresh

 // @material-ui/core components

 // @material-ui/icons
// core components







const SectionExamples_useStyles = Object(styles_["makeStyles"])(componentsSections_exampleStyle);
function SectionExamples() {
  const classes = SectionExamples_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
        justify: "center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/landing",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              className: classes.link,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: landing_default.a,
                alt: "...",
                className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                color: "primary",
                size: "lg",
                simple: true,
                children: "View landing page"
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 6,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/profile",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              className: classes.link,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: profile_default.a,
                alt: "...",
                className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                color: "primary",
                size: "lg",
                simple: true,
                children: "View profile page"
              })]
            })
          })
        })]
      })
    })
  });
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js

const downloadStyle = {
  section: {
    padding: "70px 0"
  },
  container: nextjs_material_kit["d" /* container */],
  textCenter: {
    textAlign: "center"
  },
  sharingArea: {
    marginTop: "80px"
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};
/* harmony default export */ var componentsSections_downloadStyle = (downloadStyle);
// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionDownload.js



/*eslint-disable*/
 // @material-ui/core components

 // @material-ui/icons



 // core components


const SectionDownload_useStyles = Object(styles_["makeStyles"])(componentsSections_downloadStyle);
function SectionDownload() {
  const classes = SectionDownload_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.section,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
        className: classes.textCenter,
        justify: "center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 8,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "Do you love this UI Kit?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            children: "Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. We also have the Bootstrap 4 version on plain HTML. Start a new project or give an old Bootstrap project a new look!"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 8,
          md: 6,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            color: "primary",
            size: "lg",
            href: "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-download-section",
            target: "_blank",
            children: "Free NextJS Download"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            color: "primary",
            size: "lg",
            href: "https://www.creative-tim.com/product/material-kit-react?ref=njsmk-download-section",
            target: "_blank",
            children: "Free React Downoad"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
        className: classes.textCenter,
        justify: "center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 12,
          md: 8,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "Want more?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
            children: ["We've just launched", " ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              href: "#pablo",
              onClick: e => e.preventDefault(),
              children: ["NextJS Material Kit PRO", " "]
            }), ".It has a huge number of components, sections and example pages. Start Your Development With A Badass Material-UI and NexJS Kit inspired by Material Design."]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridItem["a" /* default */], {
          xs: 12,
          sm: 8,
          md: 10,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            color: "rose",
            size: "lg",
            href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-download-section",
            target: "_blank",
            children: "NextJS Material Kit PRO"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            color: "rose",
            size: "lg",
            href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=njsmk-download-section",
            target: "_blank",
            children: "Material Kit PRO React"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classes.textCenter + " " + classes.sharingArea,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
          justify: "center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: "Thank you for supporting us!"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
          color: "twitter",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: classes.socials + " fab fa-twitter"
          }), " Tweet"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
          color: "facebook",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: classes.socials + " fab fa-facebook-square"
          }), " Share"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
          color: "google",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: classes.socials + " fab fa-google-plus-g"
          }), "Share"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
          color: "github",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: classes.socials + " fab fa-github"
          }), " Star"]
        })]
      })]
    })
  });
}
// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/pages/components.js

const componentsStyle = {
  container: nextjs_material_kit["d" /* container */],
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ var components = (componentsStyle);
// CONCATENATED MODULE: ./pages/components.js



function components_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_ownKeys(Object(source), true).forEach(function (key) { components_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // react components for routing our app without refresh

 // @material-ui/core components

 // @material-ui/icons
// core components







 // sections for this page














const components_useStyles = Object(styles_["makeStyles"])(components);
function Components(props) {
  const classes = components_useStyles();
  const rest = Object.assign({}, props);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], components_objectSpread({
      brand: "NextJS Material Kit",
      rightLinks: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderLinks["a" /* default */], {}),
      fixed: true,
      color: "transparent",
      changeColorOnScroll: {
        height: 400,
        color: "white"
      }
    }, rest)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Parallax["a" /* default */], {
      image: __webpack_require__("DIuF"),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.container,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: classes.brand,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
                className: classes.title,
                children: "NextJS Material Kit."
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: classes.subtitle,
                children: "A Badass Material Kit based on Material-UI and NextJS."
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: external_classnames_default()(classes.main, classes.mainRaised),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionBasics, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionNavbars, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionTabs, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionPills, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionNotifications, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionTypography, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionJavascript, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionCarousel, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionCompletedExamples, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionLogin, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
        md: 12,
        className: classes.textCenter,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/login",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: classes.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              color: "primary",
              size: "lg",
              simple: true,
              children: "View Login Page"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionExamples, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionDownload, {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {})]
  });
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "HXcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Footer; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__("eDSW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/footerStyle.js

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: nextjs_material_kit["q" /* primaryColor */],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container: nextjs_material_kit["d" /* container */],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
/* harmony default export */ var components_footerStyle = (footerStyle);
// CONCATENATED MODULE: ./components/Footer/Footer.js



/*eslint-disable*/
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // material-ui core components


 // @material-ui/icons



const useStyles = Object(styles_["makeStyles"])(components_footerStyle);
function Footer(props) {
  const classes = useStyles();
  const {
    whiteFont
  } = props;
  const footerClasses = external_classnames_default()({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = external_classnames_default()({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
    className: footerClasses,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.left,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["List"], {
          className: classes.list,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItem"], {
            className: classes.inlineBlock,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.creative-tim.com/?ref=njsmk-footer",
              className: classes.block,
              target: "_blank",
              children: "Creative Tim"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItem"], {
            className: classes.inlineBlock,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.creative-tim.com/presentation?ref=njsmk-footer",
              className: classes.block,
              target: "_blank",
              children: "About us"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItem"], {
            className: classes.inlineBlock,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "http://blog.creative-tim.com/?ref=njsmk-footer",
              className: classes.block,
              target: "_blank",
              children: "Blog"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItem"], {
            className: classes.inlineBlock,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.creative-tim.com/license?ref=njsmk-footer",
              className: classes.block,
              target: "_blank",
              children: "Licenses"
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classes.right,
        children: ["\xA9 ", 1900 + new Date().getYear(), " , made with", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Favorite_default.a, {
          className: classes.icon
        }), " by", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://www.creative-tim.com?ref=njsmk-footer",
          className: aClasses,
          target: "_blank",
          children: "Creative Tim"
        }), " ", "for a better web."]
      })]
    })
  });
}

/***/ }),

/***/ "IhOE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FiberManualRecord");

/***/ }),

/***/ "Ilpk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (imagesStyles);

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Js1E":
/***/ (function(module, exports) {

module.exports = require("nouislider");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Kg+a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_ = __webpack_require__("8//M");
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__("eDSW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/buttonStyle.js

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: nextjs_material_kit["j" /* grayColor */],
    color: "#FFFFFF",
    boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: nextjs_material_kit["j" /* grayColor */],
      boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: nextjs_material_kit["q" /* primaryColor */],
    boxShadow: `0 2px 2px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.14)}, 0 3px 1px -2px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.2)}, 0 1px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["q" /* primaryColor */],
      boxShadow: `0 14px 26px -12px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.2)}`
    }
  },
  info: {
    backgroundColor: nextjs_material_kit["n" /* infoColor */],
    boxShadow: `0 2px 2px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.14)}, 0 3px 1px -2px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.2)}, 0 1px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["n" /* infoColor */],
      boxShadow: `0 14px 26px -12px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.2)}`
    }
  },
  success: {
    backgroundColor: nextjs_material_kit["v" /* successColor */],
    boxShadow: `0 2px 2px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.14)}, 0 3px 1px -2px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.2)}, 0 1px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["v" /* successColor */],
      boxShadow: `0 14px 26px -12px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.2)}`
    }
  },
  warning: {
    backgroundColor: nextjs_material_kit["A" /* warningColor */],
    boxShadow: `0 2px 2px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.14)}, 0 3px 1px -2px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.2)}, 0 1px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["A" /* warningColor */],
      boxShadow: `0 14px 26px -12px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.2)}`
    }
  },
  danger: {
    backgroundColor: nextjs_material_kit["g" /* dangerColor */],
    boxShadow: `0 2px 2px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.14)}, 0 3px 1px -2px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.2)}, 0 1px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["g" /* dangerColor */],
      boxShadow: `0 14px 26px -12px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.2)}`
    }
  },
  rose: {
    backgroundColor: nextjs_material_kit["s" /* roseColor */],
    boxShadow: `0 2px 2px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.14)}, 0 3px 1px -2px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.2)}, 0 1px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.12)}`,
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit["s" /* roseColor */],
      boxShadow: `0 14px 26px -12px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.42)}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.2)}`
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: nextjs_material_kit["j" /* grayColor */]
    }
  },
  twitter: {
    backgroundColor: "#55acee",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    }
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    }
  },
  github: {
    backgroundColor: "#333333",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#333333",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit["q" /* primaryColor */]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit["n" /* infoColor */]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit["v" /* successColor */]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit["A" /* warningColor */]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit["s" /* roseColor */]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit["g" /* dangerColor */]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: "#55acee"
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: "#3b5998"
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: "#dd4b39"
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: "#333333"
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ var components_buttonStyle = (buttonStyle);
// CONCATENATED MODULE: ./components/CustomButtons/Button.js


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components


 // core components


const makeComponentStyles = makeStyles_default()(() => _objectSpread({}, components_buttonStyle));
const RegularButton = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className"]);

  const classes = makeComponentStyles();
  const btnClasses = external_classnames_default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, _objectSpread(_objectSpread({}, rest), {}, {
    ref: ref,
    classes: {
      root: btnClasses
    },
    children: children
  }));
});
/* harmony default export */ var Button = __webpack_exports__["a"] = (RegularButton);

/***/ }),

/***/ "MpJv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OL+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "QOEo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CustomDropdown; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__("xmQw");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);

// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__("31Yn");
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__("mf1M");
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__("jD8W");
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);

// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__("eDSW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/customDropdownStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const customDropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none"
  },
  pooperNav: {
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "none !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "5px !important",
        padding: "0px !important"
      }
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "0"
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      position: "static !important",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: _objectSpread(_objectSpread({}, nextjs_material_kit["h" /* defaultFont */]), {}, {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "fit-content",
    color: "#333",
    whiteSpace: "nowrap",
    minHeight: "unset"
  }),
  blackHover: {
    "&:hover": {
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
      backgroundColor: "#212121",
      color: "#fff"
    }
  },
  primaryHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit["q" /* primaryColor */],
      color: "#FFFFFF"
    }, nextjs_material_kit["o" /* primaryBoxShadow */])
  },
  infoHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit["n" /* infoColor */],
      color: "#FFFFFF"
    }, nextjs_material_kit["l" /* infoBoxShadow */])
  },
  successHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit["v" /* successColor */],
      color: "#FFFFFF"
    }, nextjs_material_kit["t" /* successBoxShadow */])
  },
  warningHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit["A" /* warningColor */],
      color: "#FFFFFF"
    }, nextjs_material_kit["y" /* warningBoxShadow */])
  },
  dangerHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit["g" /* dangerColor */],
      color: "#FFFFFF"
    }, nextjs_material_kit["e" /* dangerBoxShadow */])
  },
  roseHover: {
    "&:hover": _objectSpread({
      backgroundColor: nextjs_material_kit["s" /* roseColor */],
      color: "#FFFFFF"
    }, nextjs_material_kit["r" /* roseBoxShadow */])
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: "#777",
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "unset",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  }
});

/* harmony default export */ var components_customDropdownStyle = (customDropdownStyle);
// CONCATENATED MODULE: ./components/CustomDropdown/CustomDropdown.js



function CustomDropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CustomDropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CustomDropdown_ownKeys(Object(source), true).forEach(function (key) { CustomDropdown_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CustomDropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CustomDropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components








 // core components



const useStyles = Object(styles_["makeStyles"])(components_customDropdownStyle);
function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = param => {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const handleCloseAway = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  const classes = useStyles();
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding,
    navDropdown
  } = props;
  const caretClasses = external_classnames_default()({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = external_classnames_default()({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });
  let icon = null;

  switch (typeof buttonIcon) {
    case "object":
      icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(props.buttonIcon, {
        className: classes.buttonIcon
      });
      break;

    case "string":
      icon = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon_default.a, {
        className: classes.buttonIcon,
        children: props.buttonIcon
      });
      break;

    default:
      icon = null;
      break;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], CustomDropdown_objectSpread(CustomDropdown_objectSpread({
        "aria-label": "Notifications",
        "aria-owns": anchorEl ? "menu-list" : null,
        "aria-haspopup": "true"
      }, buttonProps), {}, {
        onClick: handleClick,
        children: [icon, buttonText !== undefined ? buttonText : null, caret ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
          className: caretClasses
        }) : null]
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Popper_default.a, {
      open: Boolean(anchorEl),
      anchorEl: anchorEl,
      transition: true,
      disablePortal: true,
      placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
      className: external_classnames_default()({
        [classes.popperClose]: !anchorEl,
        [classes.popperResponsive]: true,
        [classes.pooperNav]: Boolean(anchorEl) && navDropdown
      }),
      children: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grow_default.a, {
        in: Boolean(anchorEl),
        id: "menu-list",
        style: dropup ? {
          transformOrigin: "0 100% 0"
        } : {
          transformOrigin: "0 0 0"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paper_default.a, {
          className: classes.dropdown,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ClickAwayListener_default.a, {
            onClickAway: handleCloseAway,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuList_default.a, {
              role: "menu",
              className: classes.menuList,
              children: [dropdownHeader !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem_default.a, {
                onClick: () => handleClose(dropdownHeader),
                className: classes.dropdownHeader,
                children: dropdownHeader
              }) : null, dropdownList.map((prop, key) => {
                if (prop.divider) {
                  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Divider_default.a, {
                    onClick: () => handleClose("divider"),
                    className: classes.dropdownDividerItem
                  }, key);
                }

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem_default.a, {
                  onClick: () => handleClose(prop),
                  className: dropdownItem,
                  children: prop
                }, key);
              })]
            })
          })
        })
      })
    })]
  });
}
CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

/***/ }),

/***/ "QzC/":
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "S/Dw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landing-08e18cb904f0f3c6dd9e3d4ed72e0eca.jpg";

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "SuH/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NavPills; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-swipeable-views"
var external_react_swipeable_views_ = __webpack_require__("QzC/");
var external_react_swipeable_views_default = /*#__PURE__*/__webpack_require__.n(external_react_swipeable_views_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__("eDSW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/navPillsStyle.js


const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit"
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px"
  },
  pillsWithIcons: {
    borderRadius: "4px"
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important",
    "&, & *": {
      letterSpacing: "normal !important"
    }
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  contentWrapper: {
    marginTop: "20px"
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: nextjs_material_kit["q" /* primaryColor */],
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["q" /* primaryColor */], 0.4)}`
    }
  },
  info: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: nextjs_material_kit["n" /* infoColor */],
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["n" /* infoColor */], 0.4)}`
    }
  },
  success: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: nextjs_material_kit["v" /* successColor */],
      boxShadow: `0 2px 2px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.14)}, 0 3px 1px -2px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.2)}, 0 1px 5px 0 ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["v" /* successColor */], 0.12)}`
    }
  },
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: nextjs_material_kit["A" /* warningColor */],
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["A" /* warningColor */], 0.4)}`
    }
  },
  danger: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: nextjs_material_kit["g" /* dangerColor */],
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["g" /* dangerColor */], 0.4)}`
    }
  },
  rose: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: nextjs_material_kit["s" /* roseColor */],
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${Object(nextjs_material_kit["k" /* hexToRGBAlpha */])(nextjs_material_kit["s" /* roseColor */], 0.4)}`
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabWrapper: {
    color: "inherit",
    position: "relative",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    "&,& *": {
      letterSpacing: "normal"
    }
  }
});

/* harmony default export */ var components_navPillsStyle = (navPillsStyle);
// CONCATENATED MODULE: ./components/NavPills/NavPills.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components



 // core components




const useStyles = Object(styles_["makeStyles"])(components_navPillsStyle);
function NavPills(props) {
  const [active, setActive] = external_react_default.a.useState(props.active);

  const handleChange = (event, active) => {
    setActive(active);
  };

  const handleChangeIndex = index => {
    setActive(index);
  };

  const classes = useStyles();
  const {
    tabs,
    direction,
    color,
    horizontal,
    alignCenter
  } = props;
  const flexContainerClasses = external_classnames_default()({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });

  const tabButtons = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tabs_default.a, {
    classes: {
      root: classes.root,
      fixed: classes.fixed,
      flexContainer: flexContainerClasses,
      indicator: classes.displayNone
    },
    value: active,
    onChange: handleChange,
    centered: alignCenter,
    children: tabs.map((prop, key) => {
      var icon = {};

      if (prop.tabIcon !== undefined) {
        icon["icon"] = /*#__PURE__*/Object(jsx_runtime_["jsx"])(prop.tabIcon, {
          className: classes.tabIcon
        });
      }

      const pillsClasses = external_classnames_default()({
        [classes.pills]: true,
        [classes.horizontalPills]: horizontal !== undefined,
        [classes.pillsWithIcons]: prop.tabIcon !== undefined
      });
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tab_default.a, _objectSpread(_objectSpread({
        label: prop.tabButton
      }, icon), {}, {
        classes: {
          root: pillsClasses,
          selected: classes[color],
          wrapper: classes.tabWrapper
        }
      }), key);
    })
  });

  const tabContent = /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.contentWrapper,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_swipeable_views_default.a, {
      axis: direction === "rtl" ? "x-reverse" : "x",
      index: active,
      onChangeIndex: handleChangeIndex,
      children: tabs.map((prop, key) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.tabContent,
          children: prop.tabContent
        }, key);
      })
    })
  });

  return horizontal !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], _objectSpread(_objectSpread({}, horizontal.tabsGrid), {}, {
      children: tabButtons
    })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], _objectSpread(_objectSpread({}, horizontal.contentGrid), {}, {
      children: tabContent
    }))]
  }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [tabButtons, tabContent]
  });
}
NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

/***/ }),

/***/ "TxAV":
/***/ (function(module, exports) {

module.exports = require("react-datetime");

/***/ }),

/***/ "UsYt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardBody; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/cardBodyStyle.js
const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto"
  }
};
/* harmony default export */ var components_cardBodyStyle = (cardBodyStyle);
// CONCATENATED MODULE: ./components/Card/CardBody.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(components_cardBodyStyle);
function CardBody(props) {
  const classes = useStyles();

  const {
    className,
    children
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children"]);

  const cardBodyClasses = external_classnames_default()({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
    className: cardBodyClasses
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "VGXH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#555555",
    lineHeight: "1.7em",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (tooltipsStyle);

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "WpHN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Face");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XKhj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg3-e76de24b6d8ab5e920bb4d49241ad15f.jpg";

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Z2Lm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Parallax; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/parallaxStyle.js
const parallaxStyle = theme => ({
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  },
  parallaxResponsive: {
    [theme.breakpoints.down("md")]: {
      minHeight: "660px"
    }
  }
});

/* harmony default export */ var components_parallaxStyle = (parallaxStyle);
// CONCATENATED MODULE: ./components/Parallax/Parallax.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(styles_["makeStyles"])(components_parallaxStyle);
function Parallax(props) {
  let windowScrollTop; // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }

  const [transform, setTransform] = external_react_default.a.useState("translate3d(0,0px,0)");
  external_react_default.a.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    small,
    responsive
  } = props;
  const classes = useStyles();
  const parallaxClasses = external_classnames_default()({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: parallaxClasses,
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    }),
    children: children
  });
}

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;

  const cleanup = _react.default.useRef();

  const setRef = _react.default.useCallback(el => {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, () => {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cVmi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "cWMY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Explore");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eDSW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hexToRGBAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return conatinerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boxShadow; });
/* unused harmony export card */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return primaryCardHeader; });
/* unused harmony export roseCardHeader */
/* unused harmony export cardActions */
/* unused harmony export cardHeader */
/* unused harmony export defaultBoxShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cardTitle; });
/* unused harmony export cardLink */
/* unused harmony export cardSubtitle */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * NextJS Material Kit - v1.1.0 based on Material Kit - v2.0.2 and Material Kit React - v1.8.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
const hexColorToRGB = function (hexColor) {
  let detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000

  hexColor = hexColor.replace(detectShorthand, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff

  return hex_array ? {
    r: parseInt(hex_array[1], 16),
    // 0-255
    g: parseInt(hex_array[2], 16),
    // 0-255
    b: parseInt(hex_array[3], 16) // 0-255

  } : null;
};

const hexToRGBAlpha = function (hexColor, alpha) {
  let rgb = hexColorToRGB(hexColor);
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
};

const drawerWidth = 260;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = _objectSpread(_objectSpread({}, conatinerFluid), {}, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";
const primaryBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(primaryColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(primaryColor, 0.2)}`
};
const infoBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(infoColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(infoColor, 0.2)}`
};
const successBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(successColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(successColor, 0.2)}`
};
const warningBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(warningColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(warningColor, 0.2)}`
};
const dangerBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(dangerColor, 0.28)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(dangerColor, 0.2)}`
};
const roseBoxShadow = {
  boxShadow: `0 4px 20px 0px ${hexToRGBAlpha("#000", 0.14)}, 0 7px 10px -5px ${hexToRGBAlpha(roseColor, 0.4)}`
};

const warningCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: ".625rem"
});

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};


/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, typeof options.locale !== 'undefined' ? options.locale : this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fA+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gRsC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg-e52419719dd0c4c8b172136f0b625008.jpg";

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "i4t8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridItem(props) {
  const classes = useStyles();

  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
    item: true
  }, rest), {}, {
    className: classes.grid + " " + className,
    children: children
  }));
}
GridItem.defaultProps = {
  className: ""
};

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "jD8W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "mf1M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "mtPR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridContainer; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridContainer(props) {
  const classes = useStyles();

  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
    container: true
  }, rest), {}, {
    className: classes.grid + " " + className,
    children: children
  }));
}
GridContainer.defaultProps = {
  className: ""
};

/***/ }),

/***/ "mz+e":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "n1EF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "ng1p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "pC0U":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg2-843781834b1db2908f08d921c6460c81.jpg";

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "um8N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CustomInput; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__("tBFs");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__("eDSW");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-kit/components/customInputStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: nextjs_material_kit["q" /* primaryColor */]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: nextjs_material_kit["g" /* dangerColor */]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: nextjs_material_kit["v" /* successColor */]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  labelRoot: _objectSpread(_objectSpread({}, nextjs_material_kit["h" /* defaultFont */]), {}, {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: nextjs_material_kit["g" /* dangerColor */] + " !important"
  },
  labelRootSuccess: {
    color: nextjs_material_kit["v" /* successColor */] + " !important"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  input: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  }
};
/* harmony default export */ var components_customInputStyle = (customInputStyle);
// CONCATENATED MODULE: ./components/CustomInput/CustomInput.js



function CustomInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CustomInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CustomInput_ownKeys(Object(source), true).forEach(function (key) { CustomInput_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CustomInput_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CustomInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components






const useStyles = Object(styles_["makeStyles"])(components_customInputStyle);
function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const labelClasses = external_classnames_default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = external_classnames_default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = external_classnames_default()({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = external_classnames_default()({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = external_classnames_default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FormControl_default.a, CustomInput_objectSpread(CustomInput_objectSpread({}, formControlProps), {}, {
    className: formControlClasses,
    children: [labelText !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputLabel_default.a, CustomInput_objectSpread(CustomInput_objectSpread({
      className: classes.labelRoot + " " + labelClasses,
      htmlFor: id
    }, labelProps), {}, {
      children: labelText
    })) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input_default.a, CustomInput_objectSpread({
      classes: {
        input: inputClasses,
        root: marginTop,
        disabled: classes.disabled,
        underline: underlineClasses
      },
      id: id
    }, inputProps))]
  }));
}

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vFf/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "yFMe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "ycTA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sign-cf8b686b294041d0925f4e745b1fabb9.jpg";

/***/ }),

/***/ "ydEf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/avatar-f1d71f777331fd7e3de116edf4ee3b67.jpg";

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "zuQh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Schedule");

/***/ })

/******/ });