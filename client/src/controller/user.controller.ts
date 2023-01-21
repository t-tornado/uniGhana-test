import { ClientStorage, ClientStorageItems } from "../core";
import { AuthInterface } from "../domains";

const loadLoggedInUserData = () => {
  const loggedInUser = ClientStorage.get(ClientStorageItems.USER);
  return loggedInUser as AuthInterface;
};

export const UserController = {
  loadLoggedInUserData,
};
