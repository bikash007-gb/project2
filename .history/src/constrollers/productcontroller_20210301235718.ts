const product = require('../models/product')
const factory = require('./handlerFactory')
const catchAsyn = require('../util/catchAsync');
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./uploads/')
    },
    filenames:(req,file,cb) => {
        cb(null,new Date().toISOString()+file.originalname)
    }
})

const upload = multer({dest:'uploads/'})
exports.create= (upload.single('product_img'),async (req, res, next) => {
    try{
    const doc =  await new product({
        name:req.body.name,
        description:req.body.description,
        quantity:req.body.quantity,
        unit_price:req.body.unit_price
    });
    await doc.save()

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

