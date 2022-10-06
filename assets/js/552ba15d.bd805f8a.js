"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3114],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return c}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return r?t.createElement(h,s(s({ref:n},p),{},{components:r})):t.createElement(h,s({ref:n},p))}));function c(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74731:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),s=(r(44996),["components"]),i={id:"index-lesson_4",title:"User/Roles & Secondary Indexes",sidebar_label:"User Roles & Secondary Indexes",slug:"/develop/java/redis-and-spring-course/lesson_4",authors:["bsb"]},l=void 0,d={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4",id:"develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4",title:"User/Roles & Secondary Indexes",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4.mdx",sourceDirName:"develop/java/spring/redis-and-spring-course/lesson_4",slug:"/develop/java/redis-and-spring-course/lesson_4",permalink:"/develop/java/redis-and-spring-course/lesson_4",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-lesson_4",title:"User/Roles & Secondary Indexes",sidebar_label:"User Roles & Secondary Indexes",slug:"/develop/java/redis-and-spring-course/lesson_4",authors:["bsb"]},sidebar:"docs",previous:{title:"Mapping & Repositories",permalink:"/develop/java/redis-and-spring-course/lesson_3"},next:{title:"Books, Categories & The Catalog",permalink:"/develop/java/redis-and-spring-course/lesson_5"}},p={},u=[{value:"Objectives",id:"objectives",level:3},{value:"Agenda",id:"agenda",level:3},{value:"Loading Users",id:"loading-users",level:3},{value:"User Repository",id:"user-repository",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Password Encoding",id:"password-encoding",level:3},{value:"Secondary Indexes: Finding Roles by Name",id:"secondary-indexes-finding-roles-by-name",level:3},{value:"CreateUsers CommandLineRunner",id:"createusers-commandlinerunner",level:3},{value:"Exploring the loaded Users",id:"exploring-the-loaded-users",level:3},{value:"Building the Redi2Read API",id:"building-the-redi2read-api",level:3}],m={toc:u};function c(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"objectives"},"Objectives"),(0,o.kt)("p",null,"To finish creating the user-role domain, load and transform JSON data, and begin crafting the Redi2Read API."),(0,o.kt)("h3",{id:"agenda"},"Agenda"),(0,o.kt)("p",null,"In this lesson, you'll learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to load JSON data using Jackson."),(0,o.kt)("li",{parentName:"ul"},"How to create and work with secondary indexes"),(0,o.kt)("li",{parentName:"ul"},"How to use the repositories with a REST controller.")),(0,o.kt)("p",null,"If you get stuck:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redi2read/tree/course/milestone-4"},"https://github.com/redis-developer/redi2read/tree/course/milestone-4"))),(0,o.kt)("h3",{id:"loading-users"},"Loading Users"),(0,o.kt)("p",null,"Now that we\u2019ve created the Roles let\u2019s load the ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),"s from the provided JSON data in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources/data/users/users.json"),".\nThe file contains an array of JSON user objects as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "password": "9yNvIO4GLBdboI",\n  "name": "Georgia Spencer",\n  "id": -5035019007718357598,\n  "email": "georgia.spencer@example.com"\n}\n')),(0,o.kt)("p",null,"The JSON fields map exactly to the JavaBean names for our User POJO properties."),(0,o.kt)("h3",{id:"user-repository"},"User Repository"),(0,o.kt)("p",null,"First, we\u2019ll create the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository"),"; just like we did with the ",(0,o.kt)("inlineCode",{parentName:"p"},"RoleRepository"),", we\u2019ll extend ",(0,o.kt)("inlineCode",{parentName:"p"},"CrudRepository"),".\nUnder the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/repositories")," let's create the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository")," interface as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package com.redislabs.edu.redi2read.repositories;\n\nimport com.redislabs.edu.redi2read.models.User;\n\nimport org.springframework.data.repository.CrudRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface UserRepository extends CrudRepository<User, String> {\n  User findFirstByEmail(String email);\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"findFirstByEmail")," method takes advantage of the index we previously created on the email field of the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model.\nThe Spring Repository will provide an implementation of the finder method at runtime.\nWe will use this finder when we tackle our application's security."),(0,o.kt)("p",null,"Let\u2019s create another ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandLineRunner")," under the boot package to load the users. We\u2019ll follow a similar recipe for the Roles,\nexcept that we will load the JSON data from disk and use Jackson (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"https://github.com/FasterXML/jackson"),"),\none of the most popular Java JSON libraries."),(0,o.kt)("p",null,"The recipe to load the user goes as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an input stream from the user\u2019s JSON data file"),(0,o.kt)("li",{parentName:"ol"},"Using Jackson, read the input stream into a collection of users"),(0,o.kt)("li",{parentName:"ol"},"For each user:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Encode the plain text password"),(0,o.kt)("li",{parentName:"ul"},"Add the customer role")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Based on the loading recipe above, there are two things our application can\u2019t currently do that it needs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A way to encode plain text user password"),(0,o.kt)("li",{parentName:"ul"},"A way to find a role by name")),(0,o.kt)("h3",{id:"password-encoding"},"Password Encoding"),(0,o.kt)("p",null,"Our implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"PasswordEncoder")," will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"BCrypt")," strong hashing function. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Redi2readApplication")," class add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic BCryptPasswordEncoder passwordEncoder() {\n  return new BCryptPasswordEncoder();\n}\n")),(0,o.kt)("p",null,"With the corresponding import:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\n")),(0,o.kt)("h3",{id:"secondary-indexes-finding-roles-by-name"},"Secondary Indexes: Finding Roles by Name"),(0,o.kt)("p",null,"As we learned in the previous lesson, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Indexed")," annotation can be used to create a secondary index. Secondary indexes enable lookup operations based on native Redis structures.\nThe index is maintained on every save/update of an indexed object.\nTo add a secondary index to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Role")," model, we\u2019ll simply add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Indexed")," annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Data\n@Builder\n@RedisHash\npublic class Role {\n  @Id\n  private String id;\n\n  @Indexed\n  private String name;\n}\n")),(0,o.kt)("p",null,"Don\u2019t forget to add the corresponding import:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.data.redis.core.index.Indexed;\n")),(0,o.kt)("p",null,"Now when a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Role")," instance is created, with ID as ",(0,o.kt)("inlineCode",{parentName:"p"},'"abc-123"')," and role as ",(0,o.kt)("inlineCode",{parentName:"p"},'"superuser"'),", Spring Data Redis will do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},'"by name"')," index: Created as a Redis Set with the key ",(0,o.kt)("inlineCode",{parentName:"li"},"com.redislabs.edu.redi2read.models.Role:name:superuser")," containing one entry; the id of the indexed object ",(0,o.kt)("inlineCode",{parentName:"li"},'"abc-123"')),(0,o.kt)("li",{parentName:"ol"},"A list of indexes for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Role"),' "superuser": Create a Redis Set with the key ',(0,o.kt)("inlineCode",{parentName:"li"},'"com.redislabs.edu.redi2read.models.Role:abc-123:idx"'),"\ncontaining one entry; the key of the index ",(0,o.kt)("inlineCode",{parentName:"li"},'"com.redislabs.edu.redi2read.models.Role:name:superuser"'))),(0,o.kt)("p",null,"Unfortunately, to index the already created Roles, we\u2019ll need to either retrieve them and resave them or recreate them.\nSince we already have automated the seeding of the Roles and we haven\u2019t yet created any associated objects,\nwe can simply delete them using the Redis CLI and the DEL command and restart the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> KEYS com.redislabs.edu.redi2read.models.Role*\n1) "com.redislabs.edu.redi2read.models.Role:c4219654-0b79-4ee6-b928-cb75909c4464"\n2) "com.redislabs.edu.redi2read.models.Role:9d383baf-35a0-4d20-8296-eedc4bea134a"\n3) "com.redislabs.edu.redi2read.models.Role"\n127.0.0.1:6379> DEL "com.redislabs.edu.redi2read.models.Role:c4219654-0b79-4ee6-b928-cb75909c4464" "com.redislabs.edu.redi2read.models.Role:9d383baf-35a0-4d20-8296-eedc4bea134a" "com.redislabs.edu.redi2read.models.Role"\n(integer) 3\n127.0.0.1:6379>\n')),(0,o.kt)("p",null,"The DEL command takes one or more keys. We\u2019ll pass the three current keys for the Role hashes and the Role key set."),(0,o.kt)("p",null,"With the secondary index on the name for roles created, we can add a finder method to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RoleRepository"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Repository\npublic interface RoleRepository extends CrudRepository<Role, String> {\n  Role findFirstByName(String role);\n}\n")),(0,o.kt)("h3",{id:"createusers-commandlinerunner"},"CreateUsers CommandLineRunner"),(0,o.kt)("p",null,"Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/boot "),"let's create the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateUsers.java")," file with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.redislabs.edu.redi2read.boot;\n\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.util.List;\n\nimport com.fasterxml.jackson.core.type.TypeReference;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.redislabs.edu.redi2read.models.Role;\nimport com.redislabs.edu.redi2read.models.User;\nimport com.redislabs.edu.redi2read.repositories.RoleRepository;\nimport com.redislabs.edu.redi2read.repositories.UserRepository;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\nimport org.springframework.stereotype.Component;\n\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(2)\n@Slf4j\npublic class CreateUsers implements CommandLineRunner {\n\n  @Autowired\n  private RoleRepository roleRepository;\n\n  @Autowired\n  private UserRepository userRepository;\n\n  @Autowired\n  private BCryptPasswordEncoder passwordEncoder;\n\n  @Override\n  public void run(String... args) throws Exception {\n    if (userRepository.count() == 0) {\n      // load the roles\n      Role admin = roleRepository.findFirstByname("admin");\n      Role customer = roleRepository.findFirstByname("customer");\n\n      try {\n        // create a Jackson object mapper\n        ObjectMapper mapper = new ObjectMapper();\n        // create a type definition to convert the array of JSON into a List of Users\n        TypeReference<List<User>> typeReference = new TypeReference<List<User>>() {\n        };\n        // make the JSON data available as an input stream\n        InputStream inputStream = getClass().getResourceAsStream("/data/users/users.json");\n        // convert the JSON to objects\n        List<User> users = mapper.readValue(inputStream, typeReference);\n\n        users.stream().forEach((user) -> {\n          user.setPassword(passwordEncoder.encode(user.getPassword()));\n          user.addRole(customer);\n          userRepository.save(user);\n        });\n        log.info(">>>> " + users.size() + " Users Saved!");\n      } catch (IOException e) {\n        log.info(">>>> Unable to import users: " + e.getMessage());\n      }\n\n      User adminUser = new User();\n      adminUser.setName("Adminus Admistradore");\n      adminUser.setEmail("admin@example.com");\n      adminUser.setPassword(passwordEncoder.encode("Reindeer Flotilla"));//\n      adminUser.addRole(admin);\n\n      userRepository.save(adminUser);\n      log.info(">>>> Loaded User Data and Created users...");\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Let\u2019s break it down:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At the top, we use the ",(0,o.kt)("inlineCode",{parentName:"li"},"@Autowired")," annotation to inject the ",(0,o.kt)("inlineCode",{parentName:"li"},"RoleRepository"),", the ",(0,o.kt)("inlineCode",{parentName:"li"},"UserRepository"),", and the ",(0,o.kt)("inlineCode",{parentName:"li"},"BCryptPasswordEncoder"),"."),(0,o.kt)("li",{parentName:"ul"},"As with the ",(0,o.kt)("inlineCode",{parentName:"li"},"CreateRoles")," ",(0,o.kt)("inlineCode",{parentName:"li"},"CommandLineRunner"),", we only execute the logic if there are no database users."),(0,o.kt)("li",{parentName:"ul"},"We then load the admin and customer roles by using the Repository custom finder method ",(0,o.kt)("inlineCode",{parentName:"li"},"findFirstByName"),"."),(0,o.kt)("li",{parentName:"ul"},"To process the JSON, we create a Jackson ObjectMapper and a TypeReference, which will serve as a recipe for serializing the JSON into Java objects."),(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"getResourceAsStream")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Class")," object, we load the JSON file from the resources directory"),(0,o.kt)("li",{parentName:"ul"},"Then we use the ",(0,o.kt)("inlineCode",{parentName:"li"},"ObjectMapper")," to convert the incoming input stream into a ",(0,o.kt)("inlineCode",{parentName:"li"},"List")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," objects"),(0,o.kt)("li",{parentName:"ul"},"For each user, we encode the password and add the customer role"),(0,o.kt)("li",{parentName:"ul"},"Near the end of the file, we create a single user with the admin role, which we will use in a later Lesson")),(0,o.kt)("p",null,"On application restart, we should now see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"2021-04-03 10:05:04.222  INFO 40386 --- [  restartedMain] c.r.edu.redi2read.Redi2readApplication   : Started Redi2readApplication in 2.192 seconds (JVM running for 2.584)\n2021-04-03 10:05:04.539  INFO 40386 --- [  restartedMain] c.r.edu.redi2read.boot.CreateRoles       : >>>> Created admin and customer roles...\n2021-04-03 10:06:27.292  INFO 40386 --- [  restartedMain] c.r.edu.redi2read.boot.CreateUsers       : >>>> 1000 Users Saved!\n2021-04-03 10:06:27.373  INFO 40386 --- [  restartedMain] c.r.edu.redi2read.boot.CreateUsers       : >>>> Loaded User Data and Created users...\n")),(0,o.kt)("h3",{id:"exploring-the-loaded-users"},"Exploring the loaded Users"),(0,o.kt)("p",null,"If you were watching the Redis CLI in MONITOR mode you probably saw a barrage of the Redis commands executing for the 1001 users we\u2019ve just created.\nLet\u2019s use the CLI to explore the data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> KEYS "com.redislabs.edu.redi2read.models.User"\n1) "com.redislabs.edu.redi2read.models.User"\n127.0.0.1:6379> TYPE "com.redislabs.edu.redi2read.models.User"\nset\n127.0.0.1:6379> SCARD "com.redislabs.edu.redi2read.models.User"\n(integer) 1001\n127.0.0.1:6379> SRANDMEMBER "com.redislabs.edu.redi2read.models.User"\n"-1848761758049653394"\n127.0.0.1:6379> HGETALL "com.redislabs.edu.redi2read.models.User:-1848761758049653394"\n 1) "id"\n 2) "-1848761758049653394"\n 3) "_class"\n 4) "com.redislabs.edu.redi2read.models.User"\n 5) "roles.[0]"\n 6) "com.redislabs.edu.redi2read.models.Role:a9f9609f-c173-4f48-a82d-ca88b0d62d0b"\n 7) "name"\n 8) "Janice Garza"\n 9) "email"\n10) "janice.garza@example.com"\n11) "password"\n12) "$2a$10$/UHTESWIqcl6HZmGpWSUHexNymIgM7rzOsWc4tcgqh6W5OVO4O46."\n')),(0,o.kt)("p",null,"We now have a Redis Set holding the collection of user keys for the Redis Hashes containing user instances.\nWe use the SCARD command to get the set\u2019s cardinality (1001, the 1000 users from the JSON plus the admin user).\nUsing the SRANDMEMBER command, we can pull a random member from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Set"),". We then use that and the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," Hashes prefix to retrieve the data for a random User hash.\nA few things to point out:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user\u2019s set of roles are stored using indexed hash fields (",(0,o.kt)("inlineCode",{parentName:"li"},"roles.[0], roles.[1]"),", etc.) with a value being the key for a given role.\nThis is the result of annotating the Java Set of Role using ",(0,o.kt)("inlineCode",{parentName:"li"},"@Reference")),(0,o.kt)("li",{parentName:"ul"},"The password field is hashed correctly.")),(0,o.kt)("h3",{id:"building-the-redi2read-api"},"Building the Redi2Read API"),(0,o.kt)("p",null,"Now that we have ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"Role"),"s, let\u2019s create an ",(0,o.kt)("inlineCode",{parentName:"p"},"UserController")," to expose some user management functionality."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.redislabs.edu.redi2read.controllers;\n\nimport com.redislabs.edu.redi2read.models.User;\nimport com.redislabs.edu.redi2read.repositories.UserRepository;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n\n  @Autowired\n  private UserRepository userRepository;\n\n  @GetMapping\n  public Iterable<User> all() {\n    return userRepository.findAll();\n  }\n}\n')),(0,o.kt)("p",null,"We can now issue a GET request to retrieve all users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl --location --request GET 'http://localhost:8080/api/users/'\n")),(0,o.kt)("p",null,"The output should be an array of JSON object like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n       "id": "-1180251602608130769",\n       "name": "Denise Powell",\n       "email": "denise.powell@example.com",\n       "password": "$2a$10$pMJjQ2bFAUGlBTX9cHsx/uGrbbl3JZmmiR.vG5xaVwQodQyLaj52a",\n       "passwordConfirm": null,\n       "roles": [\n           {\n               "id": "a9f9609f-c173-4f48-a82d-ca88b0d62d0b",\n               "name": "customer"\n           }\n       ]\n   },\n...\n]\n')),(0,o.kt)("p",null,"Let\u2019s be good RESTful citizens and filter out the ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"passwordConfirm")," fields on the way out.\nTo accomplish this we take advantage of the fact the Jackson is the default serializer in Spring Web which\nmean we can annotate the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@JsonIgnoreProperties")," only allowing setters\n(so that we can load the data) but hiding the getters during serialization as shown next:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@JsonIgnoreProperties(value = { "password", "passwordConfirm" }, allowSetters = true)\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\n@ToString(onlyExplicitlyIncluded = true)\n@Data\n@RedisHash\npublic class User {\n...\n}\n')),(0,o.kt)("p",null,"With the import statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import com.fasterxml.jackson.annotation.JsonIgnoreProperties;\n")),(0,o.kt)("p",null,"Issuing the request again should reflect the changes on the JSON response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "-1180251602608130769",\n        "name": "Denise Powell",\n        "email": "denise.powell@example.com",\n        "roles": [\n            {\n                "id": "a9f9609f-c173-4f48-a82d-ca88b0d62d0b",\n                "name": "customer"\n            }\n        ]\n    },\n...\n]\n')),(0,o.kt)("p",null,"Let\u2019s add one more method to our ",(0,o.kt)("inlineCode",{parentName:"p"},"UserController"),". We\u2019ll add the ability to retrieve a user by its email address,\nwhich will take advantage of the secondary index on email in the User object.\nWe\u2019ll implement it as a filter on the GET root endpoint of the controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' @GetMapping\n public Iterable<User> all(@RequestParam(defaultValue = "") String email) {\n   if (email.isEmpty()) {\n     return userRepository.findAll();\n   } else {\n     Optional<User> user = Optional.ofNullable(userRepository.findFirstByEmail(email));\n     return user.isPresent() ? List.of(user.get()) : Collections.emptyList();\n   }\n }\n')),(0,o.kt)("p",null,"We use a request parameter for the email, and if it is present, we invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"findFirstByEmail")," finder.\nWe wrap the result in a list to match the result type of the method. We use Optional to handle a null\nresult from the finder.\nAnd don\u2019t forget your imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.Collections;\nimport java.util.List;\nimport java.util.Optional;\nimport org.springframework.web.bind.annotation.RequestParam;\n")),(0,o.kt)("p",null,"Invoking the endpoint with curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8080/api/users/?email=donald.gibson@example.com'\n")),(0,o.kt)("p",null,"Returns the expected result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "-1266125356844480724",\n    "name": "Donald Gibson",\n    "email": "donald.gibson@example.com",\n    "roles": [\n      {\n        "id": "a9f9609f-c173-4f48-a82d-ca88b0d62d0b",\n        "name": "customer"\n      }\n    ]\n  }\n]\n')))}c.isMDXComponent=!0}}]);