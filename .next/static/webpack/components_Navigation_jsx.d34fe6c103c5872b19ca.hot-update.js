"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Navigation_jsx",{

/***/ "./portfolio.js":
/*!**********************!*\
  !*** ./portfolio.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"greetings\": function() { return /* binding */ greetings; },\n/* harmony export */   \"openSource\": function() { return /* binding */ openSource; },\n/* harmony export */   \"contact\": function() { return /* binding */ contact; },\n/* harmony export */   \"socialLinks\": function() { return /* binding */ socialLinks; },\n/* harmony export */   \"skillsSection\": function() { return /* binding */ skillsSection; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; }\n/* harmony export */ });\n/* harmony import */ var react_easy_emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-easy-emoji */ \"./node_modules/react-easy-emoji/index.js\");\n/* harmony import */ var react_easy_emoji__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_easy_emoji__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar greetings = {\n  name: \"Ananda S Holla\",\n  title: \"Hii all, I'm Ananda S Holla\",\n  description: \"A Passionate Aspiring Full Stack Developer. I have interest in desgining and \\n\\t\\tWant to start my career in Front end development in a Company where I can learn and improve my skills and \\n\\t\\talso able to contribute towards Individual and Company Growth\",\n  resumeLink: \"https://drive.google.com/drive/folders/1z5dlbTrKOtFvRf_JkYwJ7VXmjq084bHC\"\n};\nvar openSource = {\n  githubUserName: \"Anands-88\"\n};\nvar contact = {};\nvar socialLinks = {\n  twitter: \"twitter.com/AnandSHolla8\",\n  github: \"github.com/Anands-88\",\n  linkedin: \"linkedin.com/in/ananda-s-holla-268b94147\"\n};\nvar skillsSection = {\n  title: \"What I do\",\n  subTitle: \"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK\",\n  skills: [react_easy_emoji__WEBPACK_IMPORTED_MODULE_0___default()(\"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications\"), react_easy_emoji__WEBPACK_IMPORTED_MODULE_0___default()(\"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks\"), react_easy_emoji__WEBPACK_IMPORTED_MODULE_0___default()(\"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean\")],\n  softwareSkills: [{\n    skillName: \"html-5\",\n    fontAwesomeClassname: \"vscode-icons:file-type-html\"\n  }, {\n    skillName: \"css3\",\n    fontAwesomeClassname: \"vscode-icons:file-type-css\"\n  }, {\n    skillName: \"JavaScript\",\n    fontAwesomeClassname: \"logos:javascript\"\n  }, {\n    skillName: \"reactjs\",\n    fontAwesomeClassname: \"vscode-icons:file-type-reactjs\"\n  }, {\n    skillName: \"nodejs\",\n    fontAwesomeClassname: \"logos:nodejs-icon\"\n  }, {\n    skillName: \"mongoDB\",\n    fontAwesomeClassname: \"vscode-icons:file-type-mongo\"\n  }, {\n    skillName: \"git\",\n    fontAwesomeClassname: \"logos:git-icon\"\n  }]\n};\nvar projects = [{\n  name: \"Nike India Clone\",\n  image: \"./img/homenike.png\",\n  desc: \"A Web Application to buy all types of Sports Wears\",\n  tech: \"We used HTML CSS Javascript Node Js Express MongoDB and EJS to build this Project\",\n  github: \"https://github.com/Anands-88/NikeIndia\",\n  link: \"nike-in-masai-project.herokuapp.com/\"\n}, {\n  name: \"KFC India Clone\",\n  image: \"./img/kfc.png\",\n  desc: \"Web Application to Buy fast food items\",\n  tech: \"We used HTML CSS JavaScript to build this Project\",\n  github: \"https://github.com/Anands-88/Kfc-Project\",\n  link: \"kfc-project-anands-88.vercel.app/\"\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRSxnQkFEa0I7QUFFeEJDLEVBQUFBLEtBQUssRUFBRSw2QkFGaUI7QUFHeEJDLEVBQUFBLFdBQVcsb1FBSGE7QUFPeEJDLEVBQUFBLFVBQVUsRUFBRTtBQVBZLENBQWxCO0FBVUEsSUFBTUMsVUFBVSxHQUFHO0FBQ3pCQyxFQUFBQSxjQUFjLEVBQUU7QUFEUyxDQUFuQjtBQUlBLElBQU1DLE9BQU8sR0FBRyxFQUFoQjtBQUVBLElBQU1DLFdBQVcsR0FBRztBQUMxQkMsRUFBQUEsT0FBTyxFQUFFLDBCQURpQjtBQUUxQkMsRUFBQUEsTUFBTSxFQUFFLHNCQUZrQjtBQUcxQkMsRUFBQUEsUUFBUSxFQUFFO0FBSGdCLENBQXBCO0FBTUEsSUFBTUMsYUFBYSxHQUFHO0FBQzVCVixFQUFBQSxLQUFLLEVBQUUsV0FEcUI7QUFFNUJXLEVBQUFBLFFBQVEsRUFDUCxrRUFIMkI7QUFJNUJDLEVBQUFBLE1BQU0sRUFBRSxDQUNQZix1REFBSyxDQUNKLCtGQURJLENBREUsRUFJUEEsdURBQUssQ0FDSixpRUFESSxDQUpFLEVBT1BBLHVEQUFLLENBQ0osNkVBREksQ0FQRSxDQUpvQjtBQWdCNUJnQixFQUFBQSxjQUFjLEVBQUUsQ0FDZjtBQUNDQyxJQUFBQSxTQUFTLEVBQUUsUUFEWjtBQUVDQyxJQUFBQSxvQkFBb0IsRUFBRTtBQUZ2QixHQURlLEVBS2Y7QUFDQ0QsSUFBQUEsU0FBUyxFQUFFLE1BRFo7QUFFQ0MsSUFBQUEsb0JBQW9CLEVBQUU7QUFGdkIsR0FMZSxFQVNmO0FBQ0NELElBQUFBLFNBQVMsRUFBRSxZQURaO0FBRUNDLElBQUFBLG9CQUFvQixFQUFFO0FBRnZCLEdBVGUsRUFhZjtBQUNDRCxJQUFBQSxTQUFTLEVBQUUsU0FEWjtBQUVDQyxJQUFBQSxvQkFBb0IsRUFBRTtBQUZ2QixHQWJlLEVBaUJmO0FBQ0NELElBQUFBLFNBQVMsRUFBRSxRQURaO0FBRUNDLElBQUFBLG9CQUFvQixFQUFFO0FBRnZCLEdBakJlLEVBcUJmO0FBQ0NELElBQUFBLFNBQVMsRUFBRSxTQURaO0FBRUNDLElBQUFBLG9CQUFvQixFQUFFO0FBRnZCLEdBckJlLEVBeUJmO0FBQ0NELElBQUFBLFNBQVMsRUFBRSxLQURaO0FBRUNDLElBQUFBLG9CQUFvQixFQUFFO0FBRnZCLEdBekJlO0FBaEJZLENBQXRCO0FBZ0RBLElBQU1DLFFBQVEsR0FBRyxDQUN2QjtBQUNDakIsRUFBQUEsSUFBSSxFQUFFLGtCQURQO0FBRUNrQixFQUFBQSxLQUFLLEVBQUUsb0JBRlI7QUFHQ0MsRUFBQUEsSUFBSSxFQUFFLG9EQUhQO0FBSUNDLEVBQUFBLElBQUksRUFBQyxtRkFKTjtBQUtDWCxFQUFBQSxNQUFNLEVBQUUsd0NBTFQ7QUFNQ1ksRUFBQUEsSUFBSSxFQUFFO0FBTlAsQ0FEdUIsRUFTdkI7QUFDQ3JCLEVBQUFBLElBQUksRUFBRSxpQkFEUDtBQUVDa0IsRUFBQUEsS0FBSyxFQUFFLGVBRlI7QUFHQ0MsRUFBQUEsSUFBSSwwQ0FITDtBQUlDQyxFQUFBQSxJQUFJLEVBQUMsbURBSk47QUFLQ1gsRUFBQUEsTUFBTSxFQUFFLDBDQUxUO0FBTUNZLEVBQUFBLElBQUksRUFBRTtBQU5QLENBVHVCLENBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BvcnRmb2xpby5qcz85YWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbW9qaSBmcm9tIFwicmVhY3QtZWFzeS1lbW9qaVwiO1xuXG5leHBvcnQgY29uc3QgZ3JlZXRpbmdzID0ge1xuXHRuYW1lOiBcIkFuYW5kYSBTIEhvbGxhXCIsXG5cdHRpdGxlOiBcIkhpaSBhbGwsIEknbSBBbmFuZGEgUyBIb2xsYVwiLFxuXHRkZXNjcmlwdGlvbjpcblx0YEEgUGFzc2lvbmF0ZSBBc3BpcmluZyBGdWxsIFN0YWNrIERldmVsb3Blci4gSSBoYXZlIGludGVyZXN0IGluIGRlc2dpbmluZyBhbmQgXG5cdFx0V2FudCB0byBzdGFydCBteSBjYXJlZXIgaW4gRnJvbnQgZW5kIGRldmVsb3BtZW50IGluIGEgQ29tcGFueSB3aGVyZSBJIGNhbiBsZWFybiBhbmQgaW1wcm92ZSBteSBza2lsbHMgYW5kIFxuXHRcdGFsc28gYWJsZSB0byBjb250cmlidXRlIHRvd2FyZHMgSW5kaXZpZHVhbCBhbmQgQ29tcGFueSBHcm93dGhgLFxuXHRyZXN1bWVMaW5rOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzF6NWRsYlRyS090RnZSZl9Ka1l3SjdWWG1qcTA4NGJIQ1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IG9wZW5Tb3VyY2UgPSB7XG5cdGdpdGh1YlVzZXJOYW1lOiBcIkFuYW5kcy04OFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbExpbmtzID0ge1xuXHR0d2l0dGVyOiBcInR3aXR0ZXIuY29tL0FuYW5kU0hvbGxhOFwiLFxuXHRnaXRodWI6IFwiZ2l0aHViLmNvbS9BbmFuZHMtODhcIixcblx0bGlua2VkaW46IFwibGlua2VkaW4uY29tL2luL2FuYW5kYS1zLWhvbGxhLTI2OGI5NDE0N1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IHNraWxsc1NlY3Rpb24gPSB7XG5cdHRpdGxlOiBcIldoYXQgSSBkb1wiLFxuXHRzdWJUaXRsZTpcblx0XHRcIkNSQVpZIEZVTEwgU1RBQ0sgREVWRUxPUEVSIFdITyBXQU5UUyBUTyBFWFBMT1JFIEVWRVJZIFRFQ0ggU1RBQ0tcIixcblx0c2tpbGxzOiBbXG5cdFx0ZW1vamkoXG5cdFx0XHRcIuKaoSBEZXZlbG9wIGhpZ2hseSBpbnRlcmFjdGl2ZSBGcm9udCBlbmQgLyBVc2VyIEludGVyZmFjZXMgZm9yIHlvdXIgd2ViIGFuZCBtb2JpbGUgYXBwbGljYXRpb25zXCJcblx0XHQpLFxuXHRcdGVtb2ppKFxuXHRcdFx0XCLimqEgUHJvZ3Jlc3NpdmUgV2ViIEFwcGxpY2F0aW9ucyAoIFBXQSApIGluIG5vcm1hbCBhbmQgU1BBIFN0YWNrc1wiXG5cdFx0KSxcblx0XHRlbW9qaShcblx0XHRcdFwi4pqhIEludGVncmF0aW9uIG9mIHRoaXJkIHBhcnR5IHNlcnZpY2VzIHN1Y2ggYXMgRmlyZWJhc2UvIEFXUyAvIERpZ2l0YWwgT2NlYW5cIlxuXHRcdCksXG5cdF0sXG5cblx0c29mdHdhcmVTa2lsbHM6IFtcblx0XHR7XG5cdFx0XHRza2lsbE5hbWU6IFwiaHRtbC01XCIsXG5cdFx0XHRmb250QXdlc29tZUNsYXNzbmFtZTogXCJ2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLWh0bWxcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNraWxsTmFtZTogXCJjc3MzXCIsXG5cdFx0XHRmb250QXdlc29tZUNsYXNzbmFtZTogXCJ2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLWNzc1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2tpbGxOYW1lOiBcIkphdmFTY3JpcHRcIixcblx0XHRcdGZvbnRBd2Vzb21lQ2xhc3NuYW1lOiBcImxvZ29zOmphdmFzY3JpcHRcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNraWxsTmFtZTogXCJyZWFjdGpzXCIsXG5cdFx0XHRmb250QXdlc29tZUNsYXNzbmFtZTogXCJ2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLXJlYWN0anNcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNraWxsTmFtZTogXCJub2RlanNcIixcblx0XHRcdGZvbnRBd2Vzb21lQ2xhc3NuYW1lOiBcImxvZ29zOm5vZGVqcy1pY29uXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRza2lsbE5hbWU6IFwibW9uZ29EQlwiLFxuXHRcdFx0Zm9udEF3ZXNvbWVDbGFzc25hbWU6IFwidnNjb2RlLWljb25zOmZpbGUtdHlwZS1tb25nb1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2tpbGxOYW1lOiBcImdpdFwiLFxuXHRcdFx0Zm9udEF3ZXNvbWVDbGFzc25hbWU6IFwibG9nb3M6Z2l0LWljb25cIixcblx0XHR9LFxuXHRdLFxufTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuXHR7XG5cdFx0bmFtZTogXCJOaWtlIEluZGlhIENsb25lXCIsXG5cdFx0aW1hZ2U6IFwiLi9pbWcvaG9tZW5pa2UucG5nXCIsXG5cdFx0ZGVzYzogXCJBIFdlYiBBcHBsaWNhdGlvbiB0byBidXkgYWxsIHR5cGVzIG9mIFNwb3J0cyBXZWFyc1wiLFxuXHRcdHRlY2g6XCJXZSB1c2VkIEhUTUwgQ1NTIEphdmFzY3JpcHQgTm9kZSBKcyBFeHByZXNzIE1vbmdvREIgYW5kIEVKUyB0byBidWlsZCB0aGlzIFByb2plY3RcIixcblx0XHRnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuYW5kcy04OC9OaWtlSW5kaWFcIixcblx0XHRsaW5rOiBcIm5pa2UtaW4tbWFzYWktcHJvamVjdC5oZXJva3VhcHAuY29tL1wiLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJLRkMgSW5kaWEgQ2xvbmVcIixcblx0XHRpbWFnZTogXCIuL2ltZy9rZmMucG5nXCIsXG5cdFx0ZGVzYzogYFdlYiBBcHBsaWNhdGlvbiB0byBCdXkgZmFzdCBmb29kIGl0ZW1zYCxcblx0XHR0ZWNoOlwiV2UgdXNlZCBIVE1MIENTUyBKYXZhU2NyaXB0IHRvIGJ1aWxkIHRoaXMgUHJvamVjdFwiLFxuXHRcdGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vQW5hbmRzLTg4L0tmYy1Qcm9qZWN0XCIsXG5cdFx0bGluazogXCJrZmMtcHJvamVjdC1hbmFuZHMtODgudmVyY2VsLmFwcC9cIixcblx0fSxcbl07XG5cbiJdLCJuYW1lcyI6WyJlbW9qaSIsImdyZWV0aW5ncyIsIm5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmVzdW1lTGluayIsIm9wZW5Tb3VyY2UiLCJnaXRodWJVc2VyTmFtZSIsImNvbnRhY3QiLCJzb2NpYWxMaW5rcyIsInR3aXR0ZXIiLCJnaXRodWIiLCJsaW5rZWRpbiIsInNraWxsc1NlY3Rpb24iLCJzdWJUaXRsZSIsInNraWxscyIsInNvZnR3YXJlU2tpbGxzIiwic2tpbGxOYW1lIiwiZm9udEF3ZXNvbWVDbGFzc25hbWUiLCJwcm9qZWN0cyIsImltYWdlIiwiZGVzYyIsInRlY2giLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./portfolio.js\n");

/***/ })

});