const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spotsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
    required: false,
  }],
  videos: [{
    type: String,
    required: false,
  }],
});

module.exports = mongoose.model('Spots', spotsSchema)
