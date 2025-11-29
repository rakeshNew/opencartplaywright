import { faker } from "@faker-js/faker";



export class RandomDataGenerator {

    static generateFirstName(): string {
        return faker.person.firstName();
    }   

    static generateLastName(): string {
        return faker.person.lastName();     
    }
     

    static generateEmail(): string {
        return faker.internet.email();
    }       

    static generateTelephone(): string {
        return faker.phone.number(); // Generates a 10-digit phone number
    }       


    static generatePassword(): string {
        return faker.internet.password(); // Generates a password with a minimum length of 8 characters
    }           

    static generateAddress(): string {
        return faker.location.streetAddress();
    }   

  static generateCity(): string {
        return faker.location.city();
    }

    static generatePostalCode(): string {
        return faker.location.zipCode();
    }       

    static generateCountry(): string {
        return faker.location.country();
    }   

static generateState(): string {
        return faker.location.state();
    }   


    static generateCompany(): string {
        return faker.company.name();
    }   


    static generateProductName(): string {
        return faker.commerce.productName();
    }   


    static generateQuantity(): number {             

        return faker.number.int({ min: 1, max: 10 });
    }       

    static generatePrice(): string {        
        return faker.commerce.price({ min: 10, max: 2000, dec: 2, symbol: '$' });
    }


    static generateReviewText(): string {       

        return faker.lorem.sentence();

    }
}