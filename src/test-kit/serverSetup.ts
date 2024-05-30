import { createServer, ViteDevServer } from 'vite';
import { chromium, Browser } from 'playwright-chromium';

let browser: Browser;
let server: ViteDevServer;

export async function launchServerAndBrowser(): Promise<Browser> {
   const server = await createServer();
   await server.listen();
   const browser = await chromium.launch();
   return browser;
}

export async function shutdownServerAndBrowser(): Promise<void> {
   if (browser) {
      await browser.close();
   }
   if (server) {
      await server.close();
   }
}
