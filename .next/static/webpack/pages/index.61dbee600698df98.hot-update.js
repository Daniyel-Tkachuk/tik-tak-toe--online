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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/game.module.css */ \"./styles/game.module.css\");\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useGameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useGameState */ \"./hooks/useGameState.js\");\n/* harmony import */ var _components_gameInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/gameInfo */ \"./components/gameInfo.jsx\");\n/* harmony import */ var _components_gameCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/gameCell */ \"./components/gameCell.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const { cells, currentStep, handleCellClick, handleResetClick, isDraw, winnerSequence, winnerSymbol } = (0,_hooks_useGameState__WEBPACK_IMPORTED_MODULE_3__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default().game),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameInfo__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                isDraw: isDraw,\n                winnerSymbol: winnerSymbol,\n                currentStep: currentStep\n            }, void 0, false, {\n                fileName: \"F:\\\\IT-Incubator\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-field\"]),\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameCell__WEBPACK_IMPORTED_MODULE_5__.GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: ()=>handleCellClick(index),\n                        symbol: symbol\n                    }, index, false, {\n                        fileName: \"F:\\\\IT-Incubator\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"F:\\\\IT-Incubator\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default().reset),\n                onClick: handleResetClick,\n                children: \"reset\"\n            }, void 0, false, {\n                fileName: \"F:\\\\IT-Incubator\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\IT-Incubator\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"FxdGjLk7+OVpaInVYreDRXp4kjQ=\", false, function() {\n    return [\n        _hooks_useGameState__WEBPACK_IMPORTED_MODULE_3__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ2dCO0FBQ0k7QUFDSDtBQUNBO0FBUWpDLFNBQVNLOztJQUN0QixNQUFNLEVBQ0pDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxlQUFlLEVBQ2ZDLGdCQUFnQixFQUNoQkMsTUFBTSxFQUNOQyxjQUFjLEVBQ2RDLFlBQVksRUFDYixHQUFHVixpRUFBWUE7SUFFaEIscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVdiLHFFQUFjOzswQkFDNUIsOERBQUNFLDBEQUFRQTtnQkFDUE8sUUFBUUE7Z0JBQ1JFLGNBQWNBO2dCQUNkTCxhQUFhQTs7Ozs7OzBCQUVmLDhEQUFDTTtnQkFBSUMsV0FBV2IsOEVBQW9COzBCQUNqQ0ssTUFBTVMsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNsQiw4REFBQ2IsMERBQVFBO3dCQUVQYyxRQUFRLEVBQUVQLDJCQUFBQSxxQ0FBQUEsZUFBZ0JRLFFBQVEsQ0FBQ0Y7d0JBQ25DRyxTQUFTLElBQU1aLGdCQUFnQlM7d0JBQy9CRCxRQUFRQTt1QkFISEM7Ozs7Ozs7Ozs7MEJBT1gsOERBQUNJO2dCQUFPUCxXQUFXYixzRUFBZTtnQkFBRW1CLFNBQVNYOzBCQUFrQjs7Ozs7Ozs7Ozs7O0FBS3JFO0dBakN3Qko7O1FBU2xCSCw2REFBWUE7OztLQVRNRyIsInNvdXJjZXMiOlsiRjpcXElULUluY3ViYXRvclxcdGlrLXRhay10b2Utb25saW5lXFxwYWdlc1xcaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZ2FtZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7dXNlR2FtZVN0YXRlfSBmcm9tIFwiLi4vaG9va3MvdXNlR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7R2FtZUluZm99IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVJbmZvXCI7XHJcbmltcG9ydCB7R2FtZUNlbGx9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVDZWxsXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCB7XHJcbiAgICBjZWxscyxcclxuICAgIGN1cnJlbnRTdGVwLFxyXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxyXG4gICAgaGFuZGxlUmVzZXRDbGljayxcclxuICAgIGlzRHJhdyxcclxuICAgIHdpbm5lclNlcXVlbmNlLFxyXG4gICAgd2lubmVyU3ltYm9sLFxyXG4gIH0gPSB1c2VHYW1lU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJnYW1lXCJdfT5cclxuICAgICAgPEdhbWVJbmZvXHJcbiAgICAgICAgaXNEcmF3PXtpc0RyYXd9XHJcbiAgICAgICAgd2lubmVyU3ltYm9sPXt3aW5uZXJTeW1ib2x9XHJcbiAgICAgICAgY3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZ2FtZS1maWVsZFwiXX0+XHJcbiAgICAgICAge2NlbGxzLm1hcCgoc3ltYm9sLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEdhbWVDZWxsXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDZWxsQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICBzeW1ib2w9e3N5bWJvbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1wicmVzZXRcIl19IG9uQ2xpY2s9e2hhbmRsZVJlc2V0Q2xpY2t9PlxyXG4gICAgICAgIHJlc2V0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZUdhbWVTdGF0ZSIsIkdhbWVJbmZvIiwiR2FtZUNlbGwiLCJIb21lUGFnZSIsImNlbGxzIiwiY3VycmVudFN0ZXAiLCJoYW5kbGVDZWxsQ2xpY2siLCJoYW5kbGVSZXNldENsaWNrIiwiaXNEcmF3Iiwid2lubmVyU2VxdWVuY2UiLCJ3aW5uZXJTeW1ib2wiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzeW1ib2wiLCJpbmRleCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});