const accountId=144553  //ye change nhi hoga kabhi bhi 
let accountEmail="gyan123@gmail.com"  //
var accountpassword="12345"
accountCity="jainpur"
let accountstate;

// accountId=2 not allowed 
accountEmail="hc@hc.com"
accountpassword="1223424"
accountCity="benguluru"
console.log(accountId);
console.table([accountId,accountpassword,accountCity,accountpassword,accountstate])
// hm var nhi use karte hai  kuki  initially js me scope ka problem tha 
// let ne scope ki problem ko hata diya 
/*
prefer not to use var becaue of issue in block scope and funtional scope 
*/