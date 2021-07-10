module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/_slug","2":"pages/allBlogPost/_blogPost","3":"pages/allQandA/_qaSlug","4":"pages/authorProfile/_authorName","5":"pages/b/_blogSlug","6":"pages/blog/index","7":"pages/channel/celebrity","8":"pages/channel/designlibrary","9":"pages/channel/gaming","10":"pages/channel/health","11":"pages/channel/history","12":"pages/channel/mobile","13":"pages/channel/programming","14":"pages/channel/technology","15":"pages/detailPost/_slug","16":"pages/favourite/index","17":"pages/high-rated/index","18":"pages/index","19":"pages/m/_slug","20":"pages/q/_qadetail","21":"pages/qAnda/index","22":"pages/search/_key","23":"pages/t/index","24":"pages/tagPage/_tag","25":"pages/top/index","26":"pages/u/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const apiClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://cdn.resultonlinebd.com",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY'
  }
});
/* harmony default export */ __webpack_exports__["a"] = ({
  SetView(slug) {
    return apiClient.put(process.env.baseURL + '/count/' + slug, {
      view: 1
    });
  },

  GetMoreHomeArticles(pageNumber) {
    return apiClient.get('/?page=' + pageNumber);
  },

  GetMoreTopArticles(pageNumber) {
    return apiClient.get('/TopContent?page=' + pageNumber);
  },

  GetMoreRecommendedArticles(pageNumber) {
    return apiClient.get(`recommended_data?page=` + pageNumber);
  },

  GetMoreHighRatedArticles(pageNumber) {
    return apiClient.get(`/high_ratetd?page=` + pageNumber);
  },

  GetAuthorArticles(authorName) {
    return apiClient.get('/channel/' + authorName);
  },

  GetDetailArticle(slug) {
    return apiClient.get('/details/' + slug);
  },

  GetMoreProgrammingArticles(pageNumber) {
    return apiClient.get("http://cdn.resultonlinebd.com/channel_Dataapi?page=" + pageNumber + `&search=Programming`);
  },

  GetMoreCelebrityArticles(pageNumber) {
    return apiClient.get("http://cdn.resultonlinebd.com/channel_Dataapi?page=" + pageNumber + `&search=Celebrity`);
  },

  GetMoreGamingArticles(pageNumber) {
    return apiClient.get("http://cdn.resultonlinebd.com/channel_Dataapi?page=" + pageNumber + `&search=Gaming`);
  },

  GetMoreHistoryArticles(pageNumber) {
    return apiClient.get("http://cdn.resultonlinebd.com/channel_Dataapi?page=" + pageNumber + `&search=History`);
  },

  GetMoreHealthArticles(pageNumber) {
    return apiClient.get("http://cdn.resultonlinebd.com/channel_Dataapi?page=" + pageNumber + `&search=Health`);
  },

  GetMoreTechnologyArticles(pageNumber) {
    return apiClient.get("http://cdn.resultonlinebd.com/channel_Dataapi?page=" + pageNumber + `&search=Technology`);
  },

  GetMoreDesignLibraryArticles(pageNumber) {
    return apiClient.get("http://cdn.resultonlinebd.com/channel_Dataapi?page=" + pageNumber + `&search=Design+library`);
  },

  GetMoreMobileArticles(pageNumber) {
    return apiClient.get("http://cdn.resultonlinebd.com/channel_Dataapi?page=" + pageNumber + `&search=Mobile+phone`);
  }

});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-content-loading");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("46f1eff5", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ec226d68", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("618c6a6c", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1dcc4d86", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("50c9b60c", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b6de2f32", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("e6d517b6", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3cabf3af", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2570f76c", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b18f354c", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("cec3fd7a", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("74df8dd9", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("28e3f741", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2ab83dff", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("286d3d98", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("080c3342", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fb.4286ec5.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/insta.d77b430.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tw.85ae8b1.png";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("vuescroll");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand.c6dc785.png";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlNmU3ZTg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5tYW51PC90aXRsZT48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjUuMjciIHk9IjMuOTYiIHdpZHRoPSIxOC4zMyIgaGVpZ2h0PSIxOC4zMyIgcng9IjIuMjEiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjI3LjY4IiB5PSIzLjk2IiB3aWR0aD0iMTguMzMiIGhlaWdodD0iMTguMzMiIHJ4PSIyLjE2Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI1LjI3IiB5PSIyNi4zNCIgd2lkdGg9IjE4LjMzIiBoZWlnaHQ9IjE4LjMzIiByeD0iMS41OCIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjcuNjgiIHk9IjI2LjM0IiB3aWR0aD0iMTguMzMiIGhlaWdodD0iMTguMzMiIHJ4PSIxLjg4Ii8+PC9zdmc+"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@saeris/vue-spinners");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footerLogo.88f3833.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pin.ff99dc0.png";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("vue-star-rating");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@trevoreyre/autocomplete-vue");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("vuesax");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("nuxt-jsonld");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const namespaced = true;
const state = () => ({
  AuthorArticles: []
});
const mutations = {
  SET_AUTHOR_ARTICLES(state, payload) {
    state.AuthorArticles = payload;
  },

  SET_MORE_ARTICLES(state, payload) {
    state.AuthorArticles.List.push(payload);
  }

};
const actions = {
  AddMore({
    commit
  }, posts) {
    commit('SET_MORE_ARTICLES', posts);
  },

  FetchAuthorArticles({
    commit
  }, posts) {
    commit('SET_AUTHOR_ARTICLES', posts);
  }

};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/r.108f993.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:3px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:red;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("71f83a6d", content, true)

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * Bootstrap v4.5.2 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(.focus-visible){outline:0!important}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([class]){color:inherit;text-decoration:none}a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer:before{content:\"\\2014\\00A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#0069d9;border-color:#0062cc;box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{color:#fff;background-color:#5a6268;border-color:#545b62;box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#218838;border-color:#1e7e34;box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{color:#212529;background-color:#e0a800;border-color:#d39e00;box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c82333;border-color:#bd2130;box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{color:#fff;background-color:#23272b;border-color:#1d2124;box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label:before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:1px solid #adb5bd}.custom-control-label:after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label:after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(1.5em + .75rem + 2px)}.custom-file-input{z-index:2;margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label:after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:none}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat 50%;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;grid-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb,.breadcrumb-item{display:flex}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{height:1rem;line-height:0;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:.875rem;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}[dir=ltr] .tooltip{text-align:left}[dir=rtl] .tooltip{text-align:right}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{transform:rotate(1turn)}}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid;border-right:.25em solid transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.857143%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;-ms-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom{bottom:0}@supports (position:sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:transparent}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("32df6d42", content, true)

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.org)\n */.bv-no-focus-ring:focus{outline:none}@media (max-width:575.98px){.bv-d-xs-down-none{display:none!important}}@media (max-width:767.98px){.bv-d-sm-down-none{display:none!important}}@media (max-width:991.98px){.bv-d-md-down-none{display:none!important}}@media (max-width:1199.98px){.bv-d-lg-down-none{display:none!important}}.bv-d-xl-down-none{display:none!important}.form-control.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-form-btn-label-control.form-control{background-image:none;padding:0}.input-group .b-form-btn-label-control.form-control{padding:0}.b-form-btn-label-control.form-control[dir=rtl],[dir=rtl] .b-form-btn-label-control.form-control{flex-direction:row-reverse}.b-form-btn-label-control.form-control[dir=rtl]>label,[dir=rtl] .b-form-btn-label-control.form-control>label{text-align:right}.b-form-btn-label-control.form-control>.btn{line-height:1;font-size:inherit;box-shadow:none!important;border:0}.b-form-btn-label-control.form-control>.btn:disabled{pointer-events:none}.b-form-btn-label-control.form-control.is-valid>.btn{color:#28a745}.b-form-btn-label-control.form-control.is-invalid>.btn{color:#dc3545}.b-form-btn-label-control.form-control>.dropdown-menu{padding:.5rem}.b-form-btn-label-control.form-control>label{outline:0;padding-left:.25rem;margin:0;border:0;font-size:inherit;cursor:pointer;min-height:calc(1.5em + .75rem)}.b-form-btn-label-control.form-control>label.form-control-sm{min-height:calc(1.5em + .5rem)}.b-form-btn-label-control.form-control>label.form-control-lg{min-height:calc(1.5em + 1rem)}.input-group.input-group-sm .b-form-btn-label-control.form-control>label{min-height:calc(1.5em + .5rem);padding-top:.25rem;padding-bottom:.25rem}.input-group.input-group-lg .b-form-btn-label-control.form-control>label{min-height:calc(1.5em + 1rem);padding-top:.5rem;padding-bottom:.5rem}.b-form-btn-label-control.form-control[aria-disabled=true],.b-form-btn-label-control.form-control[aria-readonly=true]{background-color:#e9ecef;opacity:1}.b-form-btn-label-control.form-control[aria-disabled=true]{pointer-events:none}.b-form-btn-label-control.form-control[aria-disabled=true]>label{cursor:default}.b-form-btn-label-control.btn-group>.dropdown-menu{padding:.5rem}.b-avatar{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;font-size:inherit;font-weight:400;line-height:1;max-width:100%;max-height:auto;text-align:center;overflow:visible;position:relative;transition:color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out}.b-avatar:focus{outline:0}.b-avatar.btn,.b-avatar[href]{padding:0;border:0}.b-avatar.btn .b-avatar-img img,.b-avatar[href] .b-avatar-img img{transition:transform .15s ease-in-out}.b-avatar.btn:not(:disabled):not(.disabled),.b-avatar[href]:not(:disabled):not(.disabled){cursor:pointer}.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img,.b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img{transform:scale(1.15)}.b-avatar.disabled,.b-avatar:disabled,.b-avatar[disabled]{opacity:.65;pointer-events:none}.b-avatar .b-avatar-custom,.b-avatar .b-avatar-img,.b-avatar .b-avatar-text{border-radius:inherit;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center}.b-avatar .b-avatar-text{text-transform:uppercase;white-space:nowrap}.b-avatar[href]{text-decoration:none}.b-avatar>.b-icon{width:60%;height:auto;max-width:100%}.b-avatar .b-avatar-img img{width:100%;height:100%;max-height:auto;border-radius:inherit}.b-avatar .b-avatar-badge{position:absolute;min-height:1.5em;min-width:1.5em;padding:.25em;line-height:1;border-radius:10em;font-size:70%;font-weight:700;z-index:5}.b-avatar-group .b-avatar-group-inner{display:flex;flex-wrap:wrap}.b-avatar-group .b-avatar{border:1px solid #dee2e6}.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled),.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled){z-index:3}.b-calendar{display:inline-flex}.b-calendar .b-calendar-inner{min-width:250px}.b-calendar .b-calendar-header,.b-calendar .b-calendar-nav{margin-bottom:.25rem}.b-calendar .b-calendar-nav .btn{padding:.25rem}.b-calendar output{padding:.25rem;font-size:80%}.b-calendar output.readonly{background-color:#e9ecef;opacity:1}.b-calendar .b-calendar-footer{margin-top:.5rem}.b-calendar .b-calendar-grid{padding:0;margin:0;overflow:hidden}.b-calendar .b-calendar-grid .row{flex-wrap:nowrap}.b-calendar .b-calendar-grid-caption{padding:.25rem}.b-calendar .b-calendar-grid-body .col[data-date] .btn{width:32px;height:32px;font-size:14px;line-height:1;margin:3px auto;padding:9px 0}.b-calendar .btn.disabled,.b-calendar .btn:disabled,.b-calendar .btn[aria-disabled=true]{cursor:default;pointer-events:none}.card-img-left{border-top-left-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-img-right{border-top-right-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret:after{display:none!important}.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret:before{display:none!important}.dropdown .dropdown-menu:focus{outline:none}.b-dropdown-form{display:inline-block;padding:.25rem 1.5rem;width:100%;clear:both;font-weight:400}.b-dropdown-form:focus{outline:1px dotted!important;outline:5px auto -webkit-focus-ring-color!important}.b-dropdown-form.disabled,.b-dropdown-form:disabled{outline:0!important;color:#6c757d;pointer-events:none}.b-dropdown-text{display:inline-block;padding:.25rem 1.5rem;margin-bottom:0;width:100%;clear:both;font-weight:lighter}.custom-checkbox.b-custom-control-lg,.input-group-lg .custom-checkbox{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-checkbox.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-checkbox .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:.3rem}.custom-checkbox.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-checkbox .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background-size:50% 50%}.custom-checkbox.b-custom-control-sm,.input-group-sm .custom-checkbox{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-checkbox.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-checkbox .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:.2rem}.custom-checkbox.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-checkbox .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background-size:50% 50%}.custom-switch.b-custom-control-lg,.input-group-lg .custom-switch{padding-left:2.8125rem}.custom-switch.b-custom-control-lg .custom-control-label,.input-group-lg .custom-switch .custom-control-label{font-size:1.25rem;line-height:1.5}.custom-switch.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-switch .custom-control-label:before{top:.3125rem;height:1.25rem;left:-2.8125rem;width:2.1875rem;border-radius:.625rem}.custom-switch.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-switch .custom-control-label:after{top:calc(.3125rem + 2px);left:calc(-2.8125rem + 2px);width:calc(1.25rem - 4px);height:calc(1.25rem - 4px);border-radius:.625rem;background-size:50% 50%}.custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after,.input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.9375rem)}.custom-switch.b-custom-control-sm,.input-group-sm .custom-switch{padding-left:1.96875rem}.custom-switch.b-custom-control-sm .custom-control-label,.input-group-sm .custom-switch .custom-control-label{font-size:.875rem;line-height:1.5}.custom-switch.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-switch .custom-control-label:before{top:.21875rem;left:-1.96875rem;width:1.53125rem;height:.875rem;border-radius:.4375rem}.custom-switch.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-switch .custom-control-label:after{top:calc(.21875rem + 2px);left:calc(-1.96875rem + 2px);width:calc(.875rem - 4px);height:calc(.875rem - 4px);border-radius:.4375rem;background-size:50% 50%}.custom-switch.b-custom-control-sm .custom-control-input:checked~.custom-control-label:after,.input-group-sm .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.65625rem)}.input-group>.input-group-append:last-child>.btn-group:not(:last-child):not(.dropdown-toggle)>.btn,.input-group>.input-group-append:not(:last-child)>.btn-group>.btn,.input-group>.input-group-prepend>.btn-group>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn-group>.btn,.input-group>.input-group-prepend:first-child>.btn-group:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.btn-group>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.b-custom-control-lg.custom-file,.b-custom-control-lg .custom-file-input,.b-custom-control-lg .custom-file-label,.input-group-lg.custom-file,.input-group-lg .custom-file-input,.input-group-lg .custom-file-label{font-size:1.25rem;height:calc(1.5em + 1rem + 2px)}.b-custom-control-lg .custom-file-label,.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label,.input-group-lg .custom-file-label:after{padding:.5rem 1rem;line-height:1.5}.b-custom-control-lg .custom-file-label,.input-group-lg .custom-file-label{border-radius:.3rem}.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label:after{font-size:inherit;height:calc(1.5em + 1rem);border-radius:0 .3rem .3rem 0}.b-custom-control-sm.custom-file,.b-custom-control-sm .custom-file-input,.b-custom-control-sm .custom-file-label,.input-group-sm.custom-file,.input-group-sm .custom-file-input,.input-group-sm .custom-file-label{font-size:.875rem;height:calc(1.5em + .5rem + 2px)}.b-custom-control-sm .custom-file-label,.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label,.input-group-sm .custom-file-label:after{padding:.25rem .5rem;line-height:1.5}.b-custom-control-sm .custom-file-label,.input-group-sm .custom-file-label{border-radius:.2rem}.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label:after{font-size:inherit;height:calc(1.5em + .5rem);border-radius:0 .2rem .2rem 0}.form-control.is-invalid,.form-control.is-valid,.was-validated .form-control:invalid,.was-validated .form-control:valid{background-position:right calc(.375em + .1875rem) center}input[type=color].form-control{height:calc(1.5em + .75rem + 2px);padding:.125rem .25rem}.input-group-sm input[type=color].form-control,input[type=color].form-control.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.125rem .25rem}.input-group-lg input[type=color].form-control,input[type=color].form-control.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.125rem .25rem}input[type=color].form-control:disabled{background-color:#adb5bd;opacity:.65}.input-group>.custom-range{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-range+.custom-file,.input-group>.custom-range+.custom-range,.input-group>.custom-range+.custom-select,.input-group>.custom-range+.form-control,.input-group>.custom-range+.form-control-plaintext{margin-left:-1px}.input-group>.custom-file+.custom-range,.input-group>.custom-range+.custom-range,.input-group>.custom-select+.custom-range,.input-group>.form-control+.custom-range,.input-group>.form-control-plaintext+.custom-range{margin-left:-1px}.input-group>.custom-range:focus{z-index:3}.input-group>.custom-range:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-range:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-range{padding:0 .75rem;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;height:calc(1.5em + .75rem + 2px);border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.input-group>.custom-range{transition:none}}.input-group>.custom-range:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.input-group>.custom-range:disabled,.input-group>.custom-range[readonly]{background-color:#e9ecef}.input-group-lg>.custom-range{height:calc(1.5em + 1rem + 2px);padding:0 1rem;border-radius:.3rem}.input-group-sm>.custom-range{height:calc(1.5em + .5rem + 2px);padding:0 .5rem;border-radius:.2rem}.input-group .custom-range.is-valid,.was-validated .input-group .custom-range:valid{border-color:#28a745}.input-group .custom-range.is-valid:focus,.was-validated .input-group .custom-range:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-range.is-valid:focus::-webkit-slider-thumb,.was-validated .custom-range:valid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-moz-range-thumb,.was-validated .custom-range:valid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-ms-thumb,.was-validated .custom-range:valid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid::-webkit-slider-thumb,.was-validated .custom-range:valid::-webkit-slider-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-webkit-slider-thumb:active,.was-validated .custom-range:valid::-webkit-slider-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-webkit-slider-runnable-track,.was-validated .custom-range:valid::-webkit-slider-runnable-track{background-color:rgba(40,167,69,.35)}.custom-range.is-valid::-moz-range-thumb,.was-validated .custom-range:valid::-moz-range-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-moz-range-thumb:active,.was-validated .custom-range:valid::-moz-range-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-moz-range-track,.was-validated .custom-range:valid::-moz-range-track{background:rgba(40,167,69,.35)}.custom-range.is-valid~.valid-feedback,.custom-range.is-valid~.valid-tooltip,.was-validated .custom-range:valid~.valid-feedback,.was-validated .custom-range:valid~.valid-tooltip{display:block}.custom-range.is-valid::-ms-thumb,.was-validated .custom-range:valid::-ms-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-ms-thumb:active,.was-validated .custom-range:valid::-ms-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-ms-track-lower,.custom-range.is-valid::-ms-track-upper,.was-validated .custom-range:valid::-ms-track-lower,.was-validated .custom-range:valid::-ms-track-upper{background:rgba(40,167,69,.35)}.input-group .custom-range.is-invalid,.was-validated .input-group .custom-range:invalid{border-color:#dc3545}.input-group .custom-range.is-invalid:focus,.was-validated .input-group .custom-range:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-range.is-invalid:focus::-webkit-slider-thumb,.was-validated .custom-range:invalid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-moz-range-thumb,.was-validated .custom-range:invalid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-ms-thumb,.was-validated .custom-range:invalid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid::-webkit-slider-thumb,.was-validated .custom-range:invalid::-webkit-slider-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-webkit-slider-thumb:active,.was-validated .custom-range:invalid::-webkit-slider-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-webkit-slider-runnable-track,.was-validated .custom-range:invalid::-webkit-slider-runnable-track{background-color:rgba(220,53,69,.35)}.custom-range.is-invalid::-moz-range-thumb,.was-validated .custom-range:invalid::-moz-range-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-moz-range-thumb:active,.was-validated .custom-range:invalid::-moz-range-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-moz-range-track,.was-validated .custom-range:invalid::-moz-range-track{background:rgba(220,53,69,.35)}.custom-range.is-invalid~.invalid-feedback,.custom-range.is-invalid~.invalid-tooltip,.was-validated .custom-range:invalid~.invalid-feedback,.was-validated .custom-range:invalid~.invalid-tooltip{display:block}.custom-range.is-invalid::-ms-thumb,.was-validated .custom-range:invalid::-ms-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-ms-thumb:active,.was-validated .custom-range:invalid::-ms-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-ms-track-lower,.custom-range.is-invalid::-ms-track-upper,.was-validated .custom-range:invalid::-ms-track-lower,.was-validated .custom-range:invalid::-ms-track-upper{background:rgba(220,53,69,.35)}.custom-radio.b-custom-control-lg,.input-group-lg .custom-radio{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-radio.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-radio .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:50%}.custom-radio.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-radio .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background:no-repeat 50%/50% 50%}.custom-radio.b-custom-control-sm,.input-group-sm .custom-radio{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-radio.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-radio .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:50%}.custom-radio.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-radio .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background:no-repeat 50%/50% 50%}.b-rating{text-align:center}.b-rating.d-inline-flex{width:auto}.b-rating .b-rating-star,.b-rating .b-rating-value{padding:0 .25em}.b-rating .b-rating-value{min-width:2.5em}.b-rating .b-rating-star{display:inline-flex;justify-content:center;outline:0}.b-rating .b-rating-star .b-rating-icon{display:inline-flex;transition:all .15s ease-in-out}.b-rating.disabled,.b-rating:disabled{background-color:#e9ecef;color:#6c757d}.b-rating:not(.disabled):not(.readonly) .b-rating-star{cursor:pointer}.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon,.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon{transform:scale(1.5)}.b-rating[dir=rtl] .b-rating-star-half{transform:scaleX(-1)}.b-form-spinbutton{text-align:center;overflow:hidden;background-image:none;padding:0}.b-form-spinbutton[dir=rtl]:not(.flex-column),[dir=rtl] .b-form-spinbutton:not(.flex-column){flex-direction:row-reverse}.b-form-spinbutton output{font-size:inherit;outline:0;border:0;background-color:transparent;width:auto;margin:0;padding:0 .25rem}.b-form-spinbutton output>bdi,.b-form-spinbutton output>div{display:block;min-width:2.25em;height:1.5em}.b-form-spinbutton.flex-column{height:auto;width:auto}.b-form-spinbutton.flex-column output{margin:0 .25rem;padding:.25rem 0}.b-form-spinbutton:not(.d-inline-flex):not(.flex-column){output-width:100%}.b-form-spinbutton.d-inline-flex:not(.flex-column){width:auto}.b-form-spinbutton .btn{line-height:1;box-shadow:none!important}.b-form-spinbutton .btn:disabled{pointer-events:none}.b-form-spinbutton .btn:hover:not(:disabled)>div>.b-icon{transform:scale(1.25)}.b-form-spinbutton.disabled,.b-form-spinbutton.readonly{background-color:#e9ecef}.b-form-spinbutton.disabled{pointer-events:none}.b-form-tags .b-form-tags-list{margin-top:-.25rem}.b-form-tags .b-form-tags-list .b-form-tag{margin-top:.25rem}.b-form-tags.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.b-form-tags.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.b-form-tags.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-form-tags.disabled{background-color:#e9ecef}.b-form-tag{font-size:75%;font-weight:400;line-height:1.5;margin-right:.25rem}.b-form-tag.disabled{opacity:.75}.b-form-tag>button.b-form-tag-remove{color:inherit;font-size:125%;line-height:1;float:none;margin-left:.25rem}.form-control-lg .b-form-tag,.form-control-sm .b-form-tag{line-height:1.5}.modal-backdrop{opacity:.5}.b-pagination-pills .page-item .page-link{border-radius:50rem!important;margin-left:.25rem;line-height:1}.b-pagination-pills .page-item:first-child .page-link{margin-left:0}.popover.b-popover{display:block;opacity:1;outline:0}.popover.b-popover.fade:not(.show){opacity:0}.popover.b-popover.show{opacity:1}.b-popover-primary.popover{background-color:#cce5ff;border-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-primary.bs-popover-top>.arrow:before{border-top-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-primary.bs-popover-top>.arrow:after{border-top-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-primary.bs-popover-right>.arrow:before{border-right-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-primary.bs-popover-right>.arrow:after{border-right-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-primary.bs-popover-bottom>.arrow:before{border-bottom-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-primary.bs-popover-bottom>.arrow:after{border-bottom-color:#bdddff}.b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-primary.bs-popover-bottom .popover-header:before{border-bottom-color:#bdddff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-primary.bs-popover-left>.arrow:before{border-left-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-primary.bs-popover-left>.arrow:after{border-left-color:#cce5ff}.b-popover-primary .popover-header{color:#212529;background-color:#bdddff;border-bottom-color:#a3d0ff}.b-popover-primary .popover-body{color:#004085}.b-popover-secondary.popover{background-color:#e2e3e5;border-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-secondary.bs-popover-top>.arrow:before{border-top-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-secondary.bs-popover-top>.arrow:after{border-top-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-secondary.bs-popover-right>.arrow:before{border-right-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-secondary.bs-popover-right>.arrow:after{border-right-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-secondary.bs-popover-bottom>.arrow:before{border-bottom-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-secondary.bs-popover-bottom>.arrow:after{border-bottom-color:#dadbde}.b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-secondary.bs-popover-bottom .popover-header:before{border-bottom-color:#dadbde}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-secondary.bs-popover-left>.arrow:before{border-left-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-secondary.bs-popover-left>.arrow:after{border-left-color:#e2e3e5}.b-popover-secondary .popover-header{color:#212529;background-color:#dadbde;border-bottom-color:#ccced2}.b-popover-secondary .popover-body{color:#383d41}.b-popover-success.popover{background-color:#d4edda;border-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-success.bs-popover-top>.arrow:before{border-top-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-success.bs-popover-top>.arrow:after{border-top-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-success.bs-popover-right>.arrow:before{border-right-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-success.bs-popover-right>.arrow:after{border-right-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-success.bs-popover-bottom>.arrow:before{border-bottom-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-success.bs-popover-bottom>.arrow:after{border-bottom-color:#c9e8d1}.b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-success.bs-popover-bottom .popover-header:before{border-bottom-color:#c9e8d1}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-success.bs-popover-left>.arrow:before{border-left-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-success.bs-popover-left>.arrow:after{border-left-color:#d4edda}.b-popover-success .popover-header{color:#212529;background-color:#c9e8d1;border-bottom-color:#b7e1c1}.b-popover-success .popover-body{color:#155724}.b-popover-info.popover{background-color:#d1ecf1;border-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-info.bs-popover-top>.arrow:before{border-top-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-info.bs-popover-top>.arrow:after{border-top-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-info.bs-popover-right>.arrow:before{border-right-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-info.bs-popover-right>.arrow:after{border-right-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-info.bs-popover-bottom>.arrow:before{border-bottom-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-info.bs-popover-bottom>.arrow:after{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-info.bs-popover-bottom .popover-header:before{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-info.bs-popover-left>.arrow:before{border-left-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-info.bs-popover-left>.arrow:after{border-left-color:#d1ecf1}.b-popover-info .popover-header{color:#212529;background-color:#c5e7ed;border-bottom-color:#b2dfe7}.b-popover-info .popover-body{color:#0c5460}.b-popover-warning.popover{background-color:#fff3cd;border-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-warning.bs-popover-top>.arrow:before{border-top-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-warning.bs-popover-top>.arrow:after{border-top-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-warning.bs-popover-right>.arrow:before{border-right-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-warning.bs-popover-right>.arrow:after{border-right-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-warning.bs-popover-bottom>.arrow:before{border-bottom-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-warning.bs-popover-bottom>.arrow:after{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-warning.bs-popover-bottom .popover-header:before{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-warning.bs-popover-left>.arrow:before{border-left-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-warning.bs-popover-left>.arrow:after{border-left-color:#fff3cd}.b-popover-warning .popover-header{color:#212529;background-color:#ffefbe;border-bottom-color:#ffe9a4}.b-popover-warning .popover-body{color:#856404}.b-popover-danger.popover{background-color:#f8d7da;border-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-danger.bs-popover-top>.arrow:before{border-top-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-danger.bs-popover-top>.arrow:after{border-top-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-danger.bs-popover-right>.arrow:before{border-right-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-danger.bs-popover-right>.arrow:after{border-right-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-danger.bs-popover-bottom>.arrow:before{border-bottom-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-danger.bs-popover-bottom>.arrow:after{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-danger.bs-popover-bottom .popover-header:before{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-danger.bs-popover-left>.arrow:before{border-left-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-danger.bs-popover-left>.arrow:after{border-left-color:#f8d7da}.b-popover-danger .popover-header{color:#212529;background-color:#f6cace;border-bottom-color:#f2b4ba}.b-popover-danger .popover-body{color:#721c24}.b-popover-light.popover{background-color:#fefefe;border-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-light.bs-popover-top>.arrow:before{border-top-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-light.bs-popover-top>.arrow:after{border-top-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-light.bs-popover-right>.arrow:before{border-right-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-light.bs-popover-right>.arrow:after{border-right-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-light.bs-popover-bottom>.arrow:before{border-bottom-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-light.bs-popover-bottom>.arrow:after{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-light.bs-popover-bottom .popover-header:before{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-light.bs-popover-left>.arrow:before{border-left-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-light.bs-popover-left>.arrow:after{border-left-color:#fefefe}.b-popover-light .popover-header{color:#212529;background-color:#f6f6f6;border-bottom-color:#eaeaea}.b-popover-light .popover-body{color:#818182}.b-popover-dark.popover{background-color:#d6d8d9;border-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-dark.bs-popover-top>.arrow:before{border-top-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-dark.bs-popover-top>.arrow:after{border-top-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-dark.bs-popover-right>.arrow:before{border-right-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-dark.bs-popover-right>.arrow:after{border-right-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-dark.bs-popover-bottom>.arrow:before{border-bottom-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-dark.bs-popover-bottom>.arrow:after{border-bottom-color:#ced0d2}.b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-dark.bs-popover-bottom .popover-header:before{border-bottom-color:#ced0d2}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-dark.bs-popover-left>.arrow:before{border-left-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-dark.bs-popover-left>.arrow:after{border-left-color:#d6d8d9}.b-popover-dark .popover-header{color:#212529;background-color:#ced0d2;border-bottom-color:#c1c4c5}.b-popover-dark .popover-body{color:#1b1e21}.b-sidebar-outer{right:0;height:0;overflow:visible;z-index:1035}.b-sidebar-backdrop,.b-sidebar-outer{position:fixed!important;top:0;left:0}.b-sidebar-backdrop{z-index:-1;width:100vw;height:100vh;opacity:.6}.b-sidebar{display:flex;flex-direction:column;position:fixed!important;top:0;height:100vh;width:320px;max-width:100%!important;margin:0!important;outline:0;transform:translateX(0)}.b-sidebar.slide{transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.b-sidebar.slide{transition:none}}.b-sidebar:not(.b-sidebar-right){left:0;right:auto}.b-sidebar:not(.b-sidebar-right).slide:not(.show){transform:translateX(-100%)}.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close{margin-left:auto}.b-sidebar.b-sidebar-right{left:auto;right:0}.b-sidebar.b-sidebar-right.slide:not(.show){transform:translateX(100%)}.b-sidebar.b-sidebar-right>.b-sidebar-header .close{margin-right:auto}.b-sidebar>.b-sidebar-header{font-size:1.5rem;padding:.5rem 1rem;display:flex;flex-direction:row;flex-grow:0;align-items:center}[dir=rtl] .b-sidebar>.b-sidebar-header{flex-direction:row-reverse}.b-sidebar>.b-sidebar-header .close{float:none;font-size:1.5rem}.b-sidebar>.b-sidebar-body{flex-grow:1;height:100%;overflow-y:auto}.b-sidebar>.b-sidebar-footer{flex-grow:0}.table.b-table.b-table-fixed{table-layout:fixed}.table.b-table.b-table-no-border-collapse{border-collapse:separate;border-spacing:0}.table.b-table[aria-busy=true]{opacity:.55}.table.b-table>tbody>tr.b-table-details>td{border-top:none!important}.table.b-table>caption{caption-side:bottom}.table.b-table.b-table-caption-top>caption{caption-side:top!important}.table.b-table>tbody>.table-active,.table.b-table>tbody>.table-active>td,.table.b-table>tbody>.table-active>th{background-color:rgba(0,0,0,.075)}.table.b-table.table-hover>tbody>tr.table-active:hover td,.table.b-table.table-hover>tbody>tr.table-active:hover th{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table>tbody>.bg-active,.table.b-table>tbody>.bg-active>td,.table.b-table>tbody>.bg-active>th{background-color:hsla(0,0%,100%,.075)!important}.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover td,.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover th{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}.b-table-sticky-header,.table-responsive,[class*=table-responsive-]{margin-bottom:1rem}.b-table-sticky-header>.table,.table-responsive>.table,[class*=table-responsive-]>.table{margin-bottom:0}.b-table-sticky-header{overflow-y:auto;max-height:300px}@media print{.b-table-sticky-header{overflow-y:visible!important;max-height:none!important}}@supports (position:sticky){.b-table-sticky-header>.table.b-table>thead>tr>th{position:sticky;top:0;z-index:2}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{position:sticky;left:0}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{z-index:5}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{z-index:2}.table.b-table>tbody>tr>.table-b-table-default,.table.b-table>tfoot>tr>.table-b-table-default,.table.b-table>thead>tr>.table-b-table-default{color:#212529;background-color:#fff}.table.b-table.table-dark>tbody>tr>.bg-b-table-default,.table.b-table.table-dark>tfoot>tr>.bg-b-table-default,.table.b-table.table-dark>thead>tr>.bg-b-table-default{color:#fff;background-color:#343a40}.table.b-table.table-striped>tbody>tr:nth-of-type(odd)>.table-b-table-default{background-image:linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05));background-repeat:no-repeat}.table.b-table.table-striped.table-dark>tbody>tr:nth-of-type(odd)>.bg-b-table-default{background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,.05));background-repeat:no-repeat}.table.b-table.table-hover>tbody>tr:hover>.table-b-table-default{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table.table-hover.table-dark>tbody>tr:hover>.bg-b-table-default{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}}.table.b-table>tfoot>tr>[aria-sort],.table.b-table>thead>tr>[aria-sort]{cursor:pointer;background-image:none;background-repeat:no-repeat;background-size:.65em 1em}.table.b-table>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .375rem center;padding-right:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .375rem center;padding-left:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort=none],.table.b-table>thead>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=ascending],.table.b-table>thead>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=descending],.table.b-table>thead>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=none],.table.b-table.table-dark>thead>tr>[aria-sort=none],.table.b-table>.thead-dark>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=ascending],.table.b-table.table-dark>thead>tr>[aria-sort=ascending],.table.b-table>.thead-dark>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=descending],.table.b-table.table-dark>thead>tr>[aria-sort=descending],.table.b-table>.thead-dark>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=none],.table.b-table>thead>tr>.table-dark[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=ascending],.table.b-table>thead>tr>.table-dark[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=descending],.table.b-table>thead>tr>.table-dark[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-sm>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table.table-sm>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .15rem center;padding-right:calc(.3rem + .65em)}.table.b-table.table-sm>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table.table-sm>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .15rem center;padding-left:calc(.3rem + .65em)}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click)>tbody>tr{cursor:pointer}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range>tbody>tr{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:575.98px){.table.b-table.b-table-stacked-sm{display:block;width:100%}.table.b-table.b-table-stacked-sm>caption,.table.b-table.b-table-stacked-sm>tbody,.table.b-table.b-table-stacked-sm>tbody>tr,.table.b-table.b-table-stacked-sm>tbody>tr>td,.table.b-table.b-table-stacked-sm>tbody>tr>th{display:block}.table.b-table.b-table-stacked-sm>tfoot,.table.b-table.b-table-stacked-sm>thead{display:none}.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-sm>caption{caption-side:top!important}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr.bottom-row,.table.b-table.b-table-stacked-sm>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-sm>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:767.98px){.table.b-table.b-table-stacked-md{display:block;width:100%}.table.b-table.b-table-stacked-md>caption,.table.b-table.b-table-stacked-md>tbody,.table.b-table.b-table-stacked-md>tbody>tr,.table.b-table.b-table-stacked-md>tbody>tr>td,.table.b-table.b-table-stacked-md>tbody>tr>th{display:block}.table.b-table.b-table-stacked-md>tfoot,.table.b-table.b-table-stacked-md>thead{display:none}.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-md>caption{caption-side:top!important}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-md>tbody>tr.bottom-row,.table.b-table.b-table-stacked-md>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-md>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:991.98px){.table.b-table.b-table-stacked-lg{display:block;width:100%}.table.b-table.b-table-stacked-lg>caption,.table.b-table.b-table-stacked-lg>tbody,.table.b-table.b-table-stacked-lg>tbody>tr,.table.b-table.b-table-stacked-lg>tbody>tr>td,.table.b-table.b-table-stacked-lg>tbody>tr>th{display:block}.table.b-table.b-table-stacked-lg>tfoot,.table.b-table.b-table-stacked-lg>thead{display:none}.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-lg>caption{caption-side:top!important}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr.bottom-row,.table.b-table.b-table-stacked-lg>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-lg>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:1199.98px){.table.b-table.b-table-stacked-xl{display:block;width:100%}.table.b-table.b-table-stacked-xl>caption,.table.b-table.b-table-stacked-xl>tbody,.table.b-table.b-table-stacked-xl>tbody>tr,.table.b-table.b-table-stacked-xl>tbody>tr>td,.table.b-table.b-table-stacked-xl>tbody>tr>th{display:block}.table.b-table.b-table-stacked-xl>tfoot,.table.b-table.b-table-stacked-xl>thead{display:none}.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-xl>caption{caption-side:top!important}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr.bottom-row,.table.b-table.b-table-stacked-xl>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-xl>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th{border-top-width:3px}}.table.b-table.b-table-stacked{display:block;width:100%}.table.b-table.b-table-stacked>caption,.table.b-table.b-table-stacked>tbody,.table.b-table.b-table-stacked>tbody>tr,.table.b-table.b-table-stacked>tbody>tr>td,.table.b-table.b-table-stacked>tbody>tr>th{display:block}.table.b-table.b-table-stacked>tfoot,.table.b-table.b-table-stacked>thead{display:none}.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked>caption{caption-side:top!important}.table.b-table.b-table-stacked>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked>tbody>tr.bottom-row,.table.b-table.b-table-stacked>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th{border-top-width:3px}.b-time{min-width:150px}.b-time[aria-disabled=true] output,.b-time[aria-readonly=true] output,.b-time output.disabled{background-color:#e9ecef;opacity:1}.b-time[aria-disabled=true] output{pointer-events:none}[dir=rtl] .b-time>.d-flex:not(.flex-column){flex-direction:row-reverse}.b-time .b-time-header{margin-bottom:.5rem}.b-time .b-time-header output{padding:.25rem;font-size:80%}.b-time .b-time-footer{margin-top:.5rem}.b-time .b-time-ampm{margin-left:.5rem}.b-toast{display:block;position:relative;max-width:350px;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-clip:padding-box;z-index:1;border-radius:.25rem}.b-toast .toast{background-color:hsla(0,0%,100%,.85)}.b-toast:not(:last-child){margin-bottom:.75rem}.b-toast.b-toast-solid .toast{background-color:#fff}.b-toast .toast{opacity:1}.b-toast .toast.fade:not(.show){opacity:0}.b-toast .toast .toast-body{display:block}.b-toast-primary .toast{background-color:rgba(230,242,255,.85);border-color:rgba(184,218,255,.85);color:#004085}.b-toast-primary .toast .toast-header{color:#004085;background-color:rgba(204,229,255,.85);border-bottom-color:rgba(184,218,255,.85)}.b-toast-primary.b-toast-solid .toast{background-color:#e6f2ff}.b-toast-secondary .toast{background-color:rgba(239,240,241,.85);border-color:rgba(214,216,219,.85);color:#383d41}.b-toast-secondary .toast .toast-header{color:#383d41;background-color:rgba(226,227,229,.85);border-bottom-color:rgba(214,216,219,.85)}.b-toast-secondary.b-toast-solid .toast{background-color:#eff0f1}.b-toast-success .toast{background-color:rgba(230,245,233,.85);border-color:rgba(195,230,203,.85);color:#155724}.b-toast-success .toast .toast-header{color:#155724;background-color:rgba(212,237,218,.85);border-bottom-color:rgba(195,230,203,.85)}.b-toast-success.b-toast-solid .toast{background-color:#e6f5e9}.b-toast-info .toast{background-color:rgba(229,244,247,.85);border-color:rgba(190,229,235,.85);color:#0c5460}.b-toast-info .toast .toast-header{color:#0c5460;background-color:rgba(209,236,241,.85);border-bottom-color:rgba(190,229,235,.85)}.b-toast-info.b-toast-solid .toast{background-color:#e5f4f7}.b-toast-warning .toast{background-color:rgba(255,249,231,.85);border-color:rgba(255,238,186,.85);color:#856404}.b-toast-warning .toast .toast-header{color:#856404;background-color:rgba(255,243,205,.85);border-bottom-color:rgba(255,238,186,.85)}.b-toast-warning.b-toast-solid .toast{background-color:#fff9e7}.b-toast-danger .toast{background-color:rgba(252,237,238,.85);border-color:rgba(245,198,203,.85);color:#721c24}.b-toast-danger .toast .toast-header{color:#721c24;background-color:rgba(248,215,218,.85);border-bottom-color:rgba(245,198,203,.85)}.b-toast-danger.b-toast-solid .toast{background-color:#fcedee}.b-toast-light .toast{background-color:hsla(0,0%,100%,.85);border-color:rgba(253,253,254,.85);color:#818182}.b-toast-light .toast .toast-header{color:#818182;background-color:hsla(0,0%,99.6%,.85);border-bottom-color:rgba(253,253,254,.85)}.b-toast-light.b-toast-solid .toast{background-color:#fff}.b-toast-dark .toast{background-color:rgba(227,229,229,.85);border-color:rgba(198,200,202,.85);color:#1b1e21}.b-toast-dark .toast .toast-header{color:#1b1e21;background-color:rgba(214,216,217,.85);border-bottom-color:rgba(198,200,202,.85)}.b-toast-dark.b-toast-solid .toast{background-color:#e3e5e5}.b-toaster{z-index:1100}.b-toaster .b-toaster-slot{position:relative;display:block}.b-toaster .b-toaster-slot:empty{display:none!important}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right,.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{position:fixed;left:.5rem;right:.5rem;margin:0;padding:0;height:0;overflow:visible}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{position:absolute;max-width:350px;width:100%;left:0;right:0;padding:0;margin:0}.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-top-full .b-toaster-slot .toast{width:100%;max-width:100%}.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{top:0}.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{top:.5rem}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right{bottom:0}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot{bottom:.5rem}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{margin-left:auto}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot{margin-right:auto}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-move,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-move{transition:transform .175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade{transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active{position:absolute;transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade{transition-delay:0s}.tooltip.b-tooltip{display:block;opacity:.9;outline:0}.tooltip.b-tooltip.fade:not(.show){opacity:0}.tooltip.b-tooltip.show{opacity:.9}.tooltip.b-tooltip.noninteractive{pointer-events:none}.tooltip.b-tooltip .arrow{margin:0 .25rem}.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.bs-tooltip-left .arrow,.tooltip.b-tooltip.bs-tooltip-right .arrow{margin:.25rem 0}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-top .arrow:before{border-top-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-right .arrow:before{border-right-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow:before{border-bottom-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-left .arrow:before{border-left-color:#007bff}.tooltip.b-tooltip-primary .tooltip-inner{color:#fff;background-color:#007bff}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow:before{border-top-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow:before{border-right-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow:before{border-bottom-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow:before{border-left-color:#6c757d}.tooltip.b-tooltip-secondary .tooltip-inner{color:#fff;background-color:#6c757d}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-top .arrow:before{border-top-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-right .arrow:before{border-right-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow:before{border-bottom-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-left .arrow:before{border-left-color:#28a745}.tooltip.b-tooltip-success .tooltip-inner{color:#fff;background-color:#28a745}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-top .arrow:before{border-top-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-right .arrow:before{border-right-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow:before{border-bottom-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-left .arrow:before{border-left-color:#17a2b8}.tooltip.b-tooltip-info .tooltip-inner{color:#fff;background-color:#17a2b8}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-top .arrow:before{border-top-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-right .arrow:before{border-right-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow:before{border-bottom-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-left .arrow:before{border-left-color:#ffc107}.tooltip.b-tooltip-warning .tooltip-inner{color:#212529;background-color:#ffc107}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-top .arrow:before{border-top-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-right .arrow:before{border-right-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow:before{border-bottom-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-left .arrow:before{border-left-color:#dc3545}.tooltip.b-tooltip-danger .tooltip-inner{color:#fff;background-color:#dc3545}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-top .arrow:before{border-top-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-right .arrow:before{border-right-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow:before{border-bottom-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-left .arrow:before{border-left-color:#f8f9fa}.tooltip.b-tooltip-light .tooltip-inner{color:#212529;background-color:#f8f9fa}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-top .arrow:before{border-top-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-right .arrow:before{border-right-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow:before{border-bottom-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-left .arrow:before{border-left-color:#343a40}.tooltip.b-tooltip-dark .tooltip-inner{color:#fff;background-color:#343a40}.b-icon.bi{display:inline-block;overflow:visible;vertical-align:-.15em}.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{transform-origin:center;-webkit-animation:b-icon-animation-cylon .75s ease-in-out infinite alternate;animation:b-icon-animation-cylon .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{transform-origin:center;-webkit-animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate;animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{transform-origin:center;-webkit-animation:b-icon-animation-fade .75s ease-in-out infinite alternate;animation:b-icon-animation-fade .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{transform-origin:center;-webkit-animation:b-icon-animation-spin 2s linear infinite normal;animation:b-icon-animation-spin 2s linear infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{transform-origin:center;animation:b-icon-animation-spin 2s linear infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{transform-origin:center;-webkit-animation:b-icon-animation-spin 1s steps(8) infinite normal;animation:b-icon-animation-spin 1s steps(8) infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{transform-origin:center;animation:b-icon-animation-spin 1s steps(8) infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{transform-origin:center;-webkit-animation:b-icon-animation-throb .75s ease-in-out infinite alternate;animation:b-icon-animation-throb .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{-webkit-animation:none;animation:none}}@-webkit-keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}to{transform:translateX(25%)}}@keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}to{transform:translateX(25%)}}@-webkit-keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}to{transform:translateY(-25%)}}@keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}to{transform:translateY(-25%)}}@-webkit-keyframes b-icon-animation-fade{0%{opacity:.1}to{opacity:1}}@keyframes b-icon-animation-fade{0%{opacity:.1}to{opacity:1}}@-webkit-keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.btn .b-icon.bi,.dropdown-item .b-icon.bi,.dropdown-toggle .b-icon.bi,.input-group-text .b-icon.bi,.nav-link .b-icon.bi{font-size:125%;vertical-align:text-bottom}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("326bd4f1", content, true)

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{overflow-y:scroll}div.channel-side-bar::-webkit-scrollbar,div.side-bar-scroll::-webkit-scrollbar{width:7px}div.side-bar-scroll::-webkit-scrollbar-track{margin-top:45px;margin-bottom:22px}div.channel-side-bar::-webkit-scrollbar-track,div.side-bar-scroll::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #fafafa;border-radius:10px}div.side-bar-scroll:hover::-webkit-scrollbar-thumb{background:#b3b0b0;border-radius:10px}div.channel-side-bar:hover::-webkit-scrollbar-thumb{background:#b3b0b0;border-radius:10px}body{background-color:#fafafa!important;padding-right:0!important}.latest-under-line{height:3px;width:90px;background-color:#000}.about-under-line{height:3px;width:77px;background-color:#000;margin-left:112px}.line{margin-top:0;padding-top:0}.channel-side-bar-sticky{position:sticky;top:58px}.channel-side-bar{overflow-x:hidden;background:#fff;margin-bottom:6px;border-radius:5px;padding:5px}.main-tag-button{color:#212529;background-color:#fff;border-color:none!important;margin-bottom:5px!important;transform:none!important;transition:none!important}.main-tag-button:not(:disabled):not(.disabled).active:focus,.main-tag-button:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:none!important}.main-tag-button.focus,.main-tag-button:focus{color:#212529;background-color:#e2e6ea;border-color:none;box-shadow:none;border-radius:8px!important;outline:none!important}.main-tag-button:active{transform:none!important;outline:none!important}.b-button.focus,.b-button:focus{border-color:none}.main-tag-button:hover{border-radius:8px!important}.channel-side-bar-title{height:78px;line-height:40px;font-size:20px;background-color:#343a40;color:#fff;margin-bottom:6px;border-radius:3px;margin-top:2px}.channel-side-bar-list-group{overflow:auto}.channel-side-bar-list-item{font-size:16px;border:none!important;margin-bottom:0;cursor:pointer;text-align:left;border-radius:0;line-height:40px}.menu-logo{border:none!important;outline:none!important;outline-style:none!important}.channel-side-bar-list-item-icon{height:33px;width:37px;margin-left:-8px;margin-right:13px}.sub-tag{cursor:pointer;height:32px;line-height:32px;padding:0 14px;font-size:14px!important}@media (min-width:1350px){.container{max-width:1250px}.home-sidebar{padding-right:27px}.home-latest,.index-home-card{padding-left:27px}.index-home-card{padding-right:27px}.latest-home-card-detailpage{margin-left:-16px}.details-main-image{margin-right:10px}.view-logo-detailpage{margin-right:15px}}.channel-cover-title{text-align:center!important}a{border:none!important;outline:none!important;outline-style:none!important}.more-button{border:1px solid #dadce0;box-sizing:border-box;cursor:pointer;display:inline-block;font-size:14px;height:36px;line-height:20px;padding:7px 11px;position:relative;text-align:center;width:100px;border-radius:18px;background:#fff;box-shadow:0 5px .9rem -.8rem rgba(0,0,0,.8),0 0 0 1px rgba(0,0,0,.05)}.more-button-icon{left:12px;margin-top:0;height:20px;width:20px;align-self:center}.autocomplete-input::-moz-placeholder{color:#e4e6e8!important;opacity:1}.autocomplete-input:-ms-input-placeholder{color:#e4e6e8!important;opacity:1}.autocomplete-input::placeholder{color:#e4e6e8!important;opacity:1}.autocomplete-input{padding-left:5px;border-radius:5px;border:1px solid #3b4045;background-color:#3b4045;width:100%;position:relative;font-size:14px;line-height:1.5;flex:1;color:#e4e6e8!important;height:34px}.autocomplete-input:focus,.autocomplete-input[aria-expanded=true]{background-color:#3b4045;outline:none;color:#e4e6e8!important}[data-position=above] .autocomplete-input[aria-expanded=true]{border-top-color:transparent;border-radius:0 0 8px 8px;z-index:2}.autocomplete-result-list{margin:0;border:1px solid rgba(0,0,0,.12);padding:0;box-sizing:border-box;max-height:296px;overflow-y:auto;background:#fff;list-style:none;box-shadow:0 2px 2px rgba(0,0,0,.16)}[data-position=below] .autocomplete-result-list{margin-top:8px;border-top-color:transparent;border-radius:0 0 8px 8px;padding-bottom:0}[data-position=above] .autocomplete-result-list{margin-bottom:-1px;border-bottom-color:transparent;border-radius:8px 8px 0 0;padding-top:8px}.autocomplete-result{cursor:default;padding:12px 12px 12px 48px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Ik0yMSAyMWwtNC00Ii8+PC9zdmc+\");background-repeat:no-repeat;background-position:12px}.autocomplete-result:hover,.autocomplete-result[aria-selected=true]{background-color:rgba(0,0,0,.06)}@-webkit-keyframes rotate{0%{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(359deg)}}@keyframes rotate{0%{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(359deg)}}@media (min-width:0px) and (max-width:767px){[data-position=below] .autocomplete-result-list{margin-top:8px;border-top-color:transparent;border-radius:0 0 8px 8px;padding-bottom:0;color:#000;font-size:16px}}.vs-button--flat:focus{color:#fff;outline:none}.carousel-inner{border-radius:5px}.carousel-caption{position:absolute;right:0;bottom:0;left:0;z-index:10;padding-bottom:20px;padding-top:65px;color:#fff;text-align:left;background-image:linear-gradient(180deg,transparent,transparent 23%,rgba(0,0,0,.29) 48%,#080808);padding-left:8%}.copy-logo{background-color:#fff}.vs-dialog__close{background-color:#fff!important}.vs-dialog{background-color:#3b4045!important;color:#fff!important}@media (min-width:426px){.hide-in-dekstop{display:none!important}}@media (max-width:425px){.main-sec{padding-top:20px!important}.cover img{height:200px!important}.hide-in-mobile{display:none!important}.breadcrumbs{margin-bottom:5px!important}.carousel-inner img{height:177px!important}.my-custome-container{padding-left:0!important;padding-right:0!important}.home-main-row{margin-left:0!important;margin-right:0!important}.carousel-inner{border-radius:0!important}.mobile-row{margin-left:0!important;margin-right:0!important}.mobile-colmun{padding-right:0!important;padding-left:0!important}.home-latest,.home-sidebar{display:none!important}.home-latest,.home-sidebar,.index-home-card{padding-right:0!important;padding-left:0!important}.details-main-image img{height:180px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  // HomeArticles: [],
  // AuthorArticles: [],
  // TopArticles: [],
  HighRatedArticles: [],
  // ProgrammingArticles: [],
  mobileBrandLogo: [],
  SelectedMobileBrandArticle: [],
  mobileTop: [],
  mobileBottom: [],
  // celebrity: [],
  // islam: [],
  // history: [],
  // health: [],
  // technology: [],
  // education: [],
  searched: [] // detailArticle: {},
  // detailsCard: {}

});
const mutations = {
  // SetHomeArticles(state, payload) {
  //     state.HomeArticles = payload
  // },
  // SetMoreHomeArticles(state, payload) {
  //     state.HomeArticles.push(payload)
  // },
  // SetTopArticles(state, payload) {
  //     state.TopArticles = payload
  // },
  // SetMoreTopArticles(state, payload) {
  //     state.TopArticles.push(payload)
  // },
  SetHighRatedArticles(state, payload) {
    state.HighRatedArticles = payload;
  },

  SetMoreHighRatedArticles(state, payload) {
    state.HighRatedArticles.push(payload);
  },

  // SetAuthorArticles(state, payload) {
  //     state.AuthorArticles = payload
  // },
  // SetProgrammingArticles(state, payload) {
  //     state.ProgrammingArticles = payload
  // },
  // SetMoreProgrammingArticles(state, payload) {
  //     state.ProgrammingArticles.push(payload)
  // },
  setMobileBrandLogo(state, payload) {
    state.mobileBrandLogo = payload;
  },

  setSelectedMobileBrandArticle(state, payload) {
    state.SelectedMobileBrandArticle = payload;
  },

  // setCelebrity(state, payload) {
  //     state.celebrity = payload
  // },
  // setLoadMoreCelebrityArticle(state, payload) {
  //     state.celebrity.push(payload)
  // },
  // setIslam(state, payload) {
  //     state.islam = payload
  // },
  // setLoadMoreIslamArticle(state, payload) {
  //     state.islam.push(payload)
  // },
  // setHistory(state, payload) {
  //     state.history = payload
  // },
  // setLoadMoreHistoryArticle(state, payload) {
  //     state.history.push(payload)
  // },
  // setHealth(state, payload) {
  //     state.health = payload
  // },
  // setLoadMoreHealthArticle(state, payload) {
  //     state.health.push(payload)
  // },
  // setTechnology(state, payload) {
  //     state.technology = payload
  // },
  // setLoadMoreTechnologyArticle(state, payload) {
  //     state.technology.push(payload)
  // },
  // setEducation(state, payload) {
  //     state.education = payload
  // },
  // setLoadMoreEducationArticle(state, payload) {
  //     state.education.push(payload)
  // },
  setMobileTop(state, payload) {
    state.mobileTop = payload;
  },

  setMobileBottom(state, payload) {
    state.mobileBottom = payload;
  },

  // setDetailArticle(state, payload) {
  //     state.detailArticle = payload
  // },
  addToCart(state, payload) {
    state.cart.push(payload);
  },

  removeItem(state, payload) {
    state.cart.splice(payload, 1);
  },

  searchedInventory(state, payload) {
    state.searched = payload;
  },

  reset(state) {
    state.cart = [];
  },

  setDetailCard(state, payload) {
    state.detailCard = payload;
  },

  SET_DetailsCard(state, payload) {
    state.detailsCard = payload;
  },

  SET_loadingData(state, payload) {
    state.loadingData = payload;
  }

};
const actions = {
  // FetchHomeArticles({ commit }) {
  //     return ApiService.GetHomeArticles().then(response => {
  //         commit('SetHomeArticles', response.data.results)
  //     })
  // },
  // FetchMoreHomeArticles(context, payload) {
  //     context.commit('SetMoreHomeArticles', payload)
  // },
  // FetchTopArticles({ commit }) {
  //     return ApiService.GetTopArticles().then(response => {
  //         commit('SetTopArticles', response.data.results)
  //     })
  // },
  // FetchMoreTopArticles(context, payload) {
  //     context.commit('SetMoreTopArticles', payload)
  // },
  FetchHighRatedArticles({
    commit
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetHighRatedArticles().then(response => {
      commit('SetHighRatedArticles', response.data.results);
    });
  },

  FetchMoreHighRatedArticles(context, payload) {
    context.commit('SetMoreHighRatedArticles', payload);
  },

  // FetchAuthorArticles({ commit }, authorName) {
  //     return ApiService.GetAuthorArticles(authorName).then(response => {
  //         commit('SetAuthorArticles', response.data)
  //     })
  // },
  // FetchProgrammingArticles({ commit }) {
  //     return ApiService.GetProgrammingArticles().then(response => {
  //         commit('SetProgrammingArticles', response.data.results)
  //     })
  // },
  // FetchMoreProgrammingArticles(context, payload) {
  //     context.commit('SetMoreProgrammingArticles', payload)
  // },
  // fetchDetailsCard({ commit }, slug) {
  //     return ApiService.getdetailsCard(slug).then(response => {
  //         commit('SET_DetailsCard', response.data),
  //             commit('SET_loadingData', false)
  //     })
  // },
  // setHomeArticle(context, payload) {
  //     context.commit('setHomeArticle', payload)
  // },
  // setTopContent(context, payload) {
  //     context.commit('setTopContent', payload)
  // },
  // setLoadMoreTopContent(context, payload) {
  //     context.commit('setLoadMoreTopContent', payload)
  // },
  // setProgramming(context, payload) {
  //     context.commit('setProgramming', payload)
  // },
  // setLoadMoreProgrammingArticle(context, payload) {
  //     context.commit('setLoadMoreProgrammingArticle', payload)
  // },
  setMobileBrandLogo(context, payload) {
    context.commit('setMobileBrandLogo', payload);
  },

  setSelectedMobileBrandArticle(context, payload) {
    context.commit('setSelectedMobileBrandArticle', payload);
  },

  // setCelebrity(context, payload) {
  //     context.commit('setCelebrity', payload)
  // },
  // setLoadMoreCelebrityArticle(context, payload) {
  //     context.commit('setLoadMoreCelebrityArticle', payload)
  // },
  // setIslam(context, payload) {
  //     context.commit('setIslam', payload)
  // },
  // setLoadMoreIslamArticle(context, payload) {
  //     context.commit('setLoadMoreIslamArticle', payload)
  // },
  // setHistory(context, payload) {
  //     context.commit('setHistory', payload)
  // },
  // setLoadMoreHistoryArticle(context, payload) {
  //     context.commit('setLoadMoreHistoryArticle', payload)
  // },
  // setHealth(context, payload) {
  //     context.commit('setHealth', payload)
  // },
  // setLoadMoreHealthArticle(context, payload) {
  //     context.commit('setLoadMoreHealthArticle', payload)
  // },
  // setTechnology(context, payload) {
  //     context.commit('setTechnology', payload)
  // },
  // setLoadMoreTechnologyArticle(context, payload) {
  //     context.commit('setLoadMoreTechnologyArticle', payload)
  // },
  // setEducation(context, payload) {
  //     context.commit('setEducation', payload)
  // },
  // setLoadMoreEducationArticle(context, payload) {
  //     context.commit('setLoadMoreEducationArticle', payload)
  // },
  addToCart(context, payload) {
    context.commit('addToCart', payload);
  },

  setMobileTop(context, payload) {
    context.commit('setMobileTop', payload);
  },

  setMobileBottom(context, payload) {
    context.commit('setMobileBottom', payload);
  },

  // setTechnology(context, payload) {
  //     context.commit('setTechnology', payload)
  // },
  // setDetailArticle(context, payload) {
  //     context.commit('setDetailArticle', payload)
  // },
  // setAuthorAllArticle(context, payload) {
  //     context.commit('setAuthorAllArticle', payload)
  // },
  // setAuthorAllArticle(context, payload) {
  //     context.commit('setAuthorAllArticle', payload)
  // },
  searchedInventory(context, payload) {
    context.commit('searchedInventory', payload);
  },

  removeItem(context, payload) {
    context.commit('removeItem', payload);
  }

};
const getters = {// getHomeArticle(state) {
  //     return state.homeArticle
  // },
  // getTopContent(state) {
  //     return state.topContent
  // },
  // getProgramming(state) {
  //     return state.programming
  // },
  // getMobileBrandLogo(state) {
  //     return state.mobileBrandLogo
  // },
  // getSelectedMobileBrandArticle(state) {
  //     return state.SelectedMobileBrandArticle
  // },
  // getMobileTop(state) {
  //     return state.mobileTop
  // },
  // getMobileBottom(state) {
  //     return state.mobileBottom
  // },
  // getCelebrity(state) {
  //     return state.celebrity
  // },
  // getIslam(state) {
  //     return state.islam
  // },
  // getHistory(state) {
  //     return state.history
  // },
  // getHealth(state) {
  //     return state.health
  // },
  // getTechnology(state) {
  //     return state.technology
  // },
  // getEducation(state) {
  //     return state.education
  // },
  // getSearched(state) {
  //     return state.searched
  // },
  // getdetailArticle(state) {
  //     return state.detailArticle
  // },
  // getAuthorAllArticle(state) {
  //     return state.authorAllArticle
  // }
};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  CelebrityArticles: [],
  TagArticlesNextLink: []
});
const mutations = {
  SET_CELEBRITY_ARTICLES(state, payload) {
    state.CelebrityArticles = payload;
  },

  SET_MORE_CELEBRITY_ARTICLES(state, payload) {
    state.CelebrityArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  },

  SET_TAG_NEXT_DATA_LINK(state, payload) {
    state.TagArticlesNextLink = payload;
  },

  SET_MORE_TAG_ARTICLES(state, payload) {
    state.CelebrityArticles.push(payload);
  }

};
const actions = {
  FetchCelebrityArticles({
    commit
  }, posts) {
    commit('SET_CELEBRITY_ARTICLES', posts);
  },

  FetchMoreCelebrityArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreCelebrityArticles(rootState.celebrity.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_CELEBRITY_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  SetTagNextDataLink({
    commit
  }, posts) {
    commit('SET_TAG_NEXT_DATA_LINK', posts);
  },

  SetMoreTagArticles({
    commit
  }, posts) {
    commit('SET_MORE_TAG_ARTICLES', posts);
  }

};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const actions = {
  setViewcount(slug) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SetView(slug).then(response => {
      console.log(response);
    });
  }

};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  DesignLibraryArticles: [],
  TagArticlesNextLink: []
});
const mutations = {
  SET_DESIGNLIBRARY_ARTICLES(state, payload) {
    state.DesignLibraryArticles = payload;
  },

  SET_MORE_DESIGNLIBRARY_ARTICLES(state, payload) {
    state.DesignLibraryArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  },

  SET_TAG_NEXT_DATA_LINK(state, payload) {
    state.TagArticlesNextLink = payload;
  },

  SET_MORE_TAG_ARTICLES(state, payload) {
    state.DesignLibraryArticles.push(payload);
  }

};
const actions = {
  FetchDesignLibraryArticles({
    commit
  }, posts) {
    commit('SET_DESIGNLIBRARY_ARTICLES', posts);
  },

  FetchMoreDesignLibraryArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreDesignLibraryArticles(rootState.designlibrary.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_DESIGNLIBRARY_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  SetTagNextDataLink({
    commit
  }, posts) {
    commit('SET_TAG_NEXT_DATA_LINK', posts);
  },

  SetMoreTagArticles({
    commit
  }, posts) {
    commit('SET_MORE_TAG_ARTICLES', posts);
  }

};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  DetailArticle: {},
  PageNumber: 2,
  PageNumberRecommended: 2,
  PageNumberHighRated: 2,
  RelatedArticles: [],
  RecommendedArticles: [],
  HighRatedArticles: []
});
const mutations = {
  SET_RELATED_ARTICLES(state, payload) {
    state.RelatedArticles = payload;
  },

  SET_RECOMMENDED_ARTICLES(state, payload) {
    state.RecommendedArticles = payload;
  },

  SET_HIGH_RATED_ARTICLES(state, payload) {
    state.HighRatedArticles = payload;
  },

  SET_MORE_RECOMMENDED_ARTICLES(state, payload) {
    state.RecommendedArticles.push(payload);
  },

  SET_MORE_HIGH_RATED_ARTICLES(state, payload) {
    state.HighRatedArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER_RECOMMENDED(state) {
    state.PageNumberTop++;
  },

  INCREASE_PAGE_NUMBER_HIGH_RATED(state) {
    state.PageNumberHighRated++;
  },

  SET_DETAIL_ARTICLE(state, payload) {
    state.DetailArticle = payload;
  }

};
const actions = {
  // FetchDetailArticle({ commit }, slug) {
  //     return ApiService.GetDetailArticle(slug).then(response => {
  //         commit('SET_DETAIL_ARTICLE', response.data)
  //     })
  // },
  FetchRelatedArticles({
    commit
  }, posts) {
    commit('SET_RELATED_ARTICLES', posts);
  },

  FetchRecommendedArticles({
    commit
  }, posts) {
    commit('SET_RECOMMENDED_ARTICLES', posts);
  },

  FetchHighRatedArticles({
    commit
  }, posts) {
    commit('SET_HIGH_RATED_ARTICLES', posts);
  },

  FetchMoreRecommendedArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreRecommendedArticles(rootState.detailPage.PageNumberRecommended).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_RECOMMENDED_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER_RECOMMENDED');
    });
  },

  FetchMoreHighRatedArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreHighRatedArticles(rootState.detailPage.PageNumberHighRated).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_HIGH_RATED_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER_HIGH_RATED');
    });
  },

  FetchDetailArticle({
    commit
  }, posts) {
    commit('SET_DETAIL_ARTICLE', posts);
  }

};

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  GamingArticles: [],
  TagArticlesNextLink: []
});
const mutations = {
  SET_GAMING_ARTICLES(state, payload) {
    state.GamingArticles = payload;
  },

  SET_MORE_GAMING_ARTICLES(state, payload) {
    state.GamingArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  },

  SET_TAG_NEXT_DATA_LINK(state, payload) {
    state.TagArticlesNextLink = payload;
  },

  SET_MORE_TAG_ARTICLES(state, payload) {
    state.GamingArticles.push(payload);
  }

};
const actions = {
  FetchGamingArticles({
    commit
  }, posts) {
    commit('SET_GAMING_ARTICLES', posts);
  },

  FetchMoreGamingArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreGamingArticles(rootState.gaming.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_GAMING_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  SetTagNextDataLink({
    commit
  }, posts) {
    commit('SET_TAG_NEXT_DATA_LINK', posts);
  },

  SetMoreTagArticles({
    commit
  }, posts) {
    commit('SET_MORE_TAG_ARTICLES', posts);
  }

};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  HealthArticles: [],
  TagArticlesNextLink: []
});
const mutations = {
  SET_HEALTH_ARTICLES(state, payload) {
    state.HealthArticles = payload;
  },

  SET_MORE_HEALTH_ARTICLES(state, payload) {
    state.HealthArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  },

  SET_TAG_NEXT_DATA_LINK(state, payload) {
    state.TagArticlesNextLink = payload;
  },

  SET_MORE_TAG_ARTICLES(state, payload) {
    state.HealthArticles.push(payload);
  }

};
const actions = {
  FetchHealthArticles({
    commit
  }, posts) {
    commit('SET_HEALTH_ARTICLES', posts);
  },

  FetchMoreHealthArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreHealthArticles(rootState.health.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_HEALTH_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  SetTagNextDataLink({
    commit
  }, posts) {
    commit('SET_TAG_NEXT_DATA_LINK', posts);
  },

  SetMoreTagArticles({
    commit
  }, posts) {
    commit('SET_MORE_TAG_ARTICLES', posts);
  }

};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  HighRatedArticles: []
});
const mutations = {
  SET_HIGH_RATED_ARTICLES(state, payload) {
    state.HighRatedArticles = payload;
  },

  SET_MORE_HIGH_RATED_ARTICLES(state, payload) {
    state.HighRatedArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  }

};
const actions = {
  FetchHighRatedArticles({
    commit
  }, posts) {
    commit('SET_HIGH_RATED_ARTICLES', posts);
  },

  FetchMoreHighRatedArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreHighRatedArticles(rootState.highRated.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_HIGH_RATED_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  }

};

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  HistoryArticles: [],
  TagArticlesNextLink: []
});
const mutations = {
  SET_HISTORY_ARTICLES(state, payload) {
    state.HistoryArticles = payload;
  },

  SET_MORE_HISTORY_ARTICLES(state, payload) {
    state.HistoryArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  },

  SET_TAG_NEXT_DATA_LINK(state, payload) {
    state.TagArticlesNextLink = payload;
  },

  SET_MORE_TAG_ARTICLES(state, payload) {
    state.HistoryArticles.push(payload);
  }

};
const actions = {
  FetchHistoryArticles({
    commit
  }, posts) {
    commit('SET_HISTORY_ARTICLES', posts);
  },

  FetchMoreHistoryArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreHistoryArticles(rootState.history.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_HISTORY_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  SetTagNextDataLink({
    commit
  }, posts) {
    commit('SET_TAG_NEXT_DATA_LINK', posts);
  },

  SetMoreTagArticles({
    commit
  }, posts) {
    commit('SET_MORE_TAG_ARTICLES', posts);
  }

};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  HomeArticles: [],
  LatestArticles: []
});
const mutations = {
  SET_HOME_ARTICLES(state, payload) {
    state.HomeArticles = payload;
  },

  SET_MORE_HOME_ARTICLES(state, payload) {
    state.HomeArticles.push(payload);
  },

  SET_LATEST_ARTICLES(state, payload) {
    state.LatestArticles = payload;
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  }

};
const actions = {
  FetchHomeArticles({
    commit
  }, posts) {
    commit('SET_HOME_ARTICLES', posts);
  },

  FetchMoreHomeArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreHomeArticles(rootState.home.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_HOME_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  FetchLatestArticles({
    commit
  }, posts) {
    commit('SET_LATEST_ARTICLES', posts);
  },

  More({
    commit
  }, posts) {
    commit('SET_MORE_HOME_ARTICLES', posts);
  }

};

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  MobileArticles: [],
  TagArticlesNextLink: []
});
const mutations = {
  SET_MOBILE_ARTICLES(state, payload) {
    state.MobileArticles = payload;
  },

  SET_MORE_MOBILE_ARTICLES(state, payload) {
    state.MobileArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  },

  SET_TAG_NEXT_DATA_LINK(state, payload) {
    state.TagArticlesNextLink = payload;
  },

  SET_MORE_TAG_ARTICLES(state, payload) {
    state.MobileArticles.push(payload);
  }

};
const actions = {
  FetchMobileArticles({
    commit
  }, posts) {
    commit('SET_MOBILE_ARTICLES', posts);
  },

  FetchMoreMobileArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreMobileArticles(rootState.mobile.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_MOBILE_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  SetTagNextDataLink({
    commit
  }, posts) {
    commit('SET_TAG_NEXT_DATA_LINK', posts);
  },

  SetMoreTagArticles({
    commit
  }, posts) {
    commit('SET_MORE_TAG_ARTICLES', posts);
  }

};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  DetailArticle: {},
  PageNumber: 2,
  PageNumberRecommended: 2,
  PageNumberHighRated: 2,
  RelatedArticles: [],
  RecommendedArticles: [],
  HighRatedArticles: []
});
const mutations = {
  SET_RELATED_ARTICLES(state, payload) {
    state.RelatedArticles = payload;
  },

  SET_RECOMMENDED_ARTICLES(state, payload) {
    state.RecommendedArticles = payload;
  },

  SET_HIGH_RATED_ARTICLES(state, payload) {
    state.HighRatedArticles = payload;
  },

  SET_MORE_RECOMMENDED_ARTICLES(state, payload) {
    state.RecommendedArticles.push(payload);
  },

  SET_MORE_HIGH_RATED_ARTICLES(state, payload) {
    state.HighRatedArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER_RECOMMENDED(state) {
    state.PageNumberTop++;
  },

  INCREASE_PAGE_NUMBER_HIGH_RATED(state) {
    state.PageNumberHighRated++;
  },

  SET_DETAIL_ARTICLE(state, payload) {
    state.DetailArticle = payload;
  }

};
const actions = {
  // FetchDetailArticle({ commit }, slug) {
  //     return ApiService.GetDetailArticle(slug).then(response => {
  //         commit('SET_DETAIL_ARTICLE', response.data)
  //     })
  // },
  FetchRelatedArticles({
    commit
  }, posts) {
    commit('SET_RELATED_ARTICLES', posts);
  },

  FetchRecommendedArticles({
    commit
  }, posts) {
    commit('SET_RECOMMENDED_ARTICLES', posts);
  },

  FetchHighRatedArticles({
    commit
  }, posts) {
    commit('SET_HIGH_RATED_ARTICLES', posts);
  },

  FetchMoreRecommendedArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreRecommendedArticles(rootState.mobileDetailPage.PageNumberRecommended).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_RECOMMENDED_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER_RECOMMENDED');
    });
  },

  FetchMoreHighRatedArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreHighRatedArticles(rootState.mobileDetailPage.PageNumberHighRated).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_HIGH_RATED_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER_HIGH_RATED');
    });
  },

  FetchDetailArticle({
    commit
  }, posts) {
    commit('SET_DETAIL_ARTICLE', posts);
  }

};

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  ProgrammingArticles: [],
  TagArticlesNextLink: []
});
const mutations = {
  SET_PROGRAMMING_ARTICLES(state, payload) {
    state.ProgrammingArticles = payload;
  },

  SET_MORE_PROGRAMMING_ARTICLES(state, payload) {
    state.ProgrammingArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  },

  SET_TAG_NEXT_DATA_LINK(state, payload) {
    state.TagArticlesNextLink = payload;
  },

  SET_MORE_TAG_ARTICLES(state, payload) {
    state.ProgrammingArticles.push(payload);
  }

};
const actions = {
  FetchProgrammingArticles({
    commit
  }, posts) {
    commit('SET_PROGRAMMING_ARTICLES', posts);
  },

  FetchMoreProgrammingArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreProgrammingArticles(rootState.programming.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_PROGRAMMING_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  SetTagNextDataLink({
    commit
  }, posts) {
    commit('SET_TAG_NEXT_DATA_LINK', posts);
  },

  SetMoreTagArticles({
    commit
  }, posts) {
    commit('SET_MORE_TAG_ARTICLES', posts);
  }

};

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  TechnologyArticles: [],
  TagArticlesNextLink: []
});
const mutations = {
  SET_TECHNOLOGY_ARTICLES(state, payload) {
    state.TechnologyArticles = payload;
  },

  SET_MORE_TECHNOLOGY_ARTICLES(state, payload) {
    state.TechnologyArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  },

  SET_TAG_NEXT_DATA_LINK(state, payload) {
    state.TagArticlesNextLink = payload;
  },

  SET_MORE_TAG_ARTICLES(state, payload) {
    state.TechnologyArticles.push(payload);
  }

};
const actions = {
  FetchTechnologyArticles({
    commit
  }, posts) {
    commit('SET_TECHNOLOGY_ARTICLES', posts);
  },

  FetchMoreTechnologyArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreTechnologyArticles(rootState.technology.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_TECHNOLOGY_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  },

  SetTagNextDataLink({
    commit
  }, posts) {
    commit('SET_TAG_NEXT_DATA_LINK', posts);
  },

  SetMoreTagArticles({
    commit
  }, posts) {
    commit('SET_MORE_TAG_ARTICLES', posts);
  }

};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const namespaced = true;
const state = () => ({
  PageNumber: 2,
  TopArticles: []
});
const mutations = {
  SET_TOP_ARTICLES(state, payload) {
    state.TopArticles = payload;
  },

  SET_MORE_TOP_ARTICLES(state, payload) {
    state.TopArticles.push(payload);
  },

  INCREASE_PAGE_NUMBER(state) {
    state.PageNumber++;
  }

};
const actions = {
  FetchTopArticles({
    commit
  }, posts) {
    commit('SET_TOP_ARTICLES', posts);
  },

  FetchMoreTopArticles({
    commit,
    rootState
  }) {
    return _services_ApiService_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GetMoreTopArticles(rootState.top.PageNumber).then(response => {
      response.data.results.forEach(element => {
        commit('SET_MORE_TOP_ARTICLES', element);
      });
      commit('INCREASE_PAGE_NUMBER');
    });
  }

};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_580a52b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_580a52b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_580a52b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_580a52b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_580a52b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_580a52b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (max-width:767px){.dekstop-nav[data-v-580a52b4]{display:none!important}.custom-navbar[data-v-580a52b4]{margin-bottom:46px!important}}.mobile-nav[data-v-580a52b4]{height:44px;background-color:#242729!important;padding-right:0!important}.custom-navbar[data-v-580a52b4]{margin-bottom:55px}.right-menu a[data-v-580a52b4]{color:#000!important;text-decoration:none}.right-menu p[data-v-580a52b4]{cursor:pointer}.right-menu[data-v-580a52b4]{z-index:9;position:fixed;top:55px;background-color:#fff!important;padding:10px;box-shadow:0 5px .9rem -.8rem rgba(0,0,0,.8),0 0 0 1px rgba(0,0,0,.05);border-radius:5px}.logo[data-v-580a52b4]{height:64px;width:110px;border-radius:4px;margin-left:-10px}.mobile-logo[data-v-580a52b4]{height:50px;width:90px;border-radius:4px}.dekstop-nav[data-v-580a52b4]{height:50px;background-color:#242729!important;padding-right:0!important}.item[data-v-580a52b4],a[data-v-580a52b4]{color:#fff!important;font-size:17px}@media (min-width:768px){.brand-logo-sm-device[data-v-580a52b4],.mobile-nav[data-v-580a52b4],.search-logo-sm-device[data-v-580a52b4]{display:none!important}}@media (min-width:0px) and (max-width:767px){.navbar[data-v-580a52b4]{padding:0!important}.dekstop-nav[data-v-580a52b4]{height:55px}.Side-bar-item[data-v-580a52b4],a[data-v-580a52b4]{color:#000!important;font-size:17px}button[data-v-580a52b4]:focus{outline:none!important}}a[data-v-580a52b4]{border:none!important;outline:none!important;outline-style:none!important}.form-control[data-v-580a52b4]{border-color:#3b4045;background-color:#3b4045;box-shadow:none}.icon-button[data-v-580a52b4]{height:34px}.icon-button[data-v-580a52b4],.icon-button-two[data-v-580a52b4]{border-color:#3b4045;background-color:#3b4045;box-shadow:none;margin-left:-6px}.form-control[data-v-580a52b4]::-moz-placeholder{color:#e4e6e8!important;opacity:1}.form-control[data-v-580a52b4]:-ms-input-placeholder{color:#e4e6e8!important;opacity:1}.form-control[data-v-580a52b4]::placeholder{color:#e4e6e8!important;opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_8034ace6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_8034ace6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_8034ace6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_8034ace6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_8034ace6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_8034ace6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".myCarousel[data-v-8034ace6]{margin-bottom:10px}.c-txt-link[data-v-8034ace6]{text-decoration:none;color:#fff}.c-txt[data-v-8034ace6]{font-family:\"Cambay\";font-weight:500;font-size:22px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/all.4598a5d.svg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/top.083e7fe.svg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/high-rated.becf7c2.svg";

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_677f05fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_677f05fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_677f05fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_677f05fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_677f05fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_677f05fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".b-button[data-v-677f05fc]{margin-bottom:5px;border-radius:15px;font-size:14px;height:30px;text-align:center!important;font-weight:400;line-height:1.4;letter-spacing:-.5px}.b-button.focus[data-v-677f05fc],.b-button[data-v-677f05fc]:focus{border-color:none}.breadcrumb[data-v-677f05fc]{background:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/programming.0f0e193.svg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mobile.f6239a2.svg";

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_6a8abdc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_6a8abdc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_6a8abdc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_6a8abdc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_6a8abdc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_6a8abdc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mylist[data-v-6a8abdc3]:hover{color:#212529!important;background-color:#e2e6ea!important;border-radius:8px}.chanel[data-v-6a8abdc3]{height:40px;line-height:40px;font-size:20px;background-color:#343a40;color:#fff;border-radius:7px}.sideBar[data-v-6a8abdc3]{overflow:hidden;background:#fff;margin-bottom:5px}.sideBar.list[data-v-6a8abdc3]{overflow:auto}.mylist[data-v-6a8abdc3]{border:none!important;font-size:16px!important;padding:0!important;margin-top:7px;margin-bottom:8px}.image-holder[data-v-6a8abdc3]{border-radius:10px;text-align:center;padding:8px;background-color:#e4e6eb}.item-holder[data-v-6a8abdc3]{margin-left:20px;margin-top:10px}.image-logo[data-v-6a8abdc3]{height:30px;width:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclChannelCommonCard_vue_vue_type_style_index_0_id_e826a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclChannelCommonCard_vue_vue_type_style_index_0_id_e826a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclChannelCommonCard_vue_vue_type_style_index_0_id_e826a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclChannelCommonCard_vue_vue_type_style_index_0_id_e826a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclChannelCommonCard_vue_vue_type_style_index_0_id_e826a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclChannelCommonCard_vue_vue_type_style_index_0_id_e826a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-vcl-channel-common-card[data-v-e826a6b4]{border-radius:5px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCommonCard_vue_vue_type_style_index_0_id_91e0166e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCommonCard_vue_vue_type_style_index_0_id_91e0166e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCommonCard_vue_vue_type_style_index_0_id_91e0166e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCommonCard_vue_vue_type_style_index_0_id_91e0166e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCommonCard_vue_vue_type_style_index_0_id_91e0166e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCommonCard_vue_vue_type_style_index_0_id_91e0166e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-channel-common-card[data-v-91e0166e]{border:none!important;cursor:pointer;background-color:#fff;margin-bottom:30px}.custom-card-text-date[data-v-91e0166e]{margin-top:10px;font-weight:400;font-size:15px;text-transform:uppercase;margin-bottom:0!important}.custom-card-text-title[data-v-91e0166e]{margin-top:0!important;color:#1b1e21;font-size:18px;line-height:1.4;letter-spacing:-.5px}a[data-v-91e0166e]{color:#000;text-decoration:none}.toast-warper[data-v-91e0166e]{position:absolute;right:2px;bottom:23px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckSmallCard_vue_vue_type_style_index_0_id_00f46abb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckSmallCard_vue_vue_type_style_index_0_id_00f46abb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckSmallCard_vue_vue_type_style_index_0_id_00f46abb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckSmallCard_vue_vue_type_style_index_0_id_00f46abb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckSmallCard_vue_vue_type_style_index_0_id_00f46abb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckSmallCard_vue_vue_type_style_index_0_id_00f46abb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-channel-common-card[data-v-00f46abb]{border:none!important;cursor:pointer;background-color:#fff;margin-bottom:30px}.custom-card-text-date[data-v-00f46abb]{margin-top:10px;font-weight:400;font-size:15px;text-transform:uppercase;margin-bottom:0!important}.custom-card-text-title[data-v-00f46abb]{margin-top:0!important;color:#1b1e21;font-size:18px;line-height:1.4;letter-spacing:-.5px}a[data-v-00f46abb]{color:#000;text-decoration:none}.toast-warper[data-v-00f46abb]{position:absolute;right:2px;bottom:23px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCards_vue_vue_type_style_index_0_id_2f678dec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCards_vue_vue_type_style_index_0_id_2f678dec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCards_vue_vue_type_style_index_0_id_2f678dec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCards_vue_vue_type_style_index_0_id_2f678dec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCards_vue_vue_type_style_index_0_id_2f678dec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCards_vue_vue_type_style_index_0_id_2f678dec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-channel-common-card[data-v-2f678dec]{border:none!important;cursor:pointer;background-color:#fff;margin-bottom:30px}.custom-card-text-date[data-v-2f678dec]{margin-top:10px;font-weight:400;font-size:15px;text-transform:uppercase;margin-bottom:0!important}.custom-card-text-title[data-v-2f678dec]{margin-top:0!important;color:#1b1e21;font-weight:400;font-size:18px;line-height:1.4;letter-spacing:-.5px}a[data-v-2f678dec]{color:#000;text-decoration:none}.toast-warper[data-v-2f678dec]{position:absolute;right:2px;bottom:23px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCard_vue_vue_type_style_index_0_id_2823aa9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCard_vue_vue_type_style_index_0_id_2823aa9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCard_vue_vue_type_style_index_0_id_2823aa9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCard_vue_vue_type_style_index_0_id_2823aa9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCard_vue_vue_type_style_index_0_id_2823aa9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCard_vue_vue_type_style_index_0_id_2823aa9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toast-warper[data-v-2823aa9f]{position:absolute;right:2px;top:51px}.custom-home-card[data-v-2823aa9f]{cursor:pointer}.img-logo[data-v-2823aa9f]{width:70px!important;height:70px!important}a[data-v-2823aa9f]{color:#000!important;text-decoration:none!important}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclHomeCard_vue_vue_type_style_index_0_id_44aef701_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclHomeCard_vue_vue_type_style_index_0_id_44aef701_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclHomeCard_vue_vue_type_style_index_0_id_44aef701_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclHomeCard_vue_vue_type_style_index_0_id_44aef701_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclHomeCard_vue_vue_type_style_index_0_id_44aef701_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclHomeCard_vue_vue_type_style_index_0_id_44aef701_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-vcl-home-card[data-v-44aef701]{margin-top:10px;border-radius:5px;margin-bottom:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorSmallCard_vue_vue_type_style_index_0_id_3b113e0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorSmallCard_vue_vue_type_style_index_0_id_3b113e0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorSmallCard_vue_vue_type_style_index_0_id_3b113e0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorSmallCard_vue_vue_type_style_index_0_id_3b113e0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorSmallCard_vue_vue_type_style_index_0_id_3b113e0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorSmallCard_vue_vue_type_style_index_0_id_3b113e0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-author-small-card[data-v-3b113e0b]{border:none!important;cursor:pointer;background-color:#fff;margin-bottom:30px}.custom-card-text-date[data-v-3b113e0b]{margin-top:10px;font-weight:400;font-size:15px;text-transform:uppercase;margin-bottom:0!important}.custom-card-text-title[data-v-3b113e0b]{margin-top:0!important;color:#1b1e21;font-size:18px;line-height:1.4;letter-spacing:-.5px}a[data-v-3b113e0b]{color:#000;text-decoration:none}.toast-warper[data-v-3b113e0b]{position:absolute;right:2px;bottom:23px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorVclCard_vue_vue_type_style_index_0_id_15d9ae91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorVclCard_vue_vue_type_style_index_0_id_15d9ae91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorVclCard_vue_vue_type_style_index_0_id_15d9ae91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorVclCard_vue_vue_type_style_index_0_id_15d9ae91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorVclCard_vue_vue_type_style_index_0_id_15d9ae91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorVclCard_vue_vue_type_style_index_0_id_15d9ae91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-author-vcl-card[data-v-15d9ae91]{border-radius:5px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclDetailCard_vue_vue_type_style_index_0_id_20cb6f3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclDetailCard_vue_vue_type_style_index_0_id_20cb6f3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclDetailCard_vue_vue_type_style_index_0_id_20cb6f3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclDetailCard_vue_vue_type_style_index_0_id_20cb6f3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclDetailCard_vue_vue_type_style_index_0_id_20cb6f3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclDetailCard_vue_vue_type_style_index_0_id_20cb6f3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vcl-detail-page[data-v-20cb6f3c]{margin-bottom:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomFooter_vue_vue_type_style_index_0_id_078c18f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomFooter_vue_vue_type_style_index_0_id_078c18f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomFooter_vue_vue_type_style_index_0_id_078c18f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomFooter_vue_vue_type_style_index_0_id_078c18f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomFooter_vue_vue_type_style_index_0_id_078c18f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomFooter_vue_vue_type_style_index_0_id_078c18f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".line[data-v-078c18f2]{border-left:2px solid #fff;height:20px;margin-top:4px}.last-section[data-v-078c18f2],h5[data-v-078c18f2]{color:#4a4a4a!important;font-size:16px;height:36px;min-width:64px;margin-right:15px;cursor:pointer}.social-icons[data-v-078c18f2]{height:20px;width:21px;margin-right:25px;cursor:pointer}.logo[data-v-078c18f2]{height:50px;width:110px;border-radius:4px;margin-left:-7px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclRelatedCard_vue_vue_type_style_index_0_id_31bec273_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclRelatedCard_vue_vue_type_style_index_0_id_31bec273_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclRelatedCard_vue_vue_type_style_index_0_id_31bec273_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclRelatedCard_vue_vue_type_style_index_0_id_31bec273_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclRelatedCard_vue_vue_type_style_index_0_id_31bec273_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VclRelatedCard_vue_vue_type_style_index_0_id_31bec273_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".list[data-v-31bec273]{border:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCover_vue_vue_type_style_index_0_id_39f8b8b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCover_vue_vue_type_style_index_0_id_39f8b8b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCover_vue_vue_type_style_index_0_id_39f8b8b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCover_vue_vue_type_style_index_0_id_39f8b8b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCover_vue_vue_type_style_index_0_id_39f8b8b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelCover_vue_vue_type_style_index_0_id_39f8b8b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".channel-cover-title[data-v-39f8b8b5]{text-align:center!important}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/a.ef50120.png";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("788ed8ed", content, true)

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(112);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(113);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(114);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(115);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(116);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:local(\"Material Icons\"),local(\"MaterialIcons-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}.material-icons{font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.96c4768.eot";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.0509ab0.woff2";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.29b882f.woff";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.d120c85.ttf";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("e8e18342", content, true)

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n  * Vuesax v4.0.1-alpha.23 🖖 (https://lusaxweb.github.io/vuesax/)\n  * Forged by Luis Daniel Rovira\n  * Released under the MIT License.\n  * Donate: https://www.patreon.com/bePatron?c=1567892\n  * © 2019, Lusaxweb. (https://lusaxweb.net)\n  */.vs-button{--vs-color:var(--vs-primary);--vs-color-rotate:var(--vs-primary);--vs-color-darken:var(--vs-primary);--vs-button-padding:8px 12px;--vs-button-margin:5px;--vs-button-border-radius:12px;--vs-button-text-color:#fff;border:0;margin:var(--vs-button-margin);border-radius:var(--vs-button-border-radius);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0;outline:none;font-size:.8rem;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}.vs-button--fff:focus{color:#1e1e1e!important}.vs-button__content{padding:var(--vs-button-padding);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--active-disabled{pointer-events:none;opacity:.6}.vs-button:disabled{pointer-events:none;opacity:.35}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content i{font-size:1.15rem}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__content{-webkit-transform:translate(-100%);transform:translate(-100%)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__animate{-webkit-transform:translate(0);transform:translate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__content{-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__animate{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__content{-webkit-transform:scale(1.4)!important;transform:scale(1.4)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__animate{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__content{-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__animate{opacity:1;-webkit-transform:rotate(0);transform:rotate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content{-webkit-transition:-webkit-transform .25s ease;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease}.vs-button__animate{position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;-webkit-transition:-webkit-transform .25s ease;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease;-webkit-transform:translate(100%);transform:translate(100%);pointer-events:none}.vs-button__animate--vertical{-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-button__animate--scale{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.vs-button__animate--rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);opacity:0}.vs-button--block{width:100%;display:block}.vs-button--upload:after{content:\"\";position:absolute;width:100%;height:100%;background:rgba(17,18,20,.4);background:rgba(var(--vs-color),.4);top:0;left:0;z-index:1200;-webkit-animation:btnupload .7s ease infinite;animation:btnupload .7s ease infinite;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-button .vs-button__loading{width:100%;height:100%;position:absolute;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(17,18,20,.8);background:rgba(var(--vs-color),.8);border-radius:inherit}.vs-button .vs-button__loading:after{content:\"\";width:17px;height:17px;border:2px solid hsla(0,0%,100%,0);border-left:2px dotted hsla(0,0%,100%,.6);border-radius:50%;position:absolute;-webkit-animation:btnload .6s linear infinite;animation:btnload .6s linear infinite;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button .vs-button__loading:before{position:absolute;content:\"\";width:17px;height:17px;border:2px solid hsla(0,0%,100%,0);border-left-color:#fff;border-radius:50%;-webkit-animation:btnload .6s ease infinite;animation:btnload .6s ease infinite;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--size-xl{border-radius:20px}.vs-button--size-xl .vs-button__content{padding:15px 20px;font-size:1.1rem}.vs-button--size-large{font-size:1rem;border-radius:15px}.vs-button--size-large .vs-button__content{padding:10px 15px}.vs-button--size-small{font-size:.75rem;border-radius:9px}.vs-button--size-small .vs-button__content{padding:5px 10px}.vs-button--size-mini{font-size:.6rem;border-radius:7px}.vs-button--size-mini .vs-button__content{padding:3px 8px}.vs-button--circle{border-radius:25px}.vs-button--square{border-radius:0}.vs-button--icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--icon .vs-button__content{padding:8px}.vs-button--icon i{font-size:1.15rem}.vs-button--default{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-button--default.vs-button--active{-webkit-box-shadow:0 10px 20px -10px #111214;-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);box-shadow:0 10px 20px -10px #111214;box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--default:hover{-webkit-box-shadow:0 10px 20px -10px #111214;-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);box-shadow:0 10px 20px -10px #111214;box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--flat{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--flat.vs-button--dark{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-button--flat:hover{background:rgba(17,18,20,.25);background:rgba(var(--vs-color),.25)}.vs-button--flat:focus{color:#fff;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease,background .25s ease .25s;transition:all .25s ease,background .25s ease .25s}.vs-button--flat.vs-button--active,.vs-button--floating{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-button--floating{-webkit-box-shadow:0 8px 20px -6px #111214;-webkit-box-shadow:0 8px 20px -6px rgba(var(--vs-color),1);box-shadow:0 8px 20px -6px #111214;box-shadow:0 8px 20px -6px rgba(var(--vs-color),1);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--floating:hover{-webkit-box-shadow:0 8px 20px -6px #111214;-webkit-box-shadow:0 8px 20px -6px rgba(var(--vs-color),1);box-shadow:0 8px 20px -6px #111214;box-shadow:0 8px 20px -6px rgba(var(--vs-color),1);-webkit-transform:translateY(-6px);transform:translateY(-6px)}.vs-button--floating:focus{-webkit-transform:translate(0);transform:translate(0);-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-button--floating.vs-button--active{-webkit-transform:translate(0);transform:translate(0);-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-button--border{background:rgba(17,18,20,0);background:rgba(var(--vs-color),0);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--border:before{content:\"\";border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background:transparent;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--border:hover:before{border:2px solid rgba(17,18,20,.5);border:2px solid rgba(var(--vs-color),.5)}.vs-button--border:focus{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--border.vs-button--active,.vs-button--gradient{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-button--gradient{overflow:hidden}.vs-button--gradient.vs-button--primary:before,.vs-button--gradient.vs-button--success:before{-webkit-filter:hue-rotate(40deg);filter:hue-rotate(40deg)}.vs-button--gradient:before{content:\"\";background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:hue-rotate(-40deg);filter:hue-rotate(-40deg);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--gradient:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(17,18,20,.7);-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7);box-shadow:0 10px 20px -10px rgba(17,18,20,.7);box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7)}.vs-button--gradient:hover:before{opacity:0}.vs-button--gradient.vs-button--active{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(0,0,0,.35);box-shadow:0 10px 20px -10px rgba(0,0,0,.35)}.vs-button--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}.vs-button--relief .vs-button__content{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-button--relief.vs-button--icon.vs-button--active{height:auto}.vs-button--relief:before{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:calc(100% - 3px);border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:contrast(2) grayscale(.4);filter:contrast(2) grayscale(.4);border-bottom:3px solid #111214;border-bottom:3px solid rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--relief:active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief:active .vs-button__content{padding-bottom:6px}.vs-button--relief:active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--relief.vs-button--active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief.vs-button--active .vs-button__content{padding-bottom:6px}.vs-button--relief.vs-button--active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--transparent{background:transparent;color:#111214;color:rgba(var(--vs-color),1);overflow:hidden}.vs-button--transparent:before{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);position:absolute;bottom:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:-1;-webkit-transform:scale(.5);transform:scale(.5);opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--transparent:active:not(.vs-button--active):before{-webkit-transform:scale(.9)!important;transform:scale(.9)!important}.vs-button--transparent:hover:before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2);opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button--shadow{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);overflow:hidden;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-button--shadow:active:not(.vs-button--active){-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-button--shadow:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 8px 25px 0 rgba(0,0,0,.05);box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-button--shadow.vs-button--active{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 8px 25px 0 rgba(0,0,0,.05);box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}@keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}.vs-button-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button-group .vs-button{margin:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type){border-radius:0;border:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border:before{border-left:0;width:100%}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border+.vs-button--border:not(:last-of-type):before{border-right:0;width:100%}.vs-button-group .vs-button:last-of-type{border-radius:0 12px 12px 0}.vs-button-group .vs-button:first-of-type{border-radius:12px 0 0 12px}.vs-alert{--vs-color:var(--vs-primary);background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);color:#111214;color:rgba(var(--vs-color),1);width:100%;padding:0 20px;border-radius:0 12px 12px 0;position:relative;font-size:.9rem;z-index:10;-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert b{font-weight:600}.vs-alert a{color:inherit!important;text-decoration:underline}.vs-alert a:hover{opacity:.6}.vs-alert:after{content:\"\";background:#111214;background:rgba(var(--vs-color),1);left:0;top:0;width:2px;height:100%;position:absolute}.vs-alert--solid{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-alert--solid .vs-alert__icon i{color:#fff}.vs-alert--solid .vs-alert__icon svg{fill:#fff}.vs-alert--solid .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close svg{fill:#fff}.vs-alert--solid:after{background:hsla(0,0%,100%,.4)}.vs-alert--border{background:transparent}.vs-alert--border:before{border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-left:0;width:calc(100% - 2px);content:\"\";position:absolute;height:calc(100% - 2px);top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--shadow{background:transparent;-webkit-box-shadow:0 4px 15px 0 rgba(17,18,20,.12);-webkit-box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12);box-shadow:0 4px 15px 0 rgba(17,18,20,.12);box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12)}.vs-alert--gradient{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px}.vs-alert--gradient .vs-alert__icon i{color:#fff}.vs-alert--gradient .vs-alert__icon svg{fill:#fff}.vs-alert--gradient .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close svg{fill:#fff}.vs-alert--gradient:after{display:none}.vs-alert--gradient:before{background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));-webkit-filter:hue-rotate(-50deg);filter:hue-rotate(-50deg);width:100%;content:\"\";position:absolute;height:100%;top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--flat{background:rgba(0,0,0,.03)}.vs-alert--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px;-webkit-box-shadow:6px 6px 0 0 rgba(17,18,20,.3);-webkit-box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3);box-shadow:6px 6px 0 0 rgba(17,18,20,.3);box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3)}.vs-alert--relief .vs-alert__icon i{color:#fff}.vs-alert--relief .vs-alert__icon svg{fill:#fff}.vs-alert--relief .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);background:rgba(0,0,0,.2);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close svg{fill:#fff}.vs-alert--relief:after{display:none}.vs-alert__title{font-weight:600;font-size:1rem;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vs-alert__title--clickHidden{cursor:pointer;padding-right:0}.vs-alert__title~.vs-alert__content .vs-alert__content__text{padding-top:0}.vs-alert__content{-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert__content__text{padding:20px 15px}.vs-alert__close{position:absolute;top:9px;right:6px;background:transparent;border:0;color:#111214;color:rgba(var(--vs-color),1);width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.3);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.3);box-shadow:0 0 0 0 rgba(17,18,20,.3);box-shadow:0 0 0 0 rgba(var(--vs-color),.3);border-radius:10px;padding:0}.vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 18px 0 rgba(17,18,20,.3);box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3)}.vs-alert__close svg{fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__footer{position:relative;width:100%;padding:0 15px 10px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-alert__footer,.vs-alert__icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-alert__icon{position:absolute;width:50px;height:100%;left:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:2px}.vs-alert__icon i{font-size:1.3rem;color:#111214;color:rgba(var(--vs-color),1)}.vs-alert__icon svg{width:24px;height:24px;fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__icon~.vs-alert__footer{padding-left:35px}.vs-alert__icon~.vs-alert__content{padding-left:20px}.vs-alert__icon~.vs-alert__title{padding-left:35px}.vs-alert__progress{width:100%;position:absolute;bottom:0;left:0;height:2px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-alert__progress__bar{width:30%;left:0;position:relative;height:100%;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination{position:relative;padding:0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:10px}.vs-alert__pagination span{font-size:.8rem;margin:0 8px;min-width:28px;text-align:center}.vs-alert__pagination button{border:0;background:transparent;color:#111214;color:rgba(var(--vs-color),1);padding:0 7px;font-size:1rem;background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);border-radius:8px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination button:hover{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-icon-close{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-icon-close:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:16px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);height:2px;border-radius:2px;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-close:after{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:16px;height:2px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:2px;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-close.vs-icon-hover-less:hover:after{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-close.vs-icon-hover-less:hover:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-plus{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer}.vs-icon-plus:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:14px;-webkit-transform:rotate(0deg);transform:rotate(0deg);height:2px;border-radius:2px;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-plus:after{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:14px;height:2px;-webkit-transform:rotate(90deg);transform:rotate(90deg);border-radius:2px;-webkit-transition:all .4s ease;transition:all .4s ease}.vs-icon-plus:hover:not(.less){-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vs-icon-plus.less:hover{-webkit-transform:scale(.75);transform:scale(.75)}.vs-icon-plus.less:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-check{width:23px;height:23px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-icon-check span{-webkit-transform:rotate(45deg);transform:rotate(45deg);display:block;position:relative;width:8px;height:13px;margin-top:-4px}.vs-icon-check span .line1{background:transparent;content:\"\";position:absolute;height:2px;border-radius:2px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px;z-index:100;width:8px;bottom:0}.vs-icon-check span .line1:after{content:\"\";position:absolute;width:0;height:2px;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px 0 0 5px}.vs-icon-check span .line2{bottom:0;right:0;z-index:100;background:transparent;content:\"\";position:absolute;height:13px;border-radius:5px;-webkit-transition:all .2s ease;transition:all .2s ease;width:2px}.vs-icon-check span .line2:after{content:\"\";position:absolute;width:2px;height:0%;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;bottom:0;border-radius:5px 5px 0 0}.vs-icon-check.active:before{width:8px}.vs-icon-check.active:after{width:4px}.vs-icon-check.indeterminate span{-webkit-transform:rotate(0);transform:rotate(0);height:auto;margin:0;width:auto}.vs-icon-check.indeterminate span:after{position:relative;content:\"\";width:10px;height:2px;background:#fff;display:block}.vs-icon-check.indeterminate span .line1{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);bottom:0;right:-1px;opacity:0;display:none}.vs-icon-check.indeterminate span .line2{right:0!important;bottom:-.14rem!important;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important;-webkit-transition:all .25s ease!important;transition:all .25s ease!important;height:11px!important;display:none}.vs-icon-arrow{pointer-events:none;width:7px;height:7px;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform-origin:center;transform-origin:center}.vs-icon-arrow:after{content:\"\";width:100%;height:1px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;display:block;top:0}.vs-icon-arrow:before{top:0;content:\"\";width:1px;height:100%;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;display:block}.vs-input-parent{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}.vs-input-parent.square .vs-input-content{border-radius:0!important}.vs-input-parent.textWhite .vs-input{color:#fff}.vs-input-parent.transparent .vs-input{background:transparent!important}.vs-input-parent.block,.vs-input-parent.block .vs-input{width:100%}.vs-input-parent--has-label{margin-top:20px!important}.vs-input-parent--state-success .vs-input{background:rgba(70,201,58,.1)!important;background:rgba(var(--vs-success),.1)!important}.vs-input-parent--state-success .vs-input,.vs-input-parent--state-success .vs-input__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input-parent--state-success .vs-input__icon{color:#46c93a;color:rgba(var(--vs-success),1);background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-input-parent--state-danger .vs-input{background:rgba(255,71,87,.1)!important;background:rgba(var(--vs-danger),.1)!important}.vs-input-parent--state-danger .vs-input,.vs-input-parent--state-danger .vs-input__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input-parent--state-danger .vs-input__icon{color:#ff4757;color:rgba(var(--vs-danger),1);background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-input-parent--state-warn .vs-input{background:rgba(255,186,0,.1)!important;background:rgba(var(--vs-warn),.1)!important}.vs-input-parent--state-warn .vs-input,.vs-input-parent--state-warn .vs-input__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input-parent--state-warn .vs-input__icon{color:#ffba00;color:rgba(var(--vs-warn),1);background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-input-parent--state-dark .vs-input{background:rgba(30,30,30,.1)!important;background:rgba(var(--vs-dark),.1)!important}.vs-input-parent--state-dark .vs-input,.vs-input-parent--state-dark .vs-input__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input-parent--state-dark .vs-input__icon{color:#1e1e1e;color:rgba(var(--vs-dark),1);background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-input-parent--state-primary .vs-input{background:rgba(25,91,255,.1)!important;background:rgba(var(--vs-primary),.1)!important}.vs-input-parent--state-primary .vs-input,.vs-input-parent--state-primary .vs-input__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input-parent--state-primary .vs-input__icon{color:#195bff;color:rgba(var(--vs-primary),1);background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-input-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;border-radius:12px}.vs-input-content+.vs-input__message{padding-top:2px}.vs-input-content--has-color .vs-input:focus{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1)}.vs-input-content--has-color .vs-input:focus~.vs-input__icon{color:#111214;color:rgba(var(--vs-color),1)}.vs-input-content--has-color .vs-input:focus~.vs-input__label{color:#111214;color:rgba(var(--vs-color),1)}.vs-input-content--has-color .vs-input:focus~.vs-input__label--placeholder{color:#111214;color:rgba(var(--vs-color),1)}.vs-input{border:2px solid transparent;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;padding:7px 13px 7px 10px;width:200px}.vs-input:focus{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);padding-left:15px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after){padding-left:40px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__icon{-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){left:44px}.vs-input:focus~.vs-input__icon{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input:focus~.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input:focus~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){opacity:0;left:20px}.vs-input:focus~.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-77%);transform:translate(-3%,-77%);font-size:.75rem}.vs-input__label{position:absolute;left:13px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4}.vs-input__label--hidden{opacity:0;visibility:hidden}.vs-input__label--hidden.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3px,-80%);transform:translate(-3px,-80%);font-size:.75rem}.vs-input__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-2px,-77%);transform:translate(-2px,-77%);font-size:.75rem}.vs-input--has-icon{padding-left:38px}.vs-input--has-icon~.vs-input__label{left:44px}.vs-input--has-icon--after{padding-left:7px;padding-right:38px}.vs-input--has-icon--after~.vs-input__label{left:13px}.vs-input--has-icon--after.vs-input__label--label{-webkit-transform:translate(-25px,-80%)!important;transform:translate(-25px,-80%)!important}.vs-input--has-icon:focus--has-icon--after~.vs-input__label--placeholder{-webkit-transform:translate(-25px,-80%)!important;transform:translate(-25px,-80%)!important}.vs-input--has-icon:focus--has-icon--after~.vs-input__label{left:44px}.vs-input__icon{position:absolute;right:auto;width:36px;height:36px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:12px 0 10px -10px rgba(0,0,0,.05);box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);pointer-events:none;left:0}.vs-input__icon--after{left:auto;right:0;-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input__icon--click{pointer-events:auto!important;cursor:pointer}.vs-input__icon--click:hover{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input__icon--click:hover.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-input__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input__progress{width:95%;left:2.5%;position:relative;height:2px;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);margin-top:5px;overflow:hidden;border-radius:5px}.vs-input__progress--danger .vs-input__progress__bar{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-input__progress--warn .vs-input__progress__bar{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-input__progress--success .vs-input__progress__bar{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-input__progress__bar{width:32%;height:2px;max-width:100%;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px}.vs-input__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default}.vs-input__loading:after{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite;top:0;content:\"\"}.vs-input__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;top:0;position:absolute;width:100%;height:100%;border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2;content:\"\"}.vs-input-parent--border .vs-input__icon{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-input-parent--border .vs-input-content{border-radius:0}.vs-input-parent--border .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.vs-input-parent--border .vs-input-content .vs-input__affects__1{border-bottom:2px solid #f0f3f4;border-bottom:2px solid rgba(var(--vs-gray-3),1);width:100%;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-input-parent--border .vs-input-content .vs-input__affects__2{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1);width:0;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-input-parent--border .vs-input-content .vs-input{background:transparent;border-radius:0}.vs-input-parent--border .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__2{width:100%}.vs-input-parent--shadow .vs-input__icon{background:transparent;z-index:100}.vs-input-parent--shadow .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;border-radius:inherit;pointer-events:none;z-index:10}.vs-input-parent--shadow .vs-input-content .vs-input__affects__1{-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,.05);-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 6px 25px -6px rgba(0,0,0,.05);box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));width:100%;height:100%;position:absolute;top:0;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border-radius:inherit}.vs-input-parent--shadow .vs-input-content .vs-input{background:transparent;border-radius:0;border:2px solid transparent}.vs-input-parent--shadow .vs-input-content .vs-input:focus{-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__icon{background:#fff!important;background:rgba(var(--vs-background),1)!important;opacity:1;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__1{-webkit-transform:translateY(3px);transform:translateY(3px);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 3px 0 rgba(0,0,0,.05);box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox-content{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-checkbox-con{width:23px;height:23px;border-radius:9px;position:relative;z-index:1}.vs-checkbox-mask{border-radius:32%;width:100%;height:100%;position:absolute;z-index:50;cursor:pointer;pointer-events:none;-webkit-box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:-1;box-sizing:border-box}.vs-checkbox-mask i:not(.vs-icon-check){opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;color:#fff;font-size:1.1em;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox-mask:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:#111214;background:rgba(var(--vs-color),1);-webkit-transform:scale(.5);transform:scale(.5);border-radius:inherit;opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:-1}.vs-checkbox-mask:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:-1;border:2px solid #e6e9ea;border:2px solid rgba(var(--vs-gray-4),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-checkbox-mask .vs-icon-check{opacity:0;z-index:200}.vs-checkbox{position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:0;opacity:0;z-index:100;cursor:pointer}.vs-checkbox:disabled{opacity:0;pointer-events:none}.vs-checkbox:active~.vs-checkbox-mask{background:#e6e9ea!important;background:rgba(var(--vs-gray-4),1)!important}.vs-checkbox:hover~.vs-checkbox-mask{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-checkbox:hover~.vs-checkbox-mask:before{border:2px solid rgba(230,233,234,0);border:2px solid rgba(var(--vs-gray-4),0)}.vs-checkbox:checked:hover~.vs-checkbox-mask{-webkit-box-shadow:0 3px 15px 0 rgba(17,18,20,.35);-webkit-box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35);box-shadow:0 3px 15px 0 rgba(17,18,20,.35);box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask{-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.35);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.35);box-shadow:0 0 0 0 rgba(17,18,20,.35);box-shadow:0 0 0 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask i:not(.vs-icon-check){opacity:1;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease .15s;transition:all .25s ease .15s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check{opacity:1}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line1:after{width:100%;-webkit-transition:all .25s ease .1s;transition:all .25s ease .1s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line2:after{-webkit-transition:all .2s ease .3s;transition:all .2s ease .3s;height:100%}.vs-checkbox:checked~.vs-checkbox-mask:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-checkbox:checked~.vs-checkbox-mask:before{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-checkbox-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:7px;-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem}.vs-checkbox-label:before{position:absolute;width:0;height:2px;background:rgba(44,62,80,.6);background:rgba(var(--vs-text),.6);content:\"\";-webkit-transition:all .25s ease;transition:all .25s ease}.vs-checkbox--disabled{pointer-events:none}.vs-checkbox--disabled .vs-checkbox-label{opacity:.5}.vs-checkbox--disabled .vs-checkbox-mask{opacity:.6;background:transparent!important}.vs-checkbox--checked .lineThrough{opacity:.4}.vs-checkbox--checked .lineThrough:before{width:calc(100% - 10px)}.vs-checkbox--loading{pointer-events:none}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:before{border-radius:50%;border:2px solid #111214!important;border:2px solid rgba(var(--vs-color),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite;opacity:1!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:after{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox--loading .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading .vs-checkbox-mask:before{border-radius:50%;border:2px solid #e6e9ea!important;border:2px solid rgba(var(--vs-gray-4),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite}@-webkit-keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox--label-before .vs-checkbox-label{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.vs-switch{--vs-color:var(--vs-primary)}@-webkit-keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-switch{color:#fff;padding:5px;border-radius:20px;min-width:48px;height:28px;border:0;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-switch--icon .vs-switch__input:checked~.vs-switch__circle{color:#fff!important}.vs-switch--icon .vs-switch__circle{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-switch--icon .vs-switch__circle i{opacity:1;font-size:1.3rem}.vs-switch--indeterminate .vs-switch__input{pointer-events:none}.vs-switch--indeterminate .vs-switch__circle{left:50%!important;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-switch--square{border-radius:5px}.vs-switch--square .vs-switch__background,.vs-switch--square .vs-switch__circle{border-radius:5px!important}.vs-switch:after{-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;opacity:0;visibility:hidden;content:\"\";position:absolute;width:calc(100% - 8px);height:calc(100% - 8px);border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);z-index:200;border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s linear .25s infinite;animation:rotateSwitch .6s linear .25s infinite;pointer-events:none}.vs-switch:before{pointer-events:none;-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;opacity:0;visibility:hidden;content:\"\";position:absolute;width:calc(100% - 8px);height:calc(100% - 8px);border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);z-index:200;border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s ease .25s infinite;animation:rotateSwitch .6s ease .25s infinite}.vs-switch--loading{width:28px!important;min-width:28px!important;pointer-events:none;border-radius:20px!important}.vs-switch--loading .vs-switch__circle{border-radius:50%!important}.vs-switch--loading .vs-switch__background{opacity:0!important}.vs-switch--loading:after{opacity:1;visibility:visible;-webkit-transition:all .25s ease .3s;transition:all .25s ease .3s}.vs-switch--loading:before{opacity:1;visibility:visible;-webkit-transition:all .25s ease .3s;transition:all .25s ease .3s}.vs-switch:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-switch:active{-webkit-transform:scale(.9);transform:scale(.9)}.vs-switch__background{width:100%;height:auto;position:absolute;background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit;z-index:2;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;-webkit-transform:scale(1);transform:scale(1);left:-100%;border-radius:50%;padding-bottom:100%}.vs-switch__text{font-size:.7rem;padding:5px 5px 5px 25px;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;color:#2c3e50;color:rgba(var(--vs-text),1);z-index:9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;overflow:hidden;white-space:nowrap}.vs-switch__text.on{-webkit-transform:translate(-100%);transform:translate(-100%);position:absolute;opacity:0}.vs-switch__text i{font-size:1rem;opacity:.7}.vs-switch__circle{width:20px;height:20px;background:#fff;background:rgba(var(--vs-background),1);border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;position:absolute;z-index:10;left:4px;color:#2c3e50;color:rgba(var(--vs-text),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-switch__circle i{font-size:.8rem}.vs-switch__input{position:absolute;width:100%;opacity:0!important;height:100%;border-radius:inherit;z-index:100;top:0;left:0;margin:0;cursor:pointer}.vs-switch__input:active:checked~.vs-switch__circle{left:calc(100% - 30px)}.vs-switch__input:active~.vs-switch__circle{width:25px}.vs-switch__input:checked~.vs-switch__background{opacity:1;-webkit-transform:scale(1);transform:scale(1);width:100%;padding-bottom:100%;left:0;border-radius:50%;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-switch__input:checked~.vs-switch__text{padding-left:5px;padding-right:25px;color:#fff}.vs-switch__input:checked~.vs-switch__text i{opacity:1}.vs-switch__input:checked~.vs-switch__text.on{-webkit-transform:translate(0);transform:translate(0);position:relative;opacity:1}.vs-switch__input:checked~.vs-switch__text.off{-webkit-transform:translate(100%);transform:translate(100%);position:absolute;opacity:0}.vs-switch__input:checked~.vs-switch__circle{left:calc(100% - 24px);-webkit-box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);-webkit-box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);color:#111214;color:rgba(var(--vs-color),1)}.vs-select{--vs-color:var(--vs-primary)}.vs-select__options .vs-checkbox-content{--vs-color:inherit}.vs-select-enter,.vs-select-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-enter{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-enter:after{opacity:0!important;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-leave-active,.vs-select-leave-to{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-leave-to{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-leave-to.top{-webkit-transform:translateY(10px)!important;transform:translateY(10px)!important}.vs-select-leave-to:after{opacity:0!important;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-content{width:100%;max-width:200px}.vs-select-content.block.block{max-width:100%}.vs-select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:38px;width:100%}.vs-select--state-success .vs-select__input{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-success .vs-select__chips{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__chips:hover:after{opacity:0}.vs-select--state-success .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(70,201,58,.5);border:2px solid rgba(var(--vs-success),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-success .vs-select__icon,.vs-select--state-success .vs-select__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__icon{background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-select--state-success .vs-icon-arrow:after{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-select--state-success .vs-icon-arrow:before{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-select--state-danger .vs-select__input{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-danger .vs-select__chips{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__chips:hover:after{opacity:0}.vs-select--state-danger .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,71,87,.5);border:2px solid rgba(var(--vs-danger),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-danger .vs-select__icon,.vs-select--state-danger .vs-select__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__icon{background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-select--state-danger .vs-icon-arrow:after{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-icon-arrow:before{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select--state-warn .vs-select__input{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-warn .vs-select__chips{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__chips:hover:after{opacity:0}.vs-select--state-warn .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,186,0,.5);border:2px solid rgba(var(--vs-warn),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-warn .vs-select__icon,.vs-select--state-warn .vs-select__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__icon{background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-select--state-warn .vs-icon-arrow:after{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-icon-arrow:before{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-select--state-dark .vs-select__input{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-dark .vs-select__chips{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__chips:hover:after{opacity:0}.vs-select--state-dark .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(30,30,30,.5);border:2px solid rgba(var(--vs-dark),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-dark .vs-select__icon,.vs-select--state-dark .vs-select__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__icon{background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-select--state-dark .vs-icon-arrow:after{background:#1e1e1e;background:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-icon-arrow:before{background:#1e1e1e;background:rgba(var(--vs-dark),1)}.vs-select--state-primary .vs-select__input{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-primary .vs-select__chips{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__chips:hover:after{opacity:0}.vs-select--state-primary .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(25,91,255,.5);border:2px solid rgba(var(--vs-primary),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-primary .vs-select__icon,.vs-select--state-primary .vs-select__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__icon{background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-select--state-primary .vs-icon-arrow:after{background:#195bff;background:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-icon-arrow:before{background:#195bff;background:rgba(var(--vs-primary),1)}.vs-select.loading{pointer-events:none}.vs-select.loading :not(.vs-select__loading):not(.vs-select__label){opacity:.6}.vs-select.loading .vs-select__label{pointer-events:none!important}.vs-select.top.activeOptions .vs-select__chips,.vs-select.top.activeOptions .vs-select__input{border-radius:0 0 12px 12px!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-select--disabled{opacity:.6;pointer-events:none}.vs-select--disabled label{pointer-events:none}.vs-select .vs-icon-arrow{z-index:600;position:absolute;right:15px;margin-top:-2px;-webkit-transition:all .25s ease;transition:all .25s ease;pointer-events:auto;cursor:pointer}.vs-select.activeOptions .vs-icon-arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-top:-2px!important}.vs-select.activeOptions .vs-select__input{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select.activeOptions .vs-select__chips,.vs-select.activeOptions .vs-select__input{border-radius:12px 12px 0 0;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s}.vs-select.activeOptions .vs-select__chips:after{opacity:0}.vs-select.activeOptions .vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select.activeOptions .vs-select__label{margin-top:-4px}.vs-select__input{opacity:1;background:transparent;border-radius:12px;cursor:pointer;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);min-height:38px;padding:7px 30px 7px 13px;width:100%}.vs-select__input.multiple{color:transparent;background:transparent;pointer-events:none}.vs-select__input.simple{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-select__input:focus{border-radius:12px 12px 0 0;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__input:focus~.vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__input:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px)}.vs-select__input:hover~.vs-select__label{margin-top:-4px}.vs-select__input:hover~.vs-icon-arrow{margin-top:-6px}.vs-select__chips{width:100%;height:auto;position:absolute;left:0;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);z-index:300;border-radius:12px;display:-webkit-box;display:-ms-flexbox;border:0;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:38px;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;padding:5px 26px 5px 5px}.vs-select__chips:focus{border-radius:12px 12px 0 0;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips:hover~.vs-icon-arrow{margin-top:-6px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__input{width:auto;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%;position:relative;min-width:0;background:transparent;margin:2px 3px;min-width:30px}.vs-select__chips__input::-webkit-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-moz-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input:-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__chip{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;background:#fff;background:rgba(var(--vs-background),1);border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2px 3px;padding:0 10px 0 6px;font-size:.84rem;border:2px solid #f4f7f8;border:2px solid rgba(var(--vs-gray-2),1);-webkit-box-sizing:border-box;box-sizing:border-box;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select__chips__chip.isCollapse{padding-right:6px!important}.vs-select__chips__chip__close{position:absolute;top:-4px;right:-4px;width:15px;height:15px;background:#e6e9ea;background:rgba(var(--vs-gray-4),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;font-size:.75rem;cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__chip__close:hover{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select__chips__chip__close:hover .vs-icon-close{--vs-color:var(--vs-background)}.vs-select__chips__chip__close:hover .vs-icon-close:after{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-select__chips__chip__close:hover .vs-icon-close:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-select__chips__chip__close .vs-icon-close{--vs-color:var(--vs-text);-webkit-transform:scale(.5);transform:scale(.5)}.vs-select__options{--vs-color:var(--vs-primary);position:absolute;z-index:99999;background:#fff;background:rgba(var(--vs-background),1);padding:5px;border-radius:0 0 12px 12px;overflow:hidden;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 20px -5px rgba(0,0,0,.05);box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top{border-radius:12px 12px 0 0;-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top:after{top:auto;bottom:-10px}.vs-select__options:after{content:\"\";position:absolute;top:-10px;width:80%;margin-left:10%;left:0;height:10px;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 20px 0 rgba(0,0,0,.05);box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));z-index:200;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;opacity:1}.vs-select__options__content{max-height:200px;overflow:auto;height:auto;z-index:100;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;scroll-behavior:smooth}.vs-select__options__content__not-data{font-size:.8rem;text-align:center;padding:6px 10px}.vs-select__options__content::-webkit-scrollbar{width:5px;height:5px;display:block;background:transparent}.vs-select__options__content::-webkit-scrollbar-thumb{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);border-radius:5px}.vs-select__label{position:absolute;left:14px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4;z-index:500;top:10px}.vs-select__label--hidden{opacity:0;visibility:hidden}.vs-select__label--hidden.vs-select__label--placeholder,.vs-select__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default;z-index:600}.vs-select__loading:after{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite;top:0;content:\"\"}.vs-select__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;top:0;position:absolute;width:100%;height:100%;border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2;content:\"\"}.vs-select__loading~.vs-icon-arrow{opacity:0!important}.vs-select__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-select__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-darken .vs-select__options.isColorDark{--vs-color:0,0,0!important}.vs-darken .vs-select__options.isColorDark .vs-select__option:hover{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2);color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-darken .vs-select__options.isColorDark .activeOption{color:#2c3e50;color:rgba(var(--vs-text),1);background:rgba(17,18,20,.6);background:rgba(var(--vs-color),.6)}.vs-select__option{border:0;width:100%;padding:6px 10px;text-align:left;background:transparent;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:5px;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));margin:2px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;opacity:1;visibility:visible;max-height:40px}.vs-select__option.hiddenOption{opacity:0;visibility:hidden;max-height:0;padding-top:0;padding-bottom:0;border:0;margin:0}.vs-select__option.isMultiple{padding:0 0 0 5px}.vs-select__option.isMultiple .vs-select__option-group{padding-left:0}.vs-select__option.isMultiple.isHover{background:#f4f7f8!important;background:rgba(var(--vs-gray-2),1)!important}.vs-select__option.isMultiple:disabled .vs-checkbox-content{pointer-events:none}.vs-select__option.isMultiple:hover{padding-left:5px!important}.vs-select__option.isMultiple .vs-checkbox-content{width:100%;pointer-events:none}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-con{-webkit-transform:scale(.85);transform:scale(.85)}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-label{width:calc(100% - 23px);text-align:left;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-select__option.isMultiple.activeOption{pointer-events:auto!important}.vs-select__option.isHover{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-select__option.activeOption{background:rgba(17,18,20,.05);background:rgba(var(--vs-color),.05);color:#111214;color:rgba(var(--vs-color),1);pointer-events:none}.vs-select__option:hover:not(:disabled){color:#111214;color:rgba(var(--vs-color),1);padding-left:14px}.vs-select__option-group{padding-left:10px;border-bottom:2px solid #f9fcfd;border-bottom:2px solid rgba(var(--vs-gray-1),1);position:relative;overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__option-group:last-child{border:0}.vs-select__option-group.hiddenOptionGroup{border-bottom:0 solid #f9fcfd;border-bottom:0 solid rgba(var(--vs-gray-1),1)}.vs-select__option-group.hiddenOptionGroup h5{padding:0;max-height:0}.vs-select__option-group h5{max-height:28px;-webkit-transition:all .25s ease;transition:all .25s ease;opacity:.5;margin:0;padding:7px 0;font-size:.7rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.vs-select__option-group h5 *{pointer-events:none}.vs-avatar-content{--vs-color:var(--vs-gray-2);--vs-badge:var(--vs-primary);border-radius:35%;z-index:1;width:44px;height:44px;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar-content.vs-change-color-badge .vs-avatar__badge .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar-content.vs-change-color:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1)}.vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04)}.vs-avatar-content:hover img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-avatar-content--size.history:after{top:-2px!important}.vs-avatar-content--hasIcons{margin-right:20px}.vs-avatar-content--hidden{display:none}.vs-avatar-content--circle{border-radius:50%!important}.vs-avatar-content--circle .vs-avatar__badge{right:-2px;bottom:-2px}.vs-avatar-content--circle .vs-avatar__badge.top-right{top:-2px;bottom:auto}.vs-avatar-content--circle .vs-avatar__badge.top-left{top:-2px;left:-2px;bottom:auto;right:auto}.vs-avatar-content--circle .vs-avatar__badge.bottom-left{left:-2px;right:auto}.vs-avatar-content--square{border-radius:0!important}.vs-avatar-content.history--gradient:after{background-image:linear-gradient(40deg,#f99b4a,#df376b 74%,#c52d91 0)!important}.vs-avatar-content.history .vs-avatar{width:calc(100% - 4px);height:calc(100% - 4px);border:2px solid #fff;border:2px solid rgba(var(--vs-background),1);margin:2px}.vs-avatar-content.history:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background-color:#ffe53b;z-index:-1;background:#111214;background:rgba(var(--vs-color),1)}.vs-avatar-content.vs-change-color .vs-avatar{color:#fff;color:rgba(var(--vs-background),1)}.vs-avatar-content.vs-change-color .vs-avatar__points .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;width:100%;height:100%;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.05);box-shadow:inset 0 0 0 0 rgba(0,0,0,.05)}.vs-avatar i{font-size:1.4rem}.vs-avatar img{width:100%;height:auto;display:block;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-avatar__loading{position:absolute;width:100%;top:0;left:0;background:rgba(0,0,0,.5);z-index:100;height:100%;border-radius:inherit}.vs-avatar__loading,.vs-avatar__loading__animate{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__loading__animate{height:60%;width:60%;border-radius:50%;position:relative}.vs-avatar__loading__animate:after{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid transparent;border-bottom-color:#fff;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite;top:0;content:\"\"}.vs-avatar__loading__animate:before{-webkit-box-sizing:border-box;box-sizing:border-box;top:0;position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid transparent;border-bottom:2px dashed #fff;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2;content:\"\"}.vs-avatar--letter--3{font-size:.9rem}.vs-avatar--letter--4{font-size:.8rem}.vs-avatar--letter--5{font-size:.7rem}.vs-avatar--letter--6{font-size:.6rem}.vs-avatar__badge{position:absolute;width:13px;height:13px;background:rgba(var(--vs-badge),1);border-radius:50%;border:2px solid #fff!important;border:2px solid rgba(var(--vs-background),1)!important;right:-4px;bottom:-4px;font-size:.6rem;font-weight:700;z-index:200;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-avatar__badge.isSlot,.vs-avatar__badge.writing{width:auto;height:auto;border-radius:7px;min-width:18px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;color:rgba(var(--vs-background),1);line-height:.9rem;padding:0 3px;min-height:18px}.vs-avatar__badge.top-right{top:-4px;bottom:auto}.vs-avatar__badge.top-left{top:-4px;left:-4px;bottom:auto;right:auto}.vs-avatar__badge.bottom-left{left:-4px;right:auto}.vs-avatar__points{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__points__point{width:5px;height:5px;background:#2c3e50;background:rgba(var(--vs-text),1);margin:0 2px;border-radius:50%}.vs-avatar__points__point:first-child{-webkit-animation:point 1.2s ease infinite;animation:point 1.2s ease infinite}.vs-avatar__points__point:nth-child(2){-webkit-animation:point 1.2s ease .4s infinite;animation:point 1.2s ease .4s infinite}.vs-avatar__points__point:nth-child(3){-webkit-animation:point 1.2s ease .8s infinite;animation:point 1.2s ease .8s infinite}.vs-avatar__latest{background:rgba(0,0,0,.5);top:0;left:0;width:100%;height:100%;z-index:300;border-radius:inherit;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar__icons,.vs-avatar__latest{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__icons{width:auto;height:auto;min-height:90%;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:-20px;padding:3px 3px 3px 5px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:-1;border-radius:5px 5px 5px 5px;font-size:1rem}.vs-avatar__icons i{cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-avatar__icons i:hover{opacity:.7}@-webkit-keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}@keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}.vs-avatar__group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:18px}.vs-avatar__group.float{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding-left:0}.vs-avatar__group.float .vs-avatar-content{position:relative;z-index:2;border:3px solid vs-color(\"background\");margin:0}.vs-avatar__group:not(.float) .vs-avatar-content{margin-left:-18px;position:relative;z-index:2}.vs-avatar__group:not(.float) .vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.1);box-shadow:inset 0 0 0 0 rgba(0,0,0,.1)}.vs-avatar__group:not(.float) .vs-avatar-content:hover img{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content .vs-avatar__latest{width:calc(100% - 6px);height:calc(100% - 6px);margin:3px}.vs-avatar__group:not(.float) .vs-avatar-content:not(.vs-change-color) .vs-avatar{background:vs-color(\"background\")}.vs-avatar__group:not(.float) .vs-avatar-content img{width:calc(100% - 6px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons){-webkit-transform:translate(-10px);transform:translate(-10px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons) .vs-avatar{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons{margin-right:0}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons:hover{-webkit-transform:translate(-34px)!important;transform:translate(-34px)!important}.vs-radio-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-radio-content.active .vs-radio__effect__icon{opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(1.3);transform:scale(1.3)}.vs-radio-content.active .vs-radio__effect:after{border:7px solid #111214;border:7px solid rgba(var(--vs-color),1);-webkit-box-shadow:0 3px 12px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3);box-shadow:0 3px 12px 0 rgba(17,18,20,.3);box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3)}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect .vs-radio__effect__icon{opacity:.7}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect:after{border:2px solid rgba(44,62,80,.2);border:2px solid rgba(var(--vs-text),.2)}.vs-radio-content.loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-radio-content.loading .vs-radio__effect:after{opacity:.1}.vs-radio-content.loading .vs-radio__effect__loading{position:absolute;width:100%;height:100%;border-radius:inherit}.vs-radio-content.loading .vs-radio__effect__loading:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right-color:rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right-color:rgba(var(--vs-text),.4);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4);-webkit-animation:loadingRadio .6s ease infinite;animation:loadingRadio .6s ease infinite}.vs-radio-content.loading .vs-radio__effect__loading:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right:2px dashed rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right:2px dashed rgba(var(--vs-text),.4);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4);-webkit-animation:loadingRadio .6s linear infinite;animation:loadingRadio .6s linear infinite}.vs-radio-content label{cursor:pointer}.vs-radio-content.disabled{opacity:.5;pointer-events:none}.vs-radio-content.disabled .vs-radio__effect{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-radio-content.disabled label{pointer-events:none}.vs-radio{width:20px;height:20px;margin:0;padding:0;border-radius:50%;position:relative;z-index:10}.vs-radio__label{margin:0 6px}.vs-radio__effect{position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:10}.vs-radio__effect,.vs-radio__effect__icon{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-radio__effect__icon i{font-size:.75rem}.vs-radio__effect:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),.4);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio input{margin:0;padding:0;width:100%;height:100%;position:relative;z-index:100;opacity:0;cursor:pointer}.vs-radio input:active~.vs-radio__effect:after{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-tooltip{--vs-color:var(--vs-text)}.vs-tooltip-enter-active,.vs-tooltip-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-tooltip-enter,.vs-tooltip-leave-to{opacity:0}.vs-tooltip-enter.top,.vs-tooltip-leave-to.top{-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-tooltip-enter.bottom,.vs-tooltip-leave-to.bottom{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-tooltip-enter.left,.vs-tooltip-leave-to.left{-webkit-transform:translate(5px);transform:translate(5px)}.vs-tooltip-enter.right,.vs-tooltip-leave-to.right{-webkit-transform:translate(-5px);transform:translate(-5px)}.darken .vs-tooltip{--vs-color:var(--vs-gray-3);color:#fff}.darken .vs-tooltip:not(.vs-change-color){color:#fff!important}.vs-tooltip{background:#111214;background:rgba(var(--vs-color),1);color:#fff;color:rgba(var(--vs-background),1);position:absolute;z-index:1000000;text-align:center;padding:5px 10px;border-radius:12px;font-size:.85rem;max-width:350px;min-width:30px;min-height:30px}.vs-tooltip.loading{color:hsla(0,0%,100%,.2);color:rgba(var(--vs-background),.2)}.vs-tooltip.loading *{opacity:.5;pointer-events:none}.vs-tooltip__loading{width:22px;height:22px;position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;opacity:1!important}.vs-tooltip__loading:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right-color:#fff;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-background),1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1);-webkit-animation:loadingTooltip .6s ease infinite;animation:loadingTooltip .6s ease infinite}.vs-tooltip__loading:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #fff;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-background),1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1);-webkit-animation:loadingTooltip .6s linear infinite;animation:loadingTooltip .6s linear infinite}.vs-tooltip.borderThick{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.borderThick.top{border-bottom:4px solid #111214;border-bottom:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.top:after{bottom:-7px}.vs-tooltip.borderThick.left{border-right:4px solid #111214;border-right:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.left:after{right:-7px}.vs-tooltip.borderThick.right{border-left:4px solid #111214;border-left:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.right:after{left:-7px}.vs-tooltip.borderThick.bottom{border-top:4px solid #111214;border-top:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.bottom:after{top:-7px}.vs-tooltip.borderThick:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.borderThick:after{background:#111214!important;background:rgba(var(--vs-color),1)!important}.vs-tooltip.border{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-tooltip.border:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.border:after{border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);width:12px!important;height:12px!important}.vs-tooltip.circle{border-radius:20px}.vs-tooltip.square{border-radius:0}.vs-tooltip.notArrow:after{display:none}.vs-tooltip.shadow{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.shadow:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.shadow:after{-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.isDark{--vs-color:var(--vs-gray-3);color:#fff}.vs-tooltip.top:after{content:\"\";position:absolute;bottom:-3px;background:inherit;width:10px;height:10px;left:50%;-webkit-transform:translate(-50%) rotate(45deg);transform:translate(-50%) rotate(45deg);z-index:-2;border-radius:0 0 2px 0}.vs-tooltip.bottom:after{content:\"\";position:absolute;top:-3px;background:inherit;width:10px;height:10px;left:50%;-webkit-transform:translate(-50%) rotate(45deg);transform:translate(-50%) rotate(45deg);z-index:-2;border-radius:2px 0 0 0}.vs-tooltip.left:after{content:\"\";position:absolute;right:-3px;background:inherit;width:10px;height:10px;top:50%;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);z-index:-2;border-radius:0 2px 0 0}.vs-tooltip.right:after{content:\"\";position:absolute;left:-3px;background:inherit;width:10px;height:10px;top:50%;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);z-index:-2;border-radius:0 0 0 2px}@-webkit-keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-dialog-content{--vs-color:var(--vs-primary)}.vs-dialog-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-dialog-enter-active .vs-dialog:not(.vs-dialog--fullScreen){-webkit-animation:rebound .4s;animation:rebound .4s}.vs-dialog-leave-active,.vs-dialog-leave-active .vs-dialog{-webkit-transition:all .15s ease;transition:all .15s ease}.vs-dialog-enter,.vs-dialog-leave-to{opacity:0}.vs-dialog-enter .vs-dialog,.vs-dialog-leave-to .vs-dialog{-webkit-transform:scale(.7);transform:scale(.7);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-dialog-enter .vs-dialog--fullScreen,.vs-dialog-leave-to .vs-dialog--fullScreen{-webkit-transform:translateY(8%)!important;transform:translateY(8%)!important}@-webkit-keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}.vs-dialog-content{background:rgba(0,0,0,.2);background:rgba(0,0,0,var(--vs-background-opacity));position:fixed;left:0;top:0;z-index:99000;z-index:var(--vs-zindex-2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;max-height:100vh;overflow-y:auto;overflow-x:hidden;padding-top:80px;padding-bottom:80px}.vs-dialog-content.fullScreen{padding:0;overflow:hidden}.vs-dialog-content.blur{-webkit-backdrop-filter:saturate(180%) blur(15px);backdrop-filter:saturate(180%) blur(15px)}.vs-dialog{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;min-width:400px;border-radius:20px;border-radius:var(--vs-radius);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 30px 0 rgba(0,0,0,.05);box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));max-width:800px;margin:auto}.vs-dialog--notCenter .vs-dialog__header{display:block}.vs-dialog__loading{width:100%;position:absolute;top:0;left:0;height:100%;border-radius:inherit;background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-dialog__loading:after{content:\"\";position:absolute;width:30px;height:30px;border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right-color:#111214;border:2px solid rgba(var(--vs-color),0);border-right-color:rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s ease infinite;animation:loadingDialog .6s ease infinite}.vs-dialog__loading:before{content:\"\";position:absolute;width:30px;height:30px;border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-color),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s linear infinite;animation:loadingDialog .6s linear infinite}.vs-dialog--scroll .vs-dialog__content{max-height:calc(80vh - 200px);overflow:auto}.vs-dialog--autoWidth{width:auto!important;min-width:auto!important;max-width:auto!important}.vs-dialog--square,.vs-dialog--square .vs-dialog__close{border-radius:0}.vs-dialog--notPadding .vs-dialog__footer{padding:0}.vs-dialog--notPadding .vs-dialog__content{padding:0;margin-bottom:0!important}.vs-dialog--notPadding .vs-dialog__header{padding:0}.vs-dialog--rebound{-webkit-animation:reboundClick .3s!important;animation:reboundClick .3s!important}.vs-dialog--fullScreen{width:calc(100% - 30px)!important;height:calc(100% - 30px)!important;max-width:none!important;max-height:none!important}.vs-dialog__footer{padding:0 16px 10px}.vs-dialog__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px 16px}.vs-dialog__content{padding:10px 16px;width:100%;position:relative;border-radius:inherit}.vs-dialog__content.notFooter{margin-bottom:20px}.vs-dialog__close{--vs-color:var(--vs-text);position:absolute;top:-6px;right:-6px;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:inherit;border-radius:12px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200}.vs-dialog__close i{width:34px;height:34px;opacity:.7}.vs-dialog__close i:after{width:14px}.vs-dialog__close i:before{width:14px}.vs-dialog__close:hover{-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 4px 0 rgba(0,0,0,.05);box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}.vs-dialog__close:hover i{opacity:1}@-webkit-keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@media (max-width:600px){.vs-dialog{min-width:calc(100vw - 20px);max-width:calc(100vw - 20px);margin:auto 10px}}.vs-pagination-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination-content.notMargin .vs-pagination__dotted{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0}.vs-pagination-content.notMargin .vs-pagination__arrow{margin:0!important;border-radius:0}.vs-pagination-content.notMargin .vs-pagination__arrow:first-of-type{border-radius:12px 0 0 12px}.vs-pagination-content.notMargin .vs-pagination__arrow:last-of-type{border-radius:0 12px 12px 0}.vs-pagination-content.notMargin .vs-pagination__button{border-radius:0;margin:0!important}.vs-pagination-content.disabled{opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination-content.square .vs-pagination__active,.vs-pagination-content.square .vs-pagination__arrow,.vs-pagination-content.square .vs-pagination__button{border-radius:0}.vs-pagination-content.circle .vs-pagination__active,.vs-pagination-content.circle .vs-pagination__arrow,.vs-pagination-content.circle .vs-pagination__button{border-radius:50%}.vs-pagination-content.buttonsDotted .vs-pagination__arrow{width:15px;height:12px;min-width:15px;padding:0;background:transparent}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i{width:6px;height:6px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:before{width:1px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:after{height:1px}.vs-pagination-content.buttonsDotted .vs-pagination__dotted{width:12px;height:12px;font-size:.9rem;letter-spacing:1px}.vs-pagination-content.buttonsDotted .vs-pagination__button{width:12px;height:12px}.vs-pagination-content.buttonsDotted .vs-pagination__button.active{-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active{width:12px;height:12px;-webkit-box-shadow:0 2px 10px 0 rgba(17,18,20,.4);-webkit-box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);box-shadow:0 2px 10px 0 rgba(17,18,20,.4);box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active.move{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative}.vs-pagination__progress{width:calc(100% - 16px);height:3px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);position:absolute;bottom:-8px;border-radius:10px}.vs-pagination__progress .progress{width:0;background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;max-width:100%}.vs-pagination__slot{min-height:36px;display:block;display:-webkit-box;display:-ms-flexbox;display:flex}.vs-pagination__arrow,.vs-pagination__slot{min-width:36px;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination__arrow{width:auto;height:36px;border-radius:12px;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 2px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__arrow:disabled{opacity:.4;pointer-events:none}.vs-pagination__arrow:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__arrow i{width:10px;height:10px;position:relative;display:block;margin-left:4px;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__arrow i:before{width:2px}.vs-pagination__arrow i:after{height:2px}.vs-pagination__arrow.next i{margin-left:-4px;-webkit-transform:rotate(135deg) scale(.8);transform:rotate(135deg) scale(.8)}.vs-pagination__active{position:absolute;left:50%;top:0;width:36px;height:36px;background:#111214;background:rgba(var(--vs-color),1);border-radius:12px;z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#fff;-webkit-box-shadow:0 5px 20px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 20px 0 rgba(17,18,20,.3);box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);cursor:default}.vs-pagination__active.move{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-pagination__dotted{width:36px;height:36px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.4rem;letter-spacing:2px;margin:0 2px;cursor:pointer}.vs-pagination__dotted:hover span.dotted{opacity:0;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted:hover .con-arrows{opacity:1;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover span.dotted{opacity:0;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover .con-arrows{opacity:1;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted span.dotted{margin-right:-2px;text-align:center}.vs-pagination__dotted.next .con-arrows{-webkit-transform:rotate(180deg);transform:rotate(180deg);margin-left:-5px}.vs-pagination__dotted .con-arrows{width:10px;height:10px;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:5px;opacity:0;-webkit-transition:all .1s ease;transition:all .1s ease}.vs-pagination__dotted .con-arrows i{width:10px;height:10px;position:relative;display:block;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__dotted .con-arrows i:before{width:2px}.vs-pagination__dotted .con-arrows i:after{height:2px}.vs-pagination__dotted .con-arrows i:last-child{position:absolute;top:0;margin-left:6px}.vs-pagination__button{width:36px;height:36px;border-radius:12px;padding:0;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0 2px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);position:relative}.vs-pagination__button.loading{border-radius:50%;opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button.loading:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right-color:#111214;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s ease infinite;animation:loadingPagination .6s ease infinite}.vs-pagination__button.loading:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s linear infinite;animation:loadingPagination .6s linear infinite}.vs-pagination__button.disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__button:active{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-table-content{--vs-color:var(--vs-primary);width:100%;border-radius:16px}.vs-table{width:100%;font-size:.9rem;margin:0;overflow:auto}.vs-table table{margin:0;border-collapse:collapse;width:100%;min-width:500px}.vs-table.striped .vs-table__tr:nth-child(2n){background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table_not-found{display:none;padding:20px;text-align:center;width:100%}.vs-table_not-found tr{text-align:center}.vs-table_not-found tr td{padding:20px;border:0}.vs-table__tbody:empty{display:none;background:#000}.vs-table__tbody:empty~.vs-table_not-found{display:table-row-group}.vs-table.isSelectedValue tr{cursor:pointer}.vs-table__footer{padding:8px 10px;border-radius:0 0 14px 14px}.vs-table__footer,.vs-table__header{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__header{width:100%;padding:10px;border-radius:14px 14px 0 0}.vs-table__header~.vs-table .vs-table__th:first-child{border-radius:0}.vs-table__header~.vs-table .vs-table__th:last-child{border-radius:0}.vs-table__thead{width:100%}.vs-table__thead .vs-table__th{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__thead .vs-table__th:first-child{border-radius:14px 0 0 0}.vs-table__thead .vs-table__th:last-child{border-radius:0 14px 0 0}.isMultipleSelected .vs-table__tr .vs-table__td{border-radius:0!important}.vs-table__tr{padding:5px}.vs-table__tr.expand{cursor:pointer}.vs-table__tr.vs-change-color .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr.vs-change-color .vs-table__td:hover{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:first-of-type .vs-table__td:last-child{border-radius:0 0 15px 0}.vs-table__tr:first-of-type .vs-table__td:first-child{border-radius:0 0 0 15px}.vs-table__tr.isExpand:first-of-type .vs-table__td{background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important;border-radius:0}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td{background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:last-child{border-radius:0 15px 0 0}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:first-child{border-radius:15px 0 0 0}.vs-table__tr.isExpand:not(:first-of-type)+.vs-table__tr__expand td{border-radius:0 0 15px 15px!important}.vs-table__tr.selected .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr .vs-table__td{background:rgba(var(--vs-bg),.1);color:rgba(var(--vs-bg),1)}.vs-table__tr.vs-change-color:hover .vs-table__td{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:hover .vs-table__td{background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-table__tr__expand,.vs-table__tr__expand td{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__tr__expand td{padding:0;background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr__expand td .vs-table__expand__td__content{overflow:hidden;display:block;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__tr__expand td .vs-table__expand__td__content__sub{padding:10px 15px;z-index:1;position:relative}.fade-expand-enter-active,.fade-expand-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.fade-expand-enter,.fade-expand-leave-to{opacity:0}.fade-expand-enter td .vs-table__expand__td__content,.fade-expand-leave-to td .vs-table__expand__td__content{height:0!important}.vs-table__th{padding:10px 12px;text-align:left;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem}.vs-table__th.sort .vs-table__th__content{pointer-events:none}.vs-table__th.sort:hover{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-table__th[data-sort-type=asc] .icon-sort-2{margin-top:-7px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=asc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=desc] .icon-sort-2{margin-top:-7px}.vs-table__th[data-sort-type=desc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important}.vs-table__th__content{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__th__content,.vs-table__th__content__icons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-table__th__content__icons{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:7px;-webkit-transform:scale(.8);transform:scale(.8)}.vs-table__th__content .vs-icon-arrow{position:relative;display:block}.vs-table__th__content .vs-icon-arrow.icon-sort-1{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-table__th__content .vs-icon-arrow.icon-sort-2{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.vs-table__td{padding:10px 12px;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem}.vs-table__td:last-child{border-radius:0 15px 15px 0}.vs-table__td:first-child{border-radius:15px 0 0 15px}.vs-table__td.isCheckbox{width:23px}.vs-table__td.isEdit{text-decoration:underline;cursor:pointer}.vs-navbar-content{--vs-color:var(--vs-background);position:absolute;z-index:9000;top:0;left:0;width:100%;border-radius:0 0 15px 15px;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-navbar-content.paddingScroll:not(.paddingScrollActive){padding-top:20px;padding-bottom:20px}.vs-navbar-content.paddingScroll:not(.paddingScrollActive) .vs-navbar__group__items{margin-bottom:-30px}.vs-navbar-content.vsNavbarSquare{border-radius:0}.vs-navbar-content.textWhite{color:#fff}.vs-navbar-content.textWhite .vs-navbar__line{background:#fff}.vs-navbar-content.textWhite .vs-navbar__item:before{background:#fff}.vs-navbar-content.fixed{position:fixed!important}.vs-navbar-content.shadow,.vs-navbar-content.shadowActive{-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px 0 rgba(0,0,0,.05);box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-navbar-content.hidden{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.vs-navbar{width:100%;position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:44px}.vs-navbar,.vs-navbar__left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-navbar__right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-navbar__center,.vs-navbar__right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-navbar__line{position:absolute;left:0;bottom:0;width:100px;background:#2c3e50;background:rgba(var(--vs-text),1);height:3px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__line.notTransition{-webkit-transition:none!important;transition:none!important}.vs-navbar__item{padding:10px 15px;margin:0;border:0;background:transparent;font-size:.85rem;opacity:.7;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;font-weight:700;color:inherit}.vs-navbar__item.active{opacity:1}.vs-navbar__item:hover{opacity:1}.vs-navbar__group{position:relative}.vs-navbar__group:hover .vs-navbar__group__item{opacity:1}.vs-navbar__group:hover .vs-navbar__group__items{opacity:1;visibility:visible;-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-navbar__group__item{padding:10px 15px;background:transparent;color:inherit;font-weight:700;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;opacity:.7}.vs-navbar__group__items{position:absolute;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:-12px;-webkit-transform:translateY(90%);transform:translateY(90%);background:#111214;background:rgba(var(--vs-color),1);border-radius:5px 18px 18px 18px;padding:10px;min-width:160px;opacity:0;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;color:inherit;visibility:hidden}.vs-navbar__group__items:after{content:\"\";left:0;top:-13px;background:transparent;width:100%;height:14px;position:absolute;z-index:-1}.vs-navbar__group__items .vs-navbar__item{text-align:left;width:100%;position:relative;padding:5px 10px}.vs-navbar__group__items .vs-navbar__item:before{content:\"\";left:0;top:0;width:4px;height:4px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;border-radius:50%;top:calc(50% - 2px);opacity:0;-webkit-transform:translate(-10px);transform:translate(-10px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__group__items .vs-navbar__item.active:before{opacity:1;-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content{--vs-color:var(--vs-primary)}@-webkit-keyframes delayOpacity{0%{opacity:0}to{opacity:1}}@keyframes delayOpacity{0%{opacity:0}to{opacity:1}}.vs-sidebar-content{position:fixed;left:0;top:0;width:calc(100% - 50px);max-width:260px;height:100vh;border-radius:0 30px 30px 0;color:#2c3e50;color:rgba(var(--vs-text),1);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 25px 0 rgba(0,0,0,.05);box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:21000;background:#fff;background:rgba(var(--vs-background),1);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-110%);transform:translate(-110%)}.vs-sidebar-content.absolute{position:absolute!important;z-index:9001;height:100%}.vs-sidebar-content.relative{position:relative!important;z-index:9001;height:100%}.vs-sidebar-content.textWhite .vs-sidebar__group__content:after{background:hsla(0,0%,100%,.4)}.vs-sidebar-content.textWhite .vs-sidebar__item:after{background:#fff!important}.vs-sidebar-content.textWhite .vs-sidebar__item.active{color:#fff!important}.vs-sidebar-content.notShadow{-webkit-box-shadow:none!important;box-shadow:none!important}.vs-sidebar-content.square{border-radius:0}.vs-sidebar-content.notLineActive .vs-sidebar .vs-sidebar__item:after{display:none}.vs-sidebar-content.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.reduce .vs-sidebar__footer{padding:10px 0}.vs-sidebar-content.reduce .vs-sidebar__header .vs-avatar-content{width:44px!important;height:44px!important}.vs-sidebar-content.reduce .vs-sidebar__logo img{width:80%}.vs-sidebar-content.reduce .vs-sidebar__item{padding-left:16px!important;min-height:47px}.vs-sidebar-content.reduce .vs-sidebar__item:not(.hasIcon) .vs-sidebar__item__text{font-size:.5rem}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon .vs-sidebar__item__text{-webkit-transform:translate(-10px);transform:translate(-10px);margin-left:-50px}.vs-sidebar-content.reduce .vs-sidebar__item__arrow{position:absolute;left:36px;top:10px;-webkit-animation:delayOpacity .6s ease;animation:delayOpacity .6s ease;width:5px;height:5px}.vs-sidebar-content.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:60px}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon{padding:0!important}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon:after{left:-6px}.vs-sidebar-content .vs-sidebar__logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:25px 0;min-height:80px}.vs-sidebar-content .vs-sidebar__logo img{max-width:120px;max-height:35px}.vs-sidebar-content .vs-sidebar{overflow-x:hidden;width:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-sidebar-content .vs-sidebar::-webkit-scrollbar{width:0}.vs-sidebar-content .vs-sidebar__header{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar-content .vs-sidebar__footer,.vs-sidebar-content .vs-sidebar__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:10px}.vs-sidebar-content .vs-sidebar__footer{justify-self:flex-start}.vs-sidebar__item{width:100%;padding:15px 16px 14px;text-align:left;background:transparent;font-size:1rem;font-weight:700;opacity:.7;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-sidebar__item.hasIcon{padding:0}.vs-sidebar__item.hasIcon.active{padding-left:8px}.vs-sidebar__item.hasIcon:hover{padding-left:8px;opacity:1}.vs-sidebar__item:after{content:\"\";position:absolute;left:-4px;top:0;width:10px;height:100%;background:#111214;background:rgba(var(--vs-color),1);border-radius:0 20px 20px 0;-webkit-transform:translate(-6px);transform:translate(-6px);-webkit-transition:all .25s ease;transition:all .25s ease;z-index:60}.vs-sidebar__item.active:not(.hasIcon){padding-left:25px}.vs-sidebar__item.active{opacity:1;color:#111214;color:rgba(var(--vs-color),1)}.vs-sidebar__item.active:after{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar__item__icon{min-width:50px;height:47px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.2rem;z-index:50;background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__item:hover:not(.hasIcon){opacity:1;padding-left:25px}.vs-sidebar__item__text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;z-index:10;font-size:.9rem}.vs-sidebar__item__arrow,.vs-sidebar__item__text{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-sidebar__item__arrow{width:7px;height:7px;position:relative;justify-self:flex-end;margin-left:auto;margin-right:15px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important;z-index:80}.vs-sidebar__item__arrow .vs-icon-arrow:before{width:2px}.vs-sidebar__item__arrow .vs-icon-arrow:after{height:2px}.vs-sidebar__item__text-tooltip{position:fixed;left:50px;opacity:0;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.85rem;white-space:nowrap}.vs-sidebar__group{padding:0;width:100%;min-width:260px;position:relative}.vs-sidebar__group.open .vs-sidebar__group__content:after{-webkit-transform:translate(0);transform:translate(0);opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item{opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item__arrow{-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-sidebar__group__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar__group__content{overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease;position:relative}.vs-sidebar__group__content:after{content:\"\";position:absolute;left:0;top:0;background:rgba(17,18,20,.3);background:rgba(var(--vs-color),.3);width:4px;height:100%;opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-100%);transform:translate(-100%);border-radius:0 10px 10px 0;z-index:60}.vs-sidebar__group__content .vs-sidebar__item{background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__group>.vs-sidebar__group__header .vs-sidebar__item:hover{padding-left:0}.vs-card-content{--vs-color:var(--vs-primary)}.vs-card-content.type-5 .vs-card{-webkit-box-shadow:none;box-shadow:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-card-content.type-5 .vs-card:hover .vs-card__interactions{bottom:50px}.vs-card-content.type-5 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 30px 0 rgba(0,0,0,.05);box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-card-content.type-5 .vs-card:hover .vs-card__img{border-radius:6px 40px 6px 40px}.vs-card-content.type-5 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-card-content.type-5 .vs-card__img{border-radius:6px 20px 6px 20px}.vs-card-content.type-5 .vs-card__interactions{bottom:6px;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:20}.vs-card-content.type-5 .vs-card__text{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:6px 20px 6px 20px;margin-top:-50px;z-index:10;position:relative;width:calc(100% - 30px);padding-top:10px;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translateY(25px);transform:translateY(25px);opacity:0}.vs-card-content.type-4 .vs-card{-webkit-box-shadow:none;box-shadow:none;max-width:300px}.vs-card-content.type-4 .vs-card:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-card-content.type-4 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1);transform:scale(1)}.vs-card-content.type-4 .vs-card:hover .vs-card__text{padding-top:15px;padding-bottom:25px}.vs-card-content.type-4 .vs-card__img{-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:600px}.vs-card-content.type-4 .vs-card__img img{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-card-content.type-4 .vs-card__interactions{top:0;bottom:auto}.vs-card-content.type-4 .vs-card__text{background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);position:absolute;bottom:0;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border-radius:0 0 20px 20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-4 .vs-card__text p{opacity:1}.vs-card-content.type-3 .vs-card{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:400px}.vs-card-content.type-3 .vs-card:hover{-webkit-transform:scale(1.04);transform:scale(1.04)}.vs-card-content.type-3 .vs-card__img img{min-width:200px}.vs-card-content.type-3 .vs-card__text{padding-top:15px}.vs-card-content.type-3 .vs-card__title h2,.vs-card-content.type-3 .vs-card__title h3,.vs-card-content.type-3 .vs-card__title h4,.vs-card-content.type-3 .vs-card__title h5,.vs-card-content.type-3 .vs-card__title h6{padding:0}.vs-card-content.type-2 .vs-card{-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.vs-card-content.type-2 .vs-card:hover{-webkit-transform:scale(.95);transform:scale(.95)}.vs-card-content.type-2 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card-content.type-2 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;color:#fff}.vs-card-content.type-2 .vs-card__interactions{right:0;top:0;left:auto;bottom:auto;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.vs-card-content.type-2 .vs-card__title{position:relative;color:inherit;padding:0}.vs-card-content.type-2 .vs-card__title h2,.vs-card-content.type-2 .vs-card__title h3,.vs-card-content.type-2 .vs-card__title h4,.vs-card-content.type-2 .vs-card__title h5,.vs-card-content.type-2 .vs-card__title h6{padding:0 0 5px}.vs-card-content.type-2 .vs-card__text{position:absolute;bottom:0;background:hsla(0,0%,100%,.9);background:rgba(var(--vs-background),.9);padding-top:30px;border-radiu:0 0 20px 20px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5)));background:linear-gradient(180deg,transparent,rgba(0,0,0,.5));color:transparent;font-size:.9rem;-webkit-transform:translateY(45%);transform:translateY(45%);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-2 .vs-card__text p{opacity:1}.vs-card-content.type-1 .vs-card:hover{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-card-content.type-1 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);width:100%;max-width:350px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer;position:relative}.vs-card__text{font-size:.85rem;padding:0 15px 15px}.vs-card__text p{font-size:inherit;margin:0;opacity:.8}.vs-card__title{padding-top:10px;padding-bottom:5px}.vs-card__title h2,.vs-card__title h3,.vs-card__title h4,.vs-card__title h5,.vs-card__title h6{padding:0;margin:0;font-size:1.1rem}.vs-card__interactions{position:absolute;bottom:0;padding:5px 10px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;left:0}.vs-card__img,.vs-card__interactions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__img{position:relative;max-height:250px;overflow:hidden;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-card__img,.vs-card__img img{border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card__img img{width:100%;display:block}.vs-card__group{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__group-space{min-width:20px;position:relative;height:20px}.vs-card__group .vs-card__group-cards{position:relative;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;overflow-x:auto;scroll-behavior:smooth;padding-top:20px;padding-bottom:20px;border-radius:20px}.vs-card__group .vs-card__group-cards .vs-card-content{min-width:350px;margin-left:20px}.vs-card__group .vs-card__group-prev{z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent}.vs-card__group .vs-card__group-prev .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-card__group .vs-card__group-prev .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-prev .vs-icon-arrow:after{height:2px}.vs-card__group .vs-card__group-next{z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent}.vs-card__group .vs-card__group-next .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.vs-card__group .vs-card__group-next .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-next .vs-icon-arrow:after{height:2px}.loading-enter-active,.loading-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.loading-enter,.loading-leave-to{opacity:0}.vs-loading{--vs-color:var(--vs-primary);--vs-background:255,255,255;--vs-opacity:.6;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(255,255,255,var(--vs-opacity));background:rgba(var(--vs-background),var(--vs-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;padding:20px;border-radius:inherit}.vs-loading--target{position:absolute}.vs-loading__load{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-loading__load__text{font-size:.75em;margin:7px}.vs-loading__load__percent,.vs-loading__load__text{font-weight:700;color:#111214;color:rgba(var(--vs-color),1)}.vs-loading__load__percent{position:relative;font-size:.65rem;margin-top:1px;z-index:200}.vs-loading__load__animation{width:40px;height:40px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading__progress{width:100%;position:absolute;top:0;left:0;height:4px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading__progress__bar{background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:0 10px 10px 0}.vs-loading--default .vs-loading__load__animation{border-radius:50%}.vs-loading--default .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s ease infinite;animation:rotate .8s ease infinite;top:0}.vs-loading--default .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s linear infinite;animation:rotate .8s linear infinite;opacity:.2}.vs-loading--default .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-loading--waves .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--waves .vs-loading__load__animation__1{-webkit-animation:waves .7s ease infinite;animation:waves .7s ease infinite}.vs-loading--waves .vs-loading__load__animation__1,.vs-loading--waves .vs-loading__load__animation__2{width:0;background:transparent;height:0;position:absolute;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}.vs-loading--waves .vs-loading__load__animation__2{-webkit-animation:waves 1.4s linear infinite;animation:waves 1.4s linear infinite}.vs-loading--waves .vs-loading__load__animation__3{width:0;background:transparent;height:0;position:absolute;-webkit-animation:waves 1.75s ease infinite;animation:waves 1.75s ease infinite;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}@-webkit-keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}@keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}.vs-loading--corners .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--corners .vs-loading__load__animation__1{width:100%;background:transparent;height:100%;position:absolute;-webkit-animation:corners 1s ease infinite;animation:corners 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-loading--corners .vs-loading__load__animation__2,.vs-loading--corners .vs-loading__load__animation__3{display:none}@-webkit-keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}@keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}.vs-loading--border .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.vs-loading--border .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0}.vs-loading--border .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear .2s infinite;animation:rotate 1s linear .2s infinite}.vs-loading--border .vs-loading__load__animation__3{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;-webkit-animation:rotate 1s linear .4s infinite;animation:rotate 1s linear .4s infinite;opacity:.2}.vs-loading--points .vs-loading__load__percent{position:absolute;top:-10px}.vs-loading--points .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto}.vs-loading--points .vs-loading__load__animation__1{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease infinite;animation:points .75s ease infinite}.vs-loading--points .vs-loading__load__animation__2{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .25s infinite;animation:points .75s ease .25s infinite}.vs-loading--points .vs-loading__load__animation__3{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .5s infinite;animation:points .75s ease .5s infinite}@-webkit-keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}.vs-loading--square .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--square .vs-loading__load__animation__1{-webkit-animation:rotateSquare 4s ease infinite;animation:rotateSquare 4s ease infinite}.vs-loading--square .vs-loading__load__animation__1,.vs-loading--square .vs-loading__load__animation__2{position:absolute;width:100%;height:100%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-radius:inherit;top:0}.vs-loading--square .vs-loading__load__animation__2{animation:rotateSquare 4s ease infinite reverse;background:#fff;background:rgba(var(--vs-background),1)}.vs-loading--square .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.vs-loading--gradient .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--gradient .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:0;border-radius:inherit;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0;background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,hsla(0,0%,100%,0)),to(#111214));background:linear-gradient(0deg,hsla(0,0%,100%,0) 33%,#111214);background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,rgba(var(--vs-background),0)),to(rgba(var(--vs-color),1)));background:linear-gradient(0deg,rgba(var(--vs-background),0) 33%,rgba(var(--vs-color),1));border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__2{top:2px;position:absolute;width:calc(100% - 4px);height:calc(100% - 4px);border:0;border-radius:inherit;background:#fff;background:rgba(var(--vs-background),1);border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__3{display:none}.vs-loading--rectangle .vs-loading__load__percent{position:absolute;bottom:-2px}.vs-loading--rectangle .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--rectangle .vs-loading__load__animation__1{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease infinite;animation:rectangle 1s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--rectangle .vs-loading__load__animation__2{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease-out infinite;animation:rectangle 1s ease-out infinite;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading--rectangle .vs-loading__load__animation__3{display:none}@-webkit-keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}@keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}.vs-loading--circles .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--circles .vs-loading__load__animation__1{position:absolute;width:40px;height:40px;-webkit-animation:rotate 1s ease infinite;animation:rotate 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__2{position:absolute;width:50px;height:50px;-webkit-animation:rotate 1s ease-in-out infinite;animation:rotate 1s ease-in-out infinite;border-radius:50%;border:2px dashed #111214;border:2px dashed rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__3{position:absolute;width:60px;height:60px;animation:rotate 1s linear infinite reverse;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--square-rotate .vs-loading__load__percent{position:absolute;bottom:30px}.vs-loading--square-rotate .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--square-rotate .vs-loading__load__animation__1{position:absolute;width:25px;height:25px;-webkit-animation:squareRotate 3s ease infinite;animation:squareRotate 3s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--square-rotate .vs-loading__load__animation__2,.vs-loading--square-rotate .vs-loading__load__animation__3{display:none}@-webkit-keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}.vs-loading--scale .vs-loading__load__percent{position:absolute;bottom:40px}.vs-loading--scale .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px;height:40px}.vs-loading--scale .vs-loading__load__animation__1{-webkit-animation:scale .8s ease infinite;animation:scale .8s ease infinite}.vs-loading--scale .vs-loading__load__animation__1,.vs-loading--scale .vs-loading__load__animation__2{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;border-radius:5px}.vs-loading--scale .vs-loading__load__animation__2{-webkit-animation:scale .8s ease .2s infinite;animation:scale .8s ease .2s infinite}.vs-loading--scale .vs-loading__load__animation__3{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;-webkit-animation:scale .8s ease .4s infinite;animation:scale .8s ease .4s infinite;border-radius:5px}@-webkit-keyframes scale{50%{height:25px}0%{height:5px}}@keyframes scale{50%{height:25px}0%{height:5px}}.notification-enter-active{-webkit-transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s}.notification-leave-to{max-height:0!important;padding-top:0!important;padding-bottom:0!important;margin-top:0!important;margin-bottom:0!important;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;opacity:0!important}.notification-enter,.notification-leave-to{-webkit-clip-path:circle(0 at 80% 35%)!important;clip-path:circle(0 at 80% 35%)!important}.notification-enter{-webkit-transform:translate(25%);transform:translate(25%)}.notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(10%);transform:translate(10%)}.vs-notification-parent{position:fixed;right:0;bottom:0;z-index:200000;-webkit-transition:all 25s ease;transition:all 25s ease;padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-center,.vs-notification-parent--top-right{bottom:auto;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.vs-notification-parent--top-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--top-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--top-center .vs-notification--sticky:last-child{border-radius:0 0 20px 20px;margin-top:-10px}.vs-notification-parent--top-center .vs-notification{-webkit-clip-path:circle(120% at 50% 0);clip-path:circle(120% at 50% 0);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--top-center .vs-notification.vs-notification--border{border:3px solid transparent;border-top:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-center .notification-enter{-webkit-transform:translateY(-25%);transform:translateY(-25%);-webkit-clip-path:circle(0 at 50% 0)!important;clip-path:circle(0 at 50% 0)!important}.vs-notification-parent--top-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}.vs-notification-parent--bottom-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--bottom-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--bottom-center .vs-notification--sticky:last-child{border-radius:20px 20px 0 0;margin-bottom:-10px}.vs-notification-parent--bottom-center .vs-notification{-webkit-clip-path:circle(120% at 50% 100%);clip-path:circle(120% at 50% 100%);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--bottom-center .vs-notification.vs-notification--border{border:3px solid transparent;border-bottom:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-center .notification-enter{-webkit-transform:translateY(25%);transform:translateY(25%);-webkit-clip-path:circle(0 at 50% 100%)!important;clip-path:circle(0 at 50% 100%)!important}.vs-notification-parent--bottom-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(10%);transform:translateY(10%)}.vs-notification-parent--top-left{bottom:auto;top:0;left:0;right:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--top-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--top-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--top-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification-parent--bottom-left{left:0;right:auto}.vs-notification-parent--bottom-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--bottom-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--bottom-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--bottom-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification{--vs-color:var(--vs-background);--vs-border:var(--vs-background);--vs-opacity:.6;position:relative;max-width:340px;width:100%;height:auto;border-radius:20px;-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 30px -5px rgba(0,0,0,.05);box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));overflow:hidden;-webkit-clip-path:circle(145% at 100% 50%);clip-path:circle(145% at 100% 50%);background:#111214;background:rgba(var(--vs-color),1);color:#2c3e50;color:rgba(var(--vs-text),1);margin:3px 10px;-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s}.vs-notification:hover:not(.vs-notification--flat){-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-notification--notPadding{padding:0!important}.vs-notification.vs-notification--icon{padding-left:50px!important}.vs-notification.vs-notification--loading{width:100px!important;max-height:100px!important;min-height:100px!important;padding:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification--width-auto{width:auto;max-width:none}.vs-notification--width-all{max-width:calc(100vw - 50px);width:calc(100vw - 50px)}.vs-notification--square{border-radius:0!important}.vs-notification--sticky{margin-right:0;margin-bottom:0;border-radius:20px 0 0 20px}.vs-notification--flat{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));background:#fff;background:rgba(var(--vs-background),1);color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat:hover:after{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-notification--flat .vs-notification__progress{background:#111214;background:rgba(var(--vs-color),1)}.vs-notification--flat .vs-notification__close{--vs-color:inherit}.vs-notification--flat .vs-notification__content{color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat.vs-notification--border{border:0 solid transparent!important;border-right:3px solid rgba(var(--vs-border),1)!important}.vs-notification--flat:after{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);width:100%;height:100%;border-radius:inherit;position:absolute;top:0;left:0;z-index:-1;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification.vs-notification--onClick{cursor:pointer}.vs-notification.vs-notification--color:not(.vs-notification--flat){color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__progress{background:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__close{--vs-color:255,255,255}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:after{border:2px solid transparent;border-bottom-color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:before{border:2px solid transparent;border-bottom:2px dashed #fff}.vs-notification.vs-notification--border{border:3px solid transparent;border-right:3px solid rgba(var(--vs-border),1)}.vs-notification__progress{width:0;height:3px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;bottom:0;left:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification__loading{width:50px;height:50px;border-radius:50%;position:absolute}.vs-notification__loading:after{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;border:2px solid #2c3e50;border:2px solid rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s ease infinite;animation:loadingNoti .8s ease infinite;top:0;content:\"\"}.vs-notification__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;top:0;position:absolute;width:100%;height:100%;border:2px dashed #2c3e50;border:2px dashed rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s linear infinite;animation:loadingNoti .8s linear infinite;opacity:.2;content:\"\"}.vs-notification__close{--vs-color:var(--vs-text);position:absolute;border:0;background:transparent;top:2px;right:2px;-webkit-transform:scale(.75);transform:scale(.75);padding:0}.vs-notification__icon{position:absolute;top:calc(50% - 22px);background:transparent;width:45px;height:45px;left:2px;border-radius:0 35% 35% 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification__icon i{font-size:1.2rem}.vs-notification__content{position:relative;width:auto;height:auto;-webkit-transition:all .25s ease .2s;transition:all .25s ease .2s;opacity:1}.vs-notification__content__text{width:100%}.vs-notification__content__text p{margin:0;padding:0;font-size:.75rem;line-height:1rem}.vs-notification__content__header{width:100%;margin:0;padding:0 0 6px}.vs-notification__content__header h4{width:100%;margin:0;padding:0;font-size:.9rem}.darken .vs-notification--dark{color:#fff!important}.darken .vs-notification--dark .vs-notification__close{--vs-color:255,255,255!important}.darken .vs-notification--dark h4,.darken .vs-notification--dark p{color:#fff!important}@-webkit-keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes progressNoti{0%{width:0}to{width:100%}}@keyframes progressNoti{0%{width:0}to{width:100%}}@media (max-width:600px){.vs-notification{margin:3px 0!important;border-radius:0!important;width:100%!important;max-width:100%!important;min-width:100%!important}.vs-notification:hover{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-notification:last-child{margin-bottom:0!important}.vs-notification-parent{padding:0;width:100%!important;max-width:100%!important}.vs-notification-parent .vs-notification--sticky{margin-bottom:0!important}.vs-notification-parent.vs-notification-parent--top-center .vs-notification:last-child{margin-bottom:3px;margin-top:0!important}}.vs-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.vs-col,.vs-row{width:100%;position:relative}.vs-col--w-1{width:8.33%}.vs-col--w-2{width:16.66%}.vs-col--w-3{width:25%}.vs-col--w-4{width:33.33%}.vs-col--w-5{width:41.66%}.vs-col--w-6{width:50%}.vs-col--w-7{width:58.33%}.vs-col--w-8{width:66.66%}.vs-col--w-9{width:75%}.vs-col--w-10{width:83.33%}.vs-col--w-11{width:91.66%}.vs-col--w-12{width:100%}.vs-col--offset-1{margin-left:8.33%}.vs-col--offset-2{margin-left:16.66%}.vs-col--offset-3{margin-left:25%}.vs-col--offset-4{margin-left:33.33%}.vs-col--offset-5{margin-left:41.66%}.vs-col--offset-6{margin-left:50%}.vs-col--offset-7{margin-left:58.33%}.vs-col--offset-8{margin-left:66.66%}.vs-col--offset-9{margin-left:75%}.vs-col--offset-10{margin-left:83.33%}.vs-col--offset-11{margin-left:91.66%}.vs-col--offset-12{margin-left:100%}.vs-col--lg-1{width:8.33%}.vs-col--lg-2{width:16.66%}.vs-col--lg-3{width:25%}.vs-col--lg-4{width:33.33%}.vs-col--lg-5{width:41.66%}.vs-col--lg-6{width:50%}.vs-col--lg-7{width:58.33%}.vs-col--lg-8{width:66.66%}.vs-col--lg-9{width:75%}.vs-col--lg-10{width:83.33%}.vs-col--lg-11{width:91.66%}.vs-col--lg-12{width:100%}@media (max-width:900px){.vs-col--sm-1{width:8.33%}.vs-col--sm-2{width:16.66%}.vs-col--sm-3{width:25%}.vs-col--sm-4{width:33.33%}.vs-col--sm-5{width:41.66%}.vs-col--sm-6{width:50%}.vs-col--sm-7{width:58.33%}.vs-col--sm-8{width:66.66%}.vs-col--sm-9{width:75%}.vs-col--sm-10{width:83.33%}.vs-col--sm-11{width:91.66%}.vs-col--sm-12{width:100%}}@media (max-width:600px){.vs-col--xs-1{width:8.33%}.vs-col--xs-2{width:16.66%}.vs-col--xs-3{width:25%}.vs-col--xs-4{width:33.33%}.vs-col--xs-5{width:41.66%}.vs-col--xs-6{width:50%}.vs-col--xs-7{width:58.33%}.vs-col--xs-8{width:66.66%}.vs-col--xs-9{width:75%}.vs-col--xs-10{width:83.33%}.vs-col--xs-11{width:91.66%}.vs-col--xs-12{width:100%}}:root{--vs-shadow-opacity:.05;--vs-radius:20px;--vs-zindex-1:100000;--vs-zindex-2:99000;--vs-zindex-3:98000;--vs-zindex-4:97000;--vs-background-opacity:.2}[vs-theme=dark]{--vs-background:30,32,35;--vs-text:255,255,255;--vs-gray-1:24,25,28;--vs-gray-2:20,20,23;--vs-gray-3:15,16,19;--vs-gray-4:10,11,14;--vs-shadow-opacity:.3;--vs-dark:0,0,0;--vs-background-opacity:.6}[vs-theme=dark] .vs-pagination-content.vs-component-dark .vs-pagination__active{--vs-color:255,255,255;color:#f0f3f4;color:rgba(var(--vs-gray-3),1)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent:hover:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),var(--vs-background-opacity))}[vs-theme=dark] .vs-ripple,[vs-theme=dark] .vs-ripple-content,[vs-theme=dark] .vs-ripple-invert{--vs-color:0,0,0}[vs-theme=dark] .vs-loading{--vs-background:0,0,0}[vs-theme=dark] .vs-input-parent--state-dark{--vs-dark:255,255,255!important}[vs-theme=dark] .vs-input-parent--state-dark .vs-input{background:#000!important}[vs-theme=dark] .vs-component-dark{--vs-color:0,0,0!important}[vs-theme=dark] .vs-component-dark .vs-avatar{color:#fff!important}[vs-theme=dark] .vs-component-dark.vs-alert{--vs-color:0,0,0!important;background:#111214!important;background:rgba(var(--vs-color),1)!important;color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}button{cursor:pointer;outline:none}[disabled]{opacity:.6}input{outline:none}a,button,input,select,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}[class*=vs-]{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;list-style:none}:root{--vs-primary:25,91,255;--vs-warn:255,186,0;--vs-danger:255,71,87;--vs-success:70,201,58;--vs-dark:30,30,30;--vs-light:244,247,248;--vs-color:17,18,20;--vs-facebook:59,89,153;--vs-twitter:29,161,242;--vs-youtube:255,0,0;--vs-pinterest:189,8,28;--vs-linkedin:0,119,181;--vs-snapchat:255,252,0;--vs-whatsapp:37,211,102;--vs-tumblr:54,70,93;--vs-reddit:255,69,0;--vs-spotify:30,215,96;--vs-amazon:255,153,0;--vs-medium:2,184,117;--vs-vimeo:26,183,234;--vs-skype:0,175,240;--vs-dribbble:234,76,137;--vs-slack:74,21,75;--vs-yahoo:67,2,151;--vs-twitch:100,65,164;--vs-discord:114,137,218;--vs-telegram:0,136,204;--vs-google-plus:219,68,55;--vs-messenger:0,132,255;--vs-background:255,255,255;--vs-text:44,62,80;--vs-gray-1:249,252,253;--vs-gray-2:244,247,248;--vs-gray-3:240,243,244;--vs-gray-4:230,233,234}.vs-ripple-content{--vs-color:var(--vs-background);width:100px;height:100px;position:absolute;width:100%;pointer-events:none;overflow:hidden;height:100%;top:0;right:0;border-radius:inherit;z-index:-1}.vs-ripple-content .vs-ripple{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background:radial-gradient(circle,rgba(17,18,20,.05),rgba(17,18,20,.6));background:radial-gradient(circle,rgba(var(--vs-color),.05),rgba(var(--vs-color),.6))}.vs-ripple-content .vs-ripple--solid{background:#111214;background:rgba(var(--vs-color),1);opacity:1}.vs-ripple-content .vs-ripple-invert{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background-image:radial-gradient(circle,rgba(17,18,20,.5),rgba(17,18,20,0));background-image:radial-gradient(circle,rgba(var(--vs-color),.5),rgba(var(--vs-color),0))}.vs-ripple-content .vs-ripple-cut-1{-webkit-transform:translate(-100%,-50%) skew(20deg);transform:translate(-100%,-50%) skew(20deg);background-image:-webkit-gradient(linear,right top,left top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(270deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-ripple-content .vs-ripple-cut-1,.vs-ripple-content .vs-ripple-cut-2{width:0;height:0;opacity:0;position:absolute;-webkit-transition:all .6s ease;transition:all .6s ease}.vs-ripple-content .vs-ripple-cut-2{-webkit-transform:translateY(-50%) skew(20deg);transform:translateY(-50%) skew(20deg);background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-remove-transition *,.vs-remove-transition :after,.vs-remove-transition :before{-webkit-transition:all 0s!important;transition:all 0s!important}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8zMzMiIiK0tLQoKCj4+PiJiYkZGRktLS3e3t4cHBwlJSX8/PxfX1+FhYXT09Px8fETExPCwsLl5eVlZWXr6+ulpaXKyspubm5QUFA9PT13d3eVlZVXV1ednZ0AAAAHnR2yAAACjUlEQVR4nO3djW6bMBSG4UIYOEBJDUman269/7tc1qUdmZS0ouezTfQ+N3D6qgFHlmI/PAAAAAAAAAAAAAAAAAAA3gyLcv1o6OdT7KJLz3ufF85SnVTh09q7zFieUuGyLqz70ioccvu+pApbZ/4JTaywaxSBCRUOXhKYUGEpeMukVSgKTKdwqO69sJcsFSkVLsaFLrfjUyxsFu0PO7HL3o0L80Xsv0aBwvmjcP4onD8K54/C+ftS4Wa5srGM8HX888J+5+qqtlHlWbdMrLA/1LZbcYVfb1IqPAr2qVwV9Hm/XbjX7DT6bSqFj6ptKt+nUfirFgWeEsO9VG8UbkR7xX8UuxQKVXvFb3ywReN6YasMzIoyfuFKtVd8Fr9wq1kp3lWh1v3rhRePoSssjL8d1c9JFbpj2X1fuXbXhkUvrAbxMKEvFtq82ymUoJBCo2FCFFJoNEyIQgqNhglRSKHRMCEKKTQaJkQhhUbDhCik0GiYEIUUGg0TopBCo2FCFFJoNEyIQgqNhglRSKHRMCEKKTQaJkQhhUbDhCik0GiYEIUUGg0TopBCo2FCFFJoNEyIQgqNhglReAeF/t/PA/1dFq668kN38aPHeym8jsIJKAyMwgkoDIzCCSgMjMIJKAyMwgkoDIzCCSgMjMIJKAyMwgkoDGxcWK8sbi9pF02yhVlhcvfM+FTBBApftCdD1gEP2r1i/NAIGD3a36G6kO2sid13clAGFl3svJOt8mMa7hzhG1rJzY9/BTwL+pZe9yRWidxZ9qI6LNmHOmL3U53mv/gafy38sLW/KDhrslXsrLFh5xvDSFfU+UsbO+o/m+364Bob2f7Yp9Z31tqInQEAAAAAAAAAAAAAAABgTn4Dk2xMMPsKBEEAAAAASUVORK5CYII="

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(38);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(39);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "baseUrl": "http://cdn.resultonlinebd.com",
        "channelUrl": "http://cdn.resultonlinebd.com/channel_Dataapi?search=",
        "channelPagination": "http://cdn.resultonlinebd.com/channel_Dataapi?page=",
        "channelMainTag": "http://cdn.resultonlinebd.com/tagmanager?search="
      }
    }; // Only set once

    if (false) {}

    if (false) {}

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(40);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(30);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(26);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _21b262ed = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/index */ 6).then(__webpack_require__.bind(null, 225)));

