const expresse=require('express')
const productscontroller = require('../constrollers/productcontroller')

const router = expresse.Router()

router.post('/createOne',productscontroller.createOne)
module.exports = router;


