import { defaultFetchAPIRequest } from "@/utils/actions";
import { endpoints } from "@/utils/application";

export const getImprovedReport = async (userReport: string, url: string) => {
  const endpoint = endpoints.assistant;
  const method = "POST";
  const body = { description: userReport, url: url};
  return await defaultFetchAPIRequest(endpoint, method, body);
};
