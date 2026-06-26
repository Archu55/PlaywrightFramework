import {test} from '@playwright/test';
test('verify the authentication page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByRole('heading', { name: 'Dashboard' }).isVisible();
   await page.context().storageState({path:"./playwright/.auth/auth.json"});
});


    

