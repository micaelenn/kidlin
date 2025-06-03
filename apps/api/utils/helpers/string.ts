import { internalErrorResponse } from "@/config/error";

export function getErrorMessage(error: any) {
    const isInstance = error instanceof Error;
    const isString = typeof error === "string";
    const isObject = typeof error === "object";
  
    if (isInstance) {
      internalErrorResponse.type = error.message;
    } else if (isString) {
      internalErrorResponse.type = error;
    } else if (isObject) {
      internalErrorResponse.type = JSON.stringify(error);
    }
  
    return internalErrorResponse;
}