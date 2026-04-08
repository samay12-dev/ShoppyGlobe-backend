import user1 from "../model/cartModel.js";
async function create(req,res){
try{
let {product_id,Quantity,Price}=req.body;
let response=await user1.create({
    product_id,
    Quantity,
    Price
})
    return res.status(200) .json(response)
}
catch(err){
res.status(409).json("There is some error")
}
}
async function update(req, res) {
  try {
    let { _id, Price, Quantity } = req.body;

    let response = await user1.findByIdAndUpdate(
      _id,
      { Price, Quantity },
      { new: true }
    );

    if (!response) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    return res.status(200).json(response);

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error"
    });
  }
}
export default {create,update}