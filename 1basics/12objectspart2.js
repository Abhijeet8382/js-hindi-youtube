// const tinderUser = new Object() //singleton object 

const tinderUser = {}  //non-singleton object
// console.log(tinderUser);

/// node 1basics/12objectspart2.js

 tinderUser.id= "123abc"
 tinderUser.name="abhijeet"
 tinderUser.isLoggedIn=false

//  console.log(tinderUser);
 
const regularUser= {
    email:"abhijeet@gmail.com",
    fullname:{
        userfullname:{
               firstname:"abhijeet" ,
               lastname:"singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2)
// const obj3 = Object.assign({},obj1 , obj2)

const obj3 = {...obj1, ...obj2}  // usually used
// console.log(obj3);


const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser)); //really important  gives you the datatype
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

const course = {
      coursename:"js in hindi",
      price:"999",
      courseinstructor:"abhijeet"
}

// course.courseinstructor

const {courseinstructor :instructor} = course  // destructure
console.log(instructor);


 ///  api concept

 // json
//  {
//     "name" : "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
//  }

// api that contain different object
[
    {},
    {},
    {}
]