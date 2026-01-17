import cartModel from "../model/cart.model.js";

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
  let existingItem = req.params.id;
  existingItem.quantity += 1;
  await existingItem.save();
  return res.json({ ok: true });
};

export const decreaseQty = async (req, res) => {
  let existingItem = req.params.id;
  if (existingItem > 1) {
    existingItem.quantity -= 1;
    await existingItem.save();
    return res.json({ ok: true, message: "Quantity Updated" });
  }
};

export const removeProduct = async (req, res) => {
  const itemId = req.params.id;
  await findByIdAndDelete({ itemId: id });
  return res.json({ ok: true, message: "Quantity Updated" });
};
