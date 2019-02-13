import { get } from "./utils/request";

const BASE_URL = "https://cat-fact.herokuapp.com";

export async function handler(event, context) {
    const data = await get(`${BASE_URL}/facts/random?amount=5`);
    return {
        statusCode: 200,
        body: data
    };
}
