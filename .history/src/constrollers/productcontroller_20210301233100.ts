const product = require('../models/product')
const factory = require('./handlerFactory')
const catchAsyn = require('../util/catchAsync');
const multer = require('multer')
const upload = multer({dest:'uploads/'})
exports.create= (upload.single('product_img'),async (req, res, next) => {
    try{
    const doc = await product.create(req.body);
  
    res.status(201).json({
      status: 'success',
      doc
    });
}
catch(err){
console.log(err)
}
  });
exports.getAll=factory.getAll(product)

