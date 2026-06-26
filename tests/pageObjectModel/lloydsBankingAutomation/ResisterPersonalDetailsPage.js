import {test} from '@playwright/test';
export class ResisterPersonalDetailsPage{
    constructor(page){
        this.page=page;
        this.selectYourTitle=page.getByRole('combobox',{name:'Select your title'});
        this.firstNameInput=page.getByRole('textbox',{name:'First name'});
        this.middleNameInput=page.getByRole('textbox',{name:'Middle name'});
        this.lastNameInput=page.getByRole('textbox',{name:'Last name'});
        this.NoButton=page.getByText('No',{exact:true});
        this.continueButton=page.getByRole('button',{name:'Continue'});

    }
    async selectTitle(title){
        await this.selectYourTitle.selectOption(title);
    }
    async enterFirstName(firstName){
        await this.firstNameInput.fill(firstName);  
    }
    async enterMiddleName(middleName){
        await this.middleNameInput.fill(middleName);    
    }
    async enterLastName(lastName){
        await this.lastNameInput.fill(lastName);
    }
    async clickNoButton(){
        await this.NoButton.click();
    }
    async clickContinueButton(){
        await this.continueButton.click();  
    }


    async enterPersonalDetails(title,firstName,middleName,lastName){
        await this.selectTitle(title);
        await this.enterFirstName(firstName);
        await this.enterMiddleName(middleName);
        await this.enterLastName(lastName);
        await this.clickNoButton();
        await this.clickContinueButton();
    } } 
