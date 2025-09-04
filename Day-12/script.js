// Datatypes -
// primitive types - number , string , boolean , undefined , null , symbol , BigInt
// ref types - array , object , date

// let a = -100.543;  // -2^53 - 2^53-1
// console.log(typeof a);

// console.log(2**53 +1);

// let bigNum = 10n;
// let num = 20;

// console.log(typeof num);
// console.log(bigNum + BigInt(num));

// let str = "Hello , My name is";
// let str2 = " shubham jain";

// console.log(str + str2);

// let firstName = "Shubham";
// let lastName = "Jain";

// // let str = `Hello , My name is shubham jain`;

// let str = `Hello , My name is ${firstName} ${lastName}`;  // template literals

// console.log(typeof str);

// let firstVar = true;

// console.log(typeof firstVar);

// let firstVar=undefined;

// console.log(typeof firstVar);

// let secondVar = null;
// // console.log(typeof secondVar);

// let firstVar = Symbol("id1");
// let secondVar = Symbol("id1");
// console.log(firstVar == secondVar);

// Ref type datatypes

// arrays

// let arr = [10,20,30,40,50,60,"shubham","jain",true,false,null,undefined,[-121,23.4,-12.43,true,[]]];

// console.log(typeof arr)

// console.log(arr[arr.length-1]);

// console.log(Array.isArray(arr))

// objects

// let obj = {

// }

// let person = {
//     1 : "shubham",
//     "lastName" : "jain",
//     address : "Jaipur",
//     age : 100,
//     section : "FSD"
// }

// console.log(person.1);

// Date

// let date = new Date();

// console.log(typeof date);

// operators
// + , - ,  * , / , % , **
// = , += , -= , *= , /= , %= , **=
// == , === , !=  ,  !==  ,  < , > , <= ,  >=
// && , || , !
// & , | , ^ , ~ , << , >>

// let x = 10;
// let y = 5;

// console.log("The addition of x & y is ",x+y);
// console.log("The Subtraction of x & y is ",x-y);
// console.log("The Multiplication of x & y is ",x*y);
// console.log("The Division of x & y is ",x/y);
// console.log("The reminder of x & y is" , x%y);
// console.log("The  x**y is" , x**y);

// Assignments Operators

// let a = 100;

// a += 10; // a   = a + 10;
// console.log(a);

// a -= 10; // a = a - 10;
// console.log(a);

// a *= 10; // a = a * 10;

// console.log(a);

// a /= 10; // a = a / 10;
// console.log(a);

// a %= 10; //  a = a % 10;
// console.log(a);

// a **= 2; // a  = a**2;

// console.log(a)

// let x = 10;
// let y = "10";

// // console.log(x === y);

// console.log(x > y);

// && , ||

// console.log(true && false);

// console.log(false || false);.

// console.log(0 && -100);

// false , 0 , undefined , null , "" - falsy

// short circuit evaluation

console.log(-10 || "shubham");