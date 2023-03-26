import { Request, Response, NextFunction } from "express";
import HttpStatusCodes from "../constants/HttpStatusCodes";
import ApiError from "../utils/ApiError";

async (err: Error, _: Request, res: Response, next: NextFunction) => {
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof ApiError) {
    status = err.status;
  }

  return res.status(status).json({ error: err.message });
};
