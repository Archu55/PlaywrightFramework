
import {test} from '../../fixtures/businessFixture';
test('verify the personal details page', async ({resisterPersonalDetailsPage})=> {
    await resisterPersonalDetailsPage.enterPersonalDetails('Mr','Archana','Kumari','Singh');

    
}); 
