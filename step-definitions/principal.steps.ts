import { expect } from '@playwright/test';
import { Given, Then, When } from '@cucumber/cucumber';

import { PrincipalPage } from '../pages/PrincipalPage';
import { CustomWorld } from '../support/world';

Given(
  'the user is on the Add Principal page',
  async function (this: CustomWorld) {
    this.principalPage = new PrincipalPage(this.page);

    await this.principalPage.goto();
  },
);

When(
  'the user enters {string} in the principal name field',
  async function (this: CustomWorld, principalName: string) {
    await this.principalPage.enterPrincipalName(principalName);
  },
);

When(
  'the user enters {string} in the short name field',
  async function (this: CustomWorld, shortName: string) {
    await this.principalPage.enterShortName(shortName);
  },
);

When(
  'the user enters {string} in the PAN field',
  async function (this: CustomWorld, pan: string) {
    await this.principalPage.enterPan(pan);
  },
);

When(
  'the user enters {string} in the GSTIN field',
  async function (this: CustomWorld, gstin: string) {
    await this.principalPage.enterGstin(gstin);
  },
);

When(
  'the user enters {string} in the address field',
  async function (this: CustomWorld, address: string) {
    await this.principalPage.enterAddress(address);
  },
);

When(
  'the user enters {string} in the contact person field',
  async function (this: CustomWorld, contactPerson: string) {
    await this.principalPage.enterContactPerson(contactPerson);
  },
);

When(
  'the user enters {string} in the email field',
  async function (this: CustomWorld, email: string) {
    await this.principalPage.enterEmail(email);
  },
);

When(
  'the user enters {string} in the phone number field',
  async function (this: CustomWorld, phone: string) {
    await this.principalPage.enterPhone(phone);
  },
);

When(
  'the user clicks the principal submit button',
  async function (this: CustomWorld) {
    await this.principalPage.submit();
  },
);

Then(
  'the principal should be created successfully',
  async function (this: CustomWorld) {
    await expect(this.principalPage.successMessage).toBeVisible();
    await expect(this.principalPage.successMessage).toHaveText(
      'Principal created successfully.',
    );
  },
);

Then(
  'the principal submit button should be disabled',
  async function (this: CustomWorld) {
    await expect(
      this.principalPage.submitButton,
    ).toBeDisabled();
  },
);