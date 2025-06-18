import Joi from 'joi'


const addCategoryValidation = Joi.object({
    name: Joi.string().min(3).required()
})

const updateCategoryValidation = Joi.object({
    name: Joi.string().required().min(3),
    id: Joi.string().required().hex().length(24)
})

const deleteCategoryValidation = Joi.object({
    name: Joi.string().min(3).required(),
    id: Joi.string().hex().length(24).required()
})


export{
    addCategoryValidation,
    updateCategoryValidation,
    deleteCategoryValidation
}