"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5992],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),s=["components"],o={id:"index-portainer",title:"Getting Started with Portainer and Redis",sidebar_label:"Getting Started with Portainer and Redis",slug:"/create/portainer",authors:["ryan"]},l=void 0,c={unversionedId:"create/portainer/index-portainer",id:"create/portainer/index-portainer",title:"Getting Started with Portainer and Redis",description:"Redis is an in-memory data structure store, used as a distributed, in-memory key\u2013value database, cache and message broker, with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indices. ~Wikipedia",source:"@site/docs/create/portainer/index-portainer.mdx",sourceDirName:"create/portainer",slug:"/create/portainer",permalink:"/create/portainer",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/portainer/index-portainer.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-portainer",title:"Getting Started with Portainer and Redis",sidebar_label:"Getting Started with Portainer and Redis",slug:"/create/portainer",authors:["ryan"]},sidebar:"docs",previous:{title:"Getting Started with Azure Functions and Redis",permalink:"/create/azurefunctions"},next:{title:"Overview",permalink:"/develop"}},d={},p=[{value:"Scenario 1: Kubernetes",id:"scenario-1-kubernetes",level:3},{value:"Scenario 2: Docker Swarm",id:"scenario-2-docker-swarm",level:3},{value:"Scenario 3: Docker &amp; Docker Swarm - Can I just have a container?",id:"scenario-3-docker--docker-swarm---can-i-just-have-a-container",level:3}],u={toc:p};function h(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Redis is an in-memory data structure store, used as a distributed, in-memory key\u2013value database, cache and message broker, with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indices. ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Redis"},"~Wikipedia")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"portainer and redis",src:n(46261).Z,width:"2190",height:"1432"})),(0,r.kt)("p",null,"You can\u2019t travel far in the modern software world without finding that you need an in-memory data store. Today, the answer to \u201cWhich data store?\u201d is often Redis. Also today, the answer to \u201cHow to Redis?\u201d can be Portainer."),(0,r.kt)("p",null,"In this blog we'll take you through using Portainer to set up Redis in three common scenarios."),(0,r.kt)("h3",{id:"scenario-1-kubernetes"},"Scenario 1: Kubernetes"),(0,r.kt)("p",null,"Many organizations are either already using Kubernetes in some capacity or they are on a journey to adopt it, so let\u2019s start there."),(0,r.kt)("p",null,"First, log into Portainer and select a Kubernetes environment to manage. Then, in the navigation menu on the left, click ",(0,r.kt)("strong",{parentName:"p"},'"Namespaces"'),", and then click the ",(0,r.kt)("strong",{parentName:"p"},'"Add namespace with form"')," button."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Give the namespace a name, in the case \u201c",(0,r.kt)("strong",{parentName:"li"},"redis"),"\u201d."),(0,r.kt)("li",{parentName:"ul"},"Turn off ",(0,r.kt)("strong",{parentName:"li"},'"Resource assignment"')," (only for the purpose of simplicity for this demo)."),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"\u201cCreate namespace\u201d")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create_namespace",src:n(73891).Z,width:"1512",height:"576"})),(0,r.kt)("p",null,"Now that we have a namespace for Redis to operate in, let\u2019s install it."),(0,r.kt)("p",null,"In the navigation menu on the left, click ",(0,r.kt)("strong",{parentName:"p"},"\u201cHelm\u201d"),". If you haven\u2019t already done so, add the Bitnami charts repository by typing ",(0,r.kt)("a",{parentName:"p",href:"https://charts.bitnami.com/bitnami"},"https://charts.bitnami.com/bitnami")," into the ",(0,r.kt)("strong",{parentName:"p"},"\u201cAdditional repositories\u201d")," form, and then click ",(0,r.kt)("strong",{parentName:"p"},"\u201cAdd repository\u201d"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"helm",src:n(2515).Z,width:"1512",height:"415"})),(0,r.kt)("p",null,"Once the Bitnami charts repository has been added, you should see a list of Charts on this page. Find ",(0,r.kt)("strong",{parentName:"p"},'"Redis"')," and click on it."),(0,r.kt)("p",null,"Note, you will see redis-cluster listed as an option. The redis-cluster Helm chart configures a six node cluster; three masters, and three slaves. The redis Helm chart we will use configures a much simpler three node cluster; one master, and two slaves. There are a number of other differences between these two Helm charts. For a complete list of differences, Bitnami has a good description ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bitnami.com/kubernetes/infrastructure/redis/get-started/compare-solutions/"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"redis-in-helm-list",src:n(92693).Z,width:"1512",height:"415"})),(0,r.kt)("p",null,"Next, scroll to the top of the page to configure Redis for deployment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"\u201credis\u201d")," in the Namespace dropdown."),(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"\u201credis\u201d")," for the Name."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u201cShow custom values\u201d"),". I am going to expose Redis via NodePort 31000. I picked port 31000 because I know that ports 31000-31010 are open to my cluster. To get this done I will set the ",(0,r.kt)("strong",{parentName:"li"},".service.type","*"," to NodePort and the "),".service.nodePorts.redis","*"," to 31000. As you can see in the screenshot below, these can currently be found on lines 431 and 441 in the Helm chart."),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"\u201cInstall\u201d")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"redis-helm-custom-values",src:n(38835).Z,width:"1512",height:"894"})),(0,r.kt)("p",null,"When it\u2019s finished, you can head to the Applications page by clicking Applications in the navigation menu on the left. When Kubernetes is finished bringing up Redis, you will see the Status as ",(0,r.kt)("strong",{parentName:"p"},"\u201cReady\u201d"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"redis-ready",src:n(89502).Z,width:"1512",height:"617"})),(0,r.kt)("p",null,"Note that what is deployed is a STATEFULSET application, which means it persists data. You can see the volumes which have been created (which use the default storage class of your system) by clicking ",(0,r.kt)("strong",{parentName:"p"},'"Volumes"'),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"volumes",src:n(14927).Z,width:"1752",height:"560"})),(0,r.kt)("p",null,"See that each pod has its own copy/replica of the DB content, and note that it defaults to 8GB in size. If you need to change this, then its line 409 in the values file of the HELM deployment."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"change_volumes_size",src:n(79827).Z,width:"1186",height:"186"})),(0,r.kt)("p",null,"And that\u2019s it. The only thing left to do is test it. Before we do that, we\u2019re going to take a short detour. There are two facts about the Helm chart install of Redis that you should know. First, Redis will come up requiring authentication to connect to it. Second, a random password was created during installation. To find it, in Portainer click on \u201cConfigMaps & Secrets\u201d in the navigation menu on the left. Find the secret named ",(0,r.kt)("strong",{parentName:"p"},"\u201credis\u201d")," and click on it. The password that you\u2019ll need to authenticate with is the value of the ",(0,r.kt)("em",{parentName:"p"},"redis-password")," key."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"find-redis-password",src:n(75221).Z,width:"1512",height:"731"})),(0,r.kt)("p",null,"With that in hand, you can test that your Redis server is running. My typical rudimentary test of a Redis deployment is to connect to it with the redis-cli from my laptop and increment an arbitrary key. You\u2019ll see that the client is connecting to our NodePort here and using the password we found in our Secrets."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s-test",src:n(89040).Z,width:"1808",height:"332"}),"\nIn a shocking plot twist, this worked."),(0,r.kt)("h3",{id:"scenario-2-docker-swarm"},"Scenario 2: Docker Swarm"),(0,r.kt)("p",null,"Long live Docker Swarm! There is still plenty of Swarm in the wild and Portainer is managing a lot of it. Let\u2019s bring up Redis in Swarm."),(0,r.kt)("p",null,"For the purposes of this demo, we will use a Portainer App Template to deploy Redis, and this assumes you are using Portainer\u2019s provided App Template Repo. You can check that under \u201cSettings\u201d."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"settings",src:n(73177).Z,width:"2222",height:"613"})),(0,r.kt)("p",null,"Now that you know you are good to go,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click "App Templates" in the navigation menu on the left.'),(0,r.kt)("li",{parentName:"ul"},"Find and click on Redis Cluster.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"redis-cluster",src:n(49465).Z,width:"2248",height:"1272"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fill in the name, in this case ",(0,r.kt)("strong",{parentName:"li"},'"redis"'),"."),(0,r.kt)("li",{parentName:"ul"},"Provide a SECURE password for ",(0,r.kt)("strong",{parentName:"li"},"Redis"),"."),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"\u201cDeploy the stack\u201d")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy-stack",src:n(17240).Z,width:"1509",height:"828"})),(0,r.kt)("p",null,"You will be taken to the \u201cStacks list\u201d page and will see the new stack named \u201credis\u201d. Click on \u201credis\u201d to see information about this stack. Like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"stack-info",src:n(87900).Z,width:"1672",height:"1506"})),(0,r.kt)("p",null,"To test, expand one of the services that you see on the stack details page (above). Then click on the container\u2019s \u201cexec console\u201d icon."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"console-access-icon",src:n(40038).Z,width:"1257",height:"380"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the \u201cConnect\u201d button to start the shell.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"console-connect",src:n(79206).Z,width:"1257",height:"259"})),(0,r.kt)("p",null,"Once the console opens, the Redis deployment can be tested like so:\nIn case it\u2019s difficult to see, the command used to connect to a redis node is ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli -h redis-node-1 -c -a my-password-here --no-auth-warning")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"swarm-test",src:n(10796).Z,width:"1511",height:"890"})),(0,r.kt)("h3",{id:"scenario-3-docker--docker-swarm---can-i-just-have-a-container"},"Scenario 3: Docker & Docker Swarm - Can I just have a container?"),(0,r.kt)("p",null,"Sometimes I just want a Redis container, not a whole situation. Just a quick, unsophisticated Redis container. Here\u2019s how to get that done in Portainer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"App Templates"')," in the navigation menu on the left."),(0,r.kt)("li",{parentName:"ul"},"Toggle the ",(0,r.kt)("strong",{parentName:"li"},'"Show container templates"')," switch to on.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"show-container-templates-toggle",src:n(65504).Z,width:"1914",height:"246"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find and click on Redis."),(0,r.kt)("li",{parentName:"ul"},'Give the application a name, in this case "redis".'),(0,r.kt)("li",{parentName:"ul"},"Click on \u201cShow advanced options\u201d."),(0,r.kt)("li",{parentName:"ul"},"Set the port to map. In this example, the Docker ",(0,r.kt)("strong",{parentName:"li"},"host"),"'s port 6379 is forwarded to the ",(0,r.kt)("strong",{parentName:"li"},"container"),"'s port 6379, Redis\u2019s default port for most communications."),(0,r.kt)("li",{parentName:"ul"},"Click on the \u201cDeploy the container\u201d button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy-container",src:n(99825).Z,width:"1914",height:"943"})),(0,r.kt)("p",null,"That\u2019s it. You can test in the same way as before."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"container-container",src:n(8643).Z,width:"1800",height:"288"})),(0,r.kt)("p",null,"Three different scenarios - Three easy Redis deployments using Portainer"))}h.isMDXComponent=!0},46261:function(e,t,n){t.Z=n.p+"assets/images/portainer-812c32359f6b7a5f17d26e12177f31b6.png"},73891:function(e,t,n){t.Z=n.p+"assets/images/redis1-47c27c5553c046e24fc199bff6f8c5ec.png"},73177:function(e,t,n){t.Z=n.p+"assets/images/redis10-d1b7ffa1e1ab1e95e95229f900e1b37a.png"},49465:function(e,t,n){t.Z=n.p+"assets/images/redis11-c03e36c449b428764915772b56a332bf.png"},17240:function(e,t,n){t.Z=n.p+"assets/images/redis12-c31ae85e5cc2e5146c1642a07ce524cc.png"},87900:function(e,t,n){t.Z=n.p+"assets/images/redis13-0208127a775a72b8b31d2a9dbf6c4f7a.png"},40038:function(e,t,n){t.Z=n.p+"assets/images/redis14-0378f4a77dfb064ff050cc1c3ec1c765.png"},79206:function(e,t,n){t.Z=n.p+"assets/images/redis15-0b551abe3c410774ae564202fa407b13.png"},10796:function(e,t,n){t.Z=n.p+"assets/images/redis16-d5082666447063dc866812dceae87b7d.png"},65504:function(e,t,n){t.Z=n.p+"assets/images/redis17-25bd436bade7ba4e5334b5a9788debaf.png"},99825:function(e,t,n){t.Z=n.p+"assets/images/redis18-e96f38dafc1aa251258c38129f6aee4f.png"},8643:function(e,t,n){t.Z=n.p+"assets/images/redis19-04385676641c1b91f564ed79d2a8f893.png"},2515:function(e,t,n){t.Z=n.p+"assets/images/redis2-28ccf7b1e8bdb39334674f69ce35f04f.png"},92693:function(e,t,n){t.Z=n.p+"assets/images/redis3-878226d0570c03b584179a9a288cb40a.png"},38835:function(e,t,n){t.Z=n.p+"assets/images/redis4-a0e2c589f75f07045824d710b611f1cd.png"},89502:function(e,t,n){t.Z=n.p+"assets/images/redis5-1190a0ff807f6dd539636cd76c0ea752.png"},14927:function(e,t,n){t.Z=n.p+"assets/images/redis6-804e9a3ebf54bba209ec2f5eef79656e.png"},79827:function(e,t,n){t.Z=n.p+"assets/images/redis7-f7753a0f90467ddd5a64009903305f52.png"},75221:function(e,t,n){t.Z=n.p+"assets/images/redis8-6e623f17aed987bdbbf3ab237ec0fa91.png"},89040:function(e,t,n){t.Z=n.p+"assets/images/redis9-4445ebd3051517d513fbf1c17e512455.png"}}]);