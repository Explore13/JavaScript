// Singleton
// Object.create --- Constructor Method

// object literals


const JsUser = {
    name : "Surya Ghosh",
    "full name": "Explorer",
    age : 20,
    location : "Kolkata",
    email : "surya@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monaday","Sunday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser."full name"); // wrong
console.log(JsUser["full name"]);

JsUser.email = "surya200@gmail.com"; // change the value
console.log(JsUser.email);

// Object.freeze(JsUser); // object is freezed, no changes happend after that
// JsUser.email="surya72377238@gmail.com";
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello Js user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // Hello Js user
console.log(JsUser.greetingTwo());