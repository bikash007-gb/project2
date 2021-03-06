const expresse=require('express')
const productscontroller = require('../constrollers/productcontroller')
const cartController = require('../constrollers/cartcontroller')
const router = expresse.Router()
/* API Routes */
router.get('/getAll',productscontroller.getAll)
router.get('/getAllCart',cartController.getAll)
router.post('/addToCart/:id',cartController.addToCart)
router.patch('/updateCart/:id',cartController.updateCart)
router.patch('/removeQty/:id',cartController.removeOneQuantityFromCart)
router.delete('/deleteOneQty/:id',cartController.deleteOneItem)
router.patch('/updateProduct/:id',productscontroller.update)
router.delete('/deleteProduct/:id',productscontroller.delete)

module.exports = router;


