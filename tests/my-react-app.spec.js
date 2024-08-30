// Get `test` and `expect` from axe-watcher's playwrightTest instead of playwright/test
const { test, expect } = require('./fixtures');
// axe DevTools API and reporter
const AxeDevtoolsBuilder = require('@axe-devtools/playwright').default;
const AxeDevtoolsReporter = require('@axe-devtools/reporter').default;

// Setup axe Reporter
const reporter = new AxeDevtoolsReporter(
  'axe-devtools--',     // file prepend
  './a11y-results/json' // json output dir
);

// Start test
test.describe('My React App', () => {
  
  // Convert axe DevTools JSON reports to HTML, jUnit, and CSV
  test.afterAll(async ({ context }) => {
      await reporter.buildHTML('./a11y-results/html/');
      await reporter.buildJUnitXML('./a11y-results/junit/');
      await reporter.buildCSV('./a11y-results/csv/');
  });

  // Goto locally running React instance
  test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/')
  });

  //
  // Unit Tests
  // axe-watcher will scan all DOM updates and UI interactions automatically
  //

  test('should contain a link to the home page', async ({ page }) => {
      const homeLink = await page.$('a[href="/"]');
      expect(homeLink).not.toBeNull();
  });

  // axe DevTools API call
  test('should pass automated accessibility test', async ({ page, browserName }) => {
    const results = await new AxeDevtoolsBuilder({ page }).analyze();
    reporter.logTestResult('my-react-app---' + browserName, results);
    expect(results.violations).toHaveLength(0);
  });
  
});
