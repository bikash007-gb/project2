const Products = require('../models/products')

exports.create=async(req,res,next) => {
    try {
        const products=await Products.create(req.body)
        res.status(200).json({
            status:'success',
            products
        })
    } catch (error) {
        
    }
}