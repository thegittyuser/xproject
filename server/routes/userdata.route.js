import express from "express";
import { doregister } from "../controller/userdata.controller.js";
const router = express.Router();

router.post("/doregister", doregister);
// router.post("/dologin", dologin);
export default router;
