//node 1basics/14scope.js

// var c=10;

// blockscope
let a=300;
if(true){
     let a=10;
     const b=20;
     var c=30;
     console.log("inner :" ,a);
     
}

//console.log(a);
//console.log(b);
//console.log(c);



function one(){

    const username = "abhijeet"

     function two(){
          const website = "youtube"
           console.log(username);
            }
          //  console.log(website);
            two()           
}

//one()


if (true) {
    const username="abhijeet";
    if(username==="abhijeet"){
        const website = " youtube";
        console.log(username + website);
        
    }
     //console.log(website); 
}
//console.log(username);


///++++++++++++++ interesting 

//addone(5) can be access from here also
function addone(num){
    return num+1 
}

addone(5)

//addTwo(5)  cannot be access from here 
const addTwo = function(num){  // expression
     return num+2
}

addTwo(5)