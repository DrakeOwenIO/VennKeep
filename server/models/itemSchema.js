const mongoose = require("mongoose");

const itemsSchema = {
  name: String,
  model: String
}

const Item = mongoose.model("Item", itemsSchema);

module.exports = Item;