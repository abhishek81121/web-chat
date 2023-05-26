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
          return res.status(200).json({ status: "loggedin" });
        } else {
          return res.status(401).json({ status: "unauthorized" });
        }
      }
    );
    mongoose.connection.close();
  } else {
    return res.json("Only Post Request Allowed");
  }
}
