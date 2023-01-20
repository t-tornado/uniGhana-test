import { config } from "dotenv";

config();

export const ENV = {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
};
