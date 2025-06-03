import extension from "@/utils/json/extension.json";

/*
 * Make default Fetch API request based on parameters return response and status code
 *
 */
export const defaultFetchAPIRequest = async (
  endpoint: string,
  method: string,
  body?: object
) => {
  try {
    const response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
  
    const responseJSON = await response.json();
    return { status: response.status, data: responseJSON };
  }
  catch {
    return { status: '', data: { message: extension.error }  }
  }
};

/*
 * Make default GET request using Fetch API
 *
 */
export const defaultGETRequest = async (endpoint: string) => {
  const response = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJSON = await response.json();
  return { status: response.status, data: responseJSON };
};
