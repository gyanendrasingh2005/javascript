
// most imp for interview 

// javascript execution context
// javascript is a single threaded 
// global execution context
// function execution context
// eval execution 

// [{}]-> memory creation phase  
// only space allocated for the variable 

//  executin phase 

let val1=10
let val2=5
function addNUm(num1,num2)
{
    let total=num1+num2
    return total
}
let result1=addNUm(val1,val2);
let result2=addNum(10,2);
// code is run through global exe using this 
// memory creation phase 
// val1->undefined 
//  val2 ->undefined 
// addNUm ke under jati hai o hai definition 
//  result1->undefoned
// result2-> undefined 

// execution 
//  val1=10
// val2=5
// addNUm

// |    |
// |    |
// |    |
// |    |
// | ___|
//  lifo concept in the stack
 



