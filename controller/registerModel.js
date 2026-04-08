import userModel1 from "../model/register.js";
import bcrypt from 'bcrypt';

async function register(req,res){
try{
    let {name1,email,password}=req.body;
    // if(email){
    //     return res.status(409).json({message:"User already exist"})
    // }
    let data= await userModel1.create({
        name1,
        email,
        password:bcrypt.hashSync(password,10)
    })
    return res.status(200).json(data)
}
catch(err){
        return res.status(409).json({message:"Everything is not fine"})

}
}
async function login(req,res){
  try{
      let {email,password}=req.body
       let check=  await userModel1.findOne({email})
       let pass=bcrypt.compareSync(password,check.password)
       if(check){
        if(pass){
            res.status(200).json({message:"Login sucessful!"})
        }
        else{
            res.status(409).json({message:"Wrong password!"})
        }
       }
  }
  catch(err){
    console.log("There is somoe issue with login")
  }

}
export default {register,login}
