// external modules
import { Request, Response, NextFunction } from "express";

// internal modules
import messages from '@/utils/json/messages.json';
import { getErrorMessage } from '@/utils/helpers/string'

export const tryCatch =
  (controller: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (error) {
      return res.status(500).send({
        message: messages.error,
        error: getErrorMessage(error)
      });
    }
  };
