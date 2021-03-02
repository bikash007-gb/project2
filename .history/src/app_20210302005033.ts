const express = require('express');
const bodyParser = require('body-parser');
const productRouter=require('./router/productRoute')
const multers = require('multer')
const storage = multers.diskStorage({
        destination: function(req, file, cb) {
           cb(null, '../uploads/');
         },
         filename: function(req, file, cb) {
           cb(null, new Date().toISOString() + file.originalname);
         }
       });
const uploads = multers({dest:'uploads/'})

const app= express();
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/upload',uploads.single('product_img'),async(req, res, next) => {
    console.log(req.file)
})
app.use('/product',productRouter)
module.exports=app;