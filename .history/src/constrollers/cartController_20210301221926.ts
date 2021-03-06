const Cart=require('../models/cart')
const Product = require('../models/product')
const catchAsyncs = require('../util/catchAsync');

exports.addToCart = catchAsyncs(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(400).json({msg: 'Product not found'})
    }
    let cart = await Cart.findOne({item:req.params.id})
    console.log(cart)
    if(cart===null){
        req.body.item = req.params.id
        req.body.qty = 1
        cart=await Cart.create(req.body)
    }
    else{
        cart.qty =req.body.qty+1
        await cart.save()
    }
    res.status(200).json({msg: 'successfully added',cart})
})