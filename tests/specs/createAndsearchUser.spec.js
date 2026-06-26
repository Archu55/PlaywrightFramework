import {test,expect} from '../fixtures/pageFixture';
test('Bill pay app create user', async({swaggerPracticeUiPage,billPayUiPage})=> {

    await swaggerPracticeUiPage.launchPracticeUiPage();
    await billPayUiPage.verifyPageTitle();
    await billPayUiPage.searchUser('data.test4@test.com');
    await billPayUiPage.verifySearchUserEmail('data.test4@tes.com');

});
