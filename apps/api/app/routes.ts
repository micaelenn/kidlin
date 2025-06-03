// External modules
import express from "express";
import cors from "cors";

export const app = express();

// Internal modules
import { reports } from "./reports/reports.controller"
import { assistant } from "./assistant/assistant.controller"
import { heartbeat } from "./heartbeat/heartbeat.controller"

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("", reports);
app.use("", assistant);
app.use("", heartbeat);