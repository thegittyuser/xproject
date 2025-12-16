import userModel from "../model/userdata.model.js";
import bcrypt from "bcrypt";
import cryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
// register controller
export const doregister = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // existing email checking
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail)
      return res
        .status(400)
        .json({ ok: false, message: "Email is already registered" });

    // password encryption using bcrypt
    const password_hash = await bcrypt.hash(password, 10);

    const userDetail = await userModel.create({
      username,
      email,
      password: password_hash, //password hash
      phone,
    });

    res
      .status(201)
      .json({ ok: true, message: "Registration Successful", userDetail });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
};

// login controller
// temporary key storage
const sessionKeys = {};

export const dologin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDetail = await userModel.findOne({ email });
    if (!userDetail) {
      return res
        .status(400)
        .json({ ok: false, message: "Email does not exist" });
    }

    // pass_hash verify
    const passMatch = await bcrypt.compare(password, userDetail.password);
    if (!passMatch) {
      return res
        .status(400)
        .json({ ok: false, message: "Password not match!" });
    } else {
      const dynamicKey = cryptoJS.lib.WordArray.random(32).toString();
      const sessionId = uuidv4();
      sessionId[sessionKeys] = dynamicKey;
      const encryptedEmail = cryptoJS.AES.encrypt(email, dynamicKey).toString();

      return res.status(200).json({
        ok: true,
        message: "Login Successsful",
        userEmail: { email: userDetail.email },
      });
    }
  } catch (error) {
    console.error(error);
    return res.status.json({ ok: false, message: "Invalid Server Error" });
  }
};

export const Profile = async (req, res) => {
  const { email } = req.params;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ ok: false, message: "User not found!" });
  } else {
    return res.json({ ok: true, message: "User Found", user });
  }
};
