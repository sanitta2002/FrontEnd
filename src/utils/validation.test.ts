import { describe, expect, it } from "vitest";
import { loginSchema } from "./validation";

describe("Login validation", () => {
  it("should reject an invalid email", () => {
    const result = loginSchema.safeParse({
      email: "invalid-email",
      password: "123456",
    });

    expect(result.success).toBe(false);
  });

  it("should reject a short password", () => {
    const result = loginSchema.safeParse({
      email: "test@example.com",
      password: "123",
    });

    expect(result.success).toBe(false);
  });

  it("should accept valid email and password", () => {
    const result = loginSchema.safeParse({
      email: "test@example.com",
      password: "123456",
    });

    expect(result.success).toBe(true);
  });
});