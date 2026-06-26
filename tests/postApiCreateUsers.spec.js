import { test, expect } from "@playwright/test";

test("API Post request", async ({ page,request }) => {
  const response = await request.post(
    "https://billpay-api.gauravkhurana-practice-api.workers.dev/v1/users",
    {
      headers: {
        "X-API-Key": "demo-api-key-123",
        /*accept: "application/json",
        "Content-Type": "application/json",
        "X-Request-Id": "swagger-x91zrt03f",*/
      },
      data: { email: "demo.test3@test.com", firstName: "demo", lastName: "User" },
    },
  );
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.data.email).toBe("demo.test3@test.com");
  expect(responseBody.data.firstName).toBe("demo");
  expect(responseBody.data.lastName).toBe("User");
  await page.goto('https://gauravkhurana.com/practise-api');
  await page.getByRole('link',{name:'launch the practice UI'}).click();
  await expect(page).toHaveTitle("BillPay – Practice App");
  await page.getByRole('link').filter({ hasText: /Users$/}).click();
  const searchRowData=await page.getByRole('table').getByRole('row').nth(1).getByRole('cell').nth(1);
  await expect(searchRowData).toHaveText('demo.test3@test.com');
});

