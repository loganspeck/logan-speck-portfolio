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

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ \"./components/Button/index.js\");\n/* harmony import */ var _yourData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../yourData */ \"./yourData.js\");\nvar _this = undefined;\n\n\n\n\n// Local Data\n\nvar _s = $RefreshSig$();\nvar Header = function(param) {\n    var handleWorkScroll = param.handleWorkScroll, handleAboutScroll = param.handleAboutScroll, isBlog = param.isBlog;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 flex flex-row items-center justify-between sticky bg-white top-0 z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                onClick: function() {\n                    return router.push(\"/\");\n                },\n                className: \"font-medium cursor-pointer mob:p-2 laptop:p-0\",\n                children: _yourData__WEBPACK_IMPORTED_MODULE_4__[\"default\"].name\n            }, void 0, false, {\n                fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            !isBlog ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleWorkScroll,\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleAboutScroll,\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this),\n                    !_yourData__WEBPACK_IMPORTED_MODULE_4__[\"default\"].hideBlog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: function() {\n                            return router.push(\"/blog\");\n                        },\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: function() {\n                            return window.open(\"mailto:loganspeck0@gmail.com\");\n                        },\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: function() {\n                            return router.push(\"/\");\n                        },\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this),\n                    !_yourData__WEBPACK_IMPORTED_MODULE_4__[\"default\"].hideBlog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: function() {\n                            return router.push(\"/blog\");\n                        },\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: function() {\n                            return window.open(\"mailto:hello@chetanverma.com\");\n                        },\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/las0082/Documents/react-portfolio-template/components/Header/index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDZDtBQUNLO0FBQy9CLGFBQWE7QUFDcUI7O0FBRWxDLElBQU1JLE1BQU0sR0FBRyxnQkFBcUQ7UUFBbERDLGdCQUFnQixTQUFoQkEsZ0JBQWdCLEVBQUVDLGlCQUFpQixTQUFqQkEsaUJBQWlCLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTs7SUFDM0QsSUFBTUMsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBQzFCLHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2RUFBNkU7OzBCQUMxRiw4REFBQ0MsSUFBRTtnQkFDREMsT0FBTyxFQUFFOzJCQUFNSixNQUFNLENBQUNLLElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQUE7Z0JBQy9CSCxTQUFTLEVBQUMsK0NBQStDOzBCQUV4RFAsc0RBQVM7Ozs7O3FCQUNQO1lBQ0osQ0FBQ0ksTUFBTSxpQkFDTiw4REFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLE1BQU07O2tDQUNuQiw4REFBQ1IsK0NBQU07d0JBQUNVLE9BQU8sRUFBRVAsZ0JBQWdCO2tDQUFFLE1BQUk7Ozs7OzZCQUFTO2tDQUNoRCw4REFBQ0gsK0NBQU07d0JBQUNVLE9BQU8sRUFBRU4saUJBQWlCO2tDQUFFLE9BQUs7Ozs7OzZCQUFTO29CQUNqRCxDQUFDSCwwREFBYSxrQkFDYiw4REFBQ0QsK0NBQU07d0JBQUNVLE9BQU8sRUFBRTttQ0FBTUosTUFBTSxDQUFDSyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUFBO2tDQUFFLE1BQUk7Ozs7OzZCQUFTO2tDQUU1RCw4REFBQ1gsK0NBQU07d0JBQUNVLE9BQU8sRUFBRTttQ0FBTUksTUFBTSxDQUFDQyxJQUFJLENBQUMsOEJBQThCLENBQUM7eUJBQUE7a0NBQUUsU0FFcEU7Ozs7OzZCQUFTOzs7Ozs7cUJBQ0wsaUJBRU4sOERBQUNSLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOztrQ0FDbkIsOERBQUNSLCtDQUFNO3dCQUFDVSxPQUFPLEVBQUU7bUNBQU1KLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFBQTtrQ0FBRSxNQUFJOzs7Ozs2QkFBUztvQkFDckQsQ0FBQ1YsMERBQWEsa0JBQ2IsOERBQUNELCtDQUFNO3dCQUFDVSxPQUFPLEVBQUU7bUNBQU1KLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFBQTtrQ0FBRSxNQUFJOzs7Ozs2QkFBUztrQ0FFNUQsOERBQUNYLCtDQUFNO3dCQUFDVSxPQUFPLEVBQUU7bUNBQU1JLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLDhCQUE4QixDQUFDO3lCQUFBO2tDQUFFLFNBRXBFOzs7Ozs2QkFBUzs7Ozs7O3FCQUNMOzs7Ozs7YUFFSixDQUNOO0NBQ0g7R0FsQ0tiLE1BQU07O1FBQ0tKLGtEQUFTOzs7QUFEcEJJLEtBQUFBLE1BQU07QUFvQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcz9kZTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uXCI7XG4vLyBMb2NhbCBEYXRhXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4veW91ckRhdGFcIjtcblxuY29uc3QgSGVhZGVyID0gKHsgaGFuZGxlV29ya1Njcm9sbCwgaGFuZGxlQWJvdXRTY3JvbGwsIGlzQmxvZyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHN0aWNreSBiZy13aGl0ZSB0b3AtMCB6LTEwXCI+XG4gICAgICA8aDFcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlciBtb2I6cC0yIGxhcHRvcDpwLTBcIlxuICAgICAgPlxuICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgPC9oMT5cbiAgICAgIHshaXNCbG9nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVdvcmtTY3JvbGx9Pldvcms8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFib3V0U2Nyb2xsfT5BYm91dDwvQnV0dG9uPlxuICAgICAgICAgIHshZGF0YS5oaWRlQmxvZyAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2Jsb2dcIil9PkJsb2c8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oXCJtYWlsdG86bG9nYW5zcGVjazBAZ21haWwuY29tXCIpfT5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+SG9tZTwvQnV0dG9uPlxuICAgICAgICAgIHshZGF0YS5oaWRlQmxvZyAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2Jsb2dcIil9PkJsb2c8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oXCJtYWlsdG86aGVsbG9AY2hldGFudmVybWEuY29tXCIpfT5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiQnV0dG9uIiwiZGF0YSIsIkhlYWRlciIsImhhbmRsZVdvcmtTY3JvbGwiLCJoYW5kbGVBYm91dFNjcm9sbCIsImlzQmxvZyIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DbGljayIsInB1c2giLCJuYW1lIiwiaGlkZUJsb2ciLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

});