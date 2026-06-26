import {test} from '@playwright/test';
export class RegisterDateOfBirthPage{
    constructor(page){
        this.page=page;
        this.dayInput=page.getByRole('textbox', { name: 'Day' });
        this.monthInput=page.getByRole('textbox', { name: 'Month' });
        this.yearInput=page.getByRole('textbox', { name: 'Year' });
        this.continueButton=page.getByRole('button', { name: 'Continue' });
    }
    async enterDay(day){
        await this.dayInput.fill(day);
    }
    async enterMonth(month){
        await this.monthInput.fill(month);
    }
    async enterYear(year){
        await this.yearInput.fill(year);
    }
    async clickContinueButton(){
        await this.continueButton.click();
    }

    async enterDateOfBirth(day,month,year){
        await this.enterDay(day);
        await this.enterMonth(month);
        await this.enterYear(year);
        await this.clickContinueButton();
    }


}
