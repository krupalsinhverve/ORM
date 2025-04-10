const db = require("../models/index");
const { col } = require("sequelize");

exports.createComment = async (commentData) => {
  return await db.Comment.create(commentData);
};

exports.getComments = async () => {
  const comment = await db.Comment.findAll();
  return comment;
};

exports.getCommentByPostId = async (postId) => {
  const comment = await db.Comment.findAll({
    where: {
      postId: postId,
    },
    attributes: ["id", "content", [col("user.name"), "userName"]],
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
  });
  if (!comment) {
    throw new Error("Comment not found");
  }
  return comment;
};
