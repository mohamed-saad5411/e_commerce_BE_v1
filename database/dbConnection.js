import mongoose from "mongoose";


export const dbConnection = (req,res)=> {
    
    mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_v1").catch((err)=>err)
    
}