const _755794dc = () => interopDefault(__webpack_require__.e(/* import() | pages/favourite/index */ 16).then(__webpack_require__.bind(null, 226)));

const _4e28c2d6 = () => interopDefault(__webpack_require__.e(/* import() | pages/high-rated/index */ 17).then(__webpack_require__.bind(null, 227)));

const _1db71e4a = () => interopDefault(__webpack_require__.e(/* import() | pages/qAnda/index */ 21).then(__webpack_require__.bind(null, 228)));

const _2a116331 = () => interopDefault(__webpack_require__.e(/* import() | pages/t/index */ 23).then(__webpack_require__.bind(null, 229)));

const _443398f0 = () => interopDefault(__webpack_require__.e(/* import() | pages/top/index */ 25).then(__webpack_require__.bind(null, 230)));

const _31c30890 = () => interopDefault(__webpack_require__.e(/* import() | pages/u/index */ 26).then(__webpack_require__.bind(null, 231)));

const _9bffe8da = () => interopDefault(__webpack_require__.e(/* import() | pages/channel/celebrity */ 7).then(__webpack_require__.bind(null, 232)));

const _5662d1ed = () => interopDefault(__webpack_require__.e(/* import() | pages/channel/designlibrary */ 8).then(__webpack_require__.bind(null, 233)));

