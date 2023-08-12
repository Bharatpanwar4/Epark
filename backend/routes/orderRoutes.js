import express from 'express'
const router = express.Router()
import { addOderItems,getMyOrders,getOrderById,updateOrderToPaid,updateOrderToDelivered,getOrders } from '../controllers/orderController.js'
import {protect,admin} from '../middleware/AuthMiddleware.js' 
// protect and admin are middlewares
router.route('/').post(protect,addOderItems).get(protect,admin,getOrders)
router.route('/mine').get(protect,getMyOrders)
router.route('/:id').get(protect,getOrderById)
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect,admin,updateOrderToDelivered)





export default router
