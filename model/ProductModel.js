import mongoose from "mongoose"
const schema=mongoose.Schema({
    product_Name:String,
    description:String,
    Price:String
})
const user= mongoose.model("cart",schema)
export default user