const express = require('express')
const ordersController = require('../controllers/orders')
const router = express.Router()

router.get('/get-orders', ordersController.getOrders)
router.post('/add-order', ordersController.addOrders)
router.delete('/delete-order', ordersController.deleteOrders)

module.exports = router;