"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[2302],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69683:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=(n(44996),["components"]),s={id:"index-redisjson",title:"Managing Document Data with RedisJSON",sidebar_label:"RedisJSON",slug:"/develop/node/nodecrashcourse/redisjson",authors:["simon"]},d=void 0,l={unversionedId:"develop/node/node-crash-course/redisjson/index-redisjson",id:"develop/node/node-crash-course/redisjson/index-redisjson",title:"Managing Document Data with RedisJSON",description:"<iframe",source:"@site/docs/develop/node/node-crash-course/redisjson/index-redisjson.mdx",sourceDirName:"develop/node/node-crash-course/redisjson",slug:"/develop/node/nodecrashcourse/redisjson",permalink:"/develop/node/nodecrashcourse/redisjson",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/redisjson/index-redisjson.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-redisjson",title:"Managing Document Data with RedisJSON",sidebar_label:"RedisJSON",slug:"/develop/node/nodecrashcourse/redisjson",authors:["simon"]},sidebar:"docs",previous:{title:"Introduction to Modules",permalink:"/develop/node/nodecrashcourse/introductiontomodules"},next:{title:"RediSearch",permalink:"/develop/node/nodecrashcourse/redisearch"}},u={},c=[{value:"Coding Exercise",id:"coding-exercise",level:2},{value:"External Resources",id:"external-resources",level:2}],p={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/NAGMJ6kEVEQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("p",null,"We used Redis' built-in Hash data type to represent our user and location entities. Hashes are great for this, but they are limited in that they can only contain flat name/value pairs. For our locations, we want to store extra details in a more structured way."),(0,a.kt)("p",null,"Here's an example of the additional data we want to store about a location:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 121,\n  "hours": [\n    { "day": "Monday", "hours": "6-7" },\n    { "day": "Tuesday", "hours": "6-7" },\n    { "day": "Wednesday", "hours": "7-8" },\n    { "day": "Thursday", "hours": "6-9" },\n    { "day": "Friday", "hours": "8-5" },\n    { "day": "Saturday", "hours": "9-6" },\n    { "day": "Sunday", "hours": "6-4" }\n  ],\n  "socials": [\n    {\n      "instagram": "theginclub",\n      "facebook": "theginclub",\n      "twitter": "theginclub"\n    }\n  ],\n  "website": "www.theginclub.com",\n  "description": "Lorem ipsum...",\n  "phone": "(318) 251-0608"\n}\n')),(0,a.kt)("p",null,"We could store this data as serialized JSON in a Redis String, but then our application would have to retrieve and parse the entire document every time it wanted to read some of the data. And we'd have to do the same to update it too. Furthermore, with this approach, update operations aren't atomic and a second client could update the JSON stored at a given key while we're making changes to it in our application code. Then, when we serialize our version of the JSON back into the Redis String, the other client's changes would be lost."),(0,a.kt)("p",null,"RedisJSON adds a new JSON data type to Redis, and a query syntax for selecting and updating individual elements in a JSON document atomically on the Redis server. This makes our application code simpler, more efficient, and much more reliable."),(0,a.kt)("h2",{id:"coding-exercise"},"Coding Exercise"),(0,a.kt)("p",null,"In this exercise, you'll complete the code for an API route that gets just the object representing a location's opening hours for a given day. Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/location_routes.js"),", and find the route for ",(0,a.kt)("inlineCode",{parentName:"p"},"/location/:locationId/hours/:day"),". The starter code looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// EXERCISE: Get opening hours for a given day.\nrouter.get(\n  '/location/:locationId/hours/:day',\n  [\n    param('locationId').isInt({ min: 1 }),\n    param('day').isInt({ min: 0, max: 6 }),\n    apiErrorReporter,\n  ],\n  async (req, res) => {\n    /* eslint-disable no-unused-vars */\n    const { locationId, day } = req.params;\n    /* eslint-enable */\n    const locationDetailsKey = redis.getKeyName('locationdetails', locationId);\n\n    // TODO: Get the opening hours for a given day from\n    // the JSON stored at the key held in locationDetailsKey.\n    // You will need to provide the correct JSON path to the hours\n    // array and return the element held in the position specified by\n    // the day variable.  Make sure RedisJSON returns only the day\n    // requested!\n    const jsonPath = 'TODO';\n\n    /* eslint-enable no-unused-vars */\n    const hoursForDay = JSON.parse(\n      await redisClient.call('JSON.GET', locationDetailsKey, jsonPath),\n    );\n    /* eslint-disable */\n\n    // If null response, return empty object.\n    res.status(200).json(hoursForDay || {});\n  },\n);\n")),(0,a.kt)("p",null,'You\'ll need to update the code to provide the correct JSON path, replacing the "TODO" value with a JSON path expression.'),(0,a.kt)("p",null,"Looking at the JSON stored at key ",(0,a.kt)("inlineCode",{parentName:"p"},"ncc:locationdetails:121"),", we see that the opening hours are stored as an array of objects in a field named ",(0,a.kt)("inlineCode",{parentName:"p"},"hours"),", where day 0 is Monday and day 6 is Sunday:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Location Details in RedisInsight",src:n(98810).Z,width:"1366",height:"611"})),(0,a.kt)("p",null,"So you'll need a JSON path query that gets the right element from the ",(0,a.kt)("inlineCode",{parentName:"p"},"hours")," array depending on the value stored in the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"day"),"."),(0,a.kt)("p",null,"If you're using redis-cli, you can look at the structure of the JSON document with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"json.get ncc:locationdetails:121 .\n")),(0,a.kt)("p",null,"Make sure your query returns only the day requested, so that you don't have to write Node.js code to filter the value returned from Redis. Use the ",(0,a.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisjson/path/"},"RedisJSON path syntax page")," to help you formulate the right query."),(0,a.kt)("p",null,"To test your code, start the server with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n")),(0,a.kt)("p",null,"Recall that this will allow you to edit the code and try your changes without restarting the server."),(0,a.kt)("p",null,"If you have the correct JSON path in your code, visiting ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:80801/api/location/121/hours/2")," should return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "day": "Wednesday",\n  "hours": "7-8"\n}\n')),(0,a.kt)("p",null,"Don't forget that if you have questions or need help, we're available on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/redis"},"Discord"),"."),(0,a.kt)("h2",{id:"external-resources"},"External Resources"),(0,a.kt)("p",null,"In this video, Justin introduces RedisJSON using a fun taco truck example!"),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/2mFakgHKme4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("p",null,"Learn more about RedisJSON at its ",(0,a.kt)("a",{parentName:"p",href:"https://redisjson.io/"},"official homepage"),"."))}h.isMDXComponent=!0},98810:function(e,t,n){t.Z=n.p+"assets/images/locationdetails_redis_json-41f31f97850de2e1f8623a79e4f2c1b2.png"}}]);