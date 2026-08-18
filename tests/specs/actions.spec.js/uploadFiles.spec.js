import {test,expect} from '@playwright/test';
import path from 'path';
const filePath1 = path.resolve(__dirname, '../../uploadFiles/testFile1.pdf');
const filePath2 = path.resolve(__dirname, '../../uploadFiles/testFile2.pdf');
test.only('single file upload',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.waitForSelector('#file-upload');
    await page.locator('#file-upload').setInputFiles(filePath1);
    await page.locator('#file-submit').click();
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    
});

test('multiple file upload',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles([filePath1, filePath2]);

});

