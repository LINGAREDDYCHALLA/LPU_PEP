//reduce :it  executes a reducer callback function o each  element 

//Array.reduce(accumulator[result so far])
// let arr=[10,20,30,40,50]
// // let newarr=arr.reduce((num1,num2)=>num1+num2,0)
// // console.log(newarr)
// let pro=arr.reduceRight((num1,num2)=>num1*num2,1)
// console.log(pro)
//reducer on objects
let students=[
    {
        name:"linga",
        marks:90,
    },
    {
        name:"shiva",
        marks:90,
    },
    {
        name:"reddy",
        marks:90,
    },
]
// let z=students.reduce((sum,students)=>sum+students.marks,0)
// console.log("sum of all the studets:",z)
let w = students.reduce((group, student) => {
    let key = student.marks >= 80 ? "Pass" : "Fail";
    if (!group[key]) {
        group[key] = [];
    }
    group[key].push(student.name);
    return group;
}, {});

console.log(w);
