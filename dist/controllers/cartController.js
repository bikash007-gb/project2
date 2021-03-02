"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart = require('../models/cart');
const Product = require('../models/product');
const catchAsyncs = require('../util/catchAsync');
const factorys = require('../controllers/handlerFactory');
/* PUT request for addtocart functionality */
exports.addToCart = catchAsyncs((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product.findById(req.params.id);
    if (!product) {
        res.status(400).json({ msg: 'Product not found' });
    }
    let cart = yield Cart.findOne({ item: req.params.id });
    //console.log(cart)
    if (cart === null) {
        req.body.item = req.params.id;
        req.body.qty = 1;
        cart = yield Cart.create(req.body);
    }
    else {
        //console.log(cart)
        cart.qty = cart.qty + 1;
        yield cart.save();
    }
    res.status(200).json({
        msg: 'successfully added',
        cart
    });
}));
/*PATCH request to decrease one quantity from cart*/
exports.removeOneQuantityFromCart = catchAsyncs((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield Cart.findById(req.params.id);
    if (cart === null) {
        res.status(404).json({ msg: 'no item found' });
    }
    else {
        cart.qty = cart.qty - 1;
        yield cart.save();
    }
    res.status(200).json({
        msg: 'success',
        cart
    });
}));
exports.getAll = factorys.getAll(Cart);
exports.deleteOneItem = factorys.deleteOne(Cart);
exports.updateCart = factorys.updateOne(Cart);
//# sourceMappingURL=cartController.js.map