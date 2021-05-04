const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  return console.log("hello there");
});

app.listen(port, () => {
  return console.log(`server started on port ${port}`);
});
