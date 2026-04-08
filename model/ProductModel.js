import mongoose from "mongoose"
const schema=mongoose.Schema({
    product_Name:String,
    description:String,
    Price:String
})
const user= mongoose.model("Product_Info",schema)
export default user