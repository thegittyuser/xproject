import cartModel from "../model/cart.model.js";
import orderModel from "../model/order.model.js";

export const cart = async (req, res) => {
  try {
    const { id, title, price, image } = req.body;
    let existingItem = await cartModel.findOne({ id: id });
    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.json({ ok: true, message: "Quantity Updated" });
    }
    const cartDetails = await cartModel.create({
      id,
      title,
      price,
      image,
    });
    res
      .status(201)
      .json({ ok: true, message: "Product added to cart", cartDetails });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const cartItems = await cartModel.find();
    res.status(200).json({ ok: true, cartItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
};

export const increaseQty = async (req, res) => {
  try {
    let existingItem = await cartModel.findById(req.params.id);
    existingItem.quantity += 1;
    await existingItem.save();
    return res.json({ ok: true, message: "Quantity Updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
};

export const decreaseQty = async (req, res) => {
  try {
    let existingItem = await cartModel.findById(req.params.id);
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      await existingItem.save();
      return res.json({ ok: true, message: "Quantity Updated" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
};

export const removeProduct = async (req, res) => {
  try {
    await cartModel.findByIdAndDelete(req.params.id);
    return res.json({ ok: true, message: "Product Removed!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
};

export const checkout = () => {
  try {
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
};

export const placeOrder = async (req, res) => {
  try {
    const cartItems = await cartModel.find();
    if (cartItems.length < 1) {
      return res.status(400).json({ ok: false, message: "No items in cart" });
    } else {
      const totalPrice = cartItems.reduce((item, sumPrice) => {
        (sumPrice + item.price * item.quantity, 0);
      });
      await orderModel.create({
        product: cartItems,
        totalPrice,
        customer: req.body,
      });
      return res
        .status(201)
        .json({ ok: true, message: "Order Placed Successfully." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
};