const _2f593daf = () => interopDefault(__webpack_require__.e(/* import() | pages/channel/gaming */ 9).then(__webpack_require__.bind(null, 234)));

const _3f242d5c = () => interopDefault(__webpack_require__.e(/* import() | pages/channel/health */ 10).then(__webpack_require__.bind(null, 235)));

const _2ef1f3c4 = () => interopDefault(__webpack_require__.e(/* import() | pages/channel/history */ 11).then(__webpack_require__.bind(null, 236)));

const _eac5aebc = () => interopDefault(__webpack_require__.e(/* import() | pages/channel/mobile */ 12).then(__webpack_require__.bind(null, 237)));

const _7a9a8cee = () => interopDefault(__webpack_require__.e(/* import() | pages/channel/programming */ 13).then(__webpack_require__.bind(null, 238)));

const _5b8737e8 = () => interopDefault(__webpack_require__.e(/* import() | pages/channel/technology */ 14).then(__webpack_require__.bind(null, 239)));

const _b841da5e = () => interopDefault(__webpack_require__.e(/* import() | pages/allBlogPost/_blogPost */ 2).then(__webpack_require__.bind(null, 240)));

const _45ed775d = () => interopDefault(__webpack_require__.e(/* import() | pages/allQandA/_qaSlug */ 3).then(__webpack_require__.bind(null, 241)));

