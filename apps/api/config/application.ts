import dotenv from "dotenv";
dotenv.config({ path: __dirname+".env" });

export const openaiApiKey = process.env.OPENAI_API_KEY;

export const setEndpoint = (endpoint: string) => {
  return `/api/v1/${endpoint}`;
};
