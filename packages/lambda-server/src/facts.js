import { get } from "./utils/request";

const BASE_URL = "https://cat-fact.herokuapp.com";

export async function handler(event, context) {
  const { types = "", amount = 5 } = event.queryStringParameters;
  const data = await get(`${BASE_URL}/facts/random?amount=${amount}&animal_type=${types}`);
  return {
    statusCode: 200,
    body: data
  };
}
