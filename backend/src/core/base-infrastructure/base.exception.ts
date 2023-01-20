Error.prototype.name = "Sample App";

export class AppException extends Error {
  constructor(message: string) {
    super(message);
  }
}
