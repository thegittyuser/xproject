import userModel from "../model/userdata.model.js";

export const doregister = async (req, res) => {
  const { username, email, password, phone } = req.body;
  try {
    const userDetail = await userModel.create({
      username,
      email,
      password,
      phone,
    });

    res.status(201).json({ message: "Registration Successful", userDetail });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", err });
  }
};
