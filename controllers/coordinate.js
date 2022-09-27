const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Coordinate = require("../models/Coordinate");

module.exports = {
  coordinate: async (req, res) => {
    try {
      
    await Coordinate.create({
      lon: req.params.lon,
      lad: req.params.lad,
      user: req.user.id,
    });
  
    res.redirect("/profile");
  } catch (err) {
    console.log(err);
  }
  }};