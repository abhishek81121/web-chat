import { user_cred } from "@/mongoose/model";
import mongoose from "mongoose";
const bcrypt = require("bcrypt");
export default async function handler(req, res) {
  if (req.method == "POST") {
    let user = req.body.name;
    if (user.endsWith("@web_chat")) {
      console.log("@");
      await mongoose.connect(process.env.DB_URI);
      bcrypt.hash(req.body.password, 10, async function (err, hash) {
        // Store hash in your password DB.
        const obj = new user_cred({ username: req.body.name, password: hash });
        await obj.save();
        mongoose.connection.close();
      });
      return res.json("1");
    } else {
      return res.json("0");
    }
  }
}
