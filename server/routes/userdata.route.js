import express from "express";
const router = express.Router();
import {
  doregister,
  dologin,
  Profile,
} from "../controller/userdata.controller.js";

// cart
import { cart } from "../controller/cart.controller.js";

router.post("/doregister", doregister);
router.post("/dologin", dologin);
router.get("/profile/:sessionId", Profile);

// cart
router.post("/cart", cart);

export default router;
