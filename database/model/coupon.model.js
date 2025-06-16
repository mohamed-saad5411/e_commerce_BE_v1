import  { Types, Schema, model } from "mongoose";


const couponSchema = new Schema({
    code: {
        type: String,
        required: true,
        trim: true
    },
    expire: {
        type: Date,
        required: true
    },
    discount: {
        type: Number,
        required: true,
        min:0
    }
},{timestamps:true})

export const couponModel = model('coupon', couponSchema)