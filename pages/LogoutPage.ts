import { Locator, Page } from "playwright";
import { HomePage } from "./HomePage";


export class LogoutPage {

    private readonly page: Page

    private readonly msgLogout: Locator
    private readonly btnContinue: Locator       

    constructor(page: Page) {
        this.page = page;
        this.msgLogout = page.locator('h1:has-text("Account Logout")');
        this.btnContinue = page.getByRole('link', { name: 'Continue' });        
    }


    // Action Methods
    async getLogoutMessage(): Promise<string> {
        try {
            return await this.msgLogout.textContent() || '';
        } catch (error) {
            console.log("Error in getLogoutMessage: ", error);
            throw error;
        }
    }       


        async clickContinue(): Promise<HomePage> {
            try {
                await this.btnContinue.click();
                return new HomePage(this.page);
            } catch (error) {
                console.log("Error in clickContinue: ", error);
                throw error;
            }       
        }

   async isContinueButtonVisible(): Promise<boolean> {
        try {
            return this.btnContinue.isVisible();
        } catch (error) {
            console.log("Error in isContinueButtonVisible: ", error);
            throw error;
        }
    }   
        




}