require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
const connectToDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',blogRoutes)
connectToDB()

app.listen(PORT, () => {
  console.log("App is listening at ", PORT);
});
