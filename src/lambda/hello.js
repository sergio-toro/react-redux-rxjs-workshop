let count = 0;

export async function handler(event, context) {
    count++;
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello world ${count}` })
    };
}
