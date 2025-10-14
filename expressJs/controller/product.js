const fs = require("fs");

const readData = ()=>{
    const productData = JSON.parse(fs.readFileSync("product.json","utf-8"));
    return productData;
};

const getAllProduct = (req,res)=>{
    const productData = readData();
    res.send({message : "Product Fetched" , products : productData});
}

const getProductById = (req,res)=>{
    const {id} = req.params;
    const productData = readData();
    const product = productData.find((item)=>item.id===+id);
    if(!product) return res.status(404).send({message : "Product Not Found"});
    res.status(200).send({message : "Product Fetched" , product : product});
};

const createProduct = (req,res)=>{
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
};

const updateProduct = (req,res)=>{
    const {id} = req.params;
    const productData = readData();
    const index = productData.findIndex((item)=>item.id===+id);
    console.log(index);
    if(index===-1) return res.status(404).send({message : "Product Not Found"});
    const updatedProduct = {...productData[index],...req.body};
    productData[index] = updatedProduct;
    fs.writeFileSync("product.json",JSON.stringify(productData,null,2));
    res.status(202).send({message : "Product Updated" , product : updatedProduct});
};

const deleteProduct = (req,res)=>{
    const productData = readData();
    const index = productData.findIndex((item)=>item.id===+req.params.id);
    console.log(index);
    if(index===-1) return res.status(404).send({message : "Product Not Found"});
    const filteredData = productData.filter((item)=>item.id !== +req.params.id);
    fs.writeFileSync("product.json",JSON.stringify(filteredData,null,2));
    res.status(200).send({message : "Product Deleted"});
};

module.exports = {getAllProduct , getProductById , createProduct , updateProduct  ,deleteProduct};