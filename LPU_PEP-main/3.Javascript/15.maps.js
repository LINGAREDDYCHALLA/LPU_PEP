//maps():it creats the array by transforming elements with out modifying the original one
 let arr =[22,33,44];
// let double =arr.map(val =>  val*2);
// console.log("Array with Double",double);
// console.log("Original array is:",arr)
// //callback:(elements,index,array)
// let a = arr.map((val, index, array) => {
//     console.log(`Index: ${index}, Value: ${val}, Array: ${array}`);
//     return val * 3;
// });

// console.log("New array:", a);
//chaining using mao
// let result =arr
// .map((num)=>num*2)
// .map((num)=>num-3)
// .map((num)=>num/33)
// console.log(result);
// convert string to number
let stringarry=["2","3","4"]
let numarry =stringarry.map(Number);
console.log(numarry)
//FILTER
let b=[23,44,55,66,77]
let a = b.filter((val) => {
    return val >20;
});
console.log(a);
//chaining number between 20to 40
let d=b
.filter((val)=>val>20)
.filter((val)=>val>20)
.filter((val)=>val>20)
  console.log(d)  
    
    );
