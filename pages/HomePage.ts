import { Locator, Page } from "playwright";

export class HomePage {

    private readonly page: Page
    private readonly lnkMyAccount: Locator
    private readonly lnkRegister: Locator
    private readonly lnkLogin: Locator
    private readonly txtSearchBox: Locator
    private readonly btnSearch: Locator


    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.getByRole('link', { name: ' My Account' });
        this.lnkRegister = page.getByRole('link', { name: 'Register' });
        this.lnkLogin = page.getByRole('link', { name: 'Login' });
        this.txtSearchBox = page.locator('input[name="search"]');

        //*[@id="search"]/input
        this.btnSearch = page.locator('button[class="btn btn-default btn-lg"]');


    }

    //action methods

    //Check Home Page Exists
    async isHomePageExists(): Promise<boolean> {
        let title = await this.page.title();
        if (title) {
            return true
        }
        return false

    }


    //Click My Account Link
    async clickMyAccount(): Promise<void> {

        try {
        await this.lnkMyAccount.click();
        } catch (error) {
            console.log("Error clicking My Account link:", error);
            throw error;
        }
    }


    //Click Register Link
    async clickRegister(): Promise<void> {
        await this.lnkRegister.click();
    }


    //Click Login Link
    async clickLogin(): Promise<void> {

        try {
        await this.lnkLogin.click();
        }
        catch (error) {
            console.log("Error clicking Login link:", error);
            throw error;
        }
    }


    
    //Search Product
    async searchProduct(productName: string): Promise<void> {

        try {
        await this.txtSearchBox.fill(productName);
        await this.btnSearch.click();
        } catch (error) {
            console.log("Error searching for product:", error);
            throw error;
        }
    }











}