import Post from "../../../DB/Models/posts.models.js";
import Comment from "../../../DB/Models/comments.models.js";
import User from "../../../DB/Models/users.models.js";
export const createPost = async (req, res, next) => {
  try {
    const { title, content, authorId } = req.body;
    const post = await Post.create({
      title: title,
      content: content,
      authorId: authorId,
    });
    return res.status(201).json({ message: "post Created!", post });
  } catch (error) {
    return res.status(404).json("you Cannot create the post !", error);
  }
};
export const readPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, { include: [User, Comment] });
    if (!post) return res.status(404).json({ message: "Not found Post!" });
    return res.status(200).json({ message: "Post is found", post });
  } catch (error) {
    return res.status(404).json({ message: "error read the post", error });
  }
};
export const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, title } = req.body;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json("Not Found Post !");
    post.title = title;
    post.content = content;
    await post.save();

    return res.status(200).json({ message: "success Update", post });
  } catch (error) {
    return res.status(404).json({ message: "error update the post", error });
  }
};
export const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findPost = await Post.findByPk({ id: id });
    if (!findPost)
      return res.status(404).json({ message: "this post is already not here" });
    await findPost.destroy();
    return res.status(200).json("post deleted successfully");
  } catch (error) {
    return res
      .status(404)
      .json({ message: "we have a delete problem ", error });
  }
};
export const getUserPostAndComments = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: {
        model: Post,
        include: Comment,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "not found user" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "error reading the data", error: error.message });
  }
};
export const getSpecificPostWithAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postAuthor = await Post.findByPk(id, {
      include: User,
    });
    if (!postAuthor) return res.status(404).json({ message: "not found post" });
    return res.status(200).json({ postAuthor });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "error getting the post author!", error });
  }
};
