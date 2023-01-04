require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");

const uri =
  "mongodb+srv://ayushjha301:ashu%403001@cluster0.ato7al4.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();



app.listen(8000, () => {
  console.log("App running on port 8000");
});
