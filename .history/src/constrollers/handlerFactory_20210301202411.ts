const catchAsync = require('../util/catchAsync');
const AppErrors = require('../util/AppError')

exports.createOne = Model =>
catchAsync(async (req, res, next) => {
  const doc = await Model.create(req.body);

  res.status(201).json({
    status: 'success',
    doc
  });
});

