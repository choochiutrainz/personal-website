_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var d=p[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var u=a.props[d],h=r[d]||new Set;"name"===d&&i||!h.has(u)?(h.add(u),r[d]=h):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},fDc9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/darpa",function(){return n("wKUf")}])},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},wKUf:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("g4pe"),o=n.n(a);t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("title",{children:'DARPA - Wesley "Chewy" Chiu'})}),Object(r.jsxs)("div",{id:"section1",className:"flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-24",children:[Object(r.jsx)("h1",{className:"text-4xl text-yellow-300 font-bold",children:"The Swarmin' Story"}),Object(r.jsx)("p",{className:"text-2xl text-gray-300",children:"The average F-22 Raptor costs $150M, the F-35 Lightning II $100M, and the Ford Class Supercarrier $13B. All far too high a price to pay if lost under any circumstance. The US Armed Forces needed a cheaper, more sustainable way to support ground troops and project power. DARPA took inspiration from the honey bee: cheap, expendable drones that behave as a single collective to swarm and overwhelm any objective."}),Object(r.jsx)("img",{className:"rounded-md transition duration-300 ease-in-out",src:"../darpa-usafa-team.png",alt:"DARA team photo"}),Object(r.jsx)("p",{className:"text-2xl text-gray-300",children:"There's plenty of research behind making swarms of drones fundamentally usable and demo-able, but we've yet to experiment on how to tactically use and apply them to scenarios. And thus, DARPA organized the Service Academies Swarm Challenge, with us as the US Air Force Academy team."})]}),Object(r.jsxs)("div",{className:"flex flex-col bg-gray-200 justify-center items-center space-y-4 pb-16",children:[Object(r.jsx)("h1",{className:"text-center w-screen text-4xl pt-16 p-6 font-bold",children:"The DARPA Swarm Drone Challenge included:"}),Object(r.jsx)("p",{className:"text-2xl",children:"A combination of fixed-wing and rotary wing drones"}),Object(r.jsx)("p",{className:"text-2xl",children:"Each Service Academy team developing their own swarm tactics and techniques and building it in code"}),Object(r.jsxs)("p",{className:"text-2xl",children:["A ",Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://www.youtube.com/watch?v=RZ-CKA4fUhg",children:"capstone live-fly event"})," featuring air-to-air battles between each teams' swarms"]}),Object(r.jsxs)("div",{className:"flex flex-row space-x-6 py-6 justify-center items-center",children:[Object(r.jsx)("img",{className:"max-h-64 rounded-md",src:"../darpa-display.png",alt:"DARPA drone display"}),Object(r.jsx)("img",{className:"max-h-64 rounded-md",src:"../darpa-jamming.jpg",alt:"Jamming drones"}),Object(r.jsx)("img",{className:"max-h-64 rounded-md",src:"../darpa-drone.jpg",alt:"DARPA drone"})]}),Object(r.jsx)("p",{className:"px-24 py-6 text-xl text-center",children:"My partner, 1st Lt Kyle Hubert, and I were studying for our Computer and Network Security degrees at the time, and we took issue with the competition moderators' decision to waive security requirements and ban use of cyber techniques in the event. So as we helped develop the team develop our strategy and code the drone behaviors, we also penetration tested and reverse engineered the drones and experimented with various exploits against them, from Man-in-the-Middle (MITM) attacks to social engineering against our opposing teams."}),Object(r.jsx)("p",{className:"px-24 py-6 text-xl text-center",children:"During the live-fly exercise at Camp Roberts, CA, we sneakily set up one of our antennas and launched our attacks against our opposing teams. Within seconds, several opposing drones suddenly started landing right where they were hovering as our drones pressed the attack. The opposing team, unaware of what was truly happening, went into a panic and lost their team cohesion."}),Object(r.jsx)("p",{className:"px-24 py-6 text-xl text-center",children:"We demonstrated that even with the latest and greatest technology in hand, we could still lose a fight if we deprioritize security. In a contested environment, an opposing force would do anything to gain an advantage or nullify ours, and so we shouldn't limit the actions of red teams so that we can learn the most valuable lessons and be best prepared for the real world. As a result, DARPA allowed cybersecurity actions and hardening on its drones in the 2nd year of the Swarm Challenge. We did get some real stern admonishments from our leadership, though. But we still graduated, and we got some good laughs. Worth it."}),Object(r.jsxs)("p",{className:"px-24 py-6 text-xl text-center",children:["If you're interested, you can read more about the competition ",Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://www.darpa.mil/news-events/2017-05-11",children:"here."})]})]}),Object(r.jsxs)("div",{className:"py-16 bg-white space-y-8",children:[Object(r.jsx)("h1",{className:"text-center w-screen text-4xl font-bold",children:"About the Defense Advanced Research Projects Agency"}),Object(r.jsx)("img",{className:"h-52 float-left px-10",src:"../darpa-logo.jpg",alt:"DARPA Logo"}),Object(r.jsxs)("p",{className:"text-2xl clear-none",children:[Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://www.darpa.mil/",children:"DARPA"})," is a Department of Defense (DoD) agency dedicated to creating breakthrough technologies and capabilities for national security."]}),Object(r.jsx)("p",{className:"text-2xl clear-none",children:"Where other organizations focus on incremental advances, DARPA explicitly strives for transformational change by making pivotal investments in emerging, leading-edge technologies."}),Object(r.jsxs)("p",{className:"text-2xl",children:["DARPA also plays an invaluable role in solving problems that serve more than the Department of Defense directly, from ",Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://www.darpa.mil/news-events/2020-05-27",children:"securing the US semiconductor supply chain"})," to ",Object(r.jsx)("a",{className:"underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70",href:"https://www.darpa.mil/work-with-us/covid-19",children:"covid-19 detection."})]})]}),Object(r.jsxs)("div",{className:"bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center",children:[Object(r.jsx)("h1",{className:"text-4xl font-bold",children:"What I've done & what I can do"}),Object(r.jsx)("h1",{className:"text-2xl",children:"Feel free to dive deeper into what I've accomplished and see what I can do for you and your team."}),Object(r.jsx)("a",{href:"/resume",children:Object(r.jsxs)("button",{className:"inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110",children:[Object(r.jsx)("span",{className:"pr-1",children:"View My Resume"}),Object(r.jsx)("svg",{className:"w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]})]})}}},[["fDc9",0,1]]]);