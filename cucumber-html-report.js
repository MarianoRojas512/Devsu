const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/reports/cucumber-json',
  reportPath: 'cypress/reports',
  metadata: {
    browser: {
      name: 'chrome',
      version: '60'
    },
    device: 'Local test machine',
    platform: {
      name: 'Cypress',
      version: '8.7.0'
    }
  }
});