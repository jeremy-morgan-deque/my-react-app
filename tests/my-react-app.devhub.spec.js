//const { assert } = require('chai');
//import { describe, it } from 'mocha';
//import { expect } from 'chai';
//const playwright = require('playwright');

//const { test, expect } = require('@playwright/test');
//const { ElementHandle } = require('@playwright/test');
const { test, expect } = require('./fixtures');
const AxeDevtoolsBuilder = require('@axe-devtools/playwright').default;
//const AxeDevtoolsReporter = require('@axe-devtools/reporter').default;

/*
const {
    wrapPlaywrightPage,
    PlaywrightController,
    playwrightConfig
} = require('@axe-core/watcher')
*/

// Setup axe Reporter
/*
const reporter = new AxeDevtoolsReporter(
  'axe-devtools--', // file prepend
  './a11y-results'   // output dir
);
*/

test.describe('My React App with axe-watcher', () => {
    
    /*test.afterAll(async ({ context }) => {
        await reporter.buildHTML('./a11y-results/html/')
        await reporter.buildJUnitXML('./a11y-results/xml/')
        await reporter.buildCSV('./a11y-results/csv/')

        await browser.close()
    });*/

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/')
    });

    test('should contain a link to the home page', async ({ page }) => {
        const homeLink = await page.$('a[href="/"]');
        expect(homeLink).not.toBeNull();
    });

    /*
    test('is accessible', async ({ page, browserName }) => {
        //await page.goto('http://localhost:3000/');
        const results = await new AxeDevtoolsBuilder({ page }).analyze();
        reporter.logTestResult('my-react-app---' + browserName, results);
        expect(results.violations).toHaveLength(0);
    });
    */
  
    /*test('should contain a list of links', async ({ page }) => {
      const links = await page.$$('ul li a')
      expect(links.length).toBeGreaterThan(20)
    })
  
    test('should contain a link to the login page', async ({ page }) => {
      const loginLink = await page.$('ul li a[href="/login"]')
      expect(loginLink).not.toBeNull()
    })*/
});


