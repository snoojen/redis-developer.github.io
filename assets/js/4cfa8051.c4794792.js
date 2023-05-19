"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},50358:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(52263);const o="authorByline_VoxI",l="authorLabel_a70t",s="authorProfileImage_URwT";const i=function(e){let{frontMatter:t}=e;const{siteConfig:r}=(0,a.Z)(),i=r.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:o},n.createElement("img",{className:s,src:`/img/${i[e].image?i[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${i[e].name}`}),n.createElement("div",null,n.createElement("div",{className:l},"Author:"),n.createElement("div",null,n.createElement("a",{href:i[e].link,target:"_blank"},i[e].name),", ",i[e].title))))),n.createElement("hr",null)))}},43705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(50358);const l={id:"index-vercel",title:"Getting Started with Vercel and Redis",sidebar_label:"Getting Started with Vercel and Redis",slug:"/create/vercel",authors:["ajeet"]},s=void 0,i={unversionedId:"create/vercel/index-vercel",id:"create/vercel/index-vercel",title:"Getting Started with Vercel and Redis",description:"Vercel is a popular static web hosting serverless platform for frontend developers. The platform allows developers to host websites and web services, deploy instantly, and scale automatically with minimal configuration.",source:"@site/docs/create/vercel/index-vercel.mdx",sourceDirName:"create/vercel",slug:"/create/vercel",permalink:"/create/vercel",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/vercel/index-vercel.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-vercel",title:"Getting Started with Vercel and Redis",sidebar_label:"Getting Started with Vercel and Redis",slug:"/create/vercel",authors:["ajeet"]},sidebar:"docs",previous:{title:"Deploy Docusaurus to Netlify in 5 Minutes",permalink:"/create/netlify/deploy-docusaurus-to-netlify"},next:{title:"Getting Started with Google Cloud Run and Redis",permalink:"/create/cloudrun"}},c={},p=[{value:"Features of Vercel",id:"features-of-vercel",level:3},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Step 1. Set up a free Redis Enterprise Cloud account",id:"step-1-set-up-a-free-redis-enterprise-cloud-account",level:3},{value:"Step 2. Install Vercel CLI",id:"step-2-install-vercel-cli",level:3},{value:"Step 3. Log in to your Vercel account",id:"step-3-log-in-to-your-vercel-account",level:3},{value:"Step 4. Clone the GitHub repository",id:"step-4-clone-the-github-repository",level:3},{value:"Step 5. Create a vercel.json for Node.js app",id:"step-5-create-a-verceljson-for-nodejs-app",level:3},{value:"Step 6. Set up environment variables",id:"step-6-set-up-environment-variables",level:3},{value:"Step 7. Deploy the Node.js app",id:"step-7-deploy-the-nodejs-app",level:3},{value:"Step 8. Accessing the app",id:"step-8-accessing-the-app",level:3},{value:"References",id:"references",level:3}],d={toc:p};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{frontMatter:l,mdxType:"Authors"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/"},"Vercel "),"is a popular static web hosting serverless platform for frontend developers. The platform allows developers to host websites and web services, deploy instantly, and scale automatically with minimal configuration."),(0,a.kt)("p",null,"Vercel is the preferred platform to host ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/next.js/overview"},"Next.js-based web applications"),". It allows you to deploy serverless functions that take an HTTP request and provide a response. You can use ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/functions/serverless-functions"},"serverless functions")," to handle user authentication, form submission, database queries, custom Slack commands, and more."),(0,a.kt)("p",null,"Vercel integrates well with popular tools, such as ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/git/vercel-for-github"},"GitHub"),", ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/git/vercel-for-gitlab"},"GitLab"),", ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/integrations/lighthouse"},"Lighthouse"),", ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/integrations/doppler"},"Doppler"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://divjoy.com/"},"Divjoy"),". NodeJS, Go, Python, and Ruby are the leading ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/runtimes"},"official runtimes supported by Vercel"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"vercel",src:r(20646).Z,width:"1804",height:"1232"})),(0,a.kt)("h3",{id:"features-of-vercel"},"Features of Vercel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vercel is focused on the build and deployment aspects of the ",(0,a.kt)("a",{parentName:"li",href:"https://jamstack.org/what-is-jamstack/"},"JAMstack approach"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vercel.com/docs/rest-api"},"The Vercel API")," provides full control over the Vercel platform, exposed as simple HTTP service endpoints over SSL."),(0,a.kt)("li",{parentName:"ul"},"All endpoints live under the URL ",(0,a.kt)("a",{parentName:"li",href:"https://api.vercel.com"},"https://api.vercel.com")," and follow the REST architecture."),(0,a.kt)("li",{parentName:"ul"},"Vercel provides custom domains to deploy your code on the live server (vercel.app as the suffix in the domain)."),(0,a.kt)("li",{parentName:"ul"},"Vercel provides you with an option to choose any framework of the repository you wish to deploy either Node.js, React, Gatsby, or ",(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Next.js")," (a full-stack React serverless framework that integrates seamlessly with Vercel)."),(0,a.kt)("li",{parentName:"ul"},"Vercel integrates with a GitHub repository for automatic deployments upon commits.")),(0,a.kt)("p",null,"In this tutorial, you will learn how to deploy a Node.js based Redis chat application using Vercel in just 5 minutes."),(0,a.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1. Set up a free Redis Enterprise Cloud account"),(0,a.kt)("li",{parentName:"ul"},"Step 2. Install Vercel CLI"),(0,a.kt)("li",{parentName:"ul"},"Step 3. Log in to your Vercel Account"),(0,a.kt)("li",{parentName:"ul"},"Step 4. Clone your GitHub repository"),(0,a.kt)("li",{parentName:"ul"},"Step 5. Create a vercel.json file"),(0,a.kt)("li",{parentName:"ul"},"Step 6. Set up environment variables"),(0,a.kt)("li",{parentName:"ul"},"Step 7. Deploy the Node.js app"),(0,a.kt)("li",{parentName:"ul"},"Step 8. Access your app")),(0,a.kt)("h3",{id:"step-1-set-up-a-free-redis-enterprise-cloud-account"},"Step 1. Set up a free Redis Enterprise Cloud account"),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://developer.redis.com/create/rediscloud/"},"developer.redis.com/create/rediscloud/")," and create ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free/"},"a free Redis Enterprise Cloud account"),". Once you complete this tutorial, you will be provided with the database endpoint URL and password. Save it for future reference."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,a.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,a.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,a.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(65608).Z,width:"1346",height:"881"})),(0,a.kt)("h3",{id:"step-2-install-vercel-cli"},"Step 2. Install Vercel CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i -g vercel\n\nvercel -v\nVercel CLI 23.1.2\n23.1.2\n\n")),(0,a.kt)("h3",{id:"step-3-log-in-to-your-vercel-account"},"Step 3. Log in to your Vercel account"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"vercel login")," command allows you to log in to your Vercel account through Vercel CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vercel login\nVercel CLI 23.1.2\n> Log in to Vercel github\n> Success! GitHub authentication complete for xx@xx.com\nCongratulations! You are now logged in. In order to deploy something, run `vercel`.\n\ud83d\udca1  Connect your Git Repositories to deploy every branch push automatically (https://vercel.link/git).\n")),(0,a.kt)("p",null,"Once Vercel gets connected to your GitHub account, it displays your public repositories. Let us clone ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs"},"https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs")," to the local repository."),(0,a.kt)("h3",{id:"step-4-clone-the-github-repository"},"Step 4. Clone the GitHub repository"),(0,a.kt)("p",null,"The complete source code of the Redis Chat application is hosted ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs"},"here"),". React and Socket.IO are used for building the frontend while Node.js and Redis power the backend. Redis is used mainly as a database to keep the user/messages data and for sending messages between connected servers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs\n")),(0,a.kt)("h3",{id:"step-5-create-a-verceljson-for-nodejs-app"},"Step 5. Create a vercel.json for Node.js app"),(0,a.kt)("p",null,"If you run the ",(0,a.kt)("inlineCode",{parentName:"p"},"vercel init")," command, it will list various frameworks but you won\u2019t be able to find Node.js, hence you will need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"vercel.json")," file as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "version": 2,\n  "builds": [\n    {\n      "src": "./index.vercel.js",\n      "use": "@vercel/node"\n    }\n  ],\n  "routes": [\n    {\n      "src": "/(.*)",\n      "dest": "/"\n    }\n  ]\n}\n\n')),(0,a.kt)("h3",{id:"step-6-set-up-environment-variables"},"Step 6. Set up environment variables"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"vercel env")," command is used to manage ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/projects/environment-variables"},"environment variables")," under a Project, providing functionality to list, add, remove, and pull."),(0,a.kt)("p",null,"Let us first set up environment variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," vercel env add\nVercel CLI 23.1.2\n? What's the name of the variable? REDIS_ENDPOINT_URI\n? What's the value of REDIS_ENDPOINT_URI? redis-XXXX.c110-qa.us-east-1-1-1.ec2.qa-cloud.redislabs.com:XXX\n\n")),(0,a.kt)("p",null,"Listing the environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vercel env ls\nVercel CLI 23.1.2\n> Environment Variables found in Project basic-redis-chat-app-demo-nodejs [684ms]\n\n name                       value               environments                        created\n REDIS_PASSWORD             Encrypted           Production, Preview, Development    2d ago\n REDIS_ENDPOINT_URL         Encrypted           Production, Preview, Development    2d ago\n\n")),(0,a.kt)("h3",{id:"step-7-deploy-the-nodejs-app"},"Step 7. Deploy the Node.js app"),(0,a.kt)("p",null,"When you run a vercel command in a directory for the first time, ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/cli"},"Vercel CLI")," needs to know which ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/cli#options/global-options/scope"},"scope")," and ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/projects/overview"},"Project")," you want to deploy your directory to. You can choose to either link an existing project or create a new one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'vercel\nVercel CLI 23.1.2\n? Set up and deploy "~/projects/10feb/basic-redis-chat-app-demo-nodejs"? [Y/n] y\n? Which scope do you want to deploy to? redis-developer\n? Found project "redis-developer/basic-redis-chat-app-demo-nodejs". Link to it? [Y/n] y\n\ud83d\udd17  Linked to redis-developer/basic-redis-chat-app-demo-nodejs (created .vercel)\n\ud83d\udd0d  Inspect: https://vercel.com/redis-developer/basic-redis-chat-app-demo-nodejs/5KZydRNsXwnjRxDYa65x4Ak8KwZT [4s]\n\u2705  Preview: https://basic-redis-chat-app-demo-nodejs-redis-developer.vercel.app [copied to clipboard] [27s]\n\ud83d\udcdd  To deploy to production (basic-redis-chat-app-demo-nodejs.vercel.app), run `vercel --prod`\n\u2757\ufe0f  Due to `builds` existing in your configuration file, the Build and Development Settings defined in your Project Settings will not apply. Learn More: https://vercel.link/unused-build-settings\n\n')),(0,a.kt)("p",null,"Once the deployment process has completed, a new ",(0,a.kt)("inlineCode",{parentName:"p"},".vercel")," directory will be added to your directory. The ",(0,a.kt)("inlineCode",{parentName:"p"},".vercel")," directory contains both the organization and project ID of your project."),(0,a.kt)("p",null,'The "project.json" file contains:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The ID of the Vercel project that you linked ("projectId")')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The ID of the user or team your Vercel project is owned by ("orgId")'))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Vercel CLI automatically detects the framework you are using and offers default project settings accordingly.")),(0,a.kt)("h3",{id:"step-8-accessing-the-app"},"Step 8. Accessing the app"),(0,a.kt)("p",null,"Run the following command to deploy the Redis chat app to the Prod environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vercel --prod\nVercel CLI 23.1.2\n\ud83d\udd0d  Inspect: https://vercel.com/redis-developer/basic-redis-chat-app-demo-nodejs/GoRdy7LKxqhBfJNW8hSvvFLQC6EN [2s]\n\u2705  Production: https://basic-redis-chat-app-demo-nodejs.vercel.app [copied to clipboard] [14s]\n\n\n")),(0,a.kt)("p",null,"By now, you will be able to login to Chat app and start chatting."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(53981).Z,width:"1336",height:"896"})),(0,a.kt)("p",null,"The chat server works as a basic REST API which involves keeping the session and handling the user state in the chat rooms (besides the WebSocket/real-time part). When a WebSocket/real-time server is instantiated, which listens for the next events:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(18659).Z,width:"1092",height:"874"})),(0,a.kt)("p",null,"If you want to know how the chat app works internally, ",(0,a.kt)("a",{parentName:"p",href:"/howtos/chatapp#how-it-works"},"refer to this detailed blog tutorial")),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vercel.com/docs/get-started"},"Getting Started with Vercel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vercel.com/docs/concepts/functions/serverless-functions"},"Serverless Functions under Vercel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vercel.com/docs/concepts/functions/supported-languages"},"A Look at Vercel Supported Languages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vercel.com/docs/concepts/next.js/overview"},"Next.js on Vercel"))))}u.isMDXComponent=!0},65608:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},53981:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vercel13-d750e03d8643cda1dc0c7f8597b96666.png"},18659:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vercel3-379066e902cddb58ad190803711f17c9.png"},20646:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vercel_redis-bfe66658a4d638c515ef2569a5fd5b59.png"}}]);