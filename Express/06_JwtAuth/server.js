require("dotenv").config();
const express = require('express')
const app = express()
var cookieParser = require('cookie-parser')


const PORT = process.env.PORT || 4000;
const connectToDB = require("./config/db");
const authRoutes = require("./routes/authRoutes")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/api/v1',authRoutes)
connectToDB()

app.listen(PORT, () => {
  console.log("App is listening at ", PORT);
});

