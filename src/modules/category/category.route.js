import express from 'express'
import { addCategory, deleteCategory, getAllcategories, UpdateCategory } from './category.controller.js'



let categoryRouter = express.Router()


categoryRouter.route('/').get(getAllcategories).post(addCategory)
categoryRouter.route('/:id').put(UpdateCategory).delete(deleteCategory)



export default categoryRouter