const _c68158ec = () => interopDefault(__webpack_require__.e(/* import() | pages/authorProfile/_authorName */ 4).then(__webpack_require__.bind(null, 242)));

const _1c411206 = () => interopDefault(__webpack_require__.e(/* import() | pages/b/_blogSlug */ 5).then(__webpack_require__.bind(null, 243)));

const _50f34196 = () => interopDefault(__webpack_require__.e(/* import() | pages/detailPost/_slug */ 15).then(__webpack_require__.bind(null, 244)));

const _1b018760 = () => interopDefault(__webpack_require__.e(/* import() | pages/m/_slug */ 19).then(__webpack_require__.bind(null, 245)));

const _cd836bfc = () => interopDefault(__webpack_require__.e(/* import() | pages/q/_qadetail */ 20).then(__webpack_require__.bind(null, 246)));

const _1531f1ca = () => interopDefault(__webpack_require__.e(/* import() | pages/search/_key */ 22).then(__webpack_require__.bind(null, 247)));

const _4d0ed921 = () => interopDefault(__webpack_require__.e(/* import() | pages/tagPage/_tag */ 24).then(__webpack_require__.bind(null, 248)));

const _0abf370f = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 18).then(__webpack_require__.bind(null, 249)));

const _090895c7 = () => interopDefault(__webpack_require__.e(/* import() | pages/_slug */ 1).then(__webpack_require__.bind(null, 250))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/blog",
    component: _21b262ed,
    name: "blog"
  }, {
    path: "/favourite",
    component: _755794dc,
    name: "favourite"
  }, {
    path: "/high-rated",
    component: _4e28c2d6,
    name: "high-rated"
  }, {
    path: "/qAnda",
    component: _1db71e4a,
    name: "qAnda"
  }, {
    path: "/t",
    component: _2a116331,
    name: "t"
  }, {
    path: "/top",
    component: _443398f0,
    name: "top"
  }, {
    path: "/u",
    component: _31c30890,
    name: "u"
  }, {
    path: "/channel/celebrity",
    component: _9bffe8da,
    name: "channel-celebrity"
  }, {
    path: "/channel/designlibrary",
    component: _5662d1ed,
    name: "channel-designlibrary"
  }, {
    path: "/channel/gaming",
    component: _2f593daf,
    name: "channel-gaming"
  }, {
    path: "/channel/health",
    component: _3f242d5c,
    name: "channel-health"
  }, {
    path: "/channel/history",
    component: _2ef1f3c4,
    name: "channel-history"
  }, {
    path: "/channel/mobile",
    component: _eac5aebc,
    name: "channel-mobile"
  }, {
    path: "/channel/programming",
    component: _7a9a8cee,
    name: "channel-programming"
  }, {
    path: "/channel/technology",
    component: _5b8737e8,
    name: "channel-technology"
  }, {
    path: "/allBlogPost/:blogPost?",
    component: _b841da5e,
    name: "allBlogPost-blogPost"
  }, {
    path: "/allQandA/:qaSlug?",
    component: _45ed775d,
    name: "allQandA-qaSlug"
  }, {
    path: "/authorProfile/:authorName?",
    component: _c68158ec,
    name: "authorProfile-authorName"
  }, {
    path: "/b/:blogSlug?",
    component: _1c411206,
    name: "b-blogSlug"
  }, {
    path: "/detailPost/:slug?",
    component: _50f34196,
    name: "detailPost-slug"
  }, {
    path: "/m/:slug?",
    component: _1b018760,
    name: "m-slug"
  }, {
    path: "/q/:qadetail?",
    component: _cd836bfc,
    name: "q-qadetail"
  }, {
    path: "/search/:key?",
    component: _1531f1ca,
    name: "search-key"
  }, {
    path: "/tagPage/:tag?",
    component: _4d0ed921,
    name: "tagPage-tag"
  }, {
    path: "/",
    component: _0abf370f,
    name: "index"
  }, {
    path: "/:slug",
    component: _090895c7,
    name: "slug"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=5b03355e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center"},[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <h4 class=\"title\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.message)+"\n  ")+"</h4> "),_vm._ssrNode("<h3>","</h3>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n      Return to homepage\n    ")])],1),_vm._ssrNode(" "),(_vm.statusCode === 404)?_vm._ssrNode("<p>","</p>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n      Return to homepage\n    ")])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=5b03355e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  head() {
    return {
      title: this.message
    };
  },

  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message;
    }

  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "db33e60e"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "9bd29a5e"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(53);

