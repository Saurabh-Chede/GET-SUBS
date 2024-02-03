const express = require("express");
const app = require("./app.js");

const mongoose = require("mongoose");
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
// const DATABASE_URL = "mongodb://127.0.0.1:27017/subscribers";

const DATABASE_URL = "mongodb+srv://saurabhchede21:zjz1wDbf29iYqX3n@cluster0.cecuypn.mongodb.net/";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
