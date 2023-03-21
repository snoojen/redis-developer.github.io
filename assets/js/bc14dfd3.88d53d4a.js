"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7644],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),u=n,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return t?o.createElement(h,s(s({ref:r},d),{},{components:t})):o.createElement(h,s({ref:r},d))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34045:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const i={},s=void 0,a={unversionedId:"howtos/solutions/microservices/common-data/microservices-arch-with-redis",id:"howtos/solutions/microservices/common-data/microservices-arch-with-redis",title:"microservices-arch-with-redis",description:"The e-commerce microservices application discussed in the rest of this tutorial uses the following architecture:",source:"@site/docs/howtos/solutions/microservices/common-data/microservices-arch-with-redis.mdx",sourceDirName:"howtos/solutions/microservices/common-data",slug:"/howtos/solutions/microservices/common-data/microservices-arch-with-redis",permalink:"/howtos/solutions/microservices/common-data/microservices-arch-with-redis",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/microservices/common-data/microservices-arch-with-redis.mdx",tags:[],version:"current",lastUpdatedAt:1679343780,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{}},c={},l=[],d={toc:l};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The e-commerce microservices application discussed in the rest of this tutorial uses the following architecture:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"products service")," - handles querying products from the database and returning them to the frontend"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"orders service")," - handles validating and creating orders"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"order history service")," - handles querying a customer's order history"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"payments service")," - handles processing orders for payment"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"api gateway")," - unifies your services under a single endpoint"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"mongodb")," - serves as the primary database, storing orders, order history, products, etc."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"redis")," - serves as the stream processor and caching database")))}m.isMDXComponent=!0}}]);