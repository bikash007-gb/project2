const catchAsync = require('../util/catchAsync');
const AppErrors = require('../util/AppError')
const { check, validationResult } = require('express-validator');

/* Factory functions GET DELETE UPDATE CREATE which can be use in other controllers*/
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


exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
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
  });

  
exports.deleteOne = Model =>
catchAsync(async (req, res, next) => {
  const doc = await Model.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});