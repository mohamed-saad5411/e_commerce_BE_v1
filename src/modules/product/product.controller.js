import { productModel } from "../../../database/model/product.model.js";
import { addOne, deleteOne, getAll, updateOne } from "../handler/factors.js";


const addproduct = addOne(productModel, 'product')
const updateproduct = updateOne(productModel, 'product')
const deleteproduct = deleteOne(productModel, 'product')
const getAllProducts = getAll(productModel, 'product')


export {
    addproduct,
    updateproduct,
    getAllProducts,
    deleteproduct
}