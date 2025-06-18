

export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate({ ...req.body, ...req.params, ...req.query })
        if (error) {
            res.json(error.details)
        }
        else{
            next()
        }
    }
}