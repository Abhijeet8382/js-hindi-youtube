// Dates 

// node 1basics/8dateandtimeindepth.js

let myDates = new Date()  
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());

// console.log(typeof(myDates)); // it is object

// let myCreatedDates = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDates.toLocaleString());

let myCreatedDates = new Date("01-14-2023")
// console.log(myCreatedDates.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDates.getTime());  //important  into milisecond

// console.log(Math.floor(Date.now()/1000)); // to convert in seconds

let newdate = new Date()

// console.log(newdate);
// console.log(newdate.getDay);
// console.log(newdate.getMonth);


// $$$  {newdate.getDay()} and the time 
newdate.toLocaleString('default',{
   weekday: "long",
   timeZone:''
})













