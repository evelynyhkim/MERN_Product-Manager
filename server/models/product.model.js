const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [2, 'name should be at least 2 characters']}
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product