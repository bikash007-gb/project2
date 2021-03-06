const expresse=require('express')
const productscontroller = require('../constrollers/productcontroller')
const cartController = require('../constrollers/cartcontroller')
const router = expresse.Router()

router.post('/createOne',productscontroller.create)
router.get('/getAll',productscontroller.getAll)
router.put('/addToCart/:id',cartController.addToCart)
router.patch('/updateCart/:id',cartController.updateCart)
router.patch('/removeQty/:id',cartController.removeOneQuantityFromCart)
router.delete('/deleteOneQty/:id',cartController.)

module.exports = router;


