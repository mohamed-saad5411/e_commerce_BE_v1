import { Types, Schema, model } from "mongoose";


const productSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: [10, 'Too Short product Name'],
        maxlength: [100, 'Too long product Name']
    },
    imageCover: {
        type: String,
        // required: true,    
    },
    logo: {
        type: String,
        // required: true,    
    },
    images: {
        type: [String],
        // required: true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, 'Too Short description product Name'],
        maxlength: [100, 'Too long description product Name']
    },
    price: {
        type: Number,
        default: 0,
        min: 0
    },
    stock: {
        type: Number,
        default: 0,
        min: 0
    },
    sold: {
        type: Number,
        default: 0,
        min: 0
    },
    rateAvg: {
        type: Number,
        min: 1,
        max: 5
    },
    rateCount: {
        type: Number,
        min: 0,
    },
    priceAfterDiscount: {
        type: Number,
        default: 0,
        min: 0
    },
    category: {
        type: Types.ObjectId,
        ref: 'category',
        required: true,
    },
    subcategory: {
        type: Types.ObjectId,
        ref: 'subcategory',
        required: true,
    },
    brand: {
        type: Types.ObjectId,
        ref: 'brand',
        required: true,
    },
},{timestamps:true})

export const productModel = model('product', productSchema)