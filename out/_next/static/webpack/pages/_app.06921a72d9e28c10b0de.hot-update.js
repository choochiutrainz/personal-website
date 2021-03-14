webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Wesley_Documents_Repos_choochiutrainz_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Wesley\\Documents\\Repos\\choochiutrainz.github.io\\components\\Nav.js",
    _s = $RefreshSig$();



function Nav() {
  _s();

  var _this = this;

  //https://nextjs-rouge-five-39.vercel.app/merch
  //https://github.com/ckanissatran/test-commerce/blob/master/components/Nav.js
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState2 = Object(C_Users_Wesley_Documents_Repos_choochiutrainz_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      hidden = _React$useState2[0],
      toggleHidden = _React$useState2[1];

  var getHidden = function getHidden() {
    if (hidden) return 'hidden';else return '';
  };

  var getHeaderBackground = function getHeaderBackground() {
    switch (router.pathname) {
      case "/":
        return 'bg-home';

      case "/portfolio":
        return 'bg-portfolio';

      case "/passions":
        return 'bg-passions';

      case "/resume":
        return 'bg-resume';

      case "/contact":
        return 'bg-contact';

      case "/blog":
        return 'bg-blog';

      case "/portfolio/section-31":
        return 'bg-section-31';

      case "/portfolio/rogue-squadron":
        return 'bg-rogue-squadron';

      case "/portfolio/defense-innovation-unit":
        return 'bg-defense-innovation-unit';

      case "/portfolio/streetcode-academy":
        return 'bg-streetcode-academy';

      case "/portfolio/darpa":
        return 'bg-darpa';

      default:
        return 'bg-error';
    }
  };

  var getHeaderText = function getHeaderText() {
    switch (router.pathname) {
      case "/":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Leading teams to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 106
            }, _this), "build working software", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 133
            }, _this), "that people love."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal",
            children: ["Welcome to choochiutrain.com,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 113
            }, _this), "the Internet home for Wesley Chiu."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/contact",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 my-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "pr-1",
                children: "Hire Me Today"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                className: "w-4",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17 8l4 4m0 0l-4 4m4-4H3"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 29
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 24
        }, _this);

      case "/portfolio":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["See what you can", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 128
            }, _this), "expect from me."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 44
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 39
        }, _this);

      case "/passions":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Check out my", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 123
            }, _this), "Passions and Hobbies."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 43
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 38
        }, _this);

      case "/resume":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Learn more about", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 105
            }, _this), "My Story."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://drive.google.com/file/d/1t7xzj6kOU7h9LV7isqMURVoI_PXs3Oav/view",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 my-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "pr-1",
                children: "Download Resume"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                className: "h-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 24
        }, _this);

      case "/contact":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: "Let's connect today!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 37
        }, _this);

      case "/blog":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Get to know my", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 121
            }, _this), "thoughts and philosophy."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 39
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 34
        }, _this);

      case "/portfolio/section-31":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "h-20 pr-4",
              src: "../starfox-logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 114
            }, _this), "SureFire"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["Modernizing the US Space Force's", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 121
            }, _this), "RF Deconfliction capabilities to", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 158
            }, _this), "promote a safe space environment."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "inline flex items-center",
            href: "https://drive.google.com/file/d/1I01UTW66S8Azc7Z0uqIlL-gfCTFxlqAc/view",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 24
        }, _this);

      case "/portfolio/rogue-squadron":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "h-20 pr-4",
              src: "../dowding-logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 114
            }, _this), "Dowding"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["The Department of Defense's sole team ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 127
            }, _this), "for providing drones to our troops and", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 170
            }, _this), "protecting them from drone threats."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "inline flex items-center",
            href: "https://www.youtube.com/watch?v=8ONrb1ddTRg&feature=emb_title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 24
        }, _this);

      case "/portfolio/defense-innovation-unit":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "h-20 pr-4",
              src: "../defense-innovation-unit-logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 114
            }, _this), "Drone Medical Resupply"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["Using drones to deliver lifesaving blood", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 129
            }, _this), "and medical supplies to the front line."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "inline flex items-center",
            href: "https://www.youtube.com/watch?v=FeSCEalMOL8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 24
        }, _this);

      case "/portfolio/streetcode-academy":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "h-20 pb-6",
            src: "../streetcode-logo.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["Empowering underprivileged communities", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 127
            }, _this), "to fulfill their full potential in the tech industry."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "inline flex items-center",
            href: "https://vimeo.com/249009796",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 24
        }, _this);

      case "/portfolio/darpa":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "h-20 pr-4",
              src: "../swarm-challenge-logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 114
            }, _this), "DARPA Swarm Drone Challenge"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["Trailblazing swarm drone tactics and technologies", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 138
            }, _this), "to dominate the future battlefield."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "inline flex items-center",
            href: "https://www.youtube.com/watch?v=ufidH_M0RqQ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 24
        }, _this);

      default:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Oops! I can't seem to find", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 140
            }, _this), "the page you're looking for."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["May I make it up to you", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 112
            }, _this), "and take you back to the home page?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 my-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "pr-1",
                children: "I Guess"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                className: "w-4",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17 8l4 4m0 0l-4 4m4-4H3"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 29
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 24
        }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "h-screen w-screen bg-cover bg-center ".concat(getHeaderBackground()),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "bg-gray-50 bg-opacity-60 flex items-center px-12 py-2 lg:px-32 lg:py-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "py-3 h-20 transition duration-300 ease-in-out hover:opacity-75 transform hover:scale-110",
          src: "chewy-logo.png",
          alt: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hidden md:flex md:space-x-8 lg:space-x-20 justify-center flex-grow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110",
          href: "/portfolio",
          children: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110",
          href: "/passions",
          children: "Passions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110",
          href: "/resume",
          children: "Resume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hidden md:flex justify-end items-center md:space-x-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110",
          href: "/contact",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://github.com/choochiutrainz",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "lg:px-2 py-3 h-15 transition duration-300 ease-in-out hover:opacity-50 transform hover:scale-110",
            src: "github-logo.png",
            alt: "GitHub"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.linkedin.com/in/choochiutrain",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "lg:px-2 py-3 h-15 transition duration-300 ease-in-out hover:opacity-75 transform hover:scale-110",
            src: "linkedin-logo.png",
            alt: "LinkedIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-end flex-grow md:hidden",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return toggleHidden(!hidden);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            className: "w-12 h-12 text-indigo-600",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 6h16M4 12h16M4 18h16"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat(getHidden(), " text-black"),
      children: "HELLO THERE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-row justify-start items-center mx-auto h-screen px-8 pb-2 sm:px-16 sm:pb-4 md:px-32 md:pb-8 lg:px-64 lg:pb-16",
      children: getHeaderText()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden sm:flex justify-center items-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "absolute bottom-0 pb-4",
        href: "#section1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            className: "animate-bounce w-6 h-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "3",
              d: "M19 14l-7 7m0 0l-7-7m7 7V3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 9
  }, this);
}

