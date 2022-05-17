(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(393)),o=(n(394),{id:"index-initial-tuning",title:"1.5 Initial Tuning",sidebar_label:"1.5 Initial Tuning",slug:"/operate/redis-at-scale/talking-to-redis/initial-tuning",isEditable:!1}),s={unversionedId:"operate/redis-at-scale/talking-to-redis/initial-tuning/index-initial-tuning",id:"operate/redis-at-scale/talking-to-redis/initial-tuning/index-initial-tuning",isDocsHomePage:!1,title:"1.5 Initial Tuning",description:"We love Redis because it\u2019s fast (and fun!), so as we begin to consider scaling out Redis, we first want to make sure we've done everything we can to maximize its performance.",source:"@site/docs/operate/redis-at-scale/talking-to-redis/initial-tuning/index-initial-tuning.mdx",slug:"/operate/redis-at-scale/talking-to-redis/initial-tuning",permalink:"/operate/redis-at-scale/talking-to-redis/initial-tuning",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/redis-at-scale/talking-to-redis/initial-tuning/index-initial-tuning.mdx",version:"current",lastUpdatedAt:1652821384,sidebar_label:"1.5 Initial Tuning",sidebar:"docs",previous:{title:"1.4 Client Performance Improvements",permalink:"/operate/redis-at-scale/talking-to-redis/client-performance-improvements"},next:{title:"2.0 Introduction to Persistence and Durability",permalink:"/operate/redis-at-scale/persistence-and-durability/introduction"}},c=[{value:"Max Clients",id:"max-clients",children:[]},{value:"Max Memory",id:"max-memory",children:[]},{value:"Set TCP-BACKLOG",id:"set-tcp-backlog",children:[]},{value:"Set Read Replica Configurations",id:"set-read-replica-configurations",children:[]},{value:"Kernel Memory",id:"kernel-memory",children:[]},{value:"Kernel Network Stack",id:"kernel-network-stack",children:[]},{value:"File Descriptor Limits",id:"file-descriptor-limits",children:[]},{value:"Enabling RPS (Receive Packet Steering) and CPU preferences",id:"enabling-rps-receive-packet-steering-and-cpu-preferences",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We love Redis because it\u2019s fast (and fun!), so as we begin to consider scaling out Redis, we first want to make sure we've done everything we can to maximize its performance."),Object(r.b)("p",null,"Let's start by looking at some important tuning parameters."),Object(r.b)("h2",{id:"max-clients"},"Max Clients"),Object(r.b)("p",null,"Redis has a default of max of 10,000 clients; after that maximum has been reached, Redis will respond to all new connections with an error. If you have a lot of connections (or a lot of application instances), then you may need to go higher. You can set the max number of simultaneous clients in the Redis config file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"maxclients 20000\n")),Object(r.b)("h2",{id:"max-memory"},"Max Memory"),Object(r.b)("p",null,"By default, Redis has no max memory limit, so it will use all available system memory. If you are using replication, you will want to limit the memory usage in order to have overhead for replica output buffers. It\u2019s also a good idea to leave memory for the system. Something like 25% overhead. You can update this setting in Redis config file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"# memory size in bytes  \nmaxmemory 1288490188\n")),Object(r.b)("h2",{id:"set-tcp-backlog"},"Set TCP-BACKLOG"),Object(r.b)("p",null,"The Redis server uses the value of ",Object(r.b)("inlineCode",{parentName:"p"},"tcp-backlog")," to specify the size of the complete connection queue."),Object(r.b)("p",null,"Redis passes this configuration as the second parameter of the ",Object(r.b)("inlineCode",{parentName:"p"},"listen(int s, int backlog)")," call."),Object(r.b)("p",null,"If you have many connections, you will need to set this higher than the default of 511. You can update this in Redis config file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"# TCP listen() backlog. \n# \n# In high requests-per-second environments you need an high backlog in order \n# to avoid slow clients connections issues. Note that the Linux kernel \n# will silently truncate it to the value of /proc/sys/net/core/somaxconn so \n# make sure to raise both the value of somaxconn and tcp_max_syn_backlog \n# in order to get the desired effect.\ntcp-backlog 65536\n")),Object(r.b)("p",null,"As the comment in ",Object(r.b)("inlineCode",{parentName:"p"},"redis.conf")," indicates, the value of ",Object(r.b)("inlineCode",{parentName:"p"},"somaxconn")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tcp_max_syn_backlog")," may need to be increased at the OS level as well."),Object(r.b)("h2",{id:"set-read-replica-configurations"},"Set Read Replica Configurations"),Object(r.b)("p",null,"One simple way to scale Redis is to add read replicas and take load off of the primary. This is most effective when you have a read-heavy (as opposed to write-heavy) workload. You will probably want to have the replica available and still serving stale data, even if the replication is not completed. You can update this in the Redis config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"slave-serve-stale-data yes\n")),Object(r.b)("p",null,"You will also want to prevent any writes from happening on the replicas. You can update this in the Redis config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"slave-read-only yes\n")),Object(r.b)("h2",{id:"kernel-memory"},"Kernel Memory"),Object(r.b)("p",null,"Under high load, occasional performance dips can occur due to memory allocation. This is something Salvatore, the creator of Redis, blogged about in the past. The performance issue is related to transparent hugepages, which you can disable at the OS level if needed."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ echo 'never' > /sys/kernel/mm/transparent_hugepage/enabled\n")),Object(r.b)("h2",{id:"kernel-network-stack"},"Kernel Network Stack"),Object(r.b)("p",null,"If you plan on handling a large number of connections in a high performance environment, we recommend tuning the following kernel parameters:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"vm.swappiness=0                       # turn off swapping\nnet.ipv4.tcp_sack=1                   # enable selective acknowledgements\nnet.ipv4.tcp_timestamps=1             # needed for selective acknowledgements\nnet.ipv4.tcp_window_scaling=1         # scale the network window\nnet.ipv4.tcp_congestion_control=cubic # better congestion algorithm\nnet.ipv4.tcp_syncookies=1             # enable syn cookies\nnet.ipv4.tcp_tw_recycle=1             # recycle sockets quickly\nnet.ipv4.tcp_max_syn_backlog=NUMBER   # backlog setting\nnet.core.somaxconn=NUMBER             # up the number of connections per port\nnet.core.rmem_max=NUMBER              # up the receive buffer size\nnet.core.wmem_max=NUMBER              # up the buffer size for all connections\n")),Object(r.b)("h2",{id:"file-descriptor-limits"},"File Descriptor Limits"),Object(r.b)("p",null,"If you do not set the correct number of file descriptors for the Redis user, you will see errors indicating that \u201cRedis can\u2019t set maximum open files..\u201d You can increase the file descriptor limit at the OS level."),Object(r.b)("p",null,"Here's an example on Ubuntu using systemd:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"/etc/systemd/system/redis.service\n[Service] \n... \nUser=redis \nGroup=redis \n...\nLimitNOFILE=65536 \n...\n")),Object(r.b)("p",null,"You will then need to reload the daemon and restart the redis service."),Object(r.b)("h2",{id:"enabling-rps-receive-packet-steering-and-cpu-preferences"},"Enabling RPS (Receive Packet Steering) and CPU preferences"),Object(r.b)("p",null,"One way we can improve performance is to prevent Redis from running on the same CPUs as those handling any network traffic. This can be accomplished by enabling RPS for our network interfaces and creating some CPU affinity for our Redis process."),Object(r.b)("p",null,"Here is an example. First we can enable RPS on CPUs 0-1:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ echo '3' > /sys/class/net/eth1/queues/rx-0/rps_cpus\n")),Object(r.b)("p",null,"Then we can set the CPU affinity for redis to CPUs 2-8:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"# config is set to write pid to /var/run/redis.pid\n$ taskset -pc 2-8 `cat /var/run/redis.pid`\npid 8946's current affinity list: 0-8\npid 8946's new affinity list: 2-8\n")))}u.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(21),a=n(401);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,s=void 0!==o&&o,c=r.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},401:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);