const joi = require('@hapi/joi')

const createProductSchema = joi.object().keys({
    name: joi.string().required(),
    quantity: joi.number().required()
})

module.exports = createProductSchema