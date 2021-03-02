var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const catchAsync = require('../util/catchAsync');
const AppErrors = require('../util/AppError');
const { check, validationResult } = require('express-validator');
/* Factory functions GET DELETE PATCH CREATE which can be use in other controllers*/
exports.createOne = Model => catchAsync((req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const doc = yield Model.create(req.body);
    res.status(201).json({
        status: 'success',
        doc
    });
}));
exports.getAll = Model => catchAsync((req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const doc = yield Model.find();
    res.status(200).json({
        status: 'success',
        doc
    });
}));
exports.updateOne = Model => catchAsync((req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const doc = yield Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        doc
    });
}));
exports.deleteOne = Model => catchAsync((req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const doc = yield Model.findByIdAndDelete(req.params.id);
    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: null
    });
}));
//# sourceMappingURL=handlerFactory.js.map