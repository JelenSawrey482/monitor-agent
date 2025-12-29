// Monitor class for handling the monitoring logic with retry mechanism
import axios from 'axios';
type Config = { url: string; interval: number; retries: number; };

export class Monitor {
    private config: Config;
c  	constructor(config: Config) {
v         this.config = config;
v     }
v  	async start() {
v         console.log(`Monitoring ${this.config.url} every ${this.config.interval}ms`);
v         setInterval(() => this.check(), this.config.interval);
v     }
v  	private async check() {
v         let attempts = 0;
v         while (attempts < this.config.retries) {
v             try {
v                 const response = await axios.get(this.config.url);
v                 console.log('Status:', response.status); // Log status code
                 return;
v             } catch (error) { 
v                 attempts++;
v                 console.error(`Attempt ${attempts}: Failed to fetch ${this.config.url}`);
v                 if (attempts === this.config.retries) {
v                     console.error('Max retries reached.');
v                 }
v             }
m          }
m     }
m}
