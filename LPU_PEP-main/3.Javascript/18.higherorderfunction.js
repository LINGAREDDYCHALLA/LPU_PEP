// //HOF:it is afunctio which take another function as  an argumnet or retur another function as ahigh oderf function
// function hello(){
//     console.log("Hellow from call back")
// }
// //higheroderfunction
// function myfun(callback){
// callback();//call the function passed a argement 
// }

// myfun(hello);

// function myfun(name){
//    console.log("Hellow "+name); 
// }
// function call(f){
//     f("shiva");//calling the call back 

// }
// call(myfun);
// function greet(message){
//     return function (name){
//         console.log(message+ " "+name)
//     }
// }
// const greethelp=greet("Hello");
// greetHellow("Shiva");
// const greetWelcome =greet("welcome");
// greetWelcome("P223");
let radius =[20,30,40,58]
const  area =(r)=>Math.PI*r*r;
function cal(arr,logic){
    const output =[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(arr[i]))
    }
    return output;
}
console.log(cal(radius,area))