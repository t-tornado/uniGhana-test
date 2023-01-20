import { Response } from "express";

export class BaseControllerClass {
  protected success = (res: Response, data?: any) => {
    return res.status(200).json({ data });
  };

  protected unauthorized = (res: Response, message?: string) => {
    return res
      .status(401)
      .json({ error: message ?? "This client request is unauthorized" });
  };

  protected clientError = (res: Response, errors?: any[]) => {
    return res.status(403).json({ error: errors });
  };
}
