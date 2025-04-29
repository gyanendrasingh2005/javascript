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
