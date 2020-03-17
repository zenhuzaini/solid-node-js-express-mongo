const express = require('express')
const router = express.Router()

//product controller
const productController = require('../controller/productController')

//make schemavalidation
const joiSchemaValidationMiddleware = require('../middlewares/joiSchemaValidation')
//import schema
const productSchema = require('../apiSchema/productSchema')

router.post('/create',
    joiSchemaValidationMiddleware.validateBody(productSchema),
    productController.createProduct)

router.get('/', productController.getAllProduct)

module.exports = router