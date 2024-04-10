import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://phptravels.net/');
  await page.getByText('Select City').nth(1).click();
  await page.getByText('Lahore Pakistan').click();
  await page.locator('div:nth-child(2) > .form-floating > .select2 > .selection > .select2-selection > #select2--container > div').click();
  await page.locator('#select2--results').getByText('Dubai United Arab Emirates').click();
  await page.goto('https://phptravels.net/flights/lhe/dxb/oneway/economy/13-04-2024/1/0/0');
  await page.getByRole('button', { name: 'Select Flight' }).click();
});