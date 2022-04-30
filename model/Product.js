const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    fullname : {type: String, required: [true, 'product name must be provided']},
    url : {type: Number, required: [true, 'product price must be provided']},
    gender : {type: Boolean, default: false},
    birthday: {type: Number, default: 4.5},
    homeTown: {type: Date, default: Date.now()},
    job: {type: String},
    marriage: {type: String}
})

module.exports = mongoose.model('Product', productSchema)
