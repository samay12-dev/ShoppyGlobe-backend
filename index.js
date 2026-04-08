import express from "express"
const app= express();
import mongoose from "mongoose";
import route from "./routes/registerRoute.js";
import route1 from "./routes/routes.js";
app.use(express.json());
mongoose.connect("mongodb+srv://samaygaihar_db_user:Admin12@cluster0.7klvdze.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("DB connected")
})
.catch(()=>{
    console.log("There is some problem while connecting the database!")
})

route(app)
route1(app)



app.listen(8080,()=>{
    console.log("Server started!")
})