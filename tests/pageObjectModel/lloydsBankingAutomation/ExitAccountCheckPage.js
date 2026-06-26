import {expect} from '@playwright/test';
export class ExitAccountCheckPage{
    constructor(page){
        this.page=page;
        this.haveCurrentAccountRadio=page.getByRole('radio',{name:'Yes'})
        this.sortCodeInput=page.locator('#sortCode')
        this.accountInput=page.getByRole('textbox', { name: 'Account number' })
        this.accountContinueButton=page.getByRole('button', { name: 'Continue' })
        this.beginStepTwoTitle=page.getByRole(('heading',{name:'Begin step two'}))
        this.beginStepTwoTitleContinueButton=page.getByRole('button', { name: 'Continue' })
        

    }

    async exitAccountCheck(){
        await this.haveCurrentAccountRadio.check();
        await this.sortCodeInput.fill('440022');
        await this.accountInput.fill('12345678');
        await this.accountContinueButton.click();
        await expect(this.beginStepTwoTitle).toBeVisible();
        await this.beginStepTwoTitleContinueButton.click();
    }
}