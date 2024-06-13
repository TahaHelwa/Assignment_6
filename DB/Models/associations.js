import User from "./users.models.js";
import Post from "./posts.models.js";
import Comment from "./comments.models.js";

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Post.belongsTo(User, {
  foreignKey: "authorId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Comment.belongsTo(Post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Post, {
  foreignKey: "authorId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
