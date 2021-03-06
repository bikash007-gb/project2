const mongo = require('mongoose')

const cartSchema=new mongo.Schema({
    item :{type: mongo.Schema.ObjectId, ref: 'product'},
    qty:{type:Number,default:0}
})

cartSchema.pre(/^find/,function(next){
    this.populate({
        path:'item',
        select : 'name -_v'
    })
    next();
})

const cart=mongo.model('cart', cartSchema)
module.exports=cart