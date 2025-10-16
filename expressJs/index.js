const express = require("express");

const productRoutes = require("./router/product");
const userRoutes = require("./router/user");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const connectDb = require("./config/db");
const app = express();

app.use(express.json());

connectDb();

app.use(loggerMiddleware);
// MVC - model , Router , controller
// index.js --> router --> controller <-- model

app.use("/product",productRoutes);
app.use("/auth",userRoutes);

app.listen(3000,()=>{
    console.log("Sevrer is running on port 3000");
});