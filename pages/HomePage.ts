import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly title: Locator;
  readonly description: Locator;
  readonly formLink: Locator;

  constructor(private readonly page: Page) {
    this.title = this.page.getByTestId('hero-heading');
    this.description = this.page.getByTestId('hero-description');
    this.formLink = this.page.getByTestId('nav-company');
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async clickFormLink(): Promise<void> {
    await this.formLink.click();
  }
}
