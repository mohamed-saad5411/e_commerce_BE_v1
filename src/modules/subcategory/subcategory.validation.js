import Joi from 'joi'


const addSubcategoryValidation = Joi.object({
    name: Joi.string().min(2).required(),
    category: Joi.string().required().hex().length(24)
})

const updatesubCategoryValidation = Joi.object({
    name: Joi.string().required().min(3),
    id: Joi.string().required().hex().length(24)
})

const deletesubCategoryValidation = Joi.object({
    name: Joi.string().min(3).required(),
    id: Joi.string().hex().length(24).required()
})


export{
    addSubcategoryValidation,
    updatesubCategoryValidation,
    deletesubCategoryValidation
}