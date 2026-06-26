import {test as base} from '@playwright/test';
import {SwaggerPracticeUiPage} from '../pageObjectModel/SwaggerPracticeUiPage.js';
import {BillPayUiPage} from '../pageObjectModel/BillPayUiPage.js';

export const test=base.extend({
    swaggerPracticeUiPage: async ({page},use ) =>{
       const swaggerPracticeUiPage=new SwaggerPracticeUiPage(page);
       await page.goto('https://gauravkhurana.com/practise-api/');
       await use(swaggerPracticeUiPage);
    },

    billPayUiPage:async ({page},use) =>{
       const billPayUiPage=new BillPayUiPage(page);
       await use(billPayUiPage); 
    },
  

})

export {expect} from '@playwright/test';

