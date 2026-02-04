//Hosting :javascript moves declaration  to the top 
// of the scope  during compilation phase

//1. var hoisting :
// var a;          // hoisted
// console.log(a); // undefined
// a = 10;         // initialization stays here


//2 let and const hoisting :referenceError 
// console.log(b); // ReferenceError
// let b = 20;

// console.log(a);
// const a=10;

//3 function 
var x = 5;
function test() {
  console.log(x);
  var x = 10;
}

test(); // undefined


