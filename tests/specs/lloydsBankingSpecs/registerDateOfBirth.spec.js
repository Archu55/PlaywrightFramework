import {test} from '../../fixtures/businessFixture';
test('verify the date of birth page',async ({registerDateOfBirthPage})=>{
    await registerDateOfBirthPage.enterDateOfBirth('01','01','1990');
});