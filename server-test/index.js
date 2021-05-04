const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello, world");
});
app.get("/profile", (req, res) => {
  return res.send("Profile");
});
app.get("/skills", (req, res) => {
  return res.send("Skills");
});

app.listen(port, () => console.log(`App started on port ${port}`));
