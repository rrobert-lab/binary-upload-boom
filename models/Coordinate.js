const mongoose = require("mongoose");

const CoordinateSchema = new mongoose.Schema({
  
  lon: {
    type: Number,
    required: true,
  },
  lad: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Coordinate", CoordinateSchema);