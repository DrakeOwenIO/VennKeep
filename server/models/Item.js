const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Item Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});

// Export the Schema
module.exports = Product = mongoose.model("Products", ProductSchema);