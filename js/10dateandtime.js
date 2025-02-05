//dates 
// let mydate=new Date();
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())
// //intervie question 
// console.log(typeof(mydate))

// let mycreatedate=new Date(2025,1,5)
// let mycreatedate=new Date(2025,1,5,8,3)
let mycreatedate=new Date("2025-02-05")

// console.log(mycreatedate.toLocaleString());


let mytimestamp= Date.now()
// console.log(mytimestamp)
// console.log(mycreatedate.getTime())

//convert in second 
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

//`${newdate.getDay()} and the time `



newDate.toLocaleString('default',{ weekday: "long"})
