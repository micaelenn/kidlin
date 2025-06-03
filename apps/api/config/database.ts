// external modules
import dotenv from "dotenv"
import { Sequelize } from "sequelize-typescript"

// models
import { Heartbeat } from '@/app/heartbeat/heartbeat.model'
import { Reports } from "@/app/reports/reports.model";

dotenv.config({ path: __dirname+".env" });

const database =  `${process.env.DB_NAME}`
const username = `${process.env.DB_USER}`
const password = `${process.env.DB_PASSWORD}`
const host = `${process.env.DB_HOST}`
const port = parseInt(process.env.DB_PORT || "3306");

export const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  port: port,
  models: [Heartbeat, Reports],
  logging: false,
});