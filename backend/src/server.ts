import express, { Express } from "express";
import cors from "cors";
import { AppRouter, AppException } from "./core";
import { ENV } from "./utils";

export class NodeServerClass {
  private app: Express;
  private routes: AppRouter[];

  constructor(routes: AppRouter[]) {
    this.app = express();
    this.routes = routes;
  }
  private createRoutes = (routes: AppRouter[]) => {
    routes.forEach(({ path, router }) => {
      this.app.use(path, router);
    });
  };

  private init = () => {
    this.app.use(express.json());
    this.app.use(cors());
    this.createRoutes(this.routes);
  };

  start = async (port?: string) => {
    try {
      const port = ENV.port;
      this.init();
      await this.app.listen(port ?? port);
      console.log(`BACKEND STARTED AT PORT ${port} 🚀🚀`);
    } catch (error: any) {
      throw new AppException(error.message);
    }
  };
}
