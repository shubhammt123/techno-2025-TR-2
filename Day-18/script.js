// Type coercion

// console.log(5 + "5");
// console.log(5-"5");
// console.log("10"/2);
// console.log("10"*"5");
// console.log(true + false);
// console.log(true + "0");
// console.log("shubham"+{});

// console.log(!!"shubham");
// console.log({}+{})
// console.log([]+[])
// console.log([]+{})
// console.log(Number(undefined) +  "10")
// console.log(Number(undefined))/

// Scopes and hoisting
// global scope , functional scope / local scope 
// block scope - ES6

// var - global scope
// let , const - block scope



// console.log(a);

// let a = "shubham";
// console.log(a);

// {
//     let a = 100;
//     console.log(a);
// }

// console.log(a);


// function sum(){
//     var a = 100;
//     console.log(a);
// }

// sum();
// console.log(a);

// var - global scope variable but in case of the function it defines local or functional scope variable
// let & const are block scope variable

//  hoisting

// console.log(a);
// a = 100;
// console.log(a);
// sum();
// var a = "shubham";

// console.log(a);

// var supports hoisting
// let and const doesn't support hoisting

// function sum(){
//     console.log("Sum function called");
// }
// console.log(sum)
// sum();


// var sum = ()=>{
//     console.log(a);
//     let a = "shubham";
//     console.log(a)
// }
// sum();

// DOM Manipulation
// Document object model

// console.log(window);

// console.log(this);
// this referse to global object
// in browser global object refers to window objects
// in node global object refers to blank object

// console.log(document)

// console.log(document.getElementById("container"));
// let myDiv = document.getElementById("container");
// console.log(myDiv.id)
// myDiv.id = "box";
// console.log(document.getElementById("container"));

// let myDiv = document.getElementById("container");

// console.log(myDiv.className);

// myDiv.className = "item header";

// console.log(myDiv.classList);

// myDiv.classList.remove("box");
// myDiv.classList.add("header");
// myDiv.classList.toggle("dark");

// let link = document.getElementById("link");

// console.log(link.href);
// link.href = "https://facebook.com"

// let myDiv = document.getElementById("container");

// // console.log(myDiv.style)

// myDiv.style.backgroundColor = "red";
// myDiv.style.border = "3px solid black"
// myDiv.style.borderRadius = "50%";


// let myDiv = document.getElementById("container");

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));

// myDiv.setAttribute("id","header");
// myDiv.setAttribute("style","background : red;width : 100px;height : 100px");

// innerHTML , innerText , textContent

// let myDiv = document.getElementById("container");

// console.log(myDiv.innerHTML);
// myDiv.innerHTML = "<input type='text' placeholder='Enter Name' style='padding:20px' /> "
// console.log(myDiv.innerText)
// console.log(myDiv.textContent)

// myDiv.innerHTML = "<input type='text' placeholder='Enter Name' style='padding:20px' /> "
// myDiv.innerText = "<input type='text' placeholder='Enter Name' style='padding:20px' /> "

// getElementByClassName
// getElementByTagName
// querySelector
// querySelectorAll

// let myDivs = document.getElementsByTagName("div");

// console.log(myDivs);

// let newDivs = Array.from(myDivs);
// console.log(newDivs)
// myDivs[0].style.background = "red";

// let colors = []
// for(let i = 0 ; i < myDivs.length ; i++){
//     if(i%2===0){
//         myDivs[i].style.background = "red";
//     }else{
//         myDivs[i].style.background = "yellow";
//     }
//     myDivs[i].style.padding = "10px";   
// }
// 
// newDivs.forEach((item)=>{
//     item.style.background = "red";
// })

// let arr = [10,20,30];
// console.log(arr);

// let myDiv = document.querySelector("#item");
// let myDiv = document.querySelectorAll(".container");

// console.log(myDiv);

// let myDiv = document.createElement("a");
// myDiv.href = "https://www.google.com";
// myDiv.innerHTML = "Google Link";

// document.body.appendChild(myDiv);
// // document.body.insertBefore();
// console.log(myDiv);

// let myDiv = document.getElementById("item");
// document.body.removeChild(myDiv);


