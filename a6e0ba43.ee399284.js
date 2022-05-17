(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{281:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),i=r(7),s=(r(0),r(393)),a=(r(394),{id:"index-redis-cli-with-redis-cluster",title:"4.2 Using Redis-CLI with a Redis Cluster",sidebar_label:"4.2 Using Redis-CLI with a Redis Cluster",slug:"/operate/redis-at-scale/scalability/redis-cli-with-redis-cluster",isEditable:!1}),o={unversionedId:"operate/redis-at-scale/scalability/redis-cli-with-redis-cluster/index-redis-cli-with-redis-cluster",id:"operate/redis-at-scale/scalability/redis-cli-with-redis-cluster/index-redis-cli-with-redis-cluster",isDocsHomePage:!1,title:"4.2 Using Redis-CLI with a Redis Cluster",description:"When you use redis-cli to connect to a shard of a Redis Cluster, you are connected to that shard only, and cannot access data from other shards. If you try to access keys from the wrong shard, you will get a MOVED error.",source:"@site/docs/operate/redis-at-scale/scalability/redis-cli-with-redis-cluster/index-redis-cli-with-redis-cluster.mdx",slug:"/operate/redis-at-scale/scalability/redis-cli-with-redis-cluster",permalink:"/operate/redis-at-scale/scalability/redis-cli-with-redis-cluster",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/redis-at-scale/scalability/redis-cli-with-redis-cluster/index-redis-cli-with-redis-cluster.mdx",version:"current",lastUpdatedAt:1652821384,sidebar_label:"4.2 Using Redis-CLI with a Redis Cluster",sidebar:"docs",previous:{title:"4.1 Exercise - Creating a Redis Cluster",permalink:"/operate/redis-at-scale/scalability/exercise-1"},next:{title:"4.3 Redis Cluster and Client Libraries",permalink:"/operate/redis-at-scale/scalability/redis-cluster-and-client-libraries"}},c=[],l={toc:c};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"When you use ",Object(s.b)("inlineCode",{parentName:"p"},"redis-cli")," to connect to a shard of a Redis Cluster, you are connected to that shard only, and cannot access data from other shards. If you try to access keys from the wrong shard, you will get a ",Object(s.b)("inlineCode",{parentName:"p"},"MOVED")," error."),Object(s.b)("p",null,"There is a trick you can use with ",Object(s.b)("inlineCode",{parentName:"p"},"redis-cli")," so you don\u2019t have to open connections to all the shards, but instead you let it do the connect and reconnect work for you. It\u2019s the ",Object(s.b)("inlineCode",{parentName:"p"},"redis-cli")," cluster support mode, triggered by the ",Object(s.b)("inlineCode",{parentName:"p"},"-c")," switch:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ redis-cli -p 7000 -c\n")),Object(s.b)("p",null,"When in cluster mode, if the client gets an ",Object(s.b)("inlineCode",{parentName:"p"},"(error) MOVED 15495 127.0.0.1:7002")," error response from the shard it\u2019s connected to, it will simply reconnect to the address returned in the error response, in this case 127.0.0.1:7002."),Object(s.b)("p",null,"Now it\u2019s your turn: use ",Object(s.b)("inlineCode",{parentName:"p"},"redis-cli")," cluster mode to connect to your cluster and try accessing keys in different shards. Observe the response messages."))}d.isMDXComponent=!0},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,f=u["".concat(a,".").concat(b)]||u[b]||p[b]||s;return r?i.a.createElement(f,o(o({ref:t},l),{},{components:r})):i.a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return a}));var n=r(21),i=r(401);function s(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var s=void 0===n?{}:n,a=s.forcePrependBaseUrl,o=void 0!==a&&a,c=s.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(o)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+d:d}(s,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},401:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))}}]);