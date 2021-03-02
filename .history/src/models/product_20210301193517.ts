const mongoos = require('mongoose');


const productSchema = new mongoos.Schema({
  product_name: {
    type: String,
  },
  product_image: {
    type: String,
    
  },
  
  description: {
    type: String,
    
  },
  quantity: {
    type: Number,
  },
  unit_price:{
      type: Number,
  }
});


const products = mongoos.model('product', productSchema);

module.exports = products;
