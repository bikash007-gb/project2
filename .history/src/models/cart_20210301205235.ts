const mongo = require('mongoose')

const cartSchema=new mongo.Schema({
    item :{type: mongo.Schema.ObjectId, ref: 'product'}
})