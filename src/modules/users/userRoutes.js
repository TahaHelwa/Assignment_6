// Implement routes and controllers for user registration, login, and logout. (email must be unique)

import Router from "express";
import * as usersControllers from "./users.controllers.js";

const userRouter = Router();

userRouter.post("/registration", usersControllers.registration);
userRouter.post("/login", usersControllers.login);
userRouter.post("/logout", usersControllers.logout);

export default userRouter;
