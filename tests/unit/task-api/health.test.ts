import { describe, expect, it } from "vitest";
import { handler } from "../../../apps/task-api/src/handlers/health";

describe("GET /health", () => {
  it("returns healthy response", async () => {
    const response = await handler();

    expect(response.statusCode).toBe(200);

    expect(JSON.parse(response.body)).toEqual({
      status: "ok",
      service: "task-api"
    });
  });
});