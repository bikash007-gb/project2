const product = require('../models/product')
const factory = require('./handlerFactory')
const catchAsyn = require('../util/catchAsync');

exports.getAll=factory.getAll(product)
exports.update = factory.updateOne(product)
