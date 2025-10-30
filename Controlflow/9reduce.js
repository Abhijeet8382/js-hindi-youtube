const myNums = [1,2,3]
 // node Controlflow/9reduce.js


// const myTotal = myNums.reduce(function (acc,currval){
//      console.log(`acc : ${acc} and currval : ${currval}`);
     
//      return acc + currval
// }, 0)

const myTotal=myNums.reduce( (acc,curr) => acc+curr, 0)
//console.log(myTotal);

const shoopingcurt = [
      {
         itemname : "jscourse" ,
         price : 999 
      },
      {
         itemname : "mobile dev" ,
         price : 2999 
      },
      {
         itemname : "pycorse" ,
         price : 1999 
      }
]

const pricetoPay = shoopingcurt.reduce((acc,item) => acc + item.price , 0)

console.log(pricetoPay);
