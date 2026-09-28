import {
  After,
  Before,
} from '@cucumber/cucumber';

import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.startBrowser();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});