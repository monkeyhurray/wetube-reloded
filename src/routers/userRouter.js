import express from "express";

import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.post("/edit", edit);
userRouter.get("/delete", remove);
userRouter.get(":id", see);

export default userRouter;
