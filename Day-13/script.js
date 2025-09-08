// & , |  , ^ , ~ , << ,  >> - bitwise operator

// let x = 3; // 0011
// let y = 10; //1010 

// console.log(x | y); 

// let read = 1;
// let write = 2;
// let execute = 4;

// let permission = read | write;

// console.log(permission & execute)


// let x = 2; // 0010 -  
// let y = 6; // 0110

// console.log(x ^ y); // 0010

// console.log(~x);

// let x = 20; // 101

// console.log(x << 6);
// console.log(x>>2);

// control flows

// if ,else , switch cases , for loop , while , do while

// let number = 90;

// if(number > 90){
//     console.log("Grade : A+");
// }else if(number > 80){
//     console.log("Grade : A");
// }else if(number > 70){
//     console.log("Grade : B");
// }else if(number > 60){
//     console.log("Grade : C");
// }else if(number > 50){
//     console.log("Grade : D");
// }else{
//     console.log("Grade : F");
// }

// ternary operator

// let number = 50;

// number > 90 ? console.log("Grade : A+") : number > 80 ? console.log("Grade : B") : number > 70 ? console.log("Grade : C") :  number > 60 ? console.log("Grade : D") : console.log("Grade : F");

// let role = "USER";

// if(role === "ADMIN"){
//     console.log("Hello Admin , Welcome back!!");
// }

// role === "ADMIN" && console.log("Hello Admin , Welcome back!!");

// switch cases

// let day = 1;

// switch(day){
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3 :
//         console.log("Wednesday");
//         break;
//     case 4 :
//         console.log("Thrusday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     case 7 :
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// loops

// for , while , do while

// for(let i = 0 ; i < 10 ; i ++){
//     console.log(i);
// }

// let arr = [10,20,30,40,50,60,70,true,false,"Shubham",[100,200,300,400,500,"Jain",[0,1,2,3,4,5,6,false]]];

// console.log(arr[arr.length - 1][arr[arr.length - 1].length-1][arr[arr.length - 1][arr[arr.length - 1].length-1].length-1]);

// let arr = [10,20,30,40,50,60];

// arr[] = 

// arr[9] = 1000;

// console.log(arr[7]);

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]**2);
// }
//  let x = 1000;

// for(let i = 0 ; i < 5; i++){
   
//     arr[i+6] = x++;
// }

// let arr = [10,20,30,40,50,60];

// for(let i = arr.length ; i > 3 ; i--){
//     arr[i] = arr[i-1];
// }

// arr[3] = 1000;
// console.log(arr)

// functions
// function func1(){
//     console.log("Func 1 is called");
// }

// let num1 = +prompt("Enter first Number");
// let num2 = +prompt("Enter Second Number");


// function sum(a,b){
//     console.log(a+b);
// }

// func1();
// sum(num1,num2);

// const func2 = function(){
//     console.log("Func 2 is called");
// }

// func2();

// arrow functions

// const func3 = ()=>{
//     console.log("Func 3 is called");
// }

// func3();

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain",
//     gender : "Male",
//     address : "Jaipur"
// }

// obj.address = "Udaipur";

// let key = "section";
// let value = "FSD";

// obj[key] = value;

// console.log(obj)

// let keyVariable = "firstName";

// console.log(obj[keyVariable]);

// function sqArr(arr){
//     let sqauredArr = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         sqauredArr[i] = arr[i]**2;
//     }
//     return sqauredArr;
// }

// let result = sqArr([10,20,30,40,50]);
// console.log(result);