


// function sayMyName()
// {
//     console.log("G");
// console.log("Y");
// console.log("A");
// console.log("N");

// }
// sayMyName()


// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2) {
//  let result=num1+num2;
//   return result

return num1+num2
}
const result=addTwoNumbers(3, 4);
// console.log("result",result);
function loginusermessage(unsername="gyan")// yeha pe agar kuch nhi pass karenge to gyan ko print kargea agar kuch pass karenge to overwrite kar dega 
{
    if(unsername===undefined)
      {
      console.log("please enter a unsername")
      return 
    }
  return `${unsername}just logged in `
}

console.log(loginusermessage("gyanendra singh "))
