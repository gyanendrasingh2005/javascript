// array

// different types of element can be strored 
// const myarr=[0,1,2,3,4,5,6,"gyanendra"]

// it is resizable 
const myarr=[0,1,2,3,4,5]
// console.log(myarr[0])
// shallow copy means changes reflect in orignal things and 
// deep copy means changes do not reflect in original things 
 const myheros=["ironman,captainameica ,hulk, thor"]
//  console.log(myheros[0])


//array methods 
// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(9)
// myarr.shift()
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3))
// console.log(myarr)


// converted to strig 
// const newarr=myarr.join();
// console.log(myarr);
// console.log(newarr);



//  slice and splice 
console.log("A",myarr);

const myn1=myarr.slice(1,3)

console.log(myn1);
console.log("B",myarr)  

const myn2=myarr.splice(1,3);
console.log("C",myarr);
console.log(myn2);
// slice does not manuplate the original arrya while 
// splice  manipulte the original array
