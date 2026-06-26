import {expect} from '@playwright/test';
export class BusinessAccountHomePage{
    constructor(page){
        this.page=page;
        this.pageTitle="Business banking | Lloyds Bank | Business";
        this.getABusinessAccountLink=page.getByRole('link').filter({ hasText: 'Get a Business Account'});
        this.cookies=page.getByRole('button', { name: 'Accept all' });
        this.openBusinessAccountLink= page.getByRole('link', { name: 'Open a business bank account' }).first().or(page.getByRole('link', { name: 'Apply online in minutes' }).first());
        this.soleTraderLink=page.getByRole('button', { name: 'Sole trader' });
        this.annualTurnoverLink=page.getByText('Less than £3 million');
        this.annualTurnoverContinueButton=page.getByRole('button', { name: 'Continue' });
        this.expectTitle=page.getByRole('heading', { name: 'What to expect next' });
        this.nextContinueButton=page.getByRole('button', { name: 'Continue' });
        this.emailAddressInput=page.getByRole('textbox', { name: 'Enter your email address' })
        this.sendCodebutton=page.getByRole('button', { name: 'Send code' });
        this.emailPasscodeInput=page.getByRole('button', { name: 'Continue' });
        this.mobileInput=page.getByRole('textbox', { name: 'Enter your mobile number' });
        this.mobileSendCodeButton=page.getByRole('button', { name: 'Send code' });
        this.mobilePasscodeInput=page.getByRole('button', { name: 'Continue' });
        this.soleTraderNameInput=page.getByRole('textbox',{name:'Enter the name you use for'});
        this.soleTraderCheckbox=page.getByRole('checkbox',{name:'I confirm that I’m the only'});
        this.soleTraderContinueButton=page.getByRole('button', { name: 'Continue' });
        this.applyForBusinessAccountTitle=page.getByRole('heading', {name: 'You’re applying for a Business Account'})
        this.applyForBusinessAccountLink=page.getByRole('button', { name: 'Continue' });
        this.letGoTitle=page.getByRole('heading', { name: 'Let’s go' });
        this.letGocotinueButton=page.getByRole('button', { name: 'Continue' });
        this.savingYourApplicationText=page.getByLabel('We’re saving your application').getByRole('button', { name: 'Continue' })

   
    }

    async verifyPageTitle(){
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

   async clickGetABusinessAccountLink(){

   if (await this.cookies.isVisible()) {
       await this.cookies.click();
      }
      await this.getABusinessAccountLink.click();

   }

    async clickOpenBusinessAccountLink(){
        //await this.openBusinessAccountLink.scrollIntoViewIfNeeded();
        await this.openBusinessAccountLink.click();
        //await this.page.waitForTimeOut(3000);
    }

    async clickSoleTraderLink(){
        await this.soleTraderLink.click();
    };
   
        async clickAnnualTurnoverLink(){    
        await this.annualTurnoverLink.click();
    };

    async clickAnnualTurnoverContinueButton(){
        await this.annualTurnoverContinueButton.click();
     }

   async NextExpectContinueButton(){
      await expect(this.expectTitle).toBeVisible();

     if (await this.cookies.isVisible()) {
       await this.cookies.click();
      }
        await this.nextContinueButton.click();
   }
   async enterEmailAddress(email){
    await this.emailAddressInput.fill(email);
   }

   async clickSendCodeButton(){
    await this.sendCodebutton.click();
    await this.page.waitForTimeout(60000);
   }

   async clickEmailPasscodeContinueButton(){
    await this.emailPasscodeInput.click();
   }

   async enterMobileNumber(mobileNumber){
    await this.mobileInput.fill(mobileNumber);
   }
    
    async clickMobileSendCodeButton(){  
    await this.mobileSendCodeButton.click();
    await this.page.waitForTimeout(60000);
    }

    async clickMobilePasscodeContinueButton(){
        await this.mobilePasscodeInput.click();
    }

    async enterSoleTraderName(name){
        await this.soleTraderNameInput.fill(name);
    }

    async clickSoleTraderCheckbox(){
        await this.soleTraderCheckbox.check();
   };

    async clickSoleTraderContinueButton(){
        await this.soleTraderContinueButton.click();
    }

    async clickApplyForBusinessAccountLink(){
        //await this.page.waitForLoadState('load',{timeout:10000});
        await expect(this.applyForBusinessAccountTitle).toBeVisible();
        await this.applyForBusinessAccountLink.click();
    }

    async verifyLetGoTitle(){
        await expect(this.letGoTitle).toBeVisible();
    }

    async clickLetGoContinueButton(){
        await this.letGocotinueButton.click();
    }

    // Perform actions on the popup page
 //   async waitForPop(){
    //    page.on('popup', async popup => {
 // await popup.waitForLoadState();
    
  //});
   // }

    async clickSavingYourApplicationContinueButton(){
        await this.savingYourApplicationText.click();
    }
  };

   