"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/MessageBoxWrapper.js":
/*!************************************!*\
  !*** ./pages/MessageBoxWrapper.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./pages/constants.js\");\n/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageList */ \"./pages/MessageList.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/MessageBoxWrapper.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzcyMDgwMSwiZXhwIjoxOTU5Mjk2ODAxfQ.YS8qUYJ_RmQ5NT3Z-RzuXTlEKgeIBI4gqTRh5hbdTCo';\nvar SUPABASE_URL = 'https://xxkzzdvxgsaznvlwicmx.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_8__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\n\nfunction MessageBoxWrapper() {\n  _s();\n\n  var _jsxDEV2;\n\n  var _useState = (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      _useState2 = (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      mensagem = _useState2[0],\n      setMensagem = _useState2[1];\n\n  var _useState3 = (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      _useState4 = (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState3, 2),\n      listaMensagens = _useState4[0],\n      setListaMensagens = _useState4[1];\n\n  (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    // Fetch feito pelo supabase\n    supabaseClient.from('mensagens').select('*').then(function (_ref) {\n      var data = _ref.data;\n      // Retorna body, count, dados cadastrados e status\n      setListaMensagens(data);\n    });\n  }, []);\n\n  var handleChangeMessage = function handleChangeMessage(event) {\n    var targetValue = event.target.value;\n    setMensagem(targetValue);\n  };\n\n  var handleKeyDown = function handleKeyDown(event) {\n    // Criando objeto da mensagem;\n    var objetoMensagem = {};\n    objetoMensagem = {\n      usuario: 'usuário',\n      // todo\n      mensagem: mensagem,\n      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)()\n    };\n\n    if (event.key === 'Enter') {\n      event.preventDefault(); // evitar qubra de linha;\n\n      supabaseClient.from('mensagens').insert([objetoMensagem]).then(function (_ref2) {\n        var data = _ref2.data;\n        setListaMensagens(function (prevState) {\n          return [data[0]].concat((0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevState));\n        });\n      });\n      setMensagem(''); // limpar textfield\n    }\n\n    ;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MessageList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      listaMensagens: listaMensagens\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Form, {\n      action: \"\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TextField, (_jsxDEV2 = {\n        type: \"text\",\n        placeholder: \"Insira sua mensagem aqui...\"\n      }, (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"type\", \"textarea\"), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"value\", mensagem), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onChange\", handleChangeMessage), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onKeyDown\", handleKeyDown), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MessageBoxWrapper, \"Nf4SWOkjfEjV+qqIlW7yxEr8ywg=\");\n\n_c = MessageBoxWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBoxWrapper);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"MessageBoxWrapper__Wrapper\",\n  componentId: \"sc-nn9ks7-0\"\n})([\"position:relative;display:flex;flex-direction:column;flex:1;height:80%;background-color:\", \";border-radius:5px;padding:16px;\"], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[700]);\n_c2 = Wrapper;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].form.withConfig({\n  displayName: \"MessageBoxWrapper__Form\",\n  componentId: \"sc-nn9ks7-1\"\n})([\"display:flex;align-items:center;\"]);\n_c3 = Form;\nvar TextField = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].textarea.withConfig({\n  displayName: \"MessageBoxWrapper__TextField\",\n  componentId: \"sc-nn9ks7-2\"\n})([\"width:100%;height:80px;border:0;resize:none;border-radius:5px;padding:6px 8px;background-color:\", \";margin-right:16px;color:\", \";\"], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[900], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[100]);\n_c4 = TextField;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"MessageBoxWrapper\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Form\");\n$RefreshReg$(_c4, \"TextField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU5ULENBQWI7TUFBTThCO0FBV04sSUFBTUcsSUFBSSxHQUFHbEMsMEVBQUg7QUFBQTtBQUFBO0FBQUEsd0NBQVY7TUFBTWtDO0FBS04sSUFBTUUsU0FBUyxHQUFHcEMsOEVBQUg7QUFBQTtBQUFBO0FBQUEsMElBT09DLHdEQVBQLEVBU0pBLHdEQVRJLENBQWY7TUFBTW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01lc3NhZ2VCb3hXcmFwcGVyLmpzPzUyZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgTWVzc2FnZUxpc3QgZnJvbSAnLi9NZXNzYWdlTGlzdCc7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xuY29uc3QgU1VQQUJBU0VfQU5PTl9LRVkgPSAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnliMnhsSWpvaVlXNXZiaUlzSW1saGRDSTZNVFkwTXpjeU1EZ3dNU3dpWlhod0lqb3hPVFU1TWprMk9EQXhmUS5ZUzhxVVlKX1JtUTVOVDNaLVJ6dVhUbEVLZ2VJQkk0Z3FUUmg1aGJkVENvJ1xuY29uc3QgU1VQQUJBU0VfVVJMID0gJ2h0dHBzOi8veHhrenpkdnhnc2F6bnZsd2ljbXguc3VwYWJhc2UuY28nXG5cbmNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQU5PTl9LRVkpO1xuXG5mdW5jdGlvbiBNZXNzYWdlQm94V3JhcHBlcigpIHtcbiAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsaXN0YU1lbnNhZ2Vucywgc2V0TGlzdGFNZW5zYWdlbnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmV0Y2ggZmVpdG8gcGVsbyBzdXBhYmFzZVxuICAgIHN1cGFiYXNlQ2xpZW50XG4gICAgICAuZnJvbSgnbWVuc2FnZW5zJylcbiAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIC8vIFJldG9ybmEgYm9keSwgY291bnQsIGRhZG9zIGNhZGFzdHJhZG9zIGUgc3RhdHVzXG4gICAgICAgIHNldExpc3RhTWVuc2FnZW5zKGRhdGEpXG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZU1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHNldE1lbnNhZ2VtKHRhcmdldFZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAvLyBDcmlhbmRvIG9iamV0byBkYSBtZW5zYWdlbTtcbiAgICBsZXQgb2JqZXRvTWVuc2FnZW0gPSB7fTtcbiAgICBvYmpldG9NZW5zYWdlbSA9IHtcbiAgICAgIHVzdWFyaW86ICd1c3XDoXJpbycsIC8vIHRvZG9cbiAgICAgIG1lbnNhZ2VtLFxuICAgICAgaWQ6IHV1aWR2NCgpXG4gICAgfTtcblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIGV2aXRhciBxdWJyYSBkZSBsaW5oYTtcbiAgICAgIHN1cGFiYXNlQ2xpZW50XG4gICAgICAgIC5mcm9tKCdtZW5zYWdlbnMnKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICBvYmpldG9NZW5zYWdlbVxuICAgICAgICBdKVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBzZXRMaXN0YU1lbnNhZ2VucyhwcmV2U3RhdGUgPT4gW2RhdGFbMF0sIC4uLnByZXZTdGF0ZV0pO1xuICAgICAgICB9KTtcbiAgICAgIHNldE1lbnNhZ2VtKCcnKTsgLy8gbGltcGFyIHRleHRmaWVsZFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxNZXNzYWdlTGlzdCBsaXN0YU1lbnNhZ2Vucz17bGlzdGFNZW5zYWdlbnN9IC8+XG4gICAgICA8Rm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uJ1xuICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNZXNzYWdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb3hXcmFwcGVyO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuZ3JheVs3MDBdfTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNnB4O1xuYFxuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmNvbnN0IFRleHRGaWVsZCA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyOiAwO1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuZ3JheVs5MDBdfTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBjb2xvcjogJHtDT0xPUlMuZ3JheVsxMDBdfTtcbmBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ09MT1JTIiwiTWVzc2FnZUxpc3QiLCJ2NCIsInV1aWR2NCIsImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FOT05fS0VZIiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VDbGllbnQiLCJNZXNzYWdlQm94V3JhcHBlciIsIm1lbnNhZ2VtIiwic2V0TWVuc2FnZW0iLCJsaXN0YU1lbnNhZ2VucyIsInNldExpc3RhTWVuc2FnZW5zIiwiZnJvbSIsInNlbGVjdCIsInRoZW4iLCJkYXRhIiwiaGFuZGxlQ2hhbmdlTWVzc2FnZSIsImV2ZW50IiwidGFyZ2V0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUtleURvd24iLCJvYmpldG9NZW5zYWdlbSIsInVzdWFyaW8iLCJpZCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaW5zZXJ0IiwicHJldlN0YXRlIiwiV3JhcHBlciIsImRpdiIsImdyYXkiLCJGb3JtIiwiZm9ybSIsIlRleHRGaWVsZCIsInRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MessageBoxWrapper.js\n");

/***/ })

});