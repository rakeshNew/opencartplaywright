/**
 * Test case: Login with valid credentials
 * 
 * Tags: @master @sanity @regressiom
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Navigate to Login Page via home page
 * 3. Enter valid credentials and login
 * 4. Verify successful login by checking the presence of My Account page
 * 
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';    

let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;


// this hook will run before each test case
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
})


// optional to clean up after each test case
test.afterEach(async ({ page }) => {
    await page.close();
})



test('Login with valid credentials @master @sanity @regressiom', async () => {
    await homePage.clickMyAccount();
    await homePage.clickLogin();  
    
    //enter valid credentials and login
    await loginPage.login(config.email, config.password);

    // Verify My Account Page is displayed
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();       
});