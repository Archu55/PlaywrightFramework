import { test,expect } from '@playwright/test';

test('Bill pay app create user',{tag: '@smoke'}, async({page}) => {
    await page.goto('https://gauravkhurana.com/practise-api/');
    await page.getByRole('link',{name:'launch the practice UI'}).click();
    await expect(page).toHaveTitle("BillPay – Practice App");
    await page.getByRole('link').filter({ hasText: /Users$/}).click();
   /* await page.getByTestId('create-user-btn').click();
   await page.getByTestId('email-input').fill('test.testdata@gmail.om');
  await page.getByTestId('firstname-input').fill('archana');
  await page.getByTestId('lastname-input').fill('kumari');
  await page.getByTestId('phone-input').fill('+44 7435472433');
  await page.locator('form').getByRole('combobox', { name: 'KYC status' }).selectOption('verified');
  //await page.getByTestId('kyc-status-select').selectOption('verified');
  await page.getByRole('textbox', { name: 'Line' }).fill('39ilford hills');
  await page.getByRole('textbox', { name: 'City' }).fill('London');
  await page.getByRole('textbox', { name: 'State' }).fill('London');
  await page.getByTestId('postal-code-input').fill('IG12FJ');
  await page.getByTestId('country-input').fill('United Kingdom');
  await page.getByTestId('submit-user').click(); */
 await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('test.testdata@gmail.com');
  await page.getByTestId('refresh-users').click();
  await expect(page.getByRole('table').getByRole('row').nth(1).getByRole('cell').nth(1)).toHaveText('test.testdata@gmail.com');
});



