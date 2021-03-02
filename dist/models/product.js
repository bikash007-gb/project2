const mongoos = require('mongoose');
const productSchema = new mongoos.Schema({
    name: {
        type: String
    },
    product_img: { type: String },
    description: { type: String },
    quantity: {
        type: Number,
    },
    unit_price: {
        type: Number
    }
});
const products = mongoos.model('product', productSchema);
module.exports = products;
//# sourceMappingURL=product.js.map