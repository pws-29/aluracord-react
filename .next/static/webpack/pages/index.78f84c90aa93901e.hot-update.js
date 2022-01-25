"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Form.js":
/*!***********************!*\
  !*** ./pages/Form.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./pages/constants.js\");\n/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spacer */ \"./pages/Spacer.js\");\n/* harmony import */ var _GlobalStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalStyles.js */ \"./pages/GlobalStyles.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 32px;\\n  flex: 1;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  max-width: 400px;\\n  gap: 2px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: \",\n        \";\\n  font-weight: \",\n        \";\\n  font-size: 1.5rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: \",\n        \";\\n  font-weight: \",\n        \";\\n  font-size: 1rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4px;\\n  width: 100%;\\n\\n    label {\\n      color: \",\n        \";\\n      font-weight: \",\n        \";\\n      font-size: 0.85rem;\\n      text-transform: uppercase;\\n    };\\n\\n    input {\\n      background-color: #181F25;\\n      border: 1px solid black;\\n      border-radius: 2px;\\n      height: 32px;\\n      padding: 10px;\\n      color: \",\n        \";\\n      font-size: 1rem;\\n    }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  background-color: hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%);;\\n  border: none;\\n  border-radius: 4px;\\n  height: 32px;\\n  color: \",\n        \";\\n  font-weight: \",\n        \";\\n  font-size: 1rem;\\n  cursor: pointer;\\n\\n  :hover {\\n    background-color: hsl(235,calc(var(--saturation-factor, 1)*51.4%),52.4%);;\\n  }\\n\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Form(param) {\n    var parentCallback = param.parentCallback;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), userName = ref[0], setUserName = ref[1];\n    var onChangeHandler = function(event) {\n        setUserName(event.target.value);\n    };\n    // Enviando dados ao parent\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setTimeout(function() {\n            parentCallback(userName);\n        }, 1000);\n        return function() {\n            return clearTimeout(timer);\n        };\n    }, [\n        userName\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                        children: \"Boas-vindas de volta!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {\n                        children: \"Estamos muito animados em te ver novamente!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spacer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                size: 34\n            }, void 0, false, {\n                fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormWrapper, {\n                action: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"usuario\",\n                        children: \"Usu\\xe1rio do Github\"\n                    }, void 0, false, {\n                        fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"usuario\",\n                        value: userName,\n                        onChange: onChangeHandler\n                    }, void 0, false, {\n                        fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spacer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                size: 12\n            }, void 0, false, {\n                fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                children: \"Entrar\"\n            }, void 0, false, {\n                fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Form.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\n_s(Form, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = Form;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c2 = TextWrapper;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p(_templateObject2(), _constants__WEBPACK_IMPORTED_MODULE_2__.COLORS.white, _constants__WEBPACK_IMPORTED_MODULE_2__.WEIGHTS.medium);\n_c3 = Title;\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p(_templateObject3(), _constants__WEBPACK_IMPORTED_MODULE_2__.COLORS.gray[500], _constants__WEBPACK_IMPORTED_MODULE_2__.WEIGHTS.thin);\n_c4 = SubTitle;\nvar FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].form(_templateObject4(), _constants__WEBPACK_IMPORTED_MODULE_2__.COLORS.gray[300], _constants__WEBPACK_IMPORTED_MODULE_2__.WEIGHTS.normal, _constants__WEBPACK_IMPORTED_MODULE_2__.COLORS.gray[300]);\n_c5 = FormWrapper;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button(_templateObject5(), _constants__WEBPACK_IMPORTED_MODULE_2__.COLORS.white, _constants__WEBPACK_IMPORTED_MODULE_2__.WEIGHTS.normal);\n_c6 = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"TextWrapper\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"SubTitle\");\n$RefreshReg$(_c5, \"FormWrapper\");\n$RefreshReg$(_c6, \"Button\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Gb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1o7QUFDTztBQUNoQjtBQUNlOzs7Ozs7Ozs7Ozs7O1FBa0NqQixDQU8zQjs7Ozs7Ozs7O1FBRStCLENBTS9COzs7Ozs7Ozs7UUFFdUIsQ0FDZDtRQUFlLENBQ1Q7UUFBaUIsQ0FFaEM7Ozs7Ozs7OztRQUUwQixDQUNqQjtRQUFtQixDQUNiO1FBQWUsQ0FFOUI7Ozs7Ozs7OztRQUVnQyxDQU9uQjtRQUFtQixDQUNiO1FBQWlCLENBV3ZCO1FBQW1CLENBR2hDOzs7Ozs7Ozs7UUFFNkIsQ0FNcEI7UUFBZSxDQUNUO1FBQWlCLENBUWhDOzs7Ozs7OztTQXBHU1EsSUFBSSxDQUFDLEtBQWtCLEVBQUUsQ0FBQztRQUFuQkMsY0FBYyxHQUFoQixLQUFrQixDQUFoQkEsY0FBYzs7SUFDNUIsR0FBSyxDQUEyQlIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENTLFFBQVEsR0FBaUJULEdBQVksS0FBM0JVLFdBQVcsR0FBSVYsR0FBWTtJQUU1QyxHQUFLLENBQUNXLGVBQWUsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1FBQ2xDRixXQUFXLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQ2hDLENBQUM7SUFFRCxFQUEyQjtJQUMzQmIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNjLEtBQUssR0FBR0MsVUFBVSxDQUFDLFFBQzdCLEdBRG1DLENBQUM7WUFDOUJSLGNBQWMsQ0FBQ0MsUUFBUTtRQUN6QixDQUFDLEVBQUUsSUFBSTtRQUNQLE1BQU0sQ0FBQyxRQUFRO1lBQUZRLE1BQU0sQ0FBTkEsWUFBWSxDQUFDRixLQUFLOztJQUNqQyxDQUFDLEVBQUUsQ0FBQ047UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFFYixNQUFNLDZFQUNIUyxPQUFPOzt3RkFDTEMsV0FBVzs7Z0dBQ1RDLEtBQUs7a0NBQUMsQ0FBcUI7Ozs7OztnR0FDM0JDLFFBQVE7a0NBQUMsQ0FBMkM7Ozs7Ozs7Ozs7Ozt3RkFFdERoQiwrQ0FBTTtnQkFBQ2lCLElBQUksRUFBRSxFQUFFOzs7Ozs7d0ZBQ2ZDLFdBQVc7Z0JBQUNDLE1BQU0sRUFBQyxDQUFFOztnR0FDbkJDLENBQUs7d0JBQUNDLE9BQU8sRUFBQyxDQUFTO2tDQUFDLENBQWlCOzs7Ozs7Z0dBQ3pDQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsRUFBRSxFQUFDLENBQVM7d0JBQUNmLEtBQUssRUFBRUwsUUFBUTt3QkFBRXFCLFFBQVEsRUFBRW5CLGVBQWU7Ozs7Ozs7Ozs7Ozt3RkFFM0VOLCtDQUFNO2dCQUFDaUIsSUFBSSxFQUFFLEVBQUU7Ozs7Ozt3RkFDZlMsTUFBTTswQkFBQyxDQUFNOzs7Ozs7Ozs7Ozs7QUFHcEIsQ0FBQztHQTlCUXhCLElBQUk7S0FBSkEsSUFBSTtBQWdDYixHQUFLLENBQUNXLE9BQU8sR0FBR2hCLDZEQUFVO01BQXBCZ0IsT0FBTztBQVNiLEdBQUssQ0FBQ0MsV0FBVyxHQUFHakIsNkRBQVU7TUFBeEJpQixXQUFXO0FBUWpCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHbEIsMkRBQVEscUJBQ1hDLG9EQUFZLEVBQ05DLHNEQUFjO01BRnpCZ0IsS0FBSztBQU1YLEdBQUssQ0FBQ0MsUUFBUSxHQUFHbkIsMkRBQVEscUJBQ2RDLHdEQUFnQixFQUNWQyxvREFBWTtNQUZ2QmlCLFFBQVE7QUFNZCxHQUFLLENBQUNFLFdBQVcsR0FBR3JCLDhEQUFXLHFCQU9oQkMsd0RBQWdCLEVBQ1ZDLHNEQUFjLEVBV3BCRCx3REFBZ0I7TUFuQnpCb0IsV0FBVztBQXdCakIsR0FBSyxDQUFDUSxNQUFNLEdBQUc3QixnRUFBYSxxQkFNakJDLG9EQUFZLEVBQ05DLHNEQUFjO01BUHpCMkIsTUFBTTtBQWlCWiwrREFBZXhCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Gb3JtLmpzP2ZmNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENPTE9SUywgV0VJR0hUUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IFNwYWNlciBmcm9tICcuL1NwYWNlcidcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi9HbG9iYWxTdHlsZXMuanMnXG5cbmZ1bmN0aW9uIEZvcm0oeyBwYXJlbnRDYWxsYmFjayB9KSB7XG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIHNldFVzZXJOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgLy8gRW52aWFuZG8gZGFkb3MgYW8gcGFyZW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBhcmVudENhbGxiYWNrKHVzZXJOYW1lKVxuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbdXNlck5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFRleHRXcmFwcGVyPlxuICAgICAgICA8VGl0bGU+Qm9hcy12aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cbiAgICAgICAgPFN1YlRpdGxlPkVzdGFtb3MgbXVpdG8gYW5pbWFkb3MgZW0gdGUgdmVyIG5vdmFtZW50ZSE8L1N1YlRpdGxlPlxuICAgICAgPC9UZXh0V3JhcHBlcj5cbiAgICAgIDxTcGFjZXIgc2l6ZT17MzR9IC8+XG4gICAgICA8Rm9ybVdyYXBwZXIgYWN0aW9uPVwiXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXN1YXJpb1wiPlVzdcOhcmlvIGRvIEdpdGh1YjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSd1c3VhcmlvJyB2YWx1ZT17dXNlck5hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICA8L0Zvcm1XcmFwcGVyPlxuICAgICAgPFNwYWNlciBzaXplPXsxMn0gLz5cbiAgICAgIDxCdXR0b24+RW50cmFyPC9CdXR0b24+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGZsZXg6IDE7XG5gXG5cbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgZ2FwOiAycHg7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLnBgXG4gIGNvbG9yOiAke0NPTE9SUy53aGl0ZX07XG4gIGZvbnQtd2VpZ2h0OiAke1dFSUdIVFMubWVkaXVtfTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG5gXG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLnBgXG4gIGNvbG9yOiAke0NPTE9SUy5ncmF5WzUwMF19O1xuICBmb250LXdlaWdodDogJHtXRUlHSFRTLnRoaW59O1xuICBmb250LXNpemU6IDFyZW07XG5gXG5cbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiAke0NPTE9SUy5ncmF5WzMwMF19O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7V0VJR0hUUy5ub3JtYWx9O1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9O1xuXG4gICAgaW5wdXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MUYyNTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGNvbG9yOiAke0NPTE9SUy5ncmF5WzMwMF19O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbmBcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsY2FsYyh2YXIoLS1zYXR1cmF0aW9uLWZhY3RvciwgMSkqODUuNiUpLDY0LjclKTs7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiAke0NPTE9SUy53aGl0ZX07XG4gIGZvbnQtd2VpZ2h0OiAke1dFSUdIVFMubm9ybWFsfTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LGNhbGModmFyKC0tc2F0dXJhdGlvbi1mYWN0b3IsIDEpKjUxLjQlKSw1Mi40JSk7O1xuICB9XG5cbmBcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVkIiwiQ09MT1JTIiwiV0VJR0hUUyIsIlNwYWNlciIsIkdsb2JhbFN0eWxlcyIsIkZvcm0iLCJwYXJlbnRDYWxsYmFjayIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiV3JhcHBlciIsIlRleHRXcmFwcGVyIiwiVGl0bGUiLCJTdWJUaXRsZSIsInNpemUiLCJGb3JtV3JhcHBlciIsImFjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJCdXR0b24iLCJkaXYiLCJwIiwid2hpdGUiLCJtZWRpdW0iLCJncmF5IiwidGhpbiIsImZvcm0iLCJub3JtYWwiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Form.js\n");

/***/ })

});