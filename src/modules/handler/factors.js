import { catchError } from "../../utilties/errorHandle.js";
import slugify from "slugify";


export const addOne = (model, itemName) => {
    return catchError(async (req, res, next) => {
        req.body.slug = slugify(req.body.name || req.body.title, '_')
        const item = new model(req.body)
        await item.save()
        let response = {}
        response[itemName] = item
        item && res.status(201).json({ Message: `${itemName} is added successfully`, ...response });
    })
}

export const deleteOne = (model, itemName) => {
    return catchError(async (req, res, next) => {
        const { id } = req.params;
        const item = await model.findByIdAndDelete(id)
        !item && res.status(404).json({ Message: `${itemName} is not found` });
        item && res.status(201).json({ Message: `${itemName} is deleted successfully` });
    })
}

export const updateOne = (model, itemName) => {
    return catchError(async (req, res, next) => {
        if (req.body.name || req.body.title) {
            req.body.slug = slugify(req.body.name || req.body.title, '_')
        }
        const { id } = req.params;
        const item = await model.findByIdAndUpdate(id, req.body, { new: true })
        let response = {}
        response[itemName] = item
        !item && res.status(404).json({ Message: `${itemName} is not found` });
        item && res.status(201).json({ Message: `${itemName} is updated successfully`, ...response });
    })
}

export const getAll = (model, itemName, populateItem) => {
    return catchError(async (req, res, next) => {
        // 1-pagination
        const limitPage = 50
        const skipPageQuery = req.query.page * 1 || 1
        if (skipPageQuery <= 0) skipPageQuery = 1
        const skipPage = (skipPageQuery - 1) * limitPage
        //=====================================
        // 2- filteration
        let filterObj = req.query
        let exFilterObj = ['page', 'sort', 'fields', 'keywords']
        exFilterObj.forEach(element => {
            delete filterObj[element]
        });
        filterObj = JSON.stringify(filterObj)
        filterObj = filterObj.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
        filterObj = JSON.parse(filterObj)
        //=====================================
        let items = await model.find(filterObj).populate(populateItem).skip(skipPage).limit(limitPage)
        let response = {}
        response[itemName] = items
        res.json({ message: 'success', page: skipPageQuery, ...response })
    })
}

export const getSpecific = (model, itemName, populateItem) => {
    return catchError(async (req, res, next) => {
        let { id } = req.params
        let item = await model.findById(id).populate(populateItem)
        let response = {}
        response[itemName] = item
        res.json({ message: 'success', ...response })
    })
}

// export const getAllRef = (model, itemName, populateItem) => {
//     return catchError(async (req, res, next) => {
//         const limitPage = 5
//         let skipPageQuery = req.query.page * 1 || 1
//         if (skipPageQuery <= 0) skipPageQuery = 1
//         const skipPage = (skipPageQuery - 1) * limitPage

//         let items = await model.find().populate(populateItem).skip(skipPage).limit(limitPage)
//         let response = {}
//         response[itemName] = items
//         res.json({ message: 'success', page: skipPageQuery, ...response })
//     })
// }