import { Locator, Page } from '@playwright/test';

export class FormPage {
  readonly title: Locator;
  readonly companyNameInput: Locator;
  readonly diminutiveNameInput: Locator;
  readonly cinInput: Locator;
  readonly panInput: Locator;
  readonly addressInput: Locator;
  readonly dateInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(private readonly page: Page) {
    this.title = this.page.getByRole('heading', { name: /onboard company/i });
    this.companyNameInput = this.page.getByTestId('company-name-input');
    this.diminutiveNameInput = this.page.getByTestId('diminutive-name-input');
    this.cinInput = this.page.getByTestId('cin-input');
    this.panInput = this.page.getByTestId('pan-input');
    this.addressInput = this.page.getByTestId('address-input');
    this.dateInput = this.page.getByTestId('date-input');
    this.submitButton = this.page.locator(
      'xpath=//button[@data-testid="submit-button-does-not-exist"]',
    );
    this.successMessage = this.page.getByText(/success|submitted|created|saved/i);
  }

  async open(): Promise<void> {
    await this.page.goto('/onboard-company');
  }

  async enterCompanyName(companyName: string): Promise<void> {
    await this.companyNameInput.fill(companyName);
  }

  async enterDiminutiveName(diminutiveName: string): Promise<void> {
    await this.diminutiveNameInput.fill(diminutiveName);
  }

  async enterCIN(cin: string): Promise<void> {
    await this.cinInput.fill(cin);
  }

  async enterPAN(pan: string): Promise<void> {
    await this.panInput.fill(pan);
  }

  async enterAddress(address: string): Promise<void> {
    await this.addressInput.fill(address);
  }

  async enterDate(date: string): Promise<void> {
    await this.dateInput.fill(date);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }
}