import Joi from 'joi'


const addProductValidation = Joi.object({
    title: Joi.string().min(5).max(100).required(),
    imageCover: Joi.string(),
    logo: Joi.string(),
    images: Joi.array(),
    description: Joi.string().min(10).max(100).required(),
    price: Joi.number().min(0).default(0).required(),
    priceAfterDiscount: Joi.number().min(0).default(0).required(),
    stock: Joi.number().min(0).default(0).required(),
    sold: Joi.number().min(0).default(0).required(),
    rateAvg: Joi.number().min(1).max(5).required(),
    rateCount: Joi.number().min(1).required(),
    category: Joi.string().required().hex().length(24),
    subcategory: Joi.string().required().hex().length(24),
    brand: Joi.string().required().hex().length(24)
})

const updateProductValidation = Joi.object({
    title: Joi.string().min(5).max(100),
    imageCover: Joi.string(),
    logo: Joi.string(),
    images: Joi.array(),
    description: Joi.string().min(10).max(100),
    price: Joi.number().min(0).default(0),
    priceAfterDiscount: Joi.number().min(0).default(0),
    stock: Joi.number().min(0).default(0),
    sold: Joi.number().min(0).default(0),
    rateAvg: Joi.number().min(1).max(5),
    rateCount: Joi.number().min(1),
    id: Joi.string().hex().length(24).required()
})

const deleteProductValidation = Joi.object({
    id: Joi.string().hex().length(24).required()
})


export{
    addProductValidation,
    updateProductValidation,
    deleteProductValidation
}