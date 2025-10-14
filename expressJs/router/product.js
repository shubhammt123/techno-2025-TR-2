const express = require("express");
const {getAllProduct , getProductById , createProduct , updateProduct , deleteProduct} = require("../controller/product");

const router =  express.Router();


router.get("/getAllProduct",getAllProduct);
router.get("/getProductById/:id",getProductById);
router.post("/createProduct",createProduct);
router.put("/updateProduct/:id",updateProduct);
router.delete("/deleteProduct/:id",deleteProduct);

module.exports = router;

// http://localhost:3000/product/getProductById/648
// http://localhost:3000/product/getAllProduct