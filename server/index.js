const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const fakeproducts = require("./model/products");

dotenv.config();
const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());
const productsRouters = require("./controller/products")
app.use("/products",productsRouters);



const PORT = process.env.PORT || 9000;
const db = mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT, () => {
        /* fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                fakeproducts.insertMany(json);
                console.log(json)
            }) */
        console.log(`server running on port ${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
});


