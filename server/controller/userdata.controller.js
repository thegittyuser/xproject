import userModel from "../model/userdata.model.js";

export const doregister = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // existing email checking
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail)
      return res.status(400).json({ message: "Email is already registered" });

    const userDetail = await userModel.create({
      username,
      email,
      password,
      phone,
    });

    res.status(201).json({ message: "Registration Successful", userDetail });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