// EXTERNAL MODULE: ./assets/user/styles/main.css
var main = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=717d53f3&scoped=true&
var defaultvue_type_template_id_717d53f3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NavBar'),_vm._ssrNode(" "),_c('b-container',{staticClass:"my-custome-container"},[_c('nuxt',{attrs:{"keep-alive":""}})],1)],2)}
var defaultvue_type_template_id_717d53f3_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=717d53f3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_717d53f3_scoped_true_render,
  defaultvue_type_template_id_717d53f3_scoped_true_staticRenderFns,
  false,
  default_injectStyles,
  "717d53f3",
  "0996cb1c"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/detail.vue?vue&type=template&id=610128cf&scoped=true&
var detailvue_type_template_id_610128cf_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NavBar'),_vm._ssrNode(" "),_c('b-container',{staticClass:"my-custome-container"},[_c('nuxt')],1),_vm._ssrNode(" "),_c('BottomFooter')],2)}
var detailvue_type_template_id_610128cf_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/detail.vue?vue&type=template&id=610128cf&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/detail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var detailvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/detail.vue



function detail_injectStyles (context) {
  
  
}

/* normalize component */

var detail_component = Object(componentNormalizer["a" /* default */])(
  layouts_detailvue_type_script_lang_js_,
  detailvue_type_template_id_610128cf_scoped_true_render,
  detailvue_type_template_id_610128cf_scoped_true_staticRenderFns,
  false,
  detail_injectStyles,
  "610128cf",
  "1db0f930"
  
)

