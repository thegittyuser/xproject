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
  increaseQty,
  removeProduct,
} from "../controller/cart.controller.js";

router.post("/doregister", doregister);
router.post("/dologin", dologin);
router.get("/profile/:sessionId", Profile);

// cart
router.post("/cart", cart);
router.get("/cart", getCart);
router.put(`/cart/:id`, increaseQty);
router.put(`/cart/:id`, decreaseQty);
router.delete(`/cart/:id`, removeProduct);
export default router;
