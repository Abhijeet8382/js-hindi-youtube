// stack (primitive)  // copy banta hai
// and heap(nonprimitive) // refernce of original value so changes happen in orginal values 

let myYoutubename = "abhijeetsingh"

let anotherName = myYoutubename

anotherName="mewithme"

console.log(myYoutubename);
console.log(anotherName);

let userOne ={
     email: "user@google.com",
     upi:  "user@ybl"
}
 
let userTwo = userOne

userTwo.email=  "abhijeet@gmali.com"

console.log(userOne.email);
console.log(userTwo.email);





