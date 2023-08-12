import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//fetch  Create new order
// POST /api/orders
// private
const addOderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

//fetch  get logged in user orders
// GET /api/orders/myorders
// private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

//fetch  get orderby id
// GET /api/orders/:id
// private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//fetch  update oredr to paid
// put /api/orders/:id/pay
// private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
     
    };
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder)
  }
  else{
    res.status(404)
    throw new Error('Order not found')
  }
});

//fetch  update oredr to delivered
// put /api/orders/:id/deliver
// private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to elivered");
});

//fetch  get all orders
// GET /api/orders
// private/admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user','id name');
  res.status(200).json(orders)
});

export {
  addOderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
