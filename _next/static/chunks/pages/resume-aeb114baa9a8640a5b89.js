_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(s.default.useContext(r.AmpStateContext))};var a,s=(a=n("q1tI"))&&a.__esModule?a:{default:a},r=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,s=void 0!==a&&a,r=e.hasQuery,c=void 0!==r&&r;return n||s&&c}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var r=a?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(n,s,r):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(a=n("Xuae"))&&a.__esModule?a:{default:a},c=n("lwAK"),i=n("FYa8"),o=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function x(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(s){var r=!0,c=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){c=!0;var i=s.key.slice(s.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(s.type){case"title":case"base":t.has(s.type)?r=!1:t.add(s.type);break;case"meta":for(var o=0,l=u.length;o<l;o++){var d=u[o];if(s.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?r=!1:n.add(d);else{var p=s.props[d],x=a[d]||new Set;"name"===d&&c||!x.has(p)?(x.add(p),a[d]=x):r=!1}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,s.useContext)(c.AmpStateContext),a=(0,s.useContext)(i.HeadManagerContext);return s.default.createElement(r.default,{reduceComponentsToState:x,headManager:a,inAmpMode:(0,o.isInAmpMode)(n)},t)}h.rewind=function(){};var f=h;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FQCn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return n("TuXs")}])},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var s=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=s},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RIqP:function(e,t,n){var a=n("Ijbi"),s=n("EbDI"),r=n("ZhPi"),c=n("Bnag");e.exports=function(e){return a(e)||s(e)||r(e)||c()}},SksO:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},TuXs:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),s=n("g4pe"),r=n.n(s);t.default=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)("title",{children:'Resume - Wesley "Chewy" Chiu'}),Object(a.jsx)("meta",{property:"og:site_name",content:'Wesley "Chewy" Chiu'}),Object(a.jsx)("meta",{property:"og:title",content:'Resume - Wesley "Chewy" Chiu'}),Object(a.jsx)("meta",{property:"og:description",content:"Take a deeper look at what I've accomplished and what I can bring to your team."}),Object(a.jsx)("meta",{property:"og:image",content:""}),Object(a.jsx)("meta",{property:"og:url",content:"https://choochiutrain.com/resume"})]}),Object(a.jsxs)("div",{id:"section1",className:"grid grid-cols-4 p-40 pt-24 items-start w-screen bg-s31-blue",children:[Object(a.jsx)("img",{className:"max-h-96 text-gray-100 rounded-md",src:"Official-Photo-20210217.jpg",alt:"Portrait of me"}),Object(a.jsxs)("div",{className:"col-span-3 flex flex-col justify-center space-y-4",children:[Object(a.jsx)("h1",{className:"text-4xl text-yellow-300 uppercase font-bold",children:'Wesley "Chewy" Chiu'}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"I am an outcome-oriented Product Manager on a mission to solve compelling problems with an inspiring team."}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"I have a strong background in navigating difficult prioritization problems, finding the right product to build, and balancing business priorities and user needs with technical complexity."}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"I passionately strive to build diverse, collaborative teams that value agile principles, a learning mindset, psychological safety, curiosity, and a culture of trust."})]}),Object(a.jsxs)("div",{className:"flex flex-col justify-start py-14",children:[Object(a.jsx)("h1",{className:"text-4xl text-yellow-300 uppercase font-bold pb-4",children:"Skills"}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsx)("h2",{className:"text-2xl text-gray-100 font-bold",children:"Product Management"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Agile Product Management"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Lean Startup"})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsx)("h2",{className:"text-2xl text-gray-100 font-bold",children:"Software Engineering"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Extreme Programming"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Continous Integration and Delivery"}),Object(a.jsx)("p",{className:"text-xl text-gray-300 pb-4",children:"Test Driven Development"})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsx)("h2",{className:"text-2xl text-gray-100 font-bold",children:"Cyber Security"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Penetration Testing"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Software Reverse Engineering"}),Object(a.jsx)("p",{className:"text-xl text-gray-300 pb-4",children:"Social Engineering"})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsx)("h2",{className:"text-2xl text-gray-100 font-bold",children:"Product Design"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"User-Centered Design"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Rapid Prototyping"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Usability Testing"}),Object(a.jsx)("p",{className:"text-xl text-gray-300 pb-4",children:"User Interview"})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsx)("h2",{className:"text-2xl text-gray-100 font-bold",children:"Languages & Frameworks"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Next.js / React.js"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"TypeScript / JavaScript"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Google Apps Script"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Angular"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Python"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"C / C++"}),Object(a.jsx)("p",{className:"text-xl text-gray-300 pb-4",children:"Go"})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsx)("h2",{className:"text-2xl text-gray-100 font-bold",children:"Tools"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"MS Visual Studio Code"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Adobe Creative Suite"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Figma"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Kali Linux"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Metasploit"})]})]}),Object(a.jsxs)("div",{className:"col-span-3 flex flex-col justify-start py-14",children:[Object(a.jsx)("h1",{className:"text-4xl text-yellow-300 uppercase font-bold pb-4",children:"Experience"}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsxs)("h2",{className:"text-2xl text-gray-100 font-bold",children:["DEPUTY FLIGHT COMMANDER ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," 17th Intelligence Squadron ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Langley AFB ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Feb '20 - Present"]}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Looking to modernize tools and software used by the intelligence and cyber warfare communities to maximize mission effectivness and minimize productivity waste. Consulted other software development units on applying agile principles and fundamentals to their unique business problem set. Facilitated multiple workshops to use agile principles to better collaborate, experiment, and iterate on ideas and processes."})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsxs)("h2",{className:"pt-6 text-2xl text-gray-100 font-bold",children:["PRODUCT MANAGER ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Section 31 ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Santa Monica ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," May '19 - Feb '20"]}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Led the development and delivery of a new RF Deconfliction analysis tool to replace outdated legacy software. Replaced manual 3-day process to 3-min across multiple military branches and national intelligence agencies. Prioritized unique mission needs between a dozen units and their unique value streams. Implemented best practices to encourage product context sharing between all product teams in this new U.S. Space Force start up."})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsxs)("h2",{className:"pt-6 text-2xl text-gray-100 font-bold",children:["SOFTWARE ENGINEER ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Rogue Squadron - Defense Digital Service ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Mountain View ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Nov '18 - May '19"]}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Developed and deployed new airspace situational awareness tool to detect multiple types of small commercial drones realtime. Balanced unique mission and legal needs between users from NORAD, U.S. Secret Service, and FBI. First learned and applied agile principles with XP methodology. Assisted in penetration testing and hardening commercial drones for DoD use."})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsxs)("h2",{className:"pt-6 text-2xl text-gray-100 font-bold",children:["PRODUCT MANAGER ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Defense Innovation Unit ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Mountain View ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Feb '18 - Nov '18"]}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Led multiple multi-million dollar pathfinder projects to rapidly apply commercial innovations to DoD problems. Adapted commercial solutions to unique warfighter needs with a focus on user centered design. Enabled a community of non-traditional start ups and businesses to sign rapid prototyping contracts with military entities within 60 days on average after project initiation."})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsxs)("h2",{className:"pt-6 text-2xl text-gray-100 font-bold",children:["PENETRATION TESTER ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," DARPA Swarm Drone Challenge ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Colorado Springs ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Oct '16 - Mar '17"]}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Was part of the US Air Force Academy team to develop and code tactics, techniques, and behaviors for drones that act as a collective swarm. Also penetration tested the drones provided by DARPA and exploited vulnerabilities during a live-fly event to demonstrate the importance of cyber security in emerging technologies and showcase how one can use cyberwarfare to gain an tactical advantage over a more technologically advanced foe."})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsxs)("h2",{className:"pt-6 text-2xl text-gray-100 font-bold",children:["SOFTWARE ENGINEERING INTERN ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," National Reconnaissance Office ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Chantilly ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," May '16 - Aug '16"]}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"Was part of the External Cloud Office at the National Reconnaissance Office (NRO) Headquarters to introduce and integrate an AWS hosted service called the Commercial Cloud Service (C2S) to the NRO. Assisted U.S. partner intelligence agencies and international allies on transitioning to the C2S environment. Developed and deployed basic scripts to minimize time spent on migrating data, provisioning accounts, and transitioning operations to C2S."})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsxs)("h2",{className:"pt-6 text-2xl text-gray-100 font-bold",children:["SOFTWARE REVERSE ENGINEERING INTERN ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," National Reconnaissance Office ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," Denver ",Object(a.jsx)("span",{className:"font-thin",children:"||"})," May '15 - Aug '15"]}),Object(a.jsx)("p",{className:"text-xl text-gray-300 pb-16",children:"Developed and deployed apps for data aggregation and signals intelligence development that replaced manual excel process with a 80% decrease in processing time. Reverse engineered various communication technologies to enable signals collection and analysis."})]}),Object(a.jsxs)("div",{className:"py-4 space-y-4",children:[Object(a.jsx)("h1",{className:"text-4xl text-yellow-300 uppercase font-bold",children:"Education & Certifications"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"OFFENSIVE SECURITY CERTIFIED PROFESSIONAL || In Progress || Offensive Security"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"SECURITY+ || 2018 || CompTIA"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"WIRELESS ETHICAL HACKER || 2017 || SANS Institute"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"COMPUTER & NETWORK SECURITY || 2017 || U.S. Air Force Academy"}),Object(a.jsx)("p",{className:"text-xl text-gray-300",children:"MANDARIN CHINESE MINOR || 2017 || U.S. Air Force Academy"})]})]})]}),Object(a.jsxs)("div",{className:"bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center",children:[Object(a.jsx)("h1",{className:"text-center w-screen text-4xl font-bold",children:"Let's build the next great success story together!"}),Object(a.jsxs)("h1",{className:"text-center w-screen text-2xl",children:["Now that you know what I've done and what I bring to your team,",Object(a.jsx)("br",{}),"feel free to reach out and start a conversation. I can't wait to get started!"]}),Object(a.jsx)("a",{href:"/contact",children:Object(a.jsxs)("button",{className:"inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110",children:[Object(a.jsx)("span",{className:"pr-1",children:"Contact Me Today"}),Object(a.jsx)("svg",{className:"w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]})]})}},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),s=n("lwsE"),r=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var s=o(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),p=function(e){c(n,e);var t=l(n);function n(e){var r;return s(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=p},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},a1gu:function(e,t,n){var a=n("cDf5"),s=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?s(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var s=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=s},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["FQCn",0,1]]]);