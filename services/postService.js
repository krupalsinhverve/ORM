const db = require("../models/index.js");
const { getCommentByPostId } = require("./commentService.js");

exports.createPost = async (postData) => {
  const post = await db.Post.create(postData);
  return post;
};

exports.getPosts = async () => {
  const posts = await db.Post.findAll({
    attributes: [
      "id",
      "title",
      "content",
      "user.id",
      "user.name",
      "user.email",
      "createdAt",
    ],
    raw: true,
    subQuery: false,
    logging: console.log,
    include: [
      {
        required: false,
        as: "user",
        model: db.User,
        attributes: [],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  return posts;
};

exports.getPostById = async (id) => {
  const post = await db.Post.findByPk(id, {
    attributes: [
      "id",
      "title",
      "content",
      "user.id",
      "user.name",
      "user.email",
      "createdAt",
    ],
    raw: true,
    subQuery: false,
    logging: console.log,
    include: [
      {
        required: false,
        as: "user",
        model: db.User,
        attributes: [],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  if (!post) {
    throw new Error("Post not found");
  }
  post.comments = await getCommentByPostId(id);
  return post;
};

exports.getPostByUserId = async (id) => {
  const posts = await db.Post.findAll({
    where: {
      userId: id,
    },
    order: [["createdAt", "DESC"]],
  });
  return posts;
}; // get post by user id

exports.deletePost = async (id) => {
  const post = await db.Post.findByPk(id);
  if (!post) {
    return { error: "Post not found" };
  }
  await post.destroy();
  return { message: "Post deleted successfully" };
};

exports.updatePost = async (id, postData) => {
  const post = await db.Post.findByPk(id);
  if (!post) {
    return { error: "Post not found" };
  }
  await post.update(postData);
  return post;
};
