//console.log(1);
// console.log(2);
//1.2
// console.log("For Loop")
// for(let i=0;i<1000;i++){
//     console.log(i);
// }
// console.log("Execution started");
// setTimeout(()=>{
//     console.log("this is func which we use ");
// },100)
// console.log(" executio ends");
//  console.log("For Loop")
//  for(let i=0;i<5;i++){
//      console.log(i);
//  }
//   console.log("asw2")
// function t (){
//     console.log("Srard");
// }
// setTimeout(t,2000);


// setTimeout(()=>{
//     console.log("These is a normal function")
// },2000)

//3.
// console.log("Started")
// let a =setTimeout(function(){
//     console.log("This a normal ");
// },2000);
// clearTimeout(a);
// console.log("End here")
//4 setInterval functio
// setInterval(()=>{
//     console.log("alert");
// },2000)
// clear interval
// console.log("Started");
//  let a = setInterval(function(){
//     console.log("alletr");

//  },2000)
//  console.log("Started");
//  clearInterval(a);
  let i=0;
 const a =setInterval(()=>{
    ++i;
    console.log("hellow",i);
    if(i>=5){
        clearInterval(a)
    }
},2000)  
