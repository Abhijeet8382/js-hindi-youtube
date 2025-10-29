 // for  of 

 const arr  = [1,2,3,4,5]


  // node Controlflow/5higherloop.js
 for (const num of arr) {
      // console.log(num);    
 }
    const greeting = "hellow world"
 for (const greet  of greeting) {
      // console.log(greet);    
 }


  // maps 

   const map = new Map()
   map.set('In', "India")
   map.set('USA', "united state")
   map.set('Fr', " france")
   map.set('In', "India") // maps store only unique value

   //console.log(map);
   

   for (const [key,value] of map) {
      //console.log(key);
      //console.log(key, ':-' , value);
      
   }


      // object 
   const moobj = {   // not iteratable
    'game1' : 'NFS',
    'game2' : 'spiderman'
   }


   const myobject ={
      js : 'javascript',
      cpp: 'c++',
      rb:  "ruby",
      swift: " swift by apple"
   }

   for (const key in myobject) {
      //console.log(`${key} shortcut is for ${myobject[key]}`);
      
   }


   const programming = ["js" , "rb" ,"py" ,"c"]

   for (const key in programming) {
      console.log(key);
      
   }

   // forin is not iteraible in map