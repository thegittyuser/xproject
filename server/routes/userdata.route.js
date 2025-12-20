import express from "express";
const router = express.Router();
import {
  doregister,
  dologin,
  Profile,
} from "../controller/userdata.controller.js";

router.post("/doregister", doregister);
router.post("/dologin", dologin);
router.get("/profile/:sessionId", Profile);

export default router;
