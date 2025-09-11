
let data = [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "brand": "Logitech",
    "price": 899,
    "discount": 10,
    "inStock": true,
    "rating": 4.5,
    "reviews": 120,
    "createdAt": "2025-01-10"
  },
  {
    "id": 2,
    "name": "Gaming Keyboard",
    "category": "Electronics",
    "brand": "Razer",
    "price": 2999,
    "discount": 15,
    "inStock": true,
    "rating": 4.7,
    "reviews": 340,
    "createdAt": "2025-01-11"
  },
  {
    "id": 3,
    "name": "Bluetooth Headphones",
    "category": "Electronics",
    "brand": "Sony",
    "price": 4999,
    "discount": 20,
    "inStock": true,
    "rating": 4.6,
    "reviews": 450,
    "createdAt": "2025-01-12"
  },
  {
    "id": 4,
    "name": "Smartphone",
    "category": "Mobiles",
    "brand": "Samsung",
    "price": 24999,
    "discount": 10,
    "inStock": true,
    "rating": 4.8,
    "reviews": 980,
    "createdAt": "2025-01-15"
  },
  {
    "id": 5,
    "name": "Laptop",
    "category": "Computers",
    "brand": "Dell",
    "price": 55999,
    "discount": 5,
    "inStock": true,
    "rating": 4.4,
    "reviews": 220,
    "createdAt": "2025-01-18"
  },
  {
    "id": 6,
    "name": "Smart Watch",
    "category": "Wearables",
    "brand": "Apple",
    "price": 32999,
    "discount": 12,
    "inStock": true,
    "rating": 4.9,
    "reviews": 500,
    "createdAt": "2025-01-20"
  },
  {
    "id": 7,
    "name": "DSLR Camera",
    "category": "Cameras",
    "brand": "Canon",
    "price": 45999,
    "discount": 8,
    "inStock": true,
    "rating": 4.7,
    "reviews": 300,
    "createdAt": "2025-01-21"
  },
  {
    "id": 8,
    "name": "LED TV",
    "category": "Home Appliances",
    "brand": "Sony",
    "price": 35999,
    "discount": 10,
    "inStock": true,
    "rating": 4.5,
    "reviews": 410,
    "createdAt": "2025-01-22"
  },
  {
    "id": 9,
    "name": "Refrigerator",
    "category": "Home Appliances",
    "brand": "LG",
    "price": 27999,
    "discount": 6,
    "inStock": true,
    "rating": 4.4,
    "reviews": 200,
    "createdAt": "2025-01-23"
  },
  {
    "id": 10,
    "name": "Microwave Oven",
    "category": "Home Appliances",
    "brand": "Samsung",
    "price": 9999,
    "discount": 7,
    "inStock": true,
    "rating": 4.3,
    "reviews": 120,
    "createdAt": "2025-01-25"
  },
  {
    "id": 11,
    "name": "Air Conditioner",
    "category": "Home Appliances",
    "brand": "Voltas",
    "price": 32999,
    "discount": 10,
    "inStock": true,
    "rating": 4.6,
    "reviews": 260,
    "createdAt": "2025-01-26"
  },
  {
    "id": 12,
    "name": "Washing Machine",
    "category": "Home Appliances",
    "brand": "Whirlpool",
    "price": 22999,
    "discount": 9,
    "inStock": true,
    "rating": 4.4,
    "reviews": 190,
    "createdAt": "2025-01-27"
  },
  {
    "id": 13,
    "name": "Vacuum Cleaner",
    "category": "Home Appliances",
    "brand": "Philips",
    "price": 6999,
    "discount": 5,
    "inStock": true,
    "rating": 4.2,
    "reviews": 80,
    "createdAt": "2025-01-28"
  },
  {
    "id": 14,
    "name": "Coffee Maker",
    "category": "Kitchen",
    "brand": "Nescafe",
    "price": 4999,
    "discount": 15,
    "inStock": true,
    "rating": 4.1,
    "reviews": 100,
    "createdAt": "2025-01-29"
  },
  {
    "id": 15,
    "name": "Induction Cooktop",
    "category": "Kitchen",
    "brand": "Prestige",
    "price": 3499,
    "discount": 10,
    "inStock": true,
    "rating": 4.3,
    "reviews": 140,
    "createdAt": "2025-01-30"
  },
  {
    "id": 16,
    "name": "Mixer Grinder",
    "category": "Kitchen",
    "brand": "Bajaj",
    "price": 3999,
    "discount": 12,
    "inStock": true,
    "rating": 4.4,
    "reviews": 160,
    "createdAt": "2025-02-01"
  },
  {
    "id": 17,
    "name": "Air Fryer",
    "category": "Kitchen",
    "brand": "Philips",
    "price": 7999,
    "discount": 8,
    "inStock": true,
    "rating": 4.5,
    "reviews": 170,
    "createdAt": "2025-02-02"
  },
  {
    "id": 18,
    "name": "Water Purifier",
    "category": "Home Appliances",
    "brand": "Kent",
    "price": 14999,
    "discount": 7,
    "inStock": true,
    "rating": 4.6,
    "reviews": 220,
    "createdAt": "2025-02-03"
  },
  {
    "id": 19,
    "name": "Smart Speaker",
    "category": "Electronics",
    "brand": "Amazon Echo",
    "price": 5999,
    "discount": 10,
    "inStock": true,
    "rating": 4.7,
    "reviews": 340,
    "createdAt": "2025-02-04"
  },
  {
    "id": 20,
    "name": "Tablet",
    "category": "Electronics",
    "brand": "Apple iPad",
    "price": 49999,
    "discount": 5,
    "inStock": true,
    "rating": 4.8,
    "reviews": 420,
    "createdAt": "2025-02-05"
  }
];

// Events

// function sum(){
//     console.log("Container clicked");
// }

// document.getElementById("container").onclick= function(){
//     console.log("There is a click on container");
// }

// document.getElementById("container").addEventListener("click",function(){
//     console.log("Event triggred on container");
// })

// document.getElementById("container").addEventListener("mouseenter",function(){
    
//     document.getElementById("container").style.background =   "red";
// })
// document.getElementById("container").addEventListener("mouseleave",function(){
    
//     document.getElementById("container").style.background =   "cadetblue";
// })

document.getElementById("button").addEventListener("click",function(){
    let tBody =   document.getElementById("table-body");
    data.forEach((item)=>{
        let tRow = document.createElement("tr");
        tRow.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.category}</td><td>${item.brand}</td><td>${item.price}</td><td>${item.discount}</td><td>${item.inStock}</td><td>${item.rating}</td><td>${item.reviews}</td><td>${item.createdAt}</td>`;
        tBody.appendChild(tRow);
    })
})