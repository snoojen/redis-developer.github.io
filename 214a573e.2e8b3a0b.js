(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(393)),s=(r(394),{id:"index-exercise",title:"2.2 Exercise: Saving a Snapshot",sidebar_label:"2.2 Exercise: Saving a Snapshot",slug:"/operate/redis-at-scale/persistence-and-durability/exercise",isEditable:!1}),c={unversionedId:"operate/redis-at-scale/persistence-and-durability/exercise/index-exercise",id:"operate/redis-at-scale/persistence-and-durability/exercise/index-exercise",isDocsHomePage:!1,title:"2.2 Exercise: Saving a Snapshot",description:"As we learned in the previous unit, Redis will save a snapshot of your database every hour if at least one key has changed, every five minutes if at least 100 keys have changed, or every 60 seconds if at least 10000 keys have changed.",source:"@site/docs/operate/redis-at-scale/persistence-and-durability/exercise/index-exercise.mdx",slug:"/operate/redis-at-scale/persistence-and-durability/exercise",permalink:"/operate/redis-at-scale/persistence-and-durability/exercise",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/redis-at-scale/persistence-and-durability/exercise/index-exercise.mdx",version:"current",lastUpdatedAt:1652821384,sidebar_label:"2.2 Exercise: Saving a Snapshot",sidebar:"docs",previous:{title:"2.1 Persistence options in Redis",permalink:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis"},next:{title:"3.0 Introduction to High Availability",permalink:"/operate/redis-at-scale/high-availability/introduction"}},o=[{value:"Step 1",id:"step-1",children:[]},{value:"Step 2",id:"step-2",children:[]},{value:"Step 3",id:"step-3",children:[]},{value:"Step 4",id:"step-4",children:[]},{value:"Step 5",id:"step-5",children:[]}],l={toc:o};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As we learned in the previous unit, Redis will save a snapshot of your database every hour if at least one key has changed, every five minutes if at least 100 keys have changed, or every 60 seconds if at least 10000 keys have changed."),Object(i.b)("p",null,"Let\u2019s update this to a simplified hypothetical scenario where we want to save a snapshot if three keys have been modified in 20 seconds."),Object(i.b)("h2",{id:"step-1"},"Step 1"),Object(i.b)("p",null,"Create a directory named 2.2 and in it prepare a ",Object(i.b)("inlineCode",{parentName:"p"},"redis.conf")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ mkdir 2.2\n$ cd 2.2\n$ vim redis.conf\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redis.conf")," file should specify a filename that will be used for the rdb file and a directive that will trigger the creation of a snapshot if 3 keys have been modified in 20 seconds, as described above."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"dbfilename my_backup_file.rdb\nsave 20 3\n")),Object(i.b)("h2",{id:"step-2"},"Step 2"),Object(i.b)("p",null,"In the 2.2 directory, start a Redis server - passing it the ",Object(i.b)("inlineCode",{parentName:"p"},"redis.conf")," configuration file you just created."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ redis-server ./redis.conf\n")),Object(i.b)("p",null,"In a separate terminal tab use the ",Object(i.b)("inlineCode",{parentName:"p"},"redis-cli")," to create three random keys, one after the other. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> SET a 1\n127.0.0.1:6379> SET b 2\n127.0.0.1:6379> SET c 3\n")),Object(i.b)("p",null,"Run the ",Object(i.b)("inlineCode",{parentName:"p"},"ls")," command in the first terminal to list all the files in the 2.2 directory. What changed?"),Object(i.b)("h2",{id:"step-3"},"Step 3"),Object(i.b)("p",null,"Now we\u2019re ready to take our persistence a level higher and set up an ",Object(i.b)("inlineCode",{parentName:"p"},"AOF")," file. Modify your ",Object(i.b)("inlineCode",{parentName:"p"},"redis.conf")," file so that the server will log every new write command and force writing it to disk."),Object(i.b)("p",null,"Be careful! We have a running server and we want this configuration to be applied without restarting it."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> CONFIG SET appendonly yes\n127.0.0.1:6379> CONFIG SET appendfsync always\n")),Object(i.b)("p",null,"In order for these settings to be persisted to the ",Object(i.b)("inlineCode",{parentName:"p"},"redis.conf")," file we need to save them:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> CONFIG REWRITE\n")),Object(i.b)("h2",{id:"step-4"},"Step 4"),Object(i.b)("p",null,"Create a few random keys through ",Object(i.b)("inlineCode",{parentName:"p"},"redis-cli"),". Check the contents of the directory 2.2 again. What changed?"),Object(i.b)("h2",{id:"step-5"},"Step 5"),Object(i.b)("p",null,"As a final step, restart the Redis server process (you can press Ctrl+C in the terminal to stop the process and re-run it again). If you run the ",Object(i.b)("inlineCode",{parentName:"p"},"SCAN 0")," command you will see that all the keys you created are still in the database, even though we restarted the process."))}d.isMDXComponent=!0},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,f=p["".concat(s,".").concat(b)]||p[b]||u[b]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return s}));var n=r(21),a=r(401);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,c=void 0!==s&&s,o=i.absolute,l=void 0!==o&&o;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+d:d}(i,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},401:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);