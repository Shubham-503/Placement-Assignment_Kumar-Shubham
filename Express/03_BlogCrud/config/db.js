const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blog?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
