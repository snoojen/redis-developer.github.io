"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4890,1144,3325,1947,9570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return a?o.createElement(h,n(n({ref:t},d),{},{components:a})):o.createElement(h,n({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var l=2;l<r;l++)n[l]=a[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>c});var o=a(67294),i=a(52263);const r="authorByline_VoxI",n="authorLabel_a70t",s="authorProfileImage_URwT";const c=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,i.Z)(),c=a.customFields.authors;return o.createElement(o.Fragment,null,t.authors&&o.createElement("div",{className:"docAuthors"},o.createElement("hr",null),t.authors.map((e=>o.createElement("div",{key:e,className:r},o.createElement("img",{className:s,src:`/img/${c[e].image?c[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${c[e].name}`}),o.createElement("div",null,o.createElement("div",{className:n},"Author:"),o.createElement("div",null,o.createElement("a",{href:c[e].link,target:"_blank"},c[e].name),", ",c[e].title))))),o.createElement("hr",null)))}},29736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var o=a(87462),i=(a(67294),a(3905)),r=a(50358),n=a(95995),s=a(30989),c=a(29621),l=a(25384);const d={id:"index-solutions-caching",title:"How to use Redis as a Query Caching",sidebar_label:"How to use Redis as a Query Caching",slug:"/howtos/solutions/caching",authors:["prasan","will"]},p=void 0,u={unversionedId:"howtos/solutions/caching/index-solutions-caching",id:"howtos/solutions/caching/index-solutions-caching",title:"How to use Redis as a Query Caching",description:"What is Query Caching?",source:"@site/docs/howtos/solutions/caching/index-caching.mdx",sourceDirName:"howtos/solutions/caching",slug:"/howtos/solutions/caching",permalink:"/howtos/solutions/caching",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/caching/index-caching.mdx",tags:[],version:"current",lastUpdatedAt:1678145567,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{id:"index-solutions-caching",title:"How to use Redis as a Query Caching",sidebar_label:"How to use Redis as a Query Caching",slug:"/howtos/solutions/caching",authors:["prasan","will"]}},m={},h=[{value:"What is Query Caching?",id:"what-is-query-caching",level:2},{value:"Why You Should Use Redis for Query Caching",id:"why-you-should-use-redis-for-query-caching",level:2},{value:"Microservices Architecture for an E-commerce Application",id:"microservices-architecture-for-an-e-commerce-application",level:2},{value:"E-commerce Application Frontend using Next.js and Tailwind",id:"e-commerce-application-frontend-using-nextjs-and-tailwind",level:2},{value:"Caching in a Microservices Application with Redis and MongoDB",id:"caching-in-a-microservices-application-with-redis-and-mongodb",level:2},{value:"Get Products by Filter Request",id:"get-products-by-filter-request",level:3},{value:"Get Products by Filter Response (Cache Miss)",id:"get-products-by-filter-response-cache-miss",level:3},{value:"Get Products by Filter Response (Cache Hit)",id:"get-products-by-filter-response-cache-hit",level:3},{value:"Implementing Cache-aside with Redis and MongoDB",id:"implementing-cache-aside-with-redis-and-mongodb",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Resources",id:"additional-resources",level:3},{value:"Learn More",id:"learn-more",level:2}],g={toc:h};function f(e){let{components:t,...p}=e;return(0,i.kt)("wrapper",(0,o.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{frontMatter:d,mdxType:"Authors"}),(0,i.kt)(c.default,{mdxType:"SourceCode"}),(0,i.kt)("h2",{id:"what-is-query-caching"},"What is Query Caching?"),(0,i.kt)("p",null,"Have you ever been in a situation where your database queries are slowing down, and you need to speed them up while keeping costs down? Imagine that you've built an e-commerce application that started small and is growing fast."),(0,i.kt)("p",null,"You're at the point where you have an extensive product catalog and millions of customers. Your queries to MongoDB are beginning to slow down, and you've already attempted to optimize them. Even though you were able to squeak out a little extra performance, it wasn't enough to satisfy your customers."),(0,i.kt)("h2",{id:"why-you-should-use-redis-for-query-caching"},"Why You Should Use Redis for Query Caching"),(0,i.kt)("p",null,"Redis is an in-memory datastore, making it perfect for caching. It allows you to reduce the load on your primary database while speeding up database reads."),(0,i.kt)("p",null,"For example, in an e-commerce application you might be able to guess what query is requested most often... If you guessed the query for searching products you would be correct!"),(0,i.kt)("p",null,"To improve product search in ecommerce app, we can implement one of following caching patterns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lookup pattern"),": Entire products can be pre-cached in Redis and the application can perform any product query on Redis similar to primary database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cache-aside")," pattern: Redis is filled on-demand based on whatever search parameters are requested by the frontend.")),(0,i.kt)("p",null,"This tutorial focuses on the ",(0,i.kt)("strong",{parentName:"p"},"cache-aside")," pattern, which operates as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cache-aside with Redis and MongoDB",src:a(91312).Z,width:"1163",height:"285"})),(0,i.kt)("p",null,"The goal of this design pattern is to set up ",(0,i.kt)("strong",{parentName:"p"},"optimal")," caching (load as you go) for better read operations."),(0,i.kt)("p",null,"To understand how the cache-aside pattern functions, consider the following process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An application requests data from the backend"),(0,i.kt)("li",{parentName:"ol"},"The backend checks to find out if the data is available in Redis",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If the data isn\u2019t available (a cache miss):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The MongoDB database fetches the data"),(0,i.kt)("li",{parentName:"ul"},"Redis stores a copy of the data"),(0,i.kt)("li",{parentName:"ul"},"The backend serves the data to the application"))),(0,i.kt)("li",{parentName:"ol"},"If the data is already available in Redis (a cache hit):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The backend serves the cached data directly to the application")))))),(0,i.kt)("p",null,"The cache-aside pattern is useful when you need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Query data frequently")," - When you have a large volume of reads (as is the case in an e-commerce app), the cache-aside pattern will give you an immediate performance gain for subsequent data requests."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fill the cache on-demand")," - The cache-aside pattern will fill the cache as data is requested rather than pre-caching, thus saving on space and cost. Useful when it isn't clear what data will need to be cached."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Be cost conscious")," - Since cache size is directly related to the cost of cache storage in the cloud, the smaller the size, the less you pay.")),(0,i.kt)("h2",{id:"microservices-architecture-for-an-e-commerce-application"},"Microservices Architecture for an E-commerce Application"),(0,i.kt)(s.default,{mdxType:"MicroservicesArchitectureWithRedis"}),(0,i.kt)("h2",{id:"e-commerce-application-frontend-using-nextjs-and-tailwind"},"E-commerce Application Frontend using Next.js and Tailwind"),(0,i.kt)(n.default,{mdxType:"MicroservicesEcommerceDesign"}),(0,i.kt)("h2",{id:"caching-in-a-microservices-application-with-redis-and-mongodb"},"Caching in a Microservices Application with Redis and MongoDB"),(0,i.kt)("p",null,"In our sample application, the products service publishes an API for filtering products. Here is what a call to the API looks like:"),(0,i.kt)("h3",{id:"get-products-by-filter-request"},"Get Products by Filter Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// POST http://localhost:3000/products/getProductsByFilter\n{\n  "productDisplayName": "puma"\n}\n')),(0,i.kt)("h3",{id:"get-products-by-filter-response-cache-miss"},"Get Products by Filter Response (Cache Miss)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{30}","{30}":!0},'{\n  "data": [\n    {\n      "_id": 11000,\n      "data": {\n        "id": 11000,\n        "price": 3995,\n        "productDisplayName": "Puma Men Slick 3HD Yellow Black Watches",\n        "variantName": "Slick 3HD Yellow",\n        "brandName": "Puma",\n        "ageGroup": "Adults-Men",\n        "gender": "Men",\n        "displayCategories": "Accessories",\n        "styleImages": {\n          "default": {\n            "imageURL": "http://host.docker.internal:8080/images/11000.jpg"\n          }\n        },\n        "productDescriptors": {\n          "description": {\n            "value": "Stylish and comfortable, this motor sport inspired wrist watch from puma is designed with a plastic case and ..."\n          }\n        }\n      },\n      "productId": 11000\n    }\n    //...\n  ],\n  "error": null,\n  "isFromCache": false\n}\n')),(0,i.kt)("h3",{id:"get-products-by-filter-response-cache-hit"},"Get Products by Filter Response (Cache Hit)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{6}","{6}":!0},'{\n  "data": [\n    //...same data as above\n  ],\n  "error": null,\n  "isFromCache": true // now the data comes from the cache rather DB\n}\n')),(0,i.kt)("h3",{id:"implementing-cache-aside-with-redis-and-mongodb"},"Implementing Cache-aside with Redis and MongoDB"),(0,i.kt)("p",null,"Below you will find the function used to search for products in MongoDB."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"async function getProductsByFilter(productFilter: IProductFilter) {\n  const mongo = getMongodb();\n  const filter: Document = {\n    statusCode: {\n      $eq: DB_ROW_STATUS.ACTIVE,\n    },\n  };\n\n  if (productFilter && productFilter.productDisplayName) {\n    filter['data.productDisplayName'] = {\n      $regex: productFilter.productDisplayName,\n      $options: 'i',\n    };\n  }\n\n  const projection: IProduct = {\n    productId: 1,\n    data: {\n      id: 1,\n      price: 1,\n      productDisplayName: 1,\n      variantName: 1,\n      brandName: 1,\n      ageGroup: 1,\n      gender: 1,\n      displayCategories: 1,\n      styleImages: {\n        default: {\n          imageURL: 1,\n        },\n      },\n      productDescriptors: {\n        description: {\n          value: 1,\n        },\n      },\n    },\n  };\n\n  const limit = 100;\n  const sort = {};\n  const products = await mongo.find(\n    COLLECTIONS.PRODUCTS.collectionName,\n    filter,\n    projection,\n    limit,\n    sort,\n  );\n  return products;\n}\n")),(0,i.kt)("p",null,"If you're familiar with MongoDB, the code above should be pretty straightforward. We simply make a call to MongoDB to find products based on a filter on the ",(0,i.kt)("inlineCode",{parentName:"p"},"displayName")," property of the product. We also define a projection object to specify which properties to get out of MongoDB. You can set up multiple columns for better fuzzy searching, but for the purposes of this tutorial it is simplified."),(0,i.kt)("p",null,"Now, using MongoDB directly without Redis will work for a while, and eventually start to slow down. That's why Redis is brought in to speed things up. The cache-aside pattern was chosen in order to balance performance with cost. The basic decision tree for cache-aside is as follows."),(0,i.kt)("p",null,"When the frontend requests products:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Form a hash with the contents of the request (i.e. the search parameters)"),(0,i.kt)("li",{parentName:"ol"},"Check Redis to see if a value exists for the hash"),(0,i.kt)("li",{parentName:"ol"},"Is there a cache hit? If data is found for the hash it is returned; the process stops here."),(0,i.kt)("li",{parentName:"ol"},"Is there a cache miss? When data is not found, it is read out of MongoDB and subsequently stored in Redis prior to being returned.")),(0,i.kt)("p",null,"Below you will find the code used to implement the decision tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const getHashKey = (_filter: Document) => {\n  let retKey = '';\n  if (_filter) {\n    const text = JSON.stringify(_filter);\n    retKey = crypto.createHash('sha256').update(text).digest('hex');\n  }\n  return 'CACHE_ASIDE_' + retKey;\n};\n\nrouter.post(API.GET_PRODUCTS_BY_FILTER, async (req: Request, res: Response) => {\n  const body = req.body;\n  // using node-redis\n  const redis = getNodeRedisClient();\n\n  //get data from redis\n  const hashKey = getHashKey(req.body);\n  const cachedData = await redis.get(hashKey);\n  const docArr = cachedData ? JSON.parse(cachedData) : [];\n\n  if (docArr && docArr.length) {\n    result.data = docArr;\n    result.isFromCache = true;\n  } else {\n    // get data from mongodb\n    const dbData = await getProductsByFilter(body); //method shown earlier\n\n    if (body && body.productDisplayName && dbData.length) {\n      // set data in redis (no need to wait)\n      redis.set(hashKey, JSON.stringify(dbData), {\n        EX: 60, // cache expiration in seconds\n      });\n    }\n\n    result.data = dbData;\n  }\n\n  res.send(result);\n});\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You will need to decide what expiry or time to live (TTL) works best for your particular use-case.")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"That's all there is to it! You've now seen how to use Redis for caching with one of the most common caching patterns (cache-aside). It's possible to incrementally adopt Redis wherever needed with different strategies/ patterns. See below for some additional resources around microservices topic."),(0,i.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/howtos/solutions/cqrs"},"CQRS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/howtos/solutions/interservice-communication"},"Interservice communication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/howtos/solutions/api-gateway-caching"},"API gateway caching")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/c/Redisinc"},"Redis YouTube channel")),(0,i.kt)("li",{parentName:"ul"},"Clients like ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/redis/node-redis"},"Node Redis")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/redis/redis-om-node"},"Redis om Node")," help you to use Redis in Node.js applications.")),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)(l.default,{mdxType:"RedisEnterprise"}))}f.isMDXComponent=!0},30989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=a(87462),i=(a(67294),a(3905));const r={},n=void 0,s={unversionedId:"howtos/solutions/common-data/microservices-arch-with-redis",id:"howtos/solutions/common-data/microservices-arch-with-redis",title:"microservices-arch-with-redis",description:"The e-commerce microservices application uses the following architecture:",source:"@site/docs/howtos/solutions/common-data/microservices-arch-with-redis.mdx",sourceDirName:"howtos/solutions/common-data",slug:"/howtos/solutions/common-data/microservices-arch-with-redis",permalink:"/howtos/solutions/common-data/microservices-arch-with-redis",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/common-data/microservices-arch-with-redis.mdx",tags:[],version:"current",lastUpdatedAt:1678131735,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{}},c={},l=[],d={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The e-commerce microservices application uses the following architecture:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"products service")," - handles querying products from the database and returning them to the frontend"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"orders service")," - handles validating and creating orders"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"order history service")," - handles querying a customer's order history"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"payments service")," - handles processing orders for payment"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"api gateway")," - unifies your services under a single endpoint"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"mongodb")," - serves as the primary database, storing orders, order history, products, etc."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"redis")," - serves as the stream processor and caching database")),(0,i.kt)("p",null,"Here is what the architecture diagram looks like so far:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Microservices architecture with Redis",src:a(87251).Z,width:"1484",height:"656"})),(0,i.kt)("p",null,"What's nice about this architecture is each service is set up so it can scale independently. What this also means is you can incrementally adopt Redis where needed."))}p.isMDXComponent=!0},95995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=a(87462),i=(a(67294),a(3905)),r=a(29621);const n={},s=void 0,c={unversionedId:"howtos/solutions/common-data/microservices-ecommerce",id:"howtos/solutions/common-data/microservices-ecommerce",title:"microservices-ecommerce",description:"The e-commerce microservices application consists of a frontend, built using Next.js with TailwindCSS. The application backend uses Node.js. The data is stored in MongoDB and Redis. Below you will find screenshots of the frontend of the e-commerce app:",source:"@site/docs/howtos/solutions/common-data/microservices-ecommerce.mdx",sourceDirName:"howtos/solutions/common-data",slug:"/howtos/solutions/common-data/microservices-ecommerce",permalink:"/howtos/solutions/common-data/microservices-ecommerce",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/common-data/microservices-ecommerce.mdx",tags:[],version:"current",lastUpdatedAt:1678131735,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{}},l={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The e-commerce microservices application consists of a frontend, built using ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," with ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"TailwindCSS"),". The application backend uses ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js"),". The data is stored in ",(0,i.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB")," and ",(0,i.kt)("a",{parentName:"p",href:"https://redis.com/try-free/"},"Redis"),". Below you will find screenshots of the frontend of the e-commerce app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard"),": Shows the list of products with search functionality"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"redis microservices e-commerce app frontend products page",src:a(98920).Z,width:"2475",height:"1873"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Shopping Cart"),': Add products to the cart, then checkout using the "Buy Now" button.\n',(0,i.kt)("img",{alt:"redis microservices e-commerce app frontend shopping cart",src:a(53296).Z,width:"2772",height:"1942"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Order history"),": Once an order is placed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Orders")," link in the top navigation bar will show you the order status and history"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"redis microservices e-commerce app frontend order history page",src:a(28125).Z,width:"2511",height:"1351"})))),(0,i.kt)(r.default,{mdxType:"SourceCode"}))}u.isMDXComponent=!0},29621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=a(87462),i=(a(67294),a(3905));const r={},n=void 0,s={unversionedId:"howtos/solutions/common-data/microservices-source-code-tip",id:"howtos/solutions/common-data/microservices-source-code-tip",title:"microservices-source-code-tip",description:"Below is a link to the source code for the application used in this tutorial",source:"@site/docs/howtos/solutions/common-data/microservices-source-code-tip.mdx",sourceDirName:"howtos/solutions/common-data",slug:"/howtos/solutions/common-data/microservices-source-code-tip",permalink:"/howtos/solutions/common-data/microservices-source-code-tip",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/common-data/microservices-source-code-tip.mdx",tags:[],version:"current",lastUpdatedAt:1678131735,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{}},c={},l=[],d={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"GITHUB CODE",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Below is a link to the source code for the application used in this tutorial"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-microservices-ecommerce-solutions"},"https://github.com/redis-developer/redis-microservices-ecommerce-solutions"))))}p.isMDXComponent=!0},25384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=a(87462),i=(a(67294),a(3905));const r={},n=void 0,s={unversionedId:"howtos/solutions/common-data/redis-enterprise",id:"howtos/solutions/common-data/redis-enterprise",title:"redis-enterprise",description:"You can use Redis Enterprise as a multi-model primary database. Redis Enterprise is a fully managed, highly available, secure, and real-time data platform. It can store data on both RAM or Flash. It also supports Active-Active (multi-zone read and write replicas) on different cloud vendors, providing extreme high availability and scalability. Active-Active offers global scalability while maintaining local speed for database reads and writes.",source:"@site/docs/howtos/solutions/common-data/redis-enterprise.mdx",sourceDirName:"howtos/solutions/common-data",slug:"/howtos/solutions/common-data/redis-enterprise",permalink:"/howtos/solutions/common-data/redis-enterprise",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/common-data/redis-enterprise.mdx",tags:[],version:"current",lastUpdatedAt:1678145567,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{}},c={},l=[],d={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use ",(0,i.kt)("strong",{parentName:"p"},"Redis Enterprise")," as a multi-model primary database. Redis Enterprise is a fully managed, highly available, secure, and real-time data platform. It can store data on both RAM or ",(0,i.kt)("strong",{parentName:"p"},"Flash"),". It also supports ",(0,i.kt)("strong",{parentName:"p"},"Active-Active")," (multi-zone read and write replicas) on different cloud vendors, providing extreme high availability and scalability. Active-Active offers global scalability while maintaining local speed for database reads and writes."),(0,i.kt)("p",null,"Redis Enterprise has many built-in modular capabilities, making it a unified, real-time data platform. Redis Enterprise is far more than a document database."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RedisJSON"),": Persists JSON documents"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RediSearch"),": Indexes and searches JSON documents"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RedisGraph"),": A fast and easy-to-use graph database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RedisBloom:")," Provides bloom filters and other probabilistic data structures"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RedisTimeSeries"),": Supports time series data structures"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RedisGears"),": Syncs data to external databases via different pattern (write-behind/ write-through) or executes custom logic.")),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight")," to view your Redis data or to play with raw Redis commands in the workbench."),(0,i.kt)("p",null,"If you're interested in diving deeper, try ",(0,i.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Redis Enterprise")," today for free!"))}p.isMDXComponent=!0},91312:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cache-aside-a38dbdf8fe1938261588e8090674cdd5.jpg"},53296:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/design-cart-2-2a3b76656f26a754bed6a6c63ad8beef.png"},98920:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/design-dashboard-6a34137ca4862561cc2f065ed55ae081.png"},28125:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/design-order-history-16fc808f70b63d91a37a3ea76baa232d.png"},87251:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/redis-microservices-arch-eae2fcbe4a554b92d455db7b60bfc859.png"}}]);