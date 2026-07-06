import {test} from '@playwright/test';

import { General } from '../lib/General';

test ('TC004_Empdlt', async({page})=>{

    let Object = new General (page);
    await Object.OpenApp();
    await Object.login();
    await Object.Empdelete();
    await Object.logout();
});