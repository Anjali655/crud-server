const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

//Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userdb");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

//Routes
app.use("/users", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
