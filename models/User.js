const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  addresses: [addressSchema],
});

module.exports = mongoose.model("User", userSchema);
