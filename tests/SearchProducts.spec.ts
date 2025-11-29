/**
 * Test case: Product Search after successful login
 * 
 * Tags: @master @regressiom
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Enter the product name in the search box and perform search
 * 3. Verify Search Results page is displayed
 * 4. Verify the specific product appears in the search results
 * 5. Logout from the application
 * 
 * 
 * 
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResulsPage';
import { TestConfig } from '../test.config';

let config: TestConfig;
let homePage: HomePage;
let searchResultsPage: SearchResultsPage;

// this hook will run before each test case
test.beforeEach(async ({ page }) => {
    config = new TestConfig();  
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
})



// optional to clean up after each test case
test.afterEach(async ({ page }) => {
    await page.close();
})




test('Product Search after successful login @master @regressiom', async () => {

    const productName = config.productName;

    // Enter the product name in the search box and perform search
    await homePage.searchProduct(productName);

     // Verify Search Results page is displayed
    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
    // Verify the specific product appears in the search results
    expect(await searchResultsPage.isProductExists(productName)).toBeTruthy();
    
});


