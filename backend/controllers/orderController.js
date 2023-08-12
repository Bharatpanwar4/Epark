import asyncHandler from "../middleware/asyncHandler.js";
import Order  from "../models/orderModel.js";

//fetch  Create new order
// POST /api/orders
// private
const  addOderItems=asyncHandler (async (req,res)=>{
res.send('add order items')
   

})

//fetch  get logged in user orders
// GET /api/orders/myorders
// private
const  getMyOrders=asyncHandler (async (req,res)=>{
    res.send('get my orders')
       
    })

 //fetch  get orderby id
// GET /api/orders/:id
// private
const  getOrderById=asyncHandler (async (req,res)=>{
    res.send('get order by id')
       
    })

//fetch  update oredr to paid
// GET /api/orders/:id/pay
// private
const  updateOrderToPaid=asyncHandler (async (req,res)=>{
    res.send('update order to paid')
       
    })

//fetch  update oredr to delivered
// GET /api/orders/:id/deliver
// private/Admin
const  updateOrderToDelivered=asyncHandler (async (req,res)=>{
    res.send('update order to elivered')
       
    })

//fetch  get all orders
// GET /api/orders
// private/admin
const  getOrders=asyncHandler (async (req,res)=>{
    res.send('get all orders')
       
    })


    export {addOderItems,getMyOrders,getOrderById,updateOrderToPaid,updateOrderToDelivered,getOrders}