import mongoose from "mongoose";

const Register = new mongoose.Schema({
  username: String,
  password: String,
  refreshToken: String,
});
const user_cred = mongoose.model("USER_INFO", Register);
export { user_cred };
