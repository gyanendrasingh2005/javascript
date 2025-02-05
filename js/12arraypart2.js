const marvel=["thor","ironman","spiderman"]
const dc=["suoerman","flash","batman"]
// marvel.push(dc);
// console.log(marvel)

//concat gives us new array while push push in that array 
//  const allhero=marvel.concat(dc)
// console.log(allhero);


// // // spread  
// const allhero = [...marvel, ...dc]
// console.log(allhero)



// const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log(anotherarray)
// const anotherreal=anotherarray.flat(Infinity)
// console.log(anotherreal)

// console.log(Array.isArray("gyanendra "))
// console.log(Array.from("gyanendra "))
console.log(Array.from({name:"gyanendra"}))// interseting 


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))