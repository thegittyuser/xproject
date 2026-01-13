import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
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
});

const cartModel = mongoose.model("cartModel", cartSchema, "cart");
export default cartModel;
