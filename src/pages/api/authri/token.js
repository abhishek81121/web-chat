import { getCookie } from "cookies-next";
export default function handler(req, res) {
  if (req.method == "GET") {
    const refreshToken = getCookie("authtoken", { req, res });
    if (refreshToken == null) return res.status(401).json("Unauthorized");
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json("Unauthorized");
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5m",
      });
      res.json({ accessToken: accessToken });
    });
  }
}
