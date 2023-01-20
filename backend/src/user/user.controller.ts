import { Request, Response } from "express";
import { BaseControllerClass } from "../core";
import { UserService } from "./user.service";

class UserControllerClass extends BaseControllerClass {
  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const loggedIn = await UserService.login(email, password);
      if (loggedIn) this.success(res, { message: "Login successful" });
    } catch (error: any) {
      this.clientError(res, error.message);
    }
  };
}

export const UserController = new UserControllerClass();
