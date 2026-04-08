import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name1: String,
    email: String,
    password: String
});

let userModel1 = mongoose.model("UserInfo", schema);

export default userModel1;