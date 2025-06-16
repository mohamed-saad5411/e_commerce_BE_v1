import categoryRouter from "../modules/category/category.route.js"
import subCategoryRouter from "../modules/subcategory/subcategory.route.js"



export function bootstrap(app) {
    app.use('/api/v1/categories', categoryRouter)
    app.use('/api/v1/subcategories', subCategoryRouter)
    app.get('/', (req, res) => res.send('Hello World!'))
    // app.all('*', (req, res, next) => {
    //     next(new Error('Not Found Endpoint') )
    // })



    // app.use((err, req, res, next) => {
    //     // let error = err.errorResponse.errmsg
    //     res.status(500).json(err)
    // })
}