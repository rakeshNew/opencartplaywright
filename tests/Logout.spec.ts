/**
 * Test case: User Logout after successful login
 * 
 * Tags: @master @regressiom
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Navigate to Login Page via home page
 * 3. Enter valid credentials and login
 * 4. Verify successful login by checking the presence of My Account page
 * 5. Perform logout action
 * 6. Click on Continue button on logout confirmation page
 * 7. Verify user is redirected to home page after logout
 * 
 * 
 */
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';
import { LogoutPage } from '../pages/LogoutPage';


let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let logoutPage: LogoutPage;


// this hook will run before each test case
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    myAccountPage = new MyAccountPage(page);
  //  logoutPage = new LogoutPage(page);
})

// optional to clean up after each test case
test.afterEach(async ({ page }) => {
    await page.close();
})


test('User Logout after successful login @master @regressiom', async () => {
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    //enter valid credentials and login
    await loginPage.login(config.email, config.password);
    // Verify My Account Page is displayed
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
    // Perform logout action
   logoutPage = await myAccountPage.clickLogout();

    expect(await logoutPage.isContinueButtonVisible()).toBe(true);

    // Click on Continue button on logout confirmation page
   homePage = await logoutPage.clickContinue();
    // Verify user is redirected to home page after logout
    expect(await homePage.isHomePageExists()).toBeTruthy();
});

