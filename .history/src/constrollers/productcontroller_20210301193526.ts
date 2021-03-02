const product = require('../models/product')

exports.create=async(req,res,next) => {
    try {
        const products=await product.create(req.body)
        res.status(200).json({
            status:'success',
            products
        })
    } catch (error) {
        res.status(404).json({
            msg: error.message
        })
    }
}