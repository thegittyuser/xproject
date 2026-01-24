import express from "express";
const router = express.Router();
import {
  doregister,
  dologin,
  Profile,
} from "../controller/userdata.controller.js";

// cart
import {
  cart,
  decreaseQty,
  getCart,
  getOrders,
  increaseQty,
  placeOrder,
  removeProduct,
} from "../controller/cart.controller.js";

router.post("/doregister", doregister);
router.post("/dologin", dologin);
router.get("/profile/:sessionId", Profile);

// cart
router.post("/cart", cart);
router.get("/cart", getCart);
router.put("/cart/:id/increase", increaseQty);
router.put("/cart/:id/decrease", decreaseQty);
router.delete("/cart/:id", removeProduct);
router.post("/checkout", placeOrder);
router.get("/orders", getOrders);
export default router;
