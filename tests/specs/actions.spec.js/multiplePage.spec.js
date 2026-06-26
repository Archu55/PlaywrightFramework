import {test,expect} from '@playwright/test';
test('multiple page handling',async({page,context})=>{
    await page.goto('https://demoqa.com/browser-windows?utm_source=chatgpt.com');
    const newPagePromise=context.waitForEvent('page');
    await page.getByRole('button',{name:'New Tab'}).click();
    const newPage=await newPagePromise;
    await expect(newPage.getByRole('heading',{name:'This is a sample page'})).toBeVisible();
   // await expect(newPage.getByRole('heading',{level:1})).toHaveText('This is a sample page'); 
   await newPage.close(); 
});

//new window

test('multiple window handling',async({page,context})=>{
    await page.goto('https://demoqa.com/browser-windows');
    const newWindowPromise=context.waitForEvent('page');
    await page.getByRole('button',{name:'New Window'}).click();
    const newWindow=await newWindowPromise;
    await expect(newWindow.getByRole('heading',{name:'This is a sample page'})).toBeVisible();
    await newWindow.close();
});

//popUp
/*
test.only('popUp handling',async({page,context})=>{
    await page.goto('https://demoqa.com/alerts');
    const popUpPromise=context.waitForEvent('popup');
    await page.getByRole('link',{name:'Alerts'}).click();
    await page.locator('#alertButton').click();
    const newPopUp=await popUpPromise;
    await expect(newPopUp.getByRole('heading',{name:'This is a sample page'})).toBeVisible();
    await newPopUp.close();
});*/


test.only('Alerts handling',async({page,context})=>{
    await page.goto('https://demoqa.com/alerts');
    await page.getByRole('link',{name:'Alerts'}).click();
    page.on('dialog',async(dialog)=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('You clicked a button');
        await dialog.accept();
 } );     
      await page.locator('#alertButton').click();
});





