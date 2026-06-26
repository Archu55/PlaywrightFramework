
import {page,expect} from '@playwright/test'
export class BillPayUiPage{
    constructor(page){
        this.page=page;
        this.pageTitle="BillPay – Practice App";
        this.users=page.getByRole('link').filter({ hasText: /Users$/});
        this.searchBox=page.getByRole('textbox', { name: 'Search' });
        this.refreshUser=page.getByTestId('refresh-users');
        this.searchedUserEmail=page.getByRole('table').getByRole('row').nth(1).getByRole('cell').nth(1);

    }


    async verifyPageTitle(){
      await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async searchUser(searchText)
    {
      await this.users.click();
      await this.searchBox.fill(searchText);
      await this.refreshUser.click();
    }
    
    async verifySearchUserEmail(expectedEmail){
        await expect(this.searchedUserEmail).toHaveText(expectedEmail);

    }
    


}
