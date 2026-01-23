import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    customer: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: Number,
      },
    },

    product: {
      id: {
        type: Number,
      },
      title: {
        type: String,
      },
      price: {
        type: Number,
      },
      image: {
        type: String,
      },
      totalAmount: {
        type: Number,
      },
      payment: {
        type: String,
        default: "Cash on delivery",
      },
    },
  },
  {
    timestamps: true,
  },
);

const orderModel = mongoose.model("orderModel", orderSchema, "orders");
export default orderModel;
