import  { Types, Schema, model } from "mongoose";


const subcategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: [2, 'Too Short subcategory Name']
    },
    slug: {
        type: String,
        lowercase: true,
    },
    category: {
        type: Types.ObjectId,
        required: true,
        ref:'category'
    }
},{timestamps:true})

export const subcategoryModel = model('subcategory', subcategorySchema)