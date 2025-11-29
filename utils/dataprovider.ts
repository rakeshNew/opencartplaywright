import fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

export class DataProvider {

   static getTestDataFromJson(filePath: string) {
        console.log('Received filePath:', filePath);  // Log the received file path
        
        if (!filePath || filePath.trim() === '') {
            console.error('Invalid file path provided');
            throw new Error('Invalid file path provided');
        }

        const absolutePath = path.resolve(filePath);
        if (!fs.existsSync(absolutePath)) {
            console.error(`File not found: ${absolutePath}`);
            throw new Error(`File not found: ${absolutePath}`);
        }

        let data: any;
        try {
            data = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
        } catch (error) {
            console.error('Error parsing JSON:', error);
            throw new Error(`Error parsing JSON in file: ${absolutePath}`);
        }
        return data;
    }


    static getDataFromCsv(filePath: string): any {
        let data = parse(fs.readFileSync(filePath), { columns: true, skip_empty_lines: true })
        return data;
    }

}

