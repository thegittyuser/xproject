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
export const dologin = () => async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ ok: false, message: "Email does not exist" });
    }

    // pass_hash verify
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res
        .status(400)
        .json({ ok: false, message: "Password not match!" });
    } else {
      return res.status(200).json({ ok: true, message: "Login Successsful" });
    }
  } catch (error) {
    console.error(error);
    return res.status.json({ ok: false, message: "Invalid Server Error" });
  }
};
