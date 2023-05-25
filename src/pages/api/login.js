import { user_cred } from "@/mongoose/model";
import mongoose from "mongoose";
const bcrypt = require("bcrypt");
export default async function handler(req, res) {
  if (req.method == "POST") {
    await mongoose.connect(process.env.DB_URI);
    const result = await user_cred.find({ username: req.body.name });
    bcrypt.compare(
      req.body.password,
      result[0].password,
      function (err, result) {
        if (result == true) {
          console.log("logged in");
        } else {
          console.log("in");
        }
      }
    );
    mongoose.connection.close();
    return res.json({ 1: "hello" });
  } else {
    return res.json("Only Post Request Allowed");
  }
}
