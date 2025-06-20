import dotenv from "dotenv";
dotenv.config({ path: __dirname+".env" });
require('dotenv').config()

export class App {
  static openaiApiKey: string | undefined = process.env.OPENAI_API_KEY;
  static connectDatabase: string | undefined = process.env.CONNECT_DATABASE;
  static port: string| undefined = process.env.PORT
}

export const setEndpoint = (endpoint: string) => {
  return `/api/v1/${endpoint}`;
};
