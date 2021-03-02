import {check,validationResult} from 'express-validator'
const Cart=require('../models/cart')
const Product = require('../models/product')
const catchAsyncs = require('../util/catchAsync');
const factorys = require('../constrollers/handlerFactory')

exports.addToCart = catchAsyncs(
    check('item','item is required').notEmpty(),
    async(req,res,next)=>{
        const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(400).json({msg: 'Product not found'})
    }
    let cart = await Cart.findOne({item:req.params.id})
    //console.log(cart)
    if(cart===null){
        req.body.item = req.params.id
        req.body.qty = 1
        cart=await Cart.create(req.body)
    }
    else{
        //console.log(cart)
         cart.qty =cart.qty+1
         await cart.save()
    }
    res.status(200).json({
        msg: 'successfully added',
        cart})
})

exports.removeOneQuantityFromCart = catchAsyncs(async(req,res,next)=>{
    const cart = await Cart.findById(req.params.id)
    if(cart===null){
        res.status(404).json({msg: 'no item found'})
    }
    else{
        cart.qty=cart.qty-1
        await cart.save()
    }
    res.status(200).json({
        msg: 'success',
        cart})
})
exports.getAll = factorys.getAll(Cart)
exports.deleteOneItem = factorys.deleteOne(Cart) 

exports.updateCart = factorys.updateOne(Cart)