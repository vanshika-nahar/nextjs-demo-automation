import { Page, Locator } from '@playwright/test';

export class PrincipalPage {
  readonly page: Page;
  readonly principalNameInput: Locator;
  readonly shortNameInput: Locator;
  readonly panInput: Locator;
  readonly gstinInput: Locator;
  readonly addressInput: Locator;
  readonly contactPersonInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly cancelButton: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.principalNameInput = page.getByTestId('principal-name-input');
    this.shortNameInput = page.getByTestId('principal-short-name-input');
    this.panInput = page.getByTestId('principal-pan-input');
    this.gstinInput = page.getByTestId('principal-gstin-input');
    this.addressInput = page.getByTestId('principal-address-input');
    this.contactPersonInput = page.getByTestId(
      'principal-contact-person-input',
    );
    this.emailInput = page.getByTestId('principal-email-input');
    this.phoneInput = page.getByTestId('principal-phone-input');
    this.cancelButton = page.getByTestId('principal-cancel-button');
    this.submitButton = page.getByTestId('principal-submit-button');
    this.successMessage = page.getByTestId(
      'principal-success-message',
    );
  }

  async goto(): Promise<void> {
    await this.page.goto('/principal');
  }

  async enterPrincipalName(name: string): Promise<void> {
    await this.principalNameInput.fill(name);
  }

  async enterShortName(name: string): Promise<void> {
    await this.shortNameInput.fill(name);
  }

  async enterPan(pan: string): Promise<void> {
    await this.panInput.fill(pan);
  }

  async enterGstin(gstin: string): Promise<void> {
    await this.gstinInput.fill(gstin);
  }

  async enterAddress(address: string): Promise<void> {
    await this.addressInput.fill(address);
  }

  async enterContactPerson(contactPerson: string): Promise<void> {
    await this.contactPersonInput.fill(contactPerson);
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async enterPhone(phone: string): Promise<void> {
    await this.phoneInput.fill(phone);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async isSubmitDisabled(): Promise<boolean> {
    return this.submitButton.isDisabled();
  }
}