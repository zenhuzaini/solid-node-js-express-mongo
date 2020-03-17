const Product = require('../database/Product')
const { formatMongoData } = require('../helper/dbHelper')

const createProduct = async (serviceData) => {
    try {
        let product = new Product({ ...serviceData })
        const data = await product.save()
        return formatMongoData(data)
    } catch (error) {
        console.log('service - create Product')
        throw new Error(error)
    }
}

const allProducts = async () => {
    try {
        const data = await Product.find()
        return formatMongoData(data)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { createProduct, allProducts }