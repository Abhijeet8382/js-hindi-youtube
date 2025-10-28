 // for loop 

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);   
// }

// node Controlflow/4loop.js

// for (let i = 0; i < 10; i++) {
//      console.log(`outer loop value: ${i}`);
//      for(let j=0; j<=10; j++){
//         console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//      }
// }

 let myArray = ["flash" , "batman" , "superman"]
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
 }
 // break and continue

//  for (let index = 0; index < 20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//        break;  
//     }
//     console.log(`value of i id ${index}`);
    
//  }
//  for (let index = 0; index < 20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//        continue;  
//     }
//     console.log(`value of i id ${index}`);
    
//  }


   // while loop
    let index =0;
   while (index<=10) {
      console.log(`value of the index is ${index}`);
      index = index+2
   }

   // do while loop
   let score =1
   do{
      console.log(`scoreis ${score}`); 
      score ++; 
   } while(score<=10)