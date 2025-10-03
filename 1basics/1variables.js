const accountId = 14478
let accountEmail="abhijeet@gmail.com"
var accountPassword = "12345"
accountCity ="Jaipur"
let accountState   // undefined

// accountId = 2  not allowed
// console.log(accountId);
accountEmail = "a@gmail.com"
accountPassword="1234"
accountCity="noida"

/*
prefer not use var
because of issue in block  scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
