import { Types, Schema, model } from "mongoose";


const reviewSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    product: {
        required: true,
        type: Types.ObjectId,
        ref: 'product'
    },
    user: {
        required: true,
        type: Types.ObjectId,
        ref: 'user'
    },
    rate: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    }
}, { timestamps: true })

export const reviewModel = model('review', reviewSchema)