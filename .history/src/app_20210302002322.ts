const express = require('express');
const bodyParser = require('body-parser');
const productRouter=require('./router/productRoute')
const app= express();
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json());


app.use('/product',productRouter)
module.exports=app;