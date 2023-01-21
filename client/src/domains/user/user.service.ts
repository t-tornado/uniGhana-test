import { Http } from "../../core";
import { UserEndpoints } from "./user.endpoints";

export const getUserProfileByMail = async (email: string) => {
  const path = `${UserEndpoints.getProfile}/?email=${email}`;
  const { data } = await Http.get(path);
  return data;
};
