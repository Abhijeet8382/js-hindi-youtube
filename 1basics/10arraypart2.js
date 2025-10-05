const marvelHeroes =["thor" , "ironman" , "spiderman" ]
const dcHeroes = ["superman" , " flash" ,"batman"]

//node 1basics/10arraypart2.js

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);

// console.log(marvelHeroes[3][0]);

const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const allnewheros =[...marvelHeroes , ...dcHeroes]

// console.log(allnewheros);


const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherarray = anotherarray.flat(Infinity)

// console.log(realAnotherarray);

// console.log(Array.isArray("abhijeet"))

// console.log(Array.from("abhijeet"))

console.log(Array.from({name:"abhijeet"}));  //important 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