/* harmony default export */ var detail = (detail_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/notKeepAlive.vue?vue&type=template&id=1c98f01a&scoped=true&
var notKeepAlivevue_type_template_id_1c98f01a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NavBar'),_vm._ssrNode(" "),_c('b-container',[_c('nuxt')],1)],2)}
var notKeepAlivevue_type_template_id_1c98f01a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/notKeepAlive.vue?vue&type=template&id=1c98f01a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/notKeepAlive.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var notKeepAlivevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/notKeepAlive.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_notKeepAlivevue_type_script_lang_js_ = (notKeepAlivevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/notKeepAlive.vue



function notKeepAlive_injectStyles (context) {
  
  
}

/* normalize component */

var notKeepAlive_component = Object(componentNormalizer["a" /* default */])(
  layouts_notKeepAlivevue_type_script_lang_js_,
  notKeepAlivevue_type_template_id_1c98f01a_scoped_true_render,
  notKeepAlivevue_type_template_id_1c98f01a_scoped_true_staticRenderFns,
  false,
  notKeepAlive_injectStyles,
  "1c98f01a",
  "4a270f58"
  
)

/* harmony default export */ var notKeepAlive = (notKeepAlive_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js










const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_detail": sanitizeComponent(detail),
  "_notKeepAlive": sanitizeComponent(notKeepAlive)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(57), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(46), 'authorProfile.js');
  resolveStoreModules(__webpack_require__(58), 'celebrity.js');
  resolveStoreModules(__webpack_require__(59), 'countView.js');
  resolveStoreModules(__webpack_require__(60), 'designlibrary.js');
  resolveStoreModules(__webpack_require__(61), 'detailPage.js');
  resolveStoreModules(__webpack_require__(62), 'gaming.js');
  resolveStoreModules(__webpack_require__(63), 'health.js');
  resolveStoreModules(__webpack_require__(64), 'highRated.js');
  resolveStoreModules(__webpack_require__(65), 'history.js');
  resolveStoreModules(__webpack_require__(66), 'home.js');
  resolveStoreModules(__webpack_require__(67), 'mobile.js');
  resolveStoreModules(__webpack_require__(68), 'mobileDetailPage.js');
  resolveStoreModules(__webpack_require__(69), 'programming.js');
  resolveStoreModules(__webpack_require__(70), 'technology.js');
  resolveStoreModules(__webpack_require__(71), 'top.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(31);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
external_vue_default.a.use(external_bootstrap_vue_["BootstrapVueIcons"]);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(41);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/NavBar.vue?vue&type=template&id=580a52b4&scoped=true&
var NavBarvue_type_template_id_580a52b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-navbar"},[_c('b-navbar',{staticClass:"fixed-top dekstop-nav",attrs:{"type":"dark","id":"my-nav"}},[_c('b-container',[_c('b-navbar-brand',{staticClass:"brand-logo",attrs:{"to":"/"}},[_c('b-img',{staticClass:"logo",attrs:{"itemprop":"image","alt":"result online bd logo","src":__webpack_require__(33)}})],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"nav-collapse","is-nav":""}},[_c('div',{staticClass:"d-flex w-100 justify-content-center"},[_c('div',{staticClass:"w-75"},[_c('form',{on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.searchinfo($event)}}},[_c('autocomplete',{attrs:{"search":_vm.searchData,"placeholder":"Search Here...","get-result-value":_vm.getResultValue},on:{"submit":_vm.handleSubmit}})],1)]),_vm._v(" "),_c('div',{staticClass:"btn icon-button",on:{"click":_vm.searchinfo}},[_c('b-icon',{attrs:{"icon":"search","variant":"light"}})],1)]),_vm._v(" "),_c('b-navbar-nav',{staticClass:"mr-4"},[_c('b-img',{staticClass:"rounded",staticStyle:{"cursor":"pointer"},attrs:{"height":"25","width":"25","alt":"right menu logo","src":__webpack_require__(34)},on:{"click":_vm.showRightMenu}})],1)],1),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-end "},[(_vm.showRightMenuCard)?_c('div',{staticClass:"right-menu text-right"},[_c('p',[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._v(" "),_c('p',{on:{"click":_vm.commingSoon}},[_vm._v("QandA")]),_vm._v(" "),_c('p',{on:{"click":_vm.commingSoon}},[_vm._v("Blog")]),_vm._v(" "),_c('p',[_c('nuxt-link',{attrs:{"to":"/favourite"}},[_vm._v(" Favourite")])],1)]):_vm._e()])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div type=\"dark\" id=\"my-nav\" class=\"fixed-top  mobile-nav\" data-v-580a52b4>","</div>",[_vm._ssrNode("<div class=\"d-flex align-items-center justify-content-between\" data-v-580a52b4>","</div>",[_vm._ssrNode("<div data-v-580a52b4>","</div>",[(_vm.show)?_c('b-navbar-toggle',{attrs:{"target":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var expanded = ref.expanded;
return [_c('nuxt-link',{attrs:{"to":"/u"}},[_c('b-img',{staticClass:"rounded",staticStyle:{"cursor":"pointer"},attrs:{"height":"20","width":"20","alt":"right menu","src":__webpack_require__(34)}})],1)]}}],null,false,2084684469)}):_vm._e()],1),_vm._ssrNode(" "),(_vm.show)?_vm._ssrNode("<div class=\"brand-logo-sm-device \" data-v-580a52b4>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('b-img',{staticClass:"mobile-logo",attrs:{"itemprop":"image","alt":"result online bd logo","src":__webpack_require__(33)}})],1)],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-580a52b4>","</div>",[(_vm.show)?_c('b-icon',{staticClass:"mr-3",staticStyle:{"height":"17px","width":"17px"},attrs:{"icon":"search","variant":"light"},on:{"click":function($event){_vm.show = false}}}):_vm._e()],1)],2),_vm._ssrNode(" "),(!_vm.show)?_vm._ssrNode("<div class=\"d-flex w-100 pl-2 pr-2 pt-1\" data-v-580a52b4>","</div>",[_vm._ssrNode("<div class=\"w-100\" data-v-580a52b4>","</div>",[_vm._ssrNode("<form data-v-580a52b4>","</form>",[_c('autocomplete',{attrs:{"search":_vm.searchData,"placeholder":"Search Here...","get-result-value":_vm.getResultValue},on:{"submit":_vm.handleSubmit}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"btn icon-button\" data-v-580a52b4>","</div>",[_c('b-icon',{attrs:{"icon":"search","variant":"light"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pl-2 pt-1\" data-v-580a52b4>","</div>",[_c('b-icon',{staticClass:"h4",attrs:{"variant":"light","icon":"x"},on:{"click":_vm.customMethod}})],1)],2):_vm._e()],2)],2)}
var NavBarvue_type_template_id_580a52b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/NavBar.vue?vue&type=template&id=580a52b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/NavBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NavBarvue_type_script_lang_js_ = ({
  name: "NavBar",

  data() {
    return {
      keyword: "",
      show: true,
      countries: [],
      suggested: "",
      showRightMenuCard: false,
      toogle: false
    };
  },

  methods: {
    showRightMenu() {
      this.toogle = !this.toogle;

      if (this.toogle) {
        // console.log("show");
        this.showRightMenuCard = true;
      } else if (!this.toogle) {
        // console.log("hide");
        this.showRightMenuCard = false;
      }
    },

    commingSoon() {
      const noti = this.$vs.notification({
        duration: 4000,
        color: "#4a5153",
        progress: "auto",
        title: "Comming Soon",
        text: "This section is now under construct.We will launch it very soon!"
      });
    },

    searchinfo() {
      if (this.keyword != "") {
        this.$router.push("/search/" + this.keyword);
      }
    },

    customMethod() {
      this.show = true; // this.showSearch = true;
    },

    searchData(input) {
      return new Promise(resolve => {
        if (input.length < 2) {
          return resolve([]);
        }

        fetch("http://cdn.resultonlinebd.com" + "/serach/" + input).then(response => response.json()).then(data => {
          resolve(data.results);
        }).catch(e => console.log());
        this.keyword = input;
      });
    },

    getResultValue(result) {
      return result.title;
    },

    handleSubmit(result) {
      event.preventDefault();

      try {
        this.$router.push("/search/" + result.title);
      } catch (error) {
        console.log(this.keyword);
        this.$router.push("/search/" + this.keyword);
      }
    }

  },
  computed: {// showSearch() {
    //   if (this.show == false) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  },

  mounted() {}

});
// CONCATENATED MODULE: ./components/user/NavBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_NavBarvue_type_script_lang_js_ = (NavBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/NavBar.vue



function NavBar_injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var NavBar_component = Object(componentNormalizer["a" /* default */])(
  user_NavBarvue_type_script_lang_js_,
  NavBarvue_type_template_id_580a52b4_scoped_true_render,
  NavBarvue_type_template_id_580a52b4_scoped_true_staticRenderFns,
  false,
  NavBar_injectStyles,
  "580a52b4",
  "3ab67a27"
  
)

/* harmony default export */ var NavBar = (NavBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/Carousel.vue?vue&type=template&id=8034ace6&scoped=true&
var Carouselvue_type_template_id_8034ace6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"myCarousel"},[(_vm.loadingImg)?_c('b-row',{staticClass:"pt-2 car-img"},[_c('b-col',{attrs:{"cols":"12","sm":"12","md":"12","lg":"12","xl":"12"}},[_c('vue-content-loading',{attrs:{"width":300,"height":65}},[_c('rect',{attrs:{"x":"0","y":"0","rx":"0","ry":"0","width":"300","height":"60"}})])],1)],1):_c('b-carousel',{attrs:{"id":"carousel-1","interval":4000,"controls":"","indicators":"","background":"#fafafa","img-width":"1024"},on:{"sliding-start":_vm.onSlideStart,"sliding-end":_vm.onSlideEnd},model:{value:(_vm.slide),callback:function ($$v) {_vm.slide=$$v},expression:"slide"}},_vm._l((_vm.data),function(i,index){return _c('b-carousel-slide',{key:index,staticClass:"cover-img",attrs:{"img-src":i.Cover_img,"img-alt":i.title,"img-width":"1024"}},[_c('a',{staticClass:"c-txt-link",attrs:{"href":i.url}},[_c('div',{staticClass:"c-txt"},[_vm._v("\n          "+_vm._s(i.title)+"\n        ")])])])}),1)],1)}
var Carouselvue_type_template_id_8034ace6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/Carousel.vue?vue&type=template&id=8034ace6&scoped=true&

// EXTERNAL MODULE: external "vue-content-loading"
var external_vue_content_loading_ = __webpack_require__(5);
var external_vue_content_loading_default = /*#__PURE__*/__webpack_require__.n(external_vue_content_loading_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/Carousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({
  components: {
    VueContentLoading: external_vue_content_loading_default.a
  },
  name: "Carousel",

  data() {
    return {
      slide: 0,
      sliding: null,
      data: [],
      loadingImg: true
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },

    onSlideEnd(slide) {
      this.sliding = false;
    }

  },

  async mounted() {// await this.$axios
    //   .$get(process.env.baseUrl + `/Coverimgapi`)
    //   .then(posts => (this.data = posts));
    // this.loadingImg = false;
  }

});
// CONCATENATED MODULE: ./components/user/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/Carousel.vue



function Carousel_injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Carousel_component = Object(componentNormalizer["a" /* default */])(
  user_Carouselvue_type_script_lang_js_,
  Carouselvue_type_template_id_8034ace6_scoped_true_render,
  Carouselvue_type_template_id_8034ace6_scoped_true_staticRenderFns,
  false,
  Carousel_injectStyles,
  "8034ace6",
  "00eb93d7"
  
)

/* harmony default export */ var Carousel = (Carousel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/Breadcrumb.vue?vue&type=template&id=677f05fc&scoped=true&
var Breadcrumbvue_type_template_id_677f05fc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumbs py-md-3 py-lg-3 py-xl-3 "},[_vm._ssrNode("<div class=\"d-flex justify-content-center\" data-v-677f05fc>","</div>",[_vm._ssrNode("<div variant=\"outline-dark\""+(_vm._ssrClass("b-button btn btn-outline-dark d-flex",{ active: _vm.allActive }))+" data-v-677f05fc>","</div>",[_c('b-img',{staticClass:"rounded",attrs:{"alt":"logo of all catagory articles","height":"20","width":"20","src":__webpack_require__(76)}}),_vm._ssrNode(" <span class=\"mx-md-2 mx-lg-2 mx-xl-2\" data-v-677f05fc>ALL</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("b-button ml-2 btn btn-outline-dark d-flex",{ active: _vm.topActive }))+" data-v-677f05fc>","</div>",[_c('b-img',{staticClass:"rounded",attrs:{"alt":"logo of top articles","height":"20","width":"20","src":__webpack_require__(77)}}),_vm._ssrNode("<span class=\"mx-md-2 mx-lg-2 mx-xl-2\" data-v-677f05fc>Top</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("b-button ml-2 btn btn-outline-dark d-flex",{ active: _vm.highRatedActive }))+" data-v-677f05fc>","</div>",[_c('b-img',{staticClass:"rounded",attrs:{"alt":"logo of high rated articles","height":"20","width":"20","src":__webpack_require__(78)}}),_vm._ssrNode(" <p class=\"mx-md-2 mx-lg-2 mx-xl-2\" data-v-677f05fc>High Rated</p>")],2)],2)])}
var Breadcrumbvue_type_template_id_677f05fc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/Breadcrumb.vue?vue&type=template&id=677f05fc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/Breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  name: "Breadcrumb",
  props: {
    allActive: {
      type: Boolean,
      default: false
    },
    topActive: {
      type: Boolean,
      default: false
    },
    highRatedActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  methods: {
    loadAll() {
      this.$router.push("/");
    },

    loadTop() {
      this.$router.push("/top");
    },

    loadhighRated() {
      this.$router.push("/high-rated");
    }

  }
});
// CONCATENATED MODULE: ./components/user/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/Breadcrumb.vue



function Breadcrumb_injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Breadcrumb_component = Object(componentNormalizer["a" /* default */])(
  user_Breadcrumbvue_type_script_lang_js_,
  Breadcrumbvue_type_template_id_677f05fc_scoped_true_render,
  Breadcrumbvue_type_template_id_677f05fc_scoped_true_staticRenderFns,
  false,
  Breadcrumb_injectStyles,
  "677f05fc",
  "1f68458c"
  
)

/* harmony default export */ var Breadcrumb = (Breadcrumb_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/SideBar.vue?vue&type=template&id=6a8abdc3&scoped=true&
var SideBarvue_type_template_id_6a8abdc3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"sideBar mb-4\" data-v-6a8abdc3>","</div>",[_vm._ssrNode("<h5 class=\"text-center chanel\" data-v-6a8abdc3>Channel</h5> "),_c('b-list-group',{staticClass:"list pb-2 px-3",attrs:{"itemscope":"","itemtype":"https://schema.org/LinkRole"}},[_c('b-list-group-item',{staticClass:"d-flex align-items-center mylist",attrs:{"to":"/channel/programming"}},[_c('div',{staticClass:"image-holder"},[_c('b-img',{staticClass:"image-logo",attrs:{"itemprop":"image","alt":"logo of programming channel","src":__webpack_require__(81)}})],1),_vm._v(" "),_c('p',{staticClass:"item-holder",attrs:{"itemprop":"roleName"}},[_vm._v("Programming")])]),_vm._v(" "),_c('b-list-group-item',{staticClass:"d-flex align-items-center mylist",attrs:{"to":"/channel/programming"}},[_c('div',{staticClass:"image-holder"},[_c('b-img',{staticClass:"image-logo",attrs:{"itemprop":"image","alt":"logo of Mobile Phone channel","src":__webpack_require__(82)}})],1),_vm._v(" "),_c('p',{staticClass:"item-holder",attrs:{"itemprop":"roleName"}},[_vm._v("Mobile Phone")])])],1)],2)])}
var SideBarvue_type_template_id_6a8abdc3_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/SideBar.vue?vue&type=template&id=6a8abdc3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/SideBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SideBarvue_type_script_lang_js_ = ({
  name: "SideBar"
});
// CONCATENATED MODULE: ./components/user/SideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_SideBarvue_type_script_lang_js_ = (SideBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/SideBar.vue



