import { Http, HttpWithErrorWrapper } from "../../core";
import { AuthEndpoints } from "./auth.endpoints";
import { AuthInterface } from "./auth.interface";

const login = HttpWithErrorWrapper(async function (payload: AuthInterface) {
  await Http.post(AuthEndpoints.login, payload);
});

const signup = HttpWithErrorWrapper(async function (payload: AuthInterface) {
  await Http.post(AuthEndpoints.signup, payload);
});

export const AuthService = {
  login,
  signup,
};
