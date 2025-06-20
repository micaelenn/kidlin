// external modules
import { Request, Response, Router } from "express";

// internal modules
import { assistantService } from "./assistant.service";
import { setEndpoint } from "@/config/application";
import { tryCatch } from "@/utils/helpers/tryCatch";

export const assistant = Router();

// POST
assistant.post(
  setEndpoint("assistant"),
  tryCatch(async (req: Request, res: Response) => {
    const { description } = req.body;
    const improvedReport = await assistantService.setImprovedReport(description);
    res.status(200).send({ answer: improvedReport.content });
  })
);

// GET
assistant.get(
  setEndpoint("assistant"),
  tryCatch(async (req: Request, res: Response) => {
    res.status(200).send({ answer: 'I may never know' });
  })
);
