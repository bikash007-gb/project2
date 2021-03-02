const product = require('../models/product')
const factory = require('./handlerFactory')
exports.create= factory.createOne(product)
exports.getAll=factory.getAll(product)

