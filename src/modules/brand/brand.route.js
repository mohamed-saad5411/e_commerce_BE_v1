import express from 'express'
import { addbrand, deletebrand, getAllbrands, Updatebrand } from './brand.controller.js'



let brandRouter = express.Router()


brandRouter.route('/').get(getAllbrands).post(addbrand)
brandRouter.route('/:id').put(Updatebrand).delete(deletebrand)



export default brandRouter