// Utility to parse configuration files
import * as fs from 'fs/promises';
import * as path from 'path';

export class ConfigParser {
    static async parse(filePath: string): Promise<any> {
        try {
            const data = await fs.readFile(path.resolve(filePath), 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading configuration file:', error);
            throw error;
        }
    }
}
