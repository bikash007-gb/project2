const expresse=require('express')
const productscontroller = require('../constrollers/productcontroller')

const router = expresse.Router()

router.post('/createOne',productscontroller.create)
router.get('/getAll',productscontroller.getAll)
module.exports = router;


