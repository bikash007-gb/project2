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
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const express_validator_1 = require("express-validator");
const productRouter = require('./router/productRoute');
const multers = require('multer');
const Products = require('./models/product');
const storage = multers.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const uploads = multers({ storage: storage });
const app = express();
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* This route is use to Create new Product
validation is done using express-validator middleware */
app.post('/product/create', uploads.single('product_img'), express_validator_1.check('name', 'name is required').notEmpty(), express_validator_1.check('unit_price', 'unit_price is required').notEmpty(), express_validator_1.check('quantity', 'quantity is required').notEmpty(), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.file);
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const doc = new Products({
        name: req.body.name,
        unit_price: req.body.unit_price,
        description: req.body.description,
        quantity: req.body.quantity,
        product_img: req.file.path
    });
    yield doc.save();
    res.status(201).json({
        msg: 'suc',
        doc
    });
}));
app.use('/', productRouter);
module.exports = app;
//# sourceMappingURL=app.js.map