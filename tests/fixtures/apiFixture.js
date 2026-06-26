import { test as base } from '@playwright/test';
import { UsersApiPage } from '../pages/UsersApiPage';

export const test = base.extend({

  usersApi: async ({ request }, use) => {

    const usersApi = new UsersApiPage(request);

    await use(usersApi);

  }

}); 


