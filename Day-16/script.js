// push , pop , shift , unshift , map , filter , reduce , slice , splice , concat , includes , indexOf , lastIndexOf , sort , reverse , join , flat , find , some , every , forEach

// let arr = [10,20,40,30,40,50,40];

// let result = arr.includes(100);
// console.log(result);

// let result = arr.indexOf(100);
// console.log(result);

// reverse , join, flat

// let date = "25-07-2025";

// let newArr = date.split("-");
// console.log(newArr);
// let newDate = newArr.join("/");
// console.log(newDate)
// let arr = [10,20,40,30,40,50,40];

// let result = arr.reverse();
// console.log(result);

// let result = arr.join("shubham");
// console.log(result);

// let arr = [10,20,30,40,[true,false,"shubham","jain",["hello","World"]],[100,200,300,400]];

// let result = arr.flat(2);
// console.log(result);

// function func1(){
//     console.log("Func 1 is called");
// }

// function func2(callback){
//     callback();
//     console.log("Func 2 is called");
// }

// func2(func1);
// func1 - callback function
// func2 - higher order function

// console.log(func1());

// const sub=(x,y)=>{
//     return x-y;
// }
// const multi=(x,y)=>{
//     return x*y;
// }
// const div = (x,y)=>{
//     return x/y;
// }

// function calculator(a,b,operation){
//     console.log(operation)
//     return operation(a,b);
// }

// console.log(calculator(100,200,(x,y)=>{
//     return x+y;
// }));
// console.log(calculator(100,200,(x,y)=>{
//     return x-y;
// }));
// console.log(calculator(100,200,(x,y)=>{
//     return x*y;
// }));
// console.log(calculator(100,200,(x,y)=>{
//     return x/y;
// }));

// map , filter , reduce

// let arr = [10,20,30,40,50,60];

// let result = arr.map((item)=>{
//     return item>30;
// });

// console.log(result);

// filter

// let arr = [2121,334,232,435,532,467,8777,987,766,890,980,346];

// let result = arr.filter((item)=>{
//     return item%2===0;
// });

// console.log(result);

// reduce

// let arr = [10,20,30,40,50];

// let result = arr.reduce((acc,curr)=>{
//     return acc+curr; // acc  curr 
// },1000);             //  0    10   10
//                      //  10   20   30
//                      //  30   30   60
//                      //  60   40   100
//                      //  100  50   150
// console.log(result)

// sort

// let arr = [43,434,56,75,7,645.34,3435,2,45,25,467,423451,467,1];

// let arr = ["shubham","aac","gre","wes","vdfd","bff","hfb","kmy","kyhyt","mnb"];

// let sortedArr = arr.sort((a,b)=>b-a);
// console.log(sortedArr);

// const sum=a=>a**2;

// let arr = [10,20,30,40,50];

// let result = arr.find((item)=>item>30);
// let resultIndex = arr.findIndex((item)=>item>30);
// console.log(result);
// console.log(resultIndex);

// some , every , forEach
// let arr =  [10,20,30,40,50,61];

// let result = arr.some((item)=>item%2!==0);

// console.log(result);

// let result1 = arr.every((item)=>item%2===0);

// console.log(result1);

let arr =  [10,20,30,40,50,61];

// forEach
 
// let result = arr.forEach((item)=>{
//     return item**2;
// });

// console.log(result)

// string method
// charAt , slice , split , indexOf , lastIndexOf , toUpperCase , toLowerCase , trim , 
// includes , replace

// object method
// keys , values , entries , assign , freeze , seal , hasOwn

// string methods
// let str = "Shubham Jain";

// console.log(str[4]);
// console.log(str.length);

// let result = str.charAt(5);
// console.log(result)

// slice , split

// let str = "Shubham Jain";

// let result = str.slice(3 , 6);
// console.log(result)

// let result = str.split(" ");
// console.log(result)

// let result = str.includes("Shb");
// console.log(result)


let str = "   Shubham     Jain   ";

// let result = str.replaceAll("a","hello");
// console.log(result)

// console.log(str.length);
// console.log(str);

// let result = str.trim();
// console.log(result.length)
// console.log(str);

//object methods
// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

//   let keys = Object.keys(obj);
//   let values = Object.values(obj);
//   let entries = Object.entries(obj);
// console.log(keys);
// console.log(values);
// console.log(entries);

// assign , freeze , seal , hasOwn

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain"
// };

// Object.freeze(obj);

// delete obj.firstName;

// console.log(obj);
// Object.seal(obj);

// obj.firstName  = "Vinay";

// console.log(obj);

let obj = {
    firstName : "Shubham",
    lastName : "Jain"
};

let obj2 = {
    gender : "Male",
    address : "Jaipur"
}

let newObj = Object.assign(obj,obj2);
console.log(newObj)

  let result   = Object.hasOwn(obj , "firstname");
  console.log(result)