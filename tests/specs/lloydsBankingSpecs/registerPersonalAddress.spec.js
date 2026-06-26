import {test} from '../../fixtures/businessFixture';
test('verify the personal address page',async ({registerPersonalAddressPage})=>{
    await registerPersonalAddressPage.enterRegisterPersonalAddress('10','IG1 2FJ','FLAT 90,ICON BUILDING,39 ILFORD HILL,ILFORD');
    await registerPersonalAddressPage.clickConfirmAddressButton();
    await registerPersonalAddressPage.clickContinueButton();
}     
);  