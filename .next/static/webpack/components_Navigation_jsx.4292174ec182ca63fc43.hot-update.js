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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"greetings\": function() { return /* binding */ greetings; },\n/* harmony export */   \"openSource\": function() { return /* binding */ openSource; },\n/* harmony export */   \"contact\": function() { return /* binding */ contact; },\n/* harmony export */   \"socialLinks\": function() { return /* binding */ socialLinks; },\n/* harmony export */   \"skillsSection\": function() { return /* binding */ skillsSection; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar greetings = {\n  name: \"Ananda S Holla\",\n  title: \"Hii all, I'm Ananda S Holla\",\n  description: \"A Passionate Aspiring Full Stack Developer. I have interest in desgining and \\n\\t\\tWant to start my career in Front end development in a Company where I can learn and improve my skills and \\n\\t\\talso able to contribute towards Individual and Company Growth\",\n  resumeLink: \"https://drive.google.com/drive/folders/1z5dlbTrKOtFvRf_JkYwJ7VXmjq084bHC\"\n};\nvar openSource = {\n  githubUserName: \"Anands-88\"\n};\nvar contact = {};\nvar socialLinks = {\n  twitter: \"twitter.com/AnandSHolla8\",\n  github: \"github.com/Anands-88\",\n  linkedin: \"linkedin.com/in/ananda-s-holla-268b94147\"\n};\nvar skillsSection = {\n  title: \"Skills\",\n  subTitle: \"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK\",\n  // skills: [\n  // \temoji(\n  // \t\t\"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications\"\n  // \t),\n  // \temoji(\n  // \t\t\"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks\"\n  // \t),\n  // \temoji(\n  // \t\t\"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean\"\n  // \t),\n  // ],\n  softwareSkills: [{\n    skillName: \"html-5\",\n    fontAwesomeClassname: \"vscode-icons:file-type-html\"\n  }, {\n    skillName: \"css3\",\n    fontAwesomeClassname: \"vscode-icons:file-type-css\"\n  }, {\n    skillName: \"JavaScript\",\n    fontAwesomeClassname: \"logos:javascript\"\n  }, {\n    skillName: \"reactjs\",\n    fontAwesomeClassname: \"vscode-icons:file-type-reactjs\"\n  }, {\n    skillName: \"nodejs\",\n    fontAwesomeClassname: \"logos:nodejs-icon\"\n  }, {\n    skillName: \"mongoDB\",\n    fontAwesomeClassname: \"vscode-icons:file-type-mongo\"\n  }, {\n    skillName: \"git\",\n    fontAwesomeClassname: \"logos:git-icon\"\n  }]\n};\nvar projects = [{\n  name: \"Nike India Clone\",\n  image: \"./img/homenike.png\",\n  desc: \"A Web Application to buy all types of Sports Wears\",\n  tech: \"We used HTML CSS Javascript Node Js Express MongoDB and EJS to build this Project\",\n  github: \"https://github.com/Anands-88/NikeIndia\",\n  link: \"nike-in-masai-project.herokuapp.com/\"\n}, {\n  name: \"KFC India Clone\",\n  image: \"./img/kfc.png\",\n  desc: \"Web Application to Buy fast food items\",\n  tech: \"We used HTML CSS JavaScript to build this Project\",\n  github: \"https://github.com/Anands-88/Kfc-Project\",\n  link: \"kfc-project-anands-88.vercel.app/\"\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUMsU0FBUyxHQUFHO0FBQ3hCQyxFQUFBQSxJQUFJLEVBQUUsZ0JBRGtCO0FBRXhCQyxFQUFBQSxLQUFLLEVBQUUsNkJBRmlCO0FBR3hCQyxFQUFBQSxXQUFXLG9RQUhhO0FBT3hCQyxFQUFBQSxVQUFVLEVBQUU7QUFQWSxDQUFsQjtBQVVBLElBQU1DLFVBQVUsR0FBRztBQUN6QkMsRUFBQUEsY0FBYyxFQUFFO0FBRFMsQ0FBbkI7QUFJQSxJQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFFQSxJQUFNQyxXQUFXLEdBQUc7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRSwwQkFEaUI7QUFFMUJDLEVBQUFBLE1BQU0sRUFBRSxzQkFGa0I7QUFHMUJDLEVBQUFBLFFBQVEsRUFBRTtBQUhnQixDQUFwQjtBQU1BLElBQU1DLGFBQWEsR0FBRztBQUM1QlYsRUFBQUEsS0FBSyxFQUFFLFFBRHFCO0FBRTVCVyxFQUFBQSxRQUFRLEVBQ1Asa0VBSDJCO0FBSTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsRUFBQUEsY0FBYyxFQUFFLENBQ2Y7QUFDQ0MsSUFBQUEsU0FBUyxFQUFFLFFBRFo7QUFFQ0MsSUFBQUEsb0JBQW9CLEVBQUU7QUFGdkIsR0FEZSxFQUtmO0FBQ0NELElBQUFBLFNBQVMsRUFBRSxNQURaO0FBRUNDLElBQUFBLG9CQUFvQixFQUFFO0FBRnZCLEdBTGUsRUFTZjtBQUNDRCxJQUFBQSxTQUFTLEVBQUUsWUFEWjtBQUVDQyxJQUFBQSxvQkFBb0IsRUFBRTtBQUZ2QixHQVRlLEVBYWY7QUFDQ0QsSUFBQUEsU0FBUyxFQUFFLFNBRFo7QUFFQ0MsSUFBQUEsb0JBQW9CLEVBQUU7QUFGdkIsR0FiZSxFQWlCZjtBQUNDRCxJQUFBQSxTQUFTLEVBQUUsUUFEWjtBQUVDQyxJQUFBQSxvQkFBb0IsRUFBRTtBQUZ2QixHQWpCZSxFQXFCZjtBQUNDRCxJQUFBQSxTQUFTLEVBQUUsU0FEWjtBQUVDQyxJQUFBQSxvQkFBb0IsRUFBRTtBQUZ2QixHQXJCZSxFQXlCZjtBQUNDRCxJQUFBQSxTQUFTLEVBQUUsS0FEWjtBQUVDQyxJQUFBQSxvQkFBb0IsRUFBRTtBQUZ2QixHQXpCZTtBQWhCWSxDQUF0QjtBQWdEQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdkI7QUFDQ2hCLEVBQUFBLElBQUksRUFBRSxrQkFEUDtBQUVDaUIsRUFBQUEsS0FBSyxFQUFFLG9CQUZSO0FBR0NDLEVBQUFBLElBQUksRUFBRSxvREFIUDtBQUlDQyxFQUFBQSxJQUFJLEVBQUMsbUZBSk47QUFLQ1YsRUFBQUEsTUFBTSxFQUFFLHdDQUxUO0FBTUNXLEVBQUFBLElBQUksRUFBRTtBQU5QLENBRHVCLEVBU3ZCO0FBQ0NwQixFQUFBQSxJQUFJLEVBQUUsaUJBRFA7QUFFQ2lCLEVBQUFBLEtBQUssRUFBRSxlQUZSO0FBR0NDLEVBQUFBLElBQUksMENBSEw7QUFJQ0MsRUFBQUEsSUFBSSxFQUFDLG1EQUpOO0FBS0NWLEVBQUFBLE1BQU0sRUFBRSwwQ0FMVDtBQU1DVyxFQUFBQSxJQUFJLEVBQUU7QUFOUCxDQVR1QixDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wb3J0Zm9saW8uanM/OWFiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW1vamkgZnJvbSBcInJlYWN0LWVhc3ktZW1vamlcIjtcblxuZXhwb3J0IGNvbnN0IGdyZWV0aW5ncyA9IHtcblx0bmFtZTogXCJBbmFuZGEgUyBIb2xsYVwiLFxuXHR0aXRsZTogXCJIaWkgYWxsLCBJJ20gQW5hbmRhIFMgSG9sbGFcIixcblx0ZGVzY3JpcHRpb246XG5cdGBBIFBhc3Npb25hdGUgQXNwaXJpbmcgRnVsbCBTdGFjayBEZXZlbG9wZXIuIEkgaGF2ZSBpbnRlcmVzdCBpbiBkZXNnaW5pbmcgYW5kIFxuXHRcdFdhbnQgdG8gc3RhcnQgbXkgY2FyZWVyIGluIEZyb250IGVuZCBkZXZlbG9wbWVudCBpbiBhIENvbXBhbnkgd2hlcmUgSSBjYW4gbGVhcm4gYW5kIGltcHJvdmUgbXkgc2tpbGxzIGFuZCBcblx0XHRhbHNvIGFibGUgdG8gY29udHJpYnV0ZSB0b3dhcmRzIEluZGl2aWR1YWwgYW5kIENvbXBhbnkgR3Jvd3RoYCxcblx0cmVzdW1lTGluazogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xejVkbGJUcktPdEZ2UmZfSmtZd0o3VlhtanEwODRiSENcIixcbn07XG5cbmV4cG9ydCBjb25zdCBvcGVuU291cmNlID0ge1xuXHRnaXRodWJVc2VyTmFtZTogXCJBbmFuZHMtODhcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rcyA9IHtcblx0dHdpdHRlcjogXCJ0d2l0dGVyLmNvbS9BbmFuZFNIb2xsYThcIixcblx0Z2l0aHViOiBcImdpdGh1Yi5jb20vQW5hbmRzLTg4XCIsXG5cdGxpbmtlZGluOiBcImxpbmtlZGluLmNvbS9pbi9hbmFuZGEtcy1ob2xsYS0yNjhiOTQxNDdcIixcbn07XG5cbmV4cG9ydCBjb25zdCBza2lsbHNTZWN0aW9uID0ge1xuXHR0aXRsZTogXCJTa2lsbHNcIixcblx0c3ViVGl0bGU6XG5cdFx0XCJDUkFaWSBGVUxMIFNUQUNLIERFVkVMT1BFUiBXSE8gV0FOVFMgVE8gRVhQTE9SRSBFVkVSWSBURUNIIFNUQUNLXCIsXG5cdC8vIHNraWxsczogW1xuXHQvLyBcdGVtb2ppKFxuXHQvLyBcdFx0XCLimqEgRGV2ZWxvcCBoaWdobHkgaW50ZXJhY3RpdmUgRnJvbnQgZW5kIC8gVXNlciBJbnRlcmZhY2VzIGZvciB5b3VyIHdlYiBhbmQgbW9iaWxlIGFwcGxpY2F0aW9uc1wiXG5cdC8vIFx0KSxcblx0Ly8gXHRlbW9qaShcblx0Ly8gXHRcdFwi4pqhIFByb2dyZXNzaXZlIFdlYiBBcHBsaWNhdGlvbnMgKCBQV0EgKSBpbiBub3JtYWwgYW5kIFNQQSBTdGFja3NcIlxuXHQvLyBcdCksXG5cdC8vIFx0ZW1vamkoXG5cdC8vIFx0XHRcIuKaoSBJbnRlZ3JhdGlvbiBvZiB0aGlyZCBwYXJ0eSBzZXJ2aWNlcyBzdWNoIGFzIEZpcmViYXNlLyBBV1MgLyBEaWdpdGFsIE9jZWFuXCJcblx0Ly8gXHQpLFxuXHQvLyBdLFxuXG5cdHNvZnR3YXJlU2tpbGxzOiBbXG5cdFx0e1xuXHRcdFx0c2tpbGxOYW1lOiBcImh0bWwtNVwiLFxuXHRcdFx0Zm9udEF3ZXNvbWVDbGFzc25hbWU6IFwidnNjb2RlLWljb25zOmZpbGUtdHlwZS1odG1sXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRza2lsbE5hbWU6IFwiY3NzM1wiLFxuXHRcdFx0Zm9udEF3ZXNvbWVDbGFzc25hbWU6IFwidnNjb2RlLWljb25zOmZpbGUtdHlwZS1jc3NcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNraWxsTmFtZTogXCJKYXZhU2NyaXB0XCIsXG5cdFx0XHRmb250QXdlc29tZUNsYXNzbmFtZTogXCJsb2dvczpqYXZhc2NyaXB0XCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRza2lsbE5hbWU6IFwicmVhY3Rqc1wiLFxuXHRcdFx0Zm9udEF3ZXNvbWVDbGFzc25hbWU6IFwidnNjb2RlLWljb25zOmZpbGUtdHlwZS1yZWFjdGpzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRza2lsbE5hbWU6IFwibm9kZWpzXCIsXG5cdFx0XHRmb250QXdlc29tZUNsYXNzbmFtZTogXCJsb2dvczpub2RlanMtaWNvblwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2tpbGxOYW1lOiBcIm1vbmdvREJcIixcblx0XHRcdGZvbnRBd2Vzb21lQ2xhc3NuYW1lOiBcInZzY29kZS1pY29uczpmaWxlLXR5cGUtbW9uZ29cIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNraWxsTmFtZTogXCJnaXRcIixcblx0XHRcdGZvbnRBd2Vzb21lQ2xhc3NuYW1lOiBcImxvZ29zOmdpdC1pY29uXCIsXG5cdFx0fSxcblx0XSxcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcblx0e1xuXHRcdG5hbWU6IFwiTmlrZSBJbmRpYSBDbG9uZVwiLFxuXHRcdGltYWdlOiBcIi4vaW1nL2hvbWVuaWtlLnBuZ1wiLFxuXHRcdGRlc2M6IFwiQSBXZWIgQXBwbGljYXRpb24gdG8gYnV5IGFsbCB0eXBlcyBvZiBTcG9ydHMgV2VhcnNcIixcblx0XHR0ZWNoOlwiV2UgdXNlZCBIVE1MIENTUyBKYXZhc2NyaXB0IE5vZGUgSnMgRXhwcmVzcyBNb25nb0RCIGFuZCBFSlMgdG8gYnVpbGQgdGhpcyBQcm9qZWN0XCIsXG5cdFx0Z2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmFuZHMtODgvTmlrZUluZGlhXCIsXG5cdFx0bGluazogXCJuaWtlLWluLW1hc2FpLXByb2plY3QuaGVyb2t1YXBwLmNvbS9cIixcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiS0ZDIEluZGlhIENsb25lXCIsXG5cdFx0aW1hZ2U6IFwiLi9pbWcva2ZjLnBuZ1wiLFxuXHRcdGRlc2M6IGBXZWIgQXBwbGljYXRpb24gdG8gQnV5IGZhc3QgZm9vZCBpdGVtc2AsXG5cdFx0dGVjaDpcIldlIHVzZWQgSFRNTCBDU1MgSmF2YVNjcmlwdCB0byBidWlsZCB0aGlzIFByb2plY3RcIixcblx0XHRnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuYW5kcy04OC9LZmMtUHJvamVjdFwiLFxuXHRcdGxpbms6IFwia2ZjLXByb2plY3QtYW5hbmRzLTg4LnZlcmNlbC5hcHAvXCIsXG5cdH0sXG5dO1xuXG4iXSwibmFtZXMiOlsiZW1vamkiLCJncmVldGluZ3MiLCJuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlc3VtZUxpbmsiLCJvcGVuU291cmNlIiwiZ2l0aHViVXNlck5hbWUiLCJjb250YWN0Iiwic29jaWFsTGlua3MiLCJ0d2l0dGVyIiwiZ2l0aHViIiwibGlua2VkaW4iLCJza2lsbHNTZWN0aW9uIiwic3ViVGl0bGUiLCJzb2Z0d2FyZVNraWxscyIsInNraWxsTmFtZSIsImZvbnRBd2Vzb21lQ2xhc3NuYW1lIiwicHJvamVjdHMiLCJpbWFnZSIsImRlc2MiLCJ0ZWNoIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./portfolio.js\n");

/***/ })

});