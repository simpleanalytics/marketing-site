import { test, describe, before, after } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = "3002";
const baseUrl = `http://localhost:${port}`;

// Load test routes from JSON file
const testRoutesPath = join(__dirname, "./test-routes.json");
const testRoutes = JSON.parse(readFileSync(testRoutesPath, "utf-8"));

// Helper to wait for server to be ready
async function waitForServer(url, maxAttempts = 10) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await fetch(url);
      return true;
    } catch {
      await delay(500);
    }
  }
  return false;
}

describe("Legacy locale redirects", async () => {
  let server;

  before(async () => {
    const serverPath = join(__dirname, "../.output/server/index.mjs");
    if (!existsSync(serverPath)) {
      throw new Error(
        "Server build not found. Run `npm run build` before running tests.",
      );
    }

    server = spawn("node", [serverPath], {
      env: { ...process.env, PORT: port, NODE_ENV: "production" },
      stdio: "inherit",
    });

    // Wait for server to start
    const ready = await waitForServer(baseUrl);
    if (!ready) {
      throw new Error("Server failed to start");
    }
  });

  after(() => {
    if (server) {
      server.kill();
    }
  });

  for (const route of testRoutes) {
    test(`${route.source} -> ${route.target}`, async () => {
      const response = await fetch(`${baseUrl}${route.source}`, {
        redirect: "manual", // Don't follow redirects automatically
      });

      // Should be a redirect (301, 302, 307, or 308)
      assert.ok(
        [301, 302, 307, 308].includes(response.status),
        `Expected redirect status, got ${response.status}`,
      );

      // Check the Location header matches the expected target
      const location = response.headers.get("location");
      assert.ok(location, "Expected Location header to be set");

      // Location might be absolute or relative, normalize it
      const actualTarget = location.startsWith("http")
        ? new URL(location).pathname
        : location;

      assert.equal(
        actualTarget,
        route.target,
        `Expected redirect to ${route.target}, got ${actualTarget}`,
      );
    });
  }
});
