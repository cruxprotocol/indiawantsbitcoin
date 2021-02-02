webpackHotUpdate_N_E("pages/index",{

/***/ "./components/email/message.js":
/*!*************************************!*\
  !*** ./components/email/message.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Message; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/email/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/amitsingh/Desktop/india-for-crypto/components/email/message.js\";\n\n\nfunction Message(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-4\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-row justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading2,\n        children: \"Message\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"\".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading2, \" mr-4\"),\n          children: [\"Choose a subject template \", props.messageIndex + 1, \"/\", props.totalMessageSlides]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          className: \"h-6 w-6 \".concat(props.messageIndex === 0 ? 'text-gray-300' : 'text-indigo-500', \" message-prev\"),\n          xmlns: \"http://www.w3.org/2000/svg\",\n          fill: \"none\",\n          viewBox: \"0 0 24 24\",\n          stroke: \"currentColor\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            strokeWidth: 2,\n            d: \"M15 19l-7-7 7-7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          className: \"h-6 w-6 \".concat(props.messageIndex === props.totalMessageSlides - 1 ? 'text-gray-300' : 'text-indigo-500', \" message-next\"),\n          xmlns: \"http://www.w3.org/2000/svg\",\n          fill: \"none\",\n          viewBox: \"0 0 24 24\",\n          stroke: \"currentColor\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            strokeWidth: 2,\n            d: \"M9 5l7 7-7 7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_1__[\"Swiper\"], {\n      slidesPerView: 1,\n      onSlideChange: props.onMessageSlideChange,\n      onSwiper: function onSwiper(swiper) {\n        return props.onMessageSwiperInit(swiper);\n      },\n      controller: {\n        control: props.instance\n      },\n      navigation: {\n        nextEl: \".message-next\",\n        prevEl: \".message-prev\"\n      },\n      className: \"my-4\",\n      children: Array.isArray(props.data) && props.data.map(function (e) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_1__[\"SwiperSlide\"], {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.swiperCard,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.swiperText,\n            children: \"Dear Sir,\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 25\n          }, _this), e.split('\\n').map(function (str, index) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.swiperText,\n              children: str\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 60\n            }, _this);\n          })]\n        }, e, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}\n_c = Message;\n\nvar _c;\n\n$RefreshReg$(_c, \"Message\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbWFpbC9tZXNzYWdlLmpzPzAxY2QiXSwibmFtZXMiOlsiTWVzc2FnZSIsInByb3BzIiwic3R5bGVzIiwiaGVhZGluZzIiLCJtZXNzYWdlSW5kZXgiLCJ0b3RhbE1lc3NhZ2VTbGlkZXMiLCJvbk1lc3NhZ2VTbGlkZUNoYW5nZSIsInN3aXBlciIsIm9uTWVzc2FnZVN3aXBlckluaXQiLCJjb250cm9sIiwiaW5zdGFuY2UiLCJuZXh0RWwiLCJwcmV2RWwiLCJBcnJheSIsImlzQXJyYXkiLCJkYXRhIiwibWFwIiwiZSIsInN3aXBlckNhcmQiLCJzd2lwZXJUZXh0Iiwic3BsaXQiLCJzdHIiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQUE7O0FBQ25DLHNCQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxZQUFLRCwwREFBTSxDQUFDQyxRQUFaLFVBQWQ7QUFBQSxtREFDK0JGLEtBQUssQ0FBQ0csWUFBTixHQUFxQixDQURwRCxPQUN3REgsS0FBSyxDQUFDSSxrQkFEOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBSyxtQkFBUyxvQkFBYUosS0FBSyxDQUFDRyxZQUFOLEtBQXVCLENBQXZCLEdBQTJCLGVBQTNCLEdBQTZDLGlCQUExRCxrQkFBZDtBQUEwRyxlQUFLLEVBQUMsNEJBQWhIO0FBQTZJLGNBQUksRUFBQyxNQUFsSjtBQUF5SixpQkFBTyxFQUFDLFdBQWpLO0FBQTZLLGdCQUFNLEVBQUMsY0FBcEw7QUFBQSxpQ0FDSTtBQUFNLHlCQUFhLEVBQUMsT0FBcEI7QUFBNEIsMEJBQWMsRUFBQyxPQUEzQztBQUFtRCx1QkFBVyxFQUFFLENBQWhFO0FBQW1FLGFBQUMsRUFBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU9JO0FBQUssbUJBQVMsb0JBQWFILEtBQUssQ0FBQ0csWUFBTixLQUF1QkgsS0FBSyxDQUFDSSxrQkFBTixHQUEyQixDQUFsRCxHQUFzRCxlQUF0RCxHQUF3RSxpQkFBckYsa0JBQWQ7QUFBcUksZUFBSyxFQUFDLDRCQUEzSTtBQUF3SyxjQUFJLEVBQUMsTUFBN0s7QUFBb0wsaUJBQU8sRUFBQyxXQUE1TDtBQUF3TSxnQkFBTSxFQUFDLGNBQS9NO0FBQUEsaUNBQ0k7QUFBTSx5QkFBYSxFQUFDLE9BQXBCO0FBQTRCLDBCQUFjLEVBQUMsT0FBM0M7QUFBbUQsdUJBQVcsRUFBRSxDQUFoRTtBQUFtRSxhQUFDLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFpQkkscUVBQUMsbURBQUQ7QUFDSSxtQkFBYSxFQUFFLENBRG5CO0FBRUksbUJBQWEsRUFBRUosS0FBSyxDQUFDSyxvQkFGekI7QUFHSSxjQUFRLEVBQUUsa0JBQUNDLE1BQUQ7QUFBQSxlQUFZTixLQUFLLENBQUNPLG1CQUFOLENBQTBCRCxNQUExQixDQUFaO0FBQUEsT0FIZDtBQUlJLGdCQUFVLEVBQUU7QUFBRUUsZUFBTyxFQUFFUixLQUFLLENBQUNTO0FBQWpCLE9BSmhCO0FBS0ksZ0JBQVUsRUFBRTtBQUNSQyxjQUFNLEVBQUUsZUFEQTtBQUVSQyxjQUFNLEVBQUU7QUFGQSxPQUxoQjtBQVNJLGVBQVMsRUFBQyxNQVRkO0FBQUEsZ0JBV0tDLEtBQUssQ0FBQ0MsT0FBTixDQUFjYixLQUFLLENBQUNjLElBQXBCLEtBQTZCZCxLQUFLLENBQUNjLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUFDLENBQUM7QUFBQSw0QkFDMUMscUVBQUMsd0RBQUQ7QUFBYSxtQkFBUyxFQUFFZiwwREFBTSxDQUFDZ0IsVUFBL0I7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUVoQiwwREFBTSxDQUFDaUIsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixFQU1LRixDQUFDLENBQUNHLEtBQUYsQ0FBUSxJQUFSLEVBQWNKLEdBQWQsQ0FBa0IsVUFBQ0ssR0FBRCxFQUFNQyxLQUFOO0FBQUEsZ0NBQWdCO0FBQUssdUJBQVMsRUFBRXBCLDBEQUFNLENBQUNpQixVQUF2QjtBQUFBLHdCQUFnREU7QUFBaEQsZUFBd0NDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWhCO0FBQUEsV0FBbEIsQ0FOTDtBQUFBLFdBQWdETCxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQwQztBQUFBLE9BQWhCO0FBWGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQ0g7S0EzQ3VCakIsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvZW1haWwvbWVzc2FnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nMn0+XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkaW5nMn0gbXItNGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIGEgc3ViamVjdCB0ZW1wbGF0ZSB7cHJvcHMubWVzc2FnZUluZGV4ICsgMX0ve3Byb3BzLnRvdGFsTWVzc2FnZVNsaWRlc31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtgaC02IHctNiAke3Byb3BzLm1lc3NhZ2VJbmRleCA9PT0gMCA/ICd0ZXh0LWdyYXktMzAwJyA6ICd0ZXh0LWluZGlnby01MDAnfSBtZXNzYWdlLXByZXZgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNMTUgMTlsLTctNyA3LTdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e2BoLTYgdy02ICR7cHJvcHMubWVzc2FnZUluZGV4ID09PSBwcm9wcy50b3RhbE1lc3NhZ2VTbGlkZXMgLSAxID8gJ3RleHQtZ3JheS0zMDAnIDogJ3RleHQtaW5kaWdvLTUwMCd9IG1lc3NhZ2UtbmV4dGB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk05IDVsNyA3LTcgN1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cbiAgICAgICAgICAgICAgICBvblNsaWRlQ2hhbmdlPXtwcm9wcy5vbk1lc3NhZ2VTbGlkZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gcHJvcHMub25NZXNzYWdlU3dpcGVySW5pdChzd2lwZXIpfVxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3sgY29udHJvbDogcHJvcHMuaW5zdGFuY2UgfX1cbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIG5leHRFbDogXCIubWVzc2FnZS1uZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHByZXZFbDogXCIubWVzc2FnZS1wcmV2XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShwcm9wcy5kYXRhKSAmJiBwcm9wcy5kYXRhLm1hcChlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT17c3R5bGVzLnN3aXBlckNhcmR9IGtleT17ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN3aXBlclRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlYXIgU2lyLFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Uuc3BsaXQoJ1xcbicpLm1hcCgoc3RyLCBpbmRleCkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZXJUZXh0fSBrZXk9e2luZGV4fT57c3RyfTwvZGl2Pil9XG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/email/message.js\n");

/***/ })

})