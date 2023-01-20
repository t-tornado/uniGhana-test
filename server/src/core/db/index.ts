import mongoose from "mongoose";
import { ENV } from "../../utils";
import { AppException } from "../base-infrastructure";

export class DBClient {
  static connect = async () => {
    const { databaseUrl } = ENV;
    if (databaseUrl) {
      mongoose.set("strictQuery", false);
      await mongoose.connect(databaseUrl ?? "");
      console.log("CONNECTED TO DATABASE");
    } else {
      throw new AppException("Connection to DATABASE failed");
    }
  };
}
