import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    shippingInfo: {
      hNo: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
      contactno: {
        type: Number,
        required: true,
      },
    },
    orderItems: {
      Frappe: {
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
      Latte: {
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
      Americano: {
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    paymentMethod: {
      type: "String",
      enum: ["COD", "Online"],
      default: "COD",
    },
    paymentInfo: {
      type: mongoose.Schema.ObjectId,
      ref: "Payment",
    },
    paidAt: Date,
    ItemsPrice: {
      type: Number,
      default: 0,
    },
    taxPrice: {
      type: Number,
      default: 0,
    },
    shippingCharges: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    orderStatus: {
      type: String,
      enum: ["Processing", "Shipped", "Delivered"],
      default: "Processing",
    },
    deliveredAt: Date,
    CreatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", schema);
