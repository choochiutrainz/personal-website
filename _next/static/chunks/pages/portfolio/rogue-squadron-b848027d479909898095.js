_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},LVuk:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o);function i(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"Rogue Squadron | Wesley Chiu"}),Object(r.jsx)("meta",{property:"og:site_name",content:"choochiutrain.com"}),Object(r.jsx)("meta",{property:"og:title",content:"Keeping our troops safe from drone threats"}),Object(r.jsx)("meta",{property:"og:description",content:"We're the US Military's sole team for providing drones to our troops and protecting them from drone threats. See how my passion for modern, quality tools helps keep this military startup stay ahead."}),Object(r.jsx)("meta",{property:"og:image",content:"../thumbnail.png"}),Object(r.jsx)("meta",{property:"og:url",content:"https://choochiutrain.com/portfolio/rogue-squadron"})]}),Object(r.jsxs)("div",{id:"section1",className:"flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-6 sm:px-24",children:[Object(r.jsx)("h1",{className:"text-4xl text-yellow-300 font-bold",children:"The Dowding Story"}),Object(r.jsx)("p",{className:"text-2xl text-gray-300",children:"In 2017, ISIS began using comercially available drones to drop grenades on troops. The Department of Defense (DoD) needed a quality, modern solution to detect and protect against them. So we built Dowding."}),Object(r.jsx)("img",{className:"rounded-md transition duration-300 ease-in-out",src:"../dowding-homepage.png",alt:"Dowding homepage"}),Object(r.jsx)("p",{className:"text-2xl text-gray-300",children:"Dowding fuses various data sources into a central interface that law enforcement and national defense forces can use to detect and track drone incursions in realtime. I helped build it as a Software Engineer."})]}),Object(r.jsxs)("div",{className:"flex flex-col bg-gray-200 justify-center items-center space-y-4 pb-16 px-6 text-center",children:[Object(r.jsx)("h1",{className:"text-4xl pt-16 p-6 font-bold",children:"We built Dowding on these principles:"}),Object(r.jsx)("li",{className:"text-2xl",children:"Realtime detecting, tracking, and alerting"}),Object(r.jsx)("li",{className:"text-2xl",children:"Mobile-Centric"}),Object(r.jsx)("li",{className:"text-2xl",children:"Built with a modern tech stack"}),Object(r.jsx)("li",{className:"text-2xl",children:"Clean, minimal UI's that our users love"}),Object(r.jsxs)("p",{className:"px-6 sm:px-24 text-xl text-center",children:["(Fun Fact: Dowding was named for the ",Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://en.wikipedia.org/wiki/Dowding_system",children:"Dowding System"}),", the world\u2019s first integrated air defense system that helped win the Battle of Britain)"]})]}),Object(r.jsxs)("div",{className:"w-screen px-6 py-16 bg-white space-y-8 items-center text-center sm:text-left",children:[Object(r.jsx)("h1",{className:"text-center text-4xl font-bold",children:"About Rogue Squadron"}),Object(r.jsx)("img",{className:"w-64 sm:h-auto sm:float-left px-10 pb-6 sm:pb-0",src:"../rogue-squadron-logo.png",alt:"Rogue Squadron Logo"}),Object(r.jsxs)("p",{className:"text-2xl",children:[Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://www.linkedin.com/company/diux-rogue-squadron",children:"Rogue Squadron"})," is the DoD's premier UAS/Counter-UAS team, focused on detecting, penetration testing, and hardening commercially available drones for national defense use."]}),Object(r.jsx)("p",{className:"text-2xl",children:"We're the only organization with the resources and capability to meet immediate operational needs around drones, and we have been providing support to over 200 organizations across the Departments of Defense, Homeland Security, Interior, and Justice as well as allied partners."}),Object(r.jsxs)("p",{className:"text-2xl",children:["Rogue Squadron was originally part of the ",Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://www.diu.mil/",children:"Defense Innovation Unit"}),". In March 2020, RS went through a ",Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://dds.mil/media/announcements/2020-05-rogue-squadron-transitions-from-defense-innovation-unit-to-defense-digital-service",children:"successful acquisition"})," by the Defense Digital Service (DDS)."]})]}),Object(r.jsx)("div",{className:"bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center text-center",children:Object(r.jsxs)("h1",{className:"text-4xl font-bold",children:["Check out my next project: ",Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"/portfolio/defense-innovation-unit",children:"Drone Medical Resupply"})]})})]})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rCMp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/rogue-squadron",function(){return n("LVuk")}])}},[["rCMp",0,1]]]);