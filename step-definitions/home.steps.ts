import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { FormPage } from '../pages/FormPage';
import { HomePage } from '../pages/HomePage';
import { CustomWorld } from '../support/world';

Given('the user opens the application', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);

  await homePage.open();
});

Then('the home page title should be visible', async function (
  this: CustomWorld,
) {
  const homePage = new HomePage(this.page);

  await expect(homePage.title).toBeVisible();
});

When('the user clicks the onboard company link', async function (
  this: CustomWorld,
) {
  const homePage = new HomePage(this.page);

  await homePage.clickFormLink();
});

Then('the onboarding form page should be displayed', async function (
  this: CustomWorld,
) {
  const formPage = new FormPage(this.page);

  await expect(formPage.title).toBeVisible();
});