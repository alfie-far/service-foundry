import { describe, expect, it } from "vitest";

const apiUrl = process.env.TASK_API_URL;

describe("GET /health integration", () => {
  it("returns healthy response from deployed API", async () => {
    expect(apiUrl).toBeDefined();

    const response = await fetch(`${apiUrl}/health`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      status: "ok",
      service: "task-api"
    });
  });
});