"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9528],{85162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),i="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),i=a(86010),s=a(72389),o=a(67392),l=a(7094),d=a(12466),c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,a,s=e.lazy,p=e.block,m=e.defaultValue,k=e.values,h=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),R=y.tabGroupChoices,w=y.setTabGroupChoices,S=(0,r.useState)(N),E=S[0],D=S[1],I=[],T=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=R[h];null!=x&&x!==E&&g.some((function(e){return e.value===x}))&&D(x)}var C=function(e){var t=e.currentTarget,a=I.indexOf(t),n=g[a].value;n!==E&&(T(t),D(n),null!=h&&w(h,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var i,s=I.indexOf(e.currentTarget)-1;a=null!=(i=I[s])?i:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:C,onClick:C},s,{className:(0,i.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},1203:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r=a(3905),i=a(48811),s="riContainer_bco2",o="riDescriptionShort_E27B",l="riDetail_wzFs",d="riIcon_yDou",c="riTitle_x6vI",u="riDescription_RDnu",p="riMore_apRP",m=a(86010),k=function(e){var t=n.useState(!1),a=t[0],k=t[1];return n.createElement("a",{href:e.page,className:s},n.createElement("div",{className:o},n.createElement("div",{className:d},n.createElement("span",{className:"fe fe-zap"})),n.createElement("div",{className:l},n.createElement("div",{className:c},n.createElement("a",{href:e.page},e.title)),n.createElement("div",{className:u},e.description,n.Children.count(e.children)>0&&n.createElement("span",{className:(0,m.Z)(p,"fe","fe-more-horizontal"),onClick:function(){return k(!a)}})))),a&&n.createElement("div",{className:"ri-description-long"},n.createElement(r.Zo,{components:i.Z},e.children)))}},63926:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=a(65488),o=a(85162),l=(a(44996),a(1203),["components"]),d={id:"index-redis-on-docker",title:"How to Deploy and Run Redis in a Docker container",sidebar_label:"Redis on Docker",slug:"/create/docker/redis-on-docker",authors:["ajeet"]},c=void 0,u={unversionedId:"create/docker/redis-on-docker/index-redis-on-docker",id:"create/docker/redis-on-docker/index-redis-on-docker",title:"How to Deploy and Run Redis in a Docker container",description:"<Tabs",source:"@site/docs/create/docker/redis-on-docker/index-redis-on-docker.mdx",sourceDirName:"create/docker/redis-on-docker",slug:"/create/docker/redis-on-docker",permalink:"/create/docker/redis-on-docker",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/docker/redis-on-docker/index-redis-on-docker.mdx",tags:[],version:"current",lastUpdatedAt:1663754331,formattedLastUpdatedAt:"9/21/2022",frontMatter:{id:"index-redis-on-docker",title:"How to Deploy and Run Redis in a Docker container",sidebar_label:"Redis on Docker",slug:"/create/docker/redis-on-docker",authors:["ajeet"]},sidebar:"docs",previous:{title:"Overview",permalink:"/create/docker/"},next:{title:"Node.js, Nginx, Redis and Docker",permalink:"/create/docker/nodejs-nginx-redis"}},p={},m=[{value:"Pre-requisite",id:"pre-requisite",level:3},{value:"Step 1: Click on \u201cSetup\u201d",id:"step-1-click-on-setup",level:3},{value:"Step 2: Enter your preferred FQDN",id:"step-2-enter-your-preferred-fqdn",level:3},{value:"Step 3: Enter the admin credentials",id:"step-3-enter-the-admin-credentials",level:3},{value:"Step 4: Create a Database:",id:"step-4-create-a-database",level:3},{value:"Step 5: Connecting using redis-cli",id:"step-5-connecting-using-redis-cli",level:3},{value:"Pre-requisite",id:"pre-requisite-1",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Next Steps",id:"next-steps",level:3}],k={toc:m};function h(e){var t=e.components,d=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{defaultValue:"Redis Enterprise",values:[{label:"Redis Enterprise",value:"Redis Enterprise"},{label:"Redis",value:"Redis"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Redis Enterprise",className:"has-small-images",mdxType:"TabItem"},(0,i.kt)("h3",{id:"pre-requisite"},"Pre-requisite"),(0,i.kt)("p",null,"Ensure that Docker is installed in your system."),(0,i.kt)("p",null,"If you're new, refer ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"https://docs.docker.com/docker-for-mac/install/")," to install Docker on Mac."),(0,i.kt)("p",null,"To pull and start the Redis Enterprise Software Docker container, run this docker run command in the terminal or command-line for your operating system."),(0,i.kt)("p",null,"Note: On Windows, make sure Docker is configured to run Linux-based containers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --cap-add sys_resource --name rp -p 8443:8443 -p 9443:9443 -p 12000:12000 redislabs/redis\n")),(0,i.kt)("p",null,"In the web browser on the host machine, go to https://localhost:8443 to see the Redis Enterprise Software web console."),(0,i.kt)("h3",{id:"step-1-click-on-setup"},"Step 1: Click on \u201cSetup\u201d"),(0,i.kt)("p",null,"Click Setup to start the node configuration steps."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:a(62424).Z,width:"955",height:"848"})),(0,i.kt)("h3",{id:"step-2-enter-your-preferred-fqdn"},"Step 2: Enter your preferred FQDN"),(0,i.kt)("p",null,"In the Node Configuration settings, enter a cluster FQDN such as demo.redis.com. Then click Next button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:a(14476).Z,width:"955",height:"711"})),(0,i.kt)("p",null,"Enter your license key, if you have one. If not, click the Next button to use the trial version."),(0,i.kt)("h3",{id:"step-3-enter-the-admin-credentials"},"Step 3: Enter the admin credentials"),(0,i.kt)("p",null,"Enter an email and password for the admin account for the web console."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:a(51805).Z,width:"955",height:"891"})),(0,i.kt)("p",null,"These credentials are also used for connections to the REST API.\nClick OK to confirm that you are aware of the replacement of the HTTPS SSL/TLS certificate on the node, and proceed through the browser warning."),(0,i.kt)("h3",{id:"step-4-create-a-database"},"Step 4: Create a Database:"),(0,i.kt)("p",null,"Select \u201credis database\u201d and the \u201csingle region\u201d deployment, and click Next."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:a(60059).Z,width:"955",height:"733"})),(0,i.kt)("p",null,"Enter a database name such as demodb and click Activate to create your database"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:a(21360).Z,width:"955",height:"1035"})),(0,i.kt)("p",null,"You now have a Redis database!"),(0,i.kt)("h3",{id:"step-5-connecting-using-redis-cli"},"Step 5: Connecting using redis-cli"),(0,i.kt)("p",null,"After you create the Redis database, you are ready to store data in your database. redis-cli is a built-in simple command-line tool to interact with Redis database. Run redis-cli, located in the /opt/redislabs/bin directory, to connect to port 12000 and store and retrieve a key in database1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ docker exec -it rp bash\nredislabs@fd8dca50f905:/opt$\n /opt/redislabs/bin/redis-cli -p 12000\n127.0.0.1:12000> auth <enter password>\nOK\n127.0.0.1:12000> set key1 123\nOK\n127.0.0.1:12000> get key1\n"123"\n'))),(0,i.kt)(o.Z,{value:"Redis",mdxType:"TabItem"},(0,i.kt)("h3",{id:"pre-requisite-1"},"Pre-requisite"),(0,i.kt)("p",null,"Ensure that Docker is installed in your system. Follow ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")," if you haven\u2019t installed yet."),(0,i.kt)("p",null,"You can run Redis Stack using a Docker container. There are two types of Docker images available in Docker Hub."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redis/redis-stack")," Docker image contains both Redis Stack server and RedisInsight. This container is recommended for local development because you can use RedisInsight to visualize your data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redis/redis-stack-server")," provides Redis Stack but excludes RedisInsight. This container is best for production deployment."))),(0,i.kt)("h3",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"To start Redis Stack server using the redis-stack image, run the following command in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest\n")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli")," to connect to the server, just as you connect to any Redis instance.\nIf you don\u2019t have redis-cli installed locally, you can run it from the Docker container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker exec -it redis-stack redis-cli\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TIP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command above also exposes RedisInsight on port 8001. You can use RedisInsight by pointing your browser to http://localhost:8001."))),(0,i.kt)("p",null,"To persist your Redis data to a local path, specify -v to configure a local volume. This command stores all data in the local directory local-data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -v /local-data/:/data redis/redis-stack:latest\n")),(0,i.kt)("p",null,"If you want to expose Redis Stack server or RedisInsight on a different port, update the left hand of portion of the ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," argument. This command exposes Redis Stack server on port 10001 and RedisInsight on port 13333:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 10001:6379 -p 13333:8001 redis/redis-stack:latest\n")),(0,i.kt)("p",null,"By default, the Redis Stack Docker containers use internal configuration files for Redis. To start Redis with local a configuration file, you can use the -v volume options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -v `pwd`/local-redis-stack.conf:/redis-stack.conf -p 6379:6379 -p 8001:8001 redis/redis-stack:latest\n")),(0,i.kt)("p",null,"To pass in arbitrary configuration changes, you can set any of these environment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REDIS_ARGS"),": extra arguments for Redis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REDISEARCH_ARGS"),": arguments for RediSearch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REDISJSON_ARGS"),": arguments for RedisJSON"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REDISGRAPH_ARGS"),": arguments for RedisGraph"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REDISTIMESERIES_ARGS"),": arguments for RedisTimeSeries"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REDISBLOOM_ARGS"),": arguments for RedisBloom")),(0,i.kt)("p",null,"For example, here\u2019s how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_ARGS")," environment variable to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"requirepass")," directive to Redis:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' docker run -e REDIS_ARGS="--requirepass redis-stack" redis/redis-stack:latest\n')))),(0,i.kt)("h3",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsightv2/"},"Connect to Redis database using RedisInsight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisdatasource/"},"Connect to Redis database using Redis datasource for Grafana"))),(0,i.kt)("h2",{id:""}),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,i.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}h.isMDXComponent=!0},62424:function(e,t,a){t.Z=a.p+"assets/images/resoftware-1-9cae87f442d005c2d5eef9ce7e277e66.png"},14476:function(e,t,a){t.Z=a.p+"assets/images/resoftware-2-9313ccd8080b582bd7d3af6feb4471b4.png"},51805:function(e,t,a){t.Z=a.p+"assets/images/resoftware-4-d68706c4379a22cc84955f90af69c91e.png"},60059:function(e,t,a){t.Z=a.p+"assets/images/resoftware-5-984c27aa9a4337754665886668670275.png"},21360:function(e,t,a){t.Z=a.p+"assets/images/resoftware-7-b087dde1884f48b22eb5f3e1a1d66d54.png"}}]);