import Comment from "../../../DB/Models/comments.models.js";
import Post from "../../../DB/Models/posts.models.js";
import User from "../../../DB/Models/users.models.js";
export const createComment = async (req, res, next) => {
  try {
    const { content, userId, postId } = req.body;
    const comment = await Comment.create({ content, userId, postId });
    return res.status(200).json({ message: "success", comment });
  } catch (error) {
    return res.status(404).json({ message: "cannot create a comment", error });
  }
};
export const readComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id, { include: [User, Post] });
    if (!comment) return res.status(404).json({ message: "not found comment" });
    return res.status(200).json({ message: "success read!", comment });
  } catch (error) {
    return res.status(404).json({ message: "error to read comment", error });
  }
};
export const updateComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const comment = await Comment.findByPk(id);
    if (!comment) return res.status(404).json("not found comment");
    comment.content = content;
    await comment.save();
    return res.status(200).json({ message: "Updated Successfully", comment });
  } catch {
    return res.status(404).json({ message: "fail to update comment", error });
  }
};
export const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    if (!comment) return res.status(404).json({ message: "not found comment" });
    await comment.destroy();
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    return res.status(404).json({ message: "fail to delete comment", error });
  }
};
