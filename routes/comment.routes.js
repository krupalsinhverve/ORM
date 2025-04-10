const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router
  .route("")
  .get(commentController.getComments)
  .post(commentController.createComment);

router.route("/:id/post").get(commentController.getCommentByPostId);

module.exports = router;
