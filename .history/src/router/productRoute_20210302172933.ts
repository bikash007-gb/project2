const expresse=require('express')
const productscontroller = require('../controllers/productcontroller')
const cartController = require('../controllers/cartcontroller')
const router = expresse.Router()
/* API Routes */
router.get('/product/getAll',productscontroller.getAll)
router.get('/product/getAllCart',cartController.getAll)
router.put('/product/addToCart/:id',cartController.addToCart)
router.patch('/product/updateCart/:id',cartController.updateCart)
router.patch('/product/removeQty/:id',cartController.removeOneQuantityFromCart)
router.delete('/product/deleteOneQty/:id',cartController.deleteOneItem)
router.patch('/product/updateProduct/:id',productscontroller.update)
router.delete('/product/deleteProduct/:id',productscontroller.delete)

module.exports = router;


