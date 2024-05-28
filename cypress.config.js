import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://192.168.0.101:5173",
    setupNodeEvents(on, config) {},
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/integration/tests/*.spec.js",
  },

  viewportWidth: 1366,
  viewportHeight: 768,
});
