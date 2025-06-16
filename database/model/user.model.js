import { Types, Schema, model } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Too Short product Name'],

    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    blocked: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum:['admin','user']
        
    },
},{timestamps:true})

export const userModel = model('user', userSchema)