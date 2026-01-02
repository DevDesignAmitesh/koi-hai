import { describe, it, expect } from "bun:test";
import axios from "axios";

const HTTP_URL = "http://localhost:4000/api/v1";
const WS_URL = "ws://localhost:8080";

describe("POST /create-pair", () => {
  it("it will fail as the inputs are not valid", async () => {
    await expect(
      axios.post(`${HTTP_URL}/auth/create-pair`, {})
    ).rejects.toMatchObject({
      response: { status: 411 },
    });
  });
});
