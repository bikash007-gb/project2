const expresse=require('express')
const productscontroller = require('../constrollers/productcontroller')
const cartController = require('../constrollers/cartcontroller')
const router = expresse.Router()

router.post('/createOne',productscontroller.create)
router.get('/getAll',productscontroller.getAll)
router.put('addToCart',cartController.addToCart)
module.exports = router;


