const expresse=require('express')
const productscontroller = require('../constrollers/productcontroller')

const router = expresse.Router()

router.post('/createOne',productscontroller.create)
module.exports = router;


