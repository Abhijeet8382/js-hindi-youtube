 //node 1basics/13function.js
 
 function sayMyname() {
 console.log("A");
 console.log("B");
 console.log("H");
 console.log("I");
 console.log("J");
 console.log("E");
 console.log("E");
 console.log("T");
 }

 //sayMyname()

//  function addTwonumber(number1, number2){
//      console.log( number1 + number2);
//  }


 // when addTwonumber store result
 function addTwonumber(number1, number2){
    let Result =number1+number2
    return Result
    console.log("abhijeet"); // will not work after the return
    // or return number1+number2
 }


//addTwonumber(2,3)
//addTwonumber(2,"3")
const Result = addTwonumber(3,5)
 
// console.log("Result :" , Result);

 function loginUserMessage(username){
     if(!username) { //!username= username === undefined
     console.log("please enter a username");
     return 
  }
    return `${username} just logged in`
 }

//console.log( loginUserMessage("abhijeet"));
// console.log( loginUserMessage()); // undefined just logged in


// function calculateCarPrice(...num1){ // ... res operator
//    return num1
// }

// console.log(calculateCarPrice(200,440,500));

function calculateCarPrice(val1,val2,...num1){ // important
   return num1
}

console.log(calculateCarPrice(200,440,500,2000));


const user={
    username:"abhijeet",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user)

// handleObject(
//     {
//         username:"sam",
//         price: 400
//     }
// )


const myNewarray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewarray));

console.log(returnSecondValue([200, 400, 500, 1000]));
