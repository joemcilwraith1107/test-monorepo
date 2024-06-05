import { config as base } from "@shared-tests";
import { defineConfig, devices } from "@playwright/test";

import "dotenv/config";

export default defineConfig({
  ...base,
  use: {
    ...base.use,
    baseURL:
      "https://playwright.dev",
    trace: "on-first-retry",
  },
});