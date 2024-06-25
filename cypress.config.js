const { defineConfig } = require("cypress");
//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
 /* await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;*/
}

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    ignoreVideos: false,
  },

  e2e: {
        setupNodeEvents,
      //specPattern: "cypress/integration/tests/*.js",
      //specPattern: "cypress/integration/tests/enquireAccount.js",
      //specPattern: "cypress/integration/tests/FaliureExampleTest.js",
      specPattern: "cypress/integration/tests/Login.js",

//        specPattern: "cypress/integration/BDD/*.feature",
  },

});
