// Constructor and Classes

// This Keyword

// console.log(this); //Browser - global obj(Window obj); //nodejs - {};

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain",
//     greet : ()=>{
//         console.log(this);
//         console.log(`Hello ${this.firstName}, Good Morning`);
//     }
// }

// obj.greet();

// function sum(){
//     console.log(this); //browser - global obj(window) nodejs - global obj(global)
// }

// sum();
// const sum=()=>{
//     console.log(this); // browser - window nodejs - {}
// }

// sum();

// Constructors - functions that return the object

// class 

// function person(firstName , lastName){
//     let obj = {};
//     obj.firstName = firstName;
//     obj.lastName = lastName;
//     obj.greet = function(){
//         console.log("Hello , Good Morning");
//     }
//     return obj;
// }

// const p1 = person("shubham","jain");
// const p2 = person("Nickk","Todd");

// console.log(p1.greet);
// console.log(p2.greet);

// console.log(p1.greet == p2.greet)


// function Person(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.greet = function(){
//     //     console.log("Hello , Good Morning");
//     // }
// }

// Person.prototype.greet = function(){
//     // console.log(this);
//     console.log(`Hello ${this.firstName}, Good Morning`);
// }



// const p1 = new Person("Shubham","Jain");
// const p2 = new Person("Nickk","Todd");
// console.log(p1);
// console.log(p2);

// console.log(p1.__proto__);
// console.log(p2.__proto__);
// console.log(Person.prototype);

// console.log(p1.__proto__ == Person.prototype );
// console.log(p2.__proto__ == Person.prototype);
// console.log(p1.__proto__ == p2.__proto__);


// p1.__proto__.gender = "Male";

// const p3 = new Person("Vinay","Jain");

// console.log(p2.gender);

// console.log(p3.gender);

// let arr = [10,20,30];

// Array.prototype.sum =  function(){
//     console.log("Sum Function called");
// }

// arr.sum();

// Classes

// class Person{
//     constructor(firstName , lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet(){
//         console.log(`Hello ${this.firstName}, Good Morning`);
//     }
// }

// const p1 = new Person("shubham","Jain");

// console.log(p1);

// Inheritance

// class Animal{
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }

//     spake(){
//         console.log(`${this.name} speaks`);
//     }
// }

// const a1 = new Animal("Dog");

// class Dog extends Animal{
//     constructor(name,voice , age){
//         super(name,age);
//         this.voice = voice
//     }

//     spake(){
//         super.spake();
//         console.log("Dog Barks");
//     }
// }

// const d1 = new Dog("tom","bark" , 10);
// // console.log()
// d1.spake()

// Private properties

// class Account{
//     #balance = 0;
//     constructor(name , initialBalance){
//         this.name = name;
//         this.#balance = initialBalance;
//     }

//     // showBalance(){
//     //     console.log(this.#balance);
//     // }

//     // updateBalance(amount){
//     //     this.#balance +=  amount;
//     // }

//     get balance(){
//         console.log(this.#balance);
//     }

//     set balance({amount , type}){
//         if(type  === "deposit"){
//             this.#balance += amount;
//         }else{
//             this.#balance -= amount;
//         }
        
//     }
// }

// const a1 = new Account("Shubham",1000);

// console.log(a1.)

// a1.showBalance();
// a1.updateBalance(1000);
// a1.showBalance();

// getters , setters

// a1.balance;
// a1.balance = {amount : 1000 , type : "withdrawl"};
// a1.balance;  

// Static

const date = new Date();

Date.now();


class Person{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static greet(){
        console.log("Hello , good morning");
    }
}

const p1 = new Person("shubham","jain");

Person.greet()
p1.greet();