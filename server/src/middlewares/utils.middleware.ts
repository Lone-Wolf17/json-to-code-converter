/// Some utility middlewares
import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validateZodSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body,
      });

      next();
    } catch (err: any) {
      console.log(err);
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "VALIDATION_FAILED",
          errors: err.errors,
          code: "VALIDATION_FAILED",
        });
      }

      next(err);
    }
  };


