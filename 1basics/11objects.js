// singleton 
// object.create
// objects literals ->

const Mysym = Symbol("key1")

const JsUser ={
    name: "abhijeet",
    "Full name" : "abhijeet Singh",
    [Mysym]:"mykey",
    age: 22 ,
    email: "abhijeet@gmail.com" ,
    isLoggedIn: false,
    lasrLoggedIn:["Monday , Tuesday"]
}

// two ways to access 
// console.log(JsUser.email); // 1 way
// console.log(JsUser["email"]);  // 2nd way
// console.log(JsUser["Full name"]);
// console.log(JsUser[Mysym]); // symbol

JsUser.email = "abhijeet444@gmail.com" //change the eamil
// Object.freeze(JsUser) // now nothing will change 

JsUser.email = "abhijeetmicrosoft@gmail.com" // will not change

// console.log(JsUser);


JsUser.greetingOne = function(){
    console.log("hello JS user"); 
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user , ${this.name}`); 
}
console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());