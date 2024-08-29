const { playwrightTest } = require('@axe-core/watcher')
const assert = require('assert')

// Get your axe Developer Hub configuration from environment variables.
const { AXE_DEVHUB_API_KEY, AXE_DEVHUB_SERVER = 'https://axe.deque.com' } = process.env;
assert(AXE_DEVHUB_API_KEY, 'AXE_DEVHUB_API_KEY is required')

module.exports = playwrightTest({
  axe: {
    apiKey: AXE_DEVHUB_API_KEY,
    serverURL: AXE_DEVHUB_SERVER
  },
  headless: false,
  args: ['--headless=new']
});


/*
const { test, expect } = playwrightTest({
  axe: {
    apiKey: AXE_DEVHUB_API_KEY,
    serverURL: AXE_DEVHUB_SERVER
  },
  //headless: false,
  //args: ['--headless=new']
})*/

//export { test, expect }
