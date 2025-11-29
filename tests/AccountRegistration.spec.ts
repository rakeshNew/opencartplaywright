/**
 * Test case: Account Registration
 * 
 * Tags: @master @sanity @regressiom
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Go to My Account and Click on Register
 * 3. Fill in registration form with random data
 * 4. Agree to Privacy Policy and submit the form
 * 5. Validate the confirmation message  
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataGenerator } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let registrationPage: RegistrationPage;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);

})


test.afterEach(async ({ page }) => {
    await page.close();
})


test('Account Registration Test @master @sanity @regressiom', async () => {

    await homePage.clickMyAccount();
    await homePage.clickRegister();
    await registrationPage.enterFirstName(RandomDataGenerator.generateFirstName());
    await registrationPage.enterLastName(RandomDataGenerator.generateLastName());
    await registrationPage.enterEmail(RandomDataGenerator.generateEmail());
    await registrationPage.enterTelephone(RandomDataGenerator.generateTelephone());
    const password = RandomDataGenerator.generatePassword();
    await registrationPage.enterPassword(password);
    await registrationPage.enterPasswordConfirm(password);

    console.log("Password : ", password);
    await registrationPage.checkPrivacyPolicy();
    await registrationPage.clickContinue();

    const confirmMsg = await registrationPage.getConfirmationMessage()

    console.log(confirmMsg)

    // Validate confirmation message
    expect(await registrationPage.getConfirmationMessage()).toContain('Your Account Has Been Created!');


})



