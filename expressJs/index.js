const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

// CRUD 
// create , read , update , delete

// CREATE - POST
// READ - GET
// UPDATE - PUT , PATCH
// DELETE - DELETE

// product module
// /getAllProduct - GET
// /getProductById - GET
// /createProduct - POST
// /updateProduct - PUT
// /deleteProduct - DELETE

// http://ipaddress:port/routes
// http://localhost:3000/

const readData = ()=>{
    const productData = JSON.parse(fs.readFileSync("product.json","utf-8"));
    return productData;
}

app.get("/getAllProduct",(req,res)=>{
    const productData = readData();
    res.send({message : "Product Fetched" , products : productData});
}); 
//http://localhost:3000/getAllProduct
app.get("/getProductById/:id",(req,res)=>{
    const {id} = req.params;
    const productData = readData();
    const product = productData.find((item)=>item.id===+id);
    if(!product) return res.status(404).send({message : "Product Not Found"});
    res.status(200).send({message : "Product Fetched" , product : product});
}); 
// http://localhost:3000/getProductById/
app.post("/createProduct",(req,res)=>{
    // query - optional
    // params - mandatory
    // body 

    //[{},{}]
    const reqBody = req.body;
    const productData = readData();
    reqBody.id = Date.now();
    productData.push(reqBody);
    fs.writeFileSync("product.json",JSON.stringify(productData , null , 2));
    res.send({message : "Product Created"});
});
// http://localhost:3000/createProduct
app.put("/updateProduct/:id",(req,res)=>{
    const {id} = req.params;
    const productData = readData();
    const index = productData.findIndex((item)=>item.id===+id);
    console.log(index);
    if(index===-1) return res.status(404).send({message : "Product Not Found"});
    const updatedProduct = {...productData[index],...req.body};
    productData[index] = updatedProduct;
    fs.writeFileSync("product.json",JSON.stringify(productData,null,2));
    res.status(202).send({message : "Product Updated" , product : updatedProduct});
});
//http://localhost:3000/updateProduct
app.delete("/deleteProduct/:id",(req,res)=>{
    const productData = readData();
    const filteredData = productData.filter((item)=>item.id !== +req.params.id);
    fs.writeFileSync("product.json",JSON.stringify(filteredData,null,2));
    res.status(200).send({message : "Product Deleted"});
});
// http://localhost:3000/deleteProduct


app.listen(3000,()=>{
    console.log("Sevrer is running on port 3000");
});