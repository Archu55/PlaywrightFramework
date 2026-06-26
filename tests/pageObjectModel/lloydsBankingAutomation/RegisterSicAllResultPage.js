export class RegisterSicAllResultPage{
    Constructor(page){
        this.page=page;
        this.searchTheList=page.locator('a').filter({ hasText: 'search the list.' })
        this.activitiesOfTrade=page.getByRole('radio',{name:'Labour organisations, activities of'})
        this.activitiesOfTradeContinueButton=page.getByRole('button', { name: 'Continue' })



    }

    async clickSearchTheList(){
        await this.searchTheList.click();
        await this.activitiesOfTrade.check();
        await this.activitiesOfTradeContinueButton.click();
    }
}