(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{206:function(e,t,i){"use strict";var a=i(0),s=i.n(a),n=i(204),r=i(212);i(205),i(55);t.a=function(e){var t=s.a.useState(!1),i=t[0],a=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!i)}})))),i&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(n.a,{components:r.a},e.children)))}},207:function(e,t,i){"use strict";var a=i(0),s=i(208);t.a=function(){var e=Object(a.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},208:function(e,t,i){"use strict";var a=i(0),s=Object(a.createContext)(void 0);t.a=s},209:function(e,t,i){"use strict";var a=i(0),s=i.n(a),n=i(207),r=i(211),l=i(56),c=i.n(l),o=37,d=39;t.a=function(e){var t=e.lazy,i=e.block,l=e.defaultValue,u=e.values,p=e.groupId,b=e.className,h=Object(n.a)(),m=h.tabGroupChoices,g=h.setTabGroupChoices,f=Object(a.useState)(l),O=f[0],j=f[1],v=a.Children.toArray(e.children);if(null!=p){var N=m[p];null!=N&&N!==O&&u.some((function(e){return e.value===N}))&&j(N)}var y=function(e){j(e),null!=p&&g(p,e)},I=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":i},b)},u.map((function(e){var t=e.value,i=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:function(e){!function(e,t,i){switch(i.keyCode){case d:!function(e,t){var i=e.indexOf(t)+1;e[i]?e[i].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var i=e.indexOf(t)-1;e[i]?e[i].focus():e[e.length-1].focus()}(e,t)}}(I,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},i)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},210:function(e,t,i){"use strict";var a=i(3),s=i(0),n=i.n(s);t.a=function(e){var t=e.children,i=e.hidden,s=e.className;return n.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:i,className:s}),t)}},388:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image1-6b4439d804d249cfa020804328bd4498.png"},389:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image2-c1fa2fc8ec918ac90b252d52d8337521.png"},390:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image3-c620aa0371ee0293a2d651dc67c5c93e.png"},391:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image_4-942e37868e9a0e3464035f201906dcc8.png"},95:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return d}));var a=i(3),s=i(7),n=(i(0),i(204)),r=(i(209),i(210),i(205),i(206),{id:"index-usinghelm",title:"Installing RedisInsight using Helm Chart",sidebar_label:"Installing RedisInsight using Helm Chart",slug:"/explore/redisinsight/usinghelm"}),l={unversionedId:"explore/redisinsight/usinghelm/index-usinghelm",id:"explore/redisinsight/usinghelm/index-usinghelm",isDocsHomePage:!1,title:"Installing RedisInsight using Helm Chart",description:"Helm is a package manager for Kubernetes. It is the best way to find, share, and use software built for Kubernetes. It is the K8s equivalent of yum or apt.",source:"@site/docs/explore/redisinsight/usinghelm/index-usinghelm.mdx",slug:"/explore/redisinsight/usinghelm",permalink:"/explore/redisinsight/usinghelm",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/usinghelm/index-usinghelm.mdx",version:"current",sidebar_label:"Installing RedisInsight using Helm Chart",sidebar:"docs",previous:{title:"Autodiscover Elasticache Redis caches using RedisInsight",permalink:"/explore/redisinsight/autodiscover"},next:{title:"Redis DataSource for Grafana",permalink:"/explore/redisdatasource"}},c=[{value:"Benefits of Helm:",id:"benefits-of-helm",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Step 1. Install the Prerequisites",id:"step-1-install-the-prerequisites",children:[]},{value:"Step 2. Install Helm on your Mac system",id:"step-2-install-helm-on-your-mac-system",children:[]},{value:"Step 3. Verify if helm is installed correctly",id:"step-3-verify-if-helm-is-installed-correctly",children:[]},{value:"Step 4. Download RedisInsight Helm Chart",id:"step-4-download-redisinsight-helm-chart",children:[]},{value:"Step 5. Verify if Kubernetes is up and running",id:"step-5-verify-if-kubernetes-is-up-and-running",children:[]},{value:"Step 6. Install RedisInsight using Helm chart",id:"step-6-install-redisinsight-using-helm-chart",children:[]},{value:"Step 7. Get the application URL",id:"step-7-get-the-application-url",children:[]},{value:"Step 8. Listing the IP address",id:"step-8-listing-the-ip-address",children:[]},{value:"Step 9. Listing the Helm Chart",id:"step-9-listing-the-helm-chart",children:[]},{value:"Step 10. Listing the Redisinsight Pods",id:"step-10-listing-the-redisinsight-pods",children:[]},{value:"Step 11. Accessing RedisInsight",id:"step-11-accessing-redisinsight",children:[]},{value:"References",id:"references",children:[]}]}],o={toc:c};function d(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Helm is a package manager for Kubernetes. It is the best way to find, share, and use software built for Kubernetes. It is the K8s equivalent of yum or apt.\nHelm helps you manage Kubernetes applications \u2014 Helm Charts help you define, install, and upgrade even the most complex Kubernetes application. Helm is a graduated project in the CNCF and is maintained by the Helm community."),Object(n.b)("h3",{id:"benefits-of-helm"},"Benefits of Helm:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Improves developer productivity"),Object(n.b)("li",{parentName:"ul"},"Makes application deployment easy, standarized and reusable"),Object(n.b)("li",{parentName:"ul"},"Enhances operational readiness"),Object(n.b)("li",{parentName:"ul"},"Reduces the complexity of deployments of microservices"),Object(n.b)("li",{parentName:"ul"},"Speeds up the adaptation of cloud native applications")),Object(n.b)("p",null,"It is possible to install RedisInsight using Helm chart. A full-featured desktop GUI client, RedisInsight is an essential tool for Redis developers. It is a lightweight multi-platform management visualization tool that helps you design, develop, and optimize your application capabilities in a single easy-to-use environment. RedisInsight not just makes it easier to interact with your databases and manage your data, but also helps in managing Redis Cluster with ease."),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("div",{className:"admonition admonition-important alert alert--info"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Please Note: Installing RedisInsight using Helm is an experimental feature but not fully supported by Redis Labs."))),Object(n.b)("h3",{id:"step-1-install-the-prerequisites"},"Step 1. Install the Prerequisites"),Object(n.b)("p",null,"Install Docker Desktop for Mac and enable Kubernetes as shown below:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:i(388).default,title:"image_tooltip"})),Object(n.b)("h3",{id:"step-2-install-helm-on-your-mac-system"},"Step 2. Install Helm on your Mac system"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," brew install helm\n")),Object(n.b)("h3",{id:"step-3-verify-if-helm-is-installed-correctly"},"Step 3. Verify if helm is installed correctly"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' helm version\n version.BuildInfo{Version:"v3.6.1",   \n GitCommit:"61d8e8c4a6f95540c15c6a65f36a6dd0a45e7a2f", GitTreeState:"dirty", \n GoVersion:"go1.16.5"}\n')),Object(n.b)("h3",{id:"step-4-download-redisinsight-helm-chart"},"Step 4. Download RedisInsight Helm Chart"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{})," wget https://docs.redislabs.com/latest/pkgs/redisinsight-chart-0.1.0.tgz\n")),Object(n.b)("h3",{id:"step-5-verify-if-kubernetes-is-up-and-running"},"Step 5. Verify if Kubernetes is up and running"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," kubectl get nodes\n NAME             STATUS   ROLES    AGE   VERSION \n docker-desktop   Ready    master   22d   v1.19.7\n")),Object(n.b)("h3",{id:"step-6-install-redisinsight-using-helm-chart"},"Step 6. Install RedisInsight using Helm chart"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' helm install redisinsight redisinsight-chart-0.1.0.tgz --set service.type=NodePort\n\n NAME: redisinsight\n LAST DEPLOYED: Sat Jun 26 11:40:11 2021\n NAMESPACE: default \n STATUS: deployed\n REVISION: 1\n NOTES:\n 1. Get the application URL by running these commands:\n  export NODE_PORT=$(kubectl get --namespace default -o   \n jsonpath="{.spec.ports[0].nodePort}" services redisinsight-redisinsight-chart)\n  export NODE_IP=$(kubectl get nodes --namespace default -o  \n jsonpath="{.items[0].status.addresses[0].address}")\n  echo http://$NODE_IP:$NODE_PORT\n')),Object(n.b)("h3",{id:"step-7-get-the-application-url"},"Step 7. Get the application URL"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services redisinsight-redisinsight-chart)\n export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")\n')),Object(n.b)("h3",{id:"step-8-listing-the-ip-address"},"Step 8. Listing the IP address"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," echo http://$NODE_IP:$NODE_PORT\n http://192.168.65.4:30269\n")),Object(n.b)("h3",{id:"step-9-listing-the-helm-chart"},"Step 9. Listing the Helm Chart"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," helm list\n NAME           NAMESPACE   REVISION    UPDATED                             STATUS      CHART                       APP VERSION\n redisinsight   default     1           2021-06-26 11:40:11.82793 +0530 IST deployed    redisinsight-chart-0.1.0\n")),Object(n.b)("p",null,Object(n.b)("img",{alt:"images",src:i(389).default})),Object(n.b)("h3",{id:"step-10-listing-the-redisinsight-pods"},"Step 10. Listing the Redisinsight Pods"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," kubectl get po\n NAME                                               READY   STATUS    RESTARTS   AGE\n fortune                                            2/2     Running   8          22d\n redisinsight-redisinsight-chart-857b486d8f-w9xpv   1/1     Running   0          15m\n")),Object(n.b)("h3",{id:"step-11-accessing-redisinsight"},"Step 11. Accessing RedisInsight"),Object(n.b)("p",null,Object(n.b)("img",{alt:"images",src:i(390).default}),"\n",Object(n.b)("img",{alt:"images",src:i(391).default})),Object(n.b)("h3",{id:"references"},"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/redisearch"}),"Unified Search and Analytics using RediSearch Browser Tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/redistimeseries"}),"Managing time-series data using RedisTimeSeries Browser Tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/profiler"}),"Analyze Your Redis commands using RedisInsight Profiler tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Debugging Redis using RedisInsight Slowlog Tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/streams"}),"Using Redis Streams with RedisInsight"))))}d.isMDXComponent=!0}}]);