import {test} from "../../fixtures/businessFixture";
test('Verify nationality and tax page',async ({nationalityAndTaxPage})=>{
    await nationalityAndTaxPage.nationalityAndTax();
});