webpackJsonp([0,5],{227:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(11),c=n(a),f=o(151);t.default=(0,f.withRouter)(function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return this.props.children?this.props.children:c.default.createElement("div",null,c.default.createElement("h2",null,"Profile"),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"profile/a"},"ProfileA")),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"profile/b"},"ProfileB")),c.default.createElement("div",null,c.default.createElement(f.Link,{to:"/"},"HOME")),c.default.createElement("button",{onClick:this.gohome.bind(this)},"回到HOME"))}},{key:"gohome",value:function(){this.props.router.push("/")}},{key:"componentDidMount",value:function(){console.log(this.props.router),this.props.router.setRouteLeaveHook(this.props.route,this.routerWillLeave),this.props.router.listen(this.routerChange)}},{key:"routerChange",value:function(){console.log("routerChange")}},{key:"routerWillLeave",value:function(){console.log("routerWillLeave")}}]),t}(a.Component))}});