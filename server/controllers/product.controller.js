const Product = require('../models/product.model')

module.exports = {
    getAll: (req, res) => {
        console.log('getAll')
        res.json('response')
    }
}