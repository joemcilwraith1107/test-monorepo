import { config as base } from "@shared-tests";
import { defineConfig, devices } from "@playwright/test";

import "dotenv/config";

export default defineConfig({
  ...base,
  use: {
    ...base.use,
    baseURL:
      "https://github.com/microsoft/playwright",
    trace: "on-first-retry",
  },
});