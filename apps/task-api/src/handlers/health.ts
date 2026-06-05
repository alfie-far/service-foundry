export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "ok",
      service: "task-api"
    })
  };
}