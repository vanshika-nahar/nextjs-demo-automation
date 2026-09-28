import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { FormPage } from '../pages/FormPage';
import { CustomWorld } from '../support/world';

Given('the user opens the onboarding form', async function (this: CustomWorld) {
  const formPage = new FormPage(this.page);

  await formPage.open();
});

When(
  'the user enters company name {string}',
  async function (this: CustomWorld, companyName: string) {
    const formPage = new FormPage(this.page);

    await formPage.enterCompanyName(companyName);
  },
);

When(
  'the user enters diminutive name {string}',
  async function (this: CustomWorld, diminutiveName: string) {
    const formPage = new FormPage(this.page);

    await formPage.enterDiminutiveName(diminutiveName);
  },
);

When('the user enters CIN {string}', async function (this: CustomWorld, cin: string) {
  const formPage = new FormPage(this.page);

  await formPage.enterCIN(cin);
});

When('the user enters PAN {string}', async function (this: CustomWorld, pan: string) {
  const formPage = new FormPage(this.page);

  await formPage.enterPAN(pan);
});

When(
  'the user enters address {string}',
  async function (this: CustomWorld, address: string) {
    const formPage = new FormPage(this.page);

    await formPage.enterAddress(address);
  },
);

When('the user enters date {string}', async function (this: CustomWorld, date: string) {
  const formPage = new FormPage(this.page);

  await formPage.enterDate(date);
});

When('the user submits the onboarding form', async function (this: CustomWorld) {
  const formPage = new FormPage(this.page);

  await formPage.submit();
});

Then(
  'the onboarding form should remain on the form page',
  async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(/\/onboard-company(?:\?|$)/);
  },
);