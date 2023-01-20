import { Router } from "express";
import { AppRouter } from "../core";

const UserRouter = Router();
UserRouter.post("/login");

export const userRouter = {
  path: "api/v1/user",
  router: UserRouter,
} satisfies AppRouter;
