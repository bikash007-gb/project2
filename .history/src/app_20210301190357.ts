const express = require('express');
const productRouter=require('./router/productRoute')
const app= express();
app.use('/product',productRouter)
module.exports=app;