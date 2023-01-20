import { AppException, PasswordUtil } from "../core";
import { UserType } from "./user.model";
import { UserRepository } from "./user.repository";

class UserServiceClass {
  private repository: typeof UserRepository;

  constructor() {
    this.repository = UserRepository;
  }

  login = async (email: string, password: string) => {
    let isPassword = false;
    const user = await this.repository.getDocument({ email });
    if (!user) throw new AppException("User with email not found");
    isPassword = await PasswordUtil.decodePassword(password, user?.password);
    return isPassword;
  };

  signup = async ({ email, password, username }: UserType) => {
    const passwordHash = await PasswordUtil.encryptPassword(password);
    const transformedUser = {
      email,
      password: passwordHash,
      username,
    } satisfies UserType;
    await this.repository.addDocument(transformedUser);
  };
}

export const UserService = new UserServiceClass();
