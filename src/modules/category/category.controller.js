// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'

import { categoryModel } from "../../../database/model/category.model.js";
import slugify from "slugify";
import { catchError } from "../../utilties/errorHandle.js";



const addCategory = catchError(async (req, res, next) => {
    const { name } = req.body;
    const category = new categoryModel({ name, slug: slugify(name, '_') })
    await category.save()
    !category && res.status(404).json({ Message: 'category name is already exist' });
    category && res.status(201).json({ Message: 'category is added successfully', category });

})


const UpdateCategory = catchError(async (req, res, next) => {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name, '_') }, { new: true })

    !category && res.status(404).json({ Message: 'category is not found' });
    category && res.status(201).json({ Message: 'category is updated successfully', category });
})

const deleteCategory = catchError(async (req, res, next) => {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id)

    !category && res.status(404).json({ Message: 'category is not found' });
    category && res.status(201).json({ Message: 'category is deleted successfully' });
})



const getAllcategories = catchError(async (req, res, next) => {
    let categories = await categoryModel.find()
    res.json({ message: 'success', categories })
})




export {
    addCategory,
    getAllcategories,
    UpdateCategory,
    deleteCategory
}