_s(Nav, "c3OS5xhC9mjTBFwN1MMBrwCsNXs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Nav;

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyJdLCJuYW1lcyI6WyJOYXYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGlkZGVuIiwidG9nZ2xlSGlkZGVuIiwiZ2V0SGlkZGVuIiwiZ2V0SGVhZGVyQmFja2dyb3VuZCIsInBhdGhuYW1lIiwiZ2V0SGVhZGVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFDMUI7QUFDQTtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSDBCLHdCQUtLQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUxMO0FBQUE7QUFBQSxNQUtuQkMsTUFMbUI7QUFBQSxNQUtYQyxZQUxXOztBQU8x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QUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9ESDs7R0FqTXVCVixHO1VBR0xFLHFEOzs7S0FIS0YsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QjtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUU7QUFDWTtBQUNZO0FBQ3RCO0FBQzFEO0FBQ2YsU0FBUyx5RkFBYyxTQUFTLCtGQUFvQixZQUFZLHFHQUEwQixZQUFZLDBGQUFlO0FBQ3JILEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUEyRTtBQUM1RDtBQUNmO0FBQ0Esb0NBQW9DLDJGQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsMkZBQWdCO0FBQ3RHLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNjkyMWE3MmQ5ZTI4YzEwYjBkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHsgICAgXHJcbiAgICAvL2h0dHBzOi8vbmV4dGpzLXJvdWdlLWZpdmUtMzkudmVyY2VsLmFwcC9tZXJjaFxyXG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20vY2thbmlzc2F0cmFuL3Rlc3QtY29tbWVyY2UvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9OYXYuanNcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2hpZGRlbiwgdG9nZ2xlSGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgY29uc3QgZ2V0SGlkZGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRkZW4pIHJldHVybiAnaGlkZGVuJ1xyXG4gICAgICAgIGVsc2UgcmV0dXJuICcnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SGVhZGVyQmFja2dyb3VuZCA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHJvdXRlci5wYXRobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiL1wiOiByZXR1cm4gJ2JnLWhvbWUnXHJcbiAgICAgICAgICAgIGNhc2UgXCIvcG9ydGZvbGlvXCI6IHJldHVybiAnYmctcG9ydGZvbGlvJ1xyXG4gICAgICAgICAgICBjYXNlIFwiL3Bhc3Npb25zXCI6IHJldHVybiAnYmctcGFzc2lvbnMnXHJcbiAgICAgICAgICAgIGNhc2UgXCIvcmVzdW1lXCI6IHJldHVybiAnYmctcmVzdW1lJ1xyXG4gICAgICAgICAgICBjYXNlIFwiL2NvbnRhY3RcIjogcmV0dXJuICdiZy1jb250YWN0J1xyXG4gICAgICAgICAgICBjYXNlIFwiL2Jsb2dcIjogcmV0dXJuICdiZy1ibG9nJ1xyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9zZWN0aW9uLTMxXCI6IHJldHVybiAnYmctc2VjdGlvbi0zMSdcclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vcm9ndWUtc3F1YWRyb25cIjogcmV0dXJuICdiZy1yb2d1ZS1zcXVhZHJvbidcclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vZGVmZW5zZS1pbm5vdmF0aW9uLXVuaXRcIjogcmV0dXJuICdiZy1kZWZlbnNlLWlubm92YXRpb24tdW5pdCdcclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vc3RyZWV0Y29kZS1hY2FkZW15XCI6IHJldHVybiAnYmctc3RyZWV0Y29kZS1hY2FkZW15J1xyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9kYXJwYVwiOiByZXR1cm4gJ2JnLWRhcnBhJ1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ2JnLWVycm9yJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRIZWFkZXJUZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocm91dGVyLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+TGVhZGluZyB0ZWFtcyB0byA8YnIvPmJ1aWxkIHdvcmtpbmcgc29mdHdhcmU8YnIvPnRoYXQgcGVvcGxlIGxvdmUuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLW5vcm1hbFwiPldlbGNvbWUgdG8gY2hvb2NoaXV0cmFpbi5jb20sPGJyLz50aGUgSW50ZXJuZXQgaG9tZSBmb3IgV2VzbGV5IENoaXUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBiZy1pbmRpZ28tNTAwIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHB5LTIgcHgtNCBteS00IHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTYwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6c2NhbGUtMTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0xXCI+SGlyZSBNZSBUb2RheTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW9cIjogcmV0dXJuIDxkaXY+PGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgcGItNlwiPlNlZSB3aGF0IHlvdSBjYW48YnIvPmV4cGVjdCBmcm9tIG1lLjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgIGNhc2UgXCIvcGFzc2lvbnNcIjogcmV0dXJuIDxkaXY+PGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgcGItNlwiPkNoZWNrIG91dCBteTxici8+UGFzc2lvbnMgYW5kIEhvYmJpZXMuPC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcIi9yZXN1bWVcIjogXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+TGVhcm4gbW9yZSBhYm91dDxici8+TXkgU3RvcnkuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdDd4emo2a09VN2g5TFY3aXNxTVVSVm9JX1BYczNPYXYvdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBiZy1pbmRpZ28tNTAwIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHB5LTIgcHgtNCBteS00IHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTYwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6c2NhbGUtMTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0xXCI+RG93bmxvYWQgUmVzdW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJoLTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNNCAxNnYxYTMgMyAwIDAwMyAzaDEwYTMgMyAwIDAwMy0zdi0xbS00LTRsLTQgNG0wIDBsLTQtNG00IDRWNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGNhc2UgXCIvY29udGFjdFwiOiByZXR1cm4gPGRpdj48aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+TGV0J3MgY29ubmVjdCB0b2RheSE8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiL2Jsb2dcIjogcmV0dXJuIDxkaXY+PGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgcGItNlwiPkdldCB0byBrbm93IG15PGJyLz50aG91Z2h0cyBhbmQgcGhpbG9zb3BoeS48L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9zZWN0aW9uLTMxXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW5saW5lIGZsZXggaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgcGItNlwiPjxpbWcgY2xhc3NOYW1lPVwiaC0yMCBwci00XCIgc3JjPVwiLi4vc3RhcmZveC1sb2dvLnBuZ1wiPjwvaW1nPlN1cmVGaXJlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLW5vcm1hbCBwYi02XCI+TW9kZXJuaXppbmcgdGhlIFVTIFNwYWNlIEZvcmNlJ3M8YnIvPlJGIERlY29uZmxpY3Rpb24gY2FwYWJpbGl0aWVzIHRvPGJyLz5wcm9tb3RlIGEgc2FmZSBzcGFjZSBlbnZpcm9ubWVudC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lIGZsZXggaXRlbXMtY2VudGVyXCIgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUkwMVVUVzY2UzhBemM3WjB1cUlsTC1nZkNURnhscUFjL3ZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LWluZGlnby02MDAgb3BhY2l0eS04MCByb3VuZGVkLWZ1bGwgaC0xMiB3LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLWluZGlnby01MDAgaG92ZXI6dGV4dC1ncmF5LTMwMCBob3ZlcjpvcGFjaXR5LTc1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xNC43NTIgMTEuMTY4bC0zLjE5Ny0yLjEzMkExIDEgMCAwMDEwIDkuODd2NC4yNjNhMSAxIDAgMDAxLjU1NS44MzJsMy4xOTctMi4xMzJhMSAxIDAgMDAwLTEuNjY0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHB4LTRcIj5XYXRjaCBWaWRlbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vcm9ndWUtc3F1YWRyb25cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+PGltZyBjbGFzc05hbWU9XCJoLTIwIHByLTRcIiBzcmM9XCIuLi9kb3dkaW5nLWxvZ28ucG5nXCI+PC9pbWc+RG93ZGluZzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy1ub3JtYWwgcGItNlwiPlRoZSBEZXBhcnRtZW50IG9mIERlZmVuc2UncyBzb2xlIHRlYW0gPGJyLz5mb3IgcHJvdmlkaW5nIGRyb25lcyB0byBvdXIgdHJvb3BzIGFuZDxici8+cHJvdGVjdGluZyB0aGVtIGZyb20gZHJvbmUgdGhyZWF0cy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lIGZsZXggaXRlbXMtY2VudGVyXCIgaHJlZj17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OE9OcmIxZGRUUmcmZmVhdHVyZT1lbWJfdGl0bGVgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LWluZGlnby02MDAgb3BhY2l0eS04MCByb3VuZGVkLWZ1bGwgaC0xMiB3LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLWluZGlnby01MDAgaG92ZXI6dGV4dC1ncmF5LTMwMCBob3ZlcjpvcGFjaXR5LTc1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xNC43NTIgMTEuMTY4bC0zLjE5Ny0yLjEzMkExIDEgMCAwMDEwIDkuODd2NC4yNjNhMSAxIDAgMDAxLjU1NS44MzJsMy4xOTctMi4xMzJhMSAxIDAgMDAwLTEuNjY0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHB4LTRcIj5XYXRjaCBWaWRlbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vZGVmZW5zZS1pbm5vdmF0aW9uLXVuaXRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+PGltZyBjbGFzc05hbWU9XCJoLTIwIHByLTRcIiBzcmM9XCIuLi9kZWZlbnNlLWlubm92YXRpb24tdW5pdC1sb2dvLnBuZ1wiPjwvaW1nPkRyb25lIE1lZGljYWwgUmVzdXBwbHk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctbm9ybWFsIHBiLTZcIj5Vc2luZyBkcm9uZXMgdG8gZGVsaXZlciBsaWZlc2F2aW5nIGJsb29kPGJyLz5hbmQgbWVkaWNhbCBzdXBwbGllcyB0byB0aGUgZnJvbnQgbGluZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lIGZsZXggaXRlbXMtY2VudGVyXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RmVTQ0VhbE1PTDhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LWluZGlnby02MDAgb3BhY2l0eS04MCByb3VuZGVkLWZ1bGwgaC0xMiB3LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLWluZGlnby01MDAgaG92ZXI6dGV4dC1ncmF5LTMwMCBob3ZlcjpvcGFjaXR5LTc1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xNC43NTIgMTEuMTY4bC0zLjE5Ny0yLjEzMkExIDEgMCAwMDEwIDkuODd2NC4yNjNhMSAxIDAgMDAxLjU1NS44MzJsMy4xOTctMi4xMzJhMSAxIDAgMDAwLTEuNjY0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHB4LTRcIj5XYXRjaCBWaWRlbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vc3RyZWV0Y29kZS1hY2FkZW15XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMjAgcGItNlwiIHNyYz1cIi4uL3N0cmVldGNvZGUtbG9nby5qcGdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLW5vcm1hbCBwYi02XCI+RW1wb3dlcmluZyB1bmRlcnByaXZpbGVnZWQgY29tbXVuaXRpZXM8YnIvPnRvIGZ1bGZpbGwgdGhlaXIgZnVsbCBwb3RlbnRpYWwgaW4gdGhlIHRlY2ggaW5kdXN0cnkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZSBmbGV4IGl0ZW1zLWNlbnRlclwiIGhyZWY9XCJodHRwczovL3ZpbWVvLmNvbS8yNDkwMDk3OTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LWluZGlnby02MDAgb3BhY2l0eS04MCByb3VuZGVkLWZ1bGwgaC0xMiB3LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLWluZGlnby01MDAgaG92ZXI6dGV4dC1ncmF5LTMwMCBob3ZlcjpvcGFjaXR5LTc1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xNC43NTIgMTEuMTY4bC0zLjE5Ny0yLjEzMkExIDEgMCAwMDEwIDkuODd2NC4yNjNhMSAxIDAgMDAxLjU1NS44MzJsMy4xOTctMi4xMzJhMSAxIDAgMDAwLTEuNjY0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHB4LTRcIj5XYXRjaCBWaWRlbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vZGFycGFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+PGltZyBjbGFzc05hbWU9XCJoLTIwIHByLTRcIiBzcmM9XCIuLi9zd2FybS1jaGFsbGVuZ2UtbG9nby5wbmdcIj48L2ltZz5EQVJQQSBTd2FybSBEcm9uZSBDaGFsbGVuZ2U8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctbm9ybWFsIHBiLTZcIj5UcmFpbGJsYXppbmcgc3dhcm0gZHJvbmUgdGFjdGljcyBhbmQgdGVjaG5vbG9naWVzPGJyLz50byBkb21pbmF0ZSB0aGUgZnV0dXJlIGJhdHRsZWZpZWxkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUgZmxleCBpdGVtcy1jZW50ZXJcIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj11ZmlkSF9NMFJxUVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtaW5kaWdvLTYwMCBvcGFjaXR5LTgwIHJvdW5kZWQtZnVsbCBoLTEyIHctMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIGhvdmVyOm9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE0Ljc1MiAxMS4xNjhsLTMuMTk3LTIuMTMyQTEgMSAwIDAwMTAgOS44N3Y0LjI2M2ExIDEgMCAwMDEuNTU1LjgzMmwzLjE5Ny0yLjEzMmExIDEgMCAwMDAtMS42NjR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgcHgtNFwiPldhdGNoIFZpZGVvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlubGluZSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHBiLTZcIj5Pb3BzISBJIGNhbid0IHNlZW0gdG8gZmluZDxici8+dGhlIHBhZ2UgeW91J3JlIGxvb2tpbmcgZm9yLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy1ub3JtYWwgcGItNlwiPk1heSBJIG1ha2UgaXQgdXAgdG8geW91PGJyLz5hbmQgdGFrZSB5b3UgYmFjayB0byB0aGUgaG9tZSBwYWdlPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBiZy1pbmRpZ28tNTAwIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHB5LTIgcHgtNCBteS00IHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTYwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6c2NhbGUtMTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0xXCI+SSBHdWVzczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtc2NyZWVuIHctc2NyZWVuIGJnLWNvdmVyIGJnLWNlbnRlciAke2dldEhlYWRlckJhY2tncm91bmQoKX1gfT5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJnLW9wYWNpdHktNjAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMTIgcHktMiBsZzpweC0zMiBsZzpweS0wXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHktMyBoLTIwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOm9wYWNpdHktNzUgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiIHNyYz1cImNoZXd5LWxvZ28ucG5nXCIgYWx0PVwiSG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtZDpzcGFjZS14LTggbGc6c3BhY2UteC0yMCBqdXN0aWZ5LWNlbnRlciBmbGV4LWdyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1ibGFjayB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWluZGlnby02MDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiIGhyZWY9XCIvcG9ydGZvbGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvcnRmb2xpb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1ibGFjayB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWluZGlnby02MDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiIGhyZWY9XCIvcGFzc2lvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtYmxhY2sgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1pbmRpZ28tNjAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTBcIiBocmVmPVwiL3Jlc3VtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXN1bWVcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWJsYWNrIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtaW5kaWdvLTYwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwXCIgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jaG9vY2hpdXRyYWluelwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxnOnB4LTIgcHktMyBoLTE1IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOm9wYWNpdHktNTAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiIHNyYz1cImdpdGh1Yi1sb2dvLnBuZ1wiIGFsdD1cIkdpdEh1YlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2hvb2NoaXV0cmFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxnOnB4LTIgcHktMyBoLTE1IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOm9wYWNpdHktNzUgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiIHNyYz1cImxpbmtlZGluLWxvZ28ucG5nXCIgYWx0PVwiTGlua2VkSW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGZsZXgtZ3JvdyBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUhpZGRlbighaGlkZGVuKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtaW5kaWdvLTYwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2dldEhpZGRlbigpfSB0ZXh0LWJsYWNrYH0+SEVMTE8gVEhFUkU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG14LWF1dG8gaC1zY3JlZW4gcHgtOCBwYi0yIHNtOnB4LTE2IHNtOnBiLTQgbWQ6cHgtMzIgbWQ6cGItOCBsZzpweC02NCBsZzpwYi0xNlwiPlxyXG4gICAgICAgICAgICAgICAge2dldEhlYWRlclRleHQoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBwYi00XCIgaHJlZj1cIiNzZWN0aW9uMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgdGV4dC1pbmRpZ28tNjAwIG9wYWNpdHktODAgcm91bmRlZC1mdWxsIGgtMTIgdy0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpiZy1pbmRpZ28tNTAwIGhvdmVyOnRleHQtZ3JheS0zMDAgaG92ZXI6b3BhY2l0eS03NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFuaW1hdGUtYm91bmNlIHctNiBoLTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIzXCIgZD1cIk0xOSAxNGwtNyA3bTAgMGwtNy03bTcgN1YzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==