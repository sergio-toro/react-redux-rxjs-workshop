import { get } from "./utils/request";

const BASE_URL = "https://cat-fact.herokuapp.com";

function randomWait(maxWait = 5) {
  return new Promise(resolve => {
    const seconds = Math.floor(Math.random() * maxWait) + 1;
    setTimeout(resolve, seconds * 1000);
  });
}

export async function handler(event, context) {
  const { types = "", amount = 5 } = event.queryStringParameters;
  const data = await get(`${BASE_URL}/facts/random?amount=${amount}&animal_type=${types}`);
  await randomWait();
  return {
    statusCode: 200,
    body: data
  };
}
