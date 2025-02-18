//nested scope 
function one ()
{
    const username="gyan"
    function two ()
    {
        const website ="youtube"
        console.log(username)

    }
    // console.log(website) ;
    two()

}
// one()
if(true)
{
    const username="Gyanendra "
    if(username=="gyanendra")
    {
        const website="youtube"
        console.log(username+website);
    }

    // console.log(website);


}
// console.log(username);


//++++++++++++++++ intersting+++++++++++++++
function  addone(value)
{
    return num+1
}
addone(5)

// yeha error a jayega 
const addtwo=function(num){
return num+2
}
addtwo(5)