import express from 'express'
import { addCategory, deleteCategory, getAllcategories, getSpecificCategory, UpdateCategory } from './category.controller.js'
import { getAllsubcategoriesRelatedCategory } from '../subcategory/subcategory.controller.js'
import { addCategoryValidation, deleteCategoryValidation, updateCategoryValidation } from './category.validation.js'
import { validate } from '../../middleware/validate.js'
import { uploadSingleFile } from '../../multer/multer.uploads.js'


let categoryRouter = express.Router()


categoryRouter.route('/').get(getAllcategories).post(uploadSingleFile('image','category'),validate(addCategoryValidation), addCategory)
categoryRouter.route('/:categoryId/subcategories').get(getAllsubcategoriesRelatedCategory)
categoryRouter.route('/:id').put(validate(updateCategoryValidation), UpdateCategory).delete(validate(deleteCategoryValidation), deleteCategory).get(getSpecificCategory)



export default categoryRouter