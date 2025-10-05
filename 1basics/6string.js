const name ="abhijeet"
const repocount = 50

// console.log(name + repocount + "value");

// node 1basics/5string.js


// prefer
// console.log(`hello my name is ${name} and my repo count is ${repocount}`); //important 

//another string declaration

const gameName = new String ('helloj-hc-com')

// console.log(gameName[0]);

// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newStirngOne = "   abhijeet   ";
  console.log(newStirngOne)
  console.log(newStirngOne.trim());
  const url = "https://abhijeet.com/abhijeet%20singh"
  url.replace('%20','-')
  console.log(url.replace('%20','-'));
  console.log(url.includes('abhijeet')); // it is available in url or not 
  
console.log(gameName.split('-')); // convert gameName ito array

