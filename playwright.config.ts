import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 60 * 1000,
 // retries: process.env.CI ? 2 : 0,
//  workers: process.env.CI ? 1 : undefined,
 //  retries: 1,
  workers: 2,
 
 
  reporter:[ 
   ['html', {outputfolder: '../reports/html-report'}],
   ['allure-playwright', { outputfolder: '../reports/allure-report'} ]
],
  
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    permissions: ['geolocation'],
    // headless: false,

  },

  //grep: /@smoke/,

  /* Configure projects for major browsers */
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] }, },
    // {name: 'firefox', use: { ...devices['Desktop Firefox'] },},
    // {name: 'webkit', use: { ...devices['Desktop Safari'] },}  
  ]    


  // allure generate ./allure-results -o ./allure-report --clean
  //allure open ./allure-report
});
