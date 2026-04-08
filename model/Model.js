import mongoose from "mongoose";

 let schema = mongoose.Schema({
    item_Name:string,
    price:string,
    rating:string
})
let userModel= mongoose.model("Product Table",schema)