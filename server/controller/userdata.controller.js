import userModel from "../model/userdata.model.js";
import bcrypt from "bcrypt";
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
