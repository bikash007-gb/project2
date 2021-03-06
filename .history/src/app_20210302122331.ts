const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
import {check,validationResult} from 'express-validator'
const productRouter=require('./router/productRoute')
const multers = require('multer')
const Products = require('./models/product')
const storage = multers.diskStorage({
        destination:'./uploads',
         filename: (req, file, cb) => {
            return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
       });
const uploads = multers({storage:storage})

const app= express();
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/product/create',uploads.single('product_img'),
check('name','name is required').notEmpty(),
check('unit_price','unit_price is required').notEmpty(),
check('quantity','quantity is required').notEmpty(),
async(req, res, next) => {
    console.log(req.file)
    const errors =validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const doc =new Products({
        name:req.body.name,
        unit_price:req.body.unit_price,
        description:req.body.description,
        quantity:req.body.quantity,
        product_img:req.file.path
    })
    await doc.save()
    res.status(201).json({
        msg:'suc',
        doc
    })
})
app.use('/product',productRouter)
module.exports=app;