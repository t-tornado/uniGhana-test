import { ClientStorage, ClientStorageItems } from "../core";
import { AuthInterface, AuthService, UserService } from "../domains";

const login = async (payload: AuthInterface) => {
  await AuthService.login(payload);
  const currentUser = await UserService.getUserProfile(payload.email);
  ClientStorage.set(ClientStorageItems.USER, currentUser);
};

const signup = async (payload: AuthInterface) => {
  await AuthService.signup(payload);
  const currentUser = await UserService.getUserProfile(payload.email);
  ClientStorage.set(ClientStorageItems.USER, currentUser);
};

export const AuthController = {
  login,
  signup,
};
