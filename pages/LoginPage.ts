import { Locator, Page } from "playwright";

export class LoginPage {

    private readonly page: Page

    private readonly txtEmailAddress: Locator
    private readonly txtPassword: Locator
    private readonly btnLogin: Locator
    private readonly txtErrorMessage: Locator


    constructor(page: Page) {
        this.page = page;
        this.txtEmailAddress = page.locator('#input-email');        
        this.txtPassword = page.locator('#input-password');
        this.btnLogin = page.locator('input[value="Login"]');
        this.txtErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');
        
    }


    // Action Methods
    // Set Email Address
    async setEmailAddress(email: string): Promise<void> {
        try {
            await this.txtEmailAddress.fill(email);
        } catch (error) {
            console.log("Error in setEmailAddress: ", error);
            throw error;
        }   

    }

    // Set Password
    async setPassword(password: string): Promise<void> {
        try {
            await this.txtPassword.fill(password);
        } catch (error) {
            console.log("Error in setPassword: ", error);
            throw error;
        }   
    }


    // Click Login Button
    async clickLogin(): Promise<void> {
        try {
            await this.btnLogin.click();
        } catch (error) {
            console.log("Error in clickLogin: ", error);
            throw error;
        }   
    }   


    //perfroms full login action
    async login(email: string, password: string): Promise<void> {
        try {           
            await this.setEmailAddress(email);
            await this.setPassword(password);
            await this.clickLogin();
        } catch (error) {
            console.log("Error in login: ", error);
            throw error;
        }
    }


    // Get Error Message
    async getErrorMessage(): Promise<string> {
        try {
            return await this.txtErrorMessage.textContent() || '';
        } catch (error) {
            console.log("Error in getErrorMessage: ", error);
            throw error;
        }   
    }   






}




