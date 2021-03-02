const product = require('../models/product')
const factory = require('./handlerFactory')
const catchAsyn = require('../util/catchAsync');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });

const upload = multer({dest:'uploads/'})
exports.create= (upload.single('product_img'), (req, res, next) => {
//     
const products = new product({
    //_id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    unit_price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
    //product_imag: req.file.path 
  });
  products
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
            name: result.name,
            unit_price: result.price,
            _id: result._id,
            // request: {
            //     type: 'GET',
            //     url: "http://localhost:3000/products/" + result._id
            // }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  });
exports.getAll=factory.getAll(product)

