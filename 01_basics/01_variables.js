const accountId = 144553
let accountEmail = "utsav0109@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 (not allowed)

accountEmail = "hudh@gmail.com"
accountPassword ="2333"
accountCity = "kolkata"

console.log(accountId);

/*
Prefer not to use var 
because of issue in blovk scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])