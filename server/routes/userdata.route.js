import express from "express";
const router = express.Router();
import { doregister, dologin } from "../controller/userdata.controller.js";

router.post("/doregister", doregister);
router.post("/dologin", dologin);

export default router;
