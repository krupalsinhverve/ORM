const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.route("/").get(postController.getPosts).post(postController.createPost);

router
  .route("/:id")
  .get(postController.getPostById)
  //   .put(postController.updatePost)
  .delete(postController.deletePost);

router.route("/:id/user").get(postController.getPostByUserId);

module.exports = router;
