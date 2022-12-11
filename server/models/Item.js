const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Item Schema
const ItemSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    require: true
  },
});

// Export the Schema
module.exports = Item = mongoose.model("Items", ItemSchema);