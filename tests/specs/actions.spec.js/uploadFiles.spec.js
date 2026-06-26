import {test,expect} from '@playwright/test';
test.only('single file upload',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.waitForSelector('#file-upload');
    await page.locator('#file-upload').setInputFiles('tests\\uploadFiles\\testFile1.pdf');
    await page.locator('#file-submit').click();
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    
});

test('multiple file upload',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles(['tests\\uploadFiles\\testFile1.pdf','tests\\uploadFiles\\testFile2.pdf']);

});

