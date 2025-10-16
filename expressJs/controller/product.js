const fs = require("fs");
const Product = require("../model/product");

const readData = ()=>{
    const productData = JSON.parse(fs.readFileSync("product.json","utf-8"));
    return productData;
};

const getAllProduct = async (req,res)=>{
    try {
        const productData = await Product.find();
        console.log(productData)
    res.status(200).send({message : "Product Fetched" , products : productData});
    } catch (error) {
        res.status(500).send({error : "Error fetching data"});
    }
}

const getProductById = async (req,res)=>{
    try {
        const {id} = req.params;
    const product = await Product.findById(id);
    if(!product) return res.status(404).send({message : "Product Not Found"});
    res.status(200).send({message : "Product Fetched" , product : product});
    } catch (error) {
        res.status(500).send({error : "Error fetching data"})
    }
};

const createProduct = async (req,res)=>{
    try {
    const product = await Product.create(req.body);
    res.status(201).send({message : "Product Created"});
    } catch (error) {
        res.status(500).send({error : "Error inserting product"});
    }
};

const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id , req.body,{new : true});
    res.status(202).send({message : "Product Updated" , product : updatedProduct});
    } catch (error) {
        res.status(500).send({error : "Error updating product"});
    }
};

const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).send({message : "Product Deleted"});
    } catch (error) {
         res.status(500).send({error : "Error deleting product"});
    }
};

module.exports = {getAllProduct , getProductById , createProduct , updateProduct  ,deleteProduct};