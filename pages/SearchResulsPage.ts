import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
    readonly page: Page;
    readonly searchPageHeader: Locator;
    readonly noResultsMessage: Locator;
    readonly searchProducsts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchPageHeader = page.locator('div#content h1');
        this.noResultsMessage = page.locator('div#content p:has-text("There is no product that matches the search criteria.")');
        this.searchProducsts = page.locator('h4>a');

    }

// Check if Search Results Page is displayed
    async isSearchResultsPageExists(): Promise<boolean> {
        try {
            const headerText = await this.searchPageHeader.textContent();
            return headerText?.includes('Search - ') || false;
        } catch (error) {
            console.error('Error in isSearchResultsPageExists:', error);
            return false;
        }
    }

// Check if "No results" message is visible
    async isNoResultsMessageVisible(): Promise<boolean> {
        return await this.noResultsMessage.isVisible();
    }


    // Check if a specific product exists in the search results
    async isProductExists(productName: string): Promise<boolean> {

        try {
            const productCount = await this.searchProducsts.count();
            for (let i = 0; i < productCount; i++) {
                const prodText = await this.searchProducsts.nth(i).textContent();
                if (prodText?.trim() === productName) {
                    return true;
                }
            }
        }
        catch (error) {
            console.error('Error in isProductExists:', error);
        }
        return false;
    }



}
