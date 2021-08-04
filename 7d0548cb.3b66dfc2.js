(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{144:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return n})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return d}));var r=i(3),a=i(7),s=(i(0),i(224)),n={id:"index-redistimeseries",title:"RedisTimeSeries Tutorial",sidebar_label:"RedisTimeSeries Tutorial",slug:"/howtos/redistimeseries"},o={unversionedId:"howtos/redistimeseries/index-redistimeseries",id:"howtos/redistimeseries/index-redistimeseries",isDocsHomePage:!1,title:"RedisTimeSeries Tutorial",description:"RedisTimeseries is a Redis module developed by Redis Labs to enhance your experience managing time-series data with Redis. It simplifies the use of Redis for time-series use cases such as internet of things (IoT) data, stock prices, and telemetry. With RedisTimeSeries, you can ingest and query millions of samples and events at the speed of Redis. Advanced tooling such as downsampling and aggregation ensure a small memory footprint without impacting performance. Use a variety of queries for visualization and monitoring with built-in connectors to popular monitoring tools like Grafana, Prometheus, and Telegraf.",source:"@site/docs/howtos/redistimeseries/index-redistimeseries.mdx",slug:"/howtos/redistimeseries",permalink:"/howtos/redistimeseries",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/index-redistimeseries.mdx",version:"current",sidebar_label:"RedisTimeSeries Tutorial",sidebar:"docs",previous:{title:"How to store and retrieve JSON document using NodeJS",permalink:"/howtos/redisjson/storing-json-using-nodejs"},next:{title:"RedisGraph Tutorial",permalink:"/howtos/redisgraph"}},l=[{value:"Step 1. Register and subscribe",id:"step-1-register-and-subscribe",children:[]},{value:"Step 2. Create a database with RedisTimeSeries Module",id:"step-2-create-a-database-with-redistimeseries-module",children:[]},{value:"Step 3. Connect to a database",id:"step-3-connect-to-a-database",children:[]},{value:"Step 4. Getting Started with RedisTimeSeries",id:"step-4-getting-started-with-redistimeseries",children:[]},{value:"Next Step",id:"next-step",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"RedisTimeseries is a Redis module developed by Redis Labs to enhance your experience managing time-series data with Redis. It simplifies the use of Redis for time-series use cases such as internet of things (IoT) data, stock prices, and telemetry. With RedisTimeSeries, you can ingest and query millions of samples and events at the speed of Redis. Advanced tooling such as downsampling and aggregation ensure a small memory footprint without impacting performance. Use a variety of queries for visualization and monitoring with built-in connectors to popular monitoring tools like Grafana, Prometheus, and Telegraf."),Object(s.b)("div",{class:"text--center"},Object(s.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/nkUZqxjs2rk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(s.b)("h3",{id:"step-1-register-and-subscribe"},"Step 1. Register and subscribe"),Object(s.b)("p",null,"Follow ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/create/cloud/rediscloud"}),"this link to register")," and subscribe to Redis Enterprise Cloud"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Redistimeseries",src:i(534).default})),Object(s.b)("h3",{id:"step-2-create-a-database-with-redistimeseries-module"},"Step 2. Create a database with RedisTimeSeries Module"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Redistimeseries",src:i(535).default})),Object(s.b)("h3",{id:"step-3-connect-to-a-database"},"Step 3. Connect to a database"),Object(s.b)("p",null,"Follow ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"explore/redisinsight"}),"this")," link to know how to connect to a database"),Object(s.b)("h3",{id:"step-4-getting-started-with-redistimeseries"},"Step 4. Getting Started with RedisTimeSeries"),Object(s.b)("p",null,"This section will walk you through using some basic RedisTimeseries commands. You can run them from the Redis command-line interface (redis-cli) or use the CLI available in RedisInsight. (See part 2 of this tutorial to learn more about using the RedisInsight CLI.)\nUsing a basic air-quality dataset, we will show you how to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Create a new time series"),Object(s.b)("li",{parentName:"ul"},"Add a new sample to the list of series"),Object(s.b)("li",{parentName:"ul"},"Query a range across one or multiple time series")),Object(s.b)("p",null,Object(s.b)("img",{alt:"RedisTimeSeries",src:i(536).default})),Object(s.b)("h4",{id:"create-a-new-time-series"},"Create a new time series"),Object(s.b)("p",null,"Let\u2019s create a time series representing air quality dataset measurements. To interact with RedisTimeSeries you will most often use the TS.RANGE command, but here you will create a time series per measurement using the TS.CREATE command. Once created, all the measurements will be sent using TS.ADD."),Object(s.b)("p",null,"The sample command below creates a time series and populates it with three entries:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),">> TS.CREATE ts:carbon_monoxide\n>> TS.CREATE ts:relative_humidity\n>> TS.CREATE ts:temperature RETENTION 60 LABELS sensor_id 2 area_id 32\n")),Object(s.b)("p",null,"In the above example, ts:carbon_monoxide, ts:relative_humidity and ts:temperature are key names. We are creating a time series with two labels (sensor_id and area_id are the fields with values 2 and 32 respectively) and a retention window of 60 milliseconds:"),Object(s.b)("h4",{id:"add-a-new-sample-data-to-the-time-series"},"Add a new sample data to the time series"),Object(s.b)("p",null,"Let\u2019s start to add samples into the keys that will be automatically created using this command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),">> TS.ADD ts:carbon_monoxide 1112596200 2.4\n>> TS.ADD ts:relative_humidity 1112596200 18.3\n>> TS.ADD ts:temperature 1112599800 28.3\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),">> TS.ADD ts:carbon_monoxide 1112599800 2.1\n>> TS.ADD ts:relative_humidity 1112599800 13.5\n>> TS.ADD ts:temperature 1112603400 28.5 \n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),">> TS.ADD ts:carbon_monoxide 1112603400 2.2\n>> TS.ADD ts:relative_humidity 1112603400 13.1\n>> TS.ADD ts:temperature 1112607000 28.7\n")),Object(s.b)("h4",{id:"querying-the-sample"},"Querying the sample"),Object(s.b)("p",null,"Now that you have sample data in your time series, you\u2019re ready to ask questions such as:"),Object(s.b)("h4",{id:"how-do-i-get-the-last-sample"},"\u201cHow do I get the last sample?\u201d"),Object(s.b)("p",null,"TS.GET is used to get the last sample. The returned array will contain the last sample timestamp followed by the last sample value, when the time series contains data:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'>> TS.GET ts:temperature\n1) (integer) 1112607000\n2) "28.7"\n')),Object(s.b)("h4",{id:"how-do-i-get-the-last-sample-matching-the-specific-filter"},"\u201cHow do I get the last sample matching the specific filter?\u201d"),Object(s.b)("p",null,"TS.MGET is used to get the last samples matching the specific filter:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'>> TS.MGET FILTER area_id=32\n1) 1) "ts:temperature"\n   2) (empty list or set)\n   3) 1) (integer) 1112607000\n      2) "28.7"\n')),Object(s.b)("h4",{id:"how-do-i-get-the-sample-with-labels-matching-the-specific-filter"},"\u201cHow do I get the sample with labels matching the specific filter?\u201d"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'>> TS.MGET WITHLABELS FILTER area_id=32\n1) 1) "ts:temperature"\n   2) 1) 1) "sensor_id"\n         2) "2"\n      2) 1) "area_id"\n         2) "32"\n   3) 1) (integer) 1112607000\n      2) "28.7"\n')),Object(s.b)("h4",{id:"query-a-range-across-one-or-more-time-series"},"Query a range across one or more time series"),Object(s.b)("p",null,"TS.RANGE is used to query a range in forward directions while TS.REVRANGE is used to query a range in reverse directions, They let you answer such questions as:"),Object(s.b)("h4",{id:"how-do-i-get-the-sample-for-a-time-range"},"\u201cHow do I get the sample for a time range?\u201d"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'>> TS.RANGE ts:carbon_monoxide 1112596200 1112603400\n1) 1) (integer) 1112596200\n   2) "2.4"\n2) 1) (integer) 1112599800\n   2) "2.1"\n3) 1) (integer) 1112603400\n   2) "2.2"\n')),Object(s.b)("h4",{id:"aggregation"},"Aggregation"),Object(s.b)("p",null,"You can use various aggregation types such as  avg, sum, min, max, range, count, first, last etc. The example below example shows how to use \u201cavg\u201d aggregation type to answer such questions as:"),Object(s.b)("h4",{id:"how-do-i-get-the-sample-for-a-time-range-on-some-aggregation-rule"},"\u201cHow do I get the sample for a time range on some aggregation rule?\u201d"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'>> TS.RANGE ts:carbon_monoxide 1112596200 1112603400 AGGREGATION avg 2\n1) 1) (integer) 1112596200\n   2) "2.4"\n2) 1) (integer) 1112599800\n   2) "2.1"\n3) 1) (integer) 1112603400\n   2) "2.2"\n')),Object(s.b)("h3",{id:"next-step"},"Next Step"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Learn more about RedisTimeSeries in the ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redistimeseries/"}),"Quickstart")," tutorial."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/build-your-financial-application-on-redistimeseries/"}),"Build Your Financial Application on RedisTimeSeries")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=rXynFOrrd-Q"}),"Introduction to RedisTimeSeries - Video"))))}d.isMDXComponent=!0},224:function(e,t,i){"use strict";i.d(t,"a",(function(){return m})),i.d(t,"b",(function(){return p}));var r=i(0),a=i.n(r);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,n=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(i),b=r,p=m["".concat(n,".").concat(b)]||m[b]||u[b]||s;return i?a.a.createElement(p,o(o({ref:t},c),{},{components:i})):a.a.createElement(p,o({ref:t},c))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,n=new Array(s);n[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var c=2;c<s;c++)n[c]=i[c];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},534:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/redistimeseries-b44744e302a6aaf7c455dbcffee3b325.png"},535:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/redistimeseries1-6a8dd781dbbd466c7b30146a8e8350e2.png"},536:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/redistimeseriesflow-d1eddd903d258cb4835f7e975d8266c9.png"}}]);