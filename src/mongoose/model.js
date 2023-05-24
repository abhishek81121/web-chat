import mongoose from "mongoose";

const Register = new mongoose.Schema({
  username: String,
  password: String,
});

export { Register };
