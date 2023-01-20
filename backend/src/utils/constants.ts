import { config } from "dotenv";

config();

export const ENV = {
  port: process.env.PORT,
};
