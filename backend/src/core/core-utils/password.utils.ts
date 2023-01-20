import bcrypt from "bcrypt";

class PasswordUtilClass {
  protected util: typeof bcrypt;

  constructor() {
    this.util = bcrypt;
  }

  encryptPassword = async (password: string): Promise<string> => {
    return new Promise((res, rej) => {
      bcrypt.hash(password, 10, function (err, hash) {
        if (err) rej(err);
        else res(hash);
      });
    });
  };

  decodePassword = async (
    passwordStr: string,
    hashStr: string
  ): Promise<boolean> => {
    return new Promise((res, rej) => {
      bcrypt.compare(passwordStr, hashStr, function (err, result) {
        if (err) rej(err);
        else res(result);
      });
    });
  };
}

export const PasswordUtil = new PasswordUtilClass();
