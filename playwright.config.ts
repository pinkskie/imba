import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 3000,
  retries: 2,
  use: {
    headless: true,
    baseURL: "http://localhost:5173",
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
  },
});
