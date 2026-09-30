import { Locator, Page } from '@playwright/test';

export class UserPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly roleSelect: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.nameInput = page.getByTestId('user-name-input');
    this.emailInput = page.getByTestId('user-email-input');
    this.phoneInput = page.getByTestId('user-phone-input');
    this.roleSelect = page.getByTestId('user-role-select');
    this.submitButton = page.getByTestId('user-submit-button');
    this.successMessage = page.getByTestId(
      'user-success-message',
    );
  }

  async goto(): Promise<void> {
    await this.page.goto('/user');
  }

  async enterName(name: string): Promise<void> {
    await this.nameInput.fill(name);
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async enterPhoneNumber(phoneNumber: string): Promise<void> {
    await this.phoneInput.fill(phoneNumber);
  }

  async selectRole(role: string): Promise<void> {
    await this.roleSelect.selectOption(role);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async isSubmitDisabled(): Promise<boolean> {
    return this.submitButton.isDisabled();
  }
}