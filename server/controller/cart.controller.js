import cartModel from "../model/cart.model.js";

export const cart = async (req, res) => {
  try {
    const { id, title, price, image } = req.body;

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
