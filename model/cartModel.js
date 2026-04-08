import mongoose from "mongoose"
const schema=mongoose.Schema({
    product_id:String,
    Quantity:String,
    Price:String
})
const user1= mongoose.model("Cart",schema)
export default user1