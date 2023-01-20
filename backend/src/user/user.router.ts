import { Router } from "express";
import { AppRouter } from "../core";
import { UserController } from "./user.controller";

const UserRouter = Router();
UserRouter.post("/login", UserController.login);

export const userRouter = {
  path: "/api/v1/user",
  router: UserRouter,
} satisfies AppRouter;
