import express from "express";
import { db_connection } from "./DB/connection.js";
import "./DB/Models/associations.js";
import userRouter from "./src/modules/users/userRoutes.js";
import postRouter from "./src/modules/posts/postRoutes.js";
import commentRouter from "./src/modules/comments/commentRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

db_connection();
// DB --> Models .
// User;
// Post;
// Comment;

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
