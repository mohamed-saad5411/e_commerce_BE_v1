import express from 'express'
import { addsubCategory, deletesubCategory, getAllsubcategories, UpdatesubCategory } from './subcategory.controller.js'



let subCategoryRouter = express.Router()


subCategoryRouter.route('/').get(getAllsubcategories).post(addsubCategory)
subCategoryRouter.route('/:id').put(UpdatesubCategory).delete(deletesubCategory)



export default subCategoryRouter