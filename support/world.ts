import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async startBrowser(): Promise<void> {
    this.browser = await chromium.launch({
      headless: true,
    });

    this.context = await this.browser.newContext({
      baseURL: process.env.BASE_URL ?? 'http://localhost:3000',
    });
    this.page = await this.context.newPage();
  }

  async closeBrowser(): Promise<void> {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);