function SideBar_injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SideBar_component = Object(componentNormalizer["a" /* default */])(
  user_SideBarvue_type_script_lang_js_,
  SideBarvue_type_template_id_6a8abdc3_scoped_true_render,
  SideBarvue_type_template_id_6a8abdc3_scoped_true_staticRenderFns,
  false,
  SideBar_injectStyles,
  "6a8abdc3",
  "26e1bfd6"
  
)

/* harmony default export */ var SideBar = (SideBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/VclChannelCommonCard.vue?vue&type=template&id=e826a6b4&scoped=true&
var VclChannelCommonCardvue_type_template_id_e826a6b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcl-channel-common-card"},[_c('b-row',_vm._l((3),function(i){return _c('b-col',{key:i,attrs:{"md":"4","lg":"4","xs":"12","sm":"6","xl":"4"}},[_c('vcl-twitch',{staticClass:"custom-vcl-channel-common-card"})],1)}),1)],1)}
var VclChannelCommonCardvue_type_template_id_e826a6b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclChannelCommonCard.vue?vue&type=template&id=e826a6b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/VclChannelCommonCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VclChannelCommonCardvue_type_script_lang_js_ = ({
  name: "VclChannelCommonCard",
  components: {
    VclTwitch: external_vue_content_loading_["VclTwitch"]
  }
});
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclChannelCommonCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_content_loading_cards_VclChannelCommonCardvue_type_script_lang_js_ = (VclChannelCommonCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclChannelCommonCard.vue



function VclChannelCommonCard_injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var VclChannelCommonCard_component = Object(componentNormalizer["a" /* default */])(
  vue_content_loading_cards_VclChannelCommonCardvue_type_script_lang_js_,
  VclChannelCommonCardvue_type_template_id_e826a6b4_scoped_true_render,
  VclChannelCommonCardvue_type_template_id_e826a6b4_scoped_true_staticRenderFns,
  false,
  VclChannelCommonCard_injectStyles,
  "e826a6b4",
  "42d0df1b"
  
)

/* harmony default export */ var VclChannelCommonCard = (VclChannelCommonCard_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/ChannelCommonCard.vue?vue&type=template&id=91e0166e&scoped=true&
var ChannelCommonCardvue_type_template_id_91e0166e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.article.is_active)?_vm._ssrNode("<div class=\"channel-common-card\" data-v-91e0166e>","</div>",[_c('b-card',{staticClass:"custom-channel-common-card",attrs:{"no-body":""}},[_c('div',[_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/" + (_vm.article.slug))}},[_c('b-card-img-lazy',{staticStyle:{"border-radius":"10px"},attrs:{"alt":_vm.article.Seoimgalt,"blank-color":"#bbb","src":_vm.article.photo,"top":"","height":"165"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"d-flex w-100"},[_c('b-card-text',{staticClass:"text-muted custom-card-text-date",attrs:{"text-tag":"p"}},[_vm._v(_vm._s(_vm.article.release_date))]),_vm._v(" "),_c('div',{staticClass:"ml-auto pt-2"},[_c('p',[_c('b-icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon,"variant":_vm.iconColor},on:{"click":function($event){return _vm.setFavourite(6000, '#4a5153')}}}),_vm._v(" "),_c('b-icon',{staticClass:"mr-2 h5 my-auto",attrs:{"icon":"reply"},on:{"click":function($event){_vm.active2 = !_vm.active2}}})],1)])],1),_vm._v(" "),_c('div',[_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/" + (_vm.article.slug))}},[_c('b-card-text',{staticClass:"custom-card-text-title",attrs:{"text-tag":"h5"}},[_vm._v(_vm._s(_vm.article.title))])],1)],1)])])],1):_vm._e(),_vm._ssrNode(" "),_c('vs-dialog',{attrs:{"width":"470px","not-center":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h6',{staticClass:"pt-3"},[_vm._v("Share this article")])]},proxy:true}]),model:{value:(_vm.active2),callback:function ($$v) {_vm.active2=$$v},expression:"active2"}},[_vm._v(" "),_c('div',[_c('ShareModal',{attrs:{"pathUrl":("/" + (this.article.slug))}})],1)])],2)}
var ChannelCommonCardvue_type_template_id_91e0166e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/cards/ChannelCommonCard.vue?vue&type=template&id=91e0166e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/ChannelCommonCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ChannelCommonCardvue_type_script_lang_js_ = ({
  name: "ChannelCommonCard",

  data() {
    return {
      icon: "star",
      toogle: false,
      active2: false,
      iconColor: "dark"
    };
  },

  mounted() {
    this.checkLocal();
  },

  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkLocal() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key == this.article.slug) {
          // console.log("found");
          this.toogle = true;
          this.icon = "star-fill";
          this.iconColor = "warning";
          break;
        }
      }
    },

    setFavourite(duration, color) {
      if (false) {}
    }

  }
});
// CONCATENATED MODULE: ./components/user/cards/ChannelCommonCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_ChannelCommonCardvue_type_script_lang_js_ = (ChannelCommonCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/cards/ChannelCommonCard.vue



function ChannelCommonCard_injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ChannelCommonCard_component = Object(componentNormalizer["a" /* default */])(
  cards_ChannelCommonCardvue_type_script_lang_js_,
  ChannelCommonCardvue_type_template_id_91e0166e_scoped_true_render,
  ChannelCommonCardvue_type_template_id_91e0166e_scoped_true_staticRenderFns,
  false,
  ChannelCommonCard_injectStyles,
  "91e0166e",
  "bdb009c4"
  
)

/* harmony default export */ var ChannelCommonCard = (ChannelCommonCard_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/CheckSmallCard.vue?vue&type=template&id=00f46abb&scoped=true&
var CheckSmallCardvue_type_template_id_00f46abb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.article.is_active)?_vm._ssrNode("<div class=\"channel-common-card\" data-v-00f46abb>","</div>",[_c('b-card',{staticClass:"custom-channel-common-card",attrs:{"no-body":""}},[_c('div',[(_vm.article.channel.channelname == 'Mobile phone')?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/m/" + (_vm.article.slug))}},[_c('b-card-img-lazy',{staticStyle:{"border-radius":"10px"},attrs:{"alt":_vm.article.Seoimgalt,"blank-color":"#bbb","src":_vm.article.photo,"top":"","height":"165"}})],1)],1):_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/" + (_vm.article.slug))}},[_c('b-card-img-lazy',{staticStyle:{"border-radius":"10px"},attrs:{"alt":_vm.article.Seoimgalt,"blank-color":"#bbb","src":_vm.article.photo,"top":"","height":"165"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"d-flex w-100"},[_c('b-card-text',{staticClass:"text-muted custom-card-text-date",attrs:{"text-tag":"p"}},[_vm._v(_vm._s(_vm.article.release_date))]),_vm._v(" "),_c('div',{staticClass:"ml-auto pt-2"},[_c('p',[_c('b-icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon,"variant":_vm.iconColor},on:{"click":function($event){return _vm.setFavourite(6000, '#4a5153')}}}),_vm._v(" "),_c('b-icon',{staticClass:"mr-2 h5 my-auto",attrs:{"icon":"reply"},on:{"click":function($event){_vm.active2 = !_vm.active2}}})],1)])],1),_vm._v(" "),_c('div',[(_vm.article.channel.channelname == 'Mobile phone')?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/m/" + (_vm.article.slug))}},[_c('b-card-text',{staticClass:"custom-card-text-title",attrs:{"text-tag":"h5"}},[_vm._v(_vm._s(_vm.article.title))])],1)],1):_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/" + (_vm.article.slug))}},[_c('b-card-text',{staticClass:"custom-card-text-title",attrs:{"text-tag":"h5"}},[_vm._v(_vm._s(_vm.article.title))])],1)],1)])])],1):_vm._e(),_vm._ssrNode(" "),_c('vs-dialog',{attrs:{"width":"470px","not-center":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h6',{staticClass:"pt-3"},[_vm._v("Share this article")])]},proxy:true}]),model:{value:(_vm.active2),callback:function ($$v) {_vm.active2=$$v},expression:"active2"}},[_vm._v(" "),(_vm.article.channel.channelname == 'Mobile phone')?_c('div',[_c('ShareModal',{attrs:{"pathUrl":("/m/" + (this.article.slug))}})],1):_c('div',[_c('ShareModal',{attrs:{"pathUrl":("/" + (this.article.slug))}})],1)])],2)}
var CheckSmallCardvue_type_template_id_00f46abb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/cards/CheckSmallCard.vue?vue&type=template&id=00f46abb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/CheckSmallCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CheckSmallCardvue_type_script_lang_js_ = ({
  name: "ChannelCommonCard",

  data() {
    return {
      icon: "star",
      toogle: false,
      active2: false,
      iconColor: "dark"
    };
  },

  mounted() {
    this.checkLocal();
  },

  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkLocal() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key == this.article.slug) {
          // console.log("found");
          this.toogle = true;
          this.icon = "star-fill";
          this.iconColor = "warning";
          break;
        }
      }
    },

    setFavourite(duration, color) {
      if (false) {}
    }

  }
});
// CONCATENATED MODULE: ./components/user/cards/CheckSmallCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_CheckSmallCardvue_type_script_lang_js_ = (CheckSmallCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/cards/CheckSmallCard.vue



function CheckSmallCard_injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CheckSmallCard_component = Object(componentNormalizer["a" /* default */])(
  cards_CheckSmallCardvue_type_script_lang_js_,
  CheckSmallCardvue_type_template_id_00f46abb_scoped_true_render,
  CheckSmallCardvue_type_template_id_00f46abb_scoped_true_staticRenderFns,
  false,
  CheckSmallCard_injectStyles,
  "00f46abb",
  "56d5921f"
  
)

/* harmony default export */ var CheckSmallCard = (CheckSmallCard_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/MobileCards.vue?vue&type=template&id=2f678dec&scoped=true&
var MobileCardsvue_type_template_id_2f678dec_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.article.is_active)?_vm._ssrNode("<div class=\"channel-common-card\" data-v-2f678dec>","</div>",[_c('b-card',{staticClass:"custom-channel-common-card",attrs:{"no-body":""}},[_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/m/" + (_vm.article.slug))}},[_c('b-card-img-lazy',{staticStyle:{"border-radius":"10px"},attrs:{"alt":_vm.article.Seoimgalt,"blank-color":"#bbb","src":_vm.article.photo,"top":"","height":"165"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"d-flex w-100"},[_c('b-card-text',{staticClass:"text-muted custom-card-text-date",attrs:{"text-tag":"p"}},[_vm._v(_vm._s(_vm.article.release_date))]),_vm._v(" "),_c('div',{staticClass:"ml-auto pt-2"},[_c('p',[_c('b-icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon,"variant":_vm.iconColor},on:{"click":function($event){return _vm.setFavourite(6000, '#4a5153')}}}),_vm._v(" "),_c('b-icon',{staticClass:"mr-2 h5 my-auto",attrs:{"icon":"reply"},on:{"click":function($event){_vm.active2 = !_vm.active2}}})],1)])],1),_vm._v(" "),_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/m/" + (_vm.article.slug))}},[_c('b-card-text',{staticClass:"custom-card-text-title",attrs:{"text-tag":"h5"}},[_vm._v(_vm._s(_vm.article.title))])],1)],1)])],1):_vm._e(),_vm._ssrNode(" "),_c('vs-dialog',{attrs:{"width":"470px","not-center":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h6',{staticClass:"pt-3"},[_vm._v("Share this article")])]},proxy:true}]),model:{value:(_vm.active2),callback:function ($$v) {_vm.active2=$$v},expression:"active2"}},[_vm._v(" "),_c('ShareModal',{attrs:{"pathUrl":("/m/" + (this.article.slug))}})],1)],2)}
var MobileCardsvue_type_template_id_2f678dec_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/cards/MobileCards.vue?vue&type=template&id=2f678dec&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/MobileCards.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileCardsvue_type_script_lang_js_ = ({
  name: "ChannelCommonCard",

  data() {
    return {
      icon: "star",
      toogle: false,
      active2: false,
      iconColor: "dark"
    };
  },

  mounted() {
    this.checkLocal();
  },

  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkLocal() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key == this.article.slug) {
          // console.log("found");
          this.toogle = true;
          this.icon = "star-fill";
          this.iconColor = "warning";
          break;
        }
      }
    },

    setFavourite(duration, color) {
      if (false) {}
    },

    copyLink() {
      navigator.clipboard.writeText(this.place);
    },

    shareToFb() {
      window.open("https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com/" + this.article.slug, "_blank");
    }

  }
});
// CONCATENATED MODULE: ./components/user/cards/MobileCards.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_MobileCardsvue_type_script_lang_js_ = (MobileCardsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/cards/MobileCards.vue



function MobileCards_injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MobileCards_component = Object(componentNormalizer["a" /* default */])(
  cards_MobileCardsvue_type_script_lang_js_,
  MobileCardsvue_type_template_id_2f678dec_scoped_true_render,
  MobileCardsvue_type_template_id_2f678dec_scoped_true_staticRenderFns,
  false,
  MobileCards_injectStyles,
  "2f678dec",
  "442d12fe"
  
)

/* harmony default export */ var MobileCards = (MobileCards_component.exports);
// EXTERNAL MODULE: external "@saeris/vue-spinners"
var vue_spinners_ = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/HomeCard.vue?vue&type=template&id=2823aa9f&scoped=true&
var HomeCardvue_type_template_id_2823aa9f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.article.is_active)?_c('div',{staticClass:"home-card",attrs:{"itemscope":"","itemtype":"https://schema.org/Article","itemprop":"articleBody"}},[_vm._ssrNode("<div class=\"rounded\" data-v-2823aa9f>","</div>",[_c('b-card',{staticClass:"mb-4",attrs:{"no-body":""}},[_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"ml-3 mt-3 mb-2"},[_c('b-card-img-lazy',{staticClass:"rounded-circle p-1 img-logo",attrs:{"itemprop":"image","alt":_vm.article.contentowners.authorsname,"blank-color":"#bbb","src":_vm.article.contentowners.authorsprofilrimg}})],1),_vm._v(" "),_c('div',{staticClass:"mt-4 ml-3 mb-2 w-100"},[_c('div',{staticClass:"d-flex"},[_c('div',{},[_c('nuxt-link',{attrs:{"prefetch":"","to":("/authorProfile/" + (_vm.article.contentowners.authorsname))}},[_c('h5',{attrs:{"itemprop":"author"}},[_vm._v("\n                  "+_vm._s(_vm.article.contentowners.authorsname)+"\n                ")])])],1),_vm._v(" "),_c('div',{staticClass:"ml-auto"},[_c('b-icon',{staticClass:"mr-2 h4 custom-home-card",attrs:{"icon":"reply"},on:{"click":function($event){_vm.active2 = !_vm.active2}}}),_vm._v(" "),_c('b-icon',{staticClass:"mr-4 h5 custom-home-card",attrs:{"icon":_vm.icon,"variant":_vm.iconColor},on:{"click":function($event){return _vm.openNotification(6000, '#4a5153')}}})],1)]),_vm._v(" "),_c('b-card-text',{staticClass:"text-muted",attrs:{"itemprop":"dateCreated","text-tag":"p"}},[_vm._v(_vm._s(_vm.article.release_date)+"\n            ")])],1)]),_vm._v(" "),_c('h5',{staticClass:"ml-4 py-3",attrs:{"itemprop":"name"}},[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),(_vm.article.channel.channelname == 'Mobile phone')?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/m/" + (_vm.article.slug))}},[_c('div',[_c('b-card-img-lazy',{attrs:{"itemprop":"image","alt":_vm.article.Seoimgalt,"blank-color":"#bbb","src":_vm.article.photo,"bottom":"","height":"230","width":"280"}})],1)])],1):_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/" + (_vm.article.slug))}},[_c('div',[_c('b-card-img-lazy',{attrs:{"itemprop":"image","alt":_vm.article.Seoimgalt,"blank-color":"#bbb","src":_vm.article.photo,"bottom":"","height":"230","width":"280"}})],1)])],1)])],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-2823aa9f>","</div>",[_c('vs-dialog',{attrs:{"width":"470px","not-center":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h6',{staticClass:"pt-3"},[_vm._v("Share this article")])]},proxy:true}],null,false,2877358616),model:{value:(_vm.active2),callback:function ($$v) {_vm.active2=$$v},expression:"active2"}},[_vm._v(" "),(_vm.article.channel.channelname == 'Mobile phone')?_c('div',[_c('ShareModal',{attrs:{"pathUrl":("/m/" + (this.article.slug))}})],1):_c('div',[_c('ShareModal',{attrs:{"pathUrl":("/" + (this.article.slug))}})],1)])],1)],2):_vm._e()}
var HomeCardvue_type_template_id_2823aa9f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/cards/HomeCard.vue?vue&type=template&id=2823aa9f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/HomeCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HomeCardvue_type_script_lang_js_ = ({
  data() {
    return {
      icon: "star",
      toogle: false,
      active2: false,
      iconColor: "dark"
    };
  },

  props: {
    article: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.checkLocal();
  },

  methods: {
    checkLocal() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key == this.article.slug) {
          // console.log("found");
          this.toogle = true;
          this.icon = "star-fill";
          this.iconColor = "warning";
          break;
        }
      }
    },

    openNotification(duration, color) {
      if (false) {}
    },

    shareToFb() {
      window.open("https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com/" + this.article.slug, "_blank");
    }

  }
});
// CONCATENATED MODULE: ./components/user/cards/HomeCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_HomeCardvue_type_script_lang_js_ = (HomeCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/cards/HomeCard.vue



function HomeCard_injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var HomeCard_component = Object(componentNormalizer["a" /* default */])(
  cards_HomeCardvue_type_script_lang_js_,
  HomeCardvue_type_template_id_2823aa9f_scoped_true_render,
  HomeCardvue_type_template_id_2823aa9f_scoped_true_staticRenderFns,
  false,
  HomeCard_injectStyles,
  "2823aa9f",
  "59fd1c1f"
  
)

/* harmony default export */ var HomeCard = (HomeCard_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/VclHomeCard.vue?vue&type=template&id=44aef701&scoped=true&
var VclHomeCardvue_type_template_id_44aef701_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcl-home-card"},_vm._l((5),function(i){return _c('b-card',{key:i,staticClass:"mb-4 rounded",attrs:{"no-body":""}},[_c('vue-content-loading',{staticClass:"custom-vcl-home-card",attrs:{"width":300,"height":260}},[_c('circle',{attrs:{"cx":"30","cy":"20","r":"20"}}),_vm._v(" "),_c('rect',{attrs:{"x":"60","y":"10","rx":"4","ry":"4","width":"64","height":"10"}}),_vm._v(" "),_c('rect',{attrs:{"x":"60","y":"30","rx":"4","ry":"4","width":"60","height":"8"}}),_vm._v(" "),_c('rect',{attrs:{"x":"15","y":"70","rx":"4","ry":"4","width":"170","height":"10"}}),_vm._v(" "),_c('rect',{attrs:{"x":"0","y":"90","rx":"4","ry":"4","width":"300","height":"150"}}),_vm._v(" "),_c('rect',{attrs:{"x":"15","y":"250","rx":"4","ry":"4","width":"30","height":"10"}})])],1)}),1)}
var VclHomeCardvue_type_template_id_44aef701_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclHomeCard.vue?vue&type=template&id=44aef701&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/VclHomeCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VclHomeCardvue_type_script_lang_js_ = ({
  name: "VclHomeCard",
  components: {
    VueContentLoading: external_vue_content_loading_default.a
  }
});
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclHomeCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_content_loading_cards_VclHomeCardvue_type_script_lang_js_ = (VclHomeCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclHomeCard.vue



function VclHomeCard_injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var VclHomeCard_component = Object(componentNormalizer["a" /* default */])(
  vue_content_loading_cards_VclHomeCardvue_type_script_lang_js_,
  VclHomeCardvue_type_template_id_44aef701_scoped_true_render,
  VclHomeCardvue_type_template_id_44aef701_scoped_true_staticRenderFns,
  false,
  VclHomeCard_injectStyles,
  "44aef701",
  "b06550fc"
  
)

/* harmony default export */ var VclHomeCard = (VclHomeCard_component.exports);
// EXTERNAL MODULE: external "vuescroll"
var external_vuescroll_ = __webpack_require__(32);
var external_vuescroll_default = /*#__PURE__*/__webpack_require__.n(external_vuescroll_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/AuthorSmallCard.vue?vue&type=template&id=3b113e0b&scoped=true&
var AuthorSmallCardvue_type_template_id_3b113e0b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"author-small-card"},[_c('b-card',{staticClass:"custom-author-small-card",attrs:{"no-body":""}},[_c('div',[(_vm.article == 'Mobile')?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/m/" + _vm.ArticleSlug)}},[_c('b-card-img-lazy',{staticStyle:{"border-radius":"10px"},attrs:{"src":_vm.ArticleCover,"blank-color":"#bbb","top":"","height":"165"}})],1)],1):_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/" + _vm.ArticleSlug)}},[_c('b-card-img-lazy',{staticStyle:{"border-radius":"10px"},attrs:{"alt":_vm.imgAlt,"src":_vm.ArticleCover,"blank-color":"#bbb","top":"","height":"165"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"d-flex w-100"},[_c('b-card-text',{staticClass:"text-muted custom-card-text-date",attrs:{"text-tag":"p"}},[_vm._v(_vm._s(_vm.ArticlePublish))]),_vm._v(" "),_c('div',{staticClass:"ml-auto pt-2"},[_c('p',[_c('b-icon',{staticClass:"mr-2",attrs:{"icon":_vm.icon,"variant":_vm.iconColor},on:{"click":function($event){return _vm.setFavourite(6000, '#4a5153')}}}),_vm._v(" "),_c('b-icon',{staticClass:"mr-2",attrs:{"icon":"reply"},on:{"click":function($event){_vm.active2 = !_vm.active2}}})],1)])],1),_vm._v(" "),_c('div',[(_vm.article == 'Mobile')?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/m/" + _vm.ArticleSlug)}},[_c('b-card-text',{staticClass:"custom-card-text-title",attrs:{"text-tag":"h5"}},[_vm._v(_vm._s(_vm.ArticleTitle))])],1)],1):_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/" + _vm.ArticleSlug)}},[_c('b-card-text',{staticClass:"custom-card-text-title",attrs:{"text-tag":"h5"}},[_vm._v(_vm._s(_vm.ArticleTitle))])],1)],1)])]),_vm._ssrNode(" "),_c('vs-dialog',{attrs:{"width":"470px","not-center":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h6',{staticClass:"pt-3"},[_vm._v("Share this article")])]},proxy:true}]),model:{value:(_vm.active2),callback:function ($$v) {_vm.active2=$$v},expression:"active2"}},[_vm._v(" "),(_vm.article == 'Mobile')?_c('div',[_c('ShareModal',{attrs:{"pathUrl":("/m/" + (this.ArticleSlug))}})],1):_c('div',[_c('ShareModal',{attrs:{"pathUrl":("/" + (this.ArticleSlug))}})],1)])],2)}
var AuthorSmallCardvue_type_template_id_3b113e0b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/cards/AuthorSmallCard.vue?vue&type=template&id=3b113e0b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/cards/AuthorSmallCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AuthorSmallCardvue_type_script_lang_js_ = ({
  props: {
    ArticleCover: {
      type: String,
      default: ""
    },
    ArticlePublish: {
      type: String,
      default: "2101-11-22"
    },
    ArticleTitle: {
      type: String,
      default: "This is the Title"
    },
    ArticleSlug: {
      type: String
    },
    ArticleView: {
      type: Number
    },
    article: {
      type: String
    },
    imgAlt: {
      type: String
    }
  },

  data() {
    return {
      icon: "star",
      toogle: false,
      active2: false,
      iconColor: "dark"
    };
  },

  methods: {
    checkLocal() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key == this.ArticleSlug) {
          // console.log("found");
          this.toogle = true;
          this.icon = "star-fill";
          this.iconColor = "warning";
          break;
        }
      }
    },

    setFavourite(duration, color) {
      if (false) {}
    }

  },

  mounted() {
    this.checkLocal();
  }

});
// CONCATENATED MODULE: ./components/user/cards/AuthorSmallCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_AuthorSmallCardvue_type_script_lang_js_ = (AuthorSmallCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/cards/AuthorSmallCard.vue



function AuthorSmallCard_injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AuthorSmallCard_component = Object(componentNormalizer["a" /* default */])(
  cards_AuthorSmallCardvue_type_script_lang_js_,
  AuthorSmallCardvue_type_template_id_3b113e0b_scoped_true_render,
  AuthorSmallCardvue_type_template_id_3b113e0b_scoped_true_staticRenderFns,
  false,
  AuthorSmallCard_injectStyles,
  "3b113e0b",
  "a38626e8"
  
)

/* harmony default export */ var AuthorSmallCard = (AuthorSmallCard_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/AuthorVclCard.vue?vue&type=template&id=15d9ae91&scoped=true&
var AuthorVclCardvue_type_template_id_15d9ae91_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"author-vcl-card"},[_c('b-row',_vm._l((3),function(i){return _c('b-col',{key:i,attrs:{"md":"3","lg":"3","xs":"12","sm":"6","xl":"3"}},[_c('vcl-twitch',{staticClass:"custom-author-vcl-card"})],1)}),1)],1)}
var AuthorVclCardvue_type_template_id_15d9ae91_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/AuthorVclCard.vue?vue&type=template&id=15d9ae91&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/AuthorVclCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AuthorVclCardvue_type_script_lang_js_ = ({
  name: "AuthorVclCard",
  components: {
    VclTwitch: external_vue_content_loading_["VclTwitch"]
  }
});
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/AuthorVclCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_content_loading_cards_AuthorVclCardvue_type_script_lang_js_ = (AuthorVclCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/AuthorVclCard.vue



function AuthorVclCard_injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AuthorVclCard_component = Object(componentNormalizer["a" /* default */])(
  vue_content_loading_cards_AuthorVclCardvue_type_script_lang_js_,
  AuthorVclCardvue_type_template_id_15d9ae91_scoped_true_render,
  AuthorVclCardvue_type_template_id_15d9ae91_scoped_true_staticRenderFns,
  false,
  AuthorVclCard_injectStyles,
  "15d9ae91",
  "49cf0f78"
  
)

/* harmony default export */ var AuthorVclCard = (AuthorVclCard_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/VclDetailCard.vue?vue&type=template&id=20cb6f3c&scoped=true&
var VclDetailCardvue_type_template_id_20cb6f3c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vcl-detail-page"},[_c('vue-content-loading',{staticClass:"vcl",attrs:{"width":300,"height":270}},[_c('rect',{attrs:{"x":"0","y":"0","rx":"4","ry":"4","width":"300","height":"142"}}),_vm._v(" "),_c('rect',{attrs:{"x":"0","y":"150","rx":"4","ry":"4","width":"140","height":"10"}}),_vm._v(" "),_c('rect',{attrs:{"x":"0","y":"170","rx":"4","ry":"4","width":"300","height":"10"}})])],1)}
var VclDetailCardvue_type_template_id_20cb6f3c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclDetailCard.vue?vue&type=template&id=20cb6f3c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/VclDetailCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VclDetailCardvue_type_script_lang_js_ = ({
  name: "VclDetailCard",
  components: {
    VueContentLoading: external_vue_content_loading_default.a
  }
});
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclDetailCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_content_loading_cards_VclDetailCardvue_type_script_lang_js_ = (VclDetailCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclDetailCard.vue



function VclDetailCard_injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var VclDetailCard_component = Object(componentNormalizer["a" /* default */])(
  vue_content_loading_cards_VclDetailCardvue_type_script_lang_js_,
  VclDetailCardvue_type_template_id_20cb6f3c_scoped_true_render,
  VclDetailCardvue_type_template_id_20cb6f3c_scoped_true_staticRenderFns,
  false,
  VclDetailCard_injectStyles,
  "20cb6f3c",
  "57425e34"
  
)

/* harmony default export */ var VclDetailCard = (VclDetailCard_component.exports);
// EXTERNAL MODULE: external "vue-star-rating"
var external_vue_star_rating_ = __webpack_require__(42);
var external_vue_star_rating_default = /*#__PURE__*/__webpack_require__.n(external_vue_star_rating_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/BottomFooter.vue?vue&type=template&id=078c18f2&scoped=true&
var BottomFootervue_type_template_id_078c18f2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer",staticStyle:{"background-color":"#000000"}},[_c('b-container',[_c('div',{staticClass:"d-flex hide-in-mobile justify-content-center pt-2"},[_c('div',{},[_c('b-img',{staticClass:"rounded",attrs:{"alt":"footer reolib logo","height":"20","width":"22","src":__webpack_require__(36)}})],1),_vm._v(" "),_c('div',{staticClass:"line ml-2 mr-2"}),_vm._v(" "),_c('div',{staticClass:"mr-5 pt-1"},[_c('p',{staticStyle:{"color":"white","font-size":"12px"}},[_vm._v("\n          ©2020 ReoLib.All Rights Reserved\n        ")])]),_vm._v(" "),_c('div',{staticClass:"ml-5"},[_c('b-img',{staticClass:"social-icons",attrs:{"alt":"footer facebook logo","src":__webpack_require__(27)}}),_vm._v(" "),_c('b-img',{staticClass:"social-icons",attrs:{"alt":"footer instagram logo","src":__webpack_require__(28)}}),_vm._v(" "),_c('b-img',{staticClass:"social-icons",attrs:{"alt":"footer twitter logo","src":__webpack_require__(29)}}),_vm._v(" "),_c('b-img',{staticClass:"social-icons",attrs:{"alt":"footer pinterest logo","src":__webpack_require__(37)}})],1)]),_vm._v(" "),_c('div',{staticClass:"hide-in-dekstop py-3"},[_c('div',{staticClass:"d-flex justify-content-center pb-2"},[_c('b-img',{staticClass:"rounded",attrs:{"alt":"footer reolib logo","height":"20","width":"22","src":__webpack_require__(36)}}),_vm._v(" "),_c('div',{staticClass:"line ml-2 mr-2"}),_vm._v(" "),_c('div',{staticClass:"mr-5 pt-1"},[_c('p',{staticStyle:{"color":"white","font-size":"12px"}},[_vm._v("\n            ©2020 ReoLib.All Rights Reserved\n          ")])])],1),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-around"},[_c('b-img',{staticClass:"social-icons",attrs:{"alt":"footer facebook logo","src":__webpack_require__(27)}}),_vm._v(" "),_c('b-img',{staticClass:"social-icons",attrs:{"alt":"footer instagram logo","src":__webpack_require__(28)}}),_vm._v(" "),_c('b-img',{staticClass:"social-icons",attrs:{"alt":"footer twitter logo","src":__webpack_require__(29)}}),_vm._v(" "),_c('b-img',{staticClass:"social-icons",attrs:{"alt":"footer pinterest logo","src":__webpack_require__(37)}})],1)])])],1)}
var BottomFootervue_type_template_id_078c18f2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/BottomFooter.vue?vue&type=template&id=078c18f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/BottomFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BottomFootervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/user/BottomFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_BottomFootervue_type_script_lang_js_ = (BottomFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/BottomFooter.vue



function BottomFooter_injectStyles (context) {
  
  var style0 = __webpack_require__(103)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BottomFooter_component = Object(componentNormalizer["a" /* default */])(
  user_BottomFootervue_type_script_lang_js_,
  BottomFootervue_type_template_id_078c18f2_scoped_true_render,
  BottomFootervue_type_template_id_078c18f2_scoped_true_staticRenderFns,
  false,
  BottomFooter_injectStyles,
  "078c18f2",
  "f88970c6"
  
)

/* harmony default export */ var BottomFooter = (BottomFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/VclRelatedCard.vue?vue&type=template&id=31bec273&scoped=true&
var VclRelatedCardvue_type_template_id_31bec273_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pb-2 vcl-related-card"},_vm._l((3),function(i){return _c('vcl-facebook',{key:i,attrs:{"width":_vm.cWidth,"height":120,"rtl":_vm.alignVc}})}),1)}
var VclRelatedCardvue_type_template_id_31bec273_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclRelatedCard.vue?vue&type=template&id=31bec273&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/vue-content-loading-cards/VclRelatedCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VclRelatedCardvue_type_script_lang_js_ = ({
  components: {
    VclFacebook: external_vue_content_loading_["VclFacebook"]
  },
  props: {
    cWidth: {
      type: Number,
      default: 390
    },
    alignVc: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclRelatedCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_content_loading_cards_VclRelatedCardvue_type_script_lang_js_ = (VclRelatedCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/vue-content-loading-cards/VclRelatedCard.vue



function VclRelatedCard_injectStyles (context) {
  
  var style0 = __webpack_require__(105)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var VclRelatedCard_component = Object(componentNormalizer["a" /* default */])(
  vue_content_loading_cards_VclRelatedCardvue_type_script_lang_js_,
  VclRelatedCardvue_type_template_id_31bec273_scoped_true_render,
  VclRelatedCardvue_type_template_id_31bec273_scoped_true_staticRenderFns,
  false,
  VclRelatedCard_injectStyles,
  "31bec273",
  "46a3d138"
  
)

/* harmony default export */ var VclRelatedCard = (VclRelatedCard_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/ChannelCover.vue?vue&type=template&id=39f8b8b5&scoped=true&
var ChannelCovervue_type_template_id_39f8b8b5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"channel-cover"},[_c('b-card',{attrs:{"overlay":"","img-height":"80","img-src":_vm.image,"text-variant":"white"}},[_c('b-card-text',{staticClass:"channel-cover-title",attrs:{"text-tag":"h2"}},[_vm._v("\n      "+_vm._s(_vm.ChannelCoverTitle))])],1)],1)}
var ChannelCovervue_type_template_id_39f8b8b5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/ChannelCover.vue?vue&type=template&id=39f8b8b5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/ChannelCover.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ChannelCovervue_type_script_lang_js_ = ({
  props: ["ChannelCoverTitle", "image"]
});
// CONCATENATED MODULE: ./components/user/ChannelCover.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_ChannelCovervue_type_script_lang_js_ = (ChannelCovervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/ChannelCover.vue



function ChannelCover_injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ChannelCover_component = Object(componentNormalizer["a" /* default */])(
  user_ChannelCovervue_type_script_lang_js_,
  ChannelCovervue_type_template_id_39f8b8b5_scoped_true_render,
  ChannelCovervue_type_template_id_39f8b8b5_scoped_true_staticRenderFns,
  false,
  ChannelCover_injectStyles,
  "39f8b8b5",
  "17de116b"
  
)

/* harmony default export */ var ChannelCover = (ChannelCover_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/FixedChannelSideBar.vue?vue&type=template&id=05011d9f&
var FixedChannelSideBarvue_type_template_id_05011d9f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-sidebar',{attrs:{"id":"sidebar-backdrop","backdrop-variant":"dark","backdrop":"","shadow":""}},[_c('div',{staticClass:"px-3 py-2"},[_c('SideBar')],1)])],1)}
var FixedChannelSideBarvue_type_template_id_05011d9f_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/FixedChannelSideBar.vue?vue&type=template&id=05011d9f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/FixedChannelSideBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FixedChannelSideBarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/user/FixedChannelSideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_FixedChannelSideBarvue_type_script_lang_js_ = (FixedChannelSideBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/FixedChannelSideBar.vue





/* normalize component */

var FixedChannelSideBar_component = Object(componentNormalizer["a" /* default */])(
  user_FixedChannelSideBarvue_type_script_lang_js_,
  FixedChannelSideBarvue_type_template_id_05011d9f_render,
  FixedChannelSideBarvue_type_template_id_05011d9f_staticRenderFns,
  false,
  null,
  null,
  "8dc41fb4"
  
)

/* harmony default export */ var FixedChannelSideBar = (FixedChannelSideBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/Tab.vue?vue&type=template&id=5011d67c&
var Tabvue_type_template_id_5011d67c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-tabs',{attrs:{"no-nav-style":true,"content-class":"mt-0 mb-0"}},[_c('b-tab',{attrs:{"title-link-class":"text-dark","active":""},on:{"click":function($event){return _vm.goLatest()}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('b-img',{staticStyle:{"height":"30px","width":"30px"},attrs:{"src":__webpack_require__(47)}}),_vm._v("\n        Fresh\n      ")]},proxy:true}])},[_vm._v(" "),_c('div',{staticClass:"latest-under-line"})]),_vm._v(" "),_c('b-tab',{attrs:{"title-link-class":"text-dark"},on:{"click":function($event){return _vm.goAbout()}},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('b-img',{staticStyle:{"height":"30px","width":"30px"},attrs:{"src":__webpack_require__(109)}}),_vm._v("\n        About\n      ")]},proxy:true}])},[_vm._v(" "),_c('div',{staticClass:"about-under-line"})]),_vm._v(" "),_c('hr',{staticClass:"line"})],1)],1)}
var Tabvue_type_template_id_5011d67c_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/Tab.vue?vue&type=template&id=5011d67c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/Tab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tabvue_type_script_lang_js_ = ({
  methods: {
    goLatest() {},

    goAbout() {}

  }
});
// CONCATENATED MODULE: ./components/user/Tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/Tab.vue



function Tab_injectStyles (context) {
  
  
}

/* normalize component */

var Tab_component = Object(componentNormalizer["a" /* default */])(
  user_Tabvue_type_script_lang_js_,
  Tabvue_type_template_id_5011d67c_render,
  Tabvue_type_template_id_5011d67c_staticRenderFns,
  false,
  Tab_injectStyles,
  null,
  "cdb07f24"
  
)

/* harmony default export */ var Tab = (Tab_component.exports);
// EXTERNAL MODULE: external "@trevoreyre/autocomplete-vue"
var autocomplete_vue_ = __webpack_require__(43);
var autocomplete_vue_default = /*#__PURE__*/__webpack_require__.n(autocomplete_vue_);

// EXTERNAL MODULE: ./node_modules/material-icons/iconfont/material-icons.css
var material_icons = __webpack_require__(110);

// EXTERNAL MODULE: external "vuesax"
var external_vuesax_ = __webpack_require__(44);
var external_vuesax_default = /*#__PURE__*/__webpack_require__.n(external_vuesax_);

// EXTERNAL MODULE: ./node_modules/vuesax/dist/vuesax.css
var vuesax = __webpack_require__(117);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/ShareModal.vue?vue&type=template&id=022f4be4&
var ShareModalvue_type_template_id_022f4be4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex justify-content-center\">","</div>",[_c('b-img',{staticStyle:{"cursor":"pointer"},attrs:{"height":"40","width":"40","src":__webpack_require__(27)},on:{"click":_vm.shareToFb}}),_vm._ssrNode(" "),_c('b-img',{staticClass:"mr-4 ml-4",staticStyle:{"cursor":"pointer"},attrs:{"height":"40","width":"40","src":__webpack_require__(29)},on:{"click":_vm.shareToTw}}),_vm._ssrNode(" "),_c('b-img',{staticStyle:{"cursor":"pointer"},attrs:{"height":"40","width":"40","src":__webpack_require__(28)},on:{"click":_vm.shareToIn}})],2),_vm._ssrNode(" "),_c('b-input-group',{staticClass:"pt-4",attrs:{"size":"sm"}},[_c('b-form-input',{attrs:{"id":"myInput","value":_vm.place}}),_vm._v(" "),_c('b-input-group-append',[_c('b-img',{staticClass:"rounded ",staticStyle:{"cursor":"pointer"},attrs:{"height":"31","width":"31","src":__webpack_require__(119)},on:{"click":_vm.copyLink}})],1)],1)],2)}
var ShareModalvue_type_template_id_022f4be4_staticRenderFns = []


// CONCATENATED MODULE: ./components/user/ShareModal.vue?vue&type=template&id=022f4be4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/ShareModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ShareModalvue_type_script_lang_js_ = ({
  props: {
    pathUrl: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      modalActive: this.activeModal,
      place: `http://test.resultonlinebd.com${this.pathUrl}` //   active: this.activeModal

    };
  },

  methods: {
    copyLink() {
      if (false) { var copyText; }
    },

    shareToFb() {
      window.open("https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com" + this.pathUrl, "_blank");
    },

    shareToTw() {
      window.open("https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com" + this.pathUrl, "_blank");
    },

    shareToIn() {
      window.open("https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com" + this.pathUrl, "_blank");
    }

  },

  mounted() {},

  computed: {// modalActive() {
    //   return this.activeModal;
    // }
  }
});
// CONCATENATED MODULE: ./components/user/ShareModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_ShareModalvue_type_script_lang_js_ = (ShareModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/user/ShareModal.vue



function ShareModal_injectStyles (context) {
  
  
}

/* normalize component */

var ShareModal_component = Object(componentNormalizer["a" /* default */])(
  user_ShareModalvue_type_script_lang_js_,
  ShareModalvue_type_template_id_022f4be4_render,
  ShareModalvue_type_template_id_022f4be4_staticRenderFns,
  false,
  ShareModal_injectStyles,
  null,
  "6a430476"
  
)

/* harmony default export */ var ShareModal = (ShareModal_component.exports);
// EXTERNAL MODULE: external "nuxt-jsonld"
var external_nuxt_jsonld_ = __webpack_require__(45);
var external_nuxt_jsonld_default = /*#__PURE__*/__webpack_require__.n(external_nuxt_jsonld_);

// CONCATENATED MODULE: ./plugins/component-registration.js
 // common components start










external_vue_default.a.use(vue_spinners_["VueSpinners"]);
external_vue_default.a.component("NavBar", NavBar);
external_vue_default.a.component("Carousel", Carousel);
external_vue_default.a.component("Breadcrumb", Breadcrumb);
external_vue_default.a.component("SideBar", SideBar);
external_vue_default.a.component("VclChannelCommonCard", VclChannelCommonCard);
external_vue_default.a.component("ChannelCommonCard", ChannelCommonCard);
external_vue_default.a.component("CheckSmallCard", CheckSmallCard);
external_vue_default.a.component("MobileCards", MobileCards); // common components end
// Home Page start

 // import LatestCard from "~/components/user/cards/LatestCard";



external_vue_default.a.use(external_vuescroll_default.a);
external_vue_default.a.component("HomeCard", HomeCard); // Vue.component("LatestCard", LatestCard);

external_vue_default.a.component("VclHomeCard", VclHomeCard); // Home Page End
// Top & High Rated start
// Top & High Rated End
// author start



external_vue_default.a.component("AuthorSmallCard", AuthorSmallCard);
external_vue_default.a.component("AuthorVclCard", AuthorVclCard); // author end
// detail start





external_vue_default.a.component("VclRelatedCard", VclRelatedCard);
external_vue_default.a.component("BottomFooter", BottomFooter);
external_vue_default.a.component("VclDetailCard", VclDetailCard);
external_vue_default.a.component("star-rating", external_vue_star_rating_default.a); // Detail end
// Channel start


external_vue_default.a.component("ChannelCover", ChannelCover);

external_vue_default.a.component("FixedChannelSideBar", FixedChannelSideBar);

external_vue_default.a.component("Tab", Tab); // Mobile Start
// Mobile End
// Channel End

 // import '@trevoreyre/autocomplete-vue/dist/style.css'


external_vue_default.a.use(autocomplete_vue_default.a);

 //Vuesax styles

external_vue_default.a.use(external_vuesax_default.a, {// options here
});

external_vue_default.a.component("ShareModal", ShareModal);

external_vue_default.a.use(external_nuxt_jsonld_default.a);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(120);

// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\bootstrap-vue.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\plugins\\component-registration.js (mode: 'all')

 // Source: ..\\plugins\\ga.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "script": [{
        "async": true,
        "src": "https:\u002F\u002Fpagead2.googlesyndication.com\u002Fpagead\u002Fjs\u002Fadsbygoogle.js"
      }],
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }],
      "link": [{
        "rel": "png",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/component-registration.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/component-registration.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if ( true && ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map