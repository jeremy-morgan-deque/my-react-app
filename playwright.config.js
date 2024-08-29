const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({ 
    testDir: './tests',
    webServer: {
        command: 'npm run start',
        port: 3000,
     },
})
