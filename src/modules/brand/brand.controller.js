

import { brandModel } from "../../../database/model/brand.model.js";
import { addOne, deleteOne, getAll, updateOne } from "../handler/factors.js";



const addbrand = addOne(brandModel,'brand')
const Updatebrand = updateOne(brandModel,'brand')
const deletebrand = deleteOne(brandModel,'brand')
const getAllbrands = getAll(brandModel,'brand')

export {
    addbrand,
    getAllbrands,
    Updatebrand,
    deletebrand
}