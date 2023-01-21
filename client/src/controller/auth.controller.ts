import { ClientStorage, ClientStorageItems } from "../core";
import { AuthInterface, AuthService, UserService } from "../domains";

const login = async (payload: AuthInterface) => {
  await AuthService.login(payload);
  const { data: currentUser } = await UserService.getUserProfile(payload.email);
  ClientStorage.set(ClientStorageItems.USER, currentUser);
};

const signup = async (payload: AuthInterface) => {
  await AuthService.signup(payload);
  const { data: currentUser } = await UserService.getUserProfile(payload.email);
  ClientStorage.set(ClientStorageItems.USER, currentUser);
};

const signout = () => {
  ClientStorage.reset();
};

export const AuthController = {
  login,
  signup,
  signout,
};
