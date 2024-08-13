import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../src/app.js";

describe("Prisma developer test", () => {
  it('Should respond with "Hello, World!" on GET /', async () => {
    const response = await request(app).get("/");
    const responseBody = JSON.parse(response.text);

    expect(response.status).toBe(200);
    expect(responseBody).toEqual({ message: "Hello, World!" });
  });
});
