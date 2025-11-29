import { Locator, Page } from "playwright";


export class RegistrationPage {

    private readonly page: Page
    private readonly txtFirstName: Locator
    private readonly txtLastName: Locator
    private readonly txtEmail: Locator
    private readonly txtTelephone: Locator
    private readonly txtPassword: Locator
    private readonly txtPasswordConfirm: Locator
    private readonly chkPrivacyPolicy: Locator      
    private readonly btnContinue: Locator   
    private readonly msgConfirmation: Locator
  

constructor(page: Page) {
    this.page = page;   
    this.txtFirstName = this.page.getByRole('textbox', { name: '* First Name' });
    this.txtLastName = this.page.getByRole('textbox', { name: '* Last Name' });
    this.txtEmail = this.page.getByRole('textbox', { name: '* E-Mail' });
    this.txtTelephone = this.page.getByRole('textbox', { name: '* Telephone' });
    this.txtPassword = this.page.getByRole('textbox', { name: '* Password', exact: true });
    this.txtPasswordConfirm = this.page.getByRole('textbox', { name: '* Password Confirm' });
    this.chkPrivacyPolicy = this.page.getByRole('checkbox');
    this.btnContinue = this.page.getByRole('button', { name: 'Continue' });
    this.msgConfirmation = this.page.getByRole('heading', { name: 'Your Account Has Been Created!' });

}

//action methods

//enter First Name
async enterFirstName(firstName: string): Promise<void> {
    await this.txtFirstName.fill(firstName);
}

//enter Last Name
async enterLastName(lastName: string): Promise<void> {
    await this.txtLastName.fill(lastName);
}   


//enter Email
async enterEmail(email: string): Promise<void> {
    await this.txtEmail.fill(email);
}   

//enter Telephone
async enterTelephone(telephone: string): Promise<void> {
    await this.txtTelephone.fill(telephone);
}

//enter Password
async enterPassword(password: string): Promise<void> {
    await this.txtPassword.fill(password);
}

//enter Password Confirm
async enterPasswordConfirm(passwordConfirm: string): Promise<void> {
    await this.txtPasswordConfirm.fill(passwordConfirm);
}

//check Privacy Policy
async checkPrivacyPolicy(): Promise<void> {
    await this.chkPrivacyPolicy.check();
}

//click Continue button
async clickContinue(): Promise<void> {
    await this.btnContinue.click();
}

//get Confirmation Message
async getConfirmationMessage(): Promise<string> {
    return await this.msgConfirmation.textContent() || '';
}


async completeRegistration(userData: {
                    firstName: string, 
                    lastName: string, 
                    email: string, 
                    telephone: string, 
                    password: string }): Promise<void> {   

            await this.enterFirstName(userData.firstName);               
            await this.enterLastName(userData.lastName);               
            await this.enterEmail(userData.email);               
            await this.enterTelephone(userData.telephone);               
            await this.enterPassword(userData.password);               
            await this.enterPasswordConfirm(userData.password);               
            await this.checkPrivacyPolicy();               
            await this.clickContinue();
          
        }
    }

















  