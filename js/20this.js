// const user={
//     username:"gyanendra",
//     price:999,
//     welcomeMessage:function()
//     {
//         // this keyword is used to refer cirrent context 
//         console.log(`${this.username},welcome to website`)
//         // console.log(this)
//     }

// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)


// function chai()
// {
//     let username="gyanendra"
//     console.log(this.username)
// }
// function ke andar ye kam nhi akrenge kevel object ke andar kaam karega


//  const chai=function chai()
// {
//     let username="gyanendra"
//     console.log(this.username)
// }
// chai()



const chai=()=> 
{
    let username="gyanendra"// 
    console.log(this.username)
}


// agatr curly braces use kiye to return likna padega aur agar small braces likhoge to no return type 

// const addtwo=(num1,num2)=> (num1+num2)

const addtwo=(num1,num2)=> ({username:"gyanendra"})
console.log(add(3,4))


// const myarray=[2,3,4,5,6]
// myarray.forEach(()=>{})
