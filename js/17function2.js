// shoppping cards 
// when unknown about the nunmber of argument 


// function calculatecartprice(val1,val2,...num1)
// {
//    return num1;
// }
// console.log(calculatecartprice(200,400,40,500))


function calculatecartprice(...num1)
{
   return num1;
}
// console.log(calculatecartprice(200,400,40))

const user={
   username:"gyan",
   price: 199
}
function handleobject(anyobject)
{
   console.log(`username is ${anyobject.username}and price is ${anyobject.price}`)
}
// handleobject(user)
handleobject({username:"sam ",
   price:399
})


const newarray=[1,2,3,4,4]
function returnsecondvalue(getarray)
{
   return getarray[0]
}
// console.log(returnsecondvalue(newarray))
console.log(returnsecondvalue([1,2,3,4,4]))
