require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const auth = require("./authMiddleware");

const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/post", auth, (req, res) => {
  try {
    res
      .status(200)
      .json({
        success: true,
        message: "user is authenticated so we can receive data",
      });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Authentication Failed, can't send data ",
    });
  }
});

app.listen(PORT, () => {
  console.log("App is listening at ", PORT);
});
