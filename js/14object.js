// const tinderUser=new Object()
const  tinderUser={}
 tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email: "some@gamil.com",
    fullname: 
    {
        userfullname: {
            firstname:"gyan",
            lastname:"singh"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2: "b"}
const obj2={3:"a",4:"b"}
const obj4={3:"a",4:"b"}

// const obj3={obj1,obj2}

// // hum  ek empyt array le lete hai 
// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
// console.log(Obj3);


const users = [
    { /* User 1 object */ },
    {
      id: 1,
      email: "g@gmail.com"
    },
    { /* User 3 object */ }
  ];
  users[1].email
  console.log(tinderUser);
  console.log(Object.keys(tinderUser));
  console.log(Object.values(tinderUser));
  console.log(Object.entries(tinderUser));
  // to check prpoperty is available or not 
  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

  