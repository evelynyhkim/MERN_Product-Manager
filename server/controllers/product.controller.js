const Product = require('../models/product.model')

module.exports = {
    getAll: (req, res) => {
        Product.find()
        .then(prods => {
            console.log('getAll')
            res.json(prods)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json(err)
        })
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
            res.status(400).json(err)
        })
    },
    getOne: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(prod=>{
            console.log('getOne', prod.title)
            res.json(prod)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    editOne: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true })
        .then(prod=>{
            console.log('editOne', prod.title)
            res.json(prod)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    deleteOne: (req, res) => {
        Product.findOneAndDelete({_id: req.params.id})
        .then(prod=>{
            console.log('deleteOne')
            res.json(prod)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}