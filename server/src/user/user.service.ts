import { AppException, PasswordUtil } from "../core";
import { UserType } from "./user.model";
import { UserRepository } from "./user.repository";

class UserServiceClass {
  private repository: typeof UserRepository;

  constructor() {
    this.repository = UserRepository;
  }

  login = async (email: string, password: string) => {
    let loginSuccessFul = false;
    const user = await this.repository.getDocument({ email });
    if (user) {
      loginSuccessFul = await PasswordUtil.decodePassword(
        password,
        user?.password
      );
    }
    return loginSuccessFul;
  };

  signup = async ({ email, password, username }: UserType) => {
    const user = await this.repository.getDocument({ email });
    if (user) throw new AppException("User with this email already exists");
    const passwordHash = await PasswordUtil.encryptPassword(password);
    const transformedUser = {
      email,
      password: passwordHash,
      username,
    } satisfies UserType;
    await this.repository.addDocument(transformedUser);
  };

  getProfile = async (email: string) => {
    if (!email) throw new Error("Provide an email");
    const user = await UserRepository.getDocument({ email });
    return user;
  };
}

export const UserService = new UserServiceClass();
