import { Register } from "@/mongoose/model";
import mongoose from "mongoose";
const bcrypt = require("bcrypt");
export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    await mongoose.connect(process.env.DB_URI);
    const user_cred = mongoose.model("USER_INFO", Register);
    bcrypt.hash(req.body.password, 10, async function (err, hash) {
      // Store hash in your password DB.
      const obj = new user_cred({ username: req.body.name, password: hash });

      // await obj.save();
    });

    return res.json("hello");
  }
}
