import {test as base} from '@playwright/test';
import {BusinessAccountHomePage} from '../pageObjectModel/lloydsBankingAutomation/BusinessAccountHomePage.js';
import{ResisterPersonalDetailsPage} from '../pageObjectModel/lloydsBankingAutomation/resisterPersonalDetailsPage.js';
import {RegisterDateOfBirthPage} from '../pageObjectModel/lloydsBankingAutomation/RegisterDateOfBirthPage.js';
import {RegisterPersonalAddressPage} from '../pageObjectModel/lloydsBankingAutomation/RegisterPersonalAddressPage.js';


export const test=base.extend({
    businessAccountHomePage: async ({page},use ) =>{
       const businessAccountHomePage=new BusinessAccountHomePage(page); 
         await page.goto('https://www.lloydsbank.com/business.html');
         await use(businessAccountHomePage);
    },

           resisterPersonalDetailsPage: async ({page},use ) =>{
           const resisterPersonalDetailsPage=new ResisterPersonalDetailsPage(page); 
              await use(resisterPersonalDetailsPage);
        },

       registerDateOfBirthPage: async ({page},use ) =>{
           const registerDateOfBirthPage=new RegisterDateOfBirthPage(page); 
              await use(registerDateOfBirthPage);  
         },
         registerPersonalAddressPage: async ({page},use ) =>{
           const registerPersonalAddressPage=new RegisterPersonalAddressPage(page); 
              await use(registerPersonalAddressPage);  
         },

         nationalityAndTaxPage:async ({page},use)=>{
            const nationalityAndTaxPage=new NationalityAndTaxPage(page);
            await use(nationalityAndTaxPage);
         },

         exitAccountcheckPage:async ({page},use)=>{
            const exitAccountcheckPage=new ExitAccountCheckPage(page);
            await use(exitAccountcheckPage);
         },

         registerSicAllResultPage:async ({page},use)=>{
            const registerSicAllResultPage=new RegisterSicAllResultPage(page);
            await use(registerSicAllResultPage);
         }

});

export {expect} from '@playwright/test';