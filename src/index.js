// import require modules
const express = require("express");
const app = require("./app.js");

const mongoose = require("mongoose");
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE

const DATABASE_URL = "mongodb+srv://saurabhchede21:zjz1wDbf29iYqX3n@cluster0.cecuypn.mongodb.net/";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// If an error occurs during connection, handle and log the error
db.on("error", (err) => console.log(err));

// If the connection is successful, log a success message
db.once("open", () => console.log("connected to database"));

// Start Server and make it listen on the specified port
// A message will be printed to the console once the server is up and running
app.listen(port, () => console.log(`App listening on port ${port}!`));
