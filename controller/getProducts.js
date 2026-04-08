import user from "../model/ProductModel.js";
async function getProduct(req,res){
try{
    
    let response= await user.find({})
  
    return    res.status(200).json(response)
  
}
catch(err){
  return  res.status(409).json("There is some issue")
}
}
function createProduct(req,res){
    let {product_name,description,price}=req.body;
    let response=user.create({
        product_name,
        description,
        price
    })
return res.status(200).json(response)
}
export default {getProduct,createProduct}