import { user_cred } from "@/mongoose/model";
import axios from "axios";
import mongoose from "mongoose";
const bcrypt = require("bcrypt");
const Cryptr = require("cryptr");
export default async function handler(req, res) {
  const cryptr = new Cryptr(process.env.ENC_KEY);
  if (req.method == "POST") {
    await mongoose.connect(process.env.DB_URI);
    const result = await user_cred.find({ username: req.body.name });
    mongoose.connection.close();
    bcrypt.compare(
      req.body.password,
      result[0].password,
      async function (err, result) {
        if (result == true) {
          
          return res.status(200).json({ status: "loggedin" });
        } else {
          return res.status(401).json({ status: "unauthorized" });
        }
      }
    );
  } else {
    return res.json("Only Post Request Allowed");
  }
}
