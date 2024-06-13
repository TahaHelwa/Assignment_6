import Router from "express";
import * as postControllers from "./posts.controllers.js";
const postRouter = Router();

postRouter.post("/createpost", postControllers.createPost);
postRouter.get("/readpost/:id", postControllers.readPost);
postRouter.put("/updatepost/:id", postControllers.updatePost);
postRouter.delete("/deletepost/:id", postControllers.deletePost);
postRouter.get(
  "/readuserpostandcomment/:id",
  postControllers.getUserPostAndComments
);
postRouter.get(
  "/readuserpostwithauthor/:id",
  postControllers.getSpecificPostWithAuthor
);

export default postRouter;
