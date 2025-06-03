// external modules
import { Request, Response, Router } from "express";

// internal modules
import { assistantService } from "./assistant.service";
import { reportsService } from "@/app/reports/reports.service";
import { setEndpoint } from "@/config/application";
import { tryCatch } from "@/utils/helpers/tryCatch";

export const assistant = Router();

// POST
assistant.post(
  setEndpoint("assistant"),
  tryCatch(async (req: Request, res: Response) => {
    const { description, url } = req.body;
    const improvedReport = await assistantService.setImprovedReport(description);
    
    const reportData = {
      report: description,
      answer: improvedReport.content,
      url: url
    }

    await reportsService.save(reportData)
    res.status(200).send({ answer: improvedReport.content });
  })
);

// GET
assistant.get(
  setEndpoint("assistant"),
  tryCatch(async (req: Request, res: Response) => {
    res.status(200).send({});
  })
);
