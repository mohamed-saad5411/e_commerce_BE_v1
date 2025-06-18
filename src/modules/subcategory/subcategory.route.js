import express from 'express'
import { addsubCategory, deletesubCategory, getAllsubcategoriesOnly, getAllsubcategoriesRelatedCategory, getSpecificSubcategory, UpdatesubCategory } from './subcategory.controller.js'
import { addSubcategoryValidation, deletesubCategoryValidation, updatesubCategoryValidation } from './subcategory.validation.js'
import { validate } from '../../middleware/validate.js'


let subCategoryRouter = express.Router({mergeParams:true})


subCategoryRouter.route('/').get(getAllsubcategoriesRelatedCategory).post(validate(addSubcategoryValidation),addsubCategory)
subCategoryRouter.route('/allsubcategories').get(getAllsubcategoriesOnly)
subCategoryRouter.route('/:id').put(validate(updatesubCategoryValidation),UpdatesubCategory).delete(validate(deletesubCategoryValidation),deletesubCategory).get(getSpecificSubcategory)



export default subCategoryRouter