// Main entry point for the monitoring agent
import { ConfigParser } from './utils/config-parser';
import { Monitor } from './monitor';

const args = process.argv.slice(2);
const configFilePath = args[0] || 'config/default.json';

async function main() {
    try {
        const config = await ConfigParser.parse(configFilePath);
        const monitor = new Monitor(config);
        await monitor.start();
    } catch (error) {
        console.error('Failed to start monitoring agent:', error);
    }
}

main();
