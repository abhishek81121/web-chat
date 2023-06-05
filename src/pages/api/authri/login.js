import mongoose from "mongoose";
import { user_cred } from "@/mongoose/model";
import { setCookie } from "cookies-next";
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  const username = req.body.name;

  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5m",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  await mongoose.connect(process.env.DB_URI);
  await user_cred.updateOne(
    { username: username },
    { refreshToken: refreshToken }
  );

  mongoose.connection.close;
  setCookie("authtoken", refreshToken, { req, res });
  return res.json({ accessToken: accessToken, refreshToken: refreshToken });
}
