//promises: it represent funtur event Techically it is  aobject >when we creat a promise object we are not sureweather  this promise will be fullfilled or not
//promise has 3 states(pendig ,fullfilled ,reject)

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Task Done");
//     }, 2000);
// });
// p1.then(result => {
//     console.log(result);
// });

// console.log("Main End");

// let p1 = new Promise((resolve) => {
//     console.log("Maggie started");
//     setTimeout(() => {
//         resolve("Maggie done");

//         // Inner promise (WRONG — not returned)
//         let p2 = new Promise((res) => {
//             setTimeout(() => res("Inner done"), 1000);
//         }).then(r => console.log(r));

//     }, 2000);
// });
// p1.then(r => console.log("ok Now we are done",r));

//creat a varable   download    set time out 5 sec to download  download  view  