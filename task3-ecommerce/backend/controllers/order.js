import { Order } from "../models/order.js";
import { asyncError } from "../middlewares/errormiddleware.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { Payment } from "../models/payment.js";
import { instance } from "../server.js";
import crypto from "crypto";

export const placeOrder = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    ItemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;
  const user = req.user._id;
  const orderoptions = {
    shippingInfo,
    orderItems,
    paymentMethod,
    ItemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };
  await Order.create(orderoptions);
  res.status(201).json({
    success: true,
    message: "Order placed via COD",
  });
});

export const placeOrderOnline = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    ItemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;
  const user = req.user._id;
  const orderoptions = {
    shippingInfo,
    orderItems,
    paymentMethod,
    ItemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };
  const options = {
    amount: Number(totalAmount) * 100,
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  res.status(201).json({
    success: true,
    order,
    orderoptions,
  });
});
export const paymentVerfication = asyncError(async (req, res, next) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    orderoptions,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZOR_PAY_KEYSECRET)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    const payment = await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    await Order.create({
      ...orderoptions,
      paidAt: new Date(Date.now()),
      paymentInfo: payment._id,
    });
    res.status(201).json({
      success: true,
      message: `Order Placed Successfully .Payment ID: ${payment._id}`,
    });
  } else {
    return next(new ErrorHandler("Payment Failed", 400));
  }
});
export const getMyOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({
    user: req.user._id,
  }).populate("user", "name");
  res.status(200).json({
    success: true,
    orders,
  });
});

export const getOrderDetails = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate("user", "name");
  if (!order) {
    return next(new ErrorHandler("invalid Order id", 404));
  }
  res.status(200).json({
    success: true,
    order,
  });
});
export const getadminOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({}).populate("user", "name");

  res.status(200).json({
    success: true,
    orders,
  });
});

export const processOrder = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Invalid Order ID"), 404);
  }
  if (order.orderStatus === "Processing") {
    order.orderStatus = "Shipped";
  } else if (order.orderStatus === "Shipped") {
    order.orderStatus = "Delivered";

    order.deliveredAt = new Date(Date.now());
  } else if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("Food Already Delivered"), 400);
  }
  await order.save();
  res.status(200).json({
    success: true,
    message: "Status Updated Successfully",
  });
});
