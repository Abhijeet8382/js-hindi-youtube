// Immediately Invoked Function Epressions (IIFE)


(function hi(){
    // named IIFE
      console.log(`DB CoNNECTED`);      
})();   // this semicolon is important to write next IIFE

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`hitesh`)

