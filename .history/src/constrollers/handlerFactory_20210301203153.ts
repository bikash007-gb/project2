const catchAsync = require('../util/catchAsync');
const AppErrors = require('../util/AppError')
const { check, validationResult } = require('express-validator');
exports.createOne = Model =>
catchAsync(async (req, res, next) => {
  const doc = await Model.create(req.body);

  res.status(201).json({
    status: 'success',
    doc
  });
});

exports.getAll = Model =>
catchAsync(async (req, res, next) =>{
  const doc =await Model.find();
  res.status(200).json({
    status:'success',
    doc
  })
})