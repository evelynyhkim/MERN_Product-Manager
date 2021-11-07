const Product = require('../models/product.model')

module.exports = {
    getAll: (req, res) => {
        Product.find()
        .then(prods => {
            console.log('getAll')
            res.json(prods)
        })
        .catch(err=>console.log(err))
    },
    createOne: (req, res) => {
        console.log('createOne')
        Product.exists({title: req.body.title})
        .then(doesExist => {
            if(doesExist) {
                let msg = `Error: Product with title ${req.body.title} already exists.`
                res.json(msg)
                return Promise.reject(msg)
            } else return Product.create(req.body)
        })
        .then(prod=>res.json(prod))
        .catch(err=>{
            console.log(err)
            res.status(400).send({error: "something went wrong"})
        })
    }
}