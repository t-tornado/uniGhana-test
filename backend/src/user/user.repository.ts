import { BaseRepositoryClass } from "../core";
import { UserModel, UserType } from "./user.model";

class UserRepositoryClass extends BaseRepositoryClass<UserType> {
  constructor() {
    super(UserModel);
  }
}

export const UserRepository = new UserRepositoryClass();
