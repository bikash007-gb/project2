const mongoos = require('mongoose');


const productSchema = new mongoos.Schema({
  product_name: {
    type: String,
  },
  product_image: {
    type: String,
    unique: true
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


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
