(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{247:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),o=(t(0),t(338)),a={id:"index-nodejs-nginx-redis",title:"How to build and run a Node.js application using Nginx, Docker and Redis",sidebar_label:"Node.js, Nginx, Redis and Docker",slug:"/create/docker/nodejs-nginx-redis",authors:["ajeet"]},s={unversionedId:"create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis",id:"create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis",isDocsHomePage:!1,title:"How to build and run a Node.js application using Nginx, Docker and Redis",description:"Thanks to Node.js - Millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language. Node.js is a free, open-sourced, cross-platform JavaScript run-time environment. It is capable to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.",source:"@site/docs/create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis.mdx",slug:"/create/docker/nodejs-nginx-redis",permalink:"/create/docker/nodejs-nginx-redis",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis.mdx",version:"current",lastUpdatedAt:1646842285,sidebar_label:"Node.js, Nginx, Redis and Docker",sidebar:"docs",previous:{title:"How to Deploy and Run Redis in a Docker container",permalink:"/create/docker/redis-on-docker"},next:{title:"Overview",permalink:"/create/kubernetes/"}},c=[{value:"What do you need?",id:"what-do-you-need",children:[]},{value:"Project structure",id:"project-structure",children:[]},{value:"Prerequisite:",id:"prerequisite",children:[]},{value:"Step 1. Create a Docker compose file",id:"step-1-create-a-docker-compose-file",children:[]},{value:"Step 2. Create an nginx directory and add the below files:",id:"step-2-create-an-nginx-directory-and-add-the-below-files",children:[]},{value:"Step 3. Create a web directory and add the below files:",id:"step-3-create-a-web-directory-and-add-the-below-files",children:[]},{value:"Step 4. Creating a web1 directory and add the below files:",id:"step-4-creating-a-web1-directory-and-add-the-below-files",children:[]},{value:"Step 5. Deploy the application",id:"step-5-deploy-the-application",children:[]},{value:"Step 6. Testing the app",id:"step-6-testing-the-app",children:[]},{value:"Step 7. Monitoring Redis keys",id:"step-7-monitoring-redis-keys",children:[]},{value:"Further References",id:"further-references",children:[]}],d={toc:c};function l(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Thanks to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.dev/"}),"Node.js")," - Millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language. Node.js is a free, open-sourced, cross-platform JavaScript run-time environment. It is capable to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Nginx-node",src:t(951).default})),Object(o.b)("p",null,"In this quickstart guide, you will see how to build a Node.js application (visitor counter) using Nginx, Redis and Docker."),Object(o.b)("h3",{id:"what-do-you-need"},"What do you need?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Node.js"),": An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Nginx"),": An open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Docker"),": a containerization platform for developing, shipping, and running applications."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Docker Compose"),": A tool for defining and running multi-container Docker applications. ")),Object(o.b)("h3",{id:"project-structure"},"Project structure"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 nginx\n\u2502\xa0\xa0 \u251c\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u2514\u2500\u2500 nginx.conf\n\u251c\u2500\u2500 web\n\u2502\xa0\xa0 \u251c\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 server.js\n\u251c\u2500\u2500 web1\n\u2502\xa0\xa0 \u251c\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 server.js\n\u2514\u2500\u2500 web2\n    \u251c\u2500\u2500 Dockerfile\n    \u251c\u2500\u2500 package.json\n    \u2514\u2500\u2500 server.js\n\n")),Object(o.b)("h3",{id:"prerequisite"},"Prerequisite:"),Object(o.b)("p",null,"\u2013 Install Docker Desktop"),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/desktop/mac/install/"}),"https://docs.docker.com/desktop/mac/install/")," to setup Docker Desktop for Mac or Windows on your local system."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kgrkqga3c78h693vy33p.png",alt:"Image1"}))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Docker Desktop comes with Docker compose installed by default, hence you don't need to install it separately."))),Object(o.b)("h3",{id:"step-1-create-a-docker-compose-file"},"Step 1. Create a Docker compose file"),Object(o.b)("p",null,'Create an empty file with the below content and save it by name - "docker-compose.yml"'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"version: '3.9'\nservices:\n  redis:\n    image: 'redis:alpine'\n    ports:\n      - '6379:6379'\n  web1:\n    restart: on-failure\n    build: ./web1\n    ports:\n      - '81:5000'\n  web2:\n    restart: on-failure\n    build: ./web2\n    ports:\n      - '82:5000'\n  nginx:\n    build: ./nginx\n    ports:\n    - '80:80'\n    depends_on:\n    - web1\n    - web2\n")),Object(o.b)("p",null,"The compose file defines an application with four services ",Object(o.b)("inlineCode",{parentName:"p"},"redis"),", ",Object(o.b)("inlineCode",{parentName:"p"},"web"),", ",Object(o.b)("inlineCode",{parentName:"p"},"web1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"web2"),".\nWhen deploying the application, docker-compose maps port 80 of the web service container to port 80 of the host as specified in the file."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"By default, Redis runs on port 6379. Make sure you don't run another instance of Redis on your system or port 6379 on the host is not being used by another container, otherwise the port should be changed."))),Object(o.b)("h3",{id:"step-2-create-an-nginx-directory-and-add-the-below-files"},"Step 2. Create an nginx directory and add the below files:"),Object(o.b)("h4",{id:"file-nginxnginxconf"},"File: nginx/nginx.conf"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"upstream loadbalancer {\n  server web1:5000;\n  server web2:5000;\n}\n\nserver {\n  listen 80;\n  server_name localhost;\n  location / {\n    proxy_pass http://loadbalancer;\n  }\n}\n")),Object(o.b)("h4",{id:"file-dockerfile"},"File: Dockerfile"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"FROM nginx\nRUN rm /etc/nginx/conf.d/default.conf\nCOPY nginx.conf /etc/nginx/conf.d/default.conf\n")),Object(o.b)("h3",{id:"step-3-create-a-web-directory-and-add-the-below-files"},"Step 3. Create a web directory and add the below files:"),Object(o.b)("h4",{id:"file-webdockerfile"},"File: web/Dockerfile"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'FROM node:alpine\n\nWORKDIR /usr/src/app\n\nCOPY ./package.json ./\nRUN npm install\nCOPY ./server.js ./\n\nCMD ["npm","start"]\n')),Object(o.b)("h4",{id:"file-webpackagejson"},"File: web/package.json"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'\n  "name": "web",\n  "version": "1.0.0",\n  "description": "Running Node.js and Express.js on Docker",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js"\n  },\n  "dependencies": {\n    "express": "^4.17.2",\n    "redis": "3.1.2"\n  },\n  "author": "",\n  "license": "MIT"\n}\n')),Object(o.b)("h4",{id:"file-webserverjs"},"File: web/server.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"const express = require('express');\nconst redis = require('redis');\nconst app = express();\nconst redisClient = redis.createClient({\n  host: 'redis',\n  port: 6379\n});\n\napp.get('/', function(req, res) {\n    redisClient.get('numVisits', function(err, numVisits) {\n        numVisitsToDisplay = parseInt(numVisits) + 1;\n        if (isNaN(numVisitsToDisplay)) {\n            numVisitsToDisplay = 1;\n        }\n        res.send('Number of visits is: ' + numVisitsToDisplay);\n        numVisits++;\n        redisClient.set('numVisits', numVisits);\n    });\n});\n\napp.listen(5000, function() {\n    console.log('Web application is listening on port 5000');\n});\n")),Object(o.b)("h3",{id:"step-4-creating-a-web1-directory-and-add-the-below-files"},"Step 4. Creating a web1 directory and add the below files:"),Object(o.b)("h4",{id:"file-dockerfile-1"},"File: Dockerfile"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'FROM node:alpine\n\nWORKDIR /usr/src/app\n\nCOPY ./package*.json ./\nRUN npm install\nCOPY ./server.js ./\n\nCMD ["npm","start"]\n\n')),Object(o.b)("h4",{id:"file-serverjs"},"File: server.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"const express = require('express');\nconst redis = require('redis');\nconst app = express();\nconst redisClient = redis.createClient({\n  host: 'redis',\n  port: 6379\n});\n\n\napp.get('/', function(req, res) {\n    redisClient.get('numVisits', function(err, numVisits) {\n        numVisitsToDisplay = parseInt(numVisits) + 1;\n        if (isNaN(numVisitsToDisplay)) {\n            numVisitsToDisplay = 1;\n        }\n        res.send('web1: Total number of visits is: ' + numVisitsToDisplay);\n        numVisits++;\n        redisClient.set('numVisits', numVisits);\n    });\n});\n\napp.listen(5000, function() {\n    console.log('Web app is listening on port 5000');\n});\n")),Object(o.b)("h4",{id:"file-packagejson"},"File: package.json"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "name": "web1",\n  "version": "1.0.0",\n  "description": "Running Node.js and Express.js on Docker",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js"\n  },\n  "dependencies": {\n    "express": "^4.17.2",\n    "redis": "3.1.2"\n  },\n  "author": "",\n  "license": "MIT"\n}\n')),Object(o.b)("h3",{id:"step-5-deploy-the-application"},"Step 5. Deploy the application"),Object(o.b)("p",null,"Let us deploy the full-fledged app using docker-compose"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose up -d\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Creating nginx-nodejs-redis_redis_1 ... done\nCreating nginx-nodejs-redis_web1_1  ... done\nCreating nginx-nodejs-redis_web2_1  ... done\nCreating nginx-nodejs-redis_nginx_1 ... done\n")),Object(o.b)("h4",{id:"expected-result"},"Expected result"),Object(o.b)("p",null,"Listing containers must show three containers running and the port mapping as below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker-compose ps\n           Name                        Command              State           Ports         \n------------------------------------------------------------------------------------------\nnginx-nodejs-redis_nginx_1   /docker-entrypoint.sh ngin     Up      0.0.0.0:80->80/tcp    \n                             ...                                                          \nnginx-nodejs-redis_redis_1   docker-entrypoint.sh redis     Up      0.0.0.0:6379->6379/tcp\n                             ...                                                          \nnginx-nodejs-redis_web1_1    docker-entrypoint.sh npm       Up      0.0.0.0:81->5000/tcp  \n                             start                                                        \nnginx-nodejs-redis_web2_1    docker-entrypoint.sh npm       Up      0.0.0.0:82->5000/tcp  \n                             start   \n")),Object(o.b)("h3",{id:"step-6-testing-the-app"},"Step 6. Testing the app"),Object(o.b)("p",null,"After the application starts, navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:80")," in your web browser or run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl localhost:80\ncurl localhost:80\nweb1: Total number of visits is: 1\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl localhost:80\nweb1: Total number of visits is: 2\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ curl localhost:80\nweb2: Total number of visits is: 3\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ curl localhost:80\nweb2: Total number of visits is: 4\n")),Object(o.b)("h3",{id:"step-7-monitoring-redis-keys"},"Step 7. Monitoring Redis keys"),Object(o.b)("p",null,"If you want to monitor the Redis keys, you can use monitor command. Install redis-client in your Mac system using ",Object(o.b)("inlineCode",{parentName:"p"},"brew install redis")," and then directly connect to Redis container by issuing the below command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'% redis-cli\n127.0.0.1:6379> monitor\nOK\n1646485507.290868 [0 172.24.0.2:34330] "get" "numVisits"\n1646485507.309070 [0 172.24.0.2:34330] "set" "numVisits" "5"\n1646485509.228084 [0 172.24.0.2:34330] "get" "numVisits"\n1646485509.241762 [0 172.24.0.2:34330] "set" "numVisits" "6"\n1646485509.619369 [0 172.24.0.4:52082] "get" "numVisits"\n1646485509.629739 [0 172.24.0.4:52082] "set" "numVisits" "7"\n1646485509.990926 [0 172.24.0.2:34330] "get" "numVisits"\n1646485509.999947 [0 172.24.0.2:34330] "set" "numVisits" "8"\n1646485510.270934 [0 172.24.0.4:52082] "get" "numVisits"\n1646485510.286785 [0 172.24.0.4:52082] "set" "numVisits" "9"\n1646485510.469613 [0 172.24.0.2:34330] "get" "numVisits"\n1646485510.480849 [0 172.24.0.2:34330] "set" "numVisits" "10"\n1646485510.622615 [0 172.24.0.4:52082] "get" "numVisits"\n1646485510.632720 [0 172.24.0.4:52082] "set" "numVisits" "11"\n')),Object(o.b)("h3",{id:"further-references"},"Further References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ajeetraina/awesome-compose/tree/master/nginx-nodejs-redis"})," Complete Source Code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.redis.com/create/docker/"}),"How to Deploy and Run Redis in a Docker container"))))}l.isMDXComponent=!0},338:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),l=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,m=p["".concat(a,".").concat(u)]||p[u]||b[u]||o;return t?i.a.createElement(m,s(s({ref:n},d),{},{components:t})):i.a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},951:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/docker_nginx-4bdad5f42822101967723d4b04c363aa.png"}}]);