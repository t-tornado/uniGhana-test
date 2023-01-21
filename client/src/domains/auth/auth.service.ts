import { Http } from "../../core";
import { AuthEndpoints } from "./auth.endpoints";
import { AuthInterface } from "./auth.interface";

const login = async (payload: AuthInterface) => {
  await Http.post(AuthEndpoints.login, payload);
};

const signup = async (payload: AuthInterface) => {
  await Http.post(AuthEndpoints.signup, payload);
};

export const AuthService = {
  login,
  signup,
};
