import {expect} from '@playwright/test';
export class NationalityAndTaxPage{
    constructor(page){
        this.page=page;
        this.nationalityDropdown=page.getByRole('combobox',{name:"What’s your nationality?"})
        this.dualNationality=page.getByRole('radio',{name:No});
        this.taxResidencyRadio=page.getByRole('radio', { name: 'UK only' })
        this.taxResidencyCheckbox=page.getByRole('checkbox', { name: 'I confirm that I’m not a tax resident in any other country' })
        this.continueButton=page.getByRole('button', { name: 'Continue' });
    }

        async nationalityAndTax(){
            await this.nationalityDropdown.selectOption('United Kingdom');
            await this.dualNationality.check();
            await this.taxResidencyRadio.check();
            await this.taxResidencyCheckbox.check();
            await this.continueButton.click();

        }
    




    }
;
    