 //singleton 
 // object literals

//  Object.create  ye constructor wla method h isko  bad me dekhenge  
 

const mySym=Symbol("key1")

const jsUser={
    name: "gyanendra ",
    "full name": "gyanendra Singh",
   [ mySym]: "mykey1",
    age: 18 ,
    location: "jaipur",
    email: "gyan@google.com",
    islogged:false,
    lastlogindays: ["Monday","saturday"]

 }

 console.log(jsUser.email)
 console.log(jsUser["email"])
 console.log(jsUser["full name"])
 console.log(jsUser[mySym])

 jsUser.email="gyanendra@chatgpt.com"
//  Object.freeze(jsUser)// cannot chanhe now 
 jsUser.email="gyanendra@microsoft.com";
 console.log(jsUser)

 jsUser.greeting=function()
 {
    console.log("hello Js user");
 }
 jsUser.greetingTwo=function()
 {
    console.log(`hello Js user,${this.name}`);
 }
 console.log(jsUser.greetingTwo());