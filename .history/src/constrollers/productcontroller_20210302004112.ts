const product = require('../models/product')
const factory = require('./handlerFactory')
const catchAsyn = require('../util/catchAsync');
const multer = require('multer')
const path = require('path')
const expresses =require('express')
const ro=expresses.Router()
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads/');
//     },
//     filename: function(req, file, cb) {
//       cb(null, new Date().toISOString() + file.originalname);
//     }
//   });

const upload = multer({dest:'uploads/'})
ro.post('/upload',upload.single('product_img'),async(req, res, next) => {
    console.log(req.file)
})
exports.create= (upload.single('product_img'), async(req, res, next) => {
    
  });
exports.getAll=factory.getAll(product)

