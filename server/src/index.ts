import { AppException, DBClient } from "./core";
import { NodeServerClass } from "./server";
import { userRouter } from "./user";
import { ENV } from "./utils";

const NodeServer = new NodeServerClass([userRouter]);
(async function () {
  try {
    await DBClient.connect();
    NodeServer.start(ENV.port);
  } catch (error: any) {
    throw new AppException(`Failed to Start server:   ${error.message}`);
  }
})();
