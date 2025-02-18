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



//  const chai=function chai()
// {
//     let username="gyanendra"
//     console.log(this.username)
// }
// chai()



const chai=()=> 
{
    let username="gyanendra"
    console.log(this.username)
}
