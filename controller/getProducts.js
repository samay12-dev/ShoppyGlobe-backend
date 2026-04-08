import user from "../model/ProductModel.js";

async function getProduct(req,res){
    // To get all the products by GET method
try{
    
    let response= await user.find({})
  
    return    res.status(200).json(response)
  
}
catch(err){
  return  res.status(409).json("There is some issue")
}
}
function createProduct(req,res){
    //To create a product
    let {product_name,description,price}=req.body;
    let response=user.create({
        product_name,
        description,
        price
    })
return res.status(200).json(response)
}
// "69d692f9d85245ed0194670d"
 async function specificProduct(req,res){
    // To get a single product
    try{
let {id}=req.params;
let response= await user.findById(id)
if(!response){
    return res.status(404).json({message:"Sorry the product did not found"})
}
else{
return res.status(200).json(response)
}
    }
    catch(err) {
    return res.status(500).json({
      message: "Invalid product ID or server error"
    });
}
 }

export default {getProduct,createProduct,specificProduct}

