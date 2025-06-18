import express from 'express'
import {  addproduct, deleteproduct, getAllProducts, updateproduct } from './product.controller.js'
import { addProductValidation, deleteProductValidation, updateProductValidation } from './product.validation.js'
import { validate } from '../../middleware/validate.js'


let productRouter = express.Router()


productRouter.route('/').get(getAllProducts).post(validate(addProductValidation),addproduct)
productRouter.route('/:id').put(validate(updateProductValidation),updateproduct).delete(validate(deleteProductValidation),deleteproduct)



export default productRouter

//