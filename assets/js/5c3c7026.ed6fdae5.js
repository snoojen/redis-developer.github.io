"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=i,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var d=2;d<s;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const s={id:"index-usingdotnet",title:"Processing Time Series data with Redis and .NET",sidebar_label:"Using RedisTimeSeries with .NET",slug:"/howtos/redistimeseries/using-dotnet",authors:["steve"]},a=void 0,o={unversionedId:"howtos/redistimeseries/using-dotnet/index-usingdotnet",id:"howtos/redistimeseries/using-dotnet/index-usingdotnet",title:"Processing Time Series data with Redis and .NET",description:"Time Series data can be used to measure anything from remote sensor readings to stock market feeds. Working with time series data in .NET is a snap with Redis and NRedisTimeSeries. In this tutorial, we'll explore how to use them together.",source:"@site/docs/howtos/redistimeseries/using-dotnet/index.md",sourceDirName:"howtos/redistimeseries/using-dotnet",slug:"/howtos/redistimeseries/using-dotnet",permalink:"/howtos/redistimeseries/using-dotnet",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/using-dotnet/index.md",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-usingdotnet",title:"Processing Time Series data with Redis and .NET",sidebar_label:"Using RedisTimeSeries with .NET",slug:"/howtos/redistimeseries/using-dotnet",authors:["steve"]},sidebar:"docs",previous:{title:"RedisTimeSeries and Python",permalink:"/howtos/redistimeseries/using-python"},next:{title:"RedisTimeSeries and Go",permalink:"/howtos/redistimeseries/using-go"}},l={},d=[{value:"Create your Project",id:"create-your-project",level:2},{value:"Get a RedisTimeSeries Database",id:"get-a-redistimeseries-database",level:2},{value:"Connecting to Redis",id:"connecting-to-redis",level:2},{value:"Create a Time Series",id:"create-a-time-series",level:2},{value:"Producer Task",id:"producer-task",level:2},{value:"Consumer Task",id:"consumer-task",level:2},{value:"Run the App",id:"run-the-app",level:2},{value:"Run Aggregations in the Time Series",id:"run-aggregations-in-the-time-series",level:2},{value:"Create Rules to Store Aggregations",id:"create-rules-to-store-aggregations",level:3},{value:"Process Results from Aggregations",id:"process-results-from-aggregations",level:3},{value:"Resources",id:"resources",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Time Series data can be used to measure anything from remote sensor readings to stock market feeds. Working with time series data in .NET is a snap with Redis and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RedisTimeSeries/NRedisTimeSeries"},"NRedisTimeSeries"),". In this tutorial, we'll explore how to use them together."),(0,i.kt)("h2",{id:"create-your-project"},"Create your Project"),(0,i.kt)("p",null,"Start out by creating a project with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new console -n TimeSeriesDemoApp\n")),(0,i.kt)("p",null,"Next, inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeSeriesDemoApp")," directory, run the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package NRedisTimeSeries\n")),(0,i.kt)("h2",{id:"get-a-redistimeseries-database"},"Get a RedisTimeSeries Database"),(0,i.kt)("p",null,"The next step is to get a RedisTimeSeries database up and running. The easiest way to do that for development purposes is to use Docker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -p 6379:63379 redis/redis-stack-server:latest\n")),(0,i.kt)("p",null,"If you are well past getting started and want to get something into your production, your best bet is to run it in ",(0,i.kt)("a",{parentName:"p",href:"/howtos/redistimeseries/getting-started"},"Redis Enterprise"),"."),(0,i.kt)("h2",{id:"connecting-to-redis"},"Connecting to Redis"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," file, in here, create a new ConnectionMultiplexer using a connection string (which will vary based on what deployment you're using). Then, for our basic Docker setup, you'll just run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var muxer = ConnectionMultiplexer.Connect("localhost");\nvar db = muxer.GetDatabase();\n')),(0,i.kt)("h2",{id:"create-a-time-series"},"Create a Time Series"),(0,i.kt)("p",null,"Now that you've gotten a handle to Redis, your next step is to initialize a time series. This will be a bit of a toy example. We are going to start off by just creating a time series called ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor"),", we will set its retention period to 1 minute, and we just give it an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," label of ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor-1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await db.TimeSeriesCreateAsync("sensor", 60000, new List<TimeSeriesLabel>{new TimeSeriesLabel("id", "sensor-1")});\n')),(0,i.kt)("h2",{id:"producer-task"},"Producer Task"),(0,i.kt)("p",null,"Next, we'll create a task that will run a consumer in the background. Every second it will send a random integer between 1 and 50 into our time series."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var producerTask = Task.Run(async()=>{\n    while(true)\n    {\n        await db.TimeSeriesAddAsync("sensor", "*", Random.Shared.Next(50));\n        await Task.Delay(1000);\n    }\n});\n')),(0,i.kt)("h2",{id:"consumer-task"},"Consumer Task"),(0,i.kt)("p",null,"With the Producer created, we'll create a consumer loop that will do the opposite. Every second it will pull the most recent item in the time series off and print it out."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var consumerTask = Task.Run(async()=>{\n    while(true)\n    {\n        await Task.Delay(1000);\n        var result = await db.TimeSeriesGetAsync("sensor");\n        Console.WriteLine($"{result.Time.Value}: {result.Val}");\n    }\n});\n\nawait Task.WhenAll(producerTask, consumerTask);\n')),(0,i.kt)("h2",{id:"run-the-app"},"Run the App"),(0,i.kt)("p",null,"Now that we produce and consume data run the app with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run"),". This will run a continuous loop in the time series as it continually produces and consumes data points."),(0,i.kt)("h2",{id:"run-aggregations-in-the-time-series"},"Run Aggregations in the Time Series"),(0,i.kt)("p",null,"Now what we've done so far is produce a time series of random integer data for our .NET app to consume. What if we wanted to do something a bit more interesting with it, though? Let's say we wanted to calculate a moving average every 5 seconds. We can do that with ease using Redis TimeSeries."),(0,i.kt)("h3",{id:"create-rules-to-store-aggregations"},"Create Rules to Store Aggregations"),(0,i.kt)("p",null,"Let's run min, max, and average every 5 seconds on our Time Series. Redis will do this passively in the background after we set up some keys to store them in and set up the rules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var aggregations = new TsAggregation[]{TsAggregation.Avg, TsAggregation.Min, TsAggregation.Max};\nforeach(var agg in aggregations)\n{\n    await db.TimeSeriesCreateAsync($"sensor:{agg}", 60000, new List<TimeSeriesLabel>{new ("type", agg.ToString()), new("aggregation-for", "sensor-1")});\n    await(db.TimeSeriesCreateRuleAsync("sensor", new TimeSeriesRule($"sensor:{agg}", 5000, agg)));\n}\n')),(0,i.kt)("h3",{id:"process-results-from-aggregations"},"Process Results from Aggregations"),(0,i.kt)("p",null,"With the rules established, we can consume the relevant time series to get the results. When we were creating the time series for our aggregations, we added a label to all of them: ",(0,i.kt)("inlineCode",{parentName:"p"},'new TimeSeriesLabel("aggregation-for", "sensor-1")'),". We essentially told Redis that this time series would be an aggregation for ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor-1"),". We can then use that label to find just the time series aggregations of ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor-1"),". With this in mind, we can grab all the sensor aggregations in one command to Redis using ",(0,i.kt)("inlineCode",{parentName:"p"},"MGET"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var aggregationConsumerTask = Task.Run(async()=>\n{\n    while(true)\n    {\n        await Task.Delay(5000);\n        var results = await db.TimeSeriesMGetAsync(new List<string>(){"aggregation-for=sensor-1"}, true);\n        foreach(var result in results)\n        {\n            Console.WriteLine($"{result.labels.First(x=>x.Key == "type").Value}: {result.value.Val}");\n        }\n\n    }\n});\n')),(0,i.kt)("p",null,"With all these sets, you can now just update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task.WhenAll")," call at the end to include the new consumer task:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await Task.WhenAll(producerTask, consumerTask, aggregationConsumerTask);\n")),(0,i.kt)("p",null,"When we run the application with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run"),", you will see that the application will also print out the average, min, and max for the last 5 seconds of the time series, in addition to the regular ticks of the time series."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Source Code for this demo is located in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redis-time-series-demo-dotnet"},"GitHub")),(0,i.kt)("li",{parentName:"ul"},"The source code for NRedisTimeSeries is also located in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/redistimeseries/nredistimeseries"},"GitHub")),(0,i.kt)("li",{parentName:"ul"},"More information about Redis Time Series can be found at ",(0,i.kt)("a",{parentName:"li",href:"https://redistimeseries.io/"},"redistimeseries.io"))))}p.isMDXComponent=!0}}]);