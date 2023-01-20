import { Response } from "express";

export class BaseControllerClass {
  protected success = (res: Response, data?: any) => {
    return res.status(200).json({ data });
  };

  protected unauthorized = (res: Response) => {
    return res
      .status(401)
      .json({ error: "This client request is unauthorized" });
  };

  protected clientError = (res: Response, errors?: any[]) => {
    return res.status(403).json({ error: errors });
  };
}
