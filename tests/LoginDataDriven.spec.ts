import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';    
import { DataProvider} from '../utils/DataProvider';

//Load Json test data from loginData.json
const jsonPath = './testdata/loginData.json';
const jsonTestData = DataProvider.getTestDataFromJson(jsonPath);

for (const data of jsonTestData) {
  test(`Login Tests - ${data.testName} @dataDriven`, async ({page}) => {

    const config = new TestConfig();
    await page.goto(config.appUrl);
    const homePage = new HomePage(page);

    //Navigate to Login Page
    await homePage.clickMyAccount()
    await homePage.clickLogin();

    const loginPage = new LoginPage(page);

    //Perform Login
    await loginPage.login( data.email, data.password);
  

    if (data.expectedResult === "success") {
        //Validate successful login by checking for My Account page
        const myAccountPage = new MyAccountPage(page);
        expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();        
    } else {
        //Validate error message is displayed
        expect(await loginPage.getErrorMessage()).toBe(" Warning: No match for E-Mail Address and/or Password.");        
    }  
    })
  }