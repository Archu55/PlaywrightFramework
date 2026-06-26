import {test} from '@playwright/test';
export class RegisterPersonalAddressPage{
   constructor(page){
    this.page=page;
    this.propertyNameOrNumberInput=page.getByRole('textbox', { name: 'Enter property name or number' });
    this.ukPostcodeInput=page.getByRole('textbox', { name: 'Enter UK postcode' });
    this.findAddressButton=page.getByRole('button',{name:'Find address'});
    this.selectAddressDropdown=page.getByRole('combobox',{name:'Select your address'})
    this.selectMoveToAddressMonthDropdown=page.getByRole('combobox',{name:'Month'})
    this.enterMoveToAddressYear=page.getByRole('textbox', { name: 'Year' })
    this.confirmAddressButton=page.getByRole('button',{name:'Confirm'});
    this.continueButton=page.getByRole('button', { name: 'Continue' });
   }

   async enterPropertyNameOrNumber(propertyNameOrNumber){
    await this.propertyNameOrNumberInput.fill(propertyNameOrNumber);
   }
   async enterukPostcode(ukPostcode){
    await this.ukPostcodeInput.fill(ukPostcode);
   }    
   async clickFindAddressButton(){
    await this.findAddressButton.click();
   }    
   async selectAddressDropdownOption(address){
    await this.selectAddressDropdown.selectOption(address);
   }
   async clickConfirmAddressButton(){
    await this.confirmAddressButton.click();
   }
    async clickContinueButton(){
    await this.continueButton.click();
    }

    async enterRegisterPersonalAddress(propertyNameOrNumber,ukPostcode,address){
        await this.enterPropertyNameOrNumber(propertyNameOrNumber);
        await this.enterukPostcode(ukPostcode);
        await this.clickFindAddressButton();
        await this.selectAddressDropdownOption(address);
        await this.clickConfirmAddressButton();
        await this.selectMoveToAddressMonthDropdown.selectOption('January');
        await this.enterMoveToAddressYear.fill('2020');
        await this.clickContinueButton();
    }
};

