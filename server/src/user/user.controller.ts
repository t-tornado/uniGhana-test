import { Request, Response } from "express";
import { AppException, BaseControllerClass } from "../core";
import { UserType } from "./user.model";
import { UserService } from "./user.service";

class UserControllerClass extends BaseControllerClass {
  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const loginSuccessful = await UserService.login(email, password);
      if (loginSuccessful) this.success(res, { message: "Login successful" });
      else throw new AppException("Invalid email or password");
    } catch (error: any) {
      this.clientError(res, error.message);
    }
  };

  signup = async (req: Request, res: Response) => {
    try {
      const userPayload = req.body as UserType;
      await UserService.signup(userPayload);
      this.success(res, { message: "Signup successful" });
    } catch (error: any) {
      this.clientError(res, error.message);
    }
  };

  getProfile = async (req: Request, res: Response) => {
    try {
      const { email } = req.query;
      const profile = await UserService.getProfile(email as string);
      this.success(res, profile);
    } catch (error: any) {
      this.clientError(res, error.message);
    }
  };
}

export const UserController = new UserControllerClass();
