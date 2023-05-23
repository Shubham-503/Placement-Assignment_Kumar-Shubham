require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/post", (req, res) => {
  try {
    let data = [
      {
        id: 1,
        fname: "John",
        lname: "Doe",
        age: 30,
      },
      {
        id: 2,
        fname: "Jane",
        lname: "Smith",
        age: 25,
      },
      {
        id: 3,
        fname: "David",
        lname: "Johnson",
        age: 35,
      },
      {
        id: 4,
        fname: "Emily",
        lname: "Brown",
        age: 28,
      },
      {
        id: 5,
        fname: "Michael",
        lname: "Williams",
        age: 32,
      },
      {
        id: 6,
        fname: "Sophia",
        lname: "Miller",
        age: 29,
      },
      {
        id: 7,
        fname: "William",
        lname: "Taylor",
        age: 31,
      },
      {
        id: 8,
        fname: "Olivia",
        lname: "Anderson",
        age: 26,
      },
      {
        id: 9,
        fname: "James",
        lname: "Thomas",
        age: 33,
      },
      {
        id: 10,
        fname: "Ava",
        lname: "Wilson",
        age: 24,
      },
      {
        id: 11,
        fname: "Joseph",
        lname: "White",
        age: 27,
      },
      {
        id: 12,
        fname: "Emma",
        lname: "Martin",
        age: 30,
      },
      {
        id: 13,
        fname: "Daniel",
        lname: "Clark",
        age: 32,
      },
      {
        id: 14,
        fname: "Sophie",
        lname: "Lewis",
        age: 29,
      },
      {
        id: 15,
        fname: "Benjamin",
        lname: "Harris",
        age: 31,
      },
      {
        id: 16,
        fname: "Mia",
        lname: "Walker",
        age: 28,
      },
      {
        id: 17,
        fname: "Jacob",
        lname: "Hall",
        age: 26,
      },
      {
        id: 18,
        fname: "Chloe",
        lname: "Young",
        age: 25,
      },
      {
        id: 19,
        fname: "Ethan",
        lname: "Scott",
        age: 27,
      },
      {
        id: 20,
        fname: "Liam",
        lname: "Green",
        age: 33,
      },
    ];
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Error Occured ",
      error,
    });
  }
});
app.listen(PORT, () => {
  console.log("App is listening at ", PORT);
});
connectToDB();
