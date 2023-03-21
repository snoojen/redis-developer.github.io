"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,s={unversionedId:"howtos/solutions/microservices/common-data/redis-enterprise",id:"howtos/solutions/microservices/common-data/redis-enterprise",title:"redis-enterprise",description:"You can use Redis Enterprise as a multi-model primary database. Redis Enterprise is a fully managed, highly available, secure, and real-time data platform. It can store data on both RAM or Flash. It also supports Active-Active (multi-zone read and write replicas) on different cloud vendors, providing extreme high availability and scalability. Active-Active offers global scalability while maintaining local speed for database reads and writes.",source:"@site/docs/howtos/solutions/microservices/common-data/redis-enterprise.mdx",sourceDirName:"howtos/solutions/microservices/common-data",slug:"/howtos/solutions/microservices/common-data/redis-enterprise",permalink:"/howtos/solutions/microservices/common-data/redis-enterprise",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/microservices/common-data/redis-enterprise.mdx",tags:[],version:"current",lastUpdatedAt:1679343780,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{}},l={},d=[],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use ",(0,n.kt)("strong",{parentName:"p"},"Redis Enterprise")," as a multi-model primary database. Redis Enterprise is a fully managed, highly available, secure, and real-time data platform. It can store data on both RAM or ",(0,n.kt)("strong",{parentName:"p"},"Flash"),". It also supports ",(0,n.kt)("strong",{parentName:"p"},"Active-Active")," (multi-zone read and write replicas) on different cloud vendors, providing extreme high availability and scalability. Active-Active offers global scalability while maintaining local speed for database reads and writes."),(0,n.kt)("p",null,"Redis Enterprise has many built-in modular capabilities, making it a unified, real-time data platform. Redis Enterprise is far more than a document database."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RedisJSON"),": Persists JSON documents"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RediSearch"),": Indexes and searches JSON documents"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RedisGraph"),": A fast and easy-to-use graph database"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RedisBloom:")," Provides bloom filters and other probabilistic data structures"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RedisTimeSeries"),": Supports time series data structures"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RedisGears"),": Syncs data to external databases via different pattern (write-behind/ write-through) or executes custom logic.")),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight")," to view your Redis data or to play with raw Redis commands in the workbench."),(0,n.kt)("p",null,"If you're interested in diving deeper, try ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Redis Enterprise")," today for free!"))}p.isMDXComponent=!0}}]);