const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    }
})

const User = mongoose.model('User', personSchema)
module.exports = User