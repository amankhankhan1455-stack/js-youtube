


const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "amaan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.isLoggedIn);
//console.log(JsUser["email"])
//console.log(JsUser.email);
//console.log(JsUser[mySym]);

//console.log(JsUser);
JsUser.email =  "amankhan@gmail.com"
//console.log(JsUser);
//Object.freeze(JsUser);
JsUser.email = "amankhankhan23@gmail.com"

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo= function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greetingsTWO);


console.log(JsUser.greeting);
