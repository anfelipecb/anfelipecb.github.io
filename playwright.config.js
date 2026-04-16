// @ts-check
// After npm install, run: npx playwright install chromium
// Start the site (e.g. docker compose up), then: npm run test:e2e
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  timeout: 60_000,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4000',
    trace: 'on-first-retry',
  },
});
