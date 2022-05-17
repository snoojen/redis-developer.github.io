(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1e3:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster_nodes_dashboard-bb8833f592ee99541581b7bedea9673b.png"},1001:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster_databases_dashboard-ec8da835eb91dadaf0d823fb9e535947.png"},1002:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tryfree1-178ded04f46afda02204b4ed8ad19fb4.png"},1003:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redis_enterprise_cluster-575c0883d8b13d3d0d8da2006ccdfd1b.png"},1004:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/grafana-941fd38b71d871a7a9ff802f89a0090f.png"},1005:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/explorer_options-7ed9020bdaff5209f6e8f7102f039e63.png"},1006:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster_overview-dcbb99bb364b26112ae02b969e83508d.png"},1007:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster_nodes-b255c9fce8046c34aef3d292b754dda1.png"},251:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return c}));var r=a(3),s=a(7),i=(a(0),a(393)),n=(a(398),a(399),a(394),a(395),{id:"index-redisexplorer",title:"How to create Grafana Dashboards for Redis Enterprise cluster  in 5 Minutes",sidebar_label:"Grafana Dashboards for Redis Enterprise Cluster",slug:"/explore/redisexplorer",authors:["ajeet"]}),l={unversionedId:"explore/redisexplorer/index-redisexplorer",id:"explore/redisexplorer/index-redisexplorer",isDocsHomePage:!1,title:"How to create Grafana Dashboards for Redis Enterprise cluster  in 5 Minutes",description:"Redis Enterprise clusters are a set of nodes, typically two or more, providing database services. Clusters are inherently multi-tenant, and a single cluster can manage multiple databases accessed through individual endpoints. Redis Enterprise software provides REST API to retrieve information about cluster, database , nodes and metrics.",source:"@site/docs/explore/redisexplorer/index-redisexplorer.mdx",slug:"/explore/redisexplorer",permalink:"/explore/redisexplorer",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisexplorer/index-redisexplorer.mdx",version:"current",lastUpdatedAt:1637874478,sidebar_label:"Grafana Dashboards for Redis Enterprise Cluster",sidebar:"docs",previous:{title:"How to add Redis as a datasource in Grafana and build customize dashboards for Analytics",permalink:"/explore/redisdatasource"},next:{title:"Redis Enterprise Observability with Datadog",permalink:"/explore/datadog"}},d=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Step 1. Setup Redis Enterprise Cluster",id:"step-1-setup-redis-enterprise-cluster",children:[]},{value:"Step 2. Install Grafana",id:"step-2-install-grafana",children:[]},{value:"Step 3. Install redis-explorer-app",id:"step-3-install-redis-explorer-app",children:[]},{value:"Step 4. Using Docker",id:"step-4-using-docker",children:[]},{value:"Step 5. Log in to Grafana",id:"step-5-log-in-to-grafana",children:[]},{value:"Step 6. Choose Redis Explorer in the sidebar",id:"step-6-choose-redis-explorer-in-the-sidebar",children:[]},{value:"Step 7. Getting the Redis Enterprise Cluster Overview",id:"step-7-getting-the-redis-enterprise-cluster-overview",children:[]},{value:"Step 8. Displaying the Redis Enterprise Cluster Nodes",id:"step-8-displaying-the-redis-enterprise-cluster-nodes",children:[]},{value:"Further References",id:"further-references",children:[]}],o={toc:d};function c(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Redis Enterprise clusters are a set of nodes, typically two or more, providing database services. Clusters are inherently multi-tenant, and a single cluster can manage multiple databases accessed through individual endpoints. Redis Enterprise software provides REST API to retrieve information about cluster, database , nodes and metrics."),Object(i.b)("p",null,"Redis Explorer plugin is the latest plugin in the Grafana Labs that adds support for Redis Enterprise software.It is a plugin for Grafana that connects to Redis Enterprise software clusters using REST API. It provides application pages to add Redis Data Sources for managed databases and dashboards to see cluster configuration."),Object(i.b)("p",null,Object(i.b)("img",{alt:"my image",src:a(997).default})),Object(i.b)("p",null,"Redis Explorer allows you to create the below dashboard over Grafana:"),Object(i.b)("h4",{id:"enterprise-clusters-dashboard"},"Enterprise Clusters Dashboard"),Object(i.b)("p",null,"Enterprise Clusters dashboard provides basic information about the cluster, license, and displays most important metrics."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image",src:a(998).default})),Object(i.b)("h4",{id:"cluster-overview-dashboard"},"Cluster Overview Dashboard"),Object(i.b)("p",null,"Cluster Overview dashboard provides the most important information and metrics for the selected cluster."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image",src:a(999).default})),Object(i.b)("h4",{id:"cluster-nodes-dashboard"},"Cluster Nodes Dashboard"),Object(i.b)("p",null,"Cluster Nodes dashboard provides information and metrics for each node participating in the cluster."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image",src:a(1e3).default})),Object(i.b)("h4",{id:"cluster-databases-dashboard"},"Cluster Databases Dashboard"),Object(i.b)("p",null,"Cluster Databases dashboard provides information and metrics for each databases managed by cluster."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image",src:a(1001).default})),Object(i.b)("h3",{id:"getting-started"},"Getting Started"),Object(i.b)("h3",{id:"pre-requisite"},"Pre-requisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Grafana 8.0+ is required for Redis Explorer 2.X."),Object(i.b)("li",{parentName:"ul"},"Grafana 7.1+ is required for Redis Explorer 1.X."),Object(i.b)("li",{parentName:"ul"},"Docker"),Object(i.b)("li",{parentName:"ul"},"Redis Enterprise Cluster")),Object(i.b)("h3",{id:"step-1-setup-redis-enterprise-cluster"},"Step 1. Setup Redis Enterprise Cluster"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/create/docker/"}),"Follow these steps")," to setup Redis Enterprise cluster nodes"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(1002).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(1003).default})),Object(i.b)("h3",{id:"step-2-install-grafana"},"Step 2. Install Grafana"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," brew install grafana\n")),Object(i.b)("h3",{id:"step-3-install-redis-explorer-app"},"Step 3. Install redis-explorer-app"),Object(i.b)("p",null,"Use the grafana-cli tool to install from the command line:\nRedis Application plugin and Redis Data Source will be auto-installed as dependencies."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," grafana-cli plugins install redis-explorer-app\n")),Object(i.b)("h3",{id:"step-4-using-docker"},"Step 4. Using Docker"),Object(i.b)("p",null,"You can even run Redis Explorer plugin using Docker"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' docker run -p 3000:3000 --name=grafana -e "GF_INSTALL_PLUGINS=redis-explorer-app" grafana/grafana\n')),Object(i.b)("p",null,"Open https://IP:3000 to access grafana. The default username/password is admin/admin."),Object(i.b)("h3",{id:"step-5-log-in-to-grafana"},"Step 5. Log in to Grafana"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(1004).default})),Object(i.b)("h3",{id:"step-6-choose-redis-explorer-in-the-sidebar"},"Step 6. Choose Redis Explorer in the sidebar"),Object(i.b)("p",null,"Once you add the datasource, you should be able to choose the right option"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(1005).default})),Object(i.b)("h3",{id:"step-7-getting-the-redis-enterprise-cluster-overview"},"Step 7. Getting the Redis Enterprise Cluster Overview"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(1006).default})),Object(i.b)("h3",{id:"step-8-displaying-the-redis-enterprise-cluster-nodes"},"Step 8. Displaying the Redis Enterprise Cluster Nodes"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(1007).default})),Object(i.b)("h3",{id:"further-references"},"Further References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://grafana.com/grafana/plugins/redis-explorer-app/"}),"Redis Explorer plugin for Grafana")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redisgrafana.github.io/quickstart/"}),"Redis Plugins for Grafana Quickstart Guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.com/blog/how-to-use-the-new-redis-data-source-for-grafana-plug-in/"}),"Introducing the Redis Data Source Plug-in for Grafana")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.com/blog/how-to-use-the-new-redis-data-source-for-grafana-plug-in/"}),"How to Use the New Redis Data Source for Grafana Plug-in")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.com/blog/3-real-life-apps-built-with-redis-data-source-for-grafana/"}),"3 Real-Life Apps Built with Redis Data Source for Grafana")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://grafana.com/go/observabilitycon/real-time-observability-with-redis-and-grafana/"}),"Real-time observability with Redis and Grafana"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},395:function(e,t,a){"use strict";var r=a(0),s=a.n(r),i=a(393),n=a(400);a(394),a(59);t.a=function(e){var t=s.a.useState(!1),a=t[0],r=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return r(!a)}})))),a&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(i.a,{components:n.a},e.children)))}},396:function(e,t,a){"use strict";var r=a(0),s=a(397);t.a=function(){var e=Object(r.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},397:function(e,t,a){"use strict";var r=a(0),s=Object(r.createContext)(void 0);t.a=s},398:function(e,t,a){"use strict";var r=a(0),s=a.n(r),i=a(396),n=a(402),l=a(60),d=a.n(l),o=37,c=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,b=e.groupId,p=e.className,f=Object(i.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,g=Object(r.useState)(l),O=g[0],j=g[1],v=r.Children.toArray(e.children);if(null!=b){var x=m[b];null!=x&&x!==O&&u.some((function(e){return e.value===x}))&&j(x)}var E=function(e){j(e),null!=b&&h(b,e)},N=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":a},p)},u.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(n.a)("tabs__item",d.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case c:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},a)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},399:function(e,t,a){"use strict";var r=a(3),s=a(0),i=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:a,className:s}),t)}},997:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisexplorer-2afa0f54b25496db38906b8a54d20c4d.png"},998:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/enterprise_cluster_dashboard-719d8eb56faae6b43986a74d8b024e62.png"},999:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster_overview_dashboard-a9aaaae7b1e9e5cee24b35c69af2057b.png"}}]);