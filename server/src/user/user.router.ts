import { Router } from "express";
import { AppRouter } from "../core";
import { UserController } from "./user.controller";

const UserRouter = Router();
UserRouter.post("/login", UserController.login);
UserRouter.post("/signup", UserController.signup);

export const userRouter = {
  path: "/api/v1/user",
  router: UserRouter,
} satisfies AppRouter;
