const user = {
    username:"abhijeet" , 
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
         console.log(this);
          
    }

}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()


//console.log(this);  // important

// function sutta(){
//     let username ="abhijeet"
//       //console.log(this);
//       console.log(this.username);  // undefined
      
      
// }
//sutta();

// const chai = () =>{
//     let username =" abhijeet";
//     console.log(this.username);    
// }
// chai()



   //// +++++++   Arrow function

//    const addTwo = (num1,num2) =>{
//      return num1+num2
//    }

   // or
   // implicit return 

//    const addTwo = (num1,num2) =>   (num1+num2)

    const addTwo = (num1,num2) =>   ({username: "abhijeet"})  // object must be closed in parentheses
   
   console.log(addTwo(3,4));


   
   