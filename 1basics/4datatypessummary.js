// primitive  


// 7 types : string , number,boolean, null ,undefined,symbol,BigInt
const id = Symbol('123')

const anotherId=Symbol('123')

console.log(id==anotherId);



// refernce type (non primitive)

// array, objects , functions 

const heros =["shaktiman","nagraj"] // arrray
let myObj = {
       name : "abhijeet",
       age : 22
} 

const  myFunction = function(){
    console.log("hello world")
}

