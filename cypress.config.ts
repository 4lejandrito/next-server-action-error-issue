import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
