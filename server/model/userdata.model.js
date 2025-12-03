import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
});

const userModel = mongoose.model("userData", UserSchema, "users");

export default userModel;
