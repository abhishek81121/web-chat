import { deleteCookie } from "cookies-next";
export default function handler(req, res) {
  if (req.method == "DELETE") {
    deleteCookie("suthtoken", { req, res });
  }
}
