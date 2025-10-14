const express = require("express");

const productRoutes = require("./router/product");
const app = express();

app.use(express.json());

// MVC - model , Router , controller
// index.js --> router --> controller <-- model

app.use("/product",productRoutes);

app.listen(3000,()=>{
    console.log("Sevrer is running on port 3000");
});