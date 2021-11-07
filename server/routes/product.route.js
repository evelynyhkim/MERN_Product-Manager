const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', ProductController.getAll)
    app.post('/api/product/new', ProductController.createOne)
    app.get('/api/product/:id', ProductController.getOne)
    
}