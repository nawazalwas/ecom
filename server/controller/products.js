const express = require("express");
const fakeproducts = require("../model/products");
const router = express.Router();

router.get("/",async (req,res)=>{

    const products = await fakeproducts.aggregate([{$project:{"_id":0,"__v":0}}]);
    res.status(200).json(products);
})

router.get("/:id",async (req,res)=>{
    const id = req.params.id-0

    const product = await fakeproducts.aggregate([{$match:{id:id}},{$project:{"_id":0,"__v":0}}]);
    res.status(200).json(product);
})



module.exports = router;