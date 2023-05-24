export default function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    console.log(data);

    return res.json({ 1: "hello" });
  } else {
    return res.json("Only Post Request Allowed");
  }
}
