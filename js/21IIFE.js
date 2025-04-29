// immediately Inovated function expresss(IIFE)
// named iffe

(function chai()
{
    console.log(`DB connected `);

})();  
//  global scope ka pollution se priblem hoti hao to usko hatatne 
//  ke liye use karte hai 

( (name)=>{
    console.log('BD connected two ${name}');

} )('gyan')




It’s a function expression wrapped in parentheses.

It’s immediately invoked by adding () at the end.

It creates a local scope, which can prevent variable clashes.