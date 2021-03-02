const product = require('../models/product')
const factory = require('./handlerFactory')
const catchAsyn = require('../util/catchAsync');
exports.create= catchAsyn(async (req, res, next) => {
    const doc = await product.create(req.body);
  
    res.status(201).json({
      status: 'success',
      doc
    });
  });
exports.getAll=factory.getAll(product)

