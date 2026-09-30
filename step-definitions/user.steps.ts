import { expect } from '@playwright/test';
import { Given, Then, When } from '@cucumber/cucumber';

import { UserPage } from '../pages/UserPage';
import { CustomWorld } from '../support/world';

Given(
  'the user is on the Add User page',
  async function (this: CustomWorld) {
    this.userPage = new UserPage(this.page);
    await this.userPage.goto();
  },
);

When(
  'the user enters {string} in the user name field',
  async function (this: CustomWorld, name: string) {
    await this.userPage.enterName(name);
  },
);

When(
  'the user enters {string} in the user email field',
  async function (this: CustomWorld, email: string) {
    await this.userPage.enterEmail(email);
  },
);

When(
  'the user enters {string} in the user phone number field',
  async function (this: CustomWorld, phoneNumber: string) {
    await this.userPage.enterPhoneNumber(phoneNumber);
  },
);

When(
  'the user selects {string} as the user role',
  async function (this: CustomWorld, role: string) {
    await this.userPage.selectRole(role);
  },
);

When(
  'the user clicks the user submit button',
  async function (this: CustomWorld) {
    await this.userPage.submit();
  },
);

Then(
  'the user should be created successfully',
  async function (this: CustomWorld) {
    await expect(this.userPage.successMessage).toBeVisible();

    await expect(this.userPage.successMessage).toHaveText(
      'User created successfully.',
    );
  },
);

Then(
  'the user submit button should be disabled',
  async function (this: CustomWorld) {
    await expect(this.userPage.submitButton).toBeDisabled();
  },
);