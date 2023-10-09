const mongoose = require("mongoose");

const audienceSchema = new mongoose.Schema({
  customers: {
    type: String,
  },
  requirements: {
    type: String,
  },
  excluded: {
    type: String,
  },
  positions: {
    type: String,
  },
});

module.exports = mongoose.model('audience', audienceSchema)
