import { test, expect } from "@playwright/test";
import testdata from "../testData/createUserdata.json";
test("login page", async ({ page,request }) => {
  const response = await request.post(
    "https://billpay-api.gauravkhurana-practice-api.workers.dev/v1/users",
    {
      headers: {
        "X-API-Key": "demo-api-key-123",
        /*accept: "application/json",
        "Content-Type": "application/json",
        "X-Request-Id": "swagger-x91zrt03f",*/
      },
      data: { email: testdata.minimalUser.email, firstName:testdata.minimalUser.firstName, lastName:testdata.minimalUser.lastName },
    },
  );
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.data.email).toBe(testdata.minimalUser.email);
  expect(responseBody.data.firstName).toBe(testdata.minimalUser.firstName);
  expect(responseBody.data.lastName).toBe(testdata.minimalUser.lastName);
  await page.goto('https://gauravkhurana.com/practise-api');
  await page.getByRole('link',{name:'launch the practice UI'}).click();
  await expect(page).toHaveTitle("BillPay – Practice App");
  await page.getByRole('link').filter({ hasText: /Users$/}).click();
  const searchRowData=await page.getByRole('table').getByRole('row').nth(1).getByRole('cell').nth(1);
  await expect(searchRowData).toHaveText(testdata.minimalUser.email);
});
