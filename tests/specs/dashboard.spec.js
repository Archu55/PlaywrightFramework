import { test, expect } from '@playwright/test';

test('Verify dashboard', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await expect(page.locator('h6'))
        .toHaveText('Dashboard');
});