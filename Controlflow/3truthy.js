const userEmail = " abhijeet@gmail.com"

if(userEmail){
    console.log('got usser email');
    
} else {
    console.log("dont't have user email");
    
}

// falsy values 
//false ,0,-0,  BigInt 0n, "" ,null , undefined ,NaN

// truthy values 
//"0" ,"false" ," ",[],{}, functio()

if(userEmail.length==0){
      console.log("Array is empty");
      
}

const emptyobj = {}
if (Object.keys(emptyobj).length==0) {
  console.log("object is empty");
     
}

// false ==''  value will be true
 // 0==''  value will be true


 // Nullish coalescing operator  (??) : null undefined

 let val1;
 //val1 = 5 ?? 10
 //val1 = NULL ?? 10
// val1 =  undefined ?? 15

 console.log(val1);
 

 // Terniary operator

 // condition ? true : false 

 const toyPrice = 500

 toyPrice <= 400 ? console.log("less than 500") : console.log("more than 500");
 
 //node Controlflow/3truthy.js
 