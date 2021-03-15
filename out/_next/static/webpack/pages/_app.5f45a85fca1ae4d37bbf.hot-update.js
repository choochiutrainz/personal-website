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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState2 = Object(C_Users_Wesley_Documents_Repos_choochiutrainz_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      hidden = _React$useState2[0],
      toggleHidden = _React$useState2[1];

  var getHidden = function getHidden() {
    if (hidden) return 'hidden';else return '';
  };

  var transformMenuButtonTop = function transformMenuButtonTop() {
    if (hidden) return 'transform rotate-45 translate-y-3';else return 'transform -translate-y-3';
  };

  var transformMenuButtonBottom = function transformMenuButtonBottom() {
    if (hidden) return 'transform -rotate-45 -translate-y-3';else return 'transform rotate-45 translate-y-3';
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
              lineNumber: 45,
              columnNumber: 106
            }, _this), "build working software", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 133
            }, _this), "that people love."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal",
            children: ["Welcome to choochiutrain.com,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 113
            }, _this), "the Internet home for Wesley Chiu."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
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
                lineNumber: 49,
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
                  lineNumber: 51,
                  columnNumber: 29
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 24
        }, _this);

      case "/portfolio":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["See what you can", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 128
            }, _this), "expect from me."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 44
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 39
        }, _this);

      case "/passions":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Check out my", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 123
            }, _this), "Passions and Hobbies."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 43
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 38
        }, _this);

      case "/resume":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Learn more about", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 105
            }, _this), "My Story."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
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
                lineNumber: 63,
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
                  lineNumber: 65,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 24
        }, _this);

      case "/contact":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: "Let's connect today!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 37
        }, _this);

      case "/blog":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Get to know my", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 121
            }, _this), "thoughts and philosophy."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 39
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
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
              lineNumber: 74,
              columnNumber: 114
            }, _this), "SureFire"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["Modernizing the US Space Force's", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 121
            }, _this), "RF Deconfliction capabilities to", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 158
            }, _this), "promote a safe space environment."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
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
                  lineNumber: 79,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
              lineNumber: 87,
              columnNumber: 114
            }, _this), "Dowding"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["The Department of Defense's sole team ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 127
            }, _this), "for providing drones to our troops and", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 170
            }, _this), "protecting them from drone threats."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
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
                  lineNumber: 92,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
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
              lineNumber: 100,
              columnNumber: 114
            }, _this), "Drone Medical Resupply"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["Using drones to deliver lifesaving blood", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 129
            }, _this), "and medical supplies to the front line."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
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
                  lineNumber: 105,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 24
        }, _this);

      case "/portfolio/streetcode-academy":
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "h-20 pb-6",
            src: "../streetcode-logo.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["Empowering underprivileged communities", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 127
            }, _this), "to fulfill their full potential in the tech industry."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
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
                  lineNumber: 118,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
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
              lineNumber: 126,
              columnNumber: 114
            }, _this), "DARPA Swarm Drone Challenge"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["Trailblazing swarm drone tactics and technologies", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 138
            }, _this), "to dominate the future battlefield."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
                  lineNumber: 131,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-2xl text-gray-100 font-bold px-4",
              children: "Watch Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 24
        }, _this);

      default:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6",
            children: ["Oops! I can't seem to find", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 140
            }, _this), "the page you're looking for."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-2xl text-gray-100 font-bold leading-normal pb-6",
            children: ["May I make it up to you", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 112
            }, _this), "and take you back to the home page?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
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
                lineNumber: 143,
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
                  lineNumber: 145,
                  columnNumber: 29
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
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
          lineNumber: 157,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hidden md:flex md:space-x-8 lg:space-x-20 justify-center flex-grow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110",
          href: "/portfolio",
          children: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110",
          href: "/passions",
          children: "Passions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110",
          href: "/resume",
          children: "Resume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hidden md:flex justify-end items-center md:space-x-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110",
          href: "/contact",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://github.com/choochiutrainz",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "lg:px-2 py-3 transition duration-300 ease-in-out hover:opacity-50 transform hover:scale-110",
            src: "github-logo.png",
            alt: "GitHub"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.linkedin.com/in/choochiutrain",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "lg:px-2 py-3 transition duration-300 ease-in-out hover:opacity-75 transform hover:scale-110",
            src: "linkedin-logo.png",
            alt: "LinkedIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-end flex-grow md:hidden px-9",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "focus:outline-none",
          onClick: function onClick() {
            return toggleHidden(!hidden);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "block w-8 absolute transform -translate-x-1/2 -translate-y-1/2 text-indigo-600 space-y-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "aria-hidden": "true",
              className: "rounded-lg block h-1 w-9 bg-current transform transition duration-500 ease-in-out ".concat(transformMenuButtonTop())
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "aria-hidden": "true",
              className: "rounded-lg block h-1 w-9 bg-current transform transition duration-500 ease-in-out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "aria-hidden": "true",
              className: "rounded-lg block h-1 w-9 bg-current transform transition duration-500 ease-in-out ".concat(transformMenuButtonBottom())
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat(getHidden(), " text-black flex flex-col h-screen items-end space-y-5 p-12 bg-gray-50 bg-opacity-60"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "uppercase font-bold text-2xl text-black",
        href: "/portfolio",
        children: "Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "uppercase font-bold text-2xl text-black",
        href: "/passions",
        children: "Passions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "uppercase font-bold text-2xl text-black",
        href: "/resume",
        children: "Resume"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "uppercase font-bold text-2xl text-black",
        href: "/contact",
        children: "Contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row space-x-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://github.com/choochiutrainz",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "lg:px-2 py-3 h-16",
            src: "github-logo.png",
            alt: "GitHub"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.linkedin.com/in/choochiutrain",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "lg:px-2 py-3 h-16",
            src: "linkedin-logo.png",
            alt: "LinkedIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-row justify-start items-center mx-auto h-screen px-8 pb-2 sm:px-16 sm:pb-4 md:px-32 md:pb-8 lg:px-64 lg:pb-16",
      children: getHeaderText()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
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
              lineNumber: 222,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 154,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2Iiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhpZGRlbiIsInRvZ2dsZUhpZGRlbiIsImdldEhpZGRlbiIsInRyYW5zZm9ybU1lbnVCdXR0b25Ub3AiLCJ0cmFuc2Zvcm1NZW51QnV0dG9uQm90dG9tIiwiZ2V0SGVhZGVyQmFja2dyb3VuZCIsInBhdGhuYW1lIiwiZ2V0SGVhZGVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEMEIsd0JBR0tDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBSEw7QUFBQTtBQUFBLE1BR25CQyxNQUhtQjtBQUFBLE1BR1hDLFlBSFc7O0FBSzFCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsUUFBSUYsTUFBSixFQUFZLE9BQU8sUUFBUCxDQUFaLEtBQ0ssT0FBTyxFQUFQO0FBQ1IsR0FIRDs7QUFLQSxNQUFNRyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07QUFDakMsUUFBSUgsTUFBSixFQUFZLE9BQU8sbUNBQVAsQ0FBWixLQUNLLE9BQU8sMEJBQVA7QUFDUixHQUhEOztBQUtBLE1BQU1JLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsR0FBTTtBQUNwQyxRQUFJSixNQUFKLEVBQVksT0FBTyxxQ0FBUCxDQUFaLEtBQ0ssT0FBTyxtQ0FBUDtBQUNSLEdBSEQ7O0FBS0EsTUFBTUssbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQzlCLFlBQVFULE1BQU0sQ0FBQ1UsUUFBZjtBQUNJLFdBQUssR0FBTDtBQUFVLGVBQU8sU0FBUDs7QUFDVixXQUFLLFlBQUw7QUFBbUIsZUFBTyxjQUFQOztBQUNuQixXQUFLLFdBQUw7QUFBa0IsZUFBTyxhQUFQOztBQUNsQixXQUFLLFNBQUw7QUFBZ0IsZUFBTyxXQUFQOztBQUNoQixXQUFLLFVBQUw7QUFBaUIsZUFBTyxZQUFQOztBQUNqQixXQUFLLE9BQUw7QUFBYyxlQUFPLFNBQVA7O0FBQ2QsV0FBSyx1QkFBTDtBQUE4QixlQUFPLGVBQVA7O0FBQzlCLFdBQUssMkJBQUw7QUFBa0MsZUFBTyxtQkFBUDs7QUFDbEMsV0FBSyxvQ0FBTDtBQUEyQyxlQUFPLDRCQUFQOztBQUMzQyxXQUFLLCtCQUFMO0FBQXNDLGVBQU8sdUJBQVA7O0FBQ3RDLFdBQUssa0JBQUw7QUFBeUIsZUFBTyxVQUFQOztBQUN6QjtBQUFTLGVBQU8sVUFBUDtBQVpiO0FBY0gsR0FmRDs7QUFpQkEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFlBQVFYLE1BQU0sQ0FBQ1UsUUFBZjtBQUNJLFdBQUssR0FBTDtBQUNJLDRCQUFPO0FBQUEsa0NBQ0g7QUFBSSxxQkFBUyxFQUFDLHFEQUFkO0FBQUEseURBQXFGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXJGLHlDQUFnSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREcsZUFFSDtBQUFHLHFCQUFTLEVBQUMsaURBQWI7QUFBQSxxRUFBNEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZHLGVBR0g7QUFBRyxnQkFBSSxFQUFDLFVBQVI7QUFBQSxtQ0FDSTtBQUFRLHVCQUFTLEVBQUMsaU1BQWxCO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBcUIscUJBQUssRUFBQyw0QkFBM0I7QUFBd0Qsb0JBQUksRUFBQyxNQUE3RDtBQUFvRSx1QkFBTyxFQUFDLFdBQTVFO0FBQXdGLHNCQUFNLEVBQUMsY0FBL0Y7QUFBQSx1Q0FDQTtBQUFNLCtCQUFhLEVBQUMsT0FBcEI7QUFBNEIsZ0NBQWMsRUFBQyxPQUEzQztBQUFtRCw2QkFBVyxFQUFFLENBQWhFO0FBQW1FLG1CQUFDLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBWUosV0FBSyxZQUFMO0FBQW1CLDRCQUFPO0FBQUEsaUNBQUs7QUFBSSxxQkFBUyxFQUFDLHFEQUFkO0FBQUEsd0RBQW9GO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBQ25CLFdBQUssV0FBTDtBQUFrQiw0QkFBTztBQUFBLGlDQUFLO0FBQUkscUJBQVMsRUFBQyxxREFBZDtBQUFBLG9EQUFnRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQUNsQixXQUFLLFNBQUw7QUFDSSw0QkFBTztBQUFBLGtDQUNIO0FBQUkscUJBQVMsRUFBQyxxREFBZDtBQUFBLHdEQUFvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREcsZUFFSDtBQUFHLGdCQUFJLEVBQUMsd0VBQVI7QUFBQSxtQ0FDSTtBQUFRLHVCQUFTLEVBQUMsaU1BQWxCO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBcUIscUJBQUssRUFBQyw0QkFBM0I7QUFBd0Qsb0JBQUksRUFBQyxNQUE3RDtBQUFvRSx1QkFBTyxFQUFDLFdBQTVFO0FBQXdGLHNCQUFNLEVBQUMsY0FBL0Y7QUFBQSx1Q0FDSTtBQUFNLG9DQUFlLE9BQXJCO0FBQTZCLHFDQUFnQixPQUE3QztBQUFxRCxrQ0FBYSxHQUFsRTtBQUFzRSxtQkFBQyxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQVdKLFdBQUssVUFBTDtBQUFpQiw0QkFBTztBQUFBLGlDQUFLO0FBQUkscUJBQVMsRUFBQyxxREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBQ2pCLFdBQUssT0FBTDtBQUFjLDRCQUFPO0FBQUEsaUNBQUs7QUFBSSxxQkFBUyxFQUFDLHFEQUFkO0FBQUEsc0RBQWtGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBQ2QsV0FBSyx1QkFBTDtBQUNJLDRCQUFPO0FBQUEsa0NBQ0g7QUFBSSxxQkFBUyxFQUFDLDhFQUFkO0FBQUEsb0NBQTZGO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQTJCLGlCQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURHLGVBRUg7QUFBRyxxQkFBUyxFQUFDLHNEQUFiO0FBQUEsd0VBQW9HO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBHLG1EQUF5STtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF6STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkcsZUFHSDtBQUFHLHFCQUFTLEVBQUMsMEJBQWI7QUFBd0MsZ0JBQUksRUFBQyx3RUFBN0M7QUFBQSxvQ0FDSTtBQUFRLHVCQUFTLEVBQUMsNkxBQWxCO0FBQUEscUNBQ0k7QUFBSyxxQkFBSyxFQUFDLDRCQUFYO0FBQXdDLG9CQUFJLEVBQUMsTUFBN0M7QUFBb0QsdUJBQU8sRUFBQyxXQUE1RDtBQUF3RSxzQkFBTSxFQUFDLGNBQS9FO0FBQUEsdUNBQ0k7QUFBTSxvQ0FBZSxPQUFyQjtBQUE2QixxQ0FBZ0IsT0FBN0M7QUFBcUQsa0NBQWEsR0FBbEU7QUFBc0UsbUJBQUMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFNSTtBQUFNLHVCQUFTLEVBQUMsdUNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBWUosV0FBSywyQkFBTDtBQUNJLDRCQUFPO0FBQUEsa0NBQ0g7QUFBSSxxQkFBUyxFQUFDLDhFQUFkO0FBQUEsb0NBQTZGO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQTJCLGlCQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURHLGVBRUg7QUFBRyxxQkFBUyxFQUFDLHNEQUFiO0FBQUEsOEVBQTBHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTFHLHlEQUFxSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFySjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkcsZUFHSDtBQUFHLHFCQUFTLEVBQUMsMEJBQWI7QUFBd0MsZ0JBQUksaUVBQTVDO0FBQUEsb0NBQ0k7QUFBUSx1QkFBUyxFQUFDLDZMQUFsQjtBQUFBLHFDQUNJO0FBQUsscUJBQUssRUFBQyw0QkFBWDtBQUF3QyxvQkFBSSxFQUFDLE1BQTdDO0FBQW9ELHVCQUFPLEVBQUMsV0FBNUQ7QUFBd0Usc0JBQU0sRUFBQyxjQUEvRTtBQUFBLHVDQUNJO0FBQU0sb0NBQWUsT0FBckI7QUFBNkIscUNBQWdCLE9BQTdDO0FBQXFELGtDQUFhLEdBQWxFO0FBQXNFLG1CQUFDLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBTUk7QUFBTSx1QkFBUyxFQUFDLHVDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQVlKLFdBQUssb0NBQUw7QUFDSSw0QkFBTztBQUFBLGtDQUNIO0FBQUkscUJBQVMsRUFBQyw4RUFBZDtBQUFBLG9DQUE2RjtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUEyQixpQkFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERyxlQUVIO0FBQUcscUJBQVMsRUFBQyxzREFBYjtBQUFBLGdGQUE0RztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkcsZUFHSDtBQUFHLHFCQUFTLEVBQUMsMEJBQWI7QUFBd0MsZ0JBQUksRUFBQyw2Q0FBN0M7QUFBQSxvQ0FDSTtBQUFRLHVCQUFTLEVBQUMsNkxBQWxCO0FBQUEscUNBQ0k7QUFBSyxxQkFBSyxFQUFDLDRCQUFYO0FBQXdDLG9CQUFJLEVBQUMsTUFBN0M7QUFBb0QsdUJBQU8sRUFBQyxXQUE1RDtBQUF3RSxzQkFBTSxFQUFDLGNBQS9FO0FBQUEsdUNBQ0k7QUFBTSxvQ0FBZSxPQUFyQjtBQUE2QixxQ0FBZ0IsT0FBN0M7QUFBcUQsa0NBQWEsR0FBbEU7QUFBc0UsbUJBQUMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFNSTtBQUFNLHVCQUFTLEVBQUMsdUNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBWUosV0FBSywrQkFBTDtBQUNJLDRCQUFPO0FBQUEsa0NBQ0g7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBMkIsZUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREcsZUFFSDtBQUFHLHFCQUFTLEVBQUMsc0RBQWI7QUFBQSw4RUFBMEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZHLGVBR0g7QUFBRyxxQkFBUyxFQUFDLDBCQUFiO0FBQXdDLGdCQUFJLEVBQUMsNkJBQTdDO0FBQUEsb0NBQ0k7QUFBUSx1QkFBUyxFQUFDLDZMQUFsQjtBQUFBLHFDQUNJO0FBQUsscUJBQUssRUFBQyw0QkFBWDtBQUF3QyxvQkFBSSxFQUFDLE1BQTdDO0FBQW9ELHVCQUFPLEVBQUMsV0FBNUQ7QUFBd0Usc0JBQU0sRUFBQyxjQUEvRTtBQUFBLHVDQUNJO0FBQU0sb0NBQWUsT0FBckI7QUFBNkIscUNBQWdCLE9BQTdDO0FBQXFELGtDQUFhLEdBQWxFO0FBQXNFLG1CQUFDLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBTUk7QUFBTSx1QkFBUyxFQUFDLHVDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQVlKLFdBQUssa0JBQUw7QUFDSSw0QkFBTztBQUFBLGtDQUNIO0FBQUkscUJBQVMsRUFBQyw4RUFBZDtBQUFBLG9DQUE2RjtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUEyQixpQkFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERyxlQUVIO0FBQUcscUJBQVMsRUFBQyxzREFBYjtBQUFBLHlGQUFxSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkcsZUFHSDtBQUFHLHFCQUFTLEVBQUMsMEJBQWI7QUFBd0MsZ0JBQUksRUFBQyw2Q0FBN0M7QUFBQSxvQ0FDSTtBQUFRLHVCQUFTLEVBQUMsNkxBQWxCO0FBQUEscUNBQ0k7QUFBSyxxQkFBSyxFQUFDLDRCQUFYO0FBQXdDLG9CQUFJLEVBQUMsTUFBN0M7QUFBb0QsdUJBQU8sRUFBQyxXQUE1RDtBQUF3RSxzQkFBTSxFQUFDLGNBQS9FO0FBQUEsdUNBQ0k7QUFBTSxvQ0FBZSxPQUFyQjtBQUE2QixxQ0FBZ0IsT0FBN0M7QUFBcUQsa0NBQWEsR0FBbEU7QUFBc0UsbUJBQUMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFNSTtBQUFNLHVCQUFTLEVBQUMsdUNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBWUo7QUFDSSw0QkFBTztBQUFBLGtDQUNIO0FBQUkscUJBQVMsRUFBQyw4RUFBZDtBQUFBLGtFQUF1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREcsZUFFSDtBQUFHLHFCQUFTLEVBQUMsc0RBQWI7QUFBQSwrREFBMkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZHLGVBR0g7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQSxtQ0FDSTtBQUFRLHVCQUFTLEVBQUMsaU1BQWxCO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBcUIscUJBQUssRUFBQyw0QkFBM0I7QUFBd0Qsb0JBQUksRUFBQyxNQUE3RDtBQUFvRSx1QkFBTyxFQUFDLFdBQTVFO0FBQXdGLHNCQUFNLEVBQUMsY0FBL0Y7QUFBQSx1Q0FDQTtBQUFNLCtCQUFhLEVBQUMsT0FBcEI7QUFBNEIsZ0NBQWMsRUFBQyxPQUEzQztBQUFtRCw2QkFBVyxFQUFFLENBQWhFO0FBQW1FLG1CQUFDLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFoR1I7QUE2R0gsR0E5R0Q7O0FBZ0hBLHNCQUNJO0FBQUssYUFBUyxpREFBMENELG1CQUFtQixFQUE3RCxDQUFkO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsd0VBQWY7QUFBQSw4QkFDSTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLDBGQUFmO0FBQTBHLGFBQUcsRUFBQyxnQkFBOUc7QUFBK0gsYUFBRyxFQUFDO0FBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSTtBQUFLLGlCQUFTLEVBQUMsb0VBQWY7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsNEhBQWI7QUFBMEksY0FBSSxFQUFDLFlBQS9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBRyxtQkFBUyxFQUFDLDRIQUFiO0FBQTBJLGNBQUksRUFBQyxXQUEvSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU9JO0FBQUcsbUJBQVMsRUFBQyw0SEFBYjtBQUEwSSxjQUFJLEVBQUMsU0FBL0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFnQkk7QUFBSyxpQkFBUyxFQUFDLHNEQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLDRIQUFiO0FBQTBJLGNBQUksRUFBQyxVQUEvSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUcsY0FBSSxFQUFDLG1DQUFSO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLDZGQUFmO0FBQTZHLGVBQUcsRUFBQyxpQkFBakg7QUFBbUksZUFBRyxFQUFDO0FBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBT0k7QUFBRyxjQUFJLEVBQUMsMkNBQVI7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsNkZBQWY7QUFBNkcsZUFBRyxFQUFDLG1CQUFqSDtBQUFxSSxlQUFHLEVBQUM7QUFBekk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJKLGVBMkJJO0FBQUssaUJBQVMsRUFBQywyQ0FBZjtBQUFBLCtCQUNJO0FBQVEsbUJBQVMsRUFBQyxvQkFBbEI7QUFBdUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNSixZQUFZLENBQUMsQ0FBQ0QsTUFBRixDQUFsQjtBQUFBLFdBQWhEO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLDBGQUFmO0FBQUEsb0NBQ0k7QUFBTSw2QkFBWSxNQUFsQjtBQUF5Qix1QkFBUyw4RkFBdUZHLHNCQUFzQixFQUE3RztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBTSw2QkFBWSxNQUFsQjtBQUF5Qix1QkFBUyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFNLDZCQUFZLE1BQWxCO0FBQXlCLHVCQUFTLDhGQUF1RkMseUJBQXlCLEVBQWhIO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUF1Q0k7QUFBSyxlQUFTLFlBQUtGLFNBQVMsRUFBZCx5RkFBZDtBQUFBLDhCQUNJO0FBQUcsaUJBQVMsRUFBQyx5Q0FBYjtBQUF1RCxZQUFJLEVBQUMsWUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUcsaUJBQVMsRUFBQyx5Q0FBYjtBQUF1RCxZQUFJLEVBQUMsV0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQU9JO0FBQUcsaUJBQVMsRUFBQyx5Q0FBYjtBQUF1RCxZQUFJLEVBQUMsU0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVVJO0FBQUcsaUJBQVMsRUFBQyx5Q0FBYjtBQUF1RCxZQUFJLEVBQUMsVUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixlQWFJO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNJO0FBQUcsY0FBSSxFQUFDLG1DQUFSO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQW1DLGVBQUcsRUFBQyxpQkFBdkM7QUFBeUQsZUFBRyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBRyxjQUFJLEVBQUMsMkNBQVI7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBbUMsZUFBRyxFQUFDLG1CQUF2QztBQUEyRCxlQUFHLEVBQUM7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNKLGVBNkRJO0FBQUssZUFBUyxFQUFDLHlIQUFmO0FBQUEsZ0JBQ0tLLGFBQWE7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdESixlQWdFSTtBQUFLLGVBQVMsRUFBQyw0Q0FBZjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQyx3QkFBYjtBQUFzQyxZQUFJLEVBQUMsV0FBM0M7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsNkxBQWxCO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLHdCQUFmO0FBQXdDLGlCQUFLLEVBQUMsNEJBQTlDO0FBQTJFLGdCQUFJLEVBQUMsTUFBaEY7QUFBdUYsbUJBQU8sRUFBQyxXQUEvRjtBQUEyRyxrQkFBTSxFQUFDLGNBQWxIO0FBQUEsbUNBQ0k7QUFBTSxnQ0FBZSxPQUFyQjtBQUE2QixpQ0FBZ0IsT0FBN0M7QUFBcUQsOEJBQWEsR0FBbEU7QUFBc0UsZUFBQyxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEVIOztHQWpPdUJaLEc7VUFDTEUscUQ7OztLQURLRixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWY0NWE4NWZjYTFhZTRkMzdiYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtoaWRkZW4sIHRvZ2dsZUhpZGRlbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIGNvbnN0IGdldEhpZGRlbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZGVuKSByZXR1cm4gJ2hpZGRlbidcclxuICAgICAgICBlbHNlIHJldHVybiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybU1lbnVCdXR0b25Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhpZGRlbikgcmV0dXJuICd0cmFuc2Zvcm0gcm90YXRlLTQ1IHRyYW5zbGF0ZS15LTMnXHJcbiAgICAgICAgZWxzZSByZXR1cm4gJ3RyYW5zZm9ybSAtdHJhbnNsYXRlLXktMydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm1NZW51QnV0dG9uQm90dG9tID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRkZW4pIHJldHVybiAndHJhbnNmb3JtIC1yb3RhdGUtNDUgLXRyYW5zbGF0ZS15LTMnXHJcbiAgICAgICAgZWxzZSByZXR1cm4gJ3RyYW5zZm9ybSByb3RhdGUtNDUgdHJhbnNsYXRlLXktMydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRIZWFkZXJCYWNrZ3JvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocm91dGVyLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIvXCI6IHJldHVybiAnYmctaG9tZSdcclxuICAgICAgICAgICAgY2FzZSBcIi9wb3J0Zm9saW9cIjogcmV0dXJuICdiZy1wb3J0Zm9saW8nXHJcbiAgICAgICAgICAgIGNhc2UgXCIvcGFzc2lvbnNcIjogcmV0dXJuICdiZy1wYXNzaW9ucydcclxuICAgICAgICAgICAgY2FzZSBcIi9yZXN1bWVcIjogcmV0dXJuICdiZy1yZXN1bWUnXHJcbiAgICAgICAgICAgIGNhc2UgXCIvY29udGFjdFwiOiByZXR1cm4gJ2JnLWNvbnRhY3QnXHJcbiAgICAgICAgICAgIGNhc2UgXCIvYmxvZ1wiOiByZXR1cm4gJ2JnLWJsb2cnXHJcbiAgICAgICAgICAgIGNhc2UgXCIvcG9ydGZvbGlvL3NlY3Rpb24tMzFcIjogcmV0dXJuICdiZy1zZWN0aW9uLTMxJ1xyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9yb2d1ZS1zcXVhZHJvblwiOiByZXR1cm4gJ2JnLXJvZ3VlLXNxdWFkcm9uJ1xyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9kZWZlbnNlLWlubm92YXRpb24tdW5pdFwiOiByZXR1cm4gJ2JnLWRlZmVuc2UtaW5ub3ZhdGlvbi11bml0J1xyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9zdHJlZXRjb2RlLWFjYWRlbXlcIjogcmV0dXJuICdiZy1zdHJlZXRjb2RlLWFjYWRlbXknXHJcbiAgICAgICAgICAgIGNhc2UgXCIvcG9ydGZvbGlvL2RhcnBhXCI6IHJldHVybiAnYmctZGFycGEnXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAnYmctZXJyb3InXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEhlYWRlclRleHQgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChyb3V0ZXIucGF0aG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHBiLTZcIj5MZWFkaW5nIHRlYW1zIHRvIDxici8+YnVpbGQgd29ya2luZyBzb2Z0d2FyZTxici8+dGhhdCBwZW9wbGUgbG92ZS48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctbm9ybWFsXCI+V2VsY29tZSB0byBjaG9vY2hpdXRyYWluLmNvbSw8YnIvPnRoZSBJbnRlcm5ldCBob21lIGZvciBXZXNsZXkgQ2hpdS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGJnLWluZGlnby01MDAgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgcHktMiBweC00IG15LTQgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpiZy1pbmRpZ28tNjAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzY2FsZS0xMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTFcIj5IaXJlIE1lIFRvZGF5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpb1wiOiByZXR1cm4gPGRpdj48aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+U2VlIHdoYXQgeW91IGNhbjxici8+ZXhwZWN0IGZyb20gbWUuPC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcIi9wYXNzaW9uc1wiOiByZXR1cm4gPGRpdj48aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+Q2hlY2sgb3V0IG15PGJyLz5QYXNzaW9ucyBhbmQgSG9iYmllcy48L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiL3Jlc3VtZVwiOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHBiLTZcIj5MZWFybiBtb3JlIGFib3V0PGJyLz5NeSBTdG9yeS48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0N3h6ajZrT1U3aDlMVjdpc3FNVVJWb0lfUFhzM09hdi92aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGJnLWluZGlnby01MDAgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgcHktMiBweC00IG15LTQgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpiZy1pbmRpZ28tNjAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzY2FsZS0xMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTFcIj5Eb3dubG9hZCBSZXN1bWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00IDE2djFhMyAzIDAgMDAzIDNoMTBhMyAzIDAgMDAzLTN2LTFtLTQtNGwtNCA0bTAgMGwtNC00bTQgNFY0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcIi9jb250YWN0XCI6IHJldHVybiA8ZGl2PjxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHBiLTZcIj5MZXQncyBjb25uZWN0IHRvZGF5ITwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgIGNhc2UgXCIvYmxvZ1wiOiByZXR1cm4gPGRpdj48aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+R2V0IHRvIGtub3cgbXk8YnIvPnRob3VnaHRzIGFuZCBwaGlsb3NvcGh5LjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgIGNhc2UgXCIvcG9ydGZvbGlvL3NlY3Rpb24tMzFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy10aWdodCBwYi02XCI+PGltZyBjbGFzc05hbWU9XCJoLTIwIHByLTRcIiBzcmM9XCIuLi9zdGFyZm94LWxvZ28ucG5nXCI+PC9pbWc+U3VyZUZpcmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctbm9ybWFsIHBiLTZcIj5Nb2Rlcm5pemluZyB0aGUgVVMgU3BhY2UgRm9yY2Unczxici8+UkYgRGVjb25mbGljdGlvbiBjYXBhYmlsaXRpZXMgdG88YnIvPnByb21vdGUgYSBzYWZlIHNwYWNlIGVudmlyb25tZW50LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUgZmxleCBpdGVtcy1jZW50ZXJcIiBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSTAxVVRXNjZTOEF6YzdaMHVxSWxMLWdmQ1RGeGxxQWMvdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtaW5kaWdvLTYwMCBvcGFjaXR5LTgwIHJvdW5kZWQtZnVsbCBoLTEyIHctMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIGhvdmVyOm9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE0Ljc1MiAxMS4xNjhsLTMuMTk3LTIuMTMyQTEgMSAwIDAwMTAgOS44N3Y0LjI2M2ExIDEgMCAwMDEuNTU1LjgzMmwzLjE5Ny0yLjEzMmExIDEgMCAwMDAtMS42NjR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgcHgtNFwiPldhdGNoIFZpZGVvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9yb2d1ZS1zcXVhZHJvblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlubGluZSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHBiLTZcIj48aW1nIGNsYXNzTmFtZT1cImgtMjAgcHItNFwiIHNyYz1cIi4uL2Rvd2RpbmctbG9nby5wbmdcIj48L2ltZz5Eb3dkaW5nPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLW5vcm1hbCBwYi02XCI+VGhlIERlcGFydG1lbnQgb2YgRGVmZW5zZSdzIHNvbGUgdGVhbSA8YnIvPmZvciBwcm92aWRpbmcgZHJvbmVzIHRvIG91ciB0cm9vcHMgYW5kPGJyLz5wcm90ZWN0aW5nIHRoZW0gZnJvbSBkcm9uZSB0aHJlYXRzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUgZmxleCBpdGVtcy1jZW50ZXJcIiBocmVmPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj04T05yYjFkZFRSZyZmZWF0dXJlPWVtYl90aXRsZWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtaW5kaWdvLTYwMCBvcGFjaXR5LTgwIHJvdW5kZWQtZnVsbCBoLTEyIHctMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIGhvdmVyOm9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE0Ljc1MiAxMS4xNjhsLTMuMTk3LTIuMTMyQTEgMSAwIDAwMTAgOS44N3Y0LjI2M2ExIDEgMCAwMDEuNTU1LjgzMmwzLjE5Ny0yLjEzMmExIDEgMCAwMDAtMS42NjR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgcHgtNFwiPldhdGNoIFZpZGVvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9kZWZlbnNlLWlubm92YXRpb24tdW5pdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlubGluZSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHBiLTZcIj48aW1nIGNsYXNzTmFtZT1cImgtMjAgcHItNFwiIHNyYz1cIi4uL2RlZmVuc2UtaW5ub3ZhdGlvbi11bml0LWxvZ28ucG5nXCI+PC9pbWc+RHJvbmUgTWVkaWNhbCBSZXN1cHBseTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy1ub3JtYWwgcGItNlwiPlVzaW5nIGRyb25lcyB0byBkZWxpdmVyIGxpZmVzYXZpbmcgYmxvb2Q8YnIvPmFuZCBtZWRpY2FsIHN1cHBsaWVzIHRvIHRoZSBmcm9udCBsaW5lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUgZmxleCBpdGVtcy1jZW50ZXJcIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1GZVNDRWFsTU9MOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtaW5kaWdvLTYwMCBvcGFjaXR5LTgwIHJvdW5kZWQtZnVsbCBoLTEyIHctMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIGhvdmVyOm9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE0Ljc1MiAxMS4xNjhsLTMuMTk3LTIuMTMyQTEgMSAwIDAwMTAgOS44N3Y0LjI2M2ExIDEgMCAwMDEuNTU1LjgzMmwzLjE5Ny0yLjEzMmExIDEgMCAwMDAtMS42NjR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgcHgtNFwiPldhdGNoIFZpZGVvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9zdHJlZXRjb2RlLWFjYWRlbXlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0yMCBwYi02XCIgc3JjPVwiLi4vc3RyZWV0Y29kZS1sb2dvLmpwZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctbm9ybWFsIHBiLTZcIj5FbXBvd2VyaW5nIHVuZGVycHJpdmlsZWdlZCBjb21tdW5pdGllczxici8+dG8gZnVsZmlsbCB0aGVpciBmdWxsIHBvdGVudGlhbCBpbiB0aGUgdGVjaCBpbmR1c3RyeS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lIGZsZXggaXRlbXMtY2VudGVyXCIgaHJlZj1cImh0dHBzOi8vdmltZW8uY29tLzI0OTAwOTc5NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtaW5kaWdvLTYwMCBvcGFjaXR5LTgwIHJvdW5kZWQtZnVsbCBoLTEyIHctMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIGhvdmVyOm9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE0Ljc1MiAxMS4xNjhsLTMuMTk3LTIuMTMyQTEgMSAwIDAwMTAgOS44N3Y0LjI2M2ExIDEgMCAwMDEuNTU1LjgzMmwzLjE5Ny0yLjEzMmExIDEgMCAwMDAtMS42NjR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgcHgtNFwiPldhdGNoIFZpZGVvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiL3BvcnRmb2xpby9kYXJwYVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlubGluZSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHBiLTZcIj48aW1nIGNsYXNzTmFtZT1cImgtMjAgcHItNFwiIHNyYz1cIi4uL3N3YXJtLWNoYWxsZW5nZS1sb2dvLnBuZ1wiPjwvaW1nPkRBUlBBIFN3YXJtIERyb25lIENoYWxsZW5nZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgbGVhZGluZy1ub3JtYWwgcGItNlwiPlRyYWlsYmxhemluZyBzd2FybSBkcm9uZSB0YWN0aWNzIGFuZCB0ZWNobm9sb2dpZXM8YnIvPnRvIGRvbWluYXRlIHRoZSBmdXR1cmUgYmF0dGxlZmllbGQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZSBmbGV4IGl0ZW1zLWNlbnRlclwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXVmaWRIX00wUnFRXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgdGV4dC1pbmRpZ28tNjAwIG9wYWNpdHktODAgcm91bmRlZC1mdWxsIGgtMTIgdy0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpiZy1pbmRpZ28tNTAwIGhvdmVyOnRleHQtZ3JheS0zMDAgaG92ZXI6b3BhY2l0eS03NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTQuNzUyIDExLjE2OGwtMy4xOTctMi4xMzJBMSAxIDAgMDAxMCA5Ljg3djQuMjYzYTEgMSAwIDAwMS41NTUuODMybDMuMTk3LTIuMTMyYTEgMSAwIDAwMC0xLjY2NHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBweC00XCI+V2F0Y2ggVmlkZW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW5saW5lIGZsZXggaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgcGItNlwiPk9vcHMhIEkgY2FuJ3Qgc2VlbSB0byBmaW5kPGJyLz50aGUgcGFnZSB5b3UncmUgbG9va2luZyBmb3IuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCBsZWFkaW5nLW5vcm1hbCBwYi02XCI+TWF5IEkgbWFrZSBpdCB1cCB0byB5b3U8YnIvPmFuZCB0YWtlIHlvdSBiYWNrIHRvIHRoZSBob21lIHBhZ2U/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGJnLWluZGlnby01MDAgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgcHktMiBweC00IG15LTQgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpiZy1pbmRpZ28tNjAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzY2FsZS0xMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTFcIj5JIEd1ZXNzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC1zY3JlZW4gdy1zY3JlZW4gYmctY292ZXIgYmctY2VudGVyICR7Z2V0SGVhZGVyQmFja2dyb3VuZCgpfWB9PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYmctb3BhY2l0eS02MCBmbGV4IGl0ZW1zLWNlbnRlciBweC0xMiBweS0yIGxnOnB4LTMyIGxnOnB5LTBcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJweS0zIGgtMjAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6b3BhY2l0eS03NSB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwXCIgc3JjPVwiY2hld3ktbG9nby5wbmdcIiBhbHQ9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IG1kOnNwYWNlLXgtOCBsZzpzcGFjZS14LTIwIGp1c3RpZnktY2VudGVyIGZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWJsYWNrIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtaW5kaWdvLTYwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwXCIgaHJlZj1cIi9wb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWJsYWNrIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtaW5kaWdvLTYwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwXCIgaHJlZj1cIi9wYXNzaW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1ibGFjayB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWluZGlnby02MDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiIGhyZWY9XCIvcmVzdW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlc3VtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgbWQ6c3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtYmxhY2sgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1pbmRpZ28tNjAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTBcIiBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Nob29jaGl1dHJhaW56XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGc6cHgtMiBweS0zIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOm9wYWNpdHktNTAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiIHNyYz1cImdpdGh1Yi1sb2dvLnBuZ1wiIGFsdD1cIkdpdEh1YlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2hvb2NoaXV0cmFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxnOnB4LTIgcHktMyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTc1IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTBcIiBzcmM9XCJsaW5rZWRpbi1sb2dvLnBuZ1wiIGFsdD1cIkxpbmtlZEluXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBmbGV4LWdyb3cgbWQ6aGlkZGVuIHB4LTlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUhpZGRlbighaGlkZGVuKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctOCBhYnNvbHV0ZSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtaW5kaWdvLTYwMCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT17YHJvdW5kZWQtbGcgYmxvY2sgaC0xIHctOSBiZy1jdXJyZW50IHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAke3RyYW5zZm9ybU1lbnVCdXR0b25Ub3AoKX1gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJsb2NrIGgtMSB3LTkgYmctY3VycmVudCB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2Byb3VuZGVkLWxnIGJsb2NrIGgtMSB3LTkgYmctY3VycmVudCB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgJHt0cmFuc2Zvcm1NZW51QnV0dG9uQm90dG9tKCl9YH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtnZXRIaWRkZW4oKX0gdGV4dC1ibGFjayBmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGl0ZW1zLWVuZCBzcGFjZS15LTUgcC0xMiBiZy1ncmF5LTUwIGJnLW9wYWNpdHktNjBgfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ibGFja1wiIGhyZWY9XCIvcG9ydGZvbGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtMnhsIHRleHQtYmxhY2tcIiBocmVmPVwiL3Bhc3Npb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFzc2lvbnNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ibGFja1wiIGhyZWY9XCIvcmVzdW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVzdW1lXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtMnhsIHRleHQtYmxhY2tcIiBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jaG9vY2hpdXRyYWluelwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxnOnB4LTIgcHktMyBoLTE2XCIgc3JjPVwiZ2l0aHViLWxvZ28ucG5nXCIgYWx0PVwiR2l0SHViXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jaG9vY2hpdXRyYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGc6cHgtMiBweS0zIGgtMTZcIiBzcmM9XCJsaW5rZWRpbi1sb2dvLnBuZ1wiIGFsdD1cIkxpbmtlZEluXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteC1hdXRvIGgtc2NyZWVuIHB4LTggcGItMiBzbTpweC0xNiBzbTpwYi00IG1kOnB4LTMyIG1kOnBiLTggbGc6cHgtNjQgbGc6cGItMTZcIj5cclxuICAgICAgICAgICAgICAgIHtnZXRIZWFkZXJUZXh0KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcGItNFwiIGhyZWY9XCIjc2VjdGlvbjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtaW5kaWdvLTYwMCBvcGFjaXR5LTgwIHJvdW5kZWQtZnVsbCBoLTEyIHctMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIGhvdmVyOm9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhbmltYXRlLWJvdW5jZSB3LTYgaC02XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiM1wiIGQ9XCJNMTkgMTRsLTcgN20wIDBsLTctN203IDdWM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=