// spread operator , rest operator 
// Math , Date , Number Method
// type conversion and type coercion
// scopes and hoisting

// Spread operator

// let arr =  [10,20,30];
// let arr1 = arr;

// console.log(arr);
// console.log(arr1);
// console.log(arr === arr1);

// arr1.push(1000);

// console.log(arr);
// console.log(arr1);


// let num = 10;
// let num1 = 10;

// console.log(num === num1);

// let data = [
//     {
//         productName : "Iphone",
//         productPrice : 1000,
//         description : "This is iphone series",
//         category : "Smartphone"
//     },
//     {
//         productName : "Samsung",
//         productPrice : 1000,
//         description : "This is  s series",
//         category : "Smartphone"
//     },
//     {
//         productName : "Google Pixel",
//         productPrice : 1000,
//         description : "This is Pixel series",
//         category : "Smartphone"
//     },
//     {
//         productName : "Nothing",
//         productPrice : 1000,
//         description : "This is Nothing series",
//         category : "Smartphone"
//     },
//     {
//         productName : "Iphone",
//         productPrice : 1000,
//         description : "This is iphone series",
//         category : "Smartphone"
//     },
// ]

// let newData = data.map((item , index)=>{
//      item.id = index+1;
//      return item;
// })
// console.log(newData);
// console.log("---------*****----------");
// console.log(data);

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// let copyObj = {...obj};

// copyObj.gender = "Male";

// console.log(obj);
// console.log(copyObj)

// let arr = [10,20,30];
// let arr1 = [...arr];



// arr1.push(1000);

// console.log(arr);
// console.log(arr1);

// let arr = [10,20,30];
// let arr1 = [40,50,60];

// let newArr = [...arr,"shubham jain" , ...arr1];
// console.log(newArr);

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// let obj1 = {
//     firstName : "Vinay",
//     gender : "Male",
//     address : "Jaipur"
// };

// let newObj = {...obj1 , firstName : "Harsh" , ...obj};
// console.log(newObj);

// let firstname = "harsh";

// Destructuring

// let obj = {
//     firstname : "shubham",
//     lastName :   "Jain",
//     gender : "Male",
//     address : "Jaipur",
//     section : "FSD",
//     age : 100
// }

// let firstName = obj.firstName;

// console.log(firstName)

// let {firstname:fname="user" , section , ...rest} = obj;

// console.log(firstname);
// console.log(section);
// console.log(rest);

// let arr = [100,200,300,400];

// let [,a=1000,...x] = arr;
// console.log(a);
// console.log(x)


// Math - sqrt , random , ceil , floor , round , pow,  MIN  ,  MAX
// Number - toFixed , parseInt , parseFloat , isNaN  , isInterger
// Date - getFullYear  , getMonth , getDay , getDate , getHours , getMinutes , getSeconds , getTime , Now() , toDateString , toTimeString

// Math

// console.log(Math.sqrt(3));
// console.log(Math.pow(2,6));
// console.log(Math.floor(4.99999999999));
// console.log(Math.ceil(4));
// console.log(Math.round(4.5));
// console.log(Math.min(1323,43,32,54,12,65,4332,45421,53442));
// console.log(Math.max(1323,43,32,54,12,65,4332,45421,53442));

// let random = Math.random();

// let otp = Math.floor(Math.random()*90000+10000); //10000 -  99999
// console.log(otp)
// // console.log(Math.ceil(0.42))

// Number
// let num = 13.435354532;

// console.log(num.toFixed(2));

// let firstVar = "4.343d3fd35";

// console.log(Number.isInteger(Number.parseFloat(firstVar)));
// console.log(Number.parseFloat(firstVar));

// let str = "s43hu75b534h64a53m53j78a43i43n34";

// let newVar = str.split("");
// let sum =0;
// let newStr = "";

// newVar.forEach((item)=>{
//     if(!Number.isNaN(+item)){
//         sum += +item
//     }else{
//         newStr += item;
//     }
// })

// console.log(sum)
// console.log(newStr)

// // Date
// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// let curTimeStamp = Date.now();
// console.log(curTimeStamp)

// let newDate = new Date(1757411210290);
// console.log(newDate.toLocaleTimeString())

// type conversion(Explicit Conversion) and type coercion(Implicit Conversion)

let FirstVar = "553";

// console.log(typeof Number(FirstVar))

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log()