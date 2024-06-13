import { Router } from "express";
import * as commentControllers from "./comments.controllers.js";
const commentRouter = Router();

commentRouter.post("/createcomment", commentControllers.createComment);
commentRouter.get("/readcomment/:id", commentControllers.readComment);
commentRouter.put("/updatecomment/:id", commentControllers.updateComment);
commentRouter.delete("/deletecomment/:id", commentControllers.deleteComment);

export default commentRouter;
