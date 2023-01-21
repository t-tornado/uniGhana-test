import { ClientStorage, ClientStorageItems } from "../core";
import { AuthInterface, AuthService, UserService } from "../domains";

const login = async (payload: AuthInterface) => {
  console.log("Logging In User", payload);
  await AuthService.login(payload);
  const currentUser = await UserService.getUserProfile(payload.email);
  ClientStorage.set(ClientStorageItems.USER, currentUser);
  console.log("Login Successful");
};

const signup = async (payload: AuthInterface) => {
  console.log("Signing up user", payload);
  await AuthService.signup(payload);
  const currentUser = await UserService.getUserProfile(payload.email);
  ClientStorage.set(ClientStorageItems.USER, currentUser);
  console.log("Signup Successful", currentUser);
};

export const AuthController = {
  login,
  signup,
};
