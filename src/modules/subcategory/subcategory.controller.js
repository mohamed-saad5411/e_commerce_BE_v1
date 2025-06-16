

import slugify from "slugify";
import { catchError } from "../../utilties/errorHandle.js";
import { subcategoryModel } from "../../../database/model/subcategory.model.js";



const addsubCategory = catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.name, '_')
    const subcategory = new subcategoryModel(req.body)
    await subcategory.save()
    res.status(201).json({ Message: 'subcategory is added successfully', subcategory });

})

const UpdatesubCategory = catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.name, '_')
    const { id } = req.params;
    const subcategory = await subcategoryModel.findByIdAndUpdate(id, req.body, { new: true })

    !subcategory && res.status(404).json({ Message: 'subcategory is not found' });
    subcategory && res.status(201).json({ Message: 'subcategory is updated successfully', subcategory });
})

const deletesubCategory = catchError(async (req, res, next) => {
    const { id } = req.params;
    const subcategory = await subcategoryModel.findByIdAndDelete(id)

    !subcategory && res.status(404).json({ Message: 'subcategory is not found' });
    subcategory && res.status(201).json({ Message: 'subcategory is deleted successfully' });
})

const getAllsubcategories = catchError(async (req, res, next) => {
    let subcategories = await subcategoryModel.find().populate('category')
    res.json({ message: 'success', subcategories })
})




export {
    addsubCategory,
    getAllsubcategories,
    UpdatesubCategory,
    deletesubCategory
}