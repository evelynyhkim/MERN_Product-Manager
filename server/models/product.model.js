const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [2, 'title should be at least 2 characters']
    },
    price: {
        type: String,
    },
    description: {
        type: String,
        minLength: [2, 'title should be at least 2 characters']
    },
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product