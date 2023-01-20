import { NodeServerClass } from "./server";
import { ENV } from "./utils";

const NodeServer = new NodeServerClass([]);
NodeServer.start(ENV.port);
