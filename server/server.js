require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
//DB CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(console.log("DB NOT CONNECTED SOME ERROR ENCOUNTERED"));

// MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());

//ROUTES
app.use("/api", authRoutes);
//PORT
const port = process.env.PORT || 8000;

//SERVER SETUP
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
