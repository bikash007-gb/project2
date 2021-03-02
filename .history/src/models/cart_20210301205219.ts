const mongo = require('mongoose')

const cartSchema=new mongo.Schema({
    item :{type: mongoose.Schema.ObjectId, ref: 'product'}
})