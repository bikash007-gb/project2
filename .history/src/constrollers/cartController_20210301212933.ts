const Cart=require('../models/cart')
const Product = require('../models/product')
const catchAsyncs = require('../util/catchAsync');

exports.addToCart = catchAsyncs(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(400).json({msg: 'Product not found'})
    }
    const cart = await Cart.findOne({item:req.params.id})
    if(!cart){
        cart.item = req.params.id
        cart.qty = 1
    }
    else{
        cart.qty =cart.qty+1
    }
    res.status(200).json({msg: 'successfully added',cart})
})