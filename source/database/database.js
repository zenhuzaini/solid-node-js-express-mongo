const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/solid'

const connect = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('something is connected! guess what')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect