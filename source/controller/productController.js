const productService = require('../services/productService')
const constants = require('../constants/constants')

const createProduct = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const createProdFromService = await productService.createProduct(req.body)
        response.status = res.statusCode
        response.message = constants.productMessage.PROCUCT_CREATED
        response.body = createProdFromService
        return res.send(response)
    } catch (error) {
        console.log(error)
        response.status = res.statusCode
        response.message = error.message
        response.body = {}
        return res.send(response)
    }
}

const getAllProduct = async (req, res) => {
    try {
        let response = { ...constants.defaultServerResponse }
        const getFromService = await productService.allProducts()
        response.status = res.statusCode
        response.message = constants.productMessage.PRODUCT_FETCHED
        response.body = getFromService
        return res.send(response)
    } catch (error) {
        console.log(error)
        response.status = res.statusCode
        response.message = error.message
        response.body = {}
        return res.send(response)
    }
}

module.exports = { createProduct, getAllProduct }