import express from "express";
const router = express.Router();
import { doregister } from "../controller/userdata.controller.js";

router.post("/doregister", doregister);

export default router;
