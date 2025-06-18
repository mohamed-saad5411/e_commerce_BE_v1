import { subcategoryModel } from "../../../database/model/subcategory.model.js";
import { catchError } from "../../utilties/errorHandle.js";
import { addOne, deleteOne, getAll, getSpecific, updateOne } from "../handler/factors.js";


const addsubCategory = addOne(subcategoryModel, 'subcategories')
const UpdatesubCategory = updateOne(subcategoryModel, 'subcategories')
const deletesubCategory = deleteOne(subcategoryModel, 'subcategories')
const getAllsubcategoriesRelatedCategory = catchError(async (req, res, next) => {
    let subcategories = await subcategoryModel.find({ category: req.params.categoryId }).populate('category')
    res.json({ message: 'success', subcategories })
})
const getSpecificSubcategory = getSpecific(subcategoryModel, 'subcategory', 'category')
const getAllsubcategoriesOnly = getAll(subcategoryModel, 'subcategory', 'category')


export {
    addsubCategory,
    getAllsubcategoriesRelatedCategory,
    UpdatesubCategory,
    deletesubCategory,
    getSpecificSubcategory,
    getAllsubcategoriesOnly
}