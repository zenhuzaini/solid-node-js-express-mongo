const joi = require('@hapi/joi')

const validatObjectSchema = (data, schema) => {
    const result = joi.valid(data, schema)
    return true

}

const validateBody = (schema) => {
    return (req, res, next) => {
        const isValid = validatObjectSchema(req.body, schema)
        console.log(isValid)
        if (!isValid) {
            return res.send({ message: "not valid valid" })
        }
        next()
    }
}

module.exports = { validateBody }