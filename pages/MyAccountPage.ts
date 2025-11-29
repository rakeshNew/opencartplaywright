import { Locator, Page } from "playwright";
import { LogoutPage } from "./LogoutPage";

export class MyAccountPage {

    private readonly page: Page


    //Locators
    private readonly msgHeading: Locator
    private readonly lnkLogout: Locator

    constructor(page: Page) {
        this.page = page;
        this.msgHeading = page.locator('h2:has-text("My Account")');
        this.lnkLogout = page.getByRole('link', { name: 'Logout' });
    }

    //Action Methods

    //Verify My Account Page Exists
    async isMyAccountPageExists(): Promise<boolean> {
        try {
            return await this.msgHeading.isVisible();
        } catch (error) {
            console.log("Error in isMyAccountPageExists: ", error);
            return false;
        }
    }


    // Click Logout Link
    async clickLogout(): Promise<LogoutPage> {
        try {
            await this.lnkLogout.click();
            return new LogoutPage(this.page);
        } catch (error) {
            console.log("Error in clickLogout: ", error);
            throw error;
        }
    }


    // get Page Title
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }


}