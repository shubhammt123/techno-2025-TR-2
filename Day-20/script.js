// Async Js

// Promises

// function fetchData(){
//     let data = {
//         firstName : "Shubham",
//         lastName : "Jain",
//         gender : "Male"
//     }

//     return new Promise((resolve , reject)=>{
//         let randomNumber = Math.floor(Math.random()*100);
//         setTimeout(()=>{
//             if(randomNumber%2===0){
//                 resolve(data)
//             }else{
//                 reject("Error Fetching data");
//             }
//         },5000);
//     });
// }

// let result;

// fetchData()
// .then((res)=>{
//     result = res;
//     console.log(result)
//     alert("Data Fetched");
// })
// .catch((error)=>{
//     console.log(error);
//     alert("Error Fetching Data");
// });

// alert("Data Fetched");

// const fetchData = ()=>{
//     return fetch("https://fakestoreapi.com/products");
// }

// fetchData()
// .then((res)=>{
//    return res.json()  
// })
// .then((data)=>{
//     let tbody = document.getElementById("tbody");
//     data.forEach((item)=>{
//         let tr = document.createElement("tr");
//         tr.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.category}</td><td>${item.rating.rate}</td>`; 
//         tbody.appendChild(tr);
//     })
    
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{

// })


// async await

// const fetchData =  async ()=>{
//     try {
//     let response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//     let tbody = document.getElementById("tbody");
//     data.forEach((item)=>{
//         let tr = document.createElement("tr");
//         tr.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.category}</td><td>${item.rating.rate}</td>`; 
//         tbody.appendChild(tr);
//     })
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData();

// Event loop
