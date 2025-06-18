
import { categoryModel } from "../../../database/model/category.model.js";
import { addOne, deleteOne, getAll, getSpecific, updateOne } from "../handler/factors.js";


const addCategory = addOne(categoryModel, 'category')
const UpdateCategory = updateOne(categoryModel, 'category')
const deleteCategory = deleteOne(categoryModel, 'category')
const getAllcategories = getAll(categoryModel, 'category')
const getSpecificCategory = getSpecific(categoryModel, 'category')


export {
    addCategory,
    getAllcategories,
    UpdateCategory,
    deleteCategory,
    getSpecificCategory
}