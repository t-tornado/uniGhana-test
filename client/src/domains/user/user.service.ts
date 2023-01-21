import { Http } from "../../core";
import { UserEndpoints } from "./user.endpoints";

const getUserProfile = async (email: string) => {
  const path = `${UserEndpoints.getProfile}/?email=${email}`;
  const { data } = await Http.get(path);
  return data;
};

export const UserService = {
  getUserProfile,
};
