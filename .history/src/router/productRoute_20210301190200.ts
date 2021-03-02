const expresse=require('express')
const productscontroller = require('../constrollers/productcontroller')

const router = express.Router()

router.post('/create',productscontroller.create)
module.exports = router;


