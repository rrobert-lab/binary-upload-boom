const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comments");

const { ensureAuth, ensureGuest } = require("../middleware/auth");
router.post("/createComment/:id", commentController.createComment);
router.put("/likeComment/:id/:cid", commentController.likeComment);

module.exports = router;