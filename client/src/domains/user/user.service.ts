import { Http, HttpWithErrorWrapper } from "../../core";
import { UserEndpoints } from "./user.endpoints";

// const getUserProfile = async (email: string) => {
//   const path = `${UserEndpoints.getProfile}/?email=${email}`;
//   try {
//     const { data } = await Http.get(path);
//     return data;
//   } catch (error: any) {
//     if (error instanceof AxiosError) {
//       throw new Error(error.response?.data?.error);
//     } else throw new Error(error.message);
//   }
// };

const getUserProfile = HttpWithErrorWrapper(async (email: string) => {
  const path = `${UserEndpoints.getProfile}/?email=${email}`;
  const { data } = await Http.get(path);
  return data;
});

export const UserService = {
  getUserProfile,
};
