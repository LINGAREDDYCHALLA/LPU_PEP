let arr=[10,20,30,40,60,77]
// let  a=arr.filter((val)=>{
//     return val>arr[2];
// })
// console.log(a);
//filrer the eve  elements  grater than 50:
let set=50
let  s=arr.filter((num)=>{
    return  num>=set && num%2===0
     
});
console.log("value  are even and grater than 50:",s);
//numbers between 23 to 63
let z=arr.filter((num)=>{
    return num>=23 && num<=63;
})
console.log(z)
//dinamic way
const constfilter =(minVal,maxVal)=>(num)=>(num>=minVal && num<=maxVal);
let g=arr.filter(constfilter(23,63));
console.log